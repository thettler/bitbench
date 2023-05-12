---
title: "PHT: Building Typescript for PHP"
description: In this first Blog post of mine i talk about the things you can expect from this Blog and my future plans.
date: '2022-03-25'
categories:
  - PHP
  - RegEx
published: true
---


## Introduction
------------

PHP is great, I love to write PHP it has a beautiful Ecosystem and it gets better and better with each new version. But there are also some things about PHP that are not that great. For Example: No Generics, or any build in static analysis or type checker that would tell me before runtime if something is wrong.

![Code Image](/code.jpg)
Of course there a Packages for that, like PHPStan or Psalm, which are great, but you need to write DocBlocks, to really benefit from them which is not ideal because it's more to write, it's interrupts the coding flow when I defining a function signature for example, and sometimes I have to double define types.

> Regardless I love the confident those tools give me when writing applications.

But how could we fix those issue, especially without splitting the community into the strict types camp and the more dynamic camp?

Well another ecosystem has already an answer. Javascript/TypeScript.

So why not do the same? Build a superset of PHP that simply compiles down to PHP?

In this post we will build just that, a little “compiler”. It will only be a proof of concept with limited features and probably a lot of bugs. The goal is to get a feeling, on how such thing could work in the PHP ecosystem. I will call it **PHT.**

> Why PHT? It stands for: PHP TypeProcessor. Does this acronym really make sense? No! But it sounds good and to be fair the PHP acronym is also a little far-fetched, so I think it is perfect :D

## The Concept
-----------

### How can we use the PHT in our PHP Applications

This is the central question. How can we include a new language with build process into a nice workflow with existing PHP.

My solution: We need to compile our PHT Code to PHP and then simply modify the composer autoload function to use the compiled PHP instead of the original PHT.

In a normal PHP Application we use PSR4 and Composer to load our files. Every time we use a class an autoload function gets triggered. This Function simply looks at the namespace of the class and converts it into a file path and includes the file. This function looks something like this:
```php
function autoload(string $class): void {
    $file = $this->classToFilePath($class);
    include $file;
}
```
> Of course in the real world this function is a bit bigger.

So this seems like the perfect place to hook into the autoloading and simply point all of our PHT classes to a compiled .php file. More on that later.

### How can we compile PHT to PHP

So now that we know, how we can use compiled PHP files inside our Applications, we need to figure out how can we compile our PHT code?

To achieve this there are two different options.

1.  Writing a real compiler with Lexer, Parser and AST
2.  Use some RegEx and string manipulation to convert a .pht file to a .php file

The only right answer, if we want to build a real language with type checking, is of course Option 1 the Compiler. So we will take Option 2! ¯\\_(ツ)_/¯

Why? The compiler gives us everything we need for type checking and more, but it is also a ton of work, and we only want to do a quick proof of concept.

So we will use RegEx and transform the files to PHP with DocBlocks for PHPStan, to still get some of that sweet static analysis .This will be buggy and can’t reflect all of PHPs features but for now this is fine.

## The Syntax
----------

So now is time for the fun part. How should our new language look.  
First we will define a feature set that we want to implement:

*   Generics
*   Typed variables
*   Support for the PHPStan Types like `class-string` or typed Arrays like `string[]`
*   And a bit of syntax sugar
    *   using `fn` instead of `function` for defining every method and function
    *   the visibility of class members are `protected` if nothing is specified
    *   `public` is renamed to `pub`
    *   if no return type is specified we will set `void`

So PHT looks like this:
```php
class MyPHT<T> {
   $protectedAttribute: string;

   pub $publicAttribute: string;

   private $privateAttribute: T;

   fn someMethod<A>(A $param): A {
      return $param;
   }

   pub fn someThing(): classString {
      $class: classString = 'MyPHT';

      return $class;
   }‚
}
```
and will compile into this:
```php
/**
* @template T
*/
class MyPHT {
   protected string $protectedAttribute;

   public string $publicAttribute;

   /** @var T */
   private mixed $privateAttribute;

   /**
   * @template A
   * @param A $param
   * @return A
   */
   protected function someMethod(mixed $param): mixed {
      return $param;
   }

   /**
   * @return class-string
   */
   public function someThing(): string {
      /** @var class-string $class */
      $class = 'MyPHT';

      return $class;
   }
}
```
## PHT to PHP transform
--------------------

Let’s start with the transforming. I will not go into detail on this step because its just RegEx and string replacements. So here just a quick overview:

We create a main Compiler class that has one method and receives a string and returns a string. The receiving string will be our PHT code and the returning string will be our PHP code. So it looks something like this:
```php
class PhtCompiler implements Compiler
{
    public function compile(string $phtCode): string
    {
        $phtCode = trim($phtCode);
        $phtCode = (new ClassCompiler())->compile($phtCode);
        $phtCode = (new FunctionCompiler())->compile($phtCode);
        return (new VariableCompiler())->compile($phtCode);
    }
}
```
Inside the `compile()` we call different compilers that handle a specific feature like Classes or Variables. They implement the same `Compiler` interface and looking something like this:
```php
class VariableCompiler implements Compiler
{
    public const REGEX = '/(\$\w+)\s*:\s*([^=|^\s]+)*\s*([=|+|-|?]+)\s*([^;|^\s]+)*\s*;/m';

    public function compile(string $phtCode): string
    {
        preg_match_all(static::REGEX, $phtCode, $matches, PREG_SET_ORDER);

        foreach ($matches as [$match, $var, $type, $operator, $expression]) {
            $type = Types::phtToStan($type);
            $phtCode = str_replace($match, $this->render($type, $var, $operator, $expression), $phtCode);
        }

        return $phtCode;
    }

    protected function render(string $type, string $varname, string $operator, string $expression): string
    {
        return <<<EOF
/** @var $type $varname */
$varname $operator $expression;
EOF;
    }
}
```

## Autoloading PHT
---------------

Now the interesting part. How can we hook into the autoloading of php.

As it turns out It's actually pretty simple. PHP provides us with `spl_`\* functions that let us define our autoload behavior. We can simply register our own autoloader that redirects all PHT Classes to a compiled PHP file:
```php
use Composer\Autoload\ClassLoader;
use function Composer\Autoload\includeFile;

class PHT
{
    public static function autoload(
            // Composers autoloader
        ClassLoader $loader,
            // this is the default directory for our pht files
        string $src = 'app',
            // this is the default output directory for our compiled php files
        string $target = '.pht'
    ) {
            // Here we register our autoload function
        spl_autoload_register(function ($class) use ($src, $target, $loader) {
            
                  // first we check if composer can find the class, if it can 
                  // we know its a simple PHP class and we do nothing
                  if ($file = $loader->findFile($class)) {
                includeFile($file);

                return true;
            }

                  // here it gets hacky we want to use the findFileWithExtension() on the 
                  // Composer Class loader, but it is private, so we simply use reflection 
                  // and make the method public available.
                  // Not something for production but its good enough for now
            $loaderRef = (new \ReflectionClass($loader));
            $method = $loaderRef->getMethod('findFileWithExtension');
            $method->setAccessible(true);

                  // Then we invoke the method and modify the path so that it points to our
                  // PHP file and include it then.
            if ($file = $method->invoke($loader, $class, '.pht')) {
                $file = str_replace($src, $target, $file);
                $file = rtrim($file, '.pht').'.php';
                includeFile($file);

                return true;
            }

            return null;
        }, true, true);
    }
}
```
This implementation is not perfect, but it works, for now.

> Can you spot a potential bug? There is at least one. Tell me on twitter [@bitbench](https://twitter.com/bitbench)

Now we just need to call it after the import of our composer `autoload.php`

In Laravel this file is at `public/index.php`
```php
$loader = require __DIR__.'/../vendor/autoload.php';
Thettler\Pht\PHT::autoload($loader);
```
## Make it a usable Command
------------------------

Now we only need to pack everything into a usable command, and we are good to go. We are using the Symfony Console, Flysystem and React PHP to build a little naive file watcher and trigger the file compilations.
```php
class DevCommand extends Command
{
      
   // ...

    /**
     * Configure the command options.
     *
     * @return void
     */
    protected function configure()
    {
        $this
            ->setName('dev')
            ->setDescription('Watch and compile pht to php')
            ->addOption('src', null, InputOption::VALUE_OPTIONAL, '', 'app')
            ->addOption('target', null, InputOption::VALUE_OPTIONAL, '', '.pht');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->src = trim($input->getOption('src'), '/');
        $this->target = trim($input->getOption('target'), '/');

        $output->writeln('Started Watching for .pht files:');

            // not great but good enough 
        $this->loop->addPeriodicTimer(.5, function () use ($output) {
            $files = $this->getPhtFiles($this->src);

            /** @var FileAttributes $file */
            foreach ($files as $file) {
                $this->compilePhtFile($file);

                $this->changed[$file->path()] = $file->lastModified();

                $output->write('Updated: '.$file->path().PHP_EOL);
            }
        });

        $this->loop->run();

        return 0;
    }

   //...
}
```
So now we can simply call our command and the File watcher will compile all .pht files to php.

> If you use the package [https://github.com/thettler/pht](https://github.com/thettler/pht) this command looks like `./vendor/bin/pht dev`

## Conclusion
----------

And that's it. We can now write PHT and use it inside our existing Code. If you want to try it out yourself I have everything on GitHub. You can install it into your projects to test it out. I tested it with Laravel. But be aware that it is probably buggy and only supports classes [https://github.com/thettler/pht](https://github.com/thettler/pht)

So what are my final thoughts on this idea:

As I have shown PHT, or something different, is definitely possible. I think the whole community could benefit from a Typescript in PHP.

So everything comes down to some simple questions:

1.  Does it work: Yes!
2.  Can it work on an existing Codebase: Yes!
3.  Is it Fun to write: Yes? At the moment with no IDE support it is of course not fun but this will change.

So I am hooked on this idea and will keep on working on it. Now that I know it could work. I will try the more serious option with a real compiler inspired by the Typescript one next. But realistically this is a huge project that can’t be done by only one developer. So I invite the whole community to join in, and maybe we can create together our own Typescript.

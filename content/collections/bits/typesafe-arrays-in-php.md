---
id: 620e0950-d6c2-4eda-9e34-fb8fb7da3910
blueprint: bits
title: 'Typesafe Arrays in PHP'
description:
  -
    type: paragraph
    content:
      -
        type: text
        text: 'There are no typesafe Arrays by default in PHP. But you could get arround this with docblocks, static analysis or use this little handy trick:'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Its possible to use the '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'https://wiki.php.net/rfc/spread_operator_for_array'
              rel: null
              target: _blank
              title: 'Spread Operator'
        text: 'Spread Operator'
      -
        type: text
        text: ' that PHP provides to type hint array values. '
  -
    type: paragraph
    content:
      -
        type: text
        text: 'This only works with the last function parameter or if there is only one parameter. But even with this limitation its quite nice. '
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Also i personaly like the api the '
      -
        type: text
        marks:
          -
            type: link
            attrs:
              href: 'https://wiki.php.net/rfc/spread_operator_for_array'
              rel: null
              target: _blank
              title: 'Spread Operator'
        text: 'Spread Operator'
      -
        type: text
        text: ' provides when calling the function without the brakets. '
code:
  code: |-
    <?php

    function notSafeArray(array $users):void {
        foreach ($users as $user) {
            //❌ no IDE autocompletion without docblocks
            echo $user->email;
        }
    }

    //❌ Only fails at the echo statement if there is no email attribute.
    notSafeArray([new User, new Account, new Something]);


    function typeSafeArray(User ...$users):void {
        foreach ($users as $user) {
            //✅ IDE autocompletion by default with no docblocks
            echo $user->email;
        }
    }

    //✅ Fails directly at the function call
    typeSafeArray(new User, new Account, new Something);
    //✅ If you already have an array
    typeSafeArray(...[new User, new Account, new Something]);
  mode: php
technology:
  - php
author: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
seotamic_title: title
seotamic_title_prepend: true
seotamic_title_append: true
seotamic_meta_description: empty
seotamic_open_graph_title: title
seotamic_open_graph_description: general
seotamic_twitter_title: title
seotamic_twitter_description: custom
updated_by: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
updated_at: 1642881487
seotamic_custom_twitter_description: 'With this handy little trick you can achive typesafe arrays in PHP without the need of docblocks or third party packages.'
seotamic_image: blog/TypeSafe-Arrays.jpg
---

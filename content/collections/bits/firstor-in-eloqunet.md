---
id: d55e2615-d4ec-4309-8116-dfe8f5ccf6b6
blueprint: bits
title: 'FirstOr in Eloqunet'
description: 'The ''firstOr'' method is a nice and quick way to trigger a 404 when a model does not exist.'
code:
  code: |-
    <?php
    User::findOrFail(-1);

    /**
    * Some interessting stuff
    */
    c
  mode: php
technology:
  - laravel
  - eloquent
author: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
updated_by: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
updated_at: 1641231216
replicator:
  -
    code:
      code: 'User::findOrFail(-1);'
      mode: php
    textarea: 'Instead of doing this.'
    type: new_set
    enabled: true
  -
    code:
      code: 'User::where(-1)->firstOr(fn() => redirect(''/no-user''));'
      mode: php
    textarea: 'Do that'
    type: new_set
    enabled: true
code_stack:
  -
    code:
      code: 'User::findOrFail(-1);'
      mode: php
    description: 'Instead of Doing this'
    type: new_set
    enabled: true
  -
    code:
      code: |-
        public function boot()
        {
          Paginator::defaultView('vendor/tailwind');

          Paginator::defaultSimpleView('vendor/simple-tailwind');
        }
      mode: php
    description: 'The ''firstOr'' method is a nice and quick way to trigger a 404 when a model does not exist.'
    type: new_set
    enabled: true
---

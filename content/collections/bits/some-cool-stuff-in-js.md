---
id: abfc1b09-9815-4c9f-8166-f25edbc2624f
blueprint: bits
title: 'Some Cool Stuff in JS'
description: 'Here can you see some cool stuff about somthing... i dont know what exactly because this is just some Placholder text.'
code:
  code: |-
    import Alpine from 'alpinejs'
    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/atom-one-dark-reasonable.css';
    import javascript from 'highlight.js/lib/languages/javascript';
    import php from 'highlight.js/lib/languages/php';
    import typescript from 'highlight.js/lib/languages/typescript';

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('typescript', typescript);
    hljs.highlightAll();

    window.Alpine = Alpine

    Alpine.start()
  mode: javascript
technology:
  - javascript
author: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
updated_by: 1cfd3a17-8ebc-4c6e-a6a7-74b95b4fcd53
updated_at: 1641229348
---

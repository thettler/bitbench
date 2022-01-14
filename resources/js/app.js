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

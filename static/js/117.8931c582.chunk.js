(this["webpackJsonp@uiw/react-markdown-editor"]=this["webpackJsonp@uiw/react-markdown-editor"]||[]).push([[117],{162:function(a,e){var t;(t=Prism).languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:t.languages.lua}},t.hooks.add("before-tokenize",(function(a){t.languages["markup-templating"].buildPlaceholders(a,"etlua",/<%[\s\S]+?%>/g)})),t.hooks.add("after-tokenize",(function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"etlua")}))}}]);
//# sourceMappingURL=117.8931c582.chunk.js.map
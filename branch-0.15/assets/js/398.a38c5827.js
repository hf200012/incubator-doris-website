(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{835:function(n,t,e){"use strict";e.r(t);var s=e(55),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"json-quote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-quote"}},[n._v("#")]),n._v(" json_quote")]),n._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" Description")]),n._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[n._v("#")]),n._v(" Syntax")]),n._v(" "),e("p",[e("code",[n._v("VARCHAR json_quote(VARCHAR)")])]),n._v(" "),e("p",[n._v('Enclose json_value in double quotes ("), escape special characters contained.')]),n._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('MySQL> SELECT json_quote(\'null\'), json_quote(\'"null"\');\n+--------------------+----------------------+\n| json_quote(\'null\') | json_quote(\'"null"\') |\n+--------------------+----------------------+\n| "null"             | "\\"null\\""           |\n+--------------------+----------------------+\n\n\nMySQL> SELECT json_quote(\'[1, 2, 3]\');\n+-------------------------+\n| json_quote(\'[1, 2, 3]\') |\n+-------------------------+\n| "[1, 2, 3]"             |\n+-------------------------+\n\n\nMySQL> SELECT json_quote(null);\n+------------------+\n| json_quote(null) |\n+------------------+\n| NULL             |\n+------------------+\n\nMySQL> select json_quote("\\n\\b\\r\\t");\n+------------------------+\n| json_quote(\'\\n\\b\\r\\t\') |\n+------------------------+\n| "\\n\\b\\r\\t"             |\n+------------------------+\n')])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),e("p",[n._v("json_quote")])])}),[],!1,null,null,null);t.default=a.exports}}]);
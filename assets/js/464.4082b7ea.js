(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{918:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"regexp-extract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regexp-extract"}},[t._v("#")]),t._v(" regexp_extract")]),t._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("h3",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),r("p",[t._v("'VARCHAR regexp 'extract (VARCHAR str, VARCHAR pattern, int pos)")]),t._v(" "),r("p",[t._v("The string STR is matched regularly and the POS matching part which conforms to pattern is extracted. Patterns need to match exactly some part of the STR to return to the matching part of the pattern. If there is no match, return an empty string.")]),t._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nmysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n")])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),r("p",[t._v("REGEXP_EXTRACT,REGEXP,EXTRACT")])])}),[],!1,null,null,null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{899:function(t,a,r){"use strict";r.r(a);var e=r(56),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"locate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[t._v("#")]),t._v(" locate")]),t._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("h3",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),r("p",[r("code",[t._v("INT LOCATION (VARCHAR substrate, VARCHAR str [, INT pos]]")])]),t._v(" "),r("p",[t._v("Returns where substr appears in str (counting from 1). If the third parameter POS is specified, the position where substr appears is found from the string where STR starts with POS subscript. If not found, return 0")]),t._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mysql> SELECT LOCATE('bar', 'foobarbar');\n+----------------------------+\n| locate('bar', 'foobarbar') |\n+----------------------------+\n|                          4 |\n+----------------------------+\n\nmysql> SELECT LOCATE('xbar', 'foobar');\n+--------------------------+\n| locate('xbar', 'foobar') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n\nmysql> SELECT LOCATE('bar', 'foobarbar', 5);\n+-------------------------------+\n| locate('bar', 'foobarbar', 5) |\n+-------------------------------+\n|                             7 |\n+-------------------------------+\n")])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),r("p",[t._v("LOCATE")])])}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{934:function(t,e,n){"use strict";n.r(e);var a=n(56),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"unhex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unhex"}},[t._v("#")]),t._v(" unhex")]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("p",[n("code",[t._v("VARCHAR unhex(VARCHAR str)")])]),t._v(" "),n("p",[t._v("Enter a string, if the length of the string is 0 or an odd number, an empty string is returned;\nIf the string contains characters other than "),n("code",[t._v("[0-9], [a-z], [A-Z]")]),t._v(", an empty string is returned;\nIn other cases, every two characters are a group of characters converted into hexadecimal, and then spliced into a string for output.")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mysql> select unhex('@');\n+------------+\n| unhex('@') |\n+------------+\n|            |\n+------------+\n\nmysql> select unhex('41');\n+-------------+\n| unhex('41') |\n+-------------+\n| A           |\n+-------------+\n\nmysql> select unhex('4142');\n+---------------+\n| unhex('4142') |\n+---------------+\n| AB            |\n+---------------+\n")])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),n("p",[t._v("UNHEX")])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{891:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hex"}},[e._v("#")]),e._v(" hex")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[a("code",[e._v("VARCHAR hex(VARCHAR str)")])]),e._v(" "),a("p",[a("code",[e._v("VARCHAR hex(BIGINT num)")])]),e._v(" "),a("p",[e._v("If the input parameter is a number, the string representation of the hexadecimal value is returned;")]),e._v(" "),a("p",[e._v("If the input parameter is a string, each character will be converted into two hexadecimal characters, and all the characters after the conversion will be spliced into a string for output")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("input string\n\nmysql> select hex('1');\n+----------+\n| hex('1') |\n+----------+\n| 31       |\n+----------+\n\nmysql> select hex('@');\n+----------+\n| hex('@') |\n+----------+\n| 40       |\n+----------+\n\nmysql> select hex('12');\n+-----------+\n| hex('12') |\n+-----------+\n| 3132      |\n+-----------+\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("intput num\n\nmysql> select hex(12);\n+---------+\n| hex(12) |\n+---------+\n| C       |\n+---------+\n\nmysql> select hex(-1);\n+------------------+\n| hex(-1)          |\n+------------------+\n| FFFFFFFFFFFFFFFF |\n+------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("HEX")])])}),[],!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1092],{1543:function(s,t,e){"use strict";e.r(t);var n=e(56),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"substring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#substring"}},[s._v("#")]),s._v(" substring")]),s._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("p",[e("code",[s._v("VARCHAR substring(VARCHAR str, INT pos[, INT len])")])]),s._v(" "),e("p",[s._v("没有 "),e("code",[s._v("len")]),s._v(" 参数时返回从位置 "),e("code",[s._v("pos")]),s._v(" 开始的字符串 "),e("code",[s._v("str")]),s._v(" 的一个子字符串，\n在有 "),e("code",[s._v("len")]),s._v(" 参数时返回从位置 "),e("code",[s._v("pos")]),s._v(" 开始的字符串 "),e("code",[s._v("str")]),s._v(" 的一个长度为 "),e("code",[s._v("len")]),s._v(" 子字符串，\n"),e("code",[s._v("pos")]),s._v(" 参数可以使用负值，在这种情况下，子字符串是以字符串 "),e("code",[s._v("str")]),s._v(" 末尾开始计算 "),e("code",[s._v("pos")]),s._v(" 个字符，而不是开头,\n"),e("code",[s._v("pos")]),s._v(" 的值为 0 返回一个空字符串。")]),s._v(" "),e("p",[s._v("对于所有形式的 SUBSTRING()，要从中提取子字符串的字符串中第一个字符的位置为1。")]),s._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[s._v("#")]),s._v(" keyword")]),s._v(" "),e("p",[s._v("SUBSTRING")])])}),[],!1,null,null,null);t.default=a.exports}}]);
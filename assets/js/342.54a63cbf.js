(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{795:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"group-concat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-concat"}},[t._v("#")]),t._v(" group_concat")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("VARCHAR GROUP_CONCAT(VARCHAR str[, VARCHAR sep])")])]),t._v(" "),a("p",[t._v("This function is an aggregation function similar to sum (), and group_concat links multiple rows of results in the result set to a string. The second parameter, sep, is a connection symbol between strings, which can be omitted. This function usually needs to be used with group by statements.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n+-------+\n\nmysql> select GROUP_CONCAT(value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(value, \" \") from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, ' ') |\n+----------------------------+\n| a b c                      |\n+----------------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("GROUP_CONCAT,GROUP,CONCAT")])])}),[],!1,null,null,null);e.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1091],{1543:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"unhex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unhex"}},[e._v("#")]),e._v(" unhex")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[a("code",[e._v("VARCHAR unhex(VARCHAR str)")])]),e._v(" "),a("p",[e._v("输入字符串，如果字符串长度为0或者为奇数，返回空串；\n如果字符串中包含"),a("code",[e._v("[0-9]、[a-z]、[A-Z]")]),e._v("之外的字符，返回空串；\n其他情况每两个字符为一组转化为16进制后的字符，然后拼接成字符串输出")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select unhex('@');\n+------------+\n| unhex('@') |\n+------------+\n|            |\n+------------+\n\nmysql> select unhex('41');\n+-------------+\n| unhex('41') |\n+-------------+\n| A           |\n+-------------+\n\nmysql> select unhex('4142');\n+---------------+\n| unhex('4142') |\n+---------------+\n| AB            |\n+---------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("UNHEX")])])}),[],!1,null,null,null);t.default=s.exports}}]);
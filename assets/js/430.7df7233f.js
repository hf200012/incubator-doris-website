(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{883:function(t,a,e){"use strict";e.r(a);var n=e(56),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"conv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conv"}},[t._v("#")]),t._v(" conv")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("VARCHAR CONV(VARCHAR input, TINYINT from_base, TINYINT to_base)")]),t._v(" "),e("code",[t._v("VARCHAR CONV(BIGINT input, TINYINT from_base, TINYINT to_base)")]),t._v("\nConvert the input number to the target base. The input base range should be within "),e("code",[t._v("[2,36]")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MySQL [test]> SELECT CONV(15,10,2);\n+-----------------+\n| conv(15, 10, 2) |\n+-----------------+\n| 1111            |\n+-----------------+\n\nMySQL [test]> SELECT CONV('ff',16,10);\n+--------------------+\n| conv('ff', 16, 10) |\n+--------------------+\n| 255                |\n+--------------------+\n\nMySQL [test]> SELECT CONV(230,10,16);\n+-------------------+\n| conv(230, 10, 16) |\n+-------------------+\n| E6                |\n+-------------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("CONV\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
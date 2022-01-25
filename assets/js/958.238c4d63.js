(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{1412:function(t,n,a){"use strict";a.r(n);var _=a(56),i=Object(_.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bitmap-and-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-and-count"}},[t._v("#")]),t._v(" bitmap_and_count")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("BigIntVal bitmap_and_count(BITMAP lhs, BITMAP rhs, ...)")])]),t._v(" "),a("p",[t._v("计算两个及以上输入bitmap的交集，返回交集的个数.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+---------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+---------------------------------------------------------------+\n|                                                             0 |\n+---------------------------------------------------------------+\n\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+----------------------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+----------------------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          1 |\n+----------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'));\n+-------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-------------------------------------------------------------------------------------------------------------+\n|                                                                                                           2 |\n+-------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                           0 |\n+-----------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL);\n+-------------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-------------------------------------------------------------------------------------------------------------------+\n|                                                                                                              NULL |\n+-------------------------------------------------------------------------------------------------------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("BITMAP_AND_COUNT,BITMAP\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[990],{1444:function(t,a,i){"use strict";i.r(a);var n=i(56),_=Object(n.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"bitmap-or"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-or"}},[t._v("#")]),t._v(" bitmap_or")]),t._v(" "),i("h2",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),i("h3",{attrs:{id:"syntax"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),i("p",[i("code",[t._v("BITMAP BITMAP_OR(BITMAP lhs, BITMAP rhs, ...)")])]),t._v(" "),i("p",[t._v("计算两个及以上的输入bitmap的并集，返回新的bitmap.")]),t._v(" "),i("h2",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("mysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL));\n+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL)) |\n+--------------------------------------------------------------------------------------------+\n| NULL                                                                                       |\n+--------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty()));\n+------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty())) |\n+------------------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+--------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+--------------------------------------------------------------------------------------------------------+\n| 1,2,3,4,5,10                                                                                           |\n+--------------------------------------------------------------------------------------------------------+\n")])])]),i("h2",{attrs:{id:"keyword"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("BITMAP_OR,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);
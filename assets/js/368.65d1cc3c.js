(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{821:function(t,a,n){"use strict";n.r(a);var r=n(56),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"bitmap-or-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-or-count"}},[t._v("#")]),t._v(" bitmap_or_count")]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("p",[n("code",[t._v("BigIntVal bitmap_or_count(BITMAP lhs, BITMAP rhs)")])]),t._v(" "),n("p",[t._v("Calculates the union of two or more input bitmaps and returns the number of union sets.")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("MySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+--------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+--------------------------------------------------------------+\n|                                                            3 |\n+--------------------------------------------------------------+\n\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+---------------------------------------------------------------------------+\n|                                                                         3 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+---------------------------------------------------------------------------+\n|                                                                         5 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty()) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         6 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL);\n+-------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL) |\n+-------------------------------------------------------------------------------------------------+\n|                                                                                            NULL |\n+-------------------------------------------------------------------------------------------------+\n")])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("BITMAP_OR_COUNT,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{824:function(t,e,a){"use strict";a.r(e);var r=a(56),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"orthogonal-bitmap-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect"}},[t._v("#")]),t._v(" orthogonal_bitmap_intersect")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("BITMAP ORTHOGONAL_BITMAP_INTERSECT(bitmap_column, column_to_filter, filter_values)")]),t._v("\nThe bitmap intersection function, the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select orthogonal_bitmap_intersect(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+-------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------+\n| NULL                                                                          |\n+-------------------------------------------------------------------------------+\n1 row in set (3.505 sec)\n\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("ORTHOGONAL_BITMAP_INTERSECT,BITMAP\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
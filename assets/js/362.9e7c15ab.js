(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{815:function(t,a,e){"use strict";e.r(a);var s=e(56),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bitmap-subset-in-range"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-subset-in-range"}},[t._v("#")]),t._v(" bitmap_subset_in_range")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("BITMAP BITMAP_SUBSET_IN_RANGE(BITMAP src, BIGINT range_start, BIGINT range_end)")])]),t._v(" "),e("p",[t._v("Return subset in specified range (not include the range_end).")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 0, 9)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3,4,5 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 2, 3)) value;\n+-------+\n| value |\n+-------+\n| 2     |\n+-------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("BITMAP_SUBSET_IN_RANGE,BITMAP_SUBSET,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
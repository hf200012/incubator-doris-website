(window.webpackJsonp=window.webpackJsonp||[]).push([[931],{1384:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"approx-count-distinct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approx-count-distinct"}},[t._v("#")]),t._v(" APPROX_COUNT_DISTINCT")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("APPROX_COUNT_DISTINCT(expr)")])]),t._v(" "),e("p",[t._v("返回类似于 COUNT(DISTINCT col) 结果的近似值聚合函数。")]),t._v(" "),e("p",[t._v("它比 COUNT 和 DISTINCT 组合的速度更快，并使用固定大小的内存，因此对于高基数的列可以使用更少的内存。")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------+\n| approx_count_distinct(`query_id`) |\n+-----------------+\n| 17721           |\n+-----------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("APPROX_COUNT_DISTINCT")])])}),[],!1,null,null,null);a.default=r.exports}}]);
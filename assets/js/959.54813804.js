(window.webpackJsonp=window.webpackJsonp||[]).push([[959],{1412:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hll-union-agg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hll-union-agg"}},[t._v("#")]),t._v(" HLL_UNION_AGG")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("HLL_UNION_AGG(hll)")])]),t._v(" "),e("p",[t._v("HLL是基于HyperLogLog算法的工程实现，用于保存HyperLogLog计算过程的中间结果")]),t._v(" "),e("p",[t._v("它只能作为表的value列类型、通过聚合来不断的减少数据量，以此来实现加快查询的目的")]),t._v(" "),e("p",[t._v("基于它得到的是一个估算结果，误差大概在1%左右，hll列是通过其它列或者导入数据里面的数据生成的")]),t._v(" "),e("p",[t._v("导入的时候通过hll_hash函数来指定数据中哪一列用于生成hll列，它常用于替代count distinct，通过结合rollup在业务上用于快速计算uv等")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("HLL_UNION_AGG,HLL,UNION,AGG")])])}),[],!1,null,null,null);a.default=r.exports}}]);
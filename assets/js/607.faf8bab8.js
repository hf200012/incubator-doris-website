(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1061:function(e,t,a){"use strict";a.r(t);var r=a(56),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("#HLL (HyperLogLog)")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("HLL")]),e._v(" "),a("p",[e._v("HLL cannot be used as a key column, and the aggregation type is HLL_UNION when create table.\nThe user does not need to specify the length and default value.\nThe length is controlled within the system according to the degree of data aggregation.\nAnd HLL columns can only be queried or used through the matching hll_union_agg, hll_raw_agg, hll_cardinality, and hll_hash.")]),e._v(" "),a("p",[e._v("HLL is approximate count of distinct elements, and its performance is better than Count Distinct when the amount of data is large.\nThe error of HLL is usually around 1%, sometimes up to 2%.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- Query the accumulated UV per hour\n   where datekey=20200922\ngroup by hour order by 1\n) final;\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("HLL,HYPERLOGLOG")])])}),[],!1,null,null,null);t.default=n.exports}}]);
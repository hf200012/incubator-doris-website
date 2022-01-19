(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1052:function(e,t,a){"use strict";a.r(t);var n=a(56),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("#BITMAP")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("BITMAP")]),e._v(" "),a("p",[e._v("BITMAP cannot be used as a key column, and the aggregation type is BITMAP_UNION when building the table.\nThe user does not need to specify the length and default value. The length is controlled within the system according to the degree of data aggregation.\nAnd the BITMAP column can only be queried or used by supporting functions such as bitmap_union_count, bitmap_union, and bitmap_hash.")]),e._v(" "),a("p",[e._v("The use of BITMAP in offline scenarios will affect the import speed. In the case of a large amount of data, the query speed will be slower than HLL and better than Count Distinct.\nNote: If BITMAP does not use a global dictionary in real-time scenarios, using bitmap_hash() may cause an error of about one-thousandth.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("select hour, BITMAP_UNION_COUNT(pv) over(order by hour) uv from(\n   select hour, BITMAP_UNION(device_id) as pv\n   from metric_table -- Query the accumulated UV per hour\n   where datekey=20200922\ngroup by hour order by 1\n) final;\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("BITMAP")])])}),[],!1,null,null,null);t.default=o.exports}}]);
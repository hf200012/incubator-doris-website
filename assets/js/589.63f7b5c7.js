(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{1042:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"show-data-skew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-data-skew"}},[t._v("#")]),t._v(" SHOW DATA SKEW")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("This statement is used to view the data skew of a table or a partition.\n\ngrammar:\n\n    SHOW DATA SKEW FROM [db_name.]tbl_name [PARTITION (p1)];\n\nDescription:\n\n\t1. Only one partition must be specified. For non-partitioned tables, the partition name is the same as the table name.\n\t2. The result will show the data volume of each bucket under the specified partition, and the proportion of the data volume of each bucket in the total data volume.\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. View the data skew of the table\n\n    SHOW DATA SKEW FROM db1.test PARTITION(p1);\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("SHOW, DATA, SKEW\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
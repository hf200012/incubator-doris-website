(window.webpackJsonp=window.webpackJsonp||[]).push([[1111],{1562:function(a,t,e){"use strict";e.r(t);var n=e(56),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"admin-compact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-compact"}},[a._v("#")]),a._v(" ADMIN COMPACT")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("该语句用于对指定表分区下的所有副本触发一次Compaction\n\n语法：\n\n    ADMIN COMPACT TABLE table_name PARTITION partition_name WHERE TYPE='BASE/CUMULATIVE'\n\n说明：\n\n    1. 该语句仅表示让系统尝试将分区下每一个副本的compaction任务提交给compaction线程池，并不保证每一个副本的compaction任务都能成功执行。\n    2. 该语句每次只支持对表下的单个分区执行compaction。\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("1. 对指定分区下的所有副本触发一次cumulative compaction\n\n    ADMIN COMPACT TABLE tbl PARTITION par01 WHERE TYPE='CUMULATIVE';\n\n2. 对指定分区下的所有副本触发一次base compaction\n\n    ADMIN COMPACT TABLE tbl PARTITION par01 WHERE TYPE='BASE';\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ADMIN,COMPACT\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
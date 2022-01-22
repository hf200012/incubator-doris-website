(window.webpackJsonp=window.webpackJsonp||[]).push([[1093],{1547:function(a,t,e){"use strict";e.r(t);var s=e(56),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"admin-repair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-repair"}},[a._v("#")]),a._v(" ADMIN REPAIR")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("该语句用于尝试优先修复指定的表或分区\n\n语法：\n\n    ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n\n说明：\n\n    1. 该语句仅表示让系统尝试以高优先级修复指定表或分区的分片副本，并不保证能够修复成功。用户可以通过 ADMIN SHOW REPLICA STATUS 命令查看修复情况。\n    2. 默认的 timeout 是 14400 秒(4小时)。超时意味着系统将不再以高优先级修复指定表或分区的分片副本。需要重新使用该命令设置。\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("1. 尝试修复指定表\n\n    ADMIN REPAIR TABLE tbl1;\n\n2. 尝试修复指定分区\n\n    ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ADMIN,REPAIR\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
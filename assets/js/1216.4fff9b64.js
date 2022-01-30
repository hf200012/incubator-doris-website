(window.webpackJsonp=window.webpackJsonp||[]).push([[1216],{1670:function(e,a,t){"use strict";t.r(a);var n=t(56),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-tablet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-tablet"}},[e._v("#")]),e._v(" SHOW TABLET")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('该语句用于显示 tablet 相关的信息（仅管理员使用）\n语法：\n    SHOW TABLET\n    [FROM [db_name.]table_name | tablet_id] [partiton(partition_name_1, partition_name_1)]\n    [where [version=1] [and backendid=10000] [and state="NORMAL|ROLLUP|CLONE|DECOMMISSION"]]\n    [order by order_column]\n    [limit [offset,]size]\n\n现在show tablet命令支持按照按照以下字段进行过滤：partition, index name, version, backendid,\nstate，同时支持按照任意字段进行排序，并且提供limit限制返回条数。\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 显示指定 db 的下指定表所有 tablet 信息\n    SHOW TABLET FROM example_db.table_name;\n\n    // 获取partition p1和p2的tablet信息\n    SHOW TABLET FROM example_db.table_name partition(p1, p2);\n\n    // 获取10个结果\n    SHOW TABLET FROM example_db.table_name limit 10;\n\n    // 从偏移5开始获取10个结果\n    SHOW TABLET FROM example_db.table_name limit 5,10;\n\n    // 按照backendid/version/state字段进行过滤\n    SHOW TABLET FROM example_db.table_name where backendid=10000 and version=1 and state="NORMAL";\n\n    // 按照version字段进行排序\n    SHOW TABLET FROM example_db.table_name where backendid=10000 order by version;\n\n    // 获取index名字为t1_rollup的tablet相关信息\n    SHOW TABLET FROM example_db.table_name where indexname="t1_rollup";\n    \n2. 显示指定 tablet id 为 10000 的 tablet 的父层级 id 信息\n    SHOW TABLET 10000;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW,TABLET,LIMIT\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
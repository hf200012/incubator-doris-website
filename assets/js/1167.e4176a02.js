(window.webpackJsonp=window.webpackJsonp||[]).push([[1167],{1617:function(e,a,n){"use strict";n.r(a);var t=n(56),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"restore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[e._v("#")]),e._v(" RESTORE")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('1. RESTORE\n该语句用于将之前通过 BACKUP 命令备份的数据，恢复到指定数据库下。该命令为异步操作。提交成功后，需通过 SHOW RESTORE 命令查看进度。仅支持恢复 OLAP 类型的表。\n语法：\n    RESTORE SNAPSHOT [db_name].{snapshot_name}\n    FROM `repository_name`\n    ON (\n        `table_name` [PARTITION (`p1`, ...)] [AS `tbl_alias`],\n        ...\n    )\n    PROPERTIES ("key"="value", ...);\n        \n说明：\n    1. 同一数据库下只能有一个正在执行的 BACKUP 或 RESTORE 任务。\n    2. ON 子句中标识需要恢复的表和分区。如果不指定分区，则默认恢复该表的所有分区。所指定的表和分区必须已存在于仓库备份中。\n    3. 可以通过 AS 语句将仓库中备份的表名恢复为新的表。但新表名不能已存在于数据库中。分区名称不能修改。\n    4. 可以将仓库中备份的表恢复替换数据库中已有的同名表，但须保证两张表的表结构完全一致。表结构包括：表名、列、分区、Rollup等等。\n    5. 可以指定恢复表的部分分区，系统会检查分区 Range 或者 List 是否能够匹配。\n    6. PROPERTIES 目前支持以下属性：\n            "backup_timestamp" = "2018-05-04-16-45-08"：指定了恢复对应备份的哪个时间版本，必填。该信息可以通过 `SHOW SNAPSHOT ON repo;` 语句获得。\n            "replication_num" = "3"：指定恢复的表或分区的副本数。默认为3。若恢复已存在的表或分区，则副本数必须和已存在表或分区的副本数相同。同时，必须有足够的 host 容纳多个副本。\n            "timeout" = "3600"：任务超时时间，默认为一天。单位秒。\n            "meta_version" = 40：使用指定的 meta_version 来读取之前备份的元数据。注意，该参数作为临时方案，仅用于恢复老版本 Doris 备份的数据。最新版本的备份数据中已经包含 meta version，无需再指定。\n')])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('1. 从 example_repo 中恢复备份 snapshot_1 中的表 backup_tbl 到数据库 example_db1，时间版本为 "2018-05-04-16-45-08"。恢复为 1 个副本：\n    RESTORE SNAPSHOT example_db1.`snapshot_1`\n    FROM `example_repo`\n    ON ( `backup_tbl` )\n    PROPERTIES\n    (\n        "backup_timestamp"="2018-05-04-16-45-08",\n        "replication_num" = "1"\n    );\n    \n2. 从 example_repo 中恢复备份 snapshot_2 中的表 backup_tbl 的分区 p1,p2，以及表 backup_tbl2 到数据库 example_db1，并重命名为 new_tbl，时间版本为 "2018-05-04-17-11-01"。默认恢复为 3 个副本：\n    RESTORE SNAPSHOT example_db1.`snapshot_2`\n    FROM `example_repo`\n    ON\n    (\n        `backup_tbl` PARTITION (`p1`, `p2`),\n        `backup_tbl2` AS `new_tbl`\n    )\n    PROPERTIES\n    (\n        "backup_timestamp"="2018-05-04-17-11-01"\n    );\n')])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("RESTORE\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
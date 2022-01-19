(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{661:function(t,a,e){"use strict";e.r(a);var s=e(43),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"临时分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#临时分区"}},[t._v("#")]),t._v(" 临时分区")]),t._v(" "),e("p",[t._v("在 0.12 版本中，Doris 支持了临时分区功能。")]),t._v(" "),e("p",[t._v("临时分区是归属于某一分区表的。只有分区表可以创建临时分区。")]),t._v(" "),e("h2",{attrs:{id:"规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),e("ul",[e("li",[t._v("临时分区的分区列和正式分区相同，且不可修改。")]),t._v(" "),e("li",[t._v("一张表所有临时分区之间的分区范围不可重叠，但临时分区的范围和正式分区范围可以重叠。")]),t._v(" "),e("li",[t._v("临时分区的分区名称不能和正式分区以及其他临时分区重复。")])]),t._v(" "),e("h2",{attrs:{id:"支持的操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的操作"}},[t._v("#")]),t._v(" 支持的操作")]),t._v(" "),e("p",[t._v("临时分区支持添加、删除、替换操作。")]),t._v(" "),e("h3",{attrs:{id:"添加临时分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加临时分区"}},[t._v("#")]),t._v(" 添加临时分区")]),t._v(" "),e("p",[t._v("可以通过 "),e("code",[t._v("ALTER TABLE ADD TEMPORARY PARTITION")]),t._v(" 语句对一个表添加临时分区：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01")\n("in_memory" = "true", "replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n')])])]),e("p",[t._v("通过 "),e("code",[t._v("HELP ALTER TABLE;")]),t._v(" 查看更多帮助和示例。")]),t._v(" "),e("p",[t._v("添加操作的一些说明：")]),t._v(" "),e("ul",[e("li",[t._v("临时分区的添加和正式分区的添加操作相似。临时分区的分区范围独立于正式分区。")]),t._v(" "),e("li",[t._v("临时分区可以独立指定一些属性。包括分桶数、副本数、是否是内存表、存储介质等信息。")])]),t._v(" "),e("h3",{attrs:{id:"删除临时分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除临时分区"}},[t._v("#")]),t._v(" 删除临时分区")]),t._v(" "),e("p",[t._v("可以通过 "),e("code",[t._v("ALTER TABLE DROP TEMPORARY PARTITION")]),t._v(" 语句删除一个表的临时分区：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n")])])]),e("p",[t._v("通过 "),e("code",[t._v("HELP ALTER TABLE;")]),t._v(" 查看更多帮助和示例。")]),t._v(" "),e("p",[t._v("删除操作的一些说明：")]),t._v(" "),e("ul",[e("li",[t._v("删除临时分区，不影响正式分区的数据。")])]),t._v(" "),e("h3",{attrs:{id:"替换分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换分区"}},[t._v("#")]),t._v(" 替换分区")]),t._v(" "),e("p",[t._v("可以通过 "),e("code",[t._v("ALTER TABLE REPLACE PARTITION")]),t._v(" 语句将一个表的正式分区替换为临时分区。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n')])])]),e("p",[t._v("通过 "),e("code",[t._v("HELP ALTER TABLE;")]),t._v(" 查看更多帮助和示例。")]),t._v(" "),e("p",[t._v("替换操作有两个特殊的可选参数：")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("strict_range")])]),t._v(" "),e("p",[t._v("默认为 true。当该参数为 true 时，表示要被替换的所有正式分区的范围并集需要和替换的临时分区的范围并集完全相同。当置为 false 时，只需要保证替换后，新的正式分区间的范围不重叠即可。下面举例说明：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("示例1")]),t._v(" "),e("p",[t._v("待替换的分区 p1, p2, p3 的范围 (=> 并集)：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n")])])]),e("p",[t._v("替换分区 tp1, tp2 的范围(=> 并集)：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n")])])]),e("p",[t._v("范围并集相同，则可以使用 tp1 和 tp2 替换 p1, p2, p3。")])]),t._v(" "),e("li",[e("p",[t._v("示例2")]),t._v(" "),e("p",[t._v("待替换的分区 p1 的范围 (=> 并集)：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[10, 50) => [10, 50)\n")])])]),e("p",[t._v("替换分区 tp1, tp2 的范围(=> 并集)：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[10, 30), [40, 50) => [10, 30), [40, 50)\n")])])]),e("p",[t._v("范围并集不相同，如果 "),e("code",[t._v("strict_range")]),t._v(" 为 true，则不可以使用 tp1 和 tp2 替换 p1。如果为 false，且替换后的两个分区范围 "),e("code",[t._v("[10, 30), [40, 50)")]),t._v(" 和其他正式分区不重叠，则可以替换。")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("use_temp_partition_name")])]),t._v(" "),e("p",[t._v("默认为 false。当该参数为 false，并且待替换的分区和替换分区的个数相同时，则替换后的正式分区名称维持不变。如果为 true，则替换后，正式分区的名称为替换分区的名称。下面举例说明：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("示例1")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n")])])]),e("p",[e("code",[t._v("use_temp_partition_name")]),t._v(" 默认为 false，则在替换后，分区的名称依然为 p1，但是相关的数据和属性都替换为 tp1 的。")]),t._v(" "),e("p",[t._v("如果 "),e("code",[t._v("use_temp_partition_name")]),t._v(" 默认为 true，则在替换后，分区的名称为 tp1。p1 分区不再存在。")])]),t._v(" "),e("li",[e("p",[t._v("示例2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n")])])]),e("p",[e("code",[t._v("use_temp_partition_name")]),t._v(" 默认为 false，但因为待替换分区的个数和替换分区的个数不同，则该参数无效。替换后，分区名称为 tp1，p1 和 p2 不再存在。")])])])])]),t._v(" "),e("p",[t._v("替换操作的一些说明：")]),t._v(" "),e("ul",[e("li",[t._v("分区替换成功后，被替换的分区将被删除且不可恢复。")])]),t._v(" "),e("h2",{attrs:{id:"临时分区的导入和查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#临时分区的导入和查询"}},[t._v("#")]),t._v(" 临时分区的导入和查询")]),t._v(" "),e("p",[t._v("用户可以将数据导入到临时分区，也可以指定临时分区进行查询。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("导入临时分区")]),t._v(" "),e("p",[t._v("根据导入方式的不同，指定导入临时分区的语法稍有差别。这里通过示例进行简单说明")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("INSERT INTO tbl TEMPORARY PARTITION(tp1, tp2, ...) SELECT ....\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl --location-trusted -u root: -H "label:123" -H "temporary_partition: tp1, tp2, ..." -T testData http://host:port/api/testDb/testTbl/_stream_load    \n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('LOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE `my_table`\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS(tp1, tp2, ...),\nWHERE k1 > 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n")])])])]),t._v(" "),e("li",[e("p",[t._v("查询临时分区")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT ... FROM\ntbl1 TEMPORARY PARTITION(tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION(tp1, tp2, ...)\nON ...\nWHERE ...;\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"和其他操作的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#和其他操作的关系"}},[t._v("#")]),t._v(" 和其他操作的关系")]),t._v(" "),e("h3",{attrs:{id:"drop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drop"}},[t._v("#")]),t._v(" DROP")]),t._v(" "),e("ul",[e("li",[t._v("使用 Drop 操作直接删除数据库或表后，可以通过 Recover 命令恢复数据库或表（限定时间内），但临时分区不会被恢复。")]),t._v(" "),e("li",[t._v("使用 Alter 命令删除正式分区后，可以通过 Recover 命令恢复分区（限定时间内）。操作正式分区和临时分区无关。")]),t._v(" "),e("li",[t._v("使用 Alter 命令删除临时分区后，无法通过 Recover 命令恢复临时分区。")])]),t._v(" "),e("h3",{attrs:{id:"truncate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#truncate"}},[t._v("#")]),t._v(" TRUNCATE")]),t._v(" "),e("ul",[e("li",[t._v("使用 Truncate 命令清空表，表的临时分区会被删除，且不可恢复。")]),t._v(" "),e("li",[t._v("使用 Truncate 命令清空正式分区时，不影响临时分区。")]),t._v(" "),e("li",[t._v("不可使用 Truncate 命令清空临时分区。")])]),t._v(" "),e("h3",{attrs:{id:"alter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alter"}},[t._v("#")]),t._v(" ALTER")]),t._v(" "),e("ul",[e("li",[t._v("当表存在临时分区时，无法使用 Alter 命令对表进行 Schema Change、Rollup 等变更操作。")]),t._v(" "),e("li",[t._v("当表在进行变更操作时，无法对表添加临时分区。")])]),t._v(" "),e("h2",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("原子的覆盖写操作")]),t._v(" "),e("p",[t._v("某些情况下，用户希望能够重写某一分区的数据，但如果采用先删除再导入的方式进行，在中间会有一段时间无法查看数据。这是，用户可以先创建一个对应的临时分区，将新的数据导入到临时分区后，通过替换操作，原子的替换原有分区，以达到目的。")])]),t._v(" "),e("li",[e("p",[t._v("修改分桶数")]),t._v(" "),e("p",[t._v("某些情况下，用户在创建分区时使用了不合适的分桶数。则用户可以先创建一个对应分区范围的临时分区，并指定新的分桶数。然后通过 "),e("code",[t._v("INSERT INTO")]),t._v(" 命令将正式分区的数据导入到临时分区中，通过替换操作，原子的替换原有分区，以达到目的。")])]),t._v(" "),e("li",[e("p",[t._v("合并或分割分区")]),t._v(" "),e("p",[t._v("某些情况下，用户希望对分区的范围进行修改，比如合并两个分区，或将一个大分区分割成多个小分区。则用户可以先建立对应合并或分割后范围的临时分区，然后通过 "),e("code",[t._v("INSERT INTO")]),t._v(" 命令将正式分区的数据导入到临时分区中，通过替换操作，原子的替换原有分区，以达到目的。")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);
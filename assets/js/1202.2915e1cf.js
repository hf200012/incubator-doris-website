(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{1651:function(a,t,e){"use strict";e.r(t);var s=e(56),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"show-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-data"}},[a._v("#")]),a._v(" SHOW DATA")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("p",[a._v("该语句用于展示数据量、副本数量以及统计行数。")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SHOW DATA [FROM db_name[.table_name]] [ORDER BY ...];\n")])])]),e("p",[a._v("说明：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("如果不指定 FROM 子句，则展示当前 db 下细分到各个 table 的数据量和副本数量。其中数据量为所有副本的总数据量。而副本数量为表的所有分区以及所有物化视图的副本数量。")])]),a._v(" "),e("li",[e("p",[a._v("如果指定 FROM 子句，则展示 table 下细分到各个物化视图的数据量、副本数量和统计行数。其中数据量为所有副本的总数据量。副本数量为对应物化视图的所有分区的副本数量。统计行数为对应物化视图的所有分区统计行数。")])]),a._v(" "),e("li",[e("p",[a._v("统计行数时，以多个副本中，行数最大的那个副本为准。")])]),a._v(" "),e("li",[e("p",[a._v("结果集中的 "),e("code",[a._v("Total")]),a._v(" 行表示汇总行。"),e("code",[a._v("Quota")]),a._v(" 行表示当前数据库设置的配额。"),e("code",[a._v("Left")]),a._v(" 行表示剩余配额。")])]),a._v(" "),e("li",[e("p",[a._v("如果想查看各个 Partition 的大小，请参阅 "),e("code",[a._v("help show partitions")]),a._v("。")])]),a._v(" "),e("li",[e("p",[a._v("可以使用 ORDER BY 对任意列组合进行排序。")])])]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("展示默认 db 的各个 table 的数据量，副本数量，汇总数据量和汇总副本数量。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SHOW DATA;\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n")])])])]),a._v(" "),e("li",[e("p",[a._v("展示指定 db 的下指定表的细分数据量、副本数量和统计行数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SHOW DATA FROM example_db.test;\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n")])])])]),a._v(" "),e("li",[e("p",[a._v("可以按照数据量、副本数量、统计行数等进行组合排序")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SHOW DATA ORDER BY ReplicaCount desc,Size asc;\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| table_c   | 3.102 KB    | 40           |\n| table_d   | .000        | 20           |\n| table_b   | 324.000 B   | 20           |\n| table_a   | 1.266 KB    | 10           |\n| Total     | 4.684 KB    | 90           |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1024.000 GB | 1073741734   |\n+-----------+-------------+--------------+\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW,DATA\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1215],{1669:function(e,a,t){"use strict";t.r(a);var s=t(56),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-table-creation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-table-creation"}},[e._v("#")]),e._v(" SHOW TABLE CREATION")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("该语句用于展示指定的 Iceberg Database 建表任务的执行情况\n语法：\n    SHOW TABLE CREATION [FROM db_name] [LIKE table_name_wild];\n    \n说明：\n    1. 使用说明\n        1) 如果不指定 db_name，使用当前默认 db\n        2) 如果使用 LIKE，则会匹配表名中包含 table_name_wild 的建表任务\n    2. 各列含义说明\n        1) Database: 数据库名称\n        2) Table：要创建表的名称\n        3) Status：表的创建状态，`success`/`fail`\n        4) CreateTime：执行创建该表任务的时间\n        5) Error Msg：创建表失败的错误信息，如果成功，则为空。\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 展示默认 Iceberg db 中所有的建表任务\n    SHOW TABLE CREATION;\n\n    mysql> show table creation ;\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | Database                   | Table  | Status  | Create Time         | Error Msg                                                |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | default_cluster:iceberg_db | logs_1 | success | 2022-01-24 19:42:45 |                                                          |\n    | default_cluster:iceberg_db | logs   | fail    | 2022-01-24 19:42:45 | Cannot convert Iceberg type[list<string>] to Doris type. |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n\n2. 展示指定 Iceberg db 中的建表任务\n    SHOW TABLE CREATION FROM example_db;\n\n    mysql> show table creation from iceberg_db;\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | Database                   | Table  | Status  | Create Time         | Error Msg                                                |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    | default_cluster:iceberg_db | logs_1 | success | 2022-01-24 19:42:45 |                                                          |\n    | default_cluster:iceberg_db | logs   | fail    | 2022-01-24 19:42:45 | Cannot convert Iceberg type[list<string>] to Doris type. |\n    +----------------------------+--------+---------+---------------------+----------------------------------------------------------+\n    \n3. 展示指定 Iceberg db 中的建表任务，表名中包含字符串 "log" 的任务\n    SHOW TABLE CREATION FROM example_db LIKE \'%log%\';\n\n    mysql> show table creation from iceberg_db like "%1";\n    +----------------------------+--------+---------+---------------------+-----------+\n    | Database                   | Table  | Status  | Create Time         | Error Msg |\n    +----------------------------+--------+---------+---------------------+-----------+\n    | default_cluster:iceberg_db | logs_1 | success | 2022-01-24 19:42:45 |           |\n    +----------------------------+--------+---------+---------------------+-----------+\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW,TABLE CREATION\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
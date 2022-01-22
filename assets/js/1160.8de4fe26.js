(window.webpackJsonp=window.webpackJsonp||[]).push([[1160],{1615:function(a,e,t){"use strict";t.r(e);var n=t(56),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"create-sync-job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-sync-job"}},[a._v("#")]),a._v(" CREATE SYNC JOB")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("p",[a._v("数据同步(Sync Job)功能，支持用户提交一个常驻的数据同步作业，通过从指定的远端地址读取Binlog日志，增量同步用户在Mysql数据库的对数据更新操作的CDC(Change Data Capture)功能。")]),a._v(" "),t("p",[a._v("目前数据同步作业只支持对接Canal，从Canal Server上获取解析好的Binlog数据，导入到Doris内。")]),a._v(" "),t("p",[a._v("用户可通过 "),t("code",[a._v("SHOW SYNC JOB")]),a._v(" 查看数据同步作业状态。")]),a._v(" "),t("p",[a._v("语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CREATE SYNC [db.]job_name\n (\n \tchannel_desc, \n \tchannel_desc\n \t...\n )\nbinlog_desc\n")])])]),t("ol",[t("li",[t("p",[t("code",[a._v("job_name")])]),a._v(" "),t("p",[a._v("同步作业名称，是作业在当前数据库内的唯一标识，相同"),t("code",[a._v("job_name")]),a._v("的作业只能有一个在运行。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("channel_desc")])]),a._v(" "),t("p",[a._v("作业下的数据通道，用来描述mysql源表到doris目标表的映射关系。")]),a._v(" "),t("p",[a._v("语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM mysql_db.src_tbl INTO des_tbl\n[partitions]\n[columns_mapping]\n")])])]),t("ol",[t("li",[t("p",[t("code",[a._v("mysql_db.src_tbl")])]),a._v(" "),t("p",[a._v("指定mysql端的数据库和源表。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("des_tbl")])]),a._v(" "),t("p",[a._v("指定doris端的目标表，只支持Unique表，且需开启表的batch delete功能(开启方法请看help alter table的'批量删除功能')。")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("partitions")])]),a._v(" "),t("p",[a._v("指定导入目的表的哪些 partition 中。如果不指定，则会自动导入到对应的 partition 中。")]),a._v(" "),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("PARTITION(p1, p2, p3)\n")])])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("column_mapping")])]),a._v(" "),t("p",[a._v("指定mysql源表和doris目标表的列之间的映射关系。如果不指定，FE会默认源表和目标表的列按顺序一一对应。")]),a._v(" "),t("p",[a._v("不支持 col_name = expr 的形式表示列。")]),a._v(" "),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("假设目标表列为(k1, k2, v1)，\n\n改变列k1和k2的顺序\nCOLUMNS(k2, k1, v1)\n\n忽略源数据的第四列\nCOLUMNS(k2, k1, v1, dummy_column)\n")])])])])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("binlog_desc")])]),a._v(" "),t("p",[a._v("用来描述远端数据源，目前仅支持canal一种。")]),a._v(" "),t("p",[a._v("语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('FROM BINLOG\n(\n    "key1" = "value1", \n    "key2" = "value2"\n)\n')])])]),t("ol",[t("li",[t("p",[a._v("Canal 数据源对应的属性，以"),t("code",[a._v("canal.")]),a._v("为前缀")]),a._v(" "),t("ol",[t("li",[a._v("canal.server.ip: canal server的地址")]),a._v(" "),t("li",[a._v("canal.server.port: canal server的端口")]),a._v(" "),t("li",[a._v("canal.destination: instance的标识")]),a._v(" "),t("li",[a._v("canal.batchSize: 获取的batch大小的最大值，默认8192")]),a._v(" "),t("li",[a._v("canal.username: instance的用户名")]),a._v(" "),t("li",[a._v("canal.password: instance的密码")]),a._v(" "),t("li",[a._v("canal.debug: 可选，设置为true时，会将batch和每一行数据的详细信息都打印出来")])])])])])]),a._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("简单为 "),t("code",[a._v("test_db")]),a._v(" 的 "),t("code",[a._v("test_tbl")]),a._v(" 创建一个名为 "),t("code",[a._v("job1")]),a._v(" 的数据同步作业，连接本地的Canal服务器，对应Mysql源表 "),t("code",[a._v("mysql_db1.tbl1")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(' CREATE SYNC `test_db`.`job1`\n (\n \tFROM `mysql_db1`.`tbl1` INTO `test_tbl `\n )\n FROM BINLOG \n (\n \t"type" = "canal",\n \t"canal.server.ip" = "127.0.0.1",\n \t"canal.server.port" = "11111",\n \t"canal.destination" = "example",\n \t"canal.username" = "",\n \t"canal.password" = ""\n );\n')])])])]),a._v(" "),t("li",[t("p",[a._v("为 "),t("code",[a._v("test_db")]),a._v(" 的多张表创建一个名为 "),t("code",[a._v("job1")]),a._v(" 的数据同步作业，一一对应多张Mysql源表，并显式的指定列映射。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v(' CREATE SYNC `test_db`.`job1` \n (\n \tFROM `mysql_db`.`t1` INTO `test1` COLUMNS(k1, k2, v1) PARTITIONS (p1, p2),\n \tFROM `mysql_db`.`t2` INTO `test2` COLUMNS(k3, k4, v2) PARTITION p1\n ) \n FROM BINLOG \n (\n \t"type" = "canal", \n \t"canal.server.ip" = "xx.xxx.xxx.xx", \n \t"canal.server.port" = "12111", \n \t"canal.destination" = "example",  \n \t"canal.username" = "username", \n \t"canal.password" = "password"\n );\n')])])])])]),a._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("CREATE,SYNC,JOB,BINLOG\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{1018:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-sync-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-sync-job"}},[e._v("#")]),e._v(" CREATE SYNC JOB")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("The sync job feature supports to submit a resident SyncJob, and CDC (change data capture) the user's update operation in MySQL database by reading the binlog log from the specified remote address.")]),e._v(" "),a("p",[e._v("At present, data synchronization only supports docking with the canal, getting the parsed binlog from the canal server and loading it into Doris.")]),e._v(" "),a("p",[e._v("You can view the SyncJob's status by command 'SHOW SYNC JOB'.")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE SYNC [db.]job_name\n (\n \tchannel_desc, \n \tchannel_desc\n \t...\n )\nbinlog_desc\n")])])]),a("ol",[a("li",[a("p",[a("code",[e._v("job_name")])]),e._v(" "),a("p",[e._v("job_Name is the unique identifier of the SyncJob in the current database. With a specified job name, only one SyncJob can be running at the same time.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("channel_desc")])]),e._v(" "),a("p",[e._v("The data channel under the job is used to describe the mapping relationship between the MySQL source table and the Doris target table.")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM mysql_db.src_tbl INTO des_tbl\n[partitions]\n[columns_mapping]\n")])])]),a("ol",[a("li",[a("p",[a("code",[e._v("mysql_db.src_tbl")])]),e._v(" "),a("p",[e._v("Specify the database and source table on the MySQL side.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("des_tbl")])]),e._v(" "),a("p",[e._v("Specify the target table on the Doris side. Only the unique table is supported, and the batch delete feature of the table needs to be enabled.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("partitions")])]),e._v(" "),a("p",[e._v("Specify which partitions to be load into in target table. If it is not specified, it will be automatically loaded into the corresponding partition.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PARTITION(p1, p2, p3)\n")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("column_mapping")])]),e._v(" "),a("p",[e._v("Specify the mapping relationship between the columns of the MySQL source table and the Doris target table. If not specified, Fe will default that the columns of the source table and the target table correspond one by one in order.")]),e._v(" "),a("p",[e._v("Columns are not supported in the 'col_name = expr' form.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Suppose the columns of target table are (K1, K2, V1),\n\nChange the order of columns K1 and K2\nCOLUMNS(k2, k1, v1)\n\nIgnore the fourth column of the source data\nCOLUMNS(k2, k1, v1, dummy_column)\n")])])])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("binlog_desc")])]),e._v(" "),a("p",[e._v("It is used to describe remote data sources. Currently, only canal is supported.")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM BINLOG\n(\n\t"key1" = "value1", \n\t"key2" = "value2"\n)\n')])])]),a("ol",[a("li",[a("p",[e._v("The attribute related to the canal is prefixed with "),a("code",[e._v("canal.")])]),e._v(" "),a("ol",[a("li",[e._v("canal.server.ip: the address of the canal server")]),e._v(" "),a("li",[e._v("canal.server.port: the port of canal server")]),e._v(" "),a("li",[e._v("canal.destination: Identifier of instance")]),e._v(" "),a("li",[e._v("canal.batchSize: the maximum batch size. The default is 8192")]),e._v(" "),a("li",[e._v("canal.username: the username of instance")]),e._v(" "),a("li",[e._v("canal.password: password of instance")]),e._v(" "),a("li",[e._v("canal.debug: optional. When set to true, the details of each batch and each row will be printed.")])])])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("create a sync job named "),a("code",[e._v("job1")]),e._v(" for target table "),a("code",[e._v("test_tbl")]),e._v(" in "),a("code",[e._v("test_db")]),e._v(",  connects to the local canal server, and corresponds to the MySQL source table "),a("code",[e._v("mysql_db1.tbl1")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' CREATE SYNC `test_db`.`job1`\n (\n \tFROM `mysql_db1`.`tbl1` INTO `test_tbl `\n )\n FROM BINLOG \n (\n \t"type" = "canal",\n \t"canal.server.ip" = "127.0.0.1",\n \t"canal.server.port" = "11111",\n \t"canal.destination" = "example",\n \t"canal.username" = "",\n \t"canal.password" = ""\n );\n')])])])]),e._v(" "),a("li",[a("p",[e._v("create a sync job named "),a("code",[e._v("job1")]),e._v(" for multiple target tables in "),a("code",[e._v("test_db")]),e._v(", correspond to multiple MySQL source tables one by one, and explicitly specify column mapping.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(' CREATE SYNC `test_db`.`job1` \n (\n \tFROM `mysql_db`.`t1` INTO `test1` COLUMNS(k1, k2, v1) PARTITIONS (p1, p2),\n \tFROM `mysql_db`.`t2` INTO `test2` COLUMNS(k3, k4, v2) PARTITION p1\n ) \n FROM BINLOG \n (\n \t"type" = "canal", \n \t"canal.server.ip" = "xx.xxx.xxx.xx", \n \t"canal.server.port" = "12111", \n \t"canal.destination" = "example",  \n \t"canal.username" = "username", \n \t"canal.password" = "password"\n );\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CREATE,SYNC,JOB,BINLOG\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
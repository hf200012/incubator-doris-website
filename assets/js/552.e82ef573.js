(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{1006:function(e,t,a){"use strict";a.r(t);var o=a(56),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[e._v("#")]),e._v(" RESTORE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("ol",[a("li",[e._v("RESTORE\nThis statement is used to restore the data previously backed up by the BACKUP command to the specified database. This command is an asynchronous operation. After successful submission, you need to check progress through the SHOW RESTORE command. Restoring tables of OLAP type is supported only.\nGrammar:\nSNAPSHOT RESTORE [dbu name].{snapshot name}\nFROM "),a("code",[e._v("repository_name")]),e._v('\nON (\n"'),a("code",[e._v("Table")]),e._v("uname'["),a("code",[e._v("partition (")]),e._v("p1',...)] [as "),a("code",[e._v("tbl")]),e._v('uu alias\'],\n...\n)\nPROPERTIES ("key"="value", ...);')])]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("ol",[a("li",[e._v("Only one BACKUP or RESTORE task can be performed under the same database.")]),e._v(" "),a("li",[e._v("The ON clause identifies the tables and partitions that need to be restored. If no partition is specified, all partitions of the table are restored by default. The specified tables and partitions must already exist in the warehouse backup.")]),e._v(" "),a("li",[e._v("The backup tables in the warehouse can be restored to new tables through AS statements. But the new table name cannot already exist in the database. Partition name cannot be changed.")]),e._v(" "),a("li",[e._v("The backup tables in the warehouse can be restored and replaced with the same-name tables in the database, but the table structure of the two tables must be completely consistent. Table structure includes: table name, column, partition, Rollup and so on.")]),e._v(" "),a("li",[e._v("Partitions of the recovery table can be specified, and the system checks whether the partition Range or List matches.")]),e._v(" "),a("li",[e._v('PROPERTIES currently supports the following attributes:\n"Backup_timestamp" = "2018-05-04-16-45-08": specifies which version of the time to restore the corresponding backup must be filled in. This information can be obtained through the `SHOW SNAPSHOT ON repo;\'statement.\n"Replication_num" = "3": Specifies the number of replicas of the restored table or partition. The default is 3. If an existing table or partition is restored, the number of copies must be the same as the number of copies of an existing table or partition. At the same time, there must be enough hosts to accommodate multiple copies.\n"Timeout" = "3600": Task timeout, default to one day. Unit seconds.\n"Meta_version" = 40: Use the specified meta_version to read the previously backed up metadata. Note that as a temporary solution, this parameter is only used to restore the data backed up by the older version of Doris. The latest version of the backup data already contains meta version, no need to specify.')])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v('Restore backup table backup_tbl in snapshot_1 from example_repo to database example_db1 with the time version of "2018-05-04-16-45-08". Restore to one copy:\nRESTORE SNAPSHOT example_db1.'),a("code",[e._v("snapshot_1")]),e._v("\nFROM "),a("code",[e._v("example 'u repo' ON (")]),e._v('backup_tbl` )\nPROPERTIES\n(\n"backup_timestamp"="2018-05-04-16-45-08",\n"Replication\\ num" = "1"\n);')])]),e._v(" "),a("li",[a("p",[e._v('Restore the partitions p1, P2 of table backup_tbl in snapshot_2 and table backup_tbl2 to database example_db1 from example_repo and rename it new_tbl. The time version is "2018-05-04-17-11-01". By default, three copies are restored:\nRESTORE SNAPSHOT example_db1.'),a("code",[e._v("snapshot_2")]),e._v("\nFROM "),a("code",[e._v("example 'u repo' ON (")]),e._v("backup_tbl"),a("code",[e._v("PARTITION (")]),e._v("p1"),a("code",[e._v(",")]),e._v("p2"),a("code",[e._v("),")]),e._v("backup_tbl2"),a("code",[e._v("AS")]),e._v('new_tbl`\n)\nPROPERTIES\n(\n"backup_timestamp"="2018-05-04-17-11-01"\n);')])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("RESTORE")])])}),[],!1,null,null,null);t.default=s.exports}}]);
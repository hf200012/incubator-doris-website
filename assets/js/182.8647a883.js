(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{635:function(e,t,a){"use strict";a.r(t);var o=a(56),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-use-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-use-guide"}},[e._v("#")]),e._v(" Advanced Use Guide")]),e._v(" "),a("p",[e._v("Here we introduce some of Doris's advanced features.")]),e._v(" "),a("h2",{attrs:{id:"table-1-structural-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-1-structural-change"}},[e._v("#")]),e._v(" Table 1 Structural Change")]),e._v(" "),a("p",[e._v("Schema of the table can be modified using the ALTER TABLE command, including the following modifications:")]),e._v(" "),a("ul",[a("li",[e._v("Additional columns")]),e._v(" "),a("li",[e._v("Delete columns")]),e._v(" "),a("li",[e._v("Modify column type")]),e._v(" "),a("li",[e._v("Changing column order")])]),e._v(" "),a("p",[e._v("Examples are given below.")]),e._v(" "),a("p",[e._v("Schema of Table 1 is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")])])]),a("p",[e._v("We added a new column of uv, type BIGINT, aggregation type SUM, default value is 0:")]),e._v(" "),a("p",[a("code",[e._v("ALTER TABLE table1 ADD COLUMN uv BIGINT SUM DEFAULT '0' after pv;")])]),e._v(" "),a("p",[e._v("After successful submission, you can view the progress of the job by following commands:")]),e._v(" "),a("p",[a("code",[e._v("SHOW ALTER TABLE COLUMN;")])]),e._v(" "),a("p",[e._v("When the job state is FINISHED, the job is completed. The new Schema is in force.")]),e._v(" "),a("p",[e._v("After ALTER TABLE is completed, you can view the latest Schema through "),a("code",[e._v("DESC TABLE")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")])])]),a("p",[e._v("The following command can be used to cancel the job currently being executed:")]),e._v(" "),a("p",[a("code",[e._v("CANCEL ALTER TABLE COLUMN FROM table1")])]),e._v(" "),a("p",[e._v("For more help, see `HELP ALTER TABLE'.")]),e._v(" "),a("h2",{attrs:{id:"_2-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rollup"}},[e._v("#")]),e._v(" 2 Rollup")]),e._v(" "),a("p",[e._v('Rollup can be understood as a materialized index structure of Table. ** materialized ** because data is store as a concrete ("materialized") table independently, and ** indexing ** means that Rollup can adjust column order to increase the hit rate of prefix index, or reduce key column to increase data aggregation.')]),e._v(" "),a("p",[e._v("Examples are given below.")]),e._v(" "),a("p",[e._v("Schema of Table 1 is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")])])]),a("p",[e._v("For table1 detailed data, siteid, citycode and username form a set of keys, which aggregate the PV field. If the business side often has the need to see the total amount of PV in the city, it can build a rollup with only citycode and pv.")]),e._v(" "),a("p",[a("code",[e._v("ALTER TABLE table1 ADD ROLLUP rollup_city(citycode, pv);")])]),e._v(" "),a("p",[e._v("After successful submission, you can view the progress of the job by following commands:")]),e._v(" "),a("p",[a("code",[e._v("SHOW ALTER TABLE ROLLUP;")])]),e._v(" "),a("p",[e._v("When the job state is FINISHED, the job is completed.")]),e._v(" "),a("p",[e._v("When Rollup is established, you can use "),a("code",[e._v("DESC table1 ALL")]),e._v(" to view the Rollup information of the table.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> desc table1 all;\n+-------------+----------+-------------+------+-------+--------+-------+\n| IndexName   | Field    | Type        | Null | Key   | Default | Extra |\n+-------------+----------+-------------+------+-------+---------+-------+\n| table1      | siteid   | int(11)     | No   | true  | 10      |       |\n|             | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | username | varchar(32) | No   | true  |         |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n|             | uv       | bigint(20)  | No   | false | 0       | SUM   |\n|             |          |             |      |       |         |       |\n| rollup_city | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n+-------------+----------+-------------+------+-------+---------+-------+\n8 rows in set (0.01 sec)\n")])])]),a("p",[e._v("The following command can be used to cancel the job currently being executed:")]),e._v(" "),a("p",[a("code",[e._v("CANCEL ALTER TABLE ROLLUP FROM table1;")])]),e._v(" "),a("p",[e._v("After Rollup is established, the query does not need to specify Rollup to query. Or specify the original table for query. The program automatically determines whether Rollup should be used. Whether Rollup is hit or not can be viewed by the `EXPLAIN your_sql;'command.")]),e._v(" "),a("p",[e._v("For more help, see "),a("code",[e._v("HELP ALTER TABLE")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_2-query-of-data-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-query-of-data-table"}},[e._v("#")]),e._v(" 2 Query of Data Table")]),e._v(" "),a("h3",{attrs:{id:"_2-1-memory-limitation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-memory-limitation"}},[e._v("#")]),e._v(" 2.1 Memory Limitation")]),e._v(" "),a("p",[e._v("To prevent a user's query from consuming too much memory. Queries are controlled in memory. A query task uses no more than 2GB of memory by default on a single BE node.")]),e._v(" "),a("p",[e._v("When users use it, if they find a "),a("code",[e._v("Memory limit exceeded")]),e._v(" error, they usually exceed the memory limit.")]),e._v(" "),a("p",[e._v("Users should try to optimize their SQL statements when they encounter memory overrun.")]),e._v(" "),a("p",[e._v("If it is found that 2GB memory cannot be satisfied, the memory parameters can be set manually.")]),e._v(" "),a("p",[e._v("Display query memory limits:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 2147483648 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')])])]),a("p",[e._v("The unit of "),a("code",[e._v("exec_mem_limit")]),e._v(" is byte, and the value of "),a("code",[e._v("exec_mem_limit")]),e._v(" can be changed by the "),a("code",[e._v("SET")]),e._v(" command. If changed to 8GB.")]),e._v(" "),a("p",[a("code",[e._v("SET exec_mem_limit = 8589934592;")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 8589934592 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')])])]),a("blockquote",[a("ul",[a("li",[e._v("The above modification is session level and is only valid within the current connection session. Disconnecting and reconnecting will change back to the default value.")]),e._v(" "),a("li",[e._v("If you need to modify the global variable, you can set it as follows: "),a("code",[e._v("SET GLOBAL exec_mem_limit = 8589934592;")]),e._v(" When the setup is complete, disconnect the session and log in again, and the parameters will take effect permanently.")])])]),e._v(" "),a("h3",{attrs:{id:"_2-2-query-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-query-timeout"}},[e._v("#")]),e._v(" 2.2 Query timeout")]),e._v(" "),a("p",[e._v("The current default query time is set to 300 seconds. If a query is not completed within 300 seconds, the query will be cancelled by the Doris system. Users can use this parameter to customize the timeout time of their applications and achieve a blocking mode similar to wait (timeout).")]),e._v(" "),a("p",[e._v("View the current timeout settings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('mysql> SHOW VARIABLES LIKE "%query_timeout%";\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| QUERY_TIMEOUT | 300   |\n+---------------+-------+\n1 row in set (0.00 sec)\n')])])]),a("p",[e._v("Modify the timeout to 1 minute:")]),e._v(" "),a("p",[a("code",[e._v("SET query timeout =60;")])]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("The current timeout check interval is 5 seconds, so timeouts less than 5 seconds are not very accurate.")]),e._v(" "),a("li",[e._v("The above modifications are also session level. Global validity can be modified by "),a("code",[e._v("SET GLOBAL")]),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"_2-3-broadcast-shuffle-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-broadcast-shuffle-join"}},[e._v("#")]),e._v(" 2.3 Broadcast/Shuffle Join")]),e._v(" "),a("p",[e._v("By default, the system implements Join by conditionally filtering small tables, broadcasting them to the nodes where the large tables are located, forming a memory Hash table, and then streaming out the data of the large tables Hash Join. However, if the amount of data filtered by small tables cannot be put into memory, Join will not be able to complete at this time. The usual error should be caused by memory overrun first.")]),e._v(" "),a("p",[e._v("If you encounter the above situation, it is recommended to use Shuffle Join explicitly, also known as Partitioned Join. That is, small and large tables are Hash according to Join's key, and then distributed Join. This memory consumption is allocated to all computing nodes in the cluster.")]),e._v(" "),a("p",[e._v("Doris will try to use Broadcast Join first. If small tables are too large to broadcasting, Doris will switch to Shuffle Join automatically. Note that if you use Broadcast Join explicitly in this case, Doris will still switch to Shuffle Join automatically.")]),e._v(" "),a("p",[e._v("Use Broadcast Join (default):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select sum(table1.pv) from table1 join table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")])])]),a("p",[e._v("Use Broadcast Join (explicitly specified):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select sum(table1.pv) from table1 join [broadcast] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")])])]),a("p",[e._v("Shuffle Join:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select sum(table1.pv) from table1 join [shuffle] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.15 sec)\n")])])]),a("h3",{attrs:{id:"_2-4-query-retry-and-high-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-query-retry-and-high-availability"}},[e._v("#")]),e._v(" 2.4 Query Retry and High Availability")]),e._v(" "),a("p",[e._v("When multiple FE nodes are deployed, users can deploy load balancing layers on top of multiple FEs to achieve high availability of Doris.")]),e._v(" "),a("p",[e._v("Here are some highly available solutions:")]),e._v(" "),a("p",[a("strong",[e._v("The first")])]),e._v(" "),a("p",[e._v("I retry and load balancing in application layer code. For example, if a connection is found to be dead, it will automatically retry on other connections. Application-level code retry requires the application to configure multiple Doris front-end node addresses.")]),e._v(" "),a("p",[a("strong",[e._v("Second")])]),e._v(" "),a("p",[e._v("If you use MySQL JDBC connector to connect Doris, you can use jdbc's automatic retry mechanism:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("jdbc:mysql://[host1][:port1],[host2][:port2][,[host3][:port3]]...[/[database]][?propertyName1=propertyValue1[&propertyName2=propertyValue2]...]\n")])])]),a("p",[a("strong",[e._v("The third")])]),e._v(" "),a("p",[e._v("Applications can connect to and deploy MySQL Proxy on the same machine by configuring MySQL Proxy's Failover and Load Balance functions.")]),e._v(" "),a("p",[a("code",[e._v("http://dev.mysql.com/doc/refman/5.6/en/mysql-proxy-using.html")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
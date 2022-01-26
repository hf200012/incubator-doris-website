(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{631:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"guidelines-for-basic-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-basic-use"}},[e._v("#")]),e._v(" Guidelines for Basic Use")]),e._v(" "),a("p",[e._v("Doris uses MySQL protocol to communicate. Users can connect to Doris cluster through MySQL client or MySQL JDBC. When selecting the MySQL client version, it is recommended to use the version after 5.1, because user names of more than 16 characters cannot be supported before 5.1. This paper takes MySQL client as an example to show users the basic usage of Doris through a complete process.")]),e._v(" "),a("h2",{attrs:{id:"_1-create-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-users"}},[e._v("#")]),e._v(" 1 Create Users")]),e._v(" "),a("h3",{attrs:{id:"_1-1-root-user-logon-and-password-modification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-root-user-logon-and-password-modification"}},[e._v("#")]),e._v(" 1.1 Root User Logon and Password Modification")]),e._v(" "),a("p",[e._v("Doris has built-in root and admin users, and the password is empty by default. After starting the Doris program, you can connect to the Doris cluster through root or admin users.\nUse the following command to log in to Doris:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql -h FE_HOST -P9030 -uroot\n")])])]),a("blockquote",[a("p",[a("code",[e._v("fe_host")]),e._v(" is the IP address of any FE node. "),a("code",[e._v("9030")]),e._v(" is the query_port configuration in fe.conf.")])]),e._v(" "),a("p",[e._v("After login, you can modify the root password by following commands")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SET PASSWORD FOR 'root' = PASSWORD('your_password');\n")])])]),a("h3",{attrs:{id:"_1-3-creating-new-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-creating-new-users"}},[e._v("#")]),e._v(" 1.3 Creating New Users")]),e._v(" "),a("p",[e._v("Create an ordinary user with the following command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE USER 'test' IDENTIFIED BY 'test_passwd';\n")])])]),a("p",[e._v("Follow-up login can be done through the following connection commands.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql -h FE_HOST -P9030 -utest -ptest_passwd\n")])])]),a("blockquote",[a("p",[e._v("By default, the newly created common user does not have any permissions. Permission grants can be referred to later permission grants.")])]),e._v(" "),a("h2",{attrs:{id:"_2-data-table-creation-and-data-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-data-table-creation-and-data-import"}},[e._v("#")]),e._v(" 2 Data Table Creation and Data Import")]),e._v(" "),a("h3",{attrs:{id:"_2-1-create-a-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-create-a-database"}},[e._v("#")]),e._v(" 2.1 Create a database")]),e._v(" "),a("p",[e._v("Initially, a database can be created through root or admin users:")]),e._v(" "),a("p",[a("code",[e._v("CREATE DATABASE example_db;")])]),e._v(" "),a("blockquote",[a("p",[e._v("All commands can use "),a("code",[e._v("HELP")]),e._v(" command to see detailed grammar help. For example: "),a("code",[e._v("HELP CREATE DATABASE;'")])])]),e._v(" "),a("blockquote",[a("p",[e._v('If you don\'t know the full name of the command, you can use "help command a field" for fuzzy query. If you type '),a("code",[e._v("HELP CREATE")]),e._v(", you can match commands like "),a("code",[e._v("CREATE DATABASE',")]),e._v("CREATE TABLE', `CREATE USER', etc.")])]),e._v(" "),a("p",[e._v("After the database is created, you can view the database information through `SHOW DATABASES'.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| example_db         |\n| information_schema |\n+--------------------+\n2 rows in set (0.00 sec)\n")])])]),a("p",[e._v("Information_schema exists to be compatible with MySQL protocol. In practice, information may not be very accurate. Therefore, information about specific databases is suggested to be obtained by directly querying the corresponding databases.")]),e._v(" "),a("h3",{attrs:{id:"_2-2-account-authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-account-authorization"}},[e._v("#")]),e._v(" 2.2 Account Authorization")]),e._v(" "),a("p",[e._v("After the example_db is created, the read and write permissions of example_db can be authorized to ordinary accounts, such as test, through the root/admin account. After authorization, the example_db database can be operated by logging in with the test account.")]),e._v(" "),a("p",[a("code",[e._v("GRANT ALL ON example_db TO test;")])]),e._v(" "),a("h3",{attrs:{id:"_2-3-formulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-formulation"}},[e._v("#")]),e._v(" 2.3 Formulation")]),e._v(" "),a("p",[e._v("Create a table using the "),a("code",[e._v("CREATE TABLE")]),e._v(" command. More detailed parameters can be seen:")]),e._v(" "),a("p",[a("code",[e._v("HELP CREATE TABLE;")])]),e._v(" "),a("p",[e._v("First switch the database:")]),e._v(" "),a("p",[a("code",[e._v("USE example_db;")])]),e._v(" "),a("p",[e._v("Doris supports single partition and composite partition.")]),e._v(" "),a("p",[e._v("In the composite partition:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The first level is called Partition, or partition. Users can specify a dimension column as a partition column (currently only integer and time type columns are supported), and specify the range of values for each partition.")])]),e._v(" "),a("li",[a("p",[e._v("The second stage is called Distribution, or bucket division. Users can specify one or more dimension columns and the number of buckets for HASH distribution of data.")])])]),e._v(" "),a("p",[e._v("Composite partitioning is recommended for the following scenarios")]),e._v(" "),a("ul",[a("li",[e._v("There are time dimensions or similar dimensions with ordered values, which can be used as partition columns. The partition granularity can be evaluated according to the frequency of importation and the amount of partition data.")]),e._v(" "),a("li",[e._v("Historic data deletion requirements: If there is a need to delete historical data (for example, only the last N days of data are retained). Using composite partitions, you can achieve this by deleting historical partitions. Data can also be deleted by sending a DELETE statement within a specified partition.")]),e._v(" "),a("li",[e._v("Solve the data skew problem: Each partition can specify the number of buckets separately. If dividing by day, when the amount of data varies greatly every day, we can divide the data of different partitions reasonably by the number of buckets in the specified partition. Bucket columns recommend choosing columns with high degree of differentiation.")])]),e._v(" "),a("p",[e._v("Users can also use no composite partitions, even single partitions. Then the data are only distributed by HASH.")]),e._v(" "),a("p",[e._v("Taking the aggregation model as an example, the following two partitions are illustrated separately.")]),e._v(" "),a("h4",{attrs:{id:"single-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-partition"}},[e._v("#")]),e._v(" Single partition")]),e._v(" "),a("p",[e._v("Create a logical table with the name table1. The number of barrels is 10.")]),e._v(" "),a("p",[e._v("The schema of this table is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Siteid: Type is INT (4 bytes), default value is 10")]),e._v(" "),a("li",[e._v("citycode: The type is SMALLINT (2 bytes)")]),e._v(" "),a("li",[e._v("username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string.")]),e._v(" "),a("li",[e._v("pv: Type is BIGINT (8 bytes), default value is 0; this is an index column, Doris will aggregate the index column internally, the aggregation method of this column is SUM.")])]),e._v(" "),a("p",[e._v("The TABLE statement is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE TABLE table1\n(\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")])])]),a("h4",{attrs:{id:"composite-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composite-partition"}},[e._v("#")]),e._v(" Composite partition")]),e._v(" "),a("p",[e._v("Create a logical table named table2.")]),e._v(" "),a("p",[e._v("The schema of this table is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("event_day: Type DATE, no default")]),e._v(" "),a("li",[e._v("Siteid: Type is INT (4 bytes), default value is 10")]),e._v(" "),a("li",[e._v("citycode: The type is SMALLINT (2 bytes)")]),e._v(" "),a("li",[e._v("username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string.")]),e._v(" "),a("li",[e._v("pv: Type is BIGINT (8 bytes), default value is 0; this is an index column, Doris will aggregate the index column internally, the aggregation method of this column is SUM.")])]),e._v(" "),a("p",[e._v("We use the event_day column as the partition column to create three partitions: p201706, p201707, and p201708.")]),e._v(" "),a("ul",[a("li",[e._v("p201706: Range [Minimum, 2017-07-01)")]),e._v(" "),a("li",[e._v("p201707: Scope [2017-07-01, 2017-08-01)")]),e._v(" "),a("li",[e._v("p201708: Scope [2017-08-01, 2017-09-01)")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note that the interval is left closed and right open.")])]),e._v(" "),a("p",[e._v("Each partition uses siteid to hash buckets, with a bucket count of 10")]),e._v(" "),a("p",[e._v("The TABLE statement is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE TABLE table2\n(\n    event_day DATE,\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nPARTITION BY RANGE(event_day)\n(\n    PARTITION p201706 VALUES LESS THAN ('2017-07-01'),\n    PARTITION p201707 VALUES LESS THAN ('2017-08-01'),\n    PARTITION p201708 VALUES LESS THAN ('2017-09-01')\n)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")])])]),a("p",[e._v("After the table is built, you can view the information of the table in example_db:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL> SHOW TABLES;\n+----------------------+\n| Tables_in_example_db |\n+----------------------+\n| table1               |\n| table2               |\n+----------------------+\n2 rows in set (0.01 sec)\n\nMySQL> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | Yes  | true  | 10      |       |\n| citycode | smallint(6) | Yes  | true  | N/A     |       |\n| username | varchar(32) | Yes  | true  |         |       |\n| pv       | bigint(20)  | Yes  | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n4 rows in set (0.00 sec)\n\nMySQL> DESC table2;\n+-----------+-------------+------+-------+---------+-------+\n| Field     | Type        | Null | Key   | Default | Extra |\n+-----------+-------------+------+-------+---------+-------+\n| event_day | date        | Yes  | true  | N/A     |       |\n| siteid    | int(11)     | Yes  | true  | 10      |       |\n| citycode  | smallint(6) | Yes  | true  | N/A     |       |\n| username  | varchar(32) | Yes  | true  |         |       |\n| pv        | bigint(20)  | Yes  | false | 0       | SUM   |\n+-----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")])])]),a("blockquote",[a("p",[e._v("Notes:")]),e._v(" "),a("ol",[a("li",[e._v("By setting replication_num, the above tables are all single-copy tables. Doris recommends that users adopt the default three-copy settings to ensure high availability.")]),e._v(" "),a("li",[e._v("Composite partition tables can be added or deleted dynamically. See the Partition section in "),a("code",[e._v("HELP ALTER TABLE")]),e._v(".")]),e._v(" "),a("li",[e._v("Data import can import the specified Partition. See `HELP LOAD'.")]),e._v(" "),a("li",[e._v("Schema of table can be dynamically modified.")]),e._v(" "),a("li",[e._v("Rollup can be added to Table to improve query performance. This section can be referred to the description of Rollup in Advanced Usage Guide.")]),e._v(" "),a("li",[e._v("The default value of Null property for column is true, which may result in poor scan performance.")])])]),e._v(" "),a("h3",{attrs:{id:"_2-4-import-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-import-data"}},[e._v("#")]),e._v(" 2.4 Import data")]),e._v(" "),a("p",[e._v("Doris supports a variety of data import methods. Specifically, you can refer to the data import document. Here we use streaming import and Broker import as examples.")]),e._v(" "),a("h4",{attrs:{id:"flow-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow-in"}},[e._v("#")]),e._v(" Flow-in")]),e._v(" "),a("p",[e._v("Streaming import transfers data to Doris via HTTP protocol. It can import local data directly without relying on other systems or components. Detailed grammar help can be found in `HELP STREAM LOAD;'")]),e._v(" "),a("p",[e._v('Example 1: With "table1_20170707" as Label, import table1 tables using the local file table1_data.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl --location-trusted -u test:test_passwd -H "label:table1_20170707" -H "column_separator:," -T table1_data http://FE_HOST:8030/api/example_db/table1/_stream_load\n')])])]),a("blockquote",[a("ol",[a("li",[e._v("FE_HOST is the IP of any FE node and 8030 is http_port in fe.conf.")]),e._v(" "),a("li",[e._v("You can use the IP of any BE and the webserver_port in be.conf to connect the target left and right for import. For example: "),a("code",[e._v("BE_HOST:8040")])])])]),e._v(" "),a("p",[e._v("The local file "),a("code",[e._v("table1_data")]),e._v(" takes "),a("code",[e._v(",")]),e._v(" as the separation between data, and the specific contents are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1,1,Jim,2\n2,1,grace,2\n3,2,tom,2\n4,3,bush,3\n5,3,helen,3\n")])])]),a("p",[e._v('Example 2: With "table2_20170707" as Label, import table2 tables using the local file table2_data.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl --location-trusted -u test:test -H "label:table2_20170707" -H "column_separator:|" -T table2_data http://127.0.0.1:8030/api/example_db/table2/_stream_load\n')])])]),a("p",[e._v("The local file "),a("code",[e._v("table2_data'is separated by")]),e._v("|'. The details are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2017-07-03|1|1|jim|2\n2017-07-05|2|1|grace|2\n2017-07-12|3|2|tom|2\n2017-07-15|4|3|bush|3\n2017-07-12|5|3|helen|3\n")])])]),a("blockquote",[a("p",[e._v("Notes:")]),e._v(" "),a("ol",[a("li",[e._v("The recommended file size for streaming import is limited to 10GB. Excessive file size will result in higher cost of retry failure.")]),e._v(" "),a("li",[e._v("Each batch of imported data needs to take a Label. Label is best a string related to a batch of data for easy reading and management. Doris based on Label guarantees that the same batch of data can be imported only once in a database. Label for failed tasks can be reused.")]),e._v(" "),a("li",[e._v("Streaming imports are synchronous commands. The successful return of the command indicates that the data has been imported, and the failure of the return indicates that the batch of data has not been imported.")])])]),e._v(" "),a("h4",{attrs:{id:"broker-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[e._v("#")]),e._v(" Broker Load")]),e._v(" "),a("p",[e._v("Broker imports import data from external storage through deployed Broker processes. For more help, see "),a("code",[e._v("HELP BROKER LOAD;")])]),e._v(" "),a("p",[e._v('Example: Import files on HDFS into table1 table with "table1_20170708" as Label')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LOAD LABEL table1_20170708\n(\n    DATA INFILE("hdfs://your.namenode.host:port/dir/table1_data")\n    INTO TABLE table1\n)\nWITH BROKER hdfs \n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n)\nPROPERTIES\n(\n    "timeout"="3600",\n    "max_filter_ratio"="0.1"\n);\n')])])]),a("p",[e._v("Broker imports are asynchronous commands. Successful execution of the above commands only indicates successful submission of tasks. Successful imports need to be checked through `SHOW LOAD;' Such as:")]),e._v(" "),a("p",[a("code",[e._v('SHOW LOAD WHERE LABLE = "table1_20170708";')])]),e._v(" "),a("p",[e._v("In the return result, FINISHED in the "),a("code",[e._v("State")]),e._v(" field indicates that the import was successful.")]),e._v(" "),a("p",[e._v("For more instructions on "),a("code",[e._v("SHOW LOAD")]),e._v(", see"),a("code",[e._v("HELP SHOW LOAD;")])]),e._v(" "),a("p",[e._v("Asynchronous import tasks can be cancelled before the end:")]),e._v(" "),a("p",[a("code",[e._v('CANCEL LOAD WHERE LABEL = "table1_20170708";')])]),e._v(" "),a("h2",{attrs:{id:"_3-data-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-data-query"}},[e._v("#")]),e._v(" 3 Data query")]),e._v(" "),a("h3",{attrs:{id:"_3-1-simple-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-simple-query"}},[e._v("#")]),e._v(" 3.1 Simple Query")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL> SELECT * FROM table1 LIMIT 3;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      5 |        3 | 'helen'  |    3 |\n|      3 |        2 | 'tom'    |    2 |\n+--------+----------+----------+------+\n3 rows in set (0.01 sec)\n\nMySQL> SELECT * FROM table1 ORDER BY citycode;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      1 |        1 | 'jim'    |    2 |\n|      3 |        2 | 'tom'    |    2 |\n|      4 |        3 | 'bush'   |    3 |\n|      5 |        3 | 'helen'  |    3 |\n+--------+----------+----------+------+\n5 rows in set (0.01 sec)\n")])])]),a("h3",{attrs:{id:"_3-3-join-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-join-query"}},[e._v("#")]),e._v(" 3.3 Join Query")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL> SELECT SUM(table1.pv) FROM table1 JOIN table2 WHERE table1.siteid = table2.siteid;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 12 |\n+--------------------+\n1 row in set (0.20 sec)\n")])])]),a("h3",{attrs:{id:"_3-4-subquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-subquery"}},[e._v("#")]),e._v(" 3.4 Subquery")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL> SELECT SUM(pv) FROM table2 WHERE siteid IN (SELECT siteid FROM table1 WHERE siteid > 2);\n+-----------+\n| sum(`pv`) |\n+-----------+\n|         8 |\n+-----------+\n1 row in set (0.13 sec)\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
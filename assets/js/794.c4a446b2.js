(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{1248:function(e,a,t){"use strict";t.r(a);var s=t(56),_=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"基础使用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础使用指南"}},[e._v("#")]),e._v(" 基础使用指南")]),e._v(" "),t("p",[e._v("Doris 采用 MySQL 协议进行通信，用户可通过 MySQL client 或者 MySQL JDBC连接到 Doris 集群。选择 MySQL client 版本时建议采用5.1 之后的版本，因为 5.1 之前不能支持长度超过 16 个字符的用户名。本文以 MySQL client 为例，通过一个完整的流程向用户展示 Doris 的基本使用方法。")]),e._v(" "),t("h2",{attrs:{id:"_1-创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建用户"}},[e._v("#")]),e._v(" 1 创建用户")]),e._v(" "),t("h3",{attrs:{id:"_1-1-root-用户登录与密码修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-root-用户登录与密码修改"}},[e._v("#")]),e._v(" 1.1 Root 用户登录与密码修改")]),e._v(" "),t("p",[e._v("Doris 内置 root 和 admin 用户，密码默认都为空。启动完 Doris 程序之后，可以通过 root 或 admin 用户连接到 Doris 集群。\n使用下面命令即可登录 Doris：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql -h FE_HOST -P9030 -uroot\n")])])]),t("blockquote",[t("p",[t("code",[e._v("fe_host")]),e._v(" 是任一 FE 节点的 ip 地址。"),t("code",[e._v("9030")]),e._v(" 是 fe.conf 中的 query_port 配置。")])]),e._v(" "),t("p",[e._v("登陆后，可以通过以下命令修改 root 密码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SET PASSWORD FOR 'root' = PASSWORD('your_password');\n")])])]),t("h3",{attrs:{id:"_1-3-创建新用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-创建新用户"}},[e._v("#")]),e._v(" 1.3 创建新用户")]),e._v(" "),t("p",[e._v("通过下面的命令创建一个普通用户。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE USER 'test' IDENTIFIED BY 'test_passwd';\n")])])]),t("p",[e._v("后续登录时就可以通过下列连接命令登录。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql -h FE_HOST -P9030 -utest -ptest_passwd\n")])])]),t("blockquote",[t("p",[e._v("新创建的普通用户默认没有任何权限。权限授予可以参考后面的权限授予。")])]),e._v(" "),t("h2",{attrs:{id:"_2-数据表的创建与数据导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据表的创建与数据导入"}},[e._v("#")]),e._v(" 2 数据表的创建与数据导入")]),e._v(" "),t("h3",{attrs:{id:"_2-1-创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建数据库"}},[e._v("#")]),e._v(" 2.1 创建数据库")]),e._v(" "),t("p",[e._v("初始可以通过 root 或 admin 用户创建数据库：")]),e._v(" "),t("p",[t("code",[e._v("CREATE DATABASE example_db;")])]),e._v(" "),t("blockquote",[t("p",[e._v("所有命令都可以使用 'HELP command;' 查看到详细的语法帮助。如："),t("code",[e._v("HELP CREATE DATABASE;")])])]),e._v(" "),t("blockquote",[t("p",[e._v("如果不清楚命令的全名，可以使用 \"help 命令某一字段\" 进行模糊查询。如键入 'HELP CREATE'，可以匹配到 "),t("code",[e._v("CREATE DATABASE")]),e._v(", "),t("code",[e._v("CREATE TABLE")]),e._v(", "),t("code",[e._v("CREATE USER")]),e._v(" 等命令。")])]),e._v(" "),t("p",[e._v("数据库创建完成之后，可以通过 "),t("code",[e._v("SHOW DATABASES;")]),e._v(" 查看数据库信息。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| example_db         |\n| information_schema |\n+--------------------+\n2 rows in set (0.00 sec)\n")])])]),t("p",[e._v("information_schema是为了兼容MySQL协议而存在，实际中信息可能不是很准确，所以关于具体数据库的信息建议通过直接查询相应数据库而获得。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-账户授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-账户授权"}},[e._v("#")]),e._v(" 2.2 账户授权")]),e._v(" "),t("p",[e._v("example_db 创建完成之后，可以通过 root/admin 账户将 example_db 读写权限授权给普通账户，如 test。授权之后采用 test 账户登录就可以操作 example_db 数据库了。")]),e._v(" "),t("p",[t("code",[e._v("GRANT ALL ON example_db TO test;")])]),e._v(" "),t("h3",{attrs:{id:"_2-3-建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-建表"}},[e._v("#")]),e._v(" 2.3 建表")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("CREATE TABLE")]),e._v(" 命令建立一个表(Table)。更多详细参数可以查看:")]),e._v(" "),t("p",[t("code",[e._v("HELP CREATE TABLE;")])]),e._v(" "),t("p",[e._v("首先切换数据库:")]),e._v(" "),t("p",[t("code",[e._v("USE example_db;")])]),e._v(" "),t("p",[e._v("Doris支持支持单分区和复合分区两种建表方式。")]),e._v(" "),t("p",[e._v("在复合分区中：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("第一级称为 Partition，即分区。用户可以指定某一维度列作为分区列（当前只支持整型和时间类型的列），并指定每个分区的取值范围。")])]),e._v(" "),t("li",[t("p",[e._v("第二级称为 Distribution，即分桶。用户可以指定一个或多个维度列以及桶数对数据进行 HASH 分布。")])])]),e._v(" "),t("p",[e._v("以下场景推荐使用复合分区")]),e._v(" "),t("ul",[t("li",[e._v("有时间维度或类似带有有序值的维度，可以以这类维度列作为分区列。分区粒度可以根据导入频次、分区数据量等进行评估。")]),e._v(" "),t("li",[e._v("历史数据删除需求：如有删除历史数据的需求（比如仅保留最近N 天的数据）。使用复合分区，可以通过删除历史分区来达到目的。也可以通过在指定分区内发送 DELETE 语句进行数据删除。")]),e._v(" "),t("li",[e._v("解决数据倾斜问题：每个分区可以单独指定分桶数量。如按天分区，当每天的数据量差异很大时，可以通过指定分区的分桶数，合理划分不同分区的数据,分桶列建议选择区分度大的列。")])]),e._v(" "),t("p",[e._v("用户也可以不使用复合分区，即使用单分区。则数据只做 HASH 分布。")]),e._v(" "),t("p",[e._v("下面以聚合模型为例，分别演示两种分区的建表语句。")]),e._v(" "),t("h4",{attrs:{id:"单分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单分区"}},[e._v("#")]),e._v(" 单分区")]),e._v(" "),t("p",[e._v("建立一个名字为 table1 的逻辑表。分桶列为 siteid，桶数为 10。")]),e._v(" "),t("p",[e._v("这个表的 schema 如下：")]),e._v(" "),t("ul",[t("li",[e._v("siteid：类型是INT（4字节）, 默认值为10")]),e._v(" "),t("li",[e._v("citycode：类型是SMALLINT（2字节）")]),e._v(" "),t("li",[e._v("username：类型是VARCHAR, 最大长度为32, 默认值为空字符串")]),e._v(" "),t("li",[e._v("pv：类型是BIGINT（8字节）, 默认值是0; 这是一个指标列, Doris内部会对指标列做聚合操作, 这个列的聚合方法是求和（SUM）")])]),e._v(" "),t("p",[e._v("建表语句如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE TABLE table1\n(\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")])])]),t("h4",{attrs:{id:"复合分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复合分区"}},[e._v("#")]),e._v(" 复合分区")]),e._v(" "),t("p",[e._v("建立一个名字为 table2 的逻辑表。")]),e._v(" "),t("p",[e._v("这个表的 schema 如下：")]),e._v(" "),t("ul",[t("li",[e._v("event_day：类型是DATE，无默认值")]),e._v(" "),t("li",[e._v("siteid：类型是INT（4字节）, 默认值为10")]),e._v(" "),t("li",[e._v("citycode：类型是SMALLINT（2字节）")]),e._v(" "),t("li",[e._v("username：类型是VARCHAR, 最大长度为32, 默认值为空字符串")]),e._v(" "),t("li",[e._v("pv：类型是BIGINT（8字节）, 默认值是0; 这是一个指标列, Doris 内部会对指标列做聚合操作, 这个列的聚合方法是求和（SUM）")])]),e._v(" "),t("p",[e._v("我们使用 event_day 列作为分区列，建立3个分区: p201706, p201707, p201708")]),e._v(" "),t("ul",[t("li",[e._v("p201706：范围为 [最小值,     2017-07-01)")]),e._v(" "),t("li",[e._v("p201707：范围为 [2017-07-01, 2017-08-01)")]),e._v(" "),t("li",[e._v("p201708：范围为 [2017-08-01, 2017-09-01)")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意区间为左闭右开。")])]),e._v(" "),t("p",[e._v("每个分区使用 siteid 进行哈希分桶，桶数为10")]),e._v(" "),t("p",[e._v("建表语句如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE TABLE table2\n(\n    event_day DATE,\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nPARTITION BY RANGE(event_day)\n(\n    PARTITION p201706 VALUES LESS THAN ('2017-07-01'),\n    PARTITION p201707 VALUES LESS THAN ('2017-08-01'),\n    PARTITION p201708 VALUES LESS THAN ('2017-09-01')\n)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n")])])]),t("p",[e._v("表建完之后，可以查看 example_db 中表的信息:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL> SHOW TABLES;\n+----------------------+\n| Tables_in_example_db |\n+----------------------+\n| table1               |\n| table2               |\n+----------------------+\n2 rows in set (0.01 sec)\n\nMySQL> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | Yes  | true  | 10      |       |\n| citycode | smallint(6) | Yes  | true  | N/A     |       |\n| username | varchar(32) | Yes  | true  |         |       |\n| pv       | bigint(20)  | Yes  | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n4 rows in set (0.00 sec)\n\nMySQL> DESC table2;\n+-----------+-------------+------+-------+---------+-------+\n| Field     | Type        | Null | Key   | Default | Extra |\n+-----------+-------------+------+-------+---------+-------+\n| event_day | date        | Yes  | true  | N/A     |       |\n| siteid    | int(11)     | Yes  | true  | 10      |       |\n| citycode  | smallint(6) | Yes  | true  | N/A     |       |\n| username  | varchar(32) | Yes  | true  |         |       |\n| pv        | bigint(20)  | Yes  | false | 0       | SUM   |\n+-----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")])])]),t("blockquote",[t("p",[e._v("注意事项：")]),e._v(" "),t("ol",[t("li",[e._v("上述表通过设置 replication_num 建的都是单副本的表，Doris建议用户采用默认的 3 副本设置，以保证高可用。")]),e._v(" "),t("li",[e._v("可以对复合分区表动态的增删分区。详见 "),t("code",[e._v("HELP ALTER TABLE")]),e._v(" 中 Partition 相关部分。")]),e._v(" "),t("li",[e._v("数据导入可以导入指定的 Partition。详见 "),t("code",[e._v("HELP LOAD")]),e._v("。")]),e._v(" "),t("li",[e._v("可以动态修改表的 Schema。")]),e._v(" "),t("li",[e._v("可以对 Table 增加上卷表（Rollup）以提高查询性能，这部分可以参见高级使用指南关于 Rollup 的描述。")]),e._v(" "),t("li",[e._v("表的列的Null属性默认为true，会对查询性能有一定的影响。")])])]),e._v(" "),t("h3",{attrs:{id:"_2-4-导入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-导入数据"}},[e._v("#")]),e._v(" 2.4 导入数据")]),e._v(" "),t("p",[e._v("Doris 支持多种数据导入方式。具体可以参阅数据导入文档。这里我们使用流式导入和 Broker 导入做示例。")]),e._v(" "),t("h4",{attrs:{id:"流式导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流式导入"}},[e._v("#")]),e._v(" 流式导入")]),e._v(" "),t("p",[e._v("流式导入通过 HTTP 协议向 Doris 传输数据，可以不依赖其他系统或组件直接导入本地数据。详细语法帮助可以参阅 "),t("code",[e._v("HELP STREAM LOAD;")]),e._v("。")]),e._v(" "),t("p",[e._v('示例1：以 "table1_20170707" 为 Label，使用本地文件 table1_data 导入 table1 表。')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u test:test_passwd -H "label:table1_20170707" -H "column_separator:," -T table1_data http://FE_HOST:8030/api/example_db/table1/_stream_load\n')])])]),t("blockquote",[t("ol",[t("li",[e._v("FE_HOST 是任一 FE 所在节点 IP，8030 为 fe.conf 中的 http_port。")]),e._v(" "),t("li",[e._v("可以使用任一 BE 的 IP，以及 be.conf 中的 webserver_port 进行导入。如："),t("code",[e._v("BE_HOST:8040")])])])]),e._v(" "),t("p",[e._v("本地文件 "),t("code",[e._v("table1_data")]),e._v(" 以 "),t("code",[e._v(",")]),e._v(" 作为数据之间的分隔，具体内容如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1,1,jim,2\n2,1,grace,2\n3,2,tom,2\n4,3,bush,3\n5,3,helen,3\n")])])]),t("p",[e._v('示例2: 以 "table2_20170707" 为 Label，使用本地文件 table2_data 导入 table2 表。')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u test:test -H "label:table2_20170707" -H "column_separator:|" -T table2_data http://127.0.0.1:8030/api/example_db/table2/_stream_load\n')])])]),t("p",[e._v("本地文件 "),t("code",[e._v("table2_data")]),e._v(" 以 "),t("code",[e._v("|")]),e._v(" 作为数据之间的分隔，具体内容如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2017-07-03|1|1|jim|2\n2017-07-05|2|1|grace|2\n2017-07-12|3|2|tom|2\n2017-07-15|4|3|bush|3\n2017-07-12|5|3|helen|3\n")])])]),t("blockquote",[t("p",[e._v("注意事项：")]),e._v(" "),t("ol",[t("li",[e._v("采用流式导入建议文件大小限制在 10GB 以内，过大的文件会导致失败重试代价变大。")]),e._v(" "),t("li",[e._v("每一批导入数据都需要取一个 Label，Label 最好是一个和一批数据有关的字符串，方便阅读和管理。Doris 基于 Label 保证在一个Database 内，同一批数据只可导入成功一次。失败任务的 Label 可以重用。")]),e._v(" "),t("li",[e._v("流式导入是同步命令。命令返回成功则表示数据已经导入，返回失败表示这批数据没有导入。")])])]),e._v(" "),t("h4",{attrs:{id:"broker-导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-导入"}},[e._v("#")]),e._v(" Broker 导入")]),e._v(" "),t("p",[e._v("Broker 导入通过部署的 Broker 进程，读取外部存储上的数据进行导入。更多帮助请参阅 "),t("code",[e._v("HELP BROKER LOAD;")])]),e._v(" "),t("p",[e._v('示例：以 "table1_20170708" 为 Label，将 HDFS 上的文件导入 table1 表')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('LOAD LABEL table1_20170708\n(\n    DATA INFILE("hdfs://your.namenode.host:port/dir/table1_data")\n    INTO TABLE table1\n)\nWITH BROKER hdfs \n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n)\nPROPERTIES\n(\n    "timeout"="3600",\n    "max_filter_ratio"="0.1"\n);\n')])])]),t("p",[e._v("Broker 导入是异步命令。以上命令执行成功只表示提交任务成功。导入是否成功需要通过 "),t("code",[e._v("SHOW LOAD;")]),e._v(" 查看。如：")]),e._v(" "),t("p",[t("code",[e._v('SHOW LOAD WHERE LABEL = "table1_20170708";')])]),e._v(" "),t("p",[e._v("返回结果中，"),t("code",[e._v("State")]),e._v(" 字段为 FINISHED 则表示导入成功。")]),e._v(" "),t("p",[e._v("关于 "),t("code",[e._v("SHOW LOAD")]),e._v(" 的更多说明，可以参阅 "),t("code",[e._v("HELP SHOW LOAD;")])]),e._v(" "),t("p",[e._v("异步的导入任务在结束前可以取消：")]),e._v(" "),t("p",[t("code",[e._v('CANCEL LOAD WHERE LABEL = "table1_20170708";')])]),e._v(" "),t("h2",{attrs:{id:"_3-数据的查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据的查询"}},[e._v("#")]),e._v(" 3 数据的查询")]),e._v(" "),t("h3",{attrs:{id:"_3-1-简单查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简单查询"}},[e._v("#")]),e._v(" 3.1 简单查询")]),e._v(" "),t("p",[e._v("示例:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL> SELECT * FROM table1 LIMIT 3;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      5 |        3 | 'helen'  |    3 |\n|      3 |        2 | 'tom'    |    2 |\n+--------+----------+----------+------+\n3 rows in set (0.01 sec)\n\nMySQL> SELECT * FROM table1 ORDER BY citycode;\n+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      2 |        1 | 'grace'  |    2 |\n|      1 |        1 | 'jim'    |    2 |\n|      3 |        2 | 'tom'    |    2 |\n|      4 |        3 | 'bush'   |    3 |\n|      5 |        3 | 'helen'  |    3 |\n+--------+----------+----------+------+\n5 rows in set (0.01 sec)\n")])])]),t("h3",{attrs:{id:"_3-3-join-查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-join-查询"}},[e._v("#")]),e._v(" 3.3 Join 查询")]),e._v(" "),t("p",[e._v("示例:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL> SELECT SUM(table1.pv) FROM table1 JOIN table2 WHERE table1.siteid = table2.siteid;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 12 |\n+--------------------+\n1 row in set (0.20 sec)\n")])])]),t("h3",{attrs:{id:"_3-4-子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-子查询"}},[e._v("#")]),e._v(" 3.4 子查询")]),e._v(" "),t("p",[e._v("示例:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL> SELECT SUM(pv) FROM table2 WHERE siteid IN (SELECT siteid FROM table1 WHERE siteid > 2);\n+-----------+\n| sum(`pv`) |\n+-----------+\n|         8 |\n+-----------+\n1 row in set (0.13 sec)\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);
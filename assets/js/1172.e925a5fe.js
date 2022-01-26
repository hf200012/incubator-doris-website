(window.webpackJsonp=window.webpackJsonp||[]).push([[1172],{1626:function(n,e,s){"use strict";s.r(e);var a=s(56),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"broker-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[n._v("#")]),n._v(" BROKER LOAD")]),n._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" description")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("Broker load 通过随 Doris 集群一同部署的 broker 进行，访问对应数据源的数据，进行数据导入。\n可以通过 show broker 命令查看已经部署的 broker。\n目前支持以下4种数据源：\n\n1. Baidu HDFS：百度内部的 hdfs，仅限于百度内部使用。\n2. Baidu AFS：百度内部的 afs，仅限于百度内部使用。\n3. Baidu Object Storage(BOS)：百度对象存储。仅限百度内部用户、公有云用户或其他可以访问 BOS 的用户使用。\n4. Apache HDFS：社区版本 hdfs。\n5. Amazon S3：Amazon对象存储。\n")])])]),s("p",[n._v("语法：")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v('LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH [BROKER broker_name | S3]\n[load_properties]\n[opt_properties];\n\n1. load_label\n\n    当前导入批次的标签。在一个 database 内唯一。\n    语法：\n    [database_name.]your_label\n \n2. data_desc\n\n    用于描述一批导入数据。\n    语法：\n        [MERGE|APPEND|DELETE]\n        DATA INFILE\n        (\n        "file_path1"[, file_path2, ...]\n        )\n        [NEGATIVE]\n        INTO TABLE `table_name`\n        [PARTITION (p1, p2)]\n        [COLUMNS TERMINATED BY "column_separator"]\n        [FORMAT AS "file_type"]\n        [(column_list)]\n        [PRECEDING FILTER predicate]\n        [SET (k1 = func(k2))]\n        [WHERE predicate]\n        [DELETE ON label=true]\n        [ORDER BY source_sequence]\n        [read_properties]\n\n    说明：\n        file_path: \n\n        文件路径，可以指定到一个文件，也可以用 * 通配符指定某个目录下的所有文件。通配符必须匹配到文件，而不能是目录。\n\n        PARTITION:\n\n        如果指定此参数，则只会导入指定的分区，导入分区以外的数据会被过滤掉。\n        如果不指定，默认导入table的所有分区。\n    \n        NEGATIVE：\n        如果指定此参数，则相当于导入一批“负”数据。用于抵消之前导入的同一批数据。\n        该参数仅适用于存在 value 列，并且 value 列的聚合类型仅为 SUM 的情况。\n        \n        column_separator：\n\n        用于指定导入文件中的列分隔符。默认为 \\t\n        如果是不可见字符，则需要加\\\\x作为前缀，使用十六进制来表示分隔符。\n        如hive文件的分隔符\\x01，指定为"\\\\x01"\n        \n        file_type：\n\n        用于指定导入文件的类型，例如：parquet、orc、csv。默认值通过文件后缀名判断。 \n\n        column_list：\n\n        用于指定导入文件中的列和 table 中的列的对应关系。\n        当需要跳过导入文件中的某一列时，将该列指定为 table 中不存在的列名即可。\n        语法：\n        (col_name1, col_name2, ...)\n\n        PRECEDING FILTER predicate:\n\n        用于过滤原始数据。原始数据是未经列映射、转换的数据。用户可以在对转换前的数据前进行一次过滤，选取期望的数据，再进行转换。\n        \n        SET:\n\n        如果指定此参数，可以将源文件某一列按照函数进行转化，然后将转化后的结果导入到table中。语法为 `column_name` = expression。举几个例子帮助理解。\n        例1: 表中有3个列“c1, c2, c3", 源文件中前两列依次对应(c1,c2)，后两列之和对应c3；那么需要指定 columns (c1,c2,tmp_c3,tmp_c4) SET (c3=tmp_c3+tmp_c4); \n        例2: 表中有3个列“year, month, day"三个列，源文件中只有一个时间列，为”2018-06-01 01:02:03“格式。\n        那么可以指定 columns(tmp_time) set (year = year(tmp_time), month=month(tmp_time), day=day(tmp_time)) 完成导入。\n\n        WHERE:\n      \n        对做完 transform 的数据进行过滤，符合 where 条件的数据才能被导入。WHERE 语句中只可引用表中列名。\n\n        merge_type:\n\n        数据的合并类型，一共支持三种类型APPEND、DELETE、MERGE 其中，APPEND是默认值，表示这批数据全部需要追加到现有数据中，DELETE 表示删除与这批数据key相同的所有行，MERGE 语义 需要与delete on条件联合使用，表示满足delete 条件的数据按照DELETE 语义处理其余的按照APPEND 语义处理,\n\n        delete_on_predicates:\n\n        表示删除条件，仅在 merge type 为MERGE 时有意义，语法与where 相同\n        \n        ORDER BY:\n        \n        只适用于UNIQUE_KEYS,相同key列下，保证value列按照source_sequence进行REPLACE, source_sequence可以是数据源中的列，也可以是表结构中的一列。\n\n        read_properties:\n\n        用于指定一些特殊参数。\n        语法：\n        [PROPERTIES ("key"="value", ...)]\n\n        可以指定如下参数：\n\n        line_delimiter： 用于指定导入文件中的换行符，默认为\\n。可以使用做多个字符的组合作为换行符。\n\n        fuzzy_parse： 布尔类型，为true表示json将以第一行为schema 进行解析，开启这个选项可以提高json 导入效率，但是要求所有json 对象的key的顺序和第一行一致， 默认为false，仅用于json格式。\n\n        jsonpaths: 导入json方式分为：简单模式和匹配模式。\n        简单模式：没有设置jsonpaths参数即为简单模式，这种模式下要求json数据是对象类型，例如：\n        {"k1":1, "k2":2, "k3":"hello"}，其中k1，k2，k3是列名字。\n        匹配模式：用于json数据相对复杂，需要通过jsonpaths参数匹配对应的value。\n\n        strip_outer_array: 布尔类型，为true表示json数据以数组对象开始且将数组对象中进行展平，默认值是false。例如：\n        [\n         {"k1" : 1, "v1" : 2},\n         {"k1" : 3, "v1" : 4}\n         ]\n         当strip_outer_array为true，最后导入到doris中会生成两行数据。\n\n         json_root: json_root为合法的jsonpath字符串，用于指定json document的根节点，默认值为""。\n\n         num_as_string： 布尔类型，为true表示在解析json数据时会将数字类型转为字符串，然后在确保不会出现精度丢失的情况下进行导入。\n\n  3. broker_name\n\n    所使用的 broker 名称，可以通过 show broker 命令查看。\n\n4. load_properties\n\n    用于提供通过 broker 访问数据源的信息。不同的 broker，以及不同的访问方式，需要提供的信息不同。\n\n    1. Baidu HDFS/AFS\n\n        访问百度内部的 hdfs/afs 目前仅支持简单认证，需提供：\n        username：hdfs 用户名\n        password：hdfs 密码\n\n    2. BOS\n\n        需提供：\n        bos_endpoint：BOS 的endpoint\n        bos_accesskey：公有云用户的 accesskey\n        bos_secret_accesskey：公有云用户的 secret_accesskey\n    \n    3. Apache HDFS\n\n        社区版本的 hdfs，支持简单认证、kerberos 认证。以及支持 HA 配置。\n        简单认证：\n        hadoop.security.authentication = simple (默认)\n        username：hdfs 用户名\n        password：hdfs 密码\n\n        kerberos 认证：\n        hadoop.security.authentication = kerberos\n        kerberos_principal：指定 kerberos 的 principal\n        kerberos_keytab：指定 kerberos 的 keytab 文件路径。该文件必须为 broker 进程所在服务器上的文件。\n        kerberos_keytab_content：指定 kerberos 中 keytab 文件内容经过 base64 编码之后的内容。这个跟 kerberos_keytab 配置二选一就可以。\n\n        namenode HA：\n        通过配置 namenode HA，可以在 namenode 切换时，自动识别到新的 namenode\n        dfs.nameservices: 指定 hdfs 服务的名字，自定义，如："dfs.nameservices" = "my_ha"\n        dfs.ha.namenodes.xxx：自定义 namenode 的名字,多个名字以逗号分隔。其中 xxx 为 dfs.nameservices 中自定义的名字，如 "dfs.ha.namenodes.my_ha" = "my_nn"\n        dfs.namenode.rpc-address.xxx.nn：指定 namenode 的rpc地址信息。其中 nn 表示 dfs.ha.namenodes.xxx 中配置的 namenode 的名字，如："dfs.namenode.rpc-address.my_ha.my_nn" = "host:port"\n        dfs.client.failover.proxy.provider：指定 client 连接 namenode 的 provider，默认为：org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n\n    4. Amazon S3\n\n        需提供：\n        fs.s3a.access.key：AmazonS3的access key\n        fs.s3a.secret.key：AmazonS3的secret key\n        fs.s3a.endpoint：AmazonS3的endpoint \n    5. 如果使用S3协议直接连接远程存储时需要指定如下属性\n\n        (\n            "AWS_ENDPOINT" = "",\n            "AWS_ACCESS_KEY" = "",\n            "AWS_SECRET_KEY"="",\n            "AWS_REGION" = ""\n        )\n    6. 如果使用HDFS协议直接连接远程存储时需要指定如下属性\n        (\n            "fs.defaultFS" = "",\n            "hdfs_user"="",\n            "dfs.nameservices"="my_ha",\n            "dfs.ha.namenodes.xxx"="my_nn1,my_nn2",\n            "dfs.namenode.rpc-address.xxx.my_nn1"="host1:port",\n            "dfs.namenode.rpc-address.xxx.my_nn2"="host2:port",\n            "dfs.client.failover.proxy.provider.xxx"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n        )\n        fs.defaultFS: hdfs集群defaultFS\n        hdfs_user: 连接hdfs集群时使用的用户名\n        namenode HA：\n        通过配置 namenode HA，可以在 namenode 切换时，自动识别到新的 namenode\n        dfs.nameservices: 指定 hdfs 服务的名字，自定义，如："dfs.nameservices" = "my_ha"\n        dfs.ha.namenodes.xxx：自定义 namenode 的名字,多个名字以逗号分隔。其中 xxx 为 dfs.nameservices 中自定义的名字，如 "dfs.ha.namenodes.my_ha" = "my_nn"\n        dfs.namenode.rpc-address.xxx.nn：指定 namenode 的rpc地址信息。其中 nn 表示 dfs.ha.namenodes.xxx 中配置的 namenode 的名字，如："dfs.namenode.rpc-address.my_ha.my_nn" = "host:port"\n        dfs.client.failover.proxy.provider：指定 client 连接 namenode 的 provider，默认为：org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n    \n4. opt_properties\n\n    用于指定一些特殊参数。\n    语法：\n    [PROPERTIES ("key"="value", ...)]\n    \n    可以指定如下参数：\n    timeout：         指定导入操作的超时时间。默认超时为4小时。单位秒。\n    max_filter_ratio：最大容忍可过滤（数据不规范等原因）的数据比例。默认零容忍。\n    exec_mem_limit：  导入内存限制。默认为 2GB。单位为字节。\n    strict mode：     是否对数据进行严格限制。默认为 false。\n    timezone:         指定某些受时区影响的函数的时区，如 strftime/alignment_timestamp/from_unixtime 等等，具体请查阅 [时区] 文档。如果不指定，则使用 "Asia/Shanghai" 时区。\n    send_batch_parallelism: 用于设置发送批处理数据的并行度，如果并行度的值超过 BE 配置中的 `max_send_batch_parallelism_per_job`，那么作为协调点的 BE 将使用 `max_send_batch_parallelism_per_job` 的值。\n\n5. 导入数据格式样例\n\n    整型类（TINYINT/SMALLINT/INT/BIGINT/LARGEINT）：1, 1000, 1234\n    浮点类（FLOAT/DOUBLE/DECIMAL）：1.1, 0.23, .356\n    日期类（DATE/DATETIME）：2017-10-03, 2017-06-13 12:34:03。\n    （注：如果是其他日期格式，可以在导入命令中，使用 strftime 或者 time_format 函数进行转换）\n    字符串类（CHAR/VARCHAR）："I am a student", "a"\n    NULL值：\\N\n')])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v('1. 从 HDFS 导入一批数据，指定超时时间和过滤比例。使用明文 my_hdfs_broker 的 broker。简单认证。\n\n    LOAD LABEL example_db.label1\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "username" = "hdfs_user",\n    "password" = "hdfs_passwd"\n    )\n    PROPERTIES\n    (\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n\n    其中 hdfs_host 为 namenode 的 host，hdfs_port 为 fs.defaultFS 端口（默认9000）\n\n2. 从 AFS 一批数据，包含多个文件。导入不同的 table，指定分隔符，指定列对应关系。\n\n    LOAD LABEL example_db.label2\n    (\n    DATA INFILE("afs://afs_host:hdfs_port/user/palo/data/input/file1")\n    INTO TABLE `my_table_1`\n    COLUMNS TERMINATED BY ","\n    (k1, k3, k2, v1, v2),\n    DATA INFILE("afs://afs_host:hdfs_port/user/palo/data/input/file2")\n    INTO TABLE `my_table_2`\n    COLUMNS TERMINATED BY "\\t"\n    (k1, k2, k3, v2, v1)\n    )\n    WITH BROKER my_afs_broker\n    (\n    "username" = "afs_user",\n    "password" = "afs_passwd"\n    )\n    PROPERTIES\n    (\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n    \n\n3. 从 HDFS 导入一批数据，指定hive的默认分隔符\\x01，并使用通配符*指定目录下的所有文件。\n   使用简单认证，同时配置 namenode HA\n\n    LOAD LABEL example_db.label3\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/*")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\\\x01"\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "username" = "hdfs_user",\n    "password" = "hdfs_passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    )\n\n4. 从 HDFS 导入一批“负”数据。同时使用 kerberos 认证方式。提供 keytab 文件路径。\n\n    LOAD LABEL example_db.label4\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/old_file)\n    NEGATIVE\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\t"\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal"="doris@YOUR.COM",\n    "kerberos_keytab"="/home/palo/palo.keytab"\n    )\n\n5. 从 HDFS 导入一批数据，指定分区。同时使用 kerberos 认证方式。提供 base64 编码后的 keytab 文件内容。\n\n    LOAD LABEL example_db.label5\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, k3, k2, v1, v2)\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "hadoop.security.authentication"="kerberos",\n    "kerberos_principal"="doris@YOUR.COM",\n    "kerberos_keytab_content"="BQIAAABEAAEACUJBSURVLkNPTQAEcGFsbw"\n    )\n\n6. 从 BOS 导入一批数据，指定分区, 并对导入文件的列做一些转化，如下：\n   表结构为：\n    k1 varchar(20)\n    k2 int\n\n    假设数据文件只有一行数据：\n\n    Adele,1,1\n\n    数据文件中各列，对应导入语句中指定的各列：\n    k1,tmp_k2,tmp_k3\n\n    转换如下：\n\n    1) k1: 不变换\n    2) k2：是 tmp_k2 和 tmp_k3 数据之和\n\n    LOAD LABEL example_db.label6\n    (\n    DATA INFILE("bos://my_bucket/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n      k2 = tmp_k2 + tmp_k3\n    )\n    )\n    WITH BROKER my_bos_broker\n    (\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyy"\n    )\n\n7. 导入数据到含有HLL列的表，可以是表中的列或者数据里面的列\n\n    如果表中有4列分别是（id,v1,v2,v3）。其中v1和v2列是hll列。导入的源文件有3列, 其中表中的第一列 = 源文件中的第一列，而表中的第二，三列为源文件中的第二，三列变换得到，表中的第四列在源文件中并不存在。\n    则（column_list）中声明第一列为id，第二三列为一个临时命名的k1,k2。\n    在SET中必须给表中的hll列特殊声明 hll_hash。表中的v1列等于原始数据中的hll_hash(k1)列, 表中的v3列在原始数据中并没有对应的值，使用empty_hll补充默认值。\n    LOAD LABEL example_db.label7\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (id, k1, k2)\n    SET (\n      v1 = hll_hash(k1),\n      v2 = hll_hash(k2),\n      v3 = empty_hll()\n    )\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n    LOAD LABEL example_db.label8\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, k2, tmp_k3, tmp_k4, v1, v2)\n    SET (\n      v1 = hll_hash(tmp_k3),\n      v2 = hll_hash(tmp_k4)\n    )\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n8. 导入Parquet文件中数据  指定FORMAT 为parquet， 默认是通过文件后缀判断\n\n    LOAD LABEL example_db.label9\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "parquet"\n    (k1, k2, k3)\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n9. 提取文件路径中的分区字段\n\n    如果需要，则会根据表中定义的字段类型解析文件路径中的分区字段（partitioned fields），类似Spark中Partition Discovery的功能\n\n    LOAD LABEL example_db.label10\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/*/*")\n    INTO TABLE `my_table`\n    FORMAT AS "csv"\n    (k1, k2, k3)\n    COLUMNS FROM PATH AS (city, utc_date)\n    SET (uniq_id = md5sum(k1, city))\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n    hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing目录下包括如下文件：\n\n    [hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/utc_date=2019-06-26/0000.csv, hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/utc_date=2019-06-26/0001.csv, ...]\n\n    则提取文件路径的中的city和utc_date字段\n\n10. 对待导入数据进行过滤，k1 值大于 k2 值的列才能被导入\n\n    LOAD LABEL example_db.label10\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    where k1 > k2\n    )\n\n11. 从 AmazonS3 导入Parquet文件中数据，指定 FORMAT 为parquet，默认是通过文件后缀判断：\n    \n    LOAD LABEL example_db.label11\n    (\n    DATA INFILE("s3a://my_bucket/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "parquet"\n    (k1, k2, k3)\n    )\n    WITH BROKER my_s3a_broker\n    (\n    "fs.s3a.access.key" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "fs.s3a.secret.key" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.s3a.endpoint" = "s3.amazonaws.com"\n    )\n\n12. 提取文件路径中的时间分区字段，并且时间包含 %3A (在 hdfs 路径中，不允许有 \':\'，所有 \':\' 会由 %3A 替换)\n\n    假设有如下文件：\n\n    /user/data/data_time=2020-02-17 00%3A00%3A00/test.txt\n    /user/data/data_time=2020-02-18 00%3A00%3A00/test.txt\n\n    表结构为：\n    data_time DATETIME,\n    k2        INT,\n    k3        INT\n\n    LOAD LABEL example_db.label12\n    (\n     DATA INFILE("hdfs://host:port/user/data/*/test.txt") \n     INTO TABLE `tbl12`\n     COLUMNS TERMINATED BY ","\n     (k2,k3)\n     COLUMNS FROM PATH AS (data_time)\n     SET (data_time=str_to_date(data_time, \'%Y-%m-%d %H%%3A%i%%3A%s\'))\n    ) \n    WITH BROKER "hdfs" ("username"="user", "password"="pass");\n\n13. 从 HDFS 导入一批数据，指定超时时间和过滤比例。使用明文 my_hdfs_broker 的 broker。简单认证。并且将原有数据中与 导入数据中v2 大于100 的列相匹配的列删除，其他列正常导入\n\n    LOAD LABEL example_db.label1\n    (\n    MERGE DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\t"\n    (k1, k2, k3, v2, v1)\n    )\n    DELETE ON v2 >100\n    WITH BROKER my_hdfs_broker\n    (\n    "username" = "hdfs_user",\n    "password" = "hdfs_passwd"\n    )\n    PROPERTIES\n    (\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n    \n14. 导入时指定source_sequence列，保证UNIQUE_KEYS表中的替换顺序：\n    LOAD LABEL example_db.label_sequence\n    (\n     DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n     INTO TABLE `tbl1`\n     COLUMNS TERMINATED BY ","\n     (k1,k2,source_sequence,v1,v2)\n     ORDER BY source_sequence\n    ) \n    with BROKER "hdfs" ("username"="user", "password"="pass");\n\n15. 先过滤原始数据，在进行列的映射、转换和过滤操作\n\n    LOAD LABEL example_db.label_filter\n    (\n     DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n     INTO TABLE `tbl1`\n     COLUMNS TERMINATED BY ","\n     (k1,k2,v1,v2)\n     PRECEDING FILTER k1 > 2\n     SET (k1 = k1 +1)\n     WHERE k1 > 3\n    ) \n    with BROKER "hdfs" ("username"="user", "password"="pass");\n\n 16. 导入json文件中数据  指定FORMAT为json， 默认是通过文件后缀判断，设置读取数据的参数\n\n    LOAD LABEL example_db.label9\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    (k1, k2, k3)\n    properties("fuzzy_parse"="true", "strip_outer_array"="true")\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n 17. LOAD WITH HDFS, 普通HDFS集群\n    LOAD LABEL example_db.label_filter\n    (\n        DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n        INTO TABLE `tbl1`\n        COLUMNS TERMINATED BY ","\n        (k1,k2,v1,v2)\n    ) \n    with HDFS (\n        "fs.defaultFS"="hdfs://testFs",\n        "hdfs_user"="user"\n    );\n 18. LOAD WITH HDFS, 带ha的HDFS集群\n    LOAD LABEL example_db.label_filter\n    (\n        DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n        INTO TABLE `tbl1`\n        COLUMNS TERMINATED BY ","\n        (k1,k2,v1,v2)\n    ) \n    with HDFS (\n        "fs.defaultFS"="hdfs://testFs",\n        "hdfs_user"="user"\n        "dfs.nameservices"="my_ha",\n        "dfs.ha.namenodes.xxx"="my_nn1,my_nn2",\n        "dfs.namenode.rpc-address.xxx.my_nn1"="host1:port",\n        "dfs.namenode.rpc-address.xxx.my_nn2"="host2:port",\n        "dfs.client.failover.proxy.provider.xxx"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("BROKER,LOAD")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
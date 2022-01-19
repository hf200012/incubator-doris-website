(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1e3:function(e,n,t){"use strict";t.r(n);var a=t(56),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"broker-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[e._v("#")]),e._v(" BROKER LOAD")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Broker load will load data into Doris via Broker.\nUse `show broker;` to see the Broker deployed in cluster.\n\nSupport following data sources:\n\n1. Baidu HDFS: hdfs for Baidu. Only be used inside Baidu.\n2. Baidu AFS: afs for Baidu. Only be used inside Baidu.\n3. Baidu Object Storage(BOS): BOS on Baidu Cloud.\n4. Apache HDFS.\n5. Amazon S3：Amazon S3。\n")])])]),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH [BROKER broker_name | S3]\n[load_properties]\n[opt_properties];\n\n1. load_label\n\n    Unique load label within a database.\n    syntax:\n    [database_name.]your_label\n \n2. data_desc\n\n    To describe the data source. \n    syntax:\n        [MERGE|APPEND|DELETE]\n        DATA INFILE\n        (\n        "file_path1"[, file_path2, ...]\n        )\n        [NEGATIVE]\n        INTO TABLE `table_name`\n        [PARTITION (p1, p2)]\n        [COLUMNS TERMINATED BY "column_separator"]\n        [FORMAT AS "file_type"]\n        [(column_list)]\n        [PRECEDING FILTER predicate]\n        [SET (k1 = func(k2))]\n        [WHERE predicate] \n        [DELETE ON label=true]\n        [read_properties]\n\n    Explain:\n        file_path: \n\n        File path. Support wildcard. Must match to file, not directory. \n\n        PARTITION:\n\n        Data will only be loaded to specified partitions. Data out of partition\'s range will be filtered. If not specifed, all partitions will be loaded.\n                \n        NEGATIVE:\n        \n        If this parameter is specified, it is equivalent to importing a batch of "negative" data to offset the same batch of data loaded before.\n        \n        This parameter applies only to the case where there are value columns and the aggregation type of value columns is only SUM.\n        \n        column_separator: \n        \n        Used to specify the column separator in the import file. Default is `\\t`.\n        If the character is invisible, it needs to be prefixed with `\\\\x`, using hexadecimal to represent the separator.\n\n        For example, the separator `\\x01` of the hive file is specified as `\\\\ x01`\n        \n        file_type: \n\n        Used to specify the type of imported file, such as parquet, orc, csv. Default values are determined by the file suffix name. \n\n        column_list:\n\n        Used to specify the correspondence between columns in the import file and columns in the table.\n\n        When you need to skip a column in the import file, specify it as a column name that does not exist in the table.\n\n        syntax:\n        (col_name1, col_name2, ...)\n\n        PRECEDING FILTER predicate:\n\n        Used to filter original data. The original data is the data without column mapping and transformation. The user can filter the data before conversion, select the desired data, and then perform the conversion.\n        \n        SET:\n        \n        If this parameter is specified, a column of the source file can be transformed according to a function, and then the transformed result can be loaded into the table. The grammar is `column_name = expression`. Some examples are given to help understand.\n\n        Example 1: There are three columns "c1, c2, c3" in the table. The first two columns in the source file correspond in turn (c1, c2), and the last two columns correspond to c3. Then, column (c1, c2, tmp_c3, tmp_c4) SET (c3 = tmp_c3 + tmp_c4) should be specified.\n\n        Example 2: There are three columns "year, month, day" in the table. There is only one time column in the source file, in the format of "2018-06-01:02:03". Then you can specify columns (tmp_time) set (year = year (tmp_time), month = month (tmp_time), day = day (tmp_time)) to complete the import.\n\n        WHERE:\n      \n        After filtering the transformed data, data that meets where predicates can be loaded. Only column names in tables can be referenced in WHERE statements.\n\n        merge_type:\n\n        The type of data merging supports three types: APPEND, DELETE, and MERGE. APPEND is the default value, which means that all this batch of data needs to be appended to the existing data. DELETE means to delete all rows with the same key as this batch of data. MERGE semantics Need to be used in conjunction with the delete condition, which means that the data that meets the delete on condition is processed according to DELETE semantics and the rest is processed according to APPEND semantics\n\n        delete_on_predicates:\n\n        Only used when merge type is MERGE\n\n        read_properties:\n\n        Used to specify some special parameters.\n        Syntax：\n        [PROPERTIES ("key"="value", ...)]\n    \n        You can specify the following parameters:\n            \n          line_delimiter： Used to specify the line delimiter in the load file. The default is `\\n`. You can use a combination of multiple characters as the column separator.\n\n          fuzzy_parse： Boolean type, true to indicate that parse json schema as the first line, this can make import more faster,but need all key keep the order of first line, default value is false. Only use for json format.\n        \n          jsonpaths: There are two ways to import json: simple mode and matched mode.\n            simple mode: it is simple mode without setting the jsonpaths parameter. In this mode, the json data is required to be the object type. For example:\n            {"k1": 1, "k2": 2, "k3": "hello"}, where k1, k2, k3 are column names.\n\n            matched mode: the json data is relatively complex, and the corresponding value needs to be matched through the jsonpaths parameter.\n        \n          strip_outer_array: Boolean type, true to indicate that json data starts with an array object and flattens objects in the array object, default value is false. For example：\n            [\n              {"k1" : 1, "v1" : 2},\n              {"k1" : 3, "v1" : 4}\n            ]\n          if strip_outer_array is true, and two rows of data are generated when imported into Doris.\n       \n          json_root: json_root is a valid JSONPATH string that specifies the root node of the JSON Document. The default value is "".\n       \n          num_as_string: Boolean type, true means that when parsing the json data, it will be converted into a number type and converted into a string, and then it will be imported without loss of precision.\n        \n3. broker_name\n\n    The name of the Broker used can be viewed through the `show broker` command.\n\n4. load_properties\n\n    Used to provide Broker access to data sources. Different brokers, and different access methods, need to provide different information.\n\n    1. Baidu HDFS/AFS\n\n        Access to Baidu\'s internal hdfs/afs currently only supports simple authentication, which needs to be provided:\n        \n        username: hdfs username\n        password: hdfs password\n\n    2. BOS\n\n        bos_endpoint.\n        bos_accesskey: cloud user\'s accesskey\n        bos_secret_accesskey: cloud user\'s secret_accesskey\n    \n    3. Apache HDFS\n\n        Community version of HDFS supports simple authentication, Kerberos authentication, and HA configuration.\n\n        Simple authentication:\n        hadoop.security.authentication = simple (default)\n        username: hdfs username\n        password: hdfs password\n\n        kerberos authentication: \n        hadoop.security.authentication = kerberos\n        kerberos_principal: kerberos\'s principal\n        kerberos_keytab: path of kerberos\'s keytab file. This file should be able to access by Broker\n        kerberos_keytab_content: Specify the contents of the KeyTab file in Kerberos after base64 encoding. This option is optional from the kerberos_keytab configuration. \n\n        namenode HA: \n        By configuring namenode HA, new namenode can be automatically identified when the namenode is switched\n        dfs.nameservices: hdfs service name, customize, eg: "dfs.nameservices" = "my_ha"\n        dfs.ha.namenodes.xxx: Customize the name of a namenode, separated by commas. XXX is a custom name in dfs. name services, such as "dfs. ha. namenodes. my_ha" = "my_nn"\n        dfs.namenode.rpc-address.xxx.nn: Specify RPC address information for namenode, where NN denotes the name of the namenode configured in dfs.ha.namenodes.xxxx, such as: "dfs.namenode.rpc-address.my_ha.my_nn"= "host:port"\n        dfs.client.failover.proxy.provider: Specify the provider that client connects to namenode by default: org. apache. hadoop. hdfs. server. namenode. ha. Configured Failover ProxyProvider.\n    4. Amazon S3\n\n        fs.s3a.access.key：AmazonS3的access key\n        fs.s3a.secret.key：AmazonS3的secret key\n        fs.s3a.endpoint：AmazonS3的endpoint \n    5. If using the S3 protocol to directly connect to the remote storage, you need to specify the following attributes \n\n        (\n            "AWS_ENDPOINT" = "",\n            "AWS_ACCESS_KEY" = "",\n            "AWS_SECRET_KEY"="",\n            "AWS_REGION" = ""\n        )\n    6. if using load with hdfs, you need to specify the following attributes \n        (\n            "fs.defaultFS" = "",\n            "hdfs_user"="",\n            "dfs.nameservices"="my_ha",\n            "dfs.ha.namenodes.xxx"="my_nn1,my_nn2",\n            "dfs.namenode.rpc-address.xxx.my_nn1"="host1:port",\n            "dfs.namenode.rpc-address.xxx.my_nn2"="host2:port",\n            "dfs.client.failover.proxy.provider.xxx"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n        )\n        fs.defaultFS: defaultFS\n        hdfs_user: hdfs user\n        namenode HA：\n        By configuring namenode HA, new namenode can be automatically identified when the namenode is switched\n        dfs.nameservices: hdfs service name, customize, eg: "dfs.nameservices" = "my_ha"\n        dfs.ha.namenodes.xxx: Customize the name of a namenode, separated by commas. XXX is a custom name in dfs. name services, such as "dfs. ha. namenodes. my_ha" = "my_nn"\n        dfs.namenode.rpc-address.xxx.nn: Specify RPC address information for namenode, where NN denotes the name of the namenode configured in dfs.ha.namenodes.xxxx, such as: "dfs.namenode.rpc-address.my_ha.my_nn"= "host:port"\n        dfs.client.failover.proxy.provider: Specify the provider that client connects to namenode by default: org. apache. hadoop. hdfs. server. namenode. ha. Configured Failover ProxyProvider.\n\n4. opt_properties\n\n    Used to specify some special parameters. \n    Syntax:\n    [PROPERTIES ("key"="value", ...)]\n    \n    You can specify the following parameters:\n    \n    timout: Specifies the timeout time for the import operation. The default timeout is 4 hours per second.\n\n    max_filter_ratio: Data ratio of maximum tolerance filterable (data irregularity, etc.). Default zero tolerance.\n\n    exc_mem_limit: Memory limit. Default is 2GB. Unit is Bytes.\n    \n    strict_mode: Whether the data is strictly restricted. The default is false.\n\n    timezone: Specify time zones for functions affected by time zones, such as strftime/alignment_timestamp/from_unixtime, etc. See the documentation for details. If not specified, use the "Asia/Shanghai" time zone.\n\n    send_batch_parallelism: Used to set the default parallelism for sending batch, if the value for parallelism exceed `max_send_batch_parallelism_per_job` in BE config, then the coordinator BE will use the value of `max_send_batch_parallelism_per_job`.\n\n5. Load data format sample\n\n    Integer（TINYINT/SMALLINT/INT/BIGINT/LARGEINT）: 1, 1000, 1234\n    Float（FLOAT/DOUBLE/DECIMAL）: 1.1, 0.23, .356\n    Date（DATE/DATETIME）: 2017-10-03, 2017-06-13 12:34:03. \n    (Note: If it\'s in other date formats, you can use strftime or time_format functions to convert in the import command)\n    \n    String（CHAR/VARCHAR）: "I am a student", "a"\n    NULL: \\N\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. Load a batch of data from HDFS, specify timeout and filtering ratio. Use the broker with the plaintext ugi my_hdfs_broker. Simple authentication.\n\n    LOAD LABEL example_db.label1\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "username" = "hdfs_user",\n    "password" = "hdfs_passwd"\n    )\n    PROPERTIES\n    (\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n\n    Where hdfs_host is the host of the namenode and hdfs_port is the fs.defaultFS port (default 9000)\n    \n2. Load a batch of data from AFS contains multiple files. Import different tables, specify separators, and specify column correspondences.\n\n    LOAD LABEL example_db.label2\n    (\n    DATA INFILE("afs://afs_host:hdfs_port/user/palo/data/input/file1")\n    INTO TABLE `my_table_1`\n    COLUMNS TERMINATED BY ","\n    (k1, k3, k2, v1, v2),\n    DATA INFILE("afs://afs_host:hdfs_port/user/palo/data/input/file2")\n    INTO TABLE `my_table_2`\n    COLUMNS TERMINATED BY "\\t"\n    (k1, k2, k3, v2, v1)\n    )\n    WITH BROKER my_afs_broker\n    (\n    "username" = "afs_user",\n    "password" = "afs_passwd"\n    )\n    PROPERTIES\n    (\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n    \n\n3. Load a batch of data from HDFS, specify hive\'s default delimiter \\\\x01, and use wildcard * to specify all files in the directory. Use simple authentication and configure namenode HA at the same time\n\n    LOAD LABEL example_db.label3\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/*")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\\\x01"\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "username" = "hdfs_user",\n    "password" = "hdfs_passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    )\n\n4. Load a batch of "negative" data from HDFS. Use Kerberos authentication to provide KeyTab file path.\n\n    LOAD LABEL example_db.label4\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/old_file)\n    NEGATIVE\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\t"\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal"="doris@YOUR.COM",\n    "kerberos_keytab"="/home/palo/palo.keytab"\n    )\n\n5. Load a batch of data from HDFS, specify partition. At the same time, use Kerberos authentication mode. Provide the KeyTab file content encoded by base64.\n\n    LOAD LABEL example_db.label5\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, k3, k2, v1, v2)\n    )\n    WITH BROKER my_hdfs_broker\n    (\n    "hadoop.security.authentication"="kerberos",\n    "kerberos_principal"="doris@YOUR.COM",\n    "kerberos_keytab_content"="BQIAAABEAAEACUJBSURVLkNPTQAEcGFsbw"\n    )\n\n6. Load a batch of data from BOS, specify partitions, and make some transformations to the columns of the imported files, as follows:\n\n   Table schema: \n    k1 varchar(20)\n    k2 int\n\n    Assuming that the data file has only one row of data:\n\n    Adele,1,1\n\n    The columns in the data file correspond to the columns specified in the load statement:\n    \n    k1,tmp_k2,tmp_k3\n\n    transform as: \n\n    1) k1: unchanged\n    2) k2: sum of tmp_k2 and tmp_k3\n\n    LOAD LABEL example_db.label6\n    (\n    DATA INFILE("bos://my_bucket/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n      k2 = tmp_k2 + tmp_k3\n    )\n    )\n    WITH BROKER my_bos_broker\n    (\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey"="yyyyyyyyyyyyyyyyyyyy"\n    )\n\n7. Load data into tables containing HLL columns, which can be columns in tables or columns in data\n\n    If there are 4 columns in the table are (id, v1, v2, v3). The v1 and v2 columns are hll columns. The imported source file has 3 columns, where the first column in the table = the first column in the source file, and the second and third columns in the table are the second and third columns in the source file, and the third column in the table is transformed. The four columns do not exist in the source file.\n    Then (column_list) declares that the first column is id, and the second and third columns are temporarily named k1, k2.\n\n    In SET, the HLL column in the table must be specifically declared hll_hash. The V1 column in the table is equal to the hll_hash (k1) column in the original data.The v3 column in the table does not have a corresponding value in the original data, and empty_hll is used to supplement the default value.\n\n    LOAD LABEL example_db.label7\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (id, k1, k2)\n    SET (\n      v1 = hll_hash(k1),\n      v2 = hll_hash(k2),\n      v3 = empty_hll()\n    )\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n    LOAD LABEL example_db.label8\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, k2, tmp_k3, tmp_k4, v1, v2)\n    SET (\n      v1 = hll_hash(tmp_k3),\n      v2 = hll_hash(tmp_k4)\n    )\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n8. Data in load Parquet file specifies FORMAT as parquet. By default, it is judged by file suffix.\n\n    LOAD LABEL example_db.label9\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "parquet"\n    (k1, k2, k3)\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n9. Extract partition fields in file paths\n\n    If necessary, partitioned fields in the file path are resolved based on the field type defined in the table, similar to the Partition Discovery function in Spark.\n\n    LOAD LABEL example_db.label10\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/*/*")\n    INTO TABLE `my_table`\n    FORMAT AS "csv"\n    (k1, k2, k3)\n    COLUMNS FROM PATH AS (city, utc_date)\n    SET (uniq_id = md5sum(k1, city))\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\n\n    Directory `hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing` contains following files:\n     \n    [hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/utc_date=2019-06-26/0000.csv, hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/utc_date=2019-06-26/0001.csv, ...]\n\n    Extract city and utc_date fields in the file path\n\n10. To filter the load data, columns whose K1 value is greater than K2 value can be imported.\n\n    LOAD LABEL example_db.label10\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    where k1 > k2\n    );\n\n11. Extract date partition fields in file paths, and date time include %3A (in hdfs path, all \':\' will be replaced by \'%3A\')\n\n    Assume we have files:\n\n    /user/data/data_time=2020-02-17 00%3A00%3A00/test.txt\n    /user/data/data_time=2020-02-18 00%3A00%3A00/test.txt\n\n    Table schema is:\n    data_time DATETIME,\n    k2        INT,\n    k3        INT\n\n    LOAD LABEL example_db.label12\n    (\n     DATA INFILE("hdfs://host:port/user/data/*/test.txt") \n     INTO TABLE `tbl12`\n     COLUMNS TERMINATED BY ","\n     (k2,k3)\n     COLUMNS FROM PATH AS (data_time)\n     SET (data_time=str_to_date(data_time, \'%Y-%m-%d %H%%3A%i%%3A%s\'))\n    ) \n    WITH BROKER "hdfs" ("username"="user", "password"="pass");\n\n12. Load a batch of data from HDFS, specify timeout and filtering ratio. Use the broker with the plaintext ugi my_hdfs_broker. Simple authentication. delete the data when v2 >100, other append\n\n    LOAD LABEL example_db.label1\n    (\n    MERGE DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\t"\n    (k1, k2, k3, v2, v1)\n    )\n    DELETE ON v2 >100\n    WITH BROKER my_hdfs_broker\n    (\n    "username" = "hdfs_user",\n    "password" = "hdfs_passwd"\n    )\n    PROPERTIES\n    (\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n    );\n\n13. Filter the original data first, and perform column mapping, conversion and filtering operations\n\n    LOAD LABEL example_db.label_filter\n    (\n     DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n     INTO TABLE `tbl1`\n     COLUMNS TERMINATED BY ","\n     (k1,k2,v1,v2)\n     PRECEDING FILTER k1 > 2\n     SET (k1 = k1 +1)\n     WHERE k1 > 3\n    ) \n    with BROKER "hdfs" ("username"="user", "password"="pass");\n\n14. Import the data in the json file, and specify format as json, it is judged by the file suffix by default, set parameters for reading data\n\n    LOAD LABEL example_db.label9\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    (k1, k2, k3)\n    properties("fuzzy_parse"="true", "strip_outer_array"="true")\n    )\n    WITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");   \n\n15. LOAD WITH HDFS, normal HDFS cluster\n    LOAD LABEL example_db.label_filter\n    (\n        DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n        INTO TABLE `tbl1`\n        COLUMNS TERMINATED BY ","\n        (k1,k2,v1,v2)\n    ) \n    with HDFS (\n        "fs.defaultFS"="hdfs://testFs",\n        "hdfs_user"="user"\n    );\n16. LOAD WITH HDFS, hdfs ha\n    LOAD LABEL example_db.label_filter\n    (\n        DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n        INTO TABLE `tbl1`\n        COLUMNS TERMINATED BY ","\n        (k1,k2,v1,v2)\n    ) \n    with HDFS (\n        "fs.defaultFS"="hdfs://testFs",\n        "hdfs_user"="user"\n        "dfs.nameservices"="my_ha",\n        "dfs.ha.namenodes.xxx"="my_nn1,my_nn2",\n        "dfs.namenode.rpc-address.xxx.my_nn1"="host1:port",\n        "dfs.namenode.rpc-address.xxx.my_nn2"="host2:port",\n        "dfs.client.failover.proxy.provider.xxx"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n    );\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("BROKER,LOAD\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);
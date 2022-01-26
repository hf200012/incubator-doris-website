(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{1027:function(e,t,a){"use strict";a.r(t);var o=a(56),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[e._v("#")]),e._v(" ROUTINE LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Routine Load function allows users to submit a resident load task, and continuously load data into Doris by continuously reading data from the specified data source. Currently, only text data format (CSV) data is loaded from Kafka by means of no authentication or SSL authentication.")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE ROUTINE LOAD [db.]job_name ON tbl_name\n[merge_type]\n[load_properties]\n[job_properties]\nFROM data_source\n[data_source_properties]\n")])])]),a("ol",[a("li",[a("p",[e._v("[db.]job_name")]),e._v(" "),a("p",[e._v("The name of the load job, in the same database, only one job can run with the same name.")])]),e._v(" "),a("li",[a("p",[e._v("tbl_name")]),e._v(" "),a("p",[e._v("Specifies the name of the table that needs to be loaded.")])]),e._v(" "),a("li",[a("p",[e._v("merge_type")]),e._v(" "),a("p",[e._v("The type of data merging supports three types: APPEND, DELETE, and MERGE. APPEND is the default value, which means that all this batch of data needs to be appended to the existing data. DELETE means to delete all rows with the same key as this batch of data. MERGE semantics Need to be used in conjunction with the delete condition, which means that the data that meets the delete on condition is processed according to DELETE semantics and the rest is processed according to APPEND semantics")])]),e._v(" "),a("li",[a("p",[e._v("load_properties")]),e._v(" "),a("p",[e._v("Used to describe the load data. grammar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[column_separator],\n[columns_mapping],\n[where_predicates],\n[delete_on_predicates]\n[partitions],\n[preceding_predicates]\n")])])]),a("ol",[a("li",[a("p",[e._v("column_separator:")]),e._v(" "),a("p",[e._v("Specify column separators, such as:")]),e._v(" "),a("p",[a("code",[e._v('COLUMNS TERMINATED BY ","')])]),e._v(" "),a("p",[e._v("The default is: "),a("code",[e._v("\\t")])])]),e._v(" "),a("li",[a("p",[e._v("columns_mapping:")]),e._v(" "),a("p",[e._v("Specifies the mapping of columns in the source data and defines how the derived columns are generated.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Map column:")]),e._v(" "),a("p",[e._v("Specify in order, which columns in the source data correspond to which columns in the destination table. For columns that you want to skip, you can specify a column name that does not exist.")]),e._v(" "),a("p",[e._v("Suppose the destination table has three columns k1, k2, v1. The source data has 4 columns, of which columns 1, 2, and 4 correspond to k2, k1, and v1, respectively. Write as follows:")]),e._v(" "),a("p",[a("code",[e._v("COLUMNS (k2, k1, xxx, v1)")])]),e._v(" "),a("p",[e._v("Where xxx is a column that does not exist and is used to skip the third column in the source data.")])]),e._v(" "),a("li",[a("p",[e._v("Derived columns:")]),e._v(" "),a("p",[e._v("A column represented in the form of col_name = expr, which we call a derived column. That is, the value of the corresponding column in the destination table is calculated by expr.")]),e._v(" "),a("p",[e._v("Derived columns are usually arranged after the mapped column. Although this is not mandatory, Doris always parses the mapped columns first and then parses the derived columns.")]),e._v(" "),a("p",[e._v("Following an example, assume that the destination table also has column 4, v2, which is generated by the sum of k1 and k2. You can write as follows:")]),e._v(" "),a("p",[a("code",[e._v("COLUMNS (k2, k1, xxx, v1, v2 = k1 + k2);")])])])])]),e._v(" "),a("li",[a("p",[e._v("where_predicates")]),e._v(" "),a("p",[e._v("Used to specify filter criteria to filter out unwanted columns. Filter columns can be either mapped columns or derived columns.")]),e._v(" "),a("p",[e._v("For example, if we only want to load a column with k1 greater than 100 and k2 equal to 1000, we would write as follows:")]),e._v(" "),a("p",[a("code",[e._v("WHERE k1 > 100 and k2 = 1000")])])]),e._v(" "),a("li",[a("p",[e._v("partitions")]),e._v(" "),a("p",[e._v("Specifies which partitions of the load destination table. If not specified, it will be automatically loaded into the corresponding partition.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("p",[a("code",[e._v("PARTITION(p1, p2, p3)")])])]),e._v(" "),a("li",[a("p",[e._v("delete_on_predicates:")]),e._v(" "),a("p",[e._v("Only used when merge type is MERGE")])]),e._v(" "),a("li",[a("p",[e._v("preceding_predicates")]),e._v(" "),a("p",[e._v("Used to filter original data. The original data is the data without column mapping and transformation. The user can filter the data before conversion, select the desired data, and then perform the conversion.")])])])]),e._v(" "),a("li",[a("p",[e._v("job_properties")]),e._v(" "),a("p",[e._v("A generic parameter that specifies a routine load job.")]),e._v(" "),a("p",[e._v("syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES (\n    "key1" = "val1",\n    "key2" = "val2"\n)\n')])])]),a("p",[e._v("Currently we support the following parameters:")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("desired_concurrent_number")])]),e._v(" "),a("p",[e._v("The degree of concurrency desired. A routine load job is split into multiple subtasks. This parameter specifies how many tasks can be executed simultaneously in a job. Must be greater than 0. The default is 3.")]),e._v(" "),a("p",[e._v("This concurrency is not the actual concurrency. The actual concurrency will be considered by the number of nodes in the cluster, the load, and the data source.")]),e._v(" "),a("p",[e._v("example:")]),e._v(" "),a("p",[a("code",[e._v('"desired_concurrent_number" = "3"')])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_batch_interval/max_batch_rows/max_batch_size")])]),e._v(" "),a("p",[e._v("These three parameters represent:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The maximum execution time of each subtask, in seconds. The range is 5 to 60. The default is 10.")])]),e._v(" "),a("li",[a("p",[e._v("The maximum number of rows read per subtask. Must be greater than or equal to 200,000. The default is 200000.")])]),e._v(" "),a("li",[a("p",[e._v("The maximum number of bytes read per subtask. The unit is byte and the range is 100MB to 1GB. The default is 100MB.")])])]),e._v(" "),a("p",[e._v("These three parameters are used to control the execution time and throughput of a subtask. When either one reaches the threshold, the task ends.")]),e._v(" "),a("p",[e._v("example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"max_batch_interval" = "20",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200"\n')])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_error_number")])]),e._v(" "),a("p",[e._v("The maximum number of error lines allowed in the sampling window. Must be greater than or equal to 0. The default is 0, which means that no error lines are allowed.")]),e._v(" "),a("p",[e._v("The sampling window is max_batch_rows * 10. That is, if the number of error lines is greater than max_error_number in the sampling window, the routine job will be suspended, and manual intervention is required to check the data quality problem.")]),e._v(" "),a("p",[e._v("Lines that are filtered by the where condition are not counted as error lines.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("strict_mode")])]),e._v(" "),a("p",[e._v('Whether to enable strict mode, the default is disabled. If turned on, the column type transformation of non-null raw data is filtered if the result is NULL. Specified as "strict_mode" = "true"')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("timezone")])]),e._v(" "),a("p",[e._v("Specifies the time zone in which the job will be loaded. The default by using session variable's timezone. This parameter affects all function results related to the time zone involved in the load.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("format")])]),e._v(" "),a("p",[e._v("Specifies the format of the imported data. Support csv and json, the default is csv.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("jsonpaths")])]),e._v(" "),a("p",[e._v("There are two ways to import json: simple mode and matched mode. If jsonpath is set, it will be the matched mode import, otherwise it will be the simple mode import, please refer to the example for details.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("strip_outer_array")]),e._v("\nBoolean type, true to indicate that json data starts with an array object and flattens objects in the array object, default value is false.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("json_root")]),e._v('\njson_root is a valid JSONPATH string that specifies the root node of the JSON Document. The default value is "".')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("send_batch_parallelism")]),e._v("\nInteger, Used to set the default parallelism for sending batch, if the value for parallelism exceed "),a("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(" in BE config, then the coordinator BE will use the value of "),a("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(".")])])])]),e._v(" "),a("li",[a("p",[e._v("data_source")]),e._v(" "),a("p",[e._v("The type of data source. Current support:")]),e._v(" "),a("p",[e._v("KAFKA")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("data_source_properties")])]),e._v(" "),a("p",[e._v("Specify information about the data source.")]),e._v(" "),a("p",[e._v("syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "key1" = "val1",\n    "key2" = "val2"\n)\n')])])]),a("ol",[a("li",[a("p",[e._v("KAFKA data source")]),e._v(" "),a("p",[a("code",[e._v("Kafka_broker_list")])]),e._v(" "),a("p",[e._v("Kafka's broker connection information. The format is ip:host. Multiple brokers are separated by commas.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("p",[a("code",[e._v('"kafka_broker_list" = "broker1:9092,broker2:9092"')])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("kafka_topic")])]),e._v(" "),a("p",[e._v("Specify the topic of Kafka to subscribe to.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("p",[a("code",[e._v('"kafka_topic" = "my_topic"')])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("kafka_partitions/kafka_offsets")])]),e._v(" "),a("p",[e._v("Specify the kafka partition to be subscribed to, and the corresponding star offset for each partition.")]),e._v(" "),a("p",[e._v("Offset can specify a specific offset from 0 or greater, or:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("OFFSET_BEGINNING: Subscribe from the location where the data is available.")])]),e._v(" "),a("li",[a("p",[e._v("OFFSET_END: Subscribe from the end.")])]),e._v(" "),a("li",[a("p",[e._v('Timestamp, the format must be like: "2021-05-11 10:00:00", the system will automatically locate the offset of the first message greater than or equal to the timestamp.\nNote that the offset of the timestamp format cannot be mixed with the number type, only one of them can be selected.')])])]),e._v(" "),a("p",[e._v("If not specified, all partitions under topic are subscribed by default fromSET_END.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "101,0,OFFSET_BEGINNING,OFFSET_END"\n\n"kafka_partitions" = "0,1",\n"kafka_offsets" = "2021-05-11 10:00:00, 2021-05-11 11:00:00"\n')])])])]),e._v(" "),a("li",[a("p",[e._v("property")]),e._v(" "),a("p",[e._v("Specify custom kafka parameters.")]),e._v(" "),a("p",[e._v('The function is equivalent to the "--property" parameter in the kafka shel')]),e._v(" "),a("p",[e._v('When the value of the parameter is a file, you need to add the keyword: "FILE" before the value.')]),e._v(" "),a("p",[e._v('For information on how to create a file, see "HELP CREATE FILE;"')]),e._v(" "),a("p",[e._v("For more supported custom parameters, see the configuration items on the nt side in the official CONFIGURATION documentation for librdkafka.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"property.client.id" = "12345",\n"property.ssl.ca.location" = "FILE:ca.pem"\n')])])]),a("ol",[a("li",[a("p",[e._v("When connecting to Kafka using SSL, you need to specify the following parameters:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"property.security.protocol" = "ssl",\n"property.ssl.ca.location" = "FILE:ca.pem",\n"property.ssl.certificate.location" = "FILE:client.pem",\n"property.ssl.key.location" = "FILE:client.key",\n"property.ssl.key.password" = "abcdefg"\n')])])]),a("p",[e._v("among them:")]),e._v(" "),a("p",[e._v('"property.security.protocol" and "property.ssl.ca.location" are required to indicate the connection method is SSL and the location of the CA certificate.')]),e._v(" "),a("p",[e._v("If the client authentication is enabled on the Kafka server, you also need to set:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"property.ssl.certificate.location"\n"property.ssl.key.location"\n"property.ssl.key.password"\n')])])]),a("p",[e._v("Used to specify the public key of the client, the private key, and the word of the private key.")])]),e._v(" "),a("li",[a("p",[e._v("Specify the default starting offset for kafka partition")]),e._v(" "),a("p",[e._v("If kafka_partitions/kafka_offsets is not specified, all partitions are unanmed by default, and you can specify kafka_default_offsets to specify the star offset. The default is OFFSET_END, which starts at the end of the subscription.")]),e._v(" "),a("p",[e._v("Values:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("OFFSET_BEGINNING: Subscribe from the location where the data is available.")])]),e._v(" "),a("li",[a("p",[e._v("OFFSET_END: Subscribe from the end.")])]),e._v(" "),a("li",[a("p",[e._v("Timestamp, the format is the same as kafka_offsets")])])]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("p",[a("code",[e._v('"property.kafka_default_offsets" = "OFFSET_BEGINNING"')]),e._v(" "),a("code",[e._v('"property.kafka_default_offsets" = "2021-05-11 10:00:00"')])])])])])])]),e._v(" "),a("li",[a("p",[e._v("load data format sample")]),e._v(" "),a("p",[e._v("Integer class (TINYINT/SMALLINT/INT/BIGINT/LARGEINT): 1, 1000, 1234")]),e._v(" "),a("p",[e._v("Floating point class (FLOAT/DOUBLE/DECIMAL): 1.1, 0.23, .356")]),e._v(" "),a("p",[e._v("Date class (DATE/DATETIME): 2017-10-03, 2017-06-13 12:34:03.")]),e._v(" "),a("p",[e._v("String class (CHAR/VARCHAR) (without quotes): I am a student, a")]),e._v(" "),a("p",[e._v("NULL value: \\N")])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a Kafka routine load task named test1 for the example_tbl of example_db. Specify group.id and client.id, and automatically consume all partitions by default, with subscriptions starting at the end (OFFSET_END)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a Kafka routine load task named test1 for the example_tbl of example_db. The load task is in strict mode.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nWHERE k1 > 100 and k2 like "%doris%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("load data from Kafka clusters via SSL authentication. Also set the client.id parameter. The load task is in non-strict mode and the time zone is Africa/Abidjan")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nWHERE k1 > 100 and k2 like "%doris%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "timezone" = "Africa/Abidjan"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.security.protocol" = "ssl",\n    "property.ssl.ca.location" = "FILE:ca.pem",\n    "property.ssl.certificate.location" = "FILE:client.pem",\n    "property.ssl.key.location" = "FILE:client.key",\n    "property.ssl.key.password" = "abcdefg",\n    "property.client.id" = "my_client_id"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Create a Kafka routine load task named test1 for the example_tbl of example_db. The load data is a simple json.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  CREATE ROUTINE LOAD example_db.test_json_label_1 ON table1\n  COLUMNS(category,price,author)\n  PROPERTIES\n    (\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json"\n    )\n    FROM KAFKA\n    (\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n    );\n')])])]),a("p",[e._v('It support two kinds data style:\n1）{"category":"a9jadhx","author":"test","price":895}\n2）[\n{"category":"a9jadhx","author":"test","price":895},\n{"category":"axdfa1","author":"EvelynWaugh","price":1299}\n]')])]),e._v(" "),a("li",[a("p",[e._v("Matched load json by jsonpaths.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE TABLE `example_tbl` (\n  `category` varchar(24) NULL COMMENT "",\n  `author` varchar(24) NULL COMMENT "",\n  `timestamp` bigint(20) NULL COMMENT "",\n  `dt` int(11) NULL COMMENT "",\n  `price` double REPLACE\n) ENGINE=OLAP\nAGGREGATE KEY(`category`,`author`,`timestamp`,`dt`)\nCOMMENT "OLAP"\nPARTITION BY RANGE(`dt`)\n(PARTITION p0 VALUES [("-2147483648"), ("20200509")),\nPARTITION p20200509 VALUES [("20200509"), ("20200510")),\nPARTITION p20200510 VALUES [("20200510"), ("20200511")),\nPARTITION p20200511 VALUES [("20200511"), ("20200512")))\nDISTRIBUTED BY HASH(`category`,`author`,`timestamp`) BUCKETS 4\nPROPERTIES (\n"replication_num" = "1"\n);\n\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "max_batch_rows" = "300000",\n    "max_batch_size" = "209715200",\n    "strict_mode" = "false",\n    "format" = "json",\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n    "strip_outer_array" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\n')])])]),a("p",[e._v('For example json data:\n[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]')])])]),e._v(" "),a("p",[e._v("Tips:\n1）If the json data starts as an array and each object in the array is a record, you need to set the strip_outer_array to true to represent the flat array.\n2）If the json data starts with an array, and each object in the array is a record, our ROOT node is actually an object in the array when we set jsonpath.")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v('User specifies the json_root node\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\nPROPERTIES\n(\n"desired_concurrent_number"="3",\n"max_batch_interval" = "20",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200",\n"strict_mode" = "false",\n"format" = "json",\n"jsonpaths" = "["$.category","$.author","$.price","$.timestamp"]",\n"strip_outer_array" = "true",\n"json_root" = "$.RECORDS"\n)\nFROM KAFKA\n(\n"kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n"kafka_topic" = "my_topic",\n"kafka_partitions" = "0,1,2",\n"kafka_offsets" = "0,0,0"\n);\nFor example json data:\n{\n"RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}')]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[e._v("Create a Kafka routine load task named test1 for the example_tbl of example_db. delete all data key columns match v3 >100 key columns.")]),e._v(" "),a("p",[e._v('CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nWITH MERGE\nCOLUMNS(k1, k2, k3, v1, v2, v3),\nWHERE k1 > 100 and k2 like "%doris%",\nDELETE ON v3 >100\nPROPERTIES\n(\n"desired_concurrent_number"="3",\n"max_batch_interval" = "20",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200",\n"strict_mode" = "false"\n)\nFROM KAFKA\n(\n"kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n"kafka_topic" = "my_topic",\n"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "101,0,0,200"\n);')])]),e._v(" "),a("li",[a("p",[e._v("Filter original data")]),e._v(" "),a("p",[e._v('CREATE ROUTINE LOAD example_db.test_job ON example_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(k1,k2,source_sequence,v1,v2),\nPRECEDING FILTER k1 > 2\nPROPERTIES\n(\n"desired_concurrent_number"="3",\n"max_batch_interval" = "30",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200"\n) FROM KAFKA\n(\n"kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n"kafka_topic" = "my_topic",\n"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "101,0,0,200"\n);')])]),e._v(" "),a("li",[a("p",[e._v("Start consumption from the specified point in time")]),e._v(" "),a("p",[e._v('CREATE ROUTINE LOAD example_db.test_job ON example_tbl\nPROPERTIES\n(\n"desired_concurrent_number"="3",\n"max_batch_interval" = "30",\n"max_batch_rows" = "300000",\n"max_batch_size" = "209715200"\n) FROM KAFKA\n(\n"kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n"kafka_topic" = "my_topic",\n"property.kafka_default_offsets" = "2021-10-10 11:00:00"\n);')])])])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CREATE, ROUTINE, LOAD\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1179],{1633:function(e,r,n){"use strict";n.r(r);var s=n(56),t=Object(s.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"outfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#outfile"}},[e._v("#")]),e._v(" OUTFILE")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('该语句用于使用 `SELECT INTO OUTFILE` 命令将查询结果的导出为文件。目前支持通过 Broker 进程, 通过 S3 协议, 或直接通过 HDFS 协议，导出到远端存储，如 HDFS，S3，BOS，COS（腾讯云）上。\n\n语法：\n    query_stmt\n    INTO OUTFILE "file_path"\n    [format_as]\n    [properties]\n\n1. file_path\n    file_path 指向文件存储的路径以及文件前缀。如 `hdfs://path/to/my_file_`。\n    最终的文件名将由 `my_file_`，文件序号以及文件格式后缀组成。其中文件序号由0开始，数量为文件被分割的数量。如：\n        my_file_abcdefg_0.csv\n        my_file_abcdefg_1.csv\n        my_file_abcdegf_2.csv\n\n2. format_as\n    FORMAT AS CSV\n    指定导出格式。默认为 CSV。\n\n\n3. properties\n    指定相关属性。目前支持通过 Broker 进程, 或通过 S3 协议进行导出。\n\n    语法：\n    [PROPERTIES ("key"="value", ...)]\n    支持如下属性：\n    column_separator: 列分隔符\n    line_delimiter: 行分隔符\n    max_file_size: 单个文件大小限制，如果结果超过这个值，将切割成多个文件。\n\n    Broker 相关属性需加前缀 `broker.`:\n    broker.name: broker名称\n    broker.hadoop.security.authentication: 指定认证方式为 kerberos\n    broker.kerberos_principal: 指定 kerberos 的 principal\n    broker.kerberos_keytab: 指定 kerberos 的 keytab 文件路径。该文件必须为 Broker 进程所在服务器上的文件的绝对路径。并且可以被 Broker 进程访问\n\n    HDFS 相关属性需加前缀 `hdfs.`:\n    hdfs.fs.defaultFS: namenode 地址和端口\n    hdfs.hdfs_user: hdfs 用户名\n\n    S3 协议则直接执行 S3 协议配置即可:\n    AWS_ENDPOINT\n    AWS_ACCESS_KEY\n    AWS_SECRET_KEY\n    AWS_REGION\n')])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('1. 使用 broker 方式导出，将简单查询结果导出到文件 `hdfs://path/to/result.txt`。指定导出格式为 CSV。使用 `my_broker` 并设置 kerberos 认证信息。指定列分隔符为 `,`，行分隔符为 `\\n`。\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n最终生成文件如如果不大于 100MB，则为：`result_0.csv`。\n如果大于 100MB，则可能为 `result_0.csv, result_1.csv, ...`。\n\n2. 将简单查询结果导出到文件 `hdfs://path/to/result.parquet`。指定导出格式为 PARQUET。使用 `my_broker` 并设置 kerberos 认证信息。\nSELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "schema"="required,int32,c1;required,byte_array,c2;required,byte_array,c2"\n);\n查询结果导出到parquet文件需要明确指定`schema`。\n\n3. 将 CTE 语句的查询结果导出到文件 `hdfs://path/to/result.txt`。默认导出格式为 CSV。使用 `my_broker` 并设置 hdfs 高可用信息。使用默认的行列分隔符。\nWITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n最终生成文件如如果不大于 1GB，则为：`result_0.csv`。\n如果大于 1GB，则可能为 `result_0.csv, result_1.csv, ...`。\n\n4. 将 UNION 语句的查询结果导出到文件 `bos://bucket/result.txt`。指定导出格式为 PARQUET。使用 `my_broker` 并设置 hdfs 高可用信息。PARQUET 格式无需指定列分割符。\n导出完成后，生成一个标识文件。\nSELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy",\n    "schema"="required,int32,k1;required,byte_array,k2"\n);\n\n5. 将 select 语句的查询结果导出到文件 `cos://${bucket_name}/path/result.txt`。指定导出格式为 csv。\n导出完成后，生成一个标识文件。\nselect k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n最终生成文件如如果不大于 1GB，则为：`my_file_0.csv`。\n如果大于 1GB，则可能为 `my_file_0.csv, result_1.csv, ...`。\n在cos上验证\n    1. 不存在的path会自动创建\n    2. access.key/secret.key/endpoint需要和cos的同学确认。尤其是endpoint的值，不需要填写bucket_name。\n\n6. 使用 s3 协议导出到 bos，并且并发导出开启。\nset enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n最终生成的文件前缀为 `my_file_{fragment_instance_id}_`。\n\n7. 使用 s3 协议导出到 bos，并且并发导出 session 变量开启。\n注意：但由于查询语句带了一个顶层的排序节点，所以这个查询即使开启并发导出的 session 变量，也是无法并发导出的。\nset enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n\n8. 使用 hdfs 方式导出，将简单查询结果导出到文件 `hdfs://path/to/result.txt`。指定导出格式为 CSV，用户名为work。指定列分隔符为 `,`，行分隔符为 `\\n`。\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "hdfs.fs.defaultFS" = "hdfs://ip:port",\n    "hdfs.hdfs_user" = "work"\n);\n最终生成文件如如果不大于 100MB，则为：`result_0.csv`。\n如果大于 100MB，则可能为 `result_0.csv, result_1.csv, ...`。\n')])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("OUTFILE\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);
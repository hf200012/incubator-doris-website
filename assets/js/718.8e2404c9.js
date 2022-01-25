(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{1172:function(e,a,t){"use strict";t.r(a);var _=t(56),s=Object(_.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"导出查询结果集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出查询结果集"}},[e._v("#")]),e._v(" 导出查询结果集")]),e._v(" "),t("p",[e._v("本文档介绍如何使用 "),t("code",[e._v("SELECT INTO OUTFILE")]),e._v(" 命令进行查询结果的导出操作。")]),e._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),t("p",[t("code",[e._v("SELECT INTO OUTFILE")]),e._v(" 语句可以将查询结果导出到文件中。目前支持通过 Broker 进程, 通过 S3 协议, 或直接通过 HDFS 协议，导出到远端存储，如 HDFS，S3，BOS，COS（腾讯云）上。语法如下")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')])])]),t("ul",[t("li",[t("p",[t("code",[e._v("file_path")])]),e._v(" "),t("p",[t("code",[e._v("file_path")]),e._v(" 指向文件存储的路径以及文件前缀。如 "),t("code",[e._v("hdfs://path/to/my_file_")]),e._v("。")]),e._v(" "),t("p",[e._v("最终的文件名将由 "),t("code",[e._v("my_file_")]),e._v("，文件序号以及文件格式后缀组成。其中文件序号由0开始，数量为文件被分割的数量。如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("my_file_abcdefg_0.csv\nmy_file_abcdefg_1.csv\nmy_file_abcdegf_2.csv\n")])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("[format_as]")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("FORMAT AS CSV\n")])])]),t("p",[e._v("指定导出格式。默认为 CSV。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("[properties]")])]),e._v(" "),t("p",[e._v("指定相关属性。目前支持通过 Broker 进程, 或通过 S3 协议进行导出。")]),e._v(" "),t("ul",[t("li",[e._v("Broker 相关属性需加前缀 "),t("code",[e._v("broker.")]),e._v("。具体参阅"),t("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/broker.html"}},[e._v("Broker 文档")]),e._v("。")],1),e._v(" "),t("li",[e._v("HDFS 相关属性需加前缀 "),t("code",[e._v("hdfs.")]),e._v(" 其中 hdfs.fs.defaultFS 用于填写 namenode 地址和端口。属于必填项。。")]),e._v(" "),t("li",[e._v("S3 协议则直接执行 S3 协议配置即可。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('("broker.prop_key" = "broker.prop_val", ...)\nor\n("hdfs.fs.defaultFS" = "xxx", "hdfs.hdfs_user" = "xxx")\nor \n("AWS_ENDPOINT" = "xxx", ...)\n')])])]),t("p",[e._v("其他属性：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('("key1" = "val1", "key2" = "val2", ...)\n')])])]),t("p",[e._v("目前支持以下属性：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("column_separator")]),e._v("：列分隔符，仅对 CSV 格式适用。默认为 "),t("code",[e._v("\\t")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("line_delimiter")]),e._v("：行分隔符，仅对 CSV 格式适用。默认为 "),t("code",[e._v("\\n")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("max_file_size")]),e._v("：单个文件的最大大小。默认为 1GB。取值范围在 5MB 到 2GB 之间。超过这个大小的文件将会被切分。")]),e._v(" "),t("li",[t("code",[e._v("schema")]),e._v("：PARQUET 文件schema信息。仅对 PARQUET 格式适用。导出文件格式为PARQUET时，必须指定"),t("code",[e._v("schema")]),e._v("。")])])])]),e._v(" "),t("h2",{attrs:{id:"并发导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发导出"}},[e._v("#")]),e._v(" 并发导出")]),e._v(" "),t("p",[e._v("默认情况下，查询结果集的导出是非并发的，也就是单点导出。如果用户希望查询结果集可以并发导出，需要满足以下条件：")]),e._v(" "),t("ol",[t("li",[e._v("session variable 'enable_parallel_outfile' 开启并发导出: "),t("code",[e._v("set enable_parallel_outfile = true;")])]),e._v(" "),t("li",[e._v("导出方式为 S3 , 或者 HDFS， 而不是使用 broker")]),e._v(" "),t("li",[e._v("查询可以满足并发导出的需求，比如顶层不包含 sort 等单点节点。（后面会举例说明，哪种属于不可并发导出结果集的查询）")])]),e._v(" "),t("p",[e._v("满足以上三个条件，就能触发并发导出查询结果集了。并发度 = "),t("code",[e._v("be_instacne_num * parallel_fragment_exec_instance_num")])]),e._v(" "),t("h3",{attrs:{id:"如何验证结果集被并发导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何验证结果集被并发导出"}},[e._v("#")]),e._v(" 如何验证结果集被并发导出")]),e._v(" "),t("p",[e._v("用户通过 session 变量设置开启并发导出后，如果想验证当前查询是否能进行并发导出，则可以通过下面这个方法。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('explain select xxx from xxx where xxx  into outfile "s3://xxx" format as csv properties ("AWS_ENDPOINT" = "xxx", ...);\n')])])]),t("p",[e._v("对查询进行 explain 后，Doris 会返回该查询的规划，如果你发现 "),t("code",[e._v("RESULT FILE SINK")]),e._v(" 出现在 "),t("code",[e._v("PLAN FRAGMENT 1")]),e._v(" 中，就说明导出并发开启成功了。\n如果 "),t("code",[e._v("RESULT FILE SINK")]),e._v(" 出现在 "),t("code",[e._v("PLAN FRAGMENT 0")]),e._v(" 中，则说明当前查询不能进行并发导出 (当前查询不同时满足并发导出的三个条件)。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("并发导出的规划示例：\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n")])])]),t("h2",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[e._v("#")]),e._v(" 使用示例")]),e._v(" "),t("p",[e._v("具体参阅"),t("RouterLink",{attrs:{to:"/zh-CN/sql-reference/sql-statements/Data Manipulation/OUTFILE.html"}},[e._v("OUTFILE 文档")]),e._v("。")],1),e._v(" "),t("h2",{attrs:{id:"返回结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[e._v("#")]),e._v(" 返回结果")]),e._v(" "),t("p",[e._v("导出命令为同步命令。命令返回，即表示操作结束。同时会返回一行结果来展示导出的执行结果。")]),e._v(" "),t("p",[e._v("如果正常导出并返回，则结果如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n1 row in set (0.05 sec)\n')])])]),t("ul",[t("li",[e._v("FileNumber：最终生成的文件个数。")]),e._v(" "),t("li",[e._v("TotalRows：结果集行数。")]),e._v(" "),t("li",[e._v("FileSize：导出文件总大小。单位字节。")]),e._v(" "),t("li",[e._v("URL：如果是导出到本地磁盘，则这里显示具体导出到哪个 Compute Node。")])]),e._v(" "),t("p",[e._v("如果进行了并发导出，则会返回多行数据。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         3 |        7 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n|          1 |         2 |        4 | file:///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n2 rows in set (2.218 sec)\n")])])]),t("p",[e._v("如果执行错误，则会返回错误信息，如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")])])]),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),t("ul",[t("li",[e._v("如果不开启并发导出，查询结果是由单个 BE 节点，单线程导出的。因此导出时间和导出结果集大小正相关。开启并发导出可以降低导出的时间。")]),e._v(" "),t("li",[e._v("导出命令不会检查文件及文件路径是否存在。是否会自动创建路径、或是否会覆盖已存在文件，完全由远端存储系统的语义决定。")]),e._v(" "),t("li",[e._v("如果在导出过程中出现错误，可能会有导出文件残留在远端存储系统上。Doris 不会清理这些文件。需要用户手动清理。")]),e._v(" "),t("li",[e._v("导出命令的超时时间同查询的超时时间。可以通过 "),t("code",[e._v("SET query_timeout=xxx")]),e._v(" 进行设置。")]),e._v(" "),t("li",[e._v("对于结果集为空的查询，依然会产生一个大小为0的文件。")]),e._v(" "),t("li",[e._v("文件切分会保证一行数据完整的存储在单一文件中。因此文件的大小并不严格等于 "),t("code",[e._v("max_file_size")]),e._v("。")]),e._v(" "),t("li",[e._v("对于部分输出为非可见字符的函数，如 BITMAP、HLL 类型，输出为 "),t("code",[e._v("\\N")]),e._v("，即 NULL。")]),e._v(" "),t("li",[e._v("目前部分地理信息函数，如 "),t("code",[e._v("ST_Point")]),e._v(" 的输出类型为 VARCHAR，但实际输出值为经过编码的二进制字符。当前这些函数会输出乱码。对于地理函数，请使用 "),t("code",[e._v("ST_AsText")]),e._v(" 进行输出。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);
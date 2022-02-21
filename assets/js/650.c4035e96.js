(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1104:function(e,t,_){"use strict";_.r(t);var r=_(56),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"数据导出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据导出"}},[e._v("#")]),e._v(" 数据导出")]),e._v(" "),_("p",[e._v("数据导出（Export）是 Doris 提供的一种将数据导出的功能。该功能可以将用户指定的表或分区的数据，以文本的格式，通过 Broker 进程导出到远端存储上，如 HDFS/BOS 等。")]),e._v(" "),_("p",[e._v("本文档主要介绍 Export 的基本原理、使用方式、最佳实践以及注意事项。")]),e._v(" "),_("h2",{attrs:{id:"名词解释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[e._v("#")]),e._v(" 名词解释")]),e._v(" "),_("ul",[_("li",[e._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),e._v(" "),_("li",[e._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")]),e._v(" "),_("li",[e._v("Broker：Doris 可以通过 Broker 进程对远端存储进行文件操作。")]),e._v(" "),_("li",[e._v("Tablet：数据分片。一个表会划分成多个数据分片。")])]),e._v(" "),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),_("p",[e._v("用户提交一个 Export 作业后。Doris 会统计这个作业涉及的所有 Tablet。然后对这些 Tablet 进行分组，每组生成一个特殊的查询计划。该查询计划会读取所包含的 Tablet 上的数据，然后通过 Broker 将数据写到远端存储指定的路径中，也可以通过S3协议直接导出到支持S3协议的远端存储上。")]),e._v(" "),_("p",[e._v("总体的调度方式如下:")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("+--------+\n| Client |\n+---+----+\n    |  1. Submit Job\n    |\n+---v--------------------+\n| FE                     |\n|                        |\n| +-------------------+  |\n| | ExportPendingTask |  |\n| +-------------------+  |\n|                        | 2. Generate Tasks\n| +--------------------+ |\n| | ExportExporingTask | |\n| +--------------------+ |\n|                        |\n| +-----------+          |     +----+   +------+   +---------+\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   | Remote  |\n| +-----------+          |     +----+   +------+   | Storage |\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   +---------+\n+------------------------+         3. Execute Tasks\n\n")])])]),_("ol",[_("li",[e._v("用户提交一个 Export 作业到 FE。")]),e._v(" "),_("li",[e._v("FE 的 Export 调度器会通过两阶段来执行一个 Export 作业：\n"),_("ol",[_("li",[e._v("PENDING：FE 生成 ExportPendingTask，向 BE 发送 snapshot 命令，对所有涉及到的 Tablet 做一个快照。并生成多个查询计划。")]),e._v(" "),_("li",[e._v("EXPORTING：FE 生成 ExportExportingTask，开始执行查询计划。")])])])]),e._v(" "),_("h3",{attrs:{id:"查询计划拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询计划拆分"}},[e._v("#")]),e._v(" 查询计划拆分")]),e._v(" "),_("p",[e._v("Export 作业会生成多个查询计划，每个查询计划负责扫描一部分 Tablet。每个查询计划扫描的 Tablet 个数由 FE 配置参数 "),_("code",[e._v("export_tablet_num_per_task")]),e._v(" 指定，默认为 5。即假设一共 100 个 Tablet，则会生成 20 个查询计划。用户也可以在提交作业时，通过作业属性 "),_("code",[e._v("tablet_num_per_task")]),e._v(" 指定这个数值。")]),e._v(" "),_("p",[e._v("一个作业的多个查询计划顺序执行。")]),e._v(" "),_("h3",{attrs:{id:"查询计划执行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询计划执行"}},[e._v("#")]),e._v(" 查询计划执行")]),e._v(" "),_("p",[e._v("一个查询计划扫描多个分片，将读取的数据以行的形式组织，每 1024 行为一个 batch，调用 Broker 写入到远端存储上。")]),e._v(" "),_("p",[e._v("查询计划遇到错误会整体自动重试 3 次。如果一个查询计划重试 3 次依然失败，则整个作业失败。")]),e._v(" "),_("p",[e._v("Doris 会首先在指定的远端存储的路径中，建立一个名为 "),_("code",[e._v("__doris_export_tmp_12345")]),e._v(" 的临时目录（其中 "),_("code",[e._v("12345")]),e._v(" 为作业 id）。导出的数据首先会写入这个临时目录。每个查询计划会生成一个文件，文件名示例：")]),e._v(" "),_("p",[_("code",[e._v("export-data-c69fcf2b6db5420f-a96b94c1ff8bccef-1561453713822")])]),e._v(" "),_("p",[e._v("其中 "),_("code",[e._v("c69fcf2b6db5420f-a96b94c1ff8bccef")]),e._v(" 为查询计划的 query id。"),_("code",[e._v("1561453713822")]),e._v(" 为文件生成的时间戳。")]),e._v(" "),_("p",[e._v("当所有数据都导出后，Doris 会将这些文件 rename 到用户指定的路径中。")]),e._v(" "),_("h3",{attrs:{id:"broker-参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#broker-参数"}},[e._v("#")]),e._v(" Broker 参数")]),e._v(" "),_("p",[e._v("Export 需要借助 Broker 进程访问远端存储，不同的 Broker 需要提供不同的参数，具体请参阅 "),_("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/broker.html"}},[e._v("Broker文档")])],1),e._v(" "),_("h2",{attrs:{id:"使用示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[e._v("#")]),e._v(" 使用示例")]),e._v(" "),_("p",[e._v("Export 的详细命令可以通过 "),_("code",[e._v("HELP EXPORT;")]),e._v(" 。举例如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "hdfs://host/path/to/export/" \nPROPERTIES\n(\n\t"label" = "mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "exec_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER "hdfs"\n(\n\t"username" = "user",\n\t"password" = "passwd"\n);\n')])])]),_("ul",[_("li",[_("code",[e._v("label")]),e._v("：本次导出作业的标识。后续可以使用这个标识查看作业状态。")]),e._v(" "),_("li",[_("code",[e._v("column_separator")]),e._v("：列分隔符。默认为 "),_("code",[e._v("\\t")]),e._v("。支持不可见字符，比如 '\\x07'。")]),e._v(" "),_("li",[_("code",[e._v("columns")]),e._v("：要导出的列，使用英文状态逗号隔开，如果不填这个参数默认是导出表的所有列。")]),e._v(" "),_("li",[_("code",[e._v("line_delimiter")]),e._v("：行分隔符。默认为 "),_("code",[e._v("\\n")]),e._v("。支持不可见字符，比如 '\\x07'。")]),e._v(" "),_("li",[_("code",[e._v("exec_mem_limit")]),e._v("： 表示 Export 作业中，一个查询计划在单个 BE 上的内存使用限制。默认 2GB。单位字节。")]),e._v(" "),_("li",[_("code",[e._v("timeout")]),e._v("：作业超时时间。默认 2小时。单位秒。")]),e._v(" "),_("li",[_("code",[e._v("tablet_num_per_task")]),e._v("：每个查询计划分配的最大分片数。默认为 5。")])]),e._v(" "),_("p",[e._v("提交作业后，可以通过 "),_("code",[e._v("SHOW EXPORT")]),e._v(" 命令查询导入作业状态。结果举例如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('     JobId: 14008\n     Label: mylabel\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"exec mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3"}\n      Path: bos://bj-test-cmy/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: N/A\n')])])]),_("ul",[_("li",[e._v("JobId：作业的唯一 ID")]),e._v(" "),_("li",[e._v("Label：自定义作业标识")]),e._v(" "),_("li",[e._v("State：作业状态：\n"),_("ul",[_("li",[e._v("PENDING：作业待调度")]),e._v(" "),_("li",[e._v("EXPORTING：数据导出中")]),e._v(" "),_("li",[e._v("FINISHED：作业成功")]),e._v(" "),_("li",[e._v("CANCELLED：作业失败")])])]),e._v(" "),_("li",[e._v("Progress：作业进度。该进度以查询计划为单位。假设一共 10 个查询计划，当前已完成 3 个，则进度为 30%。")]),e._v(" "),_("li",[e._v("TaskInfo：以 Json 格式展示的作业信息：\n"),_("ul",[_("li",[e._v("db：数据库名")]),e._v(" "),_("li",[e._v("tbl：表名")]),e._v(" "),_("li",[e._v("partitions：指定导出的分区。"),_("code",[e._v("*")]),e._v(" 表示所有分区。")]),e._v(" "),_("li",[e._v("exec mem limit：查询计划内存使用限制。单位字节。")]),e._v(" "),_("li",[e._v("column separator：导出文件的列分隔符。")]),e._v(" "),_("li",[e._v("line delimiter：导出文件的行分隔符。")]),e._v(" "),_("li",[e._v("tablet num：涉及的总 Tablet 数量。")]),e._v(" "),_("li",[e._v("broker：使用的 broker 的名称。")]),e._v(" "),_("li",[e._v("coord num：查询计划的个数。")])])]),e._v(" "),_("li",[e._v("Path：远端存储上的导出路径。")]),e._v(" "),_("li",[e._v("CreateTime/StartTime/FinishTime：作业的创建时间、开始调度时间和结束时间。")]),e._v(" "),_("li",[e._v("Timeout：作业超时时间。单位是秒。该时间从 CreateTime 开始计算。")]),e._v(" "),_("li",[e._v("ErrorMsg：如果作业出现错误，这里会显示错误原因。")])]),e._v(" "),_("h2",{attrs:{id:"最佳实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[e._v("#")]),e._v(" 最佳实践")]),e._v(" "),_("h3",{attrs:{id:"查询计划的拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询计划的拆分"}},[e._v("#")]),e._v(" 查询计划的拆分")]),e._v(" "),_("p",[e._v("一个 Export 作业有多少查询计划需要执行，取决于总共有多少 Tablet，以及一个查询计划最多可以分配多少个 Tablet。因为多个查询计划是串行执行的，所以如果让一个查询计划处理更多的分片，则可以减少作业的执行时间。但如果查询计划出错（比如调用 Broker 的 RPC 失败，远端存储出现抖动等），过多的 Tablet 会导致一个查询计划的重试成本变高。所以需要合理安排查询计划的个数以及每个查询计划所需要扫描的分片数，在执行时间和执行成功率之间做出平衡。一般建议一个查询计划扫描的数据量在 3-5 GB内（一个表的 Tablet 的大小以及个数可以通过 "),_("code",[e._v("SHOW TABLET FROM tbl_name;")]),e._v(" 语句查看。）。")]),e._v(" "),_("h3",{attrs:{id:"exec-mem-limit"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#exec-mem-limit"}},[e._v("#")]),e._v(" exec_mem_limit")]),e._v(" "),_("p",[e._v("通常一个 Export 作业的查询计划只有 "),_("code",[e._v("扫描")]),e._v("-"),_("code",[e._v("导出")]),e._v(" 两部分，不涉及需要太多内存的计算逻辑。所以通常 2GB 的默认内存限制可以满足需求。但在某些场景下，比如一个查询计划，在同一个 BE 上需要扫描的 Tablet 过多，或者 Tablet 的数据版本过多时，可能会导致内存不足。此时需要通过这个参数设置更大的内存，比如 4GB、8GB 等。")]),e._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),_("ul",[_("li",[e._v("不建议一次性导出大量数据。一个 Export 作业建议的导出数据量最大在几十 GB。过大的导出会导致更多的垃圾文件和更高的重试成本。")]),e._v(" "),_("li",[e._v("如果表数据量过大，建议按照分区导出。")]),e._v(" "),_("li",[e._v("在 Export 作业运行过程中，如果 FE 发生重启或切主，则 Export 作业会失败，需要用户重新提交。")]),e._v(" "),_("li",[e._v("如果 Export 作业运行失败，在远端存储中产生的 "),_("code",[e._v("__doris_export_tmp_xxx")]),e._v(" 临时目录，以及已经生成的文件不会被删除，需要用户手动删除。")]),e._v(" "),_("li",[e._v("如果 Export 作业运行成功，在远端存储中产生的 "),_("code",[e._v("__doris_export_tmp_xxx")]),e._v(" 目录，根据远端存储的文件系统语义，可能会保留，也可能会被清除。比如在百度对象存储（BOS）中，通过 rename 操作将一个目录中的最后一个文件移走后，该目录也会被删除。如果该目录没有被清除，用户可以手动清除。")]),e._v(" "),_("li",[e._v("当 Export 运行完成后（成功或失败），FE 发生重启或切主，则 "),_("code",[e._v("SHOW EXPORT")]),e._v(" 展示的作业的部分信息会丢失，无法查看。")]),e._v(" "),_("li",[e._v("Export 作业只会导出 Base 表的数据，不会导出 Rollup Index 的数据。")]),e._v(" "),_("li",[e._v("Export 作业会扫描数据，占用 IO 资源，可能会影响系统的查询延迟。")])]),e._v(" "),_("h2",{attrs:{id:"相关配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[e._v("#")]),e._v(" 相关配置")]),e._v(" "),_("h3",{attrs:{id:"fe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fe"}},[e._v("#")]),e._v(" FE")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("export_checker_interval_second")]),e._v("：Export 作业调度器的调度间隔，默认为 5 秒。设置该参数需重启 FE。")]),e._v(" "),_("li",[_("code",[e._v("export_running_job_num_limit")]),e._v("：正在运行的 Export 作业数量限制。如果超过，则作业将等待并处于 PENDING 状态。默认为 5，可以运行时调整。")]),e._v(" "),_("li",[_("code",[e._v("export_task_default_timeout_second")]),e._v("：Export 作业默认超时时间。默认为 2 小时。可以运行时调整。")]),e._v(" "),_("li",[_("code",[e._v("export_tablet_num_per_task")]),e._v("：一个查询计划负责的最大分片数。默认为 5。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);
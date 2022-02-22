(window.webpackJsonp=window.webpackJsonp||[]).push([[1171],{1625:function(r,a,e){"use strict";e.r(a);var s=e(56),t=Object(s.a)({},(function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"create-resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-resource"}},[r._v("#")]),r._v(" CREATE RESOURCE")]),r._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[r._v("#")]),r._v(" description")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v('该语句用于创建资源。仅 root 或 admin 用户可以创建资源。目前仅支持 Spark 外部资源。将来其他外部资源可能会加入到 Doris 中使用，如 Spark/GPU 用于查询，HDFS/S3 用于外部存储，MapReduce 用于 ETL 等。\n语法：\n    CREATE [EXTERNAL] RESOURCE "resource_name"\n    PROPERTIES ("key"="value", ...);\n        \n说明：\n    1. PROPERTIES中需要指定资源的类型 "type" = "spark"，目前仅支持 spark。\n    2. 根据资源类型的不同 PROPERTIES 有所不同，具体见示例。\n')])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[r._v("#")]),r._v(" example")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v('1. 创建yarn cluster 模式，名为 spark0 的 Spark 资源。\n  CREATE EXTERNAL RESOURCE "spark0"\n  PROPERTIES\n  (\n      "type" = "spark",\n      "spark.master" = "yarn",\n      "spark.submit.deployMode" = "cluster",\n      "spark.jars" = "xxx.jar,yyy.jar",\n      "spark.files" = "/tmp/aaa,/tmp/bbb",\n      "spark.executor.memory" = "1g",\n      "spark.yarn.queue" = "queue0",\n      "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n      "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n      "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n      "broker" = "broker0",\n      "broker.username" = "user0",\n      "broker.password" = "password0"\n  );\n  \n                                                                                                                                                                                                          \n Spark 相关参数如下：                                                              \n 1. spark.master: 必填，目前支持yarn，spark://host:port。                         \n 2. spark.submit.deployMode: Spark 程序的部署模式，必填，支持 cluster，client 两种。\n 3. spark.hadoop.yarn.resourcemanager.address: master为yarn时必填。               \n 4. spark.hadoop.fs.defaultFS: master为yarn时必填。                               \n 5. 其他参数为可选，参考http://spark.apache.org/docs/latest/configuration.html \n \n Spark 用于 ETL 时需要指定 working_dir 和 broker。说明如下：\n working_dir: ETL 使用的目录。spark作为ETL资源使用时必填。例如：hdfs://host:port/tmp/doris。\n broker: broker 名字。spark作为ETL资源使用时必填。需要使用`ALTER SYSTEM ADD BROKER` 命令提前完成配置。\n broker.property_key: broker读取ETL生成的中间文件时需要指定的认证信息等。\n')])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[r._v("#")]),r._v(" keyword")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("CREATE, RESOURCE\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{1248:function(t,e,a){"use strict";a.r(e);var r=a(56),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"seatunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seatunnel"}},[t._v("#")]),t._v(" SeaTunnel")]),t._v(" "),a("p",[t._v("最新版本的 "),a("a",{attrs:{href:"https://seatunnel.apache.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SeaTunnel (原 waterdrop )"),a("OutboundLink")],1),t._v(" 已经支持 Doris 的连接器, SeaTunnel 可以用过 Spark 引擎和 Flink 引擎同步数据至 Doris 中.")]),t._v(" "),a("p",[t._v("事实上, SeaTunnel 通过 Stream Load 方式同步数据,性能强劲,欢迎大家使用")]),t._v(" "),a("p",[t._v("#安装 SeaTunnel\n"),a("a",{attrs:{href:"https://interestinglab.github.io/seatunnel-docs/#/zh-cn/v2/flink/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("SeaTunnel 安装链接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"spark-sink-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-sink-doris"}},[t._v("#")]),t._v(" Spark Sink Doris")]),t._v(" "),a("h3",{attrs:{id:"插件代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件代码"}},[t._v("#")]),t._v(" 插件代码")]),t._v(" "),a("p",[t._v("Spark Sink Doris 的插件代码在"),a("a",{attrs:{href:"https://github.com/InterestingLab/seatunnel/tree/dev/seatunnel-connectors/plugin-spark-sink-doris",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"参数列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数列表"}},[t._v("#")]),t._v(" 参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("是否必要")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("引擎类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fenodes")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("database")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("table")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("batch_size")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("doris.*")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])])])]),t._v(" "),a("p",[a("code",[t._v("fenodes [string]")])]),t._v(" "),a("p",[t._v("Doris Fe节点地址:8030")]),t._v(" "),a("p",[a("code",[t._v("database [string]")])]),t._v(" "),a("p",[t._v("写入 Doris 的库名")]),t._v(" "),a("p",[a("code",[t._v("table [string]")])]),t._v(" "),a("p",[t._v("写入 Doris 的表名")]),t._v(" "),a("p",[a("code",[t._v("user [string]")])]),t._v(" "),a("p",[t._v("Doris 访问用户")]),t._v(" "),a("p",[a("code",[t._v("password [string]")])]),t._v(" "),a("p",[t._v("Doris 访问用户密码")]),t._v(" "),a("p",[a("code",[t._v("batch_size [string]")])]),t._v(" "),a("p",[t._v("Spark 通过 Stream Load 方式写入,每个批次提交条数")]),t._v(" "),a("p",[a("code",[t._v("doris. [string]")])]),t._v(" "),a("p",[t._v("Stream Load 方式写入的 Http 参数优化,在官网参数前加上'Doris.'前缀")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多 Stream Load 参数配置"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Hive 迁移数据至 Doris")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('env{\n  spark.app.name = "hive2doris-template"\n}\n\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\n\nsource {\n  hive {\n    preSql = "select * from tmp.test"\n    result_table_name = "test"\n  }\n}\n\ntransform {\n}\n\n\nsink {\n\nConsole {\n\n  }\n\nDoris {\n   fenodes="xxxx:8030"\n   database="tmp"\n   table="test"\n   user="root"\n   password="root"\n   batch_size=1000\n   doris.column_separator="\\t"\n   doris.columns="date_key,date_value,day_in_year,day_in_month"\n   }\n}\n')])])]),a("p",[t._v("启动命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sh bin/start-waterdrop-spark.sh --master local[4] --deploy-mode client --config ./config/spark.conf\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
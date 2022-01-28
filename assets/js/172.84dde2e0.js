(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{623:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"seatunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seatunnel"}},[t._v("#")]),t._v(" Seatunnel")]),t._v(" "),a("p",[t._v("The newest "),a("a",{attrs:{href:"https://seatunnel.apache.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SeaTunnel (waterdop) "),a("OutboundLink")],1),t._v(" has supported Doris connector,\nseatunnel can load data by Spark engine or Flink engine.")]),t._v(" "),a("p",[t._v("In fact,seatunnel load data by stream load function.Everyone is welcome to use")]),t._v(" "),a("h1",{attrs:{id:"install-seatunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-seatunnel"}},[t._v("#")]),t._v(" Install Seatunnel")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://interestinglab.github.io/seatunnel-docs/#/zh-cn/v2/flink/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seatunnel install"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"spark-sink-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-sink-doris"}},[t._v("#")]),t._v(" Spark Sink Doris")]),t._v(" "),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("required")]),t._v(" "),a("th",[t._v("default value")]),t._v(" "),a("th",[t._v("engine")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fenodes")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("database")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("table")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("batch_size")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("yes")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("Spark")])]),t._v(" "),a("tr",[a("td",[t._v("doris.*")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("no")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Spark")])])])]),t._v(" "),a("p",[a("code",[t._v("fenodes [string]")])]),t._v(" "),a("p",[t._v("Doris FE address:8030")]),t._v(" "),a("p",[a("code",[t._v("database [string]")])]),t._v(" "),a("p",[t._v("Doris target database name")]),t._v(" "),a("p",[a("code",[t._v("table [string]")])]),t._v(" "),a("p",[t._v("Doris target table name")]),t._v(" "),a("p",[a("code",[t._v("user [string]")])]),t._v(" "),a("p",[t._v("Doris user name")]),t._v(" "),a("p",[a("code",[t._v("password [string]")])]),t._v(" "),a("p",[t._v("Doris user's password")]),t._v(" "),a("p",[a("code",[t._v("batch_size [string]")])]),t._v(" "),a("p",[t._v("Doris number of submissions per batch")]),t._v(" "),a("p",[a("code",[t._v("doris. [string]")]),t._v("\nDoris stream_load properties,you can use 'doris.' prefix + stream_load properties")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://doris.apache.org/master/zh-CN/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("More Doris stream_load Configurations"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Hive to Doris")]),t._v(" "),a("p",[t._v("Config properties")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('env{\n  spark.app.name = "hive2doris-template"\n}\n\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\n\nsource {\n  hive {\n    preSql = "select * from tmp.test"\n    result_table_name = "test"\n  }\n}\n\ntransform {\n}\n\n\nsink {\n\nConsole {\n\n  }\n\nDoris {\n   fenodes="xxxx:8030"\n   database="gl_mint_dim"\n   table="dim_date"\n   user="root"\n   password="root"\n   batch_size=1000\n   doris.column_separator="\\t"\n   doris.columns="date_key,date_value,day_in_year,day_in_month"\n   }\n}\n')])])]),a("p",[t._v("Start command")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sh bin/start-waterdrop-spark.sh --master local[4] --deploy-mode client --config ./config/spark.conf\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
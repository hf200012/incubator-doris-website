(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{623:function(t,e,n){"use strict";n.r(e);var r=n(56),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"seatunnel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#seatunnel"}},[t._v("#")]),t._v(" Seatunnel")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/apache/incubator-seatunnel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SeaTunnel (formerly waterdrop )"),n("OutboundLink")],1),t._v(" already supports Doris's connector, SeaTunnel can use Spark engine and Flink engine to synchronize data to Doris.")]),t._v(" "),n("h2",{attrs:{id:"flink-sink-doris-2-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flink-sink-doris-2-x"}},[t._v("#")]),t._v(" Flink Sink Doris(2.x)")]),t._v(" "),n("p",[t._v("Seatunnel Flink Sink Doris "),n("a",{attrs:{href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors/seatunnel-connector-flink-doris",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugin code"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),t._v(" "),n("th",[t._v("type")]),t._v(" "),n("th",[t._v("required")]),t._v(" "),n("th",[t._v("default value")]),t._v(" "),n("th",[t._v("engine")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("fenodes")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("database")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("table")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("user")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("password")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("yes")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("batch_size")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("100")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("interval")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("max_retries")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Flink")])]),t._v(" "),n("tr",[n("td",[t._v("doris.*")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("no")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Flink")])])])]),t._v(" "),n("p",[n("code",[t._v("fenodes [string]")])]),t._v(" "),n("p",[t._v("Doris Fe http url, eg: 127.0.0.1:8030")]),t._v(" "),n("p",[n("code",[t._v("database [string]")])]),t._v(" "),n("p",[t._v("Doris database")]),t._v(" "),n("p",[n("code",[t._v("table [string]")])]),t._v(" "),n("p",[t._v("Doris table")]),t._v(" "),n("p",[n("code",[t._v("user [string]")])]),t._v(" "),n("p",[t._v("Doris user")]),t._v(" "),n("p",[n("code",[t._v("password [string]")])]),t._v(" "),n("p",[t._v("Doris password")]),t._v(" "),n("p",[n("code",[t._v("batch_size [int]")])]),t._v(" "),n("p",[t._v("The maximum number of lines to write to Doris at a time, the default value is 100")]),t._v(" "),n("p",[n("code",[t._v("interval [int]")])]),t._v(" "),n("p",[t._v("The flush interval (in milliseconds), after which the asynchronous thread writes the data in the cache to Doris. Set to 0 to turn off periodic writes.")]),t._v(" "),n("p",[n("code",[t._v("max_retries [int]")])]),t._v(" "),n("p",[t._v("Number of retries after writing to Doris fails")]),t._v(" "),n("p",[n("code",[t._v("doris.* [string]")])]),t._v(" "),n("p",[t._v("Import parameters for Stream load. For example: 'doris.column_separator' = ', ' etc.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("More Stream Load parameter configuration"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("p",[t._v("Socket To Doris")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('env {\n  execution.parallelism = 1\n}\nsource {\n    SocketStream {\n      host = 127.0.0.1\n      port = 9999\n      result_table_name = "socket"\n      field_name = "info"\n    }\n}\ntransform {\n}\nsink {\n  DorisSink {\n      fenodes = "127.0.0.1:8030"\n      user = root\n      password = 123456\n      database = test\n      table = test_tbl\n      batch_size = 5\n      max_retries = 1\n      interval = 5000\n    }\n}\n\n')])])]),n("h3",{attrs:{id:"start-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-command"}},[t._v("#")]),t._v(" Start command")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("sh bin/start-seatunnel-flink.sh --config config/flink.streaming.conf\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
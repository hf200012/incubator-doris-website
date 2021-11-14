(window.webpackJsonp=window.webpackJsonp||[]).push([[1192],{1638:function(e,_,a){"use strict";a.r(_);var t=a(52),r=Object(t.a)({},(function(){var e=this,_=e.$createElement,a=e._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"alter-routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-routine-load"}},[e._v("#")]),e._v(" ALTER ROUTINE LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("该语法用于修改已经创建的例行导入作业。")]),e._v(" "),a("p",[e._v("只能修改处于 PAUSED 状态的作业。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")])])]),a("ol",[a("li",[a("p",[a("code",[e._v("[db.]job_name")])]),e._v(" "),a("p",[e._v("指定要修改的作业名称。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("tbl_name")])]),e._v(" "),a("p",[e._v("指定需要导入的表的名称。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("job_properties")])]),e._v(" "),a("p",[e._v("指定需要修改的作业参数。目前仅支持如下参数的修改：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("desired_concurrent_number")])]),e._v(" "),a("li",[a("code",[e._v("max_error_number")])]),e._v(" "),a("li",[a("code",[e._v("max_batch_interval")])]),e._v(" "),a("li",[a("code",[e._v("max_batch_rows")])]),e._v(" "),a("li",[a("code",[e._v("max_batch_size")])]),e._v(" "),a("li",[a("code",[e._v("jsonpaths")])]),e._v(" "),a("li",[a("code",[e._v("json_root")])]),e._v(" "),a("li",[a("code",[e._v("strip_outer_array")])]),e._v(" "),a("li",[a("code",[e._v("strict_mode")])]),e._v(" "),a("li",[a("code",[e._v("timezone")])]),e._v(" "),a("li",[a("code",[e._v("num_as_string")])]),e._v(" "),a("li",[a("code",[e._v("fuzzy_parse")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("data_source")])]),e._v(" "),a("p",[e._v("数据源的类型。当前支持：")]),e._v(" "),a("p",[e._v("KAFKA")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("data_source_properties")])]),e._v(" "),a("p",[e._v("数据源的相关属性。目前仅支持：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("kafka_partitions")])]),e._v(" "),a("li",[a("code",[e._v("kafka_offsets")])]),e._v(" "),a("li",[a("code",[e._v("kafka_broker_list")])]),e._v(" "),a("li",[a("code",[e._v("kafka_topic")])]),e._v(" "),a("li",[e._v("自定义 property，如 "),a("code",[e._v("property.group.id")])])]),e._v(" "),a("p",[e._v("注：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("kafka_partitions")]),e._v(" 和 "),a("code",[e._v("kafka_offsets")]),e._v(" 用于修改待消费的 kafka partition 的offset，仅能修改当前已经消费的 partition。不能新增 partition。")])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("将 "),a("code",[e._v("desired_concurrent_number")]),e._v(" 修改为 1")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("将 "),a("code",[e._v("desired_concurrent_number")]),e._v(" 修改为 10，修改 partition 的offset，修改 group id。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ALTER,ROUTINE,LOAD\n")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);
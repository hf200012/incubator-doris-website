(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1051:function(e,t,a){"use strict";a.r(t);var o=a(56),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"alter-routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-routine-load"}},[e._v("#")]),e._v(" ALTER ROUTINE LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("This syntax is used to modify a routine import job that has been created.")]),e._v(" "),a("p",[e._v("Only jobs in the PAUSED state can be modified.")]),e._v(" "),a("p",[e._v("Syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")])])]),a("ol",[a("li",[a("p",[a("code",[e._v("[db.]job_name")])]),e._v(" "),a("p",[e._v("Specify the name of the job to be modified.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("job_properties")])]),e._v(" "),a("p",[e._v("Specify the job parameters that need to be modified. Currently only supports the modification of the following parameters:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("desired_concurrent_number")])]),e._v(" "),a("li",[a("code",[e._v("max_error_number")])]),e._v(" "),a("li",[a("code",[e._v("max_batch_interval")])]),e._v(" "),a("li",[a("code",[e._v("max_batch_rows")])]),e._v(" "),a("li",[a("code",[e._v("max_batch_size")])]),e._v(" "),a("li",[a("code",[e._v("jsonpaths")])]),e._v(" "),a("li",[a("code",[e._v("json_root")])]),e._v(" "),a("li",[a("code",[e._v("strip_outer_array")])]),e._v(" "),a("li",[a("code",[e._v("strict_mode")])]),e._v(" "),a("li",[a("code",[e._v("timezone")])]),e._v(" "),a("li",[a("code",[e._v("num_as_string")])]),e._v(" "),a("li",[a("code",[e._v("fuzzy_parse")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("data_source")])]),e._v(" "),a("p",[e._v("The type of data source. Currently supported:")]),e._v(" "),a("p",[e._v("KAFKA")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("data_source_properties")])]),e._v(" "),a("p",[e._v("The relevant attributes of the data source. Currently only supports:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("kafka_partitions")])]),e._v(" "),a("li",[a("code",[e._v("kafka_offsets")])]),e._v(" "),a("li",[a("code",[e._v("kafka_broker_list")])]),e._v(" "),a("li",[a("code",[e._v("kafka_topic")])]),e._v(" "),a("li",[e._v("Custom property, such as "),a("code",[e._v("property.group.id")])])]),e._v(" "),a("p",[e._v("Notice:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("kafka_partitions")]),e._v(" and "),a("code",[e._v("kafka_offsets")]),e._v(" are used to modify the offset of the kafka partition to be consumed, and can only modify the currently consumed partition. Cannot add partition.")])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Modify "),a("code",[e._v("desired_concurrent_number")]),e._v(" to 1")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n')])])])]),e._v(" "),a("li",[a("p",[e._v("Modify "),a("code",[e._v("desired_concurrent_number")]),e._v(" to 10, modify partition offset, and modify group id.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ALTER,ROUTINE,LOAD\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
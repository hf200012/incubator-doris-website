(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1131:function(e,t,s){"use strict";s.r(t);var a=s(56),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"set-config-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-config-action"}},[e._v("#")]),e._v(" Set Config Action")]),e._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),s("p",[s("code",[e._v("GET /api/_set_config")])]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("用于动态设置 FE 的参数。该命令等同于通过 "),s("code",[e._v("ADMIN SET FRONTEND CONFIG")]),e._v(" 命令。但该命令仅会设置对应 FE 节点的配置。并且不会自动转发 "),s("code",[e._v("MasterOnly")]),e._v(" 配置项给 Master FE 节点。")]),e._v(" "),s("h2",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),s("p",[e._v("无")]),e._v(" "),s("h2",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("confkey1=confvalue1")])]),e._v(" "),s("p",[e._v("指定要设置的配置名称，其值为要修改的配置值。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("persist")])]),e._v(" "),s("p",[e._v("是否要将修改的配置持久化。默认为 false，即不持久化。如果为 true，这修改后的配置项会写入 "),s("code",[e._v("fe_custom.conf")]),e._v(" 文件中，并在 FE 重启后仍会生效。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("reset_persist")])]),e._v(" "),s("p",[e._v("是否要清空原来的持久化配置，只在 persist 参数为 true 时生效。为了兼容原来的版本，reset_persist 默认为 true。"),s("br"),e._v("\n如果 persist 设为 true，不设置 reset_persist 或 reset_persist 为 true，将先清空"),s("code",[e._v("fe_custom.conf")]),e._v("文件中的配置再将本次修改的配置写入"),s("code",[e._v("fe_custom.conf")]),e._v("；"),s("br"),e._v("\n如果 persist 设为 true，reset_persist 为 false，本次修改的配置项将会增量添加到"),s("code",[e._v("fe_custom.conf")]),e._v("。")])])]),e._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),s("p",[e._v("无")]),e._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"set": {\n\t\t\t"key": "value"\n\t\t},\n\t\t"err": [\n\t\t\t{\n\t\t       "config_name": "",\n\t\t       "config_value": "",\n\t\t       "err_info": ""\n\t\t    }\n\t\t],\n\t\t"persist":""\n\t},\n\t"count": 0\n}\n')])])]),s("p",[s("code",[e._v("set")]),e._v(" 字段表示设置成功的配置。"),s("code",[e._v("err")]),e._v(" 字段表示设置失败的配置。 "),s("code",[e._v("persist")]),e._v(" 字段表示持久化信息。")]),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("设置 "),s("code",[e._v("storage_min_left_capacity_bytes")]),e._v(" 、 "),s("code",[e._v("replica_ack_policy")]),e._v(" 和 "),s("code",[e._v("agent_task_resend_wait_time_ms")]),e._v("  三个配置的值。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('GET /api/_set_config?storage_min_left_capacity_bytes=1024&replica_ack_policy=SIMPLE_MAJORITY&agent_task_resend_wait_time_ms=true\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "storage_min_left_capacity_bytes": "1024"\n    },\n    "err": [\n        {\n            "config_name": "replica_ack_policy",\n            "config_value": "SIMPLE_MAJORITY",\n            "err_info": "Not support dynamic modification."\n        },\n        {\n            "config_name": "agent_task_resend_wait_time_ms",\n            "config_value": "true",\n            "err_info": "Unsupported configuration value type."\n        }\n    ],\n    "persist": ""\n},\n"count": 0\n}\n\nstorage_min_left_capacity_bytes 设置成功；  \nreplica_ack_policy 设置失败，原因是该配置项不支持动态修改； \nagent_task_resend_wait_time_ms 设置失败，因为该配置项类型为long， 设置boolean类型失败。\n')])])])]),e._v(" "),s("li",[s("p",[e._v("设置 "),s("code",[e._v("max_bytes_per_broker_scanner")]),e._v(" 并持久化")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&persist=true&reset_persist=false\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "max_bytes_per_broker_scanner": "21474836480"\n    },\n    "err": [],\n    "persist": "ok"\n},\n"count": 0\n}\n')])])]),s("p",[e._v("fe/conf 目录生成fe_custom.conf：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#THIS IS AN AUTO GENERATED CONFIG FILE.\n#You can modify this file manually, and the configurations in this file\n#will overwrite the configurations in fe.conf\n#Wed Jul 28 12:43:14 CST 2021\nmax_bytes_per_broker_scanner=21474836480\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
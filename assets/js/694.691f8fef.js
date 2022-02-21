(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{1148:function(t,e,a){"use strict";a.r(e);var n=a(56),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-schema-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-schema-action"}},[t._v("#")]),t._v(" Table Schema Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/<db>/<table>/_schema")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("用于获取指定表的表结构信息。该接口目前用于 Spark/Flink Doris Connector 中， 获取 Doris 的表结构信息。")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<db>")])]),t._v(" "),a("p",[t._v("指定数据库")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<table>")])]),t._v(" "),a("p",[t._v("指定表")])])]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("ul",[a("li",[t._v("http接口返回如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"properties": [{\n\t\t\t"type": "INT",\n\t\t\t"name": "k1",\n\t\t\t"comment": "",\n\t\t\t"aggregation_type":""\n\t\t}, {\n\t\t\t"type": "INT",\n\t\t\t"name": "k2",\n\t\t\t"comment": "",\n\t\t\t"aggregation_type":"MAX"\n\t\t}],\n\t\t"keysType":UNIQUE_KEYS,\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])]),a("ul",[a("li",[t._v("http v2接口返回如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"properties": [{\n\t\t\t"type": "INT",\n\t\t\t"name": "k1",\n\t\t\t"comment": ""\n\t\t}, {\n\t\t\t"type": "INT",\n\t\t\t"name": "k2",\n\t\t\t"comment": ""\n\t\t}],\n\t\t"keysType":UNIQUE_KEYS,\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])]),a("p",[t._v("注意：区别为"),a("code",[t._v("http")]),t._v("方式比"),a("code",[t._v("http v2")]),t._v("方式多返回"),a("code",[t._v("aggregation_type")]),t._v("字段，"),a("code",[t._v("http v2")]),t._v("开启是通过"),a("code",[t._v("enable_http_server_v2")]),t._v("进行设置，具体参数说明详见"),a("a",{attrs:{href:"https://doris.apache.org/zh-CN/administrator-guide/config/fe_config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fe参数设置"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过http获取指定表的表结构信息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/db1/tbl1/_schema\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"properties": [{\n\t\t\t"type": "INT",\n\t\t\t"name": "k1",\n\t\t\t"comment": "",\n\t\t\t"aggregation_type":""\n\t\t}, {\n\t\t\t"type": "INT",\n\t\t\t"name": "k2",\n\t\t\t"comment": "",\n\t\t\t"aggregation_type":"MAX"\n\t\t}],\n\t\t"keysType":UNIQUE_KEYS,\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),a("li",[a("p",[t._v("通过http v2获取指定表的表结构信息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/db1/tbl1/_schema\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"properties": [{\n\t\t\t"type": "INT",\n\t\t\t"name": "k1",\n\t\t\t"comment": ""\n\t\t}, {\n\t\t\t"type": "INT",\n\t\t\t"name": "k2",\n\t\t\t"comment": ""\n\t\t}],\n\t\t"keysType":UNIQUE_KEYS,\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
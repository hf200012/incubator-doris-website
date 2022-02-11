(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{1123:function(t,s,e){"use strict";e.r(s);var a=e(56),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cluster-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-action"}},[t._v("#")]),t._v(" Cluster Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[e("code",[t._v("GET /rest/v2/manager/cluster/cluster_info/conn_info")])]),t._v(" "),e("h2",{attrs:{id:"集群连接信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群连接信息"}},[t._v("#")]),t._v(" 集群连接信息")]),t._v(" "),e("p",[e("code",[t._v("GET /rest/v2/manager/cluster/cluster_info/conn_info")])]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("用于获取集群http、mysql连接信息。")]),t._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n')])])]),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('```\nGET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n```')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
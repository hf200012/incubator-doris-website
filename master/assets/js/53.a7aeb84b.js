(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{499:function(t,s,n){"use strict";n.r(s);var e=n(52),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"cluster-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cluster-action"}},[t._v("#")]),t._v(" Cluster Action")]),t._v(" "),n("h2",{attrs:{id:"request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),n("p",[n("code",[t._v("GET /rest/v2/manager/cluster/cluster_info/conn_info")])]),t._v(" "),n("h2",{attrs:{id:"cluster-connection-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cluster-connection-information"}},[t._v("#")]),t._v(" Cluster Connection Information")]),t._v(" "),n("p",[n("code",[t._v("GET /rest/v2/manager/cluster/cluster_info/conn_info")])]),t._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("p",[t._v("Used to get cluster http, mysql connection information.")]),t._v(" "),n("h3",{attrs:{id:"response"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "fe_host:http_ip"\n        ],\n        "mysql": [\n            "fe_host:query_ip"\n        ]\n    },\n    "count": 0\n}\n')])])]),n("h3",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('```\nGET /rest/v2/manager/cluster/cluster_info/conn_info\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "http": [\n            "127.0.0.1:8030"\n        ],\n        "mysql": [\n            "127.0.0.1:9030"\n        ]\n    },\n    "count": 0\n}\n```')])])])])}),[],!1,null,null,null);s.default=a.exports}}]);
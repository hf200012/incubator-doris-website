(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{492:function(t,e,a){"use strict";a.r(e);var r=a(56),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bootstrap-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-action"}},[t._v("#")]),t._v(" Bootstrap Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/bootstrap")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("It is used to judge whether the FE has started. When no parameters are provided, only whether the startup is successful is returned. If "),a("code",[t._v("token")]),t._v(" and "),a("code",[t._v("cluster_id")]),t._v(" are provided, more detailed information is returned.")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("none")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("cluster_id")])]),t._v(" "),a("p",[t._v("The cluster id. It can be viewed in the file "),a("code",[t._v("palo-meta/image/VERSION")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("token")])]),t._v(" "),a("p",[t._v("Cluster token. It can be viewed in the file "),a("code",[t._v("palo-meta/image/VERSION")]),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("none")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("No parameters provided")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])]),a("p",[t._v("A code of 0 means that the FE node has started successfully. Error codes other than 0 indicate other errors.")])]),t._v(" "),a("li",[a("p",[t._v("Provide "),a("code",[t._v("token")]),t._v(" and "),a("code",[t._v("cluster_id")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"queryPort": 9030,\n\t\t"rpcPort": 9020,\n\t\t"maxReplayedJournal": 17287\n\t},\n\t"count": 0\n}\n')])])]),a("ul",[a("li",[a("code",[t._v("queryPort")]),t._v(" is the MySQL protocol port of the FE node.")]),t._v(" "),a("li",[a("code",[t._v("rpcPort")]),t._v(" is the thrift RPC port of the FE node.")]),t._v(" "),a("li",[a("code",[t._v("maxReplayedJournal")]),t._v(" represents the maximum metadata journal id currently played back by the FE node.")])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("No parameters")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/bootstrap\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Provide "),a("code",[t._v("token")]),t._v(" and "),a("code",[t._v("cluster_id")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"queryPort": 9030,\n\t\t"rpcPort": 9020,\n\t\t"maxReplayedJournal": 17287\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
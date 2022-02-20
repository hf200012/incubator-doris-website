(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1110:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bootstrap-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-action"}},[t._v("#")]),t._v(" Bootstrap Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[e("code",[t._v("GET /api/bootstrap")])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("用于判断FE是否启动完成。当不提供任何参数时，仅返回是否启动成功。如果提供了 "),e("code",[t._v("token")]),t._v(" 和 "),e("code",[t._v("cluster_id")]),t._v("，则返回更多详细信息。")]),t._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("cluster_id")])]),t._v(" "),e("p",[t._v("集群id。可以在 "),e("code",[t._v("palo-meta/image/VERSION")]),t._v(" 文件中查看。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("token")])]),t._v(" "),e("p",[t._v("集群token。可以在 "),e("code",[t._v("palo-meta/image/VERSION")]),t._v(" 文件中查看。")])])]),t._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("不提供参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])]),e("p",[t._v("code 为 0 表示FE节点启动成功。非 0 的错误码表示其他错误。")])]),t._v(" "),e("li",[e("p",[t._v("提供 "),e("code",[t._v("token")]),t._v(" 和 "),e("code",[t._v("cluster_id")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"queryPort": 9030,\n\t\t"rpcPort": 9020,\n\t\t"maxReplayedJournal": 17287\n\t},\n\t"count": 0\n}\n')])])]),e("ul",[e("li",[e("code",[t._v("queryPort")]),t._v(" 是 FE 节点的 MySQL 协议端口。")]),t._v(" "),e("li",[e("code",[t._v("rpcPort")]),t._v(" 是 FE 节点的 thrift RPC 端口。")]),t._v(" "),e("li",[e("code",[t._v("maxReplayedJournal")]),t._v(" 表示 FE 节点当前回放的最大元数据日志id。")])])])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("不提供参数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/bootstrap\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])])]),t._v(" "),e("li",[e("p",[t._v("提供 "),e("code",[t._v("token")]),t._v(" 和 "),e("code",[t._v("cluster_id")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"queryPort": 9030,\n\t\t"rpcPort": 9020,\n\t\t"maxReplayedJournal": 17287\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
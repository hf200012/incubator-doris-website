(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{498:function(t,e,a){"use strict";a.r(e);var n=a(56),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connection-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-action"}},[t._v("#")]),t._v(" Connection Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/connection")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Given a connection id, return the query id that is currently being executed for this connection or the last execution completed.")]),t._v(" "),a("p",[t._v("The connection id can be viewed through the id column in the MySQL command "),a("code",[t._v("show processlist;")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("connection_id")])]),t._v(" "),a("p",[t._v("Specified connection id")])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n\t},\n\t"count": 0\n}\n')])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Get the query id of the specified connection id")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/connection?connection_id=101\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"query_id": "b52513ce3f0841ca-9cb4a96a268f2dba"\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
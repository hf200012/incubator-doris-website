(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{528:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-schema-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-schema-action"}},[t._v("#")]),t._v(" Table Schema Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/<db>/<table>/_schema")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Used to obtain the table structure information of the specified table. This interface is currently used in Spark/Flink Doris Connector.  obtains Doris table structure information.")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<db>")])]),t._v(" "),a("p",[t._v("Specify database")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<table>")])]),t._v(" "),a("p",[t._v("Specify table")])])]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"properties": [{\n\t\t\t"type": "INT",\n\t\t\t"name": "k1",\n\t\t\t"comment": "",\n\t\t\t"aggregation_type":""\n\t\t}, {\n\t\t\t"type": "INT",\n\t\t\t"name": "k2",\n\t\t\t"comment": "",\n\t\t\t"aggregation_type":"MAX"\n\t\t}],\n\t\t"keysType":UNIQUE_KEYS,\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Get the table structure information of the specified table.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/db1/tbl1/_schema\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"properties": [{\n\t\t\t"type": "INT",\n\t\t\t"name": "k1",\n\t\t\t"comment": ""\n\t\t}, {\n\t\t\t"type": "INT",\n\t\t\t"name": "k2",\n\t\t\t"comment": ""\n\t\t}],\n\t\t"keysType":UNIQUE_KEYS,\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
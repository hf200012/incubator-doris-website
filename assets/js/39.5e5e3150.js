(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{495:function(e,t,s){"use strict";s.r(t);var a=s(56),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"check-decommission-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-decommission-action"}},[e._v("#")]),e._v(" Check Decommission Action")]),e._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),s("p",[s("code",[e._v("GET /api/check_decommission")])]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("Used to determine whether the specified BE can be decommissioned. For example, after the node being decommissioned, whether the remaining nodes can meet the space requirements and the number of replicas.")]),e._v(" "),s("h2",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),s("p",[e._v("None")]),e._v(" "),s("h2",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("host_ports")])]),e._v(" "),s("p",[e._v("Specify one or more BEs, separated by commas. Such as: "),s("code",[e._v("ip1:port1,ip2:port2,...")]),e._v(".")]),e._v(" "),s("p",[e._v("Where port is the heartbeat port of BE.")])])]),e._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),s("p",[e._v("None")]),e._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("p",[e._v("Return a list of nodes that can be decommissioned")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n\t"count": 0\n}\n')])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Check whether the specified BE node can be decommissioned")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": ["192.168.10.11:9050"],\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
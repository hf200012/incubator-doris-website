(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1105:function(t,a,s){"use strict";s.r(a);var e=s(52),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"show-data-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-data-action"}},[t._v("#")]),t._v(" Show Data Action")]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("code",[t._v("GET /api/show_data")])]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("用于获取集群的总数据量，或者指定数据库的数据量。单位字节。")]),t._v(" "),s("h2",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("p",[t._v("无")]),t._v(" "),s("h2",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("db")])]),t._v(" "),s("p",[t._v("可选。如果指定，则获取指定数据库的数据量。")])])]),t._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("无")]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("指定数据库的数据量。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),s("li",[s("p",[t._v("总数据量")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"__total_size": 381\n\t},\n\t"count": 0\n}\n')])])])])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("获取指定数据库的数据量")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /api/show_data?db=db1\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),s("li",[s("p",[t._v("获取集群总数据量")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /api/show_data\n    \nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"__total_size": 381\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
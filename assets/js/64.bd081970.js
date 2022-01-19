(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{521:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"show-data-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-data-action"}},[t._v("#")]),t._v(" Show Data Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[e("code",[t._v("GET /api/show_data")])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Used to get the total data volume of the cluster or the data volume of the specified database. Unit byte.")]),t._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("db")])]),t._v(" "),e("p",[t._v("Optional. If specified, get the data volume of the specified database.")])])]),t._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Specify the amount of data in the database.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),e("li",[e("p",[t._v("Total data")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"__total_size": 381\n\t},\n\t"count": 0\n}\n')])])])])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Get the data volume of the specified database")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/show_data?db=db1\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"default_cluster:db1": 381\n\t},\n\t"count": 0\n}\n')])])])]),t._v(" "),e("li",[e("p",[t._v("Get the total data volume of the cluster")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/show_data\n    \nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"__total_size": 381\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
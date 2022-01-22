(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{1117:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"query-profile-action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-profile-action"}},[t._v("#")]),t._v(" Query Profile Action")]),t._v(" "),r("h2",{attrs:{id:"request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("GET /rest/v1/query_profile/<query_id>\n")])])]),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Query Profile Action 用于获取 Query 的 profile。")]),t._v(" "),r("h2",{attrs:{id:"path-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),r("ul",[r("li",[r("p",[r("code",[t._v("<query_id>")])]),t._v(" "),r("p",[t._v("可选参数。当不指定时，返回最新的 query 列表。当指定时，返回指定 query 的 profile。")])])]),t._v(" "),r("h2",{attrs:{id:"query-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),r("p",[t._v("无")]),t._v(" "),r("h2",{attrs:{id:"request-body"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),r("p",[t._v("无")]),t._v(" "),r("h2",{attrs:{id:"response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("不指定 "),r("code",[t._v("<query_id>")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('GET /rest/v1/query_profile/\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"href_column": ["Query ID"],\n\t\t"column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n\t\t"rows": [{\n\t\t\t"User": "root",\n\t\t\t"__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n\t\t\t"Query Type": "Query",\n\t\t\t"Total": "5ms",\n\t\t\t"Default Db": "default_cluster:db1",\n\t\t\t"Sql Statement": "select * from tbl1",\n\t\t\t"Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n\t\t\t"Start Time": "2020-09-03 10:07:54",\n\t\t\t"Query State": "EOF",\n\t\t\t"End Time": "2020-09-03 10:07:54"\n\t\t}, {\n\t\t\t"User": "root",\n\t\t\t"__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n\t\t\t"Query Type": "Query",\n\t\t\t"Total": "6ms",\n\t\t\t"Default Db": "default_cluster:db1",\n\t\t\t"Sql Statement": "select * from tbl1",\n\t\t\t"Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n\t\t\t"Start Time": "2020-09-03 10:07:54",\n\t\t\t"Query State": "EOF",\n\t\t\t"End Time": "2020-09-03 10:07:54"\n\t\t}]\n\t},\n\t"count": 3\n}\n')])])]),r("p",[t._v("返回结果同 "),r("code",[t._v("System Action")]),t._v("，是一个表格的描述。")])]),t._v(" "),r("li",[r("p",[t._v("指定 "),r("code",[t._v("<query_id>")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('GET /rest/v1/query_profile/<query_id>\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n\t"count": 0\n}\n')])])]),r("p",[r("code",[t._v("data")]),t._v(" 为 profile 的文本内容。")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
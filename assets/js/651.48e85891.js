(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1104:function(t,e,a){"use strict";a.r(e);var r=a(56),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"log-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-action"}},[t._v("#")]),t._v(" Log Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /rest/v1/log\n")])])]),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("GET 用于获取 Doris 最新的一部分 WARNING 日志，POST 方法用于动态设置 FE 的日志级别。")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("add_verbose")])]),t._v(" "),a("p",[t._v("POST 方法可选参数。开启指定 Package 的 DEBUG 级别日志。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("del_verbose")])]),t._v(" "),a("p",[t._v("POST 方法可选参数。关闭指定 Package 的 DEBUG 级别日志。")])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /rest/v1/log\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"LogContents": {\n\t\t\t"logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n\t\t\t"log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n\t\t\t"showingLast": "603 bytes of log"\n\t\t},\n\t\t"LogConfiguration": {\n\t\t\t"VerboseNames": "org",\n\t\t\t"AuditNames": "slow_query,query",\n\t\t\t"Level": "INFO"\n\t\t}\n\t},\n\t"count": 0\n}  \n')])])]),a("p",[t._v("其中 "),a("code",[t._v("data.LogContents.log")]),t._v(" 表示最新一部分 "),a("code",[t._v("fe.warn.log")]),t._v(" 中的日志内容。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('POST /rest/v1/log?add_verbose=org\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"LogConfiguration": {\n\t\t\t"VerboseNames": "org",\n\t\t\t"AuditNames": "slow_query,query",\n\t\t\t"Level": "INFO"\n\t\t}\n\t},\n\t"count": 0\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
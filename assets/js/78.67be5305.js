(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{533:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"query-detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-detail"}},[e._v("#")]),e._v(" QUERY DETAIL")]),e._v(" "),a("p",[e._v("Collect the query details from FE. You should set the event_time.\nFE will return the query detail after the event_time.\nThe unit of event_time is milliseconds.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -X GET http://fe_host:fe_http_port/api/query_detail?event_time=1592054515284\n")])])]),a("p",[e._v("The query details will be be returned as JSON")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[\n  {\n    "eventTime": 1592201405063,\n    "queryId": "a0a9259df9844029-845331577440a3bd",\n    "startTime": 1592201405055,\n    "endTime": 1592201405063,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  }, \n  {\n    "eventTime": 1592201420842,\n    "queryId": "21cd79c3e1634e8a-bdac090c7e7bcc36",\n    "startTime": 1592201420834,\n    "endTime": 1592201420842,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  }\n]\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
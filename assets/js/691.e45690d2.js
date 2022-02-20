(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1145:function(A,t,a){"use strict";a.r(t);var e=a(56),s=Object(e.a)({},(function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h1",{attrs:{id:"table-query-plan-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-query-plan-action"}},[A._v("#")]),A._v(" Table Query Plan Action")]),A._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[A._v("#")]),A._v(" Request")]),A._v(" "),a("p",[a("code",[A._v("POST /api/<db>/<table>/_query_plan")])]),A._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[A._v("#")]),A._v(" Description")]),A._v(" "),a("p",[A._v("给定一个 SQL，用于获取该 SQL 对应的查询计划。")]),A._v(" "),a("p",[A._v("该接口目前用于 Spark-Doris-Connector 中，Spark 获取 Doris 的查询计划。")]),A._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[A._v("#")]),A._v(" Path parameters")]),A._v(" "),a("ul",[a("li",[a("p",[a("code",[A._v("<db>")])]),A._v(" "),a("p",[A._v("指定数据库")])]),A._v(" "),a("li",[a("p",[a("code",[A._v("<table>")])]),A._v(" "),a("p",[A._v("指定表")])])]),A._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[A._v("#")]),A._v(" Query parameters")]),A._v(" "),a("p",[A._v("无")]),A._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[A._v("#")]),A._v(" Request body")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[A._v('{\n\t"sql": "select * from db1.tbl1;"\n}\n')])])]),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[A._v("#")]),A._v(" Response")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[A._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"partitions": {\n\t\t\t"10039": {\n\t\t\t\t"routings": ["10.81.85.89:9062"],\n\t\t\t\t"version": 2,\n\t\t\t\t"versionHash": 982459448378619656,\n\t\t\t\t"schemaHash": 1294206575\n\t\t\t}\n\t\t},\n\t\t"opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])]),a("p",[A._v("其中 "),a("code",[A._v("opaqued_query_plan")]),A._v(" 为查询计划的二进制格式。")]),A._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[A._v("#")]),A._v(" Examples")]),A._v(" "),a("ol",[a("li",[a("p",[A._v("获取指定 sql 的查询计划")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[A._v('POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"partitions": {\n\t\t\t"10039": {\n\t\t\t\t"routings": ["192.168.1.1:9060"],\n\t\t\t\t"version": 2,\n\t\t\t\t"versionHash": 982459448378619656,\n\t\t\t\t"schemaHash": 1294206575\n\t\t\t}\n\t\t},\n\t\t"opaqued_query_plan": "DAABDAACDwABD...",\n\t\t"status": 200\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
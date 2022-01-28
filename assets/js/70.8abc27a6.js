(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{525:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"system-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-action"}},[t._v("#")]),t._v(" System Action")]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /rest/v1/system\n")])])]),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("System Action is used for information about the Proc system built in Doris.")]),t._v(" "),s("h2",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h2",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("path")])]),t._v(" "),s("p",[t._v("Optional parameter, specify the path of proc")])])]),t._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[t._v("Take "),s("code",[t._v("/dbs/10003/10054/partitions/10053/10055")]),t._v(" as an example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n\t\t"column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n\t\t"rows": [{\n\t\t\t"SchemaHash": "1294206575",\n\t\t\t"LstFailedTime": "\\\\N",\n\t\t\t"LstFailedVersion": "-1",\n\t\t\t"MetaUrl": "URL",\n\t\t\t"__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056/1294206575", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056&schema_hash=1294206575"],\n\t\t\t"CheckVersionHash": "-1",\n\t\t\t"ReplicaId": "10057",\n\t\t\t"VersionHash": "4611804212003004639",\n\t\t\t"LstConsistencyCheckTime": "\\\\N",\n\t\t\t"LstSuccessVersionHash": "4611804212003004639",\n\t\t\t"CheckVersion": "-1",\n\t\t\t"Version": "6",\n\t\t\t"VersionCount": "2",\n\t\t\t"State": "NORMAL",\n\t\t\t"BackendId": "10032",\n\t\t\t"DataSize": "776",\n\t\t\t"LstFailedVersionHash": "0",\n\t\t\t"LstSuccessVersion": "6",\n\t\t\t"CompactionStatus": "URL",\n\t\t\t"TabletId": "10056",\n\t\t\t"PathHash": "-3259732870068082628",\n\t\t\t"RowCount": "21"\n\t\t}]\n\t},\n\t"count": 1\n}\n')])])]),s("p",[t._v("The "),s("code",[t._v("column_names")]),t._v(" in the data part is the header information, and "),s("code",[t._v("href_columns")]),t._v(" indicates which columns in the table are hyperlink columns. Each element in the "),s("code",[t._v("rows")]),t._v(" array represents a row. Among them, "),s("code",[t._v("__hrefPaths")]),t._v(" is not the table data, but the link URL of the hyperlink column, which corresponds to the column in "),s("code",[t._v("href_columns")]),t._v(" one by one.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
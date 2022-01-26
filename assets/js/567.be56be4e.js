(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{1020:function(t,e,a){"use strict";a.r(e);var s=a(56),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"multi-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-load"}},[t._v("#")]),t._v(" MULTI LOAD")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Syntax:\ncurl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\ncurl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx&sub_label=yyy\ncurl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx&sub_label=zzz\ncurl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\ncurl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx")]),t._v(" "),a("p",[t._v("'MULTI LOAD'can support users to import multiple tables at the same time on the basis of'MINI LOAD'. The specific commands are shown above.\n'/api/{db}/_multi_start' starts a multi-table import task\n'/api/{db}/{table}/_load' adds a table to be imported to an import task. The main difference from 'MINI LOAD' is that the 'sub_label' parameter needs to be passed in.\n'/api/{db}/_multi_commit' submits the entire multi-table import task and the background begins processing\n'/api/{db}/_multi_abort' Abandons a multi-table import task\n'/api/{db}/_multi_desc' shows the number of jobs submitted by a multi-table import task")]),t._v(" "),a("p",[t._v("HTTP Protocol Specification\nPrivilege Authentication Currently Doris uses the Basic mode of HTTP for privilege authentication. So you need to specify a username and password when importing\nThis way is to pass passwords in plaintext, since we are all in the Intranet environment at present...")]),t._v(" "),a("p",[t._v("Expect Doris needs to send an HTTP request, and needs the 'Expect' header information with the content of'100-continue'.\nWhy? Because we need to redirect the request, we have to transfer the data content before.\nThis can avoid causing multiple data transmission, thereby improving efficiency.")]),t._v(" "),a("p",[t._v("Content-Length Doris needs to send a request with the header 'Content-Length'. If the content ratio is sent\nIf'Content-Length'is less, Palo believes that if there is a transmission problem, the submission of the task fails.\nNOTE: If you send more data than 'Content-Length', Doris reads only 'Content-Length'.\nLength content and import")]),t._v(" "),a("p",[t._v("Description of parameters:\nUser: User is user_name if the user is in default_cluster. Otherwise, it is user_name@cluster_name.")]),t._v(" "),a("p",[t._v("Label: Used to specify the label number imported in this batch for later job status queries, etc.\nThis parameter must be passed in.")]),t._v(" "),a("p",[t._v("Sub_label: Used to specify a subversion number within a multi-table import task. For multi-table imported loads, this parameter must be passed in.")]),t._v(" "),a("p",[t._v("Columns: Used to describe the corresponding column name in the import file.\nIf it is not passed in, the column order in the file is considered to be the same as the order in which the table is built.\nThe specified method is comma-separated, such as columns = k1, k2, k3, K4")]),t._v(" "),a("p",[t._v("Column_separator: Used to specify the separator between columns, default is' t'\nNOTE: Url encoding is required, such as specifying '\\t'as a delimiter.\nThen you should pass in 'column_separator=% 09'")]),t._v(" "),a("p",[t._v("Max_filter_ratio: Used to specify the maximum percentage allowed to filter irregular data, default is 0, not allowed to filter\nCustom specification should be as follows:'max_filter_ratio = 0.2', meaning that 20% error rate is allowed.\nPass in effect at'_multi_start'")]),t._v(" "),a("p",[t._v("NOTE:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("This method of importing is currently completed on a single machine, so it is not suitable to import a large amount of data.\nIt is recommended that the amount of data imported should not exceed 1GB")])]),t._v(" "),a("li",[a("p",[t._v("Currently, it is not possible to submit multiple files in the form of "),a("code",[t._v("curl-T',")]),t._v("{file1, file2}', because curl splits them into multiple files.\nRequest sent, multiple requests cannot share a label number, so it cannot be used")])]),t._v(" "),a("li",[a("p",[t._v("Supports streaming-like ways to use curl to import data into Doris, but Doris will have to wait until the streaming is over\nReal import behavior will occur, and the amount of data in this way cannot be too large.")])])]),t._v(" "),a("p",[t._v("'35;'35; example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Import the data from the local file 'testData1'into the table of 'testTbl1' in the database 'testDb', and\nImport the data from 'testData2'into the table 'testTbl2' in 'testDb'(the user is in default_cluster)\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\ncurl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123&sub_label=1\ncurl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123&sub_label=2\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123")])]),t._v(" "),a("li",[a("p",[t._v("Multi-table Import Midway Abandon (User in default_cluster)\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\ncurl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123&sub_label=1\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123")])]),t._v(" "),a("li",[a("p",[t._v("Multi-table import to see how much content has been submitted (user is in default_cluster)\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\ncurl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123&sub_label=1\ncurl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123")])])]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("MULTI, MINI, LOAD")])])}),[],!1,null,null,null);e.default=o.exports}}]);
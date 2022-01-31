(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1041:function(e,t,a){"use strict";a.r(t);var i=a(56),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-export"}},[e._v("#")]),e._v(" SHOW EXPORT")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v('This statement is used to show the execution of the specified export task\nGrammar:\nSHOW EXPORT\n[FROM db_name]\n[\nWHERE\n[ID = your_job_id]\n[STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n[LABEL = "your_label"]\n]\n[ORDER BY ...]\n[LIMIT limit];')]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("ol",[a("li",[e._v("If db_name is not specified, use the current default DB")]),e._v(" "),a("li",[e._v("If STATE is specified, the EXPORT state is matched")]),e._v(" "),a("li",[e._v("Any column combination can be sorted using ORDER BY")]),e._v(" "),a("li",[e._v("If LIMIT is specified, the limit bar matching record is displayed. Otherwise, all of them will be displayed.")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Show all export tasks of default DB\nSHOW EXPORT;")])]),e._v(" "),a("li",[a("p",[e._v("Show the export tasks of the specified db, sorted in descending order by StartTime\nSHOW EXPORT FROM example_db ORDER BY StartTime DESC;")])]),e._v(" "),a("li",[a("p",[e._v('Show the export task of the specified db, state is "exporting" and sorted in descending order by StartTime\nSHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;')])]),e._v(" "),a("li",[a("p",[e._v("Show the export task of specifying dB and job_id\nSHOW EXPORT FROM example_db WHERE ID = job_id;")])]),e._v(" "),a("li",[a("p",[e._v('Show the export task of specifying dB and label\nSHOW EXPORT FROM example_db WHERE LABEL = "mylabel";')])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("SHOW,EXPORT\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
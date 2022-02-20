(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1007:function(e,t,a){"use strict";a.r(t);var r=a(56),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"recover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recover"}},[e._v("#")]),e._v(" RECOVER")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v('This statement is used to restore previously deleted databases, tables, or partitions\nGrammar:\n1)24674;"22797database;\nRECOVER DATABASE db_name;\n2) 恢复 table\nRECOVER TABLE [db_name.]table_name;\n3)24674;"22797partition\nRECOVER PARTITION partition name FROM [dbu name.]table name;')]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("ol",[a("li",[e._v("This operation can only recover the meta-information deleted in the previous period of time. The default is 1 day.(You can configure it with the "),a("code",[e._v("catalog_trash_expire_second")]),e._v(" parameter in fe.conf)")]),e._v(" "),a("li",[e._v("If new meta-information of the same name and type is created after deleting meta-information, the previously deleted meta-information cannot be restored.")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Restore the database named example_db\nRECOVER DATABASE example_db;")])]),e._v(" "),a("li",[a("p",[e._v("Restore table named example_tbl\nRECOVER TABLE example_db.example_tbl;")])]),e._v(" "),a("li",[a("p",[e._v("Restore partition named P1 in example_tbl\nRECOVER PARTITION p1 FROM example_tbl;")])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("RECOVER")])])}),[],!1,null,null,null);t.default=n.exports}}]);
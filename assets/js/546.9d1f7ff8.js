(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{999:function(e,t,o){"use strict";o.r(t);var a=o(56),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"colocate-join"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#colocate-join"}},[e._v("#")]),e._v(" Colocate Join")]),e._v(" "),o("h2",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),o("p",[e._v("Colocate/Local Join means that when multiple nodes are Join, there is no data movement and network transmission, and each node is only Join locally.\nThe premise of Join locally is to import data from the same Join Key into a fixed node according to the same rules.")]),e._v(" "),o("p",[e._v("1 How To Use:")]),e._v(" "),o("p",[e._v("Simply add the property colocate_with when building a table. The value of colocate_with can be set to any one of the same set of colocate tables.\nHowever, you need to ensure that tables in the colocate_with attribute are created first.")]),e._v(" "),o("p",[e._v("If you need to Colocate Join table t1 and t2, you can build tables according to the following statements:")]),e._v(" "),o("p",[e._v("CREATE TABLE "),o("code",[e._v("t1")]),e._v(" (\n"),o("code",[e._v("id")]),e._v(' int(11) COMMENT "",\n\'value '),o("code",[e._v('varchar (8) COMMENT "" ) ENGINE=OLAP DUPLICATE KEY(')]),e._v("id"),o("code",[e._v(") DISTRIBUTED BY HASH(")]),e._v('id`) BUCKETS 10\nPROPERTIES (\n"colocate_with" = "t1"\n);')]),e._v(" "),o("p",[e._v("CREATE TABLE "),o("code",[e._v("t2")]),e._v(" (\n"),o("code",[e._v("id")]),e._v(' int(11) COMMENT "",\n\'value '),o("code",[e._v('varchar (8) COMMENT "" ) ENGINE=OLAP DUPLICATE KEY(')]),e._v("id"),o("code",[e._v(") DISTRIBUTED BY HASH(")]),e._v('id`) BUCKETS 10\nPROPERTIES (\n"colocate_with" = "t1"\n);')]),e._v(" "),o("p",[e._v("2 Colocate Join 目前的限制:")]),e._v(" "),o("ol",[o("li",[e._v("Colcoate Table must be an OLAP-type table")]),e._v(" "),o("li",[e._v("The BUCKET number of tables with the same colocate_with attribute must be the same")]),e._v(" "),o("li",[e._v("The number of copies of tables with the same colocate_with attribute must be the same")]),e._v(" "),o("li",[e._v("Data types of DISTRIBUTED Columns for tables with the same colocate_with attribute must be the same")])]),e._v(" "),o("p",[e._v("3 Colocate Join's applicable scenario:")]),e._v(" "),o("p",[e._v("Colocate Join is well suited for scenarios where tables are bucketed according to the same field and high frequency according to the same field Join.")]),e._v(" "),o("p",[e._v("4 FAQ:")]),e._v(" "),o("p",[e._v("Q: 支持多张表进行Colocate Join 吗?")]),e._v(" "),o("p",[e._v("A: 25903;. 25345")]),e._v(" "),o("p",[e._v("Q: Do you support Colocate table and normal table Join?")]),e._v(" "),o("p",[e._v("A: 25903;. 25345")]),e._v(" "),o("p",[e._v("Q: Does the Colocate table support Join with non-bucket Key?")]),e._v(" "),o("p",[e._v("A: Support: Join that does not meet Colocate Join criteria will use Shuffle Join or Broadcast Join")]),e._v(" "),o("p",[e._v("Q: How do you determine that Join is executed according to Colocate Join?")]),e._v(" "),o("p",[e._v("A: The child node of Hash Join in the result of explain is Colocate Join if it is OlapScanNode directly without Exchange Node.")]),e._v(" "),o("p",[e._v("Q: How to modify the colocate_with attribute?")]),e._v(" "),o("p",[e._v('A: ALTER TABLE example_db.my_table set ("colocate_with"="target_table");')]),e._v(" "),o("p",[e._v("Q: 229144; colcoate join?")]),e._v(" "),o("p",[e._v("A: set disable_colocate_join = true; 就可以禁用Colocate Join, 查询时就会使用Shuffle Join 和Broadcast Join")]),e._v(" "),o("h2",{attrs:{id:"keyword"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),o("p",[e._v("COLOCATE, JOIN, CREATE TABLE")])])}),[],!1,null,null,null);t.default=i.exports}}]);
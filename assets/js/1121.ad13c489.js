(window.webpackJsonp=window.webpackJsonp||[]).push([[1121],{1575:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"link-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-database"}},[t._v("#")]),t._v(" LINK DATABASE")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("（已废弃！！！）\n该语句用户链接一个逻辑集群的数据库到另外一个逻辑集群, 一个数据库只允许同时被链接一次，删除链接的数据库\n\n并不会删除数据，并且被链接的数据库不能被删除, 需要管理员权限\n\n语法\n\nLINK DATABASE src_cluster_name.src_db_name des_cluster_name.des_db_name \n")])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 链接test_clusterA中的test_db到test_clusterB,并命名为link_test_db\n\n   LINK DATABASE test_clusterA.test_db test_clusterB.link_test_db;\n\n2. 删除链接的数据库link_test_db\n\n   DROP DATABASE link_test_db;\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("LINK,DATABASE\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{946:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"admin-set-replica-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-set-replica-status"}},[t._v("#")]),t._v(" ADMIN SET REPLICA STATUS")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("This commend is used to set the status of the specified replica.\n")])])]),a("p",[t._v("This command is currently only used to manually set the status of some replicas to BAD or OK, allowing the system to automatically repair these replicas.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Syntax:\n\n    ADMIN SET REPLICA STATUS\n    PROPERTIES ("key" = "value", ...);\n\n    The following attributes are currently supported:\n    "tablet_id": required. Specify a Tablet Id.\n    "backend_id": required. Specify a Backend Id.\n    "status": required. Specify the status. Only "bad" and "ok" are currently supported.\n\n    If the specified replica does not exist or the status is already bad or ok, it will be ignored.\n\nNotice:\n\n    Replica set to Bad status may be dropped immediately, please proceed with caution.\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('1. Set the replica status of tablet 10003 on BE 10001 to bad.\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n\n2. Set the replica status of tablet 10003 on BE 10001 to ok.\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("ADMIN,SET,REPLICA,STATUS\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
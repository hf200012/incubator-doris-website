(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1057:function(e,a,t){"use strict";t.r(a);var s=t(56),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-snapshot"}},[e._v("#")]),e._v(" SHOW SNAPSHOT")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is used to view existing backups in the warehouse.\nGrammar:\nSHOW SNAPSHOT ON "),t("code",[e._v("repo_name")]),e._v('\n[WHERE SNAPSHOT = "snapshot" [AND TIMESTAMP = "backup_timestamp"]];')]),e._v(" "),t("p",[e._v("Explain:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Each column has the following meanings:\nSnapshot: The name of the backup\nTimestamp: Time version for backup\nStatus: If the backup is normal, the OK will be displayed, otherwise the error message will be displayed.")])]),e._v(" "),t("li",[t("p",[e._v("If TIMESTAMP is specified, the following additional information will be displayed:\nDatabase: The name of the database where the backup data belongs\nDetails: Shows the entire backup data directory and file structure in the form of Json")])])]),e._v(" "),t("p",[e._v("'35;'35; example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Check the existing backups in warehouse example_repo:\nSHOW SNAPSHOT ON example_repo;")])]),e._v(" "),t("li",[t("p",[e._v('View only the backup named backup1 in warehouse example_repo:\nSHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "backup1";')])]),e._v(" "),t("li",[t("p",[e._v('Check the backup named backup1 in the warehouse example_repo for details of the time version "2018-05-05-15-34-26":\nSHOW SNAPSHOT ON example_repo\nWHERE SNAPSHOT = "backup1" AND TIMESTAMP = "2018-05-05-15-34-26";')])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("SHOW, SNAPSHOT")])])}),[],!1,null,null,null);a.default=i.exports}}]);
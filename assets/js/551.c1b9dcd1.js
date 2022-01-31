(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1004:function(e,a,t){"use strict";t.r(a);var s=t(56),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-encryptkeys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-encryptkeys"}},[e._v("#")]),e._v(" SHOW ENCRYPTKEYS")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n")])])]),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("db")]),e._v(": the name of the database to query\n"),t("code",[e._v("key_pattern")]),e._v(": parameter used to filter key names")])]),e._v(" "),t("p",[e._v("View all custom keys under the database. If the user specifies a database, then view the corresponding database, otherwise query the current session's database directly.")]),e._v(" "),t("p",[e._v("You need to have "),t("code",[e._v("ADMIN")]),e._v(" privileges for this database.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('```\nmysql> SHOW ENCRYPTKEYS;\n+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n1 row in set (0.00 sec)\n\nmysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n1 row in set (0.00 sec)\n```\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW,ENCRYPTKEYS\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
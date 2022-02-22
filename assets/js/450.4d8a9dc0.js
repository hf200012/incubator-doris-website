(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{903:function(e,a,t){"use strict";t.r(a);var s=t(56),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"coalesce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coalesce"}},[e._v("#")]),e._v(" coalesce")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[t("code",[e._v("VARCHAR coalesce(VARCHAR, ...)")]),e._v(" "),t("code",[e._v("...")]),e._v(" "),t("code",[e._v("INT coalesce(INT, ...)")])]),e._v(" "),t("p",[t("code",[e._v("coalesce")]),e._v(" function will return the first not null value. If it's all value is null, return null")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL> select coalesce(1,null,2);\n+----------------------+\n| coalesce(1, NULL, 2) |\n+----------------------+\n|                    1 |\n+----------------------+\n\nMySQL> select coalesce(null,\"asd\",1);\n+--------------------------+\n| coalesce(NULL, 'asd', 1) |\n+--------------------------+\n| asd                      |\n+--------------------------+\n\nMySQL> select coalesce(null,null,null);\n+----------------------------+\n| coalesce(NULL, NULL, NULL) |\n+----------------------------+\n|                       NULL |\n+----------------------------+\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("coalesce")])])}),[],!1,null,null,null);a.default=l.exports}}]);
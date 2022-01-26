(window.webpackJsonp=window.webpackJsonp||[]).push([[1050],{1504:function(e,a,s){"use strict";s.r(a);var t=s(56),c=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"coalesce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coalesce"}},[e._v("#")]),e._v(" coalesce")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("p",[s("code",[e._v("VARCHAR coalesce(VARCHAR, ...)")]),e._v(" "),s("code",[e._v("...")]),e._v(" "),s("code",[e._v("INT coalesce(INT, ...)")])]),e._v(" "),s("p",[s("code",[e._v("coalesce")]),e._v("函数会返回第一个非NULL的值，若全部为NULL，则返回NULL")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("MySQL> select coalesce(1,null,2);\n+----------------------+\n| coalesce(1, NULL, 2) |\n+----------------------+\n|                    1 |\n+----------------------+\n\nMySQL> select coalesce(null,\"asd\",1);\n+--------------------------+\n| coalesce(NULL, 'asd', 1) |\n+--------------------------+\n| asd                      |\n+--------------------------+\n\nMySQL> select coalesce(null,null,null);\n+----------------------------+\n| coalesce(NULL, NULL, NULL) |\n+----------------------------+\n|                       NULL |\n+----------------------------+\n\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("p",[e._v("coalesce")])])}),[],!1,null,null,null);a.default=c.exports}}]);
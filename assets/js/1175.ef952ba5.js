(window.webpackJsonp=window.webpackJsonp||[]).push([[1175],{1629:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"begin-commit-rollback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#begin-commit-rollback"}},[t._v("#")]),t._v(" BEGIN, COMMIT, ROLLBACK")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN;\nINSERT INTO table_name ...\nCOMMIT;\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN [ WITH LABEL label];\nINSERT INTO table_name ...\nROLLBACK;\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("blockquote",[a("p",[t._v("label: 用于指定当前事务的标签名。")])]),t._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("事务只能对insert使用，而不能对update和delete使用，当指定标签时，可通过以下命令检查事务的运行状态： "),a("code",[t._v("SHOW TRANSACTION WHERE LABEL = 'label'")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v("开启一个事务，不指定标签，执行insert后提交。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")])])]),a("p",[t._v("所有在"),a("code",[t._v("begin")]),t._v("和"),a("code",[t._v("commit")]),t._v("之间的数据会被插入到test表中。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("开启一个事务，不指定标签，执行insert后，回滚。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nROLLBACK:\n")])])]),a("p",[t._v("所有在"),a("code",[t._v("begin")]),t._v("和"),a("code",[t._v("commit")]),t._v("之间的数据会取消，没有任何数据插入到test表中。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("开启一个事务，指定标签为test_label1，执行insert后提交。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("BEGIN WITH LABEL test_label1\nINSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\nCOMMIT:\n")])])]),a("p",[t._v("所有在"),a("code",[t._v("begin")]),t._v("和"),a("code",[t._v("commit")]),t._v("之间的数据会被插入到test表中。\n标签"),a("code",[t._v("test_label1")]),t._v("用于标记该事务，可以通过以下命令来检查事务的状态："),a("code",[t._v("SHOW TRANSACTION WHERE LABEL = 'test_label1'")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("BEGIN, COMMIT, ROLLBACK")])])}),[],!1,null,null,null);e.default=r.exports}}]);
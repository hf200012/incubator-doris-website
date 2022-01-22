(window.webpackJsonp=window.webpackJsonp||[]).push([[1061],{1515:function(t,e,a){"use strict";a.r(e);var r=a(56),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"not-regexp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-regexp"}},[t._v("#")]),t._v(" not regexp")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" syntax")]),t._v(" "),a("p",[a("code",[t._v("BOOLEAN not regexp(VARCHAR str, VARCHAR pattern)")])]),t._v(" "),a("p",[t._v("对字符串 str 进行正则匹配，匹配上的则返回 false，没匹配上则返回 true。pattern 为正则表达式。")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 查找 k1 字段中不以 'billie' 为开头的所有数据\nmysql > select k1 from test where k1 not regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| Emmy eillish       |\n+--------------------+\n\n// 查找 k1 字段中不以 'ok' 为结尾的所有数据：\nmysql > select k1 from test where k1 not regexp 'ok$';\n+------------+\n| k1         |\n+------------+\n| It's true  |\n+------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("REGEXP, NOT, NOT REGEXP")])])}),[],!1,null,null,null);e.default=s.exports}}]);
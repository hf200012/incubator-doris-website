(window.webpackJsonp=window.webpackJsonp||[]).push([[955],{1404:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"percentile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#percentile"}},[t._v("#")]),t._v(" PERCENTILE")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("PERCENTILE(expr, DOUBLE p)")])]),t._v(" "),a("p",[t._v("计算精确的百分位数，适用于小数据量。先对指定列降序排列，然后取精确的第 p 位百分数。p的值介于0到1之间")]),t._v(" "),a("p",[t._v("参数说明\nexpr：必填。值为整数（最大为bigint） 类型的列。\np：必填。需要精确的百分位数。取值为 [0.0,1.0]。")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |        percentile(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("PERCENTILE")])])}),[],!1,null,null,null);e.default=r.exports}}]);
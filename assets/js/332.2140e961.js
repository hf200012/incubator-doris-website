(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{785:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" COUNT")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("COUNT([DISTINCT] expr)")])]),t._v(" "),a("p",[t._v("Number of rows used to return the required rows")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL > select count(*) from log_statis group by datetime;\n+----------+\n| count(*) |\n+----------+\n| 28515903 |\n+----------+\n\nMySQL > select count(datetime) from log_statis group by datetime;\n+-------------------+\n| count(`datetime`) |\n+-------------------+\n|         28521682  |\n+-------------------+\n\nMySQL > select count(distinct datetime) from log_statis group by datetime;\n+-------------------------------+\n| count(DISTINCT `datetime`)    |\n+-------------------------------+\n|                       71045   |\n+-------------------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("COUNT")])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{1445:function(t,e,s){"use strict";s.r(e);var n=s(56),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"from-unixtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-unixtime"}},[t._v("#")]),t._v(" from_unixtime")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("DATETIME FROM_UNIXTIME(INT unix_timestamp[, VARCHAR string_format])")])]),t._v(" "),s("p",[t._v("将 unix 时间戳转化为对应的 time 格式，返回的格式由 "),s("code",[t._v("string_format")]),t._v(" 指定")]),t._v(" "),s("p",[t._v("默认为 yyyy-MM-dd HH:mm:ss ,也支持date_format中的format格式")]),t._v(" "),s("p",[t._v("传入的是整形，返回的是字符串类型")]),t._v(" "),s("p",[t._v("目前 "),s("code",[t._v("string_format")]),t._v(" 支持格式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("%Y：年。例：2014，1900\n%m：月。例：12，09\n%d：日。例：11，01\n%H：时。例：23，01，12\n%i：分。例：05，11\n%s：秒。例：59，01\n")])])]),s("p",[t._v("其余 "),s("code",[t._v("string_format")]),t._v(" 格式是非法的，返回NULL")]),t._v(" "),s("p",[t._v("如果给定的时间戳小于 0 或大于 253402271999，则返回 NULL。即时间戳范围是：")]),t._v(" "),s("p",[t._v("1970-01-01 00:00:00 ~ 9999-12-31 23:59:59")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------+\n| from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d') |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("FROM_UNIXTIME,FROM,UNIXTIME\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
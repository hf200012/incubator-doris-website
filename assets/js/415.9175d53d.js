(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{869:function(e,a,t){"use strict";t.r(a);var s=t(56),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"weekday"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weekday"}},[e._v("#")]),e._v(" weekday")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[t("code",[e._v("INT WEEKDAY (DATETIME date)")])]),e._v(" "),t("p",[e._v("The WEEKDAY function returns the index value of the working day of the date, that is, 0 on Monday, 1 on Tuesday, and 6 on Sunday.")]),e._v(" "),t("p",[e._v("The parameter is Date or Datetime type")]),e._v(" "),t("p",[e._v("Notice the difference between WEEKDAY and DAYOFWEEK:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("          +-----+-----+-----+-----+-----+-----+-----+\n          | Sun | Mon | Tues| Wed | Thur| Fri | Sat |\n          +-----+-----+-----+-----+-----+-----+-----+\n  weekday |  6  |  0  |  1  |  2  |  3  |  4  |  5  |\n          +-----+-----+-----+-----+-----+-----+-----+\ndayofweek |  1  |  2  |  3  |  4  |  5  |  6  |  7  |\n          +-----+-----+-----+-----+-----+-----+-----+\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> select weekday('2019-06-25');\n+--------------------------------+\n| weekday('2019-06-25 00:00:00') |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n\nmysql> select weekday(cast(20190625 as date)); \n+---------------------------------+\n| weekday(CAST(20190625 AS DATE)) |\n+---------------------------------+\n|                               1 |\n+---------------------------------+\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("WEEKDAY")])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{856:function(e,_,t){"use strict";t.r(_);var o=t(56),n=Object(o.a)({},(function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"time-round"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-round"}},[e._v("#")]),e._v(" time_round")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[t("code",[e._v("DATETIME TIME_ROUND(DATETIME expr)")])]),e._v(" "),t("p",[t("code",[e._v("DATETIME TIME_ROUND(DATETIME expr, INT period)")])]),e._v(" "),t("p",[t("code",[e._v("DATETIME TIME_ROUND(DATETIME expr, DATETIME origin)")])]),e._v(" "),t("p",[t("code",[e._v("DATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)")])]),e._v(" "),t("p",[e._v("The function name "),t("code",[e._v("TIME_ROUND")]),e._v(" consists of two parts, Each part consists of the following optional values.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("TIME")]),e._v(": "),t("code",[e._v("SECOND")]),e._v(", "),t("code",[e._v("MINUTE")]),e._v(", "),t("code",[e._v("HOUR")]),e._v(", "),t("code",[e._v("DAY")]),e._v(", "),t("code",[e._v("WEEK")]),e._v(", "),t("code",[e._v("MONTH")]),e._v(", "),t("code",[e._v("YEAR")])]),e._v(" "),t("li",[t("code",[e._v("ROUND")]),e._v(": "),t("code",[e._v("FLOOR")]),e._v(", "),t("code",[e._v("CEIL")])])]),e._v(" "),t("p",[e._v("Returns the upper/lower bound of "),t("code",[e._v("expr")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("period")]),e._v(" specifies how many "),t("code",[e._v("TIME")]),e._v(" units, the default is "),t("code",[e._v("1")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("origin")]),e._v(" specifies the start time of the period, the default is "),t("code",[e._v("1970-01-01T00:00:00")]),e._v(", the start time of "),t("code",[e._v("WEEK")]),e._v(" is Sunday, which is "),t("code",[e._v("1970-01-04T00:00:00")]),e._v(". Could be larger than "),t("code",[e._v("expr")]),e._v(".")]),e._v(" "),t("li",[e._v("Please try to choose common "),t("code",[e._v("period")]),e._v(", such as 3 "),t("code",[e._v("MONTH")]),e._v(", 90 "),t("code",[e._v("MINUTE")]),e._v(". If you set a uncommon "),t("code",[e._v("period")]),e._v(", please also specify "),t("code",[e._v("origin")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("TIME_ROUND")])])}),[],!1,null,null,null);_.default=n.exports}}]);
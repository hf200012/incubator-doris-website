(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{798:function(e,t,a){"use strict";a.r(t);var r=a(56),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"topn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topn"}},[e._v("#")]),e._v(" TOPN")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[a("code",[e._v("topn(expr, INT top_num[, INT space_expand_rate])")])]),e._v(" "),a("p",[e._v("The topn function uses the Space-Saving algorithm to calculate the top_num frequent items in expr, and the result is the\nfrequent items and their occurrence times, which is an approximation")]),e._v(" "),a("p",[e._v("The space_expand_rate parameter is optional and is used to set the number of counters used in the Space-Saving algorithm")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("counter numbers = top_num * space_expand_rate\n")])])]),a("p",[e._v("The higher value of space_expand_rate, the more accurate result will be. The default value is 50")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MySQL [test]> select topn(keyword,10) from keyword_table where date>= '2020-06-01' and date <= '2020-06-19' ;\n+------------------------------------------------------------------------------------------------------------+\n| topn(`keyword`, 10)                                                                                        |\n+------------------------------------------------------------------------------------------------------------+\n| a:157, b:138, c:133, d:133, e:131, f:127, g:124, h:122, i:117, k:117                                       |\n+------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> select date,topn(keyword,10,100) from keyword_table where date>= '2020-06-17' and date <= '2020-06-19' group by date;\n+------------+-----------------------------------------------------------------------------------------------+\n| date       | topn(`keyword`, 10, 100)                                                                      |\n+------------+-----------------------------------------------------------------------------------------------+\n| 2020-06-19 | a:11, b:8, c:8, d:7, e:7, f:7, g:7, h:7, i:7, j:7                                             |\n| 2020-06-18 | a:10, b:8, c:7, f:7, g:7, i:7, k:7, l:7, m:6, d:6                                             |\n| 2020-06-17 | a:9, b:8, c:8, j:8, d:7, e:7, f:7, h:7, i:7, k:7                                              |\n+------------+-----------------------------------------------------------------------------------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("TOPN")])])}),[],!1,null,null,null);t.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{938:function(e,t,a){"use strict";a.r(t);var s=a(56),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"explode-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explode-split"}},[e._v("#")]),e._v(" explode_split")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Table functions must be used in conjunction with Lateral View.")]),e._v(" "),a("p",[e._v("Split a string into multiple substrings according to the specified delimiter.")]),e._v(" "),a("p",[e._v("grammar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explode_split(str, delimiter)\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("Original table data:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select * from example1 order by k1;\n+------+---------+\n| k1   | k2      |\n+------+---------+\n|    1 |         |\n|    2 | NULL    |\n|    3 | ,       |\n|    4 | 1       |\n|    5 | 1,2,3   |\n|    6 | a, b, c |\n+------+---------+\n")])])]),a("p",[e._v("Lateral View:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 2 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    2 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 3 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    3 |      |\n|    3 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 4 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    4 | 1    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 5 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    5 | 1    |\n|    5 | 2    |\n|    5 | 3    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 6 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    6 |  b   |\n|    6 |  c   |\n|    6 | a    |\n+------+------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("explode_split")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);
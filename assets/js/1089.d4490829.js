(window.webpackJsonp=window.webpackJsonp||[]).push([[1089],{1543:function(e,n,a){"use strict";a.r(n);var t=a(56),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"explode-bitmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explode-bitmap"}},[e._v("#")]),e._v(" explode_bitmap")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("表函数，需配合 Lateral View 使用。")]),e._v(" "),a("p",[e._v("展开一个bitmap类型。")]),e._v(" "),a("p",[e._v("语法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("explode_bitmap(bitmap)\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("原表数据：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> select k1 from example1 order by k1;\n+------+\n| k1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n|    5 |\n|    6 |\n+------+\n")])])]),a("p",[e._v("Lateral View:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('mysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_empty()) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    4 | NULL |\n|    5 | NULL |\n|    6 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1")) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    2 |    1 |\n|    3 |    1 |\n|    4 |    1 |\n|    5 |    1 |\n|    6 |    1 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,2")) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    2 |    1 |\n|    2 |    2 |\n|    3 |    1 |\n|    3 |    2 |\n|    4 |    1 |\n|    4 |    2 |\n|    5 |    1 |\n|    5 |    2 |\n|    6 |    1 |\n|    6 |    2 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 | 1000 |\n|    2 |    1 |\n|    2 | 1000 |\n|    3 |    1 |\n|    3 | 1000 |\n|    4 |    1 |\n|    4 | 1000 |\n|    5 |    1 |\n|    5 | 1000 |\n|    6 |    1 |\n|    6 | 1000 |\n+------+------+\n\nmysql> select k1, e1, e2 from example1\nlateral view explode_bitmap(bitmap_from_string("1,1000")) tmp1 as e1\nlateral view explode_split("a,b", ",") tmp2 as e2 order by k1, e1, e2;\n+------+------+------+\n| k1   | e1   | e2   |\n+------+------+------+\n|    1 |    1 | a    |\n|    1 |    1 | b    |\n|    1 | 1000 | a    |\n|    1 | 1000 | b    |\n|    2 |    1 | a    |\n|    2 |    1 | b    |\n|    2 | 1000 | a    |\n|    2 | 1000 | b    |\n|    3 |    1 | a    |\n|    3 |    1 | b    |\n|    3 | 1000 | a    |\n|    3 | 1000 | b    |\n|    4 |    1 | a    |\n|    4 |    1 | b    |\n|    4 | 1000 | a    |\n|    4 | 1000 | b    |\n|    5 |    1 | a    |\n|    5 |    1 | b    |\n|    5 | 1000 | a    |\n|    5 | 1000 | b    |\n|    6 |    1 | a    |\n|    6 |    1 | b    |\n|    6 | 1000 | a    |\n|    6 | 1000 | b    |\n+------+------+------+\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("explode_bitmap")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{666:function(t,n,a){"use strict";a.r(n);var i=a(43),e=Object(i.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("#BITMAP")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("TO_BITMAP(expr)")]),t._v(" : 将TINYINT,SMALLINT和INT类型的列转为Bitmap")]),t._v(" "),a("p",[a("code",[t._v("BITMAP_UNION(expr)")]),t._v(" : 计算两个Bitmap的并集，返回值是序列化后的Bitmap值")]),t._v(" "),a("p",[a("code",[t._v("BITMAP_COUNT(expr)")]),t._v(" : 计算Bitmap中不同值的个数")]),t._v(" "),a("p",[a("code",[t._v("BITMAP_UNION_INT(expr)")]),t._v(" : 计算TINYINT,SMALLINT和INT类型的列中不同值的个数，返回值和\nCOUNT(DISTINCT expr)相同")]),t._v(" "),a("p",[t._v("注意：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. TO_BITMAP 函数输入的类型必须是TINYINT,SMALLINT,INT\n2. BITMAP_UNION函数的参数目前仅支持： \n\t- 聚合模型中聚合类型为BITMAP_UNION的列\n\t- TO_BITMAP 函数\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE TABLE `bitmap_udaf` (\n  `id` int(11) NULL COMMENT "",\n  `id2` int(11)\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10;\n\n\nmysql> select bitmap_count(bitmap_union(to_bitmap(id2))) from bitmap_udaf;\n+----------------------------------------------+\n| bitmap_count(bitmap_union(to_bitmap(`id2`))) |\n+----------------------------------------------+\n|                                            6 |\n+----------------------------------------------+\n\nmysql> select bitmap_union_int (id2) from bitmap_udaf;\n+-------------------------+\n| bitmap_union_int(`id2`) |\n+-------------------------+\n|                       6 |\n+-------------------------+\n\n\n\nCREATE TABLE `bitmap_test` (\n  `id` int(11) NULL COMMENT "",\n  `id2` varchar(0) bitmap_union NULL  // 注意： bitmap_union的varchar长度需要指定为0\n) ENGINE=OLAP\nAGGREGATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10;\n\n\nmysql> select bitmap_count(bitmap_union(id2)) from bitmap_test;\n+-----------------------------------+\n| bitmap_count(bitmap_union(`id2`)) |\n+-----------------------------------+\n|                                 8 |\n+-----------------------------------+\n\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("BITMAP,BITMAP_COUNT,BITMAP_UNION,BITMAP_UNION_INT,TO_BITMAP")])])}),[],!1,null,null,null);n.default=e.exports}}]);
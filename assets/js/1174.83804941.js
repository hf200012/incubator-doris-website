(window.webpackJsonp=window.webpackJsonp||[]).push([[1174],{1628:function(e,a,t){"use strict";t.r(a);var s=t(56),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"drop-materialized-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-materialized-view"}},[e._v("#")]),e._v(" DROP MATERIALIZED VIEW")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("该语句用于删除物化视图。同步语法\n")])])]),t("p",[e._v("语法:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```\nDROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name\n```\n")])])]),t("ol",[t("li",[t("p",[e._v("IF EXISTS\n如果物化视图不存在，不要抛出错误。如果不声明此关键字，物化视图不存在则报错。")])]),e._v(" "),t("li",[t("p",[e._v("mv_name\n待删除的物化视图的名称。必填项。")])]),e._v(" "),t("li",[t("p",[e._v("table_name\n待删除的物化视图所属的表名。必填项。")])])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v("表结构为")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> desc all_type_table all;\n+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n|                |       |          |      |       |         |       |\n| k1_sumk2       | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | SUM   |\n+----------------+-------+----------+------+-------+---------+-------+\n")])])]),t("ol",[t("li",[t("p",[e._v("删除表 all_type_table 的名为 k1_sumk2 的物化视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop materialized view k1_sumk2 on all_type_table;\n")])])]),t("p",[e._v("物化视图被删除后的表结构")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+----------------+-------+----------+------+-------+---------+-------+\n")])])])])]),e._v(" "),t("p",[e._v("| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n+----------------+-------+----------+------+-------+---------+-------+\n```")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("删除表 all_type_table 中一个不存在的物化视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n")])])]),t("p",[e._v("删除请求直接报错")])]),e._v(" "),t("li",[t("p",[e._v("删除表 all_type_table 中的物化视图 k1_k2，不存在不报错。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop materialized view if exists k1_k2 on all_type_table;\n")])])])])]),e._v(" "),t("p",[e._v("Query OK, 0 rows affected (0.00 sec)\n```")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("存在则删除，不存在则不报错。\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("DROP, MATERIALIZED, VIEW")])])}),[],!1,null,null,null);a.default=l.exports}}]);
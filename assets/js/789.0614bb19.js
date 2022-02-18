(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{1242:function(t,s,e){"use strict";e.r(s);var a=e(56),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iceberg-external-table-of-doris"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iceberg-external-table-of-doris"}},[t._v("#")]),t._v(" Iceberg External Table of Doris")]),t._v(" "),e("p",[t._v("Iceberg External Table of Doris 提供了 Doris 直接访问 Iceberg 外部表的能力，外部表省去了繁琐的数据导入工作，并借助 Doris 本身的 OLAP 的能力来解决 Iceberg 表的数据分析问题：")]),t._v(" "),e("ol",[e("li",[t._v("支持 Iceberg 数据源接入Doris")]),t._v(" "),e("li",[t._v("支持 Doris 与 Iceberg 数据源中的表联合查询，进行更加复杂的分析操作")])]),t._v(" "),e("p",[t._v("本文档主要介绍该功能的使用方式和注意事项等。")]),t._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),e("h3",{attrs:{id:"doris-相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#doris-相关"}},[t._v("#")]),t._v(" Doris 相关")]),t._v(" "),e("ul",[e("li",[t._v("FE：Frontend，Doris 的前端节点,负责元数据管理和请求接入")]),t._v(" "),e("li",[t._v("BE：Backend，Doris 的后端节点,负责查询执行和数据存储")])]),t._v(" "),e("h2",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),e("h3",{attrs:{id:"doris-中创建-iceberg-的外表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#doris-中创建-iceberg-的外表"}},[t._v("#")]),t._v(" Doris 中创建 Iceberg 的外表")]),t._v(" "),e("p",[t._v("可以通过以下两种方式在 Doris 中创建 Iceberg 外表。建外表时无需声明表的列定义，Doris 可以根据 Iceberg 中表的列定义自动转换。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建一个单独的外表，用于挂载 Iceberg 表。"),e("br"),t._v("\n具体相关语法，可以通过 "),e("code",[t._v("HELP CREATE TABLE")]),t._v(" 查看。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 语法")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icberg_table_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 例子：挂载 Iceberg 中 iceberg_db 下的 iceberg_table ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_iceberg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\nPROPERTIES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_table"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("创建一个 Iceberg 数据库，用于挂载远端对应 Iceberg 数据库，同时挂载该 database 下的所有 table。"),e("br"),t._v("\n具体相关语法，可以通过 "),e("code",[t._v("HELP CREATE DATABASE")]),t._v(" 查看。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 语法")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" db_name \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 例子：挂载 Iceberg 中的 iceberg_db，同时挂载该 db 下的所有 table")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("iceberg_test_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\nPROPERTIES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("iceberg_test_db")]),t._v(" 中的建表进度可以通过 "),e("code",[t._v("HELP SHOW TABLE CREATION")]),t._v(" 查看。")])])]),t._v(" "),e("p",[t._v("也可以根据自己的需求明确指定列定义来创建 Iceberg 外表。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创一个 Iceberg 外表")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 语法")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    col_name col_type "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icberg_table_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 例子：挂载 Iceberg 中 iceberg_db 下的 iceberg_table ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_iceberg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id number"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token identifier"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user name"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\nPROPERTIES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_table"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("h4",{attrs:{id:"参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明：")]),t._v(" "),e("ul",[e("li",[t._v("外表列\n"),e("ul",[e("li",[t._v("列名要于 Iceberg 表一一对应")]),t._v(" "),e("li",[t._v("列的顺序需要与 Iceberg 表一致")])])]),t._v(" "),e("li",[t._v("ENGINE 需要指定为 ICEBERG")]),t._v(" "),e("li",[t._v("PROPERTIES 属性：\n"),e("ul",[e("li",[e("code",[t._v("iceberg.hive.metastore.uris")]),t._v("：Hive Metastore 服务地址")]),t._v(" "),e("li",[e("code",[t._v("iceberg.database")]),t._v("：挂载 Iceberg 对应的数据库名")]),t._v(" "),e("li",[e("code",[t._v("iceberg.table")]),t._v("：挂载 Iceberg 对应的表名，挂载 Iceberg database 时无需指定。")]),t._v(" "),e("li",[e("code",[t._v("iceberg.catalog.type")]),t._v("：Iceberg 中使用的 catalog 方式，默认为 "),e("code",[t._v("HIVE_CATALOG")]),t._v("，当前仅支持该方式，后续会支持更多的 Iceberg catalog 接入方式。")])])])]),t._v(" "),e("h3",{attrs:{id:"展示表结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示表结构"}},[t._v("#")]),t._v(" 展示表结构")]),t._v(" "),e("p",[t._v("展示表结构可以通过 "),e("code",[t._v("HELP SHOW CREATE TABLE")]),t._v(" 查看。")]),t._v(" "),e("h3",{attrs:{id:"同步挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步挂载"}},[t._v("#")]),t._v(" 同步挂载")]),t._v(" "),e("p",[t._v("当 Iceberg 表 Schema 发生变更时，可以通过 "),e("code",[t._v("REFRESH")]),t._v(" 命令手动同步，该命令会将 Doris 中的 Iceberg 外表删除重建，具体帮助可以通过 "),e("code",[t._v("HELP REFRESH")]),t._v(" 查看。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 同步 Iceberg 表")]),t._v("\nREFRESH "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" t_iceberg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 同步 Iceberg 数据库")]),t._v("\nREFRESH "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" iceberg_test_db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"类型匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型匹配"}},[t._v("#")]),t._v(" 类型匹配")]),t._v(" "),e("p",[t._v("支持的 Iceberg 列类型与 Doris 对应关系如下表：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Iceberg")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("INTEGER")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("LONG")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Timestamp 转成 Datetime 会损失精度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("UUID")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用 VARCHAR 来代替")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("TIME")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("FIXED")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BINARY")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("STRUCT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("LIST")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("MAP")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")])])])]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("ul",[e("li",[t._v("Iceberg 表 Schema 变更"),e("strong",[t._v("不会自动同步")]),t._v("，需要在 Doris 中通过 "),e("code",[t._v("REFRESH")]),t._v(" 命令同步 Iceberg 外表或数据库。")]),t._v(" "),e("li",[t._v("当前默认支持的 Iceberg 版本为 0.12.0，未在其他版本进行测试。后续后支持更多版本。")])]),t._v(" "),e("h3",{attrs:{id:"查询用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询用法"}},[t._v("#")]),t._v(" 查询用法")]),t._v(" "),e("p",[t._v("完成在 Doris 中建立 Iceberg 外表后，除了无法使用 Doris 中的数据模型(rollup、预聚合、物化视图等)外，与普通的 Doris OLAP 表并无区别")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_iceberg "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" k1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" k3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'term'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" k4 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%doris'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"相关系统配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关系统配置"}},[t._v("#")]),t._v(" 相关系统配置")]),t._v(" "),e("h3",{attrs:{id:"fe配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fe配置"}},[t._v("#")]),t._v(" FE配置")]),t._v(" "),e("p",[t._v("下面几个配置属于 Iceberg 外表系统级别的配置，可以通过修改 "),e("code",[t._v("fe.conf")]),t._v(" 来配置，也可以通过 "),e("code",[t._v("ADMIN SET CONFIG")]),t._v(" 来配置。")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("iceberg_table_creation_strict_mode")])]),t._v(" "),e("p",[t._v("创建 Iceberg 表默认开启 strict mode。"),e("br"),t._v("\nstrict mode 是指对 Iceberg 表的列类型进行严格过滤，如果有 Doris 目前不支持的数据类型，则创建外表失败。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("iceberg_table_creation_interval_second")])]),t._v(" "),e("p",[t._v("自动创建 Iceberg 表的后台任务执行间隔，默认为 10s。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("max_iceberg_table_creation_record_size")])]),t._v(" "),e("p",[t._v("Iceberg 表创建记录保留的最大值，默认为 2000. 仅针对创建 Iceberg 数据库记录。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
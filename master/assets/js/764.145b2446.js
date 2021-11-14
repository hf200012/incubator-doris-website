(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{1207:function(t,s,a){"use strict";a.r(s);var e=a(52),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hive-external-table-of-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hive-external-table-of-doris"}},[t._v("#")]),t._v(" Hive External Table of Doris")]),t._v(" "),a("p",[t._v("Hive External Table of Doris 提供了 Doris 直接访问 Hive 外部表的能力，外部表省去了繁琐的数据导入工作，并借助 Doris 本身的 OLAP 的能力来解决 Hive 表的数据分析问题：")]),t._v(" "),a("ol",[a("li",[t._v("支持 Hive 数据源接入Doris")]),t._v(" "),a("li",[t._v("支持 Doris 与 Hive 数据源中的表联合查询，进行更加复杂的分析操作")])]),t._v(" "),a("p",[t._v("本文档主要介绍该功能的使用方式和注意事项等。")]),t._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("h3",{attrs:{id:"doris-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-相关"}},[t._v("#")]),t._v(" Doris 相关")]),t._v(" "),a("ul",[a("li",[t._v("FE：Frontend，Doris 的前端节点,负责元数据管理和请求接入")]),t._v(" "),a("li",[t._v("BE：Backend，Doris 的后端节点,负责查询执行和数据存储")])]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("h3",{attrs:{id:"doris-中创建-hive-的外表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-中创建-hive-的外表"}},[t._v("#")]),t._v(" Doris 中创建 Hive 的外表")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  col_name col_type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HIVE\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'property_name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'property_value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 例子：创建 Hive 集群中 hive_db 下的 hive_table 表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_hive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HIVE\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE"')]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hive.metastore.uris'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'thrift://192.168.0.1:9083'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'database'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hive_db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hive_table'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明：")]),t._v(" "),a("ul",[a("li",[t._v("外表列\n"),a("ul",[a("li",[t._v("列名要于 Hive 表一一对应")]),t._v(" "),a("li",[t._v("列的顺序需要与 Hive 表一致")]),t._v(" "),a("li",[t._v("必须包含 Hive 表中的全部列")]),t._v(" "),a("li",[t._v("Hive 表分区列无需指定，与普通列一样定义即可。")])])]),t._v(" "),a("li",[t._v("ENGINE 需要指定为 HIVE")]),t._v(" "),a("li",[t._v("PROPERTIES 属性：\n"),a("ul",[a("li",[a("code",[t._v("hive.metastore.uris")]),t._v("：Hive Metastore 服务地址")]),t._v(" "),a("li",[a("code",[t._v("database")]),t._v("：挂载 Hive 对应的数据库名")]),t._v(" "),a("li",[a("code",[t._v("table")]),t._v("：挂载 Hive 对应的表名")])])])]),t._v(" "),a("h2",{attrs:{id:"类型匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型匹配"}},[t._v("#")]),t._v(" 类型匹配")]),t._v(" "),a("p",[t._v("支持的 Hive 列类型与 Doris 对应关系如下表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Hive")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前仅支持UTF8编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TINYINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("SMALLINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Timestamp 转成 Datetime 会损失精度")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ul",[a("li",[t._v("Hive 表 Schema 变更"),a("strong",[t._v("不会自动同步")]),t._v("，需要在 Doris 中重建 Hive 外表。")]),t._v(" "),a("li",[t._v("当前 Hive 的存储格式仅支持 Text，Parquet 和 ORC 类型")]),t._v(" "),a("li",[t._v("当前默认支持的 Hive 版本为 2.3.7，未在其他版本进行测试。后续后支持更多版本。")])]),t._v(" "),a("h3",{attrs:{id:"查询用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询用法"}},[t._v("#")]),t._v(" 查询用法")]),t._v(" "),a("p",[t._v("完成在 Doris 中建立 Hive 外表后，除了无法使用 Doris 中的数据模型(rollup、预聚合、物化视图等)外，与普通的 Doris OLAP 表并无区别")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_hive "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" k3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'term'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" k4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%doris'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
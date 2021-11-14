(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{467:function(s,t,a){"use strict";a.r(t);var e=a(52),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql-block-rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-block-rule"}},[s._v("#")]),s._v(" SQL Block Rule")]),s._v(" "),a("p",[s._v("This function is only used to limit the query statement, and does not limit the execution of the explain statement.\nSupport SQL block rule by user level:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("by regex way to deny specify SQL")])]),s._v(" "),a("li",[a("p",[s._v("by setting partition_num, tablet_num, cardinality, check whether a sql reaches one of the limitations")]),s._v(" "),a("ul",[a("li",[s._v("partition_num, tablet_num, cardinality could be set together, and once reach one of them, the sql will be blocked.")])])])]),s._v(" "),a("h2",{attrs:{id:"rule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule"}},[s._v("#")]),s._v(" Rule")]),s._v(" "),a("p",[s._v("SQL block rule CRUD")]),s._v(" "),a("ul",[a("li",[s._v("create SQL block rule\n"),a("ul",[a("li",[s._v('sql：Regex pattern，Special characters need to be translated, "NULL" by default')]),s._v(" "),a("li",[s._v('sqlHash: Sql hash value, Used to match exactly, We print it in fe.audit.log, This parameter is the only choice between sql and sql, "NULL" by default')]),s._v(" "),a("li",[s._v("partition_num: Max number of partitions will be scanned by a scan node, 0L by default")]),s._v(" "),a("li",[s._v("tablet_num: Max number of tablets will be scanned by a scan node, 0L by default")]),s._v(" "),a("li",[s._v("cardinality: An inaccurate number of scan rows of a scan node, 0L by default")]),s._v(" "),a("li",[s._v("global: Whether global(all users)is in effect, false by default")]),s._v(" "),a("li",[s._v("enable：Whether to enable block rule，true by default")])])])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SQL_BLOCK_RULE test_rule \nPROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from order_analysis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"global"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqlHash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("When we execute the sql that we defined in the rule just now, an exception error will be returned. An example is as follows:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_analysis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1064")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": errCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" detailMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("match")]),s._v(" regex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v(" block "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rule")]),s._v(": order_analysis_rule\n")])])]),a("ul",[a("li",[s._v("create test_rule2, limits the maximum number of scanning partitions to 30 and the maximum scanning cardinality to 10 billion rows. As shown in the following example:")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SQL_BLOCK_RULE test_rule2 PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"partition_num"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cardinality"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"global"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ul",[a("li",[s._v("show configured SQL block rules, or show all rules if you do not specify a rule name")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" SQL_BLOCK_RULE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" RULE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("ul",[a("li",[s._v("alter SQL block rule，Allows changes sql/sqlHash/global/enable/partition_num/tablet_num/cardinality anyone\n"),a("ul",[a("li",[s._v("sql and sqlHash cannot be set both. It means if sql or sqlHash is set in a rule, another property will never be allowed to be altered")]),s._v(" "),a("li",[s._v("sql/sqlHash and partition_num/tablet_num/cardinality cannot be set together. For example, partition_num is set in a rule, then sql or sqlHash will never be allowed to be altered.")])])])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" SQL_BLOCK_RULE test_rule PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select \\\\* from test_table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n')])])]),a("ul",[a("li",[s._v("drop SQL block rule，Support multiple rules, separated by "),a("code",[s._v(",")])])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" SQL_BLOCK_RULE test_rule1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("test_rule2\n")])])]),a("h2",{attrs:{id:"user-bind-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-bind-rules"}},[s._v("#")]),s._v(" User bind rules")]),s._v(" "),a("p",[s._v("If global=false is configured, the rules binding for the specified user needs to be configured, with multiple rules separated by ', '")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PROPERTY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sql_block_rules'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_rule1,test_rule2'")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
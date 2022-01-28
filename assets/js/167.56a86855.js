(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{618:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iceberg-external-table-of-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iceberg-external-table-of-doris"}},[t._v("#")]),t._v(" Iceberg External Table of Doris")]),t._v(" "),a("p",[t._v("Iceberg External Table of Doris provides Doris with the ability to access Iceberg external tables directly, eliminating the need for cumbersome data import and leveraging Doris' own OLAP capabilities to solve Iceberg table data analysis problems.")]),t._v(" "),a("ol",[a("li",[t._v("support Iceberg data sources to access Doris")]),t._v(" "),a("li",[t._v("Support joint query between Doris and Iceberg data source tables to perform more complex analysis operations")])]),t._v(" "),a("p",[t._v("This document introduces how to use this feature and the considerations.")]),t._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),a("h3",{attrs:{id:"noun-in-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-in-doris"}},[t._v("#")]),t._v(" Noun in Doris")]),t._v(" "),a("ul",[a("li",[t._v("FE: Frontend, the front-end node of Doris, responsible for metadata management and request access")]),t._v(" "),a("li",[t._v("BE: Backend, the backend node of Doris, responsible for query execution and data storage")])]),t._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),a("h3",{attrs:{id:"create-iceberg-external-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-iceberg-external-table"}},[t._v("#")]),t._v(" Create Iceberg External Table")]),t._v(" "),a("p",[t._v("Iceberg tables can be created in Doris in two ways. You do not need to declare the column definitions of the table when creating an external table, Doris can automatically convert them based on the column definitions of the table in Iceberg.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Create a separate external table to mount the Iceberg table."),a("br"),t._v("\nThe syntax can be viewed in "),a("code",[t._v("HELP CREATE TABLE")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Syntax")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("EXTERNAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icberg_table_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: Mount iceberg_table under iceberg_db in Iceberg ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_iceberg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ICEBERG\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.table"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create an Iceberg database to mount the corresponding Iceberg database on the remote side, and mount all the tables under the database."),a("br"),t._v("\nYou can check the syntax with "),a("code",[t._v("HELP CREATE DATABASE")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Syntax")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" db_name \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: mount the iceberg_db in Iceberg and mount all tables under that db")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("iceberg_test_db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.database"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg_db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.hive.metastore.uris"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thrift://192.168.0.1:9083"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iceberg.catalog.type"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HIVE_CATALOG"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The progress of the table build in "),a("code",[t._v("iceberg_test_db")]),t._v(" can be viewed by "),a("code",[t._v("HELP SHOW TABLE CREATION")]),t._v(".")])])]),t._v(" "),a("h4",{attrs:{id:"parameter-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-description"}},[t._v("#")]),t._v(" Parameter Description")]),t._v(" "),a("ul",[a("li",[t._v("ENGINE needs to be specified as ICEBERG")]),t._v(" "),a("li",[t._v("PROPERTIES property.\n"),a("ul",[a("li",[a("code",[t._v("iceberg.hive.metastore.uris")]),t._v(": Hive Metastore service address")]),t._v(" "),a("li",[a("code",[t._v("iceberg.database")]),t._v(": the name of the database to which Iceberg is mounted")]),t._v(" "),a("li",[a("code",[t._v("iceberg.table")]),t._v(": the name of the table to which Iceberg is mounted, not required when mounting Iceberg database.")]),t._v(" "),a("li",[a("code",[t._v("iceberg.catalog.type")]),t._v(": the catalog method used in Iceberg, the default is "),a("code",[t._v("HIVE_CATALOG")]),t._v(", currently only this method is supported, more Iceberg catalog access methods will be supported in the future.")])])])]),t._v(" "),a("h3",{attrs:{id:"show-table-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-table-structure"}},[t._v("#")]),t._v(" Show table structure")]),t._v(" "),a("p",[t._v("Show table structure can be viewed by "),a("code",[t._v("HELP SHOW CREATE TABLE")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"data-type-matching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-type-matching"}},[t._v("#")]),t._v(" Data Type Matching")]),t._v(" "),a("p",[t._v("The supported Iceberg column types correspond to Doris in the following table.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Iceberg")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Doris")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INTEGER")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("INT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LONG")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BIGINT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Timestamp to Datetime with loss of precision")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("STRING")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UUID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Use VARCHAR instead")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DECIMAL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("TIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FIXED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BINARY")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("STRUCT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("LIST")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MAP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not supported")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")])]),t._v(" "),a("ul",[a("li",[t._v("Iceberg table Schema changes "),a("strong",[t._v("are not automatically synchronized")]),t._v(" and require rebuilding the Iceberg external tables or database in Doris.")]),t._v(" "),a("li",[t._v("The current default supported version of Iceberg is 0.12.0 and has not been tested in other versions. More versions will be supported in the future.")])]),t._v(" "),a("h3",{attrs:{id:"query-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-usage"}},[t._v("#")]),t._v(" Query Usage")]),t._v(" "),a("p",[t._v("Once you have finished building the Iceberg external table in Doris, it is no different from a normal Doris OLAP table except that you cannot use the data models in Doris (rollup, preaggregation, materialized views, etc.)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_iceberg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" k1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" k3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'term'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" k4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%doris'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
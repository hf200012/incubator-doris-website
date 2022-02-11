(window.webpackJsonp=window.webpackJsonp||[]).push([[1153],{1617:function(e,a,t){"use strict";t.r(a);var r=t(56),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-database"}},[e._v("#")]),e._v(" CREATE DATABASE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('该语句用于新建数据库（database）\n语法：\n    CREATE DATABASE [IF NOT EXISTS] db_name\n    [PROPERTIES ("key"="value", ...)];\n')])])]),t("ol",[t("li",[e._v("PROPERTIES\n该数据库的附加信息，可以缺省。\n1）如果创建 Iceberg 数据库，则需要在 properties 中提供以下信息："),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    PROPERTIES (\n        "iceberg.database" = "iceberg_db_name",\n        "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n        "iceberg.catalog.type" = "HIVE_CATALOG"\n        )\n\n')])])]),e._v("其中 "),t("code",[e._v("iceberg.database")]),e._v(" 是 Iceberg 对应的库名；"),t("br"),e._v(" "),t("code",[e._v("iceberg.hive.metastore.uris")]),e._v(" 是 hive metastore 服务地址。"),t("br"),e._v(" "),t("code",[e._v("iceberg.catalog.type")]),e._v(" 默认为 "),t("code",[e._v("HIVE_CATALOG")]),e._v("。当前仅支持 "),t("code",[e._v("HIVE_CATALOG")]),e._v("，后续会支持更多 Iceberg catalog 类型。")])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 新建数据库 db_test\n    ```\n    CREATE DATABASE db_test;\n    ```\n    \n2. 新建 Iceberg 数据库 iceberg_test\n    ```\n    CREATE DATABASE `iceberg_test`\n    PROPERTIES (\n    "iceberg.database" = "doris",\n    "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n    "iceberg.catalog.type" = "HIVE_CATALOG"\n    );\n    ```\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE,DATABASE\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
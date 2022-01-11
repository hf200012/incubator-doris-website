(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{774:function(t,a,s){"use strict";s.r(a);var e=s(55),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cast"}},[t._v("#")]),t._v(" CAST")]),t._v(" "),s("p",[t._v("##Description")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cast (input as type)\n")])])]),s("h3",{attrs:{id:"bigint-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigint-type"}},[t._v("#")]),t._v(" BIGINT type")]),t._v(" "),s("h3",{attrs:{id:"syntax-bigint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-bigint"}},[t._v("#")]),t._v(" Syntax (BIGINT)")]),t._v(" "),s("p",[s("code",[t._v("cast (input as BIGINT)")])]),t._v(" "),s("p",[t._v("Converts input to the specified type")]),t._v(" "),s("p",[t._v("Converting the current column input to BIGINT type")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("ol",[s("li",[t._v("Turn constant, or a column in a table")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Transferred raw data")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')])])]),s("ul",[s("li",[t._v("Note: In the import, because the original type is String, when the original data with floating point value is cast, the data will be converted to NULL, such as 12.0. Doris is currently not truncating raw data. *")])]),t._v(" "),s("p",[t._v("If you want to force this type of raw data cast to int. Look at the following words:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("p",[t._v("CAST")])])}),[],!1,null,null,null);a.default=r.exports}}]);
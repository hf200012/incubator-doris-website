(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{991:function(e,a,t){"use strict";t.r(a);var s=t(56),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-encryptkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-encryptkey"}},[e._v("#")]),e._v(" CREATE ENCRYPTKEY")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE ENCRYPTKEY key_name\n    AS "key_string"\n')])])]),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("key_name")]),e._v(": The name of the key to be created, which can include the name of the database. For example: "),t("code",[e._v("db1.my_key")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("key_string")]),e._v(": The string to create the key")])]),e._v(" "),t("p",[e._v("This statement creates a custom key. Executing this command requires the user to have the "),t("code",[e._v("ADMIN")]),e._v(" privileges.")]),e._v(" "),t("p",[e._v("If the database name is included in "),t("code",[e._v("key_name")]),e._v(", then this custom key will be created in the corresponding database, otherwise this function will be created in the database where the current session is located. The name of the new key cannot be the same as the key that already exists in the corresponding database, otherwise the creation will fail.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create a custom key")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE ENCRYPTKEY my_key as "ABCD123456789";\n')])])])]),e._v(" "),t("li",[t("p",[e._v("Using a custom key")]),e._v(" "),t("p",[e._v("To use a custom key, add the keyword "),t("code",[e._v("KEY")]),e._v("/"),t("code",[e._v("key")]),e._v(" before the key name, separated from "),t("code",[e._v("key_name")]),e._v(" by a space.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" Keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE,ENCRYPTKEY\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
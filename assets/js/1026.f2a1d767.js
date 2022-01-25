(window.webpackJsonp=window.webpackJsonp||[]).push([[1026],{1480:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aes-encrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aes-encrypt"}},[t._v("#")]),t._v(" AES_ENCRYPT")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("p",[t._v("Aes 加密函数")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("VARCHAR AES_ENCRYPT(str,key_str[,init_vector])")])]),t._v(" "),a("p",[t._v("返回加密后的结果")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL > select to_base64(AES_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select to_base64(AES_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(aes_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| mvZT1KJw7N0RJf27aipUpg==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.011 sec)\n")])])]),a("h1",{attrs:{id:"aes-decrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aes-decrypt"}},[t._v("#")]),t._v(" AES_DECRYPT")]),t._v(" "),a("h2",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("p",[t._v("Aes 解密函数")]),t._v(" "),a("h3",{attrs:{id:"syntax-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("VARCHAR AES_DECRYPT(str,key_str[,init_vector])")])]),t._v(" "),a("p",[t._v("返回解密后的结果")]),t._v(" "),a("h2",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MySQL > select AES_DECRYPT(FROM_BASE64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.012 sec)\n\nMySQL> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select AES_DECRYPT(FROM_BASE64('mvZT1KJw7N0RJf27aipUpg=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('mvZT1KJw7N0RJf27aipUpg=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("AES_ENCRYPT, AES_DECRYPT")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
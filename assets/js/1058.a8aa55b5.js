(window.webpackJsonp=window.webpackJsonp||[]).push([[1058],{1510:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-json-double"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-json-double"}},[t._v("#")]),t._v(" get_json_double")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("DOUBLE get_json_double(VARCHAR json_str, VARCHAR json_path)")])]),t._v(" "),s("p",[t._v('解析并获取 json 字符串内指定路径的浮点型内容。\n其中 json_path 必须以 $ 符号作为开头，使用 . 作为路径分割符。如果路径中包含 . ，则可以使用双引号包围。\n使用 [ ] 表示数组下标，从 0 开始。\npath 的内容不能包含 ", [ 和 ]。\n如果 json_string 格式不对，或 json_path 格式不对，或无法找到匹配项，则返回 NULL。')]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("ol",[s("li",[t._v('获取 key 为 "k1" 的 value')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");\n+-------------------------------------------------+\n| get_json_double(\'{"k1":1.3, "k2":"2"}\', \'$.k1\') |\n+-------------------------------------------------+\n|                                             1.3 |\n+-------------------------------------------------+\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v('获取 key 为 "my.key" 的数组中第二个元素')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------+\n| get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------+\n|                                                                       2.2 |\n+---------------------------------------------------------------------------+\n')])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("获取二级路径为 k1.key -> k2 的数组中，第一个元素")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\');\n+---------------------------------------------------------------------+\n| get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\') |\n+---------------------------------------------------------------------+\n|                                                                 1.1 |\n+---------------------------------------------------------------------+\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("p",[t._v("GET_JSON_DOUBLE,GET,JSON,DOUBLE")])])}),[],!1,null,null,null);e.default=n.exports}}]);
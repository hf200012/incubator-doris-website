(window.webpackJsonp=window.webpackJsonp||[]).push([[1044],{1497:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-json-int"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-json-int"}},[t._v("#")]),t._v(" get_json_int")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("INT get_json_int(VARCHAR json_str, VARCHAR json_path)")])]),t._v(" "),a("p",[t._v('解析并获取 json 字符串内指定路径的整型内容。\n其中 json_path 必须以 $ 符号作为开头，使用 . 作为路径分割符。如果路径中包含 . ，则可以使用双引号包围。\n使用 [ ] 表示数组下标，从 0 开始。\npath 的内容不能包含 ", [ 和 ]。\n如果 json_string 格式不对，或 json_path 格式不对，或无法找到匹配项，则返回 NULL。')]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[t._v('获取 key 为 "k1" 的 value')])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('mysql> SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");\n+--------------------------------------------+\n| get_json_int(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v('获取 key 为 "my.key" 的数组中第二个元素')])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('mysql> SELECT get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------+\n| get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------+\n|                                                                2 |\n+------------------------------------------------------------------+\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("获取二级路径为 k1.key -> k2 的数组中，第一个元素")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('mysql> SELECT get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\');\n+--------------------------------------------------------------+\n| get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\') |\n+--------------------------------------------------------------+\n|                                                            1 |\n+--------------------------------------------------------------+\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("GET_JSON_INT,GET,JSON,INT")])])}),[],!1,null,null,null);s.default=n.exports}}]);
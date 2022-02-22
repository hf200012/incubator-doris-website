(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{883:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-json-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-json-string"}},[t._v("#")]),t._v(" get_json_string")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("VARCHAR get_json_string (VARCHAR json str, VARCHAR json path)")])]),t._v(" "),s("p",[t._v('Parse and retrieve the string content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",[and].\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned.')]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("ol",[s("li",[t._v('Get the value of key as "k1"')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");\n+---------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "k2":"v2"}\', \'$.k1\') |\n+---------------------------------------------------+\n| v1                                                |\n+---------------------------------------------------+\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v('Get the second element of the array whose key is "my. key"')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------------------+\n| e2                                                                           |\n+------------------------------------------------------------------------------+\n')])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Get the first element in an array whose secondary path is k1. key - > K2")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------+\n| get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------+\n| v1                                                                    |\n+-----------------------------------------------------------------------+\n')])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v('Get all the values in the array where the key is "k1"')])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mysql> SELECT get_json_string(\'[{"k1":"v1"}, {"k2":"v2"}, {"k1":"v3"}, {"k1":"v4"}]\', \'$.k1\');\n+---------------------------------------------------------------------------------+\n| get_json_string(\'[{"k1":"v1"}, {"k2":"v2"}, {"k1":"v3"}, {"k1":"v4"}]\', \'$.k1\') |\n+---------------------------------------------------------------------------------+\n| ["v1","v3","v4"]                                                                |\n+---------------------------------------------------------------------------------+\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("p",[t._v("GET_JSON_STRING,GET,JSON,STRING")])])}),[],!1,null,null,null);e.default=n.exports}}]);
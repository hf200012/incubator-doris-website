(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{901:function(e,t,n){"use strict";n.r(t);var a=n(56),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"json-object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-object"}},[e._v("#")]),e._v(" json_object")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),n("p",[n("code",[e._v("VARCHAR json_object(VARCHAR,...)")])]),e._v(" "),n("p",[e._v("Generate a json object containing the specified Key-Value,\nan exception error is returned when Key is NULL or the number of parameters are odd.")]),e._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("MySQL> select json_object();\n+---------------+\n| json_object() |\n+---------------+\n| {}            |\n+---------------+\n\nMySQL> select json_object('time',curtime());\n+--------------------------------+\n| json_object('time', curtime()) |\n+--------------------------------+\n| {\"time\": \"10:49:18\"}           |\n+--------------------------------+\n\n\nMySQL> SELECT json_object('id', 87, 'name', 'carrot');\n+-----------------------------------------+\n| json_object('id', 87, 'name', 'carrot') |\n+-----------------------------------------+\n| {\"id\": 87, \"name\": \"carrot\"}            |\n+-----------------------------------------+\n\n\nMySQL> select json_object('username',null);\n+---------------------------------+\n| json_object('username', 'NULL') |\n+---------------------------------+\n| {\"username\": NULL}              |\n+---------------------------------+\n")])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("p",[e._v("json_object")])])}),[],!1,null,null,null);t.default=s.exports}}]);
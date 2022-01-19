(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{531:function(e,t,a){"use strict";a.r(t);var n=a(56),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"get-tablets-on-a-particular-be"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-tablets-on-a-particular-be"}},[e._v("#")]),e._v(" GET TABLETS ON A PARTICULAR BE")]),e._v(" "),a("p",[e._v("Get the tablet id and schema hash for a certain number of tablets on a particular BE node")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -X GET http://be_host:webserver_port/tablets_page?limit=XXXXX\n")])])]),a("p",[e._v('The return is the tablet id and schema hash for a certain number of tablets on the BE node. The data is returned as a rendered Web page. The number of returned tablets is determined by the parameter limit. If parameter limit does not exist, none tablet will be returned. if the value of parameter limit is "all", all the tablets on the BE node will be returned. if the value of parameter limit is non-numeric type other than "all", none tablet will be returned.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -X GET http://be_host:webserver_port/tablets_json?limit=XXXXX\n")])])]),a("p",[e._v('The return is the tablet id and schema hash for a certain number of tablets on the BE node. The returned data is organized as a Json object. The number of returned tablets is determined by the parameter limit. If parameter limit does not exist, none tablet will be returned. if the value of parameter limit is "all", all the tablets on the BE node will be returned. if the value of parameter limit is non-numeric type other than "all", none tablet will be returned.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
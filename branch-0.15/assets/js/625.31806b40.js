(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1063:function(t,a,e){"use strict";e.r(a);var l=e(55),s=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"get-tablets-on-a-particular-be"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-tablets-on-a-particular-be"}},[t._v("#")]),t._v(" GET TABLETS ON A PARTICULAR BE")]),t._v(" "),e("p",[t._v("获取特定BE节点上指定数量的tablet的tablet id和schema hash信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -X GET http://be_host:webserver_port/tablets_page?limit=XXXXX\n")])])]),e("p",[t._v('返回值就是指定BE节点上特定数量tablet的tablet id和schema hash，以渲染的Web页面形式返回。返回的tablet数量由参数limit确定，若limit不存在，则不返回tablet；若limit的值为"all"，则返回指定BE节点上所有的tablet；若limit的值为除“all”之外的其他非数值类型，则不返回tablet。')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -X GET http://be_host:webserver_port/tablets_json?limit=XXXXX\n")])])]),e("p",[t._v('返回值就是指定BE节点上特定数量tablet的tablet id和schema hash，以Json对象形式返回。返回的tablet数量由参数limit确定，若limit不存在，则不返回tablet；若limit的值为"all"，则返回指定BE节点上所有的tablet；若limit的值为除“all”之外的其他非数值类型，则不返回tablet。')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "10.38.157.107",\n        tablets: [\n            {\n                tablet_id: 11119,\n                schema_hash: 714349777\n            },\n\n                ...\n\n            {\n                tablet_id: 11063,\n                schema_hash: 714349777\n            }\n        ]\n    },\n    count: 30\n}\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{1099:function(t,e,n){"use strict";n.r(e);var a=n(56),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" CONNECTION")]),t._v(" "),n("p",[t._v("通过connection_id, 获取当前连接的query_id")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("curl -X GET http://fe_host:fe_http_port/api/connection?connection_id=123\n")])])]),n("p",[t._v("如果connection_id不存在，直接返回404 NOT FOUND错误")]),t._v(" "),n("p",[t._v("如果connection_id存在，会返回当前connection_id上一个进行的query_id")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "query_id" : 9133b7efa92a44c8-8ed4b44772ec2a0c\n}\n')])])])])}),[],!1,null,null,null);e.default=c.exports}}]);
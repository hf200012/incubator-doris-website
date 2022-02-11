(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1151:function(s,t,a){"use strict";a.r(t);var e=a(56),l=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-single-tablet-to-a-particular-disk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-single-tablet-to-a-particular-disk"}},[s._v("#")]),s._v(" MIGRATE SINGLE TABLET TO A PARTICULAR DISK")]),s._v(" "),a("p",[s._v("在BE节点上迁移单个tablet到指定磁盘")]),s._v(" "),a("p",[s._v("提交迁移任务：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=run&tablet_id=xxx&schema_hash=xxx&disk=xxx\n")])])]),a("p",[s._v("返回值就是tablet迁移任务的提交结果：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n')])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n')])])]),a("p",[s._v("查询迁移任务状态：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=status&tablet_id=xxx&schema_hash=xxx\n")])])]),a("p",[s._v("返回值就是tablet迁移任务执行状态：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    {\n        status: "Success",\n        msg: "migration task is running",\n        dest_disk: "xxxxxx"\n    }\n')])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    {\n        status: "Success",\n        msg: "migration task has finished successfully",\n        dest_disk: "xxxxxx"\n    }\n')])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n')])])])])}),[],!1,null,null,null);t.default=l.exports}}]);
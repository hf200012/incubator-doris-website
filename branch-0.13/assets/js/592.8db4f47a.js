(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1032:function(t,e,a){"use strict";a.r(e);var n=a(55),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"show-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-export"}},[t._v("#")]),t._v(" SHOW EXPORT")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('该语句用于展示指定的导出任务的执行情况\n语法：\n    SHOW EXPORT\n    [FROM db_name]\n    [\n        WHERE\n        [EXPORT_JOB_ID = your_job_id]\n        [STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit];\n    \n说明：\n    1) 如果不指定 db_name，使用当前默认db\n    2) 如果指定了 STATE，则匹配 EXPORT 状态\n    3) 可以使用 ORDER BY 对任意列组合进行排序\n    4) 如果指定了 LIMIT，则显示 limit 条匹配记录。否则全部显示\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('1. 展示默认 db 的所有导出任务\n    SHOW EXPORT;\n    \n2. 展示指定 db 的导出任务，按 StartTime 降序排序\n    SHOW EXPORT FROM example_db ORDER BY StartTime DESC;\n\n3. 展示指定 db 的导出任务，state 为 "exporting", 并按 StartTime 降序排序\n    SHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;\n\n4. 展示指定db，指定job_id的导出任务\n        SHOW EXPORT FROM example_db WHERE EXPORT_JOB_ID = job_id;\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("SHOW,EXPORT\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
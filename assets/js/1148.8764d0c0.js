(window.webpackJsonp=window.webpackJsonp||[]).push([[1148],{1602:function(e,a,s){"use strict";s.r(a);var t=s(56),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"show-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-resources"}},[e._v("#")]),e._v(" SHOW RESOURCES")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('该语句用于展示用户有使用权限的资源。普通用户仅能展示有使用权限的资源，root 或 admin 用户会展示所有的资源。\n\n语法\n\n    SHOW RESOURCES\n    [\n        WHERE \n        [NAME [ = "your_resource_name" | LIKE "name_matcher"]]\n        [RESOURCETYPE = ["SPARK"]]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit][OFFSET offset];\n    \n 说明：\n    1) 如果使用 NAME LIKE，则会匹配RESOURCES的Name包含 name_matcher的Resource\n    2) 如果使用 NAME = ，则精确匹配指定的 Name\n    3) 如果指定了RESOURCETYPE，则匹配对应的Resrouce类型\n    4) 可以使用 ORDER BY 对任意列组合进行排序\n    5) 如果指定了 LIMIT，则显示 limit 条匹配记录。否则全部显示\n    6) 如果指定了 OFFSET，则从偏移量offset开始显示查询结果。默认情况下偏移量为0。\n')])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('1. 展示当前用户拥有权限的所有Resource\n    SHOW RESOURCES;\n\n2. 展示指定 Resource ，NAME 中包含字符串 "20140102"，展示10个属性\n    SHOW RESOURCES WHERE NAME LIKE "2014_01_02" LIMIT 10;\n    \n3. 展示指定 Resource ，指定 NAME 为 "20140102" 并按 KEY 降序排序\n    SHOW RESOURCES WHERE NAME = "20140102" ORDER BY `KEY` DESC;\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("SHOW RESOURCES\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1003:function(e,s,t){"use strict";t.r(s);var a=t(56),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-resources"}},[e._v("#")]),e._v(" SHOW RESOURCES")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('This statement is used to display the resources that the user has permission to use. Ordinary users can only display the resources with permission, while root or admin users can display all the resources.\n\nGrammar\n\n    SHOW RESOURCES\n    [\n        WHERE \n        [NAME [ = "your_resource_name" | LIKE "name_matcher"]]\n        [RESOURCETYPE = ["SPARK"]]\n    ]\n    [ORDER BY ...]\n    [LIMIT limit][OFFSET offset];\n    \nExplain:\n    1) If use NAME LIKE, the name of resource is matched to show.\n    2) If use NAME =, the specified name is exactly matched.\n    3) RESOURCETYPE is specified, the corresponding rerouce type is matched.\n    4) Use ORDER BY to sort any combination of columns.\n    5) If LIMIT is specified, limit matching records are displayed. Otherwise, it is all displayed.\n    6) If OFFSET is specified, the query results are displayed starting with the offset offset. The offset is 0 by default.\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. Display all resources that the current user has permissions on\n    SHOW RESOURCES;\n\n2. Show the specified resource, the name contains the string "20140102", and displays 10 properties\n    SHOW RESOURCES WHERE NAME LIKE "2014_01_02" LIMIT 10;\n    \n3. Display the specified resource, specify the name as "20140102" and sort in descending order by key\n    SHOW RESOURCES WHERE NAME = "20140102" ORDER BY `KEY` DESC;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW, RESOURCES\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
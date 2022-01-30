(window.webpackJsonp=window.webpackJsonp||[]).push([[1155],{1609:function(t,e,a){"use strict";a.r(e);var l=a(56),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-table-like"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table-like"}},[t._v("#")]),t._v(" CREATE TABLE LIKE")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("p",[t._v("该语句用于创建一个表结构和另一张表完全相同的空表，同时也能够可选复制一些rollup。\n语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r1,r2,r3,...)]\n")])])]),a("p",[t._v("说明:\n1. 复制的表结构包括Column Definition、Partitions、Table Properties等\n2. 用户需要对复制的原表有"),a("code",[t._v("SELECT")]),t._v("权限\n3. 支持复制MySQL等外表\n4. 支持复制OLAP Table的rollup")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. 在test1库下创建一张表结构和table1相同的空表，表名为table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n\n2. 在test2库下创建一张表结构和test1.table1相同的空表，表名为table2\n\n    CREATE TABLE test2.table2 LIKE test1.table1\n\n3. 在test1库下创建一张表结构和table1相同的空表，表名为table2，同时复制table1的r1，r2两个rollup\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n4. 在test1库下创建一张表结构和table1相同的空表，表名为table2，同时复制table1的所有rollup\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n\n5. 在test2库下创建一张表结构和test1.table1相同的空表，表名为table2，同时复制table1的r1，r2两个rollup\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n6. 在test2库下创建一张表结构和test1.table1相同的空表，表名为table2，同时复制table1的所有rollup\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n\n7. 在test1库下创建一张表结构和MySQL外表table1相同的空表，表名为table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    CREATE,TABLE,LIKE\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
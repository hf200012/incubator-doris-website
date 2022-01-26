(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{988:function(t,e,a){"use strict";a.r(e);var s=a(56),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-table-like"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table-like"}},[t._v("#")]),t._v(" CREATE TABLE LIKE")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),a("p",[t._v("Use CREATE TABLE ... LIKE to create an empty table based on the definition of another table, including any column attributes, table partitions and table properties defined in the original table:\nSyntax:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r2,r2,r3,...)] \n")])])]),a("p",[t._v("Explain:\n1. The replicated table structures include Column Definition, Partitions, Table Properties, and so on\n2. The SELECT privilege is required on the original table.\n3. Support to copy external table such as MySQL.\n4. Support to copy OLAP table rollup")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. Under the test1 Database, create an empty table with the same table structure as table1, named table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n\n2. Under the test2 Database, create an empty table with the same table structure as test1.table1, named table2\n\n    CREATE TABLE test2.table2 LIKE test1.table1\n\n3. Under the test1 Database, create an empty table with the same table structure as table1, named table2. copy r1 and r2 rollup of table1 simultaneously\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n4. Under the test1 Database, create an empty table with the same table structure as table1, named table2. copy all rollup of table1 simultaneously\n\n    CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n\n5. Under the test2 Database, create an empty table with the same table structure as table1, named table2. copy r1 and r2 rollup of table1 simultaneously\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n\n6. Under the test2 Database, create an empty table with the same table structure as table1, named table2. copy all rollup of table1 simultaneously\n\n    CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n\n7. Under the test1 Database, create an empty table with the same table structure as MySQL's external table1, called table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    CREATE,TABLE,LIKE\n\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);
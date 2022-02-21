(window.webpackJsonp=window.webpackJsonp||[]).push([[1157],{1610:function(a,e,A){"use strict";A.r(e);var t=A(56),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,A=a._self._c||e;return A("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[A("h1",{attrs:{id:"alter-database"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#alter-database"}},[a._v("#")]),a._v(" ALTER DATABASE")]),a._v(" "),A("h2",{attrs:{id:"description"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),A("div",{staticClass:"language- extra-class"},[A("pre",[A("code",[a._v("该语句用于设置指定数据库的属性。（仅管理员使用）\n语法：\n    1) 设置数据库数据量配额，单位为B/K/KB/M/MB/G/GB/T/TB/P/PB\n        ALTER DATABASE db_name SET DATA QUOTA quota;\n        \n    2) 重命名数据库\n        ALTER DATABASE db_name RENAME new_db_name;\n        \n    3) 设置数据库的副本数量配额\n        ALTER DATABASE db_name SET REPLICA QUOTA quota; \n        \n说明：\n    重命名数据库后，如需要，请使用 REVOKE 和 GRANT 命令修改相应的用户权限。\n    数据库的默认数据量配额为1024GB，默认副本数量配额为1073741824。\n")])])]),A("h2",{attrs:{id:"example"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),A("div",{staticClass:"language- extra-class"},[A("pre",[A("code",[a._v("1. 设置指定数据库数据量配额\n    ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\n    上述单位为字节,等价于\n    ALTER DATABASE example_db SET DATA QUOTA 10T;\n\n    ALTER DATABASE example_db SET DATA QUOTA 100G;\n\n    ALTER DATABASE example_db SET DATA QUOTA 200M;\n\n2. 将数据库 example_db 重命名为 example_db2\n    ALTER DATABASE example_db RENAME example_db2;\n    \n3. 设定指定数据库副本数量配额\n    ALTER DATABASE example_db SET REPLICA QUOTA 102400; \n")])])]),A("h2",{attrs:{id:"keyword"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),A("div",{staticClass:"language- extra-class"},[A("pre",[A("code",[a._v("ALTER,DATABASE,RENAME\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
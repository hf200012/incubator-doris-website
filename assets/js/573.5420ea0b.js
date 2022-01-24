(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1026:function(e,a,t){"use strict";t.r(a);var s=t(56),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"show-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-data"}},[e._v("#")]),e._v(" SHOW DATA")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is used to show the amount of data, the number of replica and num of rows.")]),e._v(" "),t("p",[e._v("Syntax:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW DATA [FROM db_name[.table_name]] [ORDER BY ...];\n")])])]),t("p",[e._v("Explain:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("If the FROM clause is not specified, the amount of data and the number of copies subdivided into each table under the current db are displayed. The data volume is the total data volume of all replicas. The number of replicas is of all partitions of the table and all materialized views.")])]),e._v(" "),t("li",[t("p",[e._v("If the FROM clause is specified, the amount of data, the number of replicas, and the number of statistical rows subdivided into individual materialized views under table are displayed. The data volume is the total data volume of all replicas. The number of replicas is corresponding to all partitions of the materialized view. The number of statistical rows is corresponding to all partitions of the materialized view.")])]),e._v(" "),t("li",[t("p",[e._v("When counting the number of rows, the replica with the largest number of rows among multiple replicas shall prevail.")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("code",[e._v("Total")]),e._v(" row in the result set represents the summary row. The "),t("code",[e._v("Quota")]),e._v(" row indicates the current quota of the database. The "),t("code",[e._v("Left")]),e._v(" line indicates the remaining quota.")])]),e._v(" "),t("li",[t("p",[e._v("If you want to check the size of each Partition, please refer to "),t("code",[e._v("help show partitions")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Arbitrary column combinations can be sorted using ORDER BY.")])])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Display the data volume, replica size, aggregate data volume and aggregate replica count of each table of default DB.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW DATA;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Display the subdivision data volume, replica count and number of rows of the specified table below the specified DB.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW DATA FROM example_db.test;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Can be combined and sorted according to the data volume, replica count,and number of rows,etc.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SHOW DATA ORDER BY ReplicaCount desc,Size asc;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| table_c   | 3.102 KB    | 40           |\n| table_d   | .000        | 20           |\n| table_b   | 324.000 B   | 20           |\n| table_a   | 1.266 KB    | 10           |\n| Total     | 4.684 KB    | 90           |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1024.000 GB | 1073741734   |\n+-----------+-------------+--------------+\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SHOW,DATA\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);
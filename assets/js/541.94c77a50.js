(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{995:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v('<!-\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements. See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership. The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License. You may obtain a copy of the License at')]),e._v(" "),a("p",[e._v("http://www.apache.org/licenses/LICENSE-2.0")]),e._v(" "),a("p",[e._v('Unless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied. See the License for the\nspecific language governing permissions and limitations\nunder the License.\n->')]),e._v(" "),a("h1",{attrs:{id:"create-materialized-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-materialized-view"}},[e._v("#")]),e._v(" CREATE MATERIALIZED VIEW")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("This statement is used to create a materialized view.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Asynchronous syntax. After the call is successful, it only indicates that the task to create the materialized view is successfully submitted. The user needs to check the progress of the materialized view by using ```show alter table rollup```.\n\nAfter the progress is FINISHED, you can use the ```desc [table_name] all``` command to view the schema of the materialized view.\n")])])]),a("p",[e._v("syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('```\n\nCREATE MATERIALIZED VIEW [MG name] as [query]\n[PROPERTIES ("key" = "value")]\n\n```\n')])])]),a("ol",[a("li",[a("p",[e._v("MV name")]),e._v(" "),a("p",[e._v("Name of the materialized view. Required.")]),e._v(" "),a("p",[e._v("Materialized view names in the same table cannot be duplicated.")])]),e._v(" "),a("li",[a("p",[e._v("query")]),e._v(" "),a("p",[e._v("The query used to construct the materialized view. The result of the query is the data of the materialized view. The query format currently supported is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")])])])]),e._v(" "),a("p",[e._v("SELECT select_expr [, select_expr ...]\n    FROM [Base view name]\n    GROUP BY column_name [, column_name ...]\n    ORDER BY column_name [, column_name ...]\n    \n    The syntax is the same as the query syntax.\n```")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("select_expr: All columns in the materialized view's schema.\n\n+ Only single columns and aggregate columns without expression calculation are supported.\n+ The aggregate function currently only supports SUM, MIN, MAX, and the parameters of the aggregate function can only be a single column without expression calculation.\n+ Contains at least one single column.\n+ All involved columns can only appear once.\n\nbase view name: The original table name of the materialized view. Required.\n\n+ Must be a single table and not a subquery\n\ngroup by: Grouped column of materialized view, optional.\n\n+ If not filled, the data will not be grouped.\n\norder by: Sort order of materialized view, optional.\n\n+ The order of the column sort must be the same as the column declaration order in select_expr.\n+ If order by is not specified, sort columns are automatically supplemented according to the rules.\n\t\n\t+ If the materialized view is an aggregate type, all grouping columns are automatically supplemented with sort columns.\n\t+ If the materialized view is a non-aggregated type, the first 36 bytes are automatically supplemented as a sorted column. If the number of sorts for automatic replenishment is less than three, the first three are sorted.\n+ If the query contains a grouping column, the sort order must be the same as the grouping column.\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("properties")]),e._v(" "),a("p",[e._v("Declare some configuration of materialized view, optional.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PROPERTIES ("key" = "value", "key" = "value" ...)\n\n')])])]),a("p",[e._v("The following configurations can be declared here:")]),e._v(" "),a("ul",[a("li",[e._v("short_key: the number of columns.")]),e._v(" "),a("li",[e._v("timeout: timeout for materialized view construction.")])])])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("Base table structure is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type   | Null | Key  | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1    | INT    | Yes  | true | N/A     |       |\n| k2    | INT    | Yes  | true | N/A     |       |\n| k3    | BIGINT | Yes  | true | N/A     |       |\n| k4    | BIGINT | Yes  | true | N/A     |       |\n+-------+--------+------+------+---------+-------+\n")])])]),a("ol",[a("li",[a("p",[e._v("Create a materialized view containing only the columns of the original table (k1, k2)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create materialized view k1_k2 as\n")])])])])]),e._v(" "),a("p",[e._v("select k1, k2 from duplicate_table;\n```")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("The materialized view's schema is shown below. The materialized view contains only two columns k1, k2 without any aggregation.\n\n```\n+-----------------+-------+--------+------+------+---------+-------+\n| IndexName       | Field | Type   | Null | Key  | Default | Extra |\n+-----------------+-------+--------+------+------+---------+-------+\n| k1_k2           | k1    | INT    | Yes  | true | N/A     |       |\n|                 | k2    | INT    | Yes  | true | N/A     |       |\n+-----------------+-------+--------+------+------+---------+-------+\n```\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Create a materialized view sorted by k2")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create materialized view k2_order as\n")])])])])]),e._v(" "),a("p",[e._v("select k2, k1 from duplicate_table order by k2;")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n\tThe materialized view's schema is shown below. The materialized view contains only two columns k2, k1, where column k2 is a sorted column without any aggregation.\n\n\t```\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| k2_order        | k2    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k1    | INT    | Yes  | false | N/A     | NONE  |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t```\n\n3. Create a materialized view grouped by k1, k2 with k3 as the SUM aggregate\n\n\t```\n\tcreate materialized view k1_k2_sumk3 as\nselect k1, k2, sum (k3) from duplicate_table group by k1, k2;\n\t```\n\n\tThe materialized view's schema is shown below. The materialized view contains two columns k1, k2 and sum (k3), where k1, k2 are grouped columns, and sum (k3) is the sum of the k3 columns grouped according to k1, k2.\n\n\tBecause the materialized view does not declare a sort column, and the materialized view has aggregate data, the system supplements the grouping columns k1 and k2 by default.\n\n\t```\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| k1_k2_sumk3     | k1    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k2    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k3    | BIGINT | Yes  | false | N/A     | SUM   |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t```\n\n4. Create a materialized view to remove duplicate rows\n\n\t```\n\tcreate materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n\t```\n\n\tThe materialized view schema is shown below. The materialized view contains k1, k2, k3, and k4 columns, and there are no duplicate rows.\n\n\t```\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| IndexName       | Field | Type   | Null | Key   | Default | Extra |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t| deduplicate     | k1    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k2    | INT    | Yes  | true  | N/A     |       |\n\t|                 | k3    | BIGINT | Yes  | true  | N/A     |       |\n\t|                 | k4    | BIGINT | Yes  | true  | N/A     |       |\n\t+-----------------+-------+--------+------+-------+---------+-------+\n\t```\n\n5. Create a non-aggregated materialized view that does not declare a sort column\n\n\tThe schema of all_type_table is as follows:\n\n\t```\n\t+-------+--------------+------+-------+---------+-------+\n\t| Field | Type         | Null | Key   | Default | Extra |\n\t+-------+--------------+------+-------+---------+-------+\n\t| k1    | TINYINT      | Yes  | true  | N/A     |       |\n\t| k2    | SMALLINT     | Yes  | true  | N/A     |       |\n\t| k3    | INT          | Yes  | true  | N/A     |       |\n\t| k4    | BIGINT       | Yes  | true  | N/A     |       |\n\t| k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n\t| k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n\t| k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n\t+-------+--------------+------+-------+---------+-------+\n\t```\n\n\tThe materialized view contains k3, k4, k5, k6, k7 columns, and no sort column is declared. The creation statement is as follows:\n\n\t```\n\tcreate materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n\t```\n\n\tThe system's default supplementary sort columns are k3, k4, and k5. The sum of the number of bytes for these three column types is 4 (INT) + 8 (BIGINT) + 16 (DECIMAL) = 28 <36. So these three columns are added as sort columns.\n\t\n\tThe materialized view's schema is as follows. You can see that the key fields of the k3, k4, and k5 columns are true, which is the sort order. The key field of the k6, k7 columns is false, that is, non-sorted.\n\n\t```\n\t+----------------+-------+--------------+------+-------+---------+-------+\n\t| IndexName      | Field | Type         | Null | Key   | Default | Extra |\n\t+----------------+-------+--------------+------+-------+---------+-------+\n\t| mv_1           | k3    | INT          | Yes  | true  | N/A     |       |\n\t|                | k4    | BIGINT       | Yes  | true  | N/A     |       |\n\t|                | k5    | DECIMAL(9,0) | Yes  | true  | N/A     |       |\n\t|                | k6    | DOUBLE       | Yes  | false | N/A     | NONE  |\n\t|                | k7    | VARCHAR(20)  | Yes  | false | N/A     | NONE  |\n\t+----------------+-------+--------------+------+-------+---------+-------+\n\t```\n\t\n## keyword\n  CREATE, MATERIALIZED, VIEW\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{546:function(e,n,t){"use strict";t.r(n);var a=t(43),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"alter-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alter-table"}},[e._v("#")]),e._v(" ALTER TABLE")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),t("p",[e._v("This statement is used to modify an existing table. If no rollup index is specified, the base operation is the default.\n    The statement is divided into three types of operations: schema change, rollup, partition\n    These three types of operations cannot appear in an ALTER TABLE statement at the same time.\n    Where schema change and rollup are asynchronous operations and are returned if the task commits successfully. You can then use the SHOW ALTER command to view the progress.\n    Partition is a synchronous operation, and a command return indicates that execution is complete.")]),e._v(" "),t("p",[e._v("grammar:\n        ALTER TABLE [database.]table\n        Alter_clause1[, alter_clause2, ...];")]),e._v(" "),t("p",[e._v("The alter_clause is divided into partition, rollup, schema change, and rename.")]),e._v(" "),t("p",[e._v('Partition supports the following modifications\n    Increase the partition\n        grammar:\n            ADD PARTITION [IF NOT EXISTS] partition_name\n            Partition_desc ["key"="value"]\n            [DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n        note:\n            1) partition_desc supports two ways of writing:\n                * VALUES LESS THAN [MAXVALUE|("value1", ...)]\n                * VALUES [("value1", ...), ("value1", ...))\n            1) The partition is the left closed right open interval. If the user only specifies the right boundary, the system will automatically determine the left boundary.\n            2) If the bucket mode is not specified, the bucket method used by the built-in table is automatically used.\n            3) If the bucket mode is specified, only the bucket number can be modified, and the bucket mode or bucket column cannot be modified.\n            4) ["key"="value"] section can set some properties of the partition, see CREATE TABLE for details.')]),e._v(" "),t("p",[e._v('2. Delete the partition\n        grammar:\n            DROP PARTITION [IF EXISTS] partition_name\n        note:\n            1) Use a partitioned table to keep at least one partition.\n            2) Execute DROP PARTITION For a period of time, the deleted partition can be recovered by the RECOVER statement. See the RECOVER statement for details.\n            \n    3. Modify the partition properties\n        grammar:\n            MODIFY PARTITION partition_name SET ("key" = "value", ...)\n        Description:\n            1) The storage_medium, storage_cooldown_time, and replication_num attributes of the modified partition are currently supported.\n            2) For single-partition tables, partition_name is the same as the table name.\n        \n    Rollup supports the following ways to create:\n    1. Create a rollup index\n        grammar:\n            ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n            [FROM from_index_name]\n            [PROPERTIES ("key"="value", ...)]\n        note:\n            1) If from_index_name is not specified, it is created by default from base index\n            2) The columns in the rollup table must be existing columns in from_index\n            3) In properties, you can specify the storage format. See CREATE TABLE for details.\n            \n    2. Delete the rollup index\n        grammar:\n            DROP ROLLUP rollup_name\n            [PROPERTIES ("key"="value", ...)]\n        note:\n            1) Cannot delete base index\n            2) Execute DROP ROLLUP For a period of time, the deleted rollup index can be restored by the RECOVER statement. See the RECOVER statement for details.\n    \n            \n    Schema change supports the following modifications:\n    1. Add a column to the specified location of the specified index\n        grammar:\n            ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n            [AFTER column_name|FIRST]\n            [TO rollup_index_name]\n            [PROPERTIES ("key"="value", ...)]\n        note:\n            1) Aggregate model If you add a value column, you need to specify agg_type\n            2) Non-aggregate models (such as DUPLICATE KEY) If you add a key column, you need to specify the KEY keyword.\n            3) You cannot add a column that already exists in the base index to the rollup index\n                Recreate a rollup index if needed\n            \n    2. Add multiple columns to the specified index\n        grammar:\n            ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n            [TO rollup_index_name]\n            [PROPERTIES ("key"="value", ...)]\n        note:\n            1) Aggregate model If you add a value column, you need to specify agg_type\n            2) Non-aggregate model If you add a key column, you need to specify the KEY keyword.\n            3) You cannot add a column that already exists in the base index to the rollup index\n            (You can recreate a rollup index if needed)\n    \n    3. Remove a column from the specified index\n        grammar:\n            DROP COLUMN column_name\n            [FROM rollup_index_name]\n        note:\n            1) Cannot delete partition column\n            2) If the column is removed from the base index, it will also be deleted if the column is included in the rollup index\n        \n    4. Modify the column type and column position of the specified index\n        grammar:\n            MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n            [AFTER column_name|FIRST]\n            [FROM rollup_index_name]\n            [PROPERTIES ("key"="value", ...)]\n        note:\n            1) Aggregate model If you modify the value column, you need to specify agg_type\n            2) Non-aggregate type If you modify the key column, you need to specify the KEY keyword.\n            3) Only the type of the column can be modified. The other attributes of the column remain as they are (ie other attributes need to be explicitly written in the statement according to the original attribute, see example 8)\n            4) The partition column cannot be modified\n            5) The following types of conversions are currently supported (accuracy loss is guaranteed by the user)\n                TINYINT/SMALLINT/INT/BIGINT is converted to TINYINT/SMALLINT/INT/BIGINT/DOUBLE.\n                Convert LARGEINT to DOUBLE\n                VARCHAR supports modification of maximum length\n            6) Does not support changing from NULL to NOT NULL\n                \n    5. Reorder the columns of the specified index\n        grammar:\n            ORDER BY (column_name1, column_name2, ...)\n            [FROM rollup_index_name]\n            [PROPERTIES ("key"="value", ...)]\n        note:\n            1) All columns in index must be written\n            2) value is listed after the key column\n            \n    6. Modify the properties of the table, currently supports modifying the bloom filter column and the colocate_with attribute.\n        grammar:\n            PROPERTIES ("key"="value")\n        note:\n            Can also be merged into the above schema change operation to modify, see the example below')]),e._v(" "),t("p",[e._v("Rename supports modification of the following names:\n    1. Modify the table name\n        grammar:\n            RENAME new_table_name;\n            \n    2. Modify the rollup index name\n        grammar:\n            RENAME ROLLUP old_rollup_name new_rollup_name;\n            \n    3. Modify the partition name\n        grammar:\n            RENAME PARTITION old_partition_name new_partition_name;")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v('[partition]\n    1. Add partition, existing partition [MIN, 2013-01-01), add partition [2013-01-01, 2014-01-01), use default bucket mode\n        ALTER TABLE example_db.my_table\n        ADD PARTITION p1 VALUES LESS THAN ("2014-01-01");')]),e._v(" "),t("p",[e._v('2. Increase the partition and use the new number of buckets\n        ALTER TABLE example_db.my_table\n        ADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n        DISTRIBUTED BY HASH(k1) BUCKETS 20;')]),e._v(" "),t("p",[e._v('3. Increase the partition and use the new number of copies\n        ALTER TABLE example_db.my_table\n        ADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n        ("replication_num"="1");')]),e._v(" "),t("p",[e._v('4. Modify the number of partition copies\n        ALTER TABLE example_db.my_table\n        MODIFY PARTITION p1 SET("replication_num"="1");')]),e._v(" "),t("p",[e._v("5. Delete the partition\n        ALTER TABLE example_db.my_table\n        DROP PARTITION p1;\n        \n    6. Add a partition that specifies the upper and lower bounds")]),e._v(" "),t("p",[e._v('ALTER TABLE example_db.my_table\n        ADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));')]),e._v(" "),t("p",[e._v('[rollup]\n    1. Create index: example_rollup_index, based on base index(k1,k2,k3,v1,v2). Columnar storage.\n        ALTER TABLE example_db.my_table\n        ADD ROLLUP example_rollup_index(k1, k3, v1, v2)\n        PROPERTIES("storage_type"="column");\n        \n    2. Create index: example_rollup_index2, based on example_rollup_index(k1,k3,v1,v2)\n        ALTER TABLE example_db.my_table\n        ADD ROLLUP example_rollup_index2 (k1, v1)\n        FROM example_rollup_index;\n    \n    3. Delete index: example_rollup_index2\n        ALTER TABLE example_db.my_table\n        DROP ROLLUP example_rollup_index2;')]),e._v(" "),t("p",[e._v('[schema change]\n    1. Add a key column new_col to the col1 of example_rollup_index (non-aggregate model)\n        ALTER TABLE example_db.my_table\n        ADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\n        TO example_rollup_index;')]),e._v(" "),t("p",[e._v('2. Add a value column new_col to the col1 of example_rollup_index (non-aggregate model)\n          ALTER TABLE example_db.my_table\n          ADD COLUMN new_col INT DEFAULT "0" AFTER col1\n          TO example_rollup_index;')]),e._v(" "),t("p",[e._v('3. Add a key column new_col (aggregation model) to col1 of example_rollup_index\n          ALTER TABLE example_db.my_table\n          ADD COLUMN new_col INT DEFAULT "0" AFTER col1\n          TO example_rollup_index;')]),e._v(" "),t("p",[e._v('4. Add a value column to the col1 of example_rollup_index. new_col SUM aggregation type (aggregation model)\n          ALTER TABLE example_db.my_table\n          ADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1\n          TO example_rollup_index;\n    \n    5. Add multiple columns to the example_rollup_index (aggregate model)\n        ALTER TABLE example_db.my_table\n        ADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\n        TO example_rollup_index;\n    \n    6. Remove a column from example_rollup_index\n        ALTER TABLE example_db.my_table\n        DROP COLUMN col2\n        FROM example_rollup_index;\n        \n    7. Modify the base index\'s col1 column to be of type BIGINT and move to the col2 column\n        ALTER TABLE example_db.my_table\n        MODIFY COLUMN col1 BIGINT DEFAULT "1" AFTER col2;')]),e._v(" "),t("p",[e._v('8. Modify the maximum length of the val1 column of the base index. The original val1 is (val1 VARCHAR(32) REPLACE DEFAULT "abc")\n        ALTER TABLE example_db.my_table\n        MODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n    \n    9. Reorder the columns in example_rollup_index (set the original column order: k1, k2, k3, v1, v2)\n        ALTER TABLE example_db.my_table\n        ORDER BY (k3, k1, k2, v2, v1)\n        FROM example_rollup_index;\n        \n    10. Perform both operations simultaneously\n        ALTER TABLE example_db.my_table\n        ADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\n        ORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;')]),e._v(" "),t("p",[e._v('11. Modify the bloom filter column of the table\n        ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");')]),e._v(" "),t("p",[e._v('Can also be merged into the above schema change operation (note that the syntax of multiple clauses is slightly different)\n        ALTER TABLE example_db.my_table\n        DROP COLUMN col2\n        PROPERTIES ("bloom_filter_columns"="k1,k2,k3");')]),e._v(" "),t("p",[e._v("12. Modify the Colocate property of the table")]),e._v(" "),t("p",[e._v('ALTER TABLE example_db.my_table set ("colocate_with" = "t1");')]),e._v(" "),t("p",[e._v("13. Change the bucketing mode of the table from Random Distribution to Hash Distribution")]),e._v(" "),t("p",[e._v('ALTER TABLE example_db.my_table set ("distribution_type" = "hash");\n        \n    [rename]\n    1. Modify the table named table1 to table2\n        ALTER TABLE table1 RENAME table2;\n        \n    2. Modify the rollup index named rollup1 in the table example_table to rollup2\n        ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n        \n    3. Modify the partition named p1 in the table example_table to p2\n        ALTER TABLE example_table RENAME PARTITION p1 p2;')]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("ALTER, TABLE, ROLLUP, COLUMN, PARTITION, RENAME")])])}),[],!1,null,null,null);n.default=o.exports}}]);
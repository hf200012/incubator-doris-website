(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{622:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hive-udf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hive-udf"}},[t._v("#")]),t._v(" Hive UDF")]),t._v(" "),s("p",[t._v("Hive Bitmap UDF provides UDFs for generating bitmap and bitmap operations in hive tables. The bitmap in Hive is exactly the same as the Doris bitmap. The bitmap in Hive can be imported into doris through (spark bitmap load).")]),t._v(" "),s("p",[t._v("the main purpose:")]),t._v(" "),s("ol",[s("li",[t._v("Reduce the time of importing data into doris, and remove processes such as dictionary building and bitmap pre-aggregation;")]),t._v(" "),s("li",[t._v("Save hive storage, use bitmap to compress data, reduce storage cost;")]),t._v(" "),s("li",[t._v("Provide flexible bitmap operations in hive, such as: intersection, union, and difference operations, and the calculated bitmap can also be directly imported into doris; imported into doris;")])]),t._v(" "),s("h2",{attrs:{id:"how-to-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How To Use")]),t._v(" "),s("h3",{attrs:{id:"create-bitmap-type-table-in-hive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-bitmap-type-table-in-hive"}},[t._v("#")]),t._v(" Create Bitmap type table in Hive")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: Create Hive Bitmap Table")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("hive_bitmap_table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("   String    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("k3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("   String    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("binary")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bitmap'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'comment'")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"hive-bitmap-udf-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hive-bitmap-udf-usage"}},[t._v("#")]),t._v(" Hive Bitmap UDF Usage：")]),t._v(" "),s("p",[t._v("Hive Bitmap UDF used in Hive/Spark")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Load the Hive Bitmap Udf jar package (Upload the compiled hive-udf jar package to HDFS)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" jar hdfs:"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//node:9001/hive-udf-jar-with-dependencies.jar;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Create Hive Bitmap UDAF function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" to_bitmap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.doris.udf.ToBitmapUDAF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bitmap_union "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.doris.udf.BitmapUnionUDAF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Create Hive Bitmap UDF function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bitmap_count "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.doris.udf.BitmapCountUDF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bitmap_and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.doris.udf.BitmapAndUDF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bitmap_or "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.doris.udf.BitmapOrUDF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bitmap_xor "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.doris.udf.BitmapXorUDF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: Generate bitmap by to_bitmap function and write to Hive Bitmap table")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" hive_bitmap_table\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" \n    k1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    k2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    k3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    to_bitmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" uuid\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" \n    hive_table\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" \n    k1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    k2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    k3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: The bitmap_count function calculate the number of elements in the bitmap")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" k1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bitmap_count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" hive_bitmap_table\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Example: The bitmap_union function calculate the grouped bitmap union")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" k1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bitmap_union"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" hive_bitmap_table "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" k1\n\n")])])]),s("h3",{attrs:{id:"hive-bitmap-udf-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hive-bitmap-udf-description"}},[t._v("#")]),t._v(" Hive Bitmap UDF  Description")]),t._v(" "),s("h2",{attrs:{id:"hive-bitmap-import-into-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hive-bitmap-import-into-doris"}},[t._v("#")]),t._v(" Hive Bitmap import into Doris")]),t._v(" "),s("p",[t._v("see details: Load Data -> Spark Load -> Basic operation -> Create load(Example 3: when the upstream data source is hive binary type table)")])])}),[],!1,null,null,null);a.default=n.exports}}]);
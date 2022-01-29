(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{605:function(e,t,a){"use strict";a.r(t);var i=a(56),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"bitmap-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-format"}},[e._v("#")]),e._v(" Bitmap format")]),e._v(" "),a("h3",{attrs:{id:"format-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format-description"}},[e._v("#")]),e._v(" Format description")]),e._v(" "),a("p",[e._v("The bitmap in Doris uses roaring bitmap storage, and the be side uses CRoaring. The serialization format of "),a("code",[e._v("Roaring")]),e._v(" is compatible in languages ​​such as C++/java/go, while the serialization result of the format of C++ "),a("code",[e._v("Roaring64Map")]),e._v(" is the same as that of "),a("code",[e._v("Roaring64NavigableMap")]),e._v(" in Java. Not compatible. There are 5 types of Doris bimap, each of which is represented by one byte")]),e._v(" "),a("p",[e._v("The bitmap serialization format in Doris is explained as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" | flag     | data .....|\n <--1Byte--\x3e<--n bytes--\x3e\n")])])]),a("p",[e._v("The Flag value description is as follows:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("0")]),e._v(" "),a("td",[e._v("EMPTY, empty bitmap, the following data part is empty, the whole serialization result is only one byte")])]),e._v(" "),a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("SINGLE32, there is only one 32-bit unsigned integer value in the bitmap, and the next 4 bytes represent the 32-bit unsigned integer value")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("BITMAP32, 32-bit bitmap corresponds to the type "),a("code",[e._v("org.roaringbitmap.RoaringBitmap")]),e._v(" in java. The type is "),a("code",[e._v("roaring::Roaring")]),e._v(" in C++, and the following data is the structure after the sequence of roaring::Roaring. You can use "),a("code",[e._v("org in java. .roaringbitmap.RoaringBitmap")]),e._v(" or "),a("code",[e._v("roaring::Roaring")]),e._v(" in c++ directly deserialize")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("SINGLE64, there is only one 64-bit unsigned integer value in the bitmap, and the next 8 bytes represent the 64-bit unsigned integer value")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("BITMAP64, 64-bit bitmap corresponds to "),a("code",[e._v("org.roaringbitmap.RoaringBitmap")]),e._v(" in java; "),a("code",[e._v("Roaring64Map")]),e._v(" in doris in c++. The data structure is the same as the result in the roaring library, but the serialization and deserialization methods It is different, there will be 1-8 bytes of variable-length encoding uint64 in the bitmap representation of the size. The following data is a series of multiple high-order representations of 4 bytes and 32-bit roaring bitmap serialized data repeated")])])])]),e._v(" "),a("p",[e._v("C++ serialization and deserialization examples are in the "),a("code",[e._v("BitmapValue::write()")]),e._v(" method in "),a("code",[e._v("be/src/util/bitmap_value.h")]),e._v(" and the Java examples are in the "),a("code",[e._v("serialize()")]),e._v(" "),a("code",[e._v("deserialize()")]),e._v(" method in "),a("code",[e._v("fe/fe-common/src/main/java/org/apache/doris/common/io/BitmapValue.java")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"hll-format-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hll-format-description"}},[e._v("#")]),e._v(" HLL format description")]),e._v(" "),a("p",[e._v("Serialized data in HLL format is implemented in Doris itself. Similar to the Bitmap type, the HLL format is composed of a 1-byte flag followed by multiple bytes of data. The meaning of the flag is as follows")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("0")]),e._v(" "),a("td",[e._v("HLL_DATA_EMPTY, empty HLL, the following data part is empty, the entire serialization result is only one byte")])]),e._v(" "),a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("HLL_DATA_EXPLICIT, the next byte is explicit The number of data blocks, followed by multiple data blocks, each data block is composed of 8 bytes in length and data,")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("HLL_DATA_SPARSE, only non-zero values are stored, the next 4 bytes indicate the number of registers, and there are multiple register structures in the back. Each register is composed of the index of the first 2 bytes and the value of 1 byte")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("HLL_DATA_FULL, which means that all 16 * 1024 registers have values, followed by 16 * 1024 bytes of value data")])])])]),e._v(" "),a("p",[e._v("C++ serialization and deserialization examples are in the "),a("code",[e._v("serialize()")]),e._v(" "),a("code",[e._v("deserialize()")]),e._v(" method of "),a("code",[e._v("be/src/olap/hll.h")]),e._v(", and the Java examples are in the "),a("code",[e._v("serialize()")]),e._v(" "),a("code",[e._v("deserialize()")]),e._v(" method in "),a("code",[e._v("fe/fe-common/src/main/java/org/apache/doris/common/io/hll.java")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{647:function(e,t,n){"use strict";n.r(t);var a=n(56),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"doris-storage-file-format-optimization"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#doris-storage-file-format-optimization"}},[e._v("#")]),e._v(" Doris Storage File Format Optimization")]),e._v(" "),n("h2",{attrs:{id:"file-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file-format"}},[e._v("#")]),e._v(" File format")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/segment_v2.png"),alt:""}}),e._v(" "),n("center",[e._v("1. doris segment")]),e._v(" "),n("p",[e._v("Documents include:")]),e._v(" "),n("ul",[n("li",[e._v("The file starts with an 8-byte magic code to identify the file format and version")]),e._v(" "),n("li",[e._v("Data Region: Used to store data information for each column, where the data is loaded on demand by pages.")]),e._v(" "),n("li",[e._v("Index Region: Doris stores the index data of each column in Index Region, where the data is loaded according to column granularity, so the data information of the following column is stored separately.")]),e._v(" "),n("li",[e._v("Footer\n"),n("ul",[n("li",[e._v("FileFooterPB: Metadata Information for Definition Files")]),e._v(" "),n("li",[e._v("Checksum of 4 bytes of footer Pb content")]),e._v(" "),n("li",[e._v("Four bytes FileFooterPB message length for reading FileFooterPB")]),e._v(" "),n("li",[e._v("The 8 byte MAGIC CODE is stored in the last bit to facilitate the identification of file types in different scenarios.")])])])]),e._v(" "),n("p",[e._v("The data in the file is organized in the form of page, which is the basic unit of coding and compression. Current page types include the following:")]),e._v(" "),n("h3",{attrs:{id:"datapage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#datapage"}},[e._v("#")]),e._v(" DataPage")]),e._v(" "),n("p",[e._v("Data Page is divided into two types: nullable and non-nullable data pages.")]),e._v(" "),n("p",[e._v("Nullable's data page includes:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n                 +----------------+\n                 |  value count   |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 | bitmap length  |\n                 |----------------|\n                 |  null bitmap   |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")])])]),n("p",[e._v("non -zero data page32467;- 26500;- 229140;-")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("                 |----------------|\n                 |   value count  |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")])])]),n("p",[e._v("The meanings of each field are as follows:")]),e._v(" "),n("ul",[n("li",[e._v("value count\n"),n("ul",[n("li",[e._v("Represents the number of rows in a page")])])]),e._v(" "),n("li",[e._v("First row id\n"),n("ul",[n("li",[e._v("Line number of the first line in page")])])]),e._v(" "),n("li",[e._v("bitmap length\n"),n("ul",[n("li",[e._v("Represents the number of bytes in the next bitmap")])])]),e._v(" "),n("li",[e._v("null bitmap\n"),n("ul",[n("li",[e._v("bitmap representing null information")])])]),e._v(" "),n("li",[e._v("Data\n"),n("ul",[n("li",[e._v("Store data after encoding and compress")]),e._v(" "),n("li",[e._v("You need to write in the header information of the data: is_compressed")]),e._v(" "),n("li",[e._v("Various kinds of data encoded by different codes need to write some field information in the header information in order to achieve data parsing.")]),e._v(" "),n("li",[e._v("TODO: Add header information for various encodings")])])]),e._v(" "),n("li",[e._v("Checksum\n"),n("ul",[n("li",[e._v("Store page granularity checksum, including page header and subsequent actual data")])])])]),e._v(" "),n("h3",{attrs:{id:"bloom-filter-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filter-pages"}},[e._v("#")]),e._v(" Bloom Filter Pages")]),e._v(" "),n("p",[e._v("For each bloom filter column, a page of the bloom filter is generated corresponding to the granularity of the page and saved in the bloom filter pages area.")]),e._v(" "),n("h3",{attrs:{id:"ordinal-index-page"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ordinal-index-page"}},[e._v("#")]),e._v(" Ordinal Index Page")]),e._v(" "),n("p",[e._v("For each column, a sparse index of row numbers is established according to page granularity. The content is a pointer to the block (including offset and length) for the line number of the start line of the page")]),e._v(" "),n("h3",{attrs:{id:"short-key-index-page"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#short-key-index-page"}},[e._v("#")]),e._v(" Short Key Index page")]),e._v(" "),n("p",[e._v("We generate a sparse index of short key every N rows (configurable) with the contents of short key - > line number (ordinal)")]),e._v(" "),n("h3",{attrs:{id:"column-s-other-indexes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-s-other-indexes"}},[e._v("#")]),e._v(" Column's other indexes")]),e._v(" "),n("p",[e._v("The format design supports the subsequent expansion of other index information, such as bitmap index, spatial index, etc. It only needs to write the required data to the existing column data, and add the corresponding metadata fields to FileFooterPB.")]),e._v(" "),n("h3",{attrs:{id:"metadata-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metadata-definition"}},[e._v("#")]),e._v(" Metadata Definition")]),e._v(" "),n("p",[e._v("SegmentFooterPB is defined as:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("message ColumnPB {\n    required int32 unique_id = 1;   // The column id is used here, and the column name is not used\n    optional string name = 2;   // Column name,  when name equals __DORIS_DELETE_SIGN__, this column is a hidden delete column\n    required string type = 3;   // Column type\n    optional bool is_key = 4;   // Whether column is a primary key column\n    optional string aggregation = 5;    // Aggregate type\n    optional bool is_nullable = 6;      // Whether column is allowed to assgin null\n    optional bytes default_value = 7;   // Defalut value\n    optional int32 precision = 8;       // Precision of column\n    optional int32 frac = 9;\n    optional int32 length = 10;         // Length of column\n    optional int32 index_length = 11;   // Length of column index\n    optional bool is_bf_column = 12;    // Whether column has bloom filter index\n    optional bool has_bitmap_index = 15 [default=false];  // Whether column has bitmap index\n}\n\n// page offset\nmessage PagePointerPB {\n\trequired uint64 offset; // offset of page in segment file\n\trequired uint32 length; // length of page\n}\n\nmessage MetadataPairPB {\n  optional string key = 1;\n  optional bytes value = 2;\n}\n\nmessage ColumnMetaPB {\n\toptional ColumnMessage encoding; // Encoding of column\n\n\toptional PagePointerPB dict_page // Dictionary page\n\trepeated PagePointerPB bloom_filter_pages; // Bloom filter pages\n\toptional PagePointerPB ordinal_index_page; // Ordinal index page\n\toptional PagePointerPB page_zone_map_page; // Page level of statistics index data\n\n\toptional PagePointerPB bitmap_index_page; // Bitmap index page\n\n\toptional uint64 data_footprint; // The size of the index in the column\n\toptional uint64 index_footprint; // The size of the data in the column\n\toptional uint64 raw_data_footprint; // Original column data size\n\n\toptional CompressKind compress_kind; // Column compression type\n\n\toptional ZoneMapPB column_zone_map; // Segment level of statistics index data\n\trepeated MetadataPairPB column_meta_datas;\n}\n\nmessage SegmentFooterPB {\n\toptional uint32 version = 2 [default = 1]; // For version compatibility and upgrade use\n\trepeated ColumnPB schema = 5; // Schema of columns\n  optional uint64 num_values = 4; // Number of lines saved in the file\n  optional uint64 index_footprint = 7; // Index size\n  optional uint64 data_footprint = 8; // Data size\n\toptional uint64 raw_data_footprint = 8; // Original data size\n\n  optional CompressKind compress_kind = 9 [default = COMPRESS_LZO]; // Compression type\n  repeated ColumnMetaPB column_metas = 10; // Column metadata\n\toptional PagePointerPB key_index_page = 11; // short key index page\n}\n\n")])])]),n("h2",{attrs:{id:"read-write-logic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#read-write-logic"}},[e._v("#")]),e._v(" Read-write logic")]),e._v(" "),n("h3",{attrs:{id:"write"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#write"}},[e._v("#")]),e._v(" Write")]),e._v(" "),n("p",[e._v("The general writing process is as follows:")]),e._v(" "),n("ol",[n("li",[e._v("Write magic")]),e._v(" "),n("li",[e._v("Generate corresponding Column Writer according to schema information. Each Column Writer obtains corresponding encoding information (configurable) according to different types, and generates corresponding encoder according to encoding.")]),e._v(" "),n("li",[e._v("Call encoder - > add (value) for data writing. Each K line generates a short key index entry, and if the current page satisfies certain conditions (the size exceeds 1M or the number of rows is K), a new page is generated and cached in memory.")]),e._v(" "),n("li",[e._v("Continuous cycle step 3 until data writing is completed. Brush the data of each column into the file in sequence")]),e._v(" "),n("li",[e._v("Generate FileFooterPB information and write it to the file.")])]),e._v(" "),n("p",[e._v("Relevant issues:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("How does the index of short key be generated?")]),e._v(" "),n("ul",[n("li",[e._v("Now we still generate a short key sparse index according to how many rows are sparse, and keep a short sparse index generated every 1024 rows. The specific content is: short key - > ordinal")])])]),e._v(" "),n("li",[n("p",[e._v("What should be stored in the ordinal index?")]),e._v(" "),n("ul",[n("li",[e._v("Store the first ordinal to page pointer mapping information for pages")])])]),e._v(" "),n("li",[n("p",[e._v("What are stored in pages of different encoding types?")]),e._v(" "),n("ul",[n("li",[e._v("Dictionary Compression")]),e._v(" "),n("li",[e._v("plain")]),e._v(" "),n("li",[e._v("rle")]),e._v(" "),n("li",[e._v("bshuf")])])])]),e._v(" "),n("h3",{attrs:{id:"read"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[e._v("#")]),e._v(" Read")]),e._v(" "),n("ol",[n("li",[e._v("Read the magic of the file and judge the type and version of the file.")]),e._v(" "),n("li",[e._v("Read FileFooterPB and check sum")]),e._v(" "),n("li",[e._v("Read short key index and data ordinal index information of corresponding columns according to required columns")]),e._v(" "),n("li",[e._v("Use start key and end key, locate the row number to be read through short key index, then determine the row ranges to be read through ordinal index, and filter the row ranges to be read through statistics, bitmap index and so on.")]),e._v(" "),n("li",[e._v("Then read row data through ordinal index according to row ranges")])]),e._v(" "),n("p",[e._v("Relevant issues:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("How to quickly locate a row within the page?")]),e._v(" "),n("p",[e._v("The data inside the page is encoding, so it cannot locate the row-level data quickly. Different encoding methods have different schemes for fast line number positioning in-house, which need to be analyzed concretely:")]),e._v(" "),n("ul",[n("li",[e._v("If it is rle-coded, skip is performed by resolving the head of RLE until the RLE block containing the row is reached, and then the reverse solution is performed.")]),e._v(" "),n("li",[e._v("binary plain encoding: offset information will be stored in the page, and offset information will be specified in the page header. When reading, offset information will be parsed into the array first, so that you can quickly locate the data of a row of block through offset data information of each row.")])])]),e._v(" "),n("li",[n("p",[e._v("How to achieve efficient block reading? Consider merging adjacent blocks while they are being read, one-time reading?\nThis requires judging whether the block is continuous at the time of reading, and if it is continuous, reading it once.")])])]),e._v(" "),n("h2",{attrs:{id:"coding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coding"}},[e._v("#")]),e._v(" Coding")]),e._v(" "),n("p",[e._v("In the existing Doris storage, plain encoding is adopted for string type encoding, which is inefficient. After comparison, it is found that in Baidu statistics scenario, data will expand more than twice because of string type coding. Therefore, it is planned to introduce dictionary-based coding compression.")]),e._v(" "),n("h2",{attrs:{id:"compression"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),n("p",[e._v("It implements a scalable compression framework, supports a variety of compression algorithms, facilitates the subsequent addition of new compression algorithms, and plans to introduce zstd compression.")]),e._v(" "),n("h2",{attrs:{id:"todo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),n("ol",[n("li",[e._v("How to implement nested types? How to locate line numbers in nested types?")]),e._v(" "),n("li",[e._v("How to optimize the downstream bitmap and column statistics caused by ScanRange splitting?")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);
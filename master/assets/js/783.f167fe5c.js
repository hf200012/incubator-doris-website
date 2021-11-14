(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{1226:function(a,e,t){"use strict";t.r(e);var n=t(52),i=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"doris存储文件格式优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris存储文件格式优化"}},[a._v("#")]),a._v(" Doris存储文件格式优化")]),a._v(" "),t("h2",{attrs:{id:"文件格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件格式"}},[a._v("#")]),a._v(" 文件格式")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/segment_v2.png"),alt:""}}),a._v(" "),t("center",[a._v("图1. doris segment文件格式")]),a._v(" "),t("p",[a._v("文件包括：")]),a._v(" "),t("ul",[t("li",[a._v("文件开始是8个字节的magic code，用于识别文件格式和版本")]),a._v(" "),t("li",[a._v("Data Region：用于存储各个列的数据信息，这里的数据是按需分page加载的")]),a._v(" "),t("li",[a._v("Index Region: doris中将各个列的index数据统一存储在Index Region，这里的数据会按照列粒度进行加载，所以跟列的数据信息分开存储")]),a._v(" "),t("li",[a._v("Footer信息\n"),t("ul",[t("li",[a._v("FileFooterPB:定义文件的元数据信息")]),a._v(" "),t("li",[a._v("4个字节的footer pb内容的checksum")]),a._v(" "),t("li",[a._v("4个字节的FileFooterPB消息长度，用于读取FileFooterPB")]),a._v(" "),t("li",[a._v("8个字节的MAGIC CODE，之所以在末位存储，是方便不同的场景进行文件类型的识别")])])])]),a._v(" "),t("p",[a._v("文件中的数据按照page的方式进行组织，page是编码和压缩的基本单位。现在的page类型包括以下几种:")]),a._v(" "),t("h3",{attrs:{id:"datapage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datapage"}},[a._v("#")]),a._v(" DataPage")]),a._v(" "),t("p",[a._v("DataPage分为两种：nullable和non-nullable的data page。")]),a._v(" "),t("p",[a._v("nullable的data page内容包括：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n                 +----------------+\n                 |  value count   |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 | bitmap length  |\n                 |----------------|\n                 |  null bitmap   |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")])])]),t("p",[a._v("non-nullable data page结构如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("                 |----------------|\n                 |   value count  |\n                 |----------------|\n                 |  first row id  |\n                 |----------------|\n                 |     data       |\n                 |----------------|\n                 |    checksum    |\n                 +----------------+\n")])])]),t("p",[a._v("其中各个字段含义如下：")]),a._v(" "),t("ul",[t("li",[a._v("value count\n"),t("ul",[t("li",[a._v("表示page中的行数")])])]),a._v(" "),t("li",[a._v("first row id\n"),t("ul",[t("li",[a._v("page中第一行的行号")])])]),a._v(" "),t("li",[a._v("bitmap length\n"),t("ul",[t("li",[a._v("表示接下来bitmap的字节数")])])]),a._v(" "),t("li",[a._v("null bitmap\n"),t("ul",[t("li",[a._v("表示null信息的bitmap")])])]),a._v(" "),t("li",[a._v("data\n"),t("ul",[t("li",[a._v("存储经过encoding和compress之后的数据")]),a._v(" "),t("li",[a._v("需要在数据的头部信息中写入：is_compressed")]),a._v(" "),t("li",[a._v("各种不同编码的data需要在头部信息写入一些字段信息，以实现数据的解析\n"),t("ul",[t("li",[a._v("TODO：添加各种encoding的header信息")])])])])]),a._v(" "),t("li",[a._v("checksum\n"),t("ul",[t("li",[a._v("存储page粒度的校验和，包括page的header和之后的实际数据")])])])]),a._v(" "),t("h3",{attrs:{id:"bloom-filter-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filter-pages"}},[a._v("#")]),a._v(" Bloom Filter Pages")]),a._v(" "),t("p",[a._v("针对每个bloom filter列,会在page的粒度相应的生成一个bloom filter的page，保存在bloom filter pages区域")]),a._v(" "),t("h3",{attrs:{id:"ordinal-index-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ordinal-index-page"}},[a._v("#")]),a._v(" Ordinal Index Page")]),a._v(" "),t("p",[a._v("针对每个列，都会按照page粒度，建立行号的稀疏索引。内容为这个page的起始行的行号到这个block的指针（包括offset和length）")]),a._v(" "),t("h3",{attrs:{id:"short-key-index-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#short-key-index-page"}},[a._v("#")]),a._v(" Short Key Index page")]),a._v(" "),t("p",[a._v("我们会每隔N行（可配置）生成一个short key的稀疏索引，索引的内容为：short key->行号(ordinal)")]),a._v(" "),t("h3",{attrs:{id:"column的其他索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column的其他索引"}},[a._v("#")]),a._v(" Column的其他索引")]),a._v(" "),t("p",[a._v("该格式设计支持后续扩展其他的索引信息，比如bitmap索引，spatial索引等等，只需要将需要的数据写到现有的列数据后面，并且添加对应的元数据字段到FileFooterPB中")]),a._v(" "),t("h3",{attrs:{id:"元数据定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元数据定义"}},[a._v("#")]),a._v(" 元数据定义")]),a._v(" "),t("p",[a._v("SegmentFooterPB的定义为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("message ColumnPB {\n    required int32 unique_id = 1;   // 这里使用column id, 不使用column name是因为计划支持修改列名\n    optional string name = 2;   // 列的名字,  当name为__DORIS_DELETE_SIGN__, 表示该列为隐藏的删除列\n    required string type = 3;   // 列类型\n    optional bool is_key = 4;   // 是否是主键列\n    optional string aggregation = 5;    // 聚合方式\n    optional bool is_nullable = 6;      // 是否有null\n    optional bytes default_value = 7;   // 默认值\n    optional int32 precision = 8;       // 精度\n    optional int32 frac = 9;\n    optional int32 length = 10;         // 长度\n    optional int32 index_length = 11;   // 索引长度\n    optional bool is_bf_column = 12;    // 是否有bf词典\n    optional bool has_bitmap_index = 15 [default=false];  // 是否有bitmap索引\n}\n\n// page偏移\nmessage PagePointerPB {\n\trequired uint64 offset; // page在文件中的偏移\n\trequired uint32 length; // page的大小\n}\n\nmessage MetadataPairPB {\n  optional string key = 1;\n  optional bytes value = 2;\n}\n\nmessage ColumnMetaPB {\n\toptional ColumnMessage encoding; // 编码方式\n\n\toptional PagePointerPB dict_page // 词典page\n\trepeated PagePointerPB bloom_filter_pages; // bloom filter词典信息\n\toptional PagePointerPB ordinal_index_page; // 行号索引数据\n\toptional PagePointerPB page_zone_map_page; // page级别统计信息索引数据\n\n\toptional PagePointerPB bitmap_index_page; // bitmap索引数据\n\n\toptional uint64 data_footprint; // 列中索引的大小\n\toptional uint64 index_footprint; // 列中数据的大小\n\toptional uint64 raw_data_footprint; // 原始列数据大小\n\n\toptional CompressKind compress_kind; // 列的压缩方式\n\n\toptional ZoneMapPB column_zone_map; //文件级别的过滤条件\n\trepeated MetadataPairPB column_meta_datas;\n}\n\nmessage SegmentFooterPB {\n\toptional uint32 version = 2 [default = 1]; // 用于版本兼容和升级使用\n\trepeated ColumnPB schema = 5; // 列Schema\n  optional uint64 num_values = 4; // 文件中保存的行数\n  optional uint64 index_footprint = 7; // 索引大小\n  optional uint64 data_footprint = 8; // 数据大小\n\toptional uint64 raw_data_footprint = 8; // 原始数据大小\n\n  optional CompressKind compress_kind = 9 [default = COMPRESS_LZO]; // 压缩方式\n  repeated ColumnMetaPB column_metas = 10; // 列元数据\n\toptional PagePointerPB key_index_page; // short key索引page\n}\n\n")])])]),t("h2",{attrs:{id:"读写逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写逻辑"}},[a._v("#")]),a._v(" 读写逻辑")]),a._v(" "),t("h3",{attrs:{id:"写入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写入"}},[a._v("#")]),a._v(" 写入")]),a._v(" "),t("p",[a._v("大体的写入流程如下：")]),a._v(" "),t("ol",[t("li",[a._v("写入magic")]),a._v(" "),t("li",[a._v("根据schema信息，生成对应的ColumnWriter，每个ColumnWriter按照不同的类型，获取对应的encoding信息（可配置），根据encoding，生成对应的encoder")]),a._v(" "),t("li",[a._v("调用encoder->add(value)进行数据写入，每个K行，生成一个short key index entry，并且，如果当前的page满足一定条件（大小超过1M或者行数为K），就生成一个新的page，缓存在内存中。")]),a._v(" "),t("li",[a._v("不断的循环步骤3，直到数据写入完成。将各个列的数据依序刷入文件中")]),a._v(" "),t("li",[a._v("生成FileFooterPB信息，写入文件中。")])]),a._v(" "),t("p",[a._v("相关的问题：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("short key的索引如何生成？")]),a._v(" "),t("ul",[t("li",[a._v("现在还是按照每隔多少行生成一个short key的稀疏索引，保持每隔1024行生成一个short的稀疏索引,具体的内容是：short key -> ordinal")])])]),a._v(" "),t("li",[t("p",[a._v("ordinal索引里面应该存什么？")]),a._v(" "),t("ul",[t("li",[a._v("存储page的第一个ordinal到page pointer的映射信息")])])]),a._v(" "),t("li",[t("p",[a._v("不同encoding类型的page里存什么？")]),a._v(" "),t("ul",[t("li",[a._v("词典压缩")]),a._v(" "),t("li",[a._v("plain")]),a._v(" "),t("li",[a._v("rle")]),a._v(" "),t("li",[a._v("bshuf")])])])]),a._v(" "),t("h3",{attrs:{id:"读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[a._v("#")]),a._v(" 读取")]),a._v(" "),t("ol",[t("li",[a._v("读取文件的magic，判断文件类型和版本")]),a._v(" "),t("li",[a._v("读取FileFooterPB，进行checksum校验")]),a._v(" "),t("li",[a._v("按照需要的列，读取short key索引和对应列的数据ordinal索引信息")]),a._v(" "),t("li",[a._v("使用start key和end key，通过short key索引定位到要读取的行号，然后通过ordinal索引确定需要读取的row ranges, 同时需要通过统计信息、bitmap索引等过滤需要读取的row ranges")]),a._v(" "),t("li",[a._v("然后按照row ranges通过ordinal索引读取行的数据")])]),a._v(" "),t("p",[a._v("相关的问题：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("如何实现在page内部快速的定位到某一行？")]),a._v(" "),t("p",[a._v("page内部是的数据是经过encoding的，无法快速进行行级数据的定位。不同的encoding方式，在内部进行快速的行号定位的方案不一样，需要具体分析：")]),a._v(" "),t("ul",[t("li",[a._v("如果是rle编码的，需要通过解析rle的header进行skip，直到到达包含该行的那个rle块之后，再进行反解。")]),a._v(" "),t("li",[a._v("binary plain encoding：会在page的中存储offset信息，并且会在page header中指定offset信息的offset，读取的时候会先解析offset信息到数组中，这样子就可以通过各个行的offset数据信息快速的定位block某一行的数据")])])]),a._v(" "),t("li",[t("p",[a._v("如何实现块的高效读取？可以考虑将相邻的块在读取的时候进行merge，一次性读取？\n这个需要在读取的时候，判断block是否连续，如果连续，就一次性的读取")])])]),a._v(" "),t("h2",{attrs:{id:"编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编码"}},[a._v("#")]),a._v(" 编码")]),a._v(" "),t("p",[a._v("现有的doris存储中，针对string类型的编码，采用plain encoding的方式，效率比较低。经过对比，发现在百度统计的场景下，数据会因为string类型的编码膨胀超过一倍。所以，计划引入基于词典的编码压缩。")]),a._v(" "),t("h2",{attrs:{id:"压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[a._v("#")]),a._v(" 压缩")]),a._v(" "),t("p",[a._v("实现可扩展的压缩框架，支持多种压缩算法，方便后续添加新的压缩算法，计划引入zstd压缩。")]),a._v(" "),t("h2",{attrs:{id:"todo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[a._v("#")]),a._v(" TODO")]),a._v(" "),t("ol",[t("li",[a._v("如何实现嵌套类型？如何在嵌套类型中进行行号定位？")]),a._v(" "),t("li",[a._v("如何优化现在的ScanRange拆分导致的下游bitmap、column statistic统计等进行多次？")])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);
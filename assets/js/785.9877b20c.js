(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{1238:function(t,e,_){"use strict";_.r(e);var s=_(56),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"doris-on-es"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris-on-es"}},[t._v("#")]),t._v(" Doris On ES")]),t._v(" "),_("p",[t._v("Doris-On-ES将Doris的分布式查询规划能力和ES(Elasticsearch)的全文检索能力相结合，提供更完善的OLAP分析场景解决方案：")]),t._v(" "),_("ol",[_("li",[t._v("ES中的多index分布式Join查询")]),t._v(" "),_("li",[t._v("Doris和ES中的表联合查询，更复杂的全文检索过滤")])]),t._v(" "),_("p",[t._v("本文档主要介绍该功能的实现原理、使用方式等。")]),t._v(" "),_("h2",{attrs:{id:"名词解释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),_("h3",{attrs:{id:"doris相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris相关"}},[t._v("#")]),t._v(" Doris相关")]),t._v(" "),_("ul",[_("li",[t._v("FE：Frontend，Doris 的前端节点,负责元数据管理和请求接入")]),t._v(" "),_("li",[t._v("BE：Backend，Doris 的后端节点,负责查询执行和数据存储")])]),t._v(" "),_("h3",{attrs:{id:"es相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es相关"}},[t._v("#")]),t._v(" ES相关")]),t._v(" "),_("ul",[_("li",[t._v("DataNode：ES的数据存储与计算节点")]),t._v(" "),_("li",[t._v("MasterNode：ES的Master节点，管理元数据、节点、数据分布等")]),t._v(" "),_("li",[t._v("scroll：ES内置的数据集游标特性，用来对数据进行流式扫描和过滤")]),t._v(" "),_("li",[t._v("_source: 导入时传入的原始JSON格式文档内容")]),t._v(" "),_("li",[t._v("doc_values: ES/Lucene 中字段的列式存储定义")]),t._v(" "),_("li",[t._v("keyword: 字符串类型字段，ES/Lucene不会对文本内容进行分词处理")]),t._v(" "),_("li",[t._v("text: 字符串类型字段，ES/Lucene会对文本内容进行分词处理，分词器需要用户指定，默认为standard英文分词器")])]),t._v(" "),_("h2",{attrs:{id:"使用方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),_("h3",{attrs:{id:"创建es索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建es索引"}},[t._v("#")]),t._v(" 创建ES索引")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('PUT test\n{\n   "settings": {\n      "index": {\n         "number_of_shards": "1",\n         "number_of_replicas": "0"\n      }\n   },\n   "mappings": {\n      "doc": { // ES 7.x版本之后创建索引时不需要指定type，会有一个默认且唯一的`_doc` type\n         "properties": {\n            "k1": {\n               "type": "long"\n            },\n            "k2": {\n               "type": "date"\n            },\n            "k3": {\n               "type": "keyword"\n            },\n            "k4": {\n               "type": "text",\n               "analyzer": "standard"\n            },\n            "k5": {\n               "type": "float"\n            }\n         }\n      }\n   }\n}\n')])])]),_("h3",{attrs:{id:"es索引导入数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es索引导入数据"}},[t._v("#")]),t._v(" ES索引导入数据")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('POST /_bulk\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Trying out Elasticsearch", "k4": "Trying out Elasticsearch", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Trying out Doris", "k4": "Trying out Doris", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Doris On ES", "k4": "Doris On ES", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Doris", "k4": "Doris", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "ES", "k4": "ES", "k5": 10.0}\n')])])]),_("h3",{attrs:{id:"doris中创建es外表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doris中创建es外表"}},[t._v("#")]),t._v(" Doris中创建ES外表")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH // ENGINE必须是Elasticsearch\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test",\n"type" = "doc",\n\n"user" = "root",\n"password" = "root"\n);\n')])])]),_("p",[t._v("参数说明：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("hosts")])]),t._v(" "),_("td",[t._v("ES集群地址，可以是一个或多个，也可以是ES前端的负载均衡地址")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("index")])]),t._v(" "),_("td",[t._v("对应的ES的index名字，支持alias，如果使用doc_value，需要使用真实的名称")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("type")])]),t._v(" "),_("td",[t._v("index的type，不指定的情况会使用_doc")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("user")])]),t._v(" "),_("td",[t._v("ES集群用户名")])]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("password")])]),t._v(" "),_("td",[t._v("对应用户的密码信息")])])])]),t._v(" "),_("ul",[_("li",[t._v("ES 7.x之前的集群请注意在建表的时候选择正确的"),_("strong",[t._v("索引类型type")])]),t._v(" "),_("li",[t._v("认证方式目前仅支持Http Basic认证，并且需要确保该用户有访问: /_cluster/state/、_nodes/http等路径和index的读权限; 集群未开启安全认证，用户名和密码不需要设置")]),t._v(" "),_("li",[t._v("Doris表中的列名需要和ES中的字段名完全匹配，字段类型应该保持一致")]),t._v(" "),_("li",[_("strong",[t._v("ENGINE")]),t._v("必须是 "),_("strong",[t._v("Elasticsearch")])])]),t._v(" "),_("h5",{attrs:{id:"过滤条件下推"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#过滤条件下推"}},[t._v("#")]),t._v(" 过滤条件下推")]),t._v(" "),_("p",[_("code",[t._v("Doris On ES")]),t._v("一个重要的功能就是过滤条件的下推: 过滤条件下推给ES，这样只有真正满足条件的数据才会被返回，能够显著的提高查询性能和降低Doris和Elasticsearch的CPU、memory、IO使用量")]),t._v(" "),_("p",[t._v("下面的操作符(Operators)会被优化成如下ES Query:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("SQL syntax")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("ES 5.x+ syntax")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("=")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("term query")])]),t._v(" "),_("tr",[_("td",[t._v("in")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("terms query")])]),t._v(" "),_("tr",[_("td",[t._v("> , < , >= , ⇐")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("range query")])]),t._v(" "),_("tr",[_("td",[t._v("and")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("bool.filter")])]),t._v(" "),_("tr",[_("td",[t._v("or")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("bool.should")])]),t._v(" "),_("tr",[_("td",[t._v("not")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("bool.must_not")])]),t._v(" "),_("tr",[_("td",[t._v("not in")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("bool.must_not + terms query")])]),t._v(" "),_("tr",[_("td",[t._v("is_not_null")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("exists query")])]),t._v(" "),_("tr",[_("td",[t._v("is_null")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("bool.must_not + exists query")])]),t._v(" "),_("tr",[_("td",[t._v("esquery")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("ES原生json形式的QueryDSL")])])])]),t._v(" "),_("h5",{attrs:{id:"数据类型映射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据类型映射"}},[t._v("#")]),t._v(" 数据类型映射")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Doris\\ES")]),t._v(" "),_("th",[t._v("byte")]),t._v(" "),_("th",[t._v("short")]),t._v(" "),_("th",[t._v("integer")]),t._v(" "),_("th",[t._v("long")]),t._v(" "),_("th",[t._v("float")]),t._v(" "),_("th",[t._v("double")]),t._v(" "),_("th",[t._v("keyword")]),t._v(" "),_("th",[t._v("text")]),t._v(" "),_("th",[t._v("date")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("tinyint")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("smallint")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("int")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("bigint")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("float")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("double")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("char")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("varchar")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("date")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("√")])]),t._v(" "),_("tr",[_("td",[t._v("datetime")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("√")])])])]),t._v(" "),_("h3",{attrs:{id:"启用列式扫描优化查询速度-enable-docvalue-scan-true"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启用列式扫描优化查询速度-enable-docvalue-scan-true"}},[t._v("#")]),t._v(" 启用列式扫描优化查询速度(enable_docvalue_scan=true)")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test",\n"type" = "doc",\n"user" = "root",\n"password" = "root",\n\n"enable_docvalue_scan" = "true"\n);\n')])])]),_("p",[t._v("参数说明：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("enable_docvalue_scan")])]),t._v(" "),_("td",[t._v("是否开启通过ES/Lucene列式存储获取查询字段的值，默认为false")])])])]),t._v(" "),_("p",[t._v("开启后Doris从ES中获取数据会遵循以下两个原则：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("尽力而为")]),t._v(": 自动探测要读取的字段是否开启列式存储(doc_value: true)，如果获取的字段全部有列存，Doris会从列式存储中获取所有字段的值")]),t._v(" "),_("li",[_("strong",[t._v("自动降级")]),t._v(": 如果要获取的字段只要有一个字段没有列存，所有字段的值都会从行存"),_("code",[t._v("_source")]),t._v("中解析获取")])]),t._v(" "),_("h5",{attrs:{id:"优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势：")]),t._v(" "),_("p",[t._v("默认情况下，Doris On ES会从行存也就是"),_("code",[t._v("_source")]),t._v("中获取所需的所有列，"),_("code",[t._v("_source")]),t._v("的存储采用的行式+json的形式存储，在批量读取性能上要劣于列式存储，尤其在只需要少数列的情况下尤为明显，只获取少数列的情况下，docvalue的性能大约是_source性能的十几倍")]),t._v(" "),_("h5",{attrs:{id:"注意"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("text")]),t._v("类型的字段在ES中是没有列式存储，因此如果要获取的字段值有"),_("code",[t._v("text")]),t._v("类型字段会自动降级为从"),_("code",[t._v("_source")]),t._v("中获取")]),t._v(" "),_("li",[t._v("在获取的字段数量过多的情况下("),_("code",[t._v(">= 25")]),t._v(")，从"),_("code",[t._v("docvalue")]),t._v("中获取字段值的性能会和从"),_("code",[t._v("_source")]),t._v("中获取字段值基本一样")])]),t._v(" "),_("h3",{attrs:{id:"探测keyword类型字段-enable-keyword-sniff-true"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#探测keyword类型字段-enable-keyword-sniff-true"}},[t._v("#")]),t._v(" 探测keyword类型字段(enable_keyword_sniff=true)")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test",\n"type" = "doc",\n"user" = "root",\n"password" = "root",\n\n"enable_keyword_sniff" = "true"\n);\n')])])]),_("p",[t._v("参数说明：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("enable_keyword_sniff")])]),t._v(" "),_("td",[t._v("是否对ES中字符串类型分词类型("),_("strong",[t._v("text")]),t._v(") "),_("code",[t._v("fields")]),t._v(" 进行探测，获取额外的未分词("),_("strong",[t._v("keyword")]),t._v(")字段名(multi-fields机制)")])])])]),t._v(" "),_("p",[t._v("在ES中可以不建立index直接进行数据导入，这时候ES会自动创建一个新的索引，针对字符串类型的字段ES会创建一个既有"),_("code",[t._v("text")]),t._v("类型的字段又有"),_("code",[t._v("keyword")]),t._v("类型的字段，这就是ES的multi fields特性，mapping如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('"k4": {\n   "type": "text",\n   "fields": {\n      "keyword": {   \n         "type": "keyword",\n         "ignore_above": 256\n      }\n   }\n}\n')])])]),_("p",[t._v("对k4进行条件过滤时比如=，Doris On ES会将查询转换为ES的TermQuery")]),t._v(" "),_("p",[t._v("SQL过滤条件：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('k4 = "Doris On ES"\n')])])]),_("p",[t._v("转换成ES的query DSL为：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('"term" : {\n    "k4": "Doris On ES"\n\n}\n')])])]),_("p",[t._v("因为k4的第一字段类型为"),_("code",[t._v("text")]),t._v("，在数据导入的时候就会根据k4设置的分词器(如果没有设置，就是standard分词器)进行分词处理得到doris、on、es三个Term，如下ES analyze API分析：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('POST /_analyze\n{\n  "analyzer": "standard",\n  "text": "Doris On ES"\n}\n')])])]),_("p",[t._v("分词的结果是：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n   "tokens": [\n      {\n         "token": "doris",\n         "start_offset": 0,\n         "end_offset": 5,\n         "type": "<ALPHANUM>",\n         "position": 0\n      },\n      {\n         "token": "on",\n         "start_offset": 6,\n         "end_offset": 8,\n         "type": "<ALPHANUM>",\n         "position": 1\n      },\n      {\n         "token": "es",\n         "start_offset": 9,\n         "end_offset": 11,\n         "type": "<ALPHANUM>",\n         "position": 2\n      }\n   ]\n}\n')])])]),_("p",[t._v("查询时使用的是：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('"term" : {\n    "k4": "Doris On ES"\n}\n')])])]),_("p",[_("code",[t._v("Doris On ES")]),t._v("这个term匹配不到词典中的任何term，不会返回任何结果，而启用"),_("code",[t._v("enable_keyword_sniff: true")]),t._v("会自动将"),_("code",[t._v('k4 = "Doris On ES"')]),t._v("转换成"),_("code",[t._v('k4.keyword = "Doris On ES"')]),t._v("来完全匹配SQL语义，转换后的ES query DSL为:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('"term" : {\n    "k4.keyword": "Doris On ES"\n}\n')])])]),_("p",[_("code",[t._v("k4.keyword")]),t._v(" 的类型是"),_("code",[t._v("keyword")]),t._v("，数据写入ES中是一个完整的term，所以可以匹配")]),t._v(" "),_("h3",{attrs:{id:"开启节点自动发现-默认为true-es-nodes-discovery-true"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开启节点自动发现-默认为true-es-nodes-discovery-true"}},[t._v("#")]),t._v(" 开启节点自动发现, 默认为true(es_nodes_discovery=true)")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test",\n"type" = "doc",\n"user" = "root",\n"password" = "root",\n\n"nodes_discovery" = "true"\n);\n')])])]),_("p",[t._v("参数说明：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("es_nodes_discovery")])]),t._v(" "),_("td",[t._v("是否开启es节点发现，默认为true")])])])]),t._v(" "),_("p",[t._v("当配置为true时，Doris将从ES找到所有可用的相关数据节点(在上面分配的分片)。如果ES数据节点的地址没有被Doris BE访问，则设置为false。ES集群部署在与公共Internet隔离的内网，用户通过代理访问")]),t._v(" "),_("h3",{attrs:{id:"es集群是否开启https访问模式-如果开启应设置为true-默认为false-http-ssl-enabled-true"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es集群是否开启https访问模式-如果开启应设置为true-默认为false-http-ssl-enabled-true"}},[t._v("#")]),t._v(" ES集群是否开启https访问模式，如果开启应设置为"),_("code",[t._v("true")]),t._v("，默认为false(http_ssl_enabled=true)")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test",\n"type" = "doc",\n"user" = "root",\n"password" = "root",\n\n"http_ssl_enabled" = "true"\n);\n')])])]),_("p",[t._v("参数说明：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[t._v("http_ssl_enabled")])]),t._v(" "),_("td",[t._v("ES集群是否开启https访问模式")])])])]),t._v(" "),_("p",[t._v("目前会fe/be实现方式为信任所有，这是临时解决方案，后续会使用真实的用户配置证书")]),t._v(" "),_("h3",{attrs:{id:"查询用法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询用法"}},[t._v("#")]),t._v(" 查询用法")]),t._v(" "),_("p",[t._v("完成在Doris中建立ES外表后，除了无法使用Doris中的数据模型(rollup、预聚合、物化视图等)外并无区别")]),t._v(" "),_("h4",{attrs:{id:"基本查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本查询"}},[t._v("#")]),t._v(" 基本查询")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("select * from es_table where k1 > 1000 and k3 ='term' or k4 like 'fu*z_'\n")])])]),_("h4",{attrs:{id:"扩展的esquery-field-querydsl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扩展的esquery-field-querydsl"}},[t._v("#")]),t._v(" 扩展的esquery(field, QueryDSL)")]),t._v(" "),_("p",[t._v("通过"),_("code",[t._v("esquery(field, QueryDSL)")]),t._v("函数将一些无法用sql表述的query如match_phrase、geoshape等下推给ES进行过滤处理，"),_("code",[t._v("esquery")]),t._v("的第一个列名参数用于关联"),_("code",[t._v("index")]),t._v("，第二个参数是ES的基本"),_("code",[t._v("Query DSL")]),t._v("的json表述，使用花括号"),_("code",[t._v("{}")]),t._v("包含，json的"),_("code",[t._v("root key")]),t._v("有且只能有一个，如match_phrase、geo_shape、bool等")]),t._v(" "),_("p",[t._v("match_phrase查询：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('select * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n')])])]),_("p",[t._v("geo相关查询：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('select * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n')])])]),_("p",[t._v("bool查询：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('select * from es_table where esquery(k4, \' {\n         "bool": {\n            "must": [\n               {\n                  "terms": {\n                     "k1": [\n                        11,\n                        12\n                     ]\n                  }\n               },\n               {\n                  "terms": {\n                     "k2": [\n                        100\n                     ]\n                  }\n               }\n            ]\n         }\n      }\');\n')])])]),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("+----------------------------------------------+\n|                                              |\n| Doris      +------------------+              |\n|            |       FE         +--------------+-------+\n|            |                  |  Request Shard Location\n|            +--+-------------+-+              |       |\n|               ^             ^                |       |\n|               |             |                |       |\n|  +-------------------+ +------------------+  |       |\n|  |            |      | |    |             |  |       |\n|  | +----------+----+ | | +--+-----------+ |  |       |\n|  | |      BE       | | | |      BE      | |  |       |\n|  | +---------------+ | | +--------------+ |  |       |\n+----------------------------------------------+       |\n   |        |          | |        |         |          |\n   |        |          | |        |         |          |\n   |    HTTP SCROLL    | |    HTTP SCROLL   |          |\n+-----------+---------------------+------------+       |\n|  |        v          | |        v         |  |       |\n|  | +------+--------+ | | +------+-------+ |  |       |\n|  | |               | | | |              | |  |       |\n|  | |   DataNode    | | | |   DataNode   +<-----------+\n|  | |               | | | |              | |  |       |\n|  | |               +<--------------------------------+\n|  | +---------------+ | | |--------------| |  |       |\n|  +-------------------+ +------------------+  |       |\n|   Same Physical Node                         |       |\n|                                              |       |\n|           +-----------------------+          |       |\n|           |                       |          |       |\n|           |      MasterNode       +<-----------------+\n| ES        |                       |          |\n|           +-----------------------+          |\n+----------------------------------------------+\n\n\n")])])]),_("ol",[_("li",[_("p",[t._v("创建ES外表后，FE会请求建表指定的主机，获取所有节点的HTTP端口信息以及index的shard分布信息等，如果请求失败会顺序遍历host列表直至成功或完全失败")])]),t._v(" "),_("li",[_("p",[t._v("查询时会根据FE得到的一些节点信息和index的元数据信息，生成查询计划并发给对应的BE节点")])]),t._v(" "),_("li",[_("p",[t._v("BE节点会根据"),_("code",[t._v("就近原则")]),t._v("即优先请求本地部署的ES节点，BE通过"),_("code",[t._v("HTTP Scroll")]),t._v("方式流式的从ES index的每个分片中并发的从"),_("code",[t._v("_source")]),t._v("或"),_("code",[t._v("docvalue")]),t._v("中获取数据")])]),t._v(" "),_("li",[_("p",[t._v("Doris计算完结果后，返回给用户")])])]),t._v(" "),_("h2",{attrs:{id:"最佳实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),_("h3",{attrs:{id:"时间类型字段使用建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时间类型字段使用建议"}},[t._v("#")]),t._v(" 时间类型字段使用建议")]),t._v(" "),_("p",[t._v("在ES中，时间类型的字段使用十分灵活，但是在Doris On ES中如果对时间类型字段的类型设置不当，则会造成过滤条件无法下推")]),t._v(" "),_("p",[t._v("创建索引时对时间类型格式的设置做最大程度的格式兼容:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(' "dt": {\n     "type": "date",\n     "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"\n }\n')])])]),_("p",[t._v("在Doris中建立该字段时建议设置为"),_("code",[t._v("date")]),t._v("或"),_("code",[t._v("datetime")]),t._v(",也可以设置为"),_("code",[t._v("varchar")]),t._v("类型, 使用如下SQL语句都可以直接将过滤条件下推至ES：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("select * from doe where k2 > '2020-06-21';\n\nselect * from doe where k2 < '2020-06-21 12:00:00'; \n\nselect * from doe where k2 < 1593497011; \n\nselect * from doe where k2 < now();\n\nselect * from doe where k2 < date_format(now(), '%Y-%m-%d');\n")])])]),_("p",[t._v("注意:")]),t._v(" "),_("ul",[_("li",[t._v("在ES中如果不对时间类型的字段设置"),_("code",[t._v("format")]),t._v(", 默认的时间类型字段格式为")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("strict_date_optional_time||epoch_millis\n")])])]),_("ul",[_("li",[t._v("导入到ES的日期字段如果是时间戳需要转换成"),_("code",[t._v("ms")]),t._v(", ES内部处理时间戳都是按照"),_("code",[t._v("ms")]),t._v("进行处理的, 否则Doris On ES会出现显示错误")])]),t._v(" "),_("h3",{attrs:{id:"获取es元数据字段-id"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取es元数据字段-id"}},[t._v("#")]),t._v(" 获取ES元数据字段"),_("code",[t._v("_id")])]),t._v(" "),_("p",[t._v("导入文档在不指定"),_("code",[t._v("_id")]),t._v("的情况下ES会给每个文档分配一个全局唯一的"),_("code",[t._v("_id")]),t._v("即主键, 用户也可以在导入时为文档指定一个含有特殊业务意义的"),_("code",[t._v("_id")]),t._v("; 如果需要在Doris On ES中获取该字段值，建表时可以增加类型为"),_("code",[t._v("varchar")]),t._v("的"),_("code",[t._v("_id")]),t._v("字段：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE EXTERNAL TABLE `doe` (\n  `_id` varchar COMMENT "",\n  `city`  varchar COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://127.0.0.1:8200",\n"user" = "root",\n"password" = "root",\n"index" = "doe",\n"type" = "doc"\n}\n')])])]),_("p",[t._v("注意:")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("_id")]),t._v("字段的过滤条件仅支持"),_("code",[t._v("=")]),t._v("和"),_("code",[t._v("in")]),t._v("两种")]),t._v(" "),_("li",[_("code",[t._v("_id")]),t._v("字段只能是"),_("code",[t._v("varchar")]),t._v("类型")])]),t._v(" "),_("h2",{attrs:{id:"q-a"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("Doris On ES对ES的版本要求")]),t._v(" "),_("p",[t._v("ES主版本大于5，ES在2.x之前和5.x之后数据的扫描方式不同，目前支持仅5.x之后的")])]),t._v(" "),_("li",[_("p",[t._v("是否支持X-Pack认证的ES集群")]),t._v(" "),_("p",[t._v("支持所有使用HTTP Basic认证方式的ES集群")])]),t._v(" "),_("li",[_("p",[t._v("一些查询比请求ES慢很多")]),t._v(" "),_("p",[t._v("是，比如_count相关的query等，ES内部会直接读取满足条件的文档个数相关的元数据，不需要对真实的数据进行过滤")])]),t._v(" "),_("li",[_("p",[t._v("聚合操作是否可以下推")]),t._v(" "),_("p",[t._v("目前Doris On ES不支持聚合操作如sum, avg, min/max 等下推，计算方式是批量流式的从ES获取所有满足条件的文档，然后在Doris中进行计算")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);
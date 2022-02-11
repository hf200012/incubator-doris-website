(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1090:function(t,s,a){"use strict";a.r(s);var r=a(56),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bloomfilter索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bloomfilter索引"}},[t._v("#")]),t._v(" BloomFilter索引")]),t._v(" "),a("p",[t._v("BloomFilter是由Bloom在1970年提出的一种多哈希函数映射的快速查找算法。通常应用在一些需要快速判断某个元素是否属于集合，但是并不严格要求100%正确的场合，BloomFilter有以下特点：")]),t._v(" "),a("ul",[a("li",[t._v("空间效率高的概率型数据结构，用来检查一个元素是否在一个集合中。")]),t._v(" "),a("li",[t._v("对于一个元素检测是否存在的调用，BloomFilter会告诉调用者两个结果之一：可能存在或者一定不存在。")]),t._v(" "),a("li",[t._v("缺点是存在误判，告诉你可能存在，不一定真实存在。")])]),t._v(" "),a("p",[t._v("布隆过滤器实际上是由一个超长的二进制位数组和一系列的哈希函数组成。二进制位数组初始全部为0，当给定一个待查询的元素时，这个元素会被一系列哈希函数计算映射出一系列的值，所有的值在位数组的偏移量处置为1。")]),t._v(" "),a("p",[t._v("下图所示出一个 m=18, k=3 （m是该Bit数组的大小，k是Hash函数的个数）的Bloom Filter示例。集合中的 x、y、z 三个元素通过 3 个不同的哈希函数散列到位数组中。当查询元素w时，通过Hash函数计算之后因为有一个比特为0，因此w不在该集合中。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/Bloom_filter.svg.png"),alt:"Bloom_filter.svg"}}),t._v(" "),a("p",[t._v("那么怎么判断谋和元素是否在集合中呢？同样是这个元素经过哈希函数计算后得到所有的偏移位置，若这些位置全都为1，则判断这个元素在这个集合中，若有一个不为1，则判断这个元素不在这个集合中。就是这么简单！")]),t._v(" "),a("h2",{attrs:{id:"doris-bloomfilter索引及使用使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-bloomfilter索引及使用使用场景"}},[t._v("#")]),t._v(" Doris BloomFilter索引及使用使用场景")]),t._v(" "),a("p",[t._v("我们在使用HBase的时候，知道Hbase数据块索引提供了一个有效的方法，在访问一个特定的行时用来查找应该读取的HFile的数据块。但是它的效用是有限的。HFile数据块的默认大小是64KB，这个大小不能调整太多。")]),t._v(" "),a("p",[t._v("如果你要查找一个短行，只在整个数据块的起始行键上建立索引无法给你细粒度的索引信息。例如，如果你的行占用100字节存储空间，一个64KB的数据块包含(64 * 1024)/100 = 655.53 = ~700行，而你只能把起始行放在索引位上。你要查找的行可能落在特定数据块上的行区间里，但也不是肯定存放在那个数据块上。这有多种情况的可能，或者该行在表里不存在，或者存放在另一个HFile里，甚至在MemStore里。这些情况下，从硬盘读取数据块会带来IO开销，也会滥用数据块缓存。这会影响性能，尤其是当你面对一个巨大的数据集并且有很多并发读用户时。")]),t._v(" "),a("p",[t._v("所以HBase提供了布隆过滤器允许你对存储在每个数据块的数据做一个反向测试。当某行被请求时，先检查布隆过滤器看看该行是否不在这个数据块。布隆过滤器要么确定回答该行不在，要么回答它不知道。这就是为什么我们称它是反向测试。布隆过滤器也可以应用到行里的单元上。当访问某列标识符时先使用同样的反向测试。")]),t._v(" "),a("p",[t._v("布隆过滤器也不是没有代价。存储这个额外的索引层次占用额外的空间。布隆过滤器随着它们的索引对象数据增长而增长，所以行级布隆过滤器比列标识符级布隆过滤器占用空间要少。当空间不是问题时，它们可以帮助你榨干系统的性能潜力。")]),t._v(" "),a("p",[t._v("Doris的BloomFilter索引是从通过建表的时候指定，或者通过表的ALTER操作来完成。Bloom Filter本质上是一种位图结构，用于快速的判断一个给定的值是否在一个集合中。这种判断会产生小概率的误判。即如果返回false，则一定不在这个集合内。而如果范围true，则有可能在这个集合内。")]),t._v(" "),a("p",[t._v("BloomFilter索引也是以Block为粒度创建的。每个Block中，指定列的值作为一个集合生成一个BloomFilter索引条目，用于在查询是快速过滤不满足条件的数据。")]),t._v(" "),a("p",[t._v("下面我们通过实例来看看Doris怎么创建BloomFilter索引。")]),t._v(" "),a("h3",{attrs:{id:"创建bloomfilter索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建bloomfilter索引"}},[t._v("#")]),t._v(" 创建BloomFilter索引")]),t._v(" "),a("p",[t._v('Doris BloomFilter索引的创建是通过在建表语句的PROPERTIES里加上"bloom_filter_columns"="k1,k2,k3",这个属性，k1,k2,k3是你要创建的BloomFilter索引的Key列名称，例如下面我们对表里的saler_id,category_id创建了BloomFilter索引。')]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" sale_detail_bloom  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    sale_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"销售时间"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customer_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"客户编号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    saler_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"销售员"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sku_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"商品编号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    category_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"商品分类"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sale_count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"销售数量"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sale_price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"单价"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sale_amt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"销售总金额"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Duplicate")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sale_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" customer_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("saler_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("category_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" RANGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sale_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" P_202111 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-12-01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTRIBUTED")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saler_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" BUCKETS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replication_num"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bloom_filter_columns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"saler_id,category_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.enable"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.time_unit"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MONTH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.time_zone"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Shanghai"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.start"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-2147483648"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.end"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.prefix"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"P_"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.replication_num"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.buckets"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"查看bloomfilter索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看bloomfilter索引"}},[t._v("#")]),t._v(" 查看BloomFilter索引")]),t._v(" "),a("p",[t._v("查看我们在表上建立的BloomFilter索引是使用:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SHOW CREATE TABLE <table_name>\n")])])]),a("h3",{attrs:{id:"删除bloomfilter索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除bloomfilter索引"}},[t._v("#")]),t._v(" 删除BloomFilter索引")]),t._v(" "),a("p",[t._v("删除索引即为将索引列从bloom_filter_columns属性中移除：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE <db.table_name> SET ("bloom_filter_columns" = "");\n')])])]),a("h3",{attrs:{id:"修改bloomfilter索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改bloomfilter索引"}},[t._v("#")]),t._v(" 修改BloomFilter索引")]),t._v(" "),a("p",[t._v("修改索引即为修改表的bloom_filter_columns属性：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE <db.table_name> SET ("bloom_filter_columns" = "k1,k3");\n')])])]),a("h3",{attrs:{id:"doris-bloomfilter使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-bloomfilter使用场景"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Doris BloomFilter使用场景")])]),t._v(" "),a("p",[t._v("满足以下几个条件时可以考虑对某列建立Bloom Filter 索引：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先BloomFilter适用于非前缀过滤.")])]),t._v(" "),a("li",[a("p",[t._v("查询会根据该列高频过滤，而且查询条件大多是in和 = 过滤.")])]),t._v(" "),a("li",[a("p",[t._v("不同于Bitmap, BloomFilter适用于高基数列。比如UserID。因为如果创建在低基数的列上，比如”性别“列，则每个Block几乎都会包含所有取值，导致BloomFilter索引失去意义")])])]),t._v(" "),a("h3",{attrs:{id:"doris-bloomfilter使用注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-bloomfilter使用注意事项"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Doris BloomFilter使用注意事项")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不支持对Tinyint、Float、Double 类型的列建Bloom Filter索引。")])]),t._v(" "),a("li",[a("p",[t._v("Bloom Filter索引只对in和 = 过滤查询有加速效果。")])]),t._v(" "),a("li",[a("p",[t._v("如果要查看某个查询是否命中了Bloom Filter索引，可以通过查询的Profile信息查看")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
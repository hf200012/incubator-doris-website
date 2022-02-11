(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1183:function(_,t,a){"use strict";a.r(t);var e=a(56),s=Object(e.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"query-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-cache"}},[_._v("#")]),_._v(" QUERY CACHE")]),_._v(" "),a("h2",{attrs:{id:"_1-需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-需求"}},[_._v("#")]),_._v(" 1 需求")]),_._v(" "),a("p",[_._v("虽然在数据库存储层也做了对应的缓存，但这种数据库存储层的缓存一般针对的是查询内容，而且粒度也太小，一般只有表中数据没有变更的时候，数据库对应的cache才发挥了作用。 但这并不能减少业务系统对数据库进行增删改查所带来的庞大的IO压力。所以数据库缓存技术在此诞生，实现热点数据的高速缓存，提高应用的响应速度，极大缓解后端数据库的压力")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("高并发场景\nDoris可以较好地支持高并发，但单台服务器无法承载太高的QPS")])]),_._v(" "),a("li",[a("p",[_._v("复杂图表的看板\n复杂的Dashboard或者大屏类应用，数据来自多张表，每个页面有数十个查询，虽然每个查询只有数十毫秒，但是总体查询时间会在数秒")])]),_._v(" "),a("li",[a("p",[_._v("趋势分析\n给定日期范围的查询，指标按日显示，比如查询最近7天内的用户数的趋势，这类查询数据量大，查询范围广，查询时间往往需要数十秒")])]),_._v(" "),a("li",[a("p",[_._v("用户重复查询\n如果产品没有防重刷机制，用户因手误或其他原因重复刷新页面，导致提交大量的重复的SQL")])])]),_._v(" "),a("p",[_._v("以上四种场景，一种在应用层的解决方案是把查询结果放到Redis中，周期性地更新缓存或者用户手动刷新缓存，但是这个方案有如下问题：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("数据不一致\n无法感知数据的更新，导致用户经常看到旧的数据")])]),_._v(" "),a("li",[a("p",[_._v("命中率低\n缓存整个查询结果，如果数据实时写入，缓存频繁失效，命中率低且系统负载较重")])]),_._v(" "),a("li",[a("p",[_._v("额外成本\n引入外部缓存组件，会带来系统复杂度，增加额外成本")])])]),_._v(" "),a("h2",{attrs:{id:"_2-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案"}},[_._v("#")]),_._v(" 2 解决方案")]),_._v(" "),a("p",[_._v("目前我们设计出结果缓存和分区缓存两个模块")]),_._v(" "),a("h2",{attrs:{id:"_3-名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-名词解释"}},[_._v("#")]),_._v(" 3 名词解释")]),_._v(" "),a("ol",[a("li",[_._v("结果缓存 result_cache")])]),_._v(" "),a("p",[_._v("针对用户的sql直接缓存查询的结果集合")]),_._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[_._v("分区缓存 partition_cache")])]),_._v(" "),a("p",[_._v("在partition粒度做针对每个分区查询的结果缓存")]),_._v(" "),a("h2",{attrs:{id:"_4-设计原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设计原理"}},[_._v("#")]),_._v(" 4 设计原理")]),_._v(" "),a("h3",{attrs:{id:"_1-结果缓存-result-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-结果缓存-result-cache"}},[_._v("#")]),_._v(" 1 结果缓存 "),a("code",[_._v("result_cache")])]),_._v(" "),a("p",[_._v("result_cache 分两种 第一种为 result_cache_ttl 第二种为 result_cache_version")]),_._v(" "),a("h4",{attrs:{id:"result-cache-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result-cache-ttl"}},[_._v("#")]),_._v(" "),a("code",[_._v("result_cache_ttl")])]),_._v(" "),a("p",[_._v("result_cache_ttl 变量设置在用户Session中，用户可自定义是否开启,通过ttl时间来确定用户的sql是否使用缓存，"),a("code",[_._v("这里数据变更时不保证数据的正确性")]),_._v("\n按照 用户 connectid,和查询的sql 来存储和获取缓存，超过缓存失效时间则命中不了缓存，该缓存也会被清理")]),_._v(" "),a("h4",{attrs:{id:"result-cache-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result-cache-version"}},[_._v("#")]),_._v(" "),a("code",[_._v("result_cache_version")])]),_._v(" "),a("p",[_._v("result_cache_version 按SQL的签名、查询的表的分区ID、分区最新版本来存储和获取缓存。三者组合确定一个缓存数据集，任何一个变化了，如SQL有变化，如查询字段或条件不一样，或数据更新后版本变化了，会导致命中不了缓存。")]),_._v(" "),a("p",[_._v("如果多张表Join，使用最近更新的分区ID和最新的版本号，如果其中一张表更新了，会导致分区ID或版本号不一样，也一样命中不了缓存。")]),_._v(" "),a("h3",{attrs:{id:"_2-分区缓存-partition-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分区缓存-partition-cache"}},[_._v("#")]),_._v(" 2 分区缓存 "),a("code",[_._v("partition_cache")])]),_._v(" "),a("ol",[a("li",[_._v("SQL可以并行拆分，Q = Q1 ∪ Q2 ... ∪ Qn，R= R1 ∪ R2 ... ∪ Rn，Q为查询语句，R为结果集")]),_._v(" "),a("li",[_._v("拆分为只读分区和可更新分区，只读分区缓存，更新分区不缓存")])]),_._v(" "),a("h3",{attrs:{id:"_5-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用场景"}},[_._v("#")]),_._v(" 5 使用场景")]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("缓存类型")]),_._v(" "),a("th",[_._v("使用场景")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[_._v("result_cache_ttl")]),_._v(" "),a("td",[_._v("主要解决高QPS，用户重复查询的场景")])]),_._v(" "),a("tr",[a("td",[_._v("result_cache_version")]),_._v(" "),a("td",[_._v("主要解决整张表长时间没有变更的场景")])]),_._v(" "),a("tr",[a("td",[_._v("partition_cache")]),_._v(" "),a("td",[_._v("主要解决历史分区不变更的场景")])])])]),_._v(" "),a("h2",{attrs:{id:"_6-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-参数"}},[_._v("#")]),_._v(" 6 参数")]),_._v(" "),a("h3",{attrs:{id:"fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe"}},[_._v("#")]),_._v(" fe")]),_._v(" "),a("h4",{attrs:{id:"cache-开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-开关"}},[_._v("#")]),_._v(" cache 开关")]),_._v(" "),a("ol",[a("li",[a("code",[_._v("enable_result_cache_ttl")])])]),_._v(" "),a("ul",[a("li",[_._v("解释:  enable_result_cache_ttl 开关")]),_._v(" "),a("li",[_._v("默认值：false")])]),_._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[_._v("enable_result_cache_version")])])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("解释：结果集缓存针对table版本的的开关")])]),_._v(" "),a("li",[a("p",[_._v("默认值：false")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("enable_partition_cache")])])]),_._v(" "),a("li",[a("p",[_._v("解释：分区缓存 开关")])]),_._v(" "),a("li",[a("p",[_._v("默认值：false")])])]),_._v(" "),a("h4",{attrs:{id:"每个查询是否缓存的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个查询是否缓存的限制"}},[_._v("#")]),_._v(" 每个查询是否缓存的限制")]),_._v(" "),a("ol",[a("li",[a("code",[_._v("cache_per_query_max_row_count")])])]),_._v(" "),a("ul",[a("li",[_._v("缓存每个查询最大的行数")]),_._v(" "),a("li",[_._v("默认值 3000")])]),_._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[_._v("cache_per_query_max_size_in_bytes")])])]),_._v(" "),a("ul",[a("li",[_._v("缓存每次查询的大小，单位bytes")]),_._v(" "),a("li",[_._v("默认值 1Mb")])]),_._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[_._v("result_cache_ttl_in_milliseconds")])])]),_._v(" "),a("ul",[a("li",[_._v("result cache 缓存时长")]),_._v(" "),a("li",[_._v("默认值 3s")])]),_._v(" "),a("h3",{attrs:{id:"be"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be"}},[_._v("#")]),_._v(" be")]),_._v(" "),a("ol",[a("li",[a("code",[_._v("cache_max_partition_count")])])]),_._v(" "),a("ul",[a("li",[_._v("parition cache 最大缓存分区数")]),_._v(" "),a("li",[_._v("默认值：1024")])]),_._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[_._v("cache_max_size_in_mb")]),_._v(" "),a("code",[_._v("cache_elasticity_size_in_mb")])])]),_._v(" "),a("ul",[a("li",[_._v("BE中缓存内存设置，有两个参数cache_max_size_in_mb和cache_elasticity_size_in_mb），内存超过cache_max_size_in_mb+cache_elasticity_size_in_mb会开始清理，并把内存控制到cache_max_size_in_mb以下。可以根据BE节点数量，节点内存大小，和缓存命中率来设置这两个参数。")])]),_._v(" "),a("h2",{attrs:{id:"_7-如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何使用"}},[_._v("#")]),_._v(" 7 如何使用")]),_._v(" "),a("ul",[a("li",[_._v("use enable_result_cache_ttl")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("set `global`  enable_result_cache_ttl =true\n")])])]),a("ul",[a("li",[_._v("use enable_result_cache_version")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("set `global` enable_result_cache_version = true\n")])])]),a("ul",[a("li",[_._v("use enable_partition_cache")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("set `global` enable_partition_cache = true\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
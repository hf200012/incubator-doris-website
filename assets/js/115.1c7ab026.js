(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{571:function(e,t,n){"use strict";n.r(t);var i=n(56),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"runtime-filter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#runtime-filter"}},[e._v("#")]),e._v(" Runtime Filter")]),e._v(" "),n("p",[e._v("Runtime Filter is a new feature officially added in Doris 0.15. It is designed to dynamically generate filter conditions for certain Join queries at runtime to reduce the amount of scanned data, avoid unnecessary I/O and network transmission, and speed up the query.")]),e._v(" "),n("p",[e._v("It's design, implementation and effects, please refer to "),n("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/6116",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE 6116"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"noun-interpretation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),n("ul",[n("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),n("li",[e._v("BE: Backend, the back-end node of Doris. Responsible for query execution and data storage.")]),e._v(" "),n("li",[e._v("Left table: the table on the left during Join query. Perform Probe operation. The order can be adjusted by Join Reorder.")]),e._v(" "),n("li",[e._v("Right table: the table on the right during Join query. Perform the Build operation. The order can be adjusted by Join Reorder.")]),e._v(" "),n("li",[e._v("Fragment: FE will convert the execution of specific SQL statements into corresponding fragments and send them to BE for execution. The corresponding Fragment is executed on the BE, and the results are aggregated and returned to the FE.")]),e._v(" "),n("li",[e._v("Join on clause: "),n("code",[e._v("Aa=Bb")]),e._v(" in "),n("code",[e._v("A join B on Aa=Bb")]),e._v(", based on this to generate join conjuncts during query planning, including expr used by join Build and Probe, where Build expr is called in Runtime Filter src expr, Probe expr are called target expr in Runtime Filter.")])]),e._v(" "),n("h2",{attrs:{id:"principle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),n("p",[e._v("Runtime Filter is generated during query planning, constructed in HashJoinNode, and applied in ScanNode.")]),e._v(" "),n("p",[e._v("For example, there is currently a Join query between the T1 table and the T2 table. Its Join mode is HashJoin. T1 is a fact table with 100,000 rows of data. T2 is a dimension table with 2000 rows of data. Doris join The actual situation is:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|          >      HashJoinNode     <\n|         |                         |\n|         | 100000                  | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 100000                  | 2000\n|        T1                        T2\n|\n")])])]),n("p",[e._v("Obviously, scanning data for T2 is much faster than T1. If we take the initiative to wait for a while and then scan T1, after T2 sends the scanned data record to HashJoinNode, HashJoinNode calculates a filter condition based on the data of T2, such as the maximum value of T2 data And the minimum value, or build a Bloom Filter, and then send this filter condition to ScanNode waiting to scan T1, the latter applies this filter condition and delivers the filtered data to HashJoinNode, thereby reducing the number of probe hash tables and network overhead. This filter condition is Runtime Filter, and the effect is as follows:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|          >      HashJoinNode     <\n|         |                         |\n|         | 6000                    | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 100000                  | 2000\n|        T1                        T2\n|\n")])])]),n("p",[e._v("If the filter condition (Runtime Filter) can be pushed down to the storage engine, in some cases, the index can be used to directly reduce the amount of scanned data, thereby greatly reducing the scanning time. The effect is as follows:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|          >      HashJoinNode     <\n|         |                         |\n|         | 6000                    | 2000\n|         |                         |\n|   OlapScanNode              OlapScanNode\n|         ^                         ^   \n|         | 6000                    | 2000\n|        T1                        T2\n|\n")])])]),n("p",[e._v("It can be seen that, unlike predicate push-down and partition cutting, Runtime Filter is a filter condition dynamically generated at runtime, that is, when the query is run, the join on clause is parsed to determine the filter expression, and the expression is broadcast to ScanNode that is reading the left table , Thereby reducing the amount of scanned data, thereby reducing the number of probe hash table, avoiding unnecessary I/O and network transmission.")]),e._v(" "),n("p",[e._v("Runtime Filter is mainly used to optimize joins for large tables. If the amount of data in the left table is too small, or the amount of data in the right table is too large, the Runtime Filter may not achieve the expected effect.")]),e._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),n("h3",{attrs:{id:"runtime-filter-query-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#runtime-filter-query-options"}},[e._v("#")]),e._v(" Runtime Filter query options")]),e._v(" "),n("p",[e._v("For query options related to Runtime Filter, please refer to the following sections:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The first query option is to adjust the type of Runtime Filter used. In most cases, you only need to adjust this option, and keep the other options as default.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("runtime_filter_type")]),e._v(": Including Bloom Filter, MinMax Filter, IN predicate and IN_OR_BLOOM Filter. By default, only IN_OR_BLOOM Filter will be used. In some cases, the performance will be higher when both Bloom Filter, MinMax Filter and IN predicate are used at the same time.")])])]),e._v(" "),n("li",[n("p",[e._v("Other query options usually only need to be further adjusted in certain specific scenarios to achieve the best results. Usually only after performance testing, optimize for resource-intensive, long enough running time and high enough frequency queries.")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("runtime_filter_mode")]),e._v(": Used to adjust the push-down strategy of Runtime Filter, including three strategies of OFF, LOCAL, and GLOBAL. The default setting is the GLOBAL strategy")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("runtime_filter_wait_time_ms")]),e._v(": the time that ScanNode in the left table waits for each Runtime Filter, the default is 1000ms")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("runtime_filters_max_num")]),e._v(": The maximum number of Bloom Filters in the Runtime Filter that can be applied to each query, the default is 10")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("runtime_bloom_filter_min_size")]),e._v(": the minimum length of Bloom Filter in Runtime Filter, default 1048576 (1M)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("runtime_bloom_filter_max_size")]),e._v(": the maximum length of Bloom Filter in Runtime Filter, the default is 16777216 (16M)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("runtime_bloom_filter_size")]),e._v(": The default length of Bloom Filter in Runtime Filter, the default is 2097152 (2M)")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("runtime_filter_max_in_num")]),e._v(": If the number of rows in the right table of the join is greater than this value, we will not generate an IN predicate, the default is 1024")])])])])]),e._v(" "),n("p",[e._v("The query options are further explained below.")]),e._v(" "),n("h4",{attrs:{id:"_1-runtime-filter-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-runtime-filter-type"}},[e._v("#")]),e._v(" 1.runtime_filter_type")]),e._v(" "),n("p",[e._v("Type of Runtime Filter used.")]),e._v(" "),n("p",[n("strong",[e._v("Type")]),e._v(": Number (1, 2, 4, 8) or the corresponding mnemonic string (IN, BLOOM_FILTER, MIN_MAX, IN_OR_BLOOM_FILTER), the default is 8 (IN_OR_BLOOM FILTER), use multiple commas to separate, pay attention to the need to add quotation marks , Or add any number of types, for example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('set runtime_filter_type="BLOOM_FILTER,IN,MIN_MAX";\n')])])]),n("p",[e._v("Equivalent to:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("set runtime_filter_type=7;\n")])])]),n("p",[n("strong",[e._v("Precautions for use")])]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("IN or Bloom Filter")]),e._v(": According to the actual number of rows in the right table during execution, the system automatically determines whether to use IN predicate or Bloom Filter.")]),e._v(" "),n("ul",[n("li",[e._v("By default, IN Predicate will be used when the number of data rows in the right table is less than 1024 (which can be adjusted by ` runtime_filter_max_in_num 'in the session variable). Otherwise, use bloom filter.")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Bloom Filter")]),e._v(": There is a certain misjudgment rate, which results in the filtered data being a little less than expected, but it will not cause the final result to be inaccurate. In most cases, Bloom Filter can improve performance or has no significant impact on performance, but in some cases Under circumstances will cause performance degradation.")]),e._v(" "),n("ul",[n("li",[e._v("Bloom Filter construction and application overhead is high, so when the filtering rate is low, or the amount of data in the left table is small, Bloom Filter may cause performance degradation.")]),e._v(" "),n("li",[e._v("At present, only the Key column of the left table can be pushed down to the storage engine if the Bloom Filter is applied, and the test results show that the performance of the Bloom Filter is often reduced when the Bloom Filter is not pushed down to the storage engine.")]),e._v(" "),n("li",[e._v("Currently Bloom Filter only has short-circuit logic when using expression filtering on ScanNode, that is, when the false positive rate is too high, the Bloom Filter will not continue to be used, but there is no short-circuit logic when the Bloom Filter is pushed down to the storage engine , So when the filtration rate is low, it may cause performance degradation.")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("MinMax Filter")]),e._v(": Contains the maximum value and the minimum value, thereby filtering data smaller than the minimum value and greater than the maximum value. The filtering effect of the MinMax Filter is related to the type of the Key column in the join on clause and the data distribution of the left and right tables.")]),e._v(" "),n("ul",[n("li",[e._v("When the type of the Key column in the join on clause is int/bigint/double, etc., in extreme cases, if the maximum and minimum values ​​of the left and right tables are the same, there is no effect, otherwise the maximum value of the right table is less than the minimum value of the left table, or the minimum of the right table The value is greater than the maximum value in the left table, the effect is best.")]),e._v(" "),n("li",[e._v("When the type of the Key column in the join on clause is varchar, etc., applying the MinMax Filter will often cause performance degradation.")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("IN predicate")]),e._v(": Construct IN predicate based on all the values ​​of Key listed in the join on clause on the right table, and use the constructed IN predicate to filter on the left table. Compared with Bloom Filter, the cost of construction and application is lower. The amount of data in the right table is lower. When it is less, it tends to perform better.")]),e._v(" "),n("ul",[n("li",[e._v("By default, only the number of data rows in the right table is less than 1024 will be pushed down (can be adjusted by "),n("code",[e._v("runtime_filter_max_in_num")]),e._v(" in the session variable).")]),e._v(" "),n("li",[e._v("Currently IN predicate already implement a merge method.")]),e._v(" "),n("li",[e._v("When IN predicate and other filters are specified at the same time, and the filtering value of IN predicate does not reach runtime_filter_max_in_num will try to remove other filters. The reason is that IN predicate is an accurate filtering condition. Even if there is no other filter, it can filter efficiently. If it is used at the same time, other filters will do useless work. Currently, only when the producer and consumer of the runtime filter are in the same fragment can there be logic to remove the Non-IN predicate.")])])])]),e._v(" "),n("h4",{attrs:{id:"_2-runtime-filter-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-runtime-filter-mode"}},[e._v("#")]),e._v(" 2.runtime_filter_mode")]),e._v(" "),n("p",[e._v("Used to control the transmission range of Runtime Filter between instances.")]),e._v(" "),n("p",[n("strong",[e._v("Type")]),e._v(": Number (0, 1, 2) or corresponding mnemonic string (OFF, LOCAL, GLOBAL), default 2 (GLOBAL).")]),e._v(" "),n("p",[n("strong",[e._v("Precautions for use")])]),e._v(" "),n("p",[e._v("LOCAL: Relatively conservative, the constructed Runtime Filter can only be used in the same Fragment on the same instance (the smallest unit of query execution), that is, the Runtime Filter producer (the HashJoinNode that constructs the Filter) and the consumer (the ScanNode that uses the RuntimeFilter) The same Fragment, such as the general scene of broadcast join;")]),e._v(" "),n("p",[e._v("GLOBAL: Relatively radical. In addition to satisfying the scenario of the LOCAL strategy, the Runtime Filter can also be combined and transmitted to different Fragments on different instances via the network. For example, the Runtime Filter producer and consumer are in different Fragments, such as shuffle join.")]),e._v(" "),n("p",[e._v("In most cases, the GLOBAL strategy can optimize queries in a wider range of scenarios, but in some shuffle joins, the cost of generating and merging Runtime Filters exceeds the performance advantage brought to the query, and you can consider changing to the LOCAL strategy.")]),e._v(" "),n("p",[e._v("If the join query involved in the cluster does not improve performance due to Runtime Filter, you can change the setting to OFF to completely turn off the function.")]),e._v(" "),n("p",[e._v("When building and applying Runtime Filters on different Fragments, the reasons and strategies for merging Runtime Filters can be found in "),n("a",{attrs:{href:"https://github.com/apache/incubator-doris/issues/6116",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISSUE 6116"),n("OutboundLink")],1)]),e._v(" "),n("h4",{attrs:{id:"_3-runtime-filter-wait-time-ms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-runtime-filter-wait-time-ms"}},[e._v("#")]),e._v(" 3.runtime_filter_wait_time_ms")]),e._v(" "),n("p",[e._v("Waiting for Runtime Filter is time consuming.")]),e._v(" "),n("p",[n("strong",[e._v("Type")]),e._v(": integer, default 1000, unit ms")]),e._v(" "),n("p",[n("strong",[e._v("Precautions for use")])]),e._v(" "),n("p",[e._v("After the Runtime Filter is turned on, the ScanNode in the table on the left will wait for a period of time for each Runtime Filter assigned to itself before scanning the data, that is, if the ScanNode is assigned 3 Runtime Filters, it will wait at most 3000ms.")]),e._v(" "),n("p",[e._v("Because it takes time to build and merge the Runtime Filter, ScanNode will try to push down the Runtime Filter that arrives within the waiting time to the storage engine. If the waiting time is exceeded, ScanNode will directly start scanning data using the Runtime Filter that has arrived.")]),e._v(" "),n("p",[e._v("If the Runtime Filter arrives after ScanNode starts scanning, ScanNode will not push the Runtime Filter down to the storage engine. Instead, it will use expression filtering on ScanNode based on the Runtime Filter for the data that has been scanned from the storage engine. The scanned data will not apply the Runtime Filter, so the intermediate data size obtained will be larger than the optimal solution, but serious cracking can be avoided.")]),e._v(" "),n("p",[e._v("If the cluster is busy and there are many resource-intensive or long-time-consuming queries on the cluster, consider increasing the waiting time to avoid missing optimization opportunities for complex queries. If the cluster load is light, and there are many small queries on the cluster that only take a few seconds, you can consider reducing the waiting time to avoid an increase of 1s for each query.")]),e._v(" "),n("h4",{attrs:{id:"_4-runtime-filters-max-num"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-runtime-filters-max-num"}},[e._v("#")]),e._v(" 4.runtime_filters_max_num")]),e._v(" "),n("p",[e._v("The upper limit of the number of Bloom Filters in the Runtime Filter generated by each query.")]),e._v(" "),n("p",[n("strong",[e._v("Type")]),e._v(": integer, default 10")]),e._v(" "),n("p",[n("strong",[e._v("Precautions for use")]),e._v("\nCurrently, only the number of Bloom Filters is limited, because the construction and application of Bloom Filters are more expensive than MinMax Filter and IN predicate.")]),e._v(" "),n("p",[e._v("If the number of Bloom Filters generated exceeds the maximum allowable number, then the Bloom Filter with a large selectivity is retained. A large selectivity means that more rows are expected to be filtered. This setting can prevent Bloom Filter from consuming too much memory overhead and causing potential problems.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Selectivity = (HashJoinNode Cardinality / HashJoinNode left child Cardinality)\n- Because the cardinality of FE is currently inaccurate, the selectivity of Bloom Filter calculation here is inaccurate, so in the end, it may only randomly reserve part of Bloom Filter.\n")])])]),n("p",[e._v("This query option needs to be adjusted only when tuning some long-consuming queries involving joins between large tables.")]),e._v(" "),n("h4",{attrs:{id:"_5-bloom-filter-length-related-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-bloom-filter-length-related-parameters"}},[e._v("#")]),e._v(" 5. Bloom Filter length related parameters")]),e._v(" "),n("p",[e._v("Including "),n("code",[e._v("runtime_bloom_filter_min_size")]),e._v(", "),n("code",[e._v("runtime_bloom_filter_max_size")]),e._v(", "),n("code",[e._v("runtime_bloom_filter_size")]),e._v(", used to determine the size (in bytes) of the Bloom Filter data structure used by the Runtime Filter.")]),e._v(" "),n("p",[n("strong",[e._v("Type")]),e._v(": Integer")]),e._v(" "),n("p",[n("strong",[e._v("Precautions for use")]),e._v("\nBecause it is necessary to ensure that the length of the Bloom Filter constructed by each HashJoinNode is the same to be merged, the length of the Bloom Filter is currently calculated in the FE query planning.")]),e._v(" "),n("p",[e._v("If you can get the number of data rows (Cardinality) in the statistical information of the join right table, it will try to estimate the optimal size of the Bloom Filter based on Cardinality, and round to the nearest power of 2 (log value with the base 2). If the Cardinality of the table on the right cannot be obtained, the default Bloom Filter length "),n("code",[e._v("runtime_bloom_filter_size")]),e._v(" will be used. "),n("code",[e._v("runtime_bloom_filter_min_size")]),e._v(" and "),n("code",[e._v("runtime_bloom_filter_max_size")]),e._v(" are used to limit the minimum and maximum length of the final Bloom Filter.")]),e._v(" "),n("p",[e._v("Larger Bloom Filters are more effective when processing high-cardinality input sets, but require more memory. If the query needs to filter high cardinality columns (for example, containing millions of different values), you can consider increasing the value of "),n("code",[e._v("runtime_bloom_filter_size")]),e._v(" for some benchmark tests, which will help make the Bloom Filter filter more accurate, so as to obtain the expected Performance improvement.")]),e._v(" "),n("p",[e._v("The effectiveness of Bloom Filter depends on the data distribution of the query, so it is usually only for some specific queries to additionally adjust the length of the Bloom Filter, rather than global modification, generally only for some long time-consuming queries involving joins between large tables. Only when you need to adjust this query option.")]),e._v(" "),n("h3",{attrs:{id:"view-runtime-filter-generated-by-query"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#view-runtime-filter-generated-by-query"}},[e._v("#")]),e._v(" View Runtime Filter generated by query")]),e._v(" "),n("p",[e._v("The query plan that can be displayed by the "),n("code",[e._v("explain")]),e._v(" command includes the join on clause information used by each Fragment, as well as comments on the generation and use of the Runtime Filter by the Fragment, so as to confirm whether the Runtime Filter is applied to the desired join on clause.")]),e._v(" "),n("ul",[n("li",[e._v("The comment contained in the Fragment that generates the Runtime Filter, such as "),n("code",[e._v("runtime filters: filter_id[type] <- table.column")]),e._v(".")]),e._v(" "),n("li",[e._v("Use the comment contained in the fragment of Runtime Filter such as "),n("code",[e._v("runtime filters: filter_id[type] -> table.column")]),e._v(".")])]),e._v(" "),n("p",[e._v("The query in the following example uses a Runtime Filter with ID RF000.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('CREATE TABLE test (t1 INT) DISTRIBUTED BY HASH (t1) BUCKETS 2 PROPERTIES("replication_num" = "1");\nINSERT INTO test VALUES (1), (2), (3), (4);\n\nCREATE TABLE test2 (t2 INT) DISTRIBUTED BY HASH (t2) BUCKETS 2 PROPERTIES("replication_num" = "1");\nINSERT INTO test2 VALUES (3), (4), (5);\n\nEXPLAIN SELECT t1 FROM test JOIN test2 where test.t1 = test2.t2;\n+-------------------------------------------------------------------+\n| Explain String                                                    |\n+-------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                   |\n|  OUTPUT EXPRS:`t1`                                                |\n|                                                                   |\n|   4:EXCHANGE                                                      |\n|                                                                   |\n| PLAN FRAGMENT 1                                                   |\n|  OUTPUT EXPRS:                                                    |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:ssb`.`test`.`t1`  |\n|                                                                   |\n|   2:HASH JOIN                                                     |\n|   |  join op: INNER JOIN (BUCKET_SHUFFLE)                         |\n|   |  equal join conjunct: `test`.`t1` = `test2`.`t2`              |\n|   |  runtime filters: RF000[in] <- `test2`.`t2`                   |\n|   |                                                               |\n|   |----3:EXCHANGE                                                 |\n|   |                                                               |\n|   0:OlapScanNode                                                  |\n|      TABLE: test                                                  |\n|      runtime filters: RF000[in] -> `test`.`t1`                    |\n|                                                                   |\n| PLAN FRAGMENT 2                                                   |\n|  OUTPUT EXPRS:                                                    |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:ssb`.`test2`.`t2` |\n|                                                                   |\n|   1:OlapScanNode                                                  |\n|      TABLE: test2                                                 |\n+-------------------------------------------------------------------+\n-- The line of `runtime filters` above shows that `2:HASH JOIN` of `PLAN FRAGMENT 1` generates IN predicate with ID RF000,\n-- Among them, the key values of `test2`.`t2` are only known at runtime,\n-- This IN predicate is used in `0:OlapScanNode` to filter unnecessary data when reading `test`.`t1`.\n\nSELECT t1 FROM test JOIN test2 where test.t1 = test2.t2; \n-- Return 2 rows of results [3, 4];\n\n-- Through the query profile (set enable_profile=true;) you can view the detailed information of the internal work of the query,\n-- Including whether each Runtime Filter is pushed down, waiting time, \n-- and the total time from prepare to receiving Runtime Filter for OLAP_SCAN_NODE.\nRuntimeFilter:in:\n    -  HasPushDownToEngine:  true\n    -  AWaitTimeCost:  0ns\n    -  EffectTimeCost:  2.76ms\n\n-- In addition, in the OLAP_SCAN_NODE of the profile, you can also view the filtering effect \n-- and time consumption after the Runtime Filter is pushed down.\n    -  RowsVectorPredFiltered:  9.320008M  (9320008)\n    -  VectorPredEvalTime:  364.39ms\n')])])]),n("h2",{attrs:{id:"runtime-filter-planning-rules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#runtime-filter-planning-rules"}},[e._v("#")]),e._v(" Runtime Filter planning rules")]),e._v(" "),n("ol",[n("li",[e._v("Only support the generation of Runtime Filter for the equivalent conditions in the join on clause, excluding the Null-safe condition, because it may filter out the null value of the join left table.")]),e._v(" "),n("li",[e._v("Does not support pushing down Runtime Filter to the left table of left outer, full outer, and anti join;")]),e._v(" "),n("li",[e._v("Does not support src expr or target expr is constant;")]),e._v(" "),n("li",[e._v("The equality of src expr and target expr is not supported;")]),e._v(" "),n("li",[e._v("The type of src expr is not supported to be equal to "),n("code",[e._v("HLL")]),e._v(" or "),n("code",[e._v("BITMAP")]),e._v(";")]),e._v(" "),n("li",[e._v("Currently only supports pushing down Runtime Filter to OlapScanNode;")]),e._v(" "),n("li",[e._v("Target expr does not support NULL-checking expressions, such as "),n("code",[e._v("COALESCE/IFNULL/CASE")]),e._v(", because when the join on clause of other joins at the upper level of the outer join contains NULL-checking expressions and a Runtime Filter is generated, this Runtime Filter is downloaded Pushing to the left table of outer join may cause incorrect results;")]),e._v(" "),n("li",[e._v("The column (slot) in target expr is not supported, and an equivalent column cannot be found in the original table;")]),e._v(" "),n("li",[e._v("Column conduction is not supported. This includes two cases:\n"),n("ul",[n("li",[e._v("First, when the join on clause contains A.k = B.k and B.k = C.k, currently C.k can only be pushed down to B.k, but not to A.k;")]),e._v(" "),n("li",[e._v("Second, for example, the join on clause contains Aa + Bb = Cc. If Aa can be transmitted to Ba, that is, Aa and Ba are equivalent columns, then you can replace Aa with Ba, and then you can try to push the Runtime Filter down to B ( If Aa and Ba are not equivalent columns, they cannot be pushed down to B, because target expr must be bound to the only join left table);")])])]),e._v(" "),n("li",[e._v("The types of Target expr and src expr must be equal, because Bloom Filter is based on hash, if the types are not equal, it will try to convert the type of target expr to the type of src expr;")]),e._v(" "),n("li",[e._v("The Runtime Filter generated by "),n("code",[e._v("PlanNode.Conjuncts")]),e._v(" is not supported. Unlike HashJoinNode's "),n("code",[e._v("eqJoinConjuncts")]),e._v(" and "),n("code",[e._v("otherJoinConjuncts")]),e._v(", the Runtime Filter generated by "),n("code",[e._v("PlanNode.Conjuncts")]),e._v(" found in the test that it may cause incorrect results, such as "),n("code",[e._v("When an IN")]),e._v(" subquery is converted to a join, the automatically generated join on clause will be stored in "),n("code",[e._v("PlanNode.Conjuncts")]),e._v(". At this time, applying Runtime Filter may result in missing some rows in the result.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1085:function(_,t,a){"use strict";a.r(t);var e=a(56),v=Object(e.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"动态分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分区"}},[_._v("#")]),_._v(" 动态分区")]),_._v(" "),a("p",[_._v("动态分区是在 Doris 0.12 版本中引入的新功能。旨在对表级别的分区实现生命周期管理(TTL)，减少用户的使用负担。")]),_._v(" "),a("p",[_._v("目前实现了动态添加分区及动态删除分区的功能。")]),_._v(" "),a("p",[_._v("动态分区只支持 Range 分区。")]),_._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[_._v("#")]),_._v(" 名词解释")]),_._v(" "),a("ul",[a("li",[_._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),_._v(" "),a("li",[_._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")])]),_._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[_._v("#")]),_._v(" 原理")]),_._v(" "),a("p",[_._v("在某些使用场景下，用户会将表按照天进行分区划分，每天定时执行例行任务，这时需要使用方手动管理分区，否则可能由于使用方没有创建分区导致数据导入失败，这给使用方带来了额外的维护成本。")]),_._v(" "),a("p",[_._v("通过动态分区功能，用户可以在建表时设定动态分区的规则。FE 会启动一个后台线程，根据用户指定的规则创建或删除分区。用户也可以在运行时对现有规则进行变更。")]),_._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[_._v("#")]),_._v(" 使用方式")]),_._v(" "),a("p",[_._v("动态分区的规则可以在建表时指定，或者在运行时进行修改。当前仅支持对单分区列的分区表设定动态分区规则。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("建表时指定：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('CREATE TABLE tbl1\n(...)\nPROPERTIES\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')])])])]),_._v(" "),a("li",[a("p",[_._v("运行时修改")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')])])])])]),_._v(" "),a("h3",{attrs:{id:"动态分区规则参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分区规则参数"}},[_._v("#")]),_._v(" 动态分区规则参数")]),_._v(" "),a("p",[_._v("动态分区的规则参数都以 "),a("code",[_._v("dynamic_partition.")]),_._v(" 为前缀：")]),_._v(" "),a("ul",[a("li",[a("p",[a("code",[_._v("dynamic_partition.enable")])]),_._v(" "),a("p",[_._v("是否开启动态分区特性。可指定为 "),a("code",[_._v("TRUE")]),_._v(" 或 "),a("code",[_._v("FALSE")]),_._v("。如果不填写，默认为 "),a("code",[_._v("TRUE")]),_._v("。如果为 "),a("code",[_._v("FALSE")]),_._v("，则 Doris 会忽略该表的动态分区规则。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.time_unit")])]),_._v(" "),a("p",[_._v("动态分区调度的单位。可指定为 "),a("code",[_._v("HOUR")]),_._v("、"),a("code",[_._v("DAY")]),_._v("、"),a("code",[_._v("WEEK")]),_._v("、"),a("code",[_._v("MONTH")]),_._v("。分别表示按天、按星期、按月进行分区创建或删除。")]),_._v(" "),a("p",[_._v("当指定为 "),a("code",[_._v("HOUR")]),_._v(" 时，动态创建的分区名后缀格式为 "),a("code",[_._v("yyyyMMddHH")]),_._v("，例如"),a("code",[_._v("2020032501")]),_._v("。小时为单位的分区列数据类型不能为 DATE。")]),_._v(" "),a("p",[_._v("当指定为 "),a("code",[_._v("DAY")]),_._v(" 时，动态创建的分区名后缀格式为 "),a("code",[_._v("yyyyMMdd")]),_._v("，例如"),a("code",[_._v("20200325")]),_._v("。")]),_._v(" "),a("p",[_._v("当指定为 "),a("code",[_._v("WEEK")]),_._v(" 时，动态创建的分区名后缀格式为"),a("code",[_._v("yyyy_ww")]),_._v("。即当前日期属于这一年的第几周，例如 "),a("code",[_._v("2020-03-25")]),_._v(" 创建的分区名后缀为 "),a("code",[_._v("2020_13")]),_._v(", 表明目前为2020年第13周。")]),_._v(" "),a("p",[_._v("当指定为 "),a("code",[_._v("MONTH")]),_._v(" 时，动态创建的分区名后缀格式为 "),a("code",[_._v("yyyyMM")]),_._v("，例如 "),a("code",[_._v("202003")]),_._v("。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.time_zone")])]),_._v(" "),a("p",[_._v("动态分区的时区，如果不填写，则默认为当前机器的系统的时区，例如 "),a("code",[_._v("Asia/Shanghai")]),_._v("，如果想获取当前支持的时区设置，可以参考 "),a("code",[_._v("https://en.wikipedia.org/wiki/List_of_tz_database_time_zones")]),_._v("。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.start")])]),_._v(" "),a("p",[_._v("动态分区的起始偏移，为负数。根据 "),a("code",[_._v("time_unit")]),_._v(" 属性的不同，以当天（星期/月）为基准，分区范围在此偏移之前的分区将会被删除。如果不填写，则默认为 "),a("code",[_._v("-2147483648")]),_._v("，即不删除历史分区。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.end")])]),_._v(" "),a("p",[_._v("动态分区的结束偏移，为正数。根据 "),a("code",[_._v("time_unit")]),_._v(" 属性的不同，以当天（星期/月）为基准，提前创建对应范围的分区。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.prefix")])]),_._v(" "),a("p",[_._v("动态创建的分区名前缀。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.buckets")])]),_._v(" "),a("p",[_._v("动态创建的分区所对应的分桶数量。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.replication_num")])]),_._v(" "),a("p",[_._v("动态创建的分区所对应的副本数量，如果不填写，则默认为该表创建时指定的副本数量。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.start_day_of_week")])]),_._v(" "),a("p",[_._v("当 "),a("code",[_._v("time_unit")]),_._v(" 为 "),a("code",[_._v("WEEK")]),_._v(" 时，该参数用于指定每周的起始点。取值为 1 到 7。其中 1 表示周一，7 表示周日。默认为 1，即表示每周以周一为起始点。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.start_day_of_month")])]),_._v(" "),a("p",[_._v("当 "),a("code",[_._v("time_unit")]),_._v(" 为 "),a("code",[_._v("MONTH")]),_._v(" 时，该参数用于指定每月的起始日期。取值为 1 到 28。其中 1 表示每月1号，28 表示每月28号。默认为 1，即表示每月以1号位起始点。暂不支持以29、30、31号为起始日，以避免因闰年或闰月带来的歧义。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.create_history_partition")])]),_._v(" "),a("p",[_._v("默认为 false。当置为 true 时，Doris 会自动创建所有分区，具体创建规则见下文。同时，FE 的参数 "),a("code",[_._v("max_dynamic_partition_num")]),_._v(" 会限制总分区数量，以避免一次性创建过多分区。当期望创建的分区个数大于 "),a("code",[_._v("max_dynamic_partition_num")]),_._v(" 值时，操作将被禁止。")]),_._v(" "),a("p",[_._v("当不指定 "),a("code",[_._v("start")]),_._v(" 属性时，该参数不生效。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.history_partition_num")])]),_._v(" "),a("p",[_._v("当 "),a("code",[_._v("create_history_partition")]),_._v(" 为 "),a("code",[_._v("true")]),_._v(" 时，该参数用于指定创建历史分区数量。默认值为 -1， 即未设置。")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.hot_partition_num")])]),_._v(" "),a("p",[_._v("指定最新的多少个分区为热分区。对于热分区，系统会自动设置其 "),a("code",[_._v("storage_medium")]),_._v(" 参数为SSD，并且设置 "),a("code",[_._v("storage_cooldown_time")]),_._v("。")]),_._v(" "),a("p",[a("code",[_._v("hot_partition_num")]),_._v(" 是往前 n 天和未来所有分区")]),_._v(" "),a("p",[_._v("我们举例说明。假设今天是 2021-05-20，按天分区，动态分区的属性设置为：hot_partition_num=2, end=3, start=-3。则系统会自动创建以下分区，并且设置 "),a("code",[_._v("storage_medium")]),_._v(" 和 "),a("code",[_._v("storage_cooldown_time")]),_._v(" 参数：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p20210517：["2021-05-17", "2021-05-18") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210518：["2021-05-18", "2021-05-19") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210519：["2021-05-19", "2021-05-20") storage_medium=SSD storage_cooldown_time=2021-05-21 00:00:00\np20210520：["2021-05-20", "2021-05-21") storage_medium=SSD storage_cooldown_time=2021-05-22 00:00:00\np20210521：["2021-05-21", "2021-05-22") storage_medium=SSD storage_cooldown_time=2021-05-23 00:00:00\np20210522：["2021-05-22", "2021-05-23") storage_medium=SSD storage_cooldown_time=2021-05-24 00:00:00\np20210523：["2021-05-23", "2021-05-24") storage_medium=SSD storage_cooldown_time=2021-05-25 00:00:00\n')])])])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.reserved_history_periods")])]),_._v(" "),a("p",[_._v("需要保留的历史分区的时间范围。当"),a("code",[_._v("dynamic_partition.time_unit")]),_._v(' 设置为 "DAY/WEEK/MONTH" 时，需要以 '),a("code",[_._v("[yyyy-MM-dd,yyyy-MM-dd],[...,...]")]),_._v(" 格式进行设置。当"),a("code",[_._v("dynamic_partition.time_unit")]),_._v(' 设置为 "HOUR" 时，需要以 '),a("code",[_._v("[yyyy-MM-dd HH:mm:ss,yyyy-MM-dd HH:mm:ss],[...,...]")]),_._v(" 的格式来进行设置。如果不设置，默认为 "),a("code",[_._v('"NULL"')]),_._v("。")]),_._v(" "),a("p",[_._v("我们举例说明。假设今天是 2021-09-06，按天分类，动态分区的属性设置为：")]),_._v(" "),a("p",[a("code",[_._v('time_unit="DAY/WEEK/MONTH", end=3, start=-3, reserved_history_periods="[2020-06-01,2020-06-20],[2020-10-31,2020-11-15]"')]),_._v("。")]),_._v(" "),a("p",[_._v("则系统会自动保留：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('["2020-06-01","2020-06-20"],\n["2020-10-31","2020-11-15"]\n')])])]),a("p",[_._v("或者")]),_._v(" "),a("p",[a("code",[_._v('time_unit="HOUR", end=3, start=-3, reserved_history_periods="[2020-06-01 00:00:00,2020-06-01 03:00:00]"')]),_._v(".")]),_._v(" "),a("p",[_._v("则系统会自动保留：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('["2020-06-01 00:00:00","2020-06-01 03:00:00"]\n')])])]),a("p",[_._v("这两个时间段的分区。其中，"),a("code",[_._v("reserved_history_periods")]),_._v(" 的每一个 "),a("code",[_._v("[...,...]")]),_._v(" 是一对设置项，两者需要同时被设置，且第一个时间不能大于第二个时间``。")])])]),_._v(" "),a("h4",{attrs:{id:"创建历史分区规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建历史分区规则"}},[_._v("#")]),_._v(" 创建历史分区规则")]),_._v(" "),a("p",[_._v("当 "),a("code",[_._v("create_history_partition")]),_._v(" 为 "),a("code",[_._v("true")]),_._v("，即开启创建历史分区功能时，Doris 会根据 "),a("code",[_._v("dynamic_partition.start")]),_._v(" 和 "),a("code",[_._v("dynamic_partition.history_partition_num")]),_._v(" 来决定创建历史分区的个数。")]),_._v(" "),a("p",[_._v("假设需要创建的历史分区数量为 "),a("code",[_._v("expect_create_partition_num")]),_._v("，根据不同的设置具体数量如下：")]),_._v(" "),a("ol",[a("li",[a("p",[a("code",[_._v("create_history_partition")]),_._v(" = "),a("code",[_._v("true")])]),_._v(" "),a("ul",[a("li",[a("p",[a("code",[_._v("dynamic_partition.history_partition_num")]),_._v(" 未设置，即 -1."),a("br"),_._v(" "),a("code",[_._v("expect_create_partition_num")]),_._v(" = "),a("code",[_._v("end")]),_._v(" - "),a("code",[_._v("start")]),_._v(";")])]),_._v(" "),a("li",[a("p",[a("code",[_._v("dynamic_partition.history_partition_num")]),_._v(" 已设置"),a("br"),_._v(" "),a("code",[_._v("expect_create_partition_num")]),_._v(" = "),a("code",[_._v("end")]),_._v(" - max("),a("code",[_._v("start")]),_._v(", "),a("code",[_._v("-histoty_partition_num")]),_._v(");")])])])]),_._v(" "),a("li",[a("p",[a("code",[_._v("create_history_partition")]),_._v(" = "),a("code",[_._v("false")]),a("br"),_._v("\n不会创建历史分区，"),a("code",[_._v("expect_create_partition_num")]),_._v(" = "),a("code",[_._v("end")]),_._v(" - 0;")])])]),_._v(" "),a("p",[_._v("当 "),a("code",[_._v("expect_create_partition_num")]),_._v(" 大于 "),a("code",[_._v("max_dynamic_partition_num")]),_._v("（默认500）时，禁止创建过多分区。")]),_._v(" "),a("p",[a("strong",[_._v("举例说明：")])]),_._v(" "),a("ol",[a("li",[a("p",[_._v("假设今天是 2021-05-20，按天分区，动态分区的属性设置为："),a("code",[_._v("create_history_partition=true, end=3, start=-3, history_partition_num=1")]),_._v("，则系统会自动创建以下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("p20210519\np20210520\np20210521\np20210522\np20210523\n")])])])]),_._v(" "),a("li",[a("p",[a("code",[_._v("history_partition_num=5")]),_._v("，其余属性与 1 中保持一直，则系统会自动创建以下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n")])])])]),_._v(" "),a("li",[a("p",[a("code",[_._v("history_partition_num=-1")]),_._v(" 即不设置历史分区数量，其余属性与 1 中保持一直，则系统会自动创建以下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n")])])])])]),_._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[_._v("#")]),_._v(" 注意事项")]),_._v(" "),a("p",[_._v("动态分区使用过程中，如果因为一些意外情况导致 "),a("code",[_._v("dynamic_partition.start")]),_._v(" 和 "),a("code",[_._v("dynamic_partition.end")]),_._v(" 之间的某些分区丢失，那么当前时间与 "),a("code",[_._v("dynamic_partition.end")]),_._v(" 之间的丢失分区会被重新创建，"),a("code",[_._v("dynamic_partition.start")]),_._v("与当前时间之间的丢失分区不会重新创建。")]),_._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[_._v("#")]),_._v(" 示例")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("表 tbl1 分区列 k1 类型为 DATE，创建一个动态分区规则。按天分区，只保留最近7天的分区，并且预先创建未来3天的分区。")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n')])])]),a("p",[_._v("假设当前日期为 2020-05-29。则根据以上规则，tbl1 会产生以下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p20200529: ["2020-05-29", "2020-05-30")\np20200530: ["2020-05-30", "2020-05-31")\np20200531: ["2020-05-31", "2020-06-01")\np20200601: ["2020-06-01", "2020-06-02")\n')])])]),a("p",[_._v("在第二天，即 2020-05-30，会创建新的分区 "),a("code",[_._v('p20200602: ["2020-06-02", "2020-06-03")')])]),_._v(" "),a("p",[_._v("在 2020-06-06 时，因为 "),a("code",[_._v("dynamic_partition.start")]),_._v(" 设置为 7，则将删除7天前的分区，即删除分区 "),a("code",[_._v("p20200529")]),_._v("。")])]),_._v(" "),a("li",[a("p",[_._v("表 tbl1 分区列 k1 类型为 DATETIME，创建一个动态分区规则。按星期分区，只保留最近2个星期的分区，并且预先创建未来2个星期的分区。")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('CREATE TABLE tbl1\n(\n    k1 DATETIME,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "WEEK",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n);\n')])])]),a("p",[_._v("假设当前日期为 2020-05-29，是 2020 年的第 22 周。默认每周起始为星期一。则根于以上规则，tbl1 会产生以下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p2020_22: ["2020-05-25 00:00:00", "2020-06-01 00:00:00")\np2020_23: ["2020-06-01 00:00:00", "2020-06-08 00:00:00")\np2020_24: ["2020-06-08 00:00:00", "2020-06-15 00:00:00")\n')])])]),a("p",[_._v("其中每个分区的起始日期为当周的周一。同时，因为分区列 k1 的类型为 DATETIME，则分区值会补全时分秒部分，且皆为 0。")]),_._v(" "),a("p",[_._v("在 2020-06-15，即第25周时，会删除2周前的分区，即删除 "),a("code",[_._v("p2020_22")]),_._v("。")]),_._v(" "),a("p",[_._v("在上面的例子中，假设用户指定了周起始日为 "),a("code",[_._v('"dynamic_partition.start_day_of_week" = "3"')]),_._v("，即以每周三为起始日。则分区如下：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p2020_22: ["2020-05-27 00:00:00", "2020-06-03 00:00:00")\np2020_23: ["2020-06-03 00:00:00", "2020-06-10 00:00:00")\np2020_24: ["2020-06-10 00:00:00", "2020-06-17 00:00:00")\n')])])]),a("p",[_._v("即分区范围为当周的周三到下周的周二。")]),_._v(" "),a("ul",[a("li",[_._v("注：2019-12-31 和 2020-01-01 在同一周内，如果分区的起始日期为 2019-12-31，则分区名为 "),a("code",[_._v("p2019_53")]),_._v("，如果分区的起始日期为 2020-01-01，则分区名为 "),a("code",[_._v("p2020_01")]),_._v("。")])])]),_._v(" "),a("li",[a("p",[_._v("表 tbl1 分区列 k1 类型为 DATE，创建一个动态分区规则。按月分区，不删除历史分区，并且预先创建未来2个月的分区。同时设定以每月3号为起始日。")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "MONTH",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.start_day_of_month" = "3"\n);\n')])])]),a("p",[_._v("假设当前日期为 2020-05-29。则根于以上规则，tbl1 会产生以下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p202005: ["2020-05-03", "2020-06-03")\np202006: ["2020-06-03", "2020-07-03")\np202007: ["2020-07-03", "2020-08-03")\n')])])]),a("p",[_._v("因为没有设置 "),a("code",[_._v("dynamic_partition.start")]),_._v("，则不会删除历史分区。")]),_._v(" "),a("p",[_._v("假设今天为 2020-05-20，并设置以每月28号为起始日，则分区范围为：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p202004: ["2020-04-28", "2020-05-28")\np202005: ["2020-05-28", "2020-06-28")\np202006: ["2020-06-28", "2020-07-28")\n')])])])])]),_._v(" "),a("h2",{attrs:{id:"修改动态分区属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改动态分区属性"}},[_._v("#")]),_._v(" 修改动态分区属性")]),_._v(" "),a("p",[_._v("通过如下命令可以修改动态分区的属性：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    ...\n);\n')])])]),a("p",[_._v("某些属性的修改可能会产生冲突。假设之前分区粒度为 DAY，并且已经创建了如下分区：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('p20200519: ["2020-05-19", "2020-05-20")\np20200520: ["2020-05-20", "2020-05-21")\np20200521: ["2020-05-21", "2020-05-22")\n')])])]),a("p",[_._v("如果此时将分区粒度改为 MONTH，则系统会尝试创建范围为 "),a("code",[_._v('["2020-05-01", "2020-06-01")')]),_._v(" 的分区，而该分区的分区范围和已有分区冲突，所以无法创建。而范围为 "),a("code",[_._v('["2020-06-01", "2020-07-01")')]),_._v(" 的分区可以正常创建。因此，2020-05-22 到 2020-05-30 时间段的分区，需要自行填补。")]),_._v(" "),a("h3",{attrs:{id:"查看动态分区表调度情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看动态分区表调度情况"}},[_._v("#")]),_._v(" 查看动态分区表调度情况")]),_._v(" "),a("p",[_._v("通过以下命令可以进一步查看当前数据库下，所有动态分区表的调度情况：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("mysql> SHOW DYNAMIC PARTITION TABLES;\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    | \n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n7 rows in set (0.02 sec)\n")])])]),a("ul",[a("li",[_._v("LastUpdateTime: 最后一次修改动态分区属性的时间")]),_._v(" "),a("li",[_._v("LastSchedulerTime:   最后一次执行动态分区调度的时间")]),_._v(" "),a("li",[_._v("State: 最后一次执行动态分区调度的状态")]),_._v(" "),a("li",[_._v("LastCreatePartitionMsg:  最后一次执行动态添加分区调度的错误信息")]),_._v(" "),a("li",[_._v("LastDropPartitionMsg:  最后一次执行动态删除分区调度的错误信息")])]),_._v(" "),a("h2",{attrs:{id:"高级操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级操作"}},[_._v("#")]),_._v(" 高级操作")]),_._v(" "),a("h3",{attrs:{id:"fe-配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置项"}},[_._v("#")]),_._v(" FE 配置项")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("dynamic_partition_enable")]),_._v(" "),a("p",[_._v("是否开启 Doris 的动态分区功能。默认为 false，即关闭。该参数只影响动态分区表的分区操作，不影响普通表。可以通过修改 fe.conf 中的参数并重启 FE 生效。也可以在运行时执行以下命令生效：")]),_._v(" "),a("p",[_._v("MySQL 协议：")]),_._v(" "),a("p",[a("code",[_._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true")')])]),_._v(" "),a("p",[_._v("HTTP 协议：")]),_._v(" "),a("p",[a("code",[_._v("curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=true")])]),_._v(" "),a("p",[_._v("若要全局关闭动态分区，则设置此参数为 false 即可。")])]),_._v(" "),a("li",[a("p",[_._v("dynamic_partition_check_interval_seconds")]),_._v(" "),a("p",[_._v("动态分区线程的执行频率，默认为600(10分钟)，即每10分钟进行一次调度。可以通过修改 fe.conf 中的参数并重启 FE 生效。也可以在运行时执行以下命令修改：")]),_._v(" "),a("p",[_._v("MySQL 协议：")]),_._v(" "),a("p",[a("code",[_._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_check_interval_seconds" = "7200")')])]),_._v(" "),a("p",[_._v("HTTP 协议：")]),_._v(" "),a("p",[a("code",[_._v("curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_check_interval_seconds=432000")])])])]),_._v(" "),a("h3",{attrs:{id:"动态分区表与手动分区表相互转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分区表与手动分区表相互转换"}},[_._v("#")]),_._v(" 动态分区表与手动分区表相互转换")]),_._v(" "),a("p",[_._v("对于一个表来说，动态分区和手动分区可以自由转换，但二者不能同时存在，有且只有一种状态。")]),_._v(" "),a("h4",{attrs:{id:"手动分区转换为动态分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动分区转换为动态分区"}},[_._v("#")]),_._v(" 手动分区转换为动态分区")]),_._v(" "),a("p",[_._v("如果一个表在创建时未指定动态分区，可以通过 "),a("code",[_._v("ALTER TABLE")]),_._v(" 在运行时修改动态分区相关属性来转化为动态分区，具体示例可以通过 "),a("code",[_._v("HELP ALTER TABLE")]),_._v(" 查看。")]),_._v(" "),a("p",[_._v("开启动态分区功能后，Doris 将不再允许用户手动管理分区，会根据动态分区属性来自动管理分区。")]),_._v(" "),a("p",[a("strong",[_._v("注意")]),_._v("：如果已设定 "),a("code",[_._v("dynamic_partition.start")]),_._v("，分区范围在动态分区起始偏移之前的历史分区将会被删除。")]),_._v(" "),a("h4",{attrs:{id:"动态分区转换为手动分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分区转换为手动分区"}},[_._v("#")]),_._v(" 动态分区转换为手动分区")]),_._v(" "),a("p",[_._v("通过执行 "),a("code",[_._v('ALTER TABLE tbl_name SET ("dynamic_partition.enable" = "false")')]),_._v(" 即可关闭动态分区功能，将其转换为手动分区表。")]),_._v(" "),a("p",[_._v("关闭动态分区功能后，Doris 将不再自动管理分区，需要用户手动通过 "),a("code",[_._v("ALTER TABLE")]),_._v(" 的方式创建或删除分区。")]),_._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[_._v("#")]),_._v(" 常见问题")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("创建动态分区表后提示 "),a("code",[_._v("Could not create table with dynamic partition when fe config dynamic_partition_enable is false")])]),_._v(" "),a("p",[_._v("由于动态分区的总开关，也就是 FE 的配置 "),a("code",[_._v("dynamic_partition_enable")]),_._v(" 为 false，导致无法创建动态分区表。")]),_._v(" "),a("p",[_._v("这时候请修改 FE 的配置文件，增加一行 "),a("code",[_._v("dynamic_partition_enable=true")]),_._v('，并重启 FE。或者执行命令 ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true") 将动态分区开关打开即可。')])])])])}),[],!1,null,null,null);t.default=v.exports}}]);
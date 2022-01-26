(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{1204:function(e,t,a){"use strict";a.r(t);var l=a(56),i=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"commit-格式规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-格式规范"}},[e._v("#")]),e._v(" Commit 格式规范")]),e._v(" "),a("p",[e._v("Commit 分为“标题”和“内容”。原则上标题全部小写。内容首字母大写。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("标题")]),e._v(" "),a("p",[a("code",[e._v("[<type>](<scope>) <subject> (#pr)")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<type>")])]),e._v(" "),a("p",[e._v("本次提交的类型，限定在以下类型（全小写）")]),e._v(" "),a("ul",[a("li",[e._v("fix：bug修复")]),e._v(" "),a("li",[e._v("feature：新增功能")]),e._v(" "),a("li",[e._v("feature-wip：开发中的功能，比如某功能的部分代码。")]),e._v(" "),a("li",[e._v("improvement：原有功能的优化和改进")]),e._v(" "),a("li",[e._v("docs：文档")]),e._v(" "),a("li",[e._v("style：代码风格调整")]),e._v(" "),a("li",[e._v("typo：代码或文档勘误")]),e._v(" "),a("li",[e._v("refactor：代码重构（不涉及功能变动）")]),e._v(" "),a("li",[e._v("performance：性能优化")]),e._v(" "),a("li",[e._v("test：单元测试的添加或修复")]),e._v(" "),a("li",[e._v("chore：构建工具的修改")]),e._v(" "),a("li",[e._v("revert：回滚")]),e._v(" "),a("li",[e._v("deps：第三方依赖库的修改")]),e._v(" "),a("li",[e._v("community：社区相关的修改，如修改 Github Issue 模板等。")])]),e._v(" "),a("p",[e._v("几点说明：")]),e._v(" "),a("ol",[a("li",[e._v("如在一次提交中出现多种类型，需增加多个类型。")]),e._v(" "),a("li",[e._v("如代码重构带来了性能提升，可以同时添加 [refactor][optimize]")]),e._v(" "),a("li",[e._v("不得出现如上所列类型之外的其他类型。如有必要，需要将新增类型添加到这个文档中。")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<scope>")])]),e._v(" "),a("p",[e._v("本次提交设计的模块范围。因为功能模块繁多，在此仅罗列部分，后续根据需求不断完善。")]),e._v(" "),a("ul",[a("li",[e._v("planner")]),e._v(" "),a("li",[e._v("meta")]),e._v(" "),a("li",[e._v("storage")]),e._v(" "),a("li",[e._v("stream-load")]),e._v(" "),a("li",[e._v("broker-load")]),e._v(" "),a("li",[e._v("routine-load")]),e._v(" "),a("li",[e._v("sync-job")]),e._v(" "),a("li",[e._v("export")]),e._v(" "),a("li",[e._v("executor")]),e._v(" "),a("li",[e._v("spark-connector")]),e._v(" "),a("li",[e._v("flink-connector")]),e._v(" "),a("li",[e._v("datax")]),e._v(" "),a("li",[e._v("log")]),e._v(" "),a("li",[e._v("cache")]),e._v(" "),a("li",[e._v("config")])]),e._v(" "),a("p",[e._v("几点说明：")]),e._v(" "),a("ol",[a("li",[e._v("尽量使用列表中已存在的选项。如需添加，请及时更新本文档。")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<subject>")])]),e._v(" "),a("p",[e._v("标题需尽量清晰表明本次提交的主要内容。")])])])]),e._v(" "),a("li",[a("p",[e._v("内容")]),e._v(" "),a("p",[e._v("commit message 需遵循以下格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("issue：#7777\n\nyour message\n")])])]),a("ol",[a("li",[e._v("如无 issue，可不填。issue 也可以出现在 message 里。")]),e._v(" "),a("li",[e._v("一行原则不超过100个字符。")])])]),e._v(" "),a("li",[a("p",[e._v("示例")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[fix](executor) change DateTimeValue's memory layout to load (#7022)\n\nChange DateTimeValue memory's layout to old to fix compatibility problems.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[feat](log) extend logger interface, support structured log output(#6600)\n\nSupport structured logging.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[fix][feat-opt](executor)(load)(config) fix some memory bugs (#6699)\n\n1. Fix a memory leak in `collect_iterator.cpp` (Fix #6700)\n2. Add a new BE config `max_segment_num_per_rowset` to limit the num of segment in new rowset.(Fix #6701)\n3. Make the error msg of stream load more friendly.\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[feat-opt](load) Reduce the number of segments when loading a large volume data in one batch (#6947)\n\n## Case\n\nIn the load process, each tablet will have a memtable to save the incoming data,\nand if the data in a memtable is larger than 100MB, it will be flushed to disk\nas a `segment` file. And then a new memtable will be created to save the following data.\n\nAssume that this is a table with N buckets(tablets). So the max size of all memtables\nwill be `N * 100MB`. If N is large, it will cost too much memory.\n\nSo for memory limit purpose, when the size of all memtables reach a threshold(2GB as default),\nDoris will try to flush all current memtables to disk(even if their size are not reach 100MB).\n\nSo you will see that the memtable will be flushed when it's size reach `2GB/N`, which maybe much\nsmaller than 100MB, resulting in too many small segment files.\n\n## Solution\n\nWhen decide to flush memtable to reduce memory consumption, NOT to flush all memtable,\nbut to flush part of them.\n\nFor example, there are 50 tablets(with 50 memtables). The memory limit is 1GB,\nso when each memtable reach 20MB, the total size reach 1GB, and flush will occur.\n\nIf I only flush 25 of 50 memtables, then next time when the total size reach 1GB,\nthere will be 25 memtables with size 10MB, and other 25 memtables with size 30MB.\nSo I can flush those memtables with size 30MB, which is larger than 20MB.\n\nThe main idea is to introduce some jitter during flush to ensure the small unevenness\nof each memtable, so as to ensure that flush will only be triggered when the memtable\nis large enough.\n\nIn my test, loading a table with 48 buckets, mem limit 2G, in previous version,\nthe average memtable size is 44MB, after modification, the average size is 82MB\n")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{585:function(t,e,i){"use strict";i.r(e);var a=i(56),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"statistics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#statistics"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),i("p",[t._v("A total of 28 authors have submitted 54 Commits. Thanks to the following authors for their contributions (Github IDs, in alphabetical order).")]),t._v(" "),i("p",[t._v("924060929, adonis0147, Aiden-Dong, caiconghui, chovy-3012, eyesmoons, GoGoWen, Henry2SS, hf200012, jackwener, littleeleventhwolf, liutang123, lovingfeel, luzhijing, morningman, qidaye, qzsee, tianhui5, Userwhite, vinson0526, wayofeng, weajun, WindyGao, xuzifu666, xy720, yangzhg, zenoyang, zuochunwei")]),t._v(" "),i("p",[t._v("In the last 2 weeks, 4420 new lines of code were added and 1998 lines of code were deleted.")]),t._v(" "),i("h2",{attrs:{id:"main-progress"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#main-progress"}},[t._v("#")]),t._v(" Main progress")]),t._v(" "),i("h3",{attrs:{id:"new-features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[t._v("#")]),t._v(" New features")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7403")]),t._v(" "),i("p",[t._v("SQL block rule adds restrictions on partition num, tablet num and cardinality. You can set these parameters to block SQL queries that do not match the rule.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7673")]),t._v(" "),i("p",[t._v("Added WEEKDAY function.")])])]),t._v(" "),i("h3",{attrs:{id:"feature-improvements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feature-improvements"}},[t._v("#")]),t._v(" Feature improvements")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7423")]),t._v(" "),i("p",[t._v("Add "),i("code",[t._v("repair_slow_replica")]),t._v(" parameter to automatically remove replicas with too many versions.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7240")]),t._v(" "),i("p",[t._v("Optimize the return result of the load command. When load data is empty, Success is returned instead of "),i("code",[t._v("all partitions have no load data")]),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7574")]),t._v(" "),i("p",[t._v("Runtime Filter supports determining whether to use IN or Bloom Filter type at runtime.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7568")]),t._v(" "),i("p",[t._v("Optimize the DataX doriswriter plugin to use json format by default to avoid problems with conflicting column separators.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7514")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7531")]),t._v(" "),i("p",[t._v("Optimized error handling logic on the Spark Connector write side.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7664")]),t._v(" "),i("p",[t._v("Support more hint syntax to enhance mysql compatibility.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7630")]),t._v(" "),i("p",[t._v("Routine Load support for older versions of kafka (< 0.10)")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7543")]),t._v(" "),i("p",[t._v("Optimized locking logic for BE-side RPC client cache.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7754")]),t._v(" "),i("p",[t._v("Optimize the execution logic of Routine Load to reduce the frequency of RPC timeout during Routine Load execution.")])])]),t._v(" "),i("h3",{attrs:{id:"bug-fixes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[t._v("#")]),t._v(" Bug Fixes")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7563")]),t._v(" "),i("p",[t._v("Fix a problem where Decommission Backend may be blocked due to "),i("code",[t._v("no proper tag is chosen for tablet")]),t._v(" error in some cases.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7607")]),t._v(" "),i("p",[t._v("Fix an issue where the Audit Log plugin would exit under certain exceptions.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7605")]),t._v(" "),i("p",[t._v("Fix a concurrent locking issue that may be caused by creating error hubs in some cases.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7691")]),t._v(" "),i("p",[t._v("Fix the issue that using S3 SDK cannot access AliCloud object storage.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7721")]),t._v(" "),i("p",[t._v("Fix bugs related to Lateral View.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7526")]),t._v(" "),i("p",[t._v("Fix a bug that FE Metadata Checkpoint operation may rewrite the current metadata value incorrectly in some cases.")])])]),t._v(" "),i("h3",{attrs:{id:"other"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7616")]),t._v(" "),i("p",[t._v("Added process support for pushing Spark/Flink Connector to Maven repositories.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7638")]),t._v(" "),i("p",[t._v("Optimized the content of Pull Request Template.")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);
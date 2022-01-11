(window.webpackJsonp=window.webpackJsonp||[]).push([[1018],{1457:function(t,a,e){"use strict";e.r(a);var s=e(55),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"show-backends"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-backends"}},[t._v("#")]),t._v(" SHOW BACKENDS")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("该语句用于查看 cluster 内的 BE 节点\n语法：\n    SHOW BACKENDS;\n\n说明：\n    1. LastStartTime 表示最近一次 BE 启动时间。\n    2. LastHeartbeat 表示最近一次心跳。\n    3. Alive 表示节点是否存活。\n    4. SystemDecommissioned 为 true 表示节点正在安全下线中。\n    5. ClusterDecommissioned 为 true 表示节点正在冲当前cluster中下线。\n    6. TabletNum 表示该节点上分片数量。\n    7. DataUsedCapacity 表示实际用户数据所占用的空间。\n    8. AvailCapacity 表示磁盘的可使用空间。\n    9. TotalCapacity 表示总磁盘空间。TotalCapacity = AvailCapacity + DataUsedCapacity + 其他非用户数据文件占用空间。\n   10. UsedPct 表示磁盘已使用量百分比。\n   11. ErrMsg 用于显示心跳失败时的错误信息。\n   12. Status 用于以 JSON 格式显示BE的一些状态信息, 目前包括最后一次BE汇报其tablet的时间信息。\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SHOW, BACKENDS\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
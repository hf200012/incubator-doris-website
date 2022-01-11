(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1089:function(e,_,s){"use strict";s.r(_);var t=s(55),r=Object(t.a)({},(function(){var e=this,_=e.$createElement,s=e._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"be-监控项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#be-监控项"}},[e._v("#")]),e._v(" BE 监控项")]),e._v(" "),s("p",[e._v("该文档主要介绍 BE 的相关监控项。")]),e._v(" "),s("h2",{attrs:{id:"查看监控项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看监控项"}},[e._v("#")]),e._v(" 查看监控项")]),e._v(" "),s("p",[e._v("BE 的监控项可以通过以下方式访问：")]),e._v(" "),s("p",[s("code",[e._v("http://be_host:be_webserver_port/metrics")])]),e._v(" "),s("p",[e._v("默认显示为 "),s("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),s("OutboundLink")],1),e._v(" 格式。")]),e._v(" "),s("p",[e._v("通过以下接口可以获取 Json 格式的监控项：")]),e._v(" "),s("p",[s("code",[e._v("http://be_host:be_webserver_port/metrics?type=json")])]),e._v(" "),s("h2",{attrs:{id:"监控项列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控项列表"}},[e._v("#")]),e._v(" 监控项列表")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-in-errs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-in-errs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_in_errs"}')])]),e._v(" "),s("p",[e._v("该监控项为 "),s("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),s("code",[e._v("Tcp: InErrs")]),e._v(" 字段值。表示当前接收到的错误的 TCP 包的数量。")]),e._v(" "),s("p",[e._v("结合采样周期可以计算发生率。")]),e._v(" "),s("p",[e._v("通常用于排查网络问题。")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-retrans-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-retrans-segs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_retrans_segs"}')])]),e._v(" "),s("p",[e._v("该监控项为 "),s("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),s("code",[e._v("Tcp: RetransSegs")]),e._v(" 字段值。表示当前重传的 TCP 包的数量。")]),e._v(" "),s("p",[e._v("结合采样周期可以计算发生率。")]),e._v(" "),s("p",[e._v("通常用于排查网络问题。")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-in-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-in-segs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_in_segs"}')])]),e._v(" "),s("p",[e._v("该监控项为 "),s("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),s("code",[e._v("Tcp: InSegs")]),e._v(" 字段值。表示当前接收到的所有 TCP 包的数量。")]),e._v(" "),s("p",[e._v("通过 "),s("code",[e._v("(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")]),e._v(" 可以计算接收到的 TCP 错误包率。")]),e._v(" "),s("p",[e._v("通常用于排查网络问题。")]),e._v(" "),s("h3",{attrs:{id:"doris-be-snmp-name-tcp-out-segs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-snmp-name-tcp-out-segs"}},[e._v("#")]),e._v(" "),s("code",[e._v('doris_be_snmp{name="tcp_out_segs"}')])]),e._v(" "),s("p",[e._v("该监控项为 "),s("code",[e._v("/proc/net/snmp")]),e._v(" 中的 "),s("code",[e._v("Tcp: OutSegs")]),e._v(" 字段值。表示当前发送的所有带 RST 标记的 TCP 包的数量。")]),e._v(" "),s("p",[e._v("通过 "),s("code",[e._v("(NEW_tcp_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")]),e._v(" 可以计算 TCP 重传率。")]),e._v(" "),s("p",[e._v("通常用于排查网络问题。")]),e._v(" "),s("h3",{attrs:{id:"doris-be-compaction-mem-current-consumption"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be-compaction-mem-current-consumption"}},[e._v("#")]),e._v(" "),s("code",[e._v("doris_be_compaction_mem_current_consumption")])]),e._v(" "),s("p",[e._v("该监控项为Compaction使用的MemPool总和（所有Compaction线程）。通过该值，可以迅速判断Compaction是否占用过多内存，引起高内存占用\n甚至OOM等问题。")]),e._v(" "),s("p",[e._v("通常用于排查内存使用问题。")])])}),[],!1,null,null,null);_.default=r.exports}}]);
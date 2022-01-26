(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1141:function(e,n,t){"use strict";t.r(n);var s=t(56),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[e._v("#")]),e._v(" PROFILE")]),e._v(" "),t("p",[e._v("通过query_id获取query profile")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -X GET http://fe_host:fe_http_port/api/profile?query_id=123\n")])])]),t("p",[e._v("如果query_id不存在, 直接返回404 NOT FOUND错误")]),e._v(" "),t("p",[e._v("如果query_id存在，返回下列文本的profile")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Query:\n  Summary:\n     - Query ID: a0a9259df9844029-845331577440a3bd\n     - Start Time: 2020-06-15 14:10:05\n     - End Time: 2020-06-15 14:10:05\n     - Total: 8ms\n     - Query Type: Query\n     - Query State: EOF\n     - Doris Version: trunk\n     - User: root\n     - Default Db: default_cluster:test\n     - Sql Statement: select * from table1\n  Execution Profile a0a9259df9844029-845331577440a3bd:(Active: 7.315ms, % non-child: 100.00%)\n    Fragment 0:\n      Instance a0a9259df9844029-845331577440a3be (host=TNetworkAddress(hostname:172.26.108.176, port:9560)):(Active: 1.523ms, % non-child: 0.24%)\n         - MemoryLimit: 2.00 GB\n         - PeakUsedReservation: 0.00\n         - PeakMemoryUsage: 72.00 KB\n         - RowsProduced: 5\n         - AverageThreadTokens: 0.00\n         - PeakReservation: 0.00\n        BlockMgr:\n           - BlocksCreated: 0\n           - BlockWritesOutstanding: 0\n           - BytesWritten: 0.00\n           - TotalEncryptionTime: 0ns\n           - BufferedPins: 0\n           - TotalReadBlockTime: 0ns\n           - TotalBufferWaitTime: 0ns\n           - BlocksRecycled: 0\n           - TotalIntegrityCheckTime: 0ns\n           - MaxBlockSize: 8.00 MB\n        DataBufferSender (dst_fragment_instance_id=a0a9259df9844029-845331577440a3be):\n           - AppendBatchTime: 9.23us\n             - ResultRendTime: 956ns\n             - TupleConvertTime: 5.735us\n           - NumSentRows: 5\n        OLAP_SCAN_NODE (id=0):(Active: 1.506ms, % non-child: 20.59%)\n           - TotalRawReadTime: 0ns\n           - CompressedBytesRead: 6.47 KB\n           - PeakMemoryUsage: 0.00\n           - RowsPushedCondFiltered: 0\n           - ScanRangesComplete: 0\n           - ScanTime: 25.195us\n           - BitmapIndexFilterTimer: 0ns\n           - BitmapIndexFilterCount: 0\n           - NumScanners: 65\n           - RowsStatsFiltered: 0\n           - VectorPredEvalTime: 0ns\n           - BlockSeekTime: 1.299ms\n           - RawRowsRead: 1.91K (1910)\n           - ScannerThreadsVoluntaryContextSwitches: 0\n           - RowsDelFiltered: 0\n           - IndexLoadTime: 911.104us\n           - NumDiskAccess: 1\n           - ScannerThreadsTotalWallClockTime: 0ns\n             - MaterializeTupleTime: 0ns\n             - ScannerThreadsUserTime: 0ns\n             - ScannerThreadsSysTime: 0ns\n           - TotalPagesNum: 0\n           - RowsReturnedRate: 3.319K /sec\n           - BlockLoadTime: 539.289us\n           - CachedPagesNum: 0\n           - BlocksLoad: 384\n           - UncompressedBytesRead: 0.00\n           - RowsBloomFilterFiltered: 0\n           - TabletCount : 1\n           - RowsReturned: 5\n           - ScannerThreadsInvoluntaryContextSwitches: 0\n           - DecompressorTimer: 0ns\n           - RowsVectorPredFiltered: 0\n           - ReaderInitTime: 6.498ms\n           - RowsRead: 5\n           - PerReadThreadRawHdfsThroughput: 0.0 /sec\n           - BlockFetchTime: 4.318ms\n           - ShowHintsTime: 0ns\n           - TotalReadThroughput: 0.0 /sec\n           - IOTimer: 1.154ms\n           - BytesRead: 48.49 KB\n           - BlockConvertTime: 97.539us\n           - BlockSeekCount: 0\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);
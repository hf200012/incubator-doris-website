(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{487:function(t,e,a){"use strict";a.r(e);var s=a(56),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"compaction-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compaction-action"}},[t._v("#")]),t._v(" Compaction Action")]),t._v(" "),a("p",[t._v("This API is used to view the overall compaction status of a BE node or the compaction status of a specified tablet. It can also be used to manually trigger Compaction.")]),t._v(" "),a("h2",{attrs:{id:"view-compaction-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-compaction-status"}},[t._v("#")]),t._v(" View Compaction status")]),t._v(" "),a("h3",{attrs:{id:"the-overall-compaction-status-of-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-overall-compaction-status-of-the-node"}},[t._v("#")]),t._v(" The overall compaction status of the node")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/run_status\n")])])]),a("p",[t._v("Return JSON:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')])])]),a("p",[t._v("This structure represents the id of the tablet that is performing the compaction task in a certain data directory, and the type of compaction.")]),t._v(" "),a("h3",{attrs:{id:"specify-the-compaction-status-of-the-tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-the-compaction-status-of-the-tablet"}},[t._v("#")]),t._v(" Specify the compaction status of the tablet")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/show?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),a("p",[t._v("If the tablet does not exist, an error in JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),a("p",[t._v("If the tablet exists, the result is returned in JSON format:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "cumulative policy type": "NUM_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": "2019-12-16 18:12:15.110",\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')])])]),a("p",[t._v("Explanation of results:")]),t._v(" "),a("ul",[a("li",[t._v("cumulative policy type: The cumulative compaction policy type which is used by current tablet.")]),t._v(" "),a("li",[t._v("cumulative point: The version boundary between base and cumulative compaction. Versions before (excluding) points are handled by base compaction. Versions after (inclusive) are handled by cumulative compaction.")]),t._v(" "),a("li",[t._v("last cumulative failure time: The time when the last cumulative compaction failed. After 10 minutes by default, cumulative compaction is attempted on the this tablet again.")]),t._v(" "),a("li",[t._v("last base failure time: The time when the last base compaction failed. After 10 minutes by default, base compaction is attempted on the this tablet again.")]),t._v(" "),a("li",[t._v("rowsets: The current rowsets collection of this tablet. [0-48] means a rowset with version 0-48. The second number is the number of segments in a rowset. The "),a("code",[t._v("DELETE")]),t._v(" indicates the delete version. "),a("code",[t._v("OVERLAPPING")]),t._v(" and "),a("code",[t._v("NONOVERLAPPING")]),t._v(" indicates whether data between segments is overlap.")]),t._v(" "),a("li",[t._v("missing_rowset: The missing rowsets.")]),t._v(" "),a("li",[t._v("stale version path: The merged version path of the rowset collection currently merged in the tablet. It is an array structure and each element represents a merged path. Each element contains three attributes: path id indicates the version path id, and last create time indicates the creation time of the most recent rowset on the path. By default, all rowsets on this path will be deleted after half an hour at the last create time.")])]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\\&schema_hash=1294206575\n")])])]),a("h2",{attrs:{id:"manually-trigger-compaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-trigger-compaction"}},[t._v("#")]),t._v(" Manually trigger Compaction")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X POST http://be_host:webserver_port/api/compaction/run?tablet_id=xxxx\\&schema_hash=yyyy\\&compact_type=cumulative\n")])])]),a("p",[t._v("The only one manual compaction task that can be performed at a moment, and the value range of compact_type is base or cumulative")]),t._v(" "),a("p",[t._v("If the tablet does not exist, an error in JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),a("p",[t._v("If the compaction execution task fails to be triggered, an error in JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')])])]),a("p",[t._v("If the compaction execution task successes to be triggered, an error in JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')])])]),a("p",[t._v("Explanation of results:")]),t._v(" "),a("ul",[a("li",[t._v("status: Trigger task status, when it is successfully triggered, it is Success; when for some reason (for example, the appropriate version is not obtained), it returns Fail.")]),t._v(" "),a("li",[t._v("msg: Give specific success or failure information.")])]),t._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X POST http://192.168.10.24:8040/api/compaction/run?tablet_id=10015\\&schema_hash=1294206575\\&compact_type=cumulative\n")])])]),a("h2",{attrs:{id:"manual-compaction-execution-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-compaction-execution-status"}},[t._v("#")]),t._v(" Manual Compaction execution status")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://be_host:webserver_port/api/compaction/run_status?tablet_id=xxxx\\&schema_hash=yyyy\n")])])]),a("p",[t._v("If the tablet does not exist, an error in JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')])])]),a("p",[t._v("If the tablet exists and the tablet is not running, JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')])])]),a("p",[t._v("If the tablet exists and the tablet is running, JSON format is returned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')])])]),a("p",[t._v("Explanation of results:")]),t._v(" "),a("ul",[a("li",[t._v("run_status: Get the current manual compaction task execution status.")])]),t._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET http://192.168.10.24:8040/api/compaction/run_status?tablet_id=10015\\&schema_hash=1294206575\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
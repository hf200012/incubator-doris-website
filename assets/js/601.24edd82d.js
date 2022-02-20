(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{1055:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-routine-load"}},[e._v("#")]),e._v(" SHOW ROUTINE LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This statement is used to show the running status of the Routine Load job\ngrammar:\n    SHOW [ALL] ROUTINE LOAD [FOR jobName];\n\nResult description:\n\n              Id: Job ID\n            Name: job name\n      CreateTime: Job creation time\n       PauseTime: Last job pause time\n         EndTime: The end time of the job\n          DbName: corresponding database name\n       TableName: Corresponding table name\n           State: job running status\n  DataSourceType: Data source type: KAFKA\n  CurrentTaskNum: current number of subtasks\n   JobProperties: Job configuration details\n")])])]),a("p",[e._v("DataSourceProperties: Data source configuration details\nCustomProperties: custom configuration\nStatistic: job running status statistics\nProgress: Job running progress\nLag: job delay status\nReasonOfStateChanged: Reason of job status change\nErrorLogUrls: The viewing address of the filtered data with unqualified quality\nOtherMsg: Other error messages")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('* State\n\n    There are the following 4 states:\n\n    * NEED_SCHEDULE: The job is waiting to be scheduled\n    * RUNNING: The job is running\n    * PAUSED: The job is suspended\n    * STOPPED: The job has ended\n    * CANCELLED: The job has been cancelled\n\n* Progress\n\n    For Kafka data sources, the offset currently consumed by each partition is displayed. For example, {"0":"2"} means that the consumption progress of Kafka partition 0 is 2.\n\n* Lag\n\n    For Kafka data sources, the consumption delay of each partition is displayed. For example, {"0":10} means that the consumption delay of Kafka partition 0 is 10.\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[e._v("Show all routine import jobs named test 1 (including stopped or cancelled jobs). The result is one or more lines.")])]),e._v(" "),a("p",[e._v("SHOW ALL ROUTINE LOAD FOR test1;")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Show the current running routine import job named test1")])]),e._v(" "),a("p",[e._v("SHOW ROUTINE LOAD FOR test1;")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Display all routine import jobs (including stopped or cancelled jobs) under example_db. The result is one or more lines.")])]),e._v(" "),a("p",[e._v("use example_db;\nSHOW ALL ROUTINE LOAD;")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Display all running routine import jobs under example_db")])]),e._v(" "),a("p",[e._v("use example_db;\nSHOW ROUTINE LOAD;")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Display the current running routine import job named test1 under example_db")])]),e._v(" "),a("p",[e._v("SHOW ROUTINE LOAD FOR example_db.test1;")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Display all routine import jobs named test1 (including stopped or cancelled jobs) under example_db. The result is one or more lines.")])]),e._v(" "),a("p",[e._v("SHOW ALL ROUTINE LOAD FOR example_db.test1;")]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("SHOW,ROUTINE,LOAD")])])}),[],!1,null,null,null);t.default=n.exports}}]);
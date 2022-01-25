(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{1052:function(a,t,e){"use strict";e.r(t);var i=e(56),s=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"show-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-transaction"}},[a._v("#")]),a._v(" SHOW TRANSACTION")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("p",[a._v("This syntax is used to view transaction details for the specified transaction id or label name.")]),a._v(" "),e("p",[a._v("grammar:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n")])])]),e("p",[a._v("Example return result:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")])])]),e("ul",[e("li",[a._v("TransactionId: transaction id")]),a._v(" "),e("li",[a._v("Label: the label of the corresponding load job")]),a._v(" "),e("li",[a._v("Coordinator: the node responsible for transaction coordination")]),a._v(" "),e("li",[a._v("TransactionStatus: transaction status\n    * PREPARE: preparation stage\n    * COMMITTED: The transaction was successful, but the data is not visible\n    * VISIBLE: The transaction was successful and the data is visible\n    * ABORTED: transaction failed")]),a._v(" "),e("li",[a._v("LoadJobSourceType: The type of the load job.")]),a._v(" "),e("li",[a._v("PrepareTime: transaction start time")]),a._v(" "),e("li",[a._v("CommitTime: the time when the transaction was successfully committed")]),a._v(" "),e("li",[a._v("FinishTime: The time when the data is visible")]),a._v(" "),e("li",[a._v("Reason: error message")]),a._v(" "),e("li",[a._v("ErrorReplicasCount: Number of replicas with errors")]),a._v(" "),e("li",[a._v("ListenerId: the id of the related load job")]),a._v(" "),e("li",[a._v("TimeoutMs: transaction timeout time in milliseconds")])]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("View the transaction with id 4005:")]),a._v(" "),e("p",[a._v("SHOW TRANSACTION WHERE ID = 4005;")])]),a._v(" "),e("li",[e("p",[a._v("Specify the db and view the transaction with id 4005:")]),a._v(" "),e("p",[a._v("SHOW TRANSACTION FROM db WHERE ID = 4005;")])]),a._v(" "),e("li",[e("p",[a._v("View the transaction with label "),e("code",[a._v("label_name")]),a._v(":")]),a._v(" "),e("p",[a._v("SHOW TRANSACTION WHERE LABEL = 'label_name';")])])]),a._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW, TRANSACTION")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
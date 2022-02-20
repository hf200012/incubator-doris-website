(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{575:function(e,t,a){"use strict";a.r(t);var o=a(56),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" Update")]),e._v(" "),a("p",[e._v("If we need to modify or update the data in Doris, we can use the UPDATE command.")]),e._v(" "),a("h2",{attrs:{id:"applicable-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicable-scenarios"}},[e._v("#")]),e._v(" Applicable scenarios")]),e._v(" "),a("ul",[a("li",[e._v("To modify the value of a row that meets certain conditions.")]),e._v(" "),a("li",[e._v("Point updates, small updates, where the rows to be updated are preferably a very small part of the entire table.")]),e._v(" "),a("li",[e._v("Only could be used in Unique table")])]),e._v(" "),a("h2",{attrs:{id:"explanation-of-terms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explanation-of-terms"}},[e._v("#")]),e._v(" Explanation of terms")]),e._v(" "),a("ol",[a("li",[e._v("Unique model: A data model in the Doris system. When the user imports rows with the same Key, the Value of the latter overrides the existing Value, in the same sense as Unique in Mysql.")])]),e._v(" "),a("h2",{attrs:{id:"fundamentals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundamentals"}},[e._v("#")]),e._v(" Fundamentals")]),e._v(" "),a("p",[e._v("Use the query engine's own where filtering logic to filter the rows that need to be updated from the table to be updated. Then use the Unique model's own Value column replacement logic to change the rows to be updated and reinsert them into the table. This enables row-level updates.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Suppose there is an order table in Doris, where order id is the Key column, order status, and order amount are the Value columns. The data state is as follows.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("order id")]),e._v(" "),a("th",[e._v("order amount")]),e._v(" "),a("th",[e._v("order status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("Pending Payment")])])])]),e._v(" "),a("p",[e._v("At this time, after the user clicks the payment, Doris system needs to change the order id to '1' order status to 'pending shipment', you need to use the Update function.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UPDATE order SET order status='To be shipped' WHERE order id=1;\n")])])]),a("p",[e._v("After the user executes the UPDATE command, the system performs the following three steps.")]),e._v(" "),a("ul",[a("li",[e._v("Step 1: Read the rows that satisfy WHERE order id=1\n(1, 100, 'pending payment')")]),e._v(" "),a("li",[e._v("Step 2: Change the order status of the row from 'Pending Payment' to 'Pending Shipping'\n(1, 100, 'Pending shipment')")]),e._v(" "),a("li",[e._v("Step 3: Insert the updated row back into the table to achieve the updated effect.\n| order id | order amount | order status |\n| ---| ---| ---|\n| 1 | 100| Pending Payment |\n| 1 | 100 | Pending shipments |\nSince the table order is a UNIQUE model, the rows with the same Key, after which the latter will take effect, so the final effect is as follows.\n| order id | order amount | order status |\n|--|--|--|\n| 1 | 100 | Pending shipments |")])]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic operations")]),e._v(" "),a("h3",{attrs:{id:"update-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-syntax"}},[e._v("#")]),e._v(" UPDATE syntax")]),e._v(" "),a("p",[a("code",[e._v("UPDATE table_name SET value=xxx WHERE condition;")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("table_name")]),e._v(": the table to be updated, must be a UNIQUE model table to update.")])]),e._v(" "),a("li",[a("p",[e._v("value=xxx: The column to be updated, the left side of the equation must be the value column of the table. The right side of the equation can be a constant or an expression transformation of a column in a table.\nFor example, if value = 1, then the value of the column to be updated will be 1.\nFor example, if value = value + 1, the value of the column to be updated is incremented by 1.")])]),e._v(" "),a("li",[a("p",[e._v("condition: Only rows that satisfy the condition will be updated. condition must be an expression that results in a Boolean type.\nFor example, if k1 = 1, only rows with a k1 column value of 1 will be updated.\nFor example, if k1 = k2, only rows with the same value in column k1 as in column k2 will be updated.\nNo support for unfilled condition, i.e., no support for full table updates.")])])]),e._v(" "),a("h3",{attrs:{id:"synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronization"}},[e._v("#")]),e._v(" Synchronization")]),e._v(" "),a("p",[e._v("The Update syntax is a synchronization syntax in Doris. If the Update statement succeeds, the update succeeds and the data is visible.")]),e._v(" "),a("h3",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),a("p",[e._v("The performance of the Update statement is closely related to the number of rows to be updated and the retrieval efficiency of the condition.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Number of rows to be updated: The more rows to be updated, the slower the Update statement will be. This is consistent with the principle of importing.\nDoris updates are more suitable for occasional update scenarios, such as changing the values of individual rows.\nDoris is not suitable for large batches of data changes. Large modifications can make Update statements take a long time to run.")])]),e._v(" "),a("li",[a("p",[e._v("Condition retrieval efficiency: Doris Update implements the principle of reading the rows that satisfy the condition first, so if the condition retrieval efficiency is high, the Update will be faster.\nThe condition column should ideally be hit, indexed, or bucket clipped. This way Doris does not need to scan the entire table and can quickly locate the rows that need to be updated. This improves update efficiency.\nIt is strongly discouraged to include the UNIQUE model value column in the condition column.")])])]),e._v(" "),a("h3",{attrs:{id:"concurrency-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-control"}},[e._v("#")]),e._v(" Concurrency Control")]),e._v(" "),a("p",[e._v("By default, multiple concurrent Update operations on the same table are not allowed at the same time.")]),e._v(" "),a("p",[e._v("The main reason for this is that Doris currently supports row updates, which means that even if the user declares "),a("code",[e._v("SET v2 = 1")]),e._v(", virtually all other Value columns will be overwritten (even though the values are not changed).")]),e._v(" "),a("p",[e._v("This presents a problem in that if two Update operations update the same row at the same time, the behavior may be indeterminate. That is, there may be dirty data.")]),e._v(" "),a("p",[e._v("However, in practice, the concurrency limit can be turned on manually if the user himself can guarantee that even if concurrent updates are performed, they will not operate on the same row at the same time. This is done by modifying the FE configuration "),a("code",[e._v("enable_concurrent_update")]),e._v(". When the configuration value is true, there is no limit on concurrent updates.")]),e._v(" "),a("h2",{attrs:{id:"risks-of-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#risks-of-use"}},[e._v("#")]),e._v(" Risks of use")]),e._v(" "),a("p",[e._v("Since Doris currently supports row updates and uses a two-step read-and-write operation, there is uncertainty about the outcome of an Update statement if it modifies the same row as another Import or Delete statement.")]),e._v(" "),a("p",[e._v("Therefore, when using Doris, you must be careful to control the concurrency of Update statements and other DML statements on the "),a("em",[e._v("user side itself")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("p",[e._v("Doris Version 0.15.x +")])])}),[],!1,null,null,null);t.default=n.exports}}]);
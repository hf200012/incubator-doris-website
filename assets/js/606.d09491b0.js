(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1055:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" UPDATE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UPDATE table_name \n    SET assignment_list\n    WHERE expression\n\nvalue:\n    {expr | DEFAULT}\n\nassignment:\n    col_name = value\n\nassignment_list:\n    assignment [, assignment] ...\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[e._v("table_name: The target table of the data to be updated. Can be in the form of 'db_name.table_name'")]),e._v(" "),a("li",[e._v("assignment_list: The target column to be updated. Can be in the form of 'col_name = value, col_name = value'")]),e._v(" "),a("li",[e._v("where expression: The condition to be updated is an expression that returns true or false")])]),e._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("p",[e._v("The current UPDATE statement only supports row updates on the Unique model, and there may be data conflicts caused by concurrent updates.\nCurrently Doris does not deal with such problems, and users are required to avoid such problems from the business side.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("test")]),e._v(" table is a unique model table, which contains four columns: k1, k2, v1, v2. Among them, k1, k2 are keys, v1, v2 are values, and the aggregation method is Replace.")]),e._v(" "),a("ol",[a("li",[e._v("Update the v1 column that satisfies the conditions k1 =1 and k2 = 2 in the'test' table to 1")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Increment the v1 column of the column with k1=1 in the'test' table by 1")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("UPDATE test SET v1 = v1+1 WHERE k1=1;\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("UPDATE\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
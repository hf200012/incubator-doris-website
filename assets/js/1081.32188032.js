(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{1536:function(a,t,e){"use strict";e.r(t);var n=e(56),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"not-like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#not-like"}},[a._v("#")]),a._v(" not like")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" syntax")]),a._v(" "),e("p",[e("code",[a._v("BOOLEAN not like(VARCHAR str, VARCHAR pattern)")])]),a._v(" "),e("p",[a._v("对字符串 str 进行模糊匹配，匹配上的则返回 false，没匹配上则返回 true。")]),a._v(" "),e("p",[a._v("like 匹配/模糊匹配，会与 % 和 _ 结合使用。")]),a._v(" "),e("p",[a._v("百分号 '%' 代表零个、一个或多个字符。")]),a._v(" "),e("p",[a._v("下划线 '_' 代表单个字符。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("'a'      // 精准匹配，和 `=` 效果一致\n'%a'     // 以a结尾的数据\n'a%'     // 以a开头的数据\n'%a%'    // 含有a的数据\n'_a_'    // 三位且中间字母是 a 的数据\n'_a'     // 两位且结尾字母是 a 的数据\n'a_'     // 两位且开头字母是 a 的数据\n'a__b'  // 四位且以字符a开头、b结尾的数据\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// 返回 k1 字符串中不包含 a 的数据\nmysql > select k1 from test where k1 not like '%a%';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n+-------+\n\n// 返回 k1 字符串中不等于 a 的数据\nmysql > select k1 from test where k1 not like 'a';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n+-------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("p",[a._v("LIKE, NOT, NOT LIKE")])])}),[],!1,null,null,null);t.default=s.exports}}]);
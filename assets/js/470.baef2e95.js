(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{924:function(t,a,e){"use strict";e.r(a);var s=e(56),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rpad"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpad"}},[t._v("#")]),t._v(" rpad")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("VARCHAR rpad (VARCHAR str, INT len, VARCHAR pad)")])]),t._v(" "),e("p",[t._v("Returns a string of length len in str, starting with the initials. If len is longer than str, pad characters are added to the right of STR until the length of the string reaches len. If len is less than str's length, the function is equivalent to truncating STR strings and returning only strings of len's length. The len is character length not the bye size.")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nmysql> SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("RPAD")])])}),[],!1,null,null,null);a.default=n.exports}}]);
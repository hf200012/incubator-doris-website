(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,s,a){"use strict";var i=a(1),n=a(40).find,e=a(119),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),i({target:"Array",proto:!0,forced:r},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),e("find")},395:function(t,s,a){},454:function(t,s,a){"use strict";a(395)},466:function(t,s,a){"use strict";a.r(s);a(39),a(7),a(357),a(191);var i={name:"CaseList",computed:{data:function(){var t=this.$lang;return this.$site.pages.filter((function(t){return"Home"===t.title})).find((function(s){return(s.path.indexOf("zh-CN")>-1?"zh-CN":"en")===t})).frontmatter}}},n=(a(454),a(56)),e=Object(n.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"case-wrap"},[t.data.cases?a("div",{staticClass:"wrapper cases"},[a("div",{staticClass:"title"},[t._v("\n        "+t._s(t.data.cases.title)+"\n      ")]),t._v(" "),a("div",{staticClass:"sub-title"},[t._v("\n        "+t._s(t.data.cases.subTitle)+"\n      ")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.data.cases.list,(function(s,i){return a("div",{key:i,staticClass:"case"},[s.logo?a("img",{attrs:{src:t.$withBase(s.logo),alt:s.alt}}):t._e()])})),0)]):t._e()])}),[],!1,null,null,null);s.default=e.exports}}]);
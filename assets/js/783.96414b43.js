(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{1237:function(e,t,a){"use strict";a.r(t);var s=a(56),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"贡献-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贡献-udf"}},[e._v("#")]),e._v(" 贡献 UDF")]),e._v(" "),a("p",[e._v("该手册主要讲述了外部用户如何将自己编写的 UDF 函数贡献给 Doris 社区。")]),e._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[e._v("#")]),e._v(" 前提条件")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("UDF 函数具有通用性")]),e._v(" "),a("p",[e._v("这里的通用性主要指的是：UDF 函数在某些业务场景下，被广泛使用。也就是说 UDF 函数具有复用价值，可被社区内其他用户直接使用。")]),e._v(" "),a("p",[e._v("如果你不确定自己写的 UDF 函数是否具有通用性，可以发邮件到 "),a("code",[e._v("dev@doris.apache.org")]),e._v(" 或直接创建 ISSUE 发起讨论。")])]),e._v(" "),a("li",[a("p",[e._v("UDF 已经完成测试，并正常运行在用户的生产环境中")])])]),e._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),a("ol",[a("li",[e._v("UDF 的 source code")]),e._v(" "),a("li",[e._v("UDF 的使用手册")])]),e._v(" "),a("h3",{attrs:{id:"源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源代码"}},[e._v("#")]),e._v(" 源代码")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("contrib/udf/src/")]),e._v(" 下创建一个存放 UDF 函数的文件夹，并将源码和 CMAKE 文件存放在此处。待贡献的源代码应该包含: "),a("code",[e._v(".h")]),e._v(" , "),a("code",[e._v(".cpp")]),e._v(", "),a("code",[e._v("CMakeFile.txt")]),e._v("。这里以 udf_samples 为例，首先在 "),a("code",[e._v("contrib/udf/src/")]),e._v(" 路径下创建一个新的文件夹，并存放源码。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   ├──contrib\n   │  └── udf\n   │    ├── CMakeLists.txt\n   │    └── src\n   │       └── udf_samples\n   │           ├── CMakeLists.txt\n   │           ├── uda_sample.cpp\n   │           ├── uda_sample.h\n   │           ├── udf_sample.cpp\n   │           └── udf_sample.h\n\n")])])]),a("ol",[a("li",[a("p",[e._v("CMakeLists.txt")]),e._v(" "),a("p",[e._v("用户的 "),a("code",[e._v("CMakeLists.txt")]),e._v(" 放在此处后，需要进行少量更改。去掉 "),a("code",[e._v("include udf")]),e._v(" 和 "),a("code",[e._v("udf lib")]),e._v(" 即可。去掉的原因是，在 "),a("code",[e._v("contrib/udf")]),e._v(" 层级的 CMake 文件中，已经声明了。")])])]),e._v(" "),a("h3",{attrs:{id:"使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用手册"}},[e._v("#")]),e._v(" 使用手册")]),e._v(" "),a("p",[e._v("使用手册需要包含：UDF 函数含义说明，适用的场景，函数的语法，如何编译 UDF ，如何在 Doris 集群中使用 UDF， 以及使用示例。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("使用手册需包含中英文两个版本，并分别存放在 "),a("code",[e._v("docs/zh-CN/extending-doris/udf/contrib")]),e._v(" 和 "),a("code",[e._v("docs/en/extending-doris/udf/contrib")]),e._v(" 下。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── docs\n│   └── zh-CN\n│       └──extending-doris\n│          └──udf\n│            └──contrib\n│              ├── udf-simple-manual.md\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── docs\n│   └── en\n│       └──extending-doris\n│          └──udf\n│            └──contrib\n│              ├── udf-simple-manual.md\n")])])])]),e._v(" "),a("li",[a("p",[e._v("将两个使用手册的文件，加入中文和英文的 sidebar 中。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('vi docs/.vuepress/sidebar/zh-CN.js\n{\n    title: "用户贡献的 UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('vi docs/.vuepress/sidebar/en.js\n{\n    title: "Users contribute UDF",\n    directoryPath: "contrib/",\n    children:\n    [\n        "udf-simple-manual",\n    ],\n},\n\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"贡献-udf-到社区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贡献-udf-到社区"}},[e._v("#")]),e._v(" 贡献 UDF 到社区")]),e._v(" "),a("p",[e._v("当你符合前提条件并准备好代码，文档后就可以将 UDF 贡献到 Doris 社区了。在  "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1),e._v(" 上面提交 Pull Request (PR) 即可。具体提交方式见："),a("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request (PR)"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[e._v("最后，当 PR 评审通过并 Merge 后。恭喜你，你的 UDF 已经贡献给 Doris 社区，你可以在 "),a("a",{attrs:{href:"http://doris.apache.org/master/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doris 官网"),a("OutboundLink")],1),e._v(" 的扩展功能部分查看到啦~。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
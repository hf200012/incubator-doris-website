(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1222:function(a,e,t){"use strict";t.r(e);var s=t(56),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"完成发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成发布"}},[a._v("#")]),a._v(" 完成发布")]),a._v(" "),t("p",[a._v("本文档中的步骤，是在完成 dev@doris 或 general@incubator 邮件组中的发版投票并通过后，进行的后续步骤。")]),a._v(" "),t("h2",{attrs:{id:"上传-package-到-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传-package-到-release"}},[a._v("#")]),a._v(" 上传 package 到 release")]),a._v(" "),t("p",[a._v("当正式发布投票成功后，先发[Result]邮件，然后就准备 release package。\n将之前在dev下发布的对应文件夹下的源码包、签名文件和hash文件拷贝到另一个目录 0.9.0-incubating，注意文件名字中不要rcxx (可以rename，但不要重新计算签名，hash可以重新计算，结果不会变)")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("From:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/incubator/doris/\n")])])]),t("p",[a._v("第一次发布的话 KEYS 文件也需要拷贝过来。然后add到svn release 下。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("add 成功后就可以在下面网址上看到你发布的文件\nhttps://dist.apache.org/repos/dist/release/incubator/doris/0.xx.0-incubating/\n\n稍等一段时间后，能在 apache 官网看到：\nhttp://www.apache.org/dist/incubator/doris/0.9.0-incubating/\n")])])]),t("h2",{attrs:{id:"在-doris-官网和-github-发布链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-doris-官网和-github-发布链接"}},[a._v("#")]),a._v(" 在 Doris 官网和 github 发布链接")]),a._v(" "),t("p",[a._v("我们以 Doris Core 为例。其他组件注意替换对应的名称。")]),a._v(" "),t("h3",{attrs:{id:"创建下载链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建下载链接"}},[a._v("#")]),a._v(" 创建下载链接")]),a._v(" "),t("p",[a._v("下载链接：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('http://www.apache.org/dyn/closer.cgi?filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz"\n')])])]),t("p",[a._v("原始位置:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://www.apache.org/dist/incubator/doris/0.9.0-incubating/\n\nhttp://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz\n")])])]),t("p",[a._v("源码包：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.sha512\n")])])]),t("p",[a._v("KEYS:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://archive.apache.org/dist/incubator/doris/KEYS\n")])])]),t("p",[a._v("refer to: "),t("a",{attrs:{href:"http://www.apache.org/dev/release-download-pages#closer",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.apache.org/dev/release-download-pages#closer"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"准备-release-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备-release-note"}},[a._v("#")]),a._v(" 准备 release note")]),a._v(" "),t("p",[a._v("需要修改如下两个地方：")]),a._v(" "),t("p",[a._v("1、Github 的 release 页面")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n")])])]),t("p",[a._v("2、Doris 官网下载页面")]),a._v(" "),t("p",[a._v("下载页面是一个 markdown 文件，地址如下。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docs/zh-CN/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")])])]),t("ol",[t("li",[a._v("需要将上一次发布版本的下载包地址改为 apache 的归档地址（见后）。")]),a._v(" "),t("li",[a._v("增加新版本的下载信息。")])]),a._v(" "),t("h3",{attrs:{id:"svn-上清理旧版本的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svn-上清理旧版本的包"}},[a._v("#")]),a._v(" svn 上清理旧版本的包")]),a._v(" "),t("ol",[t("li",[a._v("svn 上删除旧版本的包")])]),a._v(" "),t("p",[a._v("由于 svn 只需要保存最新版本的包，所以当有新版本发布的时候，旧版本的包就应该从 svn 上清理。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://dist.apache.org/repos/dist/release/incubator/doris/\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),t("p",[a._v("保持这两个地址中，只有最新版本的包即可。")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("将 Doris 官网的下载页面中，旧版本包的下载地址改为归档页面的地址")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("下载页面: http://doris.apache.org/downloads.html\n归档页面: http://archive.apache.org/dist/incubator/doris\n")])])]),t("p",[a._v("Apache 会有同步机制去将历史的发布版本进行一个归档，具体操作见："),t("a",{attrs:{href:"https://www.apache.org/legal/release-policy.html#how-to-archive",target:"_blank",rel:"noopener noreferrer"}},[a._v("how to archive"),t("OutboundLink")],1),a._v("\n所以即使旧的包从 svn 上清除，还是可以在归档页面中找到。")]),a._v(" "),t("h2",{attrs:{id:"announce-邮件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#announce-邮件"}},[a._v("#")]),a._v(" Announce 邮件")]),a._v(" "),t("p",[a._v("Title:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[ANNOUNCE] Apache Doris (incubating) 0.9.0 Release\n")])])]),t("p",[a._v("发送邮件组：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dev@doris.apache.org\n")])])]),t("p",[a._v("孵化器项目，还需发送到：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("general@incubator.apache.org\n")])])]),t("p",[a._v("邮件正文：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Hi All,\n\nWe are pleased to announce the release of Apache Doris 0.9.0-incubating.\n\nApache Doris (incubating) is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/incubator-doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n\n---\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
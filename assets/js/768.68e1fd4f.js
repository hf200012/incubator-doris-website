(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1222:function(a,e,n){"use strict";n.r(e);var r=n(56),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"发布-doris-connectors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布-doris-connectors"}},[a._v("#")]),a._v(" 发布 Doris Connectors")]),a._v(" "),n("p",[a._v("Doris Connectors 目前包含：")]),a._v(" "),n("ul",[n("li",[a._v("Doris Flink Connector")]),a._v(" "),n("li",[a._v("Doris Spark Connector。")])]),a._v(" "),n("p",[a._v("其代码库独立于 Doris 主代码库，分别位于：")]),a._v(" "),n("ul",[n("li",[a._v("https://github.com/apache/incubator-doris-flink-connector")]),a._v(" "),n("li",[a._v("https://github.com/apache/incubator-doris-spark-connector")])]),a._v(" "),n("h2",{attrs:{id:"准备发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备发布"}},[a._v("#")]),a._v(" 准备发布")]),a._v(" "),n("p",[a._v("首先，请参阅 "),n("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-prepare.html"}},[a._v("发版准备")]),a._v(" 文档进行发版准备。")],1),a._v(" "),n("h2",{attrs:{id:"准备发布-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备发布-2"}},[a._v("#")]),a._v(" 准备发布")]),a._v(" "),n("p",[a._v("首先，请参阅 "),n("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-prepare.html"}},[a._v("发版准备")]),a._v(" 文档进行发版准备。## 发布到 Maven")],1),a._v(" "),n("p",[a._v("我们以发布 Flink Connector v1.0.0 为例。")]),a._v(" "),n("h3",{attrs:{id:"_1-准备分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备分支"}},[a._v("#")]),a._v(" 1. 准备分支")]),a._v(" "),n("p",[a._v("在代码库中创建分支：branch-1.0，并 checkout 到该分支。")]),a._v(" "),n("h3",{attrs:{id:"_2-发布到-maven-staging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-发布到-maven-staging"}},[a._v("#")]),a._v(" 2. 发布到 Maven staging")]),a._v(" "),n("p",[a._v("因为 Flink Connector 针对不同 Flink 版本（如 1.11, 1.12, 1.13）发布不同的 Release。因此我们需要针对每一个版本单独进行处理。")]),a._v(" "),n("p",[a._v("下面我们以 Flink 版本 1.13.5，scala 版本 2.12 为例说明：")]),a._v(" "),n("p",[a._v("先替换 pom.xml 中的 flink.version 和 scala.version：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("cd flink-doris-connector/\nsed -i 's/\\${flink.version}/1.13.5/g' pom.xml\nsed -i 's/\\${scala.version}/2.12/g' pom.xml\n")])])]),n("p",[a._v("替换后，提交本地修改：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('git add . -u\ngit commit -m "prepare for 1.13.5-2.12-1.0.0"\n')])])]),n("p",[a._v("执行以下命令开始生成 release tag：")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" flink-doris-connector/\nmvn release:clean -DreleaseArgs"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dflink.version=1.13.5 -Dscala.version=2.12"')]),a._v(" -Dflink.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".5 -Dscala.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.12")]),a._v("\nmvn release:prepare -DreleaseArgs"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dflink.version=1.13.5 -Dscala.version=2.12"')]),a._v(" -Dflink.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".5 -Dscala.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.12")]),a._v(" -DpushChanges"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),n("p",[a._v("其中 "),n("code",[a._v("-DpushChanges=false")]),a._v(" 表示执行过程中，不会向代码库推送新生成的分支和 tag。")]),a._v(" "),n("p",[a._v("在执行 "),n("code",[a._v("release:prepare")]),a._v(" 命令后，会要求提供以下三个信息：")]),a._v(" "),n("ol",[n("li",[a._v("Doris Flink Connector 的版本信息， 我们默认就可以，可以直接回车或者输入自己想要的版本。版本格式为 "),n("code",[a._v("{flink.version}-{scala.version}-{connector.version}")]),a._v("，如 "),n("code",[a._v("1.13.5-2.12-1.0.0")]),a._v("。")]),a._v(" "),n("li",[a._v("Doris Flink Connector 的 release tag, release 过程会在本地生成一个 tag。我们使用默认的 tag 名称即可，如 "),n("code",[a._v("1.13.5-2.12-1.0.0")]),a._v("。")]),a._v(" "),n("li",[a._v("Doris Flink Connector 下一个版本的版本号。这个版本号只是用于生成本地分支时使用，无实际意义。我们按规则填写一个即可，比如当前要发布的版本是："),n("code",[a._v("1.13.5-2.12-1.0.0")]),a._v("，那么下一个版本号填写 "),n("code",[a._v("1.13.5-2.12-1.0.1")]),a._v(" 即可。")])]),a._v(" "),n("p",[n("code",[a._v("mvn release:prepare")]),a._v(" 可能会要求输入 GPG passphrase。如果出现 "),n("code",[a._v("gpg: no valid OpenPGP data found")]),a._v(" 错误，则可以执行 "),n("code",[a._v("export GPG_TTY=$(tty)")]),a._v(" 后在尝试。")]),a._v(" "),n("p",[n("code",[a._v("mvn release:prepare")]),a._v(" 执行成功后，会在本地生成一个 tag 和一个 branch。并且当前分支会新增两个 commit。第一个 commit 对应的是新生成的 tag，第二个则是下一个版本的 branch。可以通过 "),n("code",[a._v("git log")]),a._v(" 查看。")]),a._v(" "),n("p",[a._v("本地 tag 确认无误后，需要将 tag 推送到代码库：")]),a._v(" "),n("p",[n("code",[a._v("git push upstream --tags")])]),a._v(" "),n("p",[a._v("其中 upstream 指向 "),n("code",[a._v("apache/incubator-doris-flink-connector")]),a._v(" 代码库。")]),a._v(" "),n("p",[a._v("最后，执行 perform:")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('mvn release:perform -DreleaseArgs="-Dflink.version=1.13.5 -Dscala.version=2.12" -Dflink.version=1.13.5 -Dscala.version=2.12\n')])])]),n("p",[a._v("执行成功后，在 "),n("a",{attrs:{href:"https://repository.apache.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://repository.apache.org/#stagingRepositories"),n("OutboundLink")],1),a._v(" 里面可以找到刚刚发布的版本：")]),a._v(" "),n("img",{attrs:{src:a.$withBase("/images/staging-repositories.png"),alt:""}}),a._v(" "),n("p",[n("strong",[a._v("注意需要包含 "),n("code",[a._v(".asc")]),a._v(" 签名文件。")])]),a._v(" "),n("p",[a._v("如果操作有误。需要将本地 tag，代码库中的 tag 以及本地新生成的两个 commit 删除。并将 staging drop 掉。然后重新执行上述步骤。")]),a._v(" "),n("p",[a._v("检查完毕后，点击图中的 "),n("code",[a._v("close")]),a._v(" 按钮完成 staging 发布。")]),a._v(" "),n("h3",{attrs:{id:"_3-准备-svn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备-svn"}},[a._v("#")]),a._v(" 3. 准备 svn")]),a._v(" "),n("p",[a._v("检出 svn 仓库：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),n("p",[a._v("打包 tag 源码，并生成签名文件和sha256校验文件。这里我们以 "),n("code",[a._v("1.13.5-2.12-1.0.0")]),a._v(" 为例。其他 tag 操作相同")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("git archive --format=tar 1.13.5-2.12-1.0.0 --prefix=apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src/ | gzip > apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\ngpg -u xxx@apache.org --armor --output apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.asc  --detach-sign apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\nsha512sum apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz > apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.sha512\n")])])]),n("p",[a._v("最终得到三个文件：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\napache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.asc\napache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.sha512\n")])])]),n("p",[a._v("将这三个文件移动到 svn 目录下：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("doris/flink-connector/1.0.0/\n")])])]),n("p",[a._v("最终 svn 目录结构类似：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("|____0.15\n| |____0.15.0-rc04\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.asc\n| | |____apache-doris-0.15.0-incubating-src.tar.gz\n|____KEYS\n|____flink-connector\n| |____1.0.0\n| | |____apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating-src.tar.gz.asc\n| | |____apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.asc\n| | |____apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating-src.tar.gz.asc\n| | |____apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.sha512\n")])])]),n("p",[a._v("其中 0.15 是 Doris 主代码的目录，而 "),n("code",[a._v("flink-connector/1.0.0")]),a._v(" 下就是本次发布的内容了。")]),a._v(" "),n("p",[a._v("注意，KEYS 文件的准备，可参阅 "),n("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-prepare.html"}},[a._v("发版准备")]),a._v(" 中的介绍。")],1),a._v(" "),n("h3",{attrs:{id:"_4-投票"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-投票"}},[a._v("#")]),a._v(" 4. 投票")]),a._v(" "),n("p",[a._v("在 dev@doris 邮件组发起投票，模板如下：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Hi All,\n\nThis is a call for vote to release Flink Connectors v1.0.0 for Apache Doris(Incubating).\nThere are 3 outputs for different Flink version:\n\n- apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating\n\nThe release node:\nxxxxx\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/flink-connector/1.0.0/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1002/org/apache/doris/doris-flink-connector/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.11.6-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.12.7-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.13.5-2.12-1.0.0\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/incubator/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhttp://doris.incubator.apache.org/community/release-and-verify/release-verify.html\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n")])])]),n("p",[a._v("dev 邮件组通过后，再发送邮件到 general@incubator 邮件组进行 IPMC 投票。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Hi All,\n\nThis is a call for vote to release Flink Connectors v1.0.0 for Apache Doris(Incubating).\nThere are 3 outputs for different Flink version:\n\n- apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating\n\nThe release node:\nxxxxx\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/flink-connector/1.0.0/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1002/org/apache/doris/doris-flink-connector/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.11.6-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.12.7-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.13.5-2.12-1.0.0\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/incubator/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhttp://doris.incubator.apache.org/community/release-and-verify/release-verify.html\n\nVote thread at dev@doris: [1]\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n[1] vote thread in dev@doris\n")])])]),n("h2",{attrs:{id:"完成发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完成发布"}},[a._v("#")]),a._v(" 完成发布")]),a._v(" "),n("p",[a._v("请参阅 "),n("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-complete.html"}},[a._v("完成发布")]),a._v(" 文档完成所有发布流程。")],1),a._v(" "),n("h2",{attrs:{id:"附录-发布到-snapshot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附录-发布到-snapshot"}},[a._v("#")]),a._v(" 附录：发布到 SNAPSHOT")]),a._v(" "),n("p",[a._v("Snapshot 并非 Apache Release 版本，仅用于发版前的预览。在经过 PMC 讨论通过后，可以发布 Snapshot 版本")]),a._v(" "),n("p",[a._v("切换到 flink connector 目录， 我们以 flink 版本 1.13.5，scalar 2.12 为例")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("cd flink-doris-connector\nmvn deploy -Dflink.version=1.13.5 -Dscala.version=2.12\n")])])]),n("p",[a._v("之后你可以在这里看到 snapshot 版本：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("https://repository.apache.org/content/repositories/snapshots/org/apache/doris/doris-flink-connector/\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);
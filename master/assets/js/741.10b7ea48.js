(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1184:function(s,a,e){"use strict";e.r(a);var t=e(52),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),e("h3",{attrs:{id:"_0-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-requirements"}},[s._v("#")]),s._v(" 0. Requirements")]),s._v(" "),e("ol",[e("li",[s._v("apache 账号ID")]),s._v(" "),e("li",[s._v("apache 账号密码")]),s._v(" "),e("li",[s._v("gpg key")])]),s._v(" "),e("h3",{attrs:{id:"_1-准备本地maven-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备本地maven-环境"}},[s._v("#")]),s._v(" 1. 准备本地maven 环境")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("生成主密码： "),e("code",[s._v("mvn --encrypt-master-password <password>")]),s._v("   这个密码仅用作加密后续的其他密码使用, 输出类似 "),e("code",[s._v("{VSb+6+76djkH/43...}")]),s._v(" 之后创建 "),e("code",[s._v("~/.m2/settings-security.xml")]),s._v(" 文件，内容是")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<settingsSecurity>\n  <master>{VSb+6+76djkH/43...}</master>\n</settingsSecurity>\n")])])])]),s._v(" "),e("li",[e("p",[s._v("加密 apache 密码： "),e("code",[s._v("mvn --encrypt-password <password>")]),s._v(" 这个密码是apache 账号的密码 输出和上面类似"),e("code",[s._v("{GRKbCylpwysHfV...}")]),s._v(" 在"),e("code",[s._v("~/.m2/settings.xml")]),s._v(" 中加入")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  <servers>\n    \x3c!-- To publish a snapshot of your project --\x3e\n    <server>\n      <id>apache.snapshots.https</id>\n      <username>yangzhg</username>\n      <password>{GRKbCylpwysHfV...}</password>\n    </server>\n    \x3c!-- To stage a release of your project --\x3e\n    <server>\n      <id>apache.releases.https</id>\n      <username>yangzhg</username>\n      <password>{GRKbCylpwysHfV...}</password>\n    </server>\n  </servers>\n")])])])]),s._v(" "),e("li",[e("p",[s._v('可选，（也可以在部署时传递-Darguments="-Dgpg.passphrase=xxxx"），在'),e("code",[s._v("~/.m2/settings.xml")]),s._v(" 中加入如下内容，如果已经存在profiles 标签， 这只需要将profile  加入profiles 中即可，activeProfiles 同上， xxxx 是gpg 密钥的passphrase")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  <profiles>\n    <profile>\n      <id>gpg</id>\n      <properties>\n        <gpg.executable>gpg</gpg.executable>\n        <gpg.passphrase>xxxx</gpg.passphrase>\n      </properties>\n    </profile>\n  </profiles>\n  <activeProfiles>\n    <activeProfile>gpg</activeProfile>\n  </activeProfiles>\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"发布到snapshot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布到snapshot"}},[s._v("#")]),s._v(" 发布到SNAPSHOT")]),s._v(" "),e("h3",{attrs:{id:"_1-部署-flink-connector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署-flink-connector"}},[s._v("#")]),s._v(" 1. 部署 flink connector")]),s._v(" "),e("p",[s._v("切换到 flink connector 目录， 我们以 flink 版本 1.11.6， scalar 2.12 为例")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('cd incubator-doris/extension/flink-doris-connector\nexport DORIS_HOME=$PWD/../../\nsource ${DORIS_HOME}/env.sh\nif [ -f ${DORIS_HOME}/custom_env.sh ]; then source ${DORIS_HOME}/custom_env.sh; fi\nexport FLINK_VERSION="1.11.6"\nexport SCALA_VERSION="2.12"\nmvn deploy\n')])])]),e("h3",{attrs:{id:"_2-部署-spark-connector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署-spark-connector"}},[s._v("#")]),s._v(" 2. 部署 Spark connector")]),s._v(" "),e("p",[s._v("切换到 spark connector 目录， 我们以 spark 版本 2.3.4， scalar 2.11 为例")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('cd incubator-doris/extension/spark-doris-connector\nexport DORIS_HOME=$PWD/../../\nsource ${DORIS_HOME}/env.sh\nif [ -f ${DORIS_HOME}/custom_env.sh ]; then source ${DORIS_HOME}/custom_env.sh; fi\nexport SPARK_VERSION="2.3.4"\nexport SCALA_VERSION="2.11"\nmvn deploy\n')])])]),e("h2",{attrs:{id:"发布到-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布到-release"}},[s._v("#")]),s._v(" 发布到 Release")]),s._v(" "),e("h3",{attrs:{id:"_1-准备github权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备github权限"}},[s._v("#")]),s._v(" 1. 准备GitHub权限")]),s._v(" "),e("p",[s._v("加密 github token 密码： "),e("code",[s._v("mvn --encrypt-password <token>")]),s._v(" 这个token 是github 用户生成的访问apache仓库的token 输出cat类似"),e("code",[s._v("{bSSA+TC6wzEHNKukcOn...}")]),s._v(" 在"),e("code",[s._v("~/.m2/settings.xml")]),s._v(" 中的"),e("code",[s._v("<servers>")]),s._v(" 标签中加入")]),s._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("github"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("github user name"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{bSSA+TC6wzEHNKukcOn...}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),e("h3",{attrs:{id:"_2-发布到-maven-staging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-发布到-maven-staging"}},[s._v("#")]),s._v(" 2. 发布到 maven staging")]),s._v(" "),e("p",[s._v("以发布Doris Flink Connector 1.0.0 为例， flink 版本是 1.13.5 scala 版本是2.12, 其他类似")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" extension/flink-doris-connector/\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DORIS_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DORIS_HOME}")]),s._v("/env.sh\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FLINK_VERSION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.13")]),s._v(".5\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SCALA_VERSION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.12")]),s._v("\nmvn release:clean\nmvn release:prepare\n")])])]),e("p",[s._v("之后maven 需要输入三个信息")]),s._v(" "),e("ol",[e("li",[s._v("Doris Flink Connector 的版本信息， 我们默认就可以，可以直接回车或者输入自己想要的版本")]),s._v(" "),e("li",[s._v("Doris Flink Connector 的release tag, 因为release 过程会在apache/incubator-doris中添加一个tag, 因此需要一个tag名称，如果默认，直接回车即可")]),s._v(" "),e("li",[s._v("Doris Flink Connector 下一个版本的版本号，这里需要注意，由于我们的版本号是 {flink_version}_{scala_version}_1.0.0 因此 maven 的算法会将scala 版本号加一，如果我们下次想用1.0.1 这个版本 我们可以改成1.13.5-2.12-1.0.1-SNAPSHOT")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('...\n[INFO] [prepare] 3/17 check-dependency-snapshots\n[INFO] Checking dependencies and plugins for snapshots ...\n[INFO] [prepare] 4/17 create-backup-poms\n[INFO] [prepare] 5/17 map-release-versions\nWhat is the release version for "Doris Flink Connector"? (org.apache.doris:doris-flink-connector) 1.13.5-2.12-1.0.0: :\n[INFO] [prepare] 6/17 input-variables\nWhat is the SCM release tag or label for "Doris Flink Connector"? (org.apache.doris:doris-flink-connector) doris-flink-connector-1.13.5-2.12-1.0.0: :\n[INFO] [prepare] 7/17 map-development-versions\nWhat is the new development version for "Doris Flink Connector"? (org.apache.doris:doris-flink-connector) 1.13.5-3.12-1.0.0-SNAPSHOT: : 1.13.5-2.12-1.0.1-SNAPSHOT\n...\n[INFO] [prepare] 17/17 end-release\n[INFO] Release preparation complete.\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  01:00 min\n[INFO] Finished at: 2022-01-05T15:01:55+08:00\n[INFO] ------------------------------------------------------------------------\n')])])]),e("p",[s._v("prepare 之后 perform即可， perform 之后就在"),e("code",[s._v("https://repository.apache.org/")]),s._v(" 里面的stagingRepositories 找到刚刚发布的版本\n"),e("img",{attrs:{src:s.$withBase("/images/staging_repo.png"),alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_3-投票"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-投票"}},[s._v("#")]),s._v(" 3. 投票")]),s._v(" "),e("p",[s._v("投票前需要先close staging\n"),e("img",{attrs:{src:s.$withBase("/images/close_staging.png"),alt:""}}),s._v("\n之后就可以在dev邮件组发起投票， 下面是一个邮件示例")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Hi,\n\nWe are ready to deploy Doris connectors to Maven Central Repository, as the version 1.0.0, and the next version will be 1.0.1\nThis Release contains Spark connectors and Flink connectors for spark 2/3 and flink 1.11/1.12/1.13\n\nGitHub tags:\nhttps://github.com/apache/incubator-doris/releases/tag/doris-spark-connector-3.1.2-2.12-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-spark-connector-2.3.4-2.11-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-flink-connector-1.13.5-2.12-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-flink-connector-1.12.7-2.12-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-flink-connector-1.11.6-2.12-1.0.0\n\nStaging repo:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1000\n\nVote open for at least 72 hours.\n\n[ ] +1\n[ ] +0\n[ ] -1\n")])])]),e("p",[s._v("投票通过后就可以发布到 Maven Central 了\n"),e("img",{attrs:{src:s.$withBase("/images/release-stage.png"),alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
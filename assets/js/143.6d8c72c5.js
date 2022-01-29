(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{595:function(e,s,a){"use strict";a.r(s);var t=a(56),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"prepare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare"}},[e._v("#")]),e._v(" Prepare")]),e._v(" "),a("h3",{attrs:{id:"_0-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-requirements"}},[e._v("#")]),e._v(" 0. Requirements")]),e._v(" "),a("ol",[a("li",[e._v("apache account ID")]),e._v(" "),a("li",[e._v("apache password")]),e._v(" "),a("li",[e._v("gpg key")])]),e._v(" "),a("h3",{attrs:{id:"_1-prepare-the-local-maven-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-prepare-the-local-maven-environment"}},[e._v("#")]),e._v(" 1. Prepare the local maven environment")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Generate the master password: "),a("code",[e._v("mvn --encrypt-master-password <password>")]),e._v(" This password is only used to encrypt other subsequent passwords, and the output is similar to "),a("code",[e._v("{VSb+6+76djkH/43...}")]),e._v(" and then create"),a("code",[e._v("~/.m2/settings-security.xml")]),e._v(" file, the content is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<settingsSecurity>\n  <master>{VSb+6+76djkH/43...}</master>\n</settingsSecurity>\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Encrypt apache password: "),a("code",[e._v("mvn --encrypt-password <password>")]),e._v(" This password is the password of the apache account. The output is similar to the above "),a("code",[e._v("{GRKbCylpwysHfV...}")]),e._v(" and added in "),a("code",[e._v("~/.m2/settings.xml")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  <servers>\n    \x3c!-- To publish a snapshot of your project --\x3e\n    <server>\n      <id>apache.snapshots.https</id>\n      <username>yangzhg</username>\n      <password>{GRKbCylpwysHfV...}</password>\n    </server>\n    \x3c!-- To stage a release of your project --\x3e\n    <server>\n      <id>apache.releases.https</id>\n      <username>yangzhg</username>\n      <password>{GRKbCylpwysHfV...}</password>\n    </server>\n  </servers>\n")])])])]),e._v(" "),a("li",[a("p",[e._v('Optional, (you can also pass -Darguments="-Dgpg.passphrase=xxxx" during deployment), add the following content in '),a("code",[e._v("~/.m2/settings.xml")]),e._v(", if the profiles tag already exists, this is only required Just add profile to profiles, activeProfiles is the same as above, xxxx is the passphrase of the gpg key")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  <profiles>\n    <profile>\n      <id>gpg</id>\n      <properties>\n        <gpg.executable>gpg</gpg.executable>\n        <gpg.passphrase>xxxx</gpg.passphrase>\n      </properties>\n    </profile>\n  </profiles>\n  <activeProfiles>\n    <activeProfile>gpg</activeProfile>\n  </activeProfiles>\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"publish-to-snapshot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-to-snapshot"}},[e._v("#")]),e._v(" Publish to SNAPSHOT")]),e._v(" "),a("h3",{attrs:{id:"_1-deploy-flink-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-flink-connector"}},[e._v("#")]),e._v(" 1. Deploy flink connector")]),e._v(" "),a("p",[e._v("Switch to the flink connector directory, let’s take flink version 1.11.6 and scalar 2.12 as examples")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd incubator-doris/extension/flink-doris-connector\nexport DORIS_HOME=$PWD/../../\nsource ${DORIS_HOME}/env.sh\nif [ -f ${DORIS_HOME}/custom_env.sh ]; then source ${DORIS_HOME}/custom_env.sh; fi\nmvn deploy -Dflink.version=1.11.6 -Dscala.version=2.12\n")])])]),a("h3",{attrs:{id:"_2-deploy-spark-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-deploy-spark-connector"}},[e._v("#")]),e._v(" 2. Deploy Spark connector")]),e._v(" "),a("p",[e._v("Switch to the spark connector directory, let’s take spark version 2.3.4 and scalar 2.11 as examples")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd incubator-doris/extension/spark-doris-connector\nexport DORIS_HOME=$PWD/../../\nsource ${DORIS_HOME}/env.sh\nif [ -f ${DORIS_HOME}/custom_env.sh ]; then source ${DORIS_HOME}/custom_env.sh; fi\nmvn deploy -Dscala.version=2.11 -Dspark.version=2.3.4\n")])])]),a("h2",{attrs:{id:"publish-to-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-to-release"}},[e._v("#")]),e._v(" Publish to Release")]),e._v(" "),a("h3",{attrs:{id:"_1-prepare-github-authority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-prepare-github-authority"}},[e._v("#")]),e._v(" 1. Prepare GitHub authority")]),e._v(" "),a("p",[e._v("Encrypt github token password: "),a("code",[e._v("mvn --encrypt-password <token>")]),e._v(" This token is a token generated by github users to access the apache warehouse. The output cat is similar to "),a("code",[e._v("{bSSA+TC6wzEHNKukcOn...}")]),e._v(" in "),a("code",[e._v("~/.m2/settings. Add to the")]),a("servers",[a("code",[e._v("tag in xml")])])],1),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("github"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("github user name"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("{bSSA+TC6wzEHNKukcOn...}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("h3",{attrs:{id:"_2-publish-to-maven-staging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-publish-to-maven-staging"}},[e._v("#")]),e._v(" 2. Publish to  maven staging")]),e._v(" "),a("p",[e._v("Take the release of Doris Flink Connector 1.0.0 as an example, the flink version is 1.13.5, the scala version is 2.12, and others are similar")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" extension/flink-doris-connector/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DORIS_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${DORIS_HOME}")]),e._v("/env.sh\nmvn release:clean -Dflink.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.13")]),e._v(".5 -Dscala.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.12")]),e._v("\nmvn release:prepare -Dflink.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.13")]),e._v(".5 -Dscala.version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.12")]),e._v("\n")])])]),a("p",[e._v("After that, maven needs to enter three information")]),e._v(" "),a("ol",[a("li",[e._v("The version information of Doris Flink Connector, we can do it by default, you can directly press Enter or enter the version you want")]),e._v(" "),a("li",[e._v("The release tag of Doris Flink Connector, because the release process will add a tag in apache/incubator-doris, so a tag name is required. If it is default, just press Enter.")]),e._v(" "),a("li",[e._v("The version number of the next version of Doris Flink Connector. Here we need to pay attention. Since our version number is {flink_version}_{scala_version}_1.0.0, maven's algorithm will increase the scala version number by one, if we want to use it next time This version of 1.0.1 can be changed to 1.13.5-2.12-1.0.1-SNAPSHOT")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('...\n[INFO] [prepare] 3/17 check-dependency-snapshots\n[INFO] Checking dependencies and plugins for snapshots ...\n[INFO] [prepare] 4/17 create-backup-poms\n[INFO] [prepare] 5/17 map-release-versions\nWhat is the release version for "Doris Flink Connector"? (org.apache.doris:doris-flink-connector) 1.13.5-2.12-1.0.0: :\n[INFO] [prepare] 6/17 input-variables\nWhat is the SCM release tag or label for "Doris Flink Connector"? (org.apache.doris:doris-flink-connector) doris-flink-connector-1.13.5-2.12-1.0.0: :\n[INFO] [prepare] 7/17 map-development-versions\nWhat is the new development version for "Doris Flink Connector"? (org.apache.doris:doris-flink-connector) 1.13.5-3.12-1.0.0-SNAPSHOT: : 1.13.5-2.12-1.0.1-SNAPSHOT\n...\n[INFO] [prepare] 17/17 end-release\n[INFO] Release preparation complete.\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  01:00 min\n[INFO] Finished at: 2022-01-05T15:01:55+08:00\n[INFO] ------------------------------------------------------------------------\n')])])]),a("p",[e._v("Perform after prepare, and after perform, find the just released version in stagingRepositories in "),a("code",[e._v("https://repository.apache.org/")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/staging_repo.png"),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_3-vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vote"}},[e._v("#")]),e._v(" 3. vote")]),e._v(" "),a("p",[e._v("You need to close staging before voting\n"),a("img",{attrs:{src:e.$withBase("/images/close_staging.png"),alt:""}}),e._v("\nAfter that, you can vote in the dev@doris.apache.org, the following is an example of the mail")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Hi,\n\nWe are ready to deploy Doris connectors to Maven Central Repository, as the version 1.0.0, and the next version will be 1.0.1\nThis Release contains Spark connectors and Flink connectors for spark 2/3 and flink 1.11/1.12/1.13\n\nGitHub tags:\nhttps://github.com/apache/incubator-doris/releases/tag/doris-spark-connector-3.1.2-2.12-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-spark-connector-2.3.4-2.11-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-flink-connector-1.13.5-2.12-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-flink-connector-1.12.7-2.12-1.0.0\nhttps://github.com/apache/incubator-doris/releases/tag/doris-flink-connector-1.11.6-2.12-1.0.0\n\nStaging repo:\nhttps://repository.apache.org/content/repositories/maven-[YOUR REPOSITORY ID]/\nhttps://repository.apache.org/content/repositories/maven-[YOUR REPOSITORY ID]/[PATH-TO]-source-release.zip\n\nStaging site:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1000\n\nVote open for at least 72 hours.\n\n[ ] +1\n[ ] +0\n[ ] -1\n")])])]),a("p",[e._v("After the vote is passed, it can be published to Maven Central\n"),a("img",{attrs:{src:e.$withBase("/images/release-stage.png"),alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);
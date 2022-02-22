(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{600:function(e,a,n){"use strict";n.r(a);var t=n(56),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"releases-doris-connectors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#releases-doris-connectors"}},[e._v("#")]),e._v(" Releases Doris Connectors")]),e._v(" "),n("p",[e._v("Doris Connectors currently contains:")]),e._v(" "),n("ul",[n("li",[e._v("Doris Flink Connector")]),e._v(" "),n("li",[e._v("Doris Spark Connector")])]),e._v(" "),n("p",[e._v("The code base is separate from the main Doris code base and is located at:")]),e._v(" "),n("ul",[n("li",[e._v("https://github.com/apache/incubator-doris-flink-connector")]),e._v(" "),n("li",[e._v("https://github.com/apache/incubator-doris-spark-connector")])]),e._v(" "),n("h2",{attrs:{id:"preparing-for-release"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-release"}},[e._v("#")]),e._v(" Preparing for release")]),e._v(" "),n("p",[e._v("First, see the "),n("RouterLink",{attrs:{to:"/community/release-and-verify/release-prepare.html"}},[e._v("release preparation")]),e._v(" documentation to prepare for the release. ## Releasing to Maven")],1),e._v(" "),n("p",[e._v("Let's take the example of releasing Flink Connector v1.0.0.")]),e._v(" "),n("h3",{attrs:{id:"_1-prepare-the-branch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-prepare-the-branch"}},[e._v("#")]),e._v(" 1. Prepare the branch")]),e._v(" "),n("p",[e._v("Create a branch in the codebase: branch-1.0, and checkout to that branch.")]),e._v(" "),n("h3",{attrs:{id:"_2-release-to-maven-staging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-release-to-maven-staging"}},[e._v("#")]),e._v(" 2. release to Maven staging")]),e._v(" "),n("p",[e._v("Since Flink Connector releases different releases for different Flink versions (e.g. 1.11, 1.12, 1.13), we need to handle each version separately.")]),e._v(" "),n("p",[e._v("Let's take Flink version 1.13.5 and scala version 2.12 as an example.")]),e._v(" "),n("p",[e._v("First, replace flink.version and scala.version in pom.xml with")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd flink-doris-connector/\nsed -i 's/\\${flink.version}/1.13.5/g' pom.xml\nsed -i 's/\\${scala.version}/2.12/g' pom.xml\n")])])]),n("p",[e._v("After replacing, commit the local changes to.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('git add . -u\ngit commit -m "prepare for 1.13.5-2.12-1.0.0"\n')])])]),n("p",[e._v("Execute the following command to start generating the release tag.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" flink-doris-connector/\nmvn release:clean -DreleaseArgs"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-Dflink.version=1.13.5 -Dscala.version=2.12"')]),e._v(" -Dflink.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.13")]),e._v(".5 -Dscala.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.12")]),e._v("\nmvn release:prepare -DreleaseArgs"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-Dflink.version=1.13.5 -Dscala.version=2.12"')]),e._v(" -Dflink.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.13")]),e._v(".5 -Dscala.version"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.12")]),e._v(" -DpushChanges"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\n")])])]),n("p",[e._v("where "),n("code",[e._v("-DpushChanges=false")]),e._v(" means that the newly generated branches and tags are not pushed to the codebase during execution.")]),e._v(" "),n("p",[e._v("After executing the "),n("code",[e._v("release:prepare")]),e._v(" command, the following three pieces of information will be requested.")]),e._v(" "),n("ol",[n("li",[e._v("the version of the Doris Flink Connector, which we can do by default, either by entering a carriage return or by typing in the version you want. The version format is "),n("code",[e._v("{flink.version}-{scala.version}-{connector.version}")]),e._v(", e.g. "),n("code",[e._v("1.13.5-2.12-1.0.0")]),e._v(". 2.")]),e._v(" "),n("li",[e._v("The release tag of Doris Flink Connector, the release process will generate a tag locally, we can use the default tag name, such as "),n("code",[e._v("1.13.5-2.12-1.0.0")]),e._v(".")]),e._v(" "),n("li",[e._v("The version number of the next version of Doris Flink Connector. This version number is only used for generating local branches and has no real meaning. For example, if the current release is "),n("code",[e._v("1.13.5-2.12-1.0.0")]),e._v(", then the next version number should be "),n("code",[e._v("1.13.5-2.12-1.0.1")]),e._v(".")])]),e._v(" "),n("p",[n("code",[e._v("mvn release:prepare")]),e._v(" may ask for GPG passphrase, if you get "),n("code",[e._v("gpg: no valid OpenPGP data found")]),e._v(" error, you can try after executing "),n("code",[e._v("export GPG_TTY=$(tty)")]),e._v(".")]),e._v(" "),n("p",[e._v("If "),n("code",[e._v("mvn release:prepare")]),e._v(" succeeds, a tag and a branch will be created locally, and two new commits will be added to the current branch, the first one corresponding to the newly created tag and the second one to the branch of the next release, which can be viewed via "),n("code",[e._v("git log")]),e._v(".")]),e._v(" "),n("p",[e._v("Once the local tag is verified, you need to push the tag to the repository.")]),e._v(" "),n("p",[n("code",[e._v("git push upstream --tags")])]),e._v(" "),n("p",[e._v("where upstream points to the "),n("code",[e._v("apache/incubator-doris-flink-connector")]),e._v(" repository.")]),e._v(" "),n("p",[e._v("Finally, execute perform:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('mvn release:perform -DreleaseArgs="-Dflink.version=1.13.5 -Dscala.version=2.12" -Dflink.version=1.13.5 -Dscala.version=2.12\n')])])]),n("p",[e._v("After successful execution, the version just released can be found in "),n("a",{attrs:{href:"https://repository.apache.org/#stagingRepositories",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repository.apache.org/#stagingRepositories"),n("OutboundLink")],1)]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/staging-repositories.png"),alt:""}}),e._v(" "),n("p",[n("strong",[e._v("Note that the "),n("code",[e._v(".asc")]),e._v(" signature file needs to be included.")])]),e._v(" "),n("p",[e._v("If there is an error. You need to delete the local tag, the tag in the codebase, and the two newly generated local commits. And drop the staging. Then re-execute the above steps.")]),e._v(" "),n("p",[e._v("After checking, click the "),n("code",[e._v("close")]),e._v(" button in the figure to finish staging release.")]),e._v(" "),n("h3",{attrs:{id:"_3-prepare-svn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-prepare-svn"}},[e._v("#")]),e._v(" 3. Prepare svn")]),e._v(" "),n("p",[e._v("Check out the svn repository.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),n("p",[e._v("Package the tag source code and generate the signature file and sha256 checksum file. Here we take "),n("code",[e._v("1.13.5-2.12-1.0.0")]),e._v(" as an example.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git archive --format=tar 1.13.5-2.12-1.0.0 --prefix=apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src/ | gzip > apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\ngpg -u xxx@apache.org --armor --output apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.asc  --detach-sign apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\nsha512sum apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz > apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.sha512\n")])])]),n("p",[e._v("The end result is three files:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\napache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.asc\napache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.sha512\n")])])]),n("p",[e._v("Move these three files to the svn directory:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("doris/flink-connector/1.0.0/\n")])])]),n("p",[e._v("The final svn directory structure will look like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("|____0.15\n| |____0.15.0-rc04\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-0.15.0-incubating-src.tar.gz.asc\n| | |____apache-doris-0.15.0-incubating-src.tar.gz\n|____KEYS\n|____flink-connector\n| |____1.0.0\n| | |____apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating-src.tar.gz.asc\n| | |____apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.asc\n| | |____apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating-src.tar.gz.asc\n| | |____apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating-src.tar.gz.sha512\n| | |____apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating-src.tar.gz\n| | |____apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating-src.tar.gz.sha512\n")])])]),n("p",[e._v("Where 0.15 is the directory of Doris main code, and under "),n("code",[e._v("flink-connector/1.0.0")]),e._v(" is the content of this release.")]),e._v(" "),n("p",[e._v("Note that the preparation of the KEYS file can be found in [release preparation](. /release-prepare.md).")]),e._v(" "),n("h3",{attrs:{id:"_4-polling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-polling"}},[e._v("#")]),e._v(" 4. Polling")]),e._v(" "),n("p",[e._v("Initiate a poll in the dev@doris mailgroup, with the following template.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Hi All,\n\nThis is a call for vote to release Flink Connectors v1.0.0 for Apache Doris(Incubating).\nThere are 3 outputs for different Flink version:\n\n- apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating\n\nThe release node:\nxxxxx\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/flink-connector/1.0.0/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1002/org/apache/doris/doris-flink-connector/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.11.6-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.12.7-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.13.5-2.12-1.0.0\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/incubator/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhttp://doris.incubator.apache.org/community/release-and-verify/release-verify.html\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n")])])]),n("p",[e._v("After the dev mail group is approved, send an email to the general@incubator mail group for IPMC voting.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Hi All,\n\nThis is a call for vote to release Flink Connectors v1.0.0 for Apache Doris(Incubating).\nThere are 3 outputs for different Flink version:\n\n- apache-doris-flink-connector-1.11.6-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.12.7-2.12-1.0.0-incubating\n- apache-doris-flink-connector-1.13.5-2.12-1.0.0-incubating\n\nThe release node:\nxxxxx\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/flink-connector/1.0.0/\n\nMaven 2 staging repository:\nhttps://repository.apache.org/content/repositories/orgapachedoris-1002/org/apache/doris/doris-flink-connector/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.11.6-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.12.7-2.12-1.0.0\nhttps://github.com/apache/incubator-doris-flink-connector/tree/1.13.5-2.12-1.0.0\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/incubator/doris/KEYS\n\nLook at here for how to verify this release candidate:\nhttp://doris.incubator.apache.org/community/release-and-verify/release-verify.html\n\nVote thread at dev@doris: [1]\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n[1] vote thread in dev@doris\n")])])]),n("h2",{attrs:{id:"completing-the-release"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#completing-the-release"}},[e._v("#")]),e._v(" Completing the release")]),e._v(" "),n("p",[e._v("Please refer to the "),n("RouterLink",{attrs:{to:"/community/release-and-verify/release-complete.html"}},[e._v("Release Completion")]),e._v(" document to complete the release process.")],1),e._v(" "),n("h2",{attrs:{id:"appendix-releasing-to-snapshot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appendix-releasing-to-snapshot"}},[e._v("#")]),e._v(" Appendix: Releasing to SNAPSHOT")]),e._v(" "),n("p",[e._v("Snapshot is not an Apache Release version and is only used for pre-release previews. Snapshot versions can be released after discussion and approval by the PMC")]),e._v(" "),n("p",[e._v("Switch to the flink connector directory, we will use flink version 1.13.5, scalar 2.12 as an example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd flink-doris-connector\nmvn deploy -Dflink.version=1.13.5 -Dscala.version=2.12\n")])])]),n("p",[e._v("After that you can see the snapshot version here.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("https://repository.apache.org/content/repositories/snapshots/org/apache/doris/doris-flink-connector/\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
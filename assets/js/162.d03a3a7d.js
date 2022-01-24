(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{615:function(e,t,o){"use strict";o.r(t);var r=o(56),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"datax-doriswriter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#datax-doriswriter"}},[e._v("#")]),e._v(" DataX doriswriter")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/alibaba/DataX",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataX"),o("OutboundLink")],1),e._v(" doriswriter plug-in, used to synchronize data from other data sources to Doris through DataX.")]),e._v(" "),o("p",[e._v("The plug-in uses Doris' Stream Load function to synchronize and import data. It needs to be used with DataX service.")]),e._v(" "),o("h2",{attrs:{id:"about-datax"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about-datax"}},[e._v("#")]),e._v(" About DataX")]),e._v(" "),o("p",[e._v("DataX is an open source version of Alibaba Cloud DataWorks data integration, an offline data synchronization tool/platform widely used in Alibaba Group. DataX implements efficient data synchronization functions between various heterogeneous data sources including MySQL, Oracle, SqlServer, Postgre, HDFS, Hive, ADS, HBase, TableStore (OTS), MaxCompute (ODPS), Hologres, DRDS, etc.")]),e._v(" "),o("p",[e._v("More details can be found at: "),o("code",[e._v("https://github.com/alibaba/DataX/")])]),e._v(" "),o("h2",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),o("p",[e._v("The code of DataX doriswriter plug-in can be found "),o("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("This directory is the doriswriter plug-in development environment of Alibaba DataX.")]),e._v(" "),o("p",[e._v("Because the doriswriter plug-in depends on some modules in the DataX code base, and these module dependencies are not submitted to the official Maven repository, when we develop the doriswriter plug-in, we need to download the complete DataX code base to facilitate our development and compilation of the doriswriter plug-in.")]),e._v(" "),o("h3",{attrs:{id:"directory-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory structure")]),e._v(" "),o("ol",[o("li",[o("p",[o("code",[e._v("doriswriter/")])]),e._v(" "),o("p",[e._v("This directory is the code directory of doriswriter, and this part of the code should be in the Doris code base.")]),e._v(" "),o("p",[e._v("The help doc can be found in "),o("code",[e._v("doriswriter/doc")])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("init-env.sh")])]),e._v(" "),o("p",[e._v("The script mainly performs the following steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Git clone the DataX code base to the local")])]),e._v(" "),o("li",[o("p",[e._v("Softlink the "),o("code",[e._v("doriswriter/")]),e._v(" directory to "),o("code",[e._v("DataX/doriswriter")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Add "),o("code",[e._v("<module>doriswriter</module>")]),e._v(" to the original "),o("code",[e._v("DataX/pom.xml")])])]),e._v(" "),o("li",[o("p",[e._v("Change httpclient version from 4.5 to 4.5.13 in DataX/core/pom.xml")]),e._v(" "),o("blockquote",[o("p",[e._v("httpclient v4.5 can not handle redirect 307 correctly.")])])])]),e._v(" "),o("p",[e._v("After that, developers can enter "),o("code",[e._v("DataX/")]),e._v(" for development. And the changes in the "),o("code",[e._v("DataX/doriswriter")]),e._v(" directory will be reflected in the "),o("code",[e._v("doriswriter/")]),e._v(" directory, which is convenient for developers to submit code.")])])]),e._v(" "),o("h3",{attrs:{id:"how-to-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build"}},[e._v("#")]),e._v(" How to build")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Run "),o("code",[e._v("init-env.sh")])])]),e._v(" "),o("li",[o("p",[e._v("Modify code of doriswriter in "),o("code",[e._v("DataX/doriswriter")]),e._v(" if you need.")])]),e._v(" "),o("li",[o("p",[e._v("Build doriswriter")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Build doriswriter along:")]),e._v(" "),o("p",[o("code",[e._v("mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests")])])]),e._v(" "),o("li",[o("p",[e._v("Build DataX:")]),e._v(" "),o("p",[o("code",[e._v("mvn package assembly:assembly -Dmaven.test.skip=true")])]),e._v(" "),o("p",[e._v("The output will be in "),o("code",[e._v("target/datax/datax/")]),e._v(".")]),e._v(" "),o("blockquote",[o("p",[e._v("hdfsreader, hdfswriter and oscarwriter needs some extra jar packages. If you don't need to use these components, you can comment out the corresponding module in DataX/pom.xml.")])])]),e._v(" "),o("li",[o("p",[e._v("Compilation error")]),e._v(" "),o("p",[e._v("If you encounter the following compilation errors:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")])])]),o("p",[e._v("You can try the following solutions:")]),e._v(" "),o("ol",[o("li",[e._v("Download "),o("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("alibaba-datax-maven-m2-20210928.tar.gz"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("After decompression, copy the resulting "),o("code",[e._v("alibaba/datax/")]),e._v(" directory to "),o("code",[e._v(".m2/repository/com/alibaba/")]),e._v(" corresponding to the maven used.")]),e._v(" "),o("li",[e._v("Try to compile again.")])])])])]),e._v(" "),o("li",[o("p",[e._v("Commit code of doriswriter in "),o("code",[e._v("doriswriter")]),e._v(" if you need.")])])]),e._v(" "),o("h3",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),o("p",[e._v("For instructions on using the doriswriter plug-in, please refer to "),o("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);
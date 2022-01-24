(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{636:function(e,t,a){"use strict";a.r(t);var o=a(56),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[e._v("#")]),e._v(" Compilation")]),e._v(" "),a("p",[e._v("This document focuses on how to code Doris through source code.")]),e._v(" "),a("h2",{attrs:{id:"developing-mirror-compilation-using-docker-recommended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developing-mirror-compilation-using-docker-recommended"}},[e._v("#")]),e._v(" Developing mirror compilation using Docker (recommended)")]),e._v(" "),a("h3",{attrs:{id:"use-off-the-shelf-mirrors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-off-the-shelf-mirrors"}},[e._v("#")]),e._v(" Use off-the-shelf mirrors")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download Docker Mirror")]),e._v(" "),a("p",[a("code",[e._v("$ docker pull apache/incubator-doris:build-env-latest")])]),e._v(" "),a("p",[e._v("Check mirror download completed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker images\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\napache/incubator-doris   build-env-latest   49f68cecbc1a        4 days ago          3.76GB\n")])])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note1: For different versions of Doris, you need to download the corresponding mirror version. From Apache Doris 0.15 version, the docker image will keep same version number with Doris. For example, you can use  "),a("code",[e._v("apache/incubator-doris:build-env-for-0.15.0")]),e._v(" to compile Apache Doris 0.15.0.")]),e._v(" "),a("p",[e._v("Node2: "),a("code",[e._v("apache/incubator-doris:build-env-latest")]),e._v(" is for compiling trunk code, and will be updated along with trunk code. View the update time in "),a("code",[e._v("docker/README.md")])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("image version")]),e._v(" "),a("th",[e._v("commit id")]),e._v(" "),a("th",[e._v("release version")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("apache/incubator-doris:build-env")]),e._v(" "),a("td",[e._v("before "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("0.8.x, 0.9.x")])]),e._v(" "),a("tr",[a("td",[e._v("apache/incubator-doris:build-env-1.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),a("OutboundLink")],1),e._v(" or later")]),e._v(" "),a("td",[e._v("0.10.x or later")])]),e._v(" "),a("tr",[a("td",[e._v("apache/incubator-doris:build-env-1.2")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8",target:"_blank",rel:"noopener noreferrer"}},[e._v("4ef5a8c"),a("OutboundLink")],1),e._v(" or later")]),e._v(" "),a("td",[e._v("0.12.x - 0.14.0")])]),e._v(" "),a("tr",[a("td",[e._v("apache/incubator-doris:build-env-1.3.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f",target:"_blank",rel:"noopener noreferrer"}},[e._v("ad67dd3"),a("OutboundLink")],1),e._v(" or later")]),e._v(" "),a("td",[e._v("0.14.x")])]),e._v(" "),a("tr",[a("td",[e._v("apache/incubator-doris:build-env-for-0.15.0")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/a81f4da4e461a54782a96433b746d07be89e6b54",target:"_blank",rel:"noopener noreferrer"}},[e._v("a81f4da"),a("OutboundLink")],1),e._v(" or later")]),e._v(" "),a("td",[e._v("0.15.0")])]),e._v(" "),a("tr",[a("td",[e._v("apache/incubator-doris:build-env-latest")]),e._v(" "),a("td",[e._v("trunk")]),e._v(" "),a("td",[e._v("trunk")])])])]),e._v(" "),a("p",[a("strong",[e._v("note")]),e._v(":")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("Dev docker image "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/thirdparty/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ChangeLog"),a("OutboundLink")],1)])])]),e._v(" "),a("blockquote",[a("ol",{attrs:{start:"2"}},[a("li",[e._v("Doris version 0.14.0 still uses apache/incubator-doris:build-env-1.2 to compile, and the 0.14.x code will use apache/incubator-doris:build-env-1.3.1.")])])]),e._v(" "),a("blockquote",[a("ol",{attrs:{start:"3"}},[a("li",[e._v("From docker image of build-env-1.3.1, both OpenJDK 8 and OpenJDK 11 are included, and OpenJDK 11 is used for compilation by default. Please make sure that the JDK version used for compiling is the same as the JDK version used at runtime, otherwise it may cause unexpected operation errors. You can use the following command to switch the default JDK version in container:")])]),e._v(" "),a("p",[e._v("Switch to JDK 8:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ alternatives --set java java-1.8.0-openjdk.x86_64\n$ alternatives --set javac java-1.8.0-openjdk.x86_64\n$ export JAVA_HOME=/usr/lib/jvm/java-1.8.0\n")])])]),a("p",[e._v("Switch to JDK 11:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ alternatives --set java java-11-openjdk.x86_64\n$ alternatives --set javac java-11-openjdk.x86_64\n$ export JAVA_HOME=/usr/lib/jvm/java-11\n")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Running Mirror")]),e._v(" "),a("p",[a("code",[e._v("$ docker run -it apache/incubator-doris:build-env-latest")])]),e._v(" "),a("p",[e._v("It is recommended to run the container by mounting the local Doris source directory, so that the compiled binary file will be stored in the host machine and will not disappear because the container exits.")]),e._v(" "),a("p",[e._v("At the same time, it is recommended to mount the maven "),a("code",[e._v(".m2")]),e._v(" directory in the mirror to the host directory at the same time to prevent repeated downloading of maven's dependent libraries each time the compilation is started.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker run -it -v /your/local/.m2:/root/.m2 -v /your/local/incubator-doris-DORIS-x.x.x-release/:/root/incubator-doris-DORIS-x.x.x-release/ apache/incubator-doris:build-env-latest\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Download source code")]),e._v(" "),a("p",[e._v("After starting the mirror, you should be in the container. The Doris source code can be downloaded from the following command (local source directory mounted is not required):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/xxx.tar.gz\nor\n$ git clone https://github.com/apache/incubator-doris.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Compile Doris")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sh build.sh\n")])])]),a("blockquote",[a("p",[e._v("** Note: **")]),e._v(" "),a("p",[e._v("If you are using "),a("code",[e._v("build-env-for-0.15.0")]),e._v(" or later version for the first time, use the following command when compiling:")]),e._v(" "),a("p",[a("code",[e._v("sh build.sh --clean --be --fe --ui")])]),e._v(" "),a("p",[e._v("This is because from build-env-for-0.15.0, we upgraded thrift (0.9 -> 0.13), you need to use the --clean command to force the use of the new version of thrift to generate code files, otherwise incompatible code will appear.")])]),e._v(" "),a("p",[e._v("After compilation, the output file is in the "),a("code",[e._v("output/")]),e._v(" directory.")])])]),e._v(" "),a("h3",{attrs:{id:"self-compiling-development-environment-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-compiling-development-environment-mirror"}},[e._v("#")]),e._v(" Self-compiling Development Environment Mirror")]),e._v(" "),a("p",[e._v("You can also create a Doris development environment mirror yourself, referring specifically to the "),a("code",[e._v("docker/README.md")]),e._v(" file.")]),e._v(" "),a("h2",{attrs:{id:"direct-compilation-centos-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#direct-compilation-centos-ubuntu"}},[e._v("#")]),e._v(" Direct Compilation (CentOS/Ubuntu)")]),e._v(" "),a("p",[e._v("You can try to compile Doris directly in your own Linux environment.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("System Dependence")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Before commit "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f",target:"_blank",rel:"noopener noreferrer"}},[e._v("ad67dd3"),a("OutboundLink")],1),e._v(" will use the dependencies as follows:")]),e._v(" "),a("p",[a("code",[e._v("GCC 7.3+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+ Bison 3.0+")])]),e._v(" "),a("p",[e._v("If you are using Ubuntu 16.04 or newer, you can use the following command to install the dependencies")]),e._v(" "),a("p",[a("code",[e._v("sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python autopoint pkg-config")])]),e._v(" "),a("p",[e._v("If you are using CentOS you can use the following command to install the dependencies")]),e._v(" "),a("p",[a("code",[e._v("sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk")])])]),e._v(" "),a("li",[a("p",[e._v("After commit "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ad67dd34a04c1ca960cff38e5b335b30fc7d559f",target:"_blank",rel:"noopener noreferrer"}},[e._v("ad67dd3"),a("OutboundLink")],1),e._v(" will use the dependencies as follows:")]),e._v(" "),a("p",[a("code",[e._v("GCC 10+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ Bison 3.0+")])]),e._v(" "),a("p",[e._v("If you are using Ubuntu 16.04 or newer, you can use the following command to install the dependencies")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10\nsudo apt-get install autoconf automake libtool autopoint\n")])])]),a("p",[e._v("If you are using CentOS you can use the following command to install the dependencies")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum groupinstall 'Development Tools' && sudo yum install maven cmake byacc flex automake libtool bison binutils-devel zip unzip ncurses-devel curl git wget python2 glibc-static libstdc++-static java-1.8.0-openjdk\nsudo yum install centos-release-scl\nsudo yum install devtoolset-10\nscl enable devtoolset-10 bash\n")])])]),a("p",[e._v("If devtoolset-10 is not found in current repo. Oracle has already rebuilt the devtoolset-10 packages. You can use this repo file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[ol7_software_collections]\nname=Software Collection packages for Oracle Linux 7 ($basearch)\nbaseurl=http://yum.oracle.com/repo/OracleLinux/OL7/SoftwareCollections/$basearch/\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-oracle\ngpgcheck=1\nenabled=1\n")])])]),a("p",[e._v("After installation, set environment variables "),a("code",[e._v("PATH")]),e._v(", "),a("code",[e._v("JAVA_HOME")]),e._v(", etc.\nDoris 0.14.0 will use gcc7 env to compile.")])])])]),e._v(" "),a("li",[a("p",[e._v("Compile Doris")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sh build.sh\n")])])]),a("p",[e._v("After compilation, the output file is in the "),a("code",[e._v("output/")]),e._v(" directory.")])])]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("Could not transfer artifact net.sourceforge.czt.dev:cup-maven-plugin:pom:1.6-cdh from/to xxx")])]),e._v(" "),a("p",[e._v("If you encounter the above error, please refer to "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/pull/4769/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #4769"),a("OutboundLink")],1),e._v(" to modify the cloudera-related repo configuration in "),a("code",[e._v("fe/pom.xml")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("The third party relies on download connection errors, failures, etc.")]),e._v(" "),a("p",[e._v("The download links of the third-party libraries that Doris relies on are all in the "),a("code",[e._v("thirdparty/vars.sh")]),e._v(" file. Over time, some download connections may fail. If you encounter this situation. It can be solved in the following two ways:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Manually modify the "),a("code",[e._v("thirdparty/vars.sh")]),e._v(" file")]),e._v(" "),a("p",[e._v("Manually modify the problematic download connection and the corresponding MD5 value.")])]),e._v(" "),a("li",[a("p",[e._v("Use a third-party download warehouse:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh build-thirdparty.sh\n")])])]),a("p",[e._v("REPOSITORY_URL contains all third-party library source code packages and their historical versions.")])])])])]),e._v(" "),a("h2",{attrs:{id:"special-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-statement"}},[e._v("#")]),e._v(" Special statement")]),e._v(" "),a("p",[e._v("Starting from version 0.13, the dependency on the two third-party libraries [1] and [2] will be removed in the default compiled output. These two third-party libraries are under "),a("a",{attrs:{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU General Public License V3"),a("OutboundLink")],1),e._v(". This license is incompatible with "),a("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache License 2.0"),a("OutboundLink")],1),e._v(", so it should not appear in the Apache release by default.")]),e._v(" "),a("p",[e._v("Remove library [1] will result in the inability to access MySQL external tables. The feature of accessing MySQL external tables will be implemented through "),a("code",[e._v("UnixODBC")]),e._v(" in future release version.")]),e._v(" "),a("p",[e._v("Remove library [2] will cause some data written in earlier versions (before version 0.8) to be unable to read. Because the data in the earlier version was compressed using the LZO algorithm, in later versions, it has been changed to the LZ4 compression algorithm. We will provide tools to detect and convert this part of the data in the future.")]),e._v(" "),a("p",[e._v("If required, users can continue to use these two dependent libraries. If you want to use it, you need to add the following options when compiling:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")])])]),a("p",[e._v("Note that when users rely on these two third-party libraries, Doris is not used under the Apache License 2.0 by default. Please pay attention to the GPL related agreements.")]),e._v(" "),a("ul",[a("li",[e._v("[1] mysql-5.7.18")]),e._v(" "),a("li",[e._v("[2] lzo-2.10")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
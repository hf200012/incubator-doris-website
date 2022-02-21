(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{643:function(t,e,o){"use strict";o.r(e);var n=o(56),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"compiling-with-ldb-toolchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling-with-ldb-toolchain"}},[t._v("#")]),t._v(" Compiling with LDB toolchain")]),t._v(" "),o("p",[t._v("This document describes how to compile Doris using the LDB toolchain. This method is currently used as a supplement to the Docker compilation method to facilitate developers and users without a Docker environment to compile Doris source code.")]),t._v(" "),o("blockquote",[o("p",[t._v("You can still compile the latest code using the Docker development image: "),o("code",[t._v("apache/incubator-doris:build-env-ldb-toolchain-latest")])])]),t._v(" "),o("blockquote",[o("p",[t._v("Thanks to "),o("a",{attrs:{href:"https://github.com/amosbird",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amos Bird"),o("OutboundLink")],1),t._v(" for this contribution.")])]),t._v(" "),o("h2",{attrs:{id:"prepare-the-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-environment"}},[t._v("#")]),t._v(" Prepare the environment")]),t._v(" "),o("p",[t._v("This works for most Linux distributions (CentOS, Ubuntu, etc.).")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Download "),o("code",[t._v("ldb_toolchain_gen.sh")])]),t._v(" "),o("p",[t._v("The latest "),o("code",[t._v("ldb_toolchain_gen.sh")]),t._v(" can be downloaded from "),o("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(". This script is used to generate the ldb toolchain.")]),t._v(" "),o("blockquote",[o("p",[t._v("For more information, you can visit "),o("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/amosbird/ldb_toolchain_gen"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[o("p",[t._v("Execute the following command to generate the ldb toolchain")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")])])]),o("p",[t._v("where "),o("code",[t._v("/path/to/ldb_toolchain/")]),t._v(" is the directory where the toolchain is installed.")]),t._v(" "),o("p",[t._v("After successful execution, the following directory structure will be created under "),o("code",[t._v("/path/to/ldb_toolchain/")]),t._v(".")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("├── bin\n├── include\n├── lib\n├── share\n├── test\n└── usr\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Download and install other compiled components")]),t._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java8"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven 3.6.3"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node v12.13.0"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("If your environment is somehow minimal, additional packages should be installed before compiling Doris. The following instructions describe how to setup a minimal CentOS 6 box to compile Doris. Other linux distros should be similar.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("# install required system packages\nyum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Download Doris source code")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git clone https://github.com/apache/incubator-doris.git\n")])])]),o("p",[t._v("After downloading, go to the Doris source directory, create the "),o("code",[t._v("custom_env.sh")]),t._v(", file, and set the PATH environment variable, e.g.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("export JAVA_HOME=/path/to/jave/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb-toolchain/bin:$PATH\n")])])])])]),t._v(" "),o("h2",{attrs:{id:"compiling-doris"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling-doris"}},[t._v("#")]),t._v(" Compiling Doris")]),t._v(" "),o("p",[t._v("Go to the Doris source code directory and execute.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sh build.sh\n")])])]),o("p",[t._v("This script will compile the third-party libraries first and then the Doris components (FE, BE) later. The compiled output is in the "),o("code",[t._v("output/")]),t._v(" directory.")])])}),[],!1,null,null,null);e.default=a.exports}}]);
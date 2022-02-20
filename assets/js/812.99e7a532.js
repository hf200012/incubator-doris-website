(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{1266:function(t,a,e){"use strict";e.r(a);var o=e(56),n=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-ldb-toolchain-编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-ldb-toolchain-编译"}},[t._v("#")]),t._v(" 使用 LDB toolchain 编译")]),t._v(" "),e("p",[t._v("本文档主要介绍如何使用 LDB toolchain 编译 Doris。该方式目前作为 Docker 编译方式的补充，方便没有 Docker 环境的开发者和用户编译 Doris 源码。")]),t._v(" "),e("blockquote",[e("p",[t._v("您依然可以使用 Docker 开发镜像编译最新代码："),e("code",[t._v("apache/incubator-doris:build-env-ldb-toolchain-latest")])])]),t._v(" "),e("blockquote",[e("p",[t._v("感谢 "),e("a",{attrs:{href:"https://github.com/amosbird",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amos Bird"),e("OutboundLink")],1),t._v(" 的贡献。")])]),t._v(" "),e("h2",{attrs:{id:"准备编译环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备编译环境"}},[t._v("#")]),t._v(" 准备编译环境")]),t._v(" "),e("p",[t._v("该方式适用于绝大多数 Linux 发行版（CentOS，Ubuntu 等）。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("下载 "),e("code",[t._v("ldb_toolchain_gen.sh")])]),t._v(" "),e("p",[t._v("可以从 "),e("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v(" 下载最新的 "),e("code",[t._v("ldb_toolchain_gen.sh")]),t._v("。该脚本用于生成 ldb toolchain。")]),t._v(" "),e("blockquote",[e("p",[t._v("更多信息，可访问 "),e("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/amosbird/ldb_toolchain_gen"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("p",[t._v("执行以下命令生成 ldb toolchain")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sh ldb_toolchain_gen.sh /path/to/ldb_toolchain/\n")])])]),e("p",[t._v("其中 "),e("code",[t._v("/path/to/ldb_toolchain/")]),t._v(" 为安装 toolchain 目录。")]),t._v(" "),e("p",[t._v("执行成功后，会在 "),e("code",[t._v("/path/to/ldb_toolchain/")]),t._v(" 下生成如下目录结构：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("├── bin\n├── include\n├── lib\n├── share\n├── test\n└── usr\n")])])])]),t._v(" "),e("li",[e("p",[t._v("下载并安装其他编译组件")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u131-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java8"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/apache-maven-3.6.3-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven 3.6.3"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v12.13.0-linux-x64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node v12.13.0"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("对于不同的 Linux 发行版，可能默认包含的组件不同。因此可能需要安装一些额外的组件。下面以 centos6 为例，其他发行版类似：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# install required system packages\nyum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2\n\n# install autoconf-2.69\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    cd autoconf-2.69 && \\\n    ./configure && \\\n    make && \\\n    make install\n\n# install bison-3.0.4\nwget http://ftp.gnu.org/gnu/bison/bison-3.0.4.tar.gz && \\\n    tar xzf bison-3.0.4.tar.gz && \\\n    cd bison-3.0.4 && \\\n    ./configure && \\\n    make && \\\n    make install\n")])])])]),t._v(" "),e("li",[e("p",[t._v("下载 Doris 源码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/apache/incubator-doris.git\n")])])]),e("p",[t._v("下载完成后，进入到 doris 源码目录，创建 "),e("code",[t._v("custom_env.sh")]),t._v("，文件，并设置 PATH 环境变量，如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export JAVA_HOME=/path/to/jave/\nexport PATH=$JAVA_HOME/bin:$PATH\nexport PATH=/path/to/maven/bin:$PATH\nexport PATH=/path/to/node/bin:$PATH\nexport PATH=/path/to/ldb-toolchain/bin:$PATH\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"编译-doris"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译-doris"}},[t._v("#")]),t._v(" 编译 Doris")]),t._v(" "),e("p",[t._v("进入 Doris 源码目录，执行：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sh build.sh\n")])])]),e("p",[t._v("该脚本会先编译第三方库，之后再编译 Doris 组件（FE、BE）。编译产出在 "),e("code",[t._v("output/")]),t._v(" 目录下。")])])}),[],!1,null,null,null);a.default=n.exports}}]);
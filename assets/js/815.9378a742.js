(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{1268:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"arm64-kylinos-编译运行-doris"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arm64-kylinos-编译运行-doris"}},[t._v("#")]),t._v(" ARM64 + KylinOS 编译运行 Doris")]),t._v(" "),e("p",[t._v("本文档介绍如何在 ARM64 平台上编译 Doris。")]),t._v(" "),e("p",[t._v("注意，该文档仅作为指导性文档。在不同环境中编译可能出现其他错误。")]),t._v(" "),e("h2",{attrs:{id:"软硬件环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软硬件环境"}},[t._v("#")]),t._v(" 软硬件环境")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("KylinOS 版本：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$> cat /etc/.kyinfo\nname=Kylin-Server\nmilestone=10-SP1-Release-Build04-20200711\narch=arm64\nbeta=False\ntime=2020-07-11 17:16:54\ndist_id=Kylin-Server-10-SP1-Release-Build04-20200711-arm64-2020-07-11 17:16:54\n")])])])]),t._v(" "),e("li",[e("p",[t._v("CPU型号")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$> cat /proc/cpuinfo\nmodel name  : Phytium,FT-2000+/64\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Doris 版本")]),t._v(" "),e("p",[t._v("commit 68bab73")])])]),t._v(" "),e("h2",{attrs:{id:"编译工具安装-无网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译工具安装-无网络"}},[t._v("#")]),t._v(" 编译工具安装（无网络）")]),t._v(" "),e("p",[t._v("示例中，所有工具安装在在 "),e("code",[t._v("/home/doris/tools/installed/")]),t._v(" 目录下。")]),t._v(" "),e("p",[t._v("所需安装包请先在有网络情况下获取。")]),t._v(" "),e("h3",{attrs:{id:"_1-安装gcc10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装gcc10"}},[t._v("#")]),t._v(" 1. 安装gcc10")]),t._v(" "),e("p",[t._v("下载 gcc-10.1.0")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-10.1.0/gcc-10.1.0.tar.gz\n")])])]),e("p",[t._v("解压后，在 "),e("code",[t._v("contrib/download_prerequisites")]),t._v(" 查看依赖并下载：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http://gcc.gnu.org/pub/gcc/infrastructure/gmp-6.1.0.tar.bz2\nhttp://gcc.gnu.org/pub/gcc/infrastructure/mpfr-3.1.4.tar.bz2\nhttp://gcc.gnu.org/pub/gcc/infrastructure/mpc-1.0.3.tar.gz\nhttp://gcc.gnu.org/pub/gcc/infrastructure/isl-0.18.tar.bz2\n")])])]),e("p",[t._v("解压这四个依赖，然后移动到 gcc-10.1.0 源码目录下，并重命名为 gmp、isl、mpc、mpfr。")]),t._v(" "),e("p",[t._v("下载并安装 automake-1.15（因为gcc10编译过程中会查找automake 1.15 版本）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://ftp.gnu.org/gnu/automake/automake-1.15.tar.gz\ntar xzf automake-1.15.tar.gz\n./configure --prefix=/home/doris/tools/installed\nmake && make install\nexport PATH=/home/doris/tools/installed/bin:$PATH\n")])])]),e("p",[t._v("编译GCC10:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd gcc-10.1.0\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])])]),e("p",[t._v("编译时间较长。")]),t._v(" "),e("h3",{attrs:{id:"_2-安装其他编译组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装其他编译组件"}},[t._v("#")]),t._v(" 2. 安装其他编译组件")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("jdk-8u291-linux-aarch64.tar.gz")]),t._v(" "),e("p",[e("code",[t._v("https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html")])]),t._v(" "),e("p",[t._v("无需编译，开箱即用。")])]),t._v(" "),e("li",[e("p",[t._v("cmake-3.19.8-Linux-aarch64.tar.gz")]),t._v(" "),e("p",[e("code",[t._v("https://cmake.org/download/")])]),t._v(" "),e("p",[t._v("无需编译，开箱即用")])]),t._v(" "),e("li",[e("p",[t._v("apache-maven-3.8.1-bin.tar.gz")]),t._v(" "),e("p",[e("code",[t._v("https://maven.apache.org/download.cgi")])]),t._v(" "),e("p",[t._v("无需编译，开箱即用")])]),t._v(" "),e("li",[e("p",[t._v("nodejs 16.3.0")]),t._v(" "),e("p",[e("code",[t._v("https://nodejs.org/dist/v16.3.0/node-v16.3.0-linux-arm64.tar.xz")])]),t._v(" "),e("p",[t._v("无需编译，开箱即用")])]),t._v(" "),e("li",[e("p",[t._v("libtool-2.4.6.tar.gz")]),t._v(" "),e("p",[t._v("编译第三方组件用，虽然系统可能自带了libtool，但是libtool需要和automake在一起，这样不容易出问题。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://ftp.gnu.org/gnu/libtool/libtool-2.4.6.tar.gz\ncd  libtool-2.4.6/\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])])])]),t._v(" "),e("li",[e("p",[t._v("binutils-2.36.tar.xz（获取bdf.h）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://ftp.gnu.org/gnu/binutils/binutils-2.36.tar.bz2\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])])])]),t._v(" "),e("li",[e("p",[t._v("libiberty（编译BE用）")]),t._v(" "),e("p",[t._v("这个库的源码就在 gcc-10.1.0 的源码包下")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd gcc-10.1.0/libiberty/\n./configure --prefix=/home/doris/tools/installed\nmake\n")])])]),e("p",[t._v("编译后会产生 libiberty.a，后续移动到 Doris 的thirdparty 的 lib64 目录中即可。")])])]),t._v(" "),e("h3",{attrs:{id:"_3-编译第三方库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-编译第三方库"}},[t._v("#")]),t._v(" 3. 编译第三方库")]),t._v(" "),e("p",[t._v("假设Doris源码在 "),e("code",[t._v("/home/doris/doris-src/")]),t._v(" 下。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("手动下载所有第三方库并放在 thirdparty/src 目录下。")])]),t._v(" "),e("li",[e("p",[t._v("在Doris源码目录下新增 "),e("code",[t._v("custom_env.sh")]),t._v(" 并添加如下内容")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export DORIS_THIRDPARTY=/home/doris/doris-src/thirdparty/\nexport JAVA_HOME=/home/doris/tools/jdk1.8.0_291/\nexport DORIS_GCC_HOME=/home/doris/tools/installed/\nexport PATCH_COMPILER_RT=true\n")])])]),e("p",[t._v("注意替换对应的目录")])]),t._v(" "),e("li",[e("p",[t._v("修改 build-thirdparty.sh 中的部分内容")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("关闭 "),e("code",[t._v("build_mysql")]),t._v(" 和 "),e("code",[t._v("build_libhdfs3")])]),t._v(" "),e("p",[t._v("mysql 不再需要。而 libhdfs3 暂不支持 arm 架构，所以在arm中运行Doris，暂不支持通过 libhdfs3 直接访问 hdfs，需要通过broker。")])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v("build_curl")]),t._v(" 中增加 configure 参数："),e("code",[t._v("--without-libpsl")]),t._v("。如果不添加，则在最终编译Doris BE的链接阶段，可能报错："),e("code",[t._v("undefined reference to ‘psl_is_cookie_domain_acceptable'")])])])])]),t._v(" "),e("li",[e("p",[t._v("执行 build-thirdparty.sh。这里仅列举可能出现的错误")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("error: narrowing conversion of '-1' from 'int' to 'char' [-Wnarrowing]")])]),t._v(" "),e("p",[t._v("编译brpc 0.9.7 时会出现错误，解决方案，在 brpc 的 CMakeLists.txt 的 "),e("code",[t._v("CMAKE_CXX_FLAGS")]),t._v(" 中添加 "),e("code",[t._v("-Wno-narrowing")]),t._v("。brpc master 代码中已经修复这个问题：")]),t._v(" "),e("p",[e("code",[t._v("https://github.com/apache/incubator-brpc/issues/1091")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("libz.a(deflate.o): relocation R_AARCH64_ADR_PREL_PG_HI21 against symbol")]),t._v("z_errmsg' which may bind externally can not be used when making a shared object; recompile with -fPIC`")]),t._v(" "),e("p",[t._v("编译brpc 0.9.7 时会出现错误，还有 libcrypto 也会报类似错误。原因未知，似乎在 aarch64 下，brpc 需要链接动态的 zlib 和 crypto 库。但是我们在编译这两个第三方库时，都只编译的了 .a 静态文件。解决方案：重新编译zlib和 openssl 生成.so 动态库：")]),t._v(" "),e("p",[t._v("打开 "),e("code",[t._v("build-thirdparty.sh")]),t._v("，找到 "),e("code",[t._v("build_zlib")]),t._v(" 函数，将：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./configure --prefix=$TP_INSTALL_DIR --static\n就改为\n./configure --prefix=$TP_INSTALL_DIR\n")])])]),e("p",[t._v("找到 "),e("code",[t._v("build_openssl")]),t._v("，将以下部分注释掉：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#if [ -f $TP_INSTALL_DIR/lib64/libcrypto.so ]; then\n#    rm -rf $TP_INSTALL_DIR/lib64/libcrypto.so*\n#fi\n#if [ -f $TP_INSTALL_DIR/lib64/libssl.so ]; then\n#    rm -rf $TP_INSTALL_DIR/lib64/libssl.so*\n#fi\n")])])]),e("p",[t._v("然后来到 "),e("code",[t._v("build-thirdparty.sh")]),t._v("，注释掉其他 "),e("code",[t._v("build_xxx")]),t._v("，仅打开 "),e("code",[t._v("build_zlib")]),t._v(" 和 "),e("code",[t._v("build_openssl")]),t._v("，以及 "),e("code",[t._v("build_brpc")]),t._v(" 和之后的 "),e("code",[t._v("build_xxx")]),t._v("。然后重新执行 "),e("code",[t._v("build-thirdparty.sh")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("编译到某个阶段卡住不动。")]),t._v(" "),e("p",[t._v("不确定原因。解决方案：重跑 "),e("code",[t._v("build-thirdparty.sh")]),t._v("。"),e("code",[t._v("build-thirdparty.sh")]),t._v(" 是可以重复执行的。")])])])])]),t._v(" "),e("h3",{attrs:{id:"_4-编译doris源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译doris源码"}},[t._v("#")]),t._v(" 4. 编译Doris源码")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("sh build.sh")]),t._v(" 即可。")]),t._v(" "),e("h3",{attrs:{id:"_5-常见错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-常见错误"}},[t._v("#")]),t._v(" 5. 常见错误")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("编译 Doris 时出现 "),e("code",[t._v("undefined reference to psl_free")])]),t._v(" "),e("p",[t._v("libcurl 会调用 libpsl 的函数，但 libpsl 未连接，原因未知。解决方法（二选一）：")]),t._v(" "),e("ol",[e("li",[t._v("在 "),e("code",[t._v("thirdparty/build-thirdparty.sh")]),t._v(" 中的 "),e("code",[t._v("build_curl")]),t._v(" 方法中添加 "),e("code",[t._v("--without-libpsl")]),t._v(" 后重新编译 libcurl，然后再重新编译 Doris。")]),t._v(" "),e("li",[e("code",[t._v("be/CMakeLists.txt")]),t._v(" 中 603 行左右，"),e("code",[t._v("-pthread")]),t._v(" 后添加 "),e("code",[t._v("-lpsl")]),t._v("，然后重新编译 Doris。")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
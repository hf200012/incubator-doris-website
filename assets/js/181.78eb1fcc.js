(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{634:function(e,t,o){"use strict";o.r(t);var a=o(56),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"compile-and-run-doris-on-arm64-kylinos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-run-doris-on-arm64-kylinos"}},[e._v("#")]),e._v(" Compile and Run Doris on ARM64 + KylinOS.")]),e._v(" "),o("p",[e._v("This document describes how to compile Doris on the ARM64 platform.")]),e._v(" "),o("p",[e._v("Note that this document is only a guide document. Other errors may occur when compiling in different environments.")]),e._v(" "),o("h2",{attrs:{id:"software-and-hardware-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-and-hardware-environment"}},[e._v("#")]),e._v(" Software and hardware environment")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("KylinOS version:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$> cat /etc/.kyinfo\nname=Kylin-Server\nmilestone=10-SP1-Release-Build04-20200711\narch=arm64\nbeta=False\ntime=2020-07-11 17:16:54\ndist_id=Kylin-Server-10-SP1-Release-Build04-20200711-arm64-2020-07-11 17:16:54\n")])])])]),e._v(" "),o("li",[o("p",[e._v("CPU model")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$> cat /proc/cpuinfo\nmodel name: Phytium,FT-2000+/64\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Doris version")]),e._v(" "),o("p",[e._v("commit 68bab73")])])]),e._v(" "),o("h2",{attrs:{id:"compilation-tool-installation-no-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compilation-tool-installation-no-network"}},[e._v("#")]),e._v(" Compilation tool installation (no network)")]),e._v(" "),o("p",[e._v("In the example, all tools are installed in the "),o("code",[e._v("/home/doris/tools/installed/")]),e._v(" directory.")]),e._v(" "),o("p",[e._v("Please obtain the required installation package first under network conditions.")]),e._v(" "),o("h3",{attrs:{id:"_1-install-gcc10"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-gcc10"}},[e._v("#")]),e._v(" 1. Install gcc10")]),e._v(" "),o("p",[e._v("Download gcc-10.1.0")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("wget https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-10.1.0/gcc-10.1.0.tar.gz\n")])])]),o("p",[e._v("After unzipping, check the dependencies in "),o("code",[e._v("contrib/download_prerequisites")]),e._v(" and download:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("http://gcc.gnu.org/pub/gcc/infrastructure/gmp-6.1.0.tar.bz2\nhttp://gcc.gnu.org/pub/gcc/infrastructure/mpfr-3.1.4.tar.bz2\nhttp://gcc.gnu.org/pub/gcc/infrastructure/mpc-1.0.3.tar.gz\nhttp://gcc.gnu.org/pub/gcc/infrastructure/isl-0.18.tar.bz2\n")])])]),o("p",[e._v("Unzip these four dependencies, then move to the gcc-10.1.0 source directory and rename them to gmp, isl, mpc, mpfr.")]),e._v(" "),o("p",[e._v("Download and install automake-1.15 (because gcc10 will find automake 1.15 version during compilation)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://ftp.gnu.org/gnu/automake/automake-1.15.tar.gz\ntar xzf automake-1.15.tar.gz\n./configure --prefix=/home/doris/tools/installed\nmake && make install\nexport PATH=/home/doris/tools/installed/bin:$PATH\n")])])]),o("p",[e._v("Compile GCC10:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd gcc-10.1.0\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])])]),o("p",[e._v("Compile time is longer.")]),e._v(" "),o("h3",{attrs:{id:"_2-install-other-compilation-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-other-compilation-components"}},[e._v("#")]),e._v(" 2. Install other compilation components")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("jdk-8u291-linux-aarch64.tar.gz")]),e._v(" "),o("p",[o("code",[e._v("https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html")])]),e._v(" "),o("p",[e._v("No need to compile, just use it out of the box.")])]),e._v(" "),o("li",[o("p",[e._v("cmake-3.19.8-Linux-aarch64.tar.gz")]),e._v(" "),o("p",[o("code",[e._v("https://cmake.org/download/")])]),e._v(" "),o("p",[e._v("No need to compile, just use it out of the box")])]),e._v(" "),o("li",[o("p",[e._v("apache-maven-3.8.1-bin.tar.gz")]),e._v(" "),o("p",[o("code",[e._v("https://maven.apache.org/download.cgi")])]),e._v(" "),o("p",[e._v("No need to compile, just use it out of the box")])]),e._v(" "),o("li",[o("p",[e._v("nodejs 16.3.0")]),e._v(" "),o("p",[o("code",[e._v("https://nodejs.org/dist/v16.3.0/node-v16.3.0-linux-arm64.tar.xz")])]),e._v(" "),o("p",[e._v("No need to compile, just use it out of the box")])]),e._v(" "),o("li",[o("p",[e._v("libtool-2.4.6.tar.gz")]),e._v(" "),o("p",[e._v("For compiling third-party components, although the system may come with libtool, libtool needs to be together with automake, so it is not easy to cause problems.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://ftp.gnu.org/gnu/libtool/libtool-2.4.6.tar.gz\ncd libtool-2.4.6/\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])])])]),e._v(" "),o("li",[o("p",[e._v("binutils-2.36.tar.xz (obtain bdf.h)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://ftp.gnu.org/gnu/binutils/binutils-2.36.tar.bz2\n./configure --prefix=/home/doris/tools/installed\nmake -j && make install\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Libiberty (for compiling BE)")]),e._v(" "),o("p",[e._v("The source code of this library is under the source code package of gcc-10.1.0")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd gcc-10.1.0/libiberty/\n./configure --prefix=/home/doris/tools/installed\nmake\n")])])]),o("p",[e._v("After compilation, libiberty.a will be generated, which can be moved to the lib64 directory of Doris' thirdparty.")])])]),e._v(" "),o("h3",{attrs:{id:"_3-compile-third-party-libraries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-compile-third-party-libraries"}},[e._v("#")]),e._v(" 3. Compile third-party libraries")]),e._v(" "),o("p",[e._v("Suppose Doris source code is under "),o("code",[e._v("/home/doris/doris-src/")]),e._v(".")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Manually download all third-party libraries and place them in the thirdparty/src directory.")])]),e._v(" "),o("li",[o("p",[e._v("Add "),o("code",[e._v("custom_env.sh")]),e._v(" in the Doris source directory and add the following content")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("export DORIS_THIRDPARTY=/home/doris/doris-src/thirdparty/\nexport JAVA_HOME=/home/doris/tools/jdk1.8.0_291/\nexport DORIS_GCC_HOME=/home/doris/tools/installed/\nexport PATCH_COMPILER_RT=true\n")])])]),o("p",[e._v("Pay attention to replace the corresponding directory")])]),e._v(" "),o("li",[o("p",[e._v("Modify part of the content in build-thirdparty.sh")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Close "),o("code",[e._v("build_mysql")]),e._v(" and "),o("code",[e._v("build_libhdfs3")])]),e._v(" "),o("p",[e._v("mysql is no longer needed. However, libhdfs3 does not support arm architecture for the time being, so running Doris in arm does not support direct access to hdfs through libhdfs3, and requires a broker.")])]),e._v(" "),o("li",[o("p",[e._v("Add the configure parameter in "),o("code",[e._v("build_curl")]),e._v(": "),o("code",[e._v("--without-libpsl")]),e._v(". If it is not added, an error may be reported during the linking phase of the final compilation of Doris BE: "),o("code",[e._v("undefined reference to ‘psl_is_cookie_domain_acceptable'")])])])])]),e._v(" "),o("li",[o("p",[e._v("Execute build-thirdparty.sh. Here are only possible errors")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("error: narrowing conversion of'-1' from'int' to'char' [-Wnarrowing]")])]),e._v(" "),o("p",[e._v("There will be an error when compiling brpc 0.9.7. The solution is to add "),o("code",[e._v("-Wno-narrowing")]),e._v(" in "),o("code",[e._v("CMAKE_CXX_FLAGS")]),e._v(" of CMakeLists.txt of brpc. This problem has been fixed in the brpc master code:")]),e._v(" "),o("p",[o("code",[e._v("https://github.com/apache/incubator-brpc/issues/1091")])])]),e._v(" "),o("li",[o("p",[o("code",[e._v("libz.a(deflate.o): relocation R_AARCH64_ADR_PREL_PG_HI21 against symbol")]),e._v("z_errmsg' which may bind externally can not be used when making a shared object; recompile with -fPIC`")]),e._v(" "),o("p",[e._v("There will be errors when compiling brpc 0.9.7, and libcrypto will also report similar errors. The reason is unknown. It seems that under aarch64, brpc needs to link the dynamic zlib and crypto libraries. But when we compile these two third-party libraries, we only compiled .a static files. Solution: Recompile zlib and openssl to generate .so dynamic library:")]),e._v(" "),o("p",[e._v("Open "),o("code",[e._v("build-thirdparty.sh")]),e._v(", find the "),o("code",[e._v("build_zlib")]),e._v(" function, and change:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("./configure --prefix=$TP_INSTALL_DIR --static\nJust change to\n./configure --prefix=$TP_INSTALL_DIR\n")])])]),o("p",[e._v("Find "),o("code",[e._v("build_openssl")]),e._v(" and comment out the following parts:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("#if [-f $TP_INSTALL_DIR/lib64/libcrypto.so ]; then\n# rm -rf $TP_INSTALL_DIR/lib64/libcrypto.so*\n#fi\n#if [-f $TP_INSTALL_DIR/lib64/libssl.so ]; then\n# rm -rf $TP_INSTALL_DIR/lib64/libssl.so*\n#fi\n")])])]),o("p",[e._v("Then go to "),o("code",[e._v("build-thirdparty.sh")]),e._v(", comment out other "),o("code",[e._v("build_xxx")]),e._v(", open only "),o("code",[e._v("build_zlib")]),e._v(" and "),o("code",[e._v("build_openssl")]),e._v(", and "),o("code",[e._v("build_brpc")]),e._v(" and later "),o("code",[e._v("build_xxx")]),e._v(". Then re-execute "),o("code",[e._v("build-thirdparty.sh")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("The compilation is stuck at a certain stage.")]),e._v(" "),o("p",[e._v("Not sure why. Solution: Rerun "),o("code",[e._v("build-thirdparty.sh")]),e._v(". "),o("code",[e._v("build-thirdparty.sh")]),e._v(" can be executed repeatedly.")])])])])]),e._v(" "),o("h3",{attrs:{id:"_4-compile-doris-source-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-compile-doris-source-code"}},[e._v("#")]),e._v(" 4. Compile Doris source code")]),e._v(" "),o("p",[e._v("Execute "),o("code",[e._v("sh build.sh")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"_5-faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-faq"}},[e._v("#")]),e._v(" 5. FAQ")]),e._v(" "),o("ol",[o("li",[o("p",[o("code",[e._v("undefined reference to psl_free")]),e._v(" appears when compiling Doris")]),e._v(" "),o("p",[e._v("libcurl will call libpsl functions, but libpsl is not linked for an unknown reason. Solutions (choose one of the two):")]),e._v(" "),o("ol",[o("li",[e._v("Add "),o("code",[e._v("--without-libpsl")]),e._v(" to the "),o("code",[e._v("build_curl")]),e._v(" method in "),o("code",[e._v("thirdparty/build-thirdparty.sh")]),e._v(", recompile libcurl, and then recompile Doris.")]),e._v(" "),o("li",[e._v("About line 603 in "),o("code",[e._v("be/CMakeLists.txt")]),e._v(", add "),o("code",[e._v("-lpsl")]),e._v(" after "),o("code",[e._v("-pthread")]),e._v(", and then recompile Doris.")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
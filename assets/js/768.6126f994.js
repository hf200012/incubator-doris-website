(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1222:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"apache-doris-be-开发调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-be-开发调试"}},[e._v("#")]),e._v(" Apache Doris Be 开发调试")]),e._v(" "),a("h2",{attrs:{id:"前期准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前期准备工作"}},[e._v("#")]),e._v(" 前期准备工作")]),e._v(" "),a("p",[a("strong",[e._v("本教程是在 Ubuntu 20.04 下进行的")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("下载 doris 源代码")]),e._v(" "),a("p",[e._v("下载地址为："),a("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("apache/incubator-doris: Apache Doris (Incubating) (github.com)"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("安装 GCC 8.3.1+，Oracle JDK 1.8+，Python 2.7+，确认 gcc, java, python 命令指向正确版本, 设置  JAVA_HOME 环境变量")])]),e._v(" "),a("li",[a("p",[e._v("安装其他依赖包")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python brotli\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("安装 openssl-devel")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install -y openssl-devel\n")])])]),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),a("p",[e._v("以下操作步骤在 /home/workspace 目录下进行")]),e._v(" "),a("ol",[a("li",[e._v("下载源码")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/apache/incubator-doris.git \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("编译第三方依赖包")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" cd /home/workspace/incubator-doris/thirdparty\n ./build-thirdparty.sh\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("编译doris产品代码")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /home/workspace/incubator-doris\n./build.sh\n")])])]),a("p",[e._v("注意：这个编译有以下几条指令：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./build.sh  #同时编译be 和fe\n./build.sh  --be #只编译be\n./build.sh  --fe #只编译fe\n./build.sh  --fe --be#同时编译be fe\n./build.sh  --fe --be --clean#删除并同时编译be fe\n./build.sh  --fe  --clean#删除并编译fe\n./build.sh  --be  --clean#删除并编译be\n./build.sh  --be --fe  --clean#删除并同时编译be fe\n")])])]),a("p",[e._v("如果不出意外，应该会编译成功，最终的部署文件将产出到  /home/workspace/incubator-doris/output/ 目录下。如果还遇到其他问题，可以参照 doris 的安装文档 http://doris.apache.org。")]),e._v(" "),a("h2",{attrs:{id:"部署调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署调试"}},[e._v("#")]),e._v(" 部署调试")]),e._v(" "),a("ol",[a("li",[e._v("给be编译结果文件授权")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod  /home/workspace/incubator-doris/output/be/lib/palo_be\n")])])]),a("p",[e._v("注意： /home/workspace/incubator-doris/output/be/lib/palo_be为be的执行文件。")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("创建数据存放目录")])]),e._v(" "),a("p",[e._v("通过查看/home/workspace/incubator-doris/output/be/conf/be.conf")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# INFO, WARNING, ERROR, FATAL\nsys_log_level = INFO\nbe_port = 9060\nbe_rpc_port = 9070\nwebserver_port = 8040\nheartbeat_service_port = 9050\nbrpc_port = 8060\n\n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/\n# Default value is empty.\npriority_networks = 192.168.59.0/24 # data root path, seperate by ';'\nstorage_root_path = /soft/be/storage \n# sys_log_dir = ${PALO_HOME}/log\n# sys_log_roll_mode = SIZE-MB-\n# sys_log_roll_num =\n# sys_log_verbose_modules =\n# log_buffer_level = -\n# palo_cgroups \n")])])]),a("p",[e._v("需要创建一个文件夹，这是be数据存放的地方")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir -p /soft/be/storage\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("打开 vscode，并打开 be 源码所在目录，在本案例中打开目录为 "),a("strong",[e._v("/home/workspace/incubator-doris/")])])]),e._v(" "),a("li",[a("p",[e._v("安装 vscode ms c++ 调试插件")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20210618104004956.png"),alt:""}}),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("创建 launch.json 文件，文件内容如下：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/incubator-doris/output/be/lib/palo_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/incubator-doris/",\n            "environment": [{"name":"PALO_HOME","value":"/home/workspace/incubator-doris/output/be/"},\n                            {"name":"UDF_RUNTIME_DIR","value":"/home/workspace/incubator-doris/output/be/lib/udf-runtime"},\n                            {"name":"LOG_DIR","value":"/home/workspace/incubator-doris/output/be/log"},\n                            {"name":"PID_DIR","value":"/home/workspace/incubator-doris/output/be/bin"}\n                           ],\n            "externalConsole": true,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')])])]),a("p",[e._v("其中，environment 定义了几个环境变量 DORIS_HOME  UDF_RUNTIME_DIR LOG_DIR  PID_DIR，这是 palo_be 运行时需要的环境变量，如果没有设置，启动会失败。")]),e._v(" "),a("p",[a("strong",[e._v("注意：如果希望是attach(附加进程）调试，配置代码如下：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "version": "0.2.0",\n    "configurations": [\n      \t{\n          "name": "(gdb) Launch",\n          "type": "cppdbg",\n          "request": "attach",\n          "program": "/home/workspace/incubator-doris/output/lib/palo_be",\n          "processId":,\n          "MIMode": "gdb",\n          "internalConsoleOptions":"openOnSessionStart",\n          "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')])])]),a("p",[e._v("配置中 "),a("strong",[e._v('"request": "attach"，   "processId":PID')]),e._v("，这两个配置是重点： 分别设置 gdb 的调试模式为 attach，附加进程的processId，否则会失败。如何查找进程id，可以在命令行中输入以下命令：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ps -ef | grep palo*\n")])])]),a("p",[e._v("如图：")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20210618095240216.png"),alt:""}}),e._v(" "),a("p",[e._v("其中的15200即为当前运行的 be 的进程 id.")]),e._v(" "),a("p",[e._v("一个完整的 lainch.json 的例子如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' {\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Attach",\n            "type": "cppdbg",\n            "request": "attach",\n            "program": "/home/workspace/incubator-doris/output/be/lib/palo_be",\n            "processId": 17016,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        },\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/incubator-doris/output/be/lib/palo_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/incubator-doris/output/be",\n            "environment": [\n                {\n                    "name": "DORIS_HOME",\n                    "value": "/home/workspace/incubator-doris/output/be"\n                },\n                {\n                    "name": "UDF_RUNTIME_DIR",\n                    "value": "/home/workspace/incubator-doris/output/be/lib/udf-runtime"\n                },\n                {\n                    "name": "LOG_DIR",\n                    "value": "/home/workspace/incubator-doris/output/be/log"\n                },\n                {\n                    "name": "PID_DIR",\n                    "value": "/home/workspace/incubator-doris/output/be/bin"\n                }\n            ],\n            "externalConsole": false,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v("点击调试即可")]),e._v(" "),a("p",[e._v("下面就可以开始你的 Doris DEBUG 之旅了")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20210618091006146.png"),alt:""}})])}),[],!1,null,null,null);t.default=s.exports}}]);
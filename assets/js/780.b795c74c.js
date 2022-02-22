(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1233:function(t,a,s){"use strict";s.r(a);var n=s(56),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"doris-be存储层benchmark工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-be存储层benchmark工具"}},[t._v("#")]),t._v(" Doris BE存储层Benchmark工具")]),t._v(" "),s("h2",{attrs:{id:"用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("可以用来测试BE存储层的一些部分(例如segment、page)的性能。根据输入数据构造出指定对象,利用google benchmark进行性能测试。\n")])])]),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("确保环境已经能顺利编译Doris本体,可以参考"),s("a",{attrs:{href:"https://doris.apache.org/master/zh-CN/installing/compilation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("编译与部署"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("运行目录下的"),s("code",[t._v("run-be-ut.sh")])])]),t._v(" "),s("li",[s("p",[t._v("编译出的可执行文件位于"),s("code",[t._v("./be/ut_build_ASAN/test/tools/benchmark_tool")])])])]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("h4",{attrs:{id:"使用随机生成的数据集进行segment读取测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行segment读取测试"}},[t._v("#")]),t._v(" 使用随机生成的数据集进行Segment读取测试")]),t._v(" "),s("p",[t._v("会先利用数据集写入一个"),s("code",[t._v("segment")]),t._v("文件,然后对scan整个"),s("code",[t._v("segment")]),t._v("的耗时进行统计。")]),t._v(" "),s("blockquote",[s("p",[t._v("./benchmark_tool --operation=SegmentScan --column_type=int,varchar --rows_number=10000 --iterations=0")])]),t._v(" "),s("p",[t._v("这里的"),s("code",[t._v("column_type")]),t._v("可以设置表结构,"),s("code",[t._v("segment")]),t._v("层的表结构类型目前支持"),s("code",[t._v("int、char、varchar、string")]),t._v(","),s("code",[t._v("char")]),t._v("类型的长度为"),s("code",[t._v("8")]),t._v(","),s("code",[t._v("varchar")]),t._v("和"),s("code",[t._v("string")]),t._v("类型长度限制都为最大值。默认值为"),s("code",[t._v("int,varchar")]),t._v("。")]),t._v(" "),s("p",[t._v("数据集按以下规则生成。")]),t._v(" "),s("blockquote",[s("p",[t._v("int: 在[1,1000000]内随机。")])]),t._v(" "),s("p",[t._v("字符串类型的数据字符集为大小写英文字母,长度根据类型不同。")]),t._v(" "),s("blockquote",[s("p",[t._v("char: 长度在[1,8]内随机。\nvarchar: 长度在[1,128]内随机。\nstring: 长度在[1,100000]内随机。")])]),t._v(" "),s("p",[s("code",[t._v("rows_number")]),t._v("表示数据的行数,默认值为"),s("code",[t._v("10000")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("iterations")]),t._v("表示迭代次数,benchmark会重复进行测试,然后计算平均耗时。如果"),s("code",[t._v("iterations")]),t._v("为"),s("code",[t._v("0")]),t._v("则表示由benchmark自动选择迭代次数。默认值为"),s("code",[t._v("10")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"使用随机生成的数据集进行segment写入测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行segment写入测试"}},[t._v("#")]),t._v(" 使用随机生成的数据集进行Segment写入测试")]),t._v(" "),s("p",[t._v("对将数据集添加进segment并写入磁盘的流程进行耗时统计。")]),t._v(" "),s("blockquote",[s("p",[t._v("./benchmark_tool --operation=SegmentWrite")])]),t._v(" "),s("h4",{attrs:{id:"使用从文件导入的数据集进行segment读取测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用从文件导入的数据集进行segment读取测试"}},[t._v("#")]),t._v(" 使用从文件导入的数据集进行Segment读取测试")]),t._v(" "),s("blockquote",[s("p",[t._v("./benchmark_tool --operation=SegmentScanByFile --input_file=./sample.dat")])]),t._v(" "),s("p",[t._v("这里的"),s("code",[t._v("input_file")]),t._v("为导入的数据集文件。\n数据集文件第一行为表结构定义,之后每行分别对应一行数据,每个数据用"),s("code",[t._v(",")]),t._v("隔开。")]),t._v(" "),s("p",[t._v("举例:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int,char,varchar\n123,hello,world\n321,good,bye\n")])])]),s("p",[t._v("类型支持同样为"),s("code",[t._v("int")]),t._v("、"),s("code",[t._v("char")]),t._v("、"),s("code",[t._v("varchar")]),t._v("、"),s("code",[t._v("string")]),t._v(",注意"),s("code",[t._v("char")]),t._v("类型数据长度不能超过8。")]),t._v(" "),s("h4",{attrs:{id:"使用从文件导入的数据集进行segment写入测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用从文件导入的数据集进行segment写入测试"}},[t._v("#")]),t._v(" 使用从文件导入的数据集进行Segment写入测试")]),t._v(" "),s("blockquote",[s("p",[t._v("./benchmark_tool --operation=SegmentWriteByFile --input_file=./sample.dat")])]),t._v(" "),s("h4",{attrs:{id:"使用随机生成的数据集进行page字典编码测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行page字典编码测试"}},[t._v("#")]),t._v(" 使用随机生成的数据集进行page字典编码测试")]),t._v(" "),s("blockquote",[s("p",[t._v("./benchmark_tool --operation=BinaryDictPageEncode --rows_number=10000 --iterations=0")])]),t._v(" "),s("p",[t._v("会随机生成长度在[1,8]之间的varchar,并对编码进行耗时统计。")]),t._v(" "),s("h4",{attrs:{id:"使用随机生成的数据集进行page字典解码测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用随机生成的数据集进行page字典解码测试"}},[t._v("#")]),t._v(" 使用随机生成的数据集进行page字典解码测试")]),t._v(" "),s("blockquote",[s("p",[t._v("./benchmark_tool --operation=BinaryDictPageDecode")])]),t._v(" "),s("p",[t._v("会随机生成长度在[1,8]之间的varchar并编码,并对解码进行耗时统计。")]),t._v(" "),s("h2",{attrs:{id:"custom测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom测试"}},[t._v("#")]),t._v(" Custom测试")]),t._v(" "),s("p",[t._v("这里支持用户使用自己编写的函数进行性能测试,具体可以实现在"),s("code",[t._v("/be/test/tools/benchmark_tool.cpp")]),t._v("。\n例如实现有：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_run_plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNLIKELY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom_run_mod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("则可以通过注册"),s("code",[t._v("CustomBenchmark")]),t._v("来加入测试。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("benchmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emplace_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" doris"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomBenchmark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom_run_plus"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        custom_init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" custom_run_plus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbenchmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emplace_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" doris"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomBenchmark")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom_run_mod"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        custom_init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" custom_run_mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这里的"),s("code",[t._v("init")]),t._v("为每轮测试的初始化步骤(不会计入耗时),如果用户有需要初始化的对象则可以通过"),s("code",[t._v("CustomBenchmark")]),t._v("的派生类来实现。\n运行后有如下结果:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("2021-08-30T10:29:35+08:00\nRunning ./benchmark_tool\nRun on (96 X 3100.75 MHz CPU s)\nCPU Caches:\n  L1 Data 32 KiB (x48)\n  L1 Instruction 32 KiB (x48)\n  L2 Unified 1024 KiB (x48)\n  L3 Unified 33792 KiB (x2)\nLoad Average: 0.55, 0.53, 0.39\n----------------------------------------------------------\nBenchmark                Time             CPU   Iterations\n----------------------------------------------------------\ncustom_run_plus      0.812 ms        0.812 ms          861\ncustom_run_mod        1.30 ms         1.30 ms          539\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
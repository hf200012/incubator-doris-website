(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{1157:function(t,_,a){"use strict";a.r(_);var e=a(56),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"s3-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-load"}},[t._v("#")]),t._v(" S3 Load")]),t._v(" "),a("p",[t._v("从0.14 版本开始，Doris 支持通过S3协议直接从支持S3协议的在线存储系统导入数据。")]),t._v(" "),a("p",[t._v("本文档主要介绍如何导入 AWS S3 中存储的数据。也支持导入其他支持S3协议的对象存储系统导入，如果百度云的BOS，阿里云的OSS和腾讯云的COS等、")]),t._v(" "),a("h2",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("源数据在 支持S3协议的存储系统中，如 S3,BOS 等。")]),t._v(" "),a("li",[t._v("数据量在 几十到百GB 级别。")])]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("ol",[a("li",[t._v("准本AK 和 SK\n首先需要找到或者重新生成 AWS "),a("code",[t._v("Access keys")]),t._v("，可以在AWS console 的 "),a("code",[t._v("My Security Credentials")]),t._v(" 找到生成方式， 如下图所示：\n"),a("a",{attrs:{href:"/images/aws_ak_sk.png"}},[t._v("AK_SK")]),t._v("\n选择 "),a("code",[t._v("Create New Access Key")]),t._v(" 注意保存生成 AK和SK.")]),t._v(" "),a("li",[t._v("准备 REGION 和 ENDPOINT\nREGION 可以在创建桶的时候选择也可以在桶列表中查看到。ENDPOINT 可以通过如下页面通过REGION查到 "),a("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS 文档"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("其他云存储系统可以相应的文档找到与S3兼容的相关信息")]),t._v(" "),a("h2",{attrs:{id:"开始导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始导入"}},[t._v("#")]),t._v(" 开始导入")]),t._v(" "),a("p",[t._v("导入方式和Broker Load 基本相同，只需要将 "),a("code",[t._v("WITH BROKER broker_name ()")]),t._v(" 语句替换成如下部分")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')])])]),a("p",[t._v("完整示例如下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')])])]),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("p",[t._v("S3 SDK 默认使用 virtual-hosted style 方式。但某些对象存储系统可能没开启或没支持 virtual-hosted style 方式的访问，此时我们可以添加 "),a("code",[t._v("use_path_style")]),t._v(" 参数来强制使用 path style 方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  WITH S3\n  (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION",\n        "use_path_style" = "true"\n  )\n')])])])])}),[],!1,null,null,null);_.default=s.exports}}]);
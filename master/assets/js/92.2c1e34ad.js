(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{538:function(e,t,a){"use strict";a.r(t);var s=a(52),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"s3-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-load"}},[e._v("#")]),e._v(" S3 Load")]),e._v(" "),a("p",[e._v("Starting from version 0.14, Doris supports the direct import of data from online storage systems that support the S3 protocol through the S3 protocol.")]),e._v(" "),a("p",[e._v("This document mainly introduces how to import data stored in AWS S3. It also supports the import of other object storage systems that support the S3 protocol, such as Baidu Cloud’s BOS, Alibaba Cloud’s OSS and Tencent Cloud’s COS, etc.")]),e._v(" "),a("h2",{attrs:{id:"applicable-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicable-scenarios"}},[e._v("#")]),e._v(" Applicable scenarios")]),e._v(" "),a("ul",[a("li",[e._v("Source data in S3 protocol accessible storage systems, such as S3, BOS.")]),e._v(" "),a("li",[e._v("Data volumes range from tens to hundreds of GB.")])]),e._v(" "),a("h2",{attrs:{id:"preparing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing"}},[e._v("#")]),e._v(" Preparing")]),e._v(" "),a("ol",[a("li",[e._v("Standard AK and SK\nFirst, you need to find or regenerate AWS "),a("code",[e._v("Access keys")]),e._v(", you can find the generation method in "),a("code",[e._v("My Security Credentials")]),e._v(" of AWS console, as shown in the following figure:\n"),a("a",{attrs:{href:"/images/aws_ak_sk.png"}},[e._v("AK_SK")]),e._v("\nSelect "),a("code",[e._v("Create New Access Key")]),e._v(" and pay attention to save and generate AK and SK.")]),e._v(" "),a("li",[e._v("Prepare REGION and ENDPOINT\nREGION can be selected when creating the bucket or can be viewed in the bucket list. ENDPOINT can be found through REGION on the following page "),a("a",{attrs:{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Documentation"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Other cloud storage systems can find relevant information compatible with S3 in corresponding documents")]),e._v(" "),a("h2",{attrs:{id:"start-loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-loading"}},[e._v("#")]),e._v(" Start Loading")]),e._v(" "),a("p",[e._v("Like Broker Load just replace "),a("code",[e._v("WITH BROKER broker_name ()")]),e._v(" with")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n')])])]),a("p",[e._v("example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    LOAD LABEL example_db.exmpale_label_1\n    (\n        DATA INFILE("s3://your_bucket_name/your_file.txt")\n        INTO TABLE load_test\n        COLUMNS TERMINATED BY ","\n    )\n    WITH S3\n    (\n        "AWS_ENDPOINT" = "AWS_ENDPOINT",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "AWS_REGION"\n    )\n    PROPERTIES\n    (\n        "timeout" = "3600"\n    );\n')])])]),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[e._v("S3 SDK uses virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the "),a("code",[e._v("use_path_style")]),e._v(" parameter to force the use of path style:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('   WITH S3\n   (\n         "AWS_ENDPOINT" = "AWS_ENDPOINT",\n         "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n         "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n         "AWS_REGION" = "AWS_REGION",\n         "use_path_style" = "true"\n   )\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
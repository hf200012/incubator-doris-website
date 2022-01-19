(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1076:function(e,r,a){"use strict";a.r(r);var s=a(56),o=Object(s.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"broker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker"}},[e._v("#")]),e._v(" Broker")]),e._v(" "),a("p",[e._v("Broker 是 Doris 集群中一种可选进程，主要用于支持 Doris 读写远端存储上的文件和目录，如 HDFS、BOS 和 AFS 等。")]),e._v(" "),a("p",[e._v("Broker 通过提供一个 RPC 服务端口来提供服务，是一个无状态的 Java 进程，负责为远端存储的读写操作封装一些类 POSIX 的文件操作，如 open，pread，pwrite 等等。除此之外，Broker 不记录任何其他信息，所以包括远端存储的连接信息、文件信息、权限信息等等，都需要通过参数在 RPC 调用中传递给 Broker 进程，才能使得 Broker 能够正确读写文件。")]),e._v(" "),a("p",[e._v("Broker 仅作为一个数据通路，并不参与任何计算，因此仅需占用较少的内存。通常一个 Doris 系统中会部署一个或多个 Broker 进程。并且相同类型的 Broker 会组成一个组，并设定一个 "),a("strong",[e._v("名称（Broker name）")]),e._v("。")]),e._v(" "),a("p",[e._v("Broker 在 Doris 系统架构中的位置如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n")])])]),a("p",[e._v("本文档主要介绍 Broker 在访问不同远端存储时需要的参数，如连接信息、权限认证信息等等。")]),e._v(" "),a("h2",{attrs:{id:"支持的存储系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的存储系统"}},[e._v("#")]),e._v(" 支持的存储系统")]),e._v(" "),a("p",[e._v("不同的 Broker 类型支持不同的存储系统。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("社区版 HDFS")]),e._v(" "),a("ul",[a("li",[e._v("支持简单认证访问")]),e._v(" "),a("li",[e._v("支持通过 kerberos 认证访问")]),e._v(" "),a("li",[e._v("支持 HDFS HA 模式访问")])])]),e._v(" "),a("li",[a("p",[e._v("百度 HDFS/AFS（开源版本不支持）")]),e._v(" "),a("ul",[a("li",[e._v("支持通过 ugi 简单认证访问")])])]),e._v(" "),a("li",[a("p",[e._v("百度对象存储 BOS（开源版本不支持）")]),e._v(" "),a("ul",[a("li",[e._v("支持通过 AK/SK 认证访问")])])])]),e._v(" "),a("h2",{attrs:{id:"需要-broker-的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要-broker-的操作"}},[e._v("#")]),e._v(" 需要 Broker 的操作")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Broker Load")]),e._v(" "),a("p",[e._v("Broker Load 功能通过 Broker 进程读取远端存储上的文件数据并导入到 Doris 中。示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LOAD LABEL example_db.label6\n(\n    DATA INFILE("bos://my_bucket/input/file")\n    INTO TABLE `my_table`\n)\nWITH BROKER "broker_name"\n(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyy"\n)\n')])])]),a("p",[e._v("其中 "),a("code",[e._v("WITH BROKER")]),e._v(" 以及之后的 Property Map 用于提供 Broker 相关信息。")])]),e._v(" "),a("li",[a("p",[e._v("数据导出（Export）")]),e._v(" "),a("p",[e._v("Export 功能通过 Broker 进程，将 Doris 中存储的数据以文本的格式导出到远端存储的文件中。示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('EXPORT TABLE testTbl \nTO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy"\n);\n')])])]),a("p",[e._v("其中 "),a("code",[e._v("WITH BROKER")]),e._v(" 以及之后的 Property Map 用于提供 Broker 相关信息。")])]),e._v(" "),a("li",[a("p",[e._v("创建用于备份恢复的仓库（Create Repository）")]),e._v(" "),a("p",[e._v("当用户需要使用备份恢复功能时，需要先通过 "),a("code",[e._v("CREATE REPOSITORY")]),e._v(" 命令创建一个 “仓库”，仓库元信息中记录了所使用的 Broker 以及相关信息。之后的备份恢复操作，会通过 Broker 将数据备份到这个仓库，或从这个仓库读取数据恢复到 Doris 中。示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE REPOSITORY `bos_repo`\nWITH BROKER `broker_name`\nON LOCATION "bos://doris_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyy"\n);\n')])])]),a("p",[e._v("其中 "),a("code",[e._v("WITH BROKER")]),e._v(" 以及之后的 Property Map 用于提供 Broker 相关信息。")])])]),e._v(" "),a("h2",{attrs:{id:"broker-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-信息"}},[e._v("#")]),e._v(" Broker 信息")]),e._v(" "),a("p",[e._v("Broker 的信息包括 "),a("strong",[e._v("名称（Broker name）")]),e._v(" 和 "),a("strong",[e._v("认证信息")]),e._v(" 两部分。通常的语法格式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n')])])]),a("h3",{attrs:{id:"名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名称"}},[e._v("#")]),e._v(" 名称")]),e._v(" "),a("p",[e._v("通常用户需要通过操作命令中的 "),a("code",[e._v('WITH BROKER "broker_name"')]),e._v(" 子句来指定一个已经存在的 Broker Name。Broker Name 是用户在通过 "),a("code",[e._v("ALTER SYSTEM ADD BROKER")]),e._v(" 命令添加 Broker 进程时指定的一个名称。一个名称通常对应一个或多个 Broker 进程。Doris 会根据名称选择可用的 Broker 进程。用户可以通过 "),a("code",[e._v("SHOW BROKER")]),e._v(" 命令查看当前集群中已经存在的 Broker。")]),e._v(" "),a("p",[a("strong",[e._v("注：Broker Name 只是一个用户自定义名称，不代表 Broker 的类型。")])]),e._v(" "),a("h3",{attrs:{id:"认证信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证信息"}},[e._v("#")]),e._v(" 认证信息")]),e._v(" "),a("p",[e._v("不同的 Broker 类型，以及不同的访问方式需要提供不同的认证信息。认证信息通常在 "),a("code",[e._v('WITH BROKER "broker_name"')]),e._v(" 之后的 Property Map 中以 Key-Value 的方式提供。")]),e._v(" "),a("h4",{attrs:{id:"社区版-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#社区版-hdfs"}},[e._v("#")]),e._v(" 社区版 HDFS")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("简单认证")]),e._v(" "),a("p",[e._v("简单认证即 Hadoop 配置 "),a("code",[e._v("hadoop.security.authentication")]),e._v(" 为 "),a("code",[e._v("simple")]),e._v("。")]),e._v(" "),a("p",[e._v("使用系统用户访问 HDFS。或者在 Broker 启动的环境变量中添加："),a("code",[e._v("HADOOP_USER_NAME")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "username" = "user",\n    "password" = ""\n);\n')])])]),a("p",[e._v("密码置空即可。")])]),e._v(" "),a("li",[a("p",[e._v("Kerberos 认证")]),e._v(" "),a("p",[e._v("该认证方式需提供以下信息：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("hadoop.security.authentication")]),e._v("：指定认证方式为 kerberos。")]),e._v(" "),a("li",[a("code",[e._v("kerberos_principal")]),e._v("：指定 kerberos 的 principal。")]),e._v(" "),a("li",[a("code",[e._v("kerberos_keytab")]),e._v("：指定 kerberos 的 keytab 文件路径。该文件必须为 Broker 进程所在服务器上的文件的绝对路径。并且可以被 Broker 进程访问。")]),e._v(" "),a("li",[a("code",[e._v("kerberos_keytab_content")]),e._v("：指定 kerberos 中 keytab 文件内容经过 base64 编码之后的内容。这个跟 "),a("code",[e._v("kerberos_keytab")]),e._v(" 配置二选一即可。")])]),e._v(" "),a("p",[e._v("示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab" = "/home/doris/my.keytab"\n)\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n')])])]),a("p",[e._v("如果采用Kerberos认证方式，则部署Broker进程的时候需要"),a("a",{attrs:{href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("krb5.conf"),a("OutboundLink")],1),e._v("文件，\nkrb5.conf文件包含Kerberos的配置信息，通常，您应该将krb5.conf文件安装在目录/etc中。您可以通过设置环境变量KRB5_CONFIG覆盖默认位置。\nkrb5.conf文件的内容示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n")])])])]),e._v(" "),a("li",[a("p",[e._v("HDFS HA 模式")]),e._v(" "),a("p",[e._v("这个配置用于访问以 HA 模式部署的 HDFS 集群。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dfs.nameservices")]),e._v('：指定 hdfs 服务的名字，自定义，如："dfs.nameservices" = "my_ha"。')]),e._v(" "),a("li",[a("code",[e._v("dfs.ha.namenodes.xxx")]),e._v("：自定义 namenode 的名字,多个名字以逗号分隔。其中 xxx 为 "),a("code",[e._v("dfs.nameservices")]),e._v(' 中自定义的名字，如： "dfs.ha.namenodes.my_ha" = "my_nn"。')]),e._v(" "),a("li",[a("code",[e._v("dfs.namenode.rpc-address.xxx.nn")]),e._v("：指定 namenode 的rpc地址信息。其中 nn 表示 "),a("code",[e._v("dfs.ha.namenodes.xxx")]),e._v(' 中配置的 namenode 的名字，如："dfs.namenode.rpc-address.my_ha.my_nn" = "host:port"。')]),e._v(" "),a("li",[a("code",[e._v("dfs.client.failover.proxy.provider")]),e._v("：指定 client 连接 namenode 的 provider，默认为：org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider。")])]),e._v(" "),a("p",[e._v("示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')])])]),a("p",[e._v("HA 模式可以和前面两种认证方式组合，进行集群访问。如通过简单认证访问 HA HDFS：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')])])]),a("p",[e._v("关于HDFS集群的配置可以写入hdfs-site.xml文件中，用户使用Broker进程读取HDFS集群的信息时，只需要填写集群的文件路径名和认证信息即可。")])])]),e._v(" "),a("h4",{attrs:{id:"百度对象存储-bos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度对象存储-bos"}},[e._v("#")]),e._v(" 百度对象存储 BOS")]),e._v(" "),a("p",[a("strong",[e._v("（开源版本不支持）")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("通过 AK/SK 访问")]),e._v(" "),a("ul",[a("li",[e._v("AK/SK：Access Key 和 Secret Key。在百度云安全认证中心可以查看用户的 AK/SK。")]),e._v(" "),a("li",[e._v("Region Endpoint：BOS 所在地区的 Endpoint。")]),e._v(" "),a("li",[e._v("BOS支持的区域及对应 Endpoint 请查看"),a("a",{attrs:{href:"https://cloud.baidu.com/doc/BOS/s/Ck1rk80hn#%E8%8E%B7%E5%8F%96%E8%AE%BF%E9%97%AE%E5%9F%9F%E5%90%8D",target:"_blank",rel:"noopener noreferrer"}},[e._v("获取访问域名"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n)\n')])])])])]),e._v(" "),a("h4",{attrs:{id:"百度-hdfs-afs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度-hdfs-afs"}},[e._v("#")]),e._v(" 百度 HDFS/AFS")]),e._v(" "),a("p",[a("strong",[e._v("（开源版本不支持）")])]),e._v(" "),a("p",[e._v("百度 AFS 和 HDFS 仅支持使用 ugi 的简单认证访问。示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "username" = "user",\n    "password" = "passwd"\n);\n')])])]),a("p",[e._v("其中 user 和 passwd 为 Hadoop 的 UGI 配置。")])])}),[],!1,null,null,null);r.default=o.exports}}]);
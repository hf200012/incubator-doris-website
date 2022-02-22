(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1201:function(a,s,t){"use strict";t.r(s);var e=t(56),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("本教程的目的，是针对对Docker容器化技术知之甚少甚至一无所知，但又想尝试部署当下最火热的MPP-OLAP数据库Apache Doris玩耍的同学，或者公司有新的技术架构需求，想部署测试环境进行测试性能、简单搭建的伙伴，全文尽量使用简练白话文增强可阅读性。")]),a._v(" "),t("p",[a._v("本教程始于「用啥系统可以编译啊」、「部署的集群怎么配置」、「Docker是啥」、「安装Docker及基本操作」等疑问，终于「Doris如何编译」、「Doris快速部署」等话题，全文数千字，实战时间3-5小时左右。")]),a._v(" "),t("p",[a._v("本教程的部署模式有两种，一种是多服务器多节点的集群部署模式，这种模式一般用于测试环境部署，一种是高性能的单节点制作多Docker做集群，这种模式一般用于个人研究，两种部署模式教程都有详细步骤说明。")]),a._v(" "),t("p",[a._v("最终想要达到的标准是，哪怕你全程不想看任何的文字描述，只需要依次复制代码框里的代码，在指定的地方粘贴并执行，即可完成Apache Doris的编译及部署工作！")]),a._v(" "),t("p",[a._v("本教程将会分为两部分，已经通过三平台分别测试，均成功编译及部署~")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-部署流程"}},[a._v("1 部署流程")])]),t("li",[t("a",{attrs:{href:"#_2-教程环境-按需查看即可"}},[a._v("2 教程环境（按需查看即可）")]),t("ul",[t("li",[t("a",{attrs:{href:"#_2-1-linux环境"}},[a._v("2.1 Linux环境")])]),t("li",[t("a",{attrs:{href:"#_2-2-mac环境"}},[a._v("2.2 Mac环境")])]),t("li",[t("a",{attrs:{href:"#_2-3-windows环境"}},[a._v("2.3 Windows环境")])])])]),t("li",[t("a",{attrs:{href:"#_3-docker认知与部署"}},[a._v("3 Docker认知与部署")]),t("ul",[t("li",[t("a",{attrs:{href:"#_3-1-docker认知"}},[a._v("3.1 Docker认知")])]),t("li",[t("a",{attrs:{href:"#_3-2-docker部署"}},[a._v("3.2 Docker部署")])]),t("li",[t("a",{attrs:{href:"#_3-3-docker常用命令-可略"}},[a._v("3.3 Docker常用命令（可略）")])])])]),t("li",[t("a",{attrs:{href:"#_4-apache-doris编译与部署"}},[a._v("4 Apache Doris编译与部署")]),t("ul",[t("li",[t("a",{attrs:{href:"#_4-1-apache-doris编译"}},[a._v("4.1 Apache Doris编译")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"_1-部署流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署流程"}},[a._v("#")]),a._v(" 1 部署流程")]),a._v(" "),t("p",[t("em",[t("strong",[a._v("本篇为「编译篇」只涉及编译，部署将由「部署篇」完成")])])]),a._v(" "),t("ol",[t("li",[a._v("配置编译环境")]),a._v(" "),t("li",[a._v("认识Docker")]),a._v(" "),t("li",[a._v("安装Docker")]),a._v(" "),t("li",[a._v("Docker基本操作命令")]),a._v(" "),t("li",[a._v("Doris如何编译")]),a._v(" "),t("li",[a._v("Doris两种部署方法\n"),t("ol",[t("li",[a._v("独立机器部署")]),a._v(" "),t("li",[a._v("Docker部署")])])]),a._v(" "),t("li",[a._v("Doris部署常见问题及避坑")])]),a._v(" "),t("h2",{attrs:{id:"_2-教程环境-按需查看即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-教程环境-按需查看即可"}},[a._v("#")]),a._v(" 2 教程环境（按需查看即可）")]),a._v(" "),t("p",[a._v("编译过程都是基于Docker镜像进行编译的，分不同平台只是为了便于减少愿意尝试使用或者测试环境搭建的同学的使用成本，无论是你手头有Mac本，有Win电脑，还是有云端Linux服务器，都可以完成编译工作。")]),a._v(" "),t("p",[a._v("可以根据当前系统环境，选择以下章节阅读：")]),a._v(" "),t("ul",[t("li",[a._v("2.1 Linux")]),a._v(" "),t("li",[a._v("2.2 MaC")]),a._v(" "),t("li",[a._v("2.3 Windows")])]),a._v(" "),t("h3",{attrs:{id:"_2-1-linux环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-linux环境"}},[a._v("#")]),a._v(" 2.1 Linux环境")]),a._v(" "),t("p",[a._v("集群规模：3台 腾讯云服务器")]),a._v(" "),t("p",[a._v("集群配置：1节点FE | 2节点BE（节点数可以按需，具体可参阅 Apache Doris 官网部署文档中的建议）")]),a._v(" "),t("p",[a._v("单机规格：2C 4G")]),a._v(" "),t("p",[a._v("系统版本：CentOS 7.6")]),a._v(" "),t("p",[a._v("Java版本：JDK1.8")]),a._v(" "),t("p",[a._v("Doris版本：Apache Doris 0.15.0")]),a._v(" "),t("p",[a._v("Docker版本：20.10.11")]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-云服务器环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-云服务器环境准备"}},[a._v("#")]),a._v(" 2.1.1 云服务器环境准备")]),a._v(" "),t("p",[a._v("新购置的云服务器需要做如下工作：")]),a._v(" "),t("ol",[t("li",[a._v("安装CentOS7.6系统镜像")]),a._v(" "),t("li",[a._v("修改进入系统密码")]),a._v(" "),t("li",[a._v("远程连接服务器即可")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-mac环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mac环境"}},[a._v("#")]),a._v(" 2.2 Mac环境")]),a._v(" "),t("p",[a._v("集群规模：1台MacOS电脑 虚拟4个Docker对象")]),a._v(" "),t("p",[a._v("集群配置：1节点FE | 3节点BE（节点数可以按需，具体可参阅 Apache Doris 官网部署文档中的建议）")]),a._v(" "),t("p",[a._v("单机规格：2C 4G")]),a._v(" "),t("p",[a._v("系统版本：CentOS 7.6")]),a._v(" "),t("p",[a._v("Java版本：JDK1.8")]),a._v(" "),t("p",[a._v("Doris版本：Apache Doris 0.15.0")]),a._v(" "),t("p",[a._v("Docker版本：20.10.11")]),a._v(" "),t("h4",{attrs:{id:"_2-2-1-macos环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-macos环境准备"}},[a._v("#")]),a._v(" 2.2.1 MacOS环境准备")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("到Docker官网下载Docker-MacOS安装包")]),a._v(" "),t("p",[a._v("下载地址：https://hub.docker.com/")])]),a._v(" "),t("li",[t("p",[a._v("初次登陆，需要注册，注册后通过邮件链接认证")])]),a._v(" "),t("li",[t("p",[a._v("下载安装，Docker Tools初始化好后左下角Docker Logo所在的色块变绿色即代表初始化成功")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221194520114.png"),alt:"image-20211221194520114"}})]),a._v(" "),t("li",[t("p",[a._v("Contalners/Apps Tab里会有一个代码块，写着")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 docker/getting-started\n")])])]),t("p",[a._v("复制它，打开Mac终端，即可以运行你的Mac上第一个Docker镜像（该镜像非Doris相关镜像）")])])]),a._v(" "),t("h3",{attrs:{id:"_2-3-windows环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-windows环境"}},[a._v("#")]),a._v(" 2.3 Windows环境")]),a._v(" "),t("p",[a._v("集群规模：1台Win电脑 制作4个虚拟机对象")]),a._v(" "),t("p",[a._v("集群配置：1节点FE | 3节点BE（节点数可以按需，具体可参阅 Apache Doris 官网部署文档中的建议）")]),a._v(" "),t("p",[a._v("单机规格：4C 8G")]),a._v(" "),t("p",[a._v("系统版本：CentOS 7.6")]),a._v(" "),t("p",[a._v("Java版本：JDK1.8")]),a._v(" "),t("p",[a._v("Doris版本：Apache Doris 0.15.0")]),a._v(" "),t("p",[a._v("Docker版本：20.10.11")]),a._v(" "),t("h4",{attrs:{id:"_2-3-1-windows环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-windows环境准备"}},[a._v("#")]),a._v(" 2.3.1 Windows环境准备")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("电脑上需要有VM虚拟机软件（VMwareWorkstation）")])]),a._v(" "),t("li",[t("p",[a._v("需要准备下载好CentOS7的ISO镜像文件")])]),a._v(" "),t("li",[t("p",[a._v("电脑配置最好稍好一些，易于快速编译")])])]),a._v(" "),t("p",[a._v("为什么不适用Windows-Docker进行虚拟环境安装？")]),a._v(" "),t("p",[a._v("因为很繁琐，会增加很多工作量，且有很多没有共性的问题出现，不便于教程编写和阅读")]),a._v(" "),t("h4",{attrs:{id:"_2-3-2-虚拟机集群安装部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-虚拟机集群安装部署"}},[a._v("#")]),a._v(" 2.3.2 虚拟机集群安装部署")]),a._v(" "),t("h5",{attrs:{id:"_2-3-2-1-使用vm创建虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-1-使用vm创建虚拟机"}},[a._v("#")]),a._v(" 2.3.2.1 使用VM创建虚拟机")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("新建虚拟机")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195227111.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("选择高级")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195250005.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("在安装系统来源时选择-稍后安装")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195340120.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("在选择系统时选择Linux-CentOS 7 64位")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195424420.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("处理器选大一些，最好4内核总数以上（内核数量决定了编译速度）")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195548551.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("内存也稍微大一些，4G-8G以上")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195624113.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("选择NAT网络模式")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221195653102.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("容量随意，50GB以上即可")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221200029323.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("创建好以后选择 编辑虚拟机设置")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221200137725.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("设置系统ISO映射文件")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221200346916.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("开启虚拟机，安装系统即可")])])]),a._v(" "),t("h5",{attrs:{id:"_2-3-2-2-配置虚拟机及网络环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-2-配置虚拟机及网络环境"}},[a._v("#")]),a._v(" 2.3.2.2 配置虚拟机及网络环境")]),a._v(" "),t("p",[a._v("首先需要在VM上配置虚拟网络")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("点击"),t("code",[a._v("编辑菜单")]),a._v("，点击"),t("code",[a._v("虚拟网络编辑器")])]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221203204574.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("点击更改设置")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221203243631.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("照图进行勾选，然后设置子网IP地址段，第四段为0")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221203405005.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("然后点击NAT设置，修改网关IP，要注意，无论网关IP还是虚拟机IP，都要符合子网IP地址段的标准，也就是说，其他的IP地址设置，前三段要和子网IP一致")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221203712731.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("全部确定及应用")])]),a._v(" "),t("li",[t("p",[a._v("打开你宿主机（本电脑）的"),t("code",[a._v("网络和Internet")])]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221203847192.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("右键编辑 "),t("code",[a._v("VMnet8")]),a._v("网卡，打开属性")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221203955970.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("选择IPv4协议，点击属性")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221204030083.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("修改里面的项目")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221204116846.png"),alt:""}}),a._v(" "),t("p",[a._v("其中注意")]),a._v(" "),t("ul",[t("li",[a._v("IP地址填写规则跟上述一样，需要满足子网IP地址段规则")]),a._v(" "),t("li",[a._v("子网掩码和VM虚拟网络设置里的NAT模式中设置的子网掩码要一致")]),a._v(" "),t("li",[a._v("默认网关选择"),t("code",[a._v("第4项")]),a._v("设置的网关地址")])]),a._v(" "),t("p",[a._v("确定即可")])])]),a._v(" "),t("p",[a._v("安装好虚拟机以后，登录进入系统，需要做以下几件事")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("修改网卡配置，让系统可以连通宿主机和外网")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/sysconfig/network-scripts/ifcfg-ens33 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#最后这个是你的网卡名，根据个人情况更改")]),a._v("\n")])])]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221202312977.png"),alt:""}}),a._v(" "),t("p",[a._v("保留和新增如下项：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("static          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 网络地址分配方式为静态")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ens33                "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 网卡别名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEVICE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ens33              "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 网卡驱动名称")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes                "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 系统启动时是否激活网卡")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".201.101    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本机IP地址，勿与宿主机VMnet8的IP地址重复，要满足子网IP段规则")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".201.2     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 网关地址，虚拟网络设置中NAT模式下的值")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("255.255")]),a._v(".255.0     "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 子网掩码")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8              "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# DNS服务器")]),a._v("\n")])])]),t("p",[t("code",[a._v("Shift + ZZ")]),a._v("  保存并退出")]),a._v(" "),t("p",[a._v("重启网络设备，加载我们刚刚修改完成的参数")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" network restart\n")])])]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221204709603.png"),alt:""}}),a._v(" "),t("p",[a._v("然后分别ping一下网关、宿主机IP及外网")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".201.2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".3.5\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" www.baidu.com\n")])])]),t("p",[a._v("如果都成功ping通，则证明我们配置无误")])]),a._v(" "),t("li",[t("p",[a._v("修改防火墙设置，关闭防火墙")]),a._v(" "),t("p",[a._v("由于是虚拟机，且全程自主使用，所以直接关了虚拟机防火墙也没事")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看防火墙状态")]),a._v("\nsystemctl status firewalld.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关闭防火墙")]),a._v("\nsystemctl stop firewalld.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开机禁止防火墙服务器")]),a._v("\nsystemctl disable firewalld.service\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装wget工具")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("\n")])])])])]),a._v(" "),t("p",[a._v("至此，Win平台的虚拟机和CentOS7系统配置完毕，可正常进行编译工作")]),a._v(" "),t("h2",{attrs:{id:"_3-docker认知与部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-docker认知与部署"}},[a._v("#")]),a._v(" 3 Docker认知与部署")]),a._v(" "),t("h3",{attrs:{id:"_3-1-docker认知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-docker认知"}},[a._v("#")]),a._v(" 3.1 Docker认知")]),a._v(" "),t("p",[a._v("Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows操作系统的机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。")]),a._v(" "),t("p",[a._v("简而言之，可以类比于我们在学习过程中经常使用到的"),t("strong",[a._v("虚拟机技术")]),a._v("，但相较虚拟机，Docker"),t("strong",[a._v("极")]),a._v("为轻量化和简单化，通过容器化部署，可以快速隔离出一个有资源、有独立系统、有独立环境的小型完备的系统容器，我们可以通过简单的安装和使用简单的命令，来操控我们的Linux系统创建一个用于编译Doris环境的Docker容器。")]),a._v(" "),t("p",[t("em",[t("strong",[a._v("——————建议必读以下内容——————")])])]),a._v(" "),t("p",[a._v("那为什么不直接编译（在CentOS或者Redhat系统下），而要用Docker构建一个环境容器进行编译呢？")]),a._v(" "),t("p",[a._v("很简单，怕各种前置性的依赖环境，在用户本身的系统下编译可能遇到没有依赖、不存在安装源、无法安装等各种问题（这种环境引起的各种参数问题很耗时且无任何价值和意义），为了让用户在编译过程中减少不必要的麻烦，提高编译成功率，所以，Apache Doris官方提供了一个他们已经配置好了基本环境的Docker镜像，只需要通过一行命令从云端拉取下来，然后再用一行命令进入容器进行编译即可~")]),a._v(" "),t("p",[t("strong",[a._v("总结就是，用Docker编译，极大的简化了编译过程、极大的增强了编译可靠性、极大的节省了运维时间。")])]),a._v(" "),t("p",[a._v("接下来，开始部署Docker组件到服务器系统内。")]),a._v(" "),t("h3",{attrs:{id:"_3-2-docker部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-docker部署"}},[a._v("#")]),a._v(" 3.2 Docker部署")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Docker 要求 CentOS 系统的内核版本高于"),t("code",[a._v("3.10")]),a._v(" ，首先查看系统内核版本是否满足")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" -r\n")])])])]),a._v(" "),t("li",[t("p",[a._v("使用 "),t("code",[a._v("root")]),a._v(" 权限登录系统，确保 yum 包更新到最新")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum update\n")])])])]),a._v(" "),t("li",[t("p",[a._v("假如安装过旧版本，先卸载旧版本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("  docker-common docker-selinux docker-engine\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y yum-utils device-mapper-persistent-data lvm2\n")])])])]),a._v(" "),t("li",[t("p",[a._v("设置yum源（加速yum下载速度）")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看所有仓库中所有docker版本，并选择特定版本安装，一般可直接安装最新版")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum list docker-ce --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" -r\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装docker")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("安装最新稳定版本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce -y  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装的是最新稳定版本，因为repo中默认只开启stable仓库")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装指定版本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("FQPN"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -y\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例如：")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-20.10.11.ce -y\n")])])])])])]),a._v(" "),t("li",[t("p",[a._v("启动并加入开机启动")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动docker")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#加入开机自启动")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看Version，验证是否安装成功")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" version\n")])])]),t("p",[a._v("若出现Client和Server两部分内容，则证明安装成功")])])]),a._v(" "),t("h3",{attrs:{id:"_3-3-docker常用命令-可略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-docker常用命令-可略"}},[a._v("#")]),a._v(" 3.3 Docker常用命令（可略）")]),a._v(" "),t("p",[a._v("这一块可看可不看，看了你对于Docker基本使用就OK了，不看也不妨碍接下来编译")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("查看当前运行的Docker镜像")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker ps\n")])])])]),a._v(" "),t("li",[t("p",[a._v("进入某个Docker镜像")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像Name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /bin/bash\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看当前机器已拉取的镜像")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker images\n")])])])]),a._v(" "),t("li",[t("p",[a._v("运行指定的镜像创建容器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -p 本机映射端口:镜像映射端口 -d  --name 启动镜像名称 -e 镜像启动参数  镜像名称:镜像版本号\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"_4-apache-doris编译与部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-apache-doris编译与部署"}},[a._v("#")]),a._v(" 4 Apache Doris编译与部署")]),a._v(" "),t("blockquote",[t("p",[a._v("关于Apache Doris的相关介绍，就不再多做赘述，接下来直接步入正题——编译Doris源码，编译生成一个系统可以执行的应用程序。")])]),a._v(" "),t("h3",{attrs:{id:"_4-1-apache-doris编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-apache-doris编译"}},[a._v("#")]),a._v(" 4.1 Apache Doris编译")]),a._v(" "),t("h4",{attrs:{id:"_4-1-1-拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-拉取镜像"}},[a._v("#")]),a._v(" 4.1.1 拉取镜像")]),a._v(" "),t("p",[a._v("上一步，我们已经成功在 "),t("code",[a._v("CentOS 7.6")]),a._v(" 系统下部署了Docker组件，现在，我们需要从镜像源拉取Apache Doris官方制作的用于编译Doris源码的环境镜像。")]),a._v(" "),t("ul",[t("li",[a._v("拉取镜像")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull apache/incubator-doris:build-env-for-0.15.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#这是0.15.0版本")]),a._v("\n")])])]),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221190909871.png"),alt:""}}),a._v(" "),t("ul",[t("li",[a._v("拉取成功后，查看镜像列表，看是否已成功拉取")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker images\n")])])]),t("ul",[t("li",[a._v("如有下图圈红镜像，则证明镜像下载成功")])]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221190954677.png"),alt:""}}),a._v(" "),t("ul",[t("li",[a._v("如已成功拉取，运行run命令，进入Docker镜像")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#这句先别着急复制粘贴，看一下下面描述")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it apache/incubator-doris:build-env-for-0.15.0\n")])])]),t("p",[a._v("这样进入镜像以后，做的所有操作都是资源隔离的，资源会随着退出镜像而消失。")]),a._v(" "),t("p",[a._v("建议以挂载本地 Doris 源码目录的方式运行镜像，这样编译的产出二进制文件会存储在宿主机中，不会因为镜像退出而消失。")]),a._v(" "),t("p",[a._v("同时，建议同时将镜像中 maven 的 "),t("code",[a._v(".m2")]),a._v(" 目录挂载到宿主机目录，以防止每次启动镜像编译时，重复下载 maven 的依赖库。")]),a._v(" "),t("p",[a._v("以下命令需要根据自己需要定制化修改")]),a._v(" "),t("p",[a._v("在这里，宿主机下载源码的位置创建好以后，可以先到章节"),t("code",[a._v("4.1.3.1")]),a._v("所述，先下载源码至该文件夹下，然后再执行下述语句")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run --name apache-doris-0.15.0 -it -v /root/.m2:/root/.m2 -v 宿主机下载了源码的位置:容器内你想看到的源码位置 apache/incubator-doris:build-env-for-0.15.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例子")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 先到4.1.3.1章节 wget 下载源码至宿主机/opt/doris文件夹下，运行以下命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run --name apache-doris-0.15.0 -it -v /root/.m2:/root/.m2 -v /opt/doris:/opt/doris apache/incubator-doris:build-env-for-0.15.0\n")])])]),t("p",[a._v("执行以后出现如下命令头，则代表已成功进入镜像")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220181157554.png"),alt:""}}),a._v(" "),t("h4",{attrs:{id:"_4-1-2-指定jdk版本-按需执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-指定jdk版本-按需执行"}},[a._v("#")]),a._v(" 4.1.2 指定JDK版本（按需执行）")]),a._v(" "),t("p",[a._v("完成了镜像的拉取和进入，接下来这步挺重要，"),t("strong",[a._v("这步关乎到了你后续使用的JDK版本")]),a._v("。")]),a._v(" "),t("p",[a._v("在我们拉取下的官方编译环境镜像中，其实给了两套JDK供我们选择，一套是JDK8、一套JDK11，默认使用的是JDK11，所以我们按需进行修改。")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221120403558.png"),alt:""}}),a._v(" "),t("p",[a._v("假如你希望以及后续工作都使用JDK8的话，请依次执行以下代码修改JDK版本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 按需执行")]),a._v("\nalternatives --set java java-1.8.0-openjdk.x86_64\nalternatives --set javac java-1.8.0-openjdk.x86_64\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/lib/jvm/java-1.8.0\n")])])]),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221120445833.png"),alt:""}}),a._v(" "),t("p",[a._v("假如你希望以后使用的是JDK11，那要么你一开始就不要执行任何操作，因为默认就是JDK11，如果执行了以上切换JDK8命令，又想切回来，那就用如下命令切换到JDK11")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 按需执行")]),a._v("\nalternatives --set java java-11-openjdk.x86_64\nalternatives --set javac java-11-openjdk.x86_64\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/lib/jvm/java-11\n")])])]),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221120543215.png"),alt:""}}),a._v(" "),t("h4",{attrs:{id:"_4-1-3-编译doris"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-编译doris"}},[a._v("#")]),a._v(" 4.1.3 编译Doris")]),a._v(" "),t("h5",{attrs:{id:"_4-1-3-1-下载源码及解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-1-下载源码及解压"}},[a._v("#")]),a._v(" 4.1.3.1 下载源码及解压")]),a._v(" "),t("ul",[t("li",[a._v("使用wget命令下载")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载示例（以0.15.0版本为例）")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://downloads.apache.org/incubator/doris/0.15.0-incubating/apache-doris-0.15.0-incubating-src.tar.gz\n")])])]),t("ul",[t("li",[a._v("或者使用如下命令（github拉取，最好有梯子）")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/incubator-doris.git\n")])])]),t("p",[a._v("下载后得到源码tar压缩包，执行以下命令解压缩")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-doris-0.15.0-incubating-src.tar.gz \n")])])]),t("p",[a._v("解压缩后得到文件夹 "),t("code",[a._v("apache-doris-0.15.0-incubating-src")])]),a._v(" "),t("p",[a._v("执行如下命令进入目录")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" apache-doris-0.15.0-incubating-src\n")])])]),t("h5",{attrs:{id:"_4-1-3-2-编译源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-2-编译源码"}},[a._v("#")]),a._v(" 4.1.3.2 编译源码")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 复制粘贴此命令前，需要看下面文字")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" build.sh\n")])])]),t("p",[a._v("假如拉取下的Doris编译环境的Docker版本是"),t("code",[a._v("build-env-1.4.2")]),a._v("或者"),t("code",[a._v("build-env-for-0.15.0")]),a._v("（版本可通过"),t("code",[a._v("4.1.1")]),a._v("章节所述，在CentOS系统下使用"),t("code",[a._v("docker images")]),a._v("命令进行查看）")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220182911446.png"),alt:""}}),a._v(" "),t("p",[a._v("则第一次编译的时候要使用如下命令，这是因为1.4.2 版本镜像升级了 "),t("code",[a._v("thrift(0.9 -> 0.13)")]),a._v("，需要通过 --clean 命令强制使用新版本的 "),t("code",[a._v("thrift")]),a._v(" 生成代码文件，否则会出现不兼容的代码。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" build.sh --clean --be --fe --ui -j2\n")])])]),t("p",[a._v("接下来，可以去做其他事情了，教程测试机器是使用"),t("code",[a._v("2C 4G 8M")]),a._v("进行编译，耗时"),t("strong",[a._v("两小时")]),a._v("，期间如发现出现如下图，且运行速度超慢，属正常现象，该节点勿持续进行其他动作，静待完成即可，以免发生莫名错误。")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220162256154.png"),alt:""}}),a._v(" "),t("p",[a._v("出现以下报文，则证明编译成功")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220184120563.png"),alt:""}}),a._v(" "),t("h5",{attrs:{id:"_4-1-3-3-偶现错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-3-偶现错误"}},[a._v("#")]),a._v(" 4.1.3.3 偶现错误")]),a._v(" "),t("p",[a._v("编译最后出现了Failed，代表编译失败了，错误信息为")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220183806318.png"),alt:""}}),a._v(" "),t("p",[a._v("其中主要描述为："),t("code",[a._v("ninja: build stopped: subcommand failed.")])]),a._v(" "),t("p",[a._v("该错误原因大概率是因为本身系统出现一些问题，也有可能是由于编译时使用内存不够导致，可以尝试使用以下解决方案尝试解决")]),a._v(" "),t("p",[a._v("解决方案为在编译时增加参数，执行如下语句")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" build.sh --clean --be --fe --ui -j2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果非第一次编译，使用")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" build.sh -j2\n")])])]),t("p",[a._v("若依旧出现该错误，则需要重新重置服务器系统，重新从头进行一遍编译工作~")]),a._v(" "),t("h5",{attrs:{id:"_4-1-3-4-拷贝资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-4-拷贝资源"}},[a._v("#")]),a._v(" 4.1.3.4 拷贝资源")]),a._v(" "),t("p",[a._v("编译成功后，在"),t("code",[a._v("apache-doris-0.15.0-incubating-src")]),a._v("目录（如无其他操作，则为当前目录）下会生成"),t("code",[a._v("output")]),a._v("文件夹")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220184756120.png"),alt:""}}),a._v(" "),t("p",[a._v("执行查看目录命令，查看该文件夹内容")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("ll output\n")])])]),t("p",[a._v("目录下需要有如下文件夹才算编译成功："),t("code",[a._v("fe")]),a._v("、"),t("code",[a._v("be")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Linux云服务器：")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221201459225.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("Win平台")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221201650493.png"),alt:""}})]),a._v(" "),t("li",[t("p",[a._v("MacOS平台")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211221201751774.png"),alt:""}})])]),a._v(" "),t("p",[a._v("至此，编译步骤全部完成且成功~")]),a._v(" "),t("p",[a._v("我们需要将FE文件夹和BE文件夹拷贝至宿主机，这是我们的编译结晶，相当于是孵化器成功孵化出小鸡，我们要把小鸡从孵化器中拎出来去喂养和做后续操作~")]),a._v(" "),t("p",[t("strong",[a._v("Linux系统和Mac系统在宿主机下执行命令")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" 容器名:要拷贝的文件在容器里面的路径 要拷贝到宿主机的相应路径 \n")])])]),t("p",[a._v("需要注意，这里的容器名是"),t("strong",[a._v("在宿主机")]),a._v("执行"),t("code",[a._v("docker ps")]),a._v("命令后，得到的当前正在运行的Docker容器的名字")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/images/blogs/doris-tutorial-compilation/image-20211220192355582.png"),alt:""}}),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例如")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ed22cbfd325a:/~/apache-doris-0.15.0-incubating-src/output/ /opt/\n")])])]),t("p",[a._v("至此，Doris编译结束。")])])}),[],!1,null,null,null);s.default=r.exports}}]);
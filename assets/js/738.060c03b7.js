(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1187:function(a,t,s){"use strict";s.r(t);var n=s(56),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("Binlog Load提供了一种使Doris增量同步用户在Mysql数据库的对数据更新操作的CDC(Change Data Capture)功能，使用户更方便的完成Mysql数据的导入")]),a._v(" "),s("blockquote",[s("p",[a._v("注意：")]),a._v(" "),s("p",[a._v("该功能需要在0.15及以后的版本里使用")])]),a._v(" "),s("h2",{attrs:{id:"_1-安装配置-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装配置-mysql"}},[a._v("#")]),a._v(" 1. 安装配置 Mysql")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装Mysql")]),a._v(" "),s("p",[a._v("快速使用Docker安装配置Mysql，具体参照下面的连接")]),a._v(" "),s("p",[a._v("https://segmentfault.com/a/1190000021523570")]),a._v(" "),s("p",[a._v("如果是在物理机上安装可以参考下面的连接：")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1721575",target:"_blank",rel:"noopener noreferrer"}},[a._v("在 CentOS 7 中安装 MySQL 8 的教程详解"),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[a._v("开启Mysql binlog")]),a._v(" "),s("p",[a._v("进入 Docker 容器或者物理机上修改/etc/my.cnf 文件，在 [mysqld] 下面添加以下内容，")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("log_bin=mysql_bin\nbinlog-format=Row\nserver-id=1\n")])])]),s("p",[a._v("然后重启Mysql")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl restart mysqld\n")])])])]),a._v(" "),s("li",[s("p",[a._v("创建 Mysql 表")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),a._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("test_cdc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TINYINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("InnoDB")]),a._v("\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"_2-安装配置canal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装配置canal"}},[a._v("#")]),a._v(" 2. 安装配置Canal")]),a._v(" "),s("p",[a._v("下载canal-1.1.5: https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.deployer-1.1.5.tar.gz")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("解压Canal到指定目录：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf canal.deployer-1.1.5.tar.gz -C ./canal\n")])])])]),a._v(" "),s("li",[s("p",[a._v("在conf文件夹下新建目录并重命名，作为instance的根目录，目录名你可以自己命名便于识别即可")]),a._v(" "),s("p",[a._v("例如我这里的命名是和我的数据库库名一致：demo")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" conf/demo/instance.properties\n")])])]),s("p",[a._v("下面给出的是一个我的示例配置:")]),a._v(" "),s("p",[a._v("这里面的参数说明请参考Canal官方文档："),s("a",{attrs:{href:"https://github.com/alibaba/canal/wiki/QuickStart",target:"_blank",rel:"noopener noreferrer"}},[a._v("QuickStart "),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#################################################")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## mysql serverId , v1.0.26+ will autoGen")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.mysql.slaveId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("12115")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# enable gtid use true/false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.gtidon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("false")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# position info")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.master.address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("10.220.146.11:3306")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.master.journal.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.master.position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.master.timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.master.gtid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# rds oss binlog")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.rds.accesskey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.rds.secretkey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.rds.instanceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# table meta tsdb info")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.tsdb.enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.tsdb.url=jdbc:mysql://127.0.0.1:3306/canal_tsdb")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.tsdb.dbUsername=canal")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.tsdb.dbPassword=canal")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.standby.address =")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.standby.journal.name =")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.standby.position =")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.standby.timestamp =")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.standby.gtid=")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# username/password")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.dbUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("zhangfeng")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.dbPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("zhangfeng800729)(*Q")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.connectionCharset")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("UTF-8")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# enable druid Decrypt database password")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.enableDruid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.pwdPublicKey=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALK4BUxdDltRRE5/zXpVEVPUgunvscYFtEip3pmLlhrWpacX7y7GCMo2/JM6LeHmiiNdH1FWgGCpUfircSwlWKUCAwEAAQ==")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# table regex")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.filter.regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("demo\\\\..*")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# table black regex")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.filter.black.regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# table field filter(format: schema1.tableName1:field1/field2,schema2.tableName2:field1/field2)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.filter.field=test1.t_product:id/subject/keywords,test2.t_company:id/name/contact/ch")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# table field black filter(format: schema1.tableName1:field1/field2,schema2.tableName2:field1/field2)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.instance.filter.black.field=test1.t_product:subject/product_image,test2.t_company:id/name/contact/ch")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mq config")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.mq.topic=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# dynamic topic route by schema or table regex")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.mq.dynamicTopic=mytest1.user,mytest2\\\\..*,.*\\\\..*")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.mq.partition=0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hash partition config")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.mq.partitionsNum=3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#canal.mq.partitionHash=test.table:id^name,.*\\\\..*")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#################################################")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动Canal")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" bin/startup.sh\n")])])])])]),a._v(" "),s("blockquote",[s("p",[a._v("注意：canal instance user/passwd")]),a._v(" "),s("p",[a._v("1.1.5 版本，在canal.properties里加上这两个配置")]),a._v(" "),s("p",[a._v("canal.user = canal\ncanal.passwd = E3619321C1A937C46A0D8BD1DAC39F93B27D4458")]),a._v(" "),s("p",[a._v('默认密码为canal/canal，canal.passwd的密码值可以通过select password("xxx") 来获取')])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[a._v("验证是否启动成功")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -200f logs/demo/demo.log\n")])])]),s("img",{attrs:{src:a.$withBase("/images/blogs/doris-binlog-load/image-20211110145044815.png"),alt:""}})])]),a._v(" "),s("h2",{attrs:{id:"_3-开始同步数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-开始同步数据"}},[a._v("#")]),a._v(" 3.开始同步数据")]),a._v(" "),s("h3",{attrs:{id:"_3-1-创建doris目标表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建doris目标表"}},[a._v("#")]),a._v(" 3.1 创建Doris目标表")]),a._v(" "),s("p",[a._v("用户需要先在Doris端创建好与Mysql端对应的目标表")]),a._v(" "),s("p",[a._v("Binlog Load只能支持Unique类型的目标表，且必须激活目标表的Batch Delete功能。")]),a._v(" "),s("p",[a._v("开启Batch Delete的方法可以参考"),s("code",[a._v("help alter table")]),a._v("中的批量删除功能。")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TINYINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("OLAP\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UNIQUE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COMMENT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OLAP"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DISTRIBUTED")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("HASH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" BUCKETS "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"replication_allocation"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tag.location.default: 3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"in_memory"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"storage_format"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"V2"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- enable batch delete")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" test_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("doris_mysql_binlog_demo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENABLE")]),a._v(" FEATURE "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"BATCH_DELETE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-1-创建同步作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建同步作业"}},[a._v("#")]),a._v(" 3.1 创建同步作业")]),a._v(" "),s("h4",{attrs:{id:"_3-1-1-create-sync-job-语法说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-create-sync-job-语法说明"}},[a._v("#")]),a._v(" 3.1.1 Create Sync Job 语法说明")]),a._v(" "),s("p",[a._v("Name: 'CREATE SYNC JOB'\nDescription:")]),a._v(" "),s("p",[a._v("数据同步(Sync Job)功能，支持用户提交一个常驻的数据同步作业，通过从指定的远端地址读取Binlog日志，增量同步用户在Mysql数据库的对数据更新操作的CDC(Change Data Capture)功能。")]),a._v(" "),s("p",[a._v("目前数据同步作业只支持对接Canal，从Canal Server上获取解析好的Binlog数据，导入到Doris内。")]),a._v(" "),s("p",[a._v("用户可通过 "),s("code",[a._v("SHOW SYNC JOB")]),a._v(" 查看数据同步作业状态。")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE SYNC [db.]job_name\n (\n \tchannel_desc, \n \tchannel_desc\n \t...\n )\nbinlog_desc\n")])])]),s("ol",[s("li",[s("p",[s("code",[a._v("job_name")])]),a._v(" "),s("p",[a._v("同步作业名称，是作业在当前数据库内的唯一标识，相同"),s("code",[a._v("job_name")]),a._v("的作业只能有一个在运行。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("channel_desc")])]),a._v(" "),s("p",[a._v("作业下的数据通道，用来描述mysql源表到doris目标表的映射关系。")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("FROM mysql_db.src_tbl INTO des_tbl\n[partitions]\n[columns_mapping]\n")])])]),s("ol",[s("li",[s("p",[s("code",[a._v("mysql_db.src_tbl")])]),a._v(" "),s("p",[a._v("指定mysql端的数据库和源表。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("des_tbl")])]),a._v(" "),s("p",[a._v("指定doris端的目标表，只支持Unique表，且需开启表的batch delete功能(开启方法请看help alter table的'批量删除功能')。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("partitions")])]),a._v(" "),s("p",[a._v("指定导入目的表的哪些 partition 中。如果不指定，则会自动导入到对应的 partition 中。")]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("PARTITION(p1, p2, p3)\n")])])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("column_mapping")])]),a._v(" "),s("p",[a._v("指定mysql源表和doris目标表的列之间的映射关系。如果不指定，FE会默认源表和目标表的列按顺序一一对应。")]),a._v(" "),s("p",[a._v("不支持 col_name = expr 的形式表示列。")]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("假设目标表列为(k1, k2, v1)，\n \n改变列k1和k2的顺序\nCOLUMNS(k2, k1, v1)\n \n忽略源数据的第四列\nCOLUMNS(k2, k1, v1, dummy_column)\n")])])])])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("binlog_desc")])]),a._v(" "),s("p",[a._v("用来描述远端数据源，目前仅支持canal一种。")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('FROM BINLOG\n(\n    "key1" = "value1", \n    "key2" = "value2"\n)\n')])])]),s("ol",[s("li",[s("p",[a._v("Canal 数据源对应的属性，以"),s("code",[a._v("canal.")]),a._v("为前缀")]),a._v(" "),s("ol",[s("li",[a._v("canal.server.ip: canal server的地址")]),a._v(" "),s("li",[a._v("canal.server.port: canal server的端口")]),a._v(" "),s("li",[a._v("canal.destination: instance的标识")]),a._v(" "),s("li",[a._v("canal.batchSize: 获取的batch大小的最大值，默认8192")]),a._v(" "),s("li",[a._v("canal.username: instance的用户名")]),a._v(" "),s("li",[a._v("canal.password: instance的密码")]),a._v(" "),s("li",[a._v("canal.debug: 可选，设置为true时，会将batch和每一行数据的详细信息都打印出来\nExamples:")])])])])]),a._v(" "),s("li",[s("p",[a._v("简单为 "),s("code",[a._v("test_db")]),a._v(" 的 "),s("code",[a._v("test_tbl")]),a._v(" 创建一个名为 "),s("code",[a._v("job1")]),a._v(" 的数据同步作业，连接本地的Canal服务器，对应Mysql源表 "),s("code",[a._v("mysql_db1.tbl1")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(' CREATE SYNC `test_db`.`job1`\n (\n \tFROM `mysql_db1`.`tbl1` INTO `test_tbl `\n )\n FROM BINLOG \n (\n \t"type" = "canal",\n \t"canal.server.ip" = "127.0.0.1",\n \t"canal.server.port" = "11111",\n \t"canal.destination" = "example",\n \t"canal.username" = "",\n \t"canal.password" = ""\n );\n')])])])]),a._v(" "),s("li",[s("p",[a._v("为 "),s("code",[a._v("test_db")]),a._v(" 的多张表创建一个名为 "),s("code",[a._v("job1")]),a._v(" 的数据同步作业，一一对应多张Mysql源表，并显式的指定列映射。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(' CREATE SYNC `test_db`.`job1` \n (\n \tFROM `mysql_db`.`t1` INTO `test1` COLUMNS(k1, k2, v1) PARTITIONS (p1, p2),\n \tFROM `mysql_db`.`t2` INTO `test2` COLUMNS(k3, k4, v2) PARTITION p1\n ) \n FROM BINLOG \n (\n \t"type" = "canal", \n \t"canal.server.ip" = "xx.xxx.xxx.xx", \n \t"canal.server.port" = "12111", \n \t"canal.destination" = "example",  \n \t"canal.username" = "username", \n \t"canal.password" = "password"\n );\n')])])])])]),a._v(" "),s("h4",{attrs:{id:"_3-1-2-开始同步mysql表里数据到doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-开始同步mysql表里数据到doris"}},[a._v("#")]),a._v(" 3.1.2 开始同步mysql表里数据到Doris")]),a._v(" "),s("blockquote",[s("p",[a._v("注意：")]),a._v(" "),s("p",[a._v("创建同步任务之前，首先要在fe.conf里配置enable_create_sync_job=true，这个默认是false不启用，否则就不能创建同步任务")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('CREATE SYNC test_2.doris_mysql_binlog_demo_job \n(\n\tFROM demo.test_cdc INTO doris_mysql_binlog_demo\n) \nFROM BINLOG \n(\n\t"type" = "canal", \n\t"canal.server.ip" = "10.220.146.10", \n\t"canal.server.port" = "11111", \n\t"canal.destination" = "demo",  \n\t"canal.username" = "canal", \n\t"canal.password" = "canal"\n);\n')])])]),s("h4",{attrs:{id:"_3-1-3-查看同步任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-查看同步任务"}},[a._v("#")]),a._v(" 3.1.3 查看同步任务")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" SYNC JOB "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" test_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("img",{attrs:{src:a.$withBase("/images/blogs/doris-binlog-load/image-20211110160106602.png"),alt:""}}),a._v(" "),s("h4",{attrs:{id:"_3-1-4-查看表里的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-查看表里的数据"}},[a._v("#")]),a._v(" 3.1.4 查看表里的数据")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("img",{attrs:{src:a.$withBase("/images/blogs/doris-binlog-load/image-20211110160331479.png"),alt:""}}),a._v(" "),s("h4",{attrs:{id:"_3-1-5-删除数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-删除数据"}},[a._v("#")]),a._v(" 3.1.5 删除数据")]),a._v(" "),s("p",[a._v("我们在Mysql 数据表里删除数据，然后看Doris表里的变化")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("delete from test_cdc where id in (12,13)\n")])])]),s("p",[a._v("我们在去看Doris表里，id是12,13这两条数据已经被删除")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/blogs/doris-binlog-load/image-20211110160710709.png"),alt:""}}),a._v(" "),s("h4",{attrs:{id:"_3-1-6-多表同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-多表同步"}},[a._v("#")]),a._v(" 3.1.6 多表同步")]),a._v(" "),s("p",[a._v("多表同步只需要像下面这样写法就可以了")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" SYNC test_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("doris_mysql_binlog_demo_job \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("test_cdc "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("test_cdc_1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("test_cdc_2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("test_cdc_3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" doris_mysql_binlog_demo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
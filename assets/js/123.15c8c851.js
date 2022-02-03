(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1699:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Binlog Load provides a CDC (Change Data Capture) function that enables Doris to incrementally synchronize the user's data update operation in the Mysql database, making it more convenient for users to complete the import of Mysql data.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note:")]),t._v(" "),s("p",[t._v("This function needs to be used in 0.15 and later versions")])]),t._v(" "),s("h2",{attrs:{id:"_1-install-and-configure-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-and-configure-mysql"}},[t._v("#")]),t._v(" 1. Install and configure Mysql")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install Mysql")]),t._v(" "),s("p",[t._v("Quickly use Docker to install and configure Mysql, refer to the following link for details")]),t._v(" "),s("p",[t._v("https://segmentfault.com/a/1190000021523570")]),t._v(" "),s("p",[t._v("If it is installed on a physical machine, please refer to the following connection:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1721575",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 CentOS 7 中安装 MySQL 8 的教程详解"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("enable Mysql binlog")]),t._v(" "),s("p",[t._v("Enter the Docker container or modify the "),s("code",[t._v("/etc/my.cnf")]),t._v(" file on the physical machine, and add the following content under [mysqld],")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("log_bin=mysql_bin\nbinlog-format=Row\nserver-id=1\n")])])]),s("p",[t._v("Then restart Mysql")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart mysqld\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Create Mysql table")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test_cdc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TINYINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-install-and-configure-canal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-and-configure-canal"}},[t._v("#")]),t._v(" 2. Install and configure Canal")]),t._v(" "),s("p",[t._v("Download canal-1.1.5: https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.deployer-1.1.5.tar.gz")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Unzip Canal to the specified directory:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf canal.deployer-1.1.5.tar.gz -C ./canal\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Create a new directory in the conf folder and rename it as the root directory of the instance. You can name the directory for easy identification.")]),t._v(" "),s("p",[t._v("For example, my name here is consistent with the name of my database library: demo")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" conf/demo/instance.properties\n")])])]),s("p",[t._v("Given below is a sample configuration of mine:")]),t._v(" "),s("p",[t._v("For the parameter description, please refer to Canal official documentation："),s("a",{attrs:{href:"https://github.com/alibaba/canal/wiki/QuickStart",target:"_blank",rel:"noopener noreferrer"}},[t._v("QuickStart "),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#################################################")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## mysql serverId , v1.0.26+ will autoGen")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.mysql.slaveId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("12115")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable gtid use true/false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.gtidon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# position info")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.master.address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10.220.146.11:3306")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.master.journal.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.master.position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.master.timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.master.gtid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rds oss binlog")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.rds.accesskey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.rds.secretkey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.rds.instanceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# table meta tsdb info")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.tsdb.enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.tsdb.url=jdbc:mysql://127.0.0.1:3306/canal_tsdb")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.tsdb.dbUsername=canal")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.tsdb.dbPassword=canal")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.standby.address =")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.standby.journal.name =")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.standby.position =")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.standby.timestamp =")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.standby.gtid=")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# username/password")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.dbUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("zhangfeng")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.dbPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("zhangfeng800729)(*Q")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.connectionCharset")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("UTF-8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable druid Decrypt database password")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.enableDruid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.pwdPublicKey=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALK4BUxdDltRRE5/zXpVEVPUgunvscYFtEip3pmLlhrWpacX7y7GCMo2/JM6LeHmiiNdH1FWgGCpUfircSwlWKUCAwEAAQ==")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# table regex")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.filter.regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("demo\\\\..*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# table black regex")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("canal.instance.filter.black.regex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# table field filter(format: schema1.tableName1:field1/field2,schema2.tableName2:field1/field2)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.filter.field=test1.t_product:id/subject/keywords,test2.t_company:id/name/contact/ch")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# table field black filter(format: schema1.tableName1:field1/field2,schema2.tableName2:field1/field2)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.instance.filter.black.field=test1.t_product:subject/product_image,test2.t_company:id/name/contact/ch")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mq config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.mq.topic=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dynamic topic route by schema or table regex")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.mq.dynamicTopic=mytest1.user,mytest2\\\\..*,.*\\\\..*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.mq.partition=0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hash partition config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.mq.partitionsNum=3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#canal.mq.partitionHash=test.table:id^name,.*\\\\..*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#################################################")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start Canal")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" bin/startup.sh\n")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Note: canal instance user/passwd")]),t._v(" "),s("p",[t._v("Version 1.1.5, add these two configurations in canal.properties")]),t._v(" "),s("p",[t._v("canal.user = canal\ncanal.passwd = E3619321C1A937C46A0D8BD1DAC39F93B27D4458")]),t._v(" "),s("p",[t._v('The default password is canal/canal, and the password value of canal.passwd can be obtained by selecting password("xxx")')])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("Verify whether the startup is successful")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -200f logs/demo/demo.log\n")])])]),s("img",{attrs:{src:t.$withBase("/images/blogs/doris-binlog-load/image-20211110145044815.png"),alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"_3-start-synchronizing-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-synchronizing-data"}},[t._v("#")]),t._v(" 3.Start synchronizing data")]),t._v(" "),s("h3",{attrs:{id:"_3-1-create-doris-target-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-create-doris-target-table"}},[t._v("#")]),t._v(" 3.1 Create Doris target table")]),t._v(" "),s("p",[t._v("The user needs to first create the target table corresponding to the Mysql side on the Doris side")]),t._v(" "),s("p",[t._v("Binlog Load can only support unique target tables, and the Batch Delete function of the target table must be activated.")]),t._v(" "),s("p",[t._v("For the method of enabling Batch Delete, please refer to the batch delete function in "),s("code",[t._v("help alter table")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TINYINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OLAP\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OLAP"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTRIBUTED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("sex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" BUCKETS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replication_allocation"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location.default: 3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in_memory"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"storage_format"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"V2"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- enable batch delete")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" test_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doris_mysql_binlog_demo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENABLE")]),t._v(" FEATURE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BATCH_DELETE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-1-create-sync-job"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-create-sync-job"}},[t._v("#")]),t._v(" 3.1 Create sync job")]),t._v(" "),s("h4",{attrs:{id:"_3-1-1-create-sync-job-syntax-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-create-sync-job-syntax-description"}},[t._v("#")]),t._v(" 3.1.1 Create Sync Job syntax description")]),t._v(" "),s("p",[t._v("The data synchronization (Sync Job) function supports the user to submit a resident data synchronization job. By reading the Binlog log from the specified remote address, incrementally synchronize the user's CDC (Change Data Capture) of the data update operation in the Mysql database Function.")]),t._v(" "),s("p",[t._v("Currently, the data synchronization job only supports Canal docking. The parsed Binlog data is obtained from Canal Server and imported into Doris.")]),t._v(" "),s("p",[t._v("Users can check the status of data synchronization job through "),s("code",[t._v("SHOW SYNC JOB")]),t._v(".")]),t._v(" "),s("p",[t._v("grammar:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("CREATE SYNC [db.]job_name\n (\n \tchannel_desc, \n \tchannel_desc\n \t...\n )\nbinlog_desc\n")])])]),s("ol",[s("li",[s("p",[s("code",[t._v("job_name")])]),t._v(" "),s("p",[t._v("The name of the synchronization job is the unique identifier of the job in the current database. Only one job with the same "),s("code",[t._v("job_name")]),t._v(" can be running.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("channel_desc")])]),t._v(" "),s("p",[t._v("The data channel under the job is used to describe the mapping relationship between the mysql source table and the doris target table.")]),t._v(" "),s("p",[t._v("grammar:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("FROM mysql_db.src_tbl INTO des_tbl\n[partitions]\n[columns_mapping]\n")])])]),s("ol",[s("li",[s("p",[s("code",[t._v("mysql_db.src_tbl")])]),t._v(" "),s("p",[t._v("Specify the database and source table on the mysql side.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("des_tbl")])]),t._v(" "),s("p",[t._v('Specify the target table on the doris side. Only unique tables are supported, and the batch delete function of the table needs to be enabled (for the opening method, please refer to the "batch delete function" of help alter table).')])]),t._v(" "),s("li",[s("p",[s("code",[t._v("partitions")])]),t._v(" "),s("p",[t._v("Specify which partitions of the destination table to import. If not specified, it will be automatically imported into the corresponding partition.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PARTITION(p1, p2, p3)\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("column_mapping")])]),t._v(" "),s("p",[t._v("Specify the mapping relationship between the columns of the mysql source table and the doris target table. If not specified, FE will default the source table and target table columns in a one-to-one correspondence.")]),t._v(" "),s("p",[t._v("The form of col_name = expr is not supported to represent columns.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Suppose the target table is listed as (k1, k2, v1),\n \nChange the order of columns k1 and k2\nCOLUMNS(k2, k1, v1)\n \nIgnore the fourth column of the source data\nCOLUMNS(k2, k1, v1, dummy_column)\n")])])])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("binlog_desc")])]),t._v(" "),s("p",[t._v("Used to describe the remote data source, currently only supports one type of canal.")]),t._v(" "),s("p",[t._v("grammar:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('FROM BINLOG\n(\n    "key1" = "value1", \n    "key2" = "value2"\n)\n')])])]),s("ol",[s("li",[s("p",[t._v("The attribute corresponding to the Canal data source, prefixed with "),s("code",[t._v("canal.")])])]),t._v(" "),s("li",[s("p",[t._v("canal.server.ip: the address of the canal server")])]),t._v(" "),s("li",[s("p",[t._v("canal.server.port: canal server port")])]),t._v(" "),s("li",[s("p",[t._v("canal.destination: the identity of the instance")])]),t._v(" "),s("li",[s("p",[t._v("canal.batchSize: the maximum value of the batch size obtained, the default is 8192")])]),t._v(" "),s("li",[s("p",[t._v("canal.username: instance username")])]),t._v(" "),s("li",[s("p",[t._v("canal.password: instance password")])]),t._v(" "),s("li",[s("p",[t._v("canal.debug: Optional, when set to true, the batch and detailed information of each row of data will be printed out\nExamples:")])])])]),t._v(" "),s("li",[s("p",[t._v("Simply create a data synchronization job named "),s("code",[t._v("job1")]),t._v(" for "),s("code",[t._v("test_tbl")]),t._v(" of "),s("code",[t._v("test_db")]),t._v(", connect to the local Canal server, and correspond to the Mysql source table "),s("code",[t._v("mysql_db1.tbl1")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(' CREATE SYNC `test_db`.`job1`\n (\n \tFROM `mysql_db1`.`tbl1` INTO `test_tbl `\n )\n FROM BINLOG \n (\n \t"type" = "canal",\n \t"canal.server.ip" = "127.0.0.1",\n \t"canal.server.port" = "11111",\n \t"canal.destination" = "example",\n \t"canal.username" = "",\n \t"canal.password" = ""\n );\n')])])])]),t._v(" "),s("li",[s("p",[t._v("Create a data synchronization job named "),s("code",[t._v("job1")]),t._v(" for multiple tables of "),s("code",[t._v("test_db")]),t._v(", corresponding to multiple Mysql source tables one by one, and explicitly specify the column mapping.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(' CREATE SYNC `test_db`.`job1` \n (\n \tFROM `mysql_db`.`t1` INTO `test1` COLUMNS(k1, k2, v1) PARTITIONS (p1, p2),\n \tFROM `mysql_db`.`t2` INTO `test2` COLUMNS(k3, k4, v2) PARTITION p1\n ) \n FROM BINLOG \n (\n \t"type" = "canal", \n \t"canal.server.ip" = "xx.xxx.xxx.xx", \n \t"canal.server.port" = "12111", \n \t"canal.destination" = "example",  \n \t"canal.username" = "username", \n \t"canal.password" = "password"\n );\n')])])])])]),t._v(" "),s("h4",{attrs:{id:"_3-1-2-start-to-synchronize-data-in-mysql-table-to-doris"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-start-to-synchronize-data-in-mysql-table-to-doris"}},[t._v("#")]),t._v(" 3.1.2 Start to synchronize data in mysql table to Doris")]),t._v(" "),s("blockquote",[s("p",[t._v("Notice:")]),t._v(" "),s("p",[t._v("Before creating a synchronization task, first configure enable_create_sync_job=true in fe.conf, this is false by default and not enabled, otherwise the synchronization task cannot be created")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('CREATE SYNC test_2.doris_mysql_binlog_demo_job \n(\n\tFROM demo.test_cdc INTO doris_mysql_binlog_demo\n) \nFROM BINLOG \n(\n\t"type" = "canal", \n\t"canal.server.ip" = "10.220.146.10", \n\t"canal.server.port" = "11111", \n\t"canal.destination" = "demo",  \n\t"canal.username" = "canal", \n\t"canal.password" = "canal"\n);\n')])])]),s("h4",{attrs:{id:"_3-1-3-view-synchronization-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-view-synchronization-tasks"}},[t._v("#")]),t._v(" 3.1.3 View synchronization tasks")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" SYNC JOB "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/blogs/doris-binlog-load/image-20211110160106602.png"),alt:""}}),t._v(" "),s("h4",{attrs:{id:"_3-1-4-view-the-data-in-the-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-view-the-data-in-the-table"}},[t._v("#")]),t._v(" 3.1.4 View the data in the table")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/blogs/doris-binlog-load/image-20211110160331479.png"),alt:""}}),t._v(" "),s("h4",{attrs:{id:"_3-1-5-delete-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-delete-data"}},[t._v("#")]),t._v(" 3.1.5 Delete Data")]),t._v(" "),s("p",[t._v("We delete the data in the Mysql data table, and then look at the changes in the Doris table")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("delete from test_cdc where id in (12,13)\n")])])]),s("p",[t._v("We are looking at the Doris table, the two data with id 12 and 13 have been deleted")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/blogs/doris-binlog-load/image-20211110160710709.png"),alt:""}}),t._v(" "),s("h4",{attrs:{id:"_3-1-6-multi-table-synchronization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-multi-table-synchronization"}},[t._v("#")]),t._v(" 3.1.6 Multi-table synchronization")]),t._v(" "),s("p",[t._v("Multi-table synchronization only needs to be written like the following")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" SYNC test_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doris_mysql_binlog_demo_job \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_cdc "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_cdc_1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_cdc_2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" doris_mysql_binlog_demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test_cdc_3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" doris_mysql_binlog_demo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1098],{1552:function(a,e,r){"use strict";r.r(e);var t=r(56),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"set-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set-property"}},[a._v("#")]),a._v(" SET PROPERTY")]),a._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),r("p",[a._v("Syntax:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[a._v("SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n\n设置用户的属性，包括分配给用户的资源、导入cluster等。这里设置的用户属性，是针对 user 的，而不是 user_identity。即假设通过 CREATE USER 语句创建了两个用户 'jack'@'%' 和 'jack'@'192.%'，则使用 SET PROPERTY 语句，只能针对 jack 这个用户，而不是 'jack'@'%' 或 'jack'@'192.%'\n\n导入 cluster 仅适用于百度内部用户。\n")])])]),r("p",[a._v("key:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[a._v("超级用户权限:\n    max_user_connections: 最大连接数。\n    max_query_instances: 用户同一时间点执行查询可以使用的instance个数。\n    sql_block_rules: 设置 sql block rules。设置后，该用户发送的查询如果匹配规则，则会被拒绝。\n    cpu_resource_limit: 限制查询的cpu资源。详见会话变量 `cpu_resource_limit` 的介绍。\n    resource.cpu_share: cpu资源分配。（已废弃）\n    load_cluster.{cluster_name}.priority: 为指定的cluster分配优先级，可以为 HIGH 或 NORMAL\n    resource_tags：指定用户的资源标签权限。\n\n普通用户权限：\n    quota.normal: normal级别的资源分配。\n    quota.high: high级别的资源分配。\n    quota.low: low级别的资源分配。\n\n    load_cluster.{cluster_name}.hadoop_palo_path: palo使用的hadoop目录，需要存放etl程序及etl生成的中间数据供palo导入。导入完成后会自动清理中间数据，etl程序自动保留下次使用。    \n    load_cluster.{cluster_name}.hadoop_configs: hadoop的配置，其中fs.default.name、mapred.job.tracker、hadoop.job.ugi必须填写。\n    load_cluster.{cluster_name}.hadoop_http_port: hadoop hdfs name node http端口。其中 hdfs 默认为8070，afs 默认 8010。\n    default_load_cluster: 默认的导入cluster。\n")])])]),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[a._v("1. 修改用户 jack 最大连接数为1000\nSET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n\n2. 修改用户 jack 的cpu_share为1000\nSET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n\n3. 修改 jack 用户的normal组的权重\nSET PROPERTY FOR 'jack' 'quota.normal' = '400';\n\n4. 为用户 jack 添加导入cluster \nSET PROPERTY FOR 'jack' \n    'load_cluster.{cluster_name}.hadoop_palo_path' = '/user/palo/palo_path', \n    'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';\n\n5. 删除用户 jack 下的导入cluster。\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';\n\n6. 修改用户 jack 默认的导入cluster\nSET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';\n\n7. 修改用户 jack 的集群优先级为 HIGH\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';\n\n8. 修改用户jack的查询可用instance个数为3000\nSET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n\n9. 修改用户jack的sql block rule\nSET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n\n10. 修改用户jack的 cpu 使用限制\nSET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n\n11. 修改用户的资源标签权限\nSET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n")])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[a._v("SET, PROPERTY\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
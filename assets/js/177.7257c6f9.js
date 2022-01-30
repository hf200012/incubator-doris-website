(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{630:function(e,t,o){"use strict";o.r(t);var a=o(56),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),o("p",[e._v("This document is mainly used to record common problems in the use of Doris. Will be updated from time to time.")]),e._v(" "),o("h3",{attrs:{id:"q1-use-stream-load-to-access-the-public-network-address-of-fe-to-import-data-and-it-is-redirected-to-the-internal-network-ip"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q1-use-stream-load-to-access-the-public-network-address-of-fe-to-import-data-and-it-is-redirected-to-the-internal-network-ip"}},[e._v("#")]),e._v(" Q1. Use Stream Load to access the public network address of FE to import data, and it is redirected to the internal network IP?")]),e._v(" "),o("p",[e._v("When the connection target of stream load is the http port of FE, FE will only randomly select a BE node for http 307 redirect operation, so the user's request is actually sent to a BE designated by FE. The redirect returns the ip of BE, which is the intranet IP. So if you send the request through the public IP of FE, it is very likely that you will not be able to connect because you are redirected to the intranet address.")]),e._v(" "),o("p",[e._v("The usual approach is to ensure that you can access the intranet IP address, or assume a load balance for all BE upper layers, and then directly send the stream load request to the load balancer, and the load balancer transparently transmits the request to the BE node .")]),e._v(" "),o("h3",{attrs:{id:"q2-when-the-be-node-is-offline-through-decommission-why-is-there-always-some-tablet-remaining"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q2-when-the-be-node-is-offline-through-decommission-why-is-there-always-some-tablet-remaining"}},[e._v("#")]),e._v(" Q2. When the BE node is offline through DECOMMISSION, why is there always some tablet remaining?")]),e._v(" "),o("p",[e._v("During the offline process, check the tabletNum of the offline node through show backends, and you will observe that the number of tabletNum is decreasing, indicating that the data fragments are migrating from this node. When the number is reduced to 0, the system will automatically delete this node. But in some cases, tabletNum does not change after it drops to a certain value. This can usually have the following two reasons:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("These tablets belong to the table, partition, or materialized view that has just been deleted. The objects that have just been deleted will remain in the recycle bin. The offline logic will not process these fragments. You can modify the resident time of the object in the recycle bin by modifying the configuration parameter catalog_trash_expire_second of FE. When the object is deleted from the recycle bin, these tablets will be processed.")])]),e._v(" "),o("li",[o("p",[e._v('There is a problem with the migration task of these tablets. At this time, you need to check the error of the specific task through show proc "/cluster_balance".')])])]),e._v(" "),o("p",[e._v('For the above situation, you can first check whether the cluster still has unhealthy shards through show proc "/statistic". If it is 0, you can delete the BE directly through the drop backend statement. Otherwise, you need to check the copy status of unhealthy shards.')]),e._v(" "),o("h3",{attrs:{id:"q3-how-should-priorty-network-be-set"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q3-how-should-priorty-network-be-set"}},[e._v("#")]),e._v(" Q3. How should priorty_network be set?")]),e._v(" "),o("p",[e._v("Priorty_network is a configuration parameter for both FE and BE. This parameter is mainly used to help the system choose the correct network card IP as its own IP. It is recommended to set this parameter explicitly under any circumstances to prevent the problem of incorrect IP selection caused by the addition of a new network card to the subsequent machine.")]),e._v(" "),o("p",[e._v("The value of priorty_network is expressed in CIDR format. It is divided into two parts, the first part is a dotted decimal IP address, and the second part is a prefix length. For example, 10.168.1.0/8 will match all 10.xx.xx.xx IP addresses, and 10.168.1.0/16 will match all 10.168.xx.xx IP addresses.")]),e._v(" "),o("p",[e._v("The reason for using the CIDR format instead of directly specifying a specific IP is to ensure that all nodes can use uniform configuration values. For example, there are two nodes: 10.168.10.1 and 10.168.10.2, then we can use 10.168.10.0/24 as the value of priorty_network.")]),e._v(" "),o("h3",{attrs:{id:"q4-what-are-fe-s-master-follower-and-observer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q4-what-are-fe-s-master-follower-and-observer"}},[e._v("#")]),e._v(" Q4. What are FE's Master, Follower and Observer?")]),e._v(" "),o("p",[e._v("First of all, make it clear that FE has only two roles: Follower and Observer. The Master is just an FE selected from a group of Follower nodes. Master can be regarded as a special kind of Follower. So when we were asked how many FEs in a cluster and what roles are they, the correct answer should be the number of all FE nodes, the number of Follower roles, and the number of Observer roles.")]),e._v(" "),o("p",[e._v("All FE nodes in the Follower role will form a selectable group, similar to the group concept in the Poxas consensus protocol. A Follower will be elected as the Master in the group. When the Master hangs up, the new Follower will be automatically selected as the Master. Observer will not participate in the election, so Observer will not be called Master.")]),e._v(" "),o("p",[e._v("A metadata log needs to be successfully written in most Follower nodes to be considered successful. For example, if 3 FEs are written, 2 writes are successful. This is why the number of Follower roles needs to be an odd number.")]),e._v(" "),o("p",[e._v("The role of Observer is the same as the meaning of this word. It only acts as an observer to synchronize the metadata logs that have been successfully written, and provides metadata reading services. He will not participate in the logic of majority writing.")]),e._v(" "),o("p",[e._v("Normally, you can deploy 1 Follower + 2 Observer or 3 Follower + N Observer. The former is simple to operate and maintain, and there will be almost no consensus agreement between Followers to cause this complicated error situation (most of Baidu's internal clusters use this method). The latter can ensure the high availability of metadata writing. If it is a high-concurrency query scenario, you can appropriately increase the Observer.")]),e._v(" "),o("h3",{attrs:{id:"q5-does-doris-support-modifying-column-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q5-does-doris-support-modifying-column-names"}},[e._v("#")]),e._v(" Q5. Does Doris support modifying column names?")]),e._v(" "),o("p",[e._v("Does not support modifying column names.")]),e._v(" "),o("p",[e._v("Doris supports modifying database names, table names, partition names, materialized view (Rollup) names, and column types, comments, default values, and so on. But unfortunately, currently does not support modifying the column name.")]),e._v(" "),o("p",[e._v("For some historical reasons, the column names are currently written directly into the data file. When Doris searches, he also finds the corresponding column by the class name. Therefore, modifying column names is not only a simple metadata modification, but also involves data rewriting, which is a very heavy operation.")]),e._v(" "),o("p",[e._v("We do not rule out the subsequent use of some compatible means to support lightweight column name modification operations.")]),e._v(" "),o("h3",{attrs:{id:"q6-does-the-table-of-the-unique-key-model-support-the-creation-of-materialized-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q6-does-the-table-of-the-unique-key-model-support-the-creation-of-materialized-views"}},[e._v("#")]),e._v(" Q6. Does the table of the Unique Key model support the creation of materialized views?")]),e._v(" "),o("p",[e._v("not support.")]),e._v(" "),o("p",[e._v("The table of the Unique Key model is a business-friendly table. Because of its unique function of de-duplication according to the primary key, it can easily synchronize business databases with frequent data changes. Therefore, many users will first consider using the Unique Key model when accessing data to Doris.")]),e._v(" "),o("p",[e._v('Unfortunately, the table of the Unique Key model cannot create a materialized view. The reason is that the nature of the materialized view is to "pre-calculate" the data through pre-calculation, so that the calculated data is directly returned during the query to speed up the query. In the materialized view, the "pre-calculated" data is usually some aggregated indicators, such as summation and count. At this time, if the data changes, such as udpate or delete, because the pre-calculated data has lost the detailed information, it cannot be updated synchronously. For example, a sum of 5 may be 1+4 or 2+3. Because of the loss of detailed information, we cannot distinguish how the sum is calculated, and therefore cannot meet the update requirements.')]),e._v(" "),o("h3",{attrs:{id:"q7-show-backends-frontends-viewed-information-is-incomplete"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q7-show-backends-frontends-viewed-information-is-incomplete"}},[e._v("#")]),e._v(" Q7. show backends/frontends Viewed information is incomplete")]),e._v(" "),o("p",[e._v("After executing certain statements such as "),o("code",[e._v("show backends/frontends")]),e._v(", some columns may be incomplete in the results. For example, the disk capacity information cannot be seen in the show backends results.")]),e._v(" "),o("p",[e._v("This problem usually occurs when there are multiple FEs in the cluster. If users connect to non-Master FE nodes to execute these statements, they will see incomplete information. This is because part of the information only exists in the Master FE node. Such as BE's disk usage information. Therefore, the complete information can be obtained only after the Master FE is directly connected.")]),e._v(" "),o("p",[e._v("Of course, the user can also execute "),o("code",[e._v("set forward_to_master=true;")]),e._v(" before executing these statements. After the session variable is set to true, some information viewing statements executed later will be automatically forwarded to the Master FE to obtain the results. In this way, no matter which FE the user is connected to, the complete result can be obtained.")]),e._v(" "),o("h3",{attrs:{id:"q8-a-new-disk-is-added-to-the-node-why-is-the-data-not-balanced-on-the-new-disk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q8-a-new-disk-is-added-to-the-node-why-is-the-data-not-balanced-on-the-new-disk"}},[e._v("#")]),e._v(" Q8. A new disk is added to the node. Why is the data not balanced on the new disk?")]),e._v(" "),o("p",[e._v("The current balance strategy of Doris is based on nodes. In other words, the cluster load is judged according to the overall load index of the node (the number of shards and the total disk utilization). And migrate data fragments from high-load nodes to low-load nodes. If each node adds a disk, from the perspective of the node as a whole, the load has not changed, so the balancing logic cannot be triggered.")]),e._v(" "),o("p",[e._v("In addition, Doris currently does not support balanced operations within a single node and between various disks. Therefore, after adding a new disk, the data will not be balanced to the new disk.")]),e._v(" "),o("p",[e._v("However, when data is migrated between nodes, Doris will consider the disk factor. For example, if a slice is migrated from node A to node B, the disk with lower disk space utilization among node B will be selected first.")]),e._v(" "),o("p",[e._v("Here we provide 3 ways to solve this problem:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Rebuild the new table")]),e._v(" "),o("p",[e._v("Create a new table through the create table like statement, and then use insert into select to synchronize the data from the old table to the new table. Because when a new table is created, the data fragments of the new table will be distributed on the new disk, and the data will also be written to the new disk. This method is suitable for situations where the amount of data is small (within tens of GB).")])]),e._v(" "),o("li",[o("p",[e._v("Through the Decommission command")]),e._v(" "),o("p",[e._v('The decommission command is used to safely decommission a BE node. This command will first migrate the data fragments on the node to other nodes, and then delete the node. As mentioned earlier, when data is migrated, disks with low disk utilization will be given priority, so this method can "force" the data to be migrated to the disks of other nodes. When the data migration is completed, we cancel the decommission operation, so that the data will be rebalanced back to this node. When we perform the above steps for all BE nodes, the data will be evenly distributed on all disks of all nodes.')]),e._v(" "),o("p",[e._v("Note that before executing the decommission command, execute the following command first to avoid the node being deleted after it is offline.")]),e._v(" "),o("p",[o("code",[e._v('admin set frontend config("drop_backend_after_decommission" = "false");')])])]),e._v(" "),o("li",[o("p",[e._v("Manually migrate data using API")]),e._v(" "),o("p",[e._v("Doris provides "),o("RouterLink",{attrs:{to:"/administrator-guide/http-actions/tablet-migration-action.html"}},[e._v("HTTP API")]),e._v(", which allows you to manually specify data fragments on one disk to migrate to another disk.")],1)])]),e._v(" "),o("h3",{attrs:{id:"q9-how-to-read-fe-be-log-correctly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q9-how-to-read-fe-be-log-correctly"}},[e._v("#")]),e._v(" Q9. How to read FE/BE log correctly?")]),e._v(" "),o("p",[e._v("In many cases, we need to troubleshoot problems through logs. Here is an explanation of the format and viewing method of the FE/BE log.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("FE")]),e._v(" "),o("p",[e._v("FE logs mainly include:")]),e._v(" "),o("ul",[o("li",[e._v("fe.log: main log. Including everything except fe.out.")]),e._v(" "),o("li",[e._v("fe.warn.log: A subset of the main log, which only records WARN and ERROR level logs.")]),e._v(" "),o("li",[e._v("fe.out: Standard/error output log (stdout and stderr).")]),e._v(" "),o("li",[e._v("fe.audit.log: Audit log, which records all SQL requests received by this FE.")])]),e._v(" "),o("p",[e._v("A typical FE log is as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("2021-09-16 23:13:22,502 INFO (tablet scheduler|43) [BeLoadRebalancer.selectAlternativeTabletsForCluster():85] cluster is balance: default_cluster with medium: HDD. skip\n")])])]),o("ul",[o("li",[o("code",[e._v("2021-09-16 23:13:22,502")]),e._v(": log time.")]),e._v(" "),o("li",[o("code",[e._v("INFO: log level, the default is INFO")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("(tablet scheduler|43)")]),e._v(": thread name and thread id. Through the thread id, you can view the thread context information and troubleshoot what happened in this thread.")]),e._v(" "),o("li",[o("code",[e._v("BeLoadRebalancer.selectAlternativeTabletsForCluster():85")]),e._v(": class name, method name and code line number.")]),e._v(" "),o("li",[o("code",[e._v("cluster is balance xxx")]),e._v(": log content.")])]),e._v(" "),o("p",[e._v("Normally, we mainly check the fe.log log. Under special circumstances, some logs may be output to fe.out.")])]),e._v(" "),o("li",[o("p",[e._v("BE")]),e._v(" "),o("p",[e._v("The BE logs mainly include:")]),e._v(" "),o("ul",[o("li",[e._v("be.INFO: Main log. This is actually a soft connection, connected to the latest be.INFO.xxxx.")]),e._v(" "),o("li",[e._v("be.WARNING: A subset of the main log, only logs of WARN and FATAL levels are recorded. This is actually a soft connection, connected to the latest be.WARN.xxxx.")]),e._v(" "),o("li",[e._v("be.out: standard/error output log (stdout and stderr).")])]),e._v(" "),o("p",[e._v("A typical BE log is as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("I0916 23:21:22.038795 28087 task_worker_pool.cpp:1594] finish report TASK. master host: 10.10.10.10, port: 9222\n")])])]),o("ul",[o("li",[o("code",[e._v("I0916 23:21:22.038795")]),e._v(": Log level and date and time. The capital letter I means INFO, W means WARN, and F means FATAL.")]),e._v(" "),o("li",[o("code",[e._v("28087")]),e._v(": thread id. Through the thread id, you can view the thread context information and troubleshoot what happened in this thread.")]),e._v(" "),o("li",[o("code",[e._v("task_worker_pool.cpp:1594")]),e._v(": code file and line number.")]),e._v(" "),o("li",[o("code",[e._v("finish report TASK xxx")]),e._v(": log content.")])]),e._v(" "),o("p",[e._v("Normally, we mainly check the be.INFO log. Under special circumstances, such as BE downtime, you need to check be.out.")])])]),e._v(" "),o("h3",{attrs:{id:"q10-how-to-troubleshoot-the-cause-of-fe-be-node-down"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q10-how-to-troubleshoot-the-cause-of-fe-be-node-down"}},[e._v("#")]),e._v(" Q10. How to troubleshoot the cause of FE/BE node down?")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("BE")]),e._v(" "),o("p",[e._v("The BE process is a C/C++ process, and the process may hang due to some program bugs (memory out of bounds, illegal address access, etc.) or Out Of Memory (OOM). At this point, we can check the cause of the error through the following steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("View be.out")]),e._v(" "),o("p",[e._v("The BE process realizes that when the program exits due to an abnormal condition, it will print the current error stack to be.out (note that it is be.out, not be.INFO or be.WARNING). Through the error stack, you can usually get a rough idea of ​​where the program went wrong.")]),e._v(" "),o("p",[e._v("Note that if an error stack appears in be.out, it is usually due to a program bug, and ordinary users may not be able to solve it by themselves. Welcome to the WeChat group, github discussion or dev mail group for help, and post the corresponding error stack for quick Troubleshoot the problem.")])]),e._v(" "),o("li",[o("p",[e._v("dmesg")]),e._v(" "),o("p",[e._v("If be.out has no stack information, it is likely that OOM was forcibly killed by the system. At this point, you can use the dmesg -T command to view the Linux system log. If a log similar to Memory cgroup out of memory: Kill process 7187 (palo_be) score 1007 or sacrifice child appears at the end, it means that it is caused by OOM.")]),e._v(" "),o("p",[e._v("There may be many reasons for memory problems, such as large queries, imports, compactions, etc. Doris is also constantly optimizing memory usage. Welcome to the WeChat group, github discussion or dev mailing group for help.")])]),e._v(" "),o("li",[o("p",[e._v("Check whether there are logs starting with F in be.INFO.")]),e._v(" "),o("p",[e._v("The log at the beginning of F is the Fatal log. For example, F0916 means the Fatal log on September 16. Fatal logs usually indicate program assertion errors, and assertion errors will directly cause the process to exit (indicating that the program has a bug). Welcome to the WeChat group, github discussion or dev mailing group for help.")])]),e._v(" "),o("li",[o("p",[e._v("Minidump")]),e._v(" "),o("p",[e._v("Mindump is a feature added after Doris 0.15. For details, please refer to "),o("RouterLink",{attrs:{to:"/developer-guide/minidump.html"}},[e._v("Document")]),e._v(".")],1)])])]),e._v(" "),o("li",[o("p",[e._v("FE")]),e._v(" "),o("p",[e._v("FE is a java process, and its robustness depends on the C/C++ program. Usually, the cause of FE hanging may be OOM (Out-of-Memory) or metadata writing failure. These errors usually have an error stack in fe.log or fe.out. You need to investigate further based on the error stack information.")])])]),e._v(" "),o("h3",{attrs:{id:"q11-about-the-configuration-of-the-data-directory-ssd-and-hdd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q11-about-the-configuration-of-the-data-directory-ssd-and-hdd"}},[e._v("#")]),e._v(" Q11. About the configuration of the data directory SSD and HDD.")]),e._v(" "),o("p",[e._v("Doris supports a BE node to configure multiple storage paths. Normally, it is sufficient to configure one storage path for each disk. At the same time, Doris supports storage media attributes of specified paths, such as SSD or HDD. SSD stands for high-speed storage devices, and HDD stands for low-speed storage devices.")]),e._v(" "),o("p",[e._v("By specifying the storage medium properties of the path, we can use Doris's hot and cold data partition storage function to store hot data in the SSD at the partition level, and the cold data will be automatically transferred to the HDD.")]),e._v(" "),o("p",[e._v('It should be noted that Doris does not automatically perceive the actual storage medium type of the disk where the storage path is located. This type needs to be explicitly indicated by the user in the path configuration. For example, the path "/path/to/data1.SSD" means that this path is an SSD storage medium. And "data1.SSD" is the actual directory name. Doris determines the storage medium type based on the ".SSD" suffix behind the directory name, not the actual storage medium type. In other words, the user can specify any path as the SSD storage medium, and Doris only recognizes the directory suffix and will not judge whether the storage medium matches. If you do not write the suffix, the default is HDD.')]),e._v(" "),o("p",[e._v('In other words, ".HDD" and ".SSD" are only used to identify the "relative" "low speed" and "high speed" of the storage directory, not the actual storage medium type. Therefore, if the storage path on the BE node has no difference in media, there is no need to fill in the suffix.')]),e._v(" "),o("h3",{attrs:{id:"q12-the-query-results-of-unique-key-model-are-inconsistent"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q12-the-query-results-of-unique-key-model-are-inconsistent"}},[e._v("#")]),e._v(" Q12.  The query results of unique key model are inconsistent")]),e._v(" "),o("p",[e._v("In some cases, when users use the same SQL to query a table of a unique key model, inconsistent query results may occur. And the query results always change between 2-3 kinds.")]),e._v(" "),o("p",[e._v("This may be because there are data with the same key but different values in the same batch of imported data, which will lead to inconsistent results between different replicas due to uncertain data replace order.")]),e._v(" "),o("p",[e._v("For example, tables are defined as k1 and v1. A batch of imported data is as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('1, "abc"\n1, "def"\n')])])]),o("p",[e._v("Then the result of replica 1 may be '1, \"ABC', while the result of replica 2 may be '1,\" def'. This leads to inconsistent query results.")]),e._v(" "),o("p",[e._v("To ensure the unique data order between different replicas, refer to the  "),o("RouterLink",{attrs:{to:"/administrator-guide/load-data/sequence-column-manual.html"}},[e._v("Sequence Column")]),e._v(" function.")],1),e._v(" "),o("h3",{attrs:{id:"q13-multiple-fes-cannot-log-in-when-using-nginx-to-implement-web-ui-load-balancing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q13-multiple-fes-cannot-log-in-when-using-nginx-to-implement-web-ui-load-balancing"}},[e._v("#")]),e._v(" Q13. Multiple FEs cannot log in when using Nginx to implement web UI load balancing")]),e._v(" "),o("p",[e._v("Doris can deploy multiple FEs. When accessing the Web UI, if you use Nginx for load balancing, you will be prompted to log in again because of Session problems. This problem is actually a session sharing problem. Nginx provides centralized session sharing. The solution, here we use the ip_hash technology in nginx, ip_hash can direct the request of a certain ip to the same backend, so that a certain client and a certain backend under this ip can establish a stable The session, ip_hash is defined in the upstream configuration:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("upstream  doris.com {\n   server    172.22.197.238:8030 weight=3;\n   server    172.22.197.239:8030 weight=4;\n   server    172.22.197.240:8030 weight=4;\n   ip_hash;\n}\n")])])]),o("p",[e._v("The complete Nginx example configuration is as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('user nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile            on;\n    tcp_nopush          on;\n    tcp_nodelay         on;\n    keepalive_timeout   65;\n    types_hash_max_size 2048;\n\n    include             /etc/nginx/mime.types;\n    default_type        application/octet-stream;\n\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\n    # for more information.\n    include /etc/nginx/conf.d/*.conf;\n    #include /etc/nginx/custom/*.conf;\n    upstream  doris.com {\n      server    172.22.197.238:8030 weight=3;\n      server    172.22.197.239:8030 weight=4;\n      server    172.22.197.240:8030 weight=4;\n      ip_hash;\n    }\n\n    server {\n        listen       80;\n        server_name  gaia-pro-bigdata-fe02;\n        if ($request_uri ~ _load) {\n           return 307 http://$host$request_uri ;\n        }\n\n        location / {\n            proxy_pass http://doris.com;\n            proxy_redirect default;\n        }\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n }\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
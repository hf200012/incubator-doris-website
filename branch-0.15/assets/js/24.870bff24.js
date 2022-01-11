(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{465:function(e,t,a){"use strict";a.r(t);var r=a(55),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-export"}},[e._v("#")]),e._v(" Data export")]),e._v(" "),a("p",[e._v("Export is a function provided by Doris to export data. This function can export user-specified table or partition data in text format to remote storage through Broker process, such as HDFS/BOS.")]),e._v(" "),a("p",[e._v("This document mainly introduces the basic principles, usage, best practices and precautions of Export.")]),e._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),a("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")]),e._v(" "),a("li",[e._v("Broker: Doris can manipulate files for remote storage through the Broker process.")]),e._v(" "),a("li",[e._v("Tablet: Data fragmentation. A table is divided into multiple data fragments.")])]),e._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("p",[e._v("After the user submits an Export job. Doris counts all Tablets involved in this job. These tablets are then grouped to generate a special query plan for each group. The query plan reads the data on the included tablet and then writes the data to the specified path of the remote storage through Broker. It can also be directly exported to the remote storage that supports S3 protocol through S3 protocol.")]),e._v(" "),a("p",[e._v("The overall mode of dispatch is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+--------+\n| Client |\n+---+----+\n    |  1. Submit Job\n    |\n+---v--------------------+\n| FE                     |\n|                        |\n| +-------------------+  |\n| | ExportPendingTask |  |\n| +-------------------+  |\n|                        | 2. Generate Tasks\n| +--------------------+ |\n| | ExportExporingTask | |\n| +--------------------+ |\n|                        |\n| +-----------+          |     +----+   +------+   +---------+\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   | Remote  |\n| +-----------+          |     +----+   +------+   | Storage |\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   +---------+\n+------------------------+         3. Execute Tasks\n\n")])])]),a("ol",[a("li",[e._v("The user submits an Export job to FE.")]),e._v(" "),a("li",[e._v("FE's Export scheduler performs an Export job in two stages:\n"),a("ol",[a("li",[e._v("PENDING: FE generates Export Pending Task, sends snapshot command to BE, and takes a snapshot of all Tablets involved. And generate multiple query plans.")]),e._v(" "),a("li",[e._v("EXPORTING: FE generates Export ExportingTask and starts executing the query plan.")])])])]),e._v(" "),a("h3",{attrs:{id:"query-plan-splitting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-plan-splitting"}},[e._v("#")]),e._v(" query plan splitting")]),e._v(" "),a("p",[e._v("The Export job generates multiple query plans, each of which scans a portion of the Tablet. The number of Tablets scanned by each query plan is specified by the FE configuration parameter "),a("code",[e._v("export_tablet_num_per_task")]),e._v(", which defaults to 5. That is, assuming a total of 100 Tablets, 20 query plans will be generated. Users can also specify this number by the job attribute "),a("code",[e._v("tablet_num_per_task")]),e._v(", when submitting a job.")]),e._v(" "),a("p",[e._v("Multiple query plans for a job are executed sequentially.")]),e._v(" "),a("h3",{attrs:{id:"query-plan-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-plan-execution"}},[e._v("#")]),e._v(" Query Plan Execution")]),e._v(" "),a("p",[e._v("A query plan scans multiple fragments, organizes read data in rows, batches every 1024 actions, and writes Broker to remote storage.")]),e._v(" "),a("p",[e._v("The query plan will automatically retry three times if it encounters errors. If a query plan fails three retries, the entire job fails.")]),e._v(" "),a("p",[e._v("Doris will first create a temporary directory named "),a("code",[e._v("doris_export_tmp_12345")]),e._v(" (where "),a("code",[e._v("12345")]),e._v(" is the job id) in the specified remote storage path. The exported data is first written to this temporary directory. Each query plan generates a file with an example file name:")]),e._v(" "),a("p",[a("code",[e._v("export-data-c69fcf2b6db5420f-a96b94c1ff8bccef-1561453713822")])]),e._v(" "),a("p",[e._v("Among them, "),a("code",[e._v("c69fcf2b6db5420f-a96b94c1ff8bccef")]),e._v(" is the query ID of the query plan. "),a("code",[e._v("1561453713822")]),e._v(" Timestamp generated for the file.")]),e._v(" "),a("p",[e._v("When all data is exported, Doris will rename these files to the user-specified path.")]),e._v(" "),a("h2",{attrs:{id:"use-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-examples"}},[e._v("#")]),e._v(" Use examples")]),e._v(" "),a("p",[e._v("Export's detailed commands can be passed through "),a("code",[e._v("HELP EXPORT;")]),e._v(" Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "bos://bj-test-cmy/export/" \nPROPERTIES\n(\n    "label"="mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "exec_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER "hdfs"\n(\n\t"username" = "user",\n\t"password" = "passwd"\n);\n')])])]),a("ul",[a("li",[a("code",[e._v("label")]),e._v(": The identifier of this export job. You can use this identifier to view the job status later.")]),e._v(" "),a("li",[a("code",[e._v("column_separator")]),e._v(": Column separator. The default is "),a("code",[e._v("\\t")]),e._v(". Supports invisible characters, such as'\\x07'.")]),e._v(" "),a("li",[a("code",[e._v("column")]),e._v(": columns to be exported, separated by commas, if this parameter is not filled in, all columns of the table will be exported by default.")]),e._v(" "),a("li",[a("code",[e._v("line_delimiter")]),e._v(": Line separator. The default is "),a("code",[e._v("\\n")]),e._v(". Supports invisible characters, such as'\\x07'.")]),e._v(" "),a("li",[a("code",[e._v("exec_mem_limit")]),e._v(": Represents the memory usage limitation of a query plan on a single BE in an Export job. Default 2GB. Unit bytes.")]),e._v(" "),a("li",[a("code",[e._v("timeout")]),e._v(": homework timeout. Default 2 hours. Unit seconds.")]),e._v(" "),a("li",[a("code",[e._v("tablet_num_per_task")]),e._v(": The maximum number of fragments allocated per query plan. The default is 5.")])]),e._v(" "),a("p",[e._v("After submitting a job, the job status can be imported by querying the "),a("code",[e._v("SHOW EXPORT")]),e._v(" command. The results are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('     JobId: 14008\n     Label: mylabel\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"exec mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3"}\n      Path: bos://bj-test-cmy/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: N/A\n')])])]),a("ul",[a("li",[e._v("JobId: The unique ID of the job")]),e._v(" "),a("li",[e._v("Label: Job identifier")]),e._v(" "),a("li",[e._v("State: Job status:\n"),a("ul",[a("li",[e._v("PENDING: Jobs to be Scheduled")]),e._v(" "),a("li",[e._v("EXPORTING: Data Export")]),e._v(" "),a("li",[e._v("FINISHED: Operation Successful")]),e._v(" "),a("li",[e._v("CANCELLED: Job Failure")])])]),e._v(" "),a("li",[e._v("Progress: Work progress. The schedule is based on the query plan. Assuming a total of 10 query plans have been completed, the progress will be 30%.")]),e._v(" "),a("li",[e._v("TaskInfo: Job information in Json format:\n"),a("ul",[a("li",[e._v("db: database name")]),e._v(" "),a("li",[e._v("tbl: Table name")]),e._v(" "),a("li",[e._v("partitions: Specify the exported partition. "),a("code",[e._v("*")]),e._v(" Represents all partitions.")]),e._v(" "),a("li",[e._v("exec MEM limit: query plan memory usage limit. Unit bytes.")]),e._v(" "),a("li",[e._v("column separator: The column separator for the exported file.")]),e._v(" "),a("li",[e._v("line delimiter: The line separator for the exported file.")]),e._v(" "),a("li",[e._v("tablet num: The total number of tablets involved.")]),e._v(" "),a("li",[e._v("Broker: The name of the broker used.")]),e._v(" "),a("li",[e._v("Coord num: Number of query plans.")])])]),e._v(" "),a("li",[e._v("Path: Export path on remote storage.")]),e._v(" "),a("li",[e._v("CreateTime/StartTime/FinishTime: Creation time, start scheduling time and end time of jobs.")]),e._v(" "),a("li",[e._v("Timeout: Job timeout. The unit is seconds. This time is calculated from CreateTime.")]),e._v(" "),a("li",[e._v("Error Msg: If there is an error in the job, the cause of the error is shown here.")])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"splitting-query-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splitting-query-plans"}},[e._v("#")]),e._v(" Splitting Query Plans")]),e._v(" "),a("p",[e._v("How many query plans need to be executed for an Export job depends on the total number of Tablets and how many Tablets can be allocated for a query plan at most. Since multiple query plans are executed serially, the execution time of jobs can be reduced if more fragments are processed by one query plan. However, if the query plan fails (e.g., the RPC fails to call Broker, the remote storage jitters, etc.), too many tablets can lead to a higher retry cost of a query plan. Therefore, it is necessary to arrange the number of query plans and the number of fragments to be scanned for each query plan in order to balance the execution time and the success rate of execution. It is generally recommended that the amount of data scanned by a query plan be within 3-5 GB (the size and number of tables in a table can be viewed by "),a("code",[e._v("SHOW TABLET FROM tbl_name;")]),e._v("statement.")]),e._v(" "),a("h3",{attrs:{id:"exec-mem-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec-mem-limit"}},[e._v("#")]),e._v(" exec_mem_limit")]),e._v(" "),a("p",[e._v("Usually, a query plan for an Export job has only two parts "),a("code",[e._v("scan")]),e._v("- "),a("code",[e._v("export")]),e._v(", and does not involve computing logic that requires too much memory. So usually the default memory limit of 2GB can satisfy the requirement. But in some scenarios, such as a query plan, too many Tablets need to be scanned on the same BE, or too many data versions of Tablets, may lead to insufficient memory. At this point, larger memory needs to be set through this parameter, such as 4 GB, 8 GB, etc.")]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("ul",[a("li",[e._v("It is not recommended to export large amounts of data at one time. The maximum amount of exported data recommended by an Export job is tens of GB. Excessive export results in more junk files and higher retry costs.")]),e._v(" "),a("li",[e._v("If the amount of table data is too large, it is recommended to export it by partition.")]),e._v(" "),a("li",[e._v("During the operation of the Export job, if FE restarts or cuts the master, the Export job will fail, requiring the user to resubmit.")]),e._v(" "),a("li",[e._v("If the Export job fails, the "),a("code",[e._v("__doris_export_tmp_xxx")]),e._v(" temporary directory generated in the remote storage and the generated files will not be deleted, requiring the user to delete them manually.")]),e._v(" "),a("li",[e._v("If the Export job runs successfully, the "),a("code",[e._v("__doris_export_tmp_xxx")]),e._v(" directory generated in the remote storage may be retained or cleared according to the file system semantics of the remote storage. For example, in Baidu Object Storage (BOS), after removing the last file in a directory through rename operation, the directory will also be deleted. If the directory is not cleared, the user can clear it manually.")]),e._v(" "),a("li",[e._v("When the Export runs successfully or fails, the FE reboots or cuts, then some information of the jobs displayed by "),a("code",[e._v("SHOW EXPORT")]),e._v(" will be lost and cannot be viewed.")]),e._v(" "),a("li",[e._v("Export jobs only export data from Base tables, not Rollup Index.")]),e._v(" "),a("li",[e._v("Export jobs scan data and occupy IO resources, which may affect the query latency of the system.")])]),e._v(" "),a("h2",{attrs:{id:"relevant-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevant-configuration"}},[e._v("#")]),e._v(" Relevant configuration")]),e._v(" "),a("h3",{attrs:{id:"fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe"}},[e._v("#")]),e._v(" FE")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("expo_checker_interval_second")]),e._v(": Scheduling interval of Export job scheduler, default is 5 seconds. Setting this parameter requires restarting FE.")]),e._v(" "),a("li",[a("code",[e._v("export_running_job_num_limit")]),e._v(": Limit on the number of Export jobs running. If exceeded, the job will wait and be in PENDING state. The default is 5, which can be adjusted at run time.")]),e._v(" "),a("li",[a("code",[e._v("Export_task_default_timeout_second")]),e._v(": Export job default timeout time. The default is 2 hours. It can be adjusted at run time.")]),e._v(" "),a("li",[a("code",[e._v("export_tablet_num_per_task")]),e._v(": The maximum number of fragments that a query plan is responsible for. The default is 5.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);
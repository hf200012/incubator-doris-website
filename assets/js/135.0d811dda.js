(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{586:function(t,e,a){"use strict";a.r(e);var r=a(56),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"star-schema-benchmark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#star-schema-benchmark"}},[t._v("#")]),t._v(" Star Schema Benchmark")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star Schema Benchmark(SSB)"),a("OutboundLink")],1),t._v(" is a lightweight data warehouse scenario performance test set. Based on "),a("a",{attrs:{href:"http://www.tpc.org/tpch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TPC-H"),a("OutboundLink")],1),t._v(", SSB provides a simplified version of the star model data set, which is mainly used to test the performance of multi-table association queries under the star model.")]),t._v(" "),a("p",[t._v("This document mainly introduces how to pass the preliminary performance test of the SSB process in Doris.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note 1: The standard test set including SSB is usually far from the actual business scenario, and some tests will perform parameter tuning for the test set. Therefore, the test results of the standard test set can only reflect the performance of the database in a specific scenario. It is recommended that users use actual business data for further testing.")]),t._v(" "),a("p",[t._v("Note 2: The operations involved in this document are all performed in the CentOS 7 environment.")])]),t._v(" "),a("h2",{attrs:{id:"environmental-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environmental-preparation"}},[t._v("#")]),t._v(" Environmental preparation")]),t._v(" "),a("p",[t._v("Please refer to the "),a("a",{attrs:{href:"http://doris.incubator.apache.org/master/en/installing/install-deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official document"),a("OutboundLink")],1),t._v(" to install and deploy Doris to obtain a normal running Doris cluster ( Contain at least 1 FE, 1 BE).")]),t._v(" "),a("p",[t._v("The scripts involved in the following documents are all stored under "),a("code",[t._v("tools/ssb-tools/")]),t._v(" in the Doris code base.")]),t._v(" "),a("h2",{attrs:{id:"data-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-preparation"}},[t._v("#")]),t._v(" data preparation")]),t._v(" "),a("h3",{attrs:{id:"_1-download-and-install-the-ssb-data-generation-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-and-install-the-ssb-data-generation-tool"}},[t._v("#")]),t._v(" 1. Download and install the SSB data generation tool.")]),t._v(" "),a("p",[t._v("Execute the following script to download and compile the "),a("a",{attrs:{href:"https://github.com/electrum/ssb-dbgen.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("ssb-dbgen"),a("OutboundLink")],1),t._v(" tool.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sh build-ssb-dbgen.sh\n")])])]),a("p",[t._v("After the installation is successful, the "),a("code",[t._v("dbgen")]),t._v(" binary file will be generated in the "),a("code",[t._v("ssb-dbgen/")]),t._v(" directory.")]),t._v(" "),a("h3",{attrs:{id:"_2-generate-ssb-test-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-generate-ssb-test-set"}},[t._v("#")]),t._v(" 2. Generate SSB test set")]),t._v(" "),a("p",[t._v("Execute the following script to generate the SSB data set:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sh gen-ssb-data.sh -s 100 -c 100\n")])])]),a("blockquote",[a("p",[t._v("Note 1: Run "),a("code",[t._v("sh gen-ssb-data.sh -h")]),t._v(" for help.")]),t._v(" "),a("p",[t._v("Note 2: The data will be generated under the directory "),a("code",[t._v("ssb-data/")]),t._v(" with a suffix of "),a("code",[t._v(".tbl")]),t._v(". The total file size is about 60GB. The generation time may vary from a few minutes to an hour.")]),t._v(" "),a("p",[t._v("Note 3: "),a("code",[t._v("-s 100")]),t._v(" means that the test set size factor is 100, "),a("code",[t._v("-c 100")]),t._v(" means that 100 threads concurrently generate data in the lineorder table. The "),a("code",[t._v("-c")]),t._v(" parameter also determines the number of files in the final lineorder table. The larger the parameter, the more files and the smaller each file.")])]),t._v(" "),a("p",[t._v("Under the "),a("code",[t._v("-s 100")]),t._v(" parameter, the generated data set size is:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Table")]),t._v(" "),a("th",[t._v("Rows")]),t._v(" "),a("th",[t._v("Size")]),t._v(" "),a("th",[t._v("File Number")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("lineorder")]),t._v(" "),a("td",[t._v("600 million (600037902)")]),t._v(" "),a("td",[t._v("60GB")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("customer")]),t._v(" "),a("td",[t._v("30 million (3000000)")]),t._v(" "),a("td",[t._v("277M")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("part")]),t._v(" "),a("td",[t._v("1.4 million (1400000)")]),t._v(" "),a("td",[t._v("116M")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("supplier")]),t._v(" "),a("td",[t._v("200,000 (200,000)")]),t._v(" "),a("td",[t._v("17M")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("date")]),t._v(" "),a("td",[t._v("2556")]),t._v(" "),a("td",[t._v("228K")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("Build a table")]),t._v(" "),a("p",[t._v("Copy the table creation statement in "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/create-tables.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-tables.sql"),a("OutboundLink")],1),t._v(" and execute it in Doris.")])]),t._v(" "),a("li",[a("p",[t._v("Import data")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Import 4 dimension table data (customer, part, supplier and date)")]),t._v(" "),a("p",[t._v("Because the data volume of these 4 dimension tables is small, and the import is simpler, we use the following command to import the data of these 4 tables first:")]),t._v(" "),a("p",[a("code",[t._v("sh load-dimension-data.sh")])])]),t._v(" "),a("li",[a("p",[t._v("Import the fact table lineorder.")]),t._v(" "),a("p",[t._v("Import the lineorder table data with the following command:")]),t._v(" "),a("p",[a("code",[t._v("sh load-fact-data.sh -c 5")])]),t._v(" "),a("p",[a("code",[t._v("-c 5")]),t._v(" means to start 5 concurrent threads to import (the default is 3). In the case of a single BE node, the import time of lineorder data generated by "),a("code",[t._v("sh gen-ssb-data.sh -s 100 -c 100")]),t._v(" using "),a("code",[t._v("sh load-fact-data.sh -c 3")]),t._v(" is about 10 minutes. The memory overhead is about 5-6GB. If you turn on more threads, you can speed up the import speed, but it will increase additional memory overhead.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note: To get a faster import speed, you can add "),a("code",[t._v("flush_thread_num_per_store=5")]),t._v(" in be.conf and restart BE. This configuration indicates the number of disk write threads for each data directory, and the default is 2. Larger data can increase write data throughput, but may increase IO Util. (Reference value: 1 mechanical disk, when the default is 2, the IO Util during the import process is about 12%, when it is set to 5, the IO Util is about 26%. If it is an SSD disk, it is almost 0) .")])])])])]),t._v(" "),a("li",[a("p",[t._v("Check the imported data")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from date;\nselect count(*) from lineorder;\n")])])]),a("p",[t._v("The amount of data should be the same as the number of rows of generated data.")])])]),t._v(" "),a("h2",{attrs:{id:"query-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-test"}},[t._v("#")]),t._v(" Query test")]),t._v(" "),a("p",[t._v("There are 4 groups of 14 SQL in the SSB test set. The query statement is in the "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/ssb-tools/queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("queries/"),a("OutboundLink")],1),t._v(" directory.")]),t._v(" "),a("h2",{attrs:{id:"testing-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-report"}},[t._v("#")]),t._v(" testing report")]),t._v(" "),a("p",[t._v("The following test report is based on Doris "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/branch-0.15",target:"_blank",rel:"noopener noreferrer"}},[t._v("branch-0.15"),a("OutboundLink")],1),t._v(" branch code test, for reference only. (Update time: October 25, 2021)")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Hardware environment")]),t._v(" "),a("ul",[a("li",[t._v("1 FE + 1-3 BE mixed")]),t._v(" "),a("li",[t._v("CPU: 96core, Intel(R) Xeon(R) Gold 6271C CPU @ 2.60GHz")]),t._v(" "),a("li",[t._v("Memory: 384GB")]),t._v(" "),a("li",[t._v("Hard disk: 1 HDD")]),t._v(" "),a("li",[t._v("Network card: 10 Gigabit network card")])])]),t._v(" "),a("li",[a("p",[t._v("Data set")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Table")]),t._v(" "),a("th",[t._v("Rows")]),t._v(" "),a("th",[t._v("Origin Size")]),t._v(" "),a("th",[t._v("Compacted Size(1 Replica)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("lineorder")]),t._v(" "),a("td",[t._v("600 million (600037902)")]),t._v(" "),a("td",[t._v("60 GB")]),t._v(" "),a("td",[t._v("14.846 GB")])]),t._v(" "),a("tr",[a("td",[t._v("customer")]),t._v(" "),a("td",[t._v("30 million (3000000)")]),t._v(" "),a("td",[t._v("277 MB")]),t._v(" "),a("td",[t._v("414.741 MB")])]),t._v(" "),a("tr",[a("td",[t._v("part")]),t._v(" "),a("td",[t._v("1.4 million (1.400000)")]),t._v(" "),a("td",[t._v("116 MB")]),t._v(" "),a("td",[t._v("38.277 MB")])]),t._v(" "),a("tr",[a("td",[t._v("supplier")]),t._v(" "),a("td",[t._v("200,000 (200,000)")]),t._v(" "),a("td",[t._v("17 MB")]),t._v(" "),a("td",[t._v("27.428 MB")])]),t._v(" "),a("tr",[a("td",[t._v("date")]),t._v(" "),a("td",[t._v("2556")]),t._v(" "),a("td",[t._v("228 KB")]),t._v(" "),a("td",[t._v("275.804 KB")])])])])]),t._v(" "),a("li",[a("p",[t._v("Test results")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Query")]),t._v(" "),a("th",[t._v("Time(ms) (1 BE)")]),t._v(" "),a("th",[t._v("Time(ms) (3 BE)")]),t._v(" "),a("th",[t._v("Parallelism")]),t._v(" "),a("th",[t._v("Runtime Filter Mode")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("q1.1")]),t._v(" "),a("td",[t._v("200")]),t._v(" "),a("td",[t._v("140")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("IN")])]),t._v(" "),a("tr",[a("td",[t._v("q1.2")]),t._v(" "),a("td",[t._v("90")]),t._v(" "),a("td",[t._v("80")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("IN")])]),t._v(" "),a("tr",[a("td",[t._v("q1.3")]),t._v(" "),a("td",[t._v("90")]),t._v(" "),a("td",[t._v("80")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("IN")])]),t._v(" "),a("tr",[a("td",[t._v("q2.1")]),t._v(" "),a("td",[t._v("1100")]),t._v(" "),a("td",[t._v("400")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q2.2")]),t._v(" "),a("td",[t._v("900")]),t._v(" "),a("td",[t._v("330")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q2.3")]),t._v(" "),a("td",[t._v("790")]),t._v(" "),a("td",[t._v("320")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q3.1")]),t._v(" "),a("td",[t._v("3100")]),t._v(" "),a("td",[t._v("1280")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q3.2")]),t._v(" "),a("td",[t._v("700")]),t._v(" "),a("td",[t._v("270")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q3.3")]),t._v(" "),a("td",[t._v("540")]),t._v(" "),a("td",[t._v("270")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q3.4")]),t._v(" "),a("td",[t._v("560")]),t._v(" "),a("td",[t._v("240")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q4.1")]),t._v(" "),a("td",[t._v("2820")]),t._v(" "),a("td",[t._v("1150")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q4.2")]),t._v(" "),a("td",[t._v("1430")]),t._v(" "),a("td",[t._v("670")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])]),t._v(" "),a("tr",[a("td",[t._v("q4.2")]),t._v(" "),a("td",[t._v("1750")]),t._v(" "),a("td",[t._v("1030")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BLOOM_FILTER")])])])]),t._v(" "),a("blockquote",[a("p",[t._v('Note 1: "This test set is far from your production environment, please be skeptical!"')]),t._v(" "),a("p",[t._v("Note 2: The test result is the average value of multiple executions (Page Cache will play a certain acceleration role). And the data has undergone sufficient compaction (if you test immediately after importing the data, the query delay may be higher than the test result)")]),t._v(" "),a("p",[t._v("Note 3: Due to environmental constraints, the hardware specifications used in this test are relatively high, but so many hardware resources will not be consumed during the entire test. The memory consumption is within 10GB, and the CPU usage is within 10%.")]),t._v(" "),a("p",[t._v("Note 4: Parallelism means query concurrency, which is set by "),a("code",[t._v("set parallel_fragment_exec_instance_num=8")]),t._v(".")]),t._v(" "),a("p",[t._v("Note 5: Runtime Filter Mode is the type of Runtime Filter, set by "),a("code",[t._v('set runtime_filter_type="BLOOM_FILTER"')]),t._v(". ("),a("a",{attrs:{href:"http://doris.incubator.apache.org/master/en/administrator-guide/runtime-filter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Runtime Filter"),a("OutboundLink")],1),t._v(" function has a significant effect on the SSB test set. Because in this test set, The data from the right table of Join can filter the left table very well. You can try to turn off this function through "),a("code",[t._v("set runtime_filter_mode=off")]),t._v(" to see the change in query latency.)")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);
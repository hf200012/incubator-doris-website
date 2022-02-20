(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{649:function(e,t,a){"use strict";a.r(t);var o=a(56),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"metadata-design-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-design-document"}},[e._v("#")]),e._v(" Metadata Design Document")]),e._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. Mainly responsible for receiving and returning client requests, metadata, cluster management, query plan generation and so on.")]),e._v(" "),a("li",[e._v("BE: Backend, the back-end node of Doris. Mainly responsible for data storage and management, query plan execution and other work.")]),e._v(" "),a("li",[e._v("bdbje: "),a("a",{attrs:{href:"http://www.oracle.com/technetwork/database/berkeleydb/overview/index-093405.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle Berkeley DB Java Edition"),a("OutboundLink")],1),e._v(". In Doris, we use bdbje to persist metadata operation logs and high availability of FE.")])]),e._v(" "),a("h2",{attrs:{id:"overall-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overall-architecture"}},[e._v("#")]),e._v(" Overall architecture")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/palo_architecture.jpg"),alt:""}}),e._v(" "),a("p",[e._v("As shown above, Doris's overall architecture is divided into two layers. Multiple FEs form the first tier, providing lateral expansion and high availability of FE. Multiple BEs form the second layer, which is responsible for data storage and management. This paper mainly introduces the design and implementation of metadata in FE layer.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("There are two different kinds of FE nodes: follower and observer. Leader election and data synchronization are taken among FE nodes by bdbje ("),a("a",{attrs:{href:"http://www.oracle.com/technetwork/database/database-technologies/berkeleydb/overview/index-093405.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BerkeleyDB Java Edition"),a("OutboundLink")],1),e._v(").")])]),e._v(" "),a("li",[a("p",[e._v("The follower node is elected, and one of the followers becomes the leader node, which is responsible for the writing of metadata. When the leader node goes down, other follower nodes re-elect a leader to ensure high availability of services.")])]),e._v(" "),a("li",[a("p",[e._v("The observer node only synchronizes metadata from the leader node and does not participate in the election. It can be scaled horizontally to provide the extensibility of metadata reading services.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: The concepts of follower and observer corresponding to bdbje are replica and observer. You may use both names below.")])]),e._v(" "),a("h2",{attrs:{id:"metadata-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-structure"}},[e._v("#")]),e._v(" Metadata structure")]),e._v(" "),a("p",[e._v("Doris's metadata is in full memory. A complete metadata image is maintained in each FE memory. Within Baidu, a cluster of 2,500 tables and 1 million fragments (3 million copies) occupies only about 2GB of metadata in memory. (Of course, the memory overhead for querying intermediate objects and various job information needs to be estimated according to the actual situation. However, it still maintains a low memory overhead.")]),e._v(" "),a("p",[e._v("At the same time, metadata is stored in the memory as a whole in a tree-like hierarchical structure. By adding auxiliary structure, metadata information at all levels can be accessed quickly.")]),e._v(" "),a("p",[e._v("The following figure shows the contents stored in Doris meta-information.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/metadata_contents.png"),alt:""}}),e._v(" "),a("p",[e._v("As shown above, Doris's metadata mainly stores four types of data:")]),e._v(" "),a("ol",[a("li",[e._v("User data information. Including database, table Schema, fragmentation information, etc.")]),e._v(" "),a("li",[e._v("All kinds of job information. For example, import jobs, Clone jobs, SchemaChange jobs, etc.")]),e._v(" "),a("li",[e._v("User and permission information.")]),e._v(" "),a("li",[e._v("Cluster and node information.")])]),e._v(" "),a("h2",{attrs:{id:"data-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-stream"}},[e._v("#")]),e._v(" Data stream")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/metadata_stream.png"),alt:""}}),e._v(" "),a("p",[e._v("The data flow of metadata is as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Only leader FE can write metadata. After modifying leader's memory, the write operation serializes into a log and writes to bdbje in the form of key-value. The key is a continuous integer, and as log id, value is the serialized operation log.")])]),e._v(" "),a("li",[a("p",[e._v("After the log is written to bdbje, bdbje copies the log to other non-leader FE nodes according to the policy (write most/write all). The non-leader FE node modifies its metadata memory image by playback of the log, and completes the synchronization with the metadata of the leader node.")])]),e._v(" "),a("li",[a("p",[e._v("When the number of log bars of the leader node reaches the threshold (default 10W bars), the checkpoint thread is started. Checkpoint reads existing image files and subsequent logs and replays a new mirror copy of metadata in memory. The copy is then written to disk to form a new image. The reason for this is to regenerate a mirror copy instead of writing an existing image to an image, mainly considering that the write operation will be blocked during writing the image plus read lock. So every checkpoint takes up twice as much memory space.")])]),e._v(" "),a("li",[a("p",[e._v("After the image file is generated, the leader node notifies other non-leader nodes that a new image has been generated. Non-leader actively pulls the latest image files through HTTP to replace the old local files.")])]),e._v(" "),a("li",[a("p",[e._v("The logs in bdbje will be deleted regularly after the image is completed.")])])]),e._v(" "),a("h2",{attrs:{id:"implementation-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation details")]),e._v(" "),a("h3",{attrs:{id:"metadata-catalogue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-catalogue"}},[e._v("#")]),e._v(" Metadata catalogue")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The metadata directory is specified by the FE configuration item `meta_dir'.")])]),e._v(" "),a("li",[a("p",[e._v("Data storage directory for bdbje under "),a("code",[e._v("bdb/")]),e._v(" directory.")])]),e._v(" "),a("li",[a("p",[e._v("The storage directory for image files under the "),a("code",[e._v("image/")]),e._v(" directory.")])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Image.[logid]")]),e._v("is the latest image file. The suffix "),a("code",[e._v("logid")]),e._v(" indicates the ID of the last log contained in the image.")]),e._v(" "),a("li",[a("code",[e._v("Image.ckpt")]),e._v(" is the image file being written. If it is successfully written, it will be renamed "),a("code",[e._v("image.[logid]")]),e._v(" and replaced with the original image file.")]),e._v(" "),a("li",[e._v("The"),a("code",[e._v("cluster_id")]),e._v(" is recorded in the "),a("code",[e._v("VERSION")]),e._v(" file. "),a("code",[e._v("Cluster_id")]),e._v(" uniquely identifies a Doris cluster. It is a 32-bit integer randomly generated at the first startup of leader. You can also specify a cluster ID through the Fe configuration item `cluster_id'.")]),e._v(" "),a("li",[e._v("The role of FE itself recorded in the "),a("code",[e._v("ROLE")]),e._v(" file. There are only "),a("code",[e._v("FOLLOWER")]),e._v(" and "),a("code",[e._v("OBSERVER")]),e._v(". Where "),a("code",[e._v("FOLLOWER")]),e._v(" denotes FE as an optional node. (Note: Even the leader node has a role of "),a("code",[e._v("FOLLOWER")]),e._v(")")])]),e._v(" "),a("h3",{attrs:{id:"start-up-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-up-process"}},[e._v("#")]),e._v(" Start-up process")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("FE starts for the first time. If the startup script does not add any parameters, it will try to start as leader. You will eventually see "),a("code",[e._v("transfer from UNKNOWN to MASTER")]),e._v(" in the FE startup log.")])]),e._v(" "),a("li",[a("p",[e._v("FE starts for the first time. If the "),a("code",[e._v("-helper")]),e._v(" parameter is specified in the startup script and points to the correct leader FE node, the FE first asks the leader node about its role (ROLE) and cluster_id through http. Then pull up the latest image file. After reading image file and generating metadata image, start bdbje and start bdbje log synchronization. After synchronization is completed, the log after image file in bdbje is replayed, and the final metadata image generation is completed.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note 1: When starting with the "),a("code",[e._v("-helper")]),e._v(" parameter, you need to first add the FE through the leader through the MySQL command, otherwise, the start will report an error.")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note 2: "),a("code",[e._v("-helper")]),e._v(" can point to any follower node, even if it is not leader.")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note 3: In the process of synchronization log, the Fe log will show "),a("code",[e._v("xxx detached")]),e._v(". At this time, the log pull is in progress, which is a normal phenomenon.")])])]),e._v(" "),a("li",[a("p",[e._v("FE is not the first startup. If the startup script does not add any parameters, it will determine its identity according to the ROLE information stored locally. At the same time, according to the cluster information stored in the local bdbje, the leader information is obtained. Then read the local image file and the log in bdbje to complete the metadata image generation. (If the roles recorded in the local ROLE are inconsistent with those recorded in bdbje, an error will be reported.)")])]),e._v(" "),a("li",[a("p",[e._v("FE is not the first boot, and the "),a("code",[e._v("-helper")]),e._v(" parameter is specified in the boot script. Just like the first process started, the leader role is asked first. But it will be compared with the ROLE stored by itself. If they are inconsistent, they will report errors.")])])]),e._v(" "),a("h4",{attrs:{id:"metadata-read-write-and-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-read-write-and-synchronization"}},[e._v("#")]),e._v(" Metadata Read-Write and Synchronization")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Users can use Mysql to connect any FE node to read and write metadata. If the connection is a non-leader node, the node forwards the write operation to the leader node. When the leader is successfully written, it returns a current and up-to-date log ID of the leader. Later, the non-leader node waits for the log ID it replays to be larger than the log ID it returns to the client before returning the message that the command succeeds. This approach guarantees Read-Your-Write semantics for any FE node.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: Some non-write operations are also forwarded to leader for execution. For example, "),a("code",[e._v("SHOW LOAD")]),e._v(" operation. Because these commands usually need to read the intermediate states of some jobs, which are not written to bdbje, there are no such intermediate states in the memory of the non-leader node. (FE's direct metadata synchronization depends entirely on bdbje's log playback. If a metadata modification operation does not write bdbje's log, the result of the modification of the operation will not be seen in other non-leader nodes.)")])])]),e._v(" "),a("li",[a("p",[e._v("The leader node starts a TimePrinter thread. This thread periodically writes a key-value entry for the current time to bdbje. The remaining non-leader nodes read the recorded time in the log by playback and compare it with the local time. If the lag between the local time and the local time is found to be greater than the specified threshold (configuration item: "),a("code",[e._v("meta_delay_toleration_second")]),e._v("). If the write interval is half of the configuration item, the node will be in the "),a("strong",[e._v("unreadable")]),e._v(" state. This mechanism solves the problem that non-leader nodes still provide outdated metadata services after a long time of leader disconnection.")])]),e._v(" "),a("li",[a("p",[e._v("The metadata of each FE only guarantees the final consistency. Normally, inconsistent window periods are only milliseconds. We guarantee the monotonous consistency of metadata access in the same session. But if the same client connects different FEs, metadata regression may occur. (But for batch update systems, this problem has little impact.)")])])]),e._v(" "),a("h3",{attrs:{id:"downtime-recovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downtime-recovery"}},[e._v("#")]),e._v(" Downtime recovery")]),e._v(" "),a("ol",[a("li",[e._v("When the leader node goes down, the rest of the followers will immediately elect a new leader node to provide services.")]),e._v(" "),a("li",[e._v("Metadata cannot be written when most follower nodes are down. When metadata is not writable, if a write operation request occurs, the current process is that the "),a("strong",[e._v("FE process exits")]),e._v(". This logic will be optimized in the future, and read services will still be provided in the non-writable state.")]),e._v(" "),a("li",[e._v("The downtime of observer node will not affect the state of any other node. It also does not affect metadata reading and writing at other nodes.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);
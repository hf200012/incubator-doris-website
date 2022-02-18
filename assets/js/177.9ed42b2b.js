(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{631:function(e,t,a){"use strict";a.r(t);var i=a(56),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"user-define-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-define-function"}},[e._v("#")]),e._v(" User Define Function")]),e._v(" "),a("p",[e._v("UDF is mainly suitable for scenarios where the analytical capabilities that users need do not possess. Users can implement custom functions according to their own needs, and register with Doris through the UDF framework to expand Doris' capabilities and solve user analysis needs.")]),e._v(" "),a("p",[e._v("There are two types of analysis requirements that UDF can meet: UDF and UDAF. UDF in this article refers to both.")]),e._v(" "),a("ol",[a("li",[e._v("UDF: User-defined function, this function will operate on a single line and output a single line result. When users use UDFs for queries, each row of data will eventually appear in the result set. Typical UDFs are string operations such as concat().")]),e._v(" "),a("li",[e._v("UDAF: User-defined aggregation function. This function operates on multiple lines and outputs a single line of results. When the user uses UDAF in the query, each group of data after grouping will finally calculate a value and expand the result set. A typical UDAF is the set operation sum(). Generally speaking, UDAF will be used together with group by.")])]),e._v(" "),a("p",[e._v("This document mainly describes how to write a custom UDF function and how to use it in Doris.")]),e._v(" "),a("p",[e._v("If users use the UDF function and extend Doris' function analysis, and want to contribute their own UDF functions back to the Doris community for other users, please see the document "),a("RouterLink",{attrs:{to:"/extending-doris/udf/contribute_udf.html"}},[e._v("Contribute UDF")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"writing-udf-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-udf-functions"}},[e._v("#")]),e._v(" Writing UDF functions")]),e._v(" "),a("p",[e._v("Before using UDF, users need to write their own UDF functions under Doris' UDF framework. In the "),a("code",[e._v("contrib/udf/src/udf_samples/udf_sample.h|cpp")]),e._v(" file is a simple UDF Demo.")]),e._v(" "),a("p",[e._v("Writing a UDF function requires the following steps.")]),e._v(" "),a("h3",{attrs:{id:"writing-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-functions"}},[e._v("#")]),e._v(" Writing functions")]),e._v(" "),a("p",[e._v("Create the corresponding header file and CPP file, and implement the logic you need in the CPP file. Correspondence between the implementation function format and UDF in the CPP file.")]),e._v(" "),a("p",[e._v("Users can put their own source code in a folder. Taking udf_sample as an example, the directory structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("└── udf_samples\n  ├── uda_sample.cpp\n  ├── uda_sample.h\n  ├── udf_sample.cpp\n  └── udf_sample.h\n")])])]),a("h4",{attrs:{id:"non-variable-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-variable-parameters"}},[e._v("#")]),e._v(" Non-variable parameters")]),e._v(" "),a("p",[e._v("For UDFs with non-variable parameters, the correspondence between the two is straightforward.\nFor example, the UDF of "),a("code",[e._v("INT MyADD(INT, INT)")]),e._v(" will correspond to "),a("code",[e._v("IntVal AddUdf(FunctionContext* context, const IntVal& arg1, const IntVal& arg2)")]),e._v(".")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("AddUdf")]),e._v(" can be any name, as long as it is specified when creating UDF.")]),e._v(" "),a("li",[e._v("The first parameter in the implementation function is always "),a("code",[e._v("FunctionContext*")]),e._v(". The implementer can obtain some query-related content through this structure, and apply for some memory to be used. The specific interface used can refer to the definition in "),a("code",[e._v("udf/udf.h")]),e._v(".")]),e._v(" "),a("li",[e._v("In the implementation function, the second parameter needs to correspond to the UDF parameter one by one, for example, "),a("code",[e._v("IntVal")]),e._v(" corresponds to "),a("code",[e._v("INT")]),e._v(" type. All types in this part must be referenced with "),a("code",[e._v("const")]),e._v(".")]),e._v(" "),a("li",[e._v("The return parameter must correspond to the type of UDF parameter.")])]),e._v(" "),a("h4",{attrs:{id:"variable-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-parameter"}},[e._v("#")]),e._v(" variable parameter")]),e._v(" "),a("p",[e._v("For variable parameters, you can refer to the following example, corresponding to UDF"),a("code",[e._v("String md5sum(String, ...)")]),e._v("\nThe implementation function is "),a("code",[e._v("StringVal md5sumUdf(FunctionContext* ctx, int num_args, const StringVal* args)")])]),e._v(" "),a("ol",[a("li",[a("code",[e._v("md5sumUdf")]),e._v(" can also be changed arbitrarily, just specify it when creating.")]),e._v(" "),a("li",[e._v("The first parameter is the same as the non-variable parameter function, and the passed in is a "),a("code",[e._v("FunctionContext*")]),e._v(".")]),e._v(" "),a("li",[e._v("The variable parameter part consists of two parts. First, an integer is passed in, indicating that there are several parameters behind. An array of variable parameter parts is passed in later.")])]),e._v(" "),a("h4",{attrs:{id:"type-correspondence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-correspondence"}},[e._v("#")]),e._v(" Type correspondence")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("UDF Type")]),e._v(" "),a("th",[e._v("Argument Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("TinyInt")]),e._v(" "),a("td",[e._v("TinyIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("SmallInt")]),e._v(" "),a("td",[e._v("SmallIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("Int")]),e._v(" "),a("td",[e._v("IntVal")])]),e._v(" "),a("tr",[a("td",[e._v("BigInt")]),e._v(" "),a("td",[e._v("BigIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("LargeInt")]),e._v(" "),a("td",[e._v("LargeIntVal")])]),e._v(" "),a("tr",[a("td",[e._v("Float")]),e._v(" "),a("td",[e._v("FloatVal")])]),e._v(" "),a("tr",[a("td",[e._v("Double")]),e._v(" "),a("td",[e._v("DoubleVal")])]),e._v(" "),a("tr",[a("td",[e._v("Date")]),e._v(" "),a("td",[e._v("DateTimeVal")])]),e._v(" "),a("tr",[a("td",[e._v("Datetime")]),e._v(" "),a("td",[e._v("DateTimeVal")])]),e._v(" "),a("tr",[a("td",[e._v("Char")]),e._v(" "),a("td",[e._v("StringVal")])]),e._v(" "),a("tr",[a("td",[e._v("Varchar")]),e._v(" "),a("td",[e._v("StringVal")])]),e._v(" "),a("tr",[a("td",[e._v("Decimal")]),e._v(" "),a("td",[e._v("DecimalVal")])])])]),e._v(" "),a("h2",{attrs:{id:"compile-udf-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-udf-function"}},[e._v("#")]),e._v(" Compile UDF function")]),e._v(" "),a("p",[e._v("Since the UDF implementation relies on Doris' UDF framework, the first step in compiling UDF functions is to compile Doris, that is, the UDF framework.")]),e._v(" "),a("p",[e._v("After the compilation is completed, the static library file of the UDF framework will be generated. Then introduce the UDF framework dependency and compile the UDF.")]),e._v(" "),a("h3",{attrs:{id:"compile-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-doris"}},[e._v("#")]),e._v(" Compile Doris")]),e._v(" "),a("p",[e._v("Running "),a("code",[e._v("sh build.sh")]),e._v(" in the root directory of Doris will generate a static library file of the UDF framework "),a("code",[e._v("headers|libs")]),e._v(" in "),a("code",[e._v("output/udf/")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── output\n│ └── udf\n│ ├── include\n│ │ ├── uda_test_harness.h\n│ │ └── udf.h\n│ └── lib\n│ └── libDorisUdf.a\n\n")])])]),a("h3",{attrs:{id:"writing-udf-compilation-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-udf-compilation-files"}},[e._v("#")]),e._v(" Writing UDF compilation files")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Prepare thirdparty")]),e._v(" "),a("p",[e._v("The thirdparty folder is mainly used to store thirdparty libraries that users' UDF functions depend on, including header files and static libraries. It must contain the two files "),a("code",[e._v("udf.h")]),e._v(" and "),a("code",[e._v("libDorisUdf.a")]),e._v(" in the dependent Doris UDF framework.")]),e._v(" "),a("p",[e._v("Taking udf_sample as an example here, the source code is stored in the user's own "),a("code",[e._v("udf_samples")]),e._v(" directory. Create a thirdparty folder in the same directory to store the static library. The directory structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── thirdparty\n│  │── include\n│  │ └── udf.h\n│  └── lib\n│    └── libDorisUdf.a\n└── udf_samples\n\n")])])]),a("p",[a("code",[e._v("udf.h")]),e._v(" is the UDF frame header file. The storage path is "),a("code",[e._v("doris/output/udf/include/udf.h")]),e._v(". Users need to copy the header file in the Doris compilation output to their include folder of "),a("code",[e._v("thirdparty")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("libDorisUdf.a")]),e._v(" is a static library of UDF framework. After Doris is compiled, the file is stored in "),a("code",[e._v("doris/output/udf/lib/libDorisUdf.a")]),e._v(". The user needs to copy the file to the lib folder of his "),a("code",[e._v("thirdparty")]),e._v(".")]),e._v(" "),a("p",[e._v("*Note: The static library of UDF framework will not be generated until Doris is compiled.")])]),e._v(" "),a("li",[a("p",[e._v("Prepare to compile UDF's CMakeFiles.txt")]),e._v(" "),a("p",[e._v("CMakeFiles.txt is used to declare how UDF functions are compiled. Stored in the source code folder, level with user code. Here, taking udf_samples as an example, the directory structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── thirdparty\n└── udf_samples\n  ├── CMakeLists.txt\n  ├── uda_sample.cpp\n  ├── uda_sample.h\n  ├── udf_sample.cpp\n  └── udf_sample.h\n")])])]),a("ul",[a("li",[e._v("Need to show declaration reference "),a("code",[e._v("libDorisUdf.a")])]),e._v(" "),a("li",[e._v("Declare "),a("code",[e._v("udf.h")]),e._v(" header file location")])]),e._v(" "),a("p",[e._v("Take udf_sample as an example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Include udf\ninclude_directories(thirdparty/include)\n\n# Set all libraries\nadd_library(udf STATIC IMPORTED)\nset_target_properties(udf PROPERTIES IMPORTED_LOCATION thirdparty/lib/libDorisUdf.a)\n\n# where to put generated libraries\nset(LIBRARY_OUTPUT_PATH "${BUILD_DIR}/src/udf_samples")\n\n# where to put generated binaries\nset(EXECUTABLE_OUTPUT_PATH "${BUILD_DIR}/src/udf_samples")\n\nadd_library(udfsample SHARED udf_sample.cpp)\n    target_link_libraries(udfsample\n    udf\n    -static-libstdc++\n    -static-libgcc\n)\n\nadd_library(udasample SHARED uda_sample.cpp)\n    target_link_libraries(udasample\n    udf\n    -static-libstdc++\n    -static-libgcc\n)\n')])])]),a("p",[e._v("If the user's UDF function also depends on other thirdparty libraries, you need to declare include, lib, and add dependencies in "),a("code",[e._v("add_library")]),e._v(".")])])]),e._v(" "),a("p",[e._v("The complete directory structure after all files are prepared is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    ├── thirdparty\n    │ │── include\n    │ │ └── udf.h\n    │ └── lib\n    │ └── libDorisUdf.a\n    └── udf_samples\n      ├── CMakeLists.txt\n      ├── uda_sample.cpp\n      ├── uda_sample.h\n      ├── udf_sample.cpp\n      └── udf_sample.h\n")])])]),a("p",[e._v("Prepare the above files and you can compile UDF directly")]),e._v(" "),a("h3",{attrs:{id:"execute-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-compilation"}},[e._v("#")]),e._v(" Execute compilation")]),e._v(" "),a("p",[e._v("Create a build folder under the udf_samples folder to store the compilation output.")]),e._v(" "),a("p",[e._v("Run the command "),a("code",[e._v("cmake ../")]),e._v(" in the build folder to generate a Makefile, and execute make to generate the corresponding dynamic library.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── thirdparty\n├── udf_samples\n  └── build\n")])])]),a("h3",{attrs:{id:"compilation-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compilation-result"}},[e._v("#")]),e._v(" Compilation result")]),e._v(" "),a("p",[e._v("After the compilation is completed, the UDF dynamic link library is successfully generated. Under "),a("code",[e._v("build/src/")]),e._v(", taking udf_samples as an example, the directory structure is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── thirdparty\n├── udf_samples\n  └── build\n    └── src\n      └── udf_samples\n        ├── libudasample.so\n        └── libudfsample.so\n\n")])])]),a("h2",{attrs:{id:"create-udf-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-udf-function"}},[e._v("#")]),e._v(" Create UDF function")]),e._v(" "),a("p",[e._v("After following the above steps, you can get the UDF dynamic library (that is, the "),a("code",[e._v(".so")]),e._v(" file in the compilation result). You need to put this dynamic library in a location that can be accessed through the HTTP protocol.")]),e._v(" "),a("p",[e._v("Then log in to the Doris system and create a UDF function in the mysql-client through the "),a("code",[e._v("CREATE FUNCTION")]),e._v(" syntax. You need to have ADMIN authority to complete this operation. At this time, there will be a UDF created in the Doris system.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE [AGGREGATE] FUNCTION\nname ([argtype][,...])\n[RETURNS] rettype\nPROPERTIES (["key"="value"][,...])\n')])])]),a("p",[e._v("Description:")]),e._v(" "),a("ol",[a("li",[e._v('"Symbol" in PROPERTIES means that the symbol corresponding to the entry function is executed. This parameter must be set. You can get the corresponding symbol through the '),a("code",[e._v("nm")]),e._v(" command, for example, "),a("code",[e._v("_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_")]),e._v(" obtained by "),a("code",[e._v("nm libudfsample.so | grep AddUdf")]),e._v(" is the corresponding symbol.")]),e._v(" "),a("li",[e._v("The object_file in PROPERTIES indicates where it can be downloaded to the corresponding dynamic library. This parameter must be set.")]),e._v(" "),a("li",[e._v("name: A function belongs to a certain DB, and the name is in the form of "),a("code",[e._v("dbName")]),e._v("."),a("code",[e._v("funcName")]),e._v(". When "),a("code",[e._v("dbName")]),e._v(" is not explicitly specified, the db where the current session is located is used as "),a("code",[e._v("dbName")]),e._v(".")])]),e._v(" "),a("p",[e._v("For specific use, please refer to "),a("code",[e._v("CREATE FUNCTION")]),e._v(" for more detailed information.")]),e._v(" "),a("h2",{attrs:{id:"use-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-udf"}},[e._v("#")]),e._v(" Use UDF")]),e._v(" "),a("p",[e._v("Users must have the "),a("code",[e._v("SELECT")]),e._v(" permission of the corresponding database to use UDF/UDAF.")]),e._v(" "),a("p",[e._v("The use of UDF is consistent with ordinary function methods. The only difference is that the scope of built-in functions is global, and the scope of UDF is internal to DB. When the link session is inside the data, directly using the UDF name will find the corresponding UDF inside the current DB. Otherwise, the user needs to display the specified UDF database name, such as "),a("code",[e._v("dbName")]),e._v("."),a("code",[e._v("funcName")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"delete-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-udf"}},[e._v("#")]),e._v(" Delete UDF")]),e._v(" "),a("p",[e._v("When you no longer need UDF functions, you can delete a UDF function by the following command, you can refer to "),a("code",[e._v("DROP FUNCTION")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{999:function(t,e,n){"use strict";n.r(e);var a=n(56),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"create-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-function"}},[t._v("#")]),t._v(" CREATE FUNCTION")]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE [AGGREGATE] [ALIAS] FUNCTION function_name\n    (arg_type [, ...])\n    [RETURNS ret_type]\n    [INTERMEDIATE inter_type]\n    [WITH PARAMETER(param [,...]) AS origin_function]\n    [PROPERTIES ("key" = "value" [, ...]) ]\n')])])]),n("h3",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("AGGREGATE")]),t._v(": If this is the case, it means that the created function is an aggregate function.")]),t._v(" "),n("p",[n("code",[t._v("ALIAS")]),t._v(": If this is the case, it means that the created function is an alias function.")]),t._v(" "),n("p",[t._v("If the above two items are not present, it means that the created function is a scalar function.")]),t._v(" "),n("p",[n("code",[t._v("Function_name")]),t._v(": To create the name of the function, you can include the name of the database. For example: `db1.my_func'.")]),t._v(" "),n("p",[n("code",[t._v("arg_type")]),t._v(": The parameter type of the function is the same as the type defined at the time of table building. Variable-length parameters can be represented by "),n("code",[t._v(",...")]),t._v(". If it is a variable-length type, the type of the variable-length part of the parameters is the same as the last non-variable-length parameter type."),n("br"),t._v(" "),n("strong",[t._v("NOTICE")]),t._v(": "),n("code",[t._v("ALIAS FUNCTION")]),t._v(" variable-length parameters are not supported, and there is at least one parameter. In particular, the type "),n("code",[t._v("ALL")]),t._v(" refers to any data type and can only be used for "),n("code",[t._v("ALIAS FUNCTION")]),t._v(".")]),t._v(" "),n("p",[n("code",[t._v("ret_type")]),t._v(": Required for creating a new function. This parameter is not required if you are aliasing an existing function.")]),t._v(" "),n("p",[n("code",[t._v("inter_type")]),t._v(": A data type used to represent the intermediate stage of an aggregate function.")]),t._v(" "),n("p",[n("code",[t._v("param")]),t._v(": The parameter used to represent the alias function, containing at least one.")]),t._v(" "),n("p",[n("code",[t._v("origin_function")]),t._v(": Used to represent the original function corresponding to the alias function.")]),t._v(" "),n("p",[n("code",[t._v("properties")]),t._v(": Used to set properties related to aggregate function and scalar function. Properties that can be set include")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('      "Object_file": Custom function dynamic library URL path, currently only supports HTTP/HTTPS protocol, this path needs to remain valid throughout the life cycle of the function. This option is mandatory\n\n      "symbol": Function signature of scalar functions for finding function entries from dynamic libraries. This option is mandatory for scalar functions\n\n      "init_fn": Initialization function signature of aggregate function. Necessary for aggregation functions\n\n      "update_fn": Update function signature of aggregate function. Necessary for aggregation functions\n\n      "merge_fn": Merge function signature of aggregate function. Necessary for aggregation functions\n\n      "serialize_fn": Serialized function signature of aggregate function. For aggregation functions, it is optional, and if not specified, the default serialization function will be used\n\n      "finalize_fn": A function signature that aggregates functions to obtain the final result. For aggregation functions, it is optional. If not specified, the default fetch result function will be used.\n\n      "md5": The MD5 value of the function dynamic link library, which is used to verify that the downloaded content is correct. This option is optional\n\n      "prepare_fn": Function signature of the prepare function for finding the entry from the dynamic library. This option is optional for custom functions\n\n      "close_fn": Function signature of the close function for finding the entry from the dynamic library. This option is optional for custom functions\n')])])])]),t._v(" "),n("p",[t._v("This statement creates a custom function. Executing this command requires that the user have "),n("code",[t._v("ADMIN")]),t._v(" privileges.")]),t._v(" "),n("p",[t._v("If the "),n("code",[t._v("function_name")]),t._v(" contains the database name, the custom function will be created in the corresponding database, otherwise the function will be created in the database where the current session is located. The name and parameters of the new function cannot be the same as functions already existing in the current namespace, otherwise the creation will fail. But only with the same name and different parameters can the creation be successful.")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Create a custom scalar function")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n\t"symbol" = "_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"object_file" ="http://host:port/libmyadd.so"\n);\n')])])])]),t._v(" "),n("li",[n("p",[t._v("Create a custom scalar function with prepare/close functions")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE FUNCTION my_add(INT, INT) RETURNS INT PROPERTIES (\n\t"symbol" = \t"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n\t"prepare_fn" = "_ZN9doris_udf14AddUdf_prepareEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n\t"close_fn" = "_ZN9doris_udf12AddUdf_closeEPNS_15FunctionContextENS0_18FunctionStateScopeE",\n\t"object_file" = "http://host:port/libmyadd.so"\n);\n')])])])]),t._v(" "),n("li",[n("p",[t._v("Create a custom aggregation function")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE AGGREGATE FUNCTION my_count (BIGINT) RETURNS BIGINT PROPERTIES (\n    "init_fn"="_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE",\n    "update_fn"="_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE",\n    "merge_fn"="_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_",\n    "finalize_fn"="_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE",\n    "object_file"="http://host:port/libudasample.so"\n);\n')])])])]),t._v(" "),n("li",[n("p",[t._v("Create a scalar function with variable length parameters")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('CREATE FUNCTION strconcat(varchar, ...) RETURNS varchar properties (\n    "symbol" = "_ZN9doris_udf6StrConcatUdfEPNS_15FunctionContextERKNS_6IntValES4_",\n    "object_file" = "http://host:port/libmyStrConcat.so"\n);\n')])])])]),t._v(" "),n("li",[n("p",[t._v("Create a custom alias function")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("-- create a custom functional alias function\nCREATE ALIAS FUNCTION id_masking(INT) WITH PARAMETER(id) \n    AS CONCAT(LEFT(id, 3), '****', RIGHT(id, 4));\n\n-- create a custom cast alias function\nCREATE ALIAS FUNCTION string(ALL, INT) WITH PARAMETER(col, length) \n    AS CAST(col AS varchar(length));\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),n("p",[t._v("CREATE,FUNCTION")])])}),[],!1,null,null,null);e.default=i.exports}}]);
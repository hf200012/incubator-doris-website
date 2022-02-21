(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{945:function(e,t,s){"use strict";s.r(t);var r=s(56),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"set-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-password"}},[e._v("#")]),e._v(" SET PASSWORD")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("Syntax:")]),e._v(" "),s("p",[e._v("SET PASSWORD [FOR user_identity] =\n[PASSWORD('plain password')]|['hashed password']")]),e._v(" "),s("p",[e._v("The SET PASSWORD command can be used to modify a user's login password. If the [FOR user_identity] field does not exist, modify the password of the current user.")]),e._v(" "),s("p",[e._v("Note that the user_identity here must match exactly the user_identity specified when creating a user using CREATE USER, otherwise the user will be reported as non-existent. If user_identity is not specified, the current user is 'username'@'ip', which may not match any user_identity. The current user can be viewed through SHOW GRANTS.")]),e._v(" "),s("p",[e._v("PASSWORD () input is a plaintext password, and direct use of strings, you need to pass the encrypted password.\nIf you change the password of other users, you need to have administrator privileges.")]),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("ol",[s("li",[e._v("Modify the password of the current user")])]),e._v(" "),s("p",[e._v("SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Modify the specified user password")])]),e._v(" "),s("p",[e._v("SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'")]),e._v(" "),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("p",[e._v("SET, PASSWORD")])])}),[],!1,null,null,null);t.default=a.exports}}]);
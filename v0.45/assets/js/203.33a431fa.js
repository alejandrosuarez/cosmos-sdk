(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{736:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("In this section we describe the processing of messages for the authz module.")]),e._v(" "),a("h2",{attrs:{id:"msggrant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msggrant"}},[e._v("#")]),e._v(" MsgGrant")]),e._v(" "),a("p",[e._v("An authorization grant is created using the "),a("code",[e._v("MsgGrant")]),e._v(" message.\nIf there is already a grant for the "),a("code",[e._v("(granter, grantee, Authorization)")]),e._v(" triple, then the new grant will overwrite the previous one. To update or extend an existing grant, a new grant with the same "),a("code",[e._v("(granter, grantee, Authorization)")]),e._v(" triple should be created.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dHcmFudCB7CiAgc3RyaW5nIGdyYW50ZXIgPSAxOwogIHN0cmluZyBncmFudGVlID0gMjsKCiAgY29zbW9zLmF1dGh6LnYxYmV0YTEuR3JhbnQgZ3JhbnQgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),e._v(" "),a("p",[e._v("The message handling should fail if:")]),e._v(" "),a("ul",[a("li",[e._v("both granter and grantee have the same address.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("Expiration")]),e._v(" time is less than current unix timestamp.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("Grant.Authorization")]),e._v(" is not implemented.")]),e._v(" "),a("li",[a("code",[e._v("Authorization.MsgTypeURL()")]),e._v(" is not defined in the router (there is no defined handler in the app router to handle that Msg types).")])]),e._v(" "),a("h2",{attrs:{id:"msgrevoke"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgrevoke"}},[e._v("#")]),e._v(" MsgRevoke")]),e._v(" "),a("p",[e._v("A grant can be removed with the "),a("code",[e._v("MsgRevoke")]),e._v(" message.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dSZXZva2UgewogIHN0cmluZyBncmFudGVyICAgICAgPSAxOwogIHN0cmluZyBncmFudGVlICAgICAgPSAyOwogIHN0cmluZyBtc2dfdHlwZV91cmwgPSAzOwp9"}})],1),e._v(" "),a("p",[e._v("The message handling should fail if:")]),e._v(" "),a("ul",[a("li",[e._v("both granter and grantee have the same address.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("MsgTypeUrl")]),e._v(" is empty.")])]),e._v(" "),a("p",[e._v("NOTE: The "),a("code",[e._v("MsgExec")]),e._v(" message removes a grant if the grant has expired.")]),e._v(" "),a("h2",{attrs:{id:"msgexec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgexec"}},[e._v("#")]),e._v(" MsgExec")]),e._v(" "),a("p",[e._v("When a grantee wants to execute a transaction on behalf of a granter, they must send "),a("code",[e._v("MsgExec")]),e._v(".")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dFeGVjIHsKICBzdHJpbmcgZ3JhbnRlZSA9IDE7CiAgLy8gQXV0aG9yaXphdGlvbiBNc2cgcmVxdWVzdHMgdG8gZXhlY3V0ZS4gRWFjaCBtc2cgbXVzdCBpbXBsZW1lbnQgQXV0aG9yaXphdGlvbiBpbnRlcmZhY2UKICAvLyBUaGUgeC9hdXRoeiB3aWxsIHRyeSB0byBmaW5kIGEgZ3JhbnQgbWF0Y2hpbmcgKG1zZy5zaWduZXJzWzBdLCBncmFudGVlLCBNc2dUeXBlVVJMKG1zZykpCiAgLy8gdHJpcGxlIGFuZCB2YWxpZGF0ZSBpdC4KICByZXBlYXRlZCBnb29nbGUucHJvdG9idWYuQW55IG1zZ3MgPSAyIFsoY29zbW9zX3Byb3RvLmFjY2VwdHNfaW50ZXJmYWNlKSA9ICZxdW90O3Nkay5Nc2csIGF1dGh6LkF1dGhvcml6YXRpb24mcXVvdDtdOwp9"}})],1),e._v(" "),a("p",[e._v("The message handling should fail if:")]),e._v(" "),a("ul",[a("li",[e._v("provided "),a("code",[e._v("Authorization")]),e._v(" is not implemented.")]),e._v(" "),a("li",[e._v("grantee doesn't have permission to run the transaction.")]),e._v(" "),a("li",[e._v("if granted authorization is expired.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
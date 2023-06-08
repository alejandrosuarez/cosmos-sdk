(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{731:function(e,a,c){"use strict";c.r(a);var l=c(1),d=Object(l.a)({},(function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"concepts"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),c("h2",{attrs:{id:"grant"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[e._v("#")]),e._v(" Grant")]),e._v(" "),c("p",[c("code",[e._v("Grant")]),e._v(" is stored in the KVStore to record a grant with full context. Every grant will contain "),c("code",[e._v("granter")]),e._v(", "),c("code",[e._v("grantee")]),e._v(" and what kind of "),c("code",[e._v("allowance")]),e._v(" is granted. "),c("code",[e._v("granter")]),e._v(" is an account address who is giving permission to "),c("code",[e._v("grantee")]),e._v(" (the beneficiary account address) to pay for some or all of "),c("code",[e._v("grantee")]),e._v("'s transaction fees. "),c("code",[e._v("allowance")]),e._v(" defines what kind of fee allowance ("),c("code",[e._v("BasicAllowance")]),e._v(" or "),c("code",[e._v("PeriodicAllowance")]),e._v(", see below) is granted to "),c("code",[e._v("grantee")]),e._v(". "),c("code",[e._v("allowance")]),e._v(" accepts an interface which implements "),c("code",[e._v("FeeAllowanceI")]),e._v(", encoded as "),c("code",[e._v("Any")]),e._v(" type. There can be only one existing fee grant allowed for a "),c("code",[e._v("grantee")]),e._v(" and "),c("code",[e._v("granter")]),e._v(", self grants are not allowed.")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"ICAvLyBhbGxvd2FuY2UgY2FuIGJlIGFueSBvZiBiYXNpYywgcGVyaW9kaWMsIGFsbG93ZWQgZmVlIGFsbG93YW5jZS4KICBnb29nbGUucHJvdG9idWYuQW55IGFsbG93YW5jZSA9IDMgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90O107"}})],1),e._v(" "),c("p",[c("code",[e._v("FeeAllowanceI")]),e._v(" looks like:")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRmVlQWxsb3dhbmNlIGltcGxlbWVudGF0aW9ucyBhcmUgdGllZCB0byBhIGdpdmVuIGZlZSBkZWxlZ2F0b3IgYW5kIGRlbGVnYXRlZSwKLy8gYW5kIGFyZSB1c2VkIHRvIGVuZm9yY2UgZmVlIGdyYW50IGxpbWl0cy4KdHlwZSBGZWVBbGxvd2FuY2VJIGludGVyZmFjZSB7CgkvLyBBY2NlcHQgY2FuIHVzZSBmZWUgcGF5bWVudCByZXF1ZXN0ZWQgYXMgd2VsbCBhcyB0aW1lc3RhbXAgb2YgdGhlIGN1cnJlbnQgYmxvY2sKCS8vIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBwcm9jZXNzIHRoaXMuIFRoaXMgaXMgY2hlY2tlZCBpbgoJLy8gS2VlcGVyLlVzZUdyYW50ZWRGZWVzIGFuZCB0aGUgcmV0dXJuIHZhbHVlcyBzaG91bGQgbWF0Y2ggaG93IGl0IGlzIGhhbmRsZWQgdGhlcmUuCgkvLwoJLy8gSWYgaXQgcmV0dXJucyBhbiBlcnJvciwgdGhlIGZlZSBwYXltZW50IGlzIHJlamVjdGVkLCBvdGhlcndpc2UgaXQgaXMgYWNjZXB0ZWQuCgkvLyBUaGUgRmVlQWxsb3dhbmNlIGltcGxlbWVudGF0aW9uIGlzIGV4cGVjdGVkIHRvIHVwZGF0ZSBpdCdzIGludGVybmFsIHN0YXRlCgkvLyBhbmQgd2lsbCBiZSBzYXZlZCBhZ2FpbiBhZnRlciBhbiBhY2NlcHRhbmNlLgoJLy8KCS8vIElmIHJlbW92ZSBpcyB0cnVlIChyZWdhcmRsZXNzIG9mIHRoZSBlcnJvciksIHRoZSBGZWVBbGxvd2FuY2Ugd2lsbCBiZSBkZWxldGVkIGZyb20gc3RvcmFnZQoJLy8gKGVnLiB3aGVuIGl0IGlzIHVzZWQgdXApLiAoU2VlIGNhbGwgdG8gUmV2b2tlQWxsb3dhbmNlIGluIEtlZXBlci5Vc2VHcmFudGVkRmVlcykKCUFjY2VwdChjdHggc2RrLkNvbnRleHQsIGZlZSBzZGsuQ29pbnMsIG1zZ3MgW11zZGsuTXNnKSAocmVtb3ZlIGJvb2wsIGVyciBlcnJvcikKCgkvLyBWYWxpZGF0ZUJhc2ljIHNob3VsZCBldmFsdWF0ZSB0aGlzIEZlZUFsbG93YW5jZSBmb3IgaW50ZXJuYWwgY29uc2lzdGVuY3kuCgkvLyBEb24ndCBhbGxvdyBuZWdhdGl2ZSBhbW91bnRzLCBvciBuZWdhdGl2ZSBwZXJpb2RzIGZvciBleGFtcGxlLgoJVmFsaWRhdGVCYXNpYygpIGVycm9yCgoJLy8gRXhwaXJlc0F0IHJldHVybnMgdGhlIGV4cGlyeSB0aW1lIG9mIHRoZSBhbGxvd2FuY2UuCglFeHBpcmVzQXQoKSAoKnRpbWUuVGltZSwgZXJyb3IpCn0K"}})],1),e._v(" "),c("h2",{attrs:{id:"fee-allowance-types"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#fee-allowance-types"}},[e._v("#")]),e._v(" Fee Allowance types")]),e._v(" "),c("p",[e._v("There are two types of fee allowances present at the moment:")]),e._v(" "),c("ul",[c("li",[c("code",[e._v("BasicAllowance")])]),e._v(" "),c("li",[c("code",[e._v("PeriodicAllowance")])]),e._v(" "),c("li",[c("code",[e._v("AllowedMsgAllowance")])])]),e._v(" "),c("h2",{attrs:{id:"basicallowance"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#basicallowance"}},[e._v("#")]),e._v(" BasicAllowance")]),e._v(" "),c("p",[c("code",[e._v("BasicAllowance")]),e._v(" is permission for "),c("code",[e._v("grantee")]),e._v(" to use fee from a "),c("code",[e._v("granter")]),e._v("'s account. If any of the "),c("code",[e._v("spend_limit")]),e._v(" or "),c("code",[e._v("expiration")]),e._v(" reaches its limit, the grant will be removed from the state.")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ci8vIEJhc2ljQWxsb3dhbmNlIGltcGxlbWVudHMgQWxsb3dhbmNlIHdpdGggYSBvbmUtdGltZSBncmFudCBvZiB0b2tlbnMKLy8gdGhhdCBvcHRpb25hbGx5IGV4cGlyZXMuIFRoZSBncmFudGVlIGNhbiB1c2UgdXAgdG8gU3BlbmRMaW1pdCB0byBjb3ZlciBmZWVzLgptZXNzYWdlIEJhc2ljQWxsb3dhbmNlIHsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtGZWVBbGxvd2FuY2VJJnF1b3Q7OwoKICAvLyBzcGVuZF9saW1pdCBzcGVjaWZpZXMgdGhlIG1heGltdW0gYW1vdW50IG9mIHRva2VucyB0aGF0IGNhbiBiZSBzcGVudAogIC8vIGJ5IHRoaXMgYWxsb3dhbmNlIGFuZCB3aWxsIGJlIHVwZGF0ZWQgYXMgdG9rZW5zIGFyZSBzcGVudC4gSWYgaXQgaXMKICAvLyBlbXB0eSwgdGhlcmUgaXMgbm8gc3BlbmQgbGltaXQgYW5kIGFueSBhbW91bnQgb2YgY29pbnMgY2FuIGJlIHNwZW50LgogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBzcGVuZF9saW1pdCA9IDEKICAgICAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMmcXVvdDtdOwoKICAvLyBleHBpcmF0aW9uIHNwZWNpZmllcyBhbiBvcHRpb25hbCB0aW1lIHdoZW4gdGhpcyBhbGxvd2FuY2UgZXhwaXJlcwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgZXhwaXJhdGlvbiA9IDIgWyhnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTs="}})],1),e._v(" "),c("ul",[c("li",[c("p",[c("code",[e._v("spend_limit")]),e._v(" is the limit of coins that are allowed to be used from the "),c("code",[e._v("granter")]),e._v(" account. If it is empty, it assumes there's no spend limit, "),c("code",[e._v("grantee")]),e._v(" can use any number of available tokens from "),c("code",[e._v("granter")]),e._v(" account address before the expiration.")])]),e._v(" "),c("li",[c("p",[c("code",[e._v("expiration")]),e._v(" specifies an optional time when this allowance expires. If the value is left empty, there is no expiry for the grant.")])]),e._v(" "),c("li",[c("p",[e._v("When a grant is created with empty values for "),c("code",[e._v("spend_limit")]),e._v(" and "),c("code",[e._v("expiration")]),e._v(", it is still a valid grant. It won't restrict the "),c("code",[e._v("grantee")]),e._v(" to use any number of tokens from "),c("code",[e._v("granter")]),e._v(" and it won't have any expiration. The only way to restrict the "),c("code",[e._v("grantee")]),e._v(" is by revoking the grant.")])])]),e._v(" "),c("h2",{attrs:{id:"periodicallowance"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#periodicallowance"}},[e._v("#")]),e._v(" PeriodicAllowance")]),e._v(" "),c("p",[c("code",[e._v("PeriodicAllowance")]),e._v(" is a repeating fee allowance for the mentioned period, we can mention when the grant can expire as well as when a period can reset. We can also define the maximum number of coins that can be used in a mentioned period of time.")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGVyaW9kaWNBbGxvd2FuY2UgZXh0ZW5kcyBBbGxvd2FuY2UgdG8gYWxsb3cgZm9yIGJvdGggYSBtYXhpbXVtIGNhcCwKLy8gYXMgd2VsbCBhcyBhIGxpbWl0IHBlciB0aW1lIHBlcmlvZC4KbWVzc2FnZSBQZXJpb2RpY0FsbG93YW5jZSB7CiAgb3B0aW9uIChjb3Ntb3NfcHJvdG8uaW1wbGVtZW50c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90OzsKCiAgLy8gYmFzaWMgc3BlY2lmaWVzIGEgc3RydWN0IG9mIGBCYXNpY0FsbG93YW5jZWAKICBCYXNpY0FsbG93YW5jZSBiYXNpYyA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwoKICAvLyBwZXJpb2Qgc3BlY2lmaWVzIHRoZSB0aW1lIGR1cmF0aW9uIGluIHdoaWNoIHBlcmlvZF9zcGVuZF9saW1pdCBjb2lucyBjYW4KICAvLyBiZSBzcGVudCBiZWZvcmUgdGhhdCBhbGxvd2FuY2UgaXMgcmVzZXQKICBnb29nbGUucHJvdG9idWYuRHVyYXRpb24gcGVyaW9kID0gMiBbKGdvZ29wcm90by5zdGRkdXJhdGlvbikgPSB0cnVlLCAoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKCiAgLy8gcGVyaW9kX3NwZW5kX2xpbWl0IHNwZWNpZmllcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgY29pbnMgdGhhdCBjYW4gYmUgc3BlbnQKICAvLyBpbiB0aGUgcGVyaW9kCiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHBlcmlvZF9zcGVuZF9saW1pdCA9IDMKICAgICAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMmcXVvdDtdOwoKICAvLyBwZXJpb2RfY2FuX3NwZW5kIGlzIHRoZSBudW1iZXIgb2YgY29pbnMgbGVmdCB0byBiZSBzcGVudCBiZWZvcmUgdGhlIHBlcmlvZF9yZXNldCB0aW1lCiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIHBlcmlvZF9jYW5fc3BlbmQgPSA0CiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmNhc3RyZXBlYXRlZCkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zJnF1b3Q7XTsKCiAgLy8gcGVyaW9kX3Jlc2V0IGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoaXMgcGVyaW9kIHJlc2V0cyBhbmQgYSBuZXcgb25lIGJlZ2lucywKICAvLyBpdCBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIHN0YXJ0IHRpbWUgb2YgdGhlIGZpcnN0IHRyYW5zYWN0aW9uIGFmdGVyIHRoZQogIC8vIGxhc3QgcGVyaW9kIGVuZGVkCiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBwZXJpb2RfcmVzZXQgPSA1IFsoZ29nb3Byb3RvLnN0ZHRpbWUpID0gdHJ1ZSwgKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),c("ul",[c("li",[c("p",[c("code",[e._v("basic")]),e._v(" is the instance of "),c("code",[e._v("BasicAllowance")]),e._v(" which is optional for periodic fee allowance. If empty, the grant will have no "),c("code",[e._v("expiration")]),e._v(" and no "),c("code",[e._v("spend_limit")]),e._v(".")])]),e._v(" "),c("li",[c("p",[c("code",[e._v("period")]),e._v(" is the specific period of time, after each period passes, "),c("code",[e._v("period_spend_limit")]),e._v(" will be reset.")])]),e._v(" "),c("li",[c("p",[c("code",[e._v("period_spend_limit")]),e._v(" specifies the maximum number of coins that can be spent in the period.")])]),e._v(" "),c("li",[c("p",[c("code",[e._v("period_can_spend")]),e._v(" is the number of coins left to be spent before the period_reset time.")])]),e._v(" "),c("li",[c("p",[c("code",[e._v("period_reset")]),e._v(" keeps track of when a next period reset should happen.")])])]),e._v(" "),c("h2",{attrs:{id:"allowedmsgallowance"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#allowedmsgallowance"}},[e._v("#")]),e._v(" AllowedMsgAllowance")]),e._v(" "),c("p",[c("code",[e._v("AllowedMsgAllowance")]),e._v(" is a fee allowance, it can be any of "),c("code",[e._v("BasicFeeAllowance")]),e._v(", "),c("code",[e._v("PeriodicAllowance")]),e._v(" but restricted only to the allowed messages mentioned by the granter.")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gQWxsb3dlZE1zZ0FsbG93YW5jZSBjcmVhdGVzIGFsbG93YW5jZSBvbmx5IGZvciBzcGVjaWZpZWQgbWVzc2FnZSB0eXBlcy4KbWVzc2FnZSBBbGxvd2VkTXNnQWxsb3dhbmNlIHsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtGZWVBbGxvd2FuY2VJJnF1b3Q7OwoKICAvLyBhbGxvd2FuY2UgY2FuIGJlIGFueSBvZiBiYXNpYyBhbmQgcGVyaW9kaWMgZmVlIGFsbG93YW5jZS4KICBnb29nbGUucHJvdG9idWYuQW55IGFsbG93YW5jZSA9IDEgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RmVlQWxsb3dhbmNlSSZxdW90O107CgogIC8vIGFsbG93ZWRfbWVzc2FnZXMgYXJlIHRoZSBtZXNzYWdlcyBmb3Igd2hpY2ggdGhlIGdyYW50ZWUgaGFzIHRoZSBhY2Nlc3MuCiAgcmVwZWF0ZWQgc3RyaW5nIGFsbG93ZWRfbWVzc2FnZXMgPSAyOwp9"}})],1),e._v(" "),c("ul",[c("li",[c("p",[c("code",[e._v("allowance")]),e._v(" is either "),c("code",[e._v("BasicAllowance")]),e._v(" or "),c("code",[e._v("PeriodicAllowance")]),e._v(".")])]),e._v(" "),c("li",[c("p",[c("code",[e._v("allowed_messages")]),e._v(" is array of messages allowed to execute the given allowance.")])])]),e._v(" "),c("h2",{attrs:{id:"feegranter-flag"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#feegranter-flag"}},[e._v("#")]),e._v(" FeeGranter flag")]),e._v(" "),c("p",[c("code",[e._v("feegrant")]),e._v(" module introduces a "),c("code",[e._v("FeeGranter")]),e._v(" flag for CLI for the sake of executing transactions with fee granter. When this flag is set, "),c("code",[e._v("clientCtx")]),e._v(" will append the granter account address for transactions generated through CLI.")]),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWlmIGNsaWVudEN0eC5GZWVHcmFudGVyID09IG5pbCB8fCBmbGFnU2V0LkNoYW5nZWQoZmxhZ3MuRmxhZ0ZlZUdyYW50ZXIpIHsKCQlncmFudGVyLCBfIDo9IGZsYWdTZXQuR2V0U3RyaW5nKGZsYWdzLkZsYWdGZWVHcmFudGVyKQoKCQlpZiBncmFudGVyICE9ICZxdW90OyZxdW90OyB7CgkJCWdyYW50ZXJBY2MsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoZ3JhbnRlcikKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gY2xpZW50Q3R4LCBlcnIKCQkJfQoKCQkJY2xpZW50Q3R4ID0gY2xpZW50Q3R4LldpdGhGZWVHcmFudGVyQWRkcmVzcyhncmFudGVyQWNjKQoJCX0="}})],1),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CXR4LlNldEZlZUdyYW50ZXIoY2xpZW50Q3R4LkdldEZlZUdyYW50ZXJBZGRyZXNzKCkp"}})],1),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAodyAqd3JhcHBlcikgU2V0RmVlUGF5ZXIoZmVlUGF5ZXIgc2RrLkFjY0FkZHJlc3MpIHsKCWlmIHcudHguQXV0aEluZm8uRmVlID09IG5pbCB7CgkJdy50eC5BdXRoSW5mby5GZWUgPSAmYW1wO3R4LkZlZXt9Cgl9CgoJdy50eC5BdXRoSW5mby5GZWUuUGF5ZXIgPSBmZWVQYXllci5TdHJpbmcoKQoKCS8vIHNldCBhdXRoSW5mb0J6IHRvIG5pbCBiZWNhdXNlIHRoZSBjYWNoZWQgYXV0aEluZm9CeiBubyBsb25nZXIgbWF0Y2hlcyB0eC5BdXRoSW5mbwoJdy5hdXRoSW5mb0J6ID0gbmlsCn0="}})],1),e._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRmVlIGluY2x1ZGVzIHRoZSBhbW91bnQgb2YgY29pbnMgcGFpZCBpbiBmZWVzIGFuZCB0aGUgbWF4aW11bQovLyBnYXMgdG8gYmUgdXNlZCBieSB0aGUgdHJhbnNhY3Rpb24uIFRoZSByYXRpbyB5aWVsZHMgYW4gZWZmZWN0aXZlICZxdW90O2dhc3ByaWNlJnF1b3Q7LAovLyB3aGljaCBtdXN0IGJlIGFib3ZlIHNvbWUgbWltaW51bSB0byBiZSBhY2NlcHRlZCBpbnRvIHRoZSBtZW1wb29sLgptZXNzYWdlIEZlZSB7CiAgLy8gYW1vdW50IGlzIHRoZSBhbW91bnQgb2YgY29pbnMgdG8gYmUgcGFpZCBhcyBhIGZlZQogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgPSAxCiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmNhc3RyZXBlYXRlZCkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zJnF1b3Q7XTsKCiAgLy8gZ2FzX2xpbWl0IGlzIHRoZSBtYXhpbXVtIGdhcyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyYW5zYWN0aW9uIHByb2Nlc3NpbmcKICAvLyBiZWZvcmUgYW4gb3V0IG9mIGdhcyBlcnJvciBvY2N1cnMKICB1aW50NjQgZ2FzX2xpbWl0ID0gMjsKCiAgLy8gaWYgdW5zZXQsIHRoZSBmaXJzdCBzaWduZXIgaXMgcmVzcG9uc2libGUgZm9yIHBheWluZyB0aGUgZmVlcy4gSWYgc2V0LCB0aGUgc3BlY2lmaWVkIGFjY291bnQgbXVzdCBwYXkgdGhlIGZlZXMuCiAgLy8gdGhlIHBheWVyIG11c3QgYmUgYSB0eCBzaWduZXIgKGFuZCB0aHVzIGhhdmUgc2lnbmVkIHRoaXMgZmllbGQgaW4gQXV0aEluZm8pLgogIC8vIHNldHRpbmcgdGhpcyBmaWVsZCBkb2VzICpub3QqIGNoYW5nZSB0aGUgb3JkZXJpbmcgb2YgcmVxdWlyZWQgc2lnbmVycyBmb3IgdGhlIHRyYW5zYWN0aW9uLgogIHN0cmluZyBwYXllciA9IDMgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gaWYgc2V0LCB0aGUgZmVlIHBheWVyIChlaXRoZXIgdGhlIGZpcnN0IHNpZ25lciBvciB0aGUgdmFsdWUgb2YgdGhlIHBheWVyIGZpZWxkKSByZXF1ZXN0cyB0aGF0IGEgZmVlIGdyYW50IGJlIHVzZWQKICAvLyB0byBwYXkgZmVlcyBpbnN0ZWFkIG9mIHRoZSBmZWUgcGF5ZXIncyBvd24gYmFsYW5jZS4gSWYgYW4gYXBwcm9wcmlhdGUgZmVlIGdyYW50IGRvZXMgbm90IGV4aXN0IG9yIHRoZSBjaGFpbiBkb2VzCiAgLy8gbm90IHN1cHBvcnQgZmVlIGdyYW50cywgdGhpcyB3aWxsIGZhaWwKICBzdHJpbmcgZ3JhbnRlciA9IDQgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKfQ=="}})],1),e._v(" "),c("p",[e._v("Example cmd:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li9zaW1kIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgLS10aXRsZT0mcXVvdDtUZXN0IFByb3Bvc2FsJnF1b3Q7IC0tZGVzY3JpcHRpb249JnF1b3Q7TXkgYXdlc29tZSBwcm9wb3NhbCZxdW90OyAtLXR5cGU9JnF1b3Q7VGV4dCZxdW90OyAtLWZyb20gdmFsaWRhdG9yLWtleSAtLWZlZS1ncmFudGVyPWNvc21vczF4aDQ0aHh0N3NwcjY3aHFhYTdueXg1Z251dHJ6NWZyYXc2Z3J4biAtLWNoYWluLWlkPXRlc3RuZXQgLS1mZWVzPSZxdW90OzEwc3Rha2UmcXVvdDsK"}}),e._v(" "),c("h2",{attrs:{id:"granted-fee-deductions"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#granted-fee-deductions"}},[e._v("#")]),e._v(" Granted Fee Deductions")]),e._v(" "),c("p",[e._v("Fees are deducted from grants in the "),c("code",[e._v("x/auth")]),e._v(" ante handler. To learn more about how ante handlers work, read the "),c("RouterLink",{attrs:{to:"/auth/spec/03_antehandlers.html"}},[e._v("Auth Module AnteHandlers Guide")]),e._v(".")],1),e._v(" "),c("h2",{attrs:{id:"gas"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[e._v("#")]),e._v(" Gas")]),e._v(" "),c("p",[e._v("In order to prevent DoS attacks, using a filtered "),c("code",[e._v("x/feegrant")]),e._v(" incurs gas. The SDK must assure that the "),c("code",[e._v("grantee")]),e._v("'s transactions all conform to the filter set by the "),c("code",[e._v("granter")]),e._v(". The SDK does this by iterating over the allowed messages in the filter and charging 10 gas per filtered message. The SDK will then iterate over the messages being sent by the "),c("code",[e._v("grantee")]),e._v(" to ensure the messages adhere to the filter, also charging 10 gas per message. The SDK will stop iterating and fail the transaction if it finds a message that does not conform to the filter.")]),e._v(" "),c("p",[c("strong",[e._v("WARNING")]),e._v(": The gas is charged against the granted allowance. Ensure your messages conform to the filter, if any, before sending transactions using your allowance.")]),e._v(" "),c("h2",{attrs:{id:"pruning"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#pruning"}},[e._v("#")]),e._v(" Pruning")]),e._v(" "),c("p",[e._v("A queue in the state maintained with the prefix of expiration of the grants and checks them on EndBlock with the current block time for every block to prune.")])],1)}),[],!1,null,null,null);a.default=d.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{777:function(c,b,v){"use strict";v.r(b);var l=v(1),d=Object(l.a)({},(function(){var c=this,b=c.$createElement,v=c._self._c||b;return v("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[v("h1",{attrs:{id:"messages"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[c._v("#")]),c._v(" Messages")]),c._v(" "),v("h2",{attrs:{id:"proposal-submission"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposal-submission"}},[c._v("#")]),c._v(" Proposal Submission")]),c._v(" "),v("p",[c._v("Proposals can be submitted by any account via a "),v("code",[c._v("MsgSubmitProposal")]),c._v("\ntransaction.")]),c._v(" "),v("p",[v("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnU3VibWl0UHJvcG9zYWwgZGVmaW5lcyBhbiBzZGsuTXNnIHR5cGUgdGhhdCBzdXBwb3J0cyBzdWJtaXR0aW5nIGFyYml0cmFyeQovLyBwcm9wb3NhbCBDb250ZW50LgptZXNzYWdlIE1zZ1N1Ym1pdFByb3Bvc2FsIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uc3RyaW5nZXIpICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwoKICBnb29nbGUucHJvdG9idWYuQW55IGNvbnRlbnQgICAgICAgICAgICAgICAgICAgICAgID0gMSBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtDb250ZW50JnF1b3Q7XTsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gaW5pdGlhbF9kZXBvc2l0ID0gMiBbCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgICAgPSBmYWxzZSwKICAgIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMmcXVvdDssCiAgICAoZ29nb3Byb3RvLm1vcmV0YWdzKSAgICAgPSAmcXVvdDt5YW1sOlwmcXVvdDtpbml0aWFsX2RlcG9zaXRcJnF1b3Q7JnF1b3Q7CiAgXTsKICBzdHJpbmcgcHJvcG9zZXIgPSAzOwp9"}})],1),c._v(" "),v("p",[c._v("The "),v("code",[c._v("Content")]),c._v(" of a "),v("code",[c._v("MsgSubmitProposal")]),c._v(" message must have an appropriate router\nset in the governance module.")]),c._v(" "),v("p",[v("strong",[c._v("State modifications:")])]),c._v(" "),v("ul",[v("li",[c._v("Generate new "),v("code",[c._v("proposalID")])]),c._v(" "),v("li",[c._v("Create new "),v("code",[c._v("Proposal")])]),c._v(" "),v("li",[c._v("Initialise "),v("code",[c._v("Proposals")]),c._v(" attributes")]),c._v(" "),v("li",[c._v("Decrease balance of sender by "),v("code",[c._v("InitialDeposit")])]),c._v(" "),v("li",[c._v("If "),v("code",[c._v("MinDeposit")]),c._v(" is reached:\n"),v("ul",[v("li",[c._v("Push "),v("code",[c._v("proposalID")]),c._v(" in "),v("code",[c._v("ProposalProcessingQueue")])])])]),c._v(" "),v("li",[c._v("Transfer "),v("code",[c._v("InitialDeposit")]),c._v(" from the "),v("code",[c._v("Proposer")]),c._v(" to the governance "),v("code",[c._v("ModuleAccount")])])]),c._v(" "),v("p",[c._v("A "),v("code",[c._v("MsgSubmitProposal")]),c._v(" transaction can be handled according to the following\npseudocode.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUFNFVURPQ09ERSAvLwovLyBDaGVjayBpZiBNc2dTdWJtaXRQcm9wb3NhbCBpcyB2YWxpZC4gSWYgaXQgaXMsIGNyZWF0ZSBwcm9wb3NhbCAvLwoKdXBvbiByZWNlaXZpbmcgdHhHb3ZTdWJtaXRQcm9wb3NhbCBmcm9tIHNlbmRlciBkbwoKICBpZiAhY29ycmVjdGx5Rm9ybWF0dGVkKHR4R292U3VibWl0UHJvcG9zYWwpCiAgICAvLyBjaGVjayBpZiBwcm9wb3NhbCBpcyBjb3JyZWN0bHkgZm9ybWF0dGVkLiBJbmNsdWRlcyBmZWUgcGF5bWVudC4KICAgIHRocm93CgogIGluaXRpYWxEZXBvc2l0ID0gdHhHb3ZTdWJtaXRQcm9wb3NhbC5Jbml0aWFsRGVwb3NpdAogIGlmIChpbml0aWFsRGVwb3NpdC5BdG9tcyAmbHQ7PSAwKSBPUiAoc2VuZGVyLkF0b21CYWxhbmNlICZsdDsgaW5pdGlhbERlcG9zaXQuQXRvbXMpCiAgICAvLyBJbml0aWFsRGVwb3NpdCBpcyBuZWdhdGl2ZSBvciBudWxsIE9SIHNlbmRlciBoYXMgaW5zdWZmaWNpZW50IGZ1bmRzCiAgICB0aHJvdwoKICBpZiAodHhHb3ZTdWJtaXRQcm9wb3NhbC5UeXBlICE9IFByb3Bvc2FsVHlwZVBsYWluVGV4dCkgT1IgKHR4R292U3VibWl0UHJvcG9zYWwuVHlwZSAhPSBQcm9wb3NhbFR5cGVTb2Z0d2FyZVVwZ3JhZGUpCgogIHNlbmRlci5BdG9tQmFsYW5jZSAtPSBpbml0aWFsRGVwb3NpdC5BdG9tcwoKICBkZXBvc2l0UGFyYW0gPSBsb2FkKEdsb2JhbFBhcmFtcywgJ0RlcG9zaXRQYXJhbScpCgogIHByb3Bvc2FsSUQgPSBnZW5lcmF0ZSBuZXcgcHJvcG9zYWxJRAogIHByb3Bvc2FsID0gTmV3UHJvcG9zYWwoKQoKICBwcm9wb3NhbC5UaXRsZSA9IHR4R292U3VibWl0UHJvcG9zYWwuVGl0bGUKICBwcm9wb3NhbC5EZXNjcmlwdGlvbiA9IHR4R292U3VibWl0UHJvcG9zYWwuRGVzY3JpcHRpb24KICBwcm9wb3NhbC5UeXBlID0gdHhHb3ZTdWJtaXRQcm9wb3NhbC5UeXBlCiAgcHJvcG9zYWwuVG90YWxEZXBvc2l0ID0gaW5pdGlhbERlcG9zaXQKICBwcm9wb3NhbC5TdWJtaXRUaW1lID0gJmx0O0N1cnJlbnRUaW1lJmd0OwogIHByb3Bvc2FsLkRlcG9zaXRFbmRUaW1lID0gJmx0O0N1cnJlbnRUaW1lJmd0Oy5BZGQoZGVwb3NpdFBhcmFtLk1heERlcG9zaXRQZXJpb2QpCiAgcHJvcG9zYWwuRGVwb3NpdHMuYXBwZW5kKHtpbml0aWFsRGVwb3NpdCwgc2VuZGVyfSkKICBwcm9wb3NhbC5TdWJtaXR0ZXIgPSBzZW5kZXIKICBwcm9wb3NhbC5ZZXNWb3RlcyA9IDAKICBwcm9wb3NhbC5Ob1ZvdGVzID0gMAogIHByb3Bvc2FsLk5vV2l0aFZldG9Wb3RlcyA9IDAKICBwcm9wb3NhbC5BYnN0YWluVm90ZXMgPSAwCiAgcHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9IFByb3Bvc2FsU3RhdHVzT3BlbgoKICBzdG9yZShQcm9wb3NhbHMsICZsdDtwcm9wb3NhbElEfCdwcm9wb3NhbCcmZ3Q7LCBwcm9wb3NhbCkgLy8gU3RvcmUgcHJvcG9zYWwgaW4gUHJvcG9zYWxzIG1hcHBpbmcKICByZXR1cm4gcHJvcG9zYWxJRAo="}}),c._v(" "),v("h2",{attrs:{id:"deposit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[c._v("#")]),c._v(" Deposit")]),c._v(" "),v("p",[c._v("Once a proposal is submitted, if\n"),v("code",[c._v("Proposal.TotalDeposit < ActiveParam.MinDeposit")]),c._v(", Atom holders can send\n"),v("code",[c._v("MsgDeposit")]),c._v(" transactions to increase the proposal's deposit.")]),c._v(" "),v("p",[v("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRGVwb3NpdCBkZWZpbmVzIGEgbWVzc2FnZSB0byBzdWJtaXQgYSBkZXBvc2l0IHRvIGFuIGV4aXN0aW5nIHByb3Bvc2FsLgptZXNzYWdlIE1zZ0RlcG9zaXQgewogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5zdHJpbmdlcikgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgID0gZmFsc2U7CgogIHVpbnQ2NCAgIHByb3Bvc2FsX2lkID0gMSBbKGdvZ29wcm90by5qc29udGFnKSA9ICZxdW90O3Byb3Bvc2FsX2lkJnF1b3Q7LCAoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3Byb3Bvc2FsX2lkXCZxdW90OyZxdW90O107CiAgc3RyaW5nICAgZGVwb3NpdG9yICAgPSAyOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgPSAzCiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmNhc3RyZXBlYXRlZCkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zJnF1b3Q7XTsKfQ=="}})],1),c._v(" "),v("p",[v("strong",[c._v("State modifications:")])]),c._v(" "),v("ul",[v("li",[c._v("Decrease balance of sender by "),v("code",[c._v("deposit")])]),c._v(" "),v("li",[c._v("Add "),v("code",[c._v("deposit")]),c._v(" of sender in "),v("code",[c._v("proposal.Deposits")])]),c._v(" "),v("li",[c._v("Increase "),v("code",[c._v("proposal.TotalDeposit")]),c._v(" by sender's "),v("code",[c._v("deposit")])]),c._v(" "),v("li",[c._v("If "),v("code",[c._v("MinDeposit")]),c._v(" is reached:\n"),v("ul",[v("li",[c._v("Push "),v("code",[c._v("proposalID")]),c._v(" in "),v("code",[c._v("ProposalProcessingQueueEnd")])])])]),c._v(" "),v("li",[c._v("Transfer "),v("code",[c._v("Deposit")]),c._v(" from the "),v("code",[c._v("proposer")]),c._v(" to the governance "),v("code",[c._v("ModuleAccount")])])]),c._v(" "),v("p",[c._v("A "),v("code",[c._v("MsgDeposit")]),c._v(" transaction has to go through a number of checks to be valid.\nThese checks are outlined in the following pseudocode.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUFNFVURPQ09ERSAvLwovLyBDaGVjayBpZiBNc2dEZXBvc2l0IGlzIHZhbGlkLiBJZiBpdCBpcywgaW5jcmVhc2UgZGVwb3NpdCBhbmQgY2hlY2sgaWYgTWluRGVwb3NpdCBpcyByZWFjaGVkCgp1cG9uIHJlY2VpdmluZyB0eEdvdkRlcG9zaXQgZnJvbSBzZW5kZXIgZG8KICAvLyBjaGVjayBpZiBwcm9wb3NhbCBpcyBjb3JyZWN0bHkgZm9ybWF0dGVkLiBJbmNsdWRlcyBmZWUgcGF5bWVudC4KCiAgaWYgIWNvcnJlY3RseUZvcm1hdHRlZCh0eEdvdkRlcG9zaXQpCiAgICB0aHJvdwoKICBwcm9wb3NhbCA9IGxvYWQoUHJvcG9zYWxzLCAmbHQ7dHhHb3ZEZXBvc2l0LlByb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDspIC8vIHByb3Bvc2FsIGlzIGEgY29uc3Qga2V5LCBwcm9wb3NhbElEIGlzIHZhcmlhYmxlCgogIGlmIChwcm9wb3NhbCA9PSBuaWwpCiAgICAvLyBUaGVyZSBpcyBubyBwcm9wb3NhbCBmb3IgdGhpcyBwcm9wb3NhbElECiAgICB0aHJvdwoKICBpZiAodHhHb3ZEZXBvc2l0LkRlcG9zaXQuQXRvbXMgJmx0Oz0gMCkgT1LCoChzZW5kZXIuQXRvbUJhbGFuY2UgJmx0OyB0eEdvdkRlcG9zaXQuRGVwb3NpdC5BdG9tcykgT1IgKHByb3Bvc2FsLkN1cnJlbnRTdGF0dXMgIT0gUHJvcG9zYWxTdGF0dXNPcGVuKQoKICAgIC8vIGRlcG9zaXQgaXMgbmVnYXRpdmUgb3IgbnVsbAogICAgLy8gT1Igc2VuZGVyIGhhcyBpbnN1ZmZpY2llbnQgZnVuZHMKICAgIC8vIE9SIHByb3Bvc2FsIGlzIG5vdCBvcGVuIGZvciBkZXBvc2l0IGFueW1vcmUKCiAgICB0aHJvdwoKICBkZXBvc2l0UGFyYW0gPSBsb2FkKEdsb2JhbFBhcmFtcywgJ0RlcG9zaXRQYXJhbScpCgogIGlmIChDdXJyZW50QmxvY2sgJmd0Oz0gcHJvcG9zYWwuU3VibWl0QmxvY2sgKyBkZXBvc2l0UGFyYW0uTWF4RGVwb3NpdFBlcmlvZCkKICAgIHByb3Bvc2FsLkN1cnJlbnRTdGF0dXMgPSBQcm9wb3NhbFN0YXR1c0Nsb3NlZAoKICBlbHNlCiAgICAvLyBzZW5kZXIgY2FuIGRlcG9zaXQKICAgIHNlbmRlci5BdG9tQmFsYW5jZSAtPSB0eEdvdkRlcG9zaXQuRGVwb3NpdC5BdG9tcwoKICAgIHByb3Bvc2FsLkRlcG9zaXRzLmFwcGVuZCh7dHhHb3ZWb3RlLkRlcG9zaXQsIHNlbmRlcn0pCiAgICBwcm9wb3NhbC5Ub3RhbERlcG9zaXQuUGx1cyh0eEdvdkRlcG9zaXQuRGVwb3NpdCkKCiAgICBpZiAocHJvcG9zYWwuVG90YWxEZXBvc2l0ICZndDs9IGRlcG9zaXRQYXJhbS5NaW5EZXBvc2l0KQogICAgICAvLyBNaW5EZXBvc2l0IGlzIHJlYWNoZWQsIHZvdGUgb3BlbnMKCiAgICAgIHByb3Bvc2FsLlZvdGluZ1N0YXJ0QmxvY2sgPSBDdXJyZW50QmxvY2sKICAgICAgcHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9IFByb3Bvc2FsU3RhdHVzQWN0aXZlCiAgICAgIFByb3Bvc2FsUHJvY2Vzc2luZ1F1ZXVlLnB1c2godHhHb3ZEZXBvc2l0LlByb3Bvc2FsSUQpCgogIHN0b3JlKFByb3Bvc2FscywgJmx0O3R4R292Vm90ZS5Qcm9wb3NhbElEfCdwcm9wb3NhbCcmZ3Q7LCBwcm9wb3NhbCkK"}}),c._v(" "),v("h2",{attrs:{id:"vote"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[c._v("#")]),c._v(" Vote")]),c._v(" "),v("p",[c._v("Once "),v("code",[c._v("ActiveParam.MinDeposit")]),c._v(" is reached, voting period starts. From there,\nbonded Atom holders are able to send "),v("code",[c._v("MsgVote")]),c._v(" transactions to cast their\nvote on the proposal.")]),c._v(" "),v("p",[v("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVm90ZSBkZWZpbmVzIGEgbWVzc2FnZSB0byBjYXN0IGEgdm90ZS4KbWVzc2FnZSBNc2dWb3RlIHsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgICA9IGZhbHNlOwogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fc3RyaW5nZXIpID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uc3RyaW5nZXIpICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpICA9IGZhbHNlOwoKICB1aW50NjQgICAgIHByb3Bvc2FsX2lkID0gMSBbKGdvZ29wcm90by5qc29udGFnKSA9ICZxdW90O3Byb3Bvc2FsX2lkJnF1b3Q7LCAoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3Byb3Bvc2FsX2lkXCZxdW90OyZxdW90O107CiAgc3RyaW5nICAgICB2b3RlciAgICAgICA9IDI7CiAgVm90ZU9wdGlvbiBvcHRpb24gICAgICA9IDM7Cn0="}})],1),c._v(" "),v("p",[v("strong",[c._v("State modifications:")])]),c._v(" "),v("ul",[v("li",[c._v("Record "),v("code",[c._v("Vote")]),c._v(" of sender")])]),c._v(" "),v("p",[v("em",[c._v("Note: Gas cost for this message has to take into account the future tallying of the vote in EndBlocker")])]),c._v(" "),v("p",[c._v("Next is a pseudocode outline of the way "),v("code",[c._v("MsgVote")]),c._v(" transactions are\nhandled:")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAvLyBQU0VVRE9DT0RFIC8vCiAgLy8gQ2hlY2sgaWYgTXNnVm90ZSBpcyB2YWxpZC4gSWYgaXQgaXMsIGNvdW50IHZvdGUvLwoKICB1cG9uIHJlY2VpdmluZyB0eEdvdlZvdGUgZnJvbSBzZW5kZXIgZG8KICAgIC8vIGNoZWNrIGlmIHByb3Bvc2FsIGlzIGNvcnJlY3RseSBmb3JtYXR0ZWQuIEluY2x1ZGVzIGZlZSBwYXltZW50LgoKICAgIGlmICFjb3JyZWN0bHlGb3JtYXR0ZWQodHhHb3ZEZXBvc2l0KQogICAgICB0aHJvdwoKICAgIHByb3Bvc2FsID0gbG9hZChQcm9wb3NhbHMsICZsdDt0eEdvdkRlcG9zaXQuUHJvcG9zYWxJRHwncHJvcG9zYWwnJmd0OykKCiAgICBpZiAocHJvcG9zYWwgPT0gbmlsKQogICAgICAvLyBUaGVyZSBpcyBubyBwcm9wb3NhbCBmb3IgdGhpcyBwcm9wb3NhbElECiAgICAgIHRocm93CgoKICAgIGlmICAocHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9PSBQcm9wb3NhbFN0YXR1c0FjdGl2ZSkKCgogICAgICAgIC8vIFNlbmRlciBjYW4gdm90ZSBpZgogICAgICAgIC8vIFByb3Bvc2FsIGlzIGFjdGl2ZQogICAgICAgIC8vIFNlbmRlciBoYXMgc29tZSBib25kcwoKICAgICAgICBzdG9yZShHb3Zlcm5hbmNlLCAmbHQ7dHhHb3ZWb3RlLlByb3Bvc2FsSUR8J2FkZHJlc3Nlcyd8c2VuZGVyJmd0OywgdHhHb3ZWb3RlLlZvdGUpICAgLy8gVm90ZXJzIGNhbiB2b3RlIG11bHRpcGxlIHRpbWVzLiBSZS12b3Rpbmcgb3ZlcnJpZGVzIHByZXZpb3VzIHZvdGUuIFRoaXMgaXMgb2sgYmVjYXVzZSB0YWxseWluZyBpcyBkb25lIG9uY2UgYXQgdGhlIGVuZC4K"}})],1)}),[],!1,null,null,null);b.default=d.exports}}]);
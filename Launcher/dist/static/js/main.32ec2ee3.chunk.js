(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a(48)},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),l=(a(44),a(24)),i=a(25),c=a(30),d=a(29),m=a(54),g=a(50),u=a(51),f=a(52),h=a(53),p={fontSize:"1.5rem",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",textAlign:"center",marginTop:"1rem"},w={fontSize:"1.3rem",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",marginTop:"1rem",marginBottom:"0.7rem",color:"#07285c"},E={fontSize:"0.75rem",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",textAlign:"center",marginTop:"1rem"},b={fontSize:"1.1rem",paddingLeft:"0",paddingRight:"0",paddingTop:"0.2rem",paddingBottom:"0.2rem",marginTop:0,marginBottom:0,textAlign:"center"},y={fontSize:"1rem",paddingLeft:"0.7rem",paddingRight:"0.7rem",paddingTop:"0.1rem",paddingBottom:"0.1rem",marginTop:0,marginBottom:0,textAlign:"center"},v={fontSize:"1rem",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"1rem",marginTop:0,marginBottom:0,textAlign:"justify"},S={fontSize:"1rem",paddingLeft:"0",paddingRight:"0",paddingTop:"0.1rem",paddingBottom:"0.1rem",marginTop:0,marginBottom:0,textAlign:"center",color:"green",cursor:"pointer"},k={fontSize:"1.1rem",cursor:"pointer"},C=a(37),O=a(6),M=a(55),j=a(19),I=function(e){return r.a.createElement(j.a,{show:e.show,onHide:e.handleClose},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,e.heading)),r.a.createElement(j.a.Body,null,e.body),r.a.createElement(j.a.Footer,null,r.a.createElement("span",{style:{paddingRight:"0.5rem"}},e.footer),r.a.createElement(M.a,{variant:"secondary",disabled:e.isLoading,onClick:e.handleClose},"Close"),r.a.createElement(M.a,{variant:e.variant,disabled:e.isLoading,onClick:e.fireFunction},e.isLoading?"Processing":e.buttonToTrigger)))},x=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)({isError:!1,errorMessage:""}),i=Object(O.a)(l,2),c=i[0],d=(i[1],Object(n.useState)(!1)),g=Object(O.a)(d,2),u=g[0],f=g[1],h=function(){f(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{style:y},""===e.wm.note||void 0===e.wm.note?"-":e.wm.note),r.a.createElement("td",{style:v},e.wm.text.length<=200?e.wm.text:e.wm.text.substring(0,200)+".."),r.a.createElement("td",{style:y},new Date(e.wm.time).toISOString().substring(0,10)),r.a.createElement("td",{style:S,onClick:function(){chrome.runtime.sendMessage({message:"Open WordMark",wm:Object(C.a)({},e.wm)})}},"Visit"),r.a.createElement("td",{onClick:h,style:{textAlign:"center",padding:"0"}},r.a.createElement("svg",{className:"delete",width:"1rem",height:"1rem",viewBox:"0 0 1024 1024",onClick:h},r.a.createElement("path",{d:"M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"})))),u?r.a.createElement(I,{show:u,isLoading:o,handleClose:function(){return f(!1)},variant:"danger",fireFunction:function(){s(!0);var t=Object(m.a)(e.wms),a=t.findIndex((function(t){return t.id===e.wm.id}));t.splice(a,1);var n=Object(m.a)(e.appState.wordMarkInfo),r=Object(m.a)(e.appState.wmCategories);n[e.wm.category]=t,chrome.storage.sync.set({wordMark:n},(function(){if("General"!==e.wm.category&&"[]"===JSON.stringify(t)){var a=r.findIndex((function(t){return t===e.wm.category}));r.splice(a,1),chrome.storage.sync.set({wmCategories:r},(function(){e.set({wordMarkInfo:n,wmCategories:r}),s(!1),f(!1)}))}else e.set({wordMarkInfo:n,wmCategories:r}),s(!1),f(!1)}))},buttonToTrigger:"Delete",heading:"Delete WordMark",body:c.isError?c.errorMessage:"Are you sure you want to delete ?"}):null)},L=a(8),T=a(9),B=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)({isError:!1,errorMessage:""}),i=Object(O.a)(l,2),c=i[0],d=(i[1],Object(n.useState)(!1)),g=Object(O.a)(d,2),u=g[0],f=g[1],h=function(){f(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{style:y},""===e.bs.note||void 0===e.bs.note?"-":e.bs.note),r.a.createElement("td",{style:y},new Date(e.bs.date).toISOString().substring(0,10)),r.a.createElement("td",{style:S,onClick:function(){chrome.runtime.sendMessage({message:"Open Browser State",tabs:e.bs.tabs})}},"Visit"),r.a.createElement("td",{onClick:h,style:{textAlign:"center",padding:"0"}},r.a.createElement("svg",{className:"delete",width:"1rem",height:"1rem",viewBox:"0 0 1024 1024",onClick:h},r.a.createElement("path",{d:"M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"})))),u?r.a.createElement(I,{show:u,isLoading:o,handleClose:function(){return f(!1)},variant:"danger",fireFunction:function(){s(!0);var t=Object(m.a)(e.bss),a=t.findIndex((function(t){return t.note===e.bs.note}));t.splice(a,1);var n=Object(m.a)(e.appState.browserStateInfo),r=Object(m.a)(e.appState.bsCategories);n[e.bs.category]=t,chrome.storage.sync.set({session:n},(function(){if("General"!==e.bs.category&&"[]"===JSON.stringify(t)){var a=r.findIndex((function(t){return t===e.bs.category}));r.splice(a,1),chrome.storage.sync.set({categories:r},(function(){e.set({browserStateInfo:n,bsCategories:r}),s(!1),f(!1)}))}else e.set({browserStateInfo:n,bsCategories:r}),s(!1),f(!1)}))},buttonToTrigger:"Delete",heading:"Delete Browser Session",body:c.isError?c.errorMessage:"Are you sure you want to delete ?"}):null)},G=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)({isError:!1,errorMessage:""}),i=Object(O.a)(l,2),c=i[0],d=(i[1],Object(n.useState)(!1)),g=Object(O.a)(d,2),u=g[0],f=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{className:"deleteAll",width:"1.1rem",height:"1.1rem",viewBox:"0 0 1024 1024",onClick:function(){f(!0)}},r.a.createElement("path",{d:"M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"})),u?r.a.createElement(I,{show:u,isLoading:o,handleClose:function(){return f(!1)},variant:"danger",fireFunction:function(){s(!0);var t=Object(m.a)(e.appState.wordMarkInfo),a=Object(m.a)(e.appState.wmCategories);t[e.category]=void 0,chrome.storage.sync.set({wordMark:t},(function(){if("General"!==e.category){var n=a.findIndex((function(t){return t===e.category}));a.splice(n,1),chrome.storage.sync.set({wmCategories:a},(function(){e.set({wordMarkInfo:t,wmCategories:a}),s(!1),f(!1)}))}else e.set({wordMarkInfo:t,wmCategories:a}),s(!1),f(!1)}))},buttonToTrigger:"Delete",heading:"Delete Category",body:c.isError?c.errorMessage:"Are you sure you want to delete this category?"}):null)},z=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)({isError:!1,errorMessage:""}),i=Object(O.a)(l,2),c=i[0],d=(i[1],Object(n.useState)(!1)),g=Object(O.a)(d,2),u=g[0],f=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{className:"deleteAll",width:"1.1rem",height:"1.1rem",viewBox:"0 0 1024 1024",onClick:function(){f(!0)}},r.a.createElement("path",{d:"M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"})),u?r.a.createElement(I,{show:u,isLoading:o,handleClose:function(){return f(!1)},variant:"danger",fireFunction:function(){s(!0);var t=Object(m.a)(e.appState.browserStateInfo),a=Object(m.a)(e.appState.bsCategories);t[e.category]=void 0,chrome.storage.sync.set({session:t},(function(){if("General"!==e.category){var n=a.findIndex((function(t){return t===e.category}));a.splice(n,1),chrome.storage.sync.set({categories:a},(function(){e.set({browserStateInfo:t,bsCategories:a}),s(!1),f(!1)}))}else e.set({browserStateInfo:t,bsCategories:a}),s(!1),f(!1)}))},buttonToTrigger:"Delete",heading:"Delete Category",body:c.isError?c.errorMessage:"Are you sure you want to delete this category?"}):null)},D=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).indirectSetState=function(e){n.setState(e)},n.loading=function(e){return r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:E},r.a.createElement("span",null,"Loading ",e,"..")))},n.wmCategory=function(e,t){return r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a.Toggle,{as:T.a.Header,eventKey:"0"},r.a.createElement("span",{style:k},e),t?r.a.createElement(G,{category:e,set:n.indirectSetState,appState:n.state}):null),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(T.a.Body,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",{style:b},r.a.createElement("tr",null,r.a.createElement("th",{width:"25%"},"Remark"),r.a.createElement("th",{width:"40%"},"Text"),r.a.createElement("th",{width:"17%"},"Date"),r.a.createElement("th",{width:"9%"},"Visit"),r.a.createElement("th",{width:"9%"},"Action"))),r.a.createElement("tbody",null,n.state.wordMarkInfo[e].map((function(t,a){return r.a.createElement(x,{key:t.id,wm:t,set:n.indirectSetState,index:a,appState:n.state,wms:n.state.wordMarkInfo[e]})}))))):r.a.createElement("p",null,"No wordMarks under this category yet")))))))},n.bsCategory=function(e,t){return r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a.Toggle,{as:T.a.Header,eventKey:"0"},r.a.createElement("span",{style:k},e),t?r.a.createElement(z,{category:e,set:n.indirectSetState,appState:n.state}):null),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(T.a.Body,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",{style:b},r.a.createElement("tr",null,r.a.createElement("th",{width:"45%"},"Remark"),r.a.createElement("th",{width:"20%"},"Date"),r.a.createElement("th",{width:"20%"},"Visit"),r.a.createElement("th",{width:"15%"},"Delete"))),r.a.createElement("tbody",null,n.state.browserStateInfo[e].map((function(t,a){return r.a.createElement(B,{key:t.date,bs:t,set:n.indirectSetState,index:a,appState:n.state,bss:n.state.browserStateInfo[e]})}))))):r.a.createElement("p",null,"No wordMarks under this category yet")))))))},n.emptyPage=function(e){return r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:E},"Your "+e+" will appear here."))},n.state={browserStateInfo:{},wordMarkInfo:{},bsLoad:"loading",bsEmpty:!1,wmEmpty:!1,wmLoad:"loading",wmCategoriesLoad:"loading",bsCategoriesLoad:"loading",wmCategories:[],bsCategories:[]},console.log("categurlconstructor worked"),console.log("printing state",n.state),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={},a={},n="loading",r=!1,o=!1,s="loading",l=[],i=[];chrome.storage.sync.get("wordMark",(function(t){if(null===t.wordMark||void 0===t.wordMark)o=!0,s="loaded";else{var n=Object(m.a)(t.wordMark);a=n,s="loaded"}e.setState({wordMarkInfo:a,wmEmpty:o,wmLoad:s})})),chrome.storage.sync.get("session",(function(a){if(null===a.session||void 0===a.session)r=!0,n="loaded";else{var o=Object(m.a)(a.session);t=o,n="loaded"}e.setState({browserStateInfo:t,bsLoad:n,bsEmpty:r})})),chrome.storage.sync.get("wmCategories",(function(t){null===t.wmCategories||void 0===t.wmCategories||(l=Object(m.a)(t.wmCategories)),"loaded",e.setState({wmCategories:l,wmCategoriesLoad:"loaded"})})),chrome.storage.sync.get("categories",(function(t){null===t.categories||void 0===t.categories||(i=Object(m.a)(t.categories)),"loaded",e.setState({bsCategories:i,bsCategoriesLoad:"loaded"})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:p},"WordMark Launcher",r.a.createElement("hr",{style:{color:"#07285c",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0,backgroundColor:"#07285c",height:2}}))),r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:w},"Browser Sessions")),"loading"===this.state.bsLoad?this.loading("Browser States"):null,this.state.bsEmpty&&"loaded"===this.state.bsLoad&&"loaded"===this.state.bsCategoriesLoad?this.emptyPage("Browser States"):r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a.Toggle,{as:T.a.Header,eventKey:"0"},r.a.createElement("span",{style:k},"General"),"[]"===JSON.stringify(this.state.browserStateInfo.General)||null===this.state.browserStateInfo.General||void 0===this.state.browserStateInfo.General?null:r.a.createElement(z,{category:"General",set:this.indirectSetState,appState:this.state})),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(T.a.Body,null,"[]"===JSON.stringify(this.state.browserStateInfo.General)||null===this.state.browserStateInfo.General||void 0===this.state.browserStateInfo.General?r.a.createElement("p",null,"No browser sessions saved under this category yet"):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"45%"},"Remark"),r.a.createElement("th",{width:"20%"},"Date"),r.a.createElement("th",{width:"20%"},"Visit"),r.a.createElement("th",{width:"15%"},"Delete"))),r.a.createElement("tbody",null,this.state.browserStateInfo.General.map((function(t,a){return r.a.createElement(B,{key:t.date,bs:t,set:e.indirectSetState,index:a,appState:e.state,bss:e.state.browserStateInfo.General})}))))))))))),this.state.bsEmpty||"loaded"!==this.state.bsLoad||"loaded"!==this.state.bsCategoriesLoad?null:this.state.bsCategories.map((function(t,a){return Object.prototype.hasOwnProperty.call(e.state.browserStateInfo,t)?e.bsCategory(t,e.state.browserStateInfo[t].length):null})),r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:w},"WordMarks")),"loading"===this.state.wmLoad?this.loading("WordMarks"):null,this.state.wmEmpty&&"loaded"===this.state.wmLoad&&"loaded"===this.state.wmCategoriesLoad?this.emptyPage("WordMarks"):r.a.createElement(g.a,null,r.a.createElement(u.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a.Toggle,{as:T.a.Header,eventKey:"0"},r.a.createElement("span",{style:k},"General"),"[]"===JSON.stringify(this.state.wordMarkInfo.General)||null===this.state.wordMarkInfo.General||void 0===this.state.wordMarkInfo.General?null:r.a.createElement(G,{category:"General",set:this.indirectSetState,appState:this.state})),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(T.a.Body,null,"[]"===JSON.stringify(this.state.wordMarkInfo.General)||null===this.state.wordMarkInfo.General||void 0===this.state.wordMarkInfo.General?r.a.createElement("p",null,"No wordMarks saved under this category yet"):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",{style:b},r.a.createElement("tr",null,r.a.createElement("th",{width:"25%"},"Remark"),r.a.createElement("th",{width:"40%"},"Text"),r.a.createElement("th",{width:"17%"},"Date"),r.a.createElement("th",{width:"9%"},"Visit"),r.a.createElement("th",{width:"9%"},"Action"))),r.a.createElement("tbody",null,this.state.wordMarkInfo.General.map((function(t,a){return r.a.createElement(x,{key:t.id,wm:t,set:e.indirectSetState,index:a,appState:e.state,wms:e.state.wordMarkInfo.General})}))))))))))),this.state.wmEmpty||"loaded"!==this.state.wmLoad||"loaded"!==this.state.wmCategoriesLoad?null:this.state.wmCategories.map((function(t,a){return Object.prototype.hasOwnProperty.call(e.state.wordMarkInfo,t)?e.wmCategory(t,e.state.wordMarkInfo[t].length):null})))}}]),a}(n.Component),A=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(D,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
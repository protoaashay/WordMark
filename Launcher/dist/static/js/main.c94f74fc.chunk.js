(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,a){e.exports=a(78)},55:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),s=(a(55),a(23)),i=a(24),m=a(33),d=a(30),c=a(85),f=a(81),g=a(82),u=a(83),p=a(84),E={fontSize:"1.5rem",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",textAlign:"center",marginTop:"1rem"},h={fontSize:"1.3rem",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",marginTop:"1rem",marginBottom:"0.7rem",color:"#07285c"},y={fontSize:"0.75rem",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",textAlign:"center",marginTop:"1rem"},w={fontSize:"1.1rem",paddingLeft:"0",paddingRight:"0",paddingTop:"0.2rem",paddingBottom:"0.2rem",marginTop:0,marginBottom:0,textAlign:"center"},b={fontSize:"1rem",paddingLeft:"0",paddingRight:"0",paddingTop:"0.1rem",paddingBottom:"0.1rem",marginTop:0,marginBottom:0,textAlign:"center"},S={fontSize:"1rem",paddingLeft:"0",paddingRight:"0",paddingTop:"0.1rem",paddingBottom:"0.1rem",marginTop:0,marginBottom:0,textAlign:"center",color:"red",cursor:"pointer"},k={fontSize:"1rem",paddingLeft:"0",paddingRight:"0",paddingTop:"0.1rem",paddingBottom:"0.1rem",marginTop:0,marginBottom:0,textAlign:"center",color:"green",cursor:"pointer"},v={fontSize:"1.1rem",cursor:"pointer",color:"#ffffff",backgroundColor:"#07285c",fontWeight:"bold"},C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{style:b},e.wm.note),r.a.createElement("td",{style:b},e.wm.text.length<=20?e.wm.text:e.wm.text.substring(0,20)+".."),r.a.createElement("td",{style:b},new Date(e.wm.time).toDateString()),r.a.createElement("td",{style:k,onClick:function(){alert("view")}},"Visit"),r.a.createElement("td",{style:S,onClick:function(){alert("delete")}},"Delete")))},L=a(8),x=a(9),B=(a(56),a(36),a(76),a(20),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{style:b},e.bs.note),r.a.createElement("td",{style:b},new Date(e.bs.date).toDateString()),r.a.createElement("td",{style:k,onClick:function(){alert("view")}},"Visit"),r.a.createElement("td",{style:S,onClick:function(){alert("delete")}},"Delete")))}),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).indirectSetState=function(e){n.setState(e)},n.displayState=function(){return console.log(n.state)},n.loading=function(e){return r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:y},r.a.createElement("span",null,"Loading ",e,"..")))},n.wmCategory=function(e,t){return r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,null,r.a.createElement(x.a,null,r.a.createElement(L.a.Toggle,{as:x.a.Header,style:v,eventKey:"0"},e),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,t?r.a.createElement(u.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",{style:w},r.a.createElement("tr",null,r.a.createElement("th",null,"Note"),r.a.createElement("th",null,"Text"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Visit"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,n.state.wordMarkInfo[e].map((function(t,a){return r.a.createElement(C,{key:t.id,wm:t,set:n.indirectSetState,index:a,wms:n.state.wordMarkInfo[e]})})))):r.a.createElement("p",null,"No wordMarks under this category yet")))))))},n.bsCategory=function(e,t){return r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,null,r.a.createElement(x.a,null,r.a.createElement(L.a.Toggle,{as:x.a.Header,style:v,eventKey:"0"},e),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,t?r.a.createElement(u.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",{style:w},r.a.createElement("tr",null,r.a.createElement("th",null,"Note"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Visit"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,n.state.browserStateInfo[e].map((function(t,a){return r.a.createElement(B,{key:t.date,bs:t,set:n.indirectSetState,index:a,bss:n.state.browserStateInfo[e]})})))):r.a.createElement("p",null,"No wordMarks under this category yet")))))))},n.emptyPage=function(e){return r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:y},"Your "+e+" will appear here."))},n.state={browserStateInfo:{},wordMarkInfo:{},bsLoad:"loading",bsEmpty:!1,wmEmpty:!1,wmLoad:"loading",wmCategoriesLoad:"loading",bsCategoriesLoad:"loading",wmCategories:[],bsCategories:[]},console.log("categurlconstructor worked"),console.log("printing state",n.state),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={},a={},n="loading",r=!1,o=!1,l="loading",s=[],i=[];chrome.storage.sync.get("wordMark",(function(t){if(null===t.wordMark||void 0===t.wordMark)o=!0,l="loaded";else{var n=Object(c.a)(t.wordMark);a=n,l="loaded"}e.setState({wordMarkInfo:a,wmEmpty:o,wmLoad:l})})),chrome.storage.sync.get("session",(function(a){if(null===a.session||void 0===a.session)r=!0,n="loaded";else{var o=Object(c.a)(a.session);t=o,n="loaded"}e.setState({browserStateInfo:t,bsLoad:n,bsEmpty:r})})),chrome.storage.sync.get("wmCategories",(function(t){null===t.wmCategories||void 0===t.wmCategories?(alert("line46"),"loaded"):(s=Object(c.a)(t.wmCategories),"loaded"),e.setState({wmCategories:s,wmCategoriesLoad:"loaded"})})),chrome.storage.sync.get("categories",(function(t){null===t.categories||void 0===t.categories?(alert("line46"),"loaded"):(i=Object(c.a)(t.categories),"loaded"),e.setState({bsCategories:i,bsCategoriesLoad:"loaded"})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:E},"WordMark Launcher",r.a.createElement("hr",{style:{color:"#07285c",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0,backgroundColor:"#07285c",height:2}}))),r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:h},"Browser Sessions")),"loading"===this.state.bsLoad?this.loading("Browser States"):null,this.state.bsEmpty&&"loaded"===this.state.bsLoad&&"loaded"===this.state.bsCategoriesLoad?this.emptyPage("Browser States"):r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,{defaultActiveKey:"0"},r.a.createElement(x.a,null,r.a.createElement(L.a.Toggle,{as:x.a.Header,style:v,eventKey:"0"},"General"),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,"[]"===JSON.stringify(this.state.browserStateInfo.General)||null===this.state.browserStateInfo.General||void 0===this.state.browserStateInfo.General?r.a.createElement("p",null,"No browser sessions saved under this category yet"):r.a.createElement(u.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Note"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Visit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.state.browserStateInfo.General.map((function(t,a){return r.a.createElement(B,{key:t.date,bs:t,set:e.indirectSetState,index:a,bss:e.state.browserStateInfo.General})})))))))))),this.state.bsEmpty||"loaded"!==this.state.bsLoad||"loaded"!==this.state.bsCategoriesLoad?null:this.state.bsCategories.map((function(t,a){return Object.prototype.hasOwnProperty.call(e.state.browserStateInfo,t)?e.bsCategory(t,e.state.browserStateInfo[t].length):null})),r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:4,offset:4},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1},style:h},"WordMarks")),"loading"===this.state.wmLoad?this.loading("WordMarks"):null,this.state.wmEmpty&&"loaded"===this.state.wmLoad&&"loaded"===this.state.wmCategoriesLoad?this.emptyPage("WordMarks"):r.a.createElement(f.a,null,r.a.createElement(g.a,{md:{span:10,offset:1},lg:{span:10,offset:1},sm:{span:10,offset:1},xs:{span:10,offset:1}},r.a.createElement(L.a,{defaultActiveKey:"0"},r.a.createElement(x.a,null,r.a.createElement(L.a.Toggle,{as:x.a.Header,style:v,eventKey:"0"},"General"),r.a.createElement(L.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,"[]"===JSON.stringify(this.state.wordMarkInfo.General)||null===this.state.wordMarkInfo.General||void 0===this.state.wordMarkInfo.General?r.a.createElement("p",null,"No wordMarks saved under this category yet"):r.a.createElement(u.a,{responsive:!0,bordered:!0,style:{marginTop:"0.2rem"}},r.a.createElement("thead",{style:w},r.a.createElement("tr",null,r.a.createElement("th",null,"Note"),r.a.createElement("th",null,"Text"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Visit"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.state.wordMarkInfo.General.map((function(t,a){return r.a.createElement(C,{key:t.id,wm:t,set:e.indirectSetState,index:a,wms:e.state.wordMarkInfo.General})})))))))))),this.state.wmEmpty||"loaded"!==this.state.wmLoad||"loaded"!==this.state.wmCategoriesLoad?null:this.state.wmCategories.map((function(t,a){return Object.prototype.hasOwnProperty.call(e.state.wordMarkInfo,t)?e.wmCategory(t,e.state.wordMarkInfo[t].length):null})))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(I,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(77);l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
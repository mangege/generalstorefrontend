(this.webpackJsonpgeneralstorefrontend=this.webpackJsonpgeneralstorefrontend||[]).push([[0],{31:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),s=(a(36),a(37),a(7)),o=a(11),m=a(8),i=a(5),u=a.n(i),d="AuthToken";function E(e){u.a.defaults.headers.common["X-Token"]=e,localStorage.setItem(d,e)}var f=r.a.createContext({authToken:"",setAuthToken:function(){}}),b=(a(55),a(17)),p=a(28),v=a(12),h=a.n(v);var g=function(){var e=r.a.useContext(f),t=e.authToken,a=e.setAuthToken;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"\u89e3\u5fe7\u5357\u6742\u5e97"),""===t&&r.a.createElement(o.b,{className:"btn btn-outline-secondary",to:"/login"},"\u767b\u5f55"),""!==t&&r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){a(""),E("")}},"\u6ce8\u9500"))))};function N(){return r.a.createElement("ul",{className:"nav d-flex justify-content-between"},r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:"nav-link text-muted",href:"/"},"\u5927\u989d\u5238")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link text-muted",href:"/"},"\u9650\u91cf\u62a2")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link pr-0 text-muted",href:"/"},"\u5929\u732b\u56fd\u9645\u7cbe\u9009")))}function x(e){var t,a=e.item.attributes,n="".concat(a.pict_url,"_300x300Q90.jpg"),l="".concat(a.pict_url,"_300x300_.webp");return r.a.createElement("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-1"},r.a.createElement("div",{className:"card shadow-sm"},r.a.createElement("a",{href:a.referral_url},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:l,type:"image/webp"}),r.a.createElement("source",{srcSet:n,type:"image/jpeg"}),r.a.createElement("img",{src:n,className:"card-img-top",alt:a.title}))),r.a.createElement("div",{className:"card-body p-2 small"},r.a.createElement("div",{className:"mw-100 text-break text-truncate"},r.a.createElement("a",{className:"text-dark",href:a.referral_url},a.title)),r.a.createElement("div",{className:"text-dark d-flex justify-content-between"},r.a.createElement("span",null,"\xa5",r.a.createElement("span",{className:"font-weight-bold"},a.price)," ",r.a.createElement("span",{className:"text-muted"},"\xa5",r.a.createElement("del",null,a.orig_price))),r.a.createElement("span",{className:"text-muted"},"\u5df2\u552e ",(t=a.volume)>=1e4?"".concat((t/1e4).toFixed(0),"W"):t>=1e3?"".concat((t/1e3).toFixed(0),"K"):t)),r.a.createElement(h.a,{component:"button",className:"btn btn-primary btn-sm w-100 px-1","data-clipboard-text":a.referral_word},a.referral_word||"\u6682\u65e0\u53e3\u4ee4"))))}function k(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useRef)([]);function o(){var e=c.current;u.a.get("/api/items",{params:{item_ids:e.join(",")}}).then((function(e){c.current=e.data.data.map((function(e){return e.id})),l((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e.data.data))}))}))}return Object(n.useEffect)((function(){o()}),[]),r.a.createElement(p.a,{dataLength:a.length,next:function(){o()},hasMore:!0,loader:r.a.createElement("div",{className:" text-center"},r.a.createElement("div",{className:"spinner-border"},r.a.createElement("p",{className:"sr-only text-center"},"\u52a0\u8f7d\u4e2d..."))),endMessage:r.a.createElement("p",{className:"text-center"},"\u6ca1\u6709\u4e86!")},r.a.createElement("div",{className:"d-flex align-content-start flex-wrap py-1"},a.map((function(e){return r.a.createElement(x,{key:e.id,item:e})}))))}function w(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(N,null)),r.a.createElement("div",{className:"bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement(k,null))))}var j=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(w,null))};function y(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"alert alert-success",role:"alert"},"\u6ce8\u518c\u6210\u529f!\u70b9\u51fb\u4e0b\u6587\u590d\u5236\u6309\u94ae\u590d\u5236\u767b\u5f55\u53e3\u4ee4,\u8bf7\u59a5\u5584\u4fdd\u5b58\u60a8\u7684\u767b\u5f55\u53e3\u4ee4. ",r.a.createElement("br",null),"\u70b9\u767b\u5f55\u6309\u94ae\u5373\u53ef\u767b\u5f55."),r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"\u6ce8\u610f:\u9057\u5fd8\u767b\u5f55\u53e3\u4ee4\u65e0\u6cd5\u627e\u56de,\u5373\u5bf9\u5e94\u7528\u6237\u65e0\u6cd5\u767b\u5f55."))}var O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],d=o[1],b=Object(n.useState)(""),p=Object(s.a)(b,2),v=p[0],g=p[1],N=Object(m.f)(),x=r.a.useContext(f).setAuthToken;function k(){a&&36===a.length?u.a.post("/api/login",{uuid:a}).then((function(e){e.data.data&&e.data.data.attributes&&e.data.data.attributes.uuid===a?(g(""),x(a),E(a),N.push("/")):g("\u767b\u5f55\u5f02\u5e38")})).catch((function(e){e.response&&e.response.data&&e.response.data.msg?g(e.response.data.msg):g("\u767b\u5f55\u5f02\u5e38")})):g("\u767b\u5f55\u53e3\u4ee4\u65e0\u6548")}return r.a.createElement("div",{className:"login-page bg-light"},r.a.createElement("div",{className:"login-wrap"},i&&r.a.createElement(y,null),!!v&&r.a.createElement("div",{className:"alert alert-warning"},v),r.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&k()},placeholder:"\u767b\u5f55\u53e3\u4ee4"}),r.a.createElement("button",{className:"btn btn-secondary mt-2",onClick:function(){u.a.post("/api/users").then((function(e){e.data.data&&e.data.data.attributes&&e.data.data.attributes.uuid&&(g(""),d(!0),l(e.data.data.attributes.uuid))})).catch((function(e){g("\u6ce8\u518c\u5f02\u5e38")}))}},"\u6ce8\u518c"),r.a.createElement("button",{className:"btn btn-primary mt-2",onClick:k},"\u767b\u5f55"),i&&r.a.createElement(h.a,{component:"button",className:"btn btn-warning mt-2","data-clipboard-text":a},"\u590d\u5236\u767b\u5f55\u53e3\u4ee4"),r.a.createElement("div",{className:"alert alert-info mt-2",role:"alert"},"\u6ce8\u518c\u65e0\u9700\u586b\u5199\u4efb\u4f55\u4fe1\u606f,\u70b9\u51fb\u6ce8\u518c\u5373\u4f1a\u968f\u673a\u751f\u6210\u767b\u5f55\u53e3\u4ee4\u5e76\u6ce8\u518c!")))};u.a.defaults.baseURL="http://192.168.2.181:3000";var _=function(){var e=r.a.useState(""),t=Object(s.a)(e,2),a=t[0],n=t[1],l=localStorage.getItem(d)||"";return""!==l&&l!==a&&(u.a.defaults.headers.common["X-Token"]=l,n(l)),r.a.useEffect((function(){}),[a]),r.a.createElement(f.Provider,{value:{authToken:a,setAuthToken:n}},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/login"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a14ba30f.chunk.js.map
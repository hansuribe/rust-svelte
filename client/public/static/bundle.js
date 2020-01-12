var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){(null!=e||t.value)&&(t.value=e)}let $;function v(t){$=t}function b(){const t=$;return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,s)})}}}const w=[],y=[],_=[],x=[],k=Promise.resolve();let E=!1;function C(t){_.push(t)}function L(){const t=new Set;do{for(;w.length;){const t=w.shift();v(t),S(t.$$)}for(;y.length;)y.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];t.has(n)||(n(),t.add(n))}_.length=0}while(w.length);for(;x.length;)x.pop()();E=!1}function S(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(C))}const T=new Set;let N;function j(){N={r:0,c:[],p:N}}function O(){N.r||o(N.c),N=N.p}function D(t,e){t&&t.i&&(T.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),N.c.push(()=>{T.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function P(t,e){t.d(1),e.delete(t.key)}function R(t,n,r){const{fragment:c,on_mount:a,on_destroy:u,after_update:i}=t.$$;c.m(n,r),C(()=>{const n=a.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(C)}function M(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function J(t,e){t.$$.dirty||(w.push(t),E||(E=!0,k.then(L)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function H(e,s,r,c,a,u){const i=$;v(e);const d=s.props||{},l=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:n(),dirty:null};let f=!1;var p;l.ctx=r?r(e,d,(t,n)=>{l.ctx&&a(l.ctx[t],l.ctx[t]=n)&&(l.bound[t]&&l.bound[t](n),f&&J(e,t))}):d,l.update(),f=!0,o(l.before_update),l.fragment=c(l.ctx),s.target&&(s.hydrate?l.fragment.l((p=s.target,Array.from(p.childNodes))):l.fragment.c(),s.intro&&D(e.$$.fragment),R(e,s.target,s.anchor),L()),v(i)}class A{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function U(e){var n,o,s,r,c,p,h,g,$,v,b,w,y,_,x;return{c(){n=d("h1"),o=l(e.prettyType),s=f(),r=d("form"),(c=d("label")).textContent="Username",p=f(),h=d("input"),g=f(),($=d("label")).textContent="Password",v=f(),b=d("input"),w=f(),y=d("button"),_=l(e.prettyType),m(c,"for","username"),m(c,"class","svelte-d00odx"),m(h,"id","username"),m(h,"name","username"),m($,"for","password"),m($,"class","svelte-d00odx"),m(b,"id","password"),m(b,"name","password"),m(b,"type","password"),m(y,"type","submit"),m(y,"class","button svelte-d00odx"),m(r,"action",x="/user/"+e.type),m(r,"method","POST")},m(t,e){u(t,n,e),a(n,o),u(t,s,e),u(t,r,e),a(r,c),a(r,p),a(r,h),a(r,g),a(r,$),a(r,v),a(r,b),a(r,w),a(r,y),a(y,_)},p(t,e){t.type&&x!==(x="/user/"+e.type)&&m(r,"action",x)},i:t,o:t,d(t){t&&(i(n),i(s),i(r))}}}function V(t,e,n){let{type:o="login"}=e,s=o[0].toUpperCase()+o.slice(1);return t.$set=(t=>{"type"in t&&n("type",o=t.type)}),{type:o,prettyType:s}}class q extends A{constructor(t){super(),H(this,t,V,U,r,["type"])}}const B=[];function z(t,e){return{subscribe:F(t,e).subscribe}}function F(e,n=t){let o;const s=[];function c(t){if(r(e,t)&&(e=t,o)){const t=!B.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),B.push(n,e)}if(t){for(let t=0;t<B.length;t+=2)B[t][0](B[t+1]);B.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(r,a=t){const u=[r,a];return s.push(u),1===s.length&&(o=n(c)||t),r(e),()=>{const t=s.indexOf(u);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const G=z(Q()),K=z(""!==Q());function Q(){let t=decodeURIComponent(document.cookie).split(";").map(t=>t.trim()).find(t=>"logged-in-user="===t.substr(0,"logged-in-user=".length));return void 0===t?"":t.split("=")[1]}const W="/document",X=K?fetch(W).then(t=>200!==response.status?[]:response.json()):Promise.resolve([]),{set:Y,subscribe:Z,update:tt}=F([],t=>X.then(t));const et=new EventSource("/updates");function nt(t){let e=JSON.parse(t.data);tt(t=>[...t,e])}function ot(t){let e=JSON.parse(t.data);tt(t=>t.map(t=>t.id===e.id?e:t))}function st(t){let e=t.data;tt(t=>t.filter(t=>t.id!==e))}et.addEventListener("insert",nt),et.addEventListener("update",ot),et.addEventListener("delete",st),window.addEventListener("storage",function(t){"insert"===t.key?nt({data:t.newValue}):"update"===t.key?ot({data:t.newValue}):"delete"===t.key&&st({data:t.newValue})});const rt={create:async function(t){let e=await fetch(W,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});if(201!==e.status){let t=await e.text();throw new Error(`HTTP status ${e.status}, message '${t}'`)}let n={id:await e.text(),data:t};tt(t=>[...t,n]),localStorage.setItem("insert",JSON.stringify(n))},delete_:async function(t){let e=await fetch(`${W}/${t}`,{method:"DELETE"});if(200!==e.status){let t=await e.text();throw new Error(`HTTP status ${e.status}, message '${t}'`)}tt(e=>{const n=e.findIndex(e=>e.id===t);if(-1===n)throw new Error(`Expected to find id ${t}, but did not.`);return[...e.slice(0,n),...e.slice(n+1)]}),localStorage.setItem("delete",t)},subscribe:Z,put:async function(t){let{id:e,data:n}=t,o=await fetch(`${W}/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(n)});if(200!==o.status){let t=await o.text();throw new Error(`HTTP status ${o.status}, message '${t}'`)}tt(n=>{const o=n.findIndex(t=>t.id===e);if(-1===o)throw new Error(`Expected to find id ${e}, but did not.`);return[...n.slice(0,o),t,...n.slice(o+1)]}),localStorage.setItem("update",JSON.stringify(t))}};function ct(e){var n,s,r,c,$,v,b,w,y,_,x,k,E,C,L,S,T,N,j,O,D,I,P,R,M,J;return{c(){n=d("h2"),s=l(e.title),r=l(" document"),c=f(),$=d("form"),(v=d("label")).textContent="Date",b=f(),w=d("input"),y=f(),(_=d("label")).textContent="Description",x=f(),k=d("input"),E=f(),(C=d("label")).textContent="Amount",L=f(),S=d("input"),T=f(),(N=d("label")).textContent="Done",j=f(),O=d("input"),D=f(),I=d("div"),(P=d("button")).textContent="Save",R=f(),(M=d("button")).textContent="Cancel",m(n,"class","subtitle"),m(v,"for","date"),m(v,"class","svelte-belg7s"),m(w,"id","date"),m(w,"type","date"),m(_,"for","description"),m(_,"class","svelte-belg7s"),m(k,"id","description"),m(k,"type","text"),m(C,"for","amount"),m(C,"class","svelte-belg7s"),m(S,"id","amount"),m(S,"type","number"),m(N,"for","done"),m(N,"class","svelte-belg7s"),m(O,"id","done"),m(O,"type","checkbox"),m(P,"type","submit"),m(I,"class","action svelte-belg7s"),J=[p(w,"input",e.input0_input_handler),p(k,"input",e.input1_input_handler),p(S,"input",e.input2_input_handler),p(O,"change",e.input3_change_handler),p(M,"click",e.click_handler),p($,"submit",e.submit)]},m(t,o){u(t,n,o),a(n,s),a(n,r),u(t,c,o),u(t,$,o),a($,v),a($,b),a($,w),g(w,e.data.date),a($,y),a($,_),a($,x),a($,k),g(k,e.data.description),a($,E),a($,C),a($,L),a($,S),g(S,e.data.amount),a($,T),a($,N),a($,j),a($,O),O.checked=e.data.done,a($,D),a($,I),a(I,P),a(I,R),a(I,M)},p(t,e){t.title&&h(s,e.title),t.data&&g(w,e.data.date),t.data&&k.value!==e.data.description&&g(k,e.data.description),t.data&&g(S,e.data.amount),t.data&&(O.checked=e.data.done)},i:t,o:t,d(t){t&&(i(n),i(c),i($)),o(J)}}}function at(t,e,n){let{document:o}=e;const s=b();let r,c,a;return t.$set=(t=>{"document"in t&&n("document",o=t.document)}),t.$$.update=((t={document:1,isNew:1})=>{t.document&&n("data",r=o.data),t.document&&n("isNew",c=null===o.id),t.isNew&&n("title",a=c?"New":"Edit")}),{document:o,dispatch:s,submit:function(t){t.preventDefault(),c?rt.create(r).then(()=>s("done")):rt.put(o).then(()=>s("done"))},data:r,title:a,input0_input_handler:function(){r.date=this.value,n("data",r),n("document",o)},input1_input_handler:function(){r.description=this.value,n("data",r),n("document",o)},input2_input_handler:function(){var t;r.amount=""===(t=this.value)?void 0:+t,n("data",r),n("document",o)},input3_change_handler:function(){r.done=this.checked,n("data",r),n("document",o)},click_handler:function(){return s("done")}}}class ut extends A{constructor(t){super(),H(this,t,at,ct,r,["document"])}}function it(t,e,n){const o=Object.create(t);return o.doc=e[n],o}function dt(t){var e,n,o,s=[],r=new Map,c=t.$documents;const l=t=>t.doc.id;for(var p=0;p<c.length;p+=1){let e=it(t,c,p),n=l(e);r.set(n,s[p]=lt(n,e))}return{c(){for(e=d("table"),(n=d("thead")).innerHTML='<tr><th class="svelte-1fv41r1">date</th> <th class="svelte-1fv41r1">description</th> <th class="svelte-1fv41r1">amount</th> <th class="svelte-1fv41r1">done</th> <th class="svelte-1fv41r1">actions</th></tr>',o=f(),p=0;p<s.length;p+=1)s[p].c();m(e,"class","table svelte-1fv41r1")},m(t,r){for(u(t,e,r),a(e,n),a(e,o),p=0;p<s.length;p+=1)s[p].m(e,null)},p(t,n){const o=n.$documents;s=function(t,e,n,o,s,r,c,a,u,i,d,l){let f=t.length,p=r.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const g=[],$=new Map,v=new Map;for(m=p;m--;){const t=l(s,r,m),a=n(t);let u=c.get(a);u?o&&u.p(e,t):(u=i(a,t)).c(),$.set(a,g[m]=u),a in h&&v.set(a,Math.abs(m-h[a]))}const b=new Set,w=new Set;function y(t){D(t,1),t.m(a,d),c.set(t.key,t),d=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],o=e.key,s=n.key;e===n?(d=e.first,f--,p--):$.has(s)?!c.has(o)||b.has(o)?y(e):w.has(s)?f--:v.get(o)>v.get(s)?(w.add(o),y(e)):(b.add(s),f--):(u(n,c),f--)}for(;f--;){const e=t[f];$.has(e.key)||u(e,c)}for(;p;)y(g[p-1]);return g}(s,t,l,1,n,o,r,e,P,lt,null,it)},d(t){for(t&&i(e),p=0;p<s.length;p+=1)s[p].d()}}}function lt(t,e){var n,s,r,c,g,$,v,b,w,y,_,x,k,E,C,L,S,T,N,j=e.doc.data.date+"",O=e.doc.data.description+"",D=e.doc.data.amount+"",I=e.doc.data.done?"✅":"❌";function P(){return e.click_handler(e)}function R(){return e.click_handler_1(e)}return{key:t,first:null,c(){n=d("tr"),s=d("td"),r=l(j),c=f(),g=d("td"),$=l(O),v=f(),b=d("td"),w=l(D),y=f(),_=d("td"),x=l(I),k=f(),E=d("td"),(C=d("button")).textContent="Edit",L=f(),(S=d("button")).textContent="Delete",T=f(),m(s,"class","svelte-1fv41r1"),m(g,"class","svelte-1fv41r1"),m(b,"class","svelte-1fv41r1"),m(_,"class","svelte-1fv41r1"),m(C,"class","svelte-1fv41r1"),m(S,"class","svelte-1fv41r1"),m(E,"class","svelte-1fv41r1"),N=[p(C,"click",P),p(S,"click",R)],this.first=n},m(t,e){u(t,n,e),a(n,s),a(s,r),a(n,c),a(n,g),a(g,$),a(n,v),a(n,b),a(b,w),a(n,y),a(n,_),a(_,x),a(n,k),a(n,E),a(E,C),a(E,L),a(E,S),a(n,T)},p(t,n){e=n,t.$documents&&j!==(j=e.doc.data.date+"")&&h(r,j),t.$documents&&O!==(O=e.doc.data.description+"")&&h($,O),t.$documents&&D!==(D=e.doc.data.amount+"")&&h(w,D),t.$documents&&I!==(I=e.doc.data.done?"✅":"❌")&&h(x,I)},d(t){t&&i(n),o(N)}}}function ft(e){var n,o;return{c(){(n=d("button")).textContent="Create new document",o=p(n,"click",e.create)},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n),o()}}}function pt(t){var e,n=new ut({props:{document:t.document}});return n.$on("done",t.done),{c(){n.$$.fragment.c()},m(t,o){R(n,t,o),e=!0},p(t,e){var o={};t.document&&(o.document=e.document),n.$set(o)},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){M(n,t)}}}function mt(t){var e,n,o,s,r,c,a,p=t.$documents.length&&dt(t),m=[pt,ft],h=[];function g(t,e){return e.show_input_form?0:1}return s=g(0,t),r=h[s]=m[s](t),{c(){(e=d("h1")).textContent="Documents",n=f(),p&&p.c(),o=f(),r.c(),c=l("")},m(t,r){u(t,e,r),u(t,n,r),p&&p.m(t,r),u(t,o,r),h[s].m(t,r),u(t,c,r),a=!0},p(t,e){e.$documents.length?p?p.p(t,e):((p=dt(e)).c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null);var n=s;(s=g(0,e))===n?h[s].p(t,e):(j(),I(h[n],1,1,()=>{h[n]=null}),O(),(r=h[s])||(r=h[s]=m[s](e)).c(),D(r,1),r.m(c.parentNode,c))},i(t){a||(D(r),a=!0)},o(t){I(r),a=!1},d(t){t&&(i(e),i(n)),p&&p.d(t),t&&i(o),h[s].d(t),t&&i(c)}}}function ht(t,e,n){let o;c(t,rt,t=>{n("$documents",o=t)});let s=!1,r={};function a(t){n("document",r=t),n("show_input_form",s=!0)}function u(t){r.id===t&&(n("show_input_form",s=!1),n("document",r={})),rt.delete_(t)}return{show_input_form:s,document:r,create:function(){n("document",r={id:null,data:{date:"",description:"",amount:0,done:!1}}),n("show_input_form",s=!0)},edit:a,done:function(){n("show_input_form",s=!1),n("document",r={})},delete_:u,$documents:o,click_handler:function({doc:t}){return a(t)},click_handler_1:function({doc:t}){return u(t.id)}}}class gt extends A{constructor(t){super(),H(this,t,ht,mt,r,[])}}function $t(e){var n,o;return{c(){(n=d("button")).textContent="Register",m(n,"class","svelte-b1nvja"),o=p(n,"click",e.showRegisterDialog)},m(t,e){u(t,n,e)},p:t,d(t){t&&i(n),o()}}}function vt(e){var n,o;return{c(){(n=d("button")).textContent="Log in",m(n,"class","svelte-b1nvja"),o=p(n,"click",e.showLoginDialog)},m(t,e){u(t,n,e)},p:t,d(t){t&&i(n),o()}}}function bt(t){var e,n,o,s;return{c(){e=d("a"),n=l("Logout ("),o=l(t.$username),s=l(")"),m(e,"class","button svelte-b1nvja"),m(e,"href","/user/logout")},m(t,r){u(t,e,r),a(e,n),a(e,o),a(e,s)},p(t,e){t.$username&&h(o,e.$username)},d(t){t&&i(e)}}}function wt(t){var e,n=new q({props:{type:"register"}});return{c(){n.$$.fragment.c()},m(t,o){R(n,t,o),e=!0},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){M(n,t)}}}function yt(t){var e,n=new q({});return{c(){n.$$.fragment.c()},m(t,o){R(n,t,o),e=!0},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){M(n,t)}}}function _t(t){var e,n=new gt({});return{c(){n.$$.fragment.c()},m(t,o){R(n,t,o),e=!0},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){I(n.$$.fragment,t),e=!1},d(t){M(n,t)}}}function xt(t){var e,n,o,s,r,c,l,p,h,g,$;function v(t,e){return e.$loggedIn?bt:e.showRegister?vt:e.showLogin?$t:void 0}var b=v(0,t),w=b&&b(t),y=[_t,yt,wt],_=[];function x(t,e){return e.$loggedIn?0:e.showLogin?1:e.showRegister?2:-1}return~(h=x(0,t))&&(g=_[h]=y[h](t)),{c(){e=d("header"),(n=d("div")).innerHTML='<a href="/">actix crud</a>',o=f(),s=d("div"),r=f(),c=d("div"),w&&w.c(),l=f(),p=d("main"),g&&g.c(),m(n,"class","brand svelte-b1nvja"),m(s,"class","menu"),m(c,"class","login"),m(e,"class","svelte-b1nvja"),m(p,"class","svelte-b1nvja")},m(t,i){u(t,e,i),a(e,n),a(e,o),a(e,s),a(e,r),a(e,c),w&&w.m(c,null),u(t,l,i),u(t,p,i),~h&&_[h].m(p,null),$=!0},p(t,e){b===(b=v(0,e))&&w?w.p(t,e):(w&&w.d(1),(w=b&&b(e))&&(w.c(),w.m(c,null)));var n=h;(h=x(0,e))!==n&&(g&&(j(),I(_[n],1,1,()=>{_[n]=null}),O()),~h?((g=_[h])||(g=_[h]=y[h](e)).c(),D(g,1),g.m(p,null)):g=null)},i(t){$||(D(g),$=!0)},o(t){I(g),$=!1},d(t){t&&i(e),w&&w.d(),t&&(i(l),i(p)),~h&&_[h].d()}}}function kt(t,e,n){let o,s;c(t,K,t=>{n("$loggedIn",o=t)}),c(t,G,t=>{n("$username",s=t)});let r=!o,a=!1;return{showLogin:r,showRegister:a,showLoginDialog:function(){n("showRegister",a=!1),n("showLogin",r=!0)},showRegisterDialog:function(){n("showLogin",r=!1),n("showRegister",a=!0)},$loggedIn:o,$username:s}}return new class extends A{constructor(t){super(),H(this,t,kt,xt,r,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

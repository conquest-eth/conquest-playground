var dt=Object.defineProperty,pt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var qe=(n,e,t)=>e in n?dt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Fe=(n,e)=>{for(var t in e||(e={}))vt.call(e,t)&&qe(n,t,e[t]);if(Ue)for(var t of Ue(e))ht.call(e,t)&&qe(n,t,e[t]);return n},He=(n,e)=>pt(n,mt(e));import{G as Je,F as gt,H as wt,S as Z,i as ee,s as te,d as j,v as ne,I as Ye,e as _,n as P,t as oe,J as q,c as b,f as g,g as u,q as V,l as se,K as F,h as l,j as v,k as A,L as d,M as ce,m as Ge,N as B,O as ge,P as we,z as ue,A as fe,B as de,x as O,u as W,E as pe,r as Ke,w as Xe,o as _e,Q as _t,R as bt,T as kt,p as be,U as Qe,V as yt,W as Et,X as $t,Y as xt,Z as Nt}from"../chunks/vendor-e78c39f1.js";import{b as ye}from"../chunks/paths-28a87002.js";import{n as ke,w as jt}from"../chunks/wallet-c826be1b.js";import{a as Ze}from"../chunks/account-c0a26acd.js";import{d as Lt,s as St,f as Ee}from"../chunks/config-af7f3a10.js";import{r as et,u as Dt}from"../chunks/url-09d70f02.js";import{l as tt}from"../chunks/logo-8502b062.js";import{n as $e,p as xe}from"../chunks/stores-2f0e30ab.js";/* empty css                                                      */import"../chunks/contracts-69d01f63.js";import"../chunks/privateWallet-7a0cfca0.js";import"../chunks/base-652be6d9.js";const Ne=gt({registration:void 0,updateAvailable:!1}),H=He(Fe({},Ne),{get registration(){return Je(Ne).registration},get updateAvailable(){return Je(Ne).updateAvailable}});typeof window!="undefined"&&(window.serviceWorker=H);const U=wt("service-worker");function je(n){n&&(U.enabled?U.debug(`enabling logging for service worker, level: ${U.level}`):U.debug(`disabling logging for service worker, level: ${U.level}`),n.postMessage({type:"debug",level:U.level,enabled:U.enabled}))}const It=3*60*1e3,Bt=30*60*1e3;function Pt(n){let e=performance.now();function t(){const s=performance.now();s-e>It&&n.update(),e=s}["focus","pointerdown"].forEach(s=>window.addEventListener(s,t)),setInterval(()=>n.update(),Bt)}function Vt(n,e){function t(){n.installing.addEventListener("statechange",function(){this.state==="installed"&&e(n)})}if(!!n){if(n.waiting)return e(n);n.installing?t():n.addEventListener("updatefound",t)}}if(typeof navigator!="undefined"&&"serviceWorker"in navigator){let n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{n||(n=!0,window.location.reload())}),window.addEventListener("load",function(){const e=`${ye}/service-worker.js`;navigator.serviceWorker.register(e).then(t=>{try{Pt(t)}catch{}H.set({registration:t,updateAvailable:!1}),je(t.installing),je(t.waiting),je(t.active),Vt(t,()=>{U.log("[Service Worker] Update found"),H.set({registration:t,updateAvailable:!0})})}).catch(t=>{U.log(t)})})}const S="src/lib/components/notification/Notification.svelte";function nt(n){let e,t;const s={c:function(){e=q("svg"),t=q("path"),this.h()},l:function(o){e=F(o,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var r=g(e);t=F(r,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(t).forEach(u),r.forEach(u),this.h()},h:function(){l(t,"fill-rule","evenodd"),l(t,"d","M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"),l(t,"clip-rule","evenodd"),v(t,S,37,14,1301),l(e,"class","h-5 w-5 text-red-400"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"viewBox","0 0 20 20"),l(e,"fill","currentColor"),v(e,S,31,12,1108)},m:function(o,r){A(o,e,r),d(e,t)},d:function(o){o&&u(e)}};return j("SvelteRegisterBlock",{block:s,id:nt.name,type:"else",source:"(30:10) {:else}",ctx:n}),s}function ot(n){let e,t;const s={c:function(){e=q("svg"),t=q("path"),this.h()},l:function(o){e=F(o,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0});var r=g(e);t=F(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(t).forEach(u),r.forEach(u),this.h()},h:function(){l(t,"stroke-linecap","round"),l(t,"stroke-linejoin","round"),l(t,"stroke-width","2"),l(t,"d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"),v(t,S,22,14,813),l(e,"class","h-6 w-6 text-green-400"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),v(e,S,15,12,590)},m:function(o,r){A(o,e,r),d(e,t)},d:function(o){o&&u(e)}};return j("SvelteRegisterBlock",{block:s,id:ot.name,type:"if",source:"(14:10) {#if type !== 'error'}",ctx:n}),s}function Le(n){let e,t,s,i,o,r,c,f,w,E,m,y,h,$,x,a,p,J,K;function C(R,k){return R[2]!=="error"?ot:nt}let I=C(n),N=I(n);const X={c:function(){e=_("div"),t=_("div"),s=_("div"),i=_("div"),o=_("div"),N.c(),r=P(),c=_("div"),f=_("p"),w=oe(n[0]),E=P(),m=_("p"),y=oe(n[1]),h=P(),$=_("div"),x=_("button"),a=q("svg"),p=q("path"),this.h()},l:function(k){e=b(k,"DIV",{class:!0});var L=g(e);t=b(L,"DIV",{class:!0});var Q=g(t);s=b(Q,"DIV",{class:!0});var ie=g(s);i=b(ie,"DIV",{class:!0});var M=g(i);o=b(M,"DIV",{class:!0});var Y=g(o);N.l(Y),Y.forEach(u),r=V(M),c=b(M,"DIV",{class:!0});var T=g(c);f=b(T,"P",{class:!0});var G=g(f);w=se(G,n[0]),G.forEach(u),E=V(T),m=b(T,"P",{class:!0});var re=g(m);y=se(re,n[1]),re.forEach(u),T.forEach(u),h=V(M),$=b(M,"DIV",{class:!0});var ae=g($);x=b(ae,"BUTTON",{class:!0});var z=g(x);a=F(z,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var le=g(a);p=F(le,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(p).forEach(u),le.forEach(u),z.forEach(u),ae.forEach(u),M.forEach(u),ie.forEach(u),Q.forEach(u),L.forEach(u),this.h()},h:function(){l(o,"class","flex-shrink-0"),v(o,S,12,8,468),l(f,"class","text-sm leading-5 font-medium text-gray-900 dark:text-gray-300"),v(f,S,46,10,1737),l(m,"class","mt-1 text-sm leading-5 text-gray-500"),v(m,S,49,10,1857),l(c,"class","ml-3 w-0 flex-1 pt-0.5"),v(c,S,45,8,1690),l(p,"fill-rule","evenodd"),l(p,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),l(p,"clip-rule","evenodd"),v(p,S,58,14,2318),l(a,"class","h-5 w-5"),l(a,"xmlns","http://www.w3.org/2000/svg"),l(a,"viewBox","0 0 20 20"),l(a,"fill","currentColor"),v(a,S,57,12,2207),l(x,"class","inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"),v(x,S,52,10,1987),l($,"class","ml-4 flex-shrink-0 flex"),v($,S,51,8,1939),l(i,"class","flex items-start"),v(i,S,11,6,429),l(s,"class","p-4"),v(s,S,10,4,405),l(t,"class","rounded-lg shadow-xs overflow-hidden dark:border-pink-500 dark:border-2"),v(t,S,9,2,315),l(e,"class","max-w-sm w-full dark:bg-black bg-white shadow-lg rounded-lg pointer-events-auto"),v(e,S,8,0,219)},m:function(k,L){A(k,e,L),d(e,t),d(t,s),d(s,i),d(i,o),N.m(o,null),d(i,r),d(i,c),d(c,f),d(f,w),d(c,E),d(c,m),d(m,y),d(i,h),d(i,$),d($,x),d(x,a),d(a,p),J||(K=ce(x,"click",n[3],!1,!1,!1),J=!0)},p:function(k,[L]){I!==(I=C(k))&&(N.d(1),N=I(k),N&&(N.c(),N.m(o,null))),L&1&&Ge(w,k[0]),L&2&&Ge(y,k[1])},i:B,o:B,d:function(k){k&&u(e),N.d(),J=!1,K()}};return j("SvelteRegisterBlock",{block:X,id:Le.name,type:"component",source:"",ctx:n}),X}function At(n,e,t){let{$$slots:s={},$$scope:i}=e;ne("Notification",s,[]);let{title:o}=e,{text:r}=e,{type:c="info"}=e;const f=Ye(),w=()=>f("close"),E=["title","text","type"];return Object.keys(e).forEach(m=>{!~E.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<Notification> was created with unknown prop '${m}'`)}),n.$$set=m=>{"title"in m&&t(0,o=m.title),"text"in m&&t(1,r=m.text),"type"in m&&t(2,c=m.type)},n.$capture_state=()=>({createEventDispatcher:Ye,title:o,text:r,type:c,dispatch:f,close:w}),n.$inject_state=m=>{"title"in m&&t(0,o=m.title),"text"in m&&t(1,r=m.text),"type"in m&&t(2,c=m.type)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[o,r,c,w]}class st extends Z{constructor(e){super(e);ee(this,e,At,Le,te,{title:0,text:1,type:2}),j("SvelteRegisterComponent",{component:this,tagName:"Notification",options:e,id:Le.name});const{ctx:t}=this.$$,s=e.props||{};t[0]===void 0&&!("title"in s)&&console.warn("<Notification> was created without expected prop 'title'"),t[1]===void 0&&!("text"in s)&&console.warn("<Notification> was created without expected prop 'text'")}get title(){throw new Error("<Notification>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<Notification>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get text(){throw new Error("<Notification>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set text(e){throw new Error("<Notification>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get type(){throw new Error("<Notification>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set type(e){throw new Error("<Notification>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ot="src/lib/components/notification/Notifications.svelte";function Se(n){let e,t;e=new st({props:{title:n[0].current.title,text:n[0].current.text,type:n[0].current.type},$$inline:!0}),e.$on("close",n[1]);const s={c:function(){ue(e.$$.fragment)},l:function(o){fe(e.$$.fragment,o)},m:function(o,r){de(e,o,r),t=!0},p:function(o,r){const c={};r&1&&(c.title=o[0].current.title),r&1&&(c.text=o[0].current.text),r&1&&(c.type=o[0].current.type),e.$set(c)},i:function(o){t||(O(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){pe(e,o)}};return j("SvelteRegisterBlock",{block:s,id:Se.name,type:"if",source:"(7:2) {#if $notifications.current}",ctx:n}),s}function De(n){let e,t,s=n[0].current&&Se(n);const i={c:function(){e=_("div"),s&&s.c(),this.h()},l:function(r){e=b(r,"DIV",{class:!0});var c=g(e);s&&s.l(c),c.forEach(u),this.h()},h:function(){l(e,"class","z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"),v(e,Ot,4,0,135)},m:function(r,c){A(r,e,c),s&&s.m(e,null),t=!0},p:function(r,[c]){r[0].current?s?(s.p(r,c),c&1&&O(s,1)):(s=Se(r),s.c(),O(s,1),s.m(e,null)):s&&(Ke(),W(s,1,1,()=>{s=null}),Xe())},i:function(r){t||(O(s),t=!0)},o:function(r){W(s),t=!1},d:function(r){r&&u(e),s&&s.d()}};return j("SvelteRegisterBlock",{block:i,id:De.name,type:"component",source:"",ctx:n}),i}function Rt(n,e,t){let s;ge(ke,"notifications"),we(n,ke,f=>t(0,s=f));let{$$slots:i={},$$scope:o}=e;ne("Notifications",i,[]);const r=[];Object.keys(e).forEach(f=>{!~r.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<Notifications> was created with unknown prop '${f}'`)});const c=()=>ke.acknowledge();return n.$capture_state=()=>({Notification:st,notifications:ke,$notifications:s}),[s,c]}class it extends Z{constructor(e){super(e);ee(this,e,Rt,De,te,{}),j("SvelteRegisterComponent",{component:this,tagName:"Notifications",options:e,id:De.name})}}function Ie(n){const e={c:B,l:B,m:B,p:B,i:B,o:B,d:B};return j("SvelteRegisterBlock",{block:e,id:Ie.name,type:"component",source:"",ctx:n}),e}function rt(n){n.preventDefault()}function Ct(n,e,t){let{$$slots:s={},$$scope:i}=e;ne("NoInstallPrompt",s,[]),_e(()=>{window.addEventListener("beforeinstallprompt",rt)});const o=[];return Object.keys(e).forEach(r=>{!~o.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<NoInstallPrompt> was created with unknown prop '${r}'`)}),n.$capture_state=()=>({onMount:_e,beforeinstallprompt:rt}),[]}class at extends Z{constructor(e){super(e);ee(this,e,Ct,Ie,te,{}),j("SvelteRegisterComponent",{component:this,tagName:"NoInstallPrompt",options:e,id:Ie.name})}}const{console:Tt}=_t,D="src/lib/components/web/NewVersionNotification.svelte";function Be(n){let e,t,s,i,o,r,c,f,w,E,m,y,h,$,x,a,p,J,K,C,I,N,X,R,k,L,Q,ie;const M={c:function(){e=_("div"),t=_("div"),s=_("div"),i=_("div"),o=_("div"),r=_("img"),f=P(),w=_("div"),E=_("p"),m=oe("A new version is available. Reload to get the update."),y=P(),h=_("div"),$=_("button"),x=oe("Reload"),a=P(),p=_("button"),J=oe("Skip"),K=P(),C=_("div"),I=_("button"),N=_("span"),X=oe("Close"),R=P(),k=q("svg"),L=q("path"),this.h()},l:function(T){e=b(T,"DIV",{class:!0});var G=g(e);t=b(G,"DIV",{class:!0});var re=g(t);s=b(re,"DIV",{class:!0});var ae=g(s);i=b(ae,"DIV",{class:!0});var z=g(i);o=b(z,"DIV",{class:!0});var le=g(o);r=b(le,"IMG",{class:!0,src:!0,alt:!0}),le.forEach(u),f=V(z),w=b(z,"DIV",{class:!0});var me=g(w);E=b(me,"P",{class:!0});var Re=g(E);m=se(Re,"A new version is available. Reload to get the update."),Re.forEach(u),y=V(me),h=b(me,"DIV",{class:!0});var ve=g(h);$=b(ve,"BUTTON",{type:!0,class:!0});var Ce=g($);x=se(Ce,"Reload"),Ce.forEach(u),a=V(ve),p=b(ve,"BUTTON",{type:!0,class:!0});var Te=g(p);J=se(Te,"Skip"),Te.forEach(u),ve.forEach(u),me.forEach(u),K=V(z),C=b(z,"DIV",{class:!0});var We=g(C);I=b(We,"BUTTON",{class:!0});var he=g(I);N=b(he,"SPAN",{class:!0});var Me=g(N);X=se(Me,"Close"),Me.forEach(u),R=V(he),k=F(he,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var ze=g(k);L=F(ze,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(L).forEach(u),ze.forEach(u),he.forEach(u),We.forEach(u),z.forEach(u),ae.forEach(u),re.forEach(u),G.forEach(u),this.h()},h:function(){l(r,"class","h-10 w-10 rounded-full"),bt(r.src,c=`${ye}/maskable_icon_512x512.png`)||l(r,"src",c),l(r,"alt","conquest.eth"),v(r,D,45,12,1536),l(o,"class","flex-shrink-0 pt-0.5"),v(o,D,44,10,1489),l(E,"class","text-sm font-medium text-gray-100"),v(E,D,48,12,1705),l($,"type","button"),l($,"class","inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"),v($,D,53,14,1966),l(p,"type","button"),l(p,"class","ml-3 inline-flex items-center px-3 py-2 border border-red-800 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-200 bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"),v(p,D,60,14,2367),l(h,"class","mt-4 flex"),v(h,D,52,12,1928),l(w,"class","ml-3 w-0 flex-1"),v(w,D,47,10,1663),l(N,"class","sr-only"),v(N,D,74,14,3070),l(L,"fill-rule","evenodd"),l(L,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),l(L,"clip-rule","evenodd"),v(L,D,83,16,3392),l(k,"class","h-5 w-5"),l(k,"xmlns","http://www.w3.org/2000/svg"),l(k,"viewBox","0 0 20 20"),l(k,"fill","currentColor"),l(k,"aria-hidden","true"),v(k,D,76,14,3165),l(I,"class","bg-gray-900 rounded-md inline-flex text-red-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),v(I,D,70,12,2844),l(C,"class","ml-4 flex-shrink-0 flex"),v(C,D,69,10,2794),l(i,"class","flex items-start"),v(i,D,43,8,1448),l(s,"class","p-4"),v(s,D,42,6,1422),l(t,"class","max-w-sm w-full bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-100 ring-opacity-5"),v(t,D,39,4,1286),l(e,"class","z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"),v(e,D,22,2,709)},m:function(T,G){A(T,e,G),d(e,t),d(t,s),d(s,i),d(i,o),d(o,r),d(i,f),d(i,w),d(w,E),d(E,m),d(w,y),d(w,h),d(h,$),d($,x),d(h,a),d(h,p),d(p,J),d(i,K),d(i,C),d(C,I),d(I,N),d(N,X),d(I,R),d(I,k),d(k,L),Q||(ie=[ce($,"click",n[2],!1,!1,!1),ce(p,"click",n[1],!1,!1,!1),ce(I,"click",n[1],!1,!1,!1),ce(e,"click",Wt,!1,!1,!1)],Q=!0)},p:B,d:function(T){T&&u(e),Q=!1,kt(ie)}};return j("SvelteRegisterBlock",{block:M,id:Be.name,type:"if",source:"(22:0) {#if $serviceWorker.updateAvailable && $serviceWorker.registration}",ctx:n}),M}function Pe(n){let e,t=n[0].updateAvailable&&n[0].registration&&Be(n);const s={c:function(){t&&t.c(),e=be()},l:function(o){t&&t.l(o),e=be()},m:function(o,r){t&&t.m(o,r),A(o,e,r)},p:function(o,[r]){o[0].updateAvailable&&o[0].registration?t?t.p(o,r):(t=Be(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:B,o:B,d:function(o){t&&t.d(o),o&&u(e)}};return j("SvelteRegisterBlock",{block:s,id:Pe.name,type:"component",source:"",ctx:n}),s}const Wt=n=>{n.preventDefault(),n.stopPropagation()};function Mt(n,e,t){let s;ge(H,"serviceWorker"),we(n,H,w=>t(0,s=w));let{$$slots:i={},$$scope:o}=e;ne("NewVersionNotification",i,[]);function r(){Qe(H,s.updateAvailable=!1,s)}function c(){s.updateAvailable&&s.registration&&(s.registration.waiting?s.registration.waiting.postMessage("skipWaiting"):console.error("not waiting..., todo reload?"),Qe(H,s.updateAvailable=!1,s))}const f=[];return Object.keys(e).forEach(w=>{!~f.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&Tt.warn(`<NewVersionNotification> was created with unknown prop '${w}'`)}),n.$capture_state=()=>({serviceWorker:H,base:ye,skip:r,reload:c,$serviceWorker:s}),[s,r,c]}class lt extends Z{constructor(e){super(e);ee(this,e,Mt,Pe,te,{}),j("SvelteRegisterComponent",{component:this,tagName:"NewVersionNotification",options:e,id:Pe.name})}}const ct={};function ut(){Ze.subscribe(n=>{St()&&zt()})}async function zt(){var n;if(jt.provider){const e=(n=Ze.state.data)==null?void 0:n.pendingActions;if(e)for(const t of Object.keys(e)){if(ct[t])continue;ct[t]=!0;const s=typeof Ee=="string"&&Ee!==""?Ee:"http://127.0.0.1:8545";try{const i=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Math.floor(Math.random()*99999999),jsonrpc:"2.0",method:"hardhat_ignoreTransaction",params:[t]})});try{const o=await i.json();console.log(JSON.stringify(o))}catch{console.log(await i.text())}}catch(i){console.error(i)}}}}typeof window!="undefined"&&(window.debug={dropTransactions:Lt});const Ut="src/lib/components/web/Loading.svelte";function Ve(n){let e;const t={c:function(){e=_("div"),this.h()},l:function(i){e=b(i,"DIV",{class:!0}),g(e).forEach(u),this.h()},h:function(){l(e,"class","page-loading s-ck_1p5NrzX64"),v(e,Ut,4,0,68)},m:function(i,o){A(i,e,o)},p:B,i:B,o:B,d:function(i){i&&u(e)}};return j("SvelteRegisterBlock",{block:t,id:Ve.name,type:"component",source:"",ctx:n}),t}function qt(n,e,t){let{$$slots:s={},$$scope:i}=e;ne("Loading",s,[]);let{cancel:o=()=>{}}=e;const r=["cancel"];return Object.keys(e).forEach(c=>{!~r.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Loading> was created with unknown prop '${c}'`)}),n.$$set=c=>{"cancel"in c&&t(0,o=c.cancel)},n.$capture_state=()=>({cancel:o}),n.$inject_state=c=>{"cancel"in c&&t(0,o=c.cancel)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[o]}class ft extends Z{constructor(e){super(e);ee(this,e,qt,Ve,te,{cancel:0}),j("SvelteRegisterComponent",{component:this,tagName:"Loading",options:e,id:Ve.name})}get cancel(){throw new Error("<Loading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set cancel(e){throw new Error("<Loading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function Ae(n){let e,t;e=new ft({$$inline:!0});const s={c:function(){ue(e.$$.fragment)},l:function(o){fe(e.$$.fragment,o)},m:function(o,r){de(e,o,r),t=!0},i:function(o){t||(O(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){pe(e,o)}};return j("SvelteRegisterBlock",{block:s,id:Ae.name,type:"if",source:"(34:0) {#if $navigating}",ctx:n}),s}function Oe(n){let e,t,s,i,o,r,c,f,w,E;t=new at({$$inline:!0}),i=new lt({$$inline:!0});const m=n[2].default,y=yt(m,n,n[1],null);c=new it({$$inline:!0});let h=n[0]&&Ae(n);const $={c:function(){e=P(),ue(t.$$.fragment),s=P(),ue(i.$$.fragment),o=P(),y&&y.c(),r=P(),ue(c.$$.fragment),f=P(),h&&h.c(),w=be(),this.h()},l:function(a){Et('[data-svelte="svelte-wawnck"]',document.head).forEach(u),e=V(a),fe(t.$$.fragment,a),s=V(a),fe(i.$$.fragment,a),o=V(a),y&&y.l(a),r=V(a),fe(c.$$.fragment,a),f=V(a),h&&h.l(a),w=be(),this.h()},h:function(){document.title="conquest.eth, An unstoppable game of strategy and diplomacy running on Ethereum"},m:function(a,p){A(a,e,p),de(t,a,p),A(a,s,p),de(i,a,p),A(a,o,p),y&&y.m(a,p),A(a,r,p),de(c,a,p),A(a,f,p),h&&h.m(a,p),A(a,w,p),E=!0},p:function(a,[p]){y&&y.p&&(!E||p&2)&&$t(y,m,a,a[1],E?Nt(m,a[1],p,null):xt(a[1]),null),a[0]?h?p&1&&O(h,1):(h=Ae(a),h.c(),O(h,1),h.m(w.parentNode,w)):h&&(Ke(),W(h,1,1,()=>{h=null}),Xe())},i:function(a){E||(O(t.$$.fragment,a),O(i.$$.fragment,a),O(y,a),O(c.$$.fragment,a),O(h),E=!0)},o:function(a){W(t.$$.fragment,a),W(i.$$.fragment,a),W(y,a),W(c.$$.fragment,a),W(h),E=!1},d:function(a){a&&u(e),pe(t,a),a&&u(s),pe(i,a),a&&u(o),y&&y.d(a),a&&u(r),pe(c,a),a&&u(f),h&&h.d(a),a&&u(w)}};return j("SvelteRegisterBlock",{block:$,id:Oe.name,type:"component",source:"",ctx:n}),$}function Ft(n,e,t){let s,i;ge(xe,"page"),we(n,xe,f=>t(3,s=f)),ge($e,"navigating"),we(n,$e,f=>t(0,i=f));let{$$slots:o={},$$scope:r}=e;ne("_layout",o,["default"]),_e(()=>{const f=et(s.url.pathname);f===""||f==="/"||tt.stop(),ut()});const c=[];return Object.keys(e).forEach(f=>{!~c.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<_layout> was created with unknown prop '${f}'`)}),n.$$set=f=>{"$$scope"in f&&t(1,r=f.$$scope)},n.$capture_state=()=>({Notifications:it,NoInstallPrompt:at,NewVersionNotification:lt,initDebug:ut,onMount:_e,relativePathname:et,url:Dt,logo:tt,navigating:$e,page:xe,Loading:ft,$page:s,$navigating:i}),[i,r,o]}class rn extends Z{constructor(e){super(e);ee(this,e,Ft,Oe,te,{}),j("SvelteRegisterComponent",{component:this,tagName:"_layout",options:e,id:Oe.name})}}export{rn as default};
//# sourceMappingURL=__layout.svelte-f2269d39.js.map
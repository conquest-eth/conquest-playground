import{S as ht,i as gt,s as yt,d as y,V as vt,O as te,P as ne,v as $t,Q as wt,n as M,p as O,q as L,k,X as St,Y as Bt,Z as Rt,r as Q,u as W,w as F,x as C,g as d,e as S,t as $,c as B,f as N,l as w,h as R,j as E,ah as pe,L as v,M as re,N as D,z as q,A as T,B as K,E as G,m as oe,av as Et,T as Pt,ag as Be,R as ke,ai as Nt}from"./vendor-e78c39f1.js";import{h as se}from"./config-af7f3a10.js";import{N as Re}from"./NavButton-b22b61c0.js";import{P as X}from"./PanelButton-b24a8fdb.js";import{M as ae}from"./Modal-a8884379.js";import{b as Z}from"./paths-28a87002.js";import{w as ce,b as be,f as ue,c as fe,d as he,s as ge}from"./wallet-c826be1b.js";import{p as le,f as ye}from"./privateWallet-7a0cfca0.js";const{console:It}=wt,P="src/lib/blockchain/WalletAccess.svelte";function Ee(i,e,t){const c=i.slice();return c[28]=e[t],c}function Pe(i){let e,t,c,n,o,l,a;const f={c:function(){e=S("div"),t=S("p"),c=$("chain reset detected! Metamask need to have its account reset! "),n=S("button"),o=$("OK"),this.h()},l:function(r){e=B(r,"DIV",{class:!0,style:!0});var u=N(e);t=B(u,"P",{class:!0});var m=N(t);c=w(m,"chain reset detected! Metamask need to have its account reset! "),n=B(m,"BUTTON",{class:!0});var _=N(n);o=w(_,"OK"),_.forEach(d),m.forEach(d),u.forEach(d),this.h()},h:function(){R(n,"class","border-2 border-white p-2"),E(n,P,83,69,3513),R(t,"class","w-64 text-center rounded-bl-xl rounded-br-xl text-gray-200 bg-red-500 p-1"),E(t,P,82,4,3358),R(e,"class","w-full flex items-center justify-center fixed top-0"),pe(e,"z-index","5"),E(e,P,81,2,3268)},m:function(r,u){k(r,e,u),v(e,t),v(t,c),v(t,n),v(n,o),l||(a=re(n,"click",i[12],!1,!1,!1),l=!0)},p:D,d:function(r){r&&d(e),l=!1,a()}};return y("SvelteRegisterBlock",{block:f,id:Pe.name,type:"if",source:"(81:32) ",ctx:i}),f}function Ne(i){let e,t,c,n,o,l,a,f,s;const r={c:function(){e=S("div"),t=S("p"),c=$(`Wrong network, switch to
      `),n=$(se),o=M(),l=S("button"),a=$("OK"),this.h()},l:function(m){e=B(m,"DIV",{class:!0,style:!0});var _=N(e);t=B(_,"P",{class:!0});var h=N(t);c=w(h,`Wrong network, switch to
      `),n=w(h,se),o=L(h),l=B(h,"BUTTON",{class:!0});var I=N(l);a=w(I,"OK"),I.forEach(d),h.forEach(d),_.forEach(d),this.h()},h:function(){R(l,"class","border-2 border-white p-2"),E(l,P,77,6,3138),R(t,"class","w-64 text-center rounded-bl-xl rounded-br-xl text-gray-200 bg-red-500 p-1"),E(t,P,74,4,2997),R(e,"class","w-full flex items-center justify-center fixed top-0"),pe(e,"z-index","5"),E(e,P,73,2,2907)},m:function(m,_){k(m,e,_),v(e,t),v(t,c),v(t,n),v(t,o),v(t,l),v(l,a),f||(s=re(l,"click",ge,!1,!1,!1),f=!0)},p:D,d:function(m){m&&d(e),f=!1,s()}};return y("SvelteRegisterBlock",{block:r,id:Ne.name,type:"if",source:"(73:30) ",ctx:i}),r}function Ie(i){let e,t,c;const n={c:function(){e=S("div"),t=S("p"),c=$("Network Issues, Please Connect."),this.h()},l:function(l){e=B(l,"DIV",{class:!0,style:!0});var a=N(e);t=B(a,"P",{class:!0});var f=N(t);c=w(f,"Network Issues, Please Connect."),f.forEach(d),a.forEach(d),this.h()},h:function(){R(t,"class","w-64 text-center rounded-bl-xl rounded-br-xl text-gray-200 bg-red-500 p-1"),E(t,P,68,4,2732),R(e,"class","w-full flex items-center justify-center fixed top-0 pointer-events-none"),pe(e,"z-index","5"),E(e,P,67,2,2622)},m:function(l,a){k(l,e,a),v(e,t),v(t,c)},p:D,d:function(l){l&&d(e)}};return y("SvelteRegisterBlock",{block:n,id:Ie.name,type:"if",source:"(67:0) {#if $chain.state === 'Idle' && !$chain.connecting && $fallback.error}",ctx:i}),n}function De(i){let e,t;e=new ae({props:{$$slots:{default:[Ue]},$$scope:{ctx:i}},$$inline:!0});const c={c:function(){q(e.$$.fragment)},l:function(o){T(e.$$.fragment,o)},m:function(o,l){K(e,o,l),t=!0},p:function(o,l){const a={};l&134217728&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i:function(o){t||(C(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){G(e,o)}};return y("SvelteRegisterBlock",{block:c,id:De.name,type:"if",source:"(234:47) ",ctx:i}),c}function Ce(i){let e,t;e=new ae({props:{title:i[0],cancelable:!i[2].connecting,closeButton:!1,$$slots:{default:[pt]},$$scope:{ctx:i}},$$inline:!0}),e.$on("close",i[26]);const c={c:function(){q(e.$$.fragment)},l:function(o){T(e.$$.fragment,o)},m:function(o,l){K(e,o,l),t=!0},p:function(o,l){const a={};l&1&&(a.title=o[0]),l&4&&(a.cancelable=!o[2].connecting),l&134218734&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i:function(o){t||(C(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){G(e,o)}};return y("SvelteRegisterBlock",{block:c,id:Ce.name,type:"if",source:"(104:27) ",ctx:i}),c}function We(i){let e,t;e=new ae({props:{title:"An Error Happened",$$slots:{default:[kt]},$$scope:{ctx:i}},$$inline:!0}),e.$on("close",i[18]);const c={c:function(){q(e.$$.fragment)},l:function(o){T(e.$$.fragment,o)},m:function(o,l){K(e,o,l),t=!0},p:function(o,l){const a={};l&134218240&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i:function(o){t||(C(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){G(e,o)}};return y("SvelteRegisterBlock",{block:c,id:We.name,type:"if",source:"(98:23) ",ctx:i}),c}function je(i){let e,t;e=new ae({props:{title:"An Error Happened",$$slots:{default:[bt]},$$scope:{ctx:i}},$$inline:!0}),e.$on("close",i[17]);const c={c:function(){q(e.$$.fragment)},l:function(o){T(e.$$.fragment,o)},m:function(o,l){K(e,o,l),t=!0},p:function(o,l){const a={};l&134217732&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i:function(o){t||(C(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){G(e,o)}};return y("SvelteRegisterBlock",{block:c,id:je.name,type:"if",source:"(92:0) {#if $wallet.error}",ctx:i}),c}function Ue(i){let e,t;const c={c:function(){e=S("p"),t=$("Connecting...."),this.h()},l:function(o){e=B(o,"P",{});var l=N(e);t=w(l,"Connecting...."),l.forEach(d),this.h()},h:function(){E(e,P,235,4,9204)},m:function(o,l){k(o,e,l),v(e,t)},d:function(o){o&&d(e)}};return y("SvelteRegisterBlock",{block:c,id:Ue.name,type:"slot",source:"(235:2) <Modal>",ctx:i}),c}function Ae(i){let e,t,c,n=i[3].step+"",o,l,a,f;a=new X({props:{class:"mt-4",label:"Cancel",$$slots:{default:[He]},$$scope:{ctx:i}},$$inline:!0}),a.$on("click",i[25]);const s={c:function(){e=S("div"),t=S("p"),c=$("Flow aborted "),o=$(n),l=M(),q(a.$$.fragment),this.h()},l:function(u){e=B(u,"DIV",{class:!0});var m=N(e);t=B(m,"P",{});var _=N(t);c=w(_,"Flow aborted "),o=w(_,n),_.forEach(d),l=L(m),T(a.$$.fragment,m),m.forEach(d),this.h()},h:function(){E(t,P,228,8,8970),R(e,"class","text-center"),E(e,P,227,6,8936)},m:function(u,m){k(u,e,m),v(e,t),v(t,c),v(t,o),v(e,l),K(a,e,null),f=!0},p:function(u,m){(!f||m&8)&&n!==(n=u[3].step+"")&&oe(o,n);const _={};m&134217728&&(_.$$scope={dirty:m,ctx:u}),a.$set(_)},i:function(u){f||(C(a.$$.fragment,u),f=!0)},o:function(u){W(a.$$.fragment,u),f=!1},d:function(u){u&&d(e),G(a)}};return y("SvelteRegisterBlock",{block:s,id:Ae.name,type:"else",source:"(227:4) {:else}",ctx:i}),s}function Oe(i){let e,t;const c={c:function(){e=S("p"),t=$("..."),this.h()},l:function(o){e=B(o,"P",{});var l=N(e);t=w(l,"..."),l.forEach(d),this.h()},h:function(){E(e,P,218,6,8608)},m:function(o,l){k(o,e,l),v(e,t)},p:D,i:D,o:D,d:function(o){o&&d(e)}};return y("SvelteRegisterBlock",{block:c,id:Oe.name,type:"if",source:"(218:46) ",ctx:i}),c}function Me(i){let e,t,c,n,o,l,a,f,s,r,u,m,_,h,I,b,p,j,Y;function ie(V,U){return V[13]?Qe:ze}let H=ie(i)(i);b=new X({props:{label:"sign",class:"mt-5",$$slots:{default:[Fe]},$$scope:{ctx:i}},$$inline:!0}),b.$on("click",i[24]);const de={c:function(){e=S("div"),t=S("p"),c=$(`conquest.eth require your signature to operate. Do not sign this message outside of conquest.eth or other
          trusted frontend!`),n=M(),o=S("div"),l=S("label"),a=S("input"),f=M(),H.c(),s=M(),r=S("label"),u=S("input"),m=M(),_=S("span"),h=$("enable encrypted sync across devices"),I=M(),q(b.$$.fragment),this.h()},l:function(U){e=B(U,"DIV",{class:!0});var A=N(e);t=B(A,"P",{});var z=N(t);c=w(z,`conquest.eth require your signature to operate. Do not sign this message outside of conquest.eth or other
          trusted frontend!`),z.forEach(d),n=L(A),o=B(A,"DIV",{class:!0});var J=N(o);l=B(J,"LABEL",{class:!0});var x=N(l);a=B(x,"INPUT",{type:!0,class:!0}),f=L(x),H.l(x),x.forEach(d),s=L(J),r=B(J,"LABEL",{class:!0});var ee=N(r);u=B(ee,"INPUT",{type:!0,class:!0}),m=L(ee),_=B(ee,"SPAN",{class:!0});var me=N(_);h=w(me,"enable encrypted sync across devices"),me.forEach(d),ee.forEach(d),J.forEach(d),I=L(A),T(b.$$.fragment,A),A.forEach(d),this.h()},h:function(){E(t,P,189,8,7285),R(a,"type","checkbox"),R(a,"class","form-checkbox"),a.disabled=i[13],E(a,P,196,12,7617),R(l,"class","flex items-center"),E(l,P,195,10,7571),R(u,"type","checkbox"),R(u,"class","form-checkbox"),u.checked=i[1],E(u,P,209,12,8174),R(_,"class","ml-2"),E(_,P,210,12,8291),R(r,"class","flex items-center"),E(r,P,208,10,8128),R(o,"class","ml-8 mt-6 text-cyan-100 text-xs"),E(o,P,194,8,7515),R(e,"class","text-center"),E(e,P,188,6,7251)},m:function(U,A){k(U,e,A),v(e,t),v(t,c),v(e,n),v(e,o),v(o,l),v(l,a),a.checked=i[6],v(l,f),H.m(l,null),v(o,s),v(o,r),v(r,u),v(r,m),v(r,_),v(_,h),v(e,I),K(b,e,null),p=!0,j||(Y=[re(a,"change",i[23]),re(u,"change",i[11],!1,!1,!1)],j=!0)},p:function(U,A){A&64&&(a.checked=U[6]),H.p(U,A),(!p||A&2)&&Et(u,"checked",U[1]);const z={};A&134217728&&(z.$$scope={dirty:A,ctx:U}),b.$set(z)},i:function(U){p||(C(b.$$.fragment,U),p=!0)},o:function(U){W(b.$$.fragment,U),p=!1},d:function(U){U&&d(e),H.d(),G(b),j=!1,Pt(Y)}};return y("SvelteRegisterBlock",{block:de,id:Me.name,type:"if",source:"(188:59) ",ctx:i}),de}function Le(i){let e;function t(l,a){return l[2].pendingUserConfirmation[0]==="transaction"?Je:l[2].pendingUserConfirmation[0]==="signature"?Ze:Xe}let c=t(i),n=c(i);const o={c:function(){n.c(),e=O()},l:function(a){n.l(a),e=O()},m:function(a,f){n.m(a,f),k(a,e,f)},p:function(a,f){c!==(c=t(a))&&(n.d(1),n=c(a),n&&(n.c(),n.m(e.parentNode,e)))},i:D,o:D,d:function(a){n.d(a),a&&d(e)}};return y("SvelteRegisterBlock",{block:o,id:Le.name,type:"if",source:"(182:46) ",ctx:i}),o}function Ve(i){let e;const t={c:function(){e=$("Please accept the signature to unlock your account.")},l:function(n){e=w(n,"Please accept the signature to unlock your account.")},m:function(n,o){k(n,e,o)},p:D,i:D,o:D,d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:Ve.name,type:"if",source:"(180:60) ",ctx:i}),t}function qe(i){let e,t,c,n,o;function l(r,u){return r[8].code===4001?et:xe}let a=l(i),f=a(i);n=new X({props:{class:"mt-4",label:"Retry",$$slots:{default:[tt]},$$scope:{ctx:i}},$$inline:!0}),n.$on("click",i[22]);const s={c:function(){e=S("div"),t=S("p"),f.c(),c=M(),q(n.$$.fragment),this.h()},l:function(u){e=B(u,"DIV",{class:!0});var m=N(e);t=B(m,"P",{});var _=N(t);f.l(_),_.forEach(d),c=L(m),T(n.$$.fragment,m),m.forEach(d),this.h()},h:function(){E(t,P,172,8,6519),R(e,"class","text-center"),E(e,P,171,6,6485)},m:function(u,m){k(u,e,m),v(e,t),f.m(t,null),v(e,c),K(n,e,null),o=!0},p:function(u,m){a===(a=l(u))&&f?f.p(u,m):(f.d(1),f=a(u),f&&(f.c(),f.m(t,null)));const _={};m&134217728&&(_.$$scope={dirty:m,ctx:u}),n.$set(_)},i:function(u){o||(C(n.$$.fragment,u),o=!0)},o:function(u){W(n.$$.fragment,u),o=!1},d:function(u){u&&d(e),f.d(),G(n)}};return y("SvelteRegisterBlock",{block:s,id:qe.name,type:"if",source:"(171:29) ",ctx:i}),s}function Te(i){let e,t,c,n;const o=[ot,nt],l=[];function a(s,r){return s[9].loadingData?0:s[9].notSupported?1:-1}~(e=a(i))&&(t=l[e]=o[e](i));const f={c:function(){t&&t.c(),c=O()},l:function(r){t&&t.l(r),c=O()},m:function(r,u){~e&&l[e].m(r,u),k(r,c,u),n=!0},p:function(r,u){let m=e;e=a(r),e===m?~e&&l[e].p(r,u):(t&&(Q(),W(l[m],1,1,()=>{l[m]=null}),F()),~e?(t=l[e],t?t.p(r,u):(t=l[e]=o[e](r),t.c()),C(t,1),t.m(c.parentNode,c)):t=null)},i:function(r){n||(C(t),n=!0)},o:function(r){W(t),n=!1},d:function(r){~e&&l[e].d(r),r&&d(c)}};return y("SvelteRegisterBlock",{block:f,id:Te.name,type:"if",source:"(160:43) ",ctx:i}),f}function Ke(i){let e,t,c,n;const o=[it,lt],l=[];function a(s,r){return s[9].connecting?0:s[9].error?1:-1}~(e=a(i))&&(t=l[e]=o[e](i));const f={c:function(){t&&t.c(),c=O()},l:function(r){t&&t.l(r),c=O()},m:function(r,u){~e&&l[e].m(r,u),k(r,c,u),n=!0},p:function(r,u){let m=e;e=a(r),e===m?~e&&l[e].p(r,u):(t&&(Q(),W(l[m],1,1,()=>{l[m]=null}),F()),~e?(t=l[e],t?t.p(r,u):(t=l[e]=o[e](r),t.c()),C(t,1),t.m(c.parentNode,c)):t=null)},i:function(r){n||(C(t),n=!0)},o:function(r){W(t),n=!1},d:function(r){~e&&l[e].d(r),r&&d(c)}};return y("SvelteRegisterBlock",{block:f,id:Ke.name,type:"if",source:"(151:38) ",ctx:i}),f}function Ge(i){let e,t,c,n;const o=[at,st],l=[];function a(s,r){return s[2].unlocking?0:1}e=a(i),t=l[e]=o[e](i);const f={c:function(){t.c(),c=O()},l:function(r){t.l(r),c=O()},m:function(r,u){l[e].m(r,u),k(r,c,u),n=!0},p:function(r,u){let m=e;e=a(r),e===m?l[e].p(r,u):(Q(),W(l[m],1,1,()=>{l[m]=null}),F(),t=l[e],t?t.p(r,u):(t=l[e]=o[e](r),t.c()),C(t,1),t.m(c.parentNode,c))},i:function(r){n||(C(t),n=!0)},o:function(r){W(t),n=!1},d:function(r){l[e].d(r),r&&d(c)}};return y("SvelteRegisterBlock",{block:f,id:Ge.name,type:"if",source:"(145:41) ",ctx:i}),f}function Ye(i){let e,t,c,n;const o=[mt,dt,ft],l=[];function a(s,r){return s[2].loadingModule?0:s[2].connecting?1:2}e=a(i),t=l[e]=o[e](i);const f={c:function(){t.c(),c=O()},l:function(r){t.l(r),c=O()},m:function(r,u){l[e].m(r,u),k(r,c,u),n=!0},p:function(r,u){let m=e;e=a(r),e===m?l[e].p(r,u):(Q(),W(l[m],1,1,()=>{l[m]=null}),F(),t=l[e],t?t.p(r,u):(t=l[e]=o[e](r),t.c()),C(t,1),t.m(c.parentNode,c))},i:function(r){n||(C(t),n=!0)},o:function(r){W(t),n=!1},d:function(r){l[e].d(r),r&&d(c)}};return y("SvelteRegisterBlock",{block:f,id:Ye.name,type:"if",source:"(106:4) {#if $wallet.state === 'Idle'}",ctx:i}),f}function He(i){let e;const t={c:function(){e=$("OK")},l:function(n){e=w(n,"OK")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:He.name,type:"slot",source:'(230:8) <Button class=\\"mt-4\\" label=\\"Cancel\\" on:click={() => privateWallet.cancel()}>',ctx:i}),t}function ze(i){let e,t,c=window.location.host+"",n,o;const l={c:function(){e=S("span"),t=$("Do not ask again. (trust computer and "),n=$(c),o=$(")"),this.h()},l:function(f){e=B(f,"SPAN",{class:!0});var s=N(e);t=w(s,"Do not ask again. (trust computer and "),n=w(s,c),o=w(s,")"),s.forEach(d),this.h()},h:function(){R(e,"class","ml-2"),E(e,P,206,19,8006)},m:function(f,s){k(f,e,s),v(e,t),v(e,n),v(e,o)},p:D,d:function(f){f&&d(e)}};return y("SvelteRegisterBlock",{block:l,id:ze.name,type:"else",source:"(207:12) {:else}",ctx:i}),l}function Qe(i){let e,t;const c={c:function(){e=S("span"),t=$("Do not ask again. (option disabled as app is served from shared host)"),this.h()},l:function(o){e=B(o,"SPAN",{class:!0});var l=N(e);t=w(l,"Do not ask again. (option disabled as app is served from shared host)"),l.forEach(d),this.h()},h:function(){R(e,"class","ml-2 text-gray-500"),E(e,P,203,14,7845)},m:function(o,l){k(o,e,l),v(e,t)},p:D,d:function(o){o&&d(e)}};return y("SvelteRegisterBlock",{block:c,id:Qe.name,type:"if",source:"(203:12) {#if onSharedStorage}",ctx:i}),c}function Fe(i){let e;const t={c:function(){e=$("sign")},l:function(n){e=w(n,"sign")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:Fe.name,type:"slot",source:'(214:8) <Button label=\\"sign\\" class=\\"mt-5\\" on:click={() => privateWallet.confirm({storeSignatureLocally, syncRemotely})}>',ctx:i}),t}function Xe(i){let e;const t={c:function(){e=$("Please accept request...")},l:function(n){e=w(n,"Please accept request...")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:Xe.name,type:"else",source:"(187:6) {:else}",ctx:i}),t}function Ze(i){let e;const t={c:function(){e=$("Please accept signature...")},l:function(n){e=w(n,"Please accept signature...")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:Ze.name,type:"if",source:"(185:67) ",ctx:i}),t}function Je(i){let e;const t={c:function(){e=$("Please accept transaction...")},l:function(n){e=w(n,"Please accept transaction...")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:Je.name,type:"if",source:"(183:6) {#if $wallet.pendingUserConfirmation[0] === 'transaction'}",ctx:i}),t}function xe(i){let e=ye(i[8])+"",t;const c={c:function(){t=$(e)},l:function(o){t=w(o,e)},m:function(o,l){k(o,t,l)},p:function(o,l){l&256&&e!==(e=ye(o[8])+"")&&oe(t,e)},d:function(o){o&&d(t)}};return y("SvelteRegisterBlock",{block:c,id:xe.name,type:"else",source:"(176:10) {:else}",ctx:i}),c}function et(i){let e;const t={c:function(){e=$("You rejected the request")},l:function(n){e=w(n,"You rejected the request")},m:function(n,o){k(n,e,o)},p:D,d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:et.name,type:"if",source:"(174:10) {#if executionError.code === 4001}",ctx:i}),t}function tt(i){let e;const t={c:function(){e=$("Retry")},l:function(n){e=w(n,"Retry")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:tt.name,type:"slot",source:'(178:8) <Button class=\\"mt-4\\" label=\\"Retry\\" on:click={() => flow.retry()}>',ctx:i}),t}function nt(i){let e,t,c,n,o,l;o=new X({props:{label:"Unlock Wallet",$$slots:{default:[ct]},$$scope:{ctx:i}},$$inline:!0}),o.$on("click",ge);const a={c:function(){e=$(`Please switch to
        `),t=$(se),c=M(),n=S("div"),q(o.$$.fragment),this.h()},l:function(s){e=w(s,`Please switch to
        `),t=w(s,se),c=L(s),n=B(s,"DIV",{});var r=N(n);T(o.$$.fragment,r),r.forEach(d),this.h()},h:function(){E(n,P,166,8,6337)},m:function(s,r){k(s,e,r),k(s,t,r),k(s,c,r),k(s,n,r),K(o,n,null),l=!0},p:function(s,r){const u={};r&134217728&&(u.$$scope={dirty:r,ctx:s}),o.$set(u)},i:function(s){l||(C(o.$$.fragment,s),l=!0)},o:function(s){W(o.$$.fragment,s),l=!1},d:function(s){s&&d(e),s&&d(t),s&&d(c),s&&d(n),G(o)}};return y("SvelteRegisterBlock",{block:a,id:nt.name,type:"if",source:"(163:36) ",ctx:i}),a}function ot(i){let e;const t={c:function(){e=$("Loading contracts...")},l:function(n){e=w(n,"Loading contracts...")},m:function(n,o){k(n,e,o)},p:D,i:D,o:D,d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:ot.name,type:"if",source:"(161:6) {#if $chain.loadingData}",ctx:i}),t}function ct(i){let e;const t={c:function(){e=$("Switch")},l:function(n){e=w(n,"Switch")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:ct.name,type:"slot",source:'(168:10) <Button label=\\"Unlock Wallet\\" on:click={switchChain}>',ctx:i}),t}function lt(i){var s;let e,t,c=(((s=i[9].error)==null?void 0:s.message)||""+i[9].error)+"",n,o,l,a;l=new X({props:{class:"mt-4",label:"OK",$$slots:{default:[rt]},$$scope:{ctx:i}},$$inline:!0}),l.$on("click",i[21]);const f={c:function(){e=S("div"),t=S("p"),n=$(c),o=M(),q(l.$$.fragment),this.h()},l:function(u){e=B(u,"DIV",{class:!0});var m=N(e);t=B(m,"P",{});var _=N(t);n=w(_,c),_.forEach(d),o=L(m),T(l.$$.fragment,m),m.forEach(d),this.h()},h:function(){E(t,P,155,10,5943),R(e,"class","text-center"),E(e,P,154,8,5907)},m:function(u,m){k(u,e,m),v(e,t),v(t,n),v(e,o),K(l,e,null),a=!0},p:function(u,m){var h;(!a||m&512)&&c!==(c=(((h=u[9].error)==null?void 0:h.message)||""+u[9].error)+"")&&oe(n,c);const _={};m&134217728&&(_.$$scope={dirty:m,ctx:u}),l.$set(_)},i:function(u){a||(C(l.$$.fragment,u),a=!0)},o:function(u){W(l.$$.fragment,u),a=!1},d:function(u){u&&d(e),G(l)}};return y("SvelteRegisterBlock",{block:f,id:lt.name,type:"if",source:"(154:29) ",ctx:i}),f}function it(i){let e;const t={c:function(){e=$("Connecting...")},l:function(n){e=w(n,"Connecting...")},m:function(n,o){k(n,e,o)},p:D,i:D,o:D,d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:it.name,type:"if",source:"(152:6) {#if $chain.connecting}",ctx:i}),t}function rt(i){let e;const t={c:function(){e=$("OK")},l:function(n){e=w(n,"OK")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:rt.name,type:"slot",source:'(157:10) <Button class=\\"mt-4\\" label=\\"OK\\" on:click={() => flow.cancel()}>',ctx:i}),t}function st(i){let e,t;e=new X({props:{class:"mt-4",label:"Unlock Wallet",$$slots:{default:[ut]},$$scope:{ctx:i}},$$inline:!0}),e.$on("click",i[20]);const c={c:function(){q(e.$$.fragment)},l:function(o){T(e.$$.fragment,o)},m:function(o,l){K(e,o,l),t=!0},p:function(o,l){const a={};l&134217728&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i:function(o){t||(C(e.$$.fragment,o),t=!0)},o:function(o){W(e.$$.fragment,o),t=!1},d:function(o){G(e,o)}};return y("SvelteRegisterBlock",{block:c,id:st.name,type:"else",source:"(148:6) {:else}",ctx:i}),c}function at(i){let e;const t={c:function(){e=$("Please accept the application to access your wallet.")},l:function(n){e=w(n,"Please accept the application to access your wallet.")},m:function(n,o){k(n,e,o)},p:D,i:D,o:D,d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:at.name,type:"if",source:"(146:6) {#if $wallet.unlocking}",ctx:i}),t}function ut(i){let e;const t={c:function(){e=$("Unlock")},l:function(n){e=w(n,"Unlock")},m:function(n,o){k(n,e,o)},d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:ut.name,type:"slot",source:'(149:8) <Button class=\\"mt-4\\" label=\\"Unlock Wallet\\" on:click={() => wallet.unlock()}>',ctx:i}),t}function ft(i){let e,t,c,n,o,l,a,f,s=i[5];Be(s);let r=[];for(let _=0;_<s.length;_+=1)r[_]=ve(Ee(i,s,_));let u=i[7]&&$e(i);const m={c:function(){e=S("div"),t=S("p"),c=$("You need to connect your wallet."),n=M(),o=S("div");for(let h=0;h<r.length;h+=1)r[h].c();l=M(),u&&u.c(),a=O(),this.h()},l:function(h){e=B(h,"DIV",{class:!0});var I=N(e);t=B(I,"P",{});var b=N(t);c=w(b,"You need to connect your wallet."),b.forEach(d),I.forEach(d),n=L(h),o=B(h,"DIV",{class:!0});var p=N(o);for(let j=0;j<r.length;j+=1)r[j].l(p);p.forEach(d),l=L(h),u&&u.l(h),a=O(),this.h()},h:function(){E(t,P,113,10,4433),R(e,"class","text-center"),E(e,P,112,8,4397),R(o,"class","flex flex-wrap justify-center pb-3"),E(o,P,115,8,4496)},m:function(h,I){k(h,e,I),v(e,t),v(t,c),k(h,n,I),k(h,o,I);for(let b=0;b<r.length;b+=1)r[b].m(o,null);k(h,l,I),u&&u.m(h,I),k(h,a,I),f=!0},p:function(h,I){if(I&32){s=h[5],Be(s);let b;for(b=0;b<s.length;b+=1){const p=Ee(h,s,b);r[b]?r[b].p(p,I):(r[b]=ve(p),r[b].c(),r[b].m(o,null))}for(;b<r.length;b+=1)r[b].d(1);r.length=s.length}h[7]?u?(u.p(h,I),I&128&&C(u,1)):(u=$e(h),u.c(),C(u,1),u.m(a.parentNode,a)):u&&(Q(),W(u,1,1,()=>{u=null}),F())},i:function(h){f||(C(u),f=!0)},o:function(h){W(u),f=!1},d:function(h){h&&d(e),h&&d(n),h&&d(o),Nt(r,h),h&&d(l),u&&u.d(h),h&&d(a)}};return y("SvelteRegisterBlock",{block:m,id:ft.name,type:"else",source:"(112:6) {:else}",ctx:i}),m}function dt(i){let e;const t={c:function(){e=$("Connecting to wallet...")},l:function(n){e=w(n,"Connecting to wallet...")},m:function(n,o){k(n,e,o)},p:D,i:D,o:D,d:function(n){n&&d(e)}};return y("SvelteRegisterBlock",{block:t,id:dt.name,type:"if",source:"(110:35) ",ctx:i}),t}function mt(i){let e,t=i[2].selected+"",c;const n={c:function(){e=$(`Loading module:
        `),c=$(t)},l:function(l){e=w(l,`Loading module:
        `),c=w(l,t)},m:function(l,a){k(l,e,a),k(l,c,a)},p:function(l,a){a&4&&t!==(t=l[2].selected+"")&&oe(c,t)},i:D,o:D,d:function(l){l&&d(e),l&&d(c)}};return y("SvelteRegisterBlock",{block:n,id:mt.name,type:"if",source:"(107:6) {#if $wallet.loadingModule}",ctx:i}),n}function ve(i){let e,t,c,n,o;function l(){return i[19](i[28])}const a={c:function(){e=S("img"),this.h()},l:function(s){e=B(s,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h:function(){R(e,"class","cursor-pointer p-2 m-2 border-2 h-12 w-12 object-contain border-cyan-300"),R(e,"alt",t=`Login with ${i[28].name}`),ke(e.src,c=`${Z}/${i[28].img}`)||R(e,"src",c),E(e,P,117,12,4593)},m:function(s,r){k(s,e,r),n||(o=re(e,"click",l,!1,!1,!1),n=!0)},p:function(s,r){i=s,r&32&&t!==(t=`Login with ${i[28].name}`)&&R(e,"alt",t),r&32&&!ke(e.src,c=`${Z}/${i[28].img}`)&&R(e,"src",c)},d:function(s){s&&d(e),n=!1,o()}};return y("SvelteRegisterBlock",{block:a,id:ve.name,type:"each",source:"(117:10) {#each options as option}",ctx:i}),a}function $e(i){let e,t,c,n,o,l;o=new Re({props:{label:"Download Metamask",blank:!0,href:"https://metamask.io/download.html",class:"m-4 w-max-content",$$slots:{default:[_t]},$$scope:{ctx:i}},$$inline:!0});const a={c:function(){e=S("div"),t=$("OR"),c=M(),n=S("div"),q(o.$$.fragment),this.h()},l:function(s){e=B(s,"DIV",{class:!0});var r=N(e);t=w(r,"OR"),r.forEach(d),c=L(s),n=B(s,"DIV",{class:!0});var u=N(n);T(o.$$.fragment,u),u.forEach(d),this.h()},h:function(){R(e,"class","text-center"),E(e,P,126,10,4937),R(n,"class","flex justify-center"),E(n,P,127,10,4981)},m:function(s,r){k(s,e,r),v(e,t),k(s,c,r),k(s,n,r),K(o,n,null),l=!0},p:function(s,r){const u={};r&134217728&&(u.$$scope={dirty:r,ctx:s}),o.$set(u)},i:function(s){l||(C(o.$$.fragment,s),l=!0)},o:function(s){W(o.$$.fragment,s),l=!1},d:function(s){s&&d(e),s&&d(c),s&&d(n),G(o)}};return y("SvelteRegisterBlock",{block:a,id:$e.name,type:"if",source:"(126:8) {#if builtinNeedInstalation}",ctx:i}),a}function _t(i){let e,t,c;const n={c:function(){e=S("img"),c=$(`
              Download metamask`),this.h()},l:function(l){e=B(l,"IMG",{class:!0,alt:!0,src:!0}),c=w(l,`
              Download metamask`),this.h()},h:function(){R(e,"class","cursor-pointer p-0 m-auto h-10 w-10 object-contain"),R(e,"alt","Download Metamask}"),ke(e.src,t=`${Z}images/metamask.svg`)||R(e,"src",t),E(e,P,134,14,5228)},m:function(l,a){k(l,e,a),k(l,c,a)},p:D,d:function(l){l&&d(e),l&&d(c)}};return y("SvelteRegisterBlock",{block:n,id:_t.name,type:"slot",source:'(129:12) <NavButton               label=\\"Download Metamask\\"               blank={true}               href=\\"https://metamask.io/download.html\\"               class=\\"m-4 w-max-content\\"             >',ctx:i}),n}function pt(i){let e,t,c,n;const o=[Ye,Ge,Ke,Te,qe,Ve,Le,Me,Oe,Ae],l=[];function a(s,r){return s[2].state==="Idle"?0:s[2].state==="Locked"?1:s[9].state==="Idle"?2:s[9].state==="Connected"?3:s[8]?4:s[3].step==="SIGNATURE_REQUESTED"?5:s[2].pendingUserConfirmation?6:s[3].step==="SIGNATURE_REQUIRED"?7:s[3].step==="READY"?8:9}e=a(i),t=l[e]=o[e](i);const f={c:function(){t.c(),c=O()},l:function(r){t.l(r),c=O()},m:function(r,u){l[e].m(r,u),k(r,c,u),n=!0},p:function(r,u){let m=e;e=a(r),e===m?l[e].p(r,u):(Q(),W(l[m],1,1,()=>{l[m]=null}),F(),t=l[e],t?t.p(r,u):(t=l[e]=o[e](r),t.c()),C(t,1),t.m(c.parentNode,c))},i:function(r){n||(C(t),n=!0)},o:function(r){W(t),n=!1},d:function(r){l[e].d(r),r&&d(c)}};return y("SvelteRegisterBlock",{block:f,id:pt.name,type:"slot",source:"(105:2) <Modal {title} cancelable={!$wallet.connecting} on:close={() => privateWallet.cancel()} closeButton={false}>",ctx:i}),f}function kt(i){let e,t=i[9].error.message+"",c;const n={c:function(){e=S("p"),c=$(t),this.h()},l:function(l){e=B(l,"P",{class:!0});var a=N(e);c=w(a,t),a.forEach(d),this.h()},h:function(){R(e,"class","w-64 text-center text-red-500 p-1"),E(e,P,99,4,3953)},m:function(l,a){k(l,e,a),v(e,c)},p:function(l,a){a&512&&t!==(t=l[9].error.message+"")&&oe(c,t)},d:function(l){l&&d(e)}};return y("SvelteRegisterBlock",{block:n,id:kt.name,type:"slot",source:'(99:2) <Modal title=\\"An Error Happened\\" on:close={() => chain.acknowledgeError()}>',ctx:i}),n}function bt(i){let e,t=i[2].error.message+"",c;const n={c:function(){e=S("p"),c=$(t),this.h()},l:function(l){e=B(l,"P",{class:!0});var a=N(e);c=w(a,t),a.forEach(d),this.h()},h:function(){R(e,"class","w-64 text-center text-red-500 p-1"),E(e,P,93,4,3751)},m:function(l,a){k(l,e,a),v(e,c)},p:function(l,a){a&4&&t!==(t=l[2].error.message+"")&&oe(c,t)},d:function(l){l&&d(e)}};return y("SvelteRegisterBlock",{block:n,id:bt.name,type:"slot",source:'(93:2) <Modal title=\\"An Error Happened\\" on:close={() => wallet.acknowledgeError()}>',ctx:i}),n}function we(i){let e,t,c,n,o,l;const a=i[16].default,f=vt(a,i,i[27],null);function s(b,p){if(b[9].state==="Idle"&&!b[9].connecting&&b[10].error)return Ie;if(b[9].notSupported)return Ne;if(b[9].genesisChanged)return Pe}let r=s(i),u=r&&r(i);const m=[je,We,Ce,De],_=[];function h(b,p){return b[2].error?0:b[9].error?1:b[4].inProgress?2:b[3].step==="CONNECTING"?3:-1}~(c=h(i))&&(n=_[c]=m[c](i));const I={c:function(){f&&f.c(),e=M(),u&&u.c(),t=M(),n&&n.c(),o=O()},l:function(p){f&&f.l(p),e=L(p),u&&u.l(p),t=L(p),n&&n.l(p),o=O()},m:function(p,j){f&&f.m(p,j),k(p,e,j),u&&u.m(p,j),k(p,t,j),~c&&_[c].m(p,j),k(p,o,j),l=!0},p:function(p,[j]){f&&f.p&&(!l||j&134217728)&&St(f,a,p,p[27],l?Rt(a,p[27],j,null):Bt(p[27]),null),r===(r=s(p))&&u?u.p(p,j):(u&&u.d(1),u=r&&r(p),u&&(u.c(),u.m(t.parentNode,t)));let Y=c;c=h(p),c===Y?~c&&_[c].p(p,j):(n&&(Q(),W(_[Y],1,1,()=>{_[Y]=null}),F()),~c?(n=_[c],n?n.p(p,j):(n=_[c]=m[c](p),n.c()),C(n,1),n.m(o.parentNode,o)):n=null)},i:function(p){l||(C(f,p),C(n),l=!0)},o:function(p){W(f,p),W(n),l=!1},d:function(p){f&&f.d(p),p&&d(e),u&&u.d(p),p&&d(t),~c&&_[c].d(p),p&&d(o)}};return y("SvelteRegisterBlock",{block:I,id:we.name,type:"component",source:"",ctx:i}),I}function Dt(i,e,t){let c,n,o,l,a,f,s,r;te(ce,"wallet"),ne(i,ce,g=>t(2,o=g)),te(le,"privateWallet"),ne(i,le,g=>t(3,l=g)),te(be,"builtin"),ne(i,be,g=>t(15,a=g)),te(ue,"flow"),ne(i,ue,g=>t(4,f=g)),te(fe,"chain"),ne(i,fe,g=>t(9,s=g)),te(he,"fallback"),ne(i,he,g=>t(10,r=g));let{$$slots:u={},$$scope:m}=e;$t("WalletAccess",u,["default"]);let{title:_=""}=e,h=[],I=!1,b,p=!0;function j(g){t(14,b=o.address),t(1,p=g.target.checked)}function Y(){fe.acknowledgeNewGenesisHash()}let ie=!!(Z&&(Z.startsWith("/ipfs/")||Z.startsWith("/ipns/")));const Se=["title"];Object.keys(e).forEach(g=>{!~Se.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&It.warn(`<WalletAccess> was created with unknown prop '${g}'`)});const H=()=>ce.acknowledgeError(),de=()=>fe.acknowledgeError(),V=g=>ce.connect(g.id),U=()=>ce.unlock(),A=()=>ue.cancel(),z=()=>ue.retry();function J(){I=this.checked,t(6,I)}const x=()=>le.confirm({storeSignatureLocally:I,syncRemotely:p}),ee=()=>le.cancel(),me=()=>le.cancel();return i.$$set=g=>{"title"in g&&t(0,_=g.title),"$$scope"in g&&t(27,m=g.$$scope)},i.$capture_state=()=>({title:_,chainName:se,NavButton:Re,Button:X,Modal:ae,base:Z,wallet:ce,builtin:be,chain:fe,flow:ue,fallback:he,switchChain:ge,privateWallet:le,formatError:ye,options:h,storeSignatureLocally:I,setByUser:b,syncRemotely:p,onSyncCheckBoxChanged:j,acknowledgeNewGenesis:Y,onSharedStorage:ie,builtinNeedInstalation:n,executionError:c,$wallet:o,$privateWallet:l,$builtin:a,$flow:f,$chain:s,$fallback:r}),i.$inject_state=g=>{"title"in g&&t(0,_=g.title),"options"in g&&t(5,h=g.options),"storeSignatureLocally"in g&&t(6,I=g.storeSignatureLocally),"setByUser"in g&&t(14,b=g.setByUser),"syncRemotely"in g&&t(1,p=g.syncRemotely),"onSharedStorage"in g&&t(13,ie=g.onSharedStorage),"builtinNeedInstalation"in g&&t(7,n=g.builtinNeedInstalation),"executionError"in g&&t(8,c=g.executionError)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty&16&&t(8,c=f.executionError),i.$$.dirty&32772&&t(7,n=o.options.filter(g=>g==="builtin"&&!a.available).length>0),i.$$.dirty&32772&&t(5,h=o.options.filter(g=>g!=="builtin"||a.available).map(g=>({img:(_e=>{if(_e==="builtin"){if(a.state==="Ready"){if(a.vendor==="Metamask")return"images/metamask.svg";if(a.vendor==="Opera")return"images/opera.svg"}return"images/web3-default.png"}else return _e.startsWith("torus-")?`images/torus/${_e.slice(6)}.svg`:`images/${_e}.svg`})(g),id:g,name:g}))),i.$$.dirty&16398&&(console.log({syncRemotely:p,syncEnabled:l.syncEnabled,setByUser:b}),b!==o.address&&t(1,p=l.syncEnabled))},[_,p,o,l,f,h,I,n,c,s,r,j,Y,ie,b,a,u,H,de,V,U,A,z,J,x,ee,me,m]}class qt extends ht{constructor(e){super(e);gt(this,e,Dt,we,yt,{title:0}),y("SvelteRegisterComponent",{component:this,tagName:"WalletAccess",options:e,id:we.name})}get title(){throw new Error("<WalletAccess>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<WalletAccess>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{qt as W};
//# sourceMappingURL=WalletAccess-ec429ef9.js.map
import{S as De,i as xe,s as Ie,d as I,O as de,P as me,v as Pe,e as v,z as J,n as V,c as g,f as k,A as K,q as N,g as f,h as _,j as y,k as P,B as Q,L as p,x as $,u as C,E as Z,t as R,l as W,p as pe,r as Re,w as We,at as _e,M as he,av as Ae,N as be,T as Te}from"../chunks/vendor-e78c39f1.js";import{N as ve}from"../chunks/NavButton-b22b61c0.js";import{b as ge}from"../chunks/paths-28a87002.js";import{m as Y}from"../chunks/myprofile-37a6a38f.js";import{W as ke}from"../chunks/WalletAccess-ec429ef9.js";import{P as ye}from"../chunks/PanelButton-b24a8fdb.js";import{p as z}from"../chunks/privateWallet-7a0cfca0.js";import"../chunks/base-652be6d9.js";import"../chunks/wallet-c826be1b.js";import"../chunks/contracts-69d01f63.js";import"../chunks/config-af7f3a10.js";import"../chunks/account-c0a26acd.js";import"../chunks/spaceInfo-b394211b.js";import"../chunks/token-c96bed7f.js";import"../chunks/optimisticSpace-8b3fc51e.js";import"../chunks/subgraph-aa394bde.js";import"../chunks/graphql-582eebcc.js";import"../chunks/Modal-a8884379.js";const w="src/routes/settings.svelte";function we(a){let e;const t={c:function(){e=R("Back To Game")},l:function(n){e=W(n,"Back To Game")},m:function(n,o){P(n,e,o)},d:function(n){n&&f(e)}};return I("SvelteRegisterBlock",{block:t,id:we.name,type:"slot",source:'(26:2) <NavButton label=\\"Back To Game\\" href={`${base}/`}>',ctx:a}),t}function je(a){let e,t,s,n,o,u,d,l,c,r,m,h,E,j,A,i,H,L,D,x,B,U,O,F,X,te;const ne={c:function(){e=v("form"),t=v("div"),s=v("div"),n=v("div"),o=v("h3"),u=R("Profile"),d=V(),l=v("div"),c=v("div"),r=v("label"),m=R("Contact"),h=V(),E=v("div"),j=v("textarea"),A=V(),i=v("p"),H=R("Describe how other players can contact you."),L=V(),D=v("div"),x=v("div"),B=v("button"),U=R("Save"),this.h()},l:function(b){e=g(b,"FORM",{class:!0});var S=k(e);t=g(S,"DIV",{class:!0});var oe=k(t);s=g(oe,"DIV",{});var G=k(s);n=g(G,"DIV",{});var se=k(n);o=g(se,"H3",{class:!0});var ce=k(o);u=W(ce,"Profile"),ce.forEach(f),se.forEach(f),d=N(G),l=g(G,"DIV",{class:!0});var ae=k(l);c=g(ae,"DIV",{class:!0});var q=k(c);r=g(q,"LABEL",{for:!0,class:!0});var re=k(r);m=W(re,"Contact"),re.forEach(f),h=N(q),E=g(q,"DIV",{class:!0});var M=k(E);j=g(M,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),k(j).forEach(f),A=N(M),i=g(M,"P",{class:!0});var ie=k(i);H=W(ie,"Describe how other players can contact you."),ie.forEach(f),M.forEach(f),q.forEach(f),ae.forEach(f),G.forEach(f),oe.forEach(f),S.forEach(f),L=N(b),D=g(b,"DIV",{class:!0});var le=k(D);x=g(le,"DIV",{class:!0});var ue=k(x);B=g(ue,"BUTTON",{class:!0});var fe=k(B);U=W(fe,"Save"),fe.forEach(f),ue.forEach(f),le.forEach(f),this.h()},h:function(){_(o,"class","text-lg leading-6 font-medium"),y(o,w,42,14,1538),y(n,w,41,12,1518),_(r,"for","Contact"),_(r,"class","block text-sm font-medium sm:mt-px sm:pt-2"),y(r,w,63,16,2636),_(j,"id","contact"),_(j,"name","contact"),_(j,"rows","3"),_(j,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md bg-gray-700"),y(j,w,65,18,2801),_(i,"class","mt-2 text-sm"),y(i,w,72,18,3149),_(E,"class","mt-1 sm:mt-0 sm:col-span-2"),y(E,w,64,16,2742),_(c,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),y(c,w,62,14,2520),_(l,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5 text-gray-200"),y(l,w,45,12,1625),y(s,w,40,10,1500),_(t,"class","space-y-8 divide-y divide-gray-200 sm:space-y-5"),y(t,w,39,8,1428),_(e,"class","space-y-8 divide-y divide-gray-200 text-white"),y(e,w,38,6,1359),B.disabled=O=!a[1],_(B,"class",F=`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  ${a[1]?"text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":"text-gray-300 bg-gray-600 hover:bg-gray-700"} `),y(B,w,81,10,3404),_(x,"class","flex justify-end"),y(x,w,80,8,3363),_(D,"class","pt-5"),y(D,w,79,6,3336)},m:function(b,S){P(b,e,S),p(e,t),p(t,s),p(s,n),p(n,o),p(o,u),p(s,d),p(s,l),p(l,c),p(c,r),p(r,m),p(c,h),p(c,E),p(E,j),_e(j,a[0]),p(E,A),p(E,i),p(i,H),P(b,L,S),P(b,D,S),p(D,x),p(x,B),p(B,U),X||(te=[he(j,"input",a[9]),he(B,"click",a[3],!1,!1,!1)],X=!0)},p:function(b,S){S&1&&_e(j,b[0]),S&2&&O!==(O=!b[1])&&Ae(B,"disabled",O),S&2&&F!==(F=`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  ${b[1]?"text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":"text-gray-300 bg-gray-600 hover:bg-gray-700"} `)&&_(B,"class",F)},i:be,o:be,d:function(b){b&&f(e),b&&f(L),b&&f(D),X=!1,Te(te)}};return I("SvelteRegisterBlock",{block:ne,id:je.name,type:"else",source:"(38:4) {:else}",ctx:a}),ne}function Ee(a){let e,t;e=new ye({props:{class:"w-max-content m-4",label:"connect",disabled:a[2].step!=="IDLE",$$slots:{default:[Be]},$$scope:{ctx:a}},$$inline:!0}),e.$on("click",a[8]);const s={c:function(){J(e.$$.fragment)},l:function(o){K(e.$$.fragment,o)},m:function(o,u){Q(e,o,u),t=!0},p:function(o,u){const d={};u&4&&(d.disabled=o[2].step!=="IDLE"),u&1024&&(d.$$scope={dirty:u,ctx:o}),e.$set(d)},i:function(o){t||($(e.$$.fragment,o),t=!0)},o:function(o){C(e.$$.fragment,o),t=!1},d:function(o){Z(e,o)}};return I("SvelteRegisterBlock",{block:s,id:Ee.name,type:"if",source:"(29:4) {#if $privateWallet.step !== 'READY'}",ctx:a}),s}function Be(a){let e;const t={c:function(){e=R("Connect")},l:function(n){e=W(n,"Connect")},m:function(n,o){P(n,e,o)},d:function(n){n&&f(e)}};return I("SvelteRegisterBlock",{block:t,id:Be.name,type:"slot",source:`(30:6) <Button         class=\\"w-max-content m-4\\"         label=\\"connect\\"         disabled={$privateWallet.step !== 'IDLE'}         on:click={() => privateWallet.login()}       >`,ctx:a}),t}function Se(a){let e,t,s,n;const o=[Ee,je],u=[];function d(c,r){return c[2].step!=="READY"?0:1}e=d(a),t=u[e]=o[e](a);const l={c:function(){t.c(),s=pe()},l:function(r){t.l(r),s=pe()},m:function(r,m){u[e].m(r,m),P(r,s,m),n=!0},p:function(r,m){let h=e;e=d(r),e===h?u[e].p(r,m):(Re(),C(u[h],1,1,()=>{u[h]=null}),We(),t=u[e],t?t.p(r,m):(t=u[e]=o[e](r),t.c()),$(t,1),t.m(s.parentNode,s))},i:function(r){n||($(t),n=!0)},o:function(r){C(t),n=!1},d:function(r){u[e].d(r),r&&f(s)}};return I("SvelteRegisterBlock",{block:l,id:Se.name,type:"slot",source:"(28:2) <WalletAccess>",ctx:a}),l}function ee(a){let e,t,s,n,o;t=new ve({props:{label:"Back To Game",href:`${ge}/`,$$slots:{default:[we]},$$scope:{ctx:a}},$$inline:!0}),n=new ke({props:{$$slots:{default:[Se]},$$scope:{ctx:a}},$$inline:!0});const u={c:function(){e=v("div"),J(t.$$.fragment),s=V(),J(n.$$.fragment),this.h()},l:function(l){e=g(l,"DIV",{class:!0});var c=k(e);K(t.$$.fragment,c),s=N(c),K(n.$$.fragment,c),c.forEach(f),this.h()},h:function(){_(e,"class","w-full h-full bg-black"),y(e,w,24,0,958)},m:function(l,c){P(l,e,c),Q(t,e,null),p(e,s),Q(n,e,null),o=!0},p:function(l,[c]){const r={};c&1024&&(r.$$scope={dirty:c,ctx:l}),t.$set(r);const m={};c&1031&&(m.$$scope={dirty:c,ctx:l}),n.$set(m)},i:function(l){o||($(t.$$.fragment,l),$(n.$$.fragment,l),o=!0)},o:function(l){C(t.$$.fragment,l),C(n.$$.fragment,l),o=!1},d:function(l){l&&f(e),Z(t),Z(n)}};return I("SvelteRegisterBlock",{block:u,id:ee.name,type:"component",source:"",ctx:a}),u}function Ve(a,e,t){let s,n,o,u;de(Y,"myprofile"),me(a,Y,i=>t(7,o=i)),de(z,"privateWallet"),me(a,z,i=>t(2,u=i));let{$$slots:d={},$$scope:l}=e;Pe("Settings",d,[]);var c;function r(){Y.setProfile({description:h})}let m,h="";const E=[];Object.keys(e).forEach(i=>{!~E.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Settings> was created with unknown prop '${i}'`)});const j=()=>z.login();function A(){h=this.value,t(0,h),t(7,o),t(5,m),t(6,s),t(4,c)}return a.$capture_state=()=>({_a:c,NavButton:ve,base:ge,myprofile:Y,WalletAccess:ke,Button:ye,privateWallet:z,setProfile:r,ownerSet:m,description:h,descriptionFromProfile:s,changed:n,$myprofile:o,$privateWallet:u}),a.$inject_state=i=>{"_a"in i&&t(4,c=i._a),"ownerSet"in i&&t(5,m=i.ownerSet),"description"in i&&t(0,h=i.description),"descriptionFromProfile"in i&&t(6,s=i.descriptionFromProfile),"changed"in i&&t(1,n=i.changed)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),a.$$.update=()=>{a.$$.dirty&144&&t(6,s=t(4,c=o.account)===null||c===void 0?void 0:c.description),a.$$.dirty&224&&o.step==="READY"&&(!m||m!==o.owner)&&(t(5,m=o.owner),t(0,h=s||"")),a.$$.dirty&65&&t(1,n=h!==""&&s!==h)},[h,n,u,r,c,m,s,o,j,A]}class et extends De{constructor(e){super(e);xe(this,e,Ve,ee,Ie,{}),I("SvelteRegisterComponent",{component:this,tagName:"Settings",options:e,id:ee.name})}}export{et as default};
//# sourceMappingURL=settings.svelte-c59e6b32.js.map

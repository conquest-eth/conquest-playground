import{S as R,i as E,s as F,d as g,ag as I,v as Y,o as b,Q as B,e as _,c as m,R as j,h,ah as d,j as v,k as w,g as f,f as x,L as C,N as D,ai as M}from"../chunks/vendor-e78c39f1.js";import{q as S}from"../chunks/qrs-ad47a527.js";const{console:N}=B,p="src/routes/qr.svelte";function Q(l,e,t){const a=l.slice();return a[4]=e[t],a}function y(l){let e,t;const a={c:function(){e=_("img"),this.h()},l:function(u){e=m(u,"IMG",{src:!0,alt:!0,style:!0,class:!0}),this.h()},h:function(){j(e.src,t=l[4])||h(e,"src",t),h(e,"alt","qr"),d(e,"width","4cm"),d(e,"height","4cm"),h(e,"class","s-tFosYsIsg5Dq"),v(e,p,34,6,1140)},m:function(u,o){w(u,e,o)},p:function(u,o){o&1&&!j(e.src,t=u[4])&&h(e,"src",t)},d:function(u){u&&f(e)}};return g("SvelteRegisterBlock",{block:a,id:y.name,type:"each",source:"(34:4) {#each currentPage as qr}",ctx:l}),a}function q(l){let e,t,a=l[0];I(a);let s=[];for(let o=0;o<a.length;o+=1)s[o]=y(Q(l,a,o));const u={c:function(){e=_("div"),t=_("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l:function(i){e=m(i,"DIV",{class:!0});var r=x(e);t=m(r,"DIV",{class:!0,style:!0});var n=x(t);for(let c=0;c<s.length;c+=1)s[c].l(n);n.forEach(f),r.forEach(f),this.h()},h:function(){h(t,"class","page s-tFosYsIsg5Dq"),d(t,"display","grid"),d(t,"grid-template-columns","repeat(4, minmax(0, 1fr))"),d(t,"gap","0.2cm"),d(t,"row-gap","0.9cm"),v(t,p,21,2,551),h(e,"class","book s-tFosYsIsg5Dq"),v(e,p,20,0,530)},m:function(i,r){w(i,e,r),C(e,t);for(let n=0;n<s.length;n+=1)s[n].m(t,null)},p:function(i,[r]){if(r&1){a=i[0],I(a);let n;for(n=0;n<a.length;n+=1){const c=Q(i,a,n);s[n]?s[n].p(c,r):(s[n]=y(c),s[n].c(),s[n].m(t,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},i:D,o:D,d:function(i){i&&f(e),M(s,i)}};return g("SvelteRegisterBlock",{block:u,id:q.name,type:"component",source:"",ctx:l}),u}const k=24;function O(l,e,t){let a,{$$slots:s={},$$scope:u}=e;Y("Qr",s,[]);const o=S,i=[];for(let c=0;c<o.length;c+=k){const P=o.slice(c,c+k);i.push(P)}let r=0;b(()=>{location.hash&&location.hash.slice(1)&&(t(1,r=parseInt(location.hash.slice(1))),console.log({pageIndex:r}))});const n=[];return Object.keys(e).forEach(c=>{!~n.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&N.warn(`<Qr> was created with unknown prop '${c}'`)}),l.$capture_state=()=>({onMount:b,qrs:S,list:o,pages:i,chunkSize:k,pageIndex:r,currentPage:a}),l.$inject_state=c=>{"pageIndex"in c&&t(1,r=c.pageIndex),"currentPage"in c&&t(0,a=c.currentPage)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),l.$$.update=()=>{l.$$.dirty&2&&t(0,a=i[r]),l.$$.dirty&1&&console.log({currentPage:a})},[a,r]}class G extends R{constructor(e){super(e);E(this,e,O,q,F,{}),g("SvelteRegisterComponent",{component:this,tagName:"Qr",options:e,id:q.name})}}export{G as default};
//# sourceMappingURL=qr.svelte-433b74af.js.map

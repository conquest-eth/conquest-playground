import{S as oe,i as ne,s as ce,d as v,Q as se,v as ie,b as X,p as q,k as D,r as re,u as S,w as le,x as R,g as y,ap as T,e as V,c as W,f as z,h as p,aN as C,j as L,N as Q,z as ae,A as ue,B as fe,E as de}from"./vendor-e78c39f1.js";import{C as U}from"./Copiable-f9ca3aee.js";const{console:F}=se,G="src/lib/components/account/Blockie.svelte";function H(s){let e,o;const r={c:function(){e=V("canvas"),this.h()},l:function(n){e=W(n,"CANVAS",{class:!0,alt:!0}),z(e).forEach(y),this.h()},h:function(){p(e,"class",o=""+(C(s[2])+" s-i5t29XReMraI")),p(e,"alt",s[3]),L(e,G,116,2,4136)},m:function(n,c){D(n,e,c),s[7](e)},p:function(n,c){c&4&&o!==(o=""+(C(n[2])+" s-i5t29XReMraI"))&&p(e,"class",o),c&8&&p(e,"alt",n[3])},i:Q,o:Q,d:function(n){n&&y(e),s[7](null)}};return v("SvelteRegisterBlock",{block:r,id:H.name,type:"else",source:"(116:0) {:else}",ctx:s}),r}function J(s){let e,o;e=new U({props:{text:s[3],copiedDirection:s[0],$$slots:{default:[K]},$$scope:{ctx:s}},$$inline:!0});const r={c:function(){ae(e.$$.fragment)},l:function(n){ue(e.$$.fragment,n)},m:function(n,c){fe(e,n,c),o=!0},p:function(n,c){const m={};c&8&&(m.text=n[3]),c&1&&(m.copiedDirection=n[0]),c&131100&&(m.$$scope={dirty:c,ctx:n}),e.$set(m)},i:function(n){o||(R(e.$$.fragment,n),o=!0)},o:function(n){S(e.$$.fragment,n),o=!1},d:function(n){de(e,n)}};return v("SvelteRegisterBlock",{block:r,id:J.name,type:"if",source:"(112:0) {#if copiable}",ctx:s}),r}function K(s){let e,o;const r={c:function(){e=V("canvas"),this.h()},l:function(n){e=W(n,"CANVAS",{class:!0,alt:!0}),z(e).forEach(y),this.h()},h:function(){p(e,"class",o=""+(C(s[2])+" s-i5t29XReMraI")),p(e,"alt",s[3]),L(e,G,113,4,4053)},m:function(n,c){D(n,e,c),s[6](e)},p:function(n,c){c&4&&o!==(o=""+(C(n[2])+" s-i5t29XReMraI"))&&p(e,"class",o),c&8&&p(e,"alt",n[3])},d:function(n){n&&y(e),s[6](null)}};return v("SvelteRegisterBlock",{block:r,id:K.name,type:"slot",source:"(113:2) <Copiable text={address} {copiedDirection}>",ctx:s}),r}function P(s){let e,o,r,i;const n=[J,H],c=[];function m(a,l){return a[1]?0:1}e=m(s),o=c[e]=n[e](s);const f={c:function(){o.c(),r=q()},l:function(l){o.l(l),r=q()},m:function(l,h){c[e].m(l,h),D(l,r,h),i=!0},p:function(l,[h]){let u=e;e=m(l),e===u?c[e].p(l,h):(re(),S(c[u],1,1,()=>{c[u]=null}),le(),o=c[e],o?o.p(l,h):(o=c[e]=n[e](l),o.c()),R(o,1),o.m(r.parentNode,r))},i:function(l){i||(R(o),i=!0)},o:function(l){S(o),i=!1},d:function(l){c[e].d(l),l&&y(r)}};return v("SvelteRegisterBlock",{block:f,id:P.name,type:"component",source:"",ctx:s}),f}function Y(s,e,o,r,i,n){const c=Math.sqrt(e.length),m=c*r;s.width=m,s.height=m;const f=s.getContext("2d");if(f){f.fillStyle=i,f.fillRect(0,0,s.width,s.height),f.fillStyle=o;for(let a=0;a<e.length;a++)if(f.fillStyle=e[a]===1?o:n,e[a]){const l=Math.floor(a/c),h=a%c;f.fillRect(h*r,l*r,r,r)}}else console.error("could not create 2d context for Blockie canvas")}function he(s,e,o){let{$$slots:r={},$$scope:i}=e;ie("Blockie",r,[]);let{copiedDirection:n="right"}=e,{copiable:c=!0}=e,{class:m=""}=e,{address:f}=e,{scale:a=4}=e,l,h;const u=new Array(4);function M(t){for(let d=0;d<u.length;d++)u[d]=0;for(let d=0;d<t.length;d++)u[d%4]=(u[d%4]<<5)-u[d%4]+t.charCodeAt(d)}function _(){const t=u[0]^u[0]<<11;return u[0]=u[1],u[1]=u[2],u[2]=u[3],u[3]=u[3]^u[3]>>19^t^t>>8,(u[3]>>>0)/(1<<31>>>0)}function B(){const t=Math.floor(_()*360),d=_()*60+40+"%",g=(_()+_()+_()+_())*25+"%";return"hsl("+t+","+d+","+g+")"}function j(t){const d=t,g=t,k=Math.ceil(d/2),te=d-k,N=[];for(let I=0;I<g;I++){let w=[];for(let b=0;b<k;b++)w[b]=Math.floor(_()*2.3);const O=w.slice(0,te);O.reverse(),w=w.concat(O);for(let b=0;b<w.length;b++)N.push(w[b])}return N}function A(){if(l&&l.address===f&&l.scale===a)return;l={address:f,scale:a},M(f&&f.toLowerCase()||"0x0000000000000000000000000000000000000000");const t=B(),d=B(),g=B(),k=j(8);Y(h,k,t,a,d,g)}X(A);let E=!1;async function Z(){navigator.clipboard.writeText(f),E=!0,setTimeout(()=>E=!1,600)}const x=["copiedDirection","copiable","class","address","scale"];Object.keys(e).forEach(t=>{!~x.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&F.warn(`<Blockie> was created with unknown prop '${t}'`)});function $(t){T[t?"unshift":"push"](()=>{h=t,o(4,h)})}function ee(t){T[t?"unshift":"push"](()=>{h=t,o(4,h)})}return s.$$set=t=>{"copiedDirection"in t&&o(0,n=t.copiedDirection),"copiable"in t&&o(1,c=t.copiable),"class"in t&&o(2,m=t.class),"address"in t&&o(3,f=t.address),"scale"in t&&o(5,a=t.scale)},s.$capture_state=()=>({afterUpdate:X,Copiable:U,copiedDirection:n,copiable:c,_class:m,address:f,scale:a,lastOptions:l,canvas:h,randseed:u,seedrand:M,rand:_,createColor:B,createImageData:j,setCanvas:Y,update:A,copied:E,copy:Z}),s.$inject_state=t=>{"copiedDirection"in t&&o(0,n=t.copiedDirection),"copiable"in t&&o(1,c=t.copiable),"_class"in t&&o(2,m=t._class),"address"in t&&o(3,f=t.address),"scale"in t&&o(5,a=t.scale),"lastOptions"in t&&(l=t.lastOptions),"canvas"in t&&o(4,h=t.canvas),"copied"in t&&(E=t.copied)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[n,c,m,f,h,a,$,ee]}class pe extends oe{constructor(e){super(e);ne(this,e,he,P,ce,{copiedDirection:0,copiable:1,class:2,address:3,scale:5}),v("SvelteRegisterComponent",{component:this,tagName:"Blockie",options:e,id:P.name});const{ctx:o}=this.$$,r=e.props||{};o[3]===void 0&&!("address"in r)&&F.warn("<Blockie> was created without expected prop 'address'")}get copiedDirection(){throw new Error("<Blockie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set copiedDirection(e){throw new Error("<Blockie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get copiable(){throw new Error("<Blockie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set copiable(e){throw new Error("<Blockie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get class(){throw new Error("<Blockie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set class(e){throw new Error("<Blockie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get address(){throw new Error("<Blockie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set address(e){throw new Error("<Blockie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<Blockie>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(e){throw new Error("<Blockie>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{pe as B};
//# sourceMappingURL=Blockie-6a051512.js.map

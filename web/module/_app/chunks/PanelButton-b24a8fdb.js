import{S as F,i as G,s as H,d as A,V as J,v as K,e as P,n as N,c as B,f as E,g,q as R,h as n,j as y,k as Q,L as h,M as W,X as x,Y as $,Z as ee,av as oe,x as te,u as re,au as se}from"./vendor-e78c39f1.js";const p="src/lib/components/generic/PanelButton.svelte";function M(r){let t,o,c,C,D,m,k,V,u,v,b,l,f,S,_,e,I,O,q,i,T,U;const L=r[10].default,d=J(L,r,r[9],null),X={c:function(){t=P("div"),o=P("button"),c=P("div"),D=N(),m=P("div"),V=N(),u=P("div"),b=N(),l=P("div"),S=N(),_=P("div"),e=P("div"),I=P("div"),d&&d.c(),this.h()},l:function(s){t=B(s,"DIV",{class:!0});var a=E(t);o=B(a,"BUTTON",{label:!0,class:!0});var w=E(o);c=B(w,"DIV",{class:!0}),E(c).forEach(g),D=R(w),m=B(w,"DIV",{class:!0}),E(m).forEach(g),V=R(w),u=B(w,"DIV",{class:!0}),E(u).forEach(g),b=R(w),l=B(w,"DIV",{class:!0}),E(l).forEach(g),S=R(w),_=B(w,"DIV",{class:!0});var Y=E(_);e=B(Y,"DIV",{});var Z=E(e);I=B(Z,"DIV",{class:!0});var z=E(I);d&&d.l(z),z.forEach(g),Z.forEach(g),Y.forEach(g),w.forEach(g),a.forEach(g),this.h()},h:function(){n(c,"class",C="absolute left-0 -top-0 w-4 h-4 border-r-0 border-l-2 border-t-2 border-b-0 "+r[4]),y(c,p,26,4,778),n(m,"class",k="absolute -left-0 -bottom-0 w-4 h-4 border-r-0 border-l-2 border-b-2 border-t-0 "+r[4]),y(m,p,27,4,893),n(u,"class",v="absolute -right-0 -top-0 w-4 h-4 border-r-2 border-l-0 border-t-2 border-b-0 "+r[4]),y(u,p,28,4,1012),n(l,"class",f="absolute -right-0 -bottom-0 w-4 h-4 border-r-2 border-l-0 border-t-0 border-b-2 "+r[4]),y(l,p,29,4,1129),n(I,"class","px-4 py-2 relative"),y(I,p,32,8,1341),y(e,p,31,6,1327),n(_,"class",O="block relative border overflow-hidden "+r[3]),y(_,p,30,4,1249),o.disabled=r[2],n(o,"label",r[1]),n(o,"class","relative p-1"),y(o,p,25,2,716),n(t,"class",q="inline-block "+r[5]+" "+r[0]),y(t,p,24,0,659)},m:function(s,a){Q(s,t,a),h(t,o),h(o,c),h(o,D),h(o,m),h(o,V),h(o,u),h(o,b),h(o,l),h(o,S),h(o,_),h(_,e),h(e,I),d&&d.m(I,null),i=!0,T||(U=W(o,"click",r[11],!1,!1,!1),T=!0)},p:function(s,[a]){(!i||a&16&&C!==(C="absolute left-0 -top-0 w-4 h-4 border-r-0 border-l-2 border-t-2 border-b-0 "+s[4]))&&n(c,"class",C),(!i||a&16&&k!==(k="absolute -left-0 -bottom-0 w-4 h-4 border-r-0 border-l-2 border-b-2 border-t-0 "+s[4]))&&n(m,"class",k),(!i||a&16&&v!==(v="absolute -right-0 -top-0 w-4 h-4 border-r-2 border-l-0 border-t-2 border-b-0 "+s[4]))&&n(u,"class",v),(!i||a&16&&f!==(f="absolute -right-0 -bottom-0 w-4 h-4 border-r-2 border-l-0 border-t-0 border-b-2 "+s[4]))&&n(l,"class",f),d&&d.p&&(!i||a&512)&&x(d,L,s,s[9],i?ee(L,s[9],a,null):$(s[9]),null),(!i||a&8&&O!==(O="block relative border overflow-hidden "+s[3]))&&n(_,"class",O),(!i||a&4)&&oe(o,"disabled",s[2]),(!i||a&2)&&n(o,"label",s[1]),(!i||a&33&&q!==(q="inline-block "+s[5]+" "+s[0]))&&n(t,"class",q)},i:function(s){i||(te(d,s),i=!0)},o:function(s){re(d,s),i=!1},d:function(s){s&&g(t),d&&d.d(s),T=!1,U()}};return A("SvelteRegisterBlock",{block:X,id:M.name,type:"component",source:"",ctx:r}),X}function le(r,t,o){let c,C,D,{$$slots:m={},$$scope:k}=t;K("PanelButton",m,["default"]);let{class:V=""}=t,{label:u}=t,{color:v=void 0}=t,{borderColor:b=void 0}=t,{cornerColor:l=void 0}=t,{disabled:f=!1}=t;const S=["class","label","color","borderColor","cornerColor","disabled"];Object.keys(t).forEach(e=>{!~S.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<PanelButton> was created with unknown prop '${e}'`)});function _(e){se.call(this,r,e)}return r.$$set=e=>{"class"in e&&o(0,V=e.class),"label"in e&&o(1,u=e.label),"color"in e&&o(6,v=e.color),"borderColor"in e&&o(7,b=e.borderColor),"cornerColor"in e&&o(8,l=e.cornerColor),"disabled"in e&&o(2,f=e.disabled),"$$scope"in e&&o(9,k=e.$$scope)},r.$capture_state=()=>({class_names:V,label:u,color:v,borderColor:b,cornerColor:l,disabled:f,actualBorderColor:D,actualCornerColor:C,actualColor:c}),r.$inject_state=e=>{"class_names"in e&&o(0,V=e.class_names),"label"in e&&o(1,u=e.label),"color"in e&&o(6,v=e.color),"borderColor"in e&&o(7,b=e.borderColor),"cornerColor"in e&&o(8,l=e.cornerColor),"disabled"in e&&o(2,f=e.disabled),"actualBorderColor"in e&&o(3,D=e.actualBorderColor),"actualCornerColor"in e&&o(4,C=e.actualCornerColor),"actualColor"in e&&o(5,c=e.actualColor)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&68&&o(5,c=f?"text-gray-600":v||"text-cyan-300"),r.$$.dirty&388&&o(4,C=f?"border-gray-600":l||b||"border-cyan-300"),r.$$.dirty&388&&o(3,D=f?"border-gray-600":b||l||"border-cyan-600")},[V,u,f,D,C,c,v,b,l,k,m,_]}class ae extends F{constructor(t){super(t);G(this,t,le,M,H,{class:0,label:1,color:6,borderColor:7,cornerColor:8,disabled:2}),A("SvelteRegisterComponent",{component:this,tagName:"PanelButton",options:t,id:M.name});const{ctx:o}=this.$$,c=t.props||{};o[1]===void 0&&!("label"in c)&&console.warn("<PanelButton> was created without expected prop 'label'")}get class(){throw new Error("<PanelButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set class(t){throw new Error("<PanelButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<PanelButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(t){throw new Error("<PanelButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get color(){throw new Error("<PanelButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set color(t){throw new Error("<PanelButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get borderColor(){throw new Error("<PanelButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set borderColor(t){throw new Error("<PanelButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get cornerColor(){throw new Error("<PanelButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set cornerColor(t){throw new Error("<PanelButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get disabled(){throw new Error("<PanelButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set disabled(t){throw new Error("<PanelButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ae as P};
//# sourceMappingURL=PanelButton-b24a8fdb.js.map
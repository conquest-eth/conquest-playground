import{F as d,a5 as c}from"./vendor-e78c39f1.js";import{s as p}from"./spaceInfo-b394211b.js";import{s as u}from"./optimisticSpace-8b3fc51e.js";import{a as y}from"./wallet-c826be1b.js";class m{constructor(t){this.spaceInfo=t,this.store=d({}),u.subscribe(this.onSpaceUpdate.bind(this))}getPendingSpending(t,r,i){let s=c.from(0),a=c.from(0);const n=t.pendingActions;for(const e of n)if(!e.counted&&e.action.type==="CAPTURE"){const o=e.action;if(e.status!=="FAILURE"){if(e.status!=="CANCELED"){if(e.status!=="TIMEOUT"){if((e.status==="PENDING"||e.status==="LOADING"&&y()-e.action.timestamp<60)&&o.planetCoords){const f=p.getPlanetInfo(o.planetCoords.x,o.planetCoords.y),l=c.from(f.stats.stake).mul("100000000000000");i.sub(a).gte(l)?a=a.add(l):s=s.add(l)}}}}}return{playTokenDelta:s,freePlayTokenDelta:a}}onSpaceUpdate(t){var i,s;if(!((s=(i=t.queryState.data)==null?void 0:i.player)==null?void 0:s.id))this.data={};else{let a=t.queryState.data.player.playTokenBalance,n=t.queryState.data.player.freePlayTokenBalance;const{playTokenDelta:e,freePlayTokenDelta:o}=this.getPendingSpending(t,a,n);a=a.sub(e),n=n.sub(o),this.data={playTokenBalance:a,freePlayTokenBalance:n}}this.store.set(this.data)}subscribe(t,r){return this.store.subscribe(t,r)}}const b=new m(p);typeof window!="undefined"&&(window.myTokens=b);export{b as m};
//# sourceMappingURL=token-c96bed7f.js.map

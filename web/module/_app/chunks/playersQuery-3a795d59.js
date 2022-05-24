import{S as u}from"./subgraph-aa394bde.js";import{H as h}from"./graphql-582eebcc.js";import{g as c}from"./wallet-c826be1b.js";import{F as d}from"./vendor-e78c39f1.js";import{a as b}from"./account-c0a26acd.js";function A(o,e){if(o&&e&&o.alliances&&e.alliances){for(const r of o.alliances)if(e.alliances.find(s=>s.address===r.address))return!0}return!1}class f{constructor(e){this.$players={},this.$alliances={},this.stopAccountSubscription=void 0,this.queryStore=new h(e,`query($first: Int! $lastId: ID!) {
  owners(first: $first where: {id_gt: $lastId }) {
    id
    alliances {
      alliance {
        id
        frontendURI
      }
    }
  }
  chain(id: "Chain") {
    blockHash
    blockNumber
  }
}`,c,{list:{path:"owners"}}),this.store=d({step:"IDLE"},this.start.bind(this))}getPlayer(e){return this.$players[e]}start(){return this.stopAccountSubscription=b.subscribe(async e=>{await this._handleAccountChange(e)}),this.unsubscribeFromQuery=this.queryStore.subscribe(this.update.bind(this)),this.stop.bind(this)}stop(){this.stopAccountSubscription&&(this.stopAccountSubscription(),this.stopAccountSubscription=void 0),this.unsubscribeFromQuery&&(this.unsubscribeFromQuery(),this.unsubscribeFromQuery=void 0)}triggerUpdate(){return new Promise((e,r)=>{this._resolveFetch=e,this.queryStore.fetch({blockNumber:c.chainInfo.lastBlockNumber}).catch(s=>r(s))})}async _handleAccountChange(e){var s;const r=(s=e.ownerAddress)==null?void 0:s.toLowerCase();this.queryStore.runtimeVariables.owner!==r&&(this.queryStore.runtimeVariables.owner=r,this.store.update(t=>(t.data&&(t.data.loading=!0),t)),this.queryStore.fetch({blockNumber:c.chainInfo.lastBlockNumber}))}_transform(e){if(!e)return;const r={};if(this.queryStore.runtimeVariables.owner){const s=this.queryStore.runtimeVariables.owner.toLowerCase(),t=e.owners.find(n=>n.id===s);if(t)for(const n of t.alliances)r[n.alliance.id]=!0}this.$players={},this.$alliances={};for(const s of e.owners){let t=!1;const n=s.alliances.map(i=>{const a=r[i.alliance.id];return a&&(t=!0),{address:i.alliance.id,ally:a,frontendURI:i.alliance.frontendURI}}),l=this.$players[s.id]={address:s.id,alliances:n,ally:t};for(const i of s.alliances){let a=this.$alliances[i.alliance.id];a||(a=this.$alliances[i.alliance.id]={address:i.alliance.id,members:[],frontendURI:i.alliance.frontendURI}),a.members.push(l)}}return{loading:!1,players:this.$players,chain:e.chain?{blockHash:e.chain.blockHash,blockNumber:e.chain.blockNumber}:void 0,alliances:this.$alliances}}async update(e){const r={step:e.step,error:e.error,data:this._transform(e.data)};this.store.set(r);const s=this._resolveFetch;s&&(this._resolveFetch=void 0,s())}acknowledgeError(){return this.queryStore.acknowledgeError()}subscribe(e,r){return this.store.subscribe(e,r)}}const g=new f(u);export{A as h,g as p};
//# sourceMappingURL=playersQuery-3a795d59.js.map

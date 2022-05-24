var U=Object.defineProperty,O=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var A=(t,e,n)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))D.call(e,n)&&A(t,n,e[n]);if(N)for(var n of N(e))$.call(e,n)&&A(t,n,e[n]);return t},y=(t,e)=>O(t,B(e));import{F as x,a5 as r}from"./vendor-e78c39f1.js";import{a as o}from"./account-c0a26acd.js";import{g as w,a as p,w as u,d as P}from"./wallet-c826be1b.js";import{m as E,c as I}from"./config-af7f3a10.js";import{s as S}from"./spaceInfo-b394211b.js";import{S as F}from"./subgraph-aa394bde.js";import{H as q}from"./graphql-582eebcc.js";import{i as C}from"./contracts-69d01f63.js";class Q{constructor(){this.checkingInProgress=!1,this.stopAccountSubscription=void 0,this.stopChainTempoSubscription=void 0,this.state=[],this.store=x(this.state,this._start.bind(this))}subscribe(e,n){return this.store.subscribe(e,n)}_start(){return this.stopAccountSubscription=o.subscribe(async e=>{await this._handleAccountChange(e)}),this.stopChainTempoSubscription=w.subscribe(async e=>{await this._handleChainTempo(e)}),this._stop.bind(this)}async _handleAccountChange(e){if(this.processingAccountChanges&&e.ownerAddress===this.ownerAddress){console.log("already processing..., should we postpone, or cancel ?");return}this.processingAccountChanges=!0;try{if(e.data){const n=Object.keys(e.data.pendingActions);for(const s of n){const i=e.data.pendingActions[s];if(typeof i=="number")continue;this.state.find(m=>m.id===s)||(console.log(`new pending tx ${s}`),this.state.push({id:s,status:i.external?i.external.status:i.final?i.final.status:"LOADING",final:i.external?i.external.final:i.final?i.final.timestamp:void 0,action:i}))}for(let s=this.state.length-1;s>=0;s--)(!e.data.pendingActions[this.state[s].id]||typeof e.data.pendingActions[this.state[s].id]=="number")&&this.state.splice(s,1)}else this.state.length=0;this.ownerAddress=e.ownerAddress,this._handleChainTempo(w.chainInfo),this._notify()}catch{}this.processingAccountChanges=!1}async _handleChainTempo(e){if(!e.lastBlockNumber){console.log("no block number, skip...");return}if(this.checkingInProgress){console.log("check in progress, skip...");return}const n=this.ownerAddress;this.checkingInProgress=!0;for(const s of this.state){if(s.action.external){if(s.final=s.action.external.final,s.status=s.action.external.status,s.final)try{this._handleFinalAcknowledgement(s,s.final,"SUCCESS")}catch(i){console.error(i)}else s.action.type==="RESOLUTION"&&s.action.fleetId&&o.getAcknowledgement(s.action.fleetId)&&await o.markAsFullyAcknwledged(s.id,p());continue}try{if(await this._checkAction(n,s,e.lastBlockNumber),this.ownerAddress!==n){console.log("cancel checks as account changed"),this.checkingInProgress=!1;return}s.action.type==="SEND"&&await this._checkResolutionViaSend(n,s,e.lastBlockNumber)}catch(i){console.error(i)}if(this.ownerAddress!==n){console.log("cancel checks as account changed"),this.checkingInProgress=!1;return}}this.checkingInProgress=!1}async _handleFinalAcknowledgement(e,n,s){const i=s==="SUCCESS"?"SUCCESS":"ERROR";if(await o.recordTxActionAsFinal(e.id,s,n),p()-n>E)return console.log(`delay over, deleting ${e.id} directly`),await o.deletePendingAction(e.id),!0;if(e.action.acknowledged){if(e.action.acknowledged!==i)return console.log(`cancel acknowledgement as not matching new status ${e.id}`),console.log({type:e.action.type,acknowledged:e.action.acknowledged,acknowledgementStatus:i}),console.log(e),await o.cancelActionAcknowledgment(e.id),!0;if(typeof e.action!="number")return console.log(`acknowledgedment final for ${e.id}`),await o.markAsFullyAcknwledged(e.id,n),!0}else if(s==="SUCCESS")if(e.action.type==="SEND"){if(o.getAcknowledgement(e.action.fleetId))return await o.markAsFullyAcknwledged(e.id,p()),!0}else if(e.action.type==="RESOLUTION"){if(o.getAcknowledgement(e.action.fleetId))return await o.markAsFullyAcknwledged(e.id,p()),!0}else return await o.markAsFullyAcknwledged(e.id,p()),!0;return!1}async _checkResolutionViaSend(e,n,s){if(!!u.provider&&typeof n.action!="number"&&n.status==="SUCCESS"&&n.final&&n.action.acknowledged!=="SUCCESS"&&n.action.actualLaunchTime){const i=S.getPlanetInfo(n.action.from.x,n.action.from.y),l=S.getPlanetInfo(n.action.to.x,n.action.to.y),m=S.timeLeft(0,i,l,0).fullTime,c=Math.max(m,n.action.arrivalTimeWanted-n.action.actualLaunchTime);if(p()>n.action.actualLaunchTime+c){const a=u.contracts||P.contracts;if(!a){console.log("no contracts setup, skip for now");return}const d=await a.OuterSpace.getFleet(n.action.fleetId,"0");if(d.owner!="0x0000000000000000000000000000000000000000"&&d.quantity==0){let _=!1;const f=Math.max(0,s-I),g=await u.provider.getBlock(f),h=await u.contracts.OuterSpace.getFleet(n.action.fleetId,"0",{blockTag:f});if(h.owner!="0x0000000000000000000000000000000000000000"&&h.quantity==0&&(_=!0),this.ownerAddress!==e)return;await o.recordExternalResolution(n.id,n.action.to,n.action.fleetId,_?g.timestamp:void 0)}}}}async _checkAction(e,n,s){if(!u.provider){console.log("provider not available....");return}if(typeof n.action=="number"){p()-n.action>E&&(console.log(`already number, delay over, deleting ${n.id}`),o.deletePendingAction(n.id));return}if(n.final&&n.status!=="PENDING"&&n.status!=="LOADING"){await this._handleFinalAcknowledgement(n,n.final,n.status);return}else if(n.final&&n.action.external){await this._handleFinalAcknowledgement(n,n.final,n.action.external.status);return}let i=!1;if(n.id==="undefined"){(n.status!=="FAILURE"||!n.final)&&(n.status="FAILURE",n.final=p(),this._notify());return}const l=await u.provider.getTransaction(n.id);let m=!0;if(l){let c;if(l.blockNumber&&(c=await u.provider.getTransactionReceipt(n.id)),c){const a=await u.provider.getBlock(l.blockHash);if(a){m=!1;const d=c.confirmations>=I;c.status===0?((n.status!=="FAILURE"||n.final!==a.timestamp)&&(n.status="FAILURE",n.txTimestamp=a.timestamp,i=!0,n.final=d?a.timestamp:void 0),d&&await this._handleFinalAcknowledgement(n,a.timestamp,"FAILURE")):((n.status!=="SUCCESS"||n.final!==a.timestamp)&&(n.status="SUCCESS",n.txTimestamp=a.timestamp,i=!0,n.final=d?a.timestamp:void 0),d&&await this._handleFinalAcknowledgement(n,a.timestamp,"SUCCESS"))}}}else{const c=Math.max(s-I,0),a=await u.provider.getBlock(c),d=await u.provider.getTransactionCount(n.action.txOrigin||e,a.hash);if(await u.provider.getTransaction(n.id))return;if(typeof n.action.nonce=="number"&&d>n.action.nonce&&(m=!1,n.status!=="CANCELED"||!n.final)){let f=!1;if(n.action.type==="SEND"){const g=u.contracts||P.contracts;if(!g){console.log("no contracts setup, skip for now");return}const h=await g.OuterSpace.getFleet(n.action.fleetId,"0",{blockTag:a.hash});h.owner!="0x0000000000000000000000000000000000000000"?(n.status!=="SUCCESS"||!n.final)&&(n.status="SUCCESS",n.final=a.timestamp,n.txTimestamp=h.launchTime,await this._handleFinalAcknowledgement(n,a.timestamp,"SUCCESS"),i=!0):f=!0}else f=!0;f&&(n.status="CANCELED",n.final=n.action.timestamp,await this._handleFinalAcknowledgement(n,n.action.timestamp,"CANCELED"),i=!0)}}m&&(p()-n.action.timestamp>3600?(n.status!=="TIMEOUT"||n.final!==n.action.timestamp)&&(n.status="TIMEOUT",n.final=n.action.timestamp,await this._handleFinalAcknowledgement(n,n.action.timestamp,"TIMEOUT"),i=!0):n.status!=="PENDING"&&(n.status="PENDING",i=!0)),this.ownerAddress===e&&i&&this._notify()}_stop(){this.stopAccountSubscription&&(this.stopAccountSubscription(),this.stopAccountSubscription=void 0),this.stopChainTempoSubscription&&(this.stopChainTempoSubscription(),this.stopChainTempoSubscription=void 0)}_notify(){this.store.set(this.state)}}const L=new Q;typeof window!="undefined"&&(window.pendingActions=L);function T(t){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,planet:t.planet,fleetLoss:parseInt(t.fleetLoss),planetLoss:parseInt(t.planetLoss),inFlightFleetLoss:parseInt(t.inFlightFleetLoss),inFlightPlanetLoss:parseInt(t.inFlightPlanetLoss),destinationOwner:t.destinationOwner,gift:t.gift,fleet:t.fleet,from:t.from,won:t.won,quantity:parseInt(t.quantity),newNumspaceships:parseInt(t.newNumspaceships),newOverflow:parseInt(t.newOverflow),newTravelingUpkeep:parseInt(t.newTravelingUpkeep),accumulatedAttackAdded:parseInt(t.accumulatedAttackAdded),accumulatedDefenseAdded:parseInt(t.accumulatedDefenseAdded),numSpaceshipsAtArrival:parseInt(t.numSpaceshipsAtArrival),operator:t.operator,planetActive:t.planetActive,sender:t.sender,taxLoss:parseInt(t.taxLoss)}}function k(t,e){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,planet:t.planet,stake:r.from(t.stake),exitTime:parseInt(t.exitTime),complete:t.complete,interupted:e,success:t.success}}function Y(t){return console.log({newOwner:t.newOwner}),{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,blockNumber:t.blockNumber,timestamp:t.timestamp,planet:t.planet,newNumspaceships:parseInt(t.newNumspaceships),newOverflow:parseInt(t.newOverflow),newTravelingUpkeep:parseInt(t.newTravelingUpkeep),newOwner:t.newOwner}}function R(t){return k(t,!0)}function H(t){return k(t,!1)}function W(t){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,planet:t.planet,numSpaceships:parseInt(t.numSpaceships),stake:r.from(t.stake)}}function v(t){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,planet:t.planet,fleet:t.fleet,quantity:parseInt(t.quantity),sender:t.sender,operator:t.operator}}function G(t){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,planet:t.planet,fleet:t.fleet,newNumspaceships:parseInt(t.newNumspaceships),newOverflow:parseInt(t.newOverflow),newTravelingUpkeep:parseInt(t.newTravelingUpkeep)}}function j(t){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,newStake:r.from(t.newStake)}}function M(t){return{id:t.id,__typename:t.__typename,transaction:t.transaction,owner:t.owner,timestamp:parseInt(t.timestamp),blockNumber:t.blockNumber,planet:t.planet,stake:r.from(t.stake)}}function oe(t){let e;return t.__typename==="FleetArrivedEvent"?e=T(t):t.__typename==="PlanetExitEvent"?e=k(t,t.interupted):t.__typename==="PlanetTransferEvent"?e=Y(t):t.__typename==="PlanetStakeEvent"?e=W(t):t.__typename==="FleetSentEvent"?e=v(t):t.__typename==="TravelingUpkeepReductionFromDestructionEvent"?e=G(t):t.__typename==="StakeToWithdrawEvent"?e=j(t):t.__typename==="ExitCompleteEvent"?e=M(t):console.error("unknown event",t),e}const V=E;class X{constructor(e){this.stopAccountSubscription=void 0,this.queryStore=new q(e,`query($first: Int! $lastId: ID! $owner: String $fromTime: Int! $exitTimeEnd: Int!) {
  nullplanets: planets(first: 1000 where: {owner: null}) {
    id
    numSpaceships
    flagTime
    travelingUpkeep
    overflow
    lastUpdated
    exitTime
    active
    rewardGiver
  }
  otherplanets: planets(first: $first where: {id_gt: $lastId ?$owner?owner_not: $owner?}) {
    id
    owner {
      id
    }
    numSpaceships
    flagTime
    travelingUpkeep
    overflow
    lastUpdated
    exitTime
    active
    rewardGiver
  }
  chain(id: "Chain") {
    blockHash
    blockNumber
  }
  _meta {
    block {
      number
      hash
    }
  }
  space(id: "Space") {
    minX
    maxX
    minY
    maxY
    address
  }
  ?$owner?
  owner(id: $owner) {
    id
    playTokenBalance
    freePlayTokenBalance
    tokenToWithdraw
  }
  myplanets: planets(first: 1000 where: {owner: $owner}) {
    id
    owner {
      id
    }
    numSpaceships
    flagTime
    travelingUpkeep
    overflow
    lastUpdated
    exitTime
    active
    rewardGiver
  }
  planetInteruptedExitEvents: planetExitEvents(where: {owner: $owner exitTime_gt: $fromTime interupted: true} orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
    transaction {id}
    owner {id}
    planet {id}
    exitTime
    stake
    interupted
    complete
    success
  }
  planetTimePassedExitEvents: planetExitEvents(where: {owner: $owner exitTime_gt: $fromTime exitTime_lt: $exitTimeEnd interupted: false} orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
    transaction {id}
    owner {id}
    planet {id}
    exitTime
    stake
    interupted
    complete
    success
  }
  fleetsArrivedFromYou: fleetArrivedEvents(where: {sender: $owner timestamp_gt: $fromTime} orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
    transaction {id}
    owner {id}
    planet {id}
    sender {id}
    operator
    fleet {id}
    destinationOwner {id}
    taxLoss
    planetActive
    numSpaceshipsAtArrival
    gift
    fleetLoss
    planetLoss
    inFlightFleetLoss
    inFlightPlanetLoss
    won
    newNumspaceships
    newTravelingUpkeep
    newOverflow
    accumulatedDefenseAdded
    accumulatedAttackAdded
    from {id}
    quantity
  }

  fleetsArrivedAsYou: fleetArrivedEvents(where: {sender_not: $owner owner: $owner destinationOwner_not: $owner timestamp_gt: $fromTime} orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
    transaction {id}
    owner {id}
    planet {id}
    sender {id}
    operator
    fleet {id}
    destinationOwner {id}
    taxLoss
    planetActive
    numSpaceshipsAtArrival
    gift
    fleetLoss
    planetLoss
    inFlightFleetLoss
    inFlightPlanetLoss
    won
    newNumspaceships
    newTravelingUpkeep
    newOverflow
    accumulatedDefenseAdded
    accumulatedAttackAdded
    from {id}
    quantity
  }

  fleetsArrivedToYou: fleetArrivedEvents(where: {destinationOwner: $owner sender_not: $owner timestamp_gt: $fromTime} orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
    transaction {id}
    owner {id}
    planet {id}
    sender {id}
    operator
    fleet {id}
    destinationOwner {id}
    taxLoss
    planetActive
    numSpaceshipsAtArrival
    gift
    fleetLoss
    planetLoss
    inFlightFleetLoss
    inFlightPlanetLoss
    won
    newNumspaceships
    newTravelingUpkeep
    newOverflow
    accumulatedDefenseAdded
    accumulatedAttackAdded
    from {id}
    quantity
  }
  fleetsSentExternally: fleetSentEvents(where: {sender: $owner owner_not: $owner operator_not: $owner timestamp_gt: $fromTime} orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
    transaction {id}
    owner {id}
    planet {id}
    sender {id}
    operator
    fleet {id resolveTransaction {id}}
    quantity
  }
  ?
}`,w,{list:{path:"otherplanets"},variables:{first:500},prefetchCallback:n=>{n.exitTimeEnd=Math.floor(Math.max(0,p()-S.exitDuration)),n.fromTime=Math.floor(Math.max(0,p()-V))}}),this.store=x({step:"IDLE"},this.start.bind(this))}start(){return this.stopAccountSubscription=o.subscribe(async e=>{await this._handleAccountChange(e)}),this.unsubscribeFromQuery=this.queryStore.subscribe(this.update.bind(this)),this.stop.bind(this)}stop(){this.stopAccountSubscription&&(this.stopAccountSubscription(),this.stopAccountSubscription=void 0),this.unsubscribeFromQuery&&(this.unsubscribeFromQuery(),this.unsubscribeFromQuery=void 0)}async _handleAccountChange(e){var s;const n=(s=e.ownerAddress)==null?void 0:s.toLowerCase();this.queryStore.runtimeVariables.owner!==n&&(this.queryStore.runtimeVariables.owner=n,this.store.update(i=>(i.data&&(i.data.loading=!0),i)),this.queryStore.fetch({blockNumber:w.chainInfo.lastBlockNumber}))}_transform(e){if(!e)return;if(e.space&&e.space.address.toLowerCase()!==C.contracts.OuterSpace.address.toLowerCase())return console.log("INVALID",{spaceAddress:e.space.address.toLowerCase(),contractAddress:C.contracts.OuterSpace.address.toLowerCase()}),{outofsync:void 0,invalid:!0,loading:!1,player:e.owner?{id:e.owner.id,playTokenBalance:r.from(e.owner.playTokenBalance),freePlayTokenBalance:r.from(e.owner.freePlayTokenBalance),tokenToWithdraw:r.from(e.owner.tokenToWithdraw)}:this.queryStore.runtimeVariables.owner?{id:this.queryStore.runtimeVariables.owner,playTokenBalance:r.from(0),freePlayTokenBalance:r.from(0),tokenToWithdraw:r.from(0)}:void 0,planets:[],space:e.space?{x1:-parseInt(e.space.minX),x2:parseInt(e.space.maxX),y1:-parseInt(e.space.minY),y2:parseInt(e.space.maxY),address:e.space.address}:void 0,chain:e.chain?{blockHash:e.chain.blockHash,blockNumber:e.chain.blockNumber}:void 0,_meta:e._meta,fleetsArrivedFromYou:[],fleetsArrivedToYou:[],fleetsArrivedAsYou:[],fleetsSentExternally:[],planetInteruptedExitEvents:[],planetTimePassedExitEvents:[]};let n;e._meta.block.number<w.chainInfo.lastBlockNumber-100&&(n={delta:w.chainInfo.lastBlockNumber-e._meta.block.number});const s=(e.myplanets||[]).concat(e.nullplanets.concat(e.otherplanets));return{loading:!1,outofsync:n,player:e.owner?{id:e.owner.id,playTokenBalance:r.from(e.owner.playTokenBalance),freePlayTokenBalance:r.from(e.owner.freePlayTokenBalance),tokenToWithdraw:r.from(e.owner.tokenToWithdraw)}:this.queryStore.runtimeVariables.owner?{id:this.queryStore.runtimeVariables.owner,playTokenBalance:r.from(0),freePlayTokenBalance:r.from(0),tokenToWithdraw:r.from(0)}:void 0,planets:s.map(i=>({id:i.id,owner:i.owner?i.owner.id:void 0,numSpaceships:parseInt(i.numSpaceships),flagTime:parseInt(i.flagTime),travelingUpkeep:parseInt(i.travelingUpkeep),overflow:parseInt(i.overflow),lastUpdated:parseInt(i.lastUpdated),exitTime:parseInt(i.exitTime),active:i.active,rewardGiver:i.rewardGiver})),space:e.space?{x1:-parseInt(e.space.minX),x2:parseInt(e.space.maxX),y1:-parseInt(e.space.minY),y2:parseInt(e.space.maxY),address:e.space.address}:void 0,chain:e.chain?{blockHash:e.chain.blockHash,blockNumber:e.chain.blockNumber}:void 0,_meta:e._meta,fleetsArrivedFromYou:e.fleetsArrivedFromYou?e.fleetsArrivedFromYou.map(T):[],fleetsArrivedToYou:e.fleetsArrivedToYou?e.fleetsArrivedToYou.map(T):[],fleetsArrivedAsYou:e.fleetsArrivedAsYou?e.fleetsArrivedAsYou.map(T):[],fleetsSentExternally:e.fleetsSentExternally?e.fleetsSentExternally.map(v):[],planetInteruptedExitEvents:e.planetInteruptedExitEvents?e.planetInteruptedExitEvents.map(R):[],planetTimePassedExitEvents:e.planetTimePassedExitEvents?e.planetTimePassedExitEvents.map(H):[]}}async update(e){const n={step:e.step,error:e.error,data:this._transform(e.data)};this.store.set(n)}acknowledgeError(){return this.queryStore.acknowledgeError()}subscribe(e,n){return this.store.subscribe(e,n)}}const z=new X(F);class J{constructor(){this.includedTx={},this.queryState={step:"IDLE"},this.stopSpaceQuerySubscription=void 0,this.stopPendingActionsSubscription=void 0,this.state={pendingActions:[],rawPendingActions:[],queryState:this.queryState},this.store=x(this.state,this._start.bind(this))}subscribe(e,n){return this.store.subscribe(e,n)}_handlePendingActions(e){if(this.state.rawPendingActions=e,!this.lastQueryTime)return console.log("no query yet, just get the pending actions"),this._updateAndNotify();const n={};for(const s of this.state.pendingActions)n[s.id]=!0;for(const s of this.state.rawPendingActions)n[s.id]||(s.action.timestamp>=this.lastQueryTime||s.action.external?this.state.pendingActions.push(y(b({},s),{counted:!!s.action.external})):s.action.timestamp<this.lastQueryTime&&(console.log(`WARNING pendingAction was submitted before lastQueryTime, ignore? ${s.id}`),this.state.pendingActions.push(y(b({},s),{counted:!!s.action.external}))));this._notify()}_updateAndNotify(){this.state.pendingActions=this.state.rawPendingActions.map(e=>y(b({},e),{counted:!!e.action.external||this.includedTx[e.id]})),this._notify()}async _handleSpaceQuery(e){if(!e.data||!e.data.chain)return;const n=[];for(const i of this.state.rawPendingActions)i.action.external||n.push(i.id);this.lastQueryTime=p();let s=[];if(n.length>0){const i={txs:n,blockHash:e.data.chain.blockHash},l=await F.query(`query($blockHash: String! $txs: [String]) {
      transactions( where: {id_in: $txs} block: {hash: $blockHash}) {
        id
      }
    }`,{variables:i,context:{requestPolicy:"cache-and-network"}});if(l.error){this.state.queryState.error=l.error.message,this._notify();return}l.data&&l.data.transactions&&(s=l.data.transactions.map(m=>m.id))}this.includedTx={};for(const i of s)this.includedTx[i]=!0;this.state={queryState:e,pendingActions:this.state.pendingActions,rawPendingActions:this.state.rawPendingActions},this._updateAndNotify()}_start(){return this.stopSpaceQuerySubscription=z.subscribe(async e=>{await this._handleSpaceQuery(e)}),this.stopPendingActionsSubscription=L.subscribe(async e=>{await this._handlePendingActions(e)}),this._stop.bind(this)}_stop(){this.stopPendingActionsSubscription&&(this.stopPendingActionsSubscription(),this.stopPendingActionsSubscription=void 0),this.stopSpaceQuerySubscription&&(this.stopSpaceQuerySubscription(),this.stopSpaceQuerySubscription=void 0)}_notify(){this.store.set(this.state)}}const le=new J;export{oe as p,le as s};
//# sourceMappingURL=optimisticSpace-8b3fc51e.js.map

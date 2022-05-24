import{b as m}from"./base-652be6d9.js";import{w as r}from"./wallet-c826be1b.js";import{p as O,b as p}from"./privateWallet-7a0cfca0.js";import{a as y,x as S}from"./account-c0a26acd.js";import{s as I}from"./spaceInfo-b394211b.js";import{a5 as C,G as A,aM as w}from"./vendor-e78c39f1.js";import{m as L}from"./token-c96bed7f.js";var g;(function(n){n[n.WELCOME=0]="WELCOME",n[n.TUTORIAL_FLEET_AMOUNT=1]="TUTORIAL_FLEET_AMOUNT",n[n.TUTORIAL_FLEET_PRE_TRANSACTION=2]="TUTORIAL_FLEET_PRE_TRANSACTION",n[n.SUGGESTION_PROFILE=3]="SUGGESTION_PROFILE"})(g||(g={}));class b extends m{constructor(){super({type:"CLAIM",step:"IDLE"})}async cancelCancelation(){this.setPartial({cancelingConfirmation:!1})}async cancel(e=!1){e?this.setPartial({cancelingConfirmation:!0}):this._reset()}async acknownledgeSuccess(){this._reset()}async acknownledgeError(){this.setPartial({error:void 0})}async claim(e){this.setPartial({data:{coords:e},step:"CONNECTING"}),await O.login(),this.setPartial({step:"CHOOSE_STAKE",cancelingConfirmation:!1})}async confirm(){var h,f,T,E;await O.login();const e=this.setPartial({step:"CREATING_TX"});if(!e.data){this.setPartial({step:"CHOOSE_STAKE",error:new Error("no flow data")});return}if(!r.provider){this.setPartial({step:"CHOOSE_STAKE",error:new Error("no provider")});return}let a;try{a=await r.provider.getBlock("latest")}catch(s){this.setPartial({step:"CHOOSE_STAKE",error:s});return}const o=I.getPlanetInfo(e.data.coords.x,e.data.coords.y);if(!o){this.setPartial({step:"CHOOSE_STAKE",error:new Error(`no planet at ${e.data.coords.x}, ${e.data.coords.y}`)});return}if(!y.isReady()){this.setPartial({step:"CHOOSE_STAKE",error:new Error("account not ready")});return}const i=C.from(o.stats.stake).mul("100000000000000");let c=(h=r)==null?void 0:h.contracts.PlayToken;A(L).freePlayTokenBalance.gte(i)&&(c=(f=r)==null?void 0:f.contracts.FreePlayToken);let d;try{d=await c.estimateGas.transferAndCall((T=r.contracts)==null?void 0:T.OuterSpace.address,i,w.encode(["address","uint256"],[r.address,S(e.data.coords.x,e.data.coords.y)]))}catch(s){this.setPartial({step:"CHOOSE_STAKE",error:s});return}const l=d.add(1e5);this.setPartial({step:"WAITING_TX"});let t;try{t=await c.transferAndCall((E=r.contracts)==null?void 0:E.OuterSpace.address,i,w.encode(["address","uint256"],[r.address,S(e.data.coords.x,e.data.coords.y)]),{gasLimit:l})}catch(s){if(s.transactionHash){t={hash:s.transactionHash};try{t=await r.provider.getTransaction(s.transactionHash)}catch{console.log("could not fetch tx, to get the nonce")}}if(!t||!t.hash){if(this.$store.step==="WAITING_TX")s.message&&s.message.indexOf("User denied")>=0?this.setPartial({step:"IDLE",error:void 0}):(console.error("Error on transferAndCall:",s),this.setPartial({error:s,step:"CHOOSE_STAKE"}));else throw s;return}}y.recordCapture(e.data.coords,t.hash,a.timestamp,t.nonce),y.isWelcomingStepCompleted(g.SUGGESTION_PROFILE)?this.setData({txHash:t.hash},{step:"SUCCESS"}):this.setData({txHash:t.hash},{step:"PROFILE_INFO"})}async acknowledgeProfileSuggestion(){y.recordWelcomingStep(g.SUGGESTION_PROFILE),this.$store.step==="PROFILE_INFO"&&this.setPartial({step:"SUCCESS"})}_reset(){this.setPartial({step:"IDLE",data:void 0,cancelingConfirmation:!1})}}const u=new b;typeof window!="undefined"&&(window.claimFlow=u);const R=typeof window!="undefined"?window.nacl:{},P="__VITE_PROFILE_URI__";class N extends m{constructor(){super({type:"MY_PROFILE",step:"IDLE"});r.subscribe(e=>{var a,o;((a=e.address)==null?void 0:a.toLowerCase())!==((o=this.$store.owner)==null?void 0:o.toLowerCase())&&this.setPartial({step:"IDLE",owner:void 0,account:void 0}),e.address&&this.getProfile(e.address)})}async getProfile(e){this.$store.step!=="READY"&&this.setPartial({step:"LOADING",owner:e});try{const i=await(await fetch(`${P}get/${e}`,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}})).json();this.setPartial({step:"READY",owner:e,account:i.account})}catch(a){this.setPartial({error:a})}}async setProfile(e){const{description:a}=e,o=this.$store.owner;await this.getProfile(o);const i=this.$store.account,c=O.getState(),d=p.bytesToBase64(R.sign(p.base64ToBytes(p.base64encode(JSON.stringify({description:a,nonceMsTimestamp:i?i.nonceMsTimestamp+1:0}))),c.signingKey.secretKey));if(i){const l={signedMessage:d};await fetch(`${P}save/${o}`,{method:"POST",body:JSON.stringify(l),headers:{"Content-type":"application/json; charset=UTF-8"}})}else{const l=p.bytesToBase64(c.messagingKey.publicKey),t=p.bytesToBase64(c.signingKey.publicKey),h=await r.provider.getSigner().signMessage(`My Public Encryption Key is ${l}
My Public Signing Key is ${t}
`),f={publicEncryptionKey:l,publicSigningKey:t,signature:h,update:{signedMessage:d}},E=await(await fetch(`${P}register/${o}`,{method:"POST",body:JSON.stringify(f),headers:{"Content-type":"application/json; charset=UTF-8"}})).json();console.log(E)}await this.getProfile(o),a&&this.recordTutorial()}recordTutorial(){u.acknowledgeProfileSuggestion()}async cancel(){this._reset()}async acknownledgeSuccess(){this._reset()}async acknownledgeError(){this.setPartial({error:void 0})}_reset(){this.setPartial({step:"IDLE",owner:void 0})}}var x=new N;export{g as T,x as m,u as s};
//# sourceMappingURL=myprofile-37a6a38f.js.map
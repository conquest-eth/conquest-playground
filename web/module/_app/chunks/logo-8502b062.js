import{B as g}from"./base-652be6d9.js";import{a as e}from"./wallet-c826be1b.js";import{l as a}from"./privateWallet-7a0cfca0.js";import{p as o}from"./config-af7f3a10.js";const s=2;class r extends g{constructor(){const t=a.getItem("_conquest_visited")==="true";super({stage:t?1:0});this.stageTime=e(),this.visited=t}start(){this.stageTime||(this.stageTime=e(),o.logo||setTimeout(()=>{this.set({stage:s})},this.visited?3e3:4e3))}stop(){this.timeout&&clearTimeout(this.timeout),this.stageTime=1,this.set({stage:s})}gameLogoReady(){this.visited?this._loaded(2):this._loaded(5)}etherplayLogoReady(){this._loaded(2)}_loaded(i){const t=e()-this.stageTime;t>i?o.logo||this.nextStage():o.logo||(this.timeout=setTimeout(()=>this.nextStage(),(i-t)*1e3))}nextStage(){this.timeout&&clearTimeout(this.timeout),this.$store.stage<s&&(this.stageTime=e(),this.set({stage:this.$store.stage+1})),this.$store.stage===s&&a.setItem("_conquest_visited","true")}}const h=new r;typeof window!="undefined"&&(window.logo=h);export{h as l};
//# sourceMappingURL=logo-8502b062.js.map

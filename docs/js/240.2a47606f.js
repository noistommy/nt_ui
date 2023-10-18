"use strict";(self["webpackChunkgabia_ui"]=self["webpackChunkgabia_ui"]||[]).push([[240,823],{1823:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var o=e(3396);const l={class:"page-contents-header"},a={class:"page-content-usage"},n={class:"page-contents-body"};function i(t,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",l,[(0,o.WI)(t.$slots,"header")]),(0,o._)("div",a,[(0,o.WI)(t.$slots,"usage")]),(0,o._)("div",n,[(0,o.WI)(t.$slots,"body")])],64)}var c=e(7477);const d={},r=(0,c.Z)(d,[["render",i]]);var u=r},3240:function(t,s,e){e.r(s),e.d(s,{default:function(){return j}});var o=e(3396),l=e(4870),a=e(7139),n=e(1823);const i=t=>((0,o.dD)("data-v-7044cdf9"),t=t(),(0,o.Cn)(),t),c={class:"modal"},d={class:"modal-header"},r={class:"title"},u=i((()=>(0,o._)("i",{class:"fa fa-xmark"},null,-1))),p=[u],_={class:"modal-contents"},g={class:"contents"},v={class:"modal-footer align-right"};function m(t,s,e,l,n,i){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",d,[(0,o._)("div",r,(0,a.zw)(e.title)+" "+(0,a.zw)(e.modalId),1),(0,o._)("div",{class:"close-btn",onClick:s[0]||(s[0]=s=>t.$emit("close"))},p)]),(0,o._)("div",_,[(0,o._)("div",g,[(0,o._)("div",null,(0,a.zw)(e.description),1)])]),(0,o._)("div",v,[(0,o._)("button",{class:"ga-button secondary",onClick:s[1]||(s[1]=function(){return i.addModal&&i.addModal(...arguments)})},"생성"),(0,o._)("button",{class:"ga-button primary",onClick:s[2]||(s[2]=function(){return i.addConfirm&&i.addConfirm(...arguments)})},(0,a.zw)(e.pText),1),(0,o._)("button",{class:"ga-button secondary outline",onClick:s[3]||(s[3]=s=>t.$emit("close"))},(0,a.zw)(e.nText),1)])])}var f={name:"TestModal",props:{modalId:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String,default:"본문 작성"},pText:{type:String,default:"확인"},nText:{type:String,default:"취소"}},data(){return{resultConfirm:""}},watch:{resultConfirm(){this.returnTest(this.resultConfirm)}},methods:{addModal(){const t={title:"모달 테스트",description:"모달 테스트 입니다.",pText:"저장"};this.$gaModal.show({comp:b,props:t,options:{}})},addConfirm(){const t={title:"확인",description:"모달 컴펌 테스트 입니까?",pText:"확인",result:t=>{this.returnTest(t)}};this.$gaModal.show({comp:"confirm",props:t,options:{}})},returnTest(t){this.$attrs.testFunc(t)}}},C=e(7477);const h=(0,C.Z)(f,[["render",m],["__scopeId","data-v-7044cdf9"]]);var b=h;const w=t=>((0,o.dD)("data-v-0259aca0"),t=t(),(0,o.Cn)(),t),T=w((()=>(0,o._)("div",{class:"section-tags"},[(0,o._)("span",{class:"ga-tag label teal"},"ga-ui-css"),(0,o._)("span",{class:"ga-tag label purple"},"vue 3.0")],-1))),k=w((()=>(0,o._)("div",{class:"ga-card attached"},[(0,o._)("h3",null,"모달"),(0,o._)("div",{class:"footer"})],-1))),y=w((()=>(0,o._)("div",{class:"section-header"},[(0,o._)("div",{class:"section-title"},[(0,o._)("h3",{class:"title"},"테스트"),(0,o._)("div",{class:"sub-title"})])],-1))),x={class:"section-body"},$={class:"setting-panel wrapper ga-teal light"},z=w((()=>(0,o._)("h2",null,"설정",-1))),M=w((()=>(0,o._)("div",{class:"divide"},null,-1))),I={class:"ga-grid left-side"},S={class:"column"},V={class:"column col-2"},U={class:"ga-grid left-side"},W={class:"column"},D={class:"column col-2"};var q={__name:"ModalTemp",setup(t){const s=(0,o.FN)(),e=s.appContext.config.globalProperties.$gaModal,i={title:"모달 테스트",description:"모달 테스트 입니다.",pText:"저장"},c=(0,l.qj)({clickToClose:!1,escapeToClose:!1}),d="모달";function r(){e.show({comp:b,props:i,options:c})}function u(){e.show({comp:"confirm",props:i,options:c})}return(t,s)=>{const e=(0,o.up)("GaSwitch");return(0,o.wg)(),(0,o.j4)((0,l.SU)(n["default"]),null,{header:(0,o.w5)((()=>[(0,o._)("div",{class:"main-title"},(0,a.zw)(d)),T])),usage:(0,o.w5)((()=>[k])),body:(0,o.w5)((()=>[(0,o._)("section",null,[y,(0,o._)("div",x,[(0,o._)("div",$,[z,M,(0,o._)("div",I,[(0,o._)("div",S,"Use 'Click to Close' :: "+(0,a.zw)(c.clickToClose?"사용":"사용 안함"),1),(0,o._)("div",V,[(0,o.Wm)(e,{modelValue:c.clickToClose,"onUpdate:modelValue":s[0]||(s[0]=t=>c.clickToClose=t),inside:!0,round:!0,color:"purple"},null,8,["modelValue"])])]),(0,o._)("div",U,[(0,o._)("div",W,"Use 'Press Escape Button to Close' :: "+(0,a.zw)(c.escapeToClose?"사용":"사용 안함"),1),(0,o._)("div",D,[(0,o.Wm)(e,{modelValue:c.escapeToClose,"onUpdate:modelValue":s[1]||(s[1]=t=>c.escapeToClose=t),inside:!0,round:!0,color:"purple"},null,8,["modelValue"])])])]),(0,o._)("button",{class:"ga-button purple outline",onClick:r},"모달 열기"),(0,o._)("button",{class:"ga-button purple outline",onClick:u},"컴펌 열기")])])])),_:1})}}};const Z=(0,C.Z)(q,[["__scopeId","data-v-0259aca0"]]);var j=Z}}]);
//# sourceMappingURL=240.2a47606f.js.map
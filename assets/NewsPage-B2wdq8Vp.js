import{e as V,f as I,b as z,Q as m,i as D,R as A,d as w}from"./QBtn-fxa1DVLg.js";import{u as F,a as E,Q as b}from"./use-dark-WwlupBQb.js";import{Q as v}from"./QSeparator-B6JYuODJ.js";import{Q as y,a as S}from"./QCard-BXWAsAwA.js";import{e as K,k as r,g as L,j as d,u as T,_ as O,D as W,K as $,R as o,G as i,F as a,V as G,W as H,a6 as g,L as M,I as _}from"./index-B6K5-sjF.js";import{c as k}from"./carousel.min-IRB02MAj.js";const J={xs:8,sm:10,md:14,lg:20,xl:24},C=K({name:"QChip",props:{...F,...V,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:s}}=L(),f=E(e,s),x=I(e,J),B=r(()=>e.selected===!0||e.icon!==void 0),Q=r(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),j=r(()=>e.iconRemove||s.iconSet.chip.remove),c=r(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),N=r(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(f.value===!0?" q-chip--dark q-dark":"")}),h=r(()=>{const l=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},u={...l,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||s.lang.label.remove};return{chip:l,remove:u}});function P(l){l.keyCode===13&&p(l)}function p(l){e.disable||(n("update:selected",!e.selected),n("click",l))}function q(l){(l.keyCode===void 0||l.keyCode===13)&&(T(l),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function R(){const l=[];c.value===!0&&l.push(d("div",{class:"q-focus-helper"})),B.value===!0&&l.push(d(m,{class:"q-chip__icon q-chip__icon--left",name:Q.value}));const u=e.label!==void 0?[d("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(d("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},D(t.default,u))),e.iconRight&&l.push(d(m,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(d(m,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:j.value,...h.value.remove,onClick:q,onKeyup:q})),l}return()=>{if(e.modelValue===!1)return;const l={class:N.value,style:x.value};return c.value===!0&&Object.assign(l,h.value.chip,{onClick:p,onKeyup:P}),z("div",l,R(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[A,e.ripple]])}}}),U={__name:"NewsPage",setup(e,{expose:t}){t();const s={config:{itemsToShow:1.3,wrapAround:!0,transition:300},get Carousel(){return k.Carousel},get Slide(){return k.Slide}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},X={class:"row justify-around q-pt-md"},Y={class:"column q-mx-xl"},Z={class:"relative-position q-mb-md"},ee={class:"relative-position q-mb-md"};function te(e,t,n,s,f,x){return W(),$(M,null,[o("div",X,[i(w,{icon:"arrow_back",flat:"",ripple:!1,to:"/"}),t[0]||(t[0]=o("div",{class:"text-h6"},"News",-1)),i(w,{class:"invisible",icon:"arrow_back",flat:""})]),t[11]||(t[11]=o("div",{class:"text-h6 text-weight-bolder text-primary q-ml-xl q-my-md"},"Popular",-1)),i(s.Carousel,G(H(s.config)),{default:a(()=>[i(s.Slide,null,{default:a(()=>[i(b,{src:"news1.png",style:{height:"248px","border-radius":"20px"}})]),_:1}),i(s.Slide,null,{default:a(()=>[i(b,{src:"news2.png",style:{height:"248px","border-radius":"20px"}})]),_:1}),i(s.Slide,null,{default:a(()=>[i(b,{src:"news3.png",style:{height:"248px","border-radius":"20px"}})]),_:1})]),_:1},16),t[12]||(t[12]=o("div",{class:"text-h6 text-weight-bolder text-primary q-ml-xl q-mt-lg q-mb-md"},"For you",-1)),o("div",Y,[t[7]||(t[7]=g('<div class="col row justify-between q-pb-md no-wrap"><div class="column"><div class="col text-h6 text-weight-bold q-pr-md">10 ways to Save the Bees</div><div class="q-pt-md">5 minute read<br>4 months ago</div></div><img src="news4.png" style="object-fit:none;"></div>',1)),i(v),t[8]||(t[8]=g('<div class="col row justify-between q-py-md no-wrap"><div class="column"><div class="col text-h6 text-weight-bold q-pr-md">The Truth About Honeybees</div><div class="q-pt-md">5 minute read<br>4 months ago</div></div><img src="news5.png" style="object-fit:none;"></div>',1)),i(v),t[9]||(t[9]=g('<div class="col row justify-between q-py-md no-wrap"><div class="column"><div class="col text-h6 text-weight-bold q-pr-md">Why you shouldn&#39;t always dig up weeds</div><div class="q-pt-md">5 minute read<br>4 months ago</div></div><img src="news6.png" style="object-fit:none;"></div>',1)),i(v),t[10]||(t[10]=o("div",{class:"text-h6 text-weight-bolder text-primary q-mt-lg q-mb-md"},"Discover",-1)),o("div",Z,[i(y,{class:"q-mb-md",style:{"border-radius":"20px"}},{default:a(()=>[t[2]||(t[2]=o("img",{src:"news7.png"},null,-1)),i(S,{class:"q-py-sm"},{default:a(()=>t[1]||(t[1]=[o("div",{class:"text-subtitle1 text-bold q-pb-md",style:{"text-align":"start"}},"Basic Knowledge Quiz",-1)])),_:1})]),_:1}),i(C,{color:"warning",class:"text-weight-bold absolute-bottom-right"},{default:a(()=>t[3]||(t[3]=[_(" Earn 5 pts! ")])),_:1})]),o("div",ee,[i(y,{class:"q-mb-md",style:{"border-radius":"20px"}},{default:a(()=>[t[5]||(t[5]=o("img",{src:"news8.png"},null,-1)),i(S,{class:"q-py-sm"},{default:a(()=>t[4]||(t[4]=[o("div",{class:"text-subtitle1 text-bold q-pb-md",style:{"text-align":"start"}},"Fun Bee Facts",-1)])),_:1})]),_:1}),i(C,{color:"warning",class:"text-weight-bold absolute-bottom-right"},{default:a(()=>t[6]||(t[6]=[_(" Earn 3 pts! ")])),_:1})])])],64)}const re=O(U,[["render",te],["__file","NewsPage.vue"]]);export{re as default};

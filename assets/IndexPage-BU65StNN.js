import{Q as E}from"./QImg-BVx5JwuR.js";import{a as i,Q as w}from"./QCard-CkJmqrZo.js";import{Q as P,d as W,c as b}from"./QBtn-Jl88bpfr.js";import{d as j,Z as J,$ as K,m as f,h as z,_ as U,r as B,b as I,J as S,K as _,L as t,M as a,E as X,X as r,a0 as Z,a1 as $,N as c,Y as H,a2 as ee,a3 as te}from"./index-B3N8Aqib.js";import{T as ae,e as le,f as L,Q,d,a as M}from"./QItem-C03W2_8R.js";import{Q as re}from"./QPage-CTDXZNJR.js";import{u as k}from"./use-quasar-Col2oiTo.js";import{c as A}from"./carousel.min-ByE_WyGD.js";import"./use-dark-sTHQz_x0.js";import"./QScrollObserver-CBGTzsQJ.js";const D=j({name:"QAvatar",props:{...J,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(s,{slots:e}){const x=K(s),l=f(()=>"q-avatar"+(s.color?` bg-${s.color}`:"")+(s.textColor?` text-${s.textColor} q-chip--colored`:"")+(s.square===!0?" q-avatar--square":s.rounded===!0?" rounded-borders":"")),v=f(()=>s.fontSize?{fontSize:s.fontSize}:null);return()=>{const o=s.icon!==void 0?[z(P,{name:s.icon})]:void 0;return z("div",{class:l.value,style:x.value},[z("div",{class:"q-avatar__content row flex-center overflow-hidden",style:v.value},W(e.default,o))])}}}),u=36,N=100,h=50,se={__name:"IndexPage",setup(s,{expose:e}){e();const x=k(),l=B(u),v={itemsToShow:2.2,gap:13,snapAlign:"start",height:220},o=f(()=>Math.max(0,x.screen.height-N)),p=f(()=>Math.round(Math.max(0,l.value-u)/Math.max(1,o.value-u)*100)),O=f(()=>({height:`${o.value}px`,transform:`translateY(${-l.value}px)`})),q=f(()=>p.value>h?"full":p.value>0?"half":"handler");function V(n){const{direction:m,delta:G,isFinal:R}=n;if(l.value=Math.max(u,Math.min(o.value,l.value-G.y)),R===!0){const T=p.value>h,Y=m==="up"?T?o.value:Math.round(o.value/2):T?Math.round(o.value/2):u;y(Y)}}function F(){const n=q.value==="handler"?Math.round(o.value/2):q.value==="half"?o.value:u;y(n)}let g;function y(n){clearTimeout(g);const m=n-l.value;m!==0&&(l.value+=Math.abs(m)<2?m:Math.round(m/2),g=setTimeout(()=>{y(n)},30))}I(()=>{clearTimeout(g)});const C={drawerMinHeight:u,drawerTopOffset:N,drawerOpenRatioHalf:h,$q:x,drawerPos:l,config:v,drawerMaxHeight:o,drawerOpenRatio:p,drawerStyle:O,drawerMode:q,slideDrawer:V,cycleDrawer:F,get animateTimeout(){return g},set animateTimeout(n){g=n},animateDrawerTo:y,ref:B,computed:f,onBeforeUnmount:I,get useQuasar(){return k},get Carousel(){return A.Carousel},get Slide(){return A.Slide}};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}};function oe(s,e,x,l,v,o){return S(),_(re,null,{default:t(()=>[a(E,{src:"mapImage.png",style:{height:"100vh"}}),a(w,{class:ee(["slide-drawer slide-drawer--bottom fixed-bottom column no-wrap",`slide-drawer--open-${l.drawerMode}`]),style:te([{"z-index":"2"},l.drawerStyle])},{default:t(()=>[X((S(),_(i,{class:"slide-drawer__handler--horizontal row flex-center q-pa-sm q-gutter-x-md"},{default:t(()=>[r("div",{class:"cursor-pointer",onClick:l.cycleDrawer})]),_:1})),[[ae,l.slideDrawer,void 0,{mouse:!0,vertical:!0}]]),a(i,{class:"col relative-position"},{default:t(()=>[e[6]||(e[6]=r("div",{class:"text-h6 text-bold q-pt-md q-pb-xs"},"Latest in the Area",-1)),a(l.Carousel,Z($(l.config)),{default:t(()=>[a(l.Slide,null,{default:t(()=>[a(w,{style:{"border-radius":"20px"}},{default:t(()=>[e[1]||(e[1]=r("img",{src:"cara.png"},null,-1)),a(i,{class:"q-py-sm"},{default:t(()=>e[0]||(e[0]=[r("div",{class:"text-subtitle2 text-bold",style:{"text-align":"start"}},"Small Bee Garden",-1),r("div",{class:"text-caption",style:{"text-align":"start"}},"2 miles away",-1)])),_:1})]),_:1})]),_:1}),a(l.Slide,null,{default:t(()=>[a(w,{style:{"border-radius":"20px"}},{default:t(()=>[e[3]||(e[3]=r("img",{src:"cara2.png"},null,-1)),a(i,{class:"q-py-sm"},{default:t(()=>e[2]||(e[2]=[r("div",{class:"text-subtitle2 text-bold",style:{"text-align":"start"}},"Yonsei Bee Hotel",-1),r("div",{class:"text-caption",style:{"text-align":"start"}},"3 miles away",-1)])),_:1})]),_:1})]),_:1}),a(l.Slide,null,{default:t(()=>[a(w,{style:{"border-radius":"20px"}},{default:t(()=>[e[5]||(e[5]=r("img",{src:"cara3.png"},null,-1)),a(i,{class:"q-py-sm"},{default:t(()=>e[4]||(e[4]=[r("div",{class:"text-subtitle2 text-bold",style:{"text-align":"start"}},"Acacia Tree",-1),r("div",{class:"text-caption",style:{"text-align":"start"}},"4 miles away",-1)])),_:1})]),_:1})]),_:1})]),_:1},16),e[7]||(e[7]=r("div",{class:"text-primary text-subtitle1 text-bold absolute-bottom q-pb-md",style:{"text-align":"center"}},"Look for more",-1))]),_:1}),e[19]||(e[19]=r("div",{class:"bg-grey-2",style:{height:"4px"}},null,-1)),a(le,{style:{height:"363px","max-width":"393px"},visible:"false"},{default:t(()=>[l.drawerMode!=="handler"?(S(),_(i,{key:0,class:"col"},{default:t(()=>[a(L,null,{default:t(()=>[a(Q,null,{default:t(()=>[a(d,{side:""},{default:t(()=>[a(b,{round:"",unelevated:"",color:"accent"},{default:t(()=>[a(D,{size:"28px"},{default:t(()=>e[8]||(e[8]=[r("img",{src:"caraProfile.png"},null,-1)])),_:1})]),_:1})]),_:1}),a(d,null,{default:t(()=>[a(M,{class:"text-subtitle2 text-bold"},{default:t(()=>e[9]||(e[9]=[c("Winnie the Pooh")])),_:1}),a(M,{caption:""},{default:t(()=>e[10]||(e[10]=[c("Local Guide")])),_:1})]),_:1}),a(d,{side:""},{default:t(()=>[a(b,{class:"text-bold",rounded:"",unelevated:"",padding:"xs md",color:"primary","text-color":"white","no-caps":""},{default:t(()=>[e[11]||(e[11]=c(" Follow ")),a(P,{name:"add",size:"xs"})]),_:1})]),_:1})]),_:1}),a(Q,null,{default:t(()=>[a(d,{class:"q-py-md"},{default:t(()=>e[12]||(e[12]=[r("img",{src:"cara4.png"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1})):H("",!0),e[18]||(e[18]=r("div",{class:"bg-grey-2",style:{height:"4px"}},null,-1)),l.drawerMode!=="handler"?(S(),_(i,{key:1,class:"col"},{default:t(()=>[a(L,null,{default:t(()=>[a(Q,null,{default:t(()=>[a(d,{side:""},{default:t(()=>[a(b,{round:"",unelevated:"",color:"accent"},{default:t(()=>[a(D,{size:"28px"},{default:t(()=>e[13]||(e[13]=[r("img",{src:"caraProfile.png"},null,-1)])),_:1})]),_:1})]),_:1}),a(d,null,{default:t(()=>[a(M,{class:"text-subtitle2 text-bold"},{default:t(()=>e[14]||(e[14]=[c("Winnie the Pooh")])),_:1}),a(M,{caption:""},{default:t(()=>e[15]||(e[15]=[c("Local Guide")])),_:1})]),_:1}),a(d,{side:""},{default:t(()=>[a(b,{class:"text-bold",rounded:"",unelevated:"",padding:"xs md",color:"primary","text-color":"white","no-caps":""},{default:t(()=>[e[16]||(e[16]=c(" Follow ")),a(P,{name:"add",size:"xs"})]),_:1})]),_:1})]),_:1}),a(Q,null,{default:t(()=>[a(d,{class:"q-py-md"},{default:t(()=>e[17]||(e[17]=[r("img",{src:"cara5.png"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1})):H("",!0)]),_:1})]),_:1},8,["class","style"])]),_:1})}const pe=U(se,[["render",oe],["__file","IndexPage.vue"]]);export{pe as default};

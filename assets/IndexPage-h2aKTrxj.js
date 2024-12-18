import{Q as Y}from"./QImg-zbJkrt0F.js";import{a as i,Q as w}from"./QCard-BbXvK7DZ.js";import{Q as C,e as j,d as b}from"./QBtn-B6Dm8kJe.js";import{d as E,a5 as U,a6 as J,m as f,h as z,_ as K,r as B,b as I,N as S,O as _,P as t,Q as a,a1 as r,B as X,a2 as Z,a3 as $,R as c,a4 as H,a7 as ee,a8 as te}from"./index-BTfTFqYG.js";import{T as ae,d as k,Q,b as d,a as q}from"./QItem-C4om8t6Z.js";import{Q as le}from"./QPage-itGn21jT.js";import{u as D}from"./use-quasar-BWNMyXl6.js";import{c as L}from"./carousel.min-CIuQxMXG.js";import"./use-dark-BzfmIT2W.js";const A=E({name:"QAvatar",props:{...U,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(s,{slots:e}){const x=J(s),l=f(()=>"q-avatar"+(s.color?` bg-${s.color}`:"")+(s.textColor?` text-${s.textColor} q-chip--colored`:"")+(s.square===!0?" q-avatar--square":s.rounded===!0?" rounded-borders":"")),v=f(()=>s.fontSize?{fontSize:s.fontSize}:null);return()=>{const o=s.icon!==void 0?[z(C,{name:s.icon})]:void 0;return z("div",{class:l.value,style:x.value},[z("div",{class:"q-avatar__content row flex-center overflow-hidden",style:v.value},j(e.default,o))])}}}),u=36,N=100,P=50,re={__name:"IndexPage",setup(s,{expose:e}){e();const x=D(),l=B(u),v={itemsToShow:2.2,gap:13,snapAlign:"start",height:220},o=f(()=>Math.max(0,x.screen.height-N)),p=f(()=>Math.round(Math.max(0,l.value-u)/Math.max(1,o.value-u)*100)),O=f(()=>({height:`${o.value}px`,transform:`translateY(${-l.value}px)`})),M=f(()=>p.value>P?"full":p.value>0?"half":"handler");function R(n){const{direction:m,delta:F,isFinal:G}=n;if(l.value=Math.max(u,Math.min(o.value,l.value-F.y)),G===!0){const h=p.value>P,W=m==="up"?h?o.value:Math.round(o.value/2):h?Math.round(o.value/2):u;y(W)}}function V(){const n=M.value==="handler"?Math.round(o.value/2):M.value==="half"?o.value:u;y(n)}let g;function y(n){clearTimeout(g);const m=n-l.value;m!==0&&(l.value+=Math.abs(m)<2?m:Math.round(m/2),g=setTimeout(()=>{y(n)},30))}I(()=>{clearTimeout(g)});const T={drawerMinHeight:u,drawerTopOffset:N,drawerOpenRatioHalf:P,$q:x,drawerPos:l,config:v,drawerMaxHeight:o,drawerOpenRatio:p,drawerStyle:O,drawerMode:M,slideDrawer:R,cycleDrawer:V,get animateTimeout(){return g},set animateTimeout(n){g=n},animateDrawerTo:y,ref:B,computed:f,onBeforeUnmount:I,get useQuasar(){return D},get Carousel(){return L.Carousel},get Slide(){return L.Slide}};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}},se={class:"scroll"};function oe(s,e,x,l,v,o){return S(),_(le,null,{default:t(()=>[a(Y,{src:"mapImage.png",style:{height:"100vh"}}),a(w,{class:ee(["slide-drawer slide-drawer--bottom fixed-bottom column no-wrap",`slide-drawer--open-${l.drawerMode}`]),style:te([{"z-index":"2"},l.drawerStyle])},{default:t(()=>[r("div",se,[X((S(),_(i,{class:"slide-drawer__handler--horizontal row flex-center q-pa-sm q-gutter-x-md"},{default:t(()=>[r("div",{class:"cursor-pointer",onClick:l.cycleDrawer})]),_:1})),[[ae,l.slideDrawer,void 0,{mouse:!0,vertical:!0}]]),a(i,{class:"col relative-position"},{default:t(()=>[e[6]||(e[6]=r("div",{class:"text-h6 text-bold q-pt-md q-pb-xs"},"Latest in the Area",-1)),a(l.Carousel,Z($(l.config)),{default:t(()=>[a(l.Slide,null,{default:t(()=>[a(w,{style:{"border-radius":"20px"}},{default:t(()=>[e[1]||(e[1]=r("img",{src:"cara.png"},null,-1)),a(i,{class:"q-py-sm"},{default:t(()=>e[0]||(e[0]=[r("div",{class:"text-subtitle2 text-bold",style:{"text-align":"start"}},"Small Bee Garden",-1),r("div",{class:"text-caption",style:{"text-align":"start"}},"2 miles away",-1)])),_:1})]),_:1})]),_:1}),a(l.Slide,null,{default:t(()=>[a(w,{style:{"border-radius":"20px"}},{default:t(()=>[e[3]||(e[3]=r("img",{src:"cara2.png"},null,-1)),a(i,{class:"q-py-sm"},{default:t(()=>e[2]||(e[2]=[r("div",{class:"text-subtitle2 text-bold",style:{"text-align":"start"}},"Yonsei Bee Hotel",-1),r("div",{class:"text-caption",style:{"text-align":"start"}},"3 miles away",-1)])),_:1})]),_:1})]),_:1}),a(l.Slide,null,{default:t(()=>[a(w,{style:{"border-radius":"20px"}},{default:t(()=>[e[5]||(e[5]=r("img",{src:"cara3.png"},null,-1)),a(i,{class:"q-py-sm"},{default:t(()=>e[4]||(e[4]=[r("div",{class:"text-subtitle2 text-bold",style:{"text-align":"start"}},"Acacia Tree",-1),r("div",{class:"text-caption",style:{"text-align":"start"}},"4 miles away",-1)])),_:1})]),_:1})]),_:1})]),_:1},16),e[7]||(e[7]=r("div",{class:"text-primary text-subtitle1 text-bold q-pb-md",style:{"text-align":"center"}},"Look for more",-1))]),_:1}),e[18]||(e[18]=r("div",{class:"bg-grey-2",style:{height:"4px"}},null,-1)),l.drawerMode!=="handler"?(S(),_(i,{key:0,class:"col"},{default:t(()=>[a(k,null,{default:t(()=>[a(Q,null,{default:t(()=>[a(d,{side:""},{default:t(()=>[a(b,{round:"",unelevated:"",color:"accent"},{default:t(()=>[a(A,{size:"28px"},{default:t(()=>e[8]||(e[8]=[r("img",{src:"caraProfile.png"},null,-1)])),_:1})]),_:1})]),_:1}),a(d,null,{default:t(()=>[a(q,{class:"text-subtitle2 text-bold"},{default:t(()=>e[9]||(e[9]=[c("Winnie the Pooh")])),_:1}),a(q,{caption:""},{default:t(()=>e[10]||(e[10]=[c("Local Guide")])),_:1})]),_:1}),a(d,{side:""},{default:t(()=>[a(b,{class:"text-bold",rounded:"",unelevated:"",padding:"xs md",color:"primary","text-color":"white","no-caps":""},{default:t(()=>[e[11]||(e[11]=c(" Follow ")),a(C,{name:"add",size:"xs"})]),_:1})]),_:1})]),_:1}),a(Q,null,{default:t(()=>[a(d,{class:"q-py-md"},{default:t(()=>e[12]||(e[12]=[r("img",{src:"cara4.png"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1})):H("",!0),e[19]||(e[19]=r("div",{class:"bg-grey-2",style:{height:"4px"}},null,-1)),l.drawerMode!=="handler"?(S(),_(i,{key:1,class:"col"},{default:t(()=>[a(k,null,{default:t(()=>[a(Q,null,{default:t(()=>[a(d,{side:""},{default:t(()=>[a(b,{round:"",unelevated:"",color:"accent"},{default:t(()=>[a(A,{size:"28px"},{default:t(()=>e[13]||(e[13]=[r("img",{src:"caraProfile.png"},null,-1)])),_:1})]),_:1})]),_:1}),a(d,null,{default:t(()=>[a(q,{class:"text-subtitle2 text-bold"},{default:t(()=>e[14]||(e[14]=[c("Winnie the Pooh")])),_:1}),a(q,{caption:""},{default:t(()=>e[15]||(e[15]=[c("Local Guide")])),_:1})]),_:1}),a(d,{side:""},{default:t(()=>[a(b,{class:"text-bold",rounded:"",unelevated:"",padding:"xs md",color:"primary","text-color":"white","no-caps":""},{default:t(()=>[e[16]||(e[16]=c(" Follow ")),a(C,{name:"add",size:"xs"})]),_:1})]),_:1})]),_:1}),a(Q,null,{default:t(()=>[a(d,{class:"q-py-md"},{default:t(()=>e[17]||(e[17]=[r("img",{src:"cara5.png"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1})):H("",!0)])]),_:1},8,["class","style"])]),_:1})}const ve=K(re,[["render",oe],["__file","IndexPage.vue"]]);export{ve as default};
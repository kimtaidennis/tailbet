"use strict";(self.webpackChunksasabet=self.webpackChunksasabet||[]).push([[66],{8066:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var a=t(2791),n=t(1120),d=t(6431),l=t.n(d),r=t(2426),i=t.n(r),c=t(6886),o=t(733),m=t(184);function h(e){let{match:s}=e;const{flags:t,jackpot:a}=(0,o.BI)(),{addMatch:n}=(0,o.Db)(),d=()=>s.markets.find((e=>"2"===e.marketId))||null;return(0,m.jsxs)("div",{className:"dashed-border px-2 py-2 md:px-0 flex items-center font-normal",children:[(0,m.jsxs)("div",{className:"flex flex-col w-1/2",children:[(0,m.jsx)("div",{children:(0,m.jsxs)("span",{className:"text-xs font-light text-light-blue",children:[(0,m.jsx)(c.Z,{countryCode:t[s.country],svg:!0,className:"mr-2 mb-1"}),(0,m.jsx)(l(),{format:"hh:ss \u2022 DD/MM",children:i()("".concat(s.scheduled))})]})}),(0,m.jsx)("span",{children:s.home}),(0,m.jsx)("span",{children:s.away})]}),(0,m.jsx)("div",{className:"w-1/2",children:(0,m.jsx)("div",{className:"markets-header jackpot",children:(0,m.jsx)("div",{className:"grid grid-cols-3 gap-3 text-center",children:d().odds.map((e=>(0,m.jsx)("span",{className:"py-2.5 rounded-md  ".concat(a.findIndex((s=>s.oddId===e.id.toString()))>-1?" bg-yellow text-dark-bg":"bg-dark-op text-light-blue"),onClick:()=>n(s,d().name,e.name,e.odds,e.id.toString(),"jackpot"),children:e.odds.toFixed(2)},e.id.toString())))})})})]})}function p(e){let{sport:s}=e;return(0,m.jsxs)("div",{className:"flex items-center dashed-border py-2  mt-1 px-2 md:px-0",children:[(0,m.jsx)("div",{className:"w-1/2",children:(0,m.jsx)("span",{className:"font-normal",children:s.name})}),(0,m.jsx)("div",{className:"w-1/2 text-center",children:s.markets.map((e=>2===e.id?(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("p",{children:e.name}),(0,m.jsx)("div",{className:"grid grid-cols-3 gap-3 mt-1",children:e.selections.map((e=>(0,m.jsx)("span",{className:"",children:e.name},e.id.toString())))})]},e.id.toString()):""))})]})}var x=t(2115),f=t(3153),g=t(7468),u=t(491);function j(){const e=(0,f.T)(),{jackpotMatches:s,sportsMarkets:t}=(0,o.BI)(),{autoSelectMatch:d}=(0,o.Db)(),l=t.find((e=>10===e.id));e((0,g.dr)("Jackpot"));return(0,a.useEffect)((()=>{(0,u.Gw)().then((s=>e((0,g.LI)(s)))).catch((e=>console.log("Error--",e)))}),[]),(0,m.jsxs)("div",{className:"md:flex  gap-3 md:p-2",children:[(0,m.jsxs)("div",{className:"md:flex gap-2 lg:w-3/4 sm:w-full md:full",children:[(0,m.jsx)("div",{className:"sidebar hidden lg:block lg:w-48",children:(0,m.jsx)(x.Z,{})}),(0,m.jsxs)("div",{className:"main-home mb-5 lg:w-fit sm:w-full md:w-full",children:[(0,m.jsx)("img",{src:"/tailbet/images/image3.png",alt:"Home",className:"w-full md:rounded-md"}),(0,m.jsx)("div",{className:"md:py-2.5 text-right p-2 md:px-0 dashed-border ",children:(0,m.jsx)("button",{className:"px-8 py-2 bg-yellow font-medium text-dark-bg rounded-md",onClick:()=>{s.forEach((e=>{let s=Math.floor(3*Math.random())+1;const t=e.markets.find((e=>"2"===e.marketId));t&&t.odds.forEach((a=>{a.outcomeId===s&&d(e,t.name,a.name,a.odds,a.id.toString(),"jackpot")}))}))},children:"Auto Select"})}),"object"===typeof l&&(0,m.jsx)(p,{sport:l}),s.length>0&&"object"===typeof l&&s.map((e=>(0,m.jsx)(h,{match:e},e.id.toString())))]})]}),(0,m.jsx)("div",{className:"betslip hidden lg:block",children:(0,m.jsx)(n.Z,{type:"Jackpot"})})]})}},6886:(e,s,t)=>{t.d(s,{Z:()=>l});var a=t(2791);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}var d=["cdnSuffix","cdnUrl","countryCode","style","svg"];const l=function(e){var s=e.cdnSuffix,t=void 0===s?"svg":s,l=e.cdnUrl,r=void 0===l?"https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/":l,i=e.countryCode,c=e.style,o=e.svg,m=void 0!==o&&o,h=function(e,s){if(null==e)return{};var t,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,d);if("string"!==typeof i)return null;if(m){var p=""+r+i.toLowerCase()+"."+t;return(0,a.createElement)("img",Object.assign({},h,{src:p,style:n({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},c)}))}var x=i.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}));return(0,a.createElement)("span",Object.assign({role:"img"},h,{style:n({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},c)}),x)}}}]);
//# sourceMappingURL=66.536897d7.chunk.js.map
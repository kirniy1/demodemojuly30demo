(()=>{var e={};e.id=616,e.ids=[616],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9409:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(5545),r(3855),r(5866);var o=r(3191),a=r(8716),n=r(7922),s=r.n(n),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["bonus",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5545)),"/Users/kirniy/Downloads/Folder/demojuly30/src/app/bonus/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3855)),"/Users/kirniy/Downloads/Folder/demojuly30/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/kirniy/Downloads/Folder/demojuly30/src/app/bonus/page.tsx"],u="/bonus/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/bonus/page",pathname:"/bonus",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4642:(e,t,r)=>{Promise.resolve().then(r.bind(r,5273))},2881:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(7577);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,o.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:d,...c},u)=>(0,o.createElement)("svg",{ref:u,...s,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:n("lucide",i),...c},[...d.map(([e,t])=>(0,o.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,o.forwardRef)(({className:r,...s},l)=>(0,o.createElement)(i,{ref:l,iconNode:t,className:n(`lucide-${a(e)}`,r),...s}));return r.displayName=`${e}`,r}},9669:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r(2881).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},5273:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var o=r(326),a=r(7577),n=r(1074),s=r(9669),i=r(4627),l=r(6832),d=r.n(l);!function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}();let c=()=>{let[e,t]=(0,a.useState)("Bonus"),[r,l]=(0,a.useState)(null),[c,u]=(0,a.useState)(!1),[p,m]=(0,a.useState)({}),[x,f]=(0,a.useState)({}),h=(0,a.useContext)(n.t),g=[{multiplier:2,duration:30,cost:1e3,color:"#f8cc46"},{multiplier:3,duration:15,cost:2500,color:"#ff7f50"},{multiplier:5,duration:5,cost:5e3,color:"#ff4500"}],b=[{platform:"Telegram",channels:["Маленькая Виновница","VNVNC","ANGAR"],reward:5e3,duration:15,color:"#0088cc"},{platform:"Instagram",channels:["Маленькая Виновница","VNVNC","ANGAR"],reward:1e4,duration:240,color:"#c13584"}],y=async e=>{try{let t=`x${e}`,r=(await Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())(`/api/util/buy_booster?userid=${h.initDataUnsafe.user?.id}&boosterType=${t}`)).data;r.success?(alert(`Бустер ${t} приобретен до ${new Date(r.endTime).toLocaleTimeString()}`),l({multiplier:e,timeLeft:60*g.find(t=>t.multiplier===e).duration})):alert(r.error||"Не удалось приобрести бустер")}catch(e){console.error("Failed to buy booster:",e)}},_=async(e,t)=>{try{f(r=>({...r,[`${e}-${t}`]:!0})),await Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())("/api/tasks/update",{taskId:`${e}-${t}`,userId:h.initDataUnsafe.user?.id,name:t,platform:e,reward:b.find(t=>t.platform===e).reward,link:""}),m(r=>({...r,[`${e}-${t}`]:{status:"checking",timeLeft:60*b.find(t=>t.platform===e).duration}}))}catch(r){console.error("Failed to update task:",r),f(r=>({...r,[`${e}-${t}`]:!1}))}};(0,a.useEffect)(()=>{(async()=>{try{let{data:e}=await Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())(`/api/tasks/update?userId=${h.initDataUnsafe.user?.id}`),t=e.tasks.reduce((e,t)=>(e[t.id]=t.status,e),{});m(t)}catch(e){console.error("Failed to fetch task statuses:",e)}})()},[h.initDataUnsafe.user?.id]),(0,a.useEffect)(()=>{let e=setInterval(()=>{r&&l(e=>e.timeLeft>0?{...e,timeLeft:e.timeLeft-1}:null),m(e=>{let t={...e};return Object.keys(t).forEach(e=>{"checking"===t[e].status&&(t[e].timeLeft>0?t[e].timeLeft-=1:t[e].status="completed")}),t})},1e3);return()=>clearInterval(e)},[r]);let k={transition:"all 0.3s ease",transform:"scale(1)",":active":{transform:"scale(0.98)"}},j=e=>({...k,width:"100%",padding:"15px",marginBottom:"15px",borderRadius:"20px",fontSize:"1rem",fontWeight:"bold",border:"none",cursor:"pointer",background:r&&r.multiplier===e.multiplier?`linear-gradient(145deg, ${e.color}, ${e.color}aa)`:`linear-gradient(145deg, ${e.color}aa, ${e.color}55)`,color:"#ffffff",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}),v=(e,t,r=!1)=>({...k,width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"15px",fontSize:r?"1.1rem":"1rem",fontWeight:"bold",border:"none",cursor:"completed"===t?"default":"pointer",background:"completed"===t?"#4a4a4a":"checking"===t?`linear-gradient(145deg, ${e.color}dd, ${e.color})`:`linear-gradient(145deg, ${e.color}, ${e.color}dd)`,color:"#f0f0f0",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",gridColumn:r?"span 2":"span 1"}),w={backgroundColor:"rgba(255, 255, 255, 0.1)",borderLeft:"4px solid #f8cc46",padding:"15px",marginBottom:"25px",borderRadius:"0 10px 10px 0"};return(0,o.jsxs)("div",{className:d().container,children:[(0,o.jsxs)("div",{className:d().content,children:[(0,o.jsxs)("div",{className:d().bonusSection,children:[o.jsx("h2",{className:d().title,children:"\uD83C\uDF81 Бустеры"}),g.map(e=>{let t=r&&r.multiplier===e.multiplier,a=t?Math.floor(r.timeLeft/60):0,n=t?r.timeLeft%60:0;return o.jsx("button",{onClick:()=>y(e.multiplier),style:j(e),children:t?`x${e.multiplier} - ${a}:${n.toString().padStart(2,"0")}`:`Купить x${e.multiplier} на ${e.duration} минут (${e.cost}⭐️)`},e.multiplier)}),o.jsx("div",{style:w,children:o.jsx("p",{style:{fontSize:"0.9rem",color:"#f0f0f0",lineHeight:"1.4"},children:"Бустеры временно увеличивают количество монет, получаемых за каждое нажатие в разделе \uD83C\uDFE0 Home. x2 удваивает, x3 утраивает, а x5 увеличивает в пять раз ваш доход. Только один бустер может быть активен одновременно."})})]}),o.jsx("button",{onClick:()=>u(!0),className:d().tasksButton,children:"✅ Задания"})]}),o.jsx("div",{className:"z-50 w-full fixed bottom-0",children:o.jsx(i.Z,{activeTab:"Bonus"})}),c&&o.jsx("div",{className:d().tasksPopup,children:(0,o.jsxs)("div",{className:d().tasksPopupContent,children:[(0,o.jsxs)("div",{className:d().tasksPopupHeader,children:[o.jsx("h2",{className:d().tasksPopupTitle,children:"✅ Задания"}),o.jsx("button",{onClick:()=>u(!1),className:d().closeButton,children:o.jsx(s.Z,{size:30})})]}),o.jsx("div",{style:w,children:o.jsx("p",{style:{fontSize:"0.9rem",lineHeight:"1.4"},children:"Для проверки подписки на каждый аккаунт мы проведем проверку. Для Telegram это займет 15 минут. Для Instagram может потребоваться до 24 часов. Вернитесь в этот раздел позже, чтобы проверить прогресс верификации. В случае успеха вы получите награды на баланс Coinmania."})}),b.map(e=>(0,o.jsxs)("div",{style:{marginBottom:"25px"},children:[o.jsx("h3",{className:d().tasksPopupPlatform,children:e.platform}),o.jsx("div",{className:d().taskButtonGrid,children:e.channels.map((t,r)=>{let a=p[`${e.platform}-${t}`]?.status||"pending",n=p[`${e.platform}-${t}`]?.timeLeft||0;return o.jsx("button",{onClick:()=>_(e.platform,t),style:v(e,a,0===r),disabled:"completed"===a||"checking"===a,children:"completed"===a?`✅ ${e.reward/1e3}K⭐️`:"checking"===a?`${Math.floor(n/60)}:${(n%60).toString().padStart(2,"0")}`:(0,o.jsxs)(o.Fragment,{children:[t,o.jsx("br",{}),(0,o.jsxs)("span",{style:{fontSize:"0.8em"},children:[e.reward/1e3,"K⭐️"]})]})},t)})})]},e.platform))]})})]})};var u=r(1175);function p(){let e=(0,a.useContext)(n.t),[t,r]=(0,a.useState)(!0);return t?o.jsx(u.Z,{loading:t}):o.jsx(o.Fragment,{children:e.version?o.jsx(c,{}):o.jsx(u.Z,{loading:t})})}},4627:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(326);r(7577);var a=r(3642);let n=({activeTab:e})=>o.jsx("div",{style:{display:"flex",flexDirection:"column",fontFamily:"Arial, sans-serif"},children:(0,o.jsxs)("div",{style:{height:"100px",position:"relative",overflow:"hidden",padding:"10px 20px",margin:"0 15px 15px"},children:[o.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"25px",border:"1px solid rgba(255, 255, 255, 0.18)"}}),o.jsx("nav",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative"},children:[{name:"Home",icon:"\uD83C\uDFE0",color:"#f8cc46",path:"/"},{name:"Game",icon:"\uD83C\uDFAE",color:"#5c35c5",path:"/game"},{name:"Bonus",icon:"\uD83C\uDF81",color:"#842221",path:"/bonus"},{name:"Frens",icon:"\uD83D\uDC65",color:"#2596be",path:"/frens"}].map(t=>(0,o.jsxs)(a.O,{href:t.path,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"22%",height:"100px",borderRadius:"20px",background:e===t.name?`linear-gradient(145deg, ${t.color}, ${t.color}aa)`:"rgba(255, 255, 255, 0.05)",border:"none",cursor:"pointer",transition:"all 0.3s ease",transform:e===t.name?"translateY(-5px)":"translateY(0)",boxShadow:e===t.name?`0 10px 20px rgba(0,0,0,0.2), 0 0 0 3px ${t.color}55`:"0 4px 6px rgba(0,0,0,0.1)",textDecoration:"none"},children:[o.jsx("div",{style:{fontSize:"36px",marginBottom:"10px",filter:e===t.name?"none":"grayscale(100%)",transition:"all 0.3s ease"},children:t.icon}),o.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:e===t.name?"white":"rgba(255,255,255,0.6)",transition:"all 0.3s ease"},children:t.name}),e===t.name&&o.jsx("div",{style:{position:"absolute",bottom:"-5px",width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"white",boxShadow:`0 0 10px ${t.color}, 0 0 20px ${t.color}`}})]},t.name))})]})})},6832:e=>{e.exports={container:"CoinManiaBonusPage_container__mPdWr",content:"CoinManiaBonusPage_content__VWOKP",bonusSection:"CoinManiaBonusPage_bonusSection__yNuh3",title:"CoinManiaBonusPage_title__eivO_",tasksButton:"CoinManiaBonusPage_tasksButton__nUENX",tasksPopup:"CoinManiaBonusPage_tasksPopup__r02D4",tasksPopupContent:"CoinManiaBonusPage_tasksPopupContent__D5Gr_",tasksPopupHeader:"CoinManiaBonusPage_tasksPopupHeader__oMc8R",tasksPopupTitle:"CoinManiaBonusPage_tasksPopupTitle__Eu2n2",closeButton:"CoinManiaBonusPage_closeButton__HycmB",tasksPopupPlatform:"CoinManiaBonusPage_tasksPopupPlatform__4wfw5",taskButtonGrid:"CoinManiaBonusPage_taskButtonGrid__TlnqL"}},5545:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>s,__esModule:()=>n,default:()=>i});var o=r(8570);let a=(0,o.createProxy)(String.raw`/Users/kirniy/Downloads/Folder/demojuly30/src/app/bonus/page.tsx`),{__esModule:n,$$typeof:s}=a;a.default;let i=(0,o.createProxy)(String.raw`/Users/kirniy/Downloads/Folder/demojuly30/src/app/bonus/page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[948,32,593,642,278],()=>r(9409));module.exports=o})();
(()=>{var e={};e.id=289,e.ids=[289],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4701:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(259),s(3855),s(5866);var a=s(3191),r=s(8716),n=s(7922),i=s.n(n),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["tasks",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,259)),"/Users/kirniy/Downloads/Folder/demojuly30/src/app/tasks/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3855)),"/Users/kirniy/Downloads/Folder/demojuly30/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/kirniy/Downloads/Folder/demojuly30/src/app/tasks/page.tsx"],m="/tasks/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/tasks/page",pathname:"/tasks",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1860:(e,t,s)=>{Promise.resolve().then(s.bind(s,7344))},7344:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(326),r=s(7577),n=s(1074),i=s(844);!function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}();let l=[{id:"1",name:"VNVNC",platform:"Telegram",reward:5e3,status:"pending",link:"https://t.me/vnvnc_spb"},{id:"2",name:"Маленькая Виновница",platform:"Telegram",reward:5e3,status:"pending",link:"https://t.me/vinovnica"},{id:"3",name:"ANGAR",platform:"Telegram",reward:5e3,status:"pending",link:"https://t.me/angarclubspb"}],o=[{id:"4",name:"VNVNC",platform:"Instagram",reward:1e4,status:"pending",link:"https://www.instagram.com/vnvnc_spb/"},{id:"5",name:"Маленькая Виновница",platform:"Instagram",reward:1e4,status:"pending",link:"https://instagram.com/vinovnica"},{id:"6",name:"ANGAR",platform:"Instagram",reward:1e4,status:"pending",link:"https://www.instagram.com/ang4rclub/"}],d=()=>{let e=(0,r.useContext)(n.t),[t,s]=(0,r.useState)({}),[d,c]=(0,r.useState)({}),m=async()=>{try{let{data:t}=await Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())(`/api/tasks/update?userId=${e.initDataUnsafe.user?.id}`),s=t.tasks.reduce((e,t)=>(e[t.id]=t.status,e),{});c(s)}catch(e){console.error("Failed to fetch task statuses:",e)}};(0,r.useEffect)(()=>{m()},[]);let u=async t=>{s(e=>({...e,[t.id]:!0}));try{await Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())("/api/tasks/update",{taskId:t.id,userId:e.initDataUnsafe.user?.id,name:t.name,platform:t.platform,reward:t.reward,link:t.link})}catch(e){console.error("Failed to update task:",e)}};return(0,r.useEffect)(()=>{let a=setInterval(async()=>{for(let a of[...l,...o])if(t[a.id])try{let{data:t}=await Object(function(){var e=Error("Cannot find module 'axios'");throw e.code="MODULE_NOT_FOUND",e}())(`/api/tasks/update?taskId=${a.id}&userId=${e.initDataUnsafe.user?.id}`);t.isCheckTimePassed&&s(e=>({...e,[a.id]:!1}))}catch(e){console.error("Failed to check task time:",e)}},5e3);return()=>clearInterval(a)},[t]),a.jsx("div",{className:"bg-black min-h-svh flex flex-col items-center justify-center text-white p-4",children:(0,a.jsxs)("div",{className:"w-full max-w-md flex-col flex gap-4 mx-auto bg-gradient-to-r from-black to-zinc-950 rounded-xl shadow-md overflow-hidden md:max-w-2xl",children:[a.jsx(i.Z,{}),a.jsx("div",{className:"p-4 text-center",children:a.jsx("h1",{className:"text-2xl font-bold text-white",children:"\uD83D\uDCF1 ЗАДАНИЯ"})}),(0,a.jsxs)("div",{className:"p-2 bg-gradient-to-r from-blue-900 to-gray-900 rounded-lg mb-4",children:[a.jsx("h2",{className:"text-lg font-bold",children:"Подписаться на Telegram"}),l.map(e=>(0,a.jsxs)("div",{className:"flex flex-col items-center text-center bg-zinc-950 p-2 rounded-lg mt-2",children:[a.jsx("div",{className:"flex items-center mb-2",children:a.jsx("p",{className:"font-bold",children:e.name})}),(0,a.jsxs)("p",{className:"mb-2",children:[e.reward," ⭐"]}),a.jsx("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"w-full",children:a.jsx("button",{className:`py-1 px-3 rounded-lg w-full ${"completed"===d[e.id]?"bg-green-500 text-white":"bg-yellow-500 text-black"}`,onClick:()=>u(e),disabled:t[e.id],children:t[e.id]?"Проверяется...":"completed"===d[e.id]?"Выполнено":"Подписаться"})})]},e.id))]}),(0,a.jsxs)("div",{className:"p-2 bg-gradient-to-r from-red-900 to-black rounded-lg mb-4",children:[a.jsx("h2",{className:"text-lg font-bold",children:"Подписаться на Instagram"}),o.map(e=>(0,a.jsxs)("div",{className:"flex flex-col items-center text-center bg-zinc-950 p-2 rounded-lg mt-2",children:[a.jsx("div",{className:"flex items-center mb-2",children:a.jsx("p",{className:"font-bold",children:e.name})}),(0,a.jsxs)("p",{className:"mb-2",children:[e.reward," ⭐"]}),a.jsx("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"w-full",children:a.jsx("button",{className:`py-1 px-3 rounded-lg w-full ${"completed"===d[e.id]?"bg-green-500 text-white":"bg-yellow-500 text-black"}`,onClick:()=>u(e),disabled:t[e.id],children:t[e.id]?"Проверяется...":"completed"===d[e.id]?"Выполнено":"Подписаться"})})]},e.id))]})]})})};var c=s(1175);function m(){let e=(0,r.useContext)(n.t),[t,s]=(0,r.useState)(!0);return t?a.jsx(c.Z,{loading:t}):a.jsx(a.Fragment,{children:e.version?a.jsx(d,{}):a.jsx(c.Z,{loading:t})})}},844:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(326);s(7577);var r=s(434),n=s(281);let i=()=>(0,a.jsxs)("div",{className:"bg-gradient-to-r from-zinc-900 to-zinc-950 w-full h-[80px] flex items-center justify-between px-4",children:[a.jsx(r.default,{href:"/",children:a.jsx(n.Z,{className:"text-white hover:text-zinc-50"})}),a.jsx("div",{className:"flex-grow text-center",children:a.jsx("img",{src:"/images/logo.svg",alt:"Logo",className:"h-14 mx-auto"})}),a.jsx("div",{className:"w-10"})," "]})},259:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var a=s(8570);let r=(0,a.createProxy)(String.raw`/Users/kirniy/Downloads/Folder/demojuly30/src/app/tasks/page.tsx`),{__esModule:n,$$typeof:i}=r;r.default;let l=(0,a.createProxy)(String.raw`/Users/kirniy/Downloads/Folder/demojuly30/src/app/tasks/page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,32,593,978,278],()=>s(4701));module.exports=a})();
exports.id=85,exports.ids=[85],exports.modules={2881:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(7577);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(...e)=>e.filter((e,t,a)=>!!e&&a.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:d,...c},u)=>(0,s.createElement)("svg",{ref:u,...l,width:t,height:t,stroke:e,strokeWidth:r?24*Number(a)/Number(t):a,className:n("lucide",i),...c},[...d.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(o)?o:[o]])),o=(e,t)=>{let a=(0,s.forwardRef)(({className:a,...l},o)=>(0,s.createElement)(i,{ref:o,iconNode:t,className:n(`lucide-${r(e)}`,a),...l}));return a.displayName=`${e}`,a}},4627:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(326);a(7577);var r=a(3642);let n=({activeTab:e})=>s.jsx("div",{style:{display:"flex",flexDirection:"column",fontFamily:"Arial, sans-serif"},children:(0,s.jsxs)("div",{style:{height:"100px",position:"relative",overflow:"hidden",padding:"10px 20px",margin:"0 15px 15px"},children:[s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"25px",border:"1px solid rgba(255, 255, 255, 0.18)"}}),s.jsx("nav",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative"},children:[{name:"Home",icon:"\uD83C\uDFE0",color:"#f8cc46",path:"/"},{name:"Game",icon:"\uD83C\uDFAE",color:"#5c35c5",path:"/game"},{name:"Bonus",icon:"\uD83C\uDF81",color:"#842221",path:"/bonus"},{name:"Frens",icon:"\uD83D\uDC65",color:"#2596be",path:"/frens"}].map(t=>(0,s.jsxs)(r.O,{href:t.path,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"22%",height:"100px",borderRadius:"20px",background:e===t.name?`linear-gradient(145deg, ${t.color}, ${t.color}aa)`:"rgba(255, 255, 255, 0.05)",border:"none",cursor:"pointer",transition:"all 0.3s ease",transform:e===t.name?"translateY(-5px)":"translateY(0)",boxShadow:e===t.name?`0 10px 20px rgba(0,0,0,0.2), 0 0 0 3px ${t.color}55`:"0 4px 6px rgba(0,0,0,0.1)",textDecoration:"none"},children:[s.jsx("div",{style:{fontSize:"36px",marginBottom:"10px",filter:e===t.name?"none":"grayscale(100%)",transition:"all 0.3s ease"},children:t.icon}),s.jsx("span",{style:{fontSize:"16px",fontWeight:"600",color:e===t.name?"white":"rgba(255,255,255,0.6)",transition:"all 0.3s ease"},children:t.name}),e===t.name&&s.jsx("div",{style:{position:"absolute",bottom:"-5px",width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"white",boxShadow:`0 0 10px ${t.color}, 0 0 20px ${t.color}`}})]},t.name))})]})})},6085:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var s=a(326),r=a(7577);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a(2881).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var l=a(4627),i=a(1074),o=a(1917),d=a.n(o);let c=Object.entries({"\uD83E\uDEA9":.0301,"\uD83C\uDF79":.0708,"\uD83C\uDF81":.1232,"\uD83C\uDF89":.2283,"\uD83D\uDC83":.5476}).flatMap(([e,t])=>Array(Math.round(1e3*t)).fill(e)),u={"\uD83E\uDEA9\uD83E\uDEA9\uD83E\uDEA9":5e4,"\uD83C\uDF79\uD83C\uDF79\uD83C\uDF79":2e4,"\uD83C\uDF81\uD83C\uDF81\uD83C\uDF81":1e4,"\uD83C\uDF89\uD83C\uDF89\uD83C\uDF89":2500,"\uD83D\uDC83\uD83D\uDC83\uD83D\uDC83":1e3,"\uD83E\uDEA9\uD83E\uDEA9":500,"\uD83C\uDF79\uD83C\uDF79":400,"\uD83C\uDF81\uD83C\uDF81":200,"\uD83C\uDF89\uD83C\uDF89":100,"\uD83D\uDC83\uD83D\uDC83":50},x=()=>Array.from({length:20},()=>c[Math.floor(Math.random()*c.length)]),p=()=>{let[e,t]=(0,r.useState)([x(),x(),x()]),[a,o]=(0,r.useState)([0,0,0]),[c,p]=(0,r.useState)(),[m,h]=(0,r.useState)(!1),[f,D]=(0,r.useState)(""),[b,g]=(0,r.useState)(!1),[y,j]=(0,r.useState)([]),[v,w]=(0,r.useState)(null),[C,N]=(0,r.useState)([]),[k,F]=(0,r.useState)(2),S=(0,r.useContext)(i.t),[E,M]=(0,r.useState)(null),[A,$]=(0,r.useState)(null),[z,I]=(0,r.useState)(!0),[O,P]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch(`/api/user/data?id=${S.initDataUnsafe.user?.id}`);if(!e.ok)throw Error("Network response was not ok");let t=await e.json();M(t.user),p(t.user.scores||0)}catch(e){$(e.message)}finally{I(!1)}})();let e=()=>{P(window.innerWidth>=576)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[S.initDataUnsafe.user?.id]);let T=(0,r.useCallback)(()=>({id:Math.random(),emoji:["\uD83E\uDEA9","\uD83C\uDF79","\uD83C\uDF81","\uD83C\uDF89","\uD83D\uDC83","⭐","\uD83D\uDCA5","\uD83D\uDE80","\uD83C\uDFA4","\uD83D\uDD25"][Math.floor(10*Math.random())],x:100*Math.random(),y:100*Math.random(),size:24*Math.random()+16,speed:.2*Math.random()+.05,angle:360*Math.random()}),[]);(0,r.useEffect)(()=>{j(Array(20).fill().map(T));let e=setInterval(()=>{j(e=>e.map(e=>({...e,x:(e.x+Math.cos(e.angle)*e.speed)%100,y:(e.y+Math.sin(e.angle)*e.speed)%100,angle:e.angle+.02})))},50);return()=>clearInterval(e)},[T]);let W=e=>{let t=e.join("");return u[t]?u[t]:e[0]===e[1]?u[`${e[0]}${e[0]}`]||0:e[1]===e[2]&&u[`${e[1]}${e[2]}`]||0},L=(e,t)=>{e>=5e4?w("jackpot"):e>=1e4?w("major"):e>=1e3?w("big"):w("small");let a=()=>({id:Math.random(),emoji:t[Math.floor(Math.random()*t.length)],x:100*Math.random(),y:-20-20*Math.random(),size:48*Math.random()+32,speed:1*Math.random()+.5});N(Array(20).fill().map(a));let s=setInterval(()=>{N(e=>{let t=e.map(e=>({...e,y:e.y+e.speed})).filter(e=>e.y<120);for(;t.length<20;)t.push(a());return t})},50);setTimeout(()=>{w(null),clearInterval(s),N([])},e>=5e4?15e3:e>=1e4?1e4:e>=1e3?7e3:5e3)},R=(0,r.useCallback)(async()=>{if(!m&&!(k<=0)){h(!0),D("");try{let e=await fetch("/api/slot/check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:S.initDataUnsafe.user?.id})}),a=await e.json();if(console.log("Spin check response:",a),!a.result){D("Daily spin limit reached"),h(!1);return}F(a.newSpinCount);let s=[x(),x(),x()],r=0,n=setInterval(()=>{if(r+=50,o(e=>e.map(e=>(e+.5)%20)),r>=2e3){clearInterval(n),t(s),o([0,0,0]),h(!1);let e=s.map(e=>e[0]),a=W(e);a>0?(p(e=>e+a),D(`You won ${a}⭐️!`),L(a,e),fetch("/api/slot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:S.initDataUnsafe.user?.id,points:a})}).then(e=>e.json()).then(e=>{e.result||console.error("Failed to update score")}).catch(e=>{console.error("Error:",e)})):D("Try again!")}},50)}catch(e){console.error("Error checking spin restrictions:",e),D("Error checking spin restrictions"),h(!1)}}},[m,k,c,S.initDataUnsafe.user?.id]),Z=t=>{let s=a[t],r=e[t];return[r[(Math.floor(s)-1+20)%20],r[Math.floor(s)%20],r[(Math.floor(s)+1)%20]]};return(0,s.jsxs)("div",{className:d().container,children:[(0,s.jsxs)("div",{className:d().content,children:[s.jsx("div",{className:"text-center py-2 relative",children:s.jsx("img",{src:"/images/partyslots.webp",alt:"COINMANIA",className:"mx-auto",width:300})}),s.jsx("div",{className:"text-center my-2",children:(0,s.jsxs)("p",{className:"text-4xl font-bold text-white",children:["⭐️ ",c]})}),(0,s.jsxs)("div",{className:"bg-gradient-to-r from-indigo-700 w-full h-2/3 to-purple-700 rounded-lg p-3 relative bg-opacity-70",children:[(0,s.jsxs)("div",{className:"flex justify-around mb-3 relative overflow-hidden h-40",children:[[0,1,2].map(e=>(0,s.jsxs)("div",{className:"w-1/3 overflow-hidden h-full relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10"}),s.jsx("div",{className:"absolute top-0 left-0 w-full transition-transform duration-100 ease-linear",style:{transform:`translateY(${-(a[e]%1*100)}%)`},children:Z(e).map((e,t)=>s.jsx("div",{className:"text-6xl h-[3.33rem] flex items-center justify-center",style:{opacity:1===t?1:.5},children:e},t))})]},e)),s.jsx("div",{className:"absolute inset-y-0 left-0 right-0 flex items-center justify-center pointer-events-none",children:s.jsx("div",{className:"w-full h-[3.33rem] border-t-2 border-b-2 border-yellow-400 bg-yellow-400 bg-opacity-20"})}),f&&s.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center z-20",children:s.jsx("div",{className:"text-4xl font-bold animate-pulse",style:{color:f.includes("won")?"#fbbf24":"#a78bfa",textShadow:"2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"},children:f})})]}),s.jsx("button",{className:"w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-4 rounded-lg transform transition duration-200 hover:scale-105 disabled:opacity-50 text-xl",onClick:R,disabled:m||c<10||k<=0,children:m?"Spinning...":`SPIN 🎰 (${k} left)`})]}),!O&&s.jsx("button",{onClick:()=>g(!b),className:"w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg my-2 transform transition duration-200 hover:scale-105",children:b?"Hide Paytable":"Show Paytable"}),b&&!O&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden",onClick:()=>g(!1),children:(0,s.jsxs)("div",{className:"bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-xl shadow-lg max-w-md w-full relative",onClick:e=>e.stopPropagation(),children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("button",{className:"text-white hover:text-yellow-400 transition-colors duration-200",onClick:()=>g(!1),children:s.jsx(n,{size:32})}),s.jsx("h3",{className:"text-2xl font-bold text-center text-yellow-400",children:"Paytable"}),s.jsx("div",{className:"w-8"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(u).map(([e,t])=>(0,s.jsxs)("div",{className:"flex justify-between items-center bg-black bg-opacity-30 p-2 rounded",children:[s.jsx("span",{className:"text-2xl",children:e}),(0,s.jsxs)("span",{className:"text-xl font-bold text-yellow-400",children:[t,"⭐️"]})]},e))})]})}),O&&(0,s.jsxs)("div",{className:"mt-4 bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-xl shadow-lg w-full relative",children:[s.jsx("div",{className:"flex justify-between items-center mb-4",children:s.jsx("h3",{className:"text-2xl font-bold text-center text-yellow-400 w-full",children:"Paytable"})}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:Object.entries(u).map(([e,t])=>(0,s.jsxs)("div",{className:"flex justify-between items-center bg-black bg-opacity-30 p-2 rounded",children:[s.jsx("span",{className:"text-2xl",children:e}),(0,s.jsxs)("span",{className:"text-xl font-bold text-yellow-400",children:[t,"⭐️"]})]},e))})]})]}),v&&s.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden",style:{zIndex:1e3},children:s.jsx("div",{className:`text-6xl font-bold animate-bounce ${"jackpot"===v?"text-yellow-400 animate-pulse":"major"===v?"text-green-400":"big"===v?"text-blue-400":"text-purple-400"}`,style:{textShadow:"3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000"},children:"jackpot"===v?"JACKPOT!!!":"major"===v?"MAJOR WIN!":"big"===v?"Big Win!":"Nice Win!"})}),C.map(e=>s.jsx("div",{className:"fixed text-2xl pointer-events-none overflow-hidden",style:{left:`${e.x}%`,top:`${e.y}%`,fontSize:`${e.size}px`,transition:"top 0.5s linear",zIndex:999},children:e.emoji},e.id)),s.jsx("div",{className:"z-50 w-full fixed bottom-0",children:s.jsx(l.Z,{activeTab:"Game"})})]})}},1917:e=>{e.exports={container:"Game_container__BFr9r",content:"Game_content__vryuK"}}};
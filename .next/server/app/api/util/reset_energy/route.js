"use strict";(()=>{var e={};e.id=617,e.ids=[617],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},2361:e=>{e.exports=require("events")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},5477:e=>{e.exports=require("punycode")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},9796:e=>{e.exports=require("zlib")},7892:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>g,patchFetch:()=>x,requestAsyncStorage:()=>d,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c});var s={};t.r(s),t.d(s,{GET:()=>p});var o=t(9303),i=t(8716),n=t(670),u=t(7070),a=t(8082);async function p(e){try{let{searchParams:r}=new URL(e.url),t=r.get("userid");if(!t)return u.NextResponse.json({error:"Отсутствует ID пользователя"},{status:400});let{data:s,error:o}=await a.Z.from("users").select("energy, maxenergy, energyresettime").eq("id",t).single();if(o||!s)throw Error(o?o.message:"Пользователь не найден");let i=new Date,n=new Date(s.energyresettime);if((i.getTime()-n.getTime())/1e3/3600<24)return u.NextResponse.json({error:"Энергия может быть сброшена только один раз каждые 24 часа"},{status:400});let{error:p}=await a.Z.from("users").update({energy:s.maxenergy,energyresettime:i.toISOString()}).eq("id",t);if(p)throw Error(p.message);return u.NextResponse.json({success:!0,energy:s.maxenergy})}catch(r){let e=r instanceof Error?r.message:"Unknown error occurred";return u.NextResponse.json({error:e},{status:500})}}let l=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/util/reset_energy/route",pathname:"/api/util/reset_energy",filename:"route",bundlePath:"app/api/util/reset_energy/route"},resolvedPagePath:"/Users/kirniy/Downloads/Folder/demojuly30/src/app/api/util/reset_energy/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:m}=l,g="/api/util/reset_energy/route";function x(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:c})}},8082:(e,r,t)=>{t.d(r,{Z:()=>s});let s=(0,t(2814).eI)("https://koophtqyywofqkaqozjw.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtvb3BodHF5eXdvZnFrYXFvemp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNzkxOTAsImV4cCI6MjAzNzg1NTE5MH0.kxaeb2G4_W3MPtuG-Vb0hsnl1fS3OEjzoFCC8HNYTKI")}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,315,70],()=>t(7892));module.exports=s})();
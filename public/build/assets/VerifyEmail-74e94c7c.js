import{P as d,I as _,c as p,w as a,o as r,a as o,u as t,X as g,b as i,t as n,f as b,h,d as l,n as v,g as k,e as x}from"./app-9172825b.js";import{_ as y,a as w}from"./AuntheticationIllustration-103f3ebb.js";import{_ as S}from"./PrimaryButton-5538c6e6.js";import"./SwitchLangNavbar-6c66c5a2.js";import"./SwitchDarkMode-c78508f5.js";const V={class:"mb-4 text-sm text-slate-600 dark:text-slate-400"},B={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},N=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},I={__name:"VerifyEmail",props:{status:String},setup(c){const m=c,s=d(),f=()=>{s.post(route("verification.send"))},u=_(()=>m.status==="verification-link-sent");return(e,$)=>(r(),p(y,null,{illustration:a(()=>[o(w,{type:"login",class:"w-72 h-auto"})]),default:a(()=>[o(t(g),{title:e.lang().label.email_verification},null,8,["title"]),i("div",V,n(e.lang().label.verify_email),1),t(u)?(r(),b("div",B,n(e.lang().label.verify_email_notification),1)):h("",!0),i("form",{onSubmit:x(f,["prevent"])},[i("div",C,[o(S,{class:v({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:a(()=>[l(n(t(s).processing?e.lang().button.resend_email+"...":e.lang().button.resend_email),1)]),_:1},8,["class","disabled"]),o(t(k),{href:e.route("logout"),method:"post",as:"button",class:"underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800"},{default:a(()=>[l(" Log Out")]),_:1},8,["href"])])],40,N)]),_:1}))}};export{I as default};

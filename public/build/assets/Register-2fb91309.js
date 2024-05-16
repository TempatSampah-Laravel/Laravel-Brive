import{P as f,c as g,w as n,o as w,a as s,u as a,X as _,b as t,d as u,t as p,g as b,n as h,e as v}from"./app-9172825b.js";import{_ as V,a as k}from"./AuntheticationIllustration-103f3ebb.js";import{_ as i,a as m,b as d}from"./TextInput-5fb8cc21.js";import{_ as y}from"./PrimaryButton-5538c6e6.js";import"./SwitchLangNavbar-6c66c5a2.js";import"./SwitchDarkMode-c78508f5.js";const $=["onSubmit"],q={class:"mt-4"},U={class:"mt-4"},B={class:"mt-4"},N={class:"flex items-center justify-between mt-4"},P={__name:"Register",setup(S){const e=f({name:"",email:"",password:"",password_confirmation:"",terms:!1}),c=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(l,o)=>(w(),g(V,null,{illustration:n(()=>[s(k,{type:"login",class:"w-72 h-auto"})]),default:n(()=>[s(a(_),{title:l.lang().label.register},null,8,["title"]),t("form",{onSubmit:v(c,["prevent"])},[t("div",null,[s(i,{for:"name",value:l.lang().label.name},null,8,["value"]),s(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>a(e).name=r),required:"",autofocus:"",autocomplete:"name",placeholder:l.lang().placeholder.name,error:a(e).errors.name},null,8,["modelValue","placeholder","error"]),s(d,{class:"mt-2",message:a(e).errors.name},null,8,["message"])]),t("div",q,[s(i,{for:"email",value:l.lang().label.email},null,8,["value"]),s(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(e).email=r),required:"",autocomplete:"username",placeholder:l.lang().placeholder.email,error:a(e).errors.email},null,8,["modelValue","placeholder","error"]),s(d,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),t("div",U,[s(i,{for:"password",value:l.lang().label.password},null,8,["value"]),s(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(e).password=r),required:"",autocomplete:"new-password",placeholder:l.lang().placeholder.password,error:a(e).errors.password},null,8,["modelValue","placeholder","error"]),s(d,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),t("div",B,[s(i,{for:"password_confirmation",value:l.lang().label.password_confirmation},null,8,["value"]),s(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:a(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>a(e).password_confirmation=r),required:"",autocomplete:"new-password",placeholder:l.lang().placeholder.password_confirmation,error:a(e).errors.password_confirmation},null,8,["modelValue","placeholder","error"]),s(d,{class:"mt-2",message:a(e).errors.password_confirmation},null,8,["message"])]),t("div",N,[s(a(b),{href:l.route("login"),class:"underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800"},{default:n(()=>[u(p(l.lang().label.registered),1)]),_:1},8,["href"]),s(y,{class:h(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:n(()=>[u(p(a(e).processing?l.lang().button.register+"...":l.lang().button.register),1)]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{P as default};

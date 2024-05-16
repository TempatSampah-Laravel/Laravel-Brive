import{P as u,bm as _,f as h,a as c,w as d,o as b,b as l,t as s,u as a,d as f,n as g,e as w}from"./app-9172825b.js";import{_ as x}from"./DangerButton-6798d286.js";import{_ as k,a as y}from"./SecondaryButton-d727c941.js";const S={class:"space-y-6"},v=["onSubmit"],B={class:"text-lg font-medium text-slate-900 dark:text-slate-100"},C={class:"mt-1 text-sm text-slate-600 dark:text-slate-400"},$={class:"mt-6 flex justify-end"},V={__name:"DeleteBulk",props:{show:Boolean,title:String,selectedId:Object},emits:["close"],setup(p,{emit:n}){const t=p,e=u({id:[]}),m=()=>{e.post(route("user.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{n("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{t.show&&(e.id=t.selectedId)}),(i,o)=>(b(),h("section",S,[c(k,{show:t.show,onClose:o[1]||(o[1]=r=>n("close")),maxWidth:"lg"},{default:d(()=>{var r;return[l("form",{class:"p-6",onSubmit:w(m,["prevent"])},[l("h2",B,s(i.lang().label.delete)+" "+s(t.title),1),l("p",C,s(i.lang().label.delete_confirm)+" "+s((r=t.selectedId)==null?void 0:r.length)+" "+s(t.title)+"? ",1),l("div",$,[c(y,{disabled:a(e).processing,onClick:o[0]||(o[0]=D=>n("close"))},{default:d(()=>[f(s(i.lang().button.close),1)]),_:1},8,["disabled"]),c(x,{class:g(["ml-3",{"opacity-25":a(e).processing}]),disabled:a(e).processing,onClick:m},{default:d(()=>[f(s(a(e).processing?"Delete...":"Delete"),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{V as default};

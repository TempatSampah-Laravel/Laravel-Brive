import{u as p,A as g,g as _,a as d,w as c,o as b,d as a,t as s,b as n,e as u,n as h,f as y}from"./app-949cc7de.js";import{_ as w}from"./DangerButton-0add8883.js";import{_ as k,a as x}from"./SecondaryButton-b4167ff5.js";const S={class:"space-y-6"},v=["onSubmit"],B={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},C={class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},$={class:"mt-6 flex justify-end"},j={__name:"DeleteBulk",props:{show:Boolean,title:String,selectedId:Object},emits:["close"],setup(f,{emit:r}){const t=f,e=p({id:[]}),m=()=>{e.post(route("permission.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{r("close"),e.reset()},onError:()=>null,onFinish:()=>null})};return g(()=>{t.show&&(e.id=t.selectedId)}),(o,l)=>(b(),_("section",S,[d(k,{show:t.show,onClose:l[1]||(l[1]=i=>r("close")),maxWidth:"lg"},{default:c(()=>{var i;return[a("form",{class:"p-6",onSubmit:y(m,["prevent"])},[a("h2",B,s(o.lang().label.delete)+" "+s(t.title),1),a("p",C,s(o.lang().label.delete_confirm)+" "+s((i=t.selectedId)==null?void 0:i.length)+" "+s(t.title)+"? ",1),a("div",$,[d(x,{disabled:n(e).processing,onClick:l[0]||(l[0]=E=>r("close"))},{default:c(()=>[u(s(o.lang().button.close),1)]),_:1},8,["disabled"]),d(w,{class:h(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:m},{default:c(()=>[u(s(n(e).processing?o.lang().button.delete+"...":o.lang().button.delete),1)]),_:1},8,["class","disabled"])])],40,v)]}),_:1},8,["show"])]))}};export{j as default};

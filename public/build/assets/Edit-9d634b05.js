import{u as f,A as _,g,a as l,w as d,o as b,d as t,t as i,b as a,e as u,n as h,f as v}from"./app-949cc7de.js";import{_ as w,a as y,b as $}from"./TextInput-696daa24.js";import{_ as k,a as S}from"./SecondaryButton-b4167ff5.js";import{_ as V}from"./PrimaryButton-ce0a1dc9.js";const C={class:"space-y-6"},B=["onSubmit"],E={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},x={class:"my-6 space-y-4"},N={class:"flex justify-end"},A={__name:"Edit",props:{show:Boolean,title:String,permission:Object},emits:["close"],setup(p,{emit:r}){const n=p,s=f({name:""}),c=()=>{var e;s.put(route("permission.update",(e=n.permission)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{r("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return _(()=>{var e;n.show&&(s.name=(e=n.permission)==null?void 0:e.name)}),(e,o)=>(b(),g("section",C,[l(k,{show:n.show,onClose:o[2]||(o[2]=m=>r("close"))},{default:d(()=>[t("form",{class:"p-6",onSubmit:v(c,["prevent"])},[t("h2",E,i(e.lang().label.edit)+" "+i(n.title),1),t("div",x,[t("div",null,[l(w,{for:"name",value:e.lang().label.role},null,8,["value"]),l(y,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).name=m),required:"",placeholder:e.lang().placeholder.name},null,8,["modelValue","placeholder"]),l($,{class:"mt-2",message:a(s).errors.name},null,8,["message"])])]),t("div",N,[l(S,{disabled:a(s).processing,onClick:o[1]||(o[1]=m=>r("close"))},{default:d(()=>[u(i(e.lang().button.close),1)]),_:1},8,["disabled"]),l(V,{class:h(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:c},{default:d(()=>[u(i(a(s).processing?e.lang().button.save+"...":e.lang().button.save),1)]),_:1},8,["class","disabled"])])],40,B)]),_:1},8,["show"])]))}};export{A as default};

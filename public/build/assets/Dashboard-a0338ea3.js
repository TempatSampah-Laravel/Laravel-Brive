import{_ as c,a as b,r as u,b as n,c as g,d as h}from"./AuthenticatedLayout-d004cfad.js";import{g as m,a as s,b as l,w as d,F as f,o as p,H as _,d as e,t as r,L as a}from"./app-949cc7de.js";import"./index-a7bb2519.js";const v={class:"space-y-4"},x={class:"text-white dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 overflow-hidden shadow-sm"},w={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-blue-600/70 dark:bg-blue-500/80 items-center overflow-hidden"},k={class:"flex flex-col"},y={class:"text-4xl font-bold"},j={class:"text-md md:text-lg uppercase"},N={class:"bg-blue-600 dark:bg-blue-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-blue-600/90 dark:hover:bg-blue-600/70"},$={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-green-600/70 dark:bg-green-500/80 items-center overflow-hidden"},D={class:"flex flex-col"},B={class:"text-4xl font-bold"},F={class:"text-md md:text-lg uppercase"},H={class:"bg-green-600 dark:bg-green-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-green-600/90 dark:hover:bg-green-600/70"},L={class:"rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-amber-600/70 dark:bg-amber-500/80 items-center overflow-hidden"},V={class:"flex flex-col"},C={class:"text-4xl font-bold"},E={class:"text-md md:text-lg uppercase"},S={class:"bg-amber-600 dark:bg-amber-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-amber-600/90 dark:hover:bg-amber-600/70"},I={__name:"Dashboard",props:{users:Number,roles:Number,permissions:Number},setup(i){const t=i;return(o,q)=>(p(),m(f,null,[s(l(_),{title:"Dashboard"}),s(c,null,{default:d(()=>[s(b,{title:"Dashboard",breadcrumbs:[]}),e("div",v,[e("div",x,[e("div",null,[e("div",w,[e("div",k,[e("p",y,r(t.users),1),e("p",j,r(o.lang().label.user),1)]),e("div",null,[s(l(u),{class:"w-16 h-auto"})])]),e("div",N,[s(l(a),{href:o.route("user.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,r(o.lang().label.more),1),s(l(n),{class:"w-5 h-5"})]),_:1},8,["href"])])]),e("div",null,[e("div",$,[e("div",D,[e("p",B,r(t.roles),1),e("p",F,r(o.lang().label.role),1)]),e("div",null,[s(l(g),{class:"w-16 h-auto"})])]),e("div",H,[s(l(a),{href:o.route("role.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,r(o.lang().label.more),1),s(l(n),{class:"w-5 h-5"})]),_:1},8,["href"])])]),e("div",null,[e("div",L,[e("div",V,[e("p",C,r(t.permissions),1),e("p",E,r(o.lang().label.permission),1)]),e("div",null,[s(l(h),{class:"w-16 h-auto"})])]),e("div",S,[s(l(a),{href:o.route("permission.index"),class:"flex justify-between items-center"},{default:d(()=>[e("p",null,r(o.lang().label.more),1),s(l(n),{class:"w-5 h-5"})]),_:1},8,["href"])])])])])]),_:1})],64))}};export{I as default};

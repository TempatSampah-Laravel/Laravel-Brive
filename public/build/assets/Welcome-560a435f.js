import{A as x}from"./index-98a2bcf9.js";import{_ as p}from"./SwitchDarkMode-7b084faf.js";import{g as l,a as i,b as o,d as e,t as s,c as m,w as c,F as h,B as g,e as n,V as u,o as a,H as f,L as d}from"./app-7d976276.js";const v={class:"relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900 items-center sm:pt-0"},_={class:"max-w-2xl mx-auto sm:px-6 lg:px-8"},y={class:"flex items-center pt-8 px-4 sm:px-0 justify-between sm:pt-0"},k={class:"flex items-center"},w={class:"text-3xl sm:text-5xl ml-4 text-primary"},b={class:"mt-4 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg"},B={class:"grid grid-cols-1"},L={class:"p-6"},V=u('<div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg><div class="ml-4 text-lg leading-7 font-semibold"><a href="https://github.com/erikwibowo/Laravel-Brive/blob/master/README.md" class="underline text-gray-900 dark:text-white">Documentation</a></div></div>',1),j={class:"ml-12"},C=e("div",{class:"mt-2 text-gray-600 dark:text-gray-400 text-sm"}," Laravel Brive is a starter project made with Laravel Breeze Inertia Vue and add more additional feature like User, Role & Permission management, Responsive design, Light/Dark Mode, Rich Table with many features. Check the documentation for more installation. ",-1),R={key:0,class:"flex items-center justify-start space-x-4 mt-4"},D={class:"sm:flex justify-between mt-4 text-sm text-gray-500"},N={class:"flex mx-4 sm:mx-0 flex-row justify-center text-center"},S={href:"https://brive.erikwibowo.com",target:"_blank"},E=e("a",{href:"https://github.com/erikwibowo",target:"_blank",class:"text-primary"},"Erik Wibowo",-1),$={class:"flex mx-4 sm:mx-0 justify-center text-center"},P={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(r){return(t,A)=>(a(),l(h,null,[i(o(f),{title:"Welcome"}),e("div",v,[e("div",_,[e("div",y,[e("div",k,[i(x,{class:"h-10 w-auto text-primary fill-current sm:h-16"}),e("p",w,s(t.$page.props.app.name),1)]),i(p)]),e("div",b,[e("div",B,[e("div",L,[V,e("div",j,[C,r.canLogin?(a(),l("div",R,[t.$page.props.auth.user?(a(),m(o(d),{key:0,href:t.route("dashboard"),class:"text-lg text-gray-700 dark:text-gray-500 underline"},{default:c(()=>[n("Dashboard")]),_:1},8,["href"])):(a(),l(h,{key:1},[i(o(d),{href:t.route("login"),class:"text-lg text-gray-700 dark:text-gray-500 underline"},{default:c(()=>[n("Log in")]),_:1},8,["href"]),r.canRegister?(a(),m(o(d),{key:0,href:t.route("register"),class:"ml-4 text-lg text-gray-700 dark:text-gray-500 underline"},{default:c(()=>[n("Register")]),_:1},8,["href"])):g("",!0)],64))])):g("",!0)])])])]),e("div",D,[e("div",N,[e("p",null,[e("a",S,s(t.$page.props.app.name),1),n(" ©️ "+s(new Date().getFullYear())+" ",1),E])]),e("div",$," Laravel v"+s(r.laravelVersion)+" (PHP v"+s(r.phpVersion)+") ",1)])])])],64))}};export{P as default};

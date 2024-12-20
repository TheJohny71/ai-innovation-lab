(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6074:function(e,t,s){Promise.resolve().then(s.bind(s,9751))},9751:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var a=s(7437),r=s(2265),n=e=>{let{children:t,onSectionChange:s}=e;return(0,a.jsx)("div",{className:"h-screen overflow-y-auto snap-y snap-mandatory",onScroll:e=>{let t=e.currentTarget;t.children;let a=window.innerHeight,r=t.scrollTop;s&&s(Math.floor((r+a/2)/a))},children:r.Children.map(t,e=>(0,a.jsx)("div",{className:"snap-start",children:e}))})},l=e=>{let{title:t,description:s,Icon:r}=e;return(0,a.jsxs)("div",{className:"relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300",children:[(0,a.jsxs)("div",{className:"flex items-center mb-4",children:[(0,a.jsx)(r,{className:"w-6 h-6 mr-2 text-blue-600 dark:text-blue-400"}),(0,a.jsx)("h3",{className:"text-lg font-semibold",children:t})]}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:s})]})},i=s(1994),o=s(3335);function d(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,o.m6)((0,i.W)(t))}let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:d("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});c.displayName="Card";let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:d("flex flex-col space-y-1.5 p-6",s),...r})});m.displayName="CardHeader";let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:d("text-2xl font-semibold leading-none tracking-tight",s),...r})});x.displayName="CardTitle",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:d("text-sm text-muted-foreground",s),...r})}).displayName="CardDescription";let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:d("p-6 pt-0",s),...r})});u.displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:d("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter";var h=()=>{let[e,t]=(0,r.useState)({name:"",email:"",company:"",message:""}),[s,n]=(0,r.useState)({type:"",message:""}),l=e=>{let{name:s,value:a}=e.target;t(e=>({...e,[s]:a}))},i=async e=>{e.preventDefault(),n({type:"loading",message:"Sending..."});try{await new Promise(e=>setTimeout(e,1500)),n({type:"success",message:"Thank you for your interest! We will contact you soon."}),t({name:"",email:"",company:"",message:""})}catch(e){n({type:"error",message:"Something went wrong. Please try again."})}};return(0,a.jsxs)(c,{className:"w-full max-w-lg mx-auto bg-white/5 backdrop-blur-sm",children:[(0,a.jsx)(m,{children:(0,a.jsx)(x,{className:"text-2xl font-bold text-center text-white",children:"Request a Demo"})}),(0,a.jsx)(u,{children:(0,a.jsxs)("form",{onSubmit:i,className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-white",children:"Name"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0,className:"w-full p-2 border rounded-md bg-white/10 text-white border-white/20"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-white",children:"Email"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0,className:"w-full p-2 border rounded-md bg-white/10 text-white border-white/20"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium text-white",children:"Company"}),(0,a.jsx)("input",{type:"text",id:"company",name:"company",value:e.company,onChange:l,className:"w-full p-2 border rounded-md bg-white/10 text-white border-white/20"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-white",children:"Message"}),(0,a.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:l,rows:4,className:"w-full p-2 border rounded-md bg-white/10 text-white border-white/20"})]}),(0,a.jsx)("button",{type:"submit",disabled:"loading"===s.type,className:"w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50",children:"loading"===s.type?"Sending...":"Submit"}),s.message&&(0,a.jsx)("div",{className:"text-center p-2 rounded ".concat("success"===s.type?"text-green-400":"error"===s.type?"text-red-400":"text-white"),children:s.message})]})})]})},p=s(4972),g=s(6076),b=s(1239);function f(){let[e,t]=(0,r.useState)(0),s=[{title:"AI Strategy",description:"Develop comprehensive AI strategies tailored to your business goals",Icon:p.Z},{title:"Innovation Lab",description:"Experiment with cutting-edge AI technologies in a controlled environment",Icon:g.Z},{title:"Quick Implementation",description:"Rapidly deploy AI solutions with our proven methodology",Icon:b.Z}];return(0,a.jsxs)(n,{onSectionChange:e=>{t(e)},children:[(0,a.jsx)("section",{className:"flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-blue-900/20 to-purple-900/20",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto text-center",children:[(0,a.jsx)("h1",{className:"text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",children:"AI Innovation Lab"}),(0,a.jsx)("p",{className:"text-xl mb-8 text-gray-600 dark:text-gray-300",children:"Empowering businesses through innovative AI solutions"})]})}),(0,a.jsx)("section",{className:"flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-purple-900/20 to-pink-900/20",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-12 text-center",children:"Our Solutions"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:s.map((e,t)=>(0,a.jsx)(l,{title:e.title,description:e.description,Icon:e.Icon},t))})]})}),(0,a.jsx)("section",{className:"flex items-center justify-center p-8 min-h-screen bg-gradient-to-br from-pink-900/20 to-blue-900/20",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-12 text-center",children:"Get in Touch"}),(0,a.jsx)(h,{})]})})]})}}},function(e){e.O(0,[846,971,117,744],function(){return e(e.s=6074)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2845:function(t,e,r){Promise.resolve().then(r.bind(r,2770))},3910:function(t,e,r){var n=r(4288).Symbol;t.exports=n},4506:function(t,e,r){var n=r(3910),a=r(4479),i=r(910),o=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?a(t):i(t)}},5041:function(t,e,r){var n=r(5035),a=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(a,""):t}},7071:function(t,e,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},4479:function(t,e,r){var n=r(3910),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,c=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(t){}var a=o.call(t);return n&&(e?t[c]=r:delete t[c]),a}},910:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},4288:function(t,e,r){var n=r(7071),a="object"==typeof self&&self&&self.Object===Object&&self,i=n||a||Function("return this")();t.exports=i},5035:function(t){var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}},7310:function(t,e,r){var n=r(8302),a=r(1121),i=r(6660),o=Math.max,c=Math.min;t.exports=function(t,e,r){var s,l,u,d,f,h,p=0,x=!1,m=!1,v=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(e){var r=s,n=l;return s=l=void 0,p=e,d=t.apply(n,r)}function g(t){var r=t-h,n=t-p;return void 0===h||r>=e||r<0||m&&n>=u}function b(){var t,r,n,i=a();if(g(i))return j(i);f=setTimeout(b,(t=i-h,r=i-p,n=e-t,m?c(n,u-r):n))}function j(t){return(f=void 0,v&&s)?y(t):(s=l=void 0,d)}function k(){var t,r=a(),n=g(r);if(s=arguments,l=this,h=r,n){if(void 0===f)return p=t=h,f=setTimeout(b,e),x?y(t):d;if(m)return clearTimeout(f),f=setTimeout(b,e),y(h)}return void 0===f&&(f=setTimeout(b,e)),d}return e=i(e)||0,n(r)&&(x=!!r.leading,u=(m="maxWait"in r)?o(i(r.maxWait)||0,e):u,v="trailing"in r?!!r.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),p=0,s=h=l=f=void 0},k.flush=function(){return void 0===f?d:j(a())},k}},8302:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},303:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},8371:function(t,e,r){var n=r(4506),a=r(303);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==n(t)}},1121:function(t,e,r){var n=r(4288);t.exports=function(){return n.Date.now()}},6660:function(t,e,r){var n=r(5041),a=r(8302),i=r(8371),o=0/0,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return o;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=s.test(t);return r||l.test(t)?u(t.slice(2),r?2:8):c.test(t)?o:+t}},9205:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(2265);let a=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.filter((t,e,r)=>!!t&&""!==t.trim()&&r.indexOf(t)===e).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,n.forwardRef)((t,e)=>{let{color:r="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f}=t;return(0,n.createElement)("svg",{ref:e,...o,width:a,height:a,stroke:r,strokeWidth:s?24*Number(c)/Number(a):c,className:i("lucide",l),...f},[...d.map(t=>{let[e,r]=t;return(0,n.createElement)(e,r)}),...Array.isArray(u)?u:[u]])}),s=(t,e)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:s,...l}=r;return(0,n.createElement)(c,{ref:o,iconNode:e,className:i("lucide-".concat(a(t)),s),...l})});return r.displayName="".concat(t),r}},6595:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});let n=(0,r(9205).Z)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},9376:function(t,e,r){"use strict";var n=r(5475);r.o(n,"usePathname")&&r.d(e,{usePathname:function(){return n.usePathname}})},5497:function(t,e,r){"use strict";r.d(e,{W:function(){return i}});var n=r(7437),a=r(7648);let i=t=>{let{items:e}=t;return(0,n.jsx)("nav",{className:"flex justify-center gap-8 fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl",role:"navigation",children:e.map(t=>{let{text:e,href:r,current:i}=t;return(0,n.jsxs)(a.default,{href:r,className:"relative px-8 py-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl transition-all duration-300 ".concat(i?"text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20":"text-gray-400 hover:text-white hover:bg-gray-800/50"),"aria-current":i?"page":void 0,children:[e,(0,n.jsx)("div",{className:"absolute inset-0 rounded-xl transition-opacity duration-300 ".concat(i?"opacity-100 bg-blue-400/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]":"opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent")})]},e)})})}},2770:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n=r(7437),a=r(2265),i=r(6595),o=r(9205);let c=(0,o.Z)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),s=(0,o.Z)("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),l=(0,o.Z)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),u=(0,o.Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);var d=r(7310),f=r.n(d),h=r(9376),p=r(5497);let x=a.memo(()=>{let t=Array.from({length:50},(t,e)=>({id:e,x:100*Math.random(),y:100*Math.random(),size:2*Math.random()+1,opacity:.5*Math.random()+.3,delay:3*Math.random(),duration:3*Math.random()+2,isAccent:Math.random()>.8}));return(0,n.jsx)("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:t.map(t=>(0,n.jsx)("div",{className:"absolute rounded-full",style:{left:"".concat(t.x,"%"),top:"".concat(t.y,"%"),animation:"twinkle ".concat(t.duration,"s infinite"),animationDelay:"".concat(t.delay,"s"),animationDuration:"".concat(t.duration,"s"),transition:"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"},children:(0,n.jsx)(i.Z,{className:"w-2 h-2 ".concat(t.isAccent?"text-teal-400":"text-blue-400"),"aria-hidden":"true"})},t.id))})});x.displayName="StarField";let m=t=>{let{Icon:e,title:r,gradient:a}=t,[i,...o]=r.split(" ");return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center gap-8 group h-64",children:[(0,n.jsx)("div",{className:"rounded-2xl p-10 border border-opacity-20 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors ".concat(a.border," shadow-lg flex items-center justify-center"),children:(0,n.jsx)("div",{className:"flex items-center justify-center w-24 h-24",children:(0,n.jsx)(e,{className:"w-full h-full ".concat(a.text),strokeWidth:1.5})})}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h3",{className:"text-3xl font-medium tracking-wide text-center ".concat(a.text),children:i}),(0,n.jsx)("h3",{className:"text-3xl font-medium tracking-wide text-center ".concat(a.text),children:o.join(" ")})]})]})};var v=()=>{let t=(0,h.usePathname)(),[e,r]=(0,a.useState)({x:0,y:0}),[i,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{o(!0)},[]);let d=(0,a.useMemo)(()=>f()((t,e)=>{r({x:t,y:e})},16),[]),v=(0,a.useCallback)(t=>{d(t.clientX/window.innerWidth,t.clientY/window.innerHeight)},[d]);return(0,a.useEffect)(()=>()=>{d.cancel()},[d]),(0,a.useEffect)(()=>(window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)),[v]),(0,n.jsxs)("div",{className:"min-h-screen bg-gray-900 text-white relative overflow-hidden",children:[(0,n.jsx)(x,{}),(0,n.jsx)("div",{className:"relative z-10",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-12 pt-32 transition-opacity duration-1000 ".concat(i?"opacity-100":"opacity-0"),children:[(0,n.jsx)("h1",{className:"text-6xl font-bold text-center leading-tight",children:"AI Innovation Lab"}),(0,n.jsx)("p",{className:"text-2xl text-gray-400 text-center max-w-2xl mx-auto",children:"Future-Ready Law Firm"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto",children:[{Icon:c,title:"Enhanced Client Service",description:"Elevating client experience through innovative AI solutions",gradient:{text:"text-purple-400",border:"border-purple-400"}},{Icon:s,title:"Advanced Analytics",description:"Leveraging data for strategic insights and decision-making",gradient:{text:"text-cyan-400",border:"border-cyan-400"}},{Icon:l,title:"Process Automation",description:"Streamlining operations with intelligent workflows",gradient:{text:"text-emerald-400",border:"border-emerald-400"}},{Icon:u,title:"AI Integration",description:"Seamlessly incorporating AI into existing systems",gradient:{text:"text-blue-400",border:"border-blue-400"}}].map((t,e)=>(0,n.jsx)("div",{className:"transform hover:scale-105 transition-transform",children:(0,n.jsx)(m,{Icon:t.Icon,title:t.title,gradient:t.gradient})},e))})]})}),(0,n.jsx)(p.W,{items:[{text:"Welcome",href:"/",current:"/"===t},{text:"Solutions",href:"/solutions",current:"/solutions"===t},{text:"Disruption",href:"/disruption",current:"/disruption"===t},{text:"Mindset",href:"/mindset",current:"/mindset"===t}]})]})};function y(){return(0,n.jsx)(v,{})}}},function(t){t.O(0,[648,971,117,744],function(){return t(t.s=2845)}),_N_E=t.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2845:function(e,t,r){Promise.resolve().then(r.bind(r,2770))},3910:function(e,t,r){var n=r(4288).Symbol;e.exports=n},4506:function(e,t,r){var n=r(3910),a=r(4479),i=r(910),o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?a(e):i(e)}},5041:function(e,t,r){var n=r(5035),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},7071:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},4479:function(e,t,r){var n=r(3910),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(e){}var a=o.call(e);return n&&(t?e[c]=r:delete e[c]),a}},910:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},4288:function(e,t,r){var n=r(7071),a="object"==typeof self&&self&&self.Object===Object&&self,i=n||a||Function("return this")();e.exports=i},5035:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},7310:function(e,t,r){var n=r(8302),a=r(1121),i=r(6660),o=Math.max,c=Math.min;e.exports=function(e,t,r){var s,l,d,u,f,p,h=0,x=!1,m=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(t){var r=s,n=l;return s=l=void 0,h=t,u=e.apply(n,r)}function g(e){var r=e-p,n=e-h;return void 0===p||r>=t||r<0||m&&n>=d}function b(){var e,r,n,i=a();if(g(i))return j(i);f=setTimeout(b,(e=i-p,r=i-h,n=t-e,m?c(n,d-r):n))}function j(e){return(f=void 0,v&&s)?y(e):(s=l=void 0,u)}function k(){var e,r=a(),n=g(r);if(s=arguments,l=this,p=r,n){if(void 0===f)return h=e=p,f=setTimeout(b,t),x?y(e):u;if(m)return clearTimeout(f),f=setTimeout(b,t),y(p)}return void 0===f&&(f=setTimeout(b,t)),u}return t=i(t)||0,n(r)&&(x=!!r.leading,d=(m="maxWait"in r)?o(i(r.maxWait)||0,t):d,v="trailing"in r?!!r.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),h=0,s=p=l=f=void 0},k.flush=function(){return void 0===f?u:j(a())},k}},8302:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},303:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},8371:function(e,t,r){var n=r(4506),a=r(303);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},1121:function(e,t,r){var n=r(4288);e.exports=function(){return n.Date.now()}},6660:function(e,t,r){var n=r(5041),a=r(8302),i=r(8371),o=0/0,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||l.test(e)?d(e.slice(2),r?2:8):c.test(e)?o:+e}},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:l="",children:d,iconNode:u,...f}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:s?24*Number(c)/Number(a):c,className:i("lucide",l),...f},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:s,...l}=r;return(0,n.createElement)(c,{ref:o,iconNode:t,className:i("lucide-".concat(a(e)),s),...l})});return r.displayName="".concat(e),r}},6595:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},2770:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(7437),a=r(2265),i=r(6595),o=r(9205);let c=(0,o.Z)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),s=(0,o.Z)("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),l=(0,o.Z)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),d=(0,o.Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);var u=r(7648),f=r(7310),p=r.n(f);let h=a.memo(()=>{let e=Array.from({length:50},(e,t)=>({id:t,x:100*Math.random(),y:100*Math.random(),size:2*Math.random()+1,opacity:.5*Math.random()+.3,delay:3*Math.random(),duration:3*Math.random()+2,isAccent:Math.random()>.8}));return(0,n.jsx)("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:e.map(e=>(0,n.jsx)("div",{className:"absolute rounded-full",style:{left:"".concat(e.x,"%"),top:"".concat(e.y,"%"),animation:"twinkle ".concat(e.duration,"s infinite"),animationDelay:"".concat(e.delay,"s"),animationDuration:"".concat(e.duration,"s"),transition:"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"},children:(0,n.jsx)(i.Z,{className:"w-2 h-2 ".concat(e.isAccent?"text-teal-400":"text-blue-400"),"aria-hidden":"true"})},e.id))})});h.displayName="StarField";let x=e=>{let{Icon:t,title:r,gradient:a}=e,[i,...o]=r.split(" ");return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center gap-8 group h-64",children:[(0,n.jsx)("div",{className:"rounded-2xl p-10 border border-opacity-20 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors ".concat(a.border," shadow-lg flex items-center justify-center"),children:(0,n.jsx)("div",{className:"flex items-center justify-center w-24 h-24",children:(0,n.jsx)(t,{className:"w-full h-full ".concat(a.text),strokeWidth:1.5})})}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("h3",{className:"text-3xl font-medium tracking-wide text-center ".concat(a.text),children:i}),(0,n.jsx)("h3",{className:"text-3xl font-medium tracking-wide text-center ".concat(a.text),children:o.join(" ")})]})]})},m=e=>{let{items:t}=e;return(0,n.jsx)("nav",{className:"flex justify-center gap-8 fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl",role:"navigation",children:t.map(e=>{let{text:t,href:r,current:a}=e;return(0,n.jsxs)(u.default,{href:r,className:"relative px-8 py-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl transition-all duration-300 ".concat(a?"text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20":"text-gray-400 hover:text-white hover:bg-gray-800/50"),"aria-current":a?"page":void 0,children:[t,(0,n.jsx)("div",{className:"absolute inset-0 rounded-xl transition-opacity duration-300 ".concat(a?"opacity-100 bg-blue-400/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]":"opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent")})]},t)})})};var v=()=>{let[e,t]=(0,a.useState)({x:0,y:0}),[r,i]=(0,a.useState)(!1);(0,a.useEffect)(()=>{i(!0)},[]);let o=(0,a.useMemo)(()=>p()((e,r)=>{t({x:e,y:r})},16),[]),u=(0,a.useCallback)(e=>{o(e.clientX/window.innerWidth,e.clientY/window.innerHeight)},[o]);return(0,a.useEffect)(()=>()=>{o.cancel()},[o]),(0,a.useEffect)(()=>(window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)),[u]),(0,n.jsxs)("div",{className:"min-h-screen bg-gray-900 text-white relative overflow-hidden",children:[(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:"relative z-10",children:(0,n.jsxs)("div",{className:"flex flex-col items-center gap-12 pt-32 transition-opacity duration-1000 ".concat(r?"opacity-100":"opacity-0"),children:[(0,n.jsx)("h1",{className:"text-6xl font-bold text-center leading-tight",children:"AI Innovation Lab"}),(0,n.jsx)("p",{className:"text-2xl text-gray-400 text-center max-w-2xl mx-auto",children:"Future-Ready Law Firm"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto",children:[{Icon:c,title:"Enhanced Client Service",description:"Elevating client experience through innovative AI solutions",gradient:{text:"text-purple-400",border:"border-purple-400"}},{Icon:s,title:"Advanced Analytics",description:"Leveraging data for strategic insights and decision-making",gradient:{text:"text-cyan-400",border:"border-cyan-400"}},{Icon:l,title:"Process Automation",description:"Streamlining operations with intelligent workflows",gradient:{text:"text-emerald-400",border:"border-emerald-400"}},{Icon:d,title:"AI Integration",description:"Seamlessly incorporating AI into existing systems",gradient:{text:"text-blue-400",border:"border-blue-400"}}].map((e,t)=>(0,n.jsx)("div",{className:"transform hover:scale-105 transition-transform",children:(0,n.jsx)(x,{Icon:e.Icon,title:e.title,gradient:e.gradient})},t))})]})}),(0,n.jsx)(m,{items:[{text:"Welcome",href:"/",current:!0},{text:"Solutions",href:"/solutions",current:!1},{text:"Disruption",href:"/disruption",current:!1},{text:"Mindset",href:"/mindset",current:!1}]})]})};function y(){return(0,n.jsx)(v,{})}}},function(e){e.O(0,[648,971,117,744],function(){return e(e.s=2845)}),_N_E=e.O()}]);
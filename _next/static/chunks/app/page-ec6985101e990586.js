(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9029:function(t,e,n){var r=n(2242).Symbol;t.exports=r},6714:function(t,e,n){var r=n(9029),i=n(5078),o=n(6276),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},3225:function(t,e,n){var r=n(121),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},8278:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},5078:function(t,e,n){var r=n(9029),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[s]=n:delete t[s]),i}},6276:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},2242:function(t,e,n){var r=n(8278),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},121:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},8143:function(t,e,n){var r=n(6905),i=n(4752),o=n(1573),a=Math.max,s=Math.min;t.exports=function(t,e,n){var c,l,u,d,f,x,m=0,p=!1,h=!1,v=!0;if("function"!=typeof t)throw TypeError("Expected a function");function g(e){var n=c,r=l;return c=l=void 0,m=e,d=t.apply(r,n)}function b(t){var n=t-x,r=t-m;return void 0===x||n>=e||n<0||h&&r>=u}function y(){var t,n,r,o=i();if(b(o))return j(o);f=setTimeout(y,(t=o-x,n=o-m,r=e-t,h?s(r,u-n):r))}function j(t){return(f=void 0,v&&c)?g(t):(c=l=void 0,d)}function w(){var t,n=i(),r=b(n);if(c=arguments,l=this,x=n,r){if(void 0===f)return m=t=x,f=setTimeout(y,e),p?g(t):d;if(h)return clearTimeout(f),f=setTimeout(y,e),g(x)}return void 0===f&&(f=setTimeout(y,e)),d}return e=o(e)||0,r(n)&&(p=!!n.leading,u=(h="maxWait"in n)?a(o(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=x=l=f=void 0},w.flush=function(){return void 0===f?d:j(i())},w}},6905:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},4746:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},1087:function(t,e,n){var r=n(6714),i=n(4746);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},4752:function(t,e,n){var r=n(2242);t.exports=function(){return r.Date.now()}},1573:function(t,e,n){var r=n(3225),i=n(6905),o=n(1087),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||l.test(t)?u(t.slice(2),n?2:8):s.test(t)?a:+t}},2898:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(2265),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(t,e)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:l="",children:u,...d},f)=>(0,r.createElement)("svg",{ref:f,...i,width:a,height:a,stroke:n,strokeWidth:c?24*Number(s)/Number(a):s,className:["lucide",`lucide-${o(t)}`,l].join(" "),...d},[...e.map(([t,e])=>(0,r.createElement)(t,e)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n}},2245:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},2978:function(t,e,n){Promise.resolve().then(n.bind(n,2067))},4011:function(t,e,n){"use strict";n.r(e),n.d(e,{Navigation:function(){return s}});var r=n(7437),i=n(1396),o=n.n(i),a=n(4033),s=function(t){var e=t.items,n=(0,a.usePathname)();return(0,r.jsx)("nav",{className:"flex justify-center gap-8 fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl z-50",role:"navigation",children:(e||[{text:"Welcome",href:"/"},{text:"Solutions",href:"/solutions"},{text:"Disruption",href:"/disruption"},{text:"Mindset",href:"/mindset"}]).map(function(t){var e=t.text,i=t.href,a=n===i;return(0,r.jsxs)(o(),{href:i,className:"relative px-8 py-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl transition-all duration-300 ".concat(a?"text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20":"text-gray-400 hover:text-white hover:bg-gray-800/50"),"aria-current":a?"page":void 0,children:[e,(0,r.jsx)("div",{className:"absolute inset-0 rounded-xl transition-opacity duration-300 ".concat(a?"opacity-100 bg-blue-400/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]":"opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent")})]},e)})})}},2067:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var r=n(7437),i=n(5029),o=n(1763),a=n(6795),s=n(3823),c=n(5827),l=n(586),u=n(2265),d=n(2245),f=n(2898);/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let x=(0,f.Z)("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),m=(0,f.Z)("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),p=(0,f.Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);var h=n(8143),v=n.n(h),g=n(4033),b=n(4011),y=u.memo(function(t){var e=t.mousePosition,n=(0,u.useMemo)(function(){return Array.from({length:60}).map(function(){return{left:"".concat(100*Math.random(),"%"),top:"".concat(100*Math.random(),"%"),delay:3*Math.random(),duration:2+3*Math.random(),isAccent:Math.random()>.7,scale:.5+.5*Math.random()}})},[]);return(0,r.jsx)("div",{className:"absolute inset-0 opacity-30",children:n.map(function(t,n){return(0,r.jsx)("div",{className:"absolute animate-soft-pulse transition-all-smooth",style:{left:t.left,top:t.top,transform:"translate3d(".concat(20*e.x,"px, ").concat(20*e.y,"px, 0) scale(").concat(t.scale,")"),animationDelay:"".concat(t.delay,"s"),animationDuration:"".concat(t.duration,"s")},children:(0,r.jsx)(d.Z,{className:"w-2 h-2 ".concat(t.isAccent?"text-teal-400":"text-blue-400"),"aria-hidden":"true"})},n)})})});y.displayName="StarField";var j=function(t){var e,n=t.Icon,i=t.title,o=t.gradient,u=(e=i.split(" "),(0,a.o)(e)||(0,s.f)(e)||(0,l.N)(e)||(0,c.i)()),d=u[0],f=u.slice(1);return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 group h-32 card-hover",children:[(0,r.jsx)("div",{className:"rounded-2xl p-6 border border-opacity-20 glass-effect ".concat(o.border," shadow-lg flex items-center justify-center"),children:(0,r.jsx)("div",{className:"flex items-center justify-center w-12 h-12",children:(0,r.jsx)(n,{className:"w-full h-full ".concat(o.text),strokeWidth:1.5})})}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("h3",{className:"text-xl font-medium tracking-wide text-center ".concat(o.text),children:d}),(0,r.jsx)("h3",{className:"text-xl font-medium tracking-wide text-center ".concat(o.text),children:f.join(" ")})]})]})},w=function(){var t=(0,g.usePathname)(),e=(0,o._)((0,u.useState)({x:0,y:0}),2),n=e[0],a=e[1],s=(0,o._)((0,u.useState)(!1),2),c=s[0],l=s[1];(0,u.useEffect)(function(){l(!0)},[]);var d=(0,u.useCallback)(v()(function(t){a({x:t.clientX/window.innerWidth,y:t.clientY/window.innerHeight})},16),[]);return(0,u.useEffect)(function(){return window.addEventListener("mousemove",d),function(){return window.removeEventListener("mousemove",d)}},[d]),(0,r.jsxs)("div",{className:"min-h-screen bg-slate-900 text-white relative overflow-hidden",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,rgba(0,0,0,0)_50%)]"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.01)_1px,transparent_1px)] bg-[size:64px_64px]"}),(0,r.jsx)(y,{mousePosition:n}),(0,r.jsx)("div",{className:"absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"}),(0,r.jsx)("div",{className:"absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"}),(0,r.jsxs)("div",{className:"relative max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-start pt-24",children:[(0,r.jsxs)("div",{className:"text-center mb-24 animate-fade-in ".concat(c?"opacity-100":"opacity-0"),children:[(0,r.jsx)("h1",{className:"text-6xl font-bold mb-4 tracking-wide gradient-text animate-gradient drop-shadow-2xl",children:"Future-Ready Law Firm"}),(0,r.jsx)("h2",{className:"text-5xl font-bold mb-8 tracking-wide gradient-text animate-gradient drop-shadow-2xl",children:"AI Innovation Hub"}),(0,r.jsx)("p",{className:"text-gray-300 text-2xl mt-4 mb-16 max-w-3xl mx-auto drop-shadow-lg",children:"Accelerating disruption through human-centered AI solutions"})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 px-8 max-w-5xl mx-auto mt-32 animate-slide-in ".concat(c?"opacity-100":"opacity-0"),children:[{Icon:x,title:"Enhanced Client Service",description:"Elevating client experience through innovative AI solutions",gradient:{text:"text-purple-400",border:"border-purple-400"}},{Icon:m,title:"Accelerated Workflows",description:"Streamlining operations with intelligent automation",gradient:{text:"text-blue-400",border:"border-blue-400"}},{Icon:p,title:"Talent Acceleration",description:"Empowering growth through AI-driven development",gradient:{text:"text-teal-400",border:"border-teal-400",marginTop:"-2px"}}].map(function(t,e){return(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(j,(0,i._)({},t))},e)})}),(0,r.jsx)(b.Navigation,{items:[{text:"Welcome",href:"/",current:"/"===t},{text:"Solutions",href:"/solutions",current:"/solutions"===t},{text:"Disruption",href:"/disruption",current:"/disruption"===t},{text:"Mindset",href:"/mindset",current:"/mindset"===t}]})]})]})};function N(){return(0,r.jsx)(w,{})}}},function(t){t.O(0,[569,971,938,744],function(){return t(t.s=2978)}),_N_E=t.O()}]);
var e=require("react"),t=require("clsx");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/n(e),s=/*#__PURE__*/n(t);const a=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=t=>e.isValidElement(t)||r(t)||i(t)||a(t);function u(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function d(t){let{enter:n,exit:s,appendPosition:a=!1,collapse:r=!0,collapseDuration:i=300}=t;return function(t){let{children:l,position:c,preventExitTransition:d,done:f,nodeRef:p,isIn:m}=t;const g=a?`${n}--${c}`:n,h=a?`${s}--${c}`:s,y=e.useRef(0);return e.useLayoutEffect(()=>{const e=p.current,t=g.split(" "),n=o=>{o.target===p.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===y.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),e.useEffect(()=>{const e=p.current,t=()=>{e.removeEventListener("animationend",t),r?u(e,f,i):f()};m||(d?t():(y.current=1,e.className+=` ${h}`,e.addEventListener("animationend",t)))},[m]),o.default.createElement(o.default.Fragment,null,l)}}function f(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},m=e=>{let{theme:t,type:n,...s}=e;return o.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},g={info:function(e){return o.default.createElement(m,{...e},o.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.default.createElement(m,{...e},o.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.default.createElement(m,{...e},o.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.default.createElement(m,{...e},o.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.default.createElement("div",{className:"Toastify__spinner"})}};function h(t){const[,n]=e.useReducer(e=>e+1,0),[o,s]=e.useState([]),u=e.useRef(null),d=e.useRef(new Map).current,m=e=>-1!==o.indexOf(e),h=e.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:e=>d.get(e)}).current;function y(e){let{containerId:t}=e;const{limit:n}=h.props;!n||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function v(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function T(){const{toastContent:e,toastProps:t,staleId:n}=h.queue.shift();C(e,t,n)}function E(t,o){let{delay:s,staleId:m,...y}=o;if(!c(t)||function(e){return!u.current||h.props.enableMultiContainer&&e.containerId!==h.props.containerId||d.has(e.toastId)&&null==e.updateId}(y))return;const{toastId:E,updateId:I,data:b}=y,{props:_}=h,L=()=>v(E),O=null==I;O&&h.count++;const N={..._,style:_.toastStyle,key:h.toastKey++,...y,toastId:E,updateId:I,data:b,closeToast:L,isIn:!1,className:l(y.className||_.toastClassName),bodyClassName:l(y.bodyClassName||_.bodyClassName),progressClassName:l(y.progressClassName||_.progressClassName),autoClose:!y.isLoading&&(x=y.autoClose,R=_.autoClose,!1===x||a(x)&&x>0?x:R),deleteToast(){const e=f(d.get(E),"removed");d.delete(E),p.emit(4,e);const t=h.queue.length;if(h.count=null==E?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),t>0){const e=null==E?h.props.limit:1;if(1===t||1===e)h.displayedToast++,T();else{const n=e>t?t:e;h.displayedToast=n;for(let e=0;e<n;e++)T()}}else n()}};var x,R;N.iconOut=function(t){let{theme:n,type:o,isLoading:s,icon:l}=t,c=null;const u={theme:n,type:o};return!1===l||(i(l)?c=l(u):e.isValidElement(l)?c=e.cloneElement(l,u):r(l)||a(l)?c=l:s?c=g.spinner():(e=>e in g)(o)&&(c=g[o](u))),c}(N),i(y.onOpen)&&(N.onOpen=y.onOpen),i(y.onClose)&&(N.onClose=y.onClose),N.closeButton=_.closeButton,!1===y.closeButton||c(y.closeButton)?N.closeButton=y.closeButton:!0===y.closeButton&&(N.closeButton=!c(_.closeButton)||_.closeButton);let w=t;e.isValidElement(t)&&!r(t.type)?w=e.cloneElement(t,{closeToast:L,toastProps:N,data:b}):i(t)&&(w=t({closeToast:L,toastProps:N,data:b})),_.limit&&_.limit>0&&h.count>_.limit&&O?h.queue.push({toastContent:w,toastProps:N,staleId:m}):a(s)?setTimeout(()=>{C(w,N,m)},s):C(w,N,m)}function C(e,t,n){const{toastId:o}=t;n&&d.delete(n);const a={content:e,props:t};d.set(o,a),s(e=>[...e,o].filter(e=>e!==n)),p.emit(4,f(a,null==a.props.updateId?"added":"updated"))}return e.useEffect(()=>(h.containerId=t.containerId,p.cancelEmit(3).on(0,E).on(1,e=>u.current&&v(e)).on(5,y).emit(2,h),()=>{d.clear(),p.emit(3,h)}),[]),e.useEffect(()=>{h.props=t,h.isToastActive=m,h.displayedToast=o.length}),{getToastToRender:function(e){const n=new Map,o=Array.from(d.values());return t.newestOnTop&&o.reverse(),o.forEach(e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,t=>e(t[0],t[1]))},containerRef:u,isToastActive:m}}function y(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function T(t){const[n,o]=e.useState(!1),[s,a]=e.useState(!1),r=e.useRef(null),l=e.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=e.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=t;function g(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);const n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=y(e.nativeEvent),l.y=v(e.nativeEvent),"x"===t.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function h(e){if(l.boundingRect){const{top:n,bottom:o,left:s,right:a}=l.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&l.x>=s&&l.x<=a&&l.y>=n&&l.y<=o?E():T()}}function T(){o(!0)}function E(){o(!1)}function C(e){const o=r.current;l.canDrag&&o&&(l.didMove=!0,n&&E(),l.x=y(e),l.y=v(e),l.delta="x"===t.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${t.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);const e=r.current;if(l.canDrag&&l.didMove&&e){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}e.useEffect(()=>{c.current=t}),e.useEffect(()=>(r.current&&r.current.addEventListener("d",T,{once:!0}),i(t.onOpen)&&t.onOpen(e.isValidElement(t.children)&&t.children.props),()=>{const t=c.current;i(t.onClose)&&t.onClose(e.isValidElement(t.children)&&t.children.props)}),[]),e.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",T),window.addEventListener("blur",E)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",E))}),[t.pauseOnFocusLoss]);const b={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return u&&d&&(b.onMouseEnter=E,b.onMouseLeave=T),m&&(b.onClick=e=>{p&&p(e),l.canCloseOnClick&&f()}),{playToast:T,pauseToast:E,isRunning:n,preventExitTransition:s,toastRef:r,eventHandlers:b}}function E(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function C(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e;const h=l||d&&0===f,y={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};d&&(y.transform=`scaleX(${f})`);const v=s.default("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),T=i(c)?c({rtl:p,type:r,defaultClassName:v}):s.default(v,c);return o.default.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:T,style:y,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&a()}})}const I=t=>{const{isRunning:n,preventExitTransition:a,toastRef:r,eventHandlers:l}=T(t),{closeButton:c,children:u,autoClose:d,onClick:f,type:p,hideProgressBar:m,closeToast:g,transition:h,position:y,className:v,style:I,bodyClassName:b,bodyStyle:_,progressClassName:L,progressStyle:O,updateId:N,role:x,progress:R,rtl:w,toastId:M,deleteToast:$,isIn:k,isLoading:B,iconOut:P,closeOnClick:D,theme:A}=t,z=s.default("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":D}),F=i(v)?v({rtl:w,position:y,type:p,defaultClassName:z}):s.default(z,v),S=!!R||!d,q={closeToast:g,type:p,theme:A};let H=null;return!1===c||(H=i(c)?c(q):e.isValidElement(c)?e.cloneElement(c,q):E(q)),o.default.createElement(h,{isIn:k,done:$,position:y,preventExitTransition:a,nodeRef:r},o.default.createElement("div",{id:M,onClick:f,className:F,...l,style:I,ref:r},o.default.createElement("div",{...k&&{role:x},className:i(b)?b({type:p}):s.default("Toastify__toast-body",b),style:_},null!=P&&o.default.createElement("div",{className:s.default("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},P),o.default.createElement("div",null,u)),H,o.default.createElement(C,{...N&&!S?{key:`pb-${N}`}:{},rtl:w,theme:A,delay:d,isRunning:n,isIn:k,closeToast:g,hide:m,type:p,style:O,className:L,controlledProgress:S,progress:R||0})))},b=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},_=d(b("bounce",!0)),L=d(b("slide",!0)),O=d(b("zoom")),N=d(b("flip")),x=e.forwardRef((t,n)=>{const{getToastToRender:a,containerRef:r,isToastActive:c}=h(t),{className:u,style:d,rtl:f,containerId:p}=t;function m(e){const t=s.default("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":f});return i(u)?u({position:e,rtl:f,defaultClassName:t}):s.default(t,l(u))}return e.useEffect(()=>{n&&(n.current=r.current)},[]),o.default.createElement("div",{ref:r,className:"Toastify",id:p},a((e,t)=>{const n=t.length?{...d}:{...d,pointerEvents:"none"};return o.default.createElement("div",{className:m(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:a}=e;return o.default.createElement(I,{...a,isIn:c(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},s)}))}))});x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:_,autoClose:5e3,closeButton:E,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let R,w=new Map,M=[],$=1;function k(){return""+$++}function B(e){return e&&(r(e.toastId)||a(e.toastId))?e.toastId:k()}function P(e,t){return w.size>0?p.emit(0,e,t):M.push({content:e,options:t}),t.toastId}function D(e,t){return{...t,type:t&&t.type||e,toastId:B(t)}}function A(e){return(t,n)=>P(t,D(e,n))}function z(e,t){return P(e,D("default",t))}z.loading=(e,t)=>P(e,D("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),z.promise=function(e,t,n){let o,{pending:s,error:a,success:l}=t;s&&(o=r(s)?z.loading(s,n):z.loading(s.render,{...n,...s}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,s)=>{if(null==t)return void z.dismiss(o);const a={type:e,...c,...n,data:s},i=r(t)?{render:t}:t;return o?z.update(o,{...a,...i}):z(i.render,{...a,...i}),s},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),d},z.success=A("success"),z.info=A("info"),z.error=A("error"),z.warning=A("warning"),z.warn=z.warning,z.dark=(e,t)=>P(e,D("default",{theme:"dark",...t})),z.dismiss=e=>{w.size>0?p.emit(1,e):M=M.filter(t=>null!=e&&t.options.toastId!==e)},z.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},z.isActive=e=>{let t=!1;return w.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},z.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{const n=function(e,t){let{containerId:n}=t;const o=w.get(n||R);return o&&o.getToast(e)}(e,t);if(n){const{props:o,content:s}=n,a={...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,P(r,a)}},0)},z.done=e=>{z.update(e,{progress:1})},z.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),z.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},z.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,e=>{R=e.containerId||e,w.set(R,e),M.forEach(e=>{p.emit(0,e.content,e.options)}),M=[]}).on(3,e=>{w.delete(e.containerId||e),0===w.size&&p.off(0).off(1).off(5)}),exports.Bounce=_,exports.Flip=N,exports.Icons=g,exports.Slide=L,exports.ToastContainer=x,exports.Zoom=O,exports.collapseToast=u,exports.cssTransition=d,exports.toast=z,exports.useToast=T,exports.useToastContainer=h;
//# sourceMappingURL=react-toastify.js.map
var e=require("react");module.exports=function(n,r,t,u){void 0===t&&(t=global),void 0===u&&(u={});var c=e.useRef(),i=u.capture,o=u.passive,a=u.once;e.useEffect(function(){c.current=r},[r]),e.useEffect(function(){if(t&&t.addEventListener){var e=function(e){return c.current(e)},r={capture:i,passive:o,once:a};return t.addEventListener(n,e,r),function(){t.removeEventListener(n,e,r)}}},[n,t,i,o,a])};
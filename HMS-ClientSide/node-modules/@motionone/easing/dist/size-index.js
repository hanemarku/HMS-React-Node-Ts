const t=t=>t,n=(t,n,e)=>(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t;function e(e,a,r,o){if(e===a&&r===o)return t;const h=t=>function(t,e,a,r,o){let h,c,i=0;do{c=e+(a-e)/2,h=n(c,r,o)-t,h>0?a=c:e=c}while(Math.abs(h)>1e-7&&++i<12);return c}(t,0,1,e,r);return t=>0===t||1===t?t:n(h(t),a,o)}const a=(t,n="end")=>e=>{const a=(e="end"===n?Math.min(e,.999):Math.max(e,.001))*t,r="end"===n?Math.floor(a):Math.ceil(a);return o=0,h=1,c=r/t,Math.min(Math.max(c,o),h);var o,h,c};export{e as cubicBezier,a as steps};
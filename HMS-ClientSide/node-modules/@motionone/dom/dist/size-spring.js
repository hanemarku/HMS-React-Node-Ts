const t=t=>t,e=t=>"string"==typeof t,n=t=>t/1e3;function r(t,e,n){const r=Math.max(e-5,0);return a=n-t(r),(s=e-r)?a*(1e3/s):0;var a,s}const a=100,s=10,o=1;const i=["","X","Y","Z"],c={x:"translateX",y:"translateY",z:"translateZ"},u={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},l={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:u,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:t},skew:u},h=new Map,f=t=>`--motion-${t}`,g=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{i.forEach((e=>{g.push(t+e),h.set(f(t+e),l[t])}))}));const d=new Set(g);function p(t){return c[t]&&(t=c[t]),e=t,d.has(e)?f(t):t;var e}function m(t){return(t=>"number"==typeof t)(t)&&!isNaN(t)}function v(t){return e(t)?parseFloat(t):t}const M=function(n){const a=new WeakMap;return(s={})=>{const o=new Map,i=(t=0,e=100,r=0,a=!1)=>{const i=`${t}-${e}-${r}-${a}`;return o.has(i)||o.set(i,n(Object.assign({from:t,to:e,velocity:r,restSpeed:a?.05:2,restDistance:a?.01:.5},s))),o.get(i)},c=(e,n)=>(a.has(e)||a.set(e,function(e,n=t){let r,a=10,s=e(0);const o=[n(s.current)];for(;!s.done&&a<1e4;)s=e(a),o.push(n(s.done?s.target:s.current)),void 0===r&&s.hasReachedTarget&&(r=a),a+=10;const i=a-10;return 1===o.length&&o.push(s.current),{keyframes:o,duration:i/1e3,overshootDuration:(null!=r?r:i)/1e3}}(e,n)),a.get(e));return{createAnimation:(n,a=!0,s,o,u)=>{let l,f,g,d=0,M=t;const x=n.length;if(a){M=function(n,r){var a;let s=(null==r?void 0:r.toDefaultUnit)||t;const o=n[n.length-1];if(e(o)){const t=(null===(a=o.match(/(-?[\d.]+)([a-z%]*)/))||void 0===a?void 0:a[2])||"";t&&(s=e=>e+t)}return s}(n,o?h.get(p(o)):void 0);if(g=v(n[x-1]),x>1&&null!==n[0])f=v(n[0]);else{const t=null==u?void 0:u.generator;if(t){const{animation:e,generatorStartTime:n}=u,a=(null==e?void 0:e.startTime)||n||0,s=(null==e?void 0:e.currentTime)||performance.now()-a,o=t(s).current;f=o,d=r((e=>t(e).current),s,o)}else s&&(f=v(s()))}}if(m(f)&&m(g)){const t=i(f,g,d,null==o?void 0:o.includes("scale"));l=Object.assign(Object.assign({},c(t,M)),{easing:"linear"}),u&&(u.generator=t,u.generatorStartTime=performance.now())}if(!l){l={easing:"ease",duration:c(i(0,100)).overshootDuration}}return l}}}}((({stiffness:t=a,damping:e=s,mass:i=o,from:c=0,to:u=1,velocity:l=0,restSpeed:h=2,restDistance:f=.5}={})=>{l=l?n(l):0;const g={done:!1,hasReachedTarget:!1,current:c,target:u},d=u-c,p=Math.sqrt(t/i)/1e3,m=((t=a,e=s,n=o)=>e/(2*Math.sqrt(t*n)))(t,e,i);let v;if(m<1){const t=p*Math.sqrt(1-m*m);v=e=>u-Math.exp(-m*p*e)*((m*p*d-l)/t*Math.sin(t*e)+d*Math.cos(t*e))}else v=t=>u-Math.exp(-p*t)*(d+(p*d-l)*t);return t=>{g.current=v(t);const e=0===t?l:r(v,t,g.current),n=Math.abs(e)<=h,a=Math.abs(u-g.current)<=f;var s,o,i;return g.done=n&&a,g.hasReachedTarget=(s=c,o=u,i=g.current,s<o&&i>=o||s>o&&i<=o),g}}));export{M as spring};

var e="-ms-";var r="-moz-";var a="-webkit-";var n="comm";var c="rule";var s="decl";var t="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var p="@namespace";var h="@keyframes";var b="@font-face";var w="@counter-style";var d="@font-feature-values";var $=Math.abs;var k=String.fromCharCode;var g=Object.assign;function m(e,r){return C(e,0)^45?(((r<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function x(e){return e.trim()}function y(e,r){return(e=r.exec(e))?e[0]:e}function j(e,r,a){return e.replace(r,a)}function z(e,r){return e.indexOf(r)}function C(e,r){return e.charCodeAt(r)|0}function O(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function S(e,r){return r.push(e),e}function q(e,r){return e.map(r).join("")}var B=1;var D=1;var E=0;var F=0;var G=0;var H="";function I(e,r,a,n,c,s,t){return{value:e,root:r,parent:a,type:n,props:c,children:s,line:B,column:D,length:t,return:""}}function J(e,r){return g(I("",null,null,"",null,null,0),e,{length:-e.length},r)}function K(){return G}function L(){G=F>0?C(H,--F):0;if(D--,G===10)D=1,B--;return G}function N(){G=F<E?C(H,F++):0;if(D++,G===10)D=1,B++;return G}function P(){return C(H,F)}function Q(){return F}function R(e,r){return O(H,e,r)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return B=D=1,E=A(H=e),F=0,[]}function V(e){return H="",e}function W(e){return x(R(F-1,ee(e===91?e+2:e===40?e+1:e)))}function X(e){return V(Z(U(e)))}function Y(e){while(G=P())if(G<33)N();else break;return T(e)>2||T(G)>3?"":" "}function Z(e){while(N())switch(T(G)){case 0:S(ae(F-1),e);break;case 2:S(W(G),e);break;default:S(k(G),e)}return e}function _(e,r){while(--r&&N())if(G<48||G>102||G>57&&G<65||G>70&&G<97)break;return R(e,Q()+(r<6&&P()==32&&N()==32))}function ee(e){while(N())switch(G){case e:return F;case 34:case 39:if(e!==34&&e!==39)ee(G);break;case 40:if(e===41)ee(e);break;case 92:N();break}return F}function re(e,r){while(N())if(e+G===47+10)break;else if(e+G===42+42&&P()===47)break;return"/*"+R(r,F-1)+"*"+k(e===47?e:N())}function ae(e){while(!T(P()))N();return R(e,F)}function ne(e){return V(ce("",null,null,null,[""],e=U(e),0,[0],e))}function ce(e,r,a,n,c,s,t,u,i){var f=0;var o=0;var l=t;var v=0;var p=0;var h=0;var b=1;var w=1;var d=1;var $=0;var g="";var m=c;var x=s;var y=n;var O=g;while(w)switch(h=$,$=N()){case 40:if(h!=108&&C(O,l-1)==58){if(z(O+=j(W($),"&","&\f"),"&\f")!=-1)d=-1;break}case 34:case 39:case 91:O+=W($);break;case 9:case 10:case 13:case 32:O+=Y(h);break;case 92:O+=_(Q()-1,7);continue;case 47:switch(P()){case 42:case 47:S(te(re(N(),Q()),r,a),i);break;default:O+="/"}break;case 123*b:u[f++]=A(O)*d;case 125*b:case 59:case 0:switch($){case 0:case 125:w=0;case 59+o:if(p>0&&A(O)-l)S(p>32?ue(O+";",n,a,l-1):ue(j(O," ","")+";",n,a,l-2),i);break;case 59:O+=";";default:S(y=se(O,r,a,f,o,c,u,g,m=[],x=[],l),s);if($===123)if(o===0)ce(O,r,y,y,m,s,l,u,x);else switch(v===99&&C(O,3)===110?100:v){case 100:case 109:case 115:ce(e,y,y,n&&S(se(e,y,y,0,0,c,u,g,c,m=[],l),x),c,x,l,u,n?m:x);break;default:ce(O,y,y,y,[""],x,0,u,x)}}f=o=p=0,b=d=1,g=O="",l=t;break;case 58:l=1+A(O),p=h;default:if(b<1)if($==123)--b;else if($==125&&b++==0&&L()==125)continue;switch(O+=k($),$*b){case 38:d=o>0?1:(O+="\f",-1);break;case 44:u[f++]=(A(O)-1)*d,d=1;break;case 64:if(P()===45)O+=W(N());v=P(),o=l=A(g=O+=ae(Q())),$++;break;case 45:if(h===45&&A(O)==2)b=0}}return s}function se(e,r,a,n,s,t,u,i,f,o,l){var v=s-1;var p=s===0?t:[""];var h=M(p);for(var b=0,w=0,d=0;b<n;++b)for(var k=0,g=O(e,v+1,v=$(w=u[b])),m=e;k<h;++k)if(m=x(w>0?p[k]+" "+g:j(g,/&\f/g,p[k])))f[d++]=m;return I(e,r,a,s===0?c:i,f,o,l)}function te(e,r,a){return I(e,r,a,n,k(K()),O(e,2,-2),0)}function ue(e,r,a,n){return I(e,r,a,s,O(e,0,n),O(e,n+1,-1),n)}function ie(n,c,s){switch(m(n,c)){case 5103:return a+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+n+n;case 4789:return r+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return a+n+r+n+e+n+n;case 5936:switch(C(n,c+11)){case 114:return a+n+e+j(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return a+n+e+j(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return a+n+e+j(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return a+n+e+n+n;case 6165:return a+n+e+"flex-"+n+n;case 5187:return a+n+j(n,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+n;case 5443:return a+n+e+"flex-item-"+j(n,/flex-|-self/g,"")+(!y(n,/flex-|baseline/)?e+"grid-row-"+j(n,/flex-|-self/g,""):"")+n;case 4675:return a+n+e+"flex-line-pack"+j(n,/align-content|flex-|-self/g,"")+n;case 5548:return a+n+e+j(n,"shrink","negative")+n;case 5292:return a+n+e+j(n,"basis","preferred-size")+n;case 6060:return a+"box-"+j(n,"-grow","")+a+n+e+j(n,"grow","positive")+n;case 4554:return a+j(n,/([^-])(transform)/g,"$1"+a+"$2")+n;case 6187:return j(j(j(n,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),n,"")+n;case 5495:case 3959:return j(n,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return j(j(n,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+n+n;case 4200:if(!y(n,/flex-|baseline/))return e+"grid-column-align"+O(n,c)+n;break;case 2592:case 3360:return e+j(n,"template-","")+n;case 4384:case 3616:if(s&&s.some((function(e,r){return c=r,y(e.props,/grid-\w+-end/)}))){return~z(n+(s=s[c].value),"span")?n:e+j(n,"-start","")+n+e+"grid-row-span:"+(~z(s,"span")?y(s,/\d+/):+y(s,/\d+/)-+y(n,/\d+/))+";"}return e+j(n,"-start","")+n;case 4896:case 4128:return s&&s.some((function(e){return y(e.props,/grid-\w+-start/)}))?n:e+j(j(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return j(n,/(.+)-inline(.+)/,a+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(n)-1-c>6)switch(C(n,c+1)){case 109:if(C(n,c+4)!==45)break;case 102:return j(n,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(C(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~z(n,"stretch")?ie(j(n,"stretch","fill-available"),c,s)+n:n}break;case 5152:case 5920:return j(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(r,a,c,s,t,u,i){return e+a+":"+c+i+(s?e+a+"-span:"+(t?u:+u-+c)+i:"")+n}));case 4949:if(C(n,c+6)===121)return j(n,":",":"+a)+n;break;case 6444:switch(C(n,C(n,14)===45?18:11)){case 120:return j(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+a+(C(n,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+n;case 100:return j(n,":",":"+e)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(n,"scroll-","scroll-snap-")+n}return n}function fe(e,r){var a="";var n=M(e);for(var c=0;c<n;c++)a+=r(e[c],c,e,r)||"";return a}function oe(e,r,a,t){switch(e.type){case i:case s:return e.return=e.return||e.value;case n:return"";case h:return e.return=e.value+"{"+fe(e.children,t)+"}";case c:e.value=e.props.join(",")}return A(a=fe(e.children,t))?e.return=e.value+"{"+a+"}":""}function le(e){var r=M(e);return function(a,n,c,s){var t="";for(var u=0;u<r;u++)t+=e[u](a,n,c,s)||"";return t}}function ve(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function pe(n,t,u,i){if(n.length>-1)if(!n.return)switch(n.type){case s:n.return=ie(n.value,n.length,u);return;case h:return fe([J(n,{value:j(n.value,"@","@"+a)})],i);case c:if(n.length)return q(n.props,(function(c){switch(y(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fe([J(n,{props:[j(c,/:(read-\w+)/,":"+r+"$1")]})],i);case"::placeholder":return fe([J(n,{props:[j(c,/:(plac\w+)/,":"+a+"input-$1")]}),J(n,{props:[j(c,/:(plac\w+)/,":"+r+"$1")]}),J(n,{props:[j(c,/:(plac\w+)/,e+"input-$1")]})],i)}return""}))}}function he(e){switch(e.type){case c:e.props=e.props.map((function(r){return q(X(r),(function(r,a,n){switch(C(r,0)){case 12:return O(r,1,A(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(n[++a]==="global")n[a]="",n[++a]="\f"+O(n[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(n)>1?"":r;case a=M(n)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}export{f as CHARSET,n as COMMENT,w as COUNTER_STYLE,s as DECLARATION,v as DOCUMENT,b as FONT_FACE,d as FONT_FEATURE_VALUES,i as IMPORT,h as KEYFRAMES,u as MEDIA,r as MOZ,e as MS,p as NAMESPACE,t as PAGE,c as RULESET,l as SUPPORTS,o as VIEWPORT,a as WEBKIT,$ as abs,U as alloc,S as append,g as assign,Q as caret,K as char,G as character,H as characters,C as charat,D as column,q as combine,te as comment,re as commenter,ne as compile,J as copy,V as dealloc,ue as declaration,W as delimit,ee as delimiter,_ as escaping,k as from,m as hash,ae as identifier,z as indexof,E as length,B as line,y as match,le as middleware,he as namespace,N as next,I as node,ce as parse,P as peek,F as position,ie as prefix,pe as prefixer,L as prev,j as replace,se as ruleset,ve as rulesheet,fe as serialize,M as sizeof,R as slice,oe as stringify,A as strlen,O as substr,T as token,X as tokenize,Z as tokenizer,x as trim,Y as whitespace};
//# sourceMappingURL=stylis.mjs.map
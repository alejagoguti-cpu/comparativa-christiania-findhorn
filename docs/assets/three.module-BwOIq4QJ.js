(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var md={exports:{}},il={};var v0;function mE(){if(v0)return il;v0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return il.Fragment=t,il.jsx=i,il.jsxs=i,il}var _0;function gE(){return _0||(_0=1,md.exports=mE()),md.exports}var T2=gE(),gd={exports:{}},oe={};var y0;function vE(){if(y0)return oe;y0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function O(D,Y,vt){this.props=D,this.context=Y,this.refs=x,this.updater=vt||b}O.prototype.isReactComponent={},O.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},O.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function N(){}N.prototype=O.prototype;function C(D,Y,vt){this.props=D,this.context=Y,this.refs=x,this.updater=vt||b}var $=C.prototype=new N;$.constructor=C,M($,O.prototype),$.isPureReactComponent=!0;var I=Array.isArray;function B(){}var H={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function R(D,Y,vt){var ct=vt.ref;return{$$typeof:o,type:D,key:Y,ref:ct!==void 0?ct:null,props:vt}}function F(D,Y){return R(D.type,Y,D.props)}function ot(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function nt(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return Y[vt]})}var lt=/\/+/g;function ht(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?nt(""+D.key):Y.toString(36)}function V(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(B,B):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ut(D,Y,vt,ct,Ct){var Lt=typeof D;(Lt==="undefined"||Lt==="boolean")&&(D=null);var Ut=!1;if(D===null)Ut=!0;else switch(Lt){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(D.$$typeof){case o:case t:Ut=!0;break;case v:return Ut=D._init,ut(Ut(D._payload),Y,vt,ct,Ct)}}if(Ut)return Ct=Ct(D),Ut=ct===""?"."+ht(D,0):ct,I(Ct)?(vt="",Ut!=null&&(vt=Ut.replace(lt,"$&/")+"/"),ut(Ct,Y,vt,"",function(Tt){return Tt})):Ct!=null&&(ot(Ct)&&(Ct=F(Ct,vt+(Ct.key==null||D&&D.key===Ct.key?"":(""+Ct.key).replace(lt,"$&/")+"/")+Ut)),Y.push(Ct)),1;Ut=0;var bt=ct===""?".":ct+":";if(I(D))for(var at=0;at<D.length;at++)ct=D[at],Lt=bt+ht(ct,at),Ut+=ut(ct,Y,vt,Lt,Ct);else if(at=E(D),typeof at=="function")for(D=at.call(D),at=0;!(ct=D.next()).done;)ct=ct.value,Lt=bt+ht(ct,at++),Ut+=ut(ct,Y,vt,Lt,Ct);else if(Lt==="object"){if(typeof D.then=="function")return ut(V(D),Y,vt,ct,Ct);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function K(D,Y,vt){if(D==null)return D;var ct=[],Ct=0;return ut(D,ct,"","",function(Lt){return Y.call(vt,Lt,Ct++)}),ct}function St(D){if(D._status===-1){var Y=D._result,vt=Y();vt.then(function(ct){(D._status===0||D._status===-1)&&(D._status=1,D._result=ct,vt.status===void 0&&(vt.status="fulfilled",vt.value=ct))},function(ct){(D._status===0||D._status===-1)&&(D._status=2,D._result=ct,vt.status===void 0&&(vt.status="rejected",vt.reason=ct))}),D._status===-1&&(D._status=0,D._result=vt)}if(D._status===1)return D._result.default;throw D._result}var Et=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Bt(D){var Y=H.T,vt={};vt.types=Y!==null?Y.types:null,H.T=vt;try{var ct=D(),Ct=H.S;Ct!==null&&Ct(vt,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(B,Et)}catch(Lt){Et(Lt)}finally{Y!==null&&vt.types!==null&&(Y.types=vt.types),H.T=Y}}function ie(D){var Y=H.T;if(Y!==null){var vt=Y.types;vt===null?Y.types=[D]:vt.indexOf(D)===-1&&vt.push(D)}else Bt(ie.bind(null,D))}var _e={map:K,forEach:function(D,Y,vt){K(D,function(){Y.apply(this,arguments)},vt)},count:function(D){var Y=0;return K(D,function(){Y++}),Y},toArray:function(D){return K(D,function(Y){return Y})||[]},only:function(D){if(!ot(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return oe.Activity=g,oe.Children=_e,oe.Component=O,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=C,oe.StrictMode=r,oe.Suspense=p,oe.ViewTransition=y,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return H.H.useMemoCache(D)}},oe.addTransitionType=ie,oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(D,Y,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ct=M({},D.props),Ct=D.key;if(Y!=null)for(Lt in Y.key!==void 0&&(Ct=""+Y.key),Y)!U.call(Y,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&Y.ref===void 0||(ct[Lt]=Y[Lt]);var Lt=arguments.length-2;if(Lt===1)ct.children=vt;else if(1<Lt){for(var Ut=Array(Lt),bt=0;bt<Lt;bt++)Ut[bt]=arguments[bt+2];ct.children=Ut}return R(D.type,Ct,ct)},oe.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},oe.createElement=function(D,Y,vt){var ct,Ct={},Lt=null;if(Y!=null)for(ct in Y.key!==void 0&&(Lt=""+Y.key),Y)U.call(Y,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(Ct[ct]=Y[ct]);var Ut=arguments.length-2;if(Ut===1)Ct.children=vt;else if(1<Ut){for(var bt=Array(Ut),at=0;at<Ut;at++)bt[at]=arguments[at+2];Ct.children=bt}if(D&&D.defaultProps)for(ct in Ut=D.defaultProps,Ut)Ct[ct]===void 0&&(Ct[ct]=Ut[ct]);return R(D,Lt,Ct)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:d,render:D}},oe.isValidElement=ot,oe.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:St}},oe.memo=function(D,Y){return{$$typeof:m,type:D,compare:Y===void 0?null:Y}},oe.startTransition=Bt,oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(D){return H.H.use(D)},oe.useActionState=function(D,Y,vt){return H.H.useActionState(D,Y,vt)},oe.useCallback=function(D,Y){return H.H.useCallback(D,Y)},oe.useContext=function(D){return H.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,Y){return H.H.useDeferredValue(D,Y)},oe.useEffect=function(D,Y){return H.H.useEffect(D,Y)},oe.useEffectEvent=function(D){return H.H.useEffectEvent(D)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(D,Y,vt){return H.H.useImperativeHandle(D,Y,vt)},oe.useInsertionEffect=function(D,Y){return H.H.useInsertionEffect(D,Y)},oe.useLayoutEffect=function(D,Y){return H.H.useLayoutEffect(D,Y)},oe.useMemo=function(D,Y){return H.H.useMemo(D,Y)},oe.useOptimistic=function(D,Y){return H.H.useOptimistic(D,Y)},oe.useReducer=function(D,Y,vt){return H.H.useReducer(D,Y,vt)},oe.useRef=function(D){return H.H.useRef(D)},oe.useState=function(D){return H.H.useState(D)},oe.useSyncExternalStore=function(D,Y,vt){return H.H.useSyncExternalStore(D,Y,vt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.3.1",oe}var x0;function Wp(){return x0||(x0=1,gd.exports=vE()),gd.exports}var b2=Wp(),vd={exports:{}},al={},_d={exports:{}},yd={};var S0;function _E(){return S0||(S0=1,(function(o){function t(V,ut){var K=V.length;V.push(ut);t:for(;0<K;){var St=K-1>>>1,Et=V[St];if(0<l(Et,ut))V[St]=ut,V[K]=Et,K=St;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ut=V[0],K=V.pop();if(K!==ut){V[0]=K;t:for(var St=0,Et=V.length,Bt=Et>>>1;St<Bt;){var ie=2*(St+1)-1,_e=V[ie],D=ie+1,Y=V[D];if(0>l(_e,K))D<Et&&0>l(Y,_e)?(V[St]=Y,V[D]=K,St=D):(V[St]=_e,V[ie]=K,St=ie);else if(D<Et&&0>l(Y,K))V[St]=Y,V[D]=K,St=D;else break t}}return ut}function l(V,ut){var K=V.sortIndex-ut.sortIndex;return K!==0?K:V.id-ut.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,g=null,y=3,S=!1,E=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(V){for(var ut=i(m);ut!==null;){if(ut.callback===null)r(m);else if(ut.startTime<=V)r(m),ut.sortIndex=ut.expirationTime,t(p,ut);else break;ut=i(m)}}function $(V){if(b=!1,C(V),!E)if(i(p)!==null)E=!0,I||(I=!0,ot());else{var ut=i(m);ut!==null&&ht($,ut.startTime-V)}}var I=!1,B=-1,H=5,U=-1;function R(){return M?!0:!(o.unstable_now()-U<H)}function F(){if(M=!1,I){var V=o.unstable_now();U=V;var ut=!0;try{t:{E=!1,b&&(b=!1,O(B),B=-1),S=!0;var K=y;try{e:{for(C(V),g=i(p);g!==null&&!(g.expirationTime>V&&R());){var St=g.callback;if(typeof St=="function"){g.callback=null,y=g.priorityLevel;var Et=St(g.expirationTime<=V);if(V=o.unstable_now(),typeof Et=="function"){g.callback=Et,C(V),ut=!0;break e}g===i(p)&&r(p),C(V)}else r(p);g=i(p)}if(g!==null)ut=!0;else{var Bt=i(m);Bt!==null&&ht($,Bt.startTime-V),ut=!1}}break t}finally{g=null,y=K,S=!1}ut=void 0}}finally{ut?ot():I=!1}}}var ot;if(typeof N=="function")ot=function(){N(F)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,lt=nt.port2;nt.port1.onmessage=F,ot=function(){lt.postMessage(null)}}else ot=function(){x(F,0)};function ht(V,ut){B=x(function(){V(o.unstable_now())},ut)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ut=3;break;default:ut=y}var K=y;y=ut;try{return V()}finally{y=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(V,ut){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=y;y=V;try{return ut()}finally{y=K}},o.unstable_scheduleCallback=function(V,ut,K){var St=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?St+K:St):K=St,V){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=K+Et,V={id:v++,callback:ut,priorityLevel:V,startTime:K,expirationTime:Et,sortIndex:-1},K>St?(V.sortIndex=K,t(m,V),i(p)===null&&V===i(m)&&(b?(O(B),B=-1):b=!0,ht($,K-St))):(V.sortIndex=Et,t(p,V),E||S||(E=!0,I||(I=!0,ot()))),V},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(V){var ut=y;return function(){var K=y;y=ut;try{return V.apply(this,arguments)}finally{y=K}}}})(yd)),yd}var M0;function yE(){return M0||(M0=1,_d.exports=_E()),_d.exports}var xd={exports:{}},Rn={};var E0;function xE(){if(E0)return Rn;E0=1;var o=Wp();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.browser=function(v){return{$$typeof:c,_reason:v}},Rn.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,y)},Rn.flushSync=function(v){var g=p.T,y=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=g,r.p=y,r.d.f()}},Rn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},Rn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Rn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,S=m(y,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,b=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:b}):y==="script"&&r.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:b,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Rn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},Rn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,S=m(y,g.crossOrigin);r.d.L(v,y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Rn.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=m(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},Rn.requestFormReset=function(v){r.d.r(v)},Rn.unstable_batchedUpdates=function(v,g){return v(g)},Rn.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},Rn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Rn.version="19.3.1",Rn}var T0;function SE(){if(T0)return xd.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),xd.exports=xE(),xd.exports}var b0;function ME(){if(b0)return al;b0=1;var o=yE(),t=Wp(),i=SE();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,s=f;break}if(T===s){_=!0,s=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=u;break}if(T===s){_=!0,s=f,a=u;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,s,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,s,u,f))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=y(e);return a===null||b(n,e,a.child,{foundSelf:!1}),n}function b(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(e,n,a.child,s))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,O=null;function N(e,n,a){return e===a?!0:e===n?(x=e,!0):!1}function C(e,n,a){return e===a?(O=e,!1):e===n?(O!==null&&(x=e),!0):!1}function $(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function I(e,n,a){for(var s=0,u=e;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)e=a(e),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var B=Object.assign,H=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),lt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),ie=Symbol.for("react.legacy_hidden"),_e=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),vt=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=vt&&e[vt]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function Lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case nt:return"Profiler";case ot:return"StrictMode";case ut:return"Suspense";case K:return"SuspenseList";case Bt:return"Activity";case D:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case ht:return e.displayName||"Context";case lt:return(e._context.displayName||"Context")+".Consumer";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case St:return n=e.displayName||null,n!==null?n:Lt(e.type)||"Memo";case Et:n=e._payload,e=e._init;try{return Lt(e(n))}catch{}}return null}var Ut=Array.isArray,bt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Tt={pending:!1,data:null,method:null,action:null},P=[],Wt=-1;function Mt(e){return{current:e}}function wt(e){0>Wt||(e.current=P[Wt],P[Wt]=null,Wt--)}function yt(e,n){Wt++,P[Wt]=e.current,e.current=n}var $t=Mt(null),Vt=Mt(null),L=Mt(null),A=Mt(null);function et(e,n){switch(yt(L,n),yt(Vt,e),yt($t,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A_(n),e=R_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}wt($t),yt($t,e)}function pt(){wt($t),wt(Vt),wt(L)}function xt(e){var n=e.memoizedState;n!==null&&(Ls._currentValue=n.memoizedState,yt(A,e)),n=$t.current;var a=R_(n,e.type);n!==a&&(yt(Vt,e),yt($t,a))}function gt(e){Vt.current===e&&(wt($t),wt(Vt)),A.current===e&&(wt(A),Ls._currentValue=Tt)}var jt,Ot;function zt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",Ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+Ot}var pe=!1;function At(e,n){if(!e||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Dt){var q=Dt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(Dt){q=Dt}mt=!1;try{var tt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new e}finally{mt&&(tt!==void 0?Object.defineProperty(e.prototype,"props",tt):delete e.prototype.props)}}}else{try{throw Error()}catch(Dt){q=Dt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Dt){if(Dt&&q&&typeof Dt.stack=="string")return[Dt.stack,q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var z=_.split(`
`),Z=T.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Z.length&&!Z[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===Z.length)for(s=z.length-1,u=Z.length-1;1<=s&&0<=u&&z[s]!==Z[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==Z[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==Z[u]){var it=`
`+z[s].replace(" at new "," at ");return e.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",e.displayName)),it}while(1<=s&&0<=u);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?zt(a):""}function Yt(e,n){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==n&&n!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return At(e.type,!1);case 11:return At(e.type.render,!1);case 1:return At(e.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function ae(e){try{var n="",a=null;do n+=Yt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var se=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,ye=o.unstable_cancelCallback,ce=o.unstable_shouldYield,Fe=o.unstable_requestPaint,X=o.unstable_now,It=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,Ft=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,le=o.unstable_IdlePriority,Ze=o.log,mn=o.unstable_setDisableYieldValue,be=null,We=null;function gn(e){if(typeof Ze=="function"&&mn(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(be,e)}catch{}}var Cn=Math.clz32?Math.clz32:fo,bl=Math.log,Ji=Math.LN2;function fo(e){return e>>>=0,e===0?32:31-(bl(e)/Ji|0)|0}var pr=256,mr=262144,$i=4194304;function Pi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ta(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Pi(s):(_&=T,_!==0?u=Pi(_):a||(a=T&~e,a!==0&&(u=Pi(a))))):(T=s&~f,T!==0?u=Pi(T):_!==0?u=Pi(_):a||(a=s&~e,a!==0&&(u=Pi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ra(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ho(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-Cn(a),u=1<<s;n|=e[s],a&=~u}return n}function Xc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var e=$i;return $i<<=1,($i&62914560)===0&&($i=4194304),e}function po(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function w(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j(e,n,a,s,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,Z=e.hiddenUpdates;for(a=_&~a;0<a;){var it=31-Cn(a),mt=1<<it;T[it]=0,z[it]=-1;var q=Z[it];if(q!==null)for(Z[it]=null,it=0;it<q.length;it++){var tt=q[it];tt!==null&&(tt.lane&=-536870913)}a&=~mt}s!==0&&rt(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function rt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Cn(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function st(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Cn(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Q(e,n){var a=n&-n;return a=(a&42)!==0?1:Rt(a),(a&(e.suspendedLanes|n))!==0?0:a}function Rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ht(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kt(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:c0(e.type))}function Jt(e,n){var a=at.p;try{return at.p=e,n()}finally{at.p=a}}var ne=Math.random().toString(36).slice(2),te="__reactFiber$"+ne,Gt="__reactProps$"+ne,ge="__reactContainer$"+ne,Oe="__reactEvents$"+ne,Ve="__reactListeners$"+ne,wn="__reactHandles$"+ne,Ce="__reactResources$"+ne,Qt="__reactMarker$"+ne,Vn="__reactLoad$"+ne;function Ae(e){delete e[te],delete e[Gt],delete e[Ve],delete e[wn]}function ln(e){var n;if(n=e[te])return n;for(var a=e.parentNode;a;){if(n=a[ge]||a[te]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=q_(e);e!==null;){if(a=e[te])return a;e=q_(e)}return n}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[te]||e[ge]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function un(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function li(e){var n=e[Ce];return n||(n=e[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ue(e){e[Qt]=!0}function Kn(e){e[Vn]=void 0}var Ca=new Set,On={};function Dn(e,n){zn(e,n),zn(e+"Capture",n)}function zn(e,n){for(On[e]=n,e=0;e<n.length;e++)Ca.add(n[e])}var Rl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cm={},fm={};function Ox(e){return se.call(fm,e)?!0:se.call(cm,e)?!1:Rl.test(e)?fm[e]=!0:(cm[e]=!0,!1)}var De=!1;function hm(){var e=De;return De=!1,e}function Cl(e,n,a){if(Ox(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function wl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function ea(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zx(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qc(e){if(!e._valueTracker){var n=dm(e)?"checked":"value";e._valueTracker=zx(e,n,""+e[n])}}function pm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=dm(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var Px=/[\n"\\]/g;function ui(e){return e.replace(Px,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function kc(e,n,a,s,u,f,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jn(n)):e.value!==""+Jn(n)&&(e.value=""+Jn(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?_==="number"&&e.value==n?Yc(e,Jn(e.value)):Yc(e,Jn(n)):a!=null?Yc(e,Jn(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Jn(T):e.removeAttribute("name")}function mm(e,n,a,s,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qc(e);return}a=a!=null?""+Jn(a):"",n=n!=null?""+Jn(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),qc(e)}function Yc(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Kr(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Jn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function gm(e,n,a){if(n!=null&&(n=""+Jn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jn(a):""}function vm(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Jn(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),qc(e)}function Jr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _m(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Bx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ym(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",De=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(_m(e,u,s),De=!0)}else for(var f in n)n.hasOwnProperty(f)&&_m(e,f,n[f])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(e){return Fx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Zc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,ts=null;function xm(e){var n=Qn(e);if(n&&(e=n.stateNode)){var a=e[Gt]||null;t:switch(e=n.stateNode,n.type){case"input":if(kc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ui(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Gt]||null;if(!u)throw Error(r(90));kc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&pm(s)}break t;case"textarea":gm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Kr(e,!!a.multiple,n,!1)}}}var Qc=!1;function Sm(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var s=e(n);return s}finally{if(Qc=!1,($r!==null||ts!==null)&&(Du(),$r&&(n=$r,e=ts,ts=$r=null,xm(n),e)))for(n=0;n<e.length;n++)xm(e[n])}}function mo(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Gt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(na)try{var go={};Object.defineProperty(go,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Kc=!1}var wa=null,Jc=null,Ul=null;function Mm(){if(Ul)return Ul;var e,n=Jc,a=n.length,s,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return Ul=u.slice(e,1<s?1-s:void 0)}function Nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function Em(){return!1}function Pn(e){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ll:Em,this.isPropagationStopped=Em,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Pn(Da),vo=B({},Da,{view:0,detail:0}),Hx=Pn(vo),$c,tf,_o,zl=B({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?($c=e.screenX-_o.screenX,tf=e.screenY-_o.screenY):tf=$c=0,_o=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tf}}),Tm=Pn(zl),Gx=B({},zl,{dataTransfer:0}),Vx=Pn(Gx),Xx=B({},vo,{relatedTarget:0}),ef=Pn(Xx),qx=B({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=Pn(qx),Yx=B({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wx=Pn(Yx),Zx=B({},Da,{data:0}),bm=Pn(Zx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kx[e])?!!n[e]:!1}function nf(){return Jx}var $x=B({},vo,{key:function(e){if(e.key){var n=jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tS=Pn($x),eS=B({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Pn(eS),nS=B({},Da,{submitter:0}),iS=Pn(nS),aS=B({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),rS=Pn(aS),sS=B({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),oS=Pn(sS),lS=B({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uS=Pn(lS),cS=B({},Da,{newState:0,oldState:0,source:0}),fS=Pn(cS),hS=[9,13,27,32],af=na&&"CompositionEvent"in window,yo=null;na&&"documentMode"in document&&(yo=document.documentMode);var dS=na&&"TextEvent"in window&&!yo,Rm=na&&(!af||yo&&8<yo&&11>=yo),Cm=" ",wm=!1;function Dm(e,n){switch(e){case"keyup":return hS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var es=!1;function pS(e,n){switch(e){case"compositionend":return Um(n);case"keypress":return n.which!==32?null:(wm=!0,Cm);case"textInput":return e=n.data,e===Cm&&wm?null:e;default:return null}}function mS(e,n){if(es)return e==="compositionend"||!af&&Dm(e,n)?(e=Mm(),Ul=Jc=wa=null,es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rm&&n.locale!=="ko"?null:n.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gS[e.type]:n==="textarea"}function Lm(e,n,a,s){$r?ts?ts.push(s):ts=[s]:$r=s,n=Pu(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var xo=null,So=null;function vS(e){x_(e,0)}function Pl(e){var n=un(e);if(pm(n))return e}function Om(e,n){if(e==="change")return n}var zm=!1;if(na){var rf;if(na){var sf="oninput"in document;if(!sf){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),sf=typeof Pm.oninput=="function"}rf=sf}else rf=!1;zm=rf&&(!document.documentMode||9<document.documentMode)}function Bm(){xo&&(xo.detachEvent("onpropertychange",Im),So=xo=null)}function Im(e){if(e.propertyName==="value"&&Pl(So)){var n=[];Lm(n,So,e,jc(e)),Sm(vS,n)}}function _S(e,n,a){e==="focusin"?(Bm(),xo=n,So=a,xo.attachEvent("onpropertychange",Im)):e==="focusout"&&Bm()}function yS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(So)}function xS(e,n){if(e==="click")return Pl(n)}function SS(e,n){if(e==="input"||e==="change")return Pl(n)}function MS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:MS;function Mo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!se.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function of(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hm(e,n){var a=Fm(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fm(a)}}function Gm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=of(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=of(e.document)}return n}function lf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ES=na&&"documentMode"in document&&11>=document.documentMode,ns=null,uf=null,Eo=null,cf=!1;function Xm(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cf||ns==null||ns!==of(s)||(s=ns,"selectionStart"in s&&lf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Eo&&Mo(Eo,s)||(Eo=s,s=Pu(uf,"onSelect"),0<s.length&&(n=new Ol("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=ns)))}function gr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var is={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},ff={},qm={};na&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function vr(e){if(ff[e])return ff[e];if(!is[e])return e;var n=is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qm)return ff[e]=n[a];return e}var km=vr("animationend"),Ym=vr("animationiteration"),Wm=vr("animationstart"),TS=vr("transitionrun"),bS=vr("transitionstart"),AS=vr("transitioncancel"),Zm=vr("transitionend"),jm=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Si(e,n){jm.set(e,n),Dn(n,[e])}var RS=0;function ia(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=bi.identifierPrefix;var a=RS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Qm(e){if(e==null||typeof e=="string")return e;var n=null,a=Es;if(a!==null)for(var s=0;s<a.length;s++){var u=e[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function aa(e,n){return e=Qm(e),n=Qm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],as=0,df=0;function Il(){for(var e=as,n=df=as=0;n<e;){var a=ci[n];ci[n++]=null;var s=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&Km(a,u,f)}}function Fl(e,n,a,s){ci[as++]=e,ci[as++]=n,ci[as++]=a,ci[as++]=s,df|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function pf(e,n,a,s){return Fl(e,n,a,s),Hl(e)}function _r(e,n){return Fl(e,null,null,n),Hl(e)}function Km(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Cn(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Hl(e){if(50<ko)throw ko=0,wu=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var rs={};function CS(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new CS(e,n,a,s)}function mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Gl(e,n,a,s,u,f){var _=0;if(s=e,typeof s=="function")mf(s)&&(_=1);else if(typeof s=="string")_=nE(e,a,$t.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(s){case Bt:return e=Xn(31,a,n,u),e.elementType=Bt,e.lanes=f,e;case F:return yr(a.children,u,f,n);case ot:_=8,u|=24;break;case nt:return e=Xn(12,a,n,u|2),e.elementType=nt,e.lanes=f,e;case ut:return e=Xn(13,a,n,u),e.elementType=ut,e.lanes=f,e;case K:return e=Xn(19,a,n,u),e.elementType=K,e.lanes=f,e;case ie:case D:return e=u|32,e=Xn(30,a,n,e),e.elementType=D,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ht:_=10;break t;case lt:_=9;break t;case V:_=11;break t;case St:_=14;break t;case Et:_=16,s=null;break t}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(_,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function yr(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function gf(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function $m(e){var n=Xn(18,null,null,0);return n.stateNode=e,n}function vf(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tg=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=tg.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ae(n)},tg.set(e,n),n)}return{value:e,source:n,stack:ae(n)}}var ss=[],os=0,Vl=null,To=0,hi=[],di=0,Ua=null,Ii=1,Fi="";function sa(e,n){ss[os++]=To,ss[os++]=Vl,Vl=e,To=n}function eg(e,n,a){hi[di++]=Ii,hi[di++]=Fi,hi[di++]=Ua,Ua=e;var s=Ii;e=Fi;var u=32-Cn(s)-1;s&=~(1<<u),a+=1;var f=32-Cn(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Ii=1<<32-Cn(n)+u|a<<u|s,Fi=f+e}else Ii=1<<f|a<<u|s,Fi=e}function Xl(e){e.return!==null&&(sa(e,1),eg(e,1,0))}function _f(e){for(;e===Vl;)Vl=ss[--os],ss[os]=null,To=ss[--os],ss[os]=null;for(;e===Ua;)Ua=hi[--di],hi[di]=null,Fi=hi[--di],hi[di]=null,Ii=hi[--di],hi[di]=null}function ng(e,n){hi[di++]=Ii,hi[di++]=Fi,hi[di++]=Ua,Ii=n.id,Fi=n.overflow,Ua=e}var vn=null,qe=null,ve=!1,Na=null,pi=!1,yf=Error(r(519));function La(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(fi(n,e)),yf}function ig(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[te]=e,n[Gt]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Me(Wo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),mm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),vm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||T_(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||La(e,!0)}function ql(e){for(vn=e.return;vn;)switch(vn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:vn=vn.return}}function ls(e){if(e!==vn)return!1;if(!ve)return ql(e),ve=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jh(e.type,e.memoizedProps)),a=!a),a&&qe&&La(e),ql(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=X_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=X_(e)}else n===27?(n=qe,ja(e.type)?(e=ad,ad=null,qe=e):qe=n):qe=vn?gi(e.stateNode.nextSibling):null;return!0}function xr(){qe=vn=null,ve=!1}function xf(){var e=Na;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Na=null),e}function bo(e){Na===null?Na=[e]:Na.push(e)}var Sf=Mt(null),Sr=null,oa=null;function Oa(e,n,a){yt(Sf,n._currentValue),n._currentValue=a}function la(e){e._currentValue=Sf.current,wt(Sf)}function kl(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Mf(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),kl(f.return,a,e),s||(_=null);break t}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),kl(_,a,e),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),kl(u.return,a,e),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Mr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=u.type;$n(u.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(u===A.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ls):e=[Ls])}u=u.return}return e!==null&&Mf(n,e,a,s),n.flags|=262144,e!==null}function Yl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){Sr=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return ag(Sr,e)}function Wl(e,n){return Sr===null&&Er(e),ag(e,n)}function ag(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(r(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var wS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},DS=o.unstable_scheduleCallback,US=o.unstable_NormalPriority,nn={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new wS,data:new Map,refCount:0}}function Ao(e){e.refCount--,e.refCount===0&&DS(US,function(){e.controller.abort()})}function rg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var Ro=null;function NS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Co=null,Tf=0,Tr=0,us=null;function LS(e,n){if(Co===null){var a=Co=[];Tf=0,Tr=Hh(),us={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Tf++,n.then(sg,sg),n}function sg(){if(--Tf===0&&(Ro=null,Co!==null)){us!==null&&(us.status="fulfilled");var e=Co;Co=null,Tr=0,us=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function OS(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var og=bt.S;bt.S=function(e,n){if($v=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&LS(e,n),Ro!==null)for(var a=Rs;a!==null;)rg(a,Ro),a=a.next;if(a=e.types,a!==null){for(var s=Rs;s!==null;)rg(s,a),s=s.next;if(Tr!==0){s=Ro,s===null&&(s=Ro=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}og!==null&&og(e,n)};var br=Mt(null);function bf(){var e=br.current;return e!==null?e:Xe.pooledCache}function Zl(e,n){n===null?yt(br,br.current):yt(br,n.pool)}function lg(){var e=bf();return e===null?null:{parent:nn._currentValue,pool:e}}var cs=Error(r(460)),Af=Error(r(474)),jl=Error(r(542)),Ql={then:function(){}};function ug(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hg(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hg(e),e}throw Rr=n,cs}}function Ar(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rr=a,cs):a}}var Rr=null;function fg(){if(Rr===null)throw Error(r(459));var e=Rr;return Rr=null,e}function hg(e){if(e===cs||e===jl)throw Error(r(483))}var fs=null,wo=0;function Kl(e){var n=wo;return wo+=1,fs===null&&(fs=[]),cg(fs,e,n)}function za(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Jl(e,n){throw n.$$typeof===H?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dg(e){function n(W,G){if(e){var J=W.deletions;J===null?(W.deletions=[G],W.flags|=16):J.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key===null?G.set(W.index,W):G.set(W.key,W),W=W.sibling;return G}function u(W,G){return W=ra(W,G),W.index=0,W.sibling=null,W}function f(W,G,J){return W.index=J,e?(J=W.alternate,J!==null?(J=J.index,J<G?(W.flags|=2,G):J):(W.flags|=134217730,G)):(W.flags|=1048576,G)}function _(W){return e&&W.alternate===null&&(W.flags|=134217730),W}function T(W,G,J,dt){return G===null||G.tag!==6?(G=gf(J,W.mode,dt),G.return=W,G):(G=u(G,J),G.return=W,G)}function z(W,G,J,dt){var qt=J.type;return qt===F?(W=it(W,G,J.props.children,dt,J.key),za(W,J),W):G!==null&&(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Et&&Ar(qt)===G.type)?(G=u(G,J.props),za(G,J),G.return=W,G):(G=Gl(J.type,J.key,J.props,null,W.mode,dt),za(G,J),G.return=W,G)}function Z(W,G,J,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=vf(J,W.mode,dt),G.return=W,G):(G=u(G,J.children||[]),G.return=W,G)}function it(W,G,J,dt,qt){return G===null||G.tag!==7?(G=yr(J,W.mode,dt,qt),G.return=W,G):(G=u(G,J),G.return=W,G)}function mt(W,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gf(""+G,W.mode,J),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return J=Gl(G.type,G.key,G.props,null,W.mode,J),za(J,G),J.return=W,J;case R:return G=vf(G,W.mode,J),G.return=W,G;case Et:return G=Ar(G),mt(W,G,J)}if(Ut(G)||ct(G))return G=yr(G,W.mode,J,null),G.return=W,G;if(typeof G.then=="function")return mt(W,Kl(G),J);if(G.$$typeof===ht)return mt(W,Wl(W,G),J);Jl(W,G)}return null}function q(W,G,J,dt){var qt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return qt!==null?null:T(W,G,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case U:return J.key===qt?z(W,G,J,dt):null;case R:return J.key===qt?Z(W,G,J,dt):null;case Et:return J=Ar(J),q(W,G,J,dt)}if(Ut(J)||ct(J))return qt!==null?null:it(W,G,J,dt,null);if(typeof J.then=="function")return q(W,G,Kl(J),dt);if(J.$$typeof===ht)return q(W,G,Wl(W,J),dt);Jl(W,J)}return null}function tt(W,G,J,dt,qt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(J)||null,T(G,W,""+dt,qt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case U:return W=W.get(dt.key===null?J:dt.key)||null,z(G,W,dt,qt);case R:return W=W.get(dt.key===null?J:dt.key)||null,Z(G,W,dt,qt);case Et:return dt=Ar(dt),tt(W,G,J,dt,qt)}if(Ut(dt)||ct(dt))return W=W.get(J)||null,it(G,W,dt,qt,null);if(typeof dt.then=="function")return tt(W,G,J,Kl(dt),qt);if(dt.$$typeof===ht)return tt(W,G,J,Wl(G,dt),qt);Jl(G,dt)}return null}function Dt(W,G,J,dt){for(var qt=null,Te=null,ee=G,re=G=0,sn=null;ee!==null&&re<J.length;re++){ee.index>re?(sn=ee,ee=null):sn=ee.sibling;var Re=q(W,ee,J[re],dt);if(Re===null){ee===null&&(ee=sn);break}e&&ee&&Re.alternate===null&&n(W,ee),G=f(Re,G,re),Te===null?qt=Re:Te.sibling=Re,Te=Re,ee=sn}if(re===J.length)return a(W,ee),ve&&sa(W,re),qt;if(ee===null){for(;re<J.length;re++)ee=mt(W,J[re],dt),ee!==null&&(G=f(ee,G,re),Te===null?qt=ee:Te.sibling=ee,Te=ee);return ve&&sa(W,re),qt}for(ee=s(ee);re<J.length;re++)sn=tt(ee,W,re,J[re],dt),sn!==null&&(e&&(Re=sn.alternate,Re!==null&&ee.delete(Re.key===null?re:Re.key)),G=f(sn,G,re),Te===null?qt=sn:Te.sibling=sn,Te=sn);return e&&ee.forEach(function(tr){return n(W,tr)}),ve&&sa(W,re),qt}function Zt(W,G,J,dt){if(J==null)throw Error(r(151));for(var qt=null,Te=null,ee=G,re=G=0,sn=null,Re=J.next();ee!==null&&!Re.done;re++,Re=J.next()){ee.index>re?(sn=ee,ee=null):sn=ee.sibling;var tr=q(W,ee,Re.value,dt);if(tr===null){ee===null&&(ee=sn);break}e&&ee&&tr.alternate===null&&n(W,ee),G=f(tr,G,re),Te===null?qt=tr:Te.sibling=tr,Te=tr,ee=sn}if(Re.done)return a(W,ee),ve&&sa(W,re),qt;if(ee===null){for(;!Re.done;re++,Re=J.next())Re=mt(W,Re.value,dt),Re!==null&&(G=f(Re,G,re),Te===null?qt=Re:Te.sibling=Re,Te=Re);return ve&&sa(W,re),qt}for(ee=s(ee);!Re.done;re++,Re=J.next())Re=tt(ee,W,re,Re.value,dt),Re!==null&&(e&&(sn=Re.alternate,sn!==null&&ee.delete(sn.key===null?re:sn.key)),G=f(Re,G,re),Te===null?qt=Re:Te.sibling=Re,Te=Re);return e&&ee.forEach(function(pE){return n(W,pE)}),ve&&sa(W,re),qt}function he(W,G,J,dt){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case U:t:{for(var qt=J.key;G!==null;){if(G.key===qt){if(qt=J.type,qt===F){if(G.tag===7){a(W,G.sibling),dt=u(G,J.props.children),za(dt,J),dt.return=W,W=dt;break t}}else if(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===Et&&Ar(qt)===G.type){a(W,G.sibling),dt=u(G,J.props),za(dt,J),dt.return=W,W=dt;break t}a(W,G);break}else n(W,G);G=G.sibling}J.type===F?(dt=yr(J.props.children,W.mode,dt,J.key),za(dt,J),dt.return=W,W=dt):(dt=Gl(J.type,J.key,J.props,null,W.mode,dt),za(dt,J),dt.return=W,W=dt)}return _(W);case R:t:{for(qt=J.key;G!==null;){if(G.key===qt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(W,G.sibling),dt=u(G,J.children||[]),dt.return=W,W=dt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}dt=vf(J,W.mode,dt),dt.return=W,W=dt}return _(W);case Et:return J=Ar(J),he(W,G,J,dt)}if(Ut(J))return Dt(W,G,J,dt);if(ct(J)){if(qt=ct(J),typeof qt!="function")throw Error(r(150));return J=qt.call(J),Zt(W,G,J,dt)}if(typeof J.then=="function")return he(W,G,Kl(J),dt);if(J.$$typeof===ht)return he(W,G,Wl(W,J),dt);Jl(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(W,G.sibling),dt=u(G,J),dt.return=W,W=dt):(a(W,G),dt=gf(J,W.mode,dt),dt.return=W,W=dt),_(W)):a(W,G)}return function(W,G,J,dt){try{wo=0;var qt=he(W,G,J,dt);return fs=null,qt}catch(ee){if(ee===cs||ee===jl)throw ee;var Te=Xn(29,ee,null,W.mode);return Te.lanes=dt,Te.return=W,Te}}}var Cr=dg(!0),pg=dg(!1),Pa=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Hl(e),Km(e,null,a),n}return Fl(e,s,n,a),Hl(e)}function Do(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,st(e,a)}}function wf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Df=!1;function Uo(){if(Df){var e=us;if(e!==null)throw e}}function No(e,n,a,s){Df=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,Z=z.next;z.next=null,_===null?f=Z:_.next=Z,_=z;var it=e.alternate;it!==null&&(it=it.updateQueue,T=it.lastBaseUpdate,T!==_&&(T===null?it.firstBaseUpdate=Z:T.next=Z,it.lastBaseUpdate=z))}if(f!==null){var mt=u.baseState;_=0,it=Z=z=null,T=f;do{var q=T.lane&-536870913,tt=q!==T.lane;if(tt?(Ee&q)===q:(s&q)===q){q!==0&&q===Tr&&(Df=!0),it!==null&&(it=it.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Dt=e,Zt=T;q=n;var he=a;switch(Zt.tag){case 1:if(Dt=Zt.payload,typeof Dt=="function"){mt=Dt.call(he,mt,q);break t}mt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=Zt.payload,q=typeof Dt=="function"?Dt.call(he,mt,q):Dt,q==null)break t;mt=B({},mt,q);break t;case 2:Pa=!0}}q=T.callback,q!==null&&(e.flags|=64,tt&&(e.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[q]:tt.push(q))}else tt={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},it===null?(Z=it=tt,z=mt):it=it.next=tt,_|=q;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;tt=T,T=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);it===null&&(z=mt),u.baseState=z,u.firstBaseUpdate=Z,u.lastBaseUpdate=it,f===null&&(u.shared.lanes=0),ka|=_,e.lanes=_,e.memoizedState=mt}}function mg(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mg(a[e],n)}var Fa=Mt(null),$l=Mt(0);function vg(e,n){e=da,yt($l,e),yt(Fa,n),da=e|n.baseLanes}function Uf(){yt($l,da),yt(Fa,Fa.current)}function Nf(){da=$l.current,wt(Fa),wt($l)}var En=Mt(null),Un=null;function Ha(e){var n=e.alternate;yt(Tn,Tn.current&1),yt(En,e),Un===null&&(n===null||Fa.current!==null||n.memoizedState!==null)&&(Un=e)}function Lf(e){yt(Tn,Tn.current),yt(En,e),Un===null&&(Un=e)}function _g(e){e.tag===22?(yt(Tn,Tn.current),yt(En,e),Un===null&&(Un=e)):Ga()}function Ga(){yt(Tn,Tn.current),yt(En,En.current)}function ti(e){wt(En),Un===e&&(Un=null),wt(Tn)}var Tn=Mt(0);function Lo(e,n){yt(En,En.current),yt(Tn,n)}function Of(e){wt(Tn),wt(En),Un===e&&(Un=null)}function tu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||nd(a)||id(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,fe=null,He=null,an=null,eu=!1,hs=!1,wr=!1,nu=0,Oo=0,ds=null,zS=0;function Je(){throw Error(r(321))}function zf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Pf(e,n,a,s,u,f){return ua=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,bt.H=e===null||e.memoizedState===null?ev:nv,wr=!1,f=a(s,u),wr=!1,hs&&(f=xg(n,a,s,u)),yg(e),f}function yg(e){bt.H=uu;var n=He!==null&&He.next!==null;if(ua=0,an=He=fe=null,eu=!1,Oo=0,ds=null,n)throw Error(r(300));e===null||rn||(e=e.dependencies,e!==null&&Yl(e)&&(rn=!0))}function xg(e,n,a,s){fe=e;var u=0;do{if(hs&&(ds=null),Oo=0,hs=!1,25<=u)throw Error(r(301));if(u+=1,an=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}bt.H=XS,f=n(a,s)}while(hs);return f}function PS(){var e=bt.H,n=e.useState()[0];return n=typeof n.then=="function"?zo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(fe.flags|=1024),n}function Bf(){var e=nu!==0;return nu=0,e}function If(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ff(e){if(eu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}eu=!1}ua=0,an=He=fe=null,hs=!1,Oo=nu=0,ds=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?fe.memoizedState=an=e:an=an.next=e,an}function en(){if(He===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=an===null?fe.memoizedState:an.next;if(n!==null)an=n,He=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},an===null?fe.memoizedState=an=e:an=an.next=e}return an}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(e){var n=Oo;return Oo+=1,ds===null&&(ds=[]),e=cg(ds,e,n),n=fe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,bt.H=n===null||n.memoizedState===null?ev:nv),e}function au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zo(e);if(e.$$typeof===Y)return;if(e.$$typeof===ht)return Mn(e)}throw Error(r(438,String(e)))}function Hf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=iu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=_e;return n.index++,a}function ca(e,n){return typeof n=="function"?n(e):n}function ru(e){var n=en();return Gf(n,He,e)}function Gf(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=_=null,z=null,Z=n,it=!1;do{var mt=Z.lane&-536870913;if(mt!==Z.lane?(Ee&mt)===mt:(ua&mt)===mt){var q=Z.revertLane;if(q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),mt===Tr&&(it=!0);else if((ua&q)===q){Z=Z.next,q===Tr&&(it=!0);continue}else mt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(T=z=mt,_=f):z=z.next=mt,fe.lanes|=q,ka|=q;mt=Z.action,wr&&a(f,mt),f=Z.hasEagerState?Z.eagerState:a(f,mt)}else q={lane:mt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(T=z=q,_=f):z=z.next=q,fe.lanes|=mt,ka|=mt;Z=Z.next}while(Z!==null&&Z!==n);if(z===null?_=f:z.next=T,!$n(f,e.memoizedState)&&(rn=!0,it&&(a=us,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Vf(e){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);$n(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Sg(e,n,a){var s=fe,u=en(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!$n((He||u).memoizedState,a);if(_&&(u.memoizedState=a,rn=!0),u=u.queue,kf(Tg.bind(null,s,u,e),[e]),e=u.getSnapshot!==n||_||an!==null&&(an.memoizedState.tag&1)!==0,ps(e?9:8,{destroy:void 0},Eg.bind(null,s,u,a,n),null),e){if(s.flags|=2048,Xe===null)throw Error(r(349));f||(ua&127)!==0||Mg(s,n,a)}return a}function Mg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=iu(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Eg(e,n,a,s){n.value=a,n.getSnapshot=s,bg(n)&&Ag(e)}function Tg(e,n,a){return a(function(){bg(n)&&Ag(e)})}function bg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Ag(e){var n=_r(e,2);n!==null&&Wn(n,e,2)}function Xf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),wr){gn(!0);try{a()}finally{gn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},n}function Rg(e,n,a,s){return e.baseState=a,Gf(e,He,typeof s=="function"?s:ca)}function BS(e,n,a,s,u){if(lu(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};bt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Cg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cg(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=bt.T,_={};_.types=f!==null?f.types:null,bt.T=_;try{var T=a(u,s),z=bt.S;z!==null&&z(_,T),wg(e,n,T)}catch(Z){qf(e,n,Z)}finally{f!==null&&_.types!==null&&(f.types=_.types),bt.T=f}}else try{f=a(u,s),wg(e,n,f)}catch(Z){qf(e,n,Z)}}function wg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Dg(e,n,s)},function(s){return qf(e,n,s)}):Dg(e,n,a)}function Dg(e,n,a){n.status="fulfilled",n.value=a,Ug(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cg(e,a)))}function qf(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ug(n),n=n.next;while(n!==s)}e.action=null}function Ug(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ng(e,n){return n}function Lg(e,n){if(ve){var a=Xe.formState;if(a!==null){t:{var s=fe;if(ve){if(qe){e:{for(var u=qe,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=gi(u.nextSibling),s=u.data==="F!";break t}}La(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ng,lastRenderedState:n},a.queue=s,a=Jg.bind(null,fe,s),s.dispatch=a,s=Xf(!1),f=Qf.bind(null,fe,!1,s.queue),s=Bn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=BS.bind(null,fe,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Og(e){var n=en();return zg(n,He,e)}function zg(e,n,a){if(n=Gf(e,n,Ng)[0],e=ru(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=zo(n)}catch(_){throw _===cs?jl:_}else s=n;n=en();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,ps(9,{destroy:void 0},IS.bind(null,u,a),null)),[s,f,e]}function IS(e,n){e.action=n}function Pg(e){var n=en(),a=He;if(a!==null)return zg(n,a,e);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function ps(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=iu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Bg(){return en().memoizedState}function su(e,n,a,s){var u=Bn();fe.flags|=e,u.memoizedState=ps(1|n,{destroy:void 0},a,s===void 0?null:s)}function ou(e,n,a,s){var u=en();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&zf(s,He.memoizedState.deps)?u.memoizedState=ps(n,f,a,s):(fe.flags|=e,u.memoizedState=ps(1|n,f,a,s))}function Ig(e,n){su(8390656,8,e,n)}function kf(e,n){ou(2048,8,e,n)}function FS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=iu(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fg(e){var n=en().memoizedState;return FS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hg(e,n){return ou(4,2,e,n)}function Gg(e,n){return ou(4,4,e,n)}function Vg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xg(e,n,a){a=a!=null?a.concat([e]):null,ou(4,4,Vg.bind(null,n,e),a)}function Yf(){}function qg(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&zf(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function kg(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&zf(n,s[1]))return s[0];if(s=e(),wr){gn(!0);try{e()}finally{gn(!1)}}return a.memoizedState=[s,n],s}function Wf(e,n,a){return a===void 0||(ua&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=e_(),fe.lanes|=e,ka|=e,a)}function Yg(e,n,a,s){return $n(a,n)?a:Fa.current!==null?(e=Wf(e,a,s),$n(e,n)||(rn=!0),e):(ua&106)===0||(ua&1073741824)!==0&&(Ee&261930)===0?(rn=!0,e.memoizedState=a):(e=e_(),fe.lanes|=e,ka|=e,n)}function Wg(e,n,a,s,u){var f=at.p;at.p=f!==0&&8>f?f:8;var _=bt.T,T={};T.types=_!==null?_.types:null,bt.T=T,Qf(e,!1,n,a);try{var z=u(),Z=bt.S;if(Z!==null&&Z(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var it=OS(z,s);Po(e,n,it,ai(e))}else Po(e,n,s,ai(e))}catch(mt){Po(e,n,{then:function(){},status:"rejected",reason:mt},ai())}finally{at.p=f,_!==null&&T.types!==null&&(_.types=T.types),bt.T=_}}function HS(){}function Zf(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Zg(e).queue;Wg(e,u,n,Tt,a===null?HS:function(){return jg(e),a(s)})}function Zg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Tt,baseState:Tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:Tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jg(e){var n=Zg(e);n.next===null&&(n=e.alternate.memoizedState),Po(e,n.next.queue,{},ai())}function jf(){return Mn(Ls)}function Qg(){return en().memoizedState}function Kg(){return en().memoizedState}function GS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Ba(a);var s=Ia(n,e,a);s!==null&&(Wn(s,n,a),Do(s,n,a)),n={cache:Ef()},e.payload=n;return}n=n.return}}function VS(e,n,a){var s=ai();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lu(e)?$g(n,a):(a=pf(e,n,a,s),a!==null&&(Wn(a,e,s),tv(a,n,s)))}function Jg(e,n,a){var s=ai();Po(e,n,a,s)}function Po(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lu(e))$g(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,$n(T,_))return Fl(e,n,u,0),Xe===null&&Il(),!1}catch{}if(a=pf(e,n,u,s),a!==null)return Wn(a,e,s),tv(a,n,s),!0}return!1}function Qf(e,n,a,s){if(s={lane:2,revertLane:Hh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},lu(e)){if(n)throw Error(r(479))}else n=pf(e,a,s,2),n!==null&&Wn(n,e,2)}function lu(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function $g(e,n){hs=eu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tv(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,st(e,a)}}var uu={readContext:Mn,use:au,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je,useEffectEvent:Je},ev={readContext:Mn,use:au,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Ig,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,su(4194308,4,Vg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return su(4194308,4,e,n)},useInsertionEffect:function(e,n){su(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var s=e();if(wr){gn(!0);try{e()}finally{gn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Bn();if(a!==void 0){var u=a(n);if(wr){gn(!0);try{a(n)}finally{gn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=VS.bind(null,fe,e),[s.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xf(e);var n=e.queue,a=Jg.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yf,useDeferredValue:function(e,n){var a=Bn();return Wf(a,e,n)},useTransition:function(){var e=Xf(!1);return e=Wg.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=fe,u=Bn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(Ee&127)!==0||Mg(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ig(Tg.bind(null,s,f,e),[e]),s.flags|=2048,ps(9,{destroy:void 0},Eg.bind(null,s,f,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(ve){var a=Fi,s=Ii;a=(s&~(1<<32-Cn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=nu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:jf,useFormState:Lg,useActionState:Lg,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hf,useCacheRefresh:function(){return Bn().memoizedState=GS.bind(null,fe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},nv={readContext:Mn,use:au,useCallback:qg,useContext:Mn,useEffect:kf,useImperativeHandle:Xg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:kg,useReducer:ru,useRef:Bg,useState:function(){return ru(ca)},useDebugValue:Yf,useDeferredValue:function(e,n){var a=en();return Yg(a,He.memoizedState,e,n)},useTransition:function(){var e=ru(ca)[0],n=en().memoizedState;return[typeof e=="boolean"?e:zo(e),n]},useSyncExternalStore:Sg,useId:Qg,useHostTransitionStatus:jf,useFormState:Og,useActionState:Og,useOptimistic:function(e,n){var a=en();return Rg(a,He,e,n)},useMemoCache:Hf,useCacheRefresh:Kg,useEffectEvent:Fg},XS={readContext:Mn,use:au,useCallback:qg,useContext:Mn,useEffect:kf,useImperativeHandle:Xg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:kg,useReducer:Vf,useRef:Bg,useState:function(){return Vf(ca)},useDebugValue:Yf,useDeferredValue:function(e,n){var a=en();return He===null?Wf(a,e,n):Yg(a,He.memoizedState,e,n)},useTransition:function(){var e=Vf(ca)[0],n=en().memoizedState;return[typeof e=="boolean"?e:zo(e),n]},useSyncExternalStore:Sg,useId:Qg,useHostTransitionStatus:jf,useFormState:Pg,useActionState:Pg,useOptimistic:function(e,n){var a=en();return He!==null?Rg(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:Kg,useEffectEvent:Fg};function Kf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:B({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jf={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ai(),u=Ba(s);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,s),n!==null&&(Wn(n,e,s),Do(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ai(),u=Ba(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,s),n!==null&&(Wn(n,e,s),Do(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),s=Ba(a);s.tag=2,n!=null&&(s.callback=n),n=Ia(e,s,a),n!==null&&(Wn(n,e,a),Do(n,e,a))}};function iv(e,n,a,s,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Mo(a,s)||!Mo(u,f):!0}function av(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Jf.enqueueReplaceState(n,n.state,null)}function Dr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=B({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function rv(e){Bl(e)}function sv(e){console.error(e)}function ov(e){Bl(e)}function cu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function lv(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $f(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){cu(e,n)},a}function uv(e){return e=Ba(e),e.tag=3,e}function cv(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){lv(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){lv(n,a,s),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function qS(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Mr(n,a,u,!0),a=En.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Un===null?Uu():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Bh(e,s,u)),!1;case 22:return a.flags|=65536,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Bh(e,s,u)),!1}throw Error(r(435,a.tag))}return Bh(e,s,u),Uu(),!1}if(ve)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==yf&&(e=Error(r(422),{cause:s}),bo(fi(e,a)))):(s!==yf&&(n=Error(r(423),{cause:s}),bo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=fi(s,a),u=$f(e.stateNode,s,u),wf(e,u),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=fi(f,a),qo===null?qo=[f]:qo.push(f),$e!==4&&($e=2),n===null)return!0;s=fi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=$f(a.stateNode,s,e),wf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ya===null||!Ya.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=uv(u),cv(u,e,a,s),wf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var th=Error(r(461)),rn=!1;function cn(e,n,a,s){n.child=e===null?pg(n,null,a,s):Cr(n,e.child,a,s)}function fv(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return Er(n),s=Pf(e,n,a,_,f,u),T=Bf(),e!==null&&!rn?(If(e,n,u),fa(e,n,u)):(ve&&T&&Xl(n),n.flags|=1,cn(e,n,s,u),n.child)}function hv(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!mf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,dv(e,n,f,s,u)):(e=Gl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lh(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(_,s)&&e.ref===n.ref)return fa(e,n,u)}return n.flags|=1,e=ra(f,s),e.ref=n.ref,e.return=n,n.child=e}function dv(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Mo(f,s)&&e.ref===n.ref)if(rn=!1,n.pendingProps=s=f,lh(e,u))(e.flags&131072)!==0&&(rn=!0);else return n.lanes=e.lanes,fa(e,n,u)}return eh(e,n,a,s,u)}function pv(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return mv(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zl(n,f!==null?f.cachePool:null),f!==null?vg(n,f):Uf(),_g(n);else return s=n.lanes=536870912,mv(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Zl(n,f.cachePool),vg(n,f),Ga(),n.memoizedState=null):(e!==null&&Zl(n,null),Uf(),Ga());return cn(e,n,u,a),n.child}function Bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mv(e,n,a,s,u){var f=bf();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Zl(n,null),Uf(),_g(n),e!==null&&Mr(e,n,s,!0),n.childLanes=u,null}function fu(e,n){return n=hu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function gv(e,n,a){return Cr(n,e.child,null,a),e=fu(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function kS(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ve){if(s.mode==="hidden")return e=fu(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bo(null,e);if(Lf(n),(e=qe)?(e=V_(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=$m(e),a.return=n,n.child=a,vn=n,qe=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return fu(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Lf(n),u)if(n.flags&256)n.flags&=-257,n=gv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Mr(e,n,a,!1),u=(a&e.childLanes)!==0,rn||u){if(Fa.current===null){if(s=Xe,s!==null&&(_=Q(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,_r(e,_),Wn(s,e,_),th;Uu()}n=gv(e,n,a)}else e=f.treeContext,qe=gi(_.nextSibling),vn=n,ve=!0,Na=null,pi=!1,e!==null&&ng(n,e),n=fu(n,s),n.flags|=134221824;return n}return e=ra(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ms(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function eh(e,n,a,s,u){return Er(n),a=Pf(e,n,a,s,void 0,u),s=Bf(),e!==null&&!rn?(If(e,n,u),fa(e,n,u)):(ve&&s&&Xl(n),n.flags|=1,cn(e,n,a,u),n.child)}function vv(e,n,a,s,u,f){return Er(n),n.updateQueue=null,a=xg(n,s,a,u),yg(e),s=Bf(),e!==null&&!rn?(If(e,n,f),fa(e,n,f)):(ve&&s&&Xl(n),n.flags|=1,cn(e,n,a,f),n.child)}function _v(e,n,a,s,u){if(Er(n),n.stateNode===null){var f=rs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Rf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):rs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Kf(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Jf.enqueueReplaceState(f,f.state,null),No(n,s,f,u),Uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,z=Dr(a,T);f.props=z;var Z=f.context,it=a.contextType;_=rs,typeof it=="object"&&it!==null&&(_=Mn(it));var mt=a.getDerivedStateFromProps;it=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,it||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Z!==_)&&av(n,f,s,_),Pa=!1;var q=n.memoizedState;f.state=q,No(n,s,f,u),Uo(),Z=n.memoizedState,T||q!==Z||Pa?(typeof mt=="function"&&(Kf(n,a,mt,s),Z=n.memoizedState),(z=Pa||iv(n,a,z,s,q,Z,_))?(it||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=_,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Cf(e,n),_=n.memoizedProps,it=Dr(a,_),f.props=it,mt=n.pendingProps,q=f.context,Z=a.contextType,z=rs,typeof Z=="object"&&Z!==null&&(z=Mn(Z)),T=a.getDerivedStateFromProps,(Z=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||q!==z)&&av(n,f,s,z),Pa=!1,q=n.memoizedState,f.state=q,No(n,s,f,u),Uo();var tt=n.memoizedState;_!==mt||q!==tt||Pa||e!==null&&e.dependencies!==null&&Yl(e.dependencies)?(typeof T=="function"&&(Kf(n,a,T,s),tt=n.memoizedState),(it=Pa||iv(n,a,it,s,q,tt,z)||e!==null&&e.dependencies!==null&&Yl(e.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,tt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,tt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=z,s=it):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,ms(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Cr(n,e.child,null,u),n.child=Cr(n,null,a,u)):cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=fa(e,n,u),e}function yv(e,n,a,s){return xr(),n.flags|=256,cn(e,n,a,s),n.child}var nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ih(e){return{baseLanes:e,cachePool:lg()}}function ah(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function xv(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(ve){if(u?Ha(n):Ga(),(e=qe)?(e=V_(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=$m(e),a.return=n,n.child=a,vn=n,qe=null)):e=null,e===null)throw La(n);return id(e)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(Ga(),u=n.mode,f=hu({mode:"hidden",children:f},u),s=yr(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=ih(a),s.childLanes=ah(e,_,a),n.memoizedState=nh,Bo(null,s)):(Ha(n),rh(n,f))}var T=e.memoizedState;if(T!==null){var z=T.dehydrated;if(z!==null)return YS(e,n,f,_,s,z,T,a)}return u?(Ga(),u=s.fallback,f=n.mode,T=e.child,z=T.sibling,s=ra(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,z!==null?u=ra(z,u):(u=yr(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Bo(null,s),s=n.child,u=e.child.memoizedState,u===null?u=ih(a):(f=u.cachePool,f!==null?(T=nn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=lg(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=ah(e,_,a),n.memoizedState=nh,Bo(e.child,s)):(Ha(n),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function rh(e,n){return n=hu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function hu(e,n){return e=Xn(22,e,null,n),e.lanes=0,e}function du(e,n,a){return Cr(n,e.child,null,a),e=rh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function YS(e,n,a,s,u,f,_,T){if(a)return n.flags&256?(Ha(n),n.flags&=-257,du(e,n,T)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,null):(Ga(),f=u.fallback,_=n.mode,u=hu({mode:"visible",children:u.children},_),f=yr(f,_,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Cr(n,e.child,null,T),u=n.child,u.memoizedState=ih(T),u.childLanes=ah(e,s,T),n.memoizedState=nh,Bo(null,u));if(Ha(n),id(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,bo({value:u,source:null,stack:null})),du(e,n,T)}if(rn||Mr(e,n,T,!1),s=(T&e.childLanes)!==0,rn||s){if(Fa.current!==null)return du(e,n,T);if(s=Xe,s!==null&&(u=Q(s,T),u!==0&&u!==_.retryLane))throw _.retryLane=u,_r(e,u),Wn(s,e,u),th;return nd(f)||Uu(),du(e,n,T)}return nd(f)?(n.flags|=192,n.child=e.child,null):(e=_.treeContext,qe=gi(f.nextSibling),vn=n,ve=!0,Na=null,pi=!1,e!==null&&ng(n,e),n=rh(n,u.children),n.flags|=134221824,n)}function Sv(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),kl(e.return,n,a)}function Mv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&tu(a)===null&&(n=e),e=e.sibling}return n}function pu(e,n,a,s,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function sh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function oh(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=Tn.current;if(n.flags&128)return Lo(n,_),null;var T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Lo(n,_),u==="backwards"&&e!==null?(sh(e),cn(e,n,s,a),sh(e)):cn(e,n,s,a),s=ve?To:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sv(e,a,n);else if(e.tag===19)Sv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=Mv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,sh(n)),pu(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&tu(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}pu(n,!0,a,null,f,s);break;case"together":pu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Mv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pu(n,!1,u,a,f,s)}return n.child}function Ev(e,n,a){var s=n.pendingProps;return Oa(n,n.type,s.value),cn(e,n,s.children,a),n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Mr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ra(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Yl(e)))}function WS(e,n,a){switch(n.tag){case 3:et(n,n.stateNode.containerInfo),Oa(n,nn,e.memoizedState.cache),xr();break;case 27:case 5:xt(n);break;case 4:et(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ha(n),n.flags|=128,null;s=Mr(e,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?xv(e,n,a):(Ha(n),e=fa(e,n,a),e!==null?e.sibling:null)}Ha(n);break;case 19:if(n.flags&128)return oh(e,n,a);if(u=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Mr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return oh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lo(n,Tn.current),s)break;return null;case 22:return n.lanes=0,pv(e,n,a,n.pendingProps);case 24:Oa(n,nn,e.memoizedState.cache)}return fa(e,n,a)}function Tv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)rn=!0;else{if(!lh(e,a)&&(n.flags&128)===0)return rn=!1,WS(e,n,a);rn=(e.flags&131072)!==0}else rn=!1,ve&&(n.flags&1048576)!==0&&eg(n,To,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=Ar(n.elementType),n.type=e,typeof e=="function")mf(e)?(s=Dr(e,s),n.tag=1,n=_v(null,n,e,s,a)):(n.tag=0,n=eh(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===V){n.tag=11,n=fv(null,n,e,s,a);break t}else if(u===St){n.tag=14,n=hv(null,n,e,s,a);break t}else if(u===ht){n.tag=10,n.type=e,n=Ev(null,n,a);break t}}throw n=Lt(e)||e,Error(r(306,n,""))}}return n;case 0:return eh(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Dr(s,n.pendingProps),_v(e,n,s,u,a);case 3:t:{if(et(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Cf(e,n),No(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Oa(n,nn,s),s!==f.cache&&Mf(n,[nn],a,!0),Uo(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=yv(e,n,s,a);break t}else if(s!==u){u=fi(Error(r(424)),n),bo(u),n=yv(e,n,s,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=gi(e.firstChild),vn=n,ve=!0,Na=null,pi=!0,a=pg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(xr(),s===u){n=fa(e,n,a);break t}cn(e,n,s,a)}n=n.child}return n;case 26:return ms(e,n),e===null?(a=j_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=C_(n.type,n.pendingProps,L.current,n)):n.memoizedState=j_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return xt(n),e===null&&ve&&(s=n.stateNode=k_(n.type,n.pendingProps,L.current),vn=n,pi=!0,u=qe,ja(n.type)?(ad=u,qe=gi(s.firstChild)):qe=u),cn(e,n,n.pendingProps.children,a),ms(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ve&&((u=s=qe)&&(s=GM(s,n.type,n.pendingProps,pi),s!==null?(n.stateNode=s,vn=n,qe=gi(s.firstChild),pi=!1,u=!0):u=!1),u||La(n)),xt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,jh(u,f)?s=null:_!==null&&jh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Pf(e,n,PS,null,null,a),Ls._currentValue=u),ms(e,n),cn(e,n,s,a),n.child;case 6:return e===null&&ve&&((e=a=qe)&&(a=VM(a,n.pendingProps,pi),a!==null?(n.stateNode=a,vn=n,qe=null,e=!0):e=!1),e||La(n)),null;case 13:return xv(e,n,a);case 4:return et(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Cr(n,null,s,a):cn(e,n,s,a),n.child;case 11:return fv(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,ms(e,n),cn(e,n,s,a),n.child;case 8:return cn(e,n,n.pendingProps.children,a),n.child;case 12:return cn(e,n,n.pendingProps.children,a),n.child;case 10:return Ev(e,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Er(n),u=Mn(u),s=s(u),n.flags|=1,cn(e,n,s,a),n.child;case 14:return hv(e,n,n.type,n.pendingProps,a);case 15:return dv(e,n,n.type,n.pendingProps,a);case 19:return oh(e,n,a);case 31:return kS(e,n,a);case 22:return pv(e,n,a,n.pendingProps);case 24:return Er(n),s=Mn(nn),e===null?(u=bf(),u===null&&(u=Xe,f=Ef(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Rf(n),Oa(n,nn,u)):((e.lanes&a)!==0&&(Cf(e,n),No(n,null,null,a),Uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,nn,s)):(s=f.cache,Oa(n,nn,s),s!==u.cache&&Mf(n,[nn],a,!0))),cn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:ve&&Xl(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:ms(e,n),cn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ha(e){e.flags|=4}function uh(e,n,a,s,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?$_(n,s):$_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(r_())e.flags|=8192;else throw Rr=Ql,Af}else e.flags&=-16777217}function bv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t0(n))if(r_())e.flags|=8192;else throw Rr=Ql,Af}function mu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Al():536870912,e.lanes|=n,xs|=n)}function Io(e,n){if(!ve)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function ZS(e,n,a){var s=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),la(nn),pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ls(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xf())),ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ha(n),f!==null?(ke(n),bv(n,f)):(ke(n),uh(n,u,null,s,a))):f?f!==e.memoizedState?(ha(n),ke(n),bv(n,f)):(ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ha(n),ke(n),uh(n,u,e,s,a)),null;case 27:if(gt(n),a=L.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ha(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),n.subtreeFlags&=-33554433,null}e=$t.current,ls(n)?ig(n):(e=k_(u,s,a),n.stateNode=e,ha(n))}return ke(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ha(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),n.subtreeFlags&=-33554433,null}if(f=$t.current,ls(n))ig(n);else{var _=jo(L.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[te]=n,f[Gt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(An(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ha(n)}}return ke(n),n.subtreeFlags&=-33554433,uh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ha(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=L.current,ls(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=vn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[te]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||T_(e.nodeValue,a)),e||La(n,!0)}else e=jo(e).createTextNode(s),e[te]=n,n.stateNode=e}return ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=ls(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[te]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),e=!1}else a=xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ke(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ls(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[te]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),mu(n,n.updateQueue),ke(n),null);case 4:return pt(),e===null&&qh(n.stateNode.containerInfo),n.flags|=67108864,ke(n),null;case 10:return la(n.type),ke(n),null;case 19:if(Of(n),s=n.memoizedState,s===null)return ke(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Io(s,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=tu(e),f!==null){for(n.flags|=128,Io(s,!1),e=f.updateQueue,n.updateQueue=e,mu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jm(a,e),a=a.sibling;return Lo(n,Tn.current&1|2),ve&&sa(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&X()>Ru&&(n.flags|=128,u=!0,Io(s,!1),n.lanes=4194304)}else{if(!u)if(e=tu(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,mu(n,e),Io(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!ve)return ke(n),null}else 2*X()-s.renderingStartTime>Ru&&a!==536870912&&(n.flags|=128,u=!0,Io(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){e=s.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,f=Tn.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?Lo(n,f):(a=f,yt(En,n),yt(Tn,a),Un===null&&(Un=n)),ve&&sa(n,s.treeForkCount),e}return ke(n),null;case 22:case 23:return ti(n),Nf(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&mu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&wt(br),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(nn),ke(n),null;case 25:return null;case 30:return n.flags|=33554432,ke(n),null}throw Error(r(156,n.tag))}function jS(e,n){switch(_f(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(nn),pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Of(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return pt(),null;case 10:return la(n.type),null;case 22:case 23:return ti(n),Nf(),e!==null&&wt(br),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(nn),null;case 25:return null;default:return null}}function Av(e,n){switch(_f(n),n.tag){case 3:la(nn),pt();break;case 26:case 27:case 5:gt(n);break;case 4:pt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Of(n);break;case 10:la(n.type);break;case 22:case 23:ti(n),Nf(),e!==null&&wt(br);break;case 24:la(nn)}}function Fo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(T){Pe(n,n.return,T)}}function Va(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var z=a,Z=T;try{Z()}catch(it){Pe(u,z,it)}}}s=s.next}while(s!==f)}}catch(it){Pe(n,n.return,it)}}function Rv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gg(n,a)}catch(s){Pe(e,e.return,s)}}}function Cv(e,n,a){a.props=Dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(e,n,s)}}function Hi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var u=e.stateNode,f=ia(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=z_(f)),s=u.ref;break;case 7:if(e.stateNode===null){var _=new ri(e);g(e.child,!1,FM,_,void 0,void 0),e.stateNode=_}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(T){Pe(e,n,T)}}function bn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function gu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)G_(e.stateNode,n[a])}function wv(e){for(var n=e.return;n!==null&&(fh(n)&&G_(e.stateNode,n.stateNode),!ch(n));)n=n.return}function Ho(e){for(var n=e.return;n!==null&&(fh(n)&&HM(e.stateNode,n.stateNode),!ch(n));)n=n.return}function ch(e){return e.tag===5||e.tag===3||e.tag===27}function fh(e){return e&&e.tag===7&&e.stateNode!==null}function hh(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function dh(e,n,a){try{var s=e.stateNode;SM(s,e.type,a,n),s[Gt]=n}catch(u){Pe(e,e.return,u)}}function Dv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mh(e,n,a,s){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),gu(e,s),De=!0;else if(u!==4&&(u===27&&(gu(e,s),s=null,ja(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(mh(e,n,a,s),e=e.sibling;e!==null;)mh(e,n,a,s),e=e.sibling}function vu(e,n,a,s){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),gu(e,s),De=!0;else if(u!==4&&(u===27&&(gu(e,s),s=null,ja(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(vu(e,n,a,s),e=e.sibling;e!==null;)vu(e,n,a,s),e=e.sibling}function Uv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,s,a),n[te]=e,n[Gt]=a}catch(f){Pe(e,e.return,f)}}var _u=!1,ei=null;function Nv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(_u=!0)}var Gi=null;function Lv(){var e=Gi;return Gi=null,e}var qn=0;function gs(e,n,a,s,u){return qn=0,Ov(e.child,n,a,s,u)}function Ov(e,n,a,s,u){for(var f=!1;e!==null;){if(e.tag===5){var _=e.stateNode;if(s!==null){var T=Jh(_);s.push(T),T.view&&(f=!0)}else f||Jh(_).view&&(f=!0);_u=!0,L_(_,qn===0?n:n+"_"+qn,a),qn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Ov(e.child,n,a,s,u)&&(f=!0));e=e.sibling}return f}function Vi(e,n){for(;e!==null;)e.tag===5?O_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Vi(e.child,n)),e=e.sibling}function yu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(yu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=aa(n.default,n.share),n!=="none"&&(gs(e,a,n,null,!1)||Vi(e.child,!1))}e=e.sibling}}function gh(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,u=ia(s,a),f=aa(s.default,a.paired?s.share:s.enter);f!=="none"?gs(e,u,f,null,!1)?(yu(e),a.paired||n||Ts(e,s.onEnter)):Vi(e.child,!1):yu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gh(e,n),e=e.sibling;else yu(e)}function vh(e){if(ei!==null&&ei.size!==0){var n=ei;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=aa(a.default,a.share);if(f!=="none"&&(gs(e,s,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,Ts(e,a.onShare)):Vi(e.child,!1)),n.delete(s),n.size===0)break}}}vh(e)}e=e.sibling}}}function _h(e){if(e.tag===30){var n=e.memoizedProps,a=ia(n,e.stateNode),s=ei!==null?ei.get(a):void 0,u=aa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(gs(e,a,u,null,!1)?s!==void 0?(u=e.stateNode,s.paired=u,u.paired=s,ei.delete(a),Ts(e,n.onShare)):Ts(e,n.onExit):Vi(e.child,!1)),ei!==null&&vh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_h(e),e=e.sibling;else ei!==null&&vh(e)}function zv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ia(n,e.stateNode);n=aa(n.default,n.update),e.flags&=-5,n!=="none"&&gs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&zv(e);e=e.sibling}}function yh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Vi(e.child,!1))}yh(e)}e=e.sibling}}function xu(e){if(e.tag===30)e.stateNode.paired=null,Vi(e.child,!1),yh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xu(e),e=e.sibling;else yh(e)}function Pv(e){for(e=e.child;e!==null;)e.tag===30?Vi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Pv(e),e=e.sibling}function xh(e,n,a,s,u,f,_){for(var T=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(f!==null&&qn<f.length){var Z=f[qn],it=Jh(z);(Z.view||it.view)&&(T=!0);var mt;if(mt=(e.flags&4)===0)if(it.clip)mt=!0;else{mt=Z.rect;var q=it.rect;mt=mt.y!==q.y||mt.x!==q.x||mt.height!==q.height||mt.width!==q.width}mt&&(e.flags|=4),it.abs?it=!Z.abs:(Z=Z.rect,it=it.rect,it=Z.height!==it.height||Z.width!==it.width),it&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&L_(z,qn===0?a:a+"_"+qn,u),T&&(e.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(z,qn===0?s:s+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?e.flags|=n.flags&32:xh(e,n.child,a,s,u,f,_)&&(T=!0));n=n.sibling}return T}function Bv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,u=ia(a,s),f=aa(a.default,a.update),_;_=e.memoizedState,e.memoizedState=null,s=e;var T=e.child;qn=0,u=xh(s,T,u,u,f,_,!1),(e.flags&4)!==0&&u&&Ts(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Bv(e);e=e.sibling}}var _n=!1,Ne=!1,Xi=!1,Sh=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,yn=null,qi=!1,Go=!1,Su=!1,Mh=!1;function QS(e,n,a){if(e=e.containerInfo,Wh=Os,e=Vm(e),lf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,z=-1,Z=-1,it=0,mt=0,q=e,tt=null;e:for(;;){for(var Dt;q!==s||f!==0&&q.nodeType!==3||(z=T+f),q!==_||u!==0&&q.nodeType!==3||(Z=T+u),q.nodeType===3&&(T+=q.nodeValue.length),(Dt=q.firstChild)!==null;)tt=q,q=Dt;for(;;){if(q===e)break e;if(tt===s&&++it===f&&(z=T),tt===_&&++mt===u&&(Z=T),(Dt=q.nextSibling)!==null)break;q=tt,tt=q.parentNode}q=Dt}s=z===-1||Z===-1?null:{start:z,end:Z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zh={focusedElem:e,selectionRange:s},Os=!1,a=(a&335544064)===a,yn=n,n=a?9270:1024;yn!==null;){if(e=yn,a&&(s=e.deletions,s!==null))for(f=0;f<s.length;f++)a&&_h(s[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&Nv(e),Mu(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&_h(s),Mu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Nv(e),Mu(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,yn=s):(a&&zv(e),Mu(a))}}ei=null}function Mu(e){for(;yn!==null;){var n=yn,a=e,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=Dr(n.type,u);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Pe(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)ed(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":ed(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ia(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=aa(u.default,u.update),u!=="none"&&gs(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,yn=s;break}yn=n.return}}function Fv(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ki(e,a),s&4&&Fo(5,a);break;case 1:if(ki(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Pe(a,a.return,_)}else{var u=Dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Pe(a,a.return,_)}}s&64&&Rv(a),s&512&&Hi(a,a.return);break;case 3:if(ki(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gg(e,n)}catch(_){Pe(a,a.return,_)}}break;case 27:n===null&&s&4&&Uv(a);case 26:case 5:ki(e,a),n===null&&s&4&&hh(a),s&512&&Hi(a,a.return);break;case 12:ki(e,a);break;case 31:ki(e,a),s&4&&Xv(e,a);break;case 13:ki(e,a),s&4&&qv(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lM.bind(null,a),XM(e,a))));break;case 22:if(s=a.memoizedState!==null||_n,!s){var f=n!==null&&n.memoizedState!==null||Ne;n=_n,u=Ne,_n=s,(Ne=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ti(e,a,s)):ki(e,a),_n=n,Ne=u}break;case 30:ki(e,a),s&512&&Hi(a,a.return);break;case 7:s&512&&Hi(a,a.return);default:ki(e,a)}}function Eh(e,n){for(e=e.child;e!==null;)Hv(e,n),e=e.sibling}function Hv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){Pe(e,e.return,z)}Th(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,De=!0}catch(z){Pe(e,e.return,z)}break;case 18:try{var T=e.stateNode;n?N_(T,!0):N_(e.stateNode,!1)}catch(z){Pe(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&Eh(e,n);break;default:Eh(e,n)}}function Th(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,s=n;switch(a.tag){case 4:Hv(a,s);break t;case 22:a.memoizedState===null&&Th(a,s);break t;default:Th(a,s)}}e=e.sibling}}function Gv(e){var n=e.alternate;n!==null&&(e.alternate=null,Gv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ae(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,kn=!1;function Mi(e,n,a){for(a=a.child;a!==null;)Vv(e,n,a),a=a.sibling}function Vv(e,n,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:Ne||bn(a,n),Mi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ne&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||bn(a,n),Ho(a);var s=je,u=kn;ja(a.type)&&(je=a.stateNode,kn=!1),Mi(e,n,a),Y_(a.stateNode,a.type,a.memoizedProps),je=s,kn=u;break;case 5:Ne||bn(a,n),Ho(a);case 6:if(a.tag===6&&Ho(a),s=je,u=kn,je=null,Mi(e,n,a),je=s,kn=u,je!==null)if(kn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode),De=!0}catch(f){Pe(a,n,f)}else try{je.removeChild(a.stateNode),De=!0}catch(f){Pe(a,n,f)}break;case 18:je!==null&&(kn?(e=je,U_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zs(e)):U_(je,a.stateNode));break;case 4:s=je,u=kn,je=a.stateNode.containerInfo,kn=!0,Mi(e,n,a),je=s,kn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),Ne||Va(4,a,n),Mi(e,n,a);break;case 1:Ne||(bn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Cv(a,n,s)),Mi(e,n,a);break;case 21:Mi(e,n,a);break;case 22:Ne=(s=Ne)||a.memoizedState!==null,Mi(e,n,a),Ne=s;break;case 30:bn(a,n),Mi(e,n,a);break;case 7:Ne||bn(a,n),Mi(e,n,a);break;default:Mi(e,n,a)}}function Xv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zs(e)}catch(a){Pe(n,n.return,a)}}}function qv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zs(e)}catch(a){Pe(n,n.return,a)}}function KS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Iv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Iv),n;default:throw Error(r(435,e.tag))}}function Eu(e,n){var a=KS(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=uM.bind(null,e,s);s.then(u,u)}})}function In(e,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],_=e,T=n,z=T;t:for(;z!==null;){switch(z.tag){case 27:if(ja(z.type)){je=z.stateNode,kn=!1;break t}break;case 5:je=z.stateNode,kn=!1;break t;case 3:case 4:je=z.stateNode.containerInfo,kn=!0;break t}z=z.return}if(je===null)throw Error(r(160));Vv(_,T,f),je=null,kn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)kv(n,e,a),n=n.sibling}var Ei=null;function kv(e,n,a){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}In(n,e,a),Fn(e),u&4&&(Va(3,e,e.return),Fo(3,e),Va(5,e,e.return));break;case 1:In(n,e,a),Fn(e),u&512&&(Ne||s===null||bn(s,s.return)),u&64&&_n&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ei,In(n,e,a),Fn(e),u&512&&(Ne||s===null||bn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(_n)e.stateNode=C_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Qt]||s[te]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),An(s,n,a),s[te]=e,ue(s),n=s;break t;case"link":if(f=J_("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=u.createElement(n),An(s,n,a),u.head.appendChild(s);break;case"meta":if(f=J_("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=u.createElement(n),An(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[te]=e,ue(s),n=s}e.stateNode=n}else _n||ld(f,e.type,e.stateNode);else e.stateNode=K_(f,a,e.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Ne||n.parentNode.removeChild(n)):u.count--,a===null?_n||ld(f,e.type,e.stateNode):K_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&dh(e,e.memoizedProps,s.memoizedProps);break;case 27:In(n,e,a),Fn(e),u&512&&(Ne||s===null||bn(s,s.return)),s!==null&&u&4&&dh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(f=Xi,Xi=!1,In(n,e,a),Xi=f,Fn(e),u&512&&(Ne||s===null||bn(s,s.return)),e.flags&32){n=e.stateNode;try{Jr(n,""),De=!0}catch(it){Pe(e,e.return,it)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,dh(e,n,s!==null?s.memoizedProps:n)),u&1024&&(Sh=!0);break;case 6:if(In(n,e,a),Fn(e),u&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,De=!0}catch(it){Pe(e,e.return,it)}}break;case 3:if(De=!1,Iu=null,f=Ei,Ei=Qo(n.containerInfo),In(n,e,a),Ei=f,Fn(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(it){Pe(e,e.return,it)}Sh&&(Sh=!1,Yv(e)),De=!1;break;case 4:u=Xi,Xi=_n,s=hm(),f=Ei,Ei=Qo(e.stateNode.containerInfo),In(n,e,a),Fn(e),Ei=f,De&&Go&&(Su=!0),De=s,Xi=u;break;case 12:In(n,e,a),Fn(e);break;case 31:In(n,e,a),Fn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Eu(e,n)));break;case 13:In(n,e,a),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Au=X()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Eu(e,n)));break;case 22:f=e.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var T=_n,z=Ne,Z=Xi;_n=T||f,Xi=Z||f,Ne=z||_,In(n,e,a),Ne=z,Xi=Z,_n=T,Fn(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||_n||Ne||(n=_||Ne,a=_n,s=Ne,_n=f||_n,Ne=n,Xa(e,2),_n=a,Ne=s),!f&&Xi||Eh(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Eu(e,a))));break;case 19:In(n,e,a),Fn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Eu(e,n)));break;case 30:u&512&&(Ne||s===null||bn(s,s.return)),u=hm(),f=Go,_=(a&335544064)===a,T=e.memoizedProps,Go=_&&aa(T.default,T.update)!=="none",In(n,e,a),Fn(e),_&&s!==null&&De&&(e.flags|=4),Go=f,De=u;break;case 21:break;case 7:u&512&&(Ne||s===null||bn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:In(n,e,a),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Dv(s)){a=s;break}s=s.return}s=null;for(var u=e.return;u!==null;){if(fh(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(ch(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,z=ph(e);vu(e,z,T,_);break;case 5:var Z=a.stateNode;a.flags&32&&(Jr(Z,""),a.flags&=-33);var it=ph(e);vu(e,it,Z,_);break;case 3:case 4:var mt=a.stateNode.containerInfo,q=ph(e);mh(e,q,mt,_);break;default:throw Error(r(161))}}catch(tt){Pe(e,e.return,tt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Yv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Os=!0,n.reset(),Os=!1),e=e.sibling}}function vs(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Wv(n,e),n=n.sibling;else Bv(n)}function Wv(e,n){var a=e.alternate;if(a===null)gh(e,!1);else switch(e.tag){case 3:if(Mh=qi=!1,Lv(),vs(n,e),!qi&&!Su){if(e=Gi,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var u=e[s+1];O_(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Mh=!0}Gi=null;break;case 5:vs(n,e);break;case 4:s=qi,qi=!1,vs(n,e),qi&&(Su=!0),qi=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?gh(e,!1):vs(n,e));break;case 30:s=qi,u=Lv(),qi=!1,vs(n,e),qi&&(e.flags|=4);var f=e.memoizedProps,_=e.stateNode;n=ia(f,_),_=ia(a.memoizedProps,_);var T=aa(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,qn=0,n=xh(e,a,n,_,T,f,!0),qn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ts(e,e.memoizedProps.onUpdate),Gi=u):u!==null&&(u.push.apply(u,Gi),Gi=u),qi=(e.flags&32)!==0?!0:s;break;default:vs(n,e)}}function ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fv(e,n.alternate,n),n=n.sibling}function Xa(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Va(4,a,a.return),Xa(a,s);break;case 1:bn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Cv(a,a.return,u),Xa(a,s);break;case 27:(s&2)!==0&&Y_(a.stateNode,a.type,a.memoizedProps);case 5:bn(a,a.return),a.tag!==5&&a.tag!==27||Ho(a),Xa(a,s);break;case 6:Ho(a);break;case 26:bn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ne||u.parentNode.removeChild(u),Xa(a,s);break;case 22:a.memoizedState===null&&Xa(a,s);break;case 30:bn(a,a.return),Xa(a,s);break;case 7:bn(a,a.return);default:Xa(a,s)}e=e.sibling}}function Ti(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,_=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ti(u,f,a),Fo(4,f);break;case 1:if(Ti(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Pe(s,s.return,it)}if(s=f,u=s.updateQueue,u!==null){var z=s.stateNode;try{var Z=u.shared.hiddenCallbacks;if(Z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Z.length;u++)mg(Z[u],z)}catch(it){Pe(s,s.return,it)}}T&&_&64&&Rv(f),Hi(f,f.return);break;case 27:(a&2)!==0&&Uv(f);case 5:f.tag!==5&&f.tag!==27||wv(f),Ti(u,f,a),T&&s===null&&_&4&&hh(f),Hi(f,f.return);break;case 6:wv(f);break;case 26:z=f.stateNode,f.memoizedState!==null||z===null||_n||ld(Qo(z.ownerDocument),f.type,z),Ti(u,f,a),T&&s===null&&_&4&&hh(f),Hi(f,f.return);break;case 12:Ti(u,f,a);break;case 31:Ti(u,f,a),T&&_&4&&Xv(u,f);break;case 13:Ti(u,f,a),T&&_&4&&qv(u,f);break;case 22:f.memoizedState===null&&Ti(u,f,a),Hi(f,f.return);break;case 30:Ti(u,f,a),Hi(f,f.return);break;case 7:Hi(f,f.return);default:Ti(u,f,a)}n=n.sibling}}function bh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ao(a))}function Ah(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ao(e))}function mi(e,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Zv(e,n,a,s),n=n.sibling;else u&&Pv(n)}function Zv(e,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:mi(e,n,a,s),f&2048&&Fo(9,n);break;case 1:mi(e,n,a,s);break;case 3:mi(e,n,a,s),u&&Mh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Ao(f)));break;case 12:if(f&2048){mi(e,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,T=_.id,z=_.onPostCommit;typeof z=="function"&&z(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Z){Pe(n,n.return,Z)}}else mi(e,n,a,s);break;case 31:mi(e,n,a,s);break;case 13:mi(e,n,a,s);break;case 23:break;case 22:_=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&xu(T),_._visibility&2?mi(e,n,a,s):Vo(e,n)):(u&&T!==null&&T.memoizedState!==null&&xu(n),_._visibility&2?mi(e,n,a,s):(_._visibility|=2,_s(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&bh(T,n);break;case 24:mi(e,n,a,s),f&2048&&Ah(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Vi(f.child,!0),Vi(n.child,!0))),mi(e,n,a,s);break;default:mi(e,n,a,s)}}function _s(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,T=a,z=s,Z=_.flags;switch(_.tag){case 0:case 11:case 15:_s(f,_,T,z,u),Fo(8,_);break;case 23:break;case 22:var it=_.stateNode;_.memoizedState!==null?it._visibility&2?_s(f,_,T,z,u):Vo(f,_):(it._visibility|=2,_s(f,_,T,z,u)),u&&Z&2048&&bh(_.alternate,_);break;case 24:_s(f,_,T,z,u),u&&Z&2048&&Ah(_.alternate,_);break;default:_s(f,_,T,z,u)}n=n.sibling}}function Vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:Vo(a,s),u&2048&&bh(s.alternate,s);break;case 24:Vo(a,s),u&2048&&Ah(s.alternate,s);break;default:Vo(a,s)}n=n.sibling}}var Ur=8192;function Nr(e,n,a){if(e.subtreeFlags&Ur)for(e=e.child;e!==null;)jv(e,n,a),e=e.sibling}function jv(e,n,a){switch(e.tag){case 26:Nr(e,n,a),e.flags&Ur&&(e.memoizedState!==null?iE(a,Ei,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&n0(a,e)));break;case 5:Nr(e,n,a),e.flags&Ur&&(e=e.stateNode,(n&335544128)===n&&n0(a,e));break;case 3:case 4:var s=Ei;Ei=Qo(e.stateNode.containerInfo),Nr(e,n,a),Ei=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Ur,Ur=16777216,Nr(e,n,a),Ur=s):Nr(e,n,a));break;case 30:if((e.flags&Ur)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var u=e.stateNode;u.paired=null,ei===null&&(ei=new Map),ei.set(s,u)}Nr(e,n,a);break;default:Nr(e,n,a)}}function Qv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,Jv(s,e)}Qv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kv(e),e=e.sibling}function Kv(e){switch(e.tag){case 0:case 11:case 15:Xo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Xo(e);break;case 12:Xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tu(e)):Xo(e);break;default:Xo(e)}}function Tu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,Jv(s,e)}Qv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tu(n));break;default:Tu(n)}e=e.sibling}}function Jv(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ao(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=e;yn!==null;){s=yn;var u=s.sibling,f=s.return;if(Gv(s),s===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var JS={getCacheForType:function(e){var n=Mn(nn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(nn).controller.signal}},$S=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,Se=null,Ee=0,ze=0,ni=null,qa=!1,ys=!1,Rh=!1,da=0,$e=0,ka=0,Lr=0,bu=0,ii=0,xs=0,qo=null,Yn=null,Ch=!1,Au=0,$v=0,Ru=1/0,Cu=null,Ya=null,Qe=0,bi=null,Or=null,Yi=0,wh=0,Dh=null,t_=null,Ss=null,Ms=null,Es=null,ko=0,wu=null;function ai(){return(Ue&2)!==0&&Ee!==0?Ee&-Ee:bt.T!==null?Hh():Kt()}function e_(){if(ii===0)if((Ee&536870912)===0||ve){var e=mr;mr<<=1,(mr&3932160)===0&&(mr=262144),ii=e}else ii=536870912;return e=En.current,e!==null&&(e.flags|=32),ii}function Ts(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=z_(ia(e.memoizedProps,a))),Ms===null&&(Ms=[]),Ms.push(n.bind(null,s))}}function Wn(e,n,a){(e===Xe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(bs(e,0),Wa(e,Ee,ii,!1)),w(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(Lr|=a),$e===4&&Wa(e,Ee,ii,!1)),Wi(e))}function n_(e,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ra(e,n),u=s?nM(e,n):Nh(e,n,!0),f=s;do{if(u===0){ys&&!s&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!tM(a)){u=Nh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=e;u=qo;var z=T.current.memoizedState.isDehydrated;if(z&&(bs(T,_).flags|=256),_=Nh(T,_,!1),_!==2&&_!==6){if(Rh&&!z){T.errorRecoveryDisabledLanes|=f,Lr|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){bs(e,0),Wa(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Wa(s,n,ii,!qa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Au+300-X(),10<u)){if(Wa(s,n,ii,!qa),ta(s,0,!0)!==0)break t;Yi=n,s.timeoutHandle=Kh(i_.bind(null,s,a,Yn,Cu,Ch,n,ii,Lr,xs,qa,f,"Throttled",-0,0),u);break t}i_(s,a,Yn,Cu,Ch,n,ii,Lr,xs,qa,f,null,-0,0)}}break}while(!0);Wi(e)}function i_(e,n,a,s,u,f,_,T,z,Z,it,mt,q,tt){e.timeoutHandle=-1;var Dt=n.subtreeFlags,Zt=(f&335544064)===f;if(mt=null,(Zt||Dt&8192||(Dt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ei=null,jv(n,f,mt),Zt&&(Dt=mt,Zt=e.containerInfo,Zt=(Zt.nodeType===9?Zt:Zt.ownerDocument).__reactViewTransition,Zt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=$o.bind(Dt),Zt.finished.then(Dt,Dt))),Dt=(f&62914560)===f?Au-X():(f&4194048)===f?$v-X():0,Dt=aE(mt,Dt),Dt!==null)){Yi=f,e.cancelPendingCommit=Dt(f_.bind(null,e,n,f,a,s,u,_,T,z,Z,it,mt,null,q,tt)),Wa(e,f,_,!Z);return}f_(e,n,f,a,s,u,_,T,z,Z,it,mt)}function tM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,s){n=ho(e,n),n&=~bu,n&=~Lr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Cn(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&rt(e,a,n)}function Du(){return(Ue&6)===0?(Yo(0),!1):!0}function Uh(){if(Se!==null){if(ze===0)var e=Se.return;else e=Se,oa=Sr=null,Ff(e),fs=null,wo=0,e=Se;for(;e!==null;)Av(e.alternate,e),e=e.return;Se=null}}function bs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,TM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yi=0,Uh(),Xe=e,Se=a=ra(e.current,null),Ee=n,ze=0,ni=null,qa=!1,ys=Ra(e,n),Rh=!1,xs=ii=bu=Lr=ka=$e=0,Yn=qo=null,Ch=!1,da=ho(e,n),Il(),a}function a_(e,n){fe=null,bt.H=uu,n===cs||n===jl?(n=fg(),ze=3):n===Af?(n=fg(),ze=4):ze=n===th?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Se===null&&($e=1,cu(e,fi(n,e.current)))}function r_(){var e=En.current;return e===null?!0:(Ee&4194048)===Ee?Un===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===Un:!1}function s_(){var e=bt.H;return bt.H=uu,e===null?uu:e}function o_(){var e=bt.A;return bt.A=JS,e}function Uu(){$e=4,qa||(Ee&4194048)!==Ee&&En.current!==null||(ys=!0),(ka&134217727)===0&&(Lr&134217727)===0||Xe===null||Wa(Xe,Ee,ii,!1)}function Nh(e,n,a){var s=Ue;Ue|=2;var u=s_(),f=o_();(Xe!==e||Ee!==n)&&(Cu=null,bs(e,n)),n=!1;var _=$e;t:do try{if(ze!==0&&Se!==null){var T=Se,z=ni;switch(ze){case 8:Uh(),_=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var Z=ze;if(ze=0,ni=null,As(e,T,z,Z),a&&ys){_=0;break t}break;default:Z=ze,ze=0,ni=null,As(e,T,z,Z)}}eM(),_=$e;break}catch(it){a_(e,it)}while(!0);return n&&e.shellSuspendCounter++,oa=Sr=null,Ue=s,bt.H=u,bt.A=f,Se===null&&(Xe=null,Ee=0,Il()),_}function eM(){for(;Se!==null;)l_(Se)}function nM(e,n){var a=Ue;Ue|=2;var s=s_(),u=o_();Xe!==e||Ee!==n?(Cu=null,Ru=X()+500,bs(e,n)):ys=Ra(e,n);t:do try{if(ze!==0&&Se!==null){n=Se;var f=ni;e:switch(ze){case 1:ze=0,ni=null,As(e,n,f,1);break;case 2:case 9:if(ug(f)){ze=0,ni=null,u_(n);break}n=function(){ze!==2&&ze!==9||Xe!==e||(ze=7),Wi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:ug(f)?(ze=0,ni=null,u_(n)):(ze=0,ni=null,As(e,n,f,7));break;case 5:var _=null;switch(Se.tag){case 26:_=Se.memoizedState;case 5:case 27:var T=Se;if(_?t0(_):T.stateNode.complete){ze=0,ni=null;var z=T.sibling;if(z!==null)Se=z;else{var Z=T.return;Z!==null?(Se=Z,Nu(Z)):Se=null}break e}}ze=0,ni=null,As(e,n,f,5);break;case 6:ze=0,ni=null,As(e,n,f,6);break;case 8:Uh(),$e=6;break t;default:throw Error(r(462))}}iM();break}catch(it){a_(e,it)}while(!0);return oa=Sr=null,bt.H=s,bt.A=u,Ue=a,Se!==null?0:(Xe=null,Ee=0,Il(),$e)}function iM(){for(;Se!==null&&!ce();)l_(Se)}function l_(e){var n=Tv(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?Nu(e):Se=n}function u_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vv(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=vv(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Ff(n);var s=n;s===vn&&(ve?(ql(s),s.tag===5&&s.stateNode!=null&&(qe=s.stateNode)):(ql(s),ve=!0));default:Av(a,n),n=Se=Jm(n,da),n=Tv(a,n,da)}e.memoizedProps=e.pendingProps,n===null?Nu(e):Se=n}function As(e,n,a,s){oa=Sr=null,Ff(n),fs=null,wo=0;var u=n.return;try{if(qS(e,u,n,a,Ee)){$e=1,cu(e,fi(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;$e=1,cu(e,fi(a,e.current)),Se=null;return}n.flags&32768?(ve||s===1?e=!0:ys||(Ee&536870912)!==0?e=!1:(qa=e=!0,(s===2||s===9||s===3||s===6)&&(s=En.current,s!==null&&s.tag===13&&(s.flags|=16384))),c_(n,e)):Nu(n)}function Nu(e){var n=e;do{if((n.flags&32768)!==0){c_(n,qa);return}e=n.return;var a=ZS(n.alternate,n,da);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);$e===0&&($e=5)}function c_(e,n){do{var a=jS(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);$e=6,Se=null}function f_(e,n,a,s,u,f,_,T,z,Z,it,mt){e.cancelPendingCommit=null;do Lu();while(Qe!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===Xe&&(Se=Xe=null,Ee=0),Or=n,bi=e,Yi=a,Dh=u,t_=s,aM(e,n,a,_,T,z,mt)}}function aM(e,n,a,s,u,f,_){var T=n.lanes|n.childLanes;if(wh=T,T|=df,j(e,a,T,s,u,f),Ms=null,(a&335544064)===a?(Es=NS(e),s=10262):(Es=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,cM(Ft,function(){return Ph(),null})):(e.callbackNode=null,e.callbackPriority=0),_u=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=bt.T,bt.T=null,u=at.p,at.p=2,f=Ue,Ue|=4;try{QS(e,n,a)}finally{Ue=f,at.p=u,bt.T=s}}Qe=1,_u?Ss=DM(_,e.containerInfo,Es,Lh,Oh,sM,zh,Ph,rM):(Lh(),Oh(),zh())}function rM(e){if(Qe!==0){var n=bi.onRecoverableError;n(e,{componentStack:null})}}function sM(){Qe===3&&(Qe=0,Wv(Or,bi),Qe=4)}function Lh(){if(Qe===1){Qe=0;var e=bi,n=Or,a=Yi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=bt.T,bt.T=null;var u=at.p;at.p=2;var f=Ue;Ue|=4;try{Go=Su=!1,kv(n,e,a),a=Zh;var _=Vm(e.containerInfo),T=a.focusedElem,z=a.selectionRange;if(_!==T&&T&&T.ownerDocument&&Gm(T.ownerDocument.documentElement,T)){if(z!==null&&lf(T)){var Z=z.start,it=z.end;if(it===void 0&&(it=Z),"selectionStart"in T)T.selectionStart=Z,T.selectionEnd=Math.min(it,T.value.length);else{var mt=T.ownerDocument||document,q=mt&&mt.defaultView||window;if(q.getSelection){var tt=q.getSelection(),Dt=T.textContent.length,Zt=Math.min(z.start,Dt),he=z.end===void 0?Zt:Math.min(z.end,Dt);!tt.extend&&Zt>he&&(_=he,he=Zt,Zt=_);var W=Hm(T,Zt),G=Hm(T,he);if(W&&G&&(tt.rangeCount!==1||tt.anchorNode!==W.node||tt.anchorOffset!==W.offset||tt.focusNode!==G.node||tt.focusOffset!==G.offset)){var J=mt.createRange();J.setStart(W.node,W.offset),tt.removeAllRanges(),Zt>he?(tt.addRange(J),tt.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),tt.addRange(J))}}}}for(mt=[],tt=T;tt=tt.parentNode;)tt.nodeType===1&&mt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var dt=mt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Os=!!Wh,Zh=Wh=null}finally{Ue=f,at.p=u,bt.T=s}}e.current=n,Qe=2}}function Oh(){if(Qe===2){Qe=0;var e=bi,n=Or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=bt.T,bt.T=null;var s=at.p;at.p=2;var u=Ue;Ue|=4;try{Fv(e,n.alternate,n)}finally{Ue=u,at.p=s,bt.T=a}}Qe=3}}function zh(){if(Qe===4||Qe===3){Qe=0;var e=Ss;Ss=null,Fe();var n=bi,a=Or,s=Yi,u=t_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?Qe=5:(Qe=0,Or=bi=null,h_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Ya=null),Ht(s),a=a.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=bt.T,f=at.p,at.p=2,bt.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var z=u[T];_(z.value,{componentStack:z.stack})}}finally{bt.T=a,at.p=f}}if(u=Ms,_=Es,Es=null,u!==null&&(Ms=null,_===null&&(_=[]),e!==null))for(z=0;z<u.length;z++)a=(0,u[z])(_),a!==void 0&&e.finished.finally(a);(Yi&3)!==0&&Lu(),Wi(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===wu?ko++:(ko=0,wu=n):(ko=0,wu=null),Yo(0)}}function h_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ao(n)))}function Lu(){return Ss!==null&&(Ss.skipTransition(),Ss=null),Lh(),Oh(),zh(),Ph()}function Ph(){if(Qe!==5)return!1;var e=bi,n=wh;wh=0;var a=Ht(Yi),s=bt.T,u=at.p;try{at.p=32>a?32:a,bt.T=null,a=Dh,Dh=null;var f=bi,_=Yi;if(Qe=0,Or=bi=null,Yi=0,(Ue&6)!==0)throw Error(r(331));var T=Ue;if(Ue|=4,Kv(f.current),Zv(f,f.current,_,a),Ue=T,Yo(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{at.p=u,bt.T=s,h_(e,n)}}function d_(e,n,a){n=fi(a,n),n=$f(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(w(e,2),Wi(e))}function Pe(e,n,a){if(e.tag===3)d_(e,e,a);else for(;n!==null;){if(n.tag===3){d_(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))){e=fi(a,e),a=uv(2),s=Ia(n,a,2),s!==null&&(cv(a,s,n,e),w(s,2),Wi(s));break}}n=n.return}}function Bh(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new $S;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Rh=!0,u.add(a),e=oM.bind(null,e,n,a),n.then(e,e))}function oM(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Ee&a)===a&&(($e===4||$e===3&&(Ee&62914560)===Ee&&300>X()-Au)&&(Ue&2)===0?bs(e,0):bu|=a,xs===Ee&&(xs=0)),Wi(e)}function p_(e,n){n===0&&(n=Al()),e=_r(e,n),e!==null&&(w(e,n),Wi(e))}function lM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),p_(e,a)}function uM(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),p_(e,a)}function cM(e,n){return kt(e,n)}var Rs=null,Cs=null,Ih=!1,Ou=!1,Fh=!1,Za=0;function Wi(e){e!==Cs&&e.next===null&&(Cs===null?Rs=Cs=e:Cs=Cs.next=e),Ou=!0,Ih||(Ih=!0,hM())}function Yo(e,n){if(!Fh&&Ou){Fh=!0;do for(var a=!1,s=Rs;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Cn(42|e)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,__(s,f))}else f=Ee,f=ta(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ra(s,f)||(a=!0,__(s,f));s=s.next}while(a);Fh=!1}}function fM(){m_()}function m_(){Ou=Ih=!1;var e=0;Za!==0&&EM()&&(e=Za);for(var n=X(),a=null,s=Rs;s!==null;){var u=s.next,f=g_(s,n);f===0?(s.next=null,a===null?Rs=u:a.next=u,u===null&&(Cs=a)):(a=s,(e!==0||(f&3)!==0)&&(Ou=!0)),s=u}Qe!==0&&Qe!==5||Yo(e),Za!==0&&(Za=0)}function g_(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Cn(f),T=1<<_,z=u[_];z===-1?((T&a)===0||(T&s)!==0)&&(u[_]=Xc(T,n)):z<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=Ee,a=ta(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ye(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ra(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ye(s),Ht(a)){case 2:case 8:a=_t;break;case 32:a=Ft;break;case 268435456:a=le;break;default:a=Ft}return s=v_.bind(null,e),a=kt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ye(s),e.callbackPriority=2,e.callbackNode=null,2}function v_(e,n){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Lu()&&e.callbackNode!==a)return null;var s=Ee;return s=ta(e,e===Xe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(n_(e,s,n),g_(e,X()),e.callbackNode!=null&&e.callbackNode===a?v_.bind(null,e):null)}function __(e,n){if(Lu())return null;n_(e,n,!0)}function hM(){bM(function(){(Ue&6)!==0?kt(ft,fM):m_()})}function Hh(){if(Za===0){var e=Tr;e===0&&(e=pr,pr<<=1,(pr&261888)===0&&(pr=256)),Za=e}return Za}function y_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dl(e)}function dM(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=y_((u[Gt]||null).action),_=s.submitter;_&&(n=(n=_[Gt]||null)?y_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Ol("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Za!==0){var z=new FormData(u,_);Zf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=new FormData(u,_),Zf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Gh=0;Gh<hf.length;Gh++){var Vh=hf[Gh],pM=Vh.toLowerCase(),mM=Vh[0].toUpperCase()+Vh.slice(1);Si(pM,"on"+mM)}Si(km,"onAnimationEnd"),Si(Ym,"onAnimationIteration"),Si(Wm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(TS,"onTransitionRun"),Si(bS,"onTransitionStart"),Si(AS,"onTransitionCancel"),Si(Zm,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function x_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],z=T.instance,Z=T.currentTarget;if(T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Z;try{f(u)}catch(it){Bl(it)}u.currentTarget=null,f=z}else for(_=0;_<s.length;_++){if(T=s[_],z=T.instance,Z=T.currentTarget,T=T.listener,z!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Z;try{f(u)}catch(it){Bl(it)}u.currentTarget=null,f=z}}}}function Me(e,n){var a=n[Oe];a===void 0&&(a=n[Oe]=new Set);var s=e+"__bubble";a.has(s)||(S_(n,e,2,!1),a.add(s))}function Xh(e,n,a){var s=0;n&&(s|=4),S_(a,e,s,n)}var zu="_reactListening"+Math.random().toString(36).slice(2);function qh(e){if(!e[zu]){e[zu]=!0,Ca.forEach(function(a){a!=="selectionchange"&&(gM.has(a)||Xh(a,!1,e),Xh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zu]||(n[zu]=!0,Xh("selectionchange",!1,n))}}function S_(e,n,a,s){switch(c0(n)){case 2:var u=lE;break;case 8:u=uE;break;default:u=cd}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function kh(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=ln(T),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=f=_;continue t}T=T.parentNode}}s=s.return}Sm(function(){var Z=f,it=jc(a),mt=[];t:{var q=jm.get(e);if(q!==void 0){var tt=Ol,Dt=e;switch(e){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":tt=tS;break;case"focusin":Dt="focus",tt=ef;break;case"focusout":Dt="blur",tt=ef;break;case"beforeblur":case"afterblur":tt=ef;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=rS;break;case km:case Ym:case Wm:tt=kx;break;case Zm:tt=oS;break;case"scroll":case"scrollend":tt=Hx;break;case"wheel":tt=uS;break;case"copy":case"cut":case"paste":tt=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Am;break;case"submit":tt=iS;break;case"toggle":case"beforetoggle":tt=fS}var Zt=(n&4)!==0,he=!Zt&&(e==="scroll"||e==="scrollend"),W=Zt?q!==null?q+"Capture":null:q;Zt=[];for(var G=Z,J;G!==null;){var dt=G;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||W===null||(dt=mo(G,W),dt!=null&&Zt.push(Zo(G,dt,J))),he)break;G=G.return}0<Zt.length&&(q=new tt(q,Dt,null,a,it),mt.push({event:q,listeners:Zt}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",tt&&a!==Zc&&(Dt=a.relatedTarget||a.fromElement)&&(ln(Dt)||Dt[ge]))break t;(q||tt)&&(Dt=it.window===it?it:(tt=it.ownerDocument)?tt.defaultView||tt.parentWindow:window,q?(tt=a.relatedTarget||a.toElement,q=Z,tt=tt?ln(tt):null,tt!==null&&(he=c(tt),Zt=tt.tag,tt!==he||Zt!==5&&Zt!==27&&Zt!==6)&&(tt=null)):(q=null,tt=Z),q!==tt&&(Zt=Tm,dt="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Am,dt="onPointerLeave",W="onPointerEnter",G="pointer"),he=q==null?Dt:un(q),J=tt==null?Dt:un(tt),Dt=new Zt(dt,G+"leave",q,a,it),Dt.target=he,Dt.relatedTarget=J,dt=null,ln(it)===Z&&(Zt=new Zt(W,G+"enter",tt,a,it),Zt.target=J,Zt.relatedTarget=he,dt=Zt),he=dt,Zt=q&&tt?I(q,tt,vM):null,q!==null&&M_(mt,Dt,q,Zt,!1),tt!==null&&he!==null&&M_(mt,he,tt,Zt,!0)))}t:{if(q=Z?un(Z):window,tt=q.nodeName&&q.nodeName.toLowerCase(),tt==="select"||tt==="input"&&q.type==="file")var qt=Om;else if(Nm(q))if(zm)qt=SS;else{qt=yS;var Te=_S}else tt=q.nodeName,!tt||tt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?Z&&Wc(Z.elementType)&&(qt=Om):qt=xS;if(qt&&(qt=qt(e,Z))){Lm(mt,qt,a,it);break t}Te&&Te(e,q,Z)}switch(Te=Z?un(Z):window,e){case"focusin":(Nm(Te)||Te.contentEditable==="true")&&(ns=Te,uf=Z,Eo=null);break;case"focusout":Eo=uf=ns=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Xm(mt,a,it);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":Xm(mt,a,it)}var ee;if(af)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else es?Dm(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(Rm&&a.locale!=="ko"&&(es||re!=="onCompositionStart"?re==="onCompositionEnd"&&es&&(ee=Mm()):(wa=it,Jc="value"in wa?wa.value:wa.textContent,es=!0)),Te=Pu(Z,re),0<Te.length&&(re=new bm(re,e,null,a,it),mt.push({event:re,listeners:Te}),ee?re.data=ee:(ee=Um(a),ee!==null&&(re.data=ee)))),(ee=dS?pS(e,a):mS(e,a))&&(re=Pu(Z,"onBeforeInput"),0<re.length&&(Te=new bm("onBeforeInput","beforeinput",null,a,it),mt.push({event:Te,listeners:re}),Te.data=ee)),dM(mt,e,Z,a,it)}x_(mt,n)})}function Zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pu(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=mo(e,a),u!=null&&s.unshift(Zo(e,u,f)),u=mo(e,n),u!=null&&s.push(Zo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function vM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M_(e,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,z=T.alternate,Z=T.stateNode;if(T=T.tag,z!==null&&z===s)break;T!==5&&T!==26&&T!==27||Z===null||(z=Z,u?(Z=mo(a,f),Z!=null&&_.unshift(Zo(a,Z,z))):u||(Z=mo(a,f),Z!=null&&_.push(Zo(a,Z,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var _M=/\r\n?/g,yM=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(_M,`
`).replace(yM,"")}function T_(e,n){return n=E_(n),E_(e)===n}function Be(e,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||Jr(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&Jr(e,""+s);else return;break;case"className":wl(e,"class",s);break;case"tabIndex":wl(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(e,a,s);break;case"style":ym(e,s,f);return;case"data":if(n!=="object"){wl(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Dl(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Dl(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Bi);return;case"onScroll":s!=null&&Me("scroll",e);return;case"onScrollEnd":s!=null&&Me("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Dl(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Cl(e,"popover",s);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Cl(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ix.get(a)||a,Cl(e,a,s);else return}De=!0}function Yh(e,n,a,s,u,f){switch(a){case"style":ym(e,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")Jr(e,s);else if(typeof s=="number"||typeof s=="bigint")Jr(e,""+s);else return;break;case"onScroll":s!=null&&Me("scroll",e);return;case"onScrollEnd":s!=null&&Me("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!On.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[Gt]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,s,u);break t}De=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):Cl(e,a,s)}return}De=!0}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,f,_,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),s&&Be(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var T=f=_=u=null,z=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var it=a[s];if(it!=null)switch(s){case"name":u=it;break;case"type":_=it;break;case"checked":z=it;break;case"defaultChecked":Z=it;break;case"value":f=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Be(e,n,s,it,a,null)}}mm(e,f,T,z,Z,_,u,!1);return;case"select":Me("invalid",e),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Be(e,n,u,T,a,null)}n=f,a=_,e.multiple=!!s,n!=null?Kr(e,!!s,n,!1):a!=null&&Kr(e,!!s,a,!0);return;case"textarea":Me("invalid",e),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Be(e,n,_,T,a,null)}vm(e,s,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Be(e,n,z,s,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(s=0;s<Wo.length;s++)Me(Wo[s],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,Z,s,a,null)}return;default:if(Wc(n)){for(it in a)a.hasOwnProperty(it)&&(s=a[it],s!==void 0&&Yh(e,n,it,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Be(e,n,T,s,a,null))}var xM={};function SM(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,z=null,Z=null,it=null;for(tt in a){var mt=a[tt];if(a.hasOwnProperty(tt)&&mt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":z=mt;default:s.hasOwnProperty(tt)||Be(e,n,tt,null,s,mt)}}for(var q in s){var tt=s[q];if(mt=a[q],s.hasOwnProperty(q)&&(tt!=null||mt!=null))switch(q){case"type":tt!==mt&&(De=!0),f=tt;break;case"name":tt!==mt&&(De=!0),u=tt;break;case"checked":tt!==mt&&(De=!0),Z=tt;break;case"defaultChecked":tt!==mt&&(De=!0),it=tt;break;case"value":tt!==mt&&(De=!0),_=tt;break;case"defaultValue":tt!==mt&&(De=!0),T=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==mt&&Be(e,n,q,tt,s,mt)}}kc(e,_,T,z,Z,it,f,u);return;case"select":tt=_=T=q=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":tt=z;default:s.hasOwnProperty(f)||Be(e,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":f!==z&&(De=!0),q=f;break;case"defaultValue":f!==z&&(De=!0),T=f;break;case"multiple":f!==z&&(De=!0),_=f;default:f!==z&&Be(e,n,u,f,s,z)}n=T,a=_,s=tt,q!=null?Kr(e,!!a,q,!1):!!s!=!!a&&(n!=null?Kr(e,!!a,n,!0):Kr(e,!!a,a?[]:"",!1));return;case"textarea":tt=q=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(e,n,T,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(De=!0),q=u;break;case"defaultValue":u!==f&&(De=!0),tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Be(e,n,_,u,s,f)}gm(e,q,tt);return;case"option":for(var Dt in a)q=a[Dt],a.hasOwnProperty(Dt)&&q!=null&&!s.hasOwnProperty(Dt)&&(Dt==="selected"?e.selected=!1:Be(e,n,Dt,null,s,q));for(z in s)q=s[z],tt=a[z],s.hasOwnProperty(z)&&q!==tt&&(q!=null||tt!=null)&&(z==="selected"?(q!==tt&&(De=!0),e.selected=q&&typeof q!="function"&&typeof q!="symbol"):Be(e,n,z,q,s,tt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)q=a[Zt],a.hasOwnProperty(Zt)&&q!=null&&!s.hasOwnProperty(Zt)&&Be(e,n,Zt,null,s,q);for(Z in s)if(q=s[Z],tt=a[Z],s.hasOwnProperty(Z)&&q!==tt&&(q!=null||tt!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:Be(e,n,Z,q,s,tt)}return;default:if(Wc(n)){for(var he in a)q=a[he],a.hasOwnProperty(he)&&q!==void 0&&!s.hasOwnProperty(he)&&Yh(e,n,he,void 0,s,q);for(it in s)q=s[it],tt=a[it],!s.hasOwnProperty(it)||q===tt||q===void 0&&tt===void 0||Yh(e,n,it,q,s,tt);return}}for(var W in a)q=a[W],a.hasOwnProperty(W)&&q!=null&&!s.hasOwnProperty(W)&&Be(e,n,W,null,s,q);for(mt in s)q=s[mt],tt=a[mt],!s.hasOwnProperty(mt)||q===tt||q==null&&tt==null||Be(e,n,mt,q,s,tt)}function b_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&b_(_)){for(_=0,T=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],Z=z.startTime;if(Z>T)break;var it=z.transferSize,mt=z.initiatorType;it&&b_(mt)&&(z=z.responseEnd,_+=it*(z<T?1:(T-Z)/(z-Z)))}if(--s,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wh=null,Zh=null;function jo(e){return e.nodeType===9?e:e.ownerDocument}function A_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function C_(e,n,a,s){return a=jo(a).createElement(e),a[te]=s,a[Gt]=n,An(a,e,n),ue(a),a}function jh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qh=null;function EM(){var e=window.event;return e&&e.type==="popstate"?e===Qh?!1:(Qh=e,!0):(Qh=null,!1)}var Kh=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,D_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Kh,bM=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(AM)}:Kh;function AM(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function U_(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),zs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")rd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,rd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[Qt]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&rd(e.ownerDocument.body);a=u}while(a);zs(n)}function N_(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function L_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function O_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function RM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Jh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return RM(n,a,e)}function CM(e){return e.documentElement.clientHeight}function wM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function DM(e,n,a,s,u,f,_,T,z){var Z=n.nodeType===9?n:n.ownerDocument;try{var it=Z.startViewTransition({update:function(){var q=Z.defaultView,tt=q.navigation&&q.navigation.transition,Dt=Z.fonts.status;s();var Zt=[];if(Dt==="loaded"&&(CM(Z),Z.fonts.status==="loading"&&Zt.push(Z.fonts.ready)),Dt=Zt.length,e!==null)for(var he=e.suspenseyImages,W=0,G=0;G<he.length;G++){var J=he[G];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<q.innerHeight&&dt.left<q.innerWidth){if(W+=e0(J),W>Fu){Zt.length=Dt;break}J=new Promise(wM.bind(J)),Zt.push(J)}}}if(0<Zt.length)return q=Promise.race([Promise.all(Zt),new Promise(function(qt){return setTimeout(qt,500)})]).then(u,u),(tt?Promise.allSettled([tt.finished,q]):q).then(f,f);if(u(),tt)return tt.finished.then(f,f);f()},types:a});Z.__reactViewTransition=it;var mt=[];return it.ready.then(function(){for(var q=Z.documentElement.getAnimations({subtree:!0}),tt=0;tt<q.length;tt++){var Dt=q[tt],Zt=Dt.effect,he=Zt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Dt),Dt=Zt.getKeyframes();for(var W=he=void 0,G=!0,J=0;J<Dt.length;J++){var dt=Dt[J],qt=dt.width;if(he===void 0)he=qt;else if(he!==qt){G=!1;break}if(qt=dt.height,W===void 0)W=qt;else if(W!==qt){G=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}G&&he!==void 0&&W!==void 0&&(Zt.setKeyframes(Dt),G=getComputedStyle(Zt.target,Zt.pseudoElement),G.width!==he||G.height!==W)&&(G=Dt[0],G.width=he,G.height=W,G=Dt[Dt.length-1],G.width=he,G.height=W,Zt.setKeyframes(Dt))}}_()},function(q){Z.__reactViewTransition===it&&(Z.__reactViewTransition=null);try{typeof q=="object"&&q!==null&&q.name==="InvalidStateError"&&(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null),q!==null&&z(q)}finally{s(),u(),_()}}),it.finished.finally(function(){for(var q=0;q<mt.length;q++)mt[q].cancel();Z.__reactViewTransition===it&&(Z.__reactViewTransition=null),T()}),it}catch{return s(),u(),_(),null}}function zr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}zr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:B({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},zr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&s.push(a[u])}return s},zr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function z_(e){return{name:e,group:new zr("group",e),imagePair:new zr("image-pair",e),old:new zr("old",e),new:new zr("new",e)}}function ri(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(e,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(B_(f,e,n,a)===-1){var _=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(z){_.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(u=_.removeEventListener.bind(_,e,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=ws(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),g(this._fragmentFiber.child,!1,UM,e,T,s)}this._eventListeners=f}};function UM(e,n,a,s){return M(e).addEventListener(n,a,s),!1}ri.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=B_(s,e,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=ws(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,NM,e,a,u),s.splice(n,1),f!==null&&f()}};function NM(e,n,a,s){return M(e).removeEventListener(n,a,s),!1}function ws(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function P_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function B_(e,n,a,s){if(e.length===0)return-1;s=P_(s);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&P_(f.optionsOrUseCapture)===s)return u}return-1}ri.prototype.dispatchEvent=function(e){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,ws(f.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,ws(f.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},ri.prototype.focus=function(e){g(this._fragmentFiber.child,!0,I_,e,void 0,void 0)};function I_(e,n){return e.tag===6?!1:(e=M(e),qM(e,n))}ri.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,$h,n,void 0,void 0);for(var a=n.length-1;0<=a&&!I_(n[a],e);a--);};function $h(e,n){return n.push(e),!1}ri.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=M(e),e=jo(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,LM,e,void 0,void 0))};function LM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,OM,e,void 0,void 0)};function OM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}ri.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,zM,e,void 0,void 0);for(var a=n=0;a<Ai.length;a++){var s=Ai[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Ai[n++]=s}Ai.length=n}};function zM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Ai=[],td=!1;function PM(e,n,a){Ai.push({fragmentInstance:e,observer:n,instance:a}),td||(td=!0,kM(function(){td=!1;var s=Ai;Ai=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}ri.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,BM,e,void 0,void 0),e};function BM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}ri.prototype.getRootNode=function(e){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},ri.prototype.compareDocumentPosition=function(e){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,$h,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(e),T=u.compareDocumentPosition(e),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||f&&u===e||z||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||IM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function IM(e,n,a,s,u){var f=ln(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=y(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=I(a,f,$),n===null?n=!1:(g(n,!0,N,f,a),f=x,x=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=I(s,f,$),n===null?n=!1:(g(n,!0,C,f,s),f=x,O=x=null,n=f!==null)),n):!1}function F_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,$h,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=M(s),F_(e,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),F_(u,a)):M(u).scrollIntoView(e),s+=a?-1:1}};function FM(e,n){return e=M(e),H_(e,n),!1}function H_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function G_(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];e.addEventListener(u.type,u.attachedListener,ws(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,T=0;T<Ai.length;T++){var z=Ai[T];(z.fragmentInstance!==n||z.observer!==f||z.instance!==e)&&(Ai[_++]=z)}Ai.length=_,f.observe(e)}),H_(e,n))}function HM(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];e.removeEventListener(u.type,u.attachedListener,ws(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?PM(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function ed(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ed(a),Ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function GM(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Qt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function VM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function V_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function nd(e){return e.data==="$?"||e.data==="$~"}function id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ad=null;function X_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function q_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function qM(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function kM(e){D_(function(){D_(function(n){return e(n)})})}function k_(e,n,a){switch(n=jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Y_(e,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Be(e,n,s,null,xM,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Bi&&(e.onclick=null),Ae(e)}function rd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ae(e)}var vi=new Map,W_=new Set;function Qo(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var pa=at.d;at.d={f:YM,r:WM,D:ZM,C:jM,L:QM,m:KM,X:$M,S:JM,M:tE};function YM(){var e=pa.f(),n=Du();return e||n}function WM(e){var n=Qn(e);n!==null&&n.tag===5&&n.type==="form"?jg(n):pa.r(e)}var Ds=typeof document>"u"?null:document;function Z_(e,n,a){var s=Ds;if(s&&typeof n=="string"&&n){var u=ui(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),W_.has(u)||(W_.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),An(n,"link",e),ue(n),s.head.appendChild(n)))}}function ZM(e){pa.D(e),Z_("dns-prefetch",e,null)}function jM(e,n){pa.C(e,n),Z_("preconnect",e,n)}function QM(e,n,a){pa.L(e,n,a);var s=Ds;if(s&&e&&n){var u='link[rel="preload"][as="'+ui(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ui(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ui(a.imageSizes)+'"]')):u+='[href="'+ui(e)+'"]';var f=u;switch(n){case"style":f=Us(e);break;case"script":f=Ns(e)}if(!(vi.has(f)||(e=B({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ko(f))||n==="script"&&s.querySelector(Jo(f))))){var _=s.createElement("link");An(_,"link",e),n==="style"&&(_[Vn]=!0,_.onload=_.onerror=function(){Kn(_)}),ue(_),s.head.appendChild(_)}}}function KM(e,n){pa.m(e,n);var a=Ds;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ui(s)+'"][href="'+ui(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ns(e)}if(!vi.has(f)&&(e=B({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jo(f)))return}s=a.createElement("link"),An(s,"link",e),ue(s),a.head.appendChild(s)}}}function JM(e,n,a){pa.S(e,n,a);var s=Ds;if(s&&e){var u=li(s).hoistableStyles,f=Us(e);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(Ko(f)))T.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&sd(e,a);var z=_=s.createElement("link");ue(z),An(z,"link",e),z._p=new Promise(function(Z,it){z.onload=Z,z.onerror=it}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Bu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function $M(e,n){pa.X(e,n);var a=Ds;if(a&&e){var s=li(a).hoistableScripts,u=Ns(e),f=s.get(u);f||(f=a.querySelector(Jo(u)),f||(e=B({src:e,async:!0},n),(n=vi.get(u))&&od(e,n),f=a.createElement("script"),ue(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function tE(e,n){pa.M(e,n);var a=Ds;if(a&&e){var s=li(a).hoistableScripts,u=Ns(e),f=s.get(u);f||(f=a.querySelector(Jo(u)),f||(e=B({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&od(e,n),f=a.createElement("script"),ue(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function j_(e,n,a,s){var u=(u=L.current)?Qo(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Us(a.href),n=li(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Us(a.href);var f=li(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Ko(e)))?f._p||(_.instance=f,_.state.loading=5):(f=vi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,f)),eE(u,e,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ns(a),n=li(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Us(e){return'href="'+ui(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function Q_(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function eE(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Vn]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[Vn]=!0,n.onload=n.onerror=Kn.bind(null,n),An(n,"link",a),ue(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ns(e){return'[src="'+ui(e)+'"]'}function Jo(e){return"script[async]"+e}function K_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+ui(a.href)+'"]');if(s)return n.instance=s,ue(s),s;var u=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ue(s),An(s,"style",u),Bu(s,a.precedence,e),n.instance=s;case"stylesheet":u=Us(a.href);var f=e.querySelector(Ko(u));if(f)return n.state.loading|=4,n.instance=f,ue(f),f;s=Q_(a),(u=vi.get(u))&&sd(s,u),f=(e.ownerDocument||e).createElement("link"),ue(f);var _=f;return _._p=new Promise(function(T,z){_.onload=T,_.onerror=z}),An(f,"link",s),n.state.loading|=4,Bu(f,a.precedence,e),n.instance=f;case"script":return f=Ns(a.src),(u=e.querySelector(Jo(f)))?(n.instance=u,ue(u),u):(s=a,(u=vi.get(f))&&(s=B({},a),od(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),ue(u),An(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bu(s,a.precedence,e));return n.instance}function Bu(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function od(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Iu=null;function J_(e,n,a){if(Iu===null){var s=new Map,u=Iu=new Map;u.set(a,s)}else u=Iu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Qt]||f[te]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function ld(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function t0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function e0(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function n0(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=e0(n),e.suspenseyImages.push(n)),e=rE.bind(e),n.decode().then(e,e))}function iE(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Us(s.href),f=n.querySelector(Ko(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$o.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ue(f);return}f=n.ownerDocument||n,s=Q_(s),(u=vi.get(u))&&sd(s,u),f=f.createElement("link"),ue(f);var _=f;_._p=new Promise(function(T,z){_.onload=T,_.onerror=z}),An(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$o.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fu=0;function aE(e,n){return e.stylesheets&&e.count===0&&Gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Fu===0&&(Fu=62500*MM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Fu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function i0(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Gu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function $o(){this.count--,i0(this)}function rE(){this.imgCount--,i0(this)}var Hu=null;function Gu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hu=new Map,n.forEach(sE,e),Hu=null,$o.call(e))}function sE(e,n){if(!(n.state.loading&4)){var a=Hu.get(e);if(a)var s=a.get(null);else{a=new Map,Hu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=$o.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ls={$$typeof:ht,Provider:null,Consumer:null,_currentValue:Tt,_currentValue2:Tt,_threadCount:0};function oE(e,n,a,s,u,f,_,T,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.hiddenUpdates=po(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function a0(e,n,a,s,u,f,_,T,z,Z,it,mt){return e=new oE(e,n,a,_,z,Z,it,mt,T),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=Ef(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Rf(f),e}function r0(e){return e?(e=rs,e):rs}function s0(e,n,a,s,u,f){u=r0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ba(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ia(e,s,n),a!==null&&(Wn(a,e,n),Do(a,e,n))}function o0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ud(e,n){o0(e,n),(e=e.alternate)&&o0(e,n)}function l0(e){if(e.tag===13||e.tag===31){var n=_r(e,67108864);n!==null&&Wn(n,e,67108864),ud(e,67108864)}}function u0(e){if(e.tag===13||e.tag===31){var n=ai();n=Rt(n);var a=_r(e,n);a!==null&&Wn(a,e,n),ud(e,n)}}var Os=!0;function lE(e,n,a,s){var u=bt.T;bt.T=null;var f=at.p;try{at.p=2,cd(e,n,a,s)}finally{at.p=f,bt.T=u}}function uE(e,n,a,s){var u=bt.T;bt.T=null;var f=at.p;try{at.p=8,cd(e,n,a,s)}finally{at.p=f,bt.T=u}}function cd(e,n,a,s){if(Os){var u=fd(s);if(u===null)kh(e,n,s,Vu,a),f0(e,s);else if(fE(u,e,n,a,s))s.stopPropagation();else if(f0(e,s),n&4&&-1<cE.indexOf(e)){for(;u!==null;){var f=Qn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Pi(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var z=1<<31-Cn(_);T.entanglements[1]|=z,_&=~z}Wi(f),(Ue&6)===0&&(Ru=X()+500,Yo(0))}}break;case 31:case 13:T=_r(f,2),T!==null&&Wn(T,f,2),Du(),ud(f,2)}if(f=fd(s),f===null&&kh(e,n,s,Vu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else kh(e,n,s,null,a)}}function fd(e){return e=jc(e),hd(e)}var Vu=null;function hd(e){if(Vu=null,e=ln(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Vu=e,null}function c0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(It()){case ft:return 2;case _t:return 8;case Ft:case Xt:return 32;case le:return 268435456;default:return 32}default:return 32}}var dd=!1,Qa=null,Ka=null,Ja=null,tl=new Map,el=new Map,$a=[],cE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function nl(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qn(n),n!==null&&l0(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fE(e,n,a,s,u){switch(n){case"focusin":return Qa=nl(Qa,e,n,a,s,u),!0;case"dragenter":return Ka=nl(Ka,e,n,a,s,u),!0;case"mouseover":return Ja=nl(Ja,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return tl.set(f,nl(tl.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,el.set(f,nl(el.get(f)||null,e,n,a,s,u)),!0}return!1}function h0(e){var n=ln(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Jt(e.priority,function(){u0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Jt(e.priority,function(){u0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Zc=s,a.target.dispatchEvent(s),Zc=null}else return n=Qn(a),n!==null&&l0(n),e.blockedOn=a,!1;n.shift()}return!0}function d0(e,n,a){Xu(e)&&a.delete(n)}function hE(){dd=!1,Qa!==null&&Xu(Qa)&&(Qa=null),Ka!==null&&Xu(Ka)&&(Ka=null),Ja!==null&&Xu(Ja)&&(Ja=null),tl.forEach(d0),el.forEach(d0)}function qu(e,n){e.blockedOn===n&&(e.blockedOn=null,dd||(dd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hE)))}var ku=null;function p0(e){ku!==e&&(ku=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ku===e&&(ku=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(hd(s||a)===null)continue;break}var f=Qn(a);f!==null&&(e.splice(n,3),n-=3,Zf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function zs(e){function n(z){return qu(z,e)}Qa!==null&&qu(Qa,e),Ka!==null&&qu(Ka,e),Ja!==null&&qu(Ja,e),tl.forEach(n),el.forEach(n);for(var a=0;a<$a.length;a++){var s=$a[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)h0(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[Gt]||null;if(typeof f=="function")_||p0(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Gt]||null)T=_.formAction;else if(hd(u)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),p0(a)}}}function m0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function pd(e){this._internalRoot=e}Yu.prototype.render=pd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ai();s0(a,s,e,n,null,null)},Yu.prototype.unmount=pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;s0(e.current,2,null,e,null,null),Du(),n[ge]=null}};function Yu(e){this._internalRoot=e}Yu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&h0(e)}};var g0=t.version;if(g0!=="19.3.1")throw Error(r(527,g0,"19.3.1"));at.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var dE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:bt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{be=Wu.inject(dE),We=Wu}catch{}}return al.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=rv,f=sv,_=ov;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=a0(e,1,!1,null,null,a,s,null,u,f,_,m0),e[ge]=n.current,qh(e),new pd(n)},al.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=rv,_=sv,T=ov,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=a0(e,1,!0,n,a??null,s,u,z,f,_,T,m0),n.context=r0(null),a=n.current,s=ai(),s=Rt(s),u=Ba(s),u.callback=null,Ia(a,u,s),a=s,n.current.lanes=a,w(n,a),Wi(n),e[ge]=n.current,qh(e),new Yu(n)},al.version="19.3.1",al}var A0;function EE(){if(A0)return vd.exports;A0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vd.exports=ME(),vd.exports}var A2=EE();const Zp="170",TE=0,R0=1,bE=2,Vy=1,AE=2,xa=3,fr=0,Zn=1,Sa=2,lr=0,Js=1,C0=2,w0=3,D0=4,RE=5,qr=100,CE=101,wE=102,DE=103,UE=104,NE=200,LE=201,OE=202,zE=203,ep=204,np=205,PE=206,BE=207,IE=208,FE=209,HE=210,GE=211,VE=212,XE=213,qE=214,ip=0,ap=1,rp=2,no=3,sp=4,op=5,lp=6,up=7,jp=0,kE=1,YE=2,ur=0,WE=1,ZE=2,jE=3,QE=4,KE=5,JE=6,$E=7,Xy=300,io=301,ao=302,cp=303,fp=304,Bc=306,hp=1e3,Yr=1001,dp=1002,Li=1003,tT=1004,Zu=1005,ji=1006,Sd=1007,Wr=1008,Aa=1009,qy=1010,ky=1011,ml=1012,Qp=1013,Zr=1014,Ma=1015,xl=1016,Kp=1017,Jp=1018,ro=1020,Yy=35902,Wy=1021,Zy=1022,Ni=1023,jy=1024,Qy=1025,$s=1026,so=1027,Ky=1028,$p=1029,Jy=1030,tm=1031,em=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,pp=35840,mp=35841,gp=35842,vp=35843,_p=36196,yp=37492,xp=37496,Sp=37808,Mp=37809,Ep=37810,Tp=37811,bp=37812,Ap=37813,Rp=37814,Cp=37815,wp=37816,Dp=37817,Up=37818,Np=37819,Lp=37820,Op=37821,Uc=36492,zp=36494,Pp=36495,$y=36283,Bp=36284,Ip=36285,Fp=36286,eT=3200,nT=3201,nm=0,iT=1,or="",yi="srgb",lo="srgb-linear",Ic="linear",Ge="srgb",Ps=7680,U0=519,aT=512,rT=513,sT=514,tx=515,oT=516,lT=517,uT=518,cT=519,Hp=35044,N0="300 es",Ea=2e3,Lc=2001;class uo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L0=1234567;const to=Math.PI/180,gl=180/Math.PI;function Qi(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Sn(o,t,i){return Math.max(t,Math.min(i,o))}function im(o,t){return(o%t+t)%t}function fT(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function hT(o,t,i){return o!==t?(i-o)/(t-o):0}function hl(o,t,i){return(1-i)*o+i*t}function dT(o,t,i,r){return hl(o,t,1-Math.exp(-i*r))}function pT(o,t=1){return t-Math.abs(im(o,t*2)-t)}function mT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function gT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function vT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function _T(o,t){return o+Math.random()*(t-o)}function yT(o){return o*(.5-Math.random())}function xT(o){o!==void 0&&(L0=o);let t=L0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ST(o){return o*to}function MT(o){return o*gl}function ET(o){return(o&o-1)===0&&o!==0}function TT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function bT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function AT(o,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),m=c((t+r)/2),v=h((t+r)/2),g=c((t-r)/2),y=h((t-r)/2),S=c((r-t)/2),E=h((r-t)/2);switch(l){case"XYX":o.set(d*v,p*g,p*y,d*m);break;case"YZY":o.set(p*y,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*y,d*v,d*m);break;case"XZX":o.set(d*v,p*E,p*S,d*m);break;case"YXY":o.set(p*S,d*v,p*E,d*m);break;case"ZYZ":o.set(p*E,p*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ie(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const R2={DEG2RAD:to,RAD2DEG:gl,generateUUID:Qi,clamp:Sn,euclideanModulo:im,mapLinear:fT,inverseLerp:hT,lerp:hl,damp:dT,pingpong:pT,smoothstep:mT,smootherstep:gT,randInt:vT,randFloat:_T,randFloatSpread:yT,seededRandom:xT,degToRad:ST,radToDeg:MT,isPowerOfTwo:ET,ceilPowerOfTwo:TT,floorPowerOfTwo:bT,setQuaternionFromProperEuler:AT,normalize:Ie,denormalize:Ui};class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Sn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,i,r,l,c,h,d,p,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,p,m)}set(t,i,r,l,c,h,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],y=r[2],S=r[5],E=r[8],b=l[0],M=l[3],x=l[6],O=l[1],N=l[4],C=l[7],$=l[2],I=l[5],B=l[8];return c[0]=h*b+d*O+p*$,c[3]=h*M+d*N+p*I,c[6]=h*x+d*C+p*B,c[1]=m*b+v*O+g*$,c[4]=m*M+v*N+g*I,c[7]=m*x+v*C+g*B,c[2]=y*b+S*O+E*$,c[5]=y*M+S*N+E*I,c[8]=y*x+S*C+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*h*v-i*d*m-r*c*v+r*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*h-d*m,y=d*p-v*c,S=m*c-h*p,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*m-v*r)*b,t[2]=(d*r-l*h)*b,t[3]=y*b,t[4]=(v*i-l*p)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(r*p-m*i)*b,t[8]=(h*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Md.makeScale(t,i)),this}rotate(t){return this.premultiply(Md.makeRotation(-t)),this}translate(t,i){return this.premultiply(Md.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Md=new de;function ex(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function RT(){const o=Oc("canvas");return o.style.display="block",o}const O0={};function cl(o){o in O0||(O0[o]=!0,console.warn(o))}function CT(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function wT(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function DT(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const we={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(o,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===Ge&&(o.r=ba(o.r),o.g=ba(o.g),o.b=ba(o.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Ge&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===or?Ic:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,i){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const z0=[.64,.33,.3,.6,.15,.06],P0=[.2126,.7152,.0722],B0=[.3127,.329],I0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[lo]:{primaries:z0,whitePoint:B0,transfer:Ic,toXYZ:I0,fromXYZ:F0,luminanceCoefficients:P0,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:z0,whitePoint:B0,transfer:Ge,toXYZ:I0,fromXYZ:F0,luminanceCoefficients:P0,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}});let Bs;class UT{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bs===void 0&&(Bs=Oc("canvas")),Bs.width=t.width,Bs.height=t.height;const r=Bs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Bs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NT=0;class nx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Ed(l[h].image)):c.push(Ed(l[h]))}else c=Ed(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Ed(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?UT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LT=0;class jn extends uo{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=Yr,l=Yr,c=ji,h=Wr,d=Ni,p=Aa,m=jn.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Qi(),this.name="",this.source=new nx(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hp:t.x=t.x-Math.floor(t.x);break;case Yr:t.x=t.x<0?0:1;break;case dp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hp:t.y=t.y-Math.floor(t.y);break;case Yr:t.y=t.y<0?0:1;break;case dp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Xy;jn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],v=p[4],g=p[8],y=p[1],S=p[5],E=p[9],b=p[2],M=p[6],x=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,C=(S+1)/2,$=(x+1)/2,I=(v+y)/4,B=(g+b)/4,H=(E+M)/4;return N>C&&N>$?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=I/r,c=B/r):C>$?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=I/l,c=H/l):$<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt($),r=B/c,l=H/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(y-v)*(y-v));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-b)/O,this.z=(y-v)/O,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OT extends uo{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new jn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new nx(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends OT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class ix extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zT extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],v=r[l+2],g=r[l+3];const y=c[h+0],S=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(g!==b||p!==y||m!==S||v!==E){let M=1-d;const x=p*y+m*S+v*E+g*b,O=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const $=Math.sqrt(N),I=Math.atan2($,x*O);M=Math.sin(M*I)/$,d=Math.sin(d*I)/$}const C=d*O;if(p=p*M+y*C,m=m*M+S*C,v=v*M+E*C,g=g*M+b*C,M===1-d){const $=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=$,m*=$,v*=$,g*=$}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*g+p*S-m*y,t[i+1]=p*E+v*y+m*g-d*S,t[i+2]=m*E+v*S+d*y-p*g,t[i+3]=v*E-d*g-p*y-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),g=d(c/2),y=p(r/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=y*v*g+m*S*E,this._y=m*S*g-y*v*E,this._z=m*v*E+y*S*g,this._w=m*v*g-y*S*E;break;case"YXZ":this._x=y*v*g+m*S*E,this._y=m*S*g-y*v*E,this._z=m*v*E-y*S*g,this._w=m*v*g+y*S*E;break;case"ZXY":this._x=y*v*g-m*S*E,this._y=m*S*g+y*v*E,this._z=m*v*E+y*S*g,this._w=m*v*g-y*S*E;break;case"ZYX":this._x=y*v*g-m*S*E,this._y=m*S*g+y*v*E,this._z=m*v*E-y*S*g,this._w=m*v*g+y*S*E;break;case"YZX":this._x=y*v*g+m*S*E,this._y=m*S*g+y*v*E,this._z=m*v*E-y*S*g,this._w=m*v*g-y*S*E;break;case"XZY":this._x=y*v*g-m*S*E,this._y=m*S*g-y*v*E,this._z=m*v*E+y*S*g,this._w=m*v*g+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Sn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-c*p,this._y=l*v+h*p+c*d-r*m,this._z=c*v+h*m+r*p-l*d,this._w=h*v-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=h*g+this._w*y,this._x=r*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,i=0,r=0){k.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(H0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(H0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),v=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+p*m+h*g-d*v,this.y=r+p*v+d*m-c*g,this.z=l+p*g+c*v-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Td.copy(this).projectOnVector(t),this.sub(Td)}reflect(t){return this.sub(Td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Sn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new k,H0=new Sl;class Ml{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ri):Ri.fromBufferAttribute(c,h),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ju.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ju.copy(r.boundingBox)),ju.applyMatrix4(t.matrixWorld),this.union(ju)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rl),Qu.subVectors(this.max,rl),Is.subVectors(t.a,rl),Fs.subVectors(t.b,rl),Hs.subVectors(t.c,rl),er.subVectors(Fs,Is),nr.subVectors(Hs,Fs),Pr.subVectors(Is,Hs);let i=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Pr.z,Pr.y,er.z,0,-er.x,nr.z,0,-nr.x,Pr.z,0,-Pr.x,-er.y,er.x,0,-nr.y,nr.x,0,-Pr.y,Pr.x,0];return!bd(i,Is,Fs,Hs,Qu)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,Is,Fs,Hs,Qu))?!1:(Ku.crossVectors(er,nr),i=[Ku.x,Ku.y,Ku.z],bd(i,Is,Fs,Hs,Qu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ma=[new k,new k,new k,new k,new k,new k,new k,new k],Ri=new k,ju=new Ml,Is=new k,Fs=new k,Hs=new k,er=new k,nr=new k,Pr=new k,rl=new k,Qu=new k,Ku=new k,Br=new k;function bd(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Br.fromArray(o,c);const d=l.x*Math.abs(Br.x)+l.y*Math.abs(Br.y)+l.z*Math.abs(Br.z),p=t.dot(Br),m=i.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const PT=new Ml,sl=new k,Ad=new k;class El{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):PT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sl.subVectors(t,this.center);const i=sl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(sl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sl.copy(t.center).add(Ad)),this.expandByPoint(sl.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ga=new k,Rd=new k,Ju=new k,ir=new k,Cd=new k,$u=new k,wd=new k;class Fc{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Rd.copy(t).add(i).multiplyScalar(.5),Ju.copy(i).sub(t).normalize(),ir.copy(this.origin).sub(Rd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Ju),d=ir.dot(this.direction),p=-ir.dot(Ju),m=ir.lengthSq(),v=Math.abs(1-h*h);let g,y,S,E;if(v>0)if(g=h*p-d,y=h*d-p,E=c*v,g>=0)if(y>=-E)if(y<=E){const b=1/v;g*=b,y*=b,S=g*(g+h*y+2*d)+y*(h*g+y+2*p)+m}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*p)+m;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*p)+m;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+y*(y+2*p)+m):y<=E?(g=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+y*(y+2*p)+m);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Rd).addScaledVector(Ju,y),S}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const r=ga.dot(this.direction),l=ga.dot(ga)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(c=(t.min.y-y.y)*v,h=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,h=(t.min.y-y.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,p=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,p=(t.min.z-y.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,r,l,c){Cd.subVectors(i,t),$u.subVectors(r,t),wd.crossVectors(Cd,$u);let h=this.direction.dot(wd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ir.subVectors(this.origin,t);const p=d*this.direction.dot($u.crossVectors(ir,$u));if(p<0)return null;const m=d*this.direction.dot(Cd.cross(ir));if(m<0||p+m>h)return null;const v=-d*ir.dot(wd);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,c,h,d,p,m,v,g,y,S,E,b,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,p,m,v,g,y,S,E,b,M)}set(t,i,r,l,c,h,d,p,m,v,g,y,S,E,b,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Gs.setFromMatrixColumn(t,0).length(),c=1/Gs.setFromMatrixColumn(t,1).length(),h=1/Gs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*v,S=h*g,E=d*v,b=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=S+E*m,i[5]=y-b*m,i[9]=-d*p,i[2]=b-y*m,i[6]=E+S*m,i[10]=h*p}else if(t.order==="YXZ"){const y=p*v,S=p*g,E=m*v,b=m*g;i[0]=y+b*d,i[4]=E*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=b+y*d,i[10]=h*p}else if(t.order==="ZXY"){const y=p*v,S=p*g,E=m*v,b=m*g;i[0]=y-b*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=b-y*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const y=h*v,S=h*g,E=d*v,b=d*g;i[0]=p*v,i[4]=E*m-S,i[8]=y*m+b,i[1]=p*g,i[5]=b*m+y,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const y=h*p,S=h*m,E=d*p,b=d*m;i[0]=p*v,i[4]=b-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=S*g+E,i[10]=y-b*g}else if(t.order==="XZY"){const y=h*p,S=h*m,E=d*p,b=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=y*g+b,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=b*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BT,t,IT)}lookAt(t,i,r){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ar.crossVectors(r,si),ar.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ar.crossVectors(r,si)),ar.normalize(),tc.crossVectors(si,ar),l[0]=ar.x,l[4]=tc.x,l[8]=si.x,l[1]=ar.y,l[5]=tc.y,l[9]=si.y,l[2]=ar.z,l[6]=tc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],y=r[9],S=r[13],E=r[2],b=r[6],M=r[10],x=r[14],O=r[3],N=r[7],C=r[11],$=r[15],I=l[0],B=l[4],H=l[8],U=l[12],R=l[1],F=l[5],ot=l[9],nt=l[13],lt=l[2],ht=l[6],V=l[10],ut=l[14],K=l[3],St=l[7],Et=l[11],Bt=l[15];return c[0]=h*I+d*R+p*lt+m*K,c[4]=h*B+d*F+p*ht+m*St,c[8]=h*H+d*ot+p*V+m*Et,c[12]=h*U+d*nt+p*ut+m*Bt,c[1]=v*I+g*R+y*lt+S*K,c[5]=v*B+g*F+y*ht+S*St,c[9]=v*H+g*ot+y*V+S*Et,c[13]=v*U+g*nt+y*ut+S*Bt,c[2]=E*I+b*R+M*lt+x*K,c[6]=E*B+b*F+M*ht+x*St,c[10]=E*H+b*ot+M*V+x*Et,c[14]=E*U+b*nt+M*ut+x*Bt,c[3]=O*I+N*R+C*lt+$*K,c[7]=O*B+N*F+C*ht+$*St,c[11]=O*H+N*ot+C*V+$*Et,c[15]=O*U+N*nt+C*ut+$*Bt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],y=t[10],S=t[14],E=t[3],b=t[7],M=t[11],x=t[15];return E*(+c*p*g-l*m*g-c*d*y+r*m*y+l*d*S-r*p*S)+b*(+i*p*S-i*m*y+c*h*y-l*h*S+l*m*v-c*p*v)+M*(+i*m*g-i*d*S-c*h*g+r*h*S+c*d*v-r*m*v)+x*(-l*d*v-i*p*g+i*d*y+l*h*g-r*h*y+r*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],y=t[10],S=t[11],E=t[12],b=t[13],M=t[14],x=t[15],O=g*M*m-b*y*m+b*p*S-d*M*S-g*p*x+d*y*x,N=E*y*m-v*M*m-E*p*S+h*M*S+v*p*x-h*y*x,C=v*b*m-E*g*m+E*d*S-h*b*S-v*d*x+h*g*x,$=E*g*p-v*b*p-E*d*y+h*b*y+v*d*M-h*g*M,I=i*O+r*N+l*C+c*$;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=O*B,t[1]=(b*y*c-g*M*c-b*l*S+r*M*S+g*l*x-r*y*x)*B,t[2]=(d*M*c-b*p*c+b*l*m-r*M*m-d*l*x+r*p*x)*B,t[3]=(g*p*c-d*y*c-g*l*m+r*y*m+d*l*S-r*p*S)*B,t[4]=N*B,t[5]=(v*M*c-E*y*c+E*l*S-i*M*S-v*l*x+i*y*x)*B,t[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*x-i*p*x)*B,t[7]=(h*y*c-v*p*c+v*l*m-i*y*m-h*l*S+i*p*S)*B,t[8]=C*B,t[9]=(E*g*c-v*b*c-E*r*S+i*b*S+v*r*x-i*g*x)*B,t[10]=(h*b*c-E*d*c+E*r*m-i*b*m-h*r*x+i*d*x)*B,t[11]=(v*d*c-h*g*c-v*r*m+i*g*m+h*r*S-i*d*S)*B,t[12]=$*B,t[13]=(v*b*l-E*g*l+E*r*y-i*b*y-v*r*M+i*g*M)*B,t[14]=(E*d*l-h*b*l-E*r*p+i*b*p+h*r*M-i*d*M)*B,t[15]=(h*g*l-v*d*l+v*r*p-i*g*p-h*r*y+i*d*y)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,p=t.z,m=c*h,v=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*h,0,m*p-l*d,v*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,v=h+h,g=d+d,y=c*m,S=c*v,E=c*g,b=h*v,M=h*g,x=d*g,O=p*m,N=p*v,C=p*g,$=r.x,I=r.y,B=r.z;return l[0]=(1-(b+x))*$,l[1]=(S+C)*$,l[2]=(E-N)*$,l[3]=0,l[4]=(S-C)*I,l[5]=(1-(y+x))*I,l[6]=(M+O)*I,l[7]=0,l[8]=(E+N)*B,l[9]=(M-O)*B,l[10]=(1-(y+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Gs.set(l[0],l[1],l[2]).length();const h=Gs.set(l[4],l[5],l[6]).length(),d=Gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ci.copy(this);const m=1/c,v=1/h,g=1/d;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,i.setFromRotationMatrix(Ci),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Ea){const p=this.elements,m=2*c/(i-t),v=2*c/(r-l),g=(i+t)/(i-t),y=(r+l)/(r-l);let S,E;if(d===Ea)S=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Lc)S=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Ea){const p=this.elements,m=1/(i-t),v=1/(r-l),g=1/(h-c),y=(i+t)*m,S=(r+l)*v;let E,b;if(d===Ea)E=(h+c)*g,b=-2*g;else if(d===Lc)E=c*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Gs=new k,Ci=new Ye,BT=new k(0,0,0),IT=new k(1,1,1),ar=new k,tc=new k,si=new k,G0=new Ye,V0=new Sl;class zi{constructor(t=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Sn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return G0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(G0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return V0.setFromEuler(this),this.setFromQuaternion(V0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FT=0;const X0=new k,Vs=new Sl,va=new Ye,ec=new k,ol=new k,HT=new k,GT=new Sl,q0=new k(1,0,0),k0=new k(0,1,0),Y0=new k(0,0,1),W0={type:"added"},VT={type:"removed"},Xs={type:"childadded",child:null},Dd={type:"childremoved",child:null};class fn extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new k,i=new zi,r=new Sl,l=new k(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new de}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Vs.setFromAxisAngle(t,i),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,i){return Vs.setFromAxisAngle(t,i),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(q0,t)}rotateY(t){return this.rotateOnAxis(k0,t)}rotateZ(t){return this.rotateOnAxis(Y0,t)}translateOnAxis(t,i){return X0.copy(t).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q0,t)}translateY(t){return this.translateOnAxis(k0,t)}translateZ(t){return this.translateOnAxis(Y0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ec.copy(t):ec.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(ol,ec,this.up):va.lookAt(ec,ol,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Vs.setFromRotationMatrix(va),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(W0),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VT),Dd.child=t,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(W0),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,HT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,GT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),v=h(t.images),g=h(t.shapes),y=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}fn.DEFAULT_UP=new k(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new k,_a=new k,Ud=new k,ya=new k,qs=new k,ks=new k,Z0=new k,Nd=new k,Ld=new k,Od=new k,zd=new tn,Pd=new tn,Bd=new tn;class xi{constructor(t=new k,i=new k,r=new k){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),wi.subVectors(t,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){wi.subVectors(l,i),_a.subVectors(r,i),Ud.subVectors(t,i);const h=wi.dot(wi),d=wi.dot(_a),p=wi.dot(Ud),m=_a.dot(_a),v=_a.dot(Ud),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(m*p-d*v)*y,E=(h*v-d*p)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,r,l,c,h,d,p){return this.getBarycoord(t,i,r,l,ya)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ya.x),p.addScaledVector(h,ya.y),p.addScaledVector(d,ya.z),p)}static getInterpolatedAttribute(t,i,r,l,c,h){return zd.setScalar(0),Pd.setScalar(0),Bd.setScalar(0),zd.fromBufferAttribute(t,i),Pd.fromBufferAttribute(t,r),Bd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(zd,c.x),h.addScaledVector(Pd,c.y),h.addScaledVector(Bd,c.z),h}static isFrontFacing(t,i,r,l){return wi.subVectors(r,i),_a.subVectors(t,i),wi.cross(_a).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),wi.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;qs.subVectors(l,r),ks.subVectors(c,r),Nd.subVectors(t,r);const p=qs.dot(Nd),m=ks.dot(Nd);if(p<=0&&m<=0)return i.copy(r);Ld.subVectors(t,l);const v=qs.dot(Ld),g=ks.dot(Ld);if(v>=0&&g<=v)return i.copy(l);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(qs,h);Od.subVectors(t,c);const S=qs.dot(Od),E=ks.dot(Od);if(E>=0&&S<=E)return i.copy(c);const b=S*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ks,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return Z0.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(Z0,d);const x=1/(M+b+y);return h=b*x,d=y*x,i.copy(r).addScaledVector(qs,h).addScaledVector(ks,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Id(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class xe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=im(t,1),i=Sn(i,0,1),r=Sn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Id(h,c,t+1/3),this.g=Id(h,c,t),this.b=Id(h,c,t-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(t,i=yi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=yi){const r=ax[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return we.fromWorkingColorSpace(Ln.copy(this),t),Math.round(Sn(Ln.r*255,0,255))*65536+Math.round(Sn(Ln.g*255,0,255))*256+Math.round(Sn(Ln.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.fromWorkingColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=v<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-r)/g+2;break;case c:p=(r-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=we.workingColorSpace){return we.fromWorkingColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=yi){we.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==yi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+i,rr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(rr),t.getHSL(nc);const r=hl(rr.h,nc.h,i),l=hl(rr.s,nc.s,i),c=hl(rr.l,nc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new xe;xe.NAMES=ax;let XT=0;class dr extends uo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=Qi(),this.name="",this.blending=Js,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ep,this.blendDst=np,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ep&&(r.blendSrc=this.blendSrc),this.blendDst!==np&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rx extends dr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new k,ic=new Nt;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(t),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ui(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ui(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ui(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ui(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hp&&(t.usage=this.usage),t}}class sx extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class ox extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Le extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let qT=0;const _i=new Ye,Fd=new fn,Ys=new k,oi=new Ml,ll=new Ml,xn=new k;class pn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ex(t)?ox:sx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new de().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,r){return _i.makeTranslation(t,i,r),this.applyMatrix4(_i),this}scale(t,i,r){return _i.makeScale(t,i,r),this.applyMatrix4(_i),this}lookAt(t){return Fd.lookAt(t),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Le(r,3))}else{for(let r=0,l=i.count;r<l;r++){const c=t[r];i.setXYZ(r,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];ll.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(oi.min,ll.min),oi.expandByPoint(xn),xn.addVectors(oi.max,ll.max),oi.expandByPoint(xn)):(oi.expandByPoint(ll.min),oi.expandByPoint(ll.max))}oi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)xn.fromBufferAttribute(d,m),p&&(Ys.fromBufferAttribute(t,m),xn.add(Ys)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new k,p[H]=new k;const m=new k,v=new k,g=new k,y=new Nt,S=new Nt,E=new Nt,b=new k,M=new k;function x(H,U,R){m.fromBufferAttribute(r,H),v.fromBufferAttribute(r,U),g.fromBufferAttribute(r,R),y.fromBufferAttribute(c,H),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,R),v.sub(m),g.sub(m),S.sub(y),E.sub(y);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(F),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(F),d[H].add(b),d[U].add(b),d[R].add(b),p[H].add(M),p[U].add(M),p[R].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let H=0,U=O.length;H<U;++H){const R=O[H],F=R.start,ot=R.count;for(let nt=F,lt=F+ot;nt<lt;nt+=3)x(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const N=new k,C=new k,$=new k,I=new k;function B(H){$.fromBufferAttribute(l,H),I.copy($);const U=d[H];N.copy(U),N.sub($.multiplyScalar($.dot(U))).normalize(),C.crossVectors(I,U);const F=C.dot(p[H])<0?-1:1;h.setXYZW(H,N.x,N.y,N.z,F)}for(let H=0,U=O.length;H<U;++H){const R=O[H],F=R.start,ot=R.count;for(let nt=F,lt=F+ot;nt<lt;nt+=3)B(t.getX(nt+0)),B(t.getX(nt+1)),B(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new k,c=new k,h=new k,d=new k,p=new k,m=new k,v=new k,g=new k;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),b=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let S=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*v;for(let x=0;x<v;x++)y[E++]=m[S++]}return new Oi(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pn,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],S=t(y,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const S=m[g];v.push(S.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],g=c[m];for(let y=0,S=g.length;y<S;y++)v.push(g[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,v=h.length;m<v;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new Ye,Ir=new Fc,ac=new El,Q0=new k,rc=new k,sc=new k,oc=new k,Hd=new k,lc=new k,K0=new k,uc=new k;class Ta extends fn{constructor(t=new pn,i=new rx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){lc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Hd.fromBufferAttribute(g,t),h?lc.addScaledVector(Hd,v):lc.addScaledVector(Hd.sub(i),v))}i.add(lc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(c),Ir.copy(t.ray).recast(t.near),!(ac.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(ac,Q0)===null||Ir.origin.distanceToSquared(Q0)>(t.far-t.near)**2))&&(j0.copy(c).invert(),Ir.copy(t.ray).applyMatrix4(j0),!(r.boundingBox!==null&&Ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Ir)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const M=y[E],x=h[M.materialIndex],O=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,$=N;C<$;C+=3){const I=d.getX(C),B=d.getX(C+1),H=d.getX(C+2);l=cc(this,x,t,r,m,v,g,I,B,H),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const O=d.getX(M),N=d.getX(M+1),C=d.getX(M+2);l=cc(this,h,t,r,m,v,g,O,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const M=y[E],x=h[M.materialIndex],O=Math.max(M.start,S.start),N=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,$=N;C<$;C+=3){const I=C,B=C+1,H=C+2;l=cc(this,x,t,r,m,v,g,I,B,H),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const O=M,N=M+1,C=M+2;l=cc(this,h,t,r,m,v,g,O,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function kT(o,t,i,r,l,c,h,d){let p;if(t.side===Zn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,t.side===fr,d),p===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(uc);return m<i.near||m>i.far?null:{distance:m,point:uc.clone(),object:o}}function cc(o,t,i,r,l,c,h,d,p,m){o.getVertexPosition(d,rc),o.getVertexPosition(p,sc),o.getVertexPosition(m,oc);const v=kT(o,t,i,r,rc,sc,oc,K0);if(v){const g=new k;xi.getBarycoord(K0,rc,sc,oc,g),l&&(v.uv=xi.getInterpolatedAttribute(l,d,p,m,g,new Nt)),c&&(v.uv1=xi.getInterpolatedAttribute(c,d,p,m,g,new Nt)),h&&(v.normal=xi.getInterpolatedAttribute(h,d,p,m,g,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new k,materialIndex:0};xi.getNormal(rc,sc,oc,y.normal),v.face=y,v.barycoord=g}return v}class Tl extends pn{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],v=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(g,2));function E(b,M,x,O,N,C,$,I,B,H,U){const R=C/B,F=$/H,ot=C/2,nt=$/2,lt=I/2,ht=B+1,V=H+1;let ut=0,K=0;const St=new k;for(let Et=0;Et<V;Et++){const Bt=Et*F-nt;for(let ie=0;ie<ht;ie++){const _e=ie*R-ot;St[b]=_e*O,St[M]=Bt*N,St[x]=lt,m.push(St.x,St.y,St.z),St[b]=0,St[M]=0,St[x]=I>0?1:-1,v.push(St.x,St.y,St.z),g.push(ie/B),g.push(1-Et/H),ut+=1}}for(let Et=0;Et<H;Et++)for(let Bt=0;Bt<B;Bt++){const ie=y+Bt+ht*Et,_e=y+Bt+ht*(Et+1),D=y+(Bt+1)+ht*(Et+1),Y=y+(Bt+1)+ht*Et;p.push(ie,_e,Y),p.push(_e,D,Y),K+=6}d.addGroup(S,K,U),S+=K,y+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function oo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Gn(o){const t={};for(let i=0;i<o.length;i++){const r=oo(o[i]);for(const l in r)t[l]=r[l]}return t}function YT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function lx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const WT={clone:oo,merge:Gn};var ZT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends dr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oo(t.uniforms),this.uniformsGroups=YT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ux extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new k,J0=new Nt,$0=new Nt;class Di extends ux{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,i){return this.getViewBounds(t,J0,$0),i.subVectors($0,J0)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(to*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ws=-90,Zs=1;class QT extends fn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Ws,Zs,t,i);l.layers=this.layers,this.add(l);const c=new Di(Ws,Zs,t,i);c.layers=this.layers,this.add(c);const h=new Di(Ws,Zs,t,i);h.layers=this.layers,this.add(h);const d=new Di(Ws,Zs,t,i);d.layers=this.layers,this.add(d);const p=new Di(Ws,Zs,t,i);p.layers=this.layers,this.add(p);const m=new Di(Ws,Zs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===Ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,y,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class cx extends jn{constructor(t,i,r,l,c,h,d,p,m,v){t=t!==void 0?t:[],i=i!==void 0?i:io,super(t,i,r,l,c,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class KT extends jr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new cx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ji}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Tl(5,5,5),c=new hr({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:lr});c.uniforms.tEquirect.value=i;const h=new Ta(l,c),d=i.minFilter;return i.minFilter===Wr&&(i.minFilter=ji),new QT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}const Gd=new k,JT=new k,$T=new de;class Vr{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Gd.subVectors(r,i).cross(JT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||$T.getNormalMatrix(t),l=this.coplanarPoint(Gd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new El,fc=new k;class rm{constructor(t=new Vr,i=new Vr,r=new Vr,l=new Vr,c=new Vr,h=new Vr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ea){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],v=l[5],g=l[6],y=l[7],S=l[8],E=l[9],b=l[10],M=l[11],x=l[12],O=l[13],N=l[14],C=l[15];if(r[0].setComponents(p-c,y-m,M-S,C-x).normalize(),r[1].setComponents(p+c,y+m,M+S,C+x).normalize(),r[2].setComponents(p+h,y+v,M+E,C+O).normalize(),r[3].setComponents(p-h,y-v,M-E,C-O).normalize(),r[4].setComponents(p-d,y-g,M-b,C-N).normalize(),i===Ea)r[5].setComponents(p+d,y+g,M+b,C+N).normalize();else if(i===Lc)r[5].setComponents(d,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(t){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(fc.x=l.normal.x>0?t.max.x:t.min.x,fc.y=l.normal.y>0?t.max.y:t.min.y,fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fx(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function t1(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],b=g[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,g[y]=b)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const b=g[S];o.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}class Hc extends pn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,g=t/d,y=i/p,S=[],E=[],b=[],M=[];for(let x=0;x<v;x++){const O=x*y-h;for(let N=0;N<m;N++){const C=N*g-c;E.push(C,-O,0),b.push(0,0,1),M.push(N/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<d;O++){const N=O+m*x,C=O+m*(x+1),$=O+1+m*(x+1),I=O+1+m*x;S.push(N,C,I),S.push(C,$,I)}this.setIndex(S),this.setAttribute("position",new Le(E,3)),this.setAttribute("normal",new Le(b,3)),this.setAttribute("uv",new Le(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U1="gl_FragColor = linearToOutputTexel( gl_FragColor );",N1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:e1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:a1,alphatest_fragment:r1,alphatest_pars_fragment:s1,aomap_fragment:o1,aomap_pars_fragment:l1,batching_pars_vertex:u1,batching_vertex:c1,begin_vertex:f1,beginnormal_vertex:h1,bsdfs:d1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:v1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:y1,color_fragment:x1,color_pars_fragment:S1,color_pars_vertex:M1,color_vertex:E1,common:T1,cube_uv_reflection_fragment:b1,defaultnormal_vertex:A1,displacementmap_pars_vertex:R1,displacementmap_vertex:C1,emissivemap_fragment:w1,emissivemap_pars_fragment:D1,colorspace_fragment:U1,colorspace_pars_fragment:N1,envmap_fragment:L1,envmap_common_pars_fragment:O1,envmap_pars_fragment:z1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:W1,envmap_vertex:B1,fog_vertex:I1,fog_pars_vertex:F1,fog_fragment:H1,fog_pars_fragment:G1,gradientmap_pars_fragment:V1,lightmap_pars_fragment:X1,lights_lambert_fragment:q1,lights_lambert_pars_fragment:k1,lights_pars_begin:Y1,lights_toon_fragment:Z1,lights_toon_pars_fragment:j1,lights_phong_fragment:Q1,lights_phong_pars_fragment:K1,lights_physical_fragment:J1,lights_physical_pars_fragment:$1,lights_fragment_begin:tb,lights_fragment_maps:eb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:sb,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:ub,map_particle_pars_fragment:cb,metalnessmap_fragment:fb,metalnessmap_pars_fragment:hb,morphinstance_vertex:db,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:vb,normal_fragment_begin:_b,normal_fragment_maps:yb,normal_pars_fragment:xb,normal_pars_vertex:Sb,normal_vertex:Mb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:Cb,packing:wb,premultiplied_alpha_fragment:Db,project_vertex:Ub,dithering_fragment:Nb,dithering_pars_fragment:Lb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Bb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Fb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Vb,skinnormal_vertex:Xb,specularmap_fragment:qb,specularmap_pars_fragment:kb,tonemapping_fragment:Yb,tonemapping_pars_fragment:Wb,transmission_fragment:Zb,transmission_pars_fragment:jb,uv_pars_fragment:Qb,uv_pars_vertex:Kb,uv_vertex:Jb,worldpos_vertex:$b,background_vert:tA,background_frag:eA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:aA,cube_frag:rA,depth_vert:sA,depth_frag:oA,distanceRGBA_vert:lA,distanceRGBA_frag:uA,equirect_vert:cA,equirect_frag:fA,linedashed_vert:hA,linedashed_frag:dA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:vA,meshmatcap_vert:_A,meshmatcap_frag:yA,meshnormal_vert:xA,meshnormal_frag:SA,meshphong_vert:MA,meshphong_frag:EA,meshphysical_vert:TA,meshphysical_frag:bA,meshtoon_vert:AA,meshtoon_frag:RA,points_vert:CA,points_frag:wA,shadow_vert:DA,shadow_frag:UA,sprite_vert:NA,sprite_frag:LA},Pt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([Pt.points,Pt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([Pt.common,Pt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([Pt.sprite,Pt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([Pt.lights,Pt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const hc={r:0,b:0,g:0},Hr=new zi,OA=new Ye;function zA(o,t,i,r,l,c,h){const d=new xe(0);let p=c===!0?0:1,m,v,g=null,y=0,S=null;function E(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:t).get(N)),N}function b(O){let N=!1;const C=E(O);C===null?x(d,p):C&&C.isColor&&(x(C,1),N=!0);const $=o.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,h):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,N){const C=E(N);C&&(C.isCubeTexture||C.mapping===Bc)?(v===void 0&&(v=new Ta(new Tl(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:oo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function($,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Hr.copy(N.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Hr)),v.material.toneMapped=we.getTransfer(C.colorSpace)!==Ge,(g!==C||y!==C.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,g=C,y=C.version,S=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ta(new Hc(2,2),new hr({name:"BackgroundMaterial",uniforms:oo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=we.getTransfer(C.colorSpace)!==Ge,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||y!==C.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=C,y=C.version,S=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function x(O,N){O.getRGB(hc,lx(o)),r.buffers.color.setClear(hc.r,hc.g,hc.b,N,h)}return{getClearColor:function(){return d},setClearColor:function(O,N=1){d.set(O),p=N,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,x(d,p)},render:b,addToRenderList:M}}function PA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(R,F,ot,nt,lt){let ht=!1;const V=g(nt,ot,F);c!==V&&(c=V,m(c.object)),ht=S(R,nt,ot,lt),ht&&E(R,nt,ot,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,C(R,F,ot,nt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function g(R,F,ot){const nt=ot.wireframe===!0;let lt=r[R.id];lt===void 0&&(lt={},r[R.id]=lt);let ht=lt[F.id];ht===void 0&&(ht={},lt[F.id]=ht);let V=ht[nt];return V===void 0&&(V=y(p()),ht[nt]=V),V}function y(R){const F=[],ot=[],nt=[];for(let lt=0;lt<i;lt++)F[lt]=0,ot[lt]=0,nt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ot,attributeDivisors:nt,object:R,attributes:{},index:null}}function S(R,F,ot,nt){const lt=c.attributes,ht=F.attributes;let V=0;const ut=ot.getAttributes();for(const K in ut)if(ut[K].location>=0){const Et=lt[K];let Bt=ht[K];if(Bt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Bt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Bt=R.instanceColor)),Et===void 0||Et.attribute!==Bt||Bt&&Et.data!==Bt.data)return!0;V++}return c.attributesNum!==V||c.index!==nt}function E(R,F,ot,nt){const lt={},ht=F.attributes;let V=0;const ut=ot.getAttributes();for(const K in ut)if(ut[K].location>=0){let Et=ht[K];Et===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor));const Bt={};Bt.attribute=Et,Et&&Et.data&&(Bt.data=Et.data),lt[K]=Bt,V++}c.attributes=lt,c.attributesNum=V,c.index=nt}function b(){const R=c.newAttributes;for(let F=0,ot=R.length;F<ot;F++)R[F]=0}function M(R){x(R,0)}function x(R,F){const ot=c.newAttributes,nt=c.enabledAttributes,lt=c.attributeDivisors;ot[R]=1,nt[R]===0&&(o.enableVertexAttribArray(R),nt[R]=1),lt[R]!==F&&(o.vertexAttribDivisor(R,F),lt[R]=F)}function O(){const R=c.newAttributes,F=c.enabledAttributes;for(let ot=0,nt=F.length;ot<nt;ot++)F[ot]!==R[ot]&&(o.disableVertexAttribArray(ot),F[ot]=0)}function N(R,F,ot,nt,lt,ht,V){V===!0?o.vertexAttribIPointer(R,F,ot,lt,ht):o.vertexAttribPointer(R,F,ot,nt,lt,ht)}function C(R,F,ot,nt){b();const lt=nt.attributes,ht=ot.getAttributes(),V=F.defaultAttributeValues;for(const ut in ht){const K=ht[ut];if(K.location>=0){let St=lt[ut];if(St===void 0&&(ut==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),ut==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const Et=St.normalized,Bt=St.itemSize,ie=t.get(St);if(ie===void 0)continue;const _e=ie.buffer,D=ie.type,Y=ie.bytesPerElement,vt=D===o.INT||D===o.UNSIGNED_INT||St.gpuType===Qp;if(St.isInterleavedBufferAttribute){const ct=St.data,Ct=ct.stride,Lt=St.offset;if(ct.isInstancedInterleavedBuffer){for(let Ut=0;Ut<K.locationSize;Ut++)x(K.location+Ut,ct.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ut=0;Ut<K.locationSize;Ut++)M(K.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ut=0;Ut<K.locationSize;Ut++)N(K.location+Ut,Bt/K.locationSize,D,Et,Ct*Y,(Lt+Bt/K.locationSize*Ut)*Y,vt)}else{if(St.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)x(K.location+ct,St.meshPerAttribute);R.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ct=0;ct<K.locationSize;ct++)M(K.location+ct);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ct=0;ct<K.locationSize;ct++)N(K.location+ct,Bt/K.locationSize,D,Et,Bt*Y,Bt/K.locationSize*ct*Y,vt)}}else if(V!==void 0){const Et=V[ut];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(K.location,Et);break;case 3:o.vertexAttrib3fv(K.location,Et);break;case 4:o.vertexAttrib4fv(K.location,Et);break;default:o.vertexAttrib1fv(K.location,Et)}}}}O()}function $(){H();for(const R in r){const F=r[R];for(const ot in F){const nt=F[ot];for(const lt in nt)v(nt[lt].object),delete nt[lt];delete F[ot]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const ot in F){const nt=F[ot];for(const lt in nt)v(nt[lt].object),delete nt[lt];delete F[ot]}delete r[R.id]}function B(R){for(const F in r){const ot=r[F];if(ot[R.id]===void 0)continue;const nt=ot[R.id];for(const lt in nt)v(nt[lt].object),delete nt[lt];delete ot[R.id]}}function H(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:U,dispose:$,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:M,disableUnusedAttributes:O}}function BA(o,t,i){let r;function l(m){r=m}function c(m,v){o.drawArrays(r,m,v),i.update(v,r,1)}function h(m,v,g){g!==0&&(o.drawArraysInstanced(r,m,v,g),i.update(v,r,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,r,1)}function p(m,v,g,y){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)h(m[E],v[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,y,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function IA(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ni&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const H=B===xl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Aa&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ma&&!H)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:$,maxSamples:I}}function FA(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Vr,d=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):m();else{const O=c?0:r,N=O*4;let C=x.clippingState||null;p.value=C,C=v(E,y,N,S);for(let $=0;$!==N;++$)C[$]=i[$];x.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,y,S,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const x=S+b*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,C=S;N!==b;++N,C+=4)h.copy(g[N]).applyMatrix4(O,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function HA(o){let t=new WeakMap;function i(h,d){return d===cp?h.mapping=io:d===fp&&(h.mapping=ao),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===cp||d===fp)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new KT(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class hx extends ux{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Qs=4,ty=[.125,.215,.35,.446,.526,.582],kr=20,Vd=new hx,ey=new xe;let Xd=null,qd=0,kd=0,Yd=!1;const Xr=(1+Math.sqrt(5))/2,js=1/Xr,ny=[new k(-Xr,js,0),new k(Xr,js,0),new k(-js,0,Xr),new k(js,0,Xr),new k(0,Xr,-js),new k(0,Xr,js),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class iy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ry(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xd,qd,kd),this._renderer.xr.enabled=Yd,t.scissorTest=!1,dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===io||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:xl,format:Ni,colorSpace:lo,depthBuffer:!1},l=ay(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ay(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GA(c)),this._blurMaterial=VA(c,t,i)}return l}_compileMaterial(t){const i=new Ta(this._lodPlanes[0],t);this._renderer.compile(i,Vd)}_sceneToCubeUV(t,i,r,l){const d=new Di(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(ey),v.toneMapping=ur,v.autoClear=!1;const S=new rx({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),E=new Ta(new Tl,S);let b=!1;const M=t.background;M?M.isColor&&(S.color.copy(M),t.background=null,b=!0):(S.color.copy(ey),b=!0);for(let x=0;x<6;x++){const O=x%3;O===0?(d.up.set(0,p[x],0),d.lookAt(m[x],0,0)):O===1?(d.up.set(0,0,p[x]),d.lookAt(0,m[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,m[x]));const N=this._cubeSize;dc(l,O*N,x>2?N:0,N,N),v.setRenderTarget(l),b&&v.render(E,d),v.render(t,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=y,v.autoClear=g,t.background=M}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===io||t.mapping===ao;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ry());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ta(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;dc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Vd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=ny[(l-c-1)%ny.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Ta(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*kr-1),b=c/E,M=isFinite(c)?1+Math.floor(v*b):kr;M>kr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${kr}`);const x=[];let O=0;for(let B=0;B<kr;++B){const H=B/b,U=Math.exp(-H*H/2);x.push(U),B===0?O+=U:B<M&&(O+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-r;const C=this._sizeLods[l],$=3*C*(l>N-Qs?l-N+Qs:0),I=4*(this._cubeSize-C);dc(i,$,I,3*C,2*C),p.setRenderTarget(i),p.render(g,Vd)}}function GA(o){const t=[],i=[],r=[];let l=o;const c=o-Qs+1+ty.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-Qs?p=ty[h-o+Qs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,b=3,M=2,x=1,O=new Float32Array(b*E*S),N=new Float32Array(M*E*S),C=new Float32Array(x*E*S);for(let I=0;I<S;I++){const B=I%3*2/3-1,H=I>2?0:-1,U=[B,H,0,B+2/3,H,0,B+2/3,H+1,0,B,H,0,B+2/3,H+1,0,B,H+1,0];O.set(U,b*E*I),N.set(y,M*E*I);const R=[I,I,I,I,I,I];C.set(R,x*E*I)}const $=new pn;$.setAttribute("position",new Oi(O,b)),$.setAttribute("uv",new Oi(N,M)),$.setAttribute("faceIndex",new Oi(C,x)),t.push($),l>Qs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function ay(o,t,i){const r=new jr(o,t,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function VA(o,t,i){const r=new Float32Array(kr),l=new k(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ry(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function sy(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function sm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XA(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===cp||p===fp,v=p===io||p===ao;if(m||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new iy(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new iy(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function qA(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function kA(o,t,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);for(const E in y.morphAttributes){const b=y.morphAttributes[E];for(let M=0,x=b.length;M<x;M++)t.remove(b[M])}y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const E in y)t.update(y[E],o.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const b=S[E];for(let M=0,x=b.length;M<x;M++)t.update(b[M],o.ARRAY_BUFFER)}}function m(g){const y=[],S=g.index,E=g.attributes.position;let b=0;if(S!==null){const O=S.array;b=S.version;for(let N=0,C=O.length;N<C;N+=3){const $=O[N+0],I=O[N+1],B=O[N+2];y.push($,I,I,B,B,$)}}else if(E!==void 0){const O=E.array;b=E.version;for(let N=0,C=O.length/3-1;N<C;N+=3){const $=N+0,I=N+1,B=N+2;y.push($,I,I,B,B,$)}}else return;const M=new(ex(y)?ox:sx)(y,1);M.version=b;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function v(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function YA(o,t,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function m(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*h,E),i.update(S,r,E))}function v(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(y,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)m(y[x]/h,S[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,b,0,E);let x=0;for(let O=0;O<E;O++)x+=S[O]*b[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function WA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ZA(o,t,i){const r=new WeakMap,l=new tn;function c(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let U=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",U)};y!==void 0&&y.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;S===!0&&(N=1),E===!0&&(N=2),b===!0&&(N=3);let C=d.attributes.position.count*N,$=1;C>t.maxTextureSize&&($=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const I=new Float32Array(C*$*4*g),B=new ix(I,C,$,g);B.type=Ma,B.needsUpdate=!0;const H=N*4;for(let R=0;R<g;R++){const F=M[R],ot=x[R],nt=O[R],lt=C*$*4*R;for(let ht=0;ht<F.count;ht++){const V=ht*H;S===!0&&(l.fromBufferAttribute(F,ht),I[lt+V+0]=l.x,I[lt+V+1]=l.y,I[lt+V+2]=l.z,I[lt+V+3]=0),E===!0&&(l.fromBufferAttribute(ot,ht),I[lt+V+4]=l.x,I[lt+V+5]=l.y,I[lt+V+6]=l.z,I[lt+V+7]=0),b===!0&&(l.fromBufferAttribute(nt,ht),I[lt+V+8]=l.x,I[lt+V+9]=l.y,I[lt+V+10]=l.z,I[lt+V+11]=nt.itemSize===4?l.w:1)}}y={count:g,texture:B,size:new Nt(C,$)},r.set(d,y),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let S=0;for(let b=0;b<m.length;b++)S+=m[b];const E=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function jA(o,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}class dx extends jn{constructor(t,i,r,l,c,h,d,p,m,v=$s){if(v!==$s&&v!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===$s&&(r=Zr),r===void 0&&v===so&&(r=ro),super(null,l,c,h,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Li,this.minFilter=p!==void 0?p:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const px=new jn,oy=new dx(1,1),mx=new ix,gx=new zT,vx=new cx,ly=[],uy=[],cy=new Float32Array(16),fy=new Float32Array(9),hy=new Float32Array(4);function co(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=ly[l];if(c===void 0&&(c=new Float32Array(l),ly[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Gc(o,t){let i=uy[t];i===void 0&&(i=new Int32Array(t),uy[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function QA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function KA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function JA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function $A(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function tR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;hy.set(r),o.uniformMatrix2fv(this.addr,!1,hy),dn(i,r)}}function eR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;fy.set(r),o.uniformMatrix3fv(this.addr,!1,fy),dn(i,r)}}function nR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;cy.set(r),o.uniformMatrix4fv(this.addr,!1,cy),dn(i,r)}}function iR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function aR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function rR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function sR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function oR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function uR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function cR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function fR(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(oy.compareFunction=tx,c=oy):c=px,i.setTexture2D(t||c,l)}function hR(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||gx,l)}function dR(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||vx,l)}function pR(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||mx,l)}function mR(o){switch(o){case 5126:return QA;case 35664:return KA;case 35665:return JA;case 35666:return $A;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return lR;case 36295:return uR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(o,t){o.uniform1fv(this.addr,t)}function vR(o,t){const i=co(t,this.size,2);o.uniform2fv(this.addr,i)}function _R(o,t){const i=co(t,this.size,3);o.uniform3fv(this.addr,i)}function yR(o,t){const i=co(t,this.size,4);o.uniform4fv(this.addr,i)}function xR(o,t){const i=co(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function SR(o,t){const i=co(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MR(o,t){const i=co(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ER(o,t){o.uniform1iv(this.addr,t)}function TR(o,t){o.uniform2iv(this.addr,t)}function bR(o,t){o.uniform3iv(this.addr,t)}function AR(o,t){o.uniform4iv(this.addr,t)}function RR(o,t){o.uniform1uiv(this.addr,t)}function CR(o,t){o.uniform2uiv(this.addr,t)}function wR(o,t){o.uniform3uiv(this.addr,t)}function DR(o,t){o.uniform4uiv(this.addr,t)}function UR(o,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||px,c[h])}function NR(o,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||gx,c[h])}function LR(o,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||vx,c[h])}function OR(o,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||mx,c[h])}function zR(o){switch(o){case 5126:return gR;case 35664:return vR;case 35665:return _R;case 35666:return yR;case 35674:return xR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return TR;case 35668:case 35672:return bR;case 35669:case 35673:return AR;case 5125:return RR;case 36294:return CR;case 36295:return wR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return OR}}class PR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mR(i.type)}}class BR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zR(i.type)}}class IR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function dy(o,t){o.seq.push(t),o.map[t.id]=t}function FR(o,t,i){const r=o.name,l=r.length;for(Wd.lastIndex=0;;){const c=Wd.exec(r),h=Wd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){dy(i,m===void 0?new PR(d,o,t):new BR(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new IR(d),dy(i,g)),i=g}}}class Nc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);FR(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function py(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const HR=37297;let GR=0;function VR(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const my=new de;function XR(o){we._getMatrix(my,we.workingColorSpace,o);const t=`mat3( ${my.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Ic:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function gy(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+VR(o.getShaderSource(t),h)}else return l}function qR(o,t){const i=XR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function kR(o,t){let i;switch(t){case WE:i="Linear";break;case ZE:i="Reinhard";break;case jE:i="Cineon";break;case QE:i="ACESFilmic";break;case JE:i="AgX";break;case $E:i="Neutral";break;case KE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new k;function YR(){we.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),t=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function ZR(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function jR(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function fl(o){return o!==""}function vy(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _y(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(o){return o.replace(QR,JR)}const KR=new Map;function JR(o,t){let i=me[t];if(i===void 0){const r=KR.get(t);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Gp(i)}const $R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yy(o){return o.replace($R,tC)}function tC(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xy(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Vy?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===AE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===xa&&(t="SHADOWMAP_TYPE_VSM"),t}function nC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case io:case ao:t="ENVMAP_TYPE_CUBE";break;case Bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iC(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===ao&&(t="ENVMAP_MODE_REFRACTION"),t}function aC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case jp:t="ENVMAP_BLENDING_MULTIPLY";break;case kE:t="ENVMAP_BLENDING_MIX";break;case YE:t="ENVMAP_BLENDING_ADD";break}return t}function rC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function sC(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=eC(i),m=nC(i),v=iC(i),g=aC(i),y=rC(i),S=WR(i),E=ZR(c),b=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(fl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(fl).join(`
`),x.length>0&&(x+=`
`)):(M=[xy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),x=[xy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ur?"#define TONE_MAPPING":"",i.toneMapping!==ur?me.tonemapping_pars_fragment:"",i.toneMapping!==ur?kR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,qR("linearToOutputTexel",i.outputColorSpace),YR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),h=Gp(h),h=vy(h,i),h=_y(h,i),d=Gp(d),d=vy(d,i),d=_y(d,i),h=yy(h),d=yy(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=O+M+h,C=O+x+d,$=py(l,l.VERTEX_SHADER,N),I=py(l,l.FRAGMENT_SHADER,C);l.attachShader(b,$),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(F){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(b).trim(),nt=l.getShaderInfoLog($).trim(),lt=l.getShaderInfoLog(I).trim();let ht=!0,V=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,$,I);else{const ut=gy(l,$,"vertex"),K=gy(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+ut+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(nt===""||lt==="")&&(V=!1);V&&(F.diagnostics={runnable:ht,programLog:ot,vertexShader:{log:nt,prefix:M},fragmentShader:{log:lt,prefix:x}})}l.deleteShader($),l.deleteShader(I),H=new Nc(l,b),U=jR(l,b)}let H;this.getUniforms=function(){return H===void 0&&B(this),H};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(b,HR)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=$,this.fragmentShader=I,this}let oC=0;class lC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new uC(t),i.set(t,r)),r}}class uC{constructor(t){this.id=oC++,this.code=t,this.usedTimes=0}}function cC(o,t,i,r,l,c,h){const d=new am,p=new lC,m=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,R,F,ot,nt){const lt=ot.fog,ht=nt.geometry,V=U.isMeshStandardMaterial?ot.environment:null,ut=(U.isMeshStandardMaterial?i:t).get(U.envMap||V),K=ut&&ut.mapping===Bc?ut.image.height:null,St=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const Et=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Bt=Et!==void 0?Et.length:0;let ie=0;ht.morphAttributes.position!==void 0&&(ie=1),ht.morphAttributes.normal!==void 0&&(ie=2),ht.morphAttributes.color!==void 0&&(ie=3);let _e,D,Y,vt;if(St){const be=Zi[St];_e=be.vertexShader,D=be.fragmentShader}else _e=U.vertexShader,D=U.fragmentShader,p.update(U),Y=p.getVertexShaderID(U),vt=p.getFragmentShaderID(U);const ct=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Lt=nt.isInstancedMesh===!0,Ut=nt.isBatchedMesh===!0,bt=!!U.map,at=!!U.matcap,Tt=!!ut,P=!!U.aoMap,Wt=!!U.lightMap,Mt=!!U.bumpMap,wt=!!U.normalMap,yt=!!U.displacementMap,$t=!!U.emissiveMap,Vt=!!U.metalnessMap,L=!!U.roughnessMap,A=U.anisotropy>0,et=U.clearcoat>0,pt=U.dispersion>0,xt=U.iridescence>0,gt=U.sheen>0,jt=U.transmission>0,Ot=A&&!!U.anisotropyMap,zt=et&&!!U.clearcoatMap,pe=et&&!!U.clearcoatNormalMap,At=et&&!!U.clearcoatRoughnessMap,Yt=xt&&!!U.iridescenceMap,ae=xt&&!!U.iridescenceThicknessMap,se=gt&&!!U.sheenColorMap,kt=gt&&!!U.sheenRoughnessMap,ye=!!U.specularMap,ce=!!U.specularColorMap,Fe=!!U.specularIntensityMap,X=jt&&!!U.transmissionMap,It=jt&&!!U.thicknessMap,ft=!!U.gradientMap,_t=!!U.alphaMap,Ft=U.alphaTest>0,Xt=!!U.alphaHash,le=!!U.extensions;let Ze=ur;U.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ze=o.toneMapping);const mn={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:_e,fragmentShader:D,defines:U.defines,customVertexShaderID:Y,customFragmentShaderID:vt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Ut,batchingColor:Ut&&nt._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&nt.instanceColor!==null,instancingMorph:Lt&&nt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:lo,alphaToCoverage:!!U.alphaToCoverage,map:bt,matcap:at,envMap:Tt,envMapMode:Tt&&ut.mapping,envMapCubeUVHeight:K,aoMap:P,lightMap:Wt,bumpMap:Mt,normalMap:wt,displacementMap:y&&yt,emissiveMap:$t,normalMapObjectSpace:wt&&U.normalMapType===iT,normalMapTangentSpace:wt&&U.normalMapType===nm,metalnessMap:Vt,roughnessMap:L,anisotropy:A,anisotropyMap:Ot,clearcoat:et,clearcoatMap:zt,clearcoatNormalMap:pe,clearcoatRoughnessMap:At,dispersion:pt,iridescence:xt,iridescenceMap:Yt,iridescenceThicknessMap:ae,sheen:gt,sheenColorMap:se,sheenRoughnessMap:kt,specularMap:ye,specularColorMap:ce,specularIntensityMap:Fe,transmission:jt,transmissionMap:X,thicknessMap:It,gradientMap:ft,opaque:U.transparent===!1&&U.blending===Js&&U.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ft,alphaHash:Xt,combine:U.combine,mapUv:bt&&b(U.map.channel),aoMapUv:P&&b(U.aoMap.channel),lightMapUv:Wt&&b(U.lightMap.channel),bumpMapUv:Mt&&b(U.bumpMap.channel),normalMapUv:wt&&b(U.normalMap.channel),displacementMapUv:yt&&b(U.displacementMap.channel),emissiveMapUv:$t&&b(U.emissiveMap.channel),metalnessMapUv:Vt&&b(U.metalnessMap.channel),roughnessMapUv:L&&b(U.roughnessMap.channel),anisotropyMapUv:Ot&&b(U.anisotropyMap.channel),clearcoatMapUv:zt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:pe&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:se&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:kt&&b(U.sheenRoughnessMap.channel),specularMapUv:ye&&b(U.specularMap.channel),specularColorMapUv:ce&&b(U.specularColorMap.channel),specularIntensityMapUv:Fe&&b(U.specularIntensityMap.channel),transmissionMapUv:X&&b(U.transmissionMap.channel),thicknessMapUv:It&&b(U.thicknessMap.channel),alphaMapUv:_t&&b(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(wt||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ht.attributes.uv&&(bt||_t),fog:!!lt,useFog:U.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ct,skinning:nt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ze,decodeVideoTexture:bt&&U.map.isVideoTexture===!0&&we.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:$t&&U.emissiveMap.isVideoTexture===!0&&we.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Sa,flipSided:U.side===Zn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:le&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&U.extensions.multiDraw===!0||Ut)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return mn.vertexUv1s=m.has(1),mn.vertexUv2s=m.has(2),mn.vertexUv3s=m.has(3),m.clear(),mn}function x(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const F in U.defines)R.push(F),R.push(U.defines[F]);return U.isRawShaderMaterial===!1&&(O(R,U),N(R,U),R.push(o.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function O(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function N(U,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const R=E[U.type];let F;if(R){const ot=Zi[R];F=WT.clone(ot.uniforms)}else F=U.uniforms;return F}function $(U,R){let F;for(let ot=0,nt=v.length;ot<nt;ot++){const lt=v[ot];if(lt.cacheKey===R){F=lt,++F.usedTimes;break}}return F===void 0&&(F=new sC(o,R,U,c),v.push(F)),F}function I(U){if(--U.usedTimes===0){const R=v.indexOf(U);v[R]=v[v.length-1],v.pop(),U.destroy()}}function B(U){p.remove(U)}function H(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:$,releaseProgram:I,releaseShaderCache:B,programs:v,dispose:H}}function fC(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function hC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Sy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function My(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,E,b,M){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},o[t]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=b,x.group=M),t++,x}function d(g,y,S,E,b,M){const x=h(g,y,S,E,b,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(g,y,S,E,b,M){const x=h(g,y,S,E,b,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function m(g,y){i.length>1&&i.sort(g||hC),r.length>1&&r.sort(y||Sy),l.length>1&&l.sort(y||Sy)}function v(){for(let g=t,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function dC(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new My,o.set(r,[h])):l>=c.length?(h=new My,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function pC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new xe};break;case"SpotLight":i={position:new k,direction:new k,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=i,i}}}function mC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let gC=0;function vC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _C(o){const t=new pC,i=mC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new k);const l=new k,c=new Ye,h=new Ye;function d(m){let v=0,g=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,b=0,M=0,x=0,O=0,N=0,C=0,$=0,I=0,B=0;m.sort(vC);for(let U=0,R=m.length;U<R;U++){const F=m[U],ot=F.color,nt=F.intensity,lt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=ot.r*nt,g+=ot.g*nt,y+=ot.b*nt;else if(F.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(F.sh.coefficients[V],nt);B++}else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ut=F.shadow,K=i.get(F);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,r.directionalShadow[S]=K,r.directionalShadowMap[S]=ht,r.directionalShadowMatrix[S]=F.shadow.matrix,O++}r.directional[S]=V,S++}else if(F.isSpotLight){const V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(ot).multiplyScalar(nt),V.distance=lt,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,r.spot[b]=V;const ut=F.shadow;if(F.map&&(r.spotLightMap[$]=F.map,$++,ut.updateMatrices(F),F.castShadow&&I++),r.spotLightMatrix[b]=ut.matrix,F.castShadow){const K=i.get(F);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,r.spotShadow[b]=K,r.spotShadowMap[b]=ht,C++}b++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(ot).multiplyScalar(nt),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=V,M++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const ut=F.shadow,K=i.get(F);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,K.shadowCameraNear=ut.camera.near,K.shadowCameraFar=ut.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=ht,r.pointShadowMatrix[E]=F.shadow.matrix,N++}r.point[E]=V,E++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(nt),V.groundColor.copy(F.groundColor).multiplyScalar(nt),r.hemi[x]=V,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=y;const H=r.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==b||H.rectAreaLength!==M||H.hemiLength!==x||H.numDirectionalShadows!==O||H.numPointShadows!==N||H.numSpotShadows!==C||H.numSpotMaps!==$||H.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+$-I,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,H.directionalLength=S,H.pointLength=E,H.spotLength=b,H.rectAreaLength=M,H.hemiLength=x,H.numDirectionalShadows=O,H.numPointShadows=N,H.numSpotShadows=C,H.numSpotMaps=$,H.numLightProbes=B,r.version=gC++)}function p(m,v){let g=0,y=0,S=0,E=0,b=0;const M=v.matrixWorldInverse;for(let x=0,O=m.length;x<O;x++){const N=m[x];if(N.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),g++}else if(N.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:r}}function Ey(o){const t=new _C(o),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function yC(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Ey(o),t.set(l,[d])):c>=h.length?(d=new Ey(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}class xC extends dr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=eT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SC extends dr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const MC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TC(o,t,i){let r=new rm;const l=new Nt,c=new Nt,h=new tn,d=new xC({depthPacking:nT}),p=new SC,m={},v=i.maxTextureSize,g={[fr]:Zn,[Zn]:fr,[Sa]:Sa},y=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:MC,fragmentShader:EC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new pn;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ta(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vy;let x=this.type;this.render=function(I,B,H){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const U=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(lr),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const nt=x!==xa&&this.type===xa,lt=x===xa&&this.type!==xa;for(let ht=0,V=I.length;ht<V;ht++){const ut=I[ht],K=ut.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const St=K.getFrameExtents();if(l.multiply(St),c.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,K.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,K.mapSize.y=c.y)),K.map===null||nt===!0||lt===!0){const Bt=this.type!==xa?{minFilter:Li,magFilter:Li}:{};K.map!==null&&K.map.dispose(),K.map=new jr(l.x,l.y,Bt),K.map.texture.name=ut.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const Et=K.getViewportCount();for(let Bt=0;Bt<Et;Bt++){const ie=K.getViewport(Bt);h.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ot.viewport(h),K.updateMatrices(ut,Bt),r=K.getFrustum(),C(B,H,K.camera,ut,this.type)}K.isPointLightShadow!==!0&&this.type===xa&&O(K,H),K.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(U,R,F)};function O(I,B){const H=t.update(b);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new jr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,H,y,b,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,H,S,b,null)}function N(I,B,H,U){let R=null;const F=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)R=F;else if(R=H.isPointLight===!0?p:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ot=R.uuid,nt=B.uuid;let lt=m[ot];lt===void 0&&(lt={},m[ot]=lt);let ht=lt[nt];ht===void 0&&(ht=R.clone(),lt[nt]=ht,B.addEventListener("dispose",$)),R=ht}if(R.visible=B.visible,R.wireframe=B.wireframe,U===xa?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ot=o.properties.get(R);ot.light=H}return R}function C(I,B,H,U,R){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===xa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const nt=t.update(I),lt=I.material;if(Array.isArray(lt)){const ht=nt.groups;for(let V=0,ut=ht.length;V<ut;V++){const K=ht[V],St=lt[K.materialIndex];if(St&&St.visible){const Et=N(I,St,U,R);I.onBeforeShadow(o,I,B,H,nt,Et,K),o.renderBufferDirect(H,null,nt,Et,I,K),I.onAfterShadow(o,I,B,H,nt,Et,K)}}}else if(lt.visible){const ht=N(I,lt,U,R);I.onBeforeShadow(o,I,B,H,nt,ht,null),o.renderBufferDirect(H,null,nt,ht,I,null),I.onAfterShadow(o,I,B,H,nt,ht,null)}}const ot=I.children;for(let nt=0,lt=ot.length;nt<lt;nt++)C(ot[nt],B,H,U,R)}function $(I){I.target.removeEventListener("dispose",$);for(const H in m){const U=m[H],R=I.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const bC={[ip]:ap,[rp]:lp,[sp]:up,[no]:op,[ap]:ip,[lp]:rp,[up]:sp,[op]:no};function AC(o,t){function i(){let X=!1;const It=new tn;let ft=null;const _t=new tn(0,0,0,0);return{setMask:function(Ft){ft!==Ft&&!X&&(o.colorMask(Ft,Ft,Ft,Ft),ft=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,Xt,le,Ze,mn){mn===!0&&(Ft*=Ze,Xt*=Ze,le*=Ze),It.set(Ft,Xt,le,Ze),_t.equals(It)===!1&&(o.clearColor(Ft,Xt,le,Ze),_t.copy(It))},reset:function(){X=!1,ft=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,It=!1,ft=null,_t=null,Ft=null;return{setReversed:function(Xt){if(It!==Xt){const le=t.get("EXT_clip_control");It?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const Ze=Ft;Ft=null,this.setClear(Ze)}It=Xt},getReversed:function(){return It},setTest:function(Xt){Xt?ct(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Xt){ft!==Xt&&!X&&(o.depthMask(Xt),ft=Xt)},setFunc:function(Xt){if(It&&(Xt=bC[Xt]),_t!==Xt){switch(Xt){case ip:o.depthFunc(o.NEVER);break;case ap:o.depthFunc(o.ALWAYS);break;case rp:o.depthFunc(o.LESS);break;case no:o.depthFunc(o.LEQUAL);break;case sp:o.depthFunc(o.EQUAL);break;case op:o.depthFunc(o.GEQUAL);break;case lp:o.depthFunc(o.GREATER);break;case up:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Xt}},setLocked:function(Xt){X=Xt},setClear:function(Xt){Ft!==Xt&&(It&&(Xt=1-Xt),o.clearDepth(Xt),Ft=Xt)},reset:function(){X=!1,ft=null,_t=null,Ft=null,It=!1}}}function l(){let X=!1,It=null,ft=null,_t=null,Ft=null,Xt=null,le=null,Ze=null,mn=null;return{setTest:function(be){X||(be?ct(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(be){It!==be&&!X&&(o.stencilMask(be),It=be)},setFunc:function(be,We,gn){(ft!==be||_t!==We||Ft!==gn)&&(o.stencilFunc(be,We,gn),ft=be,_t=We,Ft=gn)},setOp:function(be,We,gn){(Xt!==be||le!==We||Ze!==gn)&&(o.stencilOp(be,We,gn),Xt=be,le=We,Ze=gn)},setLocked:function(be){X=be},setClear:function(be){mn!==be&&(o.clearStencil(be),mn=be)},reset:function(){X=!1,It=null,ft=null,_t=null,Ft=null,Xt=null,le=null,Ze=null,mn=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,S=[],E=null,b=!1,M=null,x=null,O=null,N=null,C=null,$=null,I=null,B=new xe(0,0,0),H=0,U=!1,R=null,F=null,ot=null,nt=null,lt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ut=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=ut>=1):K.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=ut>=2);let St=null,Et={};const Bt=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),_e=new tn().fromArray(Bt),D=new tn().fromArray(ie);function Y(X,It,ft,_t){const Ft=new Uint8Array(4),Xt=o.createTexture();o.bindTexture(X,Xt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let le=0;le<ft;le++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(It,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ft):o.texImage2D(It+le,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ft);return Xt}const vt={};vt[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(no),Mt(!1),wt(R0),ct(o.CULL_FACE),P(lr);function ct(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Ct(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Lt(X,It){return g[X]!==It?(o.bindFramebuffer(X,It),g[X]=It,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=It),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=It),!0):!1}function Ut(X,It){let ft=S,_t=!1;if(X){ft=y.get(It),ft===void 0&&(ft=[],y.set(It,ft));const Ft=X.textures;if(ft.length!==Ft.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let Xt=0,le=Ft.length;Xt<le;Xt++)ft[Xt]=o.COLOR_ATTACHMENT0+Xt;ft.length=Ft.length,_t=!0}}else ft[0]!==o.BACK&&(ft[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ft)}function bt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const at={[qr]:o.FUNC_ADD,[CE]:o.FUNC_SUBTRACT,[wE]:o.FUNC_REVERSE_SUBTRACT};at[DE]=o.MIN,at[UE]=o.MAX;const Tt={[NE]:o.ZERO,[LE]:o.ONE,[OE]:o.SRC_COLOR,[ep]:o.SRC_ALPHA,[HE]:o.SRC_ALPHA_SATURATE,[IE]:o.DST_COLOR,[PE]:o.DST_ALPHA,[zE]:o.ONE_MINUS_SRC_COLOR,[np]:o.ONE_MINUS_SRC_ALPHA,[FE]:o.ONE_MINUS_DST_COLOR,[BE]:o.ONE_MINUS_DST_ALPHA,[GE]:o.CONSTANT_COLOR,[VE]:o.ONE_MINUS_CONSTANT_COLOR,[XE]:o.CONSTANT_ALPHA,[qE]:o.ONE_MINUS_CONSTANT_ALPHA};function P(X,It,ft,_t,Ft,Xt,le,Ze,mn,be){if(X===lr){b===!0&&(Ct(o.BLEND),b=!1);return}if(b===!1&&(ct(o.BLEND),b=!0),X!==RE){if(X!==M||be!==U){if((x!==qr||C!==qr)&&(o.blendEquation(o.FUNC_ADD),x=qr,C=qr),be)switch(X){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case C0:o.blendFunc(o.ONE,o.ONE);break;case w0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case C0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case w0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,N=null,$=null,I=null,B.set(0,0,0),H=0,M=X,U=be}return}Ft=Ft||It,Xt=Xt||ft,le=le||_t,(It!==x||Ft!==C)&&(o.blendEquationSeparate(at[It],at[Ft]),x=It,C=Ft),(ft!==O||_t!==N||Xt!==$||le!==I)&&(o.blendFuncSeparate(Tt[ft],Tt[_t],Tt[Xt],Tt[le]),O=ft,N=_t,$=Xt,I=le),(Ze.equals(B)===!1||mn!==H)&&(o.blendColor(Ze.r,Ze.g,Ze.b,mn),B.copy(Ze),H=mn),M=X,U=!1}function Wt(X,It){X.side===Sa?Ct(o.CULL_FACE):ct(o.CULL_FACE);let ft=X.side===Zn;It&&(ft=!ft),Mt(ft),X.blending===Js&&X.transparent===!1?P(lr):P(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$t(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function wt(X){X!==TE?(ct(o.CULL_FACE),X!==F&&(X===R0?o.cullFace(o.BACK):X===bE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),F=X}function yt(X){X!==ot&&(V&&o.lineWidth(X),ot=X)}function $t(X,It,ft){X?(ct(o.POLYGON_OFFSET_FILL),(nt!==It||lt!==ft)&&(o.polygonOffset(It,ft),nt=It,lt=ft)):Ct(o.POLYGON_OFFSET_FILL)}function Vt(X){X?ct(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function L(X){X===void 0&&(X=o.TEXTURE0+ht-1),St!==X&&(o.activeTexture(X),St=X)}function A(X,It,ft){ft===void 0&&(St===null?ft=o.TEXTURE0+ht-1:ft=St);let _t=Et[ft];_t===void 0&&(_t={type:void 0,texture:void 0},Et[ft]=_t),(_t.type!==X||_t.texture!==It)&&(St!==ft&&(o.activeTexture(ft),St=ft),o.bindTexture(X,It||vt[X]),_t.type=X,_t.texture=It)}function et(){const X=Et[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function se(X){_e.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function kt(X){D.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),D.copy(X))}function ye(X,It){let ft=m.get(It);ft===void 0&&(ft=new WeakMap,m.set(It,ft));let _t=ft.get(X);_t===void 0&&(_t=o.getUniformBlockIndex(It,X.name),ft.set(X,_t))}function ce(X,It){const _t=m.get(It).get(X);p.get(It)!==_t&&(o.uniformBlockBinding(It,_t,X.__bindingPointIndex),p.set(It,_t))}function Fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},St=null,Et={},g={},y=new WeakMap,S=[],E=null,b=!1,M=null,x=null,O=null,N=null,C=null,$=null,I=null,B=new xe(0,0,0),H=0,U=!1,R=null,F=null,ot=null,nt=null,lt=null,_e.set(0,0,o.canvas.width,o.canvas.height),D.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Ct,bindFramebuffer:Lt,drawBuffers:Ut,useProgram:bt,setBlending:P,setMaterial:Wt,setFlipSided:Mt,setCullFace:wt,setLineWidth:yt,setPolygonOffset:$t,setScissorTest:Vt,activeTexture:L,bindTexture:A,unbindTexture:et,compressedTexImage2D:pt,compressedTexImage3D:xt,texImage2D:Yt,texImage3D:ae,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:pe,texStorage3D:At,texSubImage2D:gt,texSubImage3D:jt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:zt,scissor:se,viewport:kt,reset:Fe}}function Ty(o,t,i,r){const l=RC(r);switch(i){case Wy:return o*t;case jy:return o*t;case Qy:return o*t*2;case Ky:return o*t/l.components*l.byteLength;case $p:return o*t/l.components*l.byteLength;case Jy:return o*t*2/l.components*l.byteLength;case tm:return o*t*2/l.components*l.byteLength;case Zy:return o*t*3/l.components*l.byteLength;case Ni:return o*t*4/l.components*l.byteLength;case em:return o*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case mp:case vp:return Math.max(o,16)*Math.max(t,8)/4;case pp:case gp:return Math.max(o,8)*Math.max(t,8)/2;case _p:case yp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Mp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ep:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Tp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case bp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Cp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case wp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Up:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Np:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Lp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Op:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Uc:case zp:case Pp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case $y:case Bp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ip:case Fp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RC(o){switch(o){case Aa:case qy:return{byteLength:1,components:1};case ml:case ky:case xl:return{byteLength:2,components:1};case Kp:case Jp:return{byteLength:2,components:4};case Zr:case Qp:case Ma:return{byteLength:4,components:1};case Yy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function CC(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,v=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return S?new OffscreenCanvas(L,A):Oc("canvas")}function b(L,A,et){let pt=1;const xt=Vt(L);if((xt.width>et||xt.height>et)&&(pt=et/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const gt=Math.floor(pt*xt.width),jt=Math.floor(pt*xt.height);g===void 0&&(g=E(gt,jt));const Ot=A?E(gt,jt):g;return Ot.width=gt,Ot.height=jt,Ot.getContext("2d").drawImage(L,0,0,gt,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+gt+"x"+jt+")."),Ot}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,A,et,pt,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=A;if(A===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8)),A===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),A===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8)),A===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),A===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),A===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),A===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),A===o.RGBA){const jt=xt?Ic:we.getTransfer(pt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=jt===Ge?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function C(L,A){let et;return L?A===null||A===Zr||A===ro?et=o.DEPTH24_STENCIL8:A===Ma?et=o.DEPTH32F_STENCIL8:A===ml&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zr||A===ro?et=o.DEPTH_COMPONENT24:A===Ma?et=o.DEPTH_COMPONENT32F:A===ml&&(et=o.DEPTH_COMPONENT16),et}function $(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Li&&L.minFilter!==ji?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function I(L){const A=L.target;A.removeEventListener("dispose",I),H(A),A.isVideoTexture&&v.delete(A)}function B(L){const A=L.target;A.removeEventListener("dispose",B),R(A)}function H(L){const A=r.get(L);if(A.__webglInit===void 0)return;const et=L.source,pt=y.get(et);if(pt){const xt=pt[A.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(L),Object.keys(pt).length===0&&y.delete(et)}r.remove(L)}function U(L){const A=r.get(L);o.deleteTexture(A.__webglTexture);const et=L.source,pt=y.get(et);delete pt[A.__cacheKey],h.memory.textures--}function R(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let xt=0;xt<A.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(A.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)o.deleteFramebuffer(A.__webglFramebuffer[pt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=L.textures;for(let pt=0,xt=et.length;pt<xt;pt++){const gt=r.get(et[pt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),r.remove(et[pt])}r.remove(L)}let F=0;function ot(){F=0}function nt(){const L=F;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function lt(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ht(L,A){const et=r.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(et,L,A);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+A)}function V(L,A){const et=r.get(L);if(L.version>0&&et.__version!==L.version){D(et,L,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+A)}function ut(L,A){const et=r.get(L);if(L.version>0&&et.__version!==L.version){D(et,L,A);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+A)}function K(L,A){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Y(et,L,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+A)}const St={[hp]:o.REPEAT,[Yr]:o.CLAMP_TO_EDGE,[dp]:o.MIRRORED_REPEAT},Et={[Li]:o.NEAREST,[tT]:o.NEAREST_MIPMAP_NEAREST,[Zu]:o.NEAREST_MIPMAP_LINEAR,[ji]:o.LINEAR,[Sd]:o.LINEAR_MIPMAP_NEAREST,[Wr]:o.LINEAR_MIPMAP_LINEAR},Bt={[aT]:o.NEVER,[cT]:o.ALWAYS,[rT]:o.LESS,[tx]:o.LEQUAL,[sT]:o.EQUAL,[uT]:o.GEQUAL,[oT]:o.GREATER,[lT]:o.NOTEQUAL};function ie(L,A){if(A.type===Ma&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ji||A.magFilter===Sd||A.magFilter===Zu||A.magFilter===Wr||A.minFilter===ji||A.minFilter===Sd||A.minFilter===Zu||A.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[A.minFilter]),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Bt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Li||A.minFilter!==Zu&&A.minFilter!==Wr||A.type===Ma&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function _e(L,A){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",I));const pt=A.source;let xt=y.get(pt);xt===void 0&&(xt={},y.set(pt,xt));const gt=lt(A);if(gt!==L.__cacheKey){xt[gt]===void 0&&(xt[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),xt[gt].usedTimes++;const jt=xt[L.__cacheKey];jt!==void 0&&(xt[L.__cacheKey].usedTimes--,jt.usedTimes===0&&U(A)),L.__cacheKey=gt,L.__webglTexture=xt[gt].texture}return et}function D(L,A,et){let pt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=_e(L,A),gt=A.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+et);const jt=r.get(gt);if(gt.version!==jt.__version||xt===!0){i.activeTexture(o.TEXTURE0+et);const Ot=we.getPrimaries(we.workingColorSpace),zt=A.colorSpace===or?null:we.getPrimaries(A.colorSpace),pe=A.colorSpace===or||Ot===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let At=b(A.image,!1,l.maxTextureSize);At=$t(A,At);const Yt=c.convert(A.format,A.colorSpace),ae=c.convert(A.type);let se=N(A.internalFormat,Yt,ae,A.colorSpace,A.isVideoTexture);ie(pt,A);let kt;const ye=A.mipmaps,ce=A.isVideoTexture!==!0,Fe=jt.__version===void 0||xt===!0,X=gt.dataReady,It=$(A,At);if(A.isDepthTexture)se=C(A.format===so,A.type),Fe&&(ce?i.texStorage2D(o.TEXTURE_2D,1,se,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,se,At.width,At.height,0,Yt,ae,null));else if(A.isDataTexture)if(ye.length>0){ce&&Fe&&i.texStorage2D(o.TEXTURE_2D,It,se,ye[0].width,ye[0].height);for(let ft=0,_t=ye.length;ft<_t;ft++)kt=ye[ft],ce?X&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,kt.width,kt.height,Yt,ae,kt.data):i.texImage2D(o.TEXTURE_2D,ft,se,kt.width,kt.height,0,Yt,ae,kt.data);A.generateMipmaps=!1}else ce?(Fe&&i.texStorage2D(o.TEXTURE_2D,It,se,At.width,At.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Yt,ae,At.data)):i.texImage2D(o.TEXTURE_2D,0,se,At.width,At.height,0,Yt,ae,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ce&&Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,se,ye[0].width,ye[0].height,At.depth);for(let ft=0,_t=ye.length;ft<_t;ft++)if(kt=ye[ft],A.format!==Ni)if(Yt!==null)if(ce){if(X)if(A.layerUpdates.size>0){const Ft=Ty(kt.width,kt.height,A.format,A.type);for(const Xt of A.layerUpdates){const le=kt.data.subarray(Xt*Ft/kt.data.BYTES_PER_ELEMENT,(Xt+1)*Ft/kt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,Xt,kt.width,kt.height,1,Yt,le)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,kt.width,kt.height,At.depth,Yt,kt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,se,kt.width,kt.height,At.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,kt.width,kt.height,At.depth,Yt,ae,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ft,se,kt.width,kt.height,At.depth,0,Yt,ae,kt.data)}else{ce&&Fe&&i.texStorage2D(o.TEXTURE_2D,It,se,ye[0].width,ye[0].height);for(let ft=0,_t=ye.length;ft<_t;ft++)kt=ye[ft],A.format!==Ni?Yt!==null?ce?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,kt.width,kt.height,Yt,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,ft,se,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,kt.width,kt.height,Yt,ae,kt.data):i.texImage2D(o.TEXTURE_2D,ft,se,kt.width,kt.height,0,Yt,ae,kt.data)}else if(A.isDataArrayTexture)if(ce){if(Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,se,At.width,At.height,At.depth),X)if(A.layerUpdates.size>0){const ft=Ty(At.width,At.height,A.format,A.type);for(const _t of A.layerUpdates){const Ft=At.data.subarray(_t*ft/At.data.BYTES_PER_ELEMENT,(_t+1)*ft/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Yt,ae,Ft)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Yt,ae,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,se,At.width,At.height,At.depth,0,Yt,ae,At.data);else if(A.isData3DTexture)ce?(Fe&&i.texStorage3D(o.TEXTURE_3D,It,se,At.width,At.height,At.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Yt,ae,At.data)):i.texImage3D(o.TEXTURE_3D,0,se,At.width,At.height,At.depth,0,Yt,ae,At.data);else if(A.isFramebufferTexture){if(Fe)if(ce)i.texStorage2D(o.TEXTURE_2D,It,se,At.width,At.height);else{let ft=At.width,_t=At.height;for(let Ft=0;Ft<It;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,se,ft,_t,0,Yt,ae,null),ft>>=1,_t>>=1}}else if(ye.length>0){if(ce&&Fe){const ft=Vt(ye[0]);i.texStorage2D(o.TEXTURE_2D,It,se,ft.width,ft.height)}for(let ft=0,_t=ye.length;ft<_t;ft++)kt=ye[ft],ce?X&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Yt,ae,kt):i.texImage2D(o.TEXTURE_2D,ft,se,Yt,ae,kt);A.generateMipmaps=!1}else if(ce){if(Fe){const ft=Vt(At);i.texStorage2D(o.TEXTURE_2D,It,se,ft.width,ft.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Yt,ae,At)}else i.texImage2D(o.TEXTURE_2D,0,se,Yt,ae,At);M(A)&&x(pt),jt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Y(L,A,et){if(A.image.length!==6)return;const pt=_e(L,A),xt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const gt=r.get(xt);if(xt.version!==gt.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const jt=we.getPrimaries(we.workingColorSpace),Ot=A.colorSpace===or?null:we.getPrimaries(A.colorSpace),zt=A.colorSpace===or||jt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const pe=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Yt=[];for(let _t=0;_t<6;_t++)!pe&&!At?Yt[_t]=b(A.image[_t],!0,l.maxCubemapSize):Yt[_t]=At?A.image[_t].image:A.image[_t],Yt[_t]=$t(A,Yt[_t]);const ae=Yt[0],se=c.convert(A.format,A.colorSpace),kt=c.convert(A.type),ye=N(A.internalFormat,se,kt,A.colorSpace),ce=A.isVideoTexture!==!0,Fe=gt.__version===void 0||pt===!0,X=xt.dataReady;let It=$(A,ae);ie(o.TEXTURE_CUBE_MAP,A);let ft;if(pe){ce&&Fe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,ye,ae.width,ae.height);for(let _t=0;_t<6;_t++){ft=Yt[_t].mipmaps;for(let Ft=0;Ft<ft.length;Ft++){const Xt=ft[Ft];A.format!==Ni?se!==null?ce?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,Xt.width,Xt.height,se,Xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ye,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,Xt.width,Xt.height,se,kt,Xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ye,Xt.width,Xt.height,0,se,kt,Xt.data)}}}else{if(ft=A.mipmaps,ce&&Fe){ft.length>0&&It++;const _t=Vt(Yt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,ye,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt[_t].width,Yt[_t].height,se,kt,Yt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ye,Yt[_t].width,Yt[_t].height,0,se,kt,Yt[_t].data);for(let Ft=0;Ft<ft.length;Ft++){const le=ft[Ft].image[_t].image;ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,le.width,le.height,se,kt,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ye,le.width,le.height,0,se,kt,le.data)}}else{ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,se,kt,Yt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ye,se,kt,Yt[_t]);for(let Ft=0;Ft<ft.length;Ft++){const Xt=ft[Ft];ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,se,kt,Xt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ye,se,kt,Xt.image[_t])}}}M(A)&&x(o.TEXTURE_CUBE_MAP),gt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function vt(L,A,et,pt,xt,gt){const jt=c.convert(et.format,et.colorSpace),Ot=c.convert(et.type),zt=N(et.internalFormat,jt,Ot,et.colorSpace),pe=r.get(A),At=r.get(et);if(At.__renderTarget=A,!pe.__hasExternalTextures){const Yt=Math.max(1,A.width>>gt),ae=Math.max(1,A.height>>gt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,gt,zt,Yt,ae,A.depth,0,jt,Ot,null):i.texImage2D(xt,gt,zt,Yt,ae,0,jt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),wt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,At.__webglTexture,0,Mt(A)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,At.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(L,A,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer){const pt=A.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,gt=C(A.stencilBuffer,xt),jt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=Mt(A);wt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,gt,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,gt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,gt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,L)}else{const pt=A.textures;for(let xt=0;xt<pt.length;xt++){const gt=pt[xt],jt=c.convert(gt.format,gt.colorSpace),Ot=c.convert(gt.type),zt=N(gt.internalFormat,jt,Ot,gt.colorSpace),pe=Mt(A);et&&wt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,zt,A.width,A.height):wt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,zt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,zt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ht(A.depthTexture,0);const xt=pt.__webglTexture,gt=Mt(A);if(A.depthTexture.format===$s)wt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(A.depthTexture.format===so)wt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Lt(L){const A=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const xt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),A.__depthDisposeCallback=xt}A.__boundDepthTexture=pt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,L)}else if(et){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=o.createRenderbuffer(),ct(A.__webglDepthbuffer[pt],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ct(A.__webglDepthbuffer,L,!1);else{const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,xt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(L,A,et){const pt=r.get(L);A!==void 0&&vt(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Lt(L)}function bt(L){const A=L.texture,et=r.get(L),pt=r.get(A);L.addEventListener("dispose",B);const xt=L.textures,gt=L.isWebGLCubeRenderTarget===!0,jt=xt.length>1;if(jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=A.version,h.memory.textures++),gt){et.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[Ot]=[];for(let zt=0;zt<A.mipmaps.length;zt++)et.__webglFramebuffer[Ot][zt]=o.createFramebuffer()}else et.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ot=0;Ot<A.mipmaps.length;Ot++)et.__webglFramebuffer[Ot]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Ot=0,zt=xt.length;Ot<zt;Ot++){const pe=r.get(xt[Ot]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&wt(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ot=0;Ot<xt.length;Ot++){const zt=xt[Ot];et.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ot]);const pe=c.convert(zt.format,zt.colorSpace),At=c.convert(zt.type),Yt=N(zt.internalFormat,pe,At,zt.colorSpace,L.isXRRenderTarget===!0),ae=Mt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,Yt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),ct(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ie(o.TEXTURE_CUBE_MAP,A);for(let Ot=0;Ot<6;Ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)vt(et.__webglFramebuffer[Ot][zt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,zt);else vt(et.__webglFramebuffer[Ot],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(A)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ot=0,zt=xt.length;Ot<zt;Ot++){const pe=xt[Ot],At=r.get(pe);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),ie(o.TEXTURE_2D,pe),vt(et.__webglFramebuffer,L,pe,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,0),M(pe)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ot=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,pt.__webglTexture),ie(Ot,A),A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)vt(et.__webglFramebuffer[zt],L,A,o.COLOR_ATTACHMENT0,Ot,zt);else vt(et.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,Ot,0);M(A)&&x(Ot),i.unbindTexture()}L.depthBuffer&&Lt(L)}function at(L){const A=L.textures;for(let et=0,pt=A.length;et<pt;et++){const xt=A[et];if(M(xt)){const gt=O(L),jt=r.get(xt).__webglTexture;i.bindTexture(gt,jt),x(gt),i.unbindTexture()}}}const Tt=[],P=[];function Wt(L){if(L.samples>0){if(wt(L)===!1){const A=L.textures,et=L.width,pt=L.height;let xt=o.COLOR_BUFFER_BIT;const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=r.get(L),Ot=A.length>1;if(Ot)for(let zt=0;zt<A.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let zt=0;zt<A.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[zt]);const pe=r.get(A[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,et,pt,0,0,et,pt,xt,o.NEAREST),p===!0&&(Tt.length=0,P.length=0,Tt.push(o.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Tt.push(gt),P.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,P)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Tt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let zt=0;zt<A.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,jt.__webglColorRenderbuffer[zt]);const pe=r.get(A[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Mt(L){return Math.min(l.maxSamples,L.samples)}function wt(L){const A=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function yt(L){const A=h.render.frame;v.get(L)!==A&&(v.set(L,A),L.update())}function $t(L,A){const et=L.colorSpace,pt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==lo&&et!==or&&(we.getTransfer(et)===Ge?(pt!==Ni||xt!==Aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=nt,this.resetTextureUnits=ot,this.setTexture2D=ht,this.setTexture2DArray=V,this.setTexture3D=ut,this.setTextureCube=K,this.rebindTextures=Ut,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=wt}function wC(o,t){function i(r,l=or){let c;const h=we.getTransfer(l);if(r===Aa)return o.UNSIGNED_BYTE;if(r===Kp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Jp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Yy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===qy)return o.BYTE;if(r===ky)return o.SHORT;if(r===ml)return o.UNSIGNED_SHORT;if(r===Qp)return o.INT;if(r===Zr)return o.UNSIGNED_INT;if(r===Ma)return o.FLOAT;if(r===xl)return o.HALF_FLOAT;if(r===Wy)return o.ALPHA;if(r===Zy)return o.RGB;if(r===Ni)return o.RGBA;if(r===jy)return o.LUMINANCE;if(r===Qy)return o.LUMINANCE_ALPHA;if(r===$s)return o.DEPTH_COMPONENT;if(r===so)return o.DEPTH_STENCIL;if(r===Ky)return o.RED;if(r===$p)return o.RED_INTEGER;if(r===Jy)return o.RG;if(r===tm)return o.RG_INTEGER;if(r===em)return o.RGBA_INTEGER;if(r===Rc||r===Cc||r===wc||r===Dc)if(h===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pp||r===mp||r===gp||r===vp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===pp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_p||r===yp||r===xp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===_p||r===yp)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===xp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Up||r===Np||r===Lp||r===Op)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Sp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ep)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ap)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Up)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Np)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Op)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===zp||r===Pp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Uc)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$y||r===Bp||r===Ip||r===Fp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Uc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ip)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class DC extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mc extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UC={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,r),x=this._getHandJoint(m,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&y>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UC)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const NC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new jn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new hr({vertexShader:NC,fragmentShader:LC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ta(new Hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zC extends uo{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,S=null,E=null;const b=new OC,M=i.getContextAttributes();let x=null,O=null;const N=[],C=[],$=new Nt;let I=null;const B=new Di;B.viewport=new tn;const H=new Di;H.viewport=new tn;const U=[B,H],R=new DC;let F=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Y=N[D];return Y===void 0&&(Y=new Zd,N[D]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(D){let Y=N[D];return Y===void 0&&(Y=new Zd,N[D]=Y),Y.getGripSpace()},this.getHand=function(D){let Y=N[D];return Y===void 0&&(Y=new Zd,N[D]=Y),Y.getHandSpace()};function nt(D){const Y=C.indexOf(D.inputSource);if(Y===-1)return;const vt=N[Y];vt!==void 0&&(vt.update(D.inputSource,D.frame,m||h),vt.dispatchEvent({type:D.type,data:D.inputSource}))}function lt(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",ht);for(let D=0;D<N.length;D++){const Y=C[D];Y!==null&&(C[D]=null,N[D].disconnect(Y))}F=null,ot=null,b.reset(),t.setRenderTarget(x),S=null,y=null,g=null,l=null,O=null,_e.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){c=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){d=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(D){m=D},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize($),l.renderState.layers===void 0){const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Y),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new jr(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:Aa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let Y=null,vt=null,ct=null;M.depth&&(ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Y=M.stencil?so:$s,vt=M.stencil?ro:Zr);const Ct={colorFormat:i.RGBA8,depthFormat:ct,scaleFactor:c};g=new XRWebGLBinding(l,i),y=g.createProjectionLayer(Ct),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),O=new jr(y.textureWidth,y.textureHeight,{format:Ni,type:Aa,depthTexture:new dx(y.textureWidth,y.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),_e.setContext(l),_e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ht(D){for(let Y=0;Y<D.removed.length;Y++){const vt=D.removed[Y],ct=C.indexOf(vt);ct>=0&&(C[ct]=null,N[ct].disconnect(vt))}for(let Y=0;Y<D.added.length;Y++){const vt=D.added[Y];let ct=C.indexOf(vt);if(ct===-1){for(let Lt=0;Lt<N.length;Lt++)if(Lt>=C.length){C.push(vt),ct=Lt;break}else if(C[Lt]===null){C[Lt]=vt,ct=Lt;break}if(ct===-1)break}const Ct=N[ct];Ct&&Ct.connect(vt)}}const V=new k,ut=new k;function K(D,Y,vt){V.setFromMatrixPosition(Y.matrixWorld),ut.setFromMatrixPosition(vt.matrixWorld);const ct=V.distanceTo(ut),Ct=Y.projectionMatrix.elements,Lt=vt.projectionMatrix.elements,Ut=Ct[14]/(Ct[10]-1),bt=Ct[14]/(Ct[10]+1),at=(Ct[9]+1)/Ct[5],Tt=(Ct[9]-1)/Ct[5],P=(Ct[8]-1)/Ct[0],Wt=(Lt[8]+1)/Lt[0],Mt=Ut*P,wt=Ut*Wt,yt=ct/(-P+Wt),$t=yt*-P;if(Y.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX($t),D.translateZ(yt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Ct[10]===-1)D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Vt=Ut+yt,L=bt+yt,A=Mt-$t,et=wt+(ct-$t),pt=at*bt/L*Vt,xt=Tt*bt/L*Vt;D.projectionMatrix.makePerspective(A,et,pt,xt,Vt,L),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function St(D,Y){Y===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(Y.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;let Y=D.near,vt=D.far;b.texture!==null&&(b.depthNear>0&&(Y=b.depthNear),b.depthFar>0&&(vt=b.depthFar)),R.near=H.near=B.near=Y,R.far=H.far=B.far=vt,(F!==R.near||ot!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,ot=R.far),B.layers.mask=D.layers.mask|2,H.layers.mask=D.layers.mask|4,R.layers.mask=B.layers.mask|H.layers.mask;const ct=D.parent,Ct=R.cameras;St(R,ct);for(let Lt=0;Lt<Ct.length;Lt++)St(Ct[Lt],ct);Ct.length===2?K(R,B,H):R.projectionMatrix.copy(B.projectionMatrix),Et(D,R,ct)};function Et(D,Y,vt){vt===null?D.matrix.copy(Y.matrixWorld):(D.matrix.copy(vt.matrixWorld),D.matrix.invert(),D.matrix.multiply(Y.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=gl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(D){p=D,y!==null&&(y.fixedFoveation=D),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=D)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let Bt=null;function ie(D,Y){if(v=Y.getViewerPose(m||h),E=Y,v!==null){const vt=v.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let ct=!1;vt.length!==R.cameras.length&&(R.cameras.length=0,ct=!0);for(let Lt=0;Lt<vt.length;Lt++){const Ut=vt[Lt];let bt=null;if(S!==null)bt=S.getViewport(Ut);else{const Tt=g.getViewSubImage(y,Ut);bt=Tt.viewport,Lt===0&&(t.setRenderTargetTextures(O,Tt.colorTexture,y.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(O))}let at=U[Lt];at===void 0&&(at=new Di,at.layers.enable(Lt),at.viewport=new tn,U[Lt]=at),at.matrix.fromArray(Ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(bt.x,bt.y,bt.width,bt.height),Lt===0&&(R.matrix.copy(at.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ct===!0&&R.cameras.push(at)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Lt=g.getDepthInformation(vt[0]);Lt&&Lt.isValid&&Lt.texture&&b.init(t,Lt,l.renderState)}}for(let vt=0;vt<N.length;vt++){const ct=C[vt],Ct=N[vt];ct!==null&&Ct!==void 0&&Ct.update(ct,Y,m||h)}Bt&&Bt(D,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),E=null}const _e=new fx;_e.setAnimationLoop(ie),this.setAnimationLoop=function(D){Bt=D},this.dispose=function(){}}}const Gr=new zi,PC=new Ye;function BC(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,lx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,N,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),b(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,O,N):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=t.get(x),N=O.envMap,C=O.envMapRotation;N&&(M.envMap.value=N,Gr.copy(C),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),M.envMapRotation.value.setFromMatrix4(PC.makeRotationFromEuler(Gr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,O,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const O=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function IC(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,N){const C=N.program;r.uniformBlockBinding(O,C)}function m(O,N){let C=l[O.id];C===void 0&&(E(O),C=v(O),l[O.id]=C,O.addEventListener("dispose",M));const $=N.program;r.updateUBOMapping(O,$);const I=t.render.frame;c[O.id]!==I&&(y(O),c[O.id]=I)}function v(O){const N=g();O.__bindingPointIndex=N;const C=o.createBuffer(),$=O.__size,I=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,$,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,C),C}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const N=l[O.id],C=O.uniforms,$=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,B=C.length;I<B;I++){const H=Array.isArray(C[I])?C[I]:[C[I]];for(let U=0,R=H.length;U<R;U++){const F=H[U];if(S(F,I,U,$)===!0){const ot=F.__offset,nt=Array.isArray(F.value)?F.value:[F.value];let lt=0;for(let ht=0;ht<nt.length;ht++){const V=nt[ht],ut=b(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,ot+lt,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,lt),lt+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(O,N,C,$){const I=O.value,B=N+"_"+C;if($[B]===void 0)return typeof I=="number"||typeof I=="boolean"?$[B]=I:$[B]=I.clone(),!0;{const H=$[B];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return $[B]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function E(O){const N=O.uniforms;let C=0;const $=16;for(let B=0,H=N.length;B<H;B++){const U=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,F=U.length;R<F;R++){const ot=U[R],nt=Array.isArray(ot.value)?ot.value:[ot.value];for(let lt=0,ht=nt.length;lt<ht;lt++){const V=nt[lt],ut=b(V),K=C%$,St=K%ut.boundary,Et=K+St;C+=St,Et!==0&&$-Et<ut.storage&&(C+=$-Et),ot.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=C,C+=ut.storage}}}const I=C%$;return I>0&&(C+=$-I),O.__size=C,O.__cache={},this}function b(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function M(O){const N=O.target;N.removeEventListener("dispose",M);const C=h.indexOf(N.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:p,update:m,dispose:x}}class C2{constructor(t={}){const{canvas:i=RT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,x=null;const O=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this.toneMapping=ur,this.toneMappingExposure=1;const C=this;let $=!1,I=0,B=0,H=null,U=-1,R=null;const F=new tn,ot=new tn;let nt=null;const lt=new xe(0);let ht=0,V=i.width,ut=i.height,K=1,St=null,Et=null;const Bt=new tn(0,0,V,ut),ie=new tn(0,0,V,ut);let _e=!1;const D=new rm;let Y=!1,vt=!1;const ct=new Ye,Ct=new Ye,Lt=new k,Ut=new tn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Tt(){return H===null?K:1}let P=r;function Wt(w,j){return i.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zp}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),P===null){const j="webgl2";if(P=Wt(j,w),P===null)throw Wt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Mt,wt,yt,$t,Vt,L,A,et,pt,xt,gt,jt,Ot,zt,pe,At,Yt,ae,se,kt,ye,ce,Fe,X;function It(){Mt=new qA(P),Mt.init(),ce=new wC(P,Mt),wt=new IA(P,Mt,t,ce),yt=new AC(P,Mt),wt.reverseDepthBuffer&&y&&yt.buffers.depth.setReversed(!0),$t=new WA(P),Vt=new fC,L=new CC(P,Mt,yt,Vt,wt,ce,$t),A=new HA(C),et=new XA(C),pt=new t1(P),Fe=new PA(P,pt),xt=new kA(P,pt,$t,Fe),gt=new jA(P,xt,pt,$t),se=new ZA(P,wt,L),At=new FA(Vt),jt=new cC(C,A,et,Mt,wt,Fe,At),Ot=new BC(C,Vt),zt=new dC,pe=new yC(Mt),ae=new zA(C,A,et,yt,gt,S,p),Yt=new TC(C,gt,wt),X=new IC(P,$t,wt,yt),kt=new BA(P,Mt,$t),ye=new YA(P,Mt,$t),$t.programs=jt.programs,C.capabilities=wt,C.extensions=Mt,C.properties=Vt,C.renderLists=zt,C.shadowMap=Yt,C.state=yt,C.info=$t}It();const ft=new zC(C,P);this.xr=ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(V,ut,!1))},this.getSize=function(w){return w.set(V,ut)},this.setSize=function(w,j,rt=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,ut=j,i.width=Math.floor(w*K),i.height=Math.floor(j*K),rt===!0&&(i.style.width=w+"px",i.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(V*K,ut*K).floor()},this.setDrawingBufferSize=function(w,j,rt){V=w,ut=j,K=rt,i.width=Math.floor(w*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(Bt)},this.setViewport=function(w,j,rt,st){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,j,rt,st),yt.viewport(F.copy(Bt).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,j,rt,st){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,j,rt,st),yt.scissor(ot.copy(ie).multiplyScalar(K).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){yt.setScissorTest(_e=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){Et=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(w=!0,j=!0,rt=!0){let st=0;if(w){let Q=!1;if(H!==null){const Rt=H.texture.format;Q=Rt===em||Rt===tm||Rt===$p}if(Q){const Rt=H.texture.type,Ht=Rt===Aa||Rt===Zr||Rt===ml||Rt===ro||Rt===Kp||Rt===Jp,Kt=ae.getClearColor(),Jt=ae.getClearAlpha(),ne=Kt.r,te=Kt.g,Gt=Kt.b;Ht?(E[0]=ne,E[1]=te,E[2]=Gt,E[3]=Jt,P.clearBufferuiv(P.COLOR,0,E)):(b[0]=ne,b[1]=te,b[2]=Gt,b[3]=Jt,P.clearBufferiv(P.COLOR,0,b))}else st|=P.COLOR_BUFFER_BIT}j&&(st|=P.DEPTH_BUFFER_BIT),rt&&(st|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),zt.dispose(),pe.dispose(),Vt.dispose(),A.dispose(),et.dispose(),gt.dispose(),Fe.dispose(),X.dispose(),jt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Cn),ft.removeEventListener("sessionend",bl),Ji.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const w=$t.autoReset,j=Yt.enabled,rt=Yt.autoUpdate,st=Yt.needsUpdate,Q=Yt.type;It(),$t.autoReset=w,Yt.enabled=j,Yt.autoUpdate=rt,Yt.needsUpdate=st,Yt.type=Q}function Xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const j=w.target;j.removeEventListener("dispose",le),Ze(j)}function Ze(w){mn(w),Vt.remove(w)}function mn(w){const j=Vt.get(w).programs;j!==void 0&&(j.forEach(function(rt){jt.releaseProgram(rt)}),w.isShaderMaterial&&jt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,rt,st,Q,Rt){j===null&&(j=bt);const Ht=Q.isMesh&&Q.matrixWorld.determinant()<0,Kt=Xc(w,j,rt,st,Q);yt.setMaterial(st,Ht);let Jt=rt.index,ne=1;if(st.wireframe===!0){if(Jt=xt.getWireframeAttribute(rt),Jt===void 0)return;ne=2}const te=rt.drawRange,Gt=rt.attributes.position;let ge=te.start*ne,Oe=(te.start+te.count)*ne;Rt!==null&&(ge=Math.max(ge,Rt.start*ne),Oe=Math.min(Oe,(Rt.start+Rt.count)*ne)),Jt!==null?(ge=Math.max(ge,0),Oe=Math.min(Oe,Jt.count)):Gt!=null&&(ge=Math.max(ge,0),Oe=Math.min(Oe,Gt.count));const Ve=Oe-ge;if(Ve<0||Ve===1/0)return;Fe.setup(Q,st,Kt,rt,Jt);let wn,Ce=kt;if(Jt!==null&&(wn=pt.get(Jt),Ce=ye,Ce.setIndex(wn)),Q.isMesh)st.wireframe===!0?(yt.setLineWidth(st.wireframeLinewidth*Tt()),Ce.setMode(P.LINES)):Ce.setMode(P.TRIANGLES);else if(Q.isLine){let Qt=st.linewidth;Qt===void 0&&(Qt=1),yt.setLineWidth(Qt*Tt()),Q.isLineSegments?Ce.setMode(P.LINES):Q.isLineLoop?Ce.setMode(P.LINE_LOOP):Ce.setMode(P.LINE_STRIP)}else Q.isPoints?Ce.setMode(P.POINTS):Q.isSprite&&Ce.setMode(P.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,Vn=Q._multiDrawCounts,Ae=Q._multiDrawCount,ln=Jt?pt.get(Jt).bytesPerElement:1,Qn=Vt.get(st).currentProgram.getUniforms();for(let un=0;un<Ae;un++)Qn.setValue(P,"_gl_DrawID",un),Ce.render(Qt[un]/ln,Vn[un])}else if(Q.isInstancedMesh)Ce.renderInstances(ge,Ve,Q.count);else if(rt.isInstancedBufferGeometry){const Qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vn=Math.min(rt.instanceCount,Qt);Ce.renderInstances(ge,Ve,Vn)}else Ce.render(ge,Ve)};function be(w,j,rt){w.transparent===!0&&w.side===Sa&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,ta(w,j,rt),w.side=fr,w.needsUpdate=!0,ta(w,j,rt),w.side=Sa):ta(w,j,rt)}this.compile=function(w,j,rt=null){rt===null&&(rt=w),x=pe.get(rt),x.init(j),N.push(x),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),w!==rt&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const st=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Ht=0;Ht<Rt.length;Ht++){const Kt=Rt[Ht];be(Kt,rt,Q),st.add(Kt)}else be(Rt,rt,Q),st.add(Rt)}),N.pop(),x=null,st},this.compileAsync=function(w,j,rt=null){const st=this.compile(w,j,rt);return new Promise(Q=>{function Rt(){if(st.forEach(function(Ht){Vt.get(Ht).currentProgram.isReady()&&st.delete(Ht)}),st.size===0){Q(w);return}setTimeout(Rt,10)}Mt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let We=null;function gn(w){We&&We(w)}function Cn(){Ji.stop()}function bl(){Ji.start()}const Ji=new fx;Ji.setAnimationLoop(gn),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){We=w,ft.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},ft.addEventListener("sessionstart",Cn),ft.addEventListener("sessionend",bl),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(j),j=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,j,H),x=pe.get(w,N.length),x.init(j),N.push(x),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),D.setFromProjectionMatrix(Ct),vt=this.localClippingEnabled,Y=At.init(this.clippingPlanes,vt),M=zt.get(w,O.length),M.init(),O.push(M),ft.enabled===!0&&ft.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&fo(Rt,j,-1/0,C.sortObjects)}fo(w,j,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(St,Et),at=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,at&&ae.addToRenderList(M,w),this.info.render.frame++,Y===!0&&At.beginShadows();const rt=x.state.shadowsArray;Yt.render(rt,w,j),Y===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Q=M.transmissive;if(x.setupLights(),j.isArrayCamera){const Rt=j.cameras;if(Q.length>0)for(let Ht=0,Kt=Rt.length;Ht<Kt;Ht++){const Jt=Rt[Ht];mr(st,Q,w,Jt)}at&&ae.render(w);for(let Ht=0,Kt=Rt.length;Ht<Kt;Ht++){const Jt=Rt[Ht];pr(M,w,Jt,Jt.viewport)}}else Q.length>0&&mr(st,Q,w,j),at&&ae.render(w),pr(M,w,j);H!==null&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),w.isScene===!0&&w.onAfterRender(C,w,j),Fe.resetDefaultState(),U=-1,R=null,N.pop(),N.length>0?(x=N[N.length-1],Y===!0&&At.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function fo(w,j,rt,st){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||D.intersectsSprite(w)){st&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const Ht=gt.update(w),Kt=w.material;Kt.visible&&M.push(w,Ht,Kt,rt,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||D.intersectsObject(w))){const Ht=gt.update(w),Kt=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Ut.copy(Ht.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(Kt)){const Jt=Ht.groups;for(let ne=0,te=Jt.length;ne<te;ne++){const Gt=Jt[ne],ge=Kt[Gt.materialIndex];ge&&ge.visible&&M.push(w,Ht,ge,rt,Ut.z,Gt)}}else Kt.visible&&M.push(w,Ht,Kt,rt,Ut.z,null)}}const Rt=w.children;for(let Ht=0,Kt=Rt.length;Ht<Kt;Ht++)fo(Rt[Ht],j,rt,st)}function pr(w,j,rt,st){const Q=w.opaque,Rt=w.transmissive,Ht=w.transparent;x.setupLightsView(rt),Y===!0&&At.setGlobalState(C.clippingPlanes,rt),st&&yt.viewport(F.copy(st)),Q.length>0&&$i(Q,j,rt),Rt.length>0&&$i(Rt,j,rt),Ht.length>0&&$i(Ht,j,rt),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function mr(w,j,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new jr(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?xl:Aa,minFilter:Wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Rt=x.state.transmissionRenderTarget[st.id],Ht=st.viewport||F;Rt.setSize(Ht.z,Ht.w);const Kt=C.getRenderTarget();C.setRenderTarget(Rt),C.getClearColor(lt),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),at&&ae.render(rt);const Jt=C.toneMapping;C.toneMapping=ur;const ne=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),Y===!0&&At.setGlobalState(C.clippingPlanes,st),$i(w,rt,st),L.updateMultisampleRenderTarget(Rt),L.updateRenderTargetMipmap(Rt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Gt=0,ge=j.length;Gt<ge;Gt++){const Oe=j[Gt],Ve=Oe.object,wn=Oe.geometry,Ce=Oe.material,Qt=Oe.group;if(Ce.side===Sa&&Ve.layers.test(st.layers)){const Vn=Ce.side;Ce.side=Zn,Ce.needsUpdate=!0,Pi(Ve,rt,st,wn,Ce,Qt),Ce.side=Vn,Ce.needsUpdate=!0,te=!0}}te===!0&&(L.updateMultisampleRenderTarget(Rt),L.updateRenderTargetMipmap(Rt))}C.setRenderTarget(Kt),C.setClearColor(lt,ht),ne!==void 0&&(st.viewport=ne),C.toneMapping=Jt}function $i(w,j,rt){const st=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Rt=w.length;Q<Rt;Q++){const Ht=w[Q],Kt=Ht.object,Jt=Ht.geometry,ne=st===null?Ht.material:st,te=Ht.group;Kt.layers.test(rt.layers)&&Pi(Kt,j,rt,Jt,ne,te)}}function Pi(w,j,rt,st,Q,Rt){w.onBeforeRender(C,j,rt,st,Q,Rt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,j,rt,st,w,Rt),Q.transparent===!0&&Q.side===Sa&&Q.forceSinglePass===!1?(Q.side=Zn,Q.needsUpdate=!0,C.renderBufferDirect(rt,j,st,Q,w,Rt),Q.side=fr,Q.needsUpdate=!0,C.renderBufferDirect(rt,j,st,Q,w,Rt),Q.side=Sa):C.renderBufferDirect(rt,j,st,Q,w,Rt),w.onAfterRender(C,j,rt,st,Q,Rt)}function ta(w,j,rt){j.isScene!==!0&&(j=bt);const st=Vt.get(w),Q=x.state.lights,Rt=x.state.shadowsArray,Ht=Q.state.version,Kt=jt.getParameters(w,Q.state,Rt,j,rt),Jt=jt.getProgramCacheKey(Kt);let ne=st.programs;st.environment=w.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(w.isMeshStandardMaterial?et:A).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,ne===void 0&&(w.addEventListener("dispose",le),ne=new Map,st.programs=ne);let te=ne.get(Jt);if(te!==void 0){if(st.currentProgram===te&&st.lightsStateVersion===Ht)return ho(w,Kt),te}else Kt.uniforms=jt.getUniforms(w),w.onBeforeCompile(Kt,C),te=jt.acquireProgram(Kt,Jt),ne.set(Jt,te),st.uniforms=Kt.uniforms;const Gt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=At.uniform),ho(w,Kt),st.needsLights=po(w),st.lightsStateVersion=Ht,st.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMap.value=Q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotShadowMap.value=Q.state.spotShadowMap,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMap.value=Q.state.pointShadowMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=te,st.uniformsList=null,te}function Ra(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Nc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function ho(w,j){const rt=Vt.get(w);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Xc(w,j,rt,st,Q){j.isScene!==!0&&(j=bt),L.resetTextureUnits();const Rt=j.fog,Ht=st.isMeshStandardMaterial?j.environment:null,Kt=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:lo,Jt=(st.isMeshStandardMaterial?et:A).get(st.envMap||Ht),ne=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Gt=!!rt.morphAttributes.position,ge=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let Ve=ur;st.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ve=C.toneMapping);const wn=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ce=wn!==void 0?wn.length:0,Qt=Vt.get(st),Vn=x.state.lights;if(Y===!0&&(vt===!0||w!==R)){const On=w===R&&st.id===U;At.setState(st,w,On)}let Ae=!1;st.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Vn.state.version||Qt.outputColorSpace!==Kt||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==Jt||st.fog===!0&&Qt.fog!==Rt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==At.numPlanes||Qt.numIntersection!==At.numIntersection)||Qt.vertexAlphas!==ne||Qt.vertexTangents!==te||Qt.morphTargets!==Gt||Qt.morphNormals!==ge||Qt.morphColors!==Oe||Qt.toneMapping!==Ve||Qt.morphTargetsCount!==Ce)&&(Ae=!0):(Ae=!0,Qt.__version=st.version);let ln=Qt.currentProgram;Ae===!0&&(ln=ta(st,j,Q));let Qn=!1,un=!1,li=!1;const ue=ln.getUniforms(),Kn=Qt.uniforms;if(yt.useProgram(ln.program)&&(Qn=!0,un=!0,li=!0),st.id!==U&&(U=st.id,un=!0),Qn||R!==w){yt.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),wT(ct),DT(ct),ue.setValue(P,"projectionMatrix",ct)):ue.setValue(P,"projectionMatrix",w.projectionMatrix),ue.setValue(P,"viewMatrix",w.matrixWorldInverse);const Dn=ue.map.cameraPosition;Dn!==void 0&&Dn.setValue(P,Lt.setFromMatrixPosition(w.matrixWorld)),wt.logarithmicDepthBuffer&&ue.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ue.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,un=!0,li=!0)}if(Q.isSkinnedMesh){ue.setOptional(P,Q,"bindMatrix"),ue.setOptional(P,Q,"bindMatrixInverse");const On=Q.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),ue.setValue(P,"boneTexture",On.boneTexture,L))}Q.isBatchedMesh&&(ue.setOptional(P,Q,"batchingTexture"),ue.setValue(P,"batchingTexture",Q._matricesTexture,L),ue.setOptional(P,Q,"batchingIdTexture"),ue.setValue(P,"batchingIdTexture",Q._indirectTexture,L),ue.setOptional(P,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ue.setValue(P,"batchingColorTexture",Q._colorsTexture,L));const Ca=rt.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0)&&se.update(Q,rt,ln),(un||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,ue.setValue(P,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Kn.envMap.value=Jt,Kn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Kn.envMapIntensity.value=j.environmentIntensity),un&&(ue.setValue(P,"toneMappingExposure",C.toneMappingExposure),Qt.needsLights&&Al(Kn,li),Rt&&st.fog===!0&&Ot.refreshFogUniforms(Kn,Rt),Ot.refreshMaterialUniforms(Kn,st,K,ut,x.state.transmissionRenderTarget[w.id]),Nc.upload(P,Ra(Qt),Kn,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Nc.upload(P,Ra(Qt),Kn,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ue.setValue(P,"center",Q.center),ue.setValue(P,"modelViewMatrix",Q.modelViewMatrix),ue.setValue(P,"normalMatrix",Q.normalMatrix),ue.setValue(P,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const On=st.uniformsGroups;for(let Dn=0,zn=On.length;Dn<zn;Dn++){const Rl=On[Dn];X.update(Rl,ln),X.bind(Rl,ln)}}return ln}function Al(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function po(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,j,rt){Vt.get(w.texture).__webglTexture=j,Vt.get(w.depthTexture).__webglTexture=rt;const st=Vt.get(w);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,j){const rt=Vt.get(w);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,rt=0){H=w,I=j,B=rt;let st=!0,Q=null,Rt=!1,Ht=!1;if(w){const Jt=Vt.get(w);if(Jt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(P.FRAMEBUFFER,null),st=!1;else if(Jt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Jt.__hasExternalTextures)L.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Gt=w.depthTexture;if(Jt.__boundDepthTexture!==Gt){if(Gt!==null&&Vt.has(Gt)&&(w.width!==Gt.image.width||w.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const ne=w.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ht=!0);const te=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[j])?Q=te[j][rt]:Q=te[j],Rt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?Q=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?Q=te[rt]:Q=te,F.copy(w.viewport),ot.copy(w.scissor),nt=w.scissorTest}else F.copy(Bt).multiplyScalar(K).floor(),ot.copy(ie).multiplyScalar(K).floor(),nt=_e;if(yt.bindFramebuffer(P.FRAMEBUFFER,Q)&&st&&yt.drawBuffers(w,Q),yt.viewport(F),yt.scissor(ot),yt.setScissorTest(nt),Rt){const Jt=Vt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+j,Jt.__webglTexture,rt)}else if(Ht){const Jt=Vt.get(w.texture),ne=j||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jt.__webglTexture,rt||0,ne)}U=-1},this.readRenderTargetPixels=function(w,j,rt,st,Q,Rt,Ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt){yt.bindFramebuffer(P.FRAMEBUFFER,Kt);try{const Jt=w.texture,ne=Jt.format,te=Jt.type;if(!wt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-st&&rt>=0&&rt<=w.height-Q&&P.readPixels(j,rt,st,Q,ce.convert(ne),ce.convert(te),Rt)}finally{const Jt=H!==null?Vt.get(H).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,j,rt,st,Q,Rt,Ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt){const Jt=w.texture,ne=Jt.format,te=Jt.type;if(!wt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=w.width-st&&rt>=0&&rt<=w.height-Q){yt.bindFramebuffer(P.FRAMEBUFFER,Kt);const Gt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.bufferData(P.PIXEL_PACK_BUFFER,Rt.byteLength,P.STREAM_READ),P.readPixels(j,rt,st,Q,ce.convert(ne),ce.convert(te),0);const ge=H!==null?Vt.get(H).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,ge);const Oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await CT(P,Oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Rt),P.deleteBuffer(Gt),P.deleteSync(Oe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,j=null,rt=0){w.isTexture!==!0&&(cl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1]);const st=Math.pow(2,-rt),Q=Math.floor(w.image.width*st),Rt=Math.floor(w.image.height*st),Ht=j!==null?j.x:0,Kt=j!==null?j.y:0;L.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,rt,0,0,Ht,Kt,Q,Rt),yt.unbindTexture()},this.copyTextureToTexture=function(w,j,rt=null,st=null,Q=0){w.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,w=arguments[1],j=arguments[2],Q=arguments[3]||0,rt=null);let Rt,Ht,Kt,Jt,ne,te,Gt,ge,Oe;const Ve=w.isCompressedTexture?w.mipmaps[Q]:w.image;rt!==null?(Rt=rt.max.x-rt.min.x,Ht=rt.max.y-rt.min.y,Kt=rt.isBox3?rt.max.z-rt.min.z:1,Jt=rt.min.x,ne=rt.min.y,te=rt.isBox3?rt.min.z:0):(Rt=Ve.width,Ht=Ve.height,Kt=Ve.depth||1,Jt=0,ne=0,te=0),st!==null?(Gt=st.x,ge=st.y,Oe=st.z):(Gt=0,ge=0,Oe=0);const wn=ce.convert(j.format),Ce=ce.convert(j.type);let Qt;j.isData3DTexture?(L.setTexture3D(j,0),Qt=P.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Qt=P.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Qt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,j.unpackAlignment);const Vn=P.getParameter(P.UNPACK_ROW_LENGTH),Ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ln=P.getParameter(P.UNPACK_SKIP_PIXELS),Qn=P.getParameter(P.UNPACK_SKIP_ROWS),un=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ve.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,te);const li=w.isDataArrayTexture||w.isData3DTexture,ue=j.isDataArrayTexture||j.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Kn=Vt.get(w),Ca=Vt.get(j),On=Vt.get(Kn.__renderTarget),Dn=Vt.get(Ca.__renderTarget);yt.bindFramebuffer(P.READ_FRAMEBUFFER,On.__webglFramebuffer),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let zn=0;zn<Kt;zn++)li&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,Q,te+zn),w.isDepthTexture?(ue&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vt.get(j).__webglTexture,Q,Oe+zn),P.blitFramebuffer(Jt,ne,Rt,Ht,Gt,ge,Rt,Ht,P.DEPTH_BUFFER_BIT,P.NEAREST)):ue?P.copyTexSubImage3D(Qt,Q,Gt,ge,Oe+zn,Jt,ne,Rt,Ht):P.copyTexSubImage2D(Qt,Q,Gt,ge,Oe+zn,Jt,ne,Rt,Ht);yt.bindFramebuffer(P.READ_FRAMEBUFFER,null),yt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ue?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Qt,Q,Gt,ge,Oe,Rt,Ht,Kt,wn,Ce,Ve.data):j.isCompressedArrayTexture?P.compressedTexSubImage3D(Qt,Q,Gt,ge,Oe,Rt,Ht,Kt,wn,Ve.data):P.texSubImage3D(Qt,Q,Gt,ge,Oe,Rt,Ht,Kt,wn,Ce,Ve):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Gt,ge,Rt,Ht,wn,Ce,Ve.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Gt,ge,Ve.width,Ve.height,wn,Ve.data):P.texSubImage2D(P.TEXTURE_2D,Q,Gt,ge,Rt,Ht,wn,Ce,Ve);P.pixelStorei(P.UNPACK_ROW_LENGTH,Vn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,un),Q===0&&j.generateMipmaps&&P.generateMipmap(Qt),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,j,rt=null,st=null,Q=0){return w.isTexture!==!0&&(cl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,w=arguments[2],j=arguments[3],Q=arguments[4]||0),cl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,j,rt,st,Q)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){I=0,B=0,H=null,yt.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}class w2 extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class FC{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Hp,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new k;class _x{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ui(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ui(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ui(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ui(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Oi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _x(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yx extends dr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new k,Pc=new k,by=new Ye,ul=new Fc,gc=new El,jd=new k,Ay=new k;class HC extends fn{constructor(t=new pn,i=new yx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)zc.fromBufferAttribute(i,l-1),Pc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=zc.distanceTo(Pc);t.setAttribute("lineDistance",new Le(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=c,t.ray.intersectsSphere(gc)===!1)return;by.copy(l).invert(),ul.copy(t.ray).applyMatrix4(by);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=m){const x=v.getX(b),O=v.getX(b+1),N=vc(this,t,ul,p,x,O);N&&i.push(N)}if(this.isLineLoop){const b=v.getX(E-1),M=v.getX(S),x=vc(this,t,ul,p,b,M);x&&i.push(x)}}else{const S=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=m){const x=vc(this,t,ul,p,b,b+1);x&&i.push(x)}if(this.isLineLoop){const b=vc(this,t,ul,p,E-1,S);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function vc(o,t,i,r,l,c){const h=o.geometry.attributes.position;if(zc.fromBufferAttribute(h,l),Pc.fromBufferAttribute(h,c),i.distanceSqToSegment(zc,Pc,jd,Ay)>r)return;jd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(jd);if(!(p<t.near||p>t.far))return{distance:p,point:Ay.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}const Ry=new k,Cy=new k;class GC extends HC{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Ry.fromBufferAttribute(i,l),Cy.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Ry.distanceTo(Cy);t.setAttribute("lineDistance",new Le(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VC extends dr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wy=new Ye,Vp=new Fc,_c=new El,yc=new k;class D2 extends fn{constructor(t=new pn,i=new VC){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(l),_c.radius+=c,t.ray.intersectsSphere(_c)===!1)return;wy.copy(l).invert(),Vp.copy(t.ray).applyMatrix4(wy);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const y=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let E=y,b=S;E<b;E++){const M=m.getX(E);yc.fromBufferAttribute(g,M),Dy(yc,M,p,l,t,i,this)}}else{const y=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=y,b=S;E<b;E++)yc.fromBufferAttribute(g,E),Dy(yc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Dy(o,t,i,r,l,c,h){const d=Vp.distanceSqToPoint(o);if(d<i){const p=new k;Vp.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=t*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(c-1);const v=r[l],y=r[l+1]-v,S=(h-v)/y;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new Nt:new k);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i){const r=new k,l=[],c=[],h=[],d=new k,p=new Ye;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new k)}c[0]=new k,h[0]=new k;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=m&&(m=v,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),y<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Sn(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Sn(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class om extends Ki{constructor(t=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Nt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,S=m-this.aY;p=y*v-S*g+this.aX,m=y*g+S*v+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class XC extends om{constructor(t,i,r,l,c,h){super(t,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function lm(){let o=0,t=0,i=0,r=0;function l(c,h,d,p){o=c,t=d,i=-3*c+3*h-2*d-p,r=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,v,g){let y=(h-c)/m-(d-c)/(m+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+g)+(p-d)/g;y*=v,S*=v,l(h,d,y,S)},calc:function(c){const h=c*c,d=h*c;return o+t*c+i*h+r*d}}}const xc=new k,Qd=new lm,Kd=new lm,Jd=new lm;class qC extends Ki{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new k){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%c]:(xc.subVectors(l[0],l[1]).add(l[0]),m=xc);const g=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(xc.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),S),b=Math.pow(g.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(v),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),Qd.initNonuniformCatmullRom(m.x,g.x,y.x,v.x,E,b,M),Kd.initNonuniformCatmullRom(m.y,g.y,y.y,v.y,E,b,M),Jd.initNonuniformCatmullRom(m.z,g.z,y.z,v.z,E,b,M)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(m.x,g.x,y.x,v.x,this.tension),Kd.initCatmullRom(m.y,g.y,y.y,v.y,this.tension),Jd.initCatmullRom(m.z,g.z,y.z,v.z,this.tension));return r.set(Qd.calc(p),Kd.calc(p),Jd.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uy(o,t,i,r,l){const c=(r-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+c+h)*p+(-3*i+3*r-2*c-h)*d+c*o+i}function kC(o,t){const i=1-o;return i*i*t}function YC(o,t){return 2*(1-o)*o*t}function WC(o,t){return o*o*t}function dl(o,t,i,r){return kC(o,t)+YC(o,i)+WC(o,r)}function ZC(o,t){const i=1-o;return i*i*i*t}function jC(o,t){const i=1-o;return 3*i*i*o*t}function QC(o,t){return 3*(1-o)*o*o*t}function KC(o,t){return o*o*o*t}function pl(o,t,i,r,l){return ZC(o,t)+jC(o,i)+QC(o,r)+KC(o,l)}class xx extends Ki{constructor(t=new Nt,i=new Nt,r=new Nt,l=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Nt){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(pl(t,l.x,c.x,h.x,d.x),pl(t,l.y,c.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class JC extends Ki{constructor(t=new k,i=new k,r=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new k){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(pl(t,l.x,c.x,h.x,d.x),pl(t,l.y,c.y,h.y,d.y),pl(t,l.z,c.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sx extends Ki{constructor(t=new Nt,i=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Nt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Nt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $C extends Ki{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mx extends Ki{constructor(t=new Nt,i=new Nt,r=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Nt){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(dl(t,l.x,c.x,h.x),dl(t,l.y,c.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t2 extends Ki{constructor(t=new k,i=new k,r=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new k){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(dl(t,l.x,c.x,h.x),dl(t,l.y,c.y,h.y),dl(t,l.z,c.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ex extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Nt){const r=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],v=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(Uy(d,p.x,m.x,v.x,g.x),Uy(d,p.y,m.y,v.y,g.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Nt().fromArray(l))}return this}}var Xp=Object.freeze({__proto__:null,ArcCurve:XC,CatmullRomCurve3:qC,CubicBezierCurve:xx,CubicBezierCurve3:JC,EllipseCurve:om,LineCurve:Sx,LineCurve3:$C,QuadraticBezierCurve:Mx,QuadraticBezierCurve3:t2,SplineCurve:Ex});class e2 extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xp[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],p=d.getLength(),m=p===0?0:1-h/p;return d.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,p=h.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];r&&r.equals(v)||(i.push(v),r=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new Xp[l.type]().fromJSON(l))}return this}}class Ny extends e2{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,r=t.length;i<r;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const r=new Sx(this.currentPoint.clone(),new Nt(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,r,l){const c=new Mx(this.currentPoint.clone(),new Nt(t,i),new Nt(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(t,i,r,l,c,h){const d=new xx(this.currentPoint.clone(),new Nt(t,i),new Nt(r,l),new Nt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),r=new Ex(i);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,r,l,c,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,r,l,c,h),this}absarc(t,i,r,l,c,h){return this.absellipse(t,i,r,r,l,c,h),this}ellipse(t,i,r,l,c,h,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,r,l,c,h,d,p),this}absellipse(t,i,r,l,c,h,d,p){const m=new om(t,i,r,l,c,h,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Tx extends pn{constructor(t=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const c=[],h=[],d=[],p=[],m=new k,v=new Nt;h.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let g=0,y=3;g<=i;g++,y+=3){const S=r+g/i*l;m.x=t*Math.cos(S),m.y=t*Math.sin(S),h.push(m.x,m.y,m.z),d.push(0,0,1),v.x=(h[y]/t+1)/2,v.y=(h[y+1]/t+1)/2,p.push(v.x,v.y)}for(let g=1;g<=i;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tx(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bx extends pn{constructor(t=1,i=1,r=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],y=[],S=[];let E=0;const b=[],M=r/2;let x=0;O(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(S,2));function O(){const C=new k,$=new k;let I=0;const B=(i-t)/r;for(let H=0;H<=c;H++){const U=[],R=H/c,F=R*(i-t)+t;for(let ot=0;ot<=l;ot++){const nt=ot/l,lt=nt*p+d,ht=Math.sin(lt),V=Math.cos(lt);$.x=F*ht,$.y=-R*r+M,$.z=F*V,g.push($.x,$.y,$.z),C.set(ht,B,V).normalize(),y.push(C.x,C.y,C.z),S.push(nt,1-R),U.push(E++)}b.push(U)}for(let H=0;H<l;H++)for(let U=0;U<c;U++){const R=b[U][H],F=b[U+1][H],ot=b[U+1][H+1],nt=b[U][H+1];(t>0||U!==0)&&(v.push(R,F,nt),I+=3),(i>0||U!==c-1)&&(v.push(F,ot,nt),I+=3)}m.addGroup(x,I,0),x+=I}function N(C){const $=E,I=new Nt,B=new k;let H=0;const U=C===!0?t:i,R=C===!0?1:-1;for(let ot=1;ot<=l;ot++)g.push(0,M*R,0),y.push(0,R,0),S.push(.5,.5),E++;const F=E;for(let ot=0;ot<=l;ot++){const lt=ot/l*p+d,ht=Math.cos(lt),V=Math.sin(lt);B.x=U*V,B.y=M*R,B.z=U*ht,g.push(B.x,B.y,B.z),y.push(0,R,0),I.x=ht*.5+.5,I.y=V*.5*R+.5,S.push(I.x,I.y),E++}for(let ot=0;ot<l;ot++){const nt=$+ot,lt=F+ot;C===!0?v.push(lt,lt+1,nt):v.push(lt+1,lt,nt),H+=3}m.addGroup(x,H,C===!0?1:2),x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bx(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Sc=new k,Mc=new k,$d=new k,Ec=new xi;class U2 extends pn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(to*i),h=t.getIndex(),d=t.getAttribute("position"),p=h?h.count:d.count,m=[0,0,0],v=["a","b","c"],g=new Array(3),y={},S=[];for(let E=0;E<p;E+=3){h?(m[0]=h.getX(E),m[1]=h.getX(E+1),m[2]=h.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:b,b:M,c:x}=Ec;if(b.fromBufferAttribute(d,m[0]),M.fromBufferAttribute(d,m[1]),x.fromBufferAttribute(d,m[2]),Ec.getNormal($d),g[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let O=0;O<3;O++){const N=(O+1)%3,C=g[O],$=g[N],I=Ec[v[O]],B=Ec[v[N]],H=`${C}_${$}`,U=`${$}_${C}`;U in y&&y[U]?($d.dot(y[U].normal)<=c&&(S.push(I.x,I.y,I.z),S.push(B.x,B.y,B.z)),y[U]=null):H in y||(y[H]={index0:m[O],index1:m[N],normal:$d.clone()})}}for(const E in y)if(y[E]){const{index0:b,index1:M}=y[E];Sc.fromBufferAttribute(d,b),Mc.fromBufferAttribute(d,M),S.push(Sc.x,Sc.y,Sc.z),S.push(Mc.x,Mc.y,Mc.z)}this.setAttribute("position",new Le(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ax extends Ny{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(new Ny().fromJSON(l))}return this}}const n2={triangulate:function(o,t,i=2){const r=t&&t.length,l=r?t[0]*i:o.length;let c=Rx(o,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,p,m,v,g,y,S;if(r&&(c=o2(o,t,c,i)),o.length>80*i){d=m=o[0],p=v=o[1];for(let E=i;E<l;E+=i)g=o[E],y=o[E+1],g<d&&(d=g),y<p&&(p=y),g>m&&(m=g),y>v&&(v=y);S=Math.max(m-d,v-p),S=S!==0?32767/S:0}return vl(c,h,i,d,p,S,0),h}};function Rx(o,t,i,r,l){let c,h;if(l===_2(o,t,i,r)>0)for(c=t;c<i;c+=r)h=Ly(c,o[c],o[c+1],h);else for(c=i-r;c>=t;c-=r)h=Ly(c,o[c],o[c+1],h);return h&&Vc(h,h.next)&&(yl(h),h=h.next),h}function Qr(o,t){if(!o)return o;t||(t=o);let i=o,r;do if(r=!1,!i.steiner&&(Vc(i,i.next)||Ke(i.prev,i,i.next)===0)){if(yl(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function vl(o,t,i,r,l,c,h){if(!o)return;!h&&c&&h2(o,r,l,c);let d=o,p,m;for(;o.prev!==o.next;){if(p=o.prev,m=o.next,c?a2(o,r,l,c):i2(o)){t.push(p.i/i|0),t.push(o.i/i|0),t.push(m.i/i|0),yl(o),o=m.next,d=m.next;continue}if(o=m,o===d){h?h===1?(o=r2(Qr(o),t,i),vl(o,t,i,r,l,c,2)):h===2&&s2(o,t,i,r,l,c):vl(Qr(o),t,i,r,l,c,1);break}}}function i2(o){const t=o.prev,i=o,r=o.next;if(Ke(t,i,r)>=0)return!1;const l=t.x,c=i.x,h=r.x,d=t.y,p=i.y,m=r.y,v=l<c?l<h?l:h:c<h?c:h,g=d<p?d<m?d:m:p<m?p:m,y=l>c?l>h?l:h:c>h?c:h,S=d>p?d>m?d:m:p>m?p:m;let E=r.next;for(;E!==t;){if(E.x>=v&&E.x<=y&&E.y>=g&&E.y<=S&&Ks(l,d,c,p,h,m,E.x,E.y)&&Ke(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function a2(o,t,i,r){const l=o.prev,c=o,h=o.next;if(Ke(l,c,h)>=0)return!1;const d=l.x,p=c.x,m=h.x,v=l.y,g=c.y,y=h.y,S=d<p?d<m?d:m:p<m?p:m,E=v<g?v<y?v:y:g<y?g:y,b=d>p?d>m?d:m:p>m?p:m,M=v>g?v>y?v:y:g>y?g:y,x=qp(S,E,t,i,r),O=qp(b,M,t,i,r);let N=o.prevZ,C=o.nextZ;for(;N&&N.z>=x&&C&&C.z<=O;){if(N.x>=S&&N.x<=b&&N.y>=E&&N.y<=M&&N!==l&&N!==h&&Ks(d,v,p,g,m,y,N.x,N.y)&&Ke(N.prev,N,N.next)>=0||(N=N.prevZ,C.x>=S&&C.x<=b&&C.y>=E&&C.y<=M&&C!==l&&C!==h&&Ks(d,v,p,g,m,y,C.x,C.y)&&Ke(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;N&&N.z>=x;){if(N.x>=S&&N.x<=b&&N.y>=E&&N.y<=M&&N!==l&&N!==h&&Ks(d,v,p,g,m,y,N.x,N.y)&&Ke(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;C&&C.z<=O;){if(C.x>=S&&C.x<=b&&C.y>=E&&C.y<=M&&C!==l&&C!==h&&Ks(d,v,p,g,m,y,C.x,C.y)&&Ke(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function r2(o,t,i){let r=o;do{const l=r.prev,c=r.next.next;!Vc(l,c)&&Cx(l,r,r.next,c)&&_l(l,c)&&_l(c,l)&&(t.push(l.i/i|0),t.push(r.i/i|0),t.push(c.i/i|0),yl(r),yl(r.next),r=o=c),r=r.next}while(r!==o);return Qr(r)}function s2(o,t,i,r,l,c){let h=o;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&m2(h,d)){let p=wx(h,d);h=Qr(h,h.next),p=Qr(p,p.next),vl(h,t,i,r,l,c,0),vl(p,t,i,r,l,c,0);return}d=d.next}h=h.next}while(h!==o)}function o2(o,t,i,r){const l=[];let c,h,d,p,m;for(c=0,h=t.length;c<h;c++)d=t[c]*r,p=c<h-1?t[c+1]*r:o.length,m=Rx(o,d,p,r,!1),m===m.next&&(m.steiner=!0),l.push(p2(m));for(l.sort(l2),c=0;c<l.length;c++)i=u2(l[c],i);return i}function l2(o,t){return o.x-t.x}function u2(o,t){const i=c2(o,t);if(!i)return t;const r=wx(i,o);return Qr(r,r.next),Qr(i,i.next)}function c2(o,t){let i=t,r=-1/0,l;const c=o.x,h=o.y;do{if(h<=i.y&&h>=i.next.y&&i.next.y!==i.y){const y=i.x+(h-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(y<=c&&y>r&&(r=y,l=i.x<i.next.x?i:i.next,y===c))return l}i=i.next}while(i!==t);if(!l)return null;const d=l,p=l.x,m=l.y;let v=1/0,g;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&Ks(h<m?c:r,h,p,m,h<m?r:c,h,i.x,i.y)&&(g=Math.abs(h-i.y)/(c-i.x),_l(i,o)&&(g<v||g===v&&(i.x>l.x||i.x===l.x&&f2(l,i)))&&(l=i,v=g)),i=i.next;while(i!==d);return l}function f2(o,t){return Ke(o.prev,o,t.prev)<0&&Ke(t.next,o,o.next)<0}function h2(o,t,i,r){let l=o;do l.z===0&&(l.z=qp(l.x,l.y,t,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,d2(l)}function d2(o){let t,i,r,l,c,h,d,p,m=1;do{for(i=o,o=null,c=null,h=0;i;){for(h++,r=i,d=0,t=0;t<m&&(d++,r=r.nextZ,!!r);t++);for(p=m;d>0||p>0&&r;)d!==0&&(p===0||!r||i.z<=r.z)?(l=i,i=i.nextZ,d--):(l=r,r=r.nextZ,p--),c?c.nextZ=l:o=l,l.prevZ=c,c=l;i=r}c.nextZ=null,m*=2}while(h>1);return o}function qp(o,t,i,r,l){return o=(o-i)*l|0,t=(t-r)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function p2(o){let t=o,i=o;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==o);return i}function Ks(o,t,i,r,l,c,h,d){return(l-h)*(t-d)>=(o-h)*(c-d)&&(o-h)*(r-d)>=(i-h)*(t-d)&&(i-h)*(c-d)>=(l-h)*(r-d)}function m2(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!g2(o,t)&&(_l(o,t)&&_l(t,o)&&v2(o,t)&&(Ke(o.prev,o,t.prev)||Ke(o,t.prev,t))||Vc(o,t)&&Ke(o.prev,o,o.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(o,t,i){return(t.y-o.y)*(i.x-t.x)-(t.x-o.x)*(i.y-t.y)}function Vc(o,t){return o.x===t.x&&o.y===t.y}function Cx(o,t,i,r){const l=bc(Ke(o,t,i)),c=bc(Ke(o,t,r)),h=bc(Ke(i,r,o)),d=bc(Ke(i,r,t));return!!(l!==c&&h!==d||l===0&&Tc(o,i,t)||c===0&&Tc(o,r,t)||h===0&&Tc(i,o,r)||d===0&&Tc(i,t,r))}function Tc(o,t,i){return t.x<=Math.max(o.x,i.x)&&t.x>=Math.min(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&t.y>=Math.min(o.y,i.y)}function bc(o){return o>0?1:o<0?-1:0}function g2(o,t){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==t.i&&i.next.i!==t.i&&Cx(i,i.next,o,t))return!0;i=i.next}while(i!==o);return!1}function _l(o,t){return Ke(o.prev,o,o.next)<0?Ke(o,t,o.next)>=0&&Ke(o,o.prev,t)>=0:Ke(o,t,o.prev)<0||Ke(o,o.next,t)<0}function v2(o,t){let i=o,r=!1;const l=(o.x+t.x)/2,c=(o.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==o);return r}function wx(o,t){const i=new kp(o.i,o.x,o.y),r=new kp(t.i,t.x,t.y),l=o.next,c=t.prev;return o.next=t,t.prev=o,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function Ly(o,t,i,r){const l=new kp(o,t,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function yl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function kp(o,t,i){this.i=o,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _2(o,t,i,r){let l=0;for(let c=t,h=i-r;c<i;c+=r)l+=(o[h]-o[c])*(o[c+1]+o[h+1]),h=c;return l}class cr{static area(t){const i=t.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=t[l].x*t[c].y-t[c].x*t[l].y;return r*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,i){const r=[],l=[],c=[];Oy(t),zy(r,t);let h=t.length;i.forEach(Oy);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,zy(r,i[p]);const d=n2.triangulate(r,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function Oy(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function zy(o,t){for(let i=0;i<t.length;i++)o.push(t[i].x),o.push(t[i].y)}class Dx extends pn{constructor(t=new Ax([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const r=this,l=[],c=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];h(m)}this.setAttribute("position",new Le(l,3)),this.setAttribute("uv",new Le(c,2)),this.computeVertexNormals();function h(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:S-.1,b=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const x=i.extrudePath,O=i.UVGenerator!==void 0?i.UVGenerator:y2;let N,C=!1,$,I,B,H;x&&(N=x.getSpacedPoints(v),C=!0,y=!1,$=x.computeFrenetFrames(v,!1),I=new k,B=new k,H=new k),y||(M=0,S=0,E=0,b=0);const U=d.extractPoints(m);let R=U.shape;const F=U.holes;if(!cr.isClockWise(R)){R=R.reverse();for(let at=0,Tt=F.length;at<Tt;at++){const P=F[at];cr.isClockWise(P)&&(F[at]=P.reverse())}}const nt=cr.triangulateShape(R,F),lt=R;for(let at=0,Tt=F.length;at<Tt;at++){const P=F[at];R=R.concat(P)}function ht(at,Tt,P){return Tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(Tt,P)}const V=R.length,ut=nt.length;function K(at,Tt,P){let Wt,Mt,wt;const yt=at.x-Tt.x,$t=at.y-Tt.y,Vt=P.x-at.x,L=P.y-at.y,A=yt*yt+$t*$t,et=yt*L-$t*Vt;if(Math.abs(et)>Number.EPSILON){const pt=Math.sqrt(A),xt=Math.sqrt(Vt*Vt+L*L),gt=Tt.x-$t/pt,jt=Tt.y+yt/pt,Ot=P.x-L/xt,zt=P.y+Vt/xt,pe=((Ot-gt)*L-(zt-jt)*Vt)/(yt*L-$t*Vt);Wt=gt+yt*pe-at.x,Mt=jt+$t*pe-at.y;const At=Wt*Wt+Mt*Mt;if(At<=2)return new Nt(Wt,Mt);wt=Math.sqrt(At/2)}else{let pt=!1;yt>Number.EPSILON?Vt>Number.EPSILON&&(pt=!0):yt<-Number.EPSILON?Vt<-Number.EPSILON&&(pt=!0):Math.sign($t)===Math.sign(L)&&(pt=!0),pt?(Wt=-$t,Mt=yt,wt=Math.sqrt(A)):(Wt=yt,Mt=$t,wt=Math.sqrt(A/2))}return new Nt(Wt/wt,Mt/wt)}const St=[];for(let at=0,Tt=lt.length,P=Tt-1,Wt=at+1;at<Tt;at++,P++,Wt++)P===Tt&&(P=0),Wt===Tt&&(Wt=0),St[at]=K(lt[at],lt[P],lt[Wt]);const Et=[];let Bt,ie=St.concat();for(let at=0,Tt=F.length;at<Tt;at++){const P=F[at];Bt=[];for(let Wt=0,Mt=P.length,wt=Mt-1,yt=Wt+1;Wt<Mt;Wt++,wt++,yt++)wt===Mt&&(wt=0),yt===Mt&&(yt=0),Bt[Wt]=K(P[Wt],P[wt],P[yt]);Et.push(Bt),ie=ie.concat(Bt)}for(let at=0;at<M;at++){const Tt=at/M,P=S*Math.cos(Tt*Math.PI/2),Wt=E*Math.sin(Tt*Math.PI/2)+b;for(let Mt=0,wt=lt.length;Mt<wt;Mt++){const yt=ht(lt[Mt],St[Mt],Wt);ct(yt.x,yt.y,-P)}for(let Mt=0,wt=F.length;Mt<wt;Mt++){const yt=F[Mt];Bt=Et[Mt];for(let $t=0,Vt=yt.length;$t<Vt;$t++){const L=ht(yt[$t],Bt[$t],Wt);ct(L.x,L.y,-P)}}}const _e=E+b;for(let at=0;at<V;at++){const Tt=y?ht(R[at],ie[at],_e):R[at];C?(B.copy($.normals[0]).multiplyScalar(Tt.x),I.copy($.binormals[0]).multiplyScalar(Tt.y),H.copy(N[0]).add(B).add(I),ct(H.x,H.y,H.z)):ct(Tt.x,Tt.y,0)}for(let at=1;at<=v;at++)for(let Tt=0;Tt<V;Tt++){const P=y?ht(R[Tt],ie[Tt],_e):R[Tt];C?(B.copy($.normals[at]).multiplyScalar(P.x),I.copy($.binormals[at]).multiplyScalar(P.y),H.copy(N[at]).add(B).add(I),ct(H.x,H.y,H.z)):ct(P.x,P.y,g/v*at)}for(let at=M-1;at>=0;at--){const Tt=at/M,P=S*Math.cos(Tt*Math.PI/2),Wt=E*Math.sin(Tt*Math.PI/2)+b;for(let Mt=0,wt=lt.length;Mt<wt;Mt++){const yt=ht(lt[Mt],St[Mt],Wt);ct(yt.x,yt.y,g+P)}for(let Mt=0,wt=F.length;Mt<wt;Mt++){const yt=F[Mt];Bt=Et[Mt];for(let $t=0,Vt=yt.length;$t<Vt;$t++){const L=ht(yt[$t],Bt[$t],Wt);C?ct(L.x,L.y+N[v-1].y,N[v-1].x+P):ct(L.x,L.y,g+P)}}}D(),Y();function D(){const at=l.length/3;if(y){let Tt=0,P=V*Tt;for(let Wt=0;Wt<ut;Wt++){const Mt=nt[Wt];Ct(Mt[2]+P,Mt[1]+P,Mt[0]+P)}Tt=v+M*2,P=V*Tt;for(let Wt=0;Wt<ut;Wt++){const Mt=nt[Wt];Ct(Mt[0]+P,Mt[1]+P,Mt[2]+P)}}else{for(let Tt=0;Tt<ut;Tt++){const P=nt[Tt];Ct(P[2],P[1],P[0])}for(let Tt=0;Tt<ut;Tt++){const P=nt[Tt];Ct(P[0]+V*v,P[1]+V*v,P[2]+V*v)}}r.addGroup(at,l.length/3-at,0)}function Y(){const at=l.length/3;let Tt=0;vt(lt,Tt),Tt+=lt.length;for(let P=0,Wt=F.length;P<Wt;P++){const Mt=F[P];vt(Mt,Tt),Tt+=Mt.length}r.addGroup(at,l.length/3-at,1)}function vt(at,Tt){let P=at.length;for(;--P>=0;){const Wt=P;let Mt=P-1;Mt<0&&(Mt=at.length-1);for(let wt=0,yt=v+M*2;wt<yt;wt++){const $t=V*wt,Vt=V*(wt+1),L=Tt+Wt+$t,A=Tt+Mt+$t,et=Tt+Mt+Vt,pt=Tt+Wt+Vt;Lt(L,A,et,pt)}}}function ct(at,Tt,P){p.push(at),p.push(Tt),p.push(P)}function Ct(at,Tt,P){Ut(at),Ut(Tt),Ut(P);const Wt=l.length/3,Mt=O.generateTopUV(r,l,Wt-3,Wt-2,Wt-1);bt(Mt[0]),bt(Mt[1]),bt(Mt[2])}function Lt(at,Tt,P,Wt){Ut(at),Ut(Tt),Ut(Wt),Ut(Tt),Ut(P),Ut(Wt);const Mt=l.length/3,wt=O.generateSideWallUV(r,l,Mt-6,Mt-3,Mt-2,Mt-1);bt(wt[0]),bt(wt[1]),bt(wt[3]),bt(wt[1]),bt(wt[2]),bt(wt[3])}function Ut(at){l.push(p[at*3+0]),l.push(p[at*3+1]),l.push(p[at*3+2])}function bt(at){c.push(at.x),c.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return x2(i,r,t)}static fromJSON(t,i){const r=[];for(let c=0,h=t.shapes.length;c<h;c++){const d=i[t.shapes[c]];r.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Xp[l.type]().fromJSON(l)),new Dx(r,t.options)}}const y2={generateTopUV:function(o,t,i,r,l){const c=t[i*3],h=t[i*3+1],d=t[r*3],p=t[r*3+1],m=t[l*3],v=t[l*3+1];return[new Nt(c,h),new Nt(d,p),new Nt(m,v)]},generateSideWallUV:function(o,t,i,r,l,c){const h=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[r*3],v=t[r*3+1],g=t[r*3+2],y=t[l*3],S=t[l*3+1],E=t[l*3+2],b=t[c*3],M=t[c*3+1],x=t[c*3+2];return Math.abs(d-v)<Math.abs(h-m)?[new Nt(h,1-p),new Nt(m,1-g),new Nt(y,1-E),new Nt(b,1-x)]:[new Nt(d,1-p),new Nt(v,1-g),new Nt(S,1-E),new Nt(M,1-x)]}};function x2(o,t,i){if(i.shapes=[],Array.isArray(o))for(let r=0,l=o.length;r<l;r++){const c=o[r];i.shapes.push(c.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Ux extends pn{constructor(t=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const y=(i-t)/l,S=new k,E=new Nt;for(let b=0;b<=l;b++){for(let M=0;M<=r;M++){const x=c+M/r*h;S.x=g*Math.cos(x),S.y=g*Math.sin(x),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}g+=y}for(let b=0;b<l;b++){const M=b*(r+1);for(let x=0;x<r;x++){const O=x+M,N=O,C=O+r+1,$=O+r+2,I=O+1;d.push(N,C,I),d.push(C,$,I)}}this.setIndex(d),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(m,3)),this.setAttribute("uv",new Le(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ux(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nx extends pn{constructor(t=new Ax([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const r=[],l=[],c=[],h=[];let d=0,p=0;if(Array.isArray(t)===!1)m(t);else for(let v=0;v<t.length;v++)m(t[v]),this.addGroup(d,p,v),d+=p,p=0;this.setIndex(r),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2));function m(v){const g=l.length/3,y=v.extractPoints(i);let S=y.shape;const E=y.holes;cr.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,x=E.length;M<x;M++){const O=E[M];cr.isClockWise(O)===!0&&(E[M]=O.reverse())}const b=cr.triangulateShape(S,E);for(let M=0,x=E.length;M<x;M++){const O=E[M];S=S.concat(O)}for(let M=0,x=S.length;M<x;M++){const O=S[M];l.push(O.x,O.y,0),c.push(0,0,1),h.push(O.x,O.y)}for(let M=0,x=b.length;M<x;M++){const O=b[M],N=O[0]+g,C=O[1]+g,$=O[2]+g;r.push(N,C,$),p+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return S2(i,t)}static fromJSON(t,i){const r=[];for(let l=0,c=t.shapes.length;l<c;l++){const h=i[t.shapes[l]];r.push(h)}return new Nx(r,t.curveSegments)}}function S2(o,t){if(t.shapes=[],Array.isArray(o))for(let i=0,r=o.length;i<r;i++){const l=o[i];t.shapes.push(l.uuid)}else t.shapes.push(o.uuid);return t}class Lx extends pn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const v=[],g=new k,y=new k,S=[],E=[],b=[],M=[];for(let x=0;x<=r;x++){const O=[],N=x/r;let C=0;x===0&&h===0?C=.5/i:x===r&&p===Math.PI&&(C=-.5/i);for(let $=0;$<=i;$++){const I=$/i;g.x=-t*Math.cos(l+I*c)*Math.sin(h+N*d),g.y=t*Math.cos(h+N*d),g.z=t*Math.sin(l+I*c)*Math.sin(h+N*d),E.push(g.x,g.y,g.z),y.copy(g).normalize(),b.push(y.x,y.y,y.z),M.push(I+C,1-N),O.push(m++)}v.push(O)}for(let x=0;x<r;x++)for(let O=0;O<i;O++){const N=v[x][O+1],C=v[x][O],$=v[x+1][O],I=v[x+1][O+1];(x!==0||h>0)&&S.push(N,C,I),(x!==r-1||p<Math.PI)&&S.push(C,$,I)}this.setIndex(S),this.setAttribute("position",new Le(E,3)),this.setAttribute("normal",new Le(b,3)),this.setAttribute("uv",new Le(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lx(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class N2 extends pn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],r=new Set,l=new k,c=new k;if(t.index!==null){const h=t.attributes.position,d=t.index;let p=t.groups;p.length===0&&(p=[{start:0,count:d.count,materialIndex:0}]);for(let m=0,v=p.length;m<v;++m){const g=p[m],y=g.start,S=g.count;for(let E=y,b=y+S;E<b;E+=3)for(let M=0;M<3;M++){const x=d.getX(E+M),O=d.getX(E+(M+1)%3);l.fromBufferAttribute(h,x),c.fromBufferAttribute(h,O),Py(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const h=t.attributes.position;for(let d=0,p=h.count/3;d<p;d++)for(let m=0;m<3;m++){const v=3*d+m,g=3*d+(m+1)%3;l.fromBufferAttribute(h,v),c.fromBufferAttribute(h,g),Py(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Le(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Py(o,t,i){const r=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class L2 extends dr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class O2 extends dr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class um extends fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class z2 extends um{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const tp=new Ye,By=new k,Iy=new k;class M2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;By.setFromMatrixPosition(t.matrixWorld),i.position.copy(By),Iy.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Iy),i.updateMatrixWorld(),tp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(tp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class E2 extends M2{constructor(){super(new hx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P2 extends um{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new E2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class B2 extends um{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class I2 extends pn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class F2 extends FC{constructor(t,i,r=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const Fy=new Ye;class H2{constructor(t,i,r=0,l=1/0){this.ray=new Fc(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new am,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Fy.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fy),this}intersectObject(t,i=!0,r=[]){return Yp(t,this,r,i),r.sort(Hy),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Yp(t[l],this,r,i);return r.sort(Hy),r}}function Hy(o,t){return o.distance-t.distance}function Yp(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Yp(c[h],t,i,!0)}}const Gy=new k,Ac=new k;class G2{constructor(t=new k,i=new k){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){Gy.subVectors(t,this.start),Ac.subVectors(this.end,this.start);const r=Ac.dot(Ac);let c=Ac.dot(Gy)/r;return i&&(c=Sn(c,0,1)),c}closestPointToPoint(t,i,r){const l=this.closestPointToPointParameter(t,i);return this.delta(r).multiplyScalar(l).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class V2 extends GC{constructor(t=10,i=16,r=8,l=64,c=4473924,h=8947848){c=new xe(c),h=new xe(h);const d=[],p=[];if(i>1)for(let g=0;g<i;g++){const y=g/i*(Math.PI*2),S=Math.sin(y)*t,E=Math.cos(y)*t;d.push(0,0,0),d.push(S,0,E);const b=g&1?c:h;p.push(b.r,b.g,b.b),p.push(b.r,b.g,b.b)}for(let g=0;g<r;g++){const y=g&1?c:h,S=t-t/r*g;for(let E=0;E<l;E++){let b=E/l*(Math.PI*2),M=Math.sin(b)*S,x=Math.cos(b)*S;d.push(M,0,x),p.push(y.r,y.g,y.b),b=(E+1)/l*(Math.PI*2),M=Math.sin(b)*S,x=Math.cos(b)*S,d.push(M,0,x),p.push(y.r,y.g,y.b)}}const m=new pn;m.setAttribute("position",new Le(d,3)),m.setAttribute("color",new Le(p,3));const v=new yx({vertexColors:!0,toneMapped:!1});super(m,v),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);export{B2 as A,Ml as B,xe as C,P2 as D,T2 as E,Le as F,mc as G,A2 as H,I2 as I,AE as J,z2 as K,G2 as L,Ta as M,Tx as N,hx as O,Di as P,O2 as Q,Ux as R,El as S,Nx as T,WT as U,k as V,N2 as W,Dx as X,U2 as Y,H2 as Z,Ax as _,F2 as a,_x as b,hr as c,Zi as d,Nt as e,Pt as f,tn as g,Ye as h,R2 as i,C2 as j,w2 as k,V2 as l,rx as m,Sa as n,pn as o,GC as p,yx as q,b2 as r,Oi as s,D2 as t,VC as u,cr as v,L2 as w,bx as x,Tl as y,Lx as z};

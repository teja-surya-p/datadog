(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kc={exports:{}},xs={},Qc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),kp=Symbol.for("react.fragment"),Ip=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),Pp=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),xp=Symbol.for("react.memo"),Ap=Symbol.for("react.lazy"),Zl=Symbol.iterator;function Rp(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yc=Object.assign,Jc={};function or(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=or.prototype;function Ua(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||qc}var Fa=Ua.prototype=new Xc;Fa.constructor=Ua;Yc(Fa,or.prototype);Fa.isPureReactComponent=!0;var eu=Array.isArray,Zc=Object.prototype.hasOwnProperty,za={current:null},ed={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Zc.call(t,r)&&!ed.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ri,type:e,key:s,ref:o,props:i,_owner:za.current}}function Op(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function Lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tu=/\/+/g;function Js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lp(""+e.key):t.toString(36)}function Di(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ri:case Sp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Js(o,0):r,eu(i)?(n="",e!=null&&(n=e.replace(tu,"$&/")+"/"),Di(i,t,n,"",function(u){return u})):i!=null&&(ba(i)&&(i=Op(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",eu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Js(s,a);o+=Di(s,t,n,l,i)}else if(l=Rp(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Js(s,a++),o+=Di(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function gi(e,t,n){if(e==null)return e;var r=[],i=0;return Di(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Mi={transition:null},Mp={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Mi,ReactCurrentOwner:za};function nd(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:gi,forEach:function(e,t,n){gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gi(e,function(){t++}),t},toArray:function(e){return gi(e,function(t){return t})||[]},only:function(e){if(!ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=or;L.Fragment=kp;L.Profiler=Ep;L.PureComponent=Ua;L.StrictMode=Ip;L.Suspense=Np;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;L.act=nd;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yc({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=za.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zc.call(t,l)&&!ed.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ri,type:e.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cp,_context:e},e.Consumer=e};L.createElement=td;L.createFactory=function(e){var t=td.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Pp,render:e}};L.isValidElement=ba;L.lazy=function(e){return{$$typeof:Ap,_payload:{_status:-1,_result:e},_init:Dp}};L.memo=function(e,t){return{$$typeof:xp,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Mi.transition;Mi.transition={};try{e()}finally{Mi.transition=t}};L.unstable_act=nd;L.useCallback=function(e,t){return me.current.useCallback(e,t)};L.useContext=function(e){return me.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return me.current.useDeferredValue(e)};L.useEffect=function(e,t){return me.current.useEffect(e,t)};L.useId=function(){return me.current.useId()};L.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return me.current.useMemo(e,t)};L.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};L.useRef=function(e){return me.current.useRef(e)};L.useState=function(e){return me.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return me.current.useTransition()};L.version="18.3.1";Qc.exports=L;var z=Qc.exports;const jp=_p(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=z,Fp=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),bp=Object.prototype.hasOwnProperty,$p=Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)bp.call(t,r)&&!Bp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fp,type:e,key:s,ref:o,props:i,_owner:$p.current}}xs.Fragment=zp;xs.jsx=rd;xs.jsxs=rd;Kc.exports=xs;var m=Kc.exports,Mo={},id={exports:{}},Ne={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,A){var R=I.length;I.push(A);e:for(;0<R;){var W=R-1>>>1,J=I[W];if(0<i(J,A))I[W]=A,I[R]=J,R=W;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],R=I.pop();if(R!==A){I[0]=R;e:for(var W=0,J=I.length,Tn=J>>>1;W<Tn;){var st=2*(W+1)-1,fr=I[st],ot=st+1,Pn=I[ot];if(0>i(fr,R))ot<J&&0>i(Pn,fr)?(I[W]=Pn,I[ot]=R,W=ot):(I[W]=fr,I[st]=R,W=st);else if(ot<J&&0>i(Pn,R))I[W]=Pn,I[ot]=R,W=ot;else break e}}return A}function i(I,A){var R=I.sortIndex-A.sortIndex;return R!==0?R:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,g=null,c=3,y=!1,_=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=I)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function v(I){if(S=!1,h(I),!_)if(n(l)!==null)_=!0,Cn(k);else{var A=n(u);A!==null&&Xt(v,A.startTime-I)}}function k(I,A){_=!1,S&&(S=!1,f(P),P=-1),y=!0;var R=c;try{for(h(A),g=n(l);g!==null&&(!(g.expirationTime>A)||I&&!Z());){var W=g.callback;if(typeof W=="function"){g.callback=null,c=g.priorityLevel;var J=W(g.expirationTime<=A);A=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(l)&&r(l),h(A)}else r(l);g=n(l)}if(g!==null)var Tn=!0;else{var st=n(u);st!==null&&Xt(v,st.startTime-A),Tn=!1}return Tn}finally{g=null,c=R,y=!1}}var C=!1,T=null,P=-1,F=5,O=-1;function Z(){return!(e.unstable_now()-O<F)}function Jt(){if(T!==null){var I=e.unstable_now();O=I;var A=!0;try{A=T(!0,I)}finally{A?Ae():(C=!1,T=null)}}else C=!1}var Ae;if(typeof d=="function")Ae=function(){d(Jt)};else if(typeof MessageChannel<"u"){var dr=new MessageChannel,pi=dr.port2;dr.port1.onmessage=Jt,Ae=function(){pi.postMessage(null)}}else Ae=function(){M(Jt,0)};function Cn(I){T=I,C||(C=!0,Ae())}function Xt(I,A){P=M(function(){I(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,Cn(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(c){case 1:case 2:case 3:var A=3;break;default:A=c}var R=c;c=A;try{return I()}finally{c=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=c;c=I;try{return A()}finally{c=R}},e.unstable_scheduleCallback=function(I,A,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,I={id:p++,callback:A,priorityLevel:I,startTime:R,expirationTime:J,sortIndex:-1},R>W?(I.sortIndex=R,t(u,I),n(l)===null&&I===n(u)&&(S?(f(P),P=-1):S=!0,Xt(v,R-W))):(I.sortIndex=J,t(l,I),_||y||(_=!0,Cn(k))),I},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(I){var A=c;return function(){var R=c;c=A;try{return I.apply(this,arguments)}finally{c=R}}}})(od);sd.exports=od;var Vp=sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=z,Pe=Vp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ad=new Set,Ur={};function kn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=Object.prototype.hasOwnProperty,Wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},ru={};function Gp(e){return jo.call(ru,e)?!0:jo.call(nu,e)?!1:Wp.test(e)?ru[e]=!0:(nu[e]=!0,!1)}function Kp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qp(e,t,n,r){if(t===null||typeof t>"u"||Kp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var $a=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($a,Ba);oe[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($a,Ba);oe[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($a,Ba);oe[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Va(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qp(t,n,i,r)&&(n=null),r||i===null?Gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),An=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),Uo=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ud=Symbol.for("react.context"),Wa=Symbol.for("react.forward_ref"),Fo=Symbol.for("react.suspense"),zo=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),cd=Symbol.for("react.offscreen"),iu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Xs;function kr(e){if(Xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xs=t&&t[1]||""}return`
`+Xs+e}var Zs=!1;function eo(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function qp(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case An:return"Portal";case Uo:return"Profiler";case Ha:return"StrictMode";case Fo:return"Suspense";case zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ud:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case Wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return t=e.displayName||null,t!==null?t:bo(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return bo(e(t))}catch{}}return null}function Yp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bo(t);case 8:return t===Ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e){var t=dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){e._valueTracker||(e._valueTracker=Jp(e))}function fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $o(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&Va(e,"checked",t,!1)}function Bo(e,t){hd(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vo(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vo(e,t,n){(t!=="number"||Yi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function Bn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ir(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function pd(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wi,gd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wi=wi||document.createElement("div"),wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xp=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){Xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zp=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Go(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qo=null;function Ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,Vn=null,Hn=null;function uu(e){if(e=oi(e)){if(typeof qo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ds(t),qo(e.stateNode,e.type,t))}}function wd(e){Vn?Hn?Hn.push(e):Hn=[e]:Vn=e}function _d(){if(Vn){var e=Vn,t=Hn;if(Hn=Vn=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function Sd(e,t){return e(t)}function kd(){}var to=!1;function Id(e,t,n){if(to)return e(t,n);to=!0;try{return Sd(e,t,n)}finally{to=!1,(Vn!==null||Hn!==null)&&(kd(),_d())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Yo=!1;if(gt)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Yo=!1}function em(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Pr=!1,Ji=null,Xi=!1,Jo=null,tm={onError:function(e){Pr=!0,Ji=e}};function nm(e,t,n,r,i,s,o,a,l){Pr=!1,Ji=null,em.apply(tm,arguments)}function rm(e,t,n,r,i,s,o,a,l){if(nm.apply(this,arguments),Pr){if(Pr){var u=Ji;Pr=!1,Ji=null}else throw Error(w(198));Xi||(Xi=!0,Jo=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(In(e)!==e)throw Error(w(188))}function im(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cu(i),e;if(s===r)return cu(i),t;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Cd(e){return e=im(e),e!==null?Td(e):null}function Td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Td(e);if(t!==null)return t;e=e.sibling}return null}var Pd=Pe.unstable_scheduleCallback,du=Pe.unstable_cancelCallback,sm=Pe.unstable_shouldYield,om=Pe.unstable_requestPaint,Y=Pe.unstable_now,am=Pe.unstable_getCurrentPriorityLevel,Qa=Pe.unstable_ImmediatePriority,Nd=Pe.unstable_UserBlockingPriority,Zi=Pe.unstable_NormalPriority,lm=Pe.unstable_LowPriority,xd=Pe.unstable_IdlePriority,As=null,Xe=null;function um(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(As,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:fm,cm=Math.log,dm=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(cm(e)/dm|0)|0}var _i=64,Si=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function es(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Er(a):(s&=o,s!==0&&(r=Er(s)))}else o=n&~i,o!==0?r=Er(o):s!==0&&(r=Er(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ve(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ad(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Od,Ya,Ld,Dd,Md,Zo=!1,ki=[],jt=null,Ut=null,Ft=null,br=new Map,$r=new Map,xt=[],gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function mr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ym(e,t,n,r,i){switch(t){case"focusin":return jt=mr(jt,e,t,n,r,i),!0;case"dragenter":return Ut=mr(Ut,e,t,n,r,i),!0;case"mouseover":return Ft=mr(Ft,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return br.set(s,mr(br.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$r.set(s,mr($r.get(s)||null,e,t,n,r,i)),!0}return!1}function jd(e){var t=sn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=Ed(n),t!==null){e.blockedOn=t,Md(e.priority,function(){Ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qo=r,n.target.dispatchEvent(r),Qo=null}else return t=oi(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){ji(e)&&n.delete(t)}function vm(){Zo=!1,jt!==null&&ji(jt)&&(jt=null),Ut!==null&&ji(Ut)&&(Ut=null),Ft!==null&&ji(Ft)&&(Ft=null),br.forEach(hu),$r.forEach(hu)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,vm)))}function Br(e){function t(i){return gr(i,e)}if(0<ki.length){gr(ki[0],e);for(var n=1;n<ki.length;n++){var r=ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&gr(jt,e),Ut!==null&&gr(Ut,e),Ft!==null&&gr(Ft,e),br.forEach(t),$r.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&xt.shift()}var Wn=It.ReactCurrentBatchConfig,ts=!0;function wm(e,t,n,r){var i=U,s=Wn.transition;Wn.transition=null;try{U=1,Ja(e,t,n,r)}finally{U=i,Wn.transition=s}}function _m(e,t,n,r){var i=U,s=Wn.transition;Wn.transition=null;try{U=4,Ja(e,t,n,r)}finally{U=i,Wn.transition=s}}function Ja(e,t,n,r){if(ts){var i=ea(e,t,n,r);if(i===null)ho(e,t,r,ns,n),fu(e,r);else if(ym(i,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<gm.indexOf(e)){for(;i!==null;){var s=oi(i);if(s!==null&&Od(s),s=ea(e,t,n,r),s===null&&ho(e,t,r,ns,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ho(e,t,r,null,n)}}var ns=null;function ea(e,t,n,r){if(ns=null,e=Ka(r),e=sn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ns=e,null}function Ud(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(am()){case Qa:return 1;case Nd:return 4;case Zi:case lm:return 16;case xd:return 536870912;default:return 16}default:return 16}}var Dt=null,Xa=null,Ui=null;function Fd(){if(Ui)return Ui;var e,t=Xa,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ui=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function pu(){return!1}function xe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ii:pu,this.isPropagationStopped=pu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=xe(ar),si=Q({},ar,{view:0,detail:0}),Sm=xe(si),ro,io,yr,Rs=Q({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(ro=e.screenX-yr.screenX,io=e.screenY-yr.screenY):io=ro=0,yr=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:io}}),mu=xe(Rs),km=Q({},Rs,{dataTransfer:0}),Im=xe(km),Em=Q({},si,{relatedTarget:0}),so=xe(Em),Cm=Q({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Tm=xe(Cm),Pm=Q({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nm=xe(Pm),xm=Q({},ar,{data:0}),gu=xe(xm),Am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Om[e])?!!t[e]:!1}function el(){return Lm}var Dm=Q({},si,{key:function(e){if(e.key){var t=Am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mm=xe(Dm),jm=Q({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=xe(jm),Um=Q({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),Fm=xe(Um),zm=Q({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=xe(zm),$m=Q({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=xe($m),Vm=[9,13,27,32],tl=gt&&"CompositionEvent"in window,Nr=null;gt&&"documentMode"in document&&(Nr=document.documentMode);var Hm=gt&&"TextEvent"in window&&!Nr,zd=gt&&(!tl||Nr&&8<Nr&&11>=Nr),vu=" ",wu=!1;function bd(e,t){switch(e){case"keyup":return Vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Wm(e,t){switch(e){case"compositionend":return $d(t);case"keypress":return t.which!==32?null:(wu=!0,vu);case"textInput":return e=t.data,e===vu&&wu?null:e;default:return null}}function Gm(e,t){if(On)return e==="compositionend"||!tl&&bd(e,t)?(e=Fd(),Ui=Xa=Dt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var Km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Km[e.type]:t==="textarea"}function Bd(e,t,n,r){wd(r),t=rs(t,"onChange"),0<t.length&&(n=new Za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Vr=null;function Qm(e){Zd(e,0)}function Os(e){var t=Mn(e);if(fd(t))return e}function qm(e,t){if(e==="change")return t}var Vd=!1;if(gt){var oo;if(gt){var ao="oninput"in document;if(!ao){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),ao=typeof Su.oninput=="function"}oo=ao}else oo=!1;Vd=oo&&(!document.documentMode||9<document.documentMode)}function ku(){xr&&(xr.detachEvent("onpropertychange",Hd),Vr=xr=null)}function Hd(e){if(e.propertyName==="value"&&Os(Vr)){var t=[];Bd(t,Vr,e,Ka(e)),Id(Qm,t)}}function Ym(e,t,n){e==="focusin"?(ku(),xr=t,Vr=n,xr.attachEvent("onpropertychange",Hd)):e==="focusout"&&ku()}function Jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Os(Vr)}function Xm(e,t){if(e==="click")return Os(t)}function Zm(e,t){if(e==="input"||e==="change")return Os(t)}function eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:eg;function Hr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jo.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(){for(var e=window,t=Yi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yi(e.document)}return t}function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tg(e){var t=Gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(r!==null&&nl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Eu(n,s);var o=Eu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ng=gt&&"documentMode"in document&&11>=document.documentMode,Ln=null,ta=null,Ar=null,na=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||Ln==null||Ln!==Yi(r)||(r=Ln,"selectionStart"in r&&nl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Hr(Ar,r)||(Ar=r,r=rs(ta,"onSelect"),0<r.length&&(t=new Za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},lo={},Kd={};gt&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Ls(e){if(lo[e])return lo[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kd)return lo[e]=t[n];return e}var Qd=Ls("animationend"),qd=Ls("animationiteration"),Yd=Ls("animationstart"),Jd=Ls("transitionend"),Xd=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Xd.set(e,t),kn(t,[e])}for(var uo=0;uo<Tu.length;uo++){var co=Tu[uo],rg=co.toLowerCase(),ig=co[0].toUpperCase()+co.slice(1);Qt(rg,"on"+ig)}Qt(Qd,"onAnimationEnd");Qt(qd,"onAnimationIteration");Qt(Yd,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Jd,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rm(r,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pu(i,a,u),s=l}}}if(Xi)throw e=Jo,Xi=!1,Jo=null,e}function B(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(ef(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),ef(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ci]){e[Ci]=!0,ad.forEach(function(n){n!=="selectionchange"&&(sg.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,fo("selectionchange",!1,t))}}function ef(e,t,n,r){switch(Ud(t)){case 1:var i=wm;break;case 4:i=_m;break;default:i=Ja}n=i.bind(null,t,n,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ho(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=sn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Id(function(){var u=s,p=Ka(n),g=[];e:{var c=Xd.get(e);if(c!==void 0){var y=Za,_=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":y=Mm;break;case"focusin":_="focus",y=so;break;case"focusout":_="blur",y=so;break;case"beforeblur":case"afterblur":y=so;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fm;break;case Qd:case qd:case Yd:y=Tm;break;case Jd:y=bm;break;case"scroll":y=Sm;break;case"wheel":y=Bm;break;case"copy":case"cut":case"paste":y=Nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=yu}var S=(t&4)!==0,M=!S&&e==="scroll",f=S?c!==null?c+"Capture":null:c;S=[];for(var d=u,h;d!==null;){h=d;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,f!==null&&(v=zr(d,f),v!=null&&S.push(Gr(d,v,h)))),M)break;d=d.return}0<S.length&&(c=new y(c,_,null,n,p),g.push({event:c,listeners:S}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",c&&n!==Qo&&(_=n.relatedTarget||n.fromElement)&&(sn(_)||_[yt]))break e;if((y||c)&&(c=p.window===p?p:(c=p.ownerDocument)?c.defaultView||c.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?sn(_):null,_!==null&&(M=In(_),_!==M||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(S=mu,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=yu,v="onPointerLeave",f="onPointerEnter",d="pointer"),M=y==null?c:Mn(y),h=_==null?c:Mn(_),c=new S(v,d+"leave",y,n,p),c.target=M,c.relatedTarget=h,v=null,sn(p)===u&&(S=new S(f,d+"enter",_,n,p),S.target=h,S.relatedTarget=M,v=S),M=v,y&&_)t:{for(S=y,f=_,d=0,h=S;h;h=xn(h))d++;for(h=0,v=f;v;v=xn(v))h++;for(;0<d-h;)S=xn(S),d--;for(;0<h-d;)f=xn(f),h--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break t;S=xn(S),f=xn(f)}S=null}else S=null;y!==null&&Nu(g,c,y,S,!1),_!==null&&M!==null&&Nu(g,M,_,S,!0)}}e:{if(c=u?Mn(u):window,y=c.nodeName&&c.nodeName.toLowerCase(),y==="select"||y==="input"&&c.type==="file")var k=qm;else if(_u(c))if(Vd)k=Zm;else{k=Jm;var C=Ym}else(y=c.nodeName)&&y.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(k=Xm);if(k&&(k=k(e,u))){Bd(g,k,n,p);break e}C&&C(e,c,u),e==="focusout"&&(C=c._wrapperState)&&C.controlled&&c.type==="number"&&Vo(c,"number",c.value)}switch(C=u?Mn(u):window,e){case"focusin":(_u(C)||C.contentEditable==="true")&&(Ln=C,ta=u,Ar=null);break;case"focusout":Ar=ta=Ln=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Cu(g,n,p);break;case"selectionchange":if(ng)break;case"keydown":case"keyup":Cu(g,n,p)}var T;if(tl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else On?bd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zd&&n.locale!=="ko"&&(On||P!=="onCompositionStart"?P==="onCompositionEnd"&&On&&(T=Fd()):(Dt=p,Xa="value"in Dt?Dt.value:Dt.textContent,On=!0)),C=rs(u,P),0<C.length&&(P=new gu(P,e,null,n,p),g.push({event:P,listeners:C}),T?P.data=T:(T=$d(n),T!==null&&(P.data=T)))),(T=Hm?Wm(e,n):Gm(e,n))&&(u=rs(u,"onBeforeInput"),0<u.length&&(p=new gu("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=T))}Zd(g,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zr(e,n),s!=null&&r.unshift(Gr(e,s,i)),s=zr(e,t),s!=null&&r.push(Gr(e,s,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=zr(n,s),l!=null&&o.unshift(Gr(n,l,a))):i||(l=zr(n,s),l!=null&&o.push(Gr(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var og=/\r\n?/g,ag=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(ag,"")}function Ti(e,t,n){if(t=xu(t),xu(e)!==t&&n)throw Error(w(425))}function is(){}var ra=null,ia=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,lg=typeof clearTimeout=="function"?clearTimeout:void 0,Au=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Au<"u"?function(e){return Au.resolve(null).then(e).catch(cg)}:oa;function cg(e){setTimeout(function(){throw e})}function po(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Br(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Ye="__reactFiber$"+lr,Kr="__reactProps$"+lr,yt="__reactContainer$"+lr,aa="__reactEvents$"+lr,dg="__reactListeners$"+lr,fg="__reactHandles$"+lr;function sn(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ru(e);e!==null;){if(n=e[Ye])return n;e=Ru(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[Ye]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ds(e){return e[Kr]||null}var la=[],jn=-1;function qt(e){return{current:e}}function V(e){0>jn||(e.current=la[jn],la[jn]=null,jn--)}function $(e,t){jn++,la[jn]=e.current,e.current=t}var Kt={},ce=qt(Kt),_e=qt(!1),hn=Kt;function Zn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function ss(){V(_e),V(ce)}function Ou(e,t,n){if(ce.current!==Kt)throw Error(w(168));$(ce,t),$(_e,n)}function tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Yp(e)||"Unknown",i));return Q({},n,r)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,hn=ce.current,$(ce,e),$(_e,_e.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=tf(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,V(_e),V(ce),$(ce,e)):V(_e),$(_e,n)}var ut=null,Ms=!1,mo=!1;function nf(e){ut===null?ut=[e]:ut.push(e)}function hg(e){Ms=!0,nf(e)}function Yt(){if(!mo&&ut!==null){mo=!0;var e=0,t=U;try{var n=ut;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,Ms=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),Pd(Qa,Yt),i}finally{U=t,mo=!1}}return null}var Un=[],Fn=0,as=null,ls=0,Re=[],Oe=0,pn=null,dt=1,ft="";function tn(e,t){Un[Fn++]=ls,Un[Fn++]=as,as=e,ls=t}function rf(e,t,n){Re[Oe++]=dt,Re[Oe++]=ft,Re[Oe++]=pn,pn=e;var r=dt;e=ft;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var s=32-Ve(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Ve(t)+i|n<<i|r,ft=s+e}else dt=1<<s|n<<i|r,ft=e}function rl(e){e.return!==null&&(tn(e,1),rf(e,1,0))}function il(e){for(;e===as;)as=Un[--Fn],Un[Fn]=null,ls=Un[--Fn],Un[Fn]=null;for(;e===pn;)pn=Re[--Oe],Re[Oe]=null,ft=Re[--Oe],Re[Oe]=null,dt=Re[--Oe],Re[Oe]=null}var Ce=null,Ee=null,H=!1,$e=null;function sf(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ee=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(H){var t=Ee;if(t){var n=t;if(!Du(e,t)){if(ua(e))throw Error(w(418));t=zt(n.nextSibling);var r=Ce;t&&Du(e,t)?sf(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(ua(e))throw Error(w(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Pi(e){if(e!==Ce)return!1;if(!H)return Mu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=Ee)){if(ua(e))throw of(),Error(w(418));for(;t;)sf(e,t),t=zt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ce?zt(e.stateNode.nextSibling):null;return!0}function of(){for(var e=Ee;e;)e=zt(e.nextSibling)}function er(){Ee=Ce=null,H=!1}function sl(e){$e===null?$e=[e]:$e.push(e)}var pg=It.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function af(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Vt(f,d),f.index=0,f.sibling=null,f}function s(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,h,v){return d===null||d.tag!==6?(d=ko(h,f.mode,v),d.return=f,d):(d=i(d,h),d.return=f,d)}function l(f,d,h,v){var k=h.type;return k===Rn?p(f,d,h.props.children,v,h.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pt&&ju(k)===d.type)?(v=i(d,h.props),v.ref=vr(f,d,h),v.return=f,v):(v=Wi(h.type,h.key,h.props,null,f.mode,v),v.ref=vr(f,d,h),v.return=f,v)}function u(f,d,h,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Io(h,f.mode,v),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function p(f,d,h,v,k){return d===null||d.tag!==7?(d=dn(h,f.mode,v,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function g(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ko(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yi:return h=Wi(d.type,d.key,d.props,null,f.mode,h),h.ref=vr(f,null,d),h.return=f,h;case An:return d=Io(d,f.mode,h),d.return=f,d;case Pt:var v=d._init;return g(f,v(d._payload),h)}if(Ir(d)||hr(d))return d=dn(d,f.mode,h,null),d.return=f,d;Ni(f,d)}return null}function c(f,d,h,v){var k=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(f,d,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:return h.key===k?l(f,d,h,v):null;case An:return h.key===k?u(f,d,h,v):null;case Pt:return k=h._init,c(f,d,k(h._payload),v)}if(Ir(h)||hr(h))return k!==null?null:p(f,d,h,v,null);Ni(f,h)}return null}function y(f,d,h,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(h)||null,a(d,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yi:return f=f.get(v.key===null?h:v.key)||null,l(d,f,v,k);case An:return f=f.get(v.key===null?h:v.key)||null,u(d,f,v,k);case Pt:var C=v._init;return y(f,d,h,C(v._payload),k)}if(Ir(v)||hr(v))return f=f.get(h)||null,p(d,f,v,k,null);Ni(d,v)}return null}function _(f,d,h,v){for(var k=null,C=null,T=d,P=d=0,F=null;T!==null&&P<h.length;P++){T.index>P?(F=T,T=null):F=T.sibling;var O=c(f,T,h[P],v);if(O===null){T===null&&(T=F);break}e&&T&&O.alternate===null&&t(f,T),d=s(O,d,P),C===null?k=O:C.sibling=O,C=O,T=F}if(P===h.length)return n(f,T),H&&tn(f,P),k;if(T===null){for(;P<h.length;P++)T=g(f,h[P],v),T!==null&&(d=s(T,d,P),C===null?k=T:C.sibling=T,C=T);return H&&tn(f,P),k}for(T=r(f,T);P<h.length;P++)F=y(T,f,P,h[P],v),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?P:F.key),d=s(F,d,P),C===null?k=F:C.sibling=F,C=F);return e&&T.forEach(function(Z){return t(f,Z)}),H&&tn(f,P),k}function S(f,d,h,v){var k=hr(h);if(typeof k!="function")throw Error(w(150));if(h=k.call(h),h==null)throw Error(w(151));for(var C=k=null,T=d,P=d=0,F=null,O=h.next();T!==null&&!O.done;P++,O=h.next()){T.index>P?(F=T,T=null):F=T.sibling;var Z=c(f,T,O.value,v);if(Z===null){T===null&&(T=F);break}e&&T&&Z.alternate===null&&t(f,T),d=s(Z,d,P),C===null?k=Z:C.sibling=Z,C=Z,T=F}if(O.done)return n(f,T),H&&tn(f,P),k;if(T===null){for(;!O.done;P++,O=h.next())O=g(f,O.value,v),O!==null&&(d=s(O,d,P),C===null?k=O:C.sibling=O,C=O);return H&&tn(f,P),k}for(T=r(f,T);!O.done;P++,O=h.next())O=y(T,f,P,O.value,v),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?P:O.key),d=s(O,d,P),C===null?k=O:C.sibling=O,C=O);return e&&T.forEach(function(Jt){return t(f,Jt)}),H&&tn(f,P),k}function M(f,d,h,v){if(typeof h=="object"&&h!==null&&h.type===Rn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:e:{for(var k=h.key,C=d;C!==null;){if(C.key===k){if(k=h.type,k===Rn){if(C.tag===7){n(f,C.sibling),d=i(C,h.props.children),d.return=f,f=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pt&&ju(k)===C.type){n(f,C.sibling),d=i(C,h.props),d.ref=vr(f,C,h),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===Rn?(d=dn(h.props.children,f.mode,v,h.key),d.return=f,f=d):(v=Wi(h.type,h.key,h.props,null,f.mode,v),v.ref=vr(f,d,h),v.return=f,f=v)}return o(f);case An:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Io(h,f.mode,v),d.return=f,f=d}return o(f);case Pt:return C=h._init,M(f,d,C(h._payload),v)}if(Ir(h))return _(f,d,h,v);if(hr(h))return S(f,d,h,v);Ni(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=ko(h,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return M}var tr=af(!0),lf=af(!1),us=qt(null),cs=null,zn=null,ol=null;function al(){ol=zn=cs=null}function ll(e){var t=us.current;V(us),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){cs=e,ol=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(cs===null)throw Error(w(308));zn=e,cs.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var on=null;function ul(e){on===null?on=[e]:on.push(e)}function uf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ul(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,ul(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}function Uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ds(e,t,n,r){var i=e.updateQueue;Nt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var g=i.baseState;o=0,p=u=l=null,a=s;do{var c=a.lane,y=a.eventTime;if((r&c)===c){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,S=a;switch(c=t,y=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){g=_.call(y,g,c);break e}g=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,c=typeof _=="function"?_.call(y,g,c):_,c==null)break e;g=Q({},g,c);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else y={eventTime:y,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,l=g):p=p.next=y,o|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(p===null&&(l=g),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);gn|=o,e.lanes=o,e.memoizedState=g}}function Fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var ai={},Ze=qt(ai),Qr=qt(ai),qr=qt(ai);function an(e){if(e===ai)throw Error(w(174));return e}function dl(e,t){switch($(qr,t),$(Qr,e),$(Ze,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wo(t,e)}V(Ze),$(Ze,t)}function nr(){V(Ze),V(Qr),V(qr)}function df(e){an(qr.current);var t=an(Ze.current),n=Wo(t,e.type);t!==n&&($(Qr,e),$(Ze,n))}function fl(e){Qr.current===e&&(V(Ze),V(Qr))}var G=qt(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=[];function hl(){for(var e=0;e<go.length;e++)go[e]._workInProgressVersionPrimary=null;go.length=0}var bi=It.ReactCurrentDispatcher,yo=It.ReactCurrentBatchConfig,mn=0,K=null,ee=null,ne=null,hs=!1,Rr=!1,Yr=0,mg=0;function ae(){throw Error(w(321))}function pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function ml(e,t,n,r,i,s){if(mn=s,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bi.current=e===null||e.memoizedState===null?wg:_g,e=n(r,i),Rr){s=0;do{if(Rr=!1,Yr=0,25<=s)throw Error(w(301));s+=1,ne=ee=null,t.updateQueue=null,bi.current=Sg,e=n(r,i)}while(Rr)}if(bi.current=ps,t=ee!==null&&ee.next!==null,mn=0,ne=ee=K=null,hs=!1,t)throw Error(w(300));return e}function gl(){var e=Yr!==0;return Yr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?K.memoizedState=ne=e:ne=ne.next=e,ne}function je(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?K.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?K.memoizedState=ne=e:ne=ne.next=e}return ne}function Jr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=je(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((mn&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=g,o=r):l=l.next=g,K.lanes|=p,gn|=p}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ge(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,K.lanes|=s,gn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=je(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ge(s,t.memoizedState)||(we=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ff(){}function hf(e,t){var n=K,r=je(),i=t(),s=!Ge(r.memoizedState,i);if(s&&(r.memoizedState=i,we=!0),r=r.queue,yl(gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Xr(9,mf.bind(null,n,r,i,t),void 0,null),re===null)throw Error(w(349));mn&30||pf(n,t,i)}return i}function pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mf(e,t,n,r){t.value=n,t.getSnapshot=r,yf(t)&&vf(e)}function gf(e,t,n){return n(function(){yf(t)&&vf(e)})}function yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function vf(e){var t=vt(e,1);t!==null&&He(t,e,1,-1)}function zu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=vg.bind(null,K,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wf(){return je().memoizedState}function $i(e,t,n,r){var i=qe();K.flags|=e,i.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function js(e,t,n,r){var i=je();r=r===void 0?null:r;var s=void 0;if(ee!==null){var o=ee.memoizedState;if(s=o.destroy,r!==null&&pl(r,o.deps)){i.memoizedState=Xr(t,n,s,r);return}}K.flags|=e,i.memoizedState=Xr(1|t,n,s,r)}function bu(e,t){return $i(8390656,8,e,t)}function yl(e,t){return js(2048,8,e,t)}function _f(e,t){return js(4,2,e,t)}function Sf(e,t){return js(4,4,e,t)}function kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,js(4,4,kf.bind(null,t,e),n)}function vl(){}function Ef(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cf(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tf(e,t,n){return mn&21?(Ge(n,t)||(n=Ad(),K.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function gg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=yo.transition;yo.transition={};try{e(!1),t()}finally{U=n,yo.transition=r}}function Pf(){return je().memoizedState}function yg(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))xf(t,n);else if(n=uf(e,t,n,r),n!==null){var i=fe();He(n,e,r,i),Af(n,t,r)}}function vg(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))xf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ge(a,o)){var l=t.interleaved;l===null?(i.next=i,ul(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=uf(e,t,i,r),n!==null&&(i=fe(),He(n,e,r,i),Af(n,t,r))}}function Nf(e){var t=e.alternate;return e===K||t!==null&&t===K}function xf(e,t){Rr=hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qa(e,n)}}var ps={readContext:Me,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},wg={readContext:Me,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yg.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:vl,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=gg.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=qe();if(H){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));mn&30||pf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,bu(gf.bind(null,r,s,e),[e]),r.flags|=2048,Xr(9,mf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=qe(),t=re.identifierPrefix;if(H){var n=ft,r=dt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_g={readContext:Me,useCallback:Ef,useContext:Me,useEffect:yl,useImperativeHandle:If,useInsertionEffect:_f,useLayoutEffect:Sf,useMemo:Cf,useReducer:vo,useRef:wf,useState:function(){return vo(Jr)},useDebugValue:vl,useDeferredValue:function(e){var t=je();return Tf(t,ee.memoizedState,e)},useTransition:function(){var e=vo(Jr)[0],t=je().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:hf,useId:Pf,unstable_isNewReconciler:!1},Sg={readContext:Me,useCallback:Ef,useContext:Me,useEffect:yl,useImperativeHandle:If,useInsertionEffect:_f,useLayoutEffect:Sf,useMemo:Cf,useReducer:wo,useRef:wf,useState:function(){return wo(Jr)},useDebugValue:vl,useDeferredValue:function(e){var t=je();return ee===null?t.memoizedState=e:Tf(t,ee.memoizedState,e)},useTransition:function(){var e=wo(Jr)[0],t=je().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:hf,useId:Pf,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Bt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=bt(e,s,i),t!==null&&(He(t,e,i,r),zi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Bt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=bt(e,s,i),t!==null&&(He(t,e,i,r),zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Bt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=bt(e,i,r),t!==null&&(He(t,e,r,n),zi(t,e,r))}};function $u(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(i,s):!0}function Rf(e,t,n){var r=!1,i=Kt,s=t.contextType;return typeof s=="object"&&s!==null?s=Me(s):(i=Se(t)?hn:ce.current,r=t.contextTypes,s=(r=r!=null)?Zn(e,i):Kt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},cl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Me(s):(s=Se(t)?hn:ce.current,i.context=Zn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(fa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Us.enqueueReplaceState(i,i.state,null),ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=qp(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function _o(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kg=typeof WeakMap=="function"?WeakMap:Map;function Of(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gs||(gs=!0,Ea=r),pa(e,t)},n}function Lf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pa(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jg.bind(null,e,t,n),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var Ig=It.ReactCurrentOwner,we=!1;function de(e,t,n,r){t.child=e===null?lf(t,null,n,r):tr(t,e.child,n,r)}function Gu(e,t,n,r,i){n=n.render;var s=t.ref;return Gn(t,i),r=ml(e,t,n,r,s,i),n=gl(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(H&&n&&rl(t),t.flags|=1,de(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Tl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Df(e,t,s,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(o,r)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=Vt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Hr(s,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,wt(e,t,i)}return ma(e,t,n,r,i)}function Mf(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$($n,Ie),Ie|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$($n,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$($n,Ie),Ie|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,$($n,Ie),Ie|=r;return de(e,t,i,n),t.child}function jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ma(e,t,n,r,i){var s=Se(n)?hn:ce.current;return s=Zn(t,s),Gn(t,i),n=ml(e,t,n,r,s,i),r=gl(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(H&&r&&rl(t),t.flags|=1,de(e,t,n,i),t.child)}function Qu(e,t,n,r,i){if(Se(n)){var s=!0;os(t)}else s=!1;if(Gn(t,i),t.stateNode===null)Bi(e,t),Rf(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Se(n)?hn:ce.current,u=Zn(t,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Bu(t,o,r,u),Nt=!1;var c=t.memoizedState;o.state=c,ds(t,r,o,i),l=t.memoizedState,a!==r||c!==l||_e.current||Nt?(typeof p=="function"&&(fa(t,n,p,r),l=t.memoizedState),(a=Nt||$u(t,n,a,r,c,l,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,cf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ze(t.type,a),o.props=u,g=t.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=Se(n)?hn:ce.current,l=Zn(t,l));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||c!==l)&&Bu(t,o,r,l),Nt=!1,c=t.memoizedState,o.state=c,ds(t,r,o,i);var _=t.memoizedState;a!==g||c!==_||_e.current||Nt?(typeof y=="function"&&(fa(t,n,y,r),_=t.memoizedState),(u=Nt||$u(t,n,u,r,c,_,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,s,i)}function ga(e,t,n,r,i,s){jf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Lu(t,n,!1),wt(e,t,s);r=t.stateNode,Ig.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tr(t,e.child,null,s),t.child=tr(t,null,a,s)):de(e,t,a,s),t.memoizedState=r.state,i&&Lu(t,n,!0),t.child}function Uf(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),dl(e,t.containerInfo)}function qu(e,t,n,r,i){return er(),sl(i),t.flags|=256,de(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ff(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(G,i&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bs(o,r,0,null),e=dn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=va(n),t.memoizedState=ya,e):wl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Eg(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vt(a,s):(s=dn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?va(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return s=e.child,e=s.sibling,r=Vt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wl(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xi(e,t,n,r){return r!==null&&sl(r),tr(t,e.child,null,n),e=wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eg(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=_o(Error(w(422))),xi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=bs({mode:"visible",children:r.children},i,0,null),s=dn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&tr(t,e.child,null,o),t.child.memoizedState=va(o),t.memoizedState=ya,s);if(!(t.mode&1))return xi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=_o(s,r,void 0),xi(e,t,o,r)}if(a=(o&e.childLanes)!==0,we||a){if(r=re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vt(e,i),He(r,e,i,-1))}return Cl(),r=_o(Error(w(421))),xi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ug.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ee=zt(i.nextSibling),Ce=t,H=!0,$e=null,e!==null&&(Re[Oe++]=dt,Re[Oe++]=ft,Re[Oe++]=pn,dt=e.id,ft=e.overflow,pn=t),t=wl(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function So(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zf(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(de(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),So(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}So(t,!0,n,null,s);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cg(e,t,n){switch(t.tag){case 3:Uf(t),er();break;case 5:df(t);break;case 1:Se(t.type)&&os(t);break;case 4:dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Ff(e,t,n):($(G,G.current&1),e=wt(e,t,n),e!==null?e.sibling:null);$(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Mf(e,t,n)}return wt(e,t,n)}var bf,wa,$f,Bf;bf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};$f=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(Ze.current);var s=null;switch(n){case"input":i=$o(e,i),r=$o(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Ho(e,i),r=Ho(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=is)}Go(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tg(e,t,n){var r=t.pendingProps;switch(il(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return Se(t.type)&&ss(),le(t),null;case 3:return r=t.stateNode,nr(),V(_e),V(ce),hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Pa($e),$e=null))),wa(e,t),le(t),null;case 5:fl(t);var i=an(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)$f(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return le(t),null}if(e=an(Ze.current),Pi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ye]=t,r[Kr]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)B(Cr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":su(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":au(r,s),B("invalid",r)}Go(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",""+a]):Ur.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":vi(r),ou(r,s,!0);break;case"textarea":vi(r),lu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=is)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ye]=t,e[Kr]=r,bf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ko(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)B(Cr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":su(e,r),i=$o(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":au(e,r),i=Ho(e,r),B("invalid",e);break;default:i=r}Go(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vd(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fr(e,l):typeof l=="number"&&Fr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ur.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",e):l!=null&&Va(e,s,l,o))}switch(n){case"input":vi(e),ou(e,r,!1);break;case"textarea":vi(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Bn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=an(qr.current),an(Ze.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(s=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return le(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ee!==null&&t.mode&1&&!(t.flags&128))of(),er(),t.flags|=98560,s=!1;else if(s=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ye]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else $e!==null&&(Pa($e),$e=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?te===0&&(te=3):Cl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nr(),wa(e,t),e===null&&Wr(t.stateNode.containerInfo),le(t),null;case 10:return ll(t.type._context),le(t),null;case 17:return Se(t.type)&&ss(),le(t),null;case 19:if(V(G),s=t.memoizedState,s===null)return le(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)wr(s,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fs(e),o!==null){for(t.flags|=128,wr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>ir&&(t.flags|=128,r=!0,wr(s,!1),t.lanes=4194304)}else{if(!r)if(e=fs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!H)return le(t),null}else 2*Y()-s.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,wr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=G.current,$(G,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return El(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Pg(e,t){switch(il(t),t.tag){case 1:return Se(t.type)&&ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),V(_e),V(ce),hl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fl(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return nr(),null;case 10:return ll(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var Ai=!1,ue=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,E=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function _a(e,t,n){try{n()}catch(r){q(e,t,r)}}var Ju=!1;function xg(e,t){if(ra=ts,e=Gd(),nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,g=e,c=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(a=o+i),g!==s||r!==0&&g.nodeType!==3||(l=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(y=g.firstChild)!==null;)c=g,g=y;for(;;){if(g===e)break t;if(c===n&&++u===i&&(a=o),c===s&&++p===r&&(l=o),(y=g.nextSibling)!==null)break;g=c,c=g.parentNode}g=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},ts=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,M=_.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:ze(t.type,S),M);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return _=Ju,Ju=!1,_}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&_a(t,n,s)}i=i.next}while(i!==r)}}function Fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[Kr],delete t[aa],delete t[dg],delete t[fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hf(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var ie=null,be=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(As,n)}catch{}switch(n.tag){case 5:ue||bn(n,t);case 6:var r=ie,i=be;ie=null,Ct(e,t,n),ie=r,be=i,ie!==null&&(be?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(be?(e=ie,n=n.stateNode,e.nodeType===8?po(e.parentNode,n):e.nodeType===1&&po(e,n),Br(e)):po(ie,n.stateNode));break;case 4:r=ie,i=be,ie=n.stateNode.containerInfo,be=!0,Ct(e,t,n),ie=r,be=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_a(n,t,o),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!ue&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,Ct(e,t,n),ue=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ng),t.forEach(function(r){var i=Fg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,be=!1;break e;case 3:ie=a.stateNode.containerInfo,be=!0;break e;case 4:ie=a.stateNode.containerInfo,be=!0;break e}a=a.return}if(ie===null)throw Error(w(160));Wf(s,o,i),ie=null,be=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Qe(e),r&4){try{Or(3,e,e.return),Fs(3,e)}catch(S){q(e,e.return,S)}try{Or(5,e,e.return)}catch(S){q(e,e.return,S)}}break;case 1:Fe(t,e),Qe(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(Fe(t,e),Qe(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(S){q(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hd(i,s),Ko(a,o);var u=Ko(a,s);for(o=0;o<l.length;o+=2){var p=l[o],g=l[o+1];p==="style"?vd(i,g):p==="dangerouslySetInnerHTML"?gd(i,g):p==="children"?Fr(i,g):Va(i,p,g,u)}switch(a){case"input":Bo(i,s);break;case"textarea":pd(i,s);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Bn(i,!!s.multiple,y,!1):c!==!!s.multiple&&(s.defaultValue!=null?Bn(i,!!s.multiple,s.defaultValue,!0):Bn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Kr]=s}catch(S){q(e,e.return,S)}}break;case 6:if(Fe(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){q(e,e.return,S)}}break;case 3:if(Fe(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(S){q(e,e.return,S)}break;case 4:Fe(t,e),Qe(e);break;case 13:Fe(t,e),Qe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kl=Y())),r&4&&Zu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(u=ue)||p,Fe(t,e),ue=u):Fe(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(E=e,p=e.child;p!==null;){for(g=E=p;E!==null;){switch(c=E,y=c.child,c.tag){case 0:case 11:case 14:case 15:Or(4,c,c.return);break;case 1:bn(c,c.return);var _=c.stateNode;if(typeof _.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(S){q(r,n,S)}}break;case 5:bn(c,c.return);break;case 22:if(c.memoizedState!==null){tc(g);continue}}y!==null?(y.return=c,E=y):tc(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=g.stateNode,l=g.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yd("display",o))}catch(S){q(e,e.return,S)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(S){q(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Fe(t,e),Qe(e),r&4&&Zu(e);break;case 21:break;default:Fe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var s=Xu(e);Ia(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Xu(e);ka(e,a,o);break;default:throw Error(w(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ag(e,t,n){E=e,Kf(e)}function Kf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ai;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ue;a=Ai;var u=ue;if(Ai=o,(ue=l)&&!u)for(E=i;E!==null;)o=E,l=o.child,o.tag===22&&o.memoizedState!==null?nc(i):l!==null?(l.return=o,E=l):nc(i);for(;s!==null;)E=s,Kf(s),s=s.sibling;E=i,Ai=a,ue=u}ec(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):ec(e)}}function ec(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Fs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Br(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ue||t.flags&512&&Sa(t)}catch(c){q(t,t.return,c)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function tc(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function nc(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fs(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var s=t.return;try{Sa(t)}catch(l){q(t,s,l)}break;case 5:var o=t.return;try{Sa(t)}catch(l){q(t,o,l)}}}catch(l){q(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Rg=Math.ceil,ms=It.ReactCurrentDispatcher,_l=It.ReactCurrentOwner,De=It.ReactCurrentBatchConfig,D=0,re=null,X=null,se=0,Ie=0,$n=qt(0),te=0,Zr=null,gn=0,zs=0,Sl=0,Lr=null,ve=null,kl=0,ir=1/0,lt=null,gs=!1,Ea=null,$t=null,Ri=!1,Mt=null,ys=0,Dr=0,Ca=null,Vi=-1,Hi=0;function fe(){return D&6?Y():Vi!==-1?Vi:Vi=Y()}function Bt(e){return e.mode&1?D&2&&se!==0?se&-se:pg.transition!==null?(Hi===0&&(Hi=Ad()),Hi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ud(e.type)),e):1}function He(e,t,n,r){if(50<Dr)throw Dr=0,Ca=null,Error(w(185));ii(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(zs|=n),te===4&&At(e,se)),ke(e,r),n===1&&D===0&&!(t.mode&1)&&(ir=Y()+500,Ms&&Yt()))}function ke(e,t){var n=e.callbackNode;pm(e,t);var r=es(e,e===re?se:0);if(r===0)n!==null&&du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&du(n),t===1)e.tag===0?hg(rc.bind(null,e)):nf(rc.bind(null,e)),ug(function(){!(D&6)&&Yt()}),n=null;else{switch(Rd(r)){case 1:n=Qa;break;case 4:n=Nd;break;case 16:n=Zi;break;case 536870912:n=xd;break;default:n=Zi}n=th(n,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qf(e,t){if(Vi=-1,Hi=0,D&6)throw Error(w(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=es(e,e===re?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vs(e,r);else{t=r;var i=D;D|=2;var s=Yf();(re!==e||se!==t)&&(lt=null,ir=Y()+500,cn(e,t));do try{Dg();break}catch(a){qf(e,a)}while(!0);al(),ms.current=s,D=i,X!==null?t=0:(re=null,se=0,t=te)}if(t!==0){if(t===2&&(i=Xo(e),i!==0&&(r=i,t=Ta(e,i))),t===1)throw n=Zr,cn(e,0),At(e,r),ke(e,Y()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!Og(i)&&(t=vs(e,r),t===2&&(s=Xo(e),s!==0&&(r=s,t=Ta(e,s))),t===1))throw n=Zr,cn(e,0),At(e,r),ke(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:nn(e,ve,lt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=kl+500-Y(),10<t)){if(es(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oa(nn.bind(null,e,ve,lt),t);break}nn(e,ve,lt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ve(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rg(r/1960))-r,10<r){e.timeoutHandle=oa(nn.bind(null,e,ve,lt),r);break}nn(e,ve,lt);break;case 5:nn(e,ve,lt);break;default:throw Error(w(329))}}}return ke(e,Y()),e.callbackNode===n?Qf.bind(null,e):null}function Ta(e,t){var n=Lr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=vs(e,t),e!==2&&(t=ve,ve=n,t!==null&&Pa(t)),e}function Pa(e){ve===null?ve=e:ve.push.apply(ve,e)}function Og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ge(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Sl,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(D&6)throw Error(w(327));Kn();var t=es(e,0);if(!(t&1))return ke(e,Y()),null;var n=vs(e,t);if(e.tag!==0&&n===2){var r=Xo(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=Zr,cn(e,0),At(e,t),ke(e,Y()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,ve,lt),ke(e,Y()),null}function Il(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(ir=Y()+500,Ms&&Yt())}}function yn(e){Mt!==null&&Mt.tag===0&&!(D&6)&&Kn();var t=D;D|=1;var n=De.transition,r=U;try{if(De.transition=null,U=1,e)return e()}finally{U=r,De.transition=n,D=t,!(D&6)&&Yt()}}function El(){Ie=$n.current,V($n)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lg(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(il(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ss();break;case 3:nr(),V(_e),V(ce),hl();break;case 5:fl(r);break;case 4:nr();break;case 13:V(G);break;case 19:V(G);break;case 10:ll(r.type._context);break;case 22:case 23:El()}n=n.return}if(re=e,X=e=Vt(e.current,null),se=Ie=t,te=0,Zr=null,Sl=zs=gn=0,ve=Lr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}on=null}return e}function qf(e,t){do{var n=X;try{if(al(),bi.current=ps,hs){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hs=!1}if(mn=0,ne=ee=K=null,Rr=!1,Yr=0,_l.current=null,n===null||n.return===null){te=1,Zr=t,X=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var c=p.alternate;c?(p.updateQueue=c.updateQueue,p.memoizedState=c.memoizedState,p.lanes=c.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Hu(o);if(y!==null){y.flags&=-257,Wu(y,o,a,s,t),y.mode&1&&Vu(s,u,t),t=y,l=u;var _=t.updateQueue;if(_===null){var S=new Set;S.add(l),t.updateQueue=S}else _.add(l);break e}else{if(!(t&1)){Vu(s,u,t),Cl();break e}l=Error(w(426))}}else if(H&&a.mode&1){var M=Hu(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Wu(M,o,a,s,t),sl(rr(l,a));break e}}s=l=rr(l,a),te!==4&&(te=2),Lr===null?Lr=[s]:Lr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Of(s,l,t);Uu(s,f);break e;case 1:a=l;var d=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($t===null||!$t.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Lf(s,a,t);Uu(s,v);break e}}s=s.return}while(s!==null)}Xf(n)}catch(k){t=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Yf(){var e=ms.current;return ms.current=ps,e===null?ps:e}function Cl(){(te===0||te===3||te===2)&&(te=4),re===null||!(gn&268435455)&&!(zs&268435455)||At(re,se)}function vs(e,t){var n=D;D|=2;var r=Yf();(re!==e||se!==t)&&(lt=null,cn(e,t));do try{Lg();break}catch(i){qf(e,i)}while(!0);if(al(),D=n,ms.current=r,X!==null)throw Error(w(261));return re=null,se=0,te}function Lg(){for(;X!==null;)Jf(X)}function Dg(){for(;X!==null&&!sm();)Jf(X)}function Jf(e){var t=eh(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Xf(e):X=t,_l.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,X=null;return}}else if(n=Tg(n,t,Ie),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);te===0&&(te=5)}function nn(e,t,n){var r=U,i=De.transition;try{De.transition=null,U=1,Mg(e,t,n,r)}finally{De.transition=i,U=r}return null}function Mg(e,t,n,r){do Kn();while(Mt!==null);if(D&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(mm(e,s),e===re&&(X=re=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ri||(Ri=!0,th(Zi,function(){return Kn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=De.transition,De.transition=null;var o=U;U=1;var a=D;D|=4,_l.current=null,xg(e,n),Gf(n,e),tg(ia),ts=!!ra,ia=ra=null,e.current=n,Ag(n),om(),D=a,U=o,De.transition=s}else e.current=n;if(Ri&&(Ri=!1,Mt=e,ys=i),s=e.pendingLanes,s===0&&($t=null),um(n.stateNode),ke(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gs)throw gs=!1,e=Ea,Ea=null,e;return ys&1&&e.tag!==0&&Kn(),s=e.pendingLanes,s&1?e===Ca?Dr++:(Dr=0,Ca=e):Dr=0,Yt(),null}function Kn(){if(Mt!==null){var e=Rd(ys),t=De.transition,n=U;try{if(De.transition=null,U=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,ys=0,D&6)throw Error(w(331));var i=D;for(D|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:Or(8,p,s)}var g=p.child;if(g!==null)g.return=p,E=g;else for(;E!==null;){p=E;var c=p.sibling,y=p.return;if(Vf(p),p===u){E=null;break}if(c!==null){c.return=y,E=c;break}E=y}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Or(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,E=f;break e}E=s.return}}var d=e.current;for(E=d;E!==null;){o=E;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,E=h;else e:for(o=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fs(9,a)}}catch(k){q(a,a.return,k)}if(a===o){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(D=i,Yt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(As,e)}catch{}r=!0}return r}finally{U=n,De.transition=t}}return!1}function ic(e,t,n){t=rr(n,t),t=Of(e,t,1),e=bt(e,t,1),t=fe(),e!==null&&(ii(e,1,t),ke(e,t))}function q(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=rr(n,e),e=Lf(t,e,1),t=bt(t,e,1),e=fe(),t!==null&&(ii(t,1,e),ke(t,e));break}}t=t.return}}function jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>Y()-kl?cn(e,0):Sl|=n),ke(e,t)}function Zf(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=fe();e=vt(e,t),e!==null&&(ii(e,t,n),ke(e,n))}function Ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zf(e,n)}function Fg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Zf(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Cg(e,t,n);we=!!(e.flags&131072)}else we=!1,H&&t.flags&1048576&&rf(t,ls,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var i=Zn(t,ce.current);Gn(t,n),i=ml(null,t,r,e,i,n);var s=gl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(s=!0,os(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cl(t),i.updater=Us,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=ga(null,t,r,!0,s,n)):(t.tag=0,H&&s&&rl(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bg(r),e=ze(r,e),i){case 0:t=ma(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,ze(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Qu(e,t,r,i,n);case 3:e:{if(Uf(t),e===null)throw Error(w(387));r=t.pendingProps,s=t.memoizedState,i=s.element,cf(e,t),ds(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=rr(Error(w(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=rr(Error(w(424)),t),t=qu(e,t,r,n,i);break e}else for(Ee=zt(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,$e=null,n=lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===i){t=wt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return df(t),e===null&&ca(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,sa(r,i)?o=null:s!==null&&sa(r,s)&&(t.flags|=32),jf(e,t),de(e,t,o,n),t.child;case 6:return e===null&&ca(t),null;case 13:return Ff(e,t,n);case 4:return dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Gu(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,$(us,r._currentValue),r._currentValue=o,s!==null)if(Ge(s.value,o)){if(s.children===i.children&&!_e.current){t=wt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),da(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),da(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=Me(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),Ku(e,t,r,i,n);case 15:return Df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Bi(e,t),t.tag=1,Se(r)?(e=!0,os(t)):e=!1,Gn(t,n),Rf(t,r,i),ha(t,r,i,n),ga(null,t,r,!0,e,n);case 19:return zf(e,t,n);case 22:return Mf(e,t,n)}throw Error(w(156,t.tag))};function th(e,t){return Pd(e,t)}function zg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new zg(e,t,n,r)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bg(e){if(typeof e=="function")return Tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wa)return 11;if(e===Ga)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Tl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rn:return dn(n.children,i,s,t);case Ha:o=8,i|=8;break;case Uo:return e=Le(12,n,t,i|2),e.elementType=Uo,e.lanes=s,e;case Fo:return e=Le(13,n,t,i),e.elementType=Fo,e.lanes=s,e;case zo:return e=Le(19,n,t,i),e.elementType=zo,e.lanes=s,e;case cd:return bs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:o=10;break e;case ud:o=9;break e;case Wa:o=11;break e;case Ga:o=14;break e;case Pt:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Le(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function dn(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=Le(22,e,r,t),e.elementType=cd,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Io(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $g(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pl(e,t,n,r,i,s,o,a,l){return e=new $g(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Le(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cl(s),e}function Bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return Kt;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Se(n))return tf(e,n,t)}return t}function rh(e,t,n,r,i,s,o,a,l){return e=Pl(n,r,!0,e,i,s,o,a,l),e.context=nh(null),n=e.current,r=fe(),i=Bt(n),s=mt(r,i),s.callback=t??null,bt(n,s,i),e.current.lanes=i,ii(e,i,r),ke(e,r),e}function $s(e,t,n,r){var i=t.current,s=fe(),o=Bt(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(i,t,o),e!==null&&(He(e,i,o,s),zi(e,i,o)),o}function ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nl(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function Vg(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function xl(e){this._internalRoot=e}Bs.prototype.render=xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));$s(e,t,null,null)};Bs.prototype.unmount=xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){$s(null,e,null,null)}),t[yt]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&jd(e)}};function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oc(){}function Hg(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ws(o);s.call(u)}}var o=rh(t,r,e,0,null,!1,!1,"",oc);return e._reactRootContainer=o,e[yt]=o.current,Wr(e.nodeType===8?e.parentNode:e),yn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ws(l);a.call(u)}}var l=Pl(e,0,!1,null,null,!1,!1,"",oc);return e._reactRootContainer=l,e[yt]=l.current,Wr(e.nodeType===8?e.parentNode:e),yn(function(){$s(t,l,n,r)}),l}function Hs(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ws(o);a.call(l)}}$s(t,o,e,i)}else o=Hg(n,t,e,i,r);return ws(o)}Od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Er(t.pendingLanes);n!==0&&(qa(t,n|1),ke(t,Y()),!(D&6)&&(ir=Y()+500,Yt()))}break;case 13:yn(function(){var r=vt(e,1);if(r!==null){var i=fe();He(r,e,1,i)}}),Nl(e,1)}};Ya=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=fe();He(t,e,134217728,n)}Nl(e,134217728)}};Ld=function(e){if(e.tag===13){var t=Bt(e),n=vt(e,t);if(n!==null){var r=fe();He(n,e,t,r)}Nl(e,t)}};Dd=function(){return U};Md=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};qo=function(e,t,n){switch(t){case"input":if(Bo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ds(r);if(!i)throw Error(w(90));fd(r),Bo(r,i)}}}break;case"textarea":pd(e,n);break;case"select":t=n.value,t!=null&&Bn(e,!!n.multiple,t,!1)}};Sd=Il;kd=yn;var Wg={usingClientEntryPoint:!1,Events:[oi,Mn,Ds,wd,_d,Il]},_r={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gg={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cd(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{As=Oi.inject(Gg),Xe=Oi}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wg;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Al(t))throw Error(w(200));return Bg(e,t,null,n)};Ne.createRoot=function(e,t){if(!Al(e))throw Error(w(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pl(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,Wr(e.nodeType===8?e.parentNode:e),new xl(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Cd(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return yn(e)};Ne.hydrate=function(e,t,n){if(!Vs(t))throw Error(w(200));return Hs(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Al(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,s,o),e[yt]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bs(t)};Ne.render=function(e,t,n){if(!Vs(t))throw Error(w(200));return Hs(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Vs(e))throw Error(w(40));return e._reactRootContainer?(yn(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Il;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vs(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Hs(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function sh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)}catch(e){console.error(e)}}sh(),id.exports=Ne;var Kg=id.exports,ac=Kg;Mo.createRoot=ac.createRoot,Mo.hydrateRoot=ac.hydrateRoot;function Qg({direction:e="left"}){const t=e==="left"?"0":"180";return m.jsx("svg",{viewBox:"0 0 24 24",style:{transform:`rotate(${t}deg)`},children:m.jsx("path",{d:"M14.5 6 9 12l5.5 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function qg({threads:e,activeThreadId:t,onSelectThread:n,onNewChat:r,collapsed:i,onToggle:s,isLoading:o=!1,error:a=""}){return m.jsxs("aside",{className:`sidebar ${i?"sidebar-collapsed":""}`,children:[m.jsxs("div",{className:"sidebar-header",children:[m.jsxs("div",{children:[m.jsx("p",{className:"sidebar-title",children:"Chats"}),m.jsx("p",{className:"sidebar-subtitle",children:"Recent threads"})]}),m.jsx("button",{className:"icon-button",type:"button",onClick:s,"aria-label":"Toggle",children:m.jsx(Qg,{direction:i?"right":"left"})})]}),m.jsx("button",{className:"new-chat-button",type:"button",onClick:r,disabled:o,children:"+ New chat"}),m.jsx("div",{className:"chat-list",children:o?m.jsx("p",{className:"sidebar-status",children:"Loading chats..."}):a?m.jsx("p",{className:"sidebar-status",children:a}):e.length===0?m.jsx("p",{className:"sidebar-status",children:"No chats yet."}):e.map(l=>m.jsxs("button",{type:"button",className:`chat-card ${l.id===t?"active":""}`,onClick:()=>n(l.id),children:[m.jsxs("div",{children:[m.jsx("p",{className:"chat-card-title",children:l.title}),m.jsx("p",{className:"chat-card-subtitle",children:l.lastMessage})]}),m.jsx("span",{className:"chat-card-time",children:l.updatedAt})]},l.id))})]})}function Yg(){return m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[m.jsx("path",{d:"M7 11v8a2 2 0 0 0 2 2h6.2a2 2 0 0 0 1.9-1.4l1.8-5.4a2 2 0 0 0-1.9-2.6H14V7a3 3 0 0 0-3-3l-3 7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),m.jsx("path",{d:"M4 11h3v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"})]})}function Jg(){return m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[m.jsx("path",{d:"M7 13V5a2 2 0 0 1 2-2h6.2a2 2 0 0 1 1.9 1.4l1.8 5.4a2 2 0 0 1-1.9 2.6H14v4a3 3 0 0 1-3 3l-3-7Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),m.jsx("path",{d:"M4 3h3v10H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"})]})}function Xg({message:e,index:t,onFeedback:n,isFeedbackPending:r=!1}){var u;const i=e.sender==="ai",s=i?"AI":"ME",o=e.feedback==="up",a=e.feedback==="down",l=!n||r;return m.jsxs("div",{className:`message message--${e.sender}`,style:{animationDelay:`${t*60}ms`},children:[m.jsx("div",{className:"message-avatar",children:s}),m.jsxs("div",{className:"message-body",children:[m.jsxs("div",{className:"message-bubble",children:[m.jsx("p",{children:e.text}),(u=e.attachments)!=null&&u.length?m.jsx("div",{className:"message-attachments",children:e.attachments.map(p=>m.jsx("span",{className:"attachment-chip",children:p.name},p.name))}):null]}),m.jsxs("div",{className:"message-footer",children:[m.jsx("span",{className:"message-time",children:e.time}),i?m.jsxs("div",{className:"message-actions",children:[m.jsx("button",{className:`icon-button ${o?"is-selected":""}`,type:"button","aria-label":"Thumbs up","aria-pressed":o,disabled:l,onClick:()=>n==null?void 0:n(e.id,"up"),children:m.jsx(Yg,{})}),m.jsx("button",{className:`icon-button ${a?"is-selected":""}`,type:"button","aria-label":"Thumbs down","aria-pressed":a,disabled:l,onClick:()=>n==null?void 0:n(e.id,"down"),children:m.jsx(Jg,{})})]}):null]})]})]})}function Zg({messages:e,isLoading:t=!1,error:n="",onRetry:r,onFeedback:i,feedbackPendingId:s,emptyState:o={title:"Start a new conversation",subtitle:"Drop a file or write a prompt and the assistant will respond here."}}){return t?m.jsx("div",{className:"chat-window chat-empty",children:m.jsxs("div",{className:"status-card",children:[m.jsx("p",{className:"status-title",children:"Loading conversation..."}),m.jsx("p",{className:"status-subtitle",children:"Syncing messages from the server."})]})}):n?m.jsx("div",{className:"chat-window chat-empty",children:m.jsxs("div",{className:"status-card",children:[m.jsx("p",{className:"status-title",children:"Unable to load messages"}),m.jsx("p",{className:"status-subtitle",children:n}),r?m.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:"Retry"}):null]})}):e.length?m.jsx("div",{className:"chat-window",children:e.map((a,l)=>m.jsx(Xg,{message:a,index:l,onFeedback:i,isFeedbackPending:s===a.id},a.id))}):m.jsx("div",{className:"chat-window chat-empty",children:m.jsxs("div",{children:[m.jsx("p",{className:"empty-title",children:o.title}),m.jsx("p",{className:"empty-subtitle",children:o.subtitle})]})})}function ey(){return m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[m.jsx("path",{d:"M3 11.5 20.5 3l-4.5 18-3.9-6.2L3 11.5Z",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"}),m.jsx("path",{d:"M12.1 14.8 20.5 3",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function ty(){return m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[m.jsx("path",{d:"M12 15V4",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),m.jsx("path",{d:"M7 8 12 3l5 5",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),m.jsx("path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function ny({inputValue:e,onInputChange:t,onSend:n,onAttachClick:r,onFilesAdded:i,attachedFiles:s,onRemoveFile:o,fileInputRef:a,isSending:l=!1,error:u=""}){const p=c=>{if(c.key==="Enter"&&!c.shiftKey){if(c.preventDefault(),l)return;n()}},g=c=>{i(c.target.files),c.target.value=""};return m.jsxs("div",{className:"composer",children:[m.jsx("input",{ref:a,type:"file",multiple:!0,className:"file-input",onChange:g,disabled:l}),u?m.jsx("p",{className:"composer-error",children:u}):null,s.length?m.jsx("div",{className:"attachment-row",children:s.map(c=>m.jsxs("div",{className:"attachment-chip",children:[m.jsx("span",{children:c.name}),m.jsx("button",{className:"chip-button",type:"button","aria-label":`Remove ${c.name}`,onClick:()=>o(c.name),disabled:l,children:"x"})]},c.name))}):null,m.jsxs("div",{className:"composer-row",children:[m.jsx("textarea",{value:e,onChange:c=>t(c.target.value),onKeyDown:p,placeholder:"Ask Orbit AI anything. Press Enter to send, Shift + Enter for a new line.",rows:1,disabled:l}),m.jsxs("div",{className:"composer-actions",children:[m.jsx("button",{className:"icon-button",type:"button",onClick:r,"aria-label":"Upload",disabled:l,children:m.jsx(ty,{})}),m.jsx("button",{className:"primary-button",type:"button",onClick:n,"aria-label":"Send",disabled:l,children:m.jsx(ey,{})})]})]})]})}const ry=e=>e.split(" ").map(t=>t[0]).slice(0,2).join("").toUpperCase();function iy({user:e,onSignOut:t}){const[n,r]=z.useState(!1),i=z.useRef(null);return z.useEffect(()=>{const s=o=>{i.current&&!i.current.contains(o.target)&&r(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),m.jsxs("div",{className:"profile-menu",ref:i,children:[m.jsx("button",{className:"profile-button",type:"button",onClick:()=>r(s=>!s),children:m.jsx("span",{className:"profile-avatar",children:ry(e.name)})}),n?m.jsxs("div",{className:"profile-popup",children:[m.jsxs("div",{children:[m.jsx("p",{className:"profile-name",children:e.name}),m.jsx("p",{className:"profile-email",children:e.email})]}),m.jsxs("div",{className:"profile-meta",children:[m.jsx("span",{children:e.role}),m.jsx("span",{children:e.team})]}),m.jsx("button",{className:"ghost-button",type:"button",onClick:t,children:"Sign out"})]}):null]})}function sy({active:e}){return e?m.jsx("div",{className:"drop-zone","aria-hidden":"true",children:m.jsx("div",{className:"drop-zone-card",children:m.jsx("p",{children:"Drop files to attach them to this chat."})})}):null}function oy(){return m.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:[m.jsx("circle",{cx:"12",cy:"12",r:"4.4",fill:"currentColor"}),m.jsx("path",{d:"M12 3v2.2M12 18.8V21M4.2 12H2m20 0h-2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})}function ay(){return m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:m.jsx("path",{d:"M16.9 15.8A7.3 7.3 0 0 1 8.2 7a7.5 7.5 0 1 0 8.7 8.8Z",fill:"currentColor"})})}function ly({theme:e,onToggle:t}){const n=e==="dark";return m.jsxs("button",{className:`theme-toggle ${n?"theme-toggle--dark":"theme-toggle--light"}`,type:"button",onClick:t,"aria-label":"Toggle dark mode","aria-pressed":n,children:[m.jsxs("span",{className:"theme-toggle-icons","aria-hidden":"true",children:[m.jsx("span",{className:"theme-icon sun",children:m.jsx(oy,{})}),m.jsx("span",{className:"theme-icon moon",children:m.jsx(ay,{})})]}),m.jsx("span",{className:"theme-toggle-thumb","aria-hidden":"true"})]})}const uy="http://localhost:5050/api",cy=15e3,dy={"Content-Type":"application/json"},fy=()=>{};var lc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},hy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,p=s>>2,g=(s&3)<<4|a>>4;let c=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(c=64)),r.push(n[p],n[g],n[c],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(oh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):hy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const g=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||g==null)throw new py;const c=s<<2|a>>4;if(r.push(c),u!==64){const y=a<<4&240|u>>2;if(r.push(y),g!==64){const _=u<<6&192|g;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class py extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const my=function(e){const t=oh(e);return ah.encodeByteArray(t,!0)},lh=function(e){return my(e).replace(/\./g,"")},uh=function(e){try{return ah.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=()=>gy().__FIREBASE_DEFAULTS__,vy=()=>{if(typeof process>"u"||typeof lc>"u")return;const e=lc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&uh(e[1]);return t&&JSON.parse(t)},Rl=()=>{try{return fy()||yy()||vy()||wy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_y=e=>{var t,n;return(n=(t=Rl())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},ch=()=>{var e;return(e=Rl())==null?void 0:e.config},dh=e=>{var t;return(t=Rl())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ky(e){return(await fetch(e,{credentials:"include"})).ok}const Mr={};function Iy(){const e={prod:[],emulator:[]};for(const t of Object.keys(Mr))Mr[t]?e.emulator.push(t):e.prod.push(t);return e}function Ey(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let uc=!1;function Cy(e,t){if(typeof window>"u"||typeof document>"u"||!Ws(window.location.host)||Mr[e]===t||Mr[e]||uc)return;Mr[e]=t;function n(c){return`__firebase__banner__${c}`}const r="__firebase__banner",s=Iy().prod.length>0;function o(){const c=document.getElementById(r);c&&c.remove()}function a(c){c.style.display="flex",c.style.background="#7faaf0",c.style.position="fixed",c.style.bottom="5px",c.style.left="5px",c.style.padding=".5em",c.style.borderRadius="5px",c.style.alignItems="center"}function l(c,y){c.setAttribute("width","24"),c.setAttribute("id",y),c.setAttribute("height","24"),c.setAttribute("viewBox","0 0 24 24"),c.setAttribute("fill","none"),c.style.marginLeft="-6px"}function u(){const c=document.createElement("span");return c.style.cursor="pointer",c.style.marginLeft="16px",c.style.fontSize="24px",c.innerHTML=" &times;",c.onclick=()=>{uc=!0,o()},c}function p(c,y){c.setAttribute("id",y),c.innerText="Learn more",c.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",c.setAttribute("target","__blank"),c.style.paddingLeft="5px",c.style.textDecoration="underline"}function g(){const c=Ey(r),y=n("text"),_=document.getElementById(y)||document.createElement("span"),S=n("learnmore"),M=document.getElementById(S)||document.createElement("a"),f=n("preprendIcon"),d=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(c.created){const h=c.element;a(h),p(M,S);const v=u();l(d,f),h.append(d,_,M,v),document.body.appendChild(h)}s?(_.innerText="Preview backend disconnected.",d.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(d.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Py(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ol(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ny(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xy(){const e=pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ll(){try{return typeof indexedDB=="object"}catch{return!1}}function Dl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}function fh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="FirebaseError";class it extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ay,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Ry(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new it(i,a,r)}}function Ry(e,t){return e.replace(Oy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Oy=/\{\$([^}]+)}/g;function Ly(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(cc(s)&&cc(o)){if(!vn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Dy(e,t){const n=new My(e,t);return n.subscribe.bind(n)}class My{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Eo),i.error===void 0&&(i.error=Eo),i.complete===void 0&&(i.complete=Eo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Eo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=1e3,Fy=2,zy=4*60*60*1e3,by=.5;function dc(e,t=Uy,n=Fy){const r=t*Math.pow(n,e),i=Math.round(by*r*(Math.random()-.5)*2);return Math.min(zy,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return e&&e._delegate?e._delegate:e}class nt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vy(t))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=rn){return this.instances.has(t)}getOptions(t=rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:By(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=rn){return this.component?this.component.multipleInstances?t:rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function By(e){return e===rn?void 0:e}function Vy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $y(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const Wy={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Gy=b.INFO,Ky={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Qy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Ky[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ml{constructor(t){this.name=t,this._logLevel=Gy,this._logHandler=Qy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const qy=(e,t)=>t.some(n=>e instanceof n);let fc,hc;function Yy(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jy(){return hc||(hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hh=new WeakMap,Na=new WeakMap,ph=new WeakMap,Co=new WeakMap,jl=new WeakMap;function Xy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ht(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hh.set(n,e)}).catch(()=>{}),jl.set(t,e),t}function Zy(e){if(Na.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Na.set(e,t)}let xa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Na.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ph.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ev(e){xa=e(xa)}function tv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(To(this),t,...n);return ph.set(r,t.sort?t.sort():[t]),Ht(r)}:Jy().includes(e)?function(...t){return e.apply(To(this),t),Ht(hh.get(this))}:function(...t){return Ht(e.apply(To(this),t))}}function nv(e){return typeof e=="function"?tv(e):(e instanceof IDBTransaction&&Zy(e),qy(e,Yy())?new Proxy(e,xa):e)}function Ht(e){if(e instanceof IDBRequest)return Xy(e);if(Co.has(e))return Co.get(e);const t=nv(e);return t!==e&&(Co.set(e,t),jl.set(t,e)),t}const To=e=>jl.get(e);function mh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ht(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ht(o.result),l.oldVersion,l.newVersion,Ht(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rv=["get","getKey","getAll","getAllKeys","count"],iv=["put","add","delete","clear"],Po=new Map;function pc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Po.get(t))return Po.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=iv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Po.set(t,s),s}ev(e=>({...e,get:(t,n,r)=>pc(t,n)||e.get(t,n,r),has:(t,n)=>!!pc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ov(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ov(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Aa="@firebase/app",mc="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Ml("@firebase/app"),av="@firebase/app-compat",lv="@firebase/analytics-compat",uv="@firebase/analytics",cv="@firebase/app-check-compat",dv="@firebase/app-check",fv="@firebase/auth",hv="@firebase/auth-compat",pv="@firebase/database",mv="@firebase/data-connect",gv="@firebase/database-compat",yv="@firebase/functions",vv="@firebase/functions-compat",wv="@firebase/installations",_v="@firebase/installations-compat",Sv="@firebase/messaging",kv="@firebase/messaging-compat",Iv="@firebase/performance",Ev="@firebase/performance-compat",Cv="@firebase/remote-config",Tv="@firebase/remote-config-compat",Pv="@firebase/storage",Nv="@firebase/storage-compat",xv="@firebase/firestore",Av="@firebase/ai",Rv="@firebase/firestore-compat",Ov="firebase",Lv="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]",Dv={[Aa]:"fire-core",[av]:"fire-core-compat",[uv]:"fire-analytics",[lv]:"fire-analytics-compat",[dv]:"fire-app-check",[cv]:"fire-app-check-compat",[fv]:"fire-auth",[hv]:"fire-auth-compat",[pv]:"fire-rtdb",[mv]:"fire-data-connect",[gv]:"fire-rtdb-compat",[yv]:"fire-fn",[vv]:"fire-fn-compat",[wv]:"fire-iid",[_v]:"fire-iid-compat",[Sv]:"fire-fcm",[kv]:"fire-fcm-compat",[Iv]:"fire-perf",[Ev]:"fire-perf-compat",[Cv]:"fire-rc",[Tv]:"fire-rc-compat",[Pv]:"fire-gcs",[Nv]:"fire-gcs-compat",[xv]:"fire-fst",[Rv]:"fire-fst-compat",[Av]:"fire-vertex","fire-js":"fire-js",[Ov]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Map,Mv=new Map,Oa=new Map;function gc(e,t){try{e.container.addComponent(t)}catch(n){_t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if(Oa.has(t))return _t.debug(`There were multiple attempts to register component ${t}.`),!1;Oa.set(t,e);for(const n of _s.values())gc(n,e);for(const n of Mv.values())gc(n,e);return!0}function ur(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Je(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new En("app","Firebase",jv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=Lv;function gh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Ra,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(n||(n=ch()),!n)throw Wt.create("no-options");const s=_s.get(i);if(s){if(vn(n,s.options)&&vn(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const o=new Hy(i);for(const l of Oa.values())o.addComponent(l);const a=new Uv(n,r,o);return _s.set(i,a),a}function yh(e=Ra){const t=_s.get(e);if(!t&&e===Ra&&ch())return gh();if(!t)throw Wt.create("no-app",{appName:e});return t}function et(e,t,n){let r=Dv[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_t.warn(o.join(" "));return}St(new nt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="firebase-heartbeat-database",zv=1,ei="firebase-heartbeat-store";let No=null;function vh(){return No||(No=mh(Fv,zv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ei)}catch(n){console.warn(n)}}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),No}async function bv(e){try{const n=(await vh()).transaction(ei),r=await n.objectStore(ei).get(wh(e));return await n.done,r}catch(t){if(t instanceof it)_t.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_t.warn(n.message)}}}async function yc(e,t){try{const r=(await vh()).transaction(ei,"readwrite");await r.objectStore(ei).put(t,wh(e)),await r.done}catch(n){if(n instanceof it)_t.warn(n.message);else{const r=Wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(r.message)}}}function wh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=1024,Bv=30;class Vv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vc();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Bv){const o=Gv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vc(),{heartbeatsToSend:r,unsentEntries:i}=Hv(this._heartbeatsCache.heartbeats),s=lh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _t.warn(n),""}}}function vc(){return new Date().toISOString().substring(0,10)}function Hv(e,t=$v){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ll()?Dl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function wc(e){return lh(JSON.stringify({version:2,heartbeats:e})).length}function Gv(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(e){St(new nt("platform-logger",t=>new sv(t),"PRIVATE")),St(new nt("heartbeat",t=>new Vv(t),"PRIVATE")),et(Aa,mc,e),et(Aa,mc,"esm2020"),et("fire-js","")}Kv("");var Qv="firebase",qv="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Qv,qv,"app");const _h="@firebase/installations",Ul="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=1e4,kh=`w:${Ul}`,Ih="FIS_v2",Yv="https://firebaseinstallations.googleapis.com/v1",Jv=60*60*1e3,Xv="installations",Zv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wn=new En(Xv,Zv,ew);function Eh(e){return e instanceof it&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch({projectId:e}){return`${Yv}/projects/${e}/installations`}function Th(e){return{token:e.token,requestStatus:2,expiresIn:nw(e.expiresIn),creationTime:Date.now()}}async function Ph(e,t){const r=(await t.json()).error;return wn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function tw(e,{refreshToken:t}){const n=Nh(e);return n.append("Authorization",rw(t)),n}async function xh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function nw(e){return Number(e.replace("s","000"))}function rw(e){return`${Ih} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ch(e),i=Nh(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Ih,appId:e.appId,sdkVersion:kh},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Th(u.authToken)}}else throw await Ph("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=/^[cdef][\w-]{21}$/,La="";function aw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lw(e);return ow.test(n)?n:La}catch{return La}}function lw(e){return sw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map;function Oh(e,t){const n=Gs(e);Lh(n,t),uw(n,t)}function Lh(e,t){const n=Rh.get(e);if(n)for(const r of n)r(t)}function uw(e,t){const n=cw();n&&n.postMessage({key:e,fid:t}),dw()}let ln=null;function cw(){return!ln&&"BroadcastChannel"in self&&(ln=new BroadcastChannel("[Firebase] FID Change"),ln.onmessage=e=>{Lh(e.data.key,e.data.fid)}),ln}function dw(){Rh.size===0&&ln&&(ln.close(),ln=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firebase-installations-database",hw=1,_n="firebase-installations-store";let xo=null;function Fl(){return xo||(xo=mh(fw,hw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_n)}}})),xo}async function Ss(e,t){const n=Gs(e),i=(await Fl()).transaction(_n,"readwrite"),s=i.objectStore(_n),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Oh(e,t.fid),t}async function Dh(e){const t=Gs(e),r=(await Fl()).transaction(_n,"readwrite");await r.objectStore(_n).delete(t),await r.done}async function Ks(e,t){const n=Gs(e),i=(await Fl()).transaction(_n,"readwrite"),s=i.objectStore(_n),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Oh(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(e){let t;const n=await Ks(e.appConfig,r=>{const i=pw(r),s=mw(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===La?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pw(e){const t=e||{fid:aw(),registrationStatus:0};return Mh(t)}function mw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=gw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yw(e)}:{installationEntry:t}}async function gw(e,t){try{const n=await iw(e,t);return Ss(e.appConfig,n)}catch(n){throw Eh(n)&&n.customData.serverCode===409?await Dh(e.appConfig):await Ss(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yw(e){let t=await _c(e.appConfig);for(;t.registrationStatus===1;)await Ah(100),t=await _c(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await zl(e);return r||n}return t}function _c(e){return Ks(e,t=>{if(!t)throw wn.create("installation-not-found");return Mh(t)})}function Mh(e){return vw(e)?{fid:e.fid,registrationStatus:0}:e}function vw(e){return e.registrationStatus===1&&e.registrationTime+Sh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww({appConfig:e,heartbeatServiceProvider:t},n){const r=_w(e,n),i=tw(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:kh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await xh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Th(u)}else throw await Ph("Generate Auth Token",l)}function _w(e,{fid:t}){return`${Ch(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(e,t=!1){let n;const r=await Ks(e.appConfig,s=>{if(!jh(s))throw wn.create("not-registered");const o=s.authToken;if(!t&&Iw(o))return s;if(o.requestStatus===1)return n=Sw(e,t),s;{if(!navigator.onLine)throw wn.create("app-offline");const a=Cw(s);return n=kw(e,a),a}});return n?await n:r.authToken}async function Sw(e,t){let n=await Sc(e.appConfig);for(;n.authToken.requestStatus===1;)await Ah(100),n=await Sc(e.appConfig);const r=n.authToken;return r.requestStatus===0?bl(e,t):r}function Sc(e){return Ks(e,t=>{if(!jh(t))throw wn.create("not-registered");const n=t.authToken;return Tw(n)?{...t,authToken:{requestStatus:0}}:t})}async function kw(e,t){try{const n=await ww(e,t),r={...t,authToken:n};return await Ss(e.appConfig,r),n}catch(n){if(Eh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dh(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Ss(e.appConfig,r)}throw n}}function jh(e){return e!==void 0&&e.registrationStatus===2}function Iw(e){return e.requestStatus===2&&!Ew(e)}function Ew(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Jv}function Cw(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Tw(e){return e.requestStatus===1&&e.requestTime+Sh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(e){const t=e,{installationEntry:n,registrationPromise:r}=await zl(t);return r?r.catch(console.error):bl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(e,t=!1){const n=e;return await xw(n),(await bl(n,t)).token}async function xw(e){const{registrationPromise:t}=await zl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(e){if(!e||!e.options)throw Ao("App Configuration");if(!e.name)throw Ao("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ao(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ao(e){return wn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="installations",Rw="installations-internal",Ow=e=>{const t=e.getProvider("app").getImmediate(),n=Aw(t),r=ur(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lw=e=>{const t=e.getProvider("app").getImmediate(),n=ur(t,Uh).getImmediate();return{getId:()=>Pw(n),getToken:i=>Nw(n,i)}};function Dw(){St(new nt(Uh,Ow,"PUBLIC")),St(new nt(Rw,Lw,"PRIVATE"))}Dw();et(_h,Ul);et(_h,Ul,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="analytics",Mw="firebase_id",jw="origin",Uw=60*1e3,Fw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$l="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Ml("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Te=new En("analytics","Analytics",zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(e){if(!e.startsWith($l)){const t=Te.create("invalid-gtag-resource",{gtagURL:e});return he.warn(t.message),""}return e}function Fh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function $w(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Bw(e,t){const n=$w("firebase-js-sdk-policy",{createScriptURL:bw}),r=document.createElement("script"),i=`${$l}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Vw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Hw(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Fh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){he.error(a)}e("config",i,s)}async function Ww(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Fh(n);for(const l of o){const u=a.find(g=>g.measurementId===l),p=u&&t[u.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){he.error(s)}}function Gw(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Ww(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await Hw(e,t,n,r,a,l)}else if(s==="consent"){const[a,l]=o;e("consent",a,l)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){he.error(a)}}return i}function Kw(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Gw(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Qw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($l)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=30,Yw=1e3;class Jw{constructor(t={},n=Yw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zh=new Jw;function Xw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zw(e){var o;const{appId:t,apiKey:n}=e,r={method:"GET",headers:Xw(n)},i=Fw.replace("{app-id}",t),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function e1(e,t=zh,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Te.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Te.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new r1;return setTimeout(async()=>{a.abort()},Uw),bh({appId:r,apiKey:i,measurementId:s},o,a,t)}async function bh(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=zh){var a;const{appId:s,measurementId:o}=e;try{await t1(r,t)}catch(l){if(o)return he.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await Zw(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!n1(u)){if(i.deleteThrottleMetadata(s),o)return he.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw l}const p=Number((a=u==null?void 0:u.customData)==null?void 0:a.httpStatus)===503?dc(n,i.intervalMillis,qw):dc(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(s,g),he.debug(`Calling attemptFetch again in ${p} millis`),bh(e,g,r,i)}}function t1(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function n1(e){if(!(e instanceof it)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class r1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function i1(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o={...r,send_to:s};e("event",n,o)}}async function s1(e,t,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(){if(Ll())try{await Dl()}catch(e){return he.warn(Te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return he.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function a1(e,t,n,r,i,s,o){const a=e1(e);a.then(c=>{n[c.measurementId]=c.appId,e.options.measurementId&&c.measurementId!==e.options.measurementId&&he.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${c.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(c=>he.error(c)),t.push(a);const l=o1().then(c=>{if(c)return r.getId()}),[u,p]=await Promise.all([a,l]);Qw(s)||Bw(s,u.measurementId),i("js",new Date);const g=(o==null?void 0:o.config)??{};return g[jw]="firebase",g.update=!0,p!=null&&(g[Mw]=p),i("config",u.measurementId,g),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t){this.app=t}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},kc=[];const Ic={};let Ro="dataLayer",u1="gtag",Ec,Bl,Cc=!1;function c1(){const e=[];if(Ol()&&e.push("This is a browser extension environment."),fh()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:t});he.warn(n.message)}}function d1(e,t,n){c1();const r=e.options.appId;if(!r)throw Te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)he.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(Qn[r]!=null)throw Te.create("already-exists",{id:r});if(!Cc){Vw(Ro);const{wrappedGtag:s,gtagCore:o}=Kw(Qn,kc,Ic,Ro,u1);Bl=s,Ec=o,Cc=!0}return Qn[r]=a1(e,kc,Ic,t,Ec,Ro,n),new l1(e)}function f1(e=yh()){e=Ke(e);const t=ur(e,ks);return t.isInitialized()?t.getImmediate():h1(e)}function h1(e,t={}){const n=ur(e,ks);if(n.isInitialized()){const i=n.getImmediate();if(vn(t,n.getOptions()))return i;throw Te.create("already-initialized")}return n.initialize({options:t})}async function p1(){if(Ol()||!fh()||!Ll())return!1;try{return await Dl()}catch{return!1}}function m1(e,t,n){e=Ke(e),s1(Bl,Qn[e.app.options.appId],t,n).catch(r=>he.error(r))}function g1(e,t,n,r){e=Ke(e),i1(Bl,Qn[e.app.options.appId],t,n,r).catch(i=>he.error(i))}const Tc="@firebase/analytics",Pc="0.10.19";function y1(){St(new nt(ks,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return d1(r,i,n)},"PUBLIC")),St(new nt("analytics-internal",e,"PRIVATE")),et(Tc,Pc),et(Tc,Pc,"esm2020");function e(t){try{const n=t.getProvider(ks).getImmediate();return{logEvent:(r,i,s)=>g1(n,r,i,s),setUserProperties:(r,i)=>m1(n,r,i)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}y1();function $h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v1=$h,Bh=new En("auth","Firebase",$h());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Ml("@firebase/auth");function w1(e,...t){Is.logLevel<=b.WARN&&Is.warn(`Auth (${ui}): ${e}`,...t)}function Gi(e,...t){Is.logLevel<=b.ERROR&&Is.error(`Auth (${ui}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,...t){throw Hl(e,...t)}function We(e,...t){return Hl(e,...t)}function Vl(e,t,n){const r={...v1(),[t]:n};return new En("auth","Firebase",r).create(t,{appName:e.name})}function fn(e){return Vl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&rt(e,"argument-error"),Vl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Bh.create(e,...t)}function x(e,t,...n){if(!e)throw Hl(t,...n)}function ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Gi(t),new Error(t)}function kt(e,t){e||ht(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function S1(){return Nc()==="http:"||Nc()==="https:"}function Nc(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S1()||Ol()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.shortDelay=t,this.longDelay=n,kt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ty()||Ny()}get(){return k1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e,t){kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T1=new ci(3e4,6e4);function Gl(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function cr(e,t,n,r,i={}){return Hh(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=li({key:e.config.apiKey,...o}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:l,...s};return Py()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&Ws(e.emulatorConfig.host)&&(u.credentials="include"),Vh.fetch()(await Wh(e,e.config.apiHost,n,a),u)})}async function Hh(e,t,n){e._canInitEmulator=!1;const r={...E1,...t};try{const i=new N1(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Li(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Li(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Li(e,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vl(e,p,u);rt(e,p)}}catch(i){if(i instanceof it)throw i;rt(e,"network-request-failed",{message:String(i)})}}async function P1(e,t,n,r,i={}){const s=await cr(e,t,n,r,i);return"mfaPendingCredential"in s&&rt(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Wh(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?Wl(e.config,i):`${e.config.apiScheme}://${i}`;return C1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class N1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),T1.get())})}}function Li(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=We(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(e,t){return cr(e,"POST","/v1/accounts:delete",t)}async function Es(e,t){return cr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function A1(e,t=!1){const n=Ke(e),r=await n.getIdToken(t),i=Kl(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jr(Oo(i.auth_time)),issuedAtTime:jr(Oo(i.iat)),expirationTime:jr(Oo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oo(e){return Number(e)*1e3}function Kl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const i=uh(n);return i?JSON.parse(i):(Gi("Failed to decode base64 JWT payload"),null)}catch(i){return Gi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xc(e){const t=Kl(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof it&&R1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function R1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e){var g;const t=e.auth,n=await e.getIdToken(),r=await ti(e,Es(t,{idToken:n}));x(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=(g=i.providerUserInfo)!=null&&g.length?Gh(i.providerUserInfo):[],o=D1(e.providerData,s),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ma(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,p)}async function L1(e){const t=Ke(e);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function D1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Gh(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(e,t){const n=await Hh(e,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=await Wh(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&Ws(e.emulatorConfig.host)&&(l.credentials="include"),Vh.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j1(e,t){return cr(e,"POST","/v2/accounts:revokeToken",Gl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){x(t.length!==0,"internal-error");const n=xc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await M1(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qn;return r&&(x(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Be{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ma(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await ti(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return A1(this,t)}reload(){return L1(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Be({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(fn(this.auth));const t=await this.getIdToken();return await ti(this,x1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:g,emailVerified:c,isAnonymous:y,providerData:_,stsTokenManager:S}=n;x(g&&S,t,"internal-error");const M=qn.fromJSON(this.name,S);x(typeof g=="string",t,"internal-error"),Tt(r,t.name),Tt(i,t.name),x(typeof c=="boolean",t,"internal-error"),x(typeof y=="boolean",t,"internal-error"),Tt(s,t.name),Tt(o,t.name),Tt(a,t.name),Tt(l,t.name),Tt(u,t.name),Tt(p,t.name);const f=new Be({uid:g,auth:t,email:i,emailVerified:c,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:M,createdAt:u,lastLoginAt:p});return _&&Array.isArray(_)&&(f.providerData=_.map(d=>({...d}))),l&&(f._redirectEventId=l),f}static async _fromIdTokenResponse(t,n,r=!1){const i=new qn;i.updateFromServerResponse(n);const s=new Be({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Cs(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Gh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new qn;a.updateFromIdToken(r);const l=new Be({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ma(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Map;function pt(e){kt(e instanceof Function,"Expected a class definition");let t=Ac.get(e);return t?(kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ac.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Kh.type="NONE";const Rc=Kh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e,t,n){return`firebase:${e}:${t}:${n}`}class Yn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ki(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ki("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Es(this.auth,{idToken:t}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,t):null}return Be._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Yn(pt(Rc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pt(Rc);const o=Ki(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const p=await u._get(o);if(p){let g;if(typeof p=="string"){const c=await Es(t,{idToken:p}).catch(()=>{});if(!c)break;g=await Be._fromGetAccountInfoResponse(t,c,p)}else g=Be._fromJSON(t,p);u!==s&&(a=g),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zh(t))return"Blackberry";if(ep(t))return"Webos";if(qh(t))return"Safari";if((t.includes("chrome/")||Yh(t))&&!t.includes("edge/"))return"Chrome";if(Xh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qh(e=pe()){return/firefox\//i.test(e)}function qh(e=pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Yh(e=pe()){return/crios\//i.test(e)}function Jh(e=pe()){return/iemobile/i.test(e)}function Xh(e=pe()){return/android/i.test(e)}function Zh(e=pe()){return/blackberry/i.test(e)}function ep(e=pe()){return/webos/i.test(e)}function Ql(e=pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function U1(e=pe()){var t;return Ql(e)&&!!((t=window.navigator)!=null&&t.standalone)}function F1(){return xy()&&document.documentMode===10}function tp(e=pe()){return Ql(e)||Xh(e)||ep(e)||Zh(e)||/windows phone/i.test(e)||Jh(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e,t=[]){let n;switch(e){case"Browser":n=Oc(pe());break;case"Worker":n=`${Oc(pe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(e,t={}){return cr(e,"GET","/v2/passwordPolicy",Gl(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=6;class B1{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lc(this),this.idTokenSubscription=new Lc(this),this.beforeStateQueue=new z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Es(this,{idToken:t}),r=await Be._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(Je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Cs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Je(this.app))return Promise.reject(fn(this));const n=t?Ke(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Je(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await b1(this),n=new B1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new En("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pt(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&w1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qs(e){return Ke(e)}class Lc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dy(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H1(e){ql=e}function W1(e){return ql.loadJS(e)}function G1(){return ql.gapiScript}function K1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(e,t){const n=ur(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vn(s,t??{}))return i;rt(i,"already-initialized")}return n.initialize({options:t})}function q1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Y1(e,t,n){const r=Qs(e);x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=rp(t),{host:o,port:a}=J1(t),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},p=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){x(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),x(vn(u,r.config.emulator)&&vn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ws(o)?(ky(`${s}//${o}${l}`),Cy("Auth",!0)):X1()}function rp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function J1(e){const t=rp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dc(o)}}}function Dc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function X1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(t){return ht("not implemented")}_linkToIdToken(t,n){return ht("not implemented")}_getReauthenticationResolver(t){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(e,t){return P1(e,"POST","/v1/accounts:signInWithIdp",Gl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="http://localhost";class Sn extends ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Jn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Jn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Jn(t,n)}buildRequest(){const t={requestUri:Z1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=li(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Yl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends di{constructor(){super("facebook.com")}static credential(t){return Sn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Sn._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ct.credentialFromTaggedObject(t)}static credentialFromError(t){return ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends di{constructor(){super("github.com")}static credential(t){return Sn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends di{constructor(){super("twitter.com")}static credential(t,n){return Sn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Be._fromIdTokenResponse(t,r,i),o=Mc(r);return new sr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Mc(r);return new sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Mc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends it{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ts(t,n,r,i)}}function sp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(e,s,t,r):s})}async function e0(e,t,n=!1){const r=await ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(e,t,n=!1){const{auth:r}=e;if(Je(r.app))return Promise.reject(fn(r));const i="reauthenticate";try{const s=await ti(e,sp(r,i,t,e),n);x(s.idToken,r,"internal-error");const o=Kl(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(e.uid===a,r,"user-mismatch"),sr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(e,t,n=!1){if(Je(e.app))return Promise.reject(fn(e));const r="signIn",i=await sp(e,r,t),s=await sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function r0(e,t,n,r){return Ke(e).onIdTokenChanged(t,n,r)}function i0(e,t,n){return Ke(e).beforeAuthStateChanged(t,n)}function s0(e,t,n,r){return Ke(e).onAuthStateChanged(t,n,r)}function o0(e){return Ke(e).signOut()}const Ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=1e3,l0=10;class ap extends op{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);F1()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,l0):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},a0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ap.type="LOCAL";const u0=ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp extends op{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}lp.type="SESSION";const up=lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new qs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await c0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jl("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const c=g;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(c.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function f0(e){tt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function h0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p0(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function m0(){return cp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="firebaseLocalStorageDb",g0=1,Ns="firebaseLocalStorage",fp="fbase_key";class fi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ys(e,t){return e.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function y0(){const e=indexedDB.deleteDatabase(dp);return new fi(e).toPromise()}function ja(){const e=indexedDB.open(dp,g0);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ns,{keyPath:fp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ns)?t(r):(r.close(),await y0(),t(await ja()))})})}async function jc(e,t,n){const r=Ys(e,!0).put({[fp]:t,value:n});return new fi(r).toPromise()}async function v0(e,t){const n=Ys(e,!1).get(t),r=await new fi(n).toPromise();return r===void 0?null:r.value}function Uc(e,t){const n=Ys(e,!0).delete(t);return new fi(n).toPromise()}const w0=800,_0=3;class hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(m0()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await h0(),!this.activeServiceWorker)return;this.sender=new d0(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||p0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ja();return await jc(t,Ps,"1"),await Uc(t,Ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>v0(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ys(i,!1).getAll();return new fi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hp.type="LOCAL";const S0=hp;new ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(e,t){return t?pt(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends ip{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Jn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Jn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function k0(e){return n0(e.auth,new Xl(e),e.bypassAuthState)}function I0(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),t0(n,new Xl(e),e.bypassAuthState)}async function E0(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),e0(n,new Xl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return k0;case"linkViaPopup":case"linkViaRedirect":return E0;case"reauthViaPopup":case"reauthViaRedirect":return I0;default:rt(this.auth,"internal-error")}}resolve(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new ci(2e3,1e4);async function T0(e,t,n){if(Je(e.app))return Promise.reject(We(e,"operation-not-supported-in-this-environment"));const r=Qs(e);_1(e,t,Yl);const i=pp(r,n);return new un(r,"signInViaPopup",t,i).executeNotNull()}class un extends mp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const t=Jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,C0.get())};t()}}un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="pendingRedirect",Qi=new Map;class N0 extends mp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Qi.get(this.auth._key());if(!t){try{const r=await x0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Qi.set(this.auth._key(),t)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x0(e,t){const n=O0(t),r=R0(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function A0(e,t){Qi.set(e._key(),t)}function R0(e){return pt(e._redirectPersistence)}function O0(e){return Ki(P0,e.config.apiKey,e.name)}async function L0(e,t,n=!1){if(Je(e.app))return Promise.reject(fn(e));const r=Qs(e),i=pp(r,t),o=await new N0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=10*60*1e3;class M0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!j0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!gp(t)){const i=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=D0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fc(t))}saveEventToCache(t){this.cachedEventUids.add(Fc(t)),this.lastProcessedEventTime=Date.now()}}function Fc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function gp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function j0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(e,t={}){return cr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z0=/^https?/;async function b0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await U0(e);for(const n of t)try{if($0(n))return}catch{}rt(e,"unauthorized-domain")}function $0(e){const t=Da(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!z0.test(n))return!1;if(F0.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new ci(3e4,6e4);function zc(){const e=tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function V0(e){return new Promise((t,n)=>{var i,s,o;function r(){zc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zc(),n(We(e,"network-request-failed"))},timeout:B0.get()})}if((s=(i=tt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((o=tt().gapi)!=null&&o.load)r();else{const a=K1("iframefcb");return tt()[a]=()=>{gapi.load?r():n(We(e,"network-request-failed"))},W1(`${G1()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw qi=null,t})}let qi=null;function H0(e){return qi=qi||V0(e),qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new ci(5e3,15e3),G0="__/auth/iframe",K0="emulator/auth/iframe",Q0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y0(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wl(t,K0):`https://${e.config.authDomain}/${G0}`,r={apiKey:t.apiKey,appName:e.name,v:ui},i=q0.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${li(r).slice(1)}`}async function J0(e){const t=await H0(e),n=tt().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:Y0(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=We(e,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},W0.get());function l(){tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z0=500,e_=600,t_="_blank",n_="http://localhost";class bc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r_(e,t,n,r=Z0,i=e_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...X0,width:r.toString(),height:i.toString(),top:s,left:o},u=pe().toLowerCase();n&&(a=Yh(u)?t_:n),Qh(u)&&(t=t||n_,l.scrollbars="yes");const p=Object.entries(l).reduce((c,[y,_])=>`${c}${y}=${_},`,"");if(U1(u)&&a!=="_self")return i_(t||"",a),new bc(null);const g=window.open(t||"",a,p);x(g,e,"popup-blocked");try{g.focus()}catch{}return new bc(g)}function i_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="__/auth/handler",o_="emulator/auth/handler",a_=encodeURIComponent("fac");async function $c(e,t,n,r,i,s){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(t instanceof Yl){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ly(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(t instanceof di){const p=t.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await e._getAppCheckToken(),u=l?`#${a_}=${encodeURIComponent(l)}`:"";return`${l_(e)}?${li(a).slice(1)}${u}`}function l_({config:e}){return e.emulator?Wl(e,o_):`https://${e.authDomain}/${s_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="webStorageSupport";class u_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=up,this._completeRedirectFn=L0,this._overrideRedirectResult=A0}async _openPopup(t,n,r,i){var o;kt((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await $c(t,n,r,Da(),i);return r_(t,s,Jl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await $c(t,n,r,Da(),i);return f0(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await J0(t),r=new M0(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Lo,{type:Lo},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Lo];s!==void 0&&n(!!s),rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return tp()||qh()||Ql()}}const c_=u_;var Bc="@firebase/auth",Vc="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h_(e){St(new nt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:np(e)},u=new V1(r,i,s,l);return q1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),St(new nt("auth-internal",t=>{const n=Qs(t.getProvider("auth").getImmediate());return(r=>new d_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Bc,Vc,f_(e)),et(Bc,Vc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=5*60,m_=dh("authIdTokenMaxAge")||p_;let Hc=null;const g_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>m_)return;const i=n==null?void 0:n.token;Hc!==i&&(Hc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function y_(e=yh()){const t=ur(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Q1(e,{popupRedirectResolver:c_,persistence:[S0,u0,up]}),r=dh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=g_(s.toString());i0(n,o,()=>o(n.currentUser)),r0(n,a=>o(a))}}const i=_y("auth");return i&&Y1(n,`http://${i}`),n}function v_(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}H1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=We("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",v_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h_("Browser");const w_={apiKey:"AIzaSyCG2ow8fZ6rnxUGSJ9S1QPibOMPwMttPgY",authDomain:"datadog-bc01f.firebaseapp.com",projectId:"datadog-bc01f",storageBucket:"datadog-bc01f.firebasestorage.app",messagingSenderId:"144185475752",appId:"1:144185475752:web:d2a925b652cf577e58789d",measurementId:"G-LS9XF3JGFM"},yp=gh(w_),ni=y_(yp),__=new ct;typeof window<"u"&&p1().then(e=>{e&&f1(yp)});const S_=()=>T0(ni,__),k_=()=>o0(ni),I_=e=>s0(ni,e),E_=e=>`${uy}${e}`,hi=async(e,t={})=>{const{method:n="GET",headers:r={},body:i,signal:s}=t,o=s?null:new AbortController,a=setTimeout(()=>o==null?void 0:o.abort(),cy);try{const l=ni.currentUser?await ni.currentUser.getIdToken():null,u=l?{Authorization:`Bearer ${l}`}:{},p=await fetch(E_(e),{method:n,headers:{...dy,...u,...r},body:i?JSON.stringify(i):void 0,signal:s??(o==null?void 0:o.signal)}),c=(p.headers.get("content-type")||"").includes("application/json")?await p.json():await p.text();if(!p.ok){const y=typeof c=="string"?c:(c==null?void 0:c.error)||(c==null?void 0:c.message);throw new Error(y||"Request failed")}return c}finally{clearTimeout(a)}},C_=()=>hi("/chats"),Wc=e=>hi("/chats",{method:"POST",body:e?{title:e}:{}}),Gc=e=>hi(`/chats/${e}/messages`),T_=(e,t)=>hi(`/chats/${e}/messages`,{method:"POST",body:t}),P_=(e,t)=>hi(`/messages/${e}/feedback`,{method:"POST",body:{rating:t}}),vp=e=>{if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})},wp=e=>{if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const n=new Date;if(t.toDateString()===n.toDateString())return vp(t);const i=new Date;return i.setDate(n.getDate()-1),t.toDateString()===i.toDateString()?"Yesterday":t.toLocaleDateString("en-US",{month:"short",day:"numeric"})},Do=e=>({id:e.id,title:e.title||"Untitled chat",lastMessage:e.lastMessage||"Start a new conversation",updatedAt:wp(e.updatedAt)}),Sr=e=>{var t,n;return{id:e.id,sender:e.role==="ai"?"ai":"user",text:e.content,time:vp(e.createdAt),attachments:(t=e.attachments)!=null&&t.length?e.attachments:void 0,feedback:((n=e.feedback)==null?void 0:n.rating)||null}},N_=e=>e?e.trim().split(/\s+/).slice(0,4).join(" "):"New chat";function x_({user:e,onSignOut:t,theme:n,onToggleTheme:r}){const[i,s]=z.useState([]),[o,a]=z.useState(null),[l,u]=z.useState([]),[p,g]=z.useState(!0),[c,y]=z.useState(""),[_,S]=z.useState([]),[M,f]=z.useState(!1),[d,h]=z.useState(!0),[v,k]=z.useState(!1),[C,T]=z.useState(!1),[P,F]=z.useState(""),[O,Z]=z.useState(""),[Jt,Ae]=z.useState(""),[dr,pi]=z.useState(null),Cn=z.useRef(null),Xt=i.find(N=>N.id===o);z.useEffect(()=>{let N=!0;return(async()=>{h(!0),F("");try{const j=await C_();if(!N)return;const Ue=(j.chats||[]).map(Do);s(Ue),a(Et=>{var Zt;return Et&&Ue.some(en=>en.id===Et)?Et:((Zt=Ue[0])==null?void 0:Zt.id)||null})}catch(j){N&&F(j.message||"Failed to load chats.")}finally{N&&h(!1)}})(),()=>{N=!1}},[]),z.useEffect(()=>{if(!o){u([]),k(!1);return}let N=!0;return(async()=>{k(!0),Z("");try{const j=await Gc(o);if(!N)return;const Ue=(j.messages||[]).map(Sr);u(Ue)}catch(j){N&&Z(j.message||"Failed to load messages.")}finally{N&&k(!1)}})(),()=>{N=!1}},[o]);const I=N=>{const ye=Array.from(N||[]);ye.length&&S(j=>[...j,...ye])},A=async()=>{const N=c.trim();if(!N&&_.length===0||C)return;T(!0),Z(""),Ae(""),F("");const ye=_.map(j=>({name:j.name,size:j.size}));try{let j=o;if(!j){const en=N_(N),Nn=await Wc(en),mi=Do(Nn.chat);s(at=>[mi,...at]),j=Nn.chat.id,a(j),u([])}const Ue=await T_(j,{content:N,attachments:ye}),Et=Sr(Ue.userMessage),Zt=Sr(Ue.aiMessage);u(en=>[...en,Et,Zt]),y(""),S([]),s(en=>{const Nn=en.map(at=>at.id===j?{...at,lastMessage:Et.text||"Shared files",updatedAt:wp(Ue.aiMessage.createdAt)}:at),mi=Nn.find(at=>at.id===j);return mi?[mi,...Nn.filter(at=>at.id!==j)]:Nn})}catch(j){Ae(j.message||"Failed to send message.")}finally{T(!1)}},R=async()=>{Z(""),Ae(""),F("");try{const N=await Wc(),ye=Do(N.chat);s(j=>[ye,...j]),a(N.chat.id),u([])}catch(N){F(N.message||"Failed to create a new chat.")}},W=N=>{S(ye=>ye.filter(j=>j.name!==N))},J=N=>{N.preventDefault(),f(!0)},Tn=N=>{N.currentTarget.contains(N.relatedTarget)||f(!1)},st=N=>{N.preventDefault(),f(!1),I(N.dataTransfer.files)},fr=N=>{a(N),Z(""),Ae("")},ot=()=>{o&&(Z(""),k(!0),Gc(o).then(N=>{const ye=(N.messages||[]).map(Sr);u(ye)}).catch(N=>{Z(N.message||"Failed to load messages.")}).finally(()=>k(!1)))},Pn=async(N,ye)=>{if(!(!N||dr)){Ae(""),pi(N);try{const j=await P_(N,ye),Ue=Sr(j.message);u(Et=>Et.map(Zt=>Zt.id===N?Ue:Zt))}catch(j){Ae(j.message||"Failed to record feedback.")}finally{pi(null)}}};return m.jsxs("div",{className:"main-page",children:[m.jsxs("header",{className:"top-bar",children:[m.jsxs("div",{className:"brand",children:[m.jsx("div",{className:"brand-mark",children:"OA"}),m.jsxs("div",{children:[m.jsx("p",{className:"brand-title",children:"Orbit AI"}),m.jsx("p",{className:"brand-subtitle",children:"Studio chat"})]})]}),m.jsxs("div",{className:"top-actions",children:[m.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(N=>!N),children:p?"Hide chats":"Show chats"}),m.jsx(ly,{theme:n,onToggle:r}),m.jsx(iy,{user:e,onSignOut:t})]})]}),m.jsxs("div",{className:`workspace ${p?"sidebar-open":"sidebar-collapsed"}`,children:[m.jsxs("section",{className:"chat-panel",onDragOver:J,onDragLeave:Tn,onDrop:st,children:[m.jsx(sy,{active:M}),m.jsxs("div",{className:"chat-header",children:[m.jsxs("div",{children:[m.jsx("p",{className:"chat-label",children:"Active chat"}),m.jsx("h2",{className:"chat-title",children:(Xt==null?void 0:Xt.title)||"New conversation"})]}),m.jsx("div",{className:"chat-meta",children:m.jsx("span",{className:"status-pill",children:"Live"})})]}),m.jsx(Zg,{messages:l,isLoading:v,error:O,onRetry:ot,onFeedback:Pn,feedbackPendingId:dr,emptyState:{title:o?"Start a new conversation":"Create your first chat",subtitle:o?"Drop a file or write a prompt and the assistant will respond here.":"Click New chat to start and ask your first question."}}),m.jsx(ny,{inputValue:c,onInputChange:y,onSend:A,onAttachClick:()=>{var N;return(N=Cn.current)==null?void 0:N.click()},onFilesAdded:I,attachedFiles:_,onRemoveFile:W,fileInputRef:Cn,isSending:C,error:Jt})]}),m.jsx(qg,{threads:i,activeThreadId:o,onSelectThread:fr,onNewChat:R,collapsed:!p,onToggle:()=>g(N=>!N),isLoading:d,error:P})]})]})}function A_(){return m.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:m.jsx("path",{d:"M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 4 1.5l2.7-2.6C17.1 3.6 14.8 2.5 12 2.5 6.9 2.5 2.8 6.6 2.8 11.7S6.9 20.9 12 20.9c5.8 0 7.9-4.1 7.9-6.2 0-.4 0-.7-.1-1.1H12Z",fill:"currentColor"})})}function R_({onSignIn:e}){return m.jsxs("div",{className:"auth-layout",children:[m.jsx("section",{className:"auth-hero",children:m.jsxs("figure",{className:"hero-card",children:[m.jsxs("svg",{viewBox:"0 0 320 280","aria-hidden":"true",focusable:"false",children:[m.jsx("defs",{children:m.jsxs("linearGradient",{id:"robot",x1:"0",y1:"0",x2:"1",y2:"1",children:[m.jsx("stop",{offset:"0%",stopColor:"#f7c08a"}),m.jsx("stop",{offset:"100%",stopColor:"#7fb7a0"})]})}),m.jsx("rect",{x:"24",y:"20",width:"272",height:"200",rx:"28",fill:"#fff7e9"}),m.jsx("rect",{x:"72",y:"60",width:"176",height:"140",rx:"22",fill:"url(#robot)"}),m.jsx("circle",{cx:"128",cy:"120",r:"18",fill:"#fff7e9"}),m.jsx("circle",{cx:"200",cy:"120",r:"18",fill:"#fff7e9"}),m.jsx("circle",{cx:"128",cy:"120",r:"8",fill:"#26323f"}),m.jsx("circle",{cx:"200",cy:"120",r:"8",fill:"#26323f"}),m.jsx("rect",{x:"120",y:"160",width:"80",height:"12",rx:"6",fill:"#26323f"}),m.jsx("circle",{cx:"160",cy:"46",r:"10",fill:"#f07b6a"}),m.jsx("path",{d:"M160 46v-16",stroke:"#26323f",strokeWidth:"4",strokeLinecap:"round"})]}),m.jsxs("figcaption",{children:[m.jsx("h1",{children:"Orbit AI"}),m.jsx("p",{children:"Chat, summarize, and build decisions from a single calm workspace."})]})]})}),m.jsx("section",{className:"auth-panel",children:m.jsxs("div",{className:"auth-card",children:[m.jsx("h2",{children:"Sign in to continue"}),m.jsx("p",{children:"Use your Google account to unlock your chats and files."}),m.jsxs("button",{className:"google-button",type:"button",onClick:e,children:[m.jsx("span",{className:"google-icon",children:m.jsx(A_,{})}),"Sign in with Google"]})]})})]})}function O_(){const[e,t]=z.useState(null),[n,r]=z.useState("light");z.useEffect(()=>{document.documentElement.dataset.theme=n},[n]),z.useEffect(()=>I_(u=>{t(u)}),[]);const i=async()=>{try{await S_()}catch(l){console.error("Google sign in failed",l)}},s=async()=>{try{await k_()}catch(l){console.error("Sign out failed",l)}},o=()=>{r(l=>l==="light"?"dark":"light")},a=e?{name:e.displayName||e.email||"Orbit user",email:e.email||"No email",role:"Google account",team:"Firebase Auth"}:null;return m.jsx("div",{className:"app-shell",children:e?m.jsx(x_,{user:a,onSignOut:s,theme:n,onToggleTheme:o}):m.jsx(R_,{onSignIn:i})})}Mo.createRoot(document.getElementById("root")).render(m.jsx(jp.StrictMode,{children:m.jsx(O_,{})}));

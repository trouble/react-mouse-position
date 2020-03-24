module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}function j(){}function S(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var w=S.prototype=new j;w.constructor=S,n(w,g.prototype),w.isPureReactComponent=!0;var P={current:null},_={current:null},x=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var a=Array(f),l=0;l<f;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var D=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function T(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var f=!1;if(null===t)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case u:case i:f=!0}}if(f)return n(o,t,""===r?"."+M(t,0):r),1;if(f=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var l=r+M(c=t[a],a);f+=e(c,l,n,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),a=0;!(c=t.next()).done;)f+=e(c=c.value,l=r+M(c,a++),n,o);else if("object"===c)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return f}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(D,"$&/")+"/"),T(e,L,t=$(t,u,n,o)),I(t)}function V(){var e=P.current;if(null===e)throw Error(v(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,A,t=$(null,null,t,r)),I(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return V().useCallback(e,t)},useContext:function(e,t){return V().useContext(e,t)},useEffect:function(e,t){return V().useEffect(e,t)},useImperativeHandle:function(e,t,r){return V().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return V().useLayoutEffect(e,t)},useMemo:function(e,t){return V().useMemo(e,t)},useReducer:function(e,t,r){return V().useReducer(e,t,r)},useRef:function(e){return V().useRef(e)},useState:function(e){return V().useState(e)},Fragment:c,Profiler:a,StrictMode:f,Suspense:y,createElement:k,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),i=e.key,c=e.ref,f=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,f=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)x.call(t,l)&&!E.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){a=Array(l);for(var s=0;s<l;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:f}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:C,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},U={default:F},N=U&&F||U;e.exports=N.default||N},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,f=i(e),a=1;a<arguments.length;a++){for(var l in r=Object(arguments[a]))o.call(r,l)&&(f[l]=r[l]);if(n){c=n(r);for(var s=0;s<c.length;s++)u.call(r,c[s])&&(f[c[s]]=r[c[s]])}}return f}},function(e,t,r){"use strict";var n=r(5);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=o.a.createContext({}),i=r(1),c=r.n(i);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=s(t).call(this,e),r=!o||"object"!==f(o)&&"function"!=typeof o?p(n):o,d(p(r),"requestAnimation",(function(e){r.state.animationScheduled||r.setState({animationScheduled:!0},(function(){return requestAnimationFrame((function(t){return r.updateMouseInfo(e,t)}))}))})),d(p(r),"setViewportStatus",(function(e){r.setState({isInViewport:e})})),d(p(r),"updateMouseInfo",(function(e,t){var n=r.state,o=n.x,u=n.y,i=n.xDirection,c=n.yDirection,f=n.eventsFired,a=e.clientX,l=e.clientY,s=a-o,p=l-u,y=a/window.innerWidth*100,d=l/window.innerHeight*100,b=(y+d)/2,m=s>0?"right":s<0?"left":i,v=p>0?"down":p<0?"up":c;r.setState({x:a,y:l,xDifference:s,yDifference:p,xDirection:m,yDirection:v,xPercentage:y,yPercentage:d,totalPercentage:b,eventsFired:t?f+1:f,animationScheduled:!1})})),r.state={x:0,y:0,xDifference:0,yDifference:0,xDirection:"",yDirection:"",xPercentage:0,yPercentage:0,totalPercentage:0,isInViewport:!1,eventsFired:0,animationScheduled:!1},r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousemove",this.requestAnimation),document.addEventListener("mouseenter",(function(){return e.setViewportStatus(!0)})),document.addEventListener("mouseleave",(function(){return e.setViewportStatus(!1)}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.requestAnimation),document.removeEventListener("mouseenter",this.setViewportStatus),document.removeEventListener("mouseleave",this.setViewportStatus)}},{key:"render",value:function(){var e=this.props.children,t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.state);return delete t.animationScheduled,o.a.createElement(u.Provider,{value:{mouseInfo:t}},e&&e)}}])&&l(r.prototype,n),i&&l(r,i),t}(n.Component);b.defaultProps={children:void 0},b.propTypes={children:c.a.node};var m=b,v=function(){return Object(n.useContext)(u)};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return function(t){return o.a.createElement(u.Consumer,null,(function(r){return o.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{},r))}))}};r.d(t,"MouseInfoContext",(function(){return u})),r.d(t,"MouseInfoProvider",(function(){return m})),r.d(t,"useMouseInfo",(function(){return v})),r.d(t,"withMouseInfo",(function(){return g}))}]);
function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequire7e89;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequire7e89=o),o.register("f3ZL4",(function(e,r){t(e.exports,"default",(()=>f),(t=>f=t));var n=o("2mpFt"),a=o("kcGKx"),c=r&&!r.nodeType&&r,u=c&&e&&!e.nodeType&&e,i=u&&u.exports===c?n.default.Buffer:void 0,f=(i?i.isBuffer:void 0)||a.default})),o.register("2mpFt",(function(e,r){t(e.exports,"default",(()=>c));var n=o("4kWvg"),a="object"==typeof self&&self&&self.Object===Object&&self,c=n.default||a||Function("return this")()})),o.register("4kWvg",(function(r,n){t(r.exports,"default",(()=>o));var o="object"==typeof e&&e&&e.Object===Object&&e})),o.register("kcGKx",(function(e,r){t(e.exports,"default",(()=>n));var n=function(){return!1}})),o.register("lFXqE",(function(e,r){t(e.exports,"default",(()=>i),(t=>i=t));var n=o("4kWvg"),a=r&&!r.nodeType&&r,c=a&&e&&!e.nodeType&&e,u=c&&c.exports===a&&n.default.process,i=function(){try{var t=c&&c.require&&c.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}()})),o.register("gqoYg",(function(e,r){t(e.exports,"default",(()=>f),(t=>f=t));var n=o("2mpFt"),a=r&&!r.nodeType&&r,c=a&&e&&!e.nodeType&&e,u=c&&c.exports===a?n.default.Buffer:void 0,i=u?u.allocUnsafe:void 0;var f=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}));const a=[];function c(t,e){a.push(t,e),console.log(`${e} ${t} added to cart`)}var u=function(){this.__data__=[],this.size=0};var i=function(t,e){return t===e||t!=t&&e!=e};var f=function(t,e){for(var r=t.length;r--;)if(i(t[r][0],e))return r;return-1},s=Array.prototype.splice;var l=function(t){var e=this.__data__,r=f(e,t);return!(r<0)&&(r==e.length-1?e.pop():s.call(e,r,1),--this.size,!0)};var p=function(t){var e=this.__data__,r=f(e,t);return r<0?void 0:e[r][1]};var v=function(t){return f(this.__data__,t)>-1};var b=function(t,e){var r=this.__data__,n=f(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function y(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}y.prototype.clear=u,y.prototype.delete=l,y.prototype.get=p,y.prototype.has=v,y.prototype.set=b;var d=y;var j=function(){this.__data__=new d,this.size=0};var h=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var _=function(t){return this.__data__.get(t)};var g=function(t){return this.__data__.has(t)},O=(X=o("2mpFt")).default.Symbol,w=Object.prototype,A=w.hasOwnProperty,m=w.toString,F=O?O.toStringTag:void 0;var x=function(t){var e=A.call(t,F),r=t[F];try{t[F]=void 0;var n=!0}catch(t){}var o=m.call(t);return n&&(e?t[F]=r:delete t[F]),o},S=Object.prototype.toString;var z=function(t){return S.call(t)},P=O?O.toStringTag:void 0;var E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":P&&P in Object(t)?x(t):z(t)};var U=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var I,M=function(t){if(!U(t))return!1;var e=E(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},k=(X=o("2mpFt")).default["__core-js_shared__"],T=(I=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var q=Function.prototype.toString;var B=function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""},D=/^\[object .+?Constructor\]$/,$=Function.prototype,W=Object.prototype,L=$.toString,R=W.hasOwnProperty,N=RegExp("^"+L.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var V=function(t){return!(!U(t)||(e=t,T&&T in e))&&(M(t)?N:D).test(B(t));var e};var C=function(t,e){return null==t?void 0:t[e]};var G=function(t,e){var r=C(t,e);return V(r)?r:void 0},X=o("2mpFt"),Z=G(X.default,"Map"),K=G(Object,"create");var Y=function(){this.__data__=K?K(null):{},this.size=0};var H=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},J=Object.prototype.hasOwnProperty;var Q=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return J.call(e,t)?e[t]:void 0},tt=Object.prototype.hasOwnProperty;var et=function(t){var e=this.__data__;return K?void 0!==e[t]:tt.call(e,t)};var rt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}nt.prototype.clear=Y,nt.prototype.delete=H,nt.prototype.get=Q,nt.prototype.has=et,nt.prototype.set=rt;var ot=nt;var at=function(){this.size=0,this.__data__={hash:new ot,map:new(Z||d),string:new ot}};var ct=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};var ut=function(t){var e=ct(this,t).delete(t);return this.size-=e?1:0,e};var it=function(t){return ct(this,t).get(t)};var ft=function(t){return ct(this,t).has(t)};var st=function(t,e){var r=ct(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}lt.prototype.clear=at,lt.prototype.delete=ut,lt.prototype.get=it,lt.prototype.has=ft,lt.prototype.set=st;var pt=lt;var vt=function(t,e){var r=this.__data__;if(r instanceof d){var n=r.__data__;if(!Z||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new pt(n)}return r.set(t,e),this.size=r.size,this};function bt(t){var e=this.__data__=new d(t);this.size=e.size}bt.prototype.clear=j,bt.prototype.delete=h,bt.prototype.get=_,bt.prototype.has=g,bt.prototype.set=vt;var yt=bt;var dt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},jt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var ht=function(t,e,r){"__proto__"==e&&jt?jt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},_t=Object.prototype.hasOwnProperty;var gt=function(t,e,r){var n=t[e];_t.call(t,e)&&i(n,r)&&(void 0!==r||e in t)||ht(t,e,r)};var Ot=function(t,e,r,n){var o=!r;r||(r={});for(var a=-1,c=e.length;++a<c;){var u=e[a],i=n?n(r[u],t[u],u,r,t):void 0;void 0===i&&(i=t[u]),o?ht(r,u,i):gt(r,u,i)}return r};var wt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var At=function(t){return null!=t&&"object"==typeof t};var mt=function(t){return At(t)&&"[object Arguments]"==E(t)},Ft=Object.prototype,xt=Ft.hasOwnProperty,St=Ft.propertyIsEnumerable,zt=mt(function(){return arguments}())?mt:function(t){return At(t)&&xt.call(t,"callee")&&!St.call(t,"callee")},Pt=zt,Et=Array.isArray,Ut=o("f3ZL4"),It=/^(?:0|[1-9]\d*)$/;var Mt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&It.test(t))&&t>-1&&t%1==0&&t<e};var kt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Tt={};Tt["[object Float32Array]"]=Tt["[object Float64Array]"]=Tt["[object Int8Array]"]=Tt["[object Int16Array]"]=Tt["[object Int32Array]"]=Tt["[object Uint8Array]"]=Tt["[object Uint8ClampedArray]"]=Tt["[object Uint16Array]"]=Tt["[object Uint32Array]"]=!0,Tt["[object Arguments]"]=Tt["[object Array]"]=Tt["[object ArrayBuffer]"]=Tt["[object Boolean]"]=Tt["[object DataView]"]=Tt["[object Date]"]=Tt["[object Error]"]=Tt["[object Function]"]=Tt["[object Map]"]=Tt["[object Number]"]=Tt["[object Object]"]=Tt["[object RegExp]"]=Tt["[object Set]"]=Tt["[object String]"]=Tt["[object WeakMap]"]=!1;var qt=function(t){return At(t)&&kt(t.length)&&!!Tt[E(t)]};var Bt=function(t){return function(e){return t(e)}},Dt=(Ve=o("lFXqE")).default&&Ve.default.isTypedArray,$t=Dt?Bt(Dt):qt,Wt=Object.prototype.hasOwnProperty;var Lt=function(t,e){var r=Et(t),n=!r&&Pt(t),o=!r&&!n&&(0,Ut.default)(t),a=!r&&!n&&!o&&$t(t),c=r||n||o||a,u=c?wt(t.length,String):[],i=u.length;for(var f in t)!e&&!Wt.call(t,f)||c&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Mt(f,i))||u.push(f);return u},Rt=Object.prototype;var Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Rt)};var Vt=function(t,e){return function(r){return t(e(r))}},Ct=Vt(Object.keys,Object),Gt=Object.prototype.hasOwnProperty;var Xt=function(t){if(!Nt(t))return Ct(t);var e=[];for(var r in Object(t))Gt.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Zt=function(t){return null!=t&&kt(t.length)&&!M(t)};var Kt=function(t){return Zt(t)?Lt(t):Xt(t)};var Yt=function(t,e){return t&&Ot(e,Kt(e),t)};var Ht=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},Jt=Object.prototype.hasOwnProperty;var Qt=function(t){if(!U(t))return Ht(t);var e=Nt(t),r=[];for(var n in t)("constructor"!=n||!e&&Jt.call(t,n))&&r.push(n);return r};var te=function(t){return Zt(t)?Lt(t,!0):Qt(t)};var ee=function(t,e){return t&&Ot(e,te(e),t)},re=o("gqoYg");var ne=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var oe=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var c=t[r];e(c,r,t)&&(a[o++]=c)}return a};var ae=function(){return[]},ce=Object.prototype.propertyIsEnumerable,ue=Object.getOwnPropertySymbols,ie=ue?function(t){return null==t?[]:(t=Object(t),oe(ue(t),(function(e){return ce.call(t,e)})))}:ae;var fe=function(t,e){return Ot(t,ie(t),e)};var se=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},le=Vt(Object.getPrototypeOf,Object),pe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)se(e,ie(t)),t=le(t);return e}:ae;var ve=function(t,e){return Ot(t,pe(t),e)};var be=function(t,e,r){var n=e(t);return Et(t)?n:se(n,r(t))};var ye=function(t){return be(t,Kt,ie)};var de=function(t){return be(t,te,pe)},je=(X=o("2mpFt"),G(X.default,"DataView")),he=(X=o("2mpFt"),G(X.default,"Promise")),_e=(X=o("2mpFt"),G(X.default,"Set")),ge=(X=o("2mpFt"),G(X.default,"WeakMap")),Oe=B(je),we=B(Z),Ae=B(he),me=B(_e),Fe=B(ge),xe=E;(je&&"[object DataView]"!=xe(new je(new ArrayBuffer(1)))||Z&&"[object Map]"!=xe(new Z)||he&&"[object Promise]"!=xe(he.resolve())||_e&&"[object Set]"!=xe(new _e)||ge&&"[object WeakMap]"!=xe(new ge))&&(xe=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,n=r?B(r):"";if(n)switch(n){case Oe:return"[object DataView]";case we:return"[object Map]";case Ae:return"[object Promise]";case me:return"[object Set]";case Fe:return"[object WeakMap]"}return e});var Se=xe,ze=Object.prototype.hasOwnProperty;var Pe=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ze.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Ee=(X=o("2mpFt")).default.Uint8Array;var Ue=function(t){var e=new t.constructor(t.byteLength);return new Ee(e).set(new Ee(t)),e};var Ie=function(t,e){var r=e?Ue(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},Me=/\w*$/;var ke=O?O.prototype:void 0,Te=ke?ke.valueOf:void 0;var qe=function(t,e){var r=e?Ue(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var Be=function(t,e,r){var n,o,a,c=t.constructor;switch(e){case"[object ArrayBuffer]":return Ue(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return Ie(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return qe(t,r);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return(a=new(o=t).constructor(o.source,Me.exec(o))).lastIndex=o.lastIndex,a;case"[object Symbol]":return n=t,Te?Object(Te.call(n)):{}}},De=Object.create,$e=function(){function t(){}return function(e){if(!U(e))return{};if(De)return De(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var We=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:$e(le(t))};Ut=o("f3ZL4");var Le=function(t){return At(t)&&"[object Map]"==Se(t)},Re=(Ve=o("lFXqE")).default&&Ve.default.isMap,Ne=Re?Bt(Re):Le;var Ve,Ce=function(t){return At(t)&&"[object Set]"==Se(t)},Ge=(Ve=o("lFXqE")).default&&Ve.default.isSet,Xe=Ge?Bt(Ge):Ce,Ze={};Ze["[object Arguments]"]=Ze["[object Array]"]=Ze["[object ArrayBuffer]"]=Ze["[object DataView]"]=Ze["[object Boolean]"]=Ze["[object Date]"]=Ze["[object Float32Array]"]=Ze["[object Float64Array]"]=Ze["[object Int8Array]"]=Ze["[object Int16Array]"]=Ze["[object Int32Array]"]=Ze["[object Map]"]=Ze["[object Number]"]=Ze["[object Object]"]=Ze["[object RegExp]"]=Ze["[object Set]"]=Ze["[object String]"]=Ze["[object Symbol]"]=Ze["[object Uint8Array]"]=Ze["[object Uint8ClampedArray]"]=Ze["[object Uint16Array]"]=Ze["[object Uint32Array]"]=!0,Ze["[object Error]"]=Ze["[object Function]"]=Ze["[object WeakMap]"]=!1;var Ke=function t(e,r,n,o,a,c){var u,i=1&r,f=2&r,s=4&r;if(n&&(u=a?n(e,o,a,c):n(e)),void 0!==u)return u;if(!U(e))return e;var l=Et(e);if(l){if(u=Pe(e),!i)return ne(e,u)}else{var p=Se(e),v="[object Function]"==p||"[object GeneratorFunction]"==p;if((0,Ut.default)(e))return(0,re.default)(e,i);if("[object Object]"==p||"[object Arguments]"==p||v&&!a){if(u=f||v?{}:We(e),!i)return f?ve(e,ee(u,e)):fe(e,Yt(u,e))}else{if(!Ze[p])return a?e:{};u=Be(e,p,i)}}c||(c=new yt);var b=c.get(e);if(b)return b;c.set(e,u),Xe(e)?e.forEach((function(o){u.add(t(o,r,n,o,e,c))})):Ne(e)&&e.forEach((function(o,a){u.set(a,t(o,r,n,a,e,c))}));var y=l?void 0:(s?f?de:ye:f?te:Kt)(e);return dt(y||e,(function(o,a){y&&(o=e[a=o]),gt(u,a,t(o,r,n,a,e,c))})),u};c("Breads",5),c("Sugar",3),c("Apples",15),console.log(a);const Ye={cart:[{product:"bread",quantity:5},{product:"pizza",quantity:5}],user:{loggedIn:!0}},He=Object.assign({},Ye),Je=Ke(Ye,5);Ye.user.loggedIn=!1,console.log(He),console.log(Je);
//# sourceMappingURL=index.7ae51e85.js.map

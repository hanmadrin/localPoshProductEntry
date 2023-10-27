!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).io=e()}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,n){return u=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&a(i,n.prototype),i},u.apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},h(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function p(t){var e=c();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function d(t,e,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},d(t,e,n||t)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var g=Object.create(null);g.open="0",g.close="1",g.ping="2",g.pong="3",g.message="4",g.upgrade="5",g.noop="6";var m=Object.create(null);Object.keys(g).forEach((function(t){m[g[t]]=t}));for(var k={type:"error",data:"parser error"},b="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),w="function"==typeof ArrayBuffer,_=function(t,e,n){var r,i=t.type,o=t.data;return b&&o instanceof Blob?e?n(o):A(o,n):w&&(o instanceof ArrayBuffer||(r=o,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer))?e?n(o):A(new Blob([o]),n):n(g[i]+(o||""))},A=function(t,e){var n=new FileReader;return n.onload=function(){var t=n.result.split(",")[1];e("b"+t)},n.readAsDataURL(t)},E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O="undefined"==typeof Uint8Array?[]:new Uint8Array(256),R=0;R<E.length;R++)O[E.charCodeAt(R)]=R;var T="function"==typeof ArrayBuffer,C=function(t,e){if("string"!=typeof t)return{type:"message",data:S(t,e)};var n=t.charAt(0);return"b"===n?{type:"message",data:B(t.substring(1),e)}:m[n]?t.length>1?{type:m[n],data:t.substring(1)}:{type:m[n]}:k},B=function(t,e){if(T){var n=function(t){var e,n,r,i,o,s=.75*t.length,a=t.length,c=0;"="===t[t.length-1]&&(s--,"="===t[t.length-2]&&s--);var u=new ArrayBuffer(s),h=new Uint8Array(u);for(e=0;e<a;e+=4)n=O[t.charCodeAt(e)],r=O[t.charCodeAt(e+1)],i=O[t.charCodeAt(e+2)],o=O[t.charCodeAt(e+3)],h[c++]=n<<2|r>>4,h[c++]=(15&r)<<4|i>>2,h[c++]=(3&i)<<6|63&o;return u}(t);return S(n,e)}return{base64:!0,data:t}},S=function(t,e){return"blob"===e&&t instanceof ArrayBuffer?new Blob([t]):t},N=String.fromCharCode(30);function x(t){if(t)return function(t){for(var e in x.prototype)t[e]=x.prototype[e];return t}(t)}x.prototype.on=x.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},x.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},x.prototype.off=x.prototype.removeListener=x.prototype.removeAllListeners=x.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},x.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e)}return this},x.prototype.emitReserved=x.prototype.emit,x.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},x.prototype.hasListeners=function(t){return!!this.listeners(t).length};var L="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function P(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var j=setTimeout,q=clearTimeout;function I(t,e){e.useNativeTimers?(t.setTimeoutFn=j.bind(L),t.clearTimeoutFn=q.bind(L)):(t.setTimeoutFn=setTimeout.bind(L),t.clearTimeoutFn=clearTimeout.bind(L))}var D,F=function(t){o(r,t);var n=p(r);function r(t,i,o){var s;return e(this,r),(s=n.call(this,t)).description=i,s.context=o,s.type="TransportError",s}return r}(h(Error)),M=function(t){o(i,t);var n=p(i);function i(t){var r;return e(this,i),(r=n.call(this)).writable=!1,I(f(r),t),r.opts=t,r.query=t.query,r.readyState="",r.socket=t.socket,r}return r(i,[{key:"onError",value:function(t,e,n){return d(s(i.prototype),"emitReserved",this).call(this,"error",new F(t,e,n)),this}},{key:"open",value:function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(t){"open"===this.readyState&&this.write(t)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,d(s(i.prototype),"emitReserved",this).call(this,"open")}},{key:"onData",value:function(t){var e=C(t,this.socket.binaryType);this.onPacket(e)}},{key:"onPacket",value:function(t){d(s(i.prototype),"emitReserved",this).call(this,"packet",t)}},{key:"onClose",value:function(t){this.readyState="closed",d(s(i.prototype),"emitReserved",this).call(this,"close",t)}}]),i}(x),U="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),V={},H=0,K=0;function Y(t){var e="";do{e=U[t%64]+e,t=Math.floor(t/64)}while(t>0);return e}function z(){var t=Y(+new Date);return t!==D?(H=0,D=t):t+"."+Y(H++)}for(;K<64;K++)V[U[K]]=K;function W(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function $(t){for(var e={},n=t.split("&"),r=0,i=n.length;r<i;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}var J=!1;try{J="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}var X=J;function G(t){var e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||X))return new XMLHttpRequest}catch(t){}if(!e)try{return new(L[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}function Q(){}var Z=null!=new G({xdomain:!1}).responseType,tt=function(t){o(s,t);var n=p(s);function s(t){var r;if(e(this,s),(r=n.call(this,t)).polling=!1,"undefined"!=typeof location){var i="https:"===location.protocol,o=location.port;o||(o=i?"443":"80"),r.xd="undefined"!=typeof location&&t.hostname!==location.hostname||o!==t.port,r.xs=t.secure!==i}var a=t&&t.forceBase64;return r.supportsBinary=Z&&!a,r}return r(s,[{key:"name",get:function(){return"polling"}},{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function(t){var e=this;this.readyState="pausing";var n=function(){e.readyState="paused",t()};if(this.polling||!this.writable){var r=0;this.polling&&(r++,this.once("pollComplete",(function(){--r||n()}))),this.writable||(r++,this.once("drain",(function(){--r||n()})))}else n()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}},{key:"onData",value:function(t){var e=this;(function(t,e){for(var n=t.split(N),r=[],i=0;i<n.length;i++){var o=C(n[i],e);if(r.push(o),"error"===o.type)break}return r})(t,this.socket.binaryType).forEach((function(t){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose({description:"transport closed by the server"}),!1;e.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}},{key:"doClose",value:function(){var t=this,e=function(){t.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}},{key:"write",value:function(t){var e=this;this.writable=!1,function(t,e){var n=t.length,r=new Array(n),i=0;t.forEach((function(t,o){_(t,!1,(function(t){r[o]=t,++i===n&&e(r.join(N))}))}))}(t,(function(t){e.doWrite(t,(function(){e.writable=!0,e.emitReserved("drain")}))}))}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"https":"http",n="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=z()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port);var r=W(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}},{key:"request",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(t,{xd:this.xd,xs:this.xs},this.opts),new et(this.uri(),t)}},{key:"doWrite",value:function(t,e){var n=this,r=this.request({method:"POST",data:t});r.on("success",e),r.on("error",(function(t,e){n.onError("xhr post error",t,e)}))}},{key:"doPoll",value:function(){var t=this,e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(function(e,n){t.onError("xhr poll error",e,n)})),this.pollXhr=e}}]),s}(M),et=function(t){o(i,t);var n=p(i);function i(t,r){var o;return e(this,i),I(f(o=n.call(this)),r),o.opts=r,o.method=r.method||"GET",o.uri=t,o.async=!1!==r.async,o.data=void 0!==r.data?r.data:null,o.create(),o}return r(i,[{key:"create",value:function(){var t=this,e=P(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;var n=this.xhr=new G(e);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(var r in n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}catch(t){}if("POST"===this.method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{n.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=function(){4===n.readyState&&(200===n.status||1223===n.status?t.onLoad():t.setTimeoutFn((function(){t.onError("number"==typeof n.status?n.status:0)}),0))},n.send(this.data)}catch(e){return void this.setTimeoutFn((function(){t.onError(e)}),0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)}},{key:"onError",value:function(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}},{key:"cleanup",value:function(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=Q,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}},{key:"abort",value:function(){this.cleanup()}}]),i}(x);if(et.requestsCount=0,et.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",nt);else if("function"==typeof addEventListener){addEventListener("onpagehide"in L?"pagehide":"unload",nt,!1)}function nt(){for(var t in et.requests)et.requests.hasOwnProperty(t)&&et.requests[t].abort()}var rt="function"==typeof Promise&&"function"==typeof Promise.resolve?function(t){return Promise.resolve().then(t)}:function(t,e){return e(t,0)},it=L.WebSocket||L.MozWebSocket,ot="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),st=function(t){o(i,t);var n=p(i);function i(t){var r;return e(this,i),(r=n.call(this,t)).supportsBinary=!t.forceBase64,r}return r(i,[{key:"name",get:function(){return"websocket"}},{key:"doOpen",value:function(){if(this.check()){var t=this.uri(),e=this.opts.protocols,n=ot?{}:P(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=ot?new it(t,e,n):e?new it(t,e):new it(t)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}}},{key:"addEventListeners",value:function(){var t=this;this.ws.onopen=function(){t.opts.autoUnref&&t.ws._socket.unref(),t.onOpen()},this.ws.onclose=function(e){return t.onClose({description:"websocket connection closed",context:e})},this.ws.onmessage=function(e){return t.onData(e.data)},this.ws.onerror=function(e){return t.onError("websocket error",e)}}},{key:"write",value:function(t){var e=this;this.writable=!1;for(var n=function(n){var r=t[n],i=n===t.length-1;_(r,e.supportsBinary,(function(t){try{e.ws.send(t)}catch(t){}i&&rt((function(){e.writable=!0,e.emitReserved("drain")}),e.setTimeoutFn)}))},r=0;r<t.length;r++)n(r)}},{key:"doClose",value:function(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"wss":"ws",n="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=z()),this.supportsBinary||(t.b64=1);var r=W(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}},{key:"check",value:function(){return!(!it||"__initialize"in it&&this.name===i.prototype.name)}}]),i}(M),at={websocket:st,polling:tt},ct=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ut=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ht(t){var e=t,n=t.indexOf("["),r=t.indexOf("]");-1!=n&&-1!=r&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));for(var i,o,s=ct.exec(t||""),a={},c=14;c--;)a[ut[c]]=s[c]||"";return-1!=n&&-1!=r&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=function(t,e){var n=/\/{2,9}/g,r=e.replace(n,"/").split("/");"/"!=e.substr(0,1)&&0!==e.length||r.splice(0,1);"/"==e.substr(e.length-1,1)&&r.splice(r.length-1,1);return r}(0,a.path),a.queryKey=(i=a.query,o={},i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(o[e]=n)})),o),a}var ft=function(n){o(a,n);var s=p(a);function a(n){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,a),r=s.call(this),n&&"object"===t(n)&&(o=n,n=null),n?(n=ht(n),o.hostname=n.host,o.secure="https"===n.protocol||"wss"===n.protocol,o.port=n.port,n.query&&(o.query=n.query)):o.host&&(o.hostname=ht(o.host).host),I(f(r),o),r.secure=null!=o.secure?o.secure:"undefined"!=typeof location&&"https:"===location.protocol,o.hostname&&!o.port&&(o.port=r.secure?"443":"80"),r.hostname=o.hostname||("undefined"!=typeof location?location.hostname:"localhost"),r.port=o.port||("undefined"!=typeof location&&location.port?location.port:r.secure?"443":"80"),r.transports=o.transports||["polling","websocket"],r.readyState="",r.writeBuffer=[],r.prevBufferLen=0,r.opts=i({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},o),r.opts.path=r.opts.path.replace(/\/$/,"")+"/","string"==typeof r.opts.query&&(r.opts.query=$(r.opts.query)),r.id=null,r.upgrades=null,r.pingInterval=null,r.pingTimeout=null,r.pingTimeoutTimer=null,"function"==typeof addEventListener&&(r.opts.closeOnBeforeunload&&addEventListener("beforeunload",(function(){r.transport&&(r.transport.removeAllListeners(),r.transport.close())}),!1),"localhost"!==r.hostname&&(r.offlineEventListener=function(){r.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",r.offlineEventListener,!1))),r.open(),r}return r(a,[{key:"createTransport",value:function(t){var e=i({},this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);var n=i({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new at[t](n)}},{key:"open",value:function(){var t,e=this;if(this.opts.rememberUpgrade&&a.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((function(){e.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}},{key:"setTransport",value:function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(function(t){return e.onClose("transport close",t)}))}},{key:"probe",value:function(t){var e=this,n=this.createTransport(t),r=!1;a.priorWebsocketSuccess=!1;var i=function(){r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",(function(t){if(!r)if("pong"===t.type&&"probe"===t.data){if(e.upgrading=!0,e.emitReserved("upgrading",n),!n)return;a.priorWebsocketSuccess="websocket"===n.name,e.transport.pause((function(){r||"closed"!==e.readyState&&(f(),e.setTransport(n),n.send([{type:"upgrade"}]),e.emitReserved("upgrade",n),n=null,e.upgrading=!1,e.flush())}))}else{var i=new Error("probe error");i.transport=n.name,e.emitReserved("upgradeError",i)}})))};function o(){r||(r=!0,f(),n.close(),n=null)}var s=function(t){var r=new Error("probe error: "+t);r.transport=n.name,o(),e.emitReserved("upgradeError",r)};function c(){s("transport closed")}function u(){s("socket closed")}function h(t){n&&t.name!==n.name&&o()}var f=function(){n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",c),e.off("close",u),e.off("upgrading",h)};n.once("open",i),n.once("error",s),n.once("close",c),this.once("close",u),this.once("upgrading",h),n.open()}},{key:"onOpen",value:function(){if(this.readyState="open",a.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},{key:"onPacket",value:function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}},{key:"onHandshake",value:function(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var t=this;this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((function(){t.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}},{key:"flush",value:function(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){var t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}},{key:"getWritablePackets",value:function(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;for(var t,e=1,n=0;n<this.writeBuffer.length;n++){var r=this.writeBuffer[n].data;if(r&&(e+="string"==typeof(t=r)?function(t){for(var e=0,n=0,r=0,i=t.length;r<i;r++)(e=t.charCodeAt(r))<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))),n>0&&e>this.maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}},{key:"write",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"send",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"sendPacket",value:function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}}},{key:"close",value:function(){var t=this,e=function(){t.onClose("forced close"),t.transport.close()},n=function n(){t.off("upgrade",n),t.off("upgradeError",n),e()},r=function(){t.once("upgrade",n),t.once("upgradeError",n)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(function(){t.upgrading?r():e()})):this.upgrading?r():e()),this}},{key:"onError",value:function(t){a.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}},{key:"onClose",value:function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}]),a}(x);ft.protocol=4;var lt="function"==typeof ArrayBuffer,pt=Object.prototype.toString,dt="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===pt.call(Blob),yt="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===pt.call(File);function vt(t){return lt&&(t instanceof ArrayBuffer||function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}(t))||dt&&t instanceof Blob||yt&&t instanceof File}function gt(e,n){if(!e||"object"!==t(e))return!1;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)if(gt(e[r]))return!0;return!1}if(vt(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return gt(e.toJSON(),!0);for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&gt(e[o]))return!0;return!1}function mt(t){var e=[],n=t.data,r=t;return r.data=kt(n,e),r.attachments=e.length,{packet:r,buffers:e}}function kt(e,n){if(!e)return e;if(vt(e)){var r={_placeholder:!0,num:n.length};return n.push(e),r}if(Array.isArray(e)){for(var i=new Array(e.length),o=0;o<e.length;o++)i[o]=kt(e[o],n);return i}if("object"===t(e)&&!(e instanceof Date)){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=kt(e[a],n));return s}return e}function bt(t,e){return t.data=wt(t.data,e),t.attachments=void 0,t}function wt(e,n){if(!e)return e;if(e&&e._placeholder)return n[e.num];if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]=wt(e[r],n);else if("object"===t(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e[i]=wt(e[i],n));return e}var _t;!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(_t||(_t={}));var At=function(){function t(n){e(this,t),this.replacer=n}return r(t,[{key:"encode",value:function(t){return t.type!==_t.EVENT&&t.type!==_t.ACK||!gt(t)?[this.encodeAsString(t)]:(t.type=t.type===_t.EVENT?_t.BINARY_EVENT:_t.BINARY_ACK,this.encodeAsBinary(t))}},{key:"encodeAsString",value:function(t){var e=""+t.type;return t.type!==_t.BINARY_EVENT&&t.type!==_t.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}},{key:"encodeAsBinary",value:function(t){var e=mt(t),n=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(n),r}}]),t}(),Et=function(n){o(a,n);var i=p(a);function a(t){var n;return e(this,a),(n=i.call(this)).reviver=t,n}return r(a,[{key:"add",value:function(t){var e;if("string"==typeof t)(e=this.decodeString(t)).type===_t.BINARY_EVENT||e.type===_t.BINARY_ACK?(this.reconstructor=new Ot(e),0===e.attachments&&d(s(a.prototype),"emitReserved",this).call(this,"decoded",e)):d(s(a.prototype),"emitReserved",this).call(this,"decoded",e);else{if(!vt(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,d(s(a.prototype),"emitReserved",this).call(this,"decoded",e))}}},{key:"decodeString",value:function(t){var e=0,n={type:Number(t.charAt(0))};if(void 0===_t[n.type])throw new Error("unknown packet type "+n.type);if(n.type===_t.BINARY_EVENT||n.type===_t.BINARY_ACK){for(var r=e+1;"-"!==t.charAt(++e)&&e!=t.length;);var i=t.substring(r,e);if(i!=Number(i)||"-"!==t.charAt(e))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===t.charAt(e+1)){for(var o=e+1;++e;){if(","===t.charAt(e))break;if(e===t.length)break}n.nsp=t.substring(o,e)}else n.nsp="/";var s=t.charAt(e+1);if(""!==s&&Number(s)==s){for(var c=e+1;++e;){var u=t.charAt(e);if(null==u||Number(u)!=u){--e;break}if(e===t.length)break}n.id=Number(t.substring(c,e+1))}if(t.charAt(++e)){var h=this.tryParse(t.substr(e));if(!a.isPayloadValid(n.type,h))throw new Error("invalid payload");n.data=h}return n}},{key:"tryParse",value:function(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}},{key:"destroy",value:function(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}],[{key:"isPayloadValid",value:function(e,n){switch(e){case _t.CONNECT:return"object"===t(n);case _t.DISCONNECT:return void 0===n;case _t.CONNECT_ERROR:return"string"==typeof n||"object"===t(n);case _t.EVENT:case _t.BINARY_EVENT:return Array.isArray(n)&&n.length>0;case _t.ACK:case _t.BINARY_ACK:return Array.isArray(n)}}}]),a}(x),Ot=function(){function t(n){e(this,t),this.packet=n,this.buffers=[],this.reconPack=n}return r(t,[{key:"takeBinaryData",value:function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=bt(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}},{key:"finishedReconstruction",value:function(){this.reconPack=null,this.buffers=[]}}]),t}(),Rt=Object.freeze({__proto__:null,protocol:5,get PacketType(){return _t},Encoder:At,Decoder:Et});function Tt(t,e,n){return t.on(e,n),function(){t.off(e,n)}}var Ct=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Bt=function(t){o(i,t);var n=p(i);function i(t,r,o){var s;return e(this,i),(s=n.call(this)).connected=!1,s.receiveBuffer=[],s.sendBuffer=[],s.ids=0,s.acks={},s.flags={},s.io=t,s.nsp=r,o&&o.auth&&(s.auth=o.auth),s.io._autoConnect&&s.open(),s}return r(i,[{key:"disconnected",get:function(){return!this.connected}},{key:"subEvents",value:function(){if(!this.subs){var t=this.io;this.subs=[Tt(t,"open",this.onopen.bind(this)),Tt(t,"packet",this.onpacket.bind(this)),Tt(t,"error",this.onerror.bind(this)),Tt(t,"close",this.onclose.bind(this))]}}},{key:"active",get:function(){return!!this.subs}},{key:"connect",value:function(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}},{key:"open",value:function(){return this.connect()}},{key:"send",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.unshift("message"),this.emit.apply(this,e),this}},{key:"emit",value:function(t){if(Ct.hasOwnProperty(t))throw new Error('"'+t+'" is a reserved event name');for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.unshift(t);var i={type:_t.EVENT,data:n,options:{}};if(i.options.compress=!1!==this.flags.compress,"function"==typeof n[n.length-1]){var o=this.ids++,s=n.pop();this._registerAckCallback(o,s),i.id=o}var a=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,c=this.flags.volatile&&(!a||!this.connected);return c||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}},{key:"_registerAckCallback",value:function(t,e){var n=this,r=this.flags.timeout;if(void 0!==r){var i=this.io.setTimeoutFn((function(){delete n.acks[t];for(var r=0;r<n.sendBuffer.length;r++)n.sendBuffer[r].id===t&&n.sendBuffer.splice(r,1);e.call(n,new Error("operation has timed out"))}),r);this.acks[t]=function(){n.io.clearTimeoutFn(i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(n,[null].concat(r))}}else this.acks[t]=e}},{key:"packet",value:function(t){t.nsp=this.nsp,this.io._packet(t)}},{key:"onopen",value:function(){var t=this;"function"==typeof this.auth?this.auth((function(e){t.packet({type:_t.CONNECT,data:e})})):this.packet({type:_t.CONNECT,data:this.auth})}},{key:"onerror",value:function(t){this.connected||this.emitReserved("connect_error",t)}},{key:"onclose",value:function(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}},{key:"onpacket",value:function(t){if(t.nsp===this.nsp)switch(t.type){case _t.CONNECT:if(t.data&&t.data.sid){var e=t.data.sid;this.onconnect(e)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case _t.EVENT:case _t.BINARY_EVENT:this.onevent(t);break;case _t.ACK:case _t.BINARY_ACK:this.onack(t);break;case _t.DISCONNECT:this.ondisconnect();break;case _t.CONNECT_ERROR:this.destroy();var n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n)}}},{key:"onevent",value:function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}},{key:"emitEvent",value:function(t){if(this._anyListeners&&this._anyListeners.length){var e,n=v(this._anyListeners.slice());try{for(n.s();!(e=n.n()).done;){e.value.apply(this,t)}}catch(t){n.e(t)}finally{n.f()}}d(s(i.prototype),"emit",this).apply(this,t)}},{key:"ack",value:function(t){var e=this,n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e.packet({type:_t.ACK,id:t,data:i})}}}},{key:"onack",value:function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}},{key:"onconnect",value:function(t){this.id=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}},{key:"emitBuffered",value:function(){var t=this;this.receiveBuffer.forEach((function(e){return t.emitEvent(e)})),this.receiveBuffer=[],this.sendBuffer.forEach((function(e){t.notifyOutgoingListeners(e),t.packet(e)})),this.sendBuffer=[]}},{key:"ondisconnect",value:function(){this.destroy(),this.onclose("io server disconnect")}},{key:"destroy",value:function(){this.subs&&(this.subs.forEach((function(t){return t()})),this.subs=void 0),this.io._destroy(this)}},{key:"disconnect",value:function(){return this.connected&&this.packet({type:_t.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}},{key:"close",value:function(){return this.disconnect()}},{key:"compress",value:function(t){return this.flags.compress=t,this}},{key:"volatile",get:function(){return this.flags.volatile=!0,this}},{key:"timeout",value:function(t){return this.flags.timeout=t,this}},{key:"onAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}},{key:"prependAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}},{key:"offAny",value:function(t){if(!this._anyListeners)return this;if(t){for(var e=this._anyListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}},{key:"listenersAny",value:function(){return this._anyListeners||[]}},{key:"onAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}},{key:"prependAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}},{key:"offAnyOutgoing",value:function(t){if(!this._anyOutgoingListeners)return this;if(t){for(var e=this._anyOutgoingListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}},{key:"listenersAnyOutgoing",value:function(){return this._anyOutgoingListeners||[]}},{key:"notifyOutgoingListeners",value:function(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){var e,n=v(this._anyOutgoingListeners.slice());try{for(n.s();!(e=n.n()).done;){e.value.apply(this,t.data)}}catch(t){n.e(t)}finally{n.f()}}}}]),i}(x);function St(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}St.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},St.prototype.reset=function(){this.attempts=0},St.prototype.setMin=function(t){this.ms=t},St.prototype.setMax=function(t){this.max=t},St.prototype.setJitter=function(t){this.jitter=t};var Nt=function(n){o(s,n);var i=p(s);function s(n,r){var o,a;e(this,s),(o=i.call(this)).nsps={},o.subs=[],n&&"object"===t(n)&&(r=n,n=void 0),(r=r||{}).path=r.path||"/socket.io",o.opts=r,I(f(o),r),o.reconnection(!1!==r.reconnection),o.reconnectionAttempts(r.reconnectionAttempts||1/0),o.reconnectionDelay(r.reconnectionDelay||1e3),o.reconnectionDelayMax(r.reconnectionDelayMax||5e3),o.randomizationFactor(null!==(a=r.randomizationFactor)&&void 0!==a?a:.5),o.backoff=new St({min:o.reconnectionDelay(),max:o.reconnectionDelayMax(),jitter:o.randomizationFactor()}),o.timeout(null==r.timeout?2e4:r.timeout),o._readyState="closed",o.uri=n;var c=r.parser||Rt;return o.encoder=new c.Encoder,o.decoder=new c.Decoder,o._autoConnect=!1!==r.autoConnect,o._autoConnect&&o.open(),o}return r(s,[{key:"reconnection",value:function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}},{key:"reconnectionAttempts",value:function(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}},{key:"reconnectionDelay",value:function(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}},{key:"randomizationFactor",value:function(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}},{key:"reconnectionDelayMax",value:function(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}},{key:"timeout",value:function(t){return arguments.length?(this._timeout=t,this):this._timeout}},{key:"maybeReconnectOnOpen",value:function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}},{key:"open",value:function(t){var e=this;if(~this._readyState.indexOf("open"))return this;this.engine=new ft(this.uri,this.opts);var n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;var i=Tt(n,"open",(function(){r.onopen(),t&&t()})),o=Tt(n,"error",(function(n){r.cleanup(),r._readyState="closed",e.emitReserved("error",n),t?t(n):r.maybeReconnectOnOpen()}));if(!1!==this._timeout){var s=this._timeout;0===s&&i();var a=this.setTimeoutFn((function(){i(),n.close(),n.emit("error",new Error("timeout"))}),s);this.opts.autoUnref&&a.unref(),this.subs.push((function(){clearTimeout(a)}))}return this.subs.push(i),this.subs.push(o),this}},{key:"connect",value:function(t){return this.open(t)}},{key:"onopen",value:function(){this.cleanup(),this._readyState="open",this.emitReserved("open");var t=this.engine;this.subs.push(Tt(t,"ping",this.onping.bind(this)),Tt(t,"data",this.ondata.bind(this)),Tt(t,"error",this.onerror.bind(this)),Tt(t,"close",this.onclose.bind(this)),Tt(this.decoder,"decoded",this.ondecoded.bind(this)))}},{key:"onping",value:function(){this.emitReserved("ping")}},{key:"ondata",value:function(t){this.decoder.add(t)}},{key:"ondecoded",value:function(t){this.emitReserved("packet",t)}},{key:"onerror",value:function(t){this.emitReserved("error",t)}},{key:"socket",value:function(t,e){var n=this.nsps[t];return n||(n=new Bt(this,t,e),this.nsps[t]=n),n}},{key:"_destroy",value:function(t){for(var e=0,n=Object.keys(this.nsps);e<n.length;e++){var r=n[e];if(this.nsps[r].active)return}this._close()}},{key:"_packet",value:function(t){for(var e=this.encoder.encode(t),n=0;n<e.length;n++)this.engine.write(e[n],t.options)}},{key:"cleanup",value:function(){this.subs.forEach((function(t){return t()})),this.subs.length=0,this.decoder.destroy()}},{key:"_close",value:function(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}},{key:"disconnect",value:function(){return this._close()}},{key:"onclose",value:function(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}},{key:"reconnect",value:function(){var t=this;if(this._reconnecting||this.skipReconnect)return this;var e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{var n=this.backoff.duration();this._reconnecting=!0;var r=this.setTimeoutFn((function(){e.skipReconnect||(t.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((function(n){n?(e._reconnecting=!1,e.reconnect(),t.emitReserved("reconnect_error",n)):e.onreconnect()})))}),n);this.opts.autoUnref&&r.unref(),this.subs.push((function(){clearTimeout(r)}))}}},{key:"onreconnect",value:function(){var t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}]),s}(x),xt={};function Lt(e,n){"object"===t(e)&&(n=e,e=void 0);var r,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=t;n=n||"undefined"!=typeof location&&location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==n?n.protocol+"//"+t:"https://"+t),r=ht(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+e,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(n=n||{}).path||"/socket.io"),o=i.source,s=i.id,a=i.path,c=xt[s]&&a in xt[s].nsps;return n.forceNew||n["force new connection"]||!1===n.multiplex||c?r=new Nt(o,n):(xt[s]||(xt[s]=new Nt(o,n)),r=xt[s]),i.query&&!n.query&&(n.query=i.queryKey),r.socket(i.path,n)}return i(Lt,{Manager:Nt,Socket:Bt,io:Lt,connect:Lt}),Lt}));

class ChromeStorage{
    constructor(name){
        if(typeof name!=='string') throw new Error ('unknown value for a storage key');
        this.name = name;
    }
    async GET() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(this.name, (result) => { resolve(result[this.name]); }); 
        }); 
    }
    async SET(db) {
        return new Promise((resolve, reject) => {
            const obj = {};
            obj[this.name]=db;
            chrome.storage.local.set(obj, function() {resolve(db)});
        });
    }
}
class ChromeStorageDB{
    constructor({name,attributes}){
        let storageSetup =  this.#constructionCheck({name,attributes});
        /*db name (a string)*/
        this.name = storageSetup.name;
        /*
        attributes has 5 parameter
        type: ('string','number','boolean') -defalut 'number' 
        autoIncrement: (true,false) - default false
        primaryKey: (true,false) - default false
        allowNull: (true,false) - default false
        default: ('string','number','boolean',null) - default null
        */
        this.attributes = storageSetup.attributes;
    }   
    #constructionCheck({name,attributes}){
        if(!name) throw new Error ('storage must have a name value(string)');
        if(!attributes) throw new Error ('storage must have some attributes(object)');

        let attributeKeys = Object.keys(attributes);
        if(attributeKeys.length == 0) throw new Error ('attributes must have 1 or more keys');
        /* if(attributeKeys.length != [...new Set(attributeKeys)].length) throw new Error ('each attribute must be unique')*/
        for(let i=0;i<attributeKeys.length;i++){
            let attribute = attributes[attributeKeys[i]];
            if(typeof attribute.type == 'undefined') attribute.type = 'number';
            if(typeof attribute.autoIncrement == 'undefined') attribute.autoIncrement = false;
            if(typeof attribute.primaryKey == 'undefined') attribute.primaryKey = false;
            if(typeof attribute.allowNull == 'undefined') attribute.allowNull = false;
            if(typeof attribute.default == 'undefined') attribute.default = null;
            
            if(!(attribute.type=='number' || attribute.type=='boolean' || attribute.type=='string' /*|| attribute.type=='object' || attribute.type=='array'*/)) throw new Error ('unknown attribute type')
            if(!(attribute.autoIncrement === true || attribute.autoIncrement === false)) throw new Error ('unknown value for autoIncrement');
            if(!(attribute.primaryKey === true || attribute.primaryKey === false)) throw new Error ('unknown value for primaryKey');
            if(!(attribute.allowNull === true || attribute.allowNull === false)) throw new Error ('unknown value for allowNull');
            
            if(attribute.type!='number' && attribute.autoIncrement) throw new Error('autoIncrement is only for number data type');
            if(attribute.primaryKey && attribute.default!=null) throw new Error('primaryKey with default value is not possible');

            if(attribute.default!=null && typeof attribute.default != attribute.type) throw new Error('default value should be equal to key type')
        }
        return {name,attributes};
    }
    async #build(){
        let thisDB = await this.#getDB();
        if(typeof thisDB!='object' || !Array.isArray(thisDB)) {
            await this.#setDB([]);
            thisDB = await this.#getDB();
        }
    }
    async #getDB() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(this.name, (result) => { resolve(result[this.name]); }); 
        }); 
    }
    async #setDB(db) {
        return new Promise((resolve, reject) => {
            let obj = {};
            obj[this.name]=db;
            chrome.storage.local.set(obj, function() {resolve(true)});
        });
    }
    #POSTCheck = (row) => {
        if(typeof row !='object' && Array.isArray(row)) throw new Error ('New row is not enough to get entried');
        if(!row) throw new Error('Row is just empty');
        let rowKeys = Object.keys(row);
        if(!rowKeys.length) throw new Error('Row is  empty');

        let attributes = this.attributes;
        let attributesKeys = Object.keys(attributes);
        for(let i=0;i<attributesKeys.length;i++){
            let attribute = attributes[attributesKeys[i]];
            if(!attribute.autoIncrement){
                if(typeof(row[attributesKeys[i]])!=attribute.type || typeof(row[attributesKeys[i]])=='undefined'){
                    if(typeof(row[attributesKeys[i]])!='undefined') throw new Error (`wrong data type for '${attributesKeys[i]}' key`);
                    if(attribute.primaryKey) throw new Error (`Primary key '${attributesKeys[i]}' must be a valid data`);
                    if(attribute.default==null && !attribute.allowNull) throw new Error (`No valid data provided for '${attributesKeys[i]}' key`);
                    row[attributesKeys[i]] = attribute.default;
                }
            }
        }
        return row;
    }
    async POST(row){
        await this.#build();
        let db = await this.#getDB();
        row = this.#POSTCheck(row);
        let attributes = this.attributes;
        let attributesKeys = Object.keys(attributes);
        for(let i=0;i<attributesKeys.length;i++){
            let attribute = attributes[attributesKeys[i]];
            if(attribute.autoIncrement){
                row[attributesKeys[i]] = 1;
                if(db.length!=0){
                    row[attributesKeys[i]] = (db[db.length-1].id)+1;
                }
            }
            if(attribute.primaryKey){
                if(db.find( data => {return data[attributesKeys[i]] === row[attributesKeys[i]]} ) != undefined)
                throw new Error (`primaryKey '${attributesKeys[i]}' value is not unique`);
                // console.log(`primaryKey '${attributesKeys[i]}' value is not unique`);
            }
        }
        db.push(row);
        await this.#setDB(db);
        return db;
    }
    async GET(where){
        await this.#build();
        where = this.#WHERECheck(where);
        const db = await this.#getDB();
        if(where==null) return db; 
        return this.#whereReturn({db,where,logic:true})
    }
    async DELETE(where){
        await this.#build();
        where = this.#WHERECheck(where);
        if(where==null) return 0;
        const db = await this.#getDB();
        const results = this.#whereReturn({db,where,logic:false});
        await this.#setDB(results);
        return results;
    }
    #WHERECheck(where){
        if(where===undefined) return null;

        if(where!=null)
            if(typeof where!='object' || Array.isArray(where))
                throw new Error('where key got unexpected value');
        let whereKeys = Object.keys(where);
        if(whereKeys.length==0) return null;
        let attributes = this.attributes;
        let attributeKeys = Object.keys(attributes);
        for(let i=0;i<whereKeys.length;i++){
            let whereKeyValues = where[whereKeys[i]];
            if(!attributeKeys.includes(whereKeys[i]))
                throw new Error('where key got keys that are not availabale on attribute keys.');
            if(!whereKeyValues)
                throw new Error('you must be valid object as where key value');
            if(!Array.isArray(whereKeyValues))
                throw new Error('where key value got unexpected value');
            if(whereKeyValues.length==0)
                throw new Error('where key value atleast need one item');
            whereKeyValues.forEach(whereKeyValue => {
                let whereKeyValueKeys = Object.keys(whereKeyValue);
                if(whereKeyValueKeys.length!=2)
                    throw new Error('where key value keys must have 2 key');
                if(typeof whereKeyValue.operation != 'string')
                    throw new Error('opeartion value must be string');
                if(typeof whereKeyValue.value != attributes[whereKeys[i]].type)
                    throw new Error('value type must match');   
            });
        }
        return where;
    }

    #SETCheck(set){
        if(set===undefined || set===null) return null;
        if(set!=null)
            if(typeof set!='object' || Array.isArray(set))
                throw new Error('set key got invalid value');
        const setKeys = Object.keys(set);
        if(setKeys.length==0) throw new Error('must have 1 or more keys in set');
        
        const attributes = this.attributes;
        const attributeKeys = Object.keys(attributes);
        for(let i=0;i<setKeys.length;i++){
            const setKey = setKeys[i];
            if(!attributeKeys.includes(setKeys) && typeof set[setKey] != attributes[setKey].type) 
               throw new Error('set keys value is not defined as key value'); 
            if(attributes[setKey].autoIncrement) throw new Error('autoIncrement should not be changed');
            if(attributes[setKey].primaryKey) throw new Error('primaryKey should not be changed');
        }
        return set;     
    }
    #whereReturn({db,where,logic,hook}){
        if(typeof logic !='boolean') throw new Error('there must be a boolean logic value');
        if(hook == undefined) hook = null;
        const dbLength = db.length;
        let result = [];
        for(let j=0;j<dbLength;j++){
            let row = db[j];
            const whereKeys = Object.keys(where);
            let interKey = true;
            for(let i=0; i<whereKeys.length;i++){
                const whereKey = whereKeys[i];
                const whereKeyValues = where[whereKey];
                let intraKey = false;
                for(let k=0;k<whereKeyValues.length;k++){
                    const operation = whereKeyValues[k].operation;
                    const value = whereKeyValues[k].value;
                    switch(operation){
                        case 'equal':
                            intraKey = intraKey || row[whereKey]===value;
                        break;
                        case 'notEqual':
                            intraKey = intraKey || row[whereKey]!==value;
                        break;
                        default:
                            throw new Error('invalid operation')
                        break;
                    }
                }
                interKey = interKey && intraKey;
            }
            if((interKey && logic) || (!interKey && !logic)){
                if(hook===null){
                    result.push(row);
                }else{
                    row = hook(row);
                }  
            }           
        }
        if(hook===null) return result; else return db;
    }
    async PUT({set,where}){
        await this.#build();
        where = this.#WHERECheck(where);
        set = this.#SETCheck(set);
        if(where==null) return 0;
        let db = await this.#getDB();
        const hook = (row)=>{
            const setKeys = Object.keys(set);
            const setValues = Object.values(set);
            for(let i=0;i<setKeys.length;i++){
                row[setKeys[i]] = setValues[i];
            }
            return row;
        }
        db = this.#whereReturn({db,where,logic:true,hook});
        
        await this.#setDB(db);
        return db;
    }
}
const fbSubDom = 'www';
const essentials = {
    sleep: (ms)=>{
        return new Promise(resolve=>{
            setTimeout(resolve, ms);
        });
    }
}
const mondayFetch = async (query) => {
    const metaInformationDB = new ChromeStorage('metaInformation'); 
    const metaInformation = await metaInformationDB.GET();
    const mondayResponse = await fetch (
        `https://api.monday.com/v2`,
        {
            cache: "no-cache",
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': metaInformation.defaultAPI,
                'API-Version' : '2023-07'
            },
            body: JSON.stringify({query})
        }
    );
    return mondayResponse;
}
const fixedData = {
    metaInformation: {
        deviceId:{
            title: 'Device Id',
            type: 'text',
            defaultValue: '1-1',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        extensionSwitch:{
            title: 'Extension Switch',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: true,
        },
        skipSendingNewMessages:{
            title: 'Skip Sending New Messages',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: false,
        },
        debugModeSwitch:{
            title: 'Debug Switch',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: false,
        },
        hourlyMessageLimit:{
            title: 'Hourly Message Limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        hourlyNewMessageLimit:{
            title: 'Hourly New Message Limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        hourlyReplyMessageLimit:{
            title: 'Hourly Reply Message Limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        readMessageLimitCount:{
            title: 'Read Message Limit Count',
            type: 'number',
            defaultValue: 10,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        checkMessageDaysLimit:{
            title: 'Check message days limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        messagingStartTime:{
            title: 'Messaging Start Time(24 HOURS)',
            type: 'number',
            defaultValue: 8,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        messagingEndTime:{
            title: 'Messaging End Time(24 HOURS)',
            type: 'number',
            defaultValue: 19,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        defaultAPI:{
            title: 'Default API',
            type: 'text',
            defaultValue: 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MjU1MTMxNiwidWlkIjozMDI3MzE5NCwiaWFkIjoiMjAyMi0wNy0yN1QyMzowMzowNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODg0NzExMCwicmduIjoidXNlMSJ9.OsVnuCUSnm-FF21sjAND10cWEKN9-UIqIkNx6Rz8Bfo',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        googleAPIKey:{
            title: 'Google API Key',
            type: 'text',
            defaultValue: `${'A  I  z  a S     y      A c    7    h    h 8 r m      L A 2    0    m M    G    b F 1    o k N    y    A c C    4    s g    P    G b   S    Q'.replace(/ /g,'')}`,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        domain:{
            title: 'Domain',
            type: 'text',
            defaultValue: 'https://xentola.com',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        accountEmail:{
            title: 'Account Email',
            type: 'text',
            defaultValue: '',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        accountPassword:{
            title: 'Account Password',
            type: 'text',
            defaultValue: '',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },

    },
    workingUrls:{
        messages:  `https://${fbSubDom}.facebook.com/messages/t`,
        home: `https://${fbSubDom}.facebook.com/`,
        itemSuffix: `https://${fbSubDom}.facebook.com/marketplace/item/`,
        unknownMessageSuffix: `https://${fbSubDom}.facebook.com/messages/t/`,
        sellerMessageSuffix: `https://${fbSubDom}.facebook.com/marketplace/message_seller/`,
    },
    workingSelectors:{
        messages:{
            allMarketplaceMessages: '[aria-label="Marketplace"] div>div[role="row"]:has([role="gridcell"]:first-child):has([role="gridcell"]:nth-child(2))',
            loadingMessages: '[role="progressbar"][aria-label="Loading..."]',
            moreMessagesButton: '[href^="/messages/?pageNum"]',
            unseenMessages: `.${'_55wp _7om2 _5b6o _67iu _67ix _2ycx aclb del_area async_del abb touchable _592p _25mv'.split(' ').join('.')}`,
            marketplaceMessagesBlock: '[aria-label="Chats"] [role="row"] span:not(:has(*)):not(:empty)',
            timeStamp : '[data-sigil="timestamp"]',
        },
        newMessage:{
            messageInput: 'form [name="message"]',
            sendButton: '[type="submit"][value="Send"]',
            seeConversationButton: '[type="submit"][value="See Conversation"]',
            askForDetailsButton: '[type="submit"][value="Ask for Details"]',
        },
        content:{
            console: 'CONTENT_CONSOLE',
        },
        readMessage:{
            postUrl : 'a[href^="https://www.facebook.com/marketplace/item/"]',
            olderMessage : '[href^="/messages/read/?tid=cid.g."]',
            SingleMessages : '[role="row"] > div > [data-scope="messages_table"][role="gridcell"]',
            messageDataHolder: ':scope > span,.messageAttachments',
            neutralMessages : '[role="row"] > [data-scope="messages_table"][role="gridcell"]',
            // messageBox: '[role="navigation"] + [role="main"] [data-pagelet="MWInboxDetail"] > [aria-label^="Conversation titled"]'
            messageBox: '[role="navigation"] + [role="main"] [data-pagelet="MWInboxDetail"] > [aria-label^="Conversation "]'
        },
        sendUnsentMessage:{
            sold: `.${'_a58 _9_7 _2rgt _1j-g _2rgt'.split(' ').join('.')}`,
            messageInput: 'form [name="message"]',
            sendButton: 'button[type="submit"][value="Send"]',
        }
    },
    limits:{
        loadMessages: 10,
        soldButValidAsSellerMessageCount: 2,
        // lastUnreadMesaage: (86400*3),
    },
    mondayFetch:{
        appraisalCounterBoard : 1255820475,
        borEffortBoardId : 1250230293,
        systemArchiveBoardId : 3353179014,
        myAccountId : 30273194,
        columnValuesIds:{
            borEffortBoard:{
                person : 'person',
                url: 'text7',
                status: 'status',
                date: 'date4',
                fbCode: 'text84',
                vin: 'text6',
            },
            appraisalCounterBoard:{
                status: 'status',
            },
            systemArchiveBoard:{
                status: 'status',
            }

        },
        statuses: {
            borEffortBoard:{
                unVerified: 5,
                verified: 1,
                bad: 4,
                verifiedWithVin: 17,
            }
        }
    },
    
};
const contentScripts = {
    accountInfo : async()=>{
        const accountInfoDB = new ChromeStorage('accountInfo');
        let id = '';
        let name = '';
        try{
            const infos = JSON.parse(document.body.textContent.match(/{"ACCOUNT_ID":.+?}/)[0]);
            id = infos.ACCOUNT_ID;
            name = infos.NAME;
            await accountInfoDB.SET({id, name});
        }catch(e){
            const infos = await accountInfoDB.GET();
            id = infos.id;
            name = infos.name;
        }

        return {id, name};
    },
    isUserLoggedIn: ()=>{
        // return getCookie('c_user')==''?false:true;
        let result = '';
        let name = 'c_user' + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                result = c.substring(name.length, c.length);
            }
        }
        return result==''?false:true;
    },
    isProgramReady: async()=>{
        let values = await new ChromeStorage('metaInformation').GET();
        values = values==null?{}:values;
        const metas = fixedData.metaInformation;
        const metaKeys = Object.keys(metas);
        for(let i=0;i<metaKeys.length;i++){
            const metaKey = metaKeys[i];
            const meta = metas[metaKey];
            if(meta.requiredToStart){
                if(values[metaKey]===undefined || values[metaKey]===false){
                    console.log('meta not found', metaKey,values[metaKey]);
                    return false;
                }
            }
        }
        return true;
    },
    setupConsoleBoard: ()=>{
        if(document.getElementById(fixedData.workingSelectors.content.console)){
            document.getElementById(fixedData.workingSelectors.content.console).remove();
        }
        const consoleBoard =  document.createElement('div');
        consoleBoard.id = fixedData.workingSelectors.content.console;
        const header = document.createElement('div');
        header.id = fixedData.workingSelectors.content.console+'header';
        header.innerText = 'Starting Console...';
        const dynamic = document.createElement('div');
        dynamic.id = fixedData.workingSelectors.content.console+'dynamic';
        const standard = document.createElement('div');
        standard.id = fixedData.workingSelectors.content.console+'standard';
        consoleBoard.append(header,dynamic,standard);
        dragElement(consoleBoard);
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
            elmnt.onmousedown = dragMouseDown;
            }
        
            function dragMouseDown(e) {
            e = e || window.event;
            // e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            }
        
            function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
        
            function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            }
        }
        document.body.appendChild(consoleBoard);
    },
    clearConsole: ()=>{
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
        consoleBoardStandard.innerHTML = '';
    },
    showDataOnConsole: (data)=>{
        const standard = document.getElementById(fixedData.workingSelectors.content.console  +'standard');
        const content = document.createElement('div');
        content.classList.add('font-sub');
        content.innerText = data;
        standard.appendChild(content);
        console.log(data);
    },
    showDataOnConsoleDynamic:(data)=>{
        const consoleBoardDynamic = document.getElementById(fixedData.workingSelectors.content.console+'dynamic');
        consoleBoardDynamic.innerText = data;
        console.log(data);
    },
    showConsoleError: ()=>{
        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
        consoleBoard.classList.add('consoleAlert');
        const refreshButton = document.createElement('button');
        refreshButton.classList.add('buttons');
        refreshButton.innerText = 'Refresh';
        refreshButton.onclick = ()=>{
            window.location.reload();
        };
        consoleBoard.appendChild(refreshButton);
    },
    showDebugButton: (name,callback)=>{
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
        const button = document.createElement('button');
        button.classList.add('buttons');
        button.classList = 'consoleDebugButton'
        button.innerText = name;
        button.onclick = callback;
        consoleBoardStandard.appendChild(button);
        return button;
    },
    showWorkingStep: async (step)=>{
        const workingStepDB = new ChromeStorage('workingStep');
        const workingStep = await workingStepDB.GET();
        const consoleBoarHeader = document.getElementById(fixedData.workingSelectors.content.console+'header');
        consoleBoarHeader.innerText = step || workingStep;
    },
    showNameInput: async ()=>{
        const consoleBoarHeader = document.getElementById(fixedData.workingSelectors.content.console+'header');
        const nameDB = new ChromeStorage('workingStep');
        const name = (await nameDB.GET());
        const input = document.createElement('input');
        input.style.color = 'black'
        input.value = name;
        consoleBoarHeader.replaceChildren(input);
        input.onchange = async()=>{
            await nameDB.SET(input.value)
        }
    },
    pageRedirection: async (url,message)=>{
        // show data on console
        contentScripts.showDataOnConsole('Redirection:'+url);
        contentScripts.showDataOnConsole('Message:'+message);
        const redirectionMessagesDB = new ChromeStorage('redirectionMessages');
        const isRedirectionAllowed = async (message)=>{
            let messages = await redirectionMessagesDB.GET();
            if(messages!=null){
                messages.unshift(message);
                messages = messages.slice(0,10);
                await redirectionMessagesDB.SET(messages);
                if(messages.length>5){
                    if(messages[0]==message && messages[1]==message && messages[2]==message && messages[3]==message && messages[4]==message ){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    return true;
                }
            }else{
                await redirectionMessagesDB.SET([`${message}`]);
                return true;
            }
        }
        if(await isRedirectionAllowed(message)){
            const metaInformationDB = new ChromeStorage('metaInformation');
            const metaInformation = await metaInformationDB.GET();
            const debugModeSwitch = metaInformation.debugModeSwitch;
            if(debugModeSwitch){
                const button = document.createElement('button');
                button.innerText = 'Redirect';
                button.onclick = ()=>{
                    window.location.href = url;
                }
                const standard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
                standard.appendChild();
            }else{
                window.location.href = url;
            }
            
        }else{
            const messages = await redirectionMessagesDB.GET();
            for(let i=0;i<messages.length;i++){
                contentScripts.showDataOnConsole(messages[i]);
            }
            const button = document.createElement('button');
            button.innerText = 'Continue or Try again';
            button.onclick = ()=>{
                redirectionMessagesDB.SET([]);
                contentScripts.showDataOnConsole("Error data cleared");
                contentScripts.pageRedirection(url,message);
            }
            const standard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
            standard.appendChild(button);
            return false;
        }
    },
    getItemIdByMessageId: async (fb_message_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const itemIdDataJSON = await fetch(`${domain}/extension/getItemIdByMessageId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_message_id: `${fb_message_id}`})
        });
        const itemIdData = await itemIdDataJSON.json();
        return itemIdData.item_id;
    },
    markItemAsLinkGone: async (item_id)=>{
        console.log('marking item as link gone');
        if(item_id){
            const query = `
                query{
                    items(ids: [${item_id}]){
                        board{
                            id
                        }
                    }
                }
            `;
            const boardDataJSON = await mondayFetch(query);
            const boardData = await boardDataJSON.json();
            const boardId = boardData.data.items[0].board.id;
            if(boardId==fixedData.mondayFetch.borEffortBoardId || boardId==fixedData.mondayFetch.appraisalCounterBoard){
                const columnId = boardId==fixedData.mondayFetch.borEffortBoardId?fixedData.mondayFetch.columnValuesIds.borEffortBoard.status:fixedData.mondayFetch.columnValuesIds.appraisalCounterBoard.status;
                const query = `
                    mutation {
                        change_simple_column_value(
                            item_id: ${item_id}, 
                            board_id: ${boardId}, 
                            column_id: "${columnId}", 
                            value: "Link Gone") {
                            id
                        }
                    }
                `;
                const itemDataJSON = await mondayFetch(query);
                const itemData = await itemDataJSON.json();
                const query1 = `
                    mutation {
                        archive_item(item_id: ${item_id}) {
                            id
                        }
                    }
                `;
                const itemDataJSON1 = await mondayFetch(query1);
                const itemData1 = await itemDataJSON1.json();
            }
            const metaInformationDB = new ChromeStorage('metaInformation');
            const metaInfromation = await metaInformationDB.GET();
            
            const serverLinkGoneUpdate = await fetch(`${metaInfromation.domain}/extension/serverLinkGoneUpdate`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    item_id: `${item_id}`,
                    fb_id: `${(await contentScripts.accountInfo()).fb_id}`
                })
            });
        }
    },
    markItemAsSecondMessage: async (item_id)=>{
        console.log('marking item as second message');
        if(item_id){
            const query = `
                query{
                    items(ids: [${item_id}]){
                        board{
                            id
                        }
                    }
                }
            `;
            const boardDataJSON = await mondayFetch(query);
            const boardData = await boardDataJSON.json();
            const boardId = boardData.data.items[0].board.id;
            if(boardId==fixedData.mondayFetch.borEffortBoardId){
                const columnId = fixedData.mondayFetch.columnValuesIds.borEffortBoard.status;
                const query = `
                    mutation {
                        change_simple_column_value(
                            item_id: ${item_id}, 
                            board_id: ${boardId}, 
                            column_id: "${columnId}", 
                            value: "2nd 1st Msg") {
                            id
                        }
                    }
                `;
                const itemDataJSON = await mondayFetch(query);
                const itemData = await itemDataJSON.json();
            }
        }
    },
    readCurrentMessage: async ()=>{
        contentScripts.showDataOnConsole('Reading current message');
        const accountInfo = await contentScripts.accountInfo();
        const messageData = [];
        const messageBox = await contentScripts.getElementBySelector({
            data:{
                selector: fixedData.workingSelectors.readMessage.messageBox,
                type: 'querySelectorAll',
                isMonoExpected: true,
            },
            instant: true,
            required: true,

        });
        let messages = messageBox.querySelectorAll(fixedData.workingSelectors.readMessage.SingleMessages);
        if(messages.length==0){
            contentScripts.showDataOnConsole('No messages found');
            contentScripts.showConsoleError();
            throw new Error('No messages found');
        }
        const getSender = (senderElement)=>{
            const senderElementText = senderElement.innerText;
            if(senderElementText == 'You sent' || senderElementText.includes('You replied to')){
                return 'me';
            }else{
                return 'seller';
            }
        };
        const retrieveImage = async (imageElement)=>{
            const initialTime = new Date().getTime();
            const isTimeOverSpent = ()=>{
                const timeLimit = 60*1*1000;
                const timeNow = new Date().getTime();
                if(timeNow-initialTime>=timeLimit){
                    return true;
                }else{
                    return false;
                }
            };
            const timeStatusGenerator = ()=>{
                const timeLimit = 60*1*1000;
                const timeNow = new Date().getTime();
                return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used searching for messages`;
            };
            imageElement.click();
            const imageViewer = await contentScripts.getElementBySelector({
                data:{
                    selector: '[aria-label="Media viewer"] [data-pagelet="MessengerMediaViewerPhoto"] img',
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                },
                instant: false,
                maxTimeOut: 10000,
                required: true,
                name: 'Image Viewer'
            });
            const imageUrl = imageViewer.src;
            const closeButton = await contentScripts.getElementBySelector({
                data:{
                    selector: '[aria-label="Media viewer"] [aria-label="Close"]',
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                },
                instant: false,
                maxTimeOut: 10000,
                required: true,
                name: 'Close Button'
            });
            closeButton.click();
            while(true){
                contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                if(isTimeOverSpent()){
                    contentScripts.showDataOnConsole('Image not loaded');
                    contentScripts.showConsoleError();
                    throw new Error('Image not loaded');
                }
                const imageViewer = document.querySelector('[aria-label="Media viewer"]');
                if(!imageViewer){
                    break;
                }
                await essentials.sleep(1000);
            }
            return imageUrl;
        };
        const singleMessageReader = async (holder)=>{
            const sender = getSender(singleMessage.firstElementChild);
            let defaultdata = {
                sent_from: sender,
                timeStamp: `${(new Date()).getTime()}`,
                fb_id: accountInfo.id,
                status: 'done',
            };

            // audi elements
            const audioElements = holder.querySelectorAll('[aria-label="Audio scrubber"]');
            if(audioElements.length!=0){
                for(let i=0;i<audioElements.length;i++){
                    const audio = audioElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'text',
                        message: "ERROR:: SELLER SENT A AUDIO CLIP AND FB INTERFACE WAS UNABLE TO READ"
                    }
                }
            }

            const fileElements = holder.querySelectorAll('a[download]')
            // video elements
            const videoElements = holder.querySelectorAll('video');
            if(videoElements.length!=0){
                for(let i=0;i<videoElements.length;i++){
                    const video = videoElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'video',
                        message: video.getAttribute('src')
                    }
                }
            }

            // 


        }
        for(let i=0;i<messages.length;i++){
            const singleMessage = messages[i];
            const messageHolder = await contentScripts.getElementBySelector({
                data:{
                    selector: ':scope > div:has(:nth-child(3))',
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                    validator: (element)=>{
                        if(element.childElementCount==3){
                            return true;
                        }else{
                            return false;
                        }
                    }
                },
                parent: singleMessage,
                instant: true,
                required: false,
                name: 'Message Data Holder',
                debug: false
            });
            if(messageHolder!=null){
                // midle child
                let messageDataHolder = messageHolder.children[1].firstChild;
                messageDataHolder = messageDataHolder.querySelector(":scope > :not(:empty)");
                await singleMessageReader(messageDataHolder);
                
            }else{  
                console.log('Not a Message Section');
            }
            continue;
            let defaultMessagedata = {
                timeStamp: `${(new Date()).getTime()}`,
                fb_id: accountInfo.id,
                status: 'done'
            };
            const textMessageElements = singleMessage.querySelectorAll('div:not(:has(*)):not(:empty)');
            let sentByElements = singleMessage.querySelectorAll('h4 > span:not(:has(*)):not(:empty)');
            if(textMessageElements.length>1 && sentByElements.length>1){
                contentScripts.showDataOnConsole('Multiple messages slot found in single message');
                contentScripts.showConsoleError();
                throw new Error('Multiple messages slot found in single message');
            }
            if(textMessageElements.length==0 && sentByElements.length==0){
                console.log(singleMessage)
                contentScripts.showDataOnConsole('Facebook generated Message found');
                continue;
            }
            if(sentByElements.length==0){
                sentByElements = singleMessage.querySelectorAll('div > span:not(:has(*)):not(:empty)');
                if(sentByElements.length==0){
                    console.log(singleMessage)
                    contentScripts.showDataOnConsole('There supposed to be a sender');
                    contentScripts.showConsoleError();
                    throw new Error('There supposed to be a sender');
                }if(sentByElements.length>1){
                    contentScripts.showDataOnConsole('Multiple senders found');
                    contentScripts.showConsoleError();
                    throw new Error('Multiple senders found');
                }
            }
            if(textMessageElements.length==1 && sentByElements.length==1){
                const singleMessagedata = {
                    ...defaultMessagedata,
                    type: 'text',
                    sent_from: getSender(sentByElements[0]),
                    message: textMessageElements[0].innerText,
                };
                messageData.push(singleMessagedata);
                continue;
            }

            // these messages are only
            defaultMessagedata.sent_from = getSender(sentByElements[0]);

            const videoElements = singleMessage.querySelectorAll('video');
            if(videoElements.length!=0){
                defaultMessagedata.type = 'video';
                for(let j=0;j<videoElements.length;j++){
                    const singleMessagedata = {
                        ...defaultMessagedata,
                        message: videoElements[j].src,
                    };
                    messageData.push(singleMessagedata);
                }
                continue;
            }

            const gifImages = singleMessage.querySelectorAll('a[href^="/messenger_photo/"] img[src^="https://cdn.fbsbx.com"]');
            if(gifImages.length!=0){
                defaultMessagedata.type = 'image';
                for(let j=0;j<gifImages.length;j++){
                    const singleMessagedata = {
                        ...defaultMessagedata,
                        message: gifImages[j].src,
                    };
                    messageData.push(singleMessagedata);
                }
                continue;
            }
            
            const imageViewerElements = singleMessage.querySelectorAll('a[aria-label="Open photo"],img[alt="Open photo"]');
            if(imageViewerElements.length!=0){
                defaultMessagedata.type = 'image';
                for(let j=0;j<imageViewerElements.length;j++){
                    const singleMessagedata = {
                        ...defaultMessagedata,
                        message: await retrieveImage(imageViewerElements[j]),
                    };
                    messageData.push(singleMessagedata);
                }
                continue;
            }

            

            const imageElements = singleMessage.querySelectorAll('img[src^="https://static"]');
            if(imageElements.length!=0){
                defaultMessagedata.type = 'image';
                for(let j=0;j<imageElements.length;j++){
                    const singleMessagedata = {
                        ...defaultMessagedata,
                        message: imageElements[j].src,
                    };
                    messageData.push(singleMessagedata);
                }
                continue;
            }

            const svgElements = singleMessage.querySelectorAll('svg');
            if(svgElements.length==1){
                defaultMessagedata.type = 'text';
                const svgElement = svgElements[0];
                const svgElementText = `::${svgElement.textContent}::`;
                const singleMessagedata = {
                    ...defaultMessagedata,
                    message: svgElementText,
                };
                messageData.push(singleMessagedata);
                continue;
            }

            const linkTextElement = singleMessage.querySelector('div:not(empty) > span[role="gridcell"] > a');
            if(linkTextElement){
                const linkTextElementParent = linkTextElement.parentElement.parentElement;
                const linkTextNodes = linkTextElementParent.childNodes;
                for(let j=0;j<linkTextNodes.length;j++){
                    const linkTextNode = linkTextNodes[j];
                    if(linkTextNode.nodeType==3){
                        // text
                        const singleMessagedata = {
                            ...defaultMessagedata,
                            type: 'text',
                            message: linkTextNode.textContent,

                        };
                        messageData.push(singleMessagedata);
                    }else if(linkTextNode.nodeType==1){
                        // element
                        const linkElement = linkTextNode.querySelector('a');
                        if(linkElement){
                            const singleMessagedata = {
                                ...defaultMessagedata,
                                type: 'link',
                                message: linkElement.textContent,
                            };
                            messageData.push(singleMessagedata);
                        }else{
                            contentScripts.showDataOnConsole('There supposed to be a link');
                            contentScripts.showConsoleError();
                            throw new Error('There supposed to be a link');
                        }
                    }else{
                        contentScripts.showDataOnConsole('Only text or element nodes are expected');
                        contentScripts.showConsoleError();
                        throw new Error('Only text or element nodes are expected');
                    }
                }
                continue;
            }

            

            console.log('new type of message found');
            console.log(singleMessage);
            console.log(getSender(sentByElements[0]));

            continue;
            contentScripts.showDataOnConsole('New type of message found');
            contentScripts.showConsoleError();
            throw new Error('New type of message found');

            
            messages = document.querySelectorAll(fixedData.workingSelectors.readMessage.SingleMessages);
            while(true){
                if(messages[i]){
                    break;
                }
                await essentials.sleep(1000);
                messages = document.querySelectorAll(fixedData.workingSelectors.readMessage.SingleMessages);
            }
            let message = messages[i];
            const messageInfo = JSON.parse(message.getAttribute('data-store'));
            const timestamp = messageInfo.timestamp;
            const sent_from = (messageInfo.author==accountInfo.id || messageInfo.author==accountInfo.name)?'me':'seller';
            const text = message.querySelector(':scope > span');
            let attachment = message.querySelector(':scope > div');
            if(text.children.length!=0){
                // filter non ascii characters
                // max length 1000 char
                let messagetext = text.innerText;
                messagetext = messagetext.replace(/[^\x00-\x7F]/g, "");
                messagetext = messagetext.substring(0,999);
                const textData = {
                    type: 'text',
                    sent_from,
                    message: messagetext,
                    timestamp,
                    fb_id: accountInfo.id,
                    status: 'done'
                }
                messageData.push(textData);
            }
            if(attachment.children.length !=0){
                messages = document.querySelectorAll(fixedData.workingSelectors.readMessage.SingleMessages);
                message = messages[i];
                attachment = message.querySelector(':scope > div');
                let images = attachment.querySelectorAll('img,i');
                for(let j=0;j<images.length;j++){
                    await essentials.sleep(1000);
                    messages = document.querySelectorAll(fixedData.workingSelectors.readMessage.SingleMessages);
                    message = messages[i];
                    attachment = message.querySelector(':scope > div');
                    images = attachment.querySelectorAll('img,i');
                    const image = images[j];
                    const tagName = image.tagName.toLowerCase();
                    let imageSrc = '';
                    if(tagName=='img'){
                        imageSrc = image.src;
                    }else{
                        imageSrc = image.style.backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "");
                    }
                    console.log(image);
                    const attachmentLink = image.closest('.msg').querySelector('a');
                    let url = '';
                    let fileType = '';
                    if(attachmentLink){
                        console.log('has attachment');
                        const onpageUrl = attachmentLink.getAttribute('href');
                        if(onpageUrl.includes("https://") && !onpageUrl.includes("https://facebook.com")){
                            console.log('has external link');
                            url = onpageUrl;
                            fileType = 'link';
                        }else{
                            console.log('has internal link');
                            console.log(onpageUrl);
                            url = await contentScripts.retrieveAttachementUrl(document.querySelector(`[href="${onpageUrl}"]`));
                            fileType = contentScripts.getFileTypeFromUrl(url);
                        }
                    }else{
                        console.log('no attachment');
                        url = imageSrc;
                        fileType = contentScripts.getFileTypeFromUrl(url);
                    }
                    
                    console.log(imageSrc)
                    const imageData = {
                        type: fileType,
                        sent_from,
                        message: url,
                        timestamp,
                        fb_id: accountInfo.id,
                        status: 'done'
                    }
                    messageData.push(imageData);

                    // const imageData = {
                    //     type: 'image',
                    //     sent_from,
                    //     message: imageSrc,
                    //     timestamp,
                    //     fb_id: accountInfo.id,
                    //     status: 'done'
                    // }
                    // messageData.push(imageData);
                }
            }
        }
        console.table(messageData)
        return messageData;
    },
    getFileTypeFromUrl: (url)=>{
        console.log(url);
        url = new URL(url);
        const path = url.pathname;
        const urlData = path.split('.');
        const type = urlData[urlData.length-1];
        const imageTypes = ['jpg','jpeg','png','gif','bmp','svg','webp'];
        if(imageTypes.includes(type)){
            return 'image';
        }else{
            return 'file';
        }
    },
    retrieveAttachementUrl: async (image)=>{
        image.click();
        let url = '';
        while(true){
            await essentials.sleep(5000);
            contentScripts.showDataOnConsole('Waiting for image to load');
            if(window.location.href.includes(`https://${fbSubDom}.facebook.com/messages/attachment_preview`) || window.location.href.includes(`https://${fbSubDom}.facebook.com/messages/attachment_confirm`)){
                const attachmentLinks = [...document.querySelectorAll('a')].filter((a)=>a.innerText=='Download'||a.innerText=='Open');
                const closeLinks = [...document.querySelectorAll('a')].filter((a)=>a.innerText=='Close'||a.innerText=='Cancel');
                if(attachmentLinks.length==1 && closeLinks.length!=0){
                    url = attachmentLinks[0].href;
                    if(url==''){
                        console.log('url is empty. Most likely this is a GIF Image');
                        url = document.querySelector('#rootcontainer img.img').src;
                    }
                    closeLinks[closeLinks.length-1].click();
                    break;
                }else{
                    // The link you followed may be broken, or the page may have been removed.
                    if(document.body.innerText.includes('link you followed may be broken')){
                        console.log('we know this is a bug');
                        
                        url = image.querySelector('img').getAttribute('src');
                        history.back();
                        break;
                    }else{
                        console.log('we know this is a bug but what????');
                    }
                }
            }else{
                contentScripts.showDataOnConsole('Waiting for page to load');
            }
        }
        while(true){
            await essentials.sleep(5000);
            contentScripts.showDataOnConsole('Waiting for image to close');
            if(window.location.href.includes(`https://${fbSubDom}.facebook.com/messages/read/`)){

                break;
            }
        }
        return url;
    },
    sendMessagesToServer: async (messageData)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const messageDataJSON = await fetch(`${domain}/extension/sendMessagesToServer`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({messageData})
        });
        const messageDataResponse = await messageDataJSON.json();
        if(messageDataResponse.restored){
            if(messageData.length>0){
                const item_id = messageData[0].item_id;
                const query = `
                    query{
                        items(ids: [${item_id}]){
                            board{
                                id
                            }
                        }
                    }
                `;
                const boardDataJSON = await mondayFetch(query);
                const boardData = await boardDataJSON.json();
                const boardId = boardData.data.items[0].board.id;
                if(boardId==fixedData.mondayFetch.systemArchiveBoardId){
                    const columnId = fixedData.mondayFetch.columnValuesIds.systemArchiveBoard.status;
                    const query = `
                        mutation {
                            change_simple_column_value(
                                item_id: ${item_id}, 
                                board_id: ${boardId}, 
                                column_id: "${columnId}", 
                                value: "Restored") {
                                id
                            }
                        }
                    `;
                    try{
                        const itemDataJSON = await mondayFetch(query);
                        const itemData = await itemDataJSON.json();
                        const itemId = itemData.data.change_simple_column_value.id;
                    }catch(e){
                        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        const removeLeadButton  = document.createElement('button');
                        removeLeadButton.innerText = 'Remove Lead';
                        removeLeadButton.onclick = async ()=>{
                            await contentScripts.markItemAsLinkGone(item_id);
                        };
                        consoleBoard.appendChild(removeLeadButton);
                    }
                    
                }
            }
        }
        return messageDataResponse;
    },
    sellerMessageCount: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const messageCountJSON = await fetch(`${domain}/extension/sellerMessageCount`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const messageCountResponse = await messageCountJSON.json();
        console.log(messageCountResponse);
        console.log(messageCountResponse.count);
        return messageCountResponse.count;
    },
    isCurrentMessageValid: async (fb_post_id)=>{
        // "You named the conversation"
        // "You changed the conversation picture"
        // "waiting for your response about this listing"
        // "changed the listing title"
        // "reduced the price"
        // "changed the listing description"
        // "left the group"
        // " sold "
        // "removed the item from Marketplace"
        const invalidIndicators = [
            "left the group",
            "removed the item from Marketplace",
            " sold ",
        ]
        const messageBox = document.querySelector(fixedData.workingSelectors.readMessage.messageBox);
        const neutralMessages = messageBox.querySelectorAll(fixedData.workingSelectors.readMessage.neutralMessages);
        for(let i=0;i<neutralMessages.length;i++){
            const neutralMessage = neutralMessages[i];
            const message = neutralMessage.innerText;
            console.log(message);
            for(let j=0;j<invalidIndicators.length;j++){
                const indicator = invalidIndicators[j];
                if(message.includes(indicator)){
                    if(indicator.includes('sold')){
                        // TODO:: check if the item is sold to us
                        const sellerMessageCount = await contentScripts.sellerMessageCount(fb_post_id);
                        if(sellerMessageCount>fixedData.limits.soldButValidAsSellerMessageCount){
                            return true;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    },
    lastMessageOnServerByPostId: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const itemLastMessageDataJSON = await fetch(`${metaInfromation.domain}/extension/lastMessageOnServerByPostId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const itemLastMessageData = await itemLastMessageDataJSON.json();
        return itemLastMessageData.message;
    },
    itemIdByPostId: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const itemIdDataJSON = await fetch(`${metaInfromation.domain}/extension/itemIdByPostId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const itemIdData = await itemIdDataJSON.json();
        return itemIdData.item_id;
    },
    postIdByItemId: async (item_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const postIdDataJSON = await fetch(`${metaInfromation.domain}/extension/postIdByItemId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item_id: `${item_id}`})
        });
        const postIdData = await postIdDataJSON.json();
        return postIdData.fb_post_id;
    },
    isValidTimeToSendFirstMessage:  async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const firstMessageTimeDB = new ChromeStorage('firstMessageTime');
        const metaInfromation = await metaInformationDB.GET();
        const messagingStartHour = metaInfromation.messagingStartTime;
        const messagingEndHour = metaInfromation.messagingEndTime;  
        const time = new Date().getTime()/1000;

        const americanHour = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
        const hourlyMessageLimit = metaInfromation.hourlyMessageLimit;
        const minimumDuration = 3600/hourlyMessageLimit;
        const firstMessageTime = (await firstMessageTimeDB.GET()) || 0;
        console.log('firstMessageTime',minimumDuration-(time-firstMessageTime));
        if(americanHour>=messagingStartHour && americanHour<=messagingEndHour){
            if(time-firstMessageTime>=minimumDuration){
                return {
                    status: true,
                    waitingTime: 0
                };
            }else{
                return {
                    status: true,
                    waitingTime: minimumDuration-(time-firstMessageTime)
                };
            }
        }else{
            return {
                status: false,
                waitingTime: 60*5
            };
        }
    },
    isValidTimeToSendUnsentMessage: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const messagingStartHour = metaInfromation.messagingStartTime;
        const messagingEndHour = metaInfromation.messagingEndTime;  

        const americanHour = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
        return (americanHour>=messagingStartHour && americanHour<=messagingEndHour);
    },
    getUnsentMessagePostIds : async ()=>{
        const fb_id = (await contentScripts.accountInfo()).id;
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const unsentMessagesDataJSON = await fetch(`${domain}/extension/getUnsentMessagePostIds`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id: `${fb_id}`})
        });
        const unsentMessagesData = await unsentMessagesDataJSON.json();
        return unsentMessagesData.post_ids;
    },
    getUnsentMessagesByPostId: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const unsentMessagesDataJSON = await fetch(`${domain}/extension/getUnsentMessagesByPostId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const unsentMessagesData = await unsentMessagesDataJSON.json();
        return unsentMessagesData.messages;
    },
    isValidMessageInSellerMessage: async (fb_post_id)=>{
        // "left the group"
        // "Sold"
        // "removed the item from Marketplace"
        const error = document.body.innerText.includes('Sorry, something went wrong');
        const removed = document.body.innerText.includes('removed the item from Marketplace');
        const soldHolder = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.sold);
        let sold = false;
        if(soldHolder){
            sold = soldHolder.innerText.includes('Sold');
        }
        console.log(`error: ${error}, removed: ${removed}, sold: ${sold}`);
        if (error) return false;
        if (removed) return false;
        if (sold){
            const sellerMessageCount = await contentScripts.sellerMessageCount(fb_post_id);
            if(sellerMessageCount>fixedData.limits.soldButValidAsSellerMessageCount){
                return true;
            }else{
                return false;
            }
        }
        return true;
        // return !(error || removed || sold);
    },
    markMessageAsSent: async ( messageId)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const markMessageAsSentJSON = await fetch(`${domain}/extension/markMessageAsSent`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message_id:`${messageId}`})
        });
        const markMessageAsSent = await markMessageAsSentJSON.json();
        return markMessageAsSent;
    },
    markItemMessagesdone: async (itemId)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const markItemMessagesdoneJSON = await fetch(`${domain}/extension/markItemMessagesdone`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item_id:`${itemId}`})
        });
        const markItemMessagesdone = await markItemMessagesdoneJSON.json();
        return markItemMessagesdone;
    },
    waitWithVisual: async (waitingTime)=>{
        waitingTime = parseInt(waitingTime);
        let stopTimer = false;
        const timer = document.createElement('div');
        timer.classList.add('font-header');
        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
        consoleBoard.replaceChildren(timer);
        const stopButton = document.createElement('button');
        stopButton.innerText = 'Stop';
        stopButton.classList.add('btn','btn-danger','btn-sm');
        stopButton.addEventListener('click',()=>{
            stopTimer = true;
        }); 
        consoleBoard.appendChild(stopButton);
        for(let i = waitingTime;i>=0;i--){
            timer.innerText = `Waiting for ${i} seconds`;
            await essentials.sleep(1000);
            if(stopTimer){
                break;
            }
        }
    },
    hasRepliesToSend: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const hasRepliesToSendJSON = await fetch(`${domain}/extension/hasRepliesToSend`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`})
        });
        const hasRepliesToSend = await hasRepliesToSendJSON.json();
        return hasRepliesToSend;
    },
    hasUnsentFirstMessage: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const hasUnsentFirstMessageJSON = await fetch(`${domain}/extension/hasUnsentFirstMessage`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`})
        });
        const hasUnsentFirstMessage = await hasUnsentFirstMessageJSON.json();
        return hasUnsentFirstMessage;
    },
    hasNewRawItem: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const hasNewRawItemJSON = await fetch(`${domain}/extension/hasNewRawItem`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const hasNewRawItem = await hasNewRawItemJSON.json();
        return hasNewRawItem;
    },
    hasSecondMessageToSend: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const hasSecondMessageToSendJSON = await fetch(`${domain}/extension/hasSecondMessageToSend`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`})
        });
        const hasSecondMessageToSend = await hasSecondMessageToSendJSON.json();
        return hasSecondMessageToSend;
    },
    setSecondMessage: async (item_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const setSecondMessageJSON = await fetch(`${domain}/extension/setSecondMessage`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`,item_id:`${item_id}`})
        });
        const setSecondMessage = await setSecondMessageJSON.json();
        return setSecondMessage;
    },
    updateFirstMessageTime: async()=>{
        const firstMessageTimeDB = new ChromeStorage('firstMessageTime');
        await firstMessageTimeDB.SET(new Date().getTime()/1000);
    },
    sendNewSellerMessage: async ()=>{ 
        const sendNewSellerMessageDB = new ChromeStorage('sendNewSellerMessage');
        const sendNewSellerMessage = await sendNewSellerMessageDB.GET();
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await new ChromeStorage('metaInformation').GET();
        const skipSendingNewMessages = metaInformation.skipSendingNewMessages;
        if(skipSendingNewMessages){
            await sendNewSellerMessageDB.SET(null);
            await workingStepDB.SET('collectUnseenMessage');
            contentScripts.pageRedirection(fixedData.workingUrls.messages,'skipping sending new messages');
            return;
        }
        // else{
        //     const hasRepliesToSend = await contentScripts.hasRepliesToSend();
        //     const hasSecondMessageToSend = await contentScripts.hasSecondMessageToSend();
        //     // if(hasRepliesToSend.status || hasSecondMessageToSend.status){
        //     if(hasRepliesToSend.status){
        //         await sendNewSellerMessageDB.SET(null);
        //         await workingStepDB.SET('collectUnseenMessage');
        //         contentScripts.pageRedirection(fixedData.workingUrls.messages,'has replies or second message to send');
        //         return;
        //     }
        // }

        if(sendNewSellerMessage==null){
            const domain = metaInformation.domain;
            const newPostJSON = await fetch(`${domain}/extension/newPostId`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fb_id: `${(await contentScripts.accountInfo()).id}`,
                    fb_user_name: `${(await contentScripts.accountInfo()).name}`
                })
            });
            if(newPostJSON.status==200){
                const newPost = await newPostJSON.json();
                newPost.has_unsent_message = true;
                await sendNewSellerMessageDB.SET(newPost);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'New Post to message');
            }else if(newPostJSON.status==201){
                contentScripts.showDataOnConsole((await newPostJSON.json()).message)
            }
            else{
                contentScripts.showDataOnConsole('No raw Item to work With');
                await contentScripts.waitWithVisual(60*5);
                await sendNewSellerMessageDB.SET(null);
                await workingStepDB.SET('collectUnseenMessage');               
                contentScripts.pageRedirection(fixedData.workingUrls.messages,'No raw Item to work With');
            }
        }else{
            if(sendNewSellerMessage.fb_post_id){
                contentScripts.showDataOnConsole('fb post id collected');
                await essentials.sleep(5000); 
                // const markAsLinkGone = async ()=>{
                //     contentScripts.showDataOnConsole('marking as "Link Gone"');
                //     const query1 = `
                //         mutation {
                //             change_simple_column_value(
                //                 item_id: ${sendNewSellerMessage.item_id}, 
                //                 board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                //                 column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}", 
                //                 value: "Link Gone") {
                //                 id
                //             }
                //         }
                //     `;
                //     try{
                //         const LinkGoneDataJSON = await mondayFetch(query1);
                        
                //         const LinkGoneData = await LinkGoneDataJSON.json();
                        
                //         await sendNewSellerMessageDB.SET(null);               
                //         contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                //     }catch(e){
                //         contentScripts.showDataOnConsole('Error marking as "Link Gone"');
                //     }
                // }
                const markAsFirstMessage = async (message)=>{
                    contentScripts.showDataOnConsole('marking as "First Message"');
                    
                    const query = `
                        mutation {
                            change_simple_column_value(
                                item_id: ${sendNewSellerMessage.item_id}, 
                                board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}", 
                                value: "1st MSG") {
                                id
                            }
                        }
                    `;
                    const formatDateToMondayAmerican = ()=>{
                        const americanTime = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}));
                        let month = '' + (americanTime.getMonth() + 1);
                        let day = '' + americanTime.getDate();
                        let year = americanTime.getFullYear();
                    
                        if (month.length < 2) 
                            month = '0' + month;
                        if (day.length < 2) 
                            day = '0' + day;
                    
                        return [year, month, day].join('-');
                    }
                    const query2 = `
                        mutation {
                            change_simple_column_value(
                                item_id: ${sendNewSellerMessage.item_id}, 
                                board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.date}", 
                                value: "${formatDateToMondayAmerican()}") {
                                id
                            }
                        }
                    `;
                    try{
                        const firstMessageDataJSON = await mondayFetch(query);
                        const dateDataJSON = await mondayFetch(query2);
                        const dateData = await dateDataJSON.json();
                        const firstMessageData = await firstMessageDataJSON.json();
                        const metaInformation = await metaInformationDB.GET();
                        const domain = metaInformation.domain;
                        const saveFirstMessageActionJSON = await fetch(`${domain}/extension/saveFirstMessageAction`,{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                item_id: `${sendNewSellerMessage.item_id}`,
                                fb_post_id: `${sendNewSellerMessage.fb_post_id}`,
                                fb_id: `${(await contentScripts.accountInfo()).id}`,
                                fb_user_name: `${(await contentScripts.accountInfo()).name}`,
                                messageText: message
                            })
                        });
                        if(saveFirstMessageActionJSON.status==200){
                            await contentScripts.messageCountEligible(true);
                            console.log('first message action saved');
                            await sendNewSellerMessageDB.SET(null);       
                            await workingStepDB.SET('collectUnseenMessage');
                            contentScripts.pageRedirection(fixedData.workingUrls.home,'Message Sent and unseen messages started');
                        }else{
                            contentScripts.showDataOnConsole('Error marking as "1st Message"');
                        }
                        
                    }catch(e){
                        contentScripts.showDataOnConsole('Error marking as "1st Message"');
                    }
                }
                if(window.location.href.indexOf('unavailable-product')!=-1){
                    console.log('unavailable-product');
                    // markAsLinkGone replacement
                    await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                    await sendNewSellerMessageDB.SET(null);               
                    contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                    // await markAsLinkGone();
                }else{
                    if(window.location.href==`${fixedData.workingUrls.itemSuffix}${sendNewSellerMessage.fb_post_id}`){
                        
                        // if(document.querySelector(fixedData.workingSelectors.newMessage.seeConversationButton)){
                        //     await markAsFirstMessage();
                        //     await contentScripts.updateFirstMessageTime();
                        // }else if(document.querySelector(fixedData.workingSelectors.newMessage.askForDetailsButton)){
                        //     const accountInfo = await contentScripts.accountInfo();
                        //     const metaInformation = await metaInformationDB.GET();
                        //     const domain = metaInformation.domain;
                        //     const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                        //         method: 'POST',
                        //         headers: {
                        //             'Content-Type': 'application/json'
                        //         }
                        //     });
                        //     const messageText = await messageTextJSON.json();
                        //     await contentScripts.sendMessagesToServer([
                        //         {
                        //             item_id : sendNewSellerMessage.item_id,
                        //             type: 'text',
                        //             sent_from:'me',
                        //             message: messageText,
                        //             timestamp: `${parseInt(new Date().getTime())}`,
                        //             fb_id: accountInfo.id,
                        //             status: 'unsent',
                        //         }
                        //     ]);
                        //     await markAsFirstMessage(messageText);
                        // }else if(!document.querySelector('form [name="message"]')){
                        //     // markAsLinkGone replacement
                        //     await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                        //     await sendNewSellerMessageDB.SET(null);               
                        //     contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                        //     // await markAsLinkGone();
                        // }else if(document.querySelector('form [name="message"]')){
                        //     contentScripts.showDataOnConsole('sending message');
                        //     const message = document.querySelector(fixedData.workingSelectors.newMessage.messageInput);
                        //     const button = document.querySelector(fixedData.workingSelectors.newMessage.sendButton);
                        //     const metaInformation = await metaInformationDB.GET();
                        //     const domain = metaInformation.domain;
                        //     const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                        //         method: 'POST',
                        //         headers: {
                        //             'Content-Type': 'application/json'
                        //         }
                        //     });
                        //     const messageText = await messageTextJSON.json();
                        //     message.value = messageText;
                        //     button.click();
                        //     let i =0;
                        //     while(true){
                        //         if(document.querySelector(fixedData.workingSelectors.newMessage.seeConversationButton)){
                        //             break;
                        //         }
                        //         await essentials.sleep(5000);
                        //         contentScripts.showDataOnConsole(`waiting for message to send ${++i}`);
                        //         if(i>20){
                        //             const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        //             const tryAgainButton = document.createElement('button');
                        //             tryAgainButton.innerText = 'Try Again';
                        //             tryAgainButton.onclick = async ()=>{
                        //                 contentScripts.pageRedirection(window.location.href,'Trying to send first message Again');
                        //             }
                        //             const removeLeadButton = document.createElement('button');
                        //             removeLeadButton.innerText = 'Remove Lead';
                        //             removeLeadButton.onclick = async ()=>{
                        //                 await sendNewSellerMessageDB.SET(null); 
                        //                 contentScripts.pageRedirection(fixedData.workingUrls.home,'Message Sent and unseen messages started');
                        //             };
                        //             consoleBoard.append(tryAgainButton,removeLeadButton);
                        //             return null;
                        //         }
                        //     }
                        //     await markAsFirstMessage(messageText);
                        //     await contentScripts.updateFirstMessageTime();
                        // }else{
                        //     contentScripts.showDataOnConsole('something unexpected happening!');
                        // }

                        if(document.querySelector(fixedData.workingSelectors.newMessage.askForDetailsButton)){
                            const accountInfo = await contentScripts.accountInfo();
                            const metaInformation = await metaInformationDB.GET();
                            const domain = metaInformation.domain;
                            const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            const messageText = await messageTextJSON.json();
                            await contentScripts.sendMessagesToServer([
                                {
                                    item_id : sendNewSellerMessage.item_id,
                                    type: 'text',
                                    sent_from:'me',
                                    message: messageText,
                                    timestamp: `${parseInt(new Date().getTime())}`,
                                    fb_id: accountInfo.id,
                                    status: 'unsent',
                                }
                            ]);
                            await markAsFirstMessage(messageText);
                        }else if(!document.querySelector('form [name="message"]')){
                            // markAsLinkGone replacement
                            await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                            await sendNewSellerMessageDB.SET(null);               
                            contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                            // await markAsLinkGone();
                        }else if(document.querySelector('form [name="message"]')){
                            const accountInfo = await contentScripts.accountInfo();
                            const metaInformation = await metaInformationDB.GET();
                            const domain = metaInformation.domain;
                            const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            const messageText = await messageTextJSON.json();
                            await contentScripts.sendMessagesToServer([
                                {
                                    item_id : sendNewSellerMessage.item_id,
                                    type: 'text',
                                    sent_from:'me',
                                    message: messageText,
                                    timestamp: `${parseInt(new Date().getTime())}`,
                                    fb_id: accountInfo.id,
                                    status: 'unsent',
                                }
                            ]);
                            await markAsFirstMessage(messageText);
                        }else{
                            contentScripts.showDataOnConsole('something unexpected happening!');
                            const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                            const tryAgainButton = document.createElement('button');
                            tryAgainButton.innerText = 'Try Again';
                            tryAgainButton.onclick = async ()=>{
                                contentScripts.pageRedirection(window.location.href,'Trying to send first message Again');
                            }
                            const removeLeadButton = document.createElement('button');
                            removeLeadButton.innerText = 'Remove Lead';
                            removeLeadButton.onclick = async ()=>{
                                await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                                await sendNewSellerMessageDB.SET(null);               
                                contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                            };
                            consoleBoard.append(tryAgainButton,removeLeadButton);
                        }

                    }else{
                        contentScripts.pageRedirection(`${fixedData.workingUrls.itemSuffix}${sendNewSellerMessage.fb_post_id}`,'Not on item page');
                    }
                }                
            }else{
                contentScripts.showDataOnConsole('fb post id not collected');
                const processUrlAndContinue = async(url)=>{
                    // get digits from url
                    const postId = url.match(/\d+/g).map(Number)[0];
                    sendNewSellerMessage.fb_post_id = `${postId}`;
                    await sendNewSellerMessageDB.SET(sendNewSellerMessage);
                    contentScripts.pageRedirection(`${fixedData.workingUrls.itemSuffix}${postId}`,'Redirecting to post page');
                }
                const setNameOnMondayAndCollectURL = async ()=>{
                    const query1 = `
                        query{
                            items(ids: [${sendNewSellerMessage.item_id}]){
                                column_values(ids:["${fixedData.mondayFetch.columnValuesIds.borEffortBoard.url}"]){
                                    value
                                }
                            }
                        }
                    `;
                    const urlDataJSON = await mondayFetch(query1);
                    const urlData = await urlDataJSON.json();
                    const url = urlData.data.items[0].column_values[0].value;
                    const query2 = `
                        mutation{
                            change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},
                            item_id:${sendNewSellerMessage.item_id},
                            column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.person}",
                            value: "${fixedData.mondayFetch.myAccountId}") 
                            {
                                id
                            }
                        }
                    `;
                    const itemDataJSON = await mondayFetch(query2);
                    const itemData = await itemDataJSON.json();
                    const item = itemData.data.change_simple_column_value;
                    return url;
                }
                try{
                    await processUrlAndContinue(await setNameOnMondayAndCollectURL());
                }catch(e){
                    const contentConsole = document.getElementById(fixedData.workingSelectors.contentConsole);
                    const collectAgainButton = document.createElement('button');
                    collectAgainButton.innerText = 'Collect & Set Again';
                    collectAgainButton.addEventListener('click',async ()=>{
                        try{
                            await processUrlAndContinue(await setNameOnMondayAndCollectURL());
                        }catch(e){
                            contentScripts.showDataOnConsole('Error Collecting URL');
                        }
                    });
                    contentConsole.appendChild(collectAgainButton);
                }
            }
        }
        

    },
    getElementBySelector: async ({parent,data, instant, maxTimeOut=1, required,name,debug=true}) => {
        const {type, isMonoExpected, selector, innerText, value, validator} = data;
        let count = 0;
        let result = null;
        do{
            count++;
            if(count<=maxTimeOut){
                if(!instant){
                    await essentials.sleep(1000);
                }
                if(debug){
                    contentScripts.showDataOnConsoleDynamic(`${count} Seconds Waiting for element : ${name || selector}`)
                }
            }else{
                break;
            }
            let elements = null;
            if(parent){
                elements = parent[type](selector);
            }else{
                elements = document[type](selector);
            }

            if(isMonoExpected){
                if(elements.length==1){  
                    if(validator){
                        if(validator(elements[0])){
                            result = elements[0];
                            break;
                        }
                    }else if(innerText){
                        if(elements[0].innerText.includes(innerText)){
                            result = elements[0];
                            break;
                        }
                    }else if(value){
                        if(elements[0].value.includes(value)){
                            result = elements[0];
                            break;
                        }
                    }else{
                        result = elements[0];
                        break;
                    }
                }else if(elements.length>1){
                    if(validator){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(validator(elements[i])){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length===1){
                            result = filteredElements[0];
                            break;
                        }
                    }else if(innerText){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            console.log(elements[i].innerText,innerText)
                            if(elements[i].innerText.includes(innerText)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length===1){
                            result = filteredElements[0];
                            break;
                        }
                    }else if(value){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(elements[i].value.includes(value)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length===1){
                            result = filteredElements[0];
                            break;
                        }
                    }
                }
            }else{
                if(elements.length>0){
                    if(validator){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(validator(elements[i])){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length>0){
                            result = filteredElements;
                            break;
                        }
                    }else if(innerText){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(elements[i].innerText.includes(innerText)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length>0){
                            result = filteredElements;
                            break;
                        }
                    }else if(value){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(elements[i].value.includes(value)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length>0){
                            result = filteredElements;
                            break;
                        }
                    }else{
                        result = elements;
                        break;
                    }
                }
            }
        }while(!instant);
        if(required && !result){
            contentScripts.showDataOnConsoleDynamic(`Element not found and required: ${name ||selector}`);
            contentScripts.showConsoleError();
            throw new Error({parent,data, instant, maxTimeOut, required,name});
        }else{
            if(!result){
                contentScripts.showDataOnConsoleDynamic(`Element not found: ${name ||selector}`);
                return null;
            }else{
                if(debug){
                    contentScripts.showDataOnConsoleDynamic(``)
                }
                return result;
            }
        }
    },
    collectUnseenMessage: async()=>{
        await contentScripts.showWorkingStep('Collecting unseen messages');
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        if(window.location.href==fixedData.workingUrls.messages){
            contentScripts.clearConsole();
            contentScripts.showDataOnConsole('On message page');
            const marketplaceMessageBlock = await contentScripts.getElementBySelector({
                data: {
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                    selector: fixedData.workingSelectors.messages.marketplaceMessagesBlock,
                    innerText: 'Marketplace'
                },
                instant: false,
                maxTimeOut: 10,
                required: true,
                name: 'Marketplace Messages Block'
            });
            marketplaceMessageBlock.click();
            contentScripts.showDataOnConsole('Marketplace Messages Block Clicked');
            // waiting for marketplace message section to load
            await contentScripts.getElementBySelector({
                data: {
                    type: 'querySelectorAll',
                    isMonoExpected: false,
                    selector: fixedData.workingSelectors.messages.allMarketplaceMessages
                },
                instant: false,
                maxTimeOut: 30,
                required: true,
                name: 'All Marketplace Messages'
            });

            // waiting for targeted marketplace messages to load
            const getMessageTimeInDay  = async(messageElement)=>{
                const timeElement = await contentScripts.getElementBySelector({
                    parent: messageElement,
                    data: {
                        type: 'querySelectorAll',
                        isMonoExpected: true,
                        selector: 'span:not(:has(*)):not(:empty)',
                        validator: (element)=>{
                            const text = element.innerText;
                            const regex = /^\d{1,2}[mhdwy]$/;
                            if(regex.test(text)){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    instant: false,
                    maxTimeOut: 10,
                    required: true,
                    name: 'Message Time Element'
                });
                const abbreToDay = {
                    m: 0,
                    h: 0,
                    d: 1,
                    w: 7,
                    y: 365
                };
                const timeElementText = timeElement.innerText;
                const timeElementTextNumber = parseInt(timeElementText);
                const timeElementTextAbbre = timeElementText.match(/[mhdwy]/g)[0];
                const timeElementTextInDay = timeElementTextNumber*abbreToDay[timeElementTextAbbre];
                return timeElementTextInDay;
            };
            await (async ()=>{
                const initialTime = new Date().getTime();
                const isTimeOverSpent = ()=>{
                    const timeLimit = 60*1*1000;
                    const timeNow = new Date().getTime();
                    if(timeNow-initialTime>=timeLimit){
                        return true;
                    }else{
                        return false;
                    }
                };
                const timeStatusGenerator = ()=>{
                    const timeLimit = 60*1*1000;
                    const timeNow = new Date().getTime();
                    return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used searching for messages`;
                };
                const reachedMessageBottom = ()=>{
                    const rendomMarketplaceMessage = document.querySelector(fixedData.workingSelectors.messages.allMarketplaceMessages);
                    const nearestAllMarketPlaceMessageHolder = rendomMarketplaceMessage.parentElement.parentElement;
                    const emptyChild = nearestAllMarketPlaceMessageHolder.querySelector(':scope > :empty');
                    if(emptyChild){
                        const isEmptyChildLastChild = emptyChild.parentElement.lastChild==emptyChild;
                        if(isEmptyChildLastChild){
                            contentScripts.showDataOnConsole('Reached Message Bottom');
                            return true;
                        }else{
                            const isEmptyChild3rdLastChild = emptyChild.parentElement.children[emptyChild.parentElement.children.length-3]==emptyChild;
                            if(isEmptyChild3rdLastChild){
                                // contentScripts.showDataOnConsole('Can still scroll down');
                                return false;
                            }else{
                                contentScripts.showDataOnConsole('Empty Child should be 3rd last child');
                                contentScripts.showConsoleError();
                                throw new Error('Error in finding empty child');
                            }
                        }
                    }else{
                        contentScripts.showDataOnConsole('Could not find scrolling end point');
                        contentScripts.showConsoleError();
                        throw new Error('No empty child found');
                    }
                };
                const scrollDown = ()=>{
                    const nearestScrollableParent = (()=>{
                        const rendomMarketplaceMessage = document.querySelector(fixedData.workingSelectors.messages.allMarketplaceMessages);
                        // overflow-y : scroll
                        let element = rendomMarketplaceMessage;
                        const maximumDistance = 5;
                        let currentDistance = 0;
                        while(element){
                            const style = window.getComputedStyle(element);
                            if(style.overflowY=='scroll'){
                                return element;
                            }else{
                                if(currentDistance>maximumDistance){
                                    return null;
                                }else{
                                    element = element.parentElement;
                                    currentDistance++;
                                }
                            }
                        }
                    })();
                    if(nearestScrollableParent){
                        contentScripts.showDataOnConsole('Scrolling Down');
                        nearestScrollableParent.scrollTop = nearestScrollableParent.scrollHeight;
                    }else{
                        contentScripts.showDataOnConsole('Could not find scrolling parent');
                        contentScripts.showConsoleError();
                        throw new Error('No scrolling parent found');
                    }
                };
                
                const isLastMessageOlderThenTargeted = async()=>{
                    const metaInformationDB = new ChromeStorage('metaInformation');
                    const metaInformation = await metaInformationDB.GET();
                    const checkMessageDaysLimit = metaInformation.checkMessageDaysLimit;

                    const allMessages = document.querySelectorAll(fixedData.workingSelectors.messages.allMarketplaceMessages);
                    const lastMessage = allMessages[allMessages.length-1];
                    const lastMessageTimeInDay = await getMessageTimeInDay(lastMessage);
                    if(lastMessageTimeInDay>checkMessageDaysLimit){
                        contentScripts.showDataOnConsole('Last message is older than targeted');
                        return true;
                    }else{
                        contentScripts.showDataOnConsole('Last message is not older than targeted');
                        return false;
                    }
                };
                const getChildIndex = (parent,child)=>{
                    var childrenArray = Array.from(parent.children);
                    var childIndex = childrenArray.indexOf(child);
                    return childIndex;
                };
                const isAllMessagesLoaded = ()=>{
                    const rendomMarketplaceMessage = document.querySelector(fixedData.workingSelectors.messages.allMarketplaceMessages);
                    const nearestAllMarketPlaceMessageHolder = rendomMarketplaceMessage.parentElement.parentElement;
                    const loadingMessages = nearestAllMarketPlaceMessageHolder.querySelectorAll(fixedData.workingSelectors.messages.loadingMessages); 
                    const allChildren = nearestAllMarketPlaceMessageHolder.children;
                    let loadingMessageCount = 0;
                    for(let i=0;i<allChildren.length;i++){
                        const child = allChildren[i];
                        const messageLoading = child.querySelector(fixedData.workingSelectors.messages.loadingMessages);
                        const isAnchor = child.childElementCount === 0 && child.textContent.trim() === '';
                        if(messageLoading){
                            loadingMessageCount++;
                        }else if(isAnchor){
                            contentScripts.showDataOnConsole(`Anchor found at: ${i+1}/${allChildren.length} index`);
                            break;
                        }
                    }
                    if(loadingMessageCount>0){
                        contentScripts.showDataOnConsoleDynamic(`${loadingMessageCount} Message still loading`);
                        return false;
                    }else{
                        contentScripts.showDataOnConsole('Message all loaded');
                        return true;
                    }
                        
                };
                while(!await isLastMessageOlderThenTargeted()){
                    contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                    if(reachedMessageBottom()){
                        break;
                    }
                    scrollDown();   
                    if(isTimeOverSpent()){
                        contentScripts.showDataOnConsole('Time Over Spent');
                        contentScripts.showConsoleError();
                        throw new Error('Time Over Spent looking for messages');
                    }
                    await essentials.sleep(5000);
                }
                while(!isAllMessagesLoaded()){
                    contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());  
                    if(isTimeOverSpent()){
                        contentScripts.showDataOnConsole('Time Over Spent');
                        contentScripts.showConsoleError();
                        throw new Error('Time Over Spent looking for messages');
                    }
                    await essentials.sleep(5000);
                }
                // clear console
                contentScripts.clearConsole();
                contentScripts.showDataOnConsole("All targeted messages loaded");
            })();

            // get unseen messages
            const unseenMessageIds = await (async()=>{
                const metaInformationDB = new ChromeStorage('metaInformation');
                const metaInformation = await metaInformationDB.GET();
                const checkMessageDaysLimit = metaInformation.checkMessageDaysLimit;

                const allMarketplaceMessages = document.querySelectorAll(fixedData.workingSelectors.messages.allMarketplaceMessages);
                const ids = [];
                for(let i=0;i<allMarketplaceMessages.length;i++){
                    const message = allMarketplaceMessages[i];
                    const unseenMessageUrl = message.querySelector('a[href*="/messages/t/"]:has(div [aria-label="Mark as read"])');
                    if(unseenMessageUrl){
                        const messageTimeInDay = await getMessageTimeInDay(message);
                        if(checkMessageDaysLimit>=messageTimeInDay){
                            // console.log(`${checkMessageDaysLimit}>=${messageTimeInDay}`)
                            const url = unseenMessageUrl.href;
                            const messageIdRegex = /\/messages\/t\/(\d+)/;
                            const messageIdMatch = url.match(messageIdRegex);
                            const messageId = messageIdMatch[1];
                            ids.push(messageId);
                        }
                    } 
                }
                return ids;
            })();
            if(unseenMessageIds.length==0){
                await workingStepDB.SET('prepareOutgoingMessage');
                contentScripts.showDataOnConsole(`Unseen Messages: ${unseenMessageIds.length}`);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending message');
            }else{
                await workingStepDB.SET('readUnseenMessage');
                const readUnseenMessageDB = new ChromeStorage('readUnseenMessage');
                await readUnseenMessageDB.SET(unseenMessageIds);
                contentScripts.showDataOnConsole(`Unseen Messages: ${unseenMessageIds.length}`);
                contentScripts.pageRedirection(`${fixedData.workingUrls.unknownMessageSuffix}${unseenMessageIds[0]}`,'start reading Unseen Message');
            }
            return;
        }else{
            await contentScripts.pageRedirection(fixedData.workingUrls.messages,'Not on message page');
        }
    },
    getCarVinFromText : (text)=>{
        text = text+'';
        text = text.toUpperCase();
        text = text.replace(/[^A-Z0-9]/g, '');
        const vinRegex = /([A-HJ-NPR-Z\d]{8})([X\d]{1})([E-HJ-NPR-TV]{1})([A-HJ-NPR-Z\d]{2})([\d]{5})/;
        const vinMatch = vinRegex.exec(text);
        let vin = '';
        if(vinMatch){
            vin = vinMatch[0];
            const beforeCheckDigit = vin.substring(0, 8);
            const checkDigit = vin.substring(8, 9)=="X"?"10":parseInt(vin.substring(8, 9));
            const afterCheckDigit = vin.substring(9);
            const stringWithoutCheckDigit = beforeCheckDigit + afterCheckDigit;
            const changeLetterToNumberValue = (letter)=>{
                // no i,O,Q
                letter = letter.replace(/[AJ]/g, '1');
                letter = letter.replace(/[BKS]/g, '2');
                letter = letter.replace(/[CLT]/g, '3');
                letter = letter.replace(/[DMU]/g, '4');
                letter = letter.replace(/[ENV]/g, '5');
                letter = letter.replace(/[FW]/g, '6');
                letter = letter.replace(/[GPX]/g, '7');
                letter = letter.replace(/[HY]/g, '8');
                letter = letter.replace(/[RZ]/g, '9');
                return letter;
            };
            const numberWithoutCheckDigit = changeLetterToNumberValue(stringWithoutCheckDigit);
            const numberWeights = [8, 7, 6, 5, 4, 3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
            const numberArray = numberWithoutCheckDigit.split('');
            let sum = 0;
            for(let i=0; i<numberArray.length; i++){
                sum += numberArray[i]*numberWeights[i];
            }
            const checkDigitCalculatedValue = sum%11;
            if(checkDigitCalculatedValue==checkDigit){
                return vin;
            }else{
                console.log('Wrong Vin');
                return null;
            }
        }else{
            console.log('No vin found');
            return null;
        }
    },
    itemNeedVin: async(item_id)=>{
        const query =`
            query{
                boards(ids:[${fixedData.mondayFetch.borEffortBoardId}]){
                    items(limit:1,ids:[${item_id}]){
                        column_values(ids:["${fixedData.mondayFetch.columnValuesIds.borEffortBoard.vin}"]){
                            id,  
                            value
                        }
                    }
                }
            }
        `;
        const mondayFetchData = await mondayFetch(query);
        const mondayFetchJSON = await mondayFetchData.json();
        const itemExists = mondayFetchJSON.data.boards[0].items.length!=0;
        if(itemExists){
            const vin = mondayFetchJSON.data.boards[0].items[0].column_values[0].value;
            return vin==null;
        }else{
            return false;
        }
        
    },
    getVinFromMessageData: async(messageData)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET();
        // where message type is text get message
        console.log('getting vin from texts');
        let vin = null;
        let messageTexts = '';
        for(let i=0;i<messageData.length;i++){
            const message = messageData[i];
            if(message.type=='text'){
                messageTexts += message.message;
            }
        }
        vin = contentScripts.getCarVinFromText(messageTexts);
        messageTexts = '';
        if(vin==null){
            console.log('getting image data');
            const apiKey = metaInformation.googleAPIKey;
            for(let i=0;i<messageData.length;i++){
                const message = messageData[i];
                if(message.type=='image'){
                    const imageData = await contentScripts.getTextFromImage({
                        url:message.message,
                        apiKey: apiKey
                    });
                    console.log(`image data: ${imageData}`);
                    messageTexts += imageData;
                    if(contentScripts.getCarVinFromText(messageTexts)!=null){
                        console.log('vin found');
                        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        consoleBoard.style.backgroundColor = 'green';
                        await contentScripts.waitWithVisual(5);
                        break;
                    }
                }
            }
            vin = contentScripts.getCarVinFromText(messageTexts);
        }
        return vin;
    },
    readUnseenMessage: async ()=>{
        contentScripts.showWorkingStep('Reading Unseen Messages');
        const workingStepDB = new ChromeStorage('workingStep');
        const readUnseenMessageDB = new ChromeStorage('readUnseenMessage');
        const readUnseenMessage = await readUnseenMessageDB.GET();
        console.log(readUnseenMessage);

        
        const afterReadingMessage = async ()=>{
            readUnseenMessage.shift();
            await readUnseenMessageDB.SET(readUnseenMessage);
            if(readUnseenMessage.length==0){
                await workingStepDB.SET('prepareOutgoingMessage');
                await readUnseenMessageDB.SET(null);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending message');
            }else{
                contentScripts.pageRedirection(`${fixedData.workingUrls.unknownMessageSuffix}${readUnseenMessage[0]}`,`unseen message : ${readUnseenMessage[0]}`);
            }
        }
        if(readUnseenMessage.length==0){
            await workingStepDB.SET('prepareOutgoingMessage');
            await readUnseenMessageDB.SET(null);
            contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending message');
        }else{
            if(window.location.href!=`${fixedData.workingUrls.unknownMessageSuffix}${readUnseenMessage[0]}`){
                contentScripts.pageRedirection(`${fixedData.workingUrls.unknownMessageSuffix}${readUnseenMessage[0]}`,'Redirecting to message page');
            }else{
                contentScripts.showDataOnConsole('reading message');
                const metaInformationDB = new ChromeStorage('metaInformation');
                const metaInfromation = await metaInformationDB.GET();
                await (async()=>{
                    const initialTime = new Date().getTime();
                    const isTimeOverSpent = ()=>{
                        const timeLimit = 60*1*1000;
                        const timeNow = new Date().getTime();
                        if(timeNow-initialTime>=timeLimit){
                            return true;
                        }else{
                            return false;
                        }
                    };
                    const timeStatusGenerator = ()=>{
                        const timeLimit = 60*1*1000;
                        const timeNow = new Date().getTime();
                        return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used loading message`;
                    };
                    let isMessageLoading = true;
                    const messageBox = await contentScripts.getElementBySelector({
                        data: {
                            type: 'querySelectorAll',
                            isMonoExpected: true,
                            selector: fixedData.workingSelectors.readMessage.messageBox,
                        },
                        instant: false,
                        maxTimeOut: 30,
                        required: true,
                        name: 'Message Box'
                    });
                    while(isMessageLoading){
                        contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                        const messageLoading = messageBox.querySelector('[role="progressbar"][aria-label="Loading..."]');
                        isMessageLoading = messageLoading?true:false;
                        if(isTimeOverSpent()){
                            contentScripts.showDataOnConsole('Time Over Spent');
                            contentScripts.showConsoleError();
                            throw new Error('Time Over Spent looking for messages');
                        }
                        await essentials.sleep(5000);
                    } 
                    contentScripts.showDataOnConsoleDynamic('');
                    contentScripts.showDataOnConsole('Message Loaded');                    
                })();


                await contentScripts.readCurrentMessage();
                await readUnseenMessageDB.SET(["6537134306402458"]);
                return;

                const messageBox = document.querySelector(fixedData.workingSelectors.readMessage.messageBox);
                let postUrl = messageBox.querySelector(fixedData.workingSelectors.readMessage.postUrl);
                if(!postUrl){
                    await essentials.sleep(5000);
                    postUrl = messageBox.querySelector(fixedData.workingSelectors.readMessage.postUrl);
                }
                const itemData = {fb_message_id:`${readUnseenMessage[0]}`};
                if(postUrl){
                    const postId = postUrl.href.match(/\d+/g)[0];
                    itemData.fb_post_id = `${postId}`;
                    itemData.fb_id = `${(await contentScripts.accountInfo()).id}`;
                    const isValidMessageIdJSON = await fetch(`${metaInfromation.domain}/extension/isValidMessageId`,{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(itemData)
                    });
                    if(isValidMessageIdJSON.status==200){
                        const validData = await isValidMessageIdJSON.json();
                        const valid = validData.valid;
                        if(valid){
                            await essentials.sleep(2000);
                            // const item_id = await contentScripts.itemIdByPostId(itemData.fb_post_id);
                            const isMessageValid = await contentScripts.isCurrentMessageValid(itemData.fb_post_id);
                            if(isMessageValid){
                                contentScripts.showDataOnConsole('message is valid to read or write');
                                const messageDatas = await contentScripts.readCurrentMessage();
                                const lastMessageFromServer = await contentScripts.lastMessageOnServerByPostId(itemData.fb_post_id);
                                const item_id = await contentScripts.itemIdByPostId(itemData.fb_post_id);
                                if(item_id==null){
                                    contentScripts.showDataOnConsole('item_id not found');
                                    await afterReadingMessage();
                                    return;
                                }
                                let newMessageDatas = [];
                                for(let i = messageDatas.length-1;i>=0;i--){
                                    const messageData = messageDatas[i];
                                    messageData.item_id = `${item_id}`;
                                    const message = messageData.message;
                                    if(message.replace(/[^a-zA-Z0-9]/g,'')==lastMessageFromServer.replace(/[^a-zA-Z0-9]/g,'')){
                                        break;
                                    }else{
                                        newMessageDatas = [messageData].concat(newMessageDatas);
                                    }
                                }
                                console.log(newMessageDatas);
                                const readUnseenMessageCountDB = new ChromeStorage('readUnseenMessageCount');
                                const readUnseenMessageCount = await readUnseenMessageCountDB.GET() || 0;
                                for(let i=0;i<newMessageDatas.length;i++){
                                    if(newMessageDatas[i].type=='image'){
                                        if(newMessageDatas[i].message.includes('https://scontent.fdac')){
                                            if(readUnseenMessageCount<2){
                                                await readUnseenMessageCountDB.SET(readUnseenMessageCount+1);
                                                contentScripts.pageRedirection(window.location.href,'redirecting to collect better image');
                                                return null;
                                            }
                                        }
                                    }
                                }
                                await readUnseenMessageCountDB.SET(0);
                                await contentScripts.sendMessagesToServer(newMessageDatas);




                                // read vin from message --start
                                if(newMessageDatas.length>0){
                                    const needVin = await contentScripts.itemNeedVin(item_id);
                                    if(needVin){
                                        const vin  = await contentScripts.getVinFromMessageData(newMessageDatas);
                                        if(vin!=null){
                                            const query1 = `
                                                mutation{
                                                    change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},item_id:${item_id},column_id: ${fixedData.mondayFetch.columnValuesIds.borEffortBoard.vin}, value: "${vin}") {
                                                        id
                                                    }
                                                }
                                            `;
                                            const vinUpdateResponse = await mondayFetch(query1);
                                            // const vinUpdate = vinUpdateResponse.data.change_simple_column_value.id;
                                            console.log('vin added to item')
                                            const query2 = `
                                                mutation{
                                                    change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},item_id:${item_id},column_id: ${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}, value: "Auto Vin") {
                                                        id
                                                    }
                                                }
                                            `;
                                            const statusUpdateResponse = await mondayFetch(query2);
                                            // const statusUpdate = statusUpdateResponse.data.change_simple_column_value.id;
                                            console.log('status changed to Auto Vin')
                                        }
                                    }
                                }
                                //read vin from message --end



                            }else{
                                contentScripts.showDataOnConsole('message is not valid to read or write');
                                await contentScripts.markItemAsLinkGone();
                            }
                            await afterReadingMessage();
                        }else{
                            await afterReadingMessage();
                        }
                    }else{
                        contentScripts.showDataOnConsole('Error in checking message validity');
                        contentScripts.showConsoleError();
                    }
                }else{
                    const itemId = await contentScripts.getItemIdByMessageId(readUnseenMessage[0]);
                    if(itemId){
                        await contentScripts.markItemAsLinkGone(itemId);
                    }
                    await afterReadingMessage();
                }
            }
        }
    },
    sendUnsentMessage: async ()=>{
        // Sorry, something went wrong.
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const sendUnsentMessageDB = new ChromeStorage('sendUnsentMessage');
        let sendUnsentMessage = await sendUnsentMessageDB.GET();
        const metaInfromation = await metaInformationDB.GET();
        // const fb_id = (await contentScripts.accountInfo()).id;
        const afterSendingMessage = async ()=>{
            sendUnsentMessage.shift();
            if(sendUnsentMessage.length==0){
                await workingStepDB.SET(null);
                await sendUnsentMessageDB.SET(null);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
            }else{
                await sendUnsentMessageDB.SET(sendUnsentMessage);
                const fb_post_id = sendUnsentMessage[0];
                contentScripts.pageRedirection(fixedData.workingUrls.home,'Redirecting to seller message page');
            }
        }
        if(sendUnsentMessage==null){
            const hasRepliesToSend = await contentScripts.hasRepliesToSend();
            console.log(hasRepliesToSend);
            if(hasRepliesToSend.status){
                contentScripts.showDataOnConsole('has replies to send');
                sendUnsentMessage = await contentScripts.getUnsentMessagePostIds();
                // console.log('unsent message post ids',sendUnsentMessage);
                // console.log(sendUnsentMessage);
                // console.log(`item_id: ${hasRepliesToSend.item_id}`);
                // const fb_post_id = await contentScripts.postIdByItemId(hasRepliesToSend.item_id);
                // console.log(`fb_post_id: ${fb_post_id}`);
                // sendUnsentMessage =[fb_post_id];
                // console.log(`postIds to send: ${sendUnsentMessage}`);
                await sendUnsentMessageDB.SET(sendUnsentMessage);
            }else{
                // contentScripts.showDataOnConsole('no replies but checking for second message');
                // const hasSecondMessageToSend = await contentScripts.hasSecondMessageToSend();
                // if(hasSecondMessageToSend.status){
                //     contentScripts.showDataOnConsole('has second message to send');
                //     await contentScripts.setSecondMessage(hasSecondMessageToSend.item_id);
                //     await contentScripts.markItemAsSecondMessage(hasSecondMessageToSend.item_id);
                //     const fb_post_id = await contentScripts.postIdByItemId(hasSecondMessageToSend.item_id);
                //     sendUnsentMessage = [fb_post_id];
                //     await sendUnsentMessageDB.SET(sendUnsentMessage);
                // }else{
                    contentScripts.showDataOnConsole('no second message to send');
                    await workingStepDB.SET(null);
                    await sendUnsentMessageDB.SET([]);
                    contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
                // }
                
            }
        }
        if(sendUnsentMessage.length!=0){
            const fb_post_id = sendUnsentMessage[0];
            if(window.location.href!=`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`){
                if(fb_post_id==null){
                    await afterSendingMessage();
                }else{
                    contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`,'Redirecting to seller message page');
                }
            }else{
                const validTosendMessage = await contentScripts.isValidMessageInSellerMessage(fb_post_id);
                if(validTosendMessage){
                    const messages = await contentScripts.getUnsentMessagesByPostId(fb_post_id);
                    if(messages.length!=0){
                        await essentials.sleep(5000);
                        for(let i=0;i<messages.length;i++){
                            const messageData = messages[i];
                            if(messageData==null){
                                await afterSendingMessage();
                            }else{
                                const message = messageData.message;
                                const all_content = document.body.innerText.replace(/[^a-zA-Z0-9]/g,'');
                                const message_content = message.replace(/[^a-zA-Z0-9]/g,'');
                                if(all_content.includes(message_content)){
                                    await contentScripts.markMessageAsSent(messageData.id); 
                                    await contentScripts.updateFirstMessageTime();
                                    await contentScripts.messageCountEligible(true);
                                    if(i==messages.length-1){
                                        // updateFirstMessageTime
                                        await afterSendingMessage();
                                    }
                                }else{
                                    await essentials.sleep(5000);
                                    const messageInput = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.messageInput);
                                    messageInput.value = message;
                                    const sendButton = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.sendButton);
                                    sendButton.click();
                                    const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                                    const markAsLinkGoneButton = document.createElement('button');
                                    markAsLinkGoneButton.innerText = 'Mark as link gone';
                                    consoleBoard.append(markAsLinkGoneButton);
                                    markAsLinkGoneButton.onclick = async ()=>{
                                        const item_id = await contentScripts.itemIdByPostId(fb_post_id);
                                        await contentScripts.markItemAsLinkGone(item_id);
                                        await contentScripts.markItemMessagesdone(item_id);
                                        await afterSendingMessage();
                                    };
                                    break;
                                }
                            }
                        }
                        contentScripts.showDataOnConsole('program should not be stucked here');
                    }else{
                        await afterSendingMessage();
                    }
                    
                }else{
                    const item_id = await contentScripts.itemIdByPostId(fb_post_id);
                    await contentScripts.markItemAsLinkGone(item_id);
                    await contentScripts.markItemMessagesdone(item_id);
                    await afterSendingMessage();
                }
                
            }

        }else{
            console.log('redirecting to home to start sending new message');
            await workingStepDB.SET(null);
            await sendUnsentMessageDB.SET(null);
            contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
        }
    },
    messageCountEligible: async (input)=>{
        const workingStepDB = new ChromeStorage('workingStep');
        const messageCountDB = new ChromeStorage('messageCount');
        const workingStep = await workingStepDB.GET();
        let messageCounts = await messageCountDB.GET();
        const currentHour = parseInt(new Date().getTime()/1000/3600);
        if(messageCounts==null){
            messageCounts = {
                [currentHour]: {new:0,reply:0},
                [currentHour-1]: {new:0,reply:0},
                [currentHour-2]: {new:0,reply:0},
            }
            await messageCountDB.SET(messageCounts);
        }else{
            const keys = Object.keys(messageCounts);
            for(let i=0;i<keys.length;i++){
                const key = keys[i];
                if(key<currentHour-2){
                    delete messageCounts[key];
                }
            }
            if(messageCounts[currentHour]==null){
                messageCounts[currentHour] = {new:0,reply:0};
            }
            if(messageCounts[currentHour-1]==null){
                messageCounts[currentHour-1] = {new:0,reply:0};
            }
            if(messageCounts[currentHour-2]==null){
                messageCounts[currentHour-2] = {new:0,reply:0};
            }
            await messageCountDB.SET(messageCounts);
        }
        const eligibility = async (type)=>{
            if(type=='new'){
                if(messageCounts[currentHour-1].new+messageCounts[currentHour-2].new-2 > messageCounts[currentHour-1].reply+messageCounts[currentHour-2].reply){
                    return false;
                }else{
                    return true;
                }
            }else if(type=='reply'){
               const hasRepliesToSend = await contentScripts.hasRepliesToSend();
               if(hasRepliesToSend.status){
                    return true;
               }else{
                    return false;
               }
            }
        };
        contentScripts.showDataOnConsole(workingStep);
        if(input){
            if(workingStep == undefined || workingStep == null){
                messageCounts[currentHour].new++;
            }else if(workingStep == 'sendUnsentMessage'){
                messageCounts[currentHour].reply++;
            }else{
                contentScripts.showDataOnConsole('This is not possible!!!!!');
            }
        }else{
            if(workingStep == undefined || workingStep == null){
                return {
                    status: await eligibility('new'),
                    totalStatus: (await eligibility('new'))||(await eligibility('reply')),
                }
            }else if(workingStep == 'sendUnsentMessage'){
                return {
                    status: await eligibility('reply'),
                    // totalStatus: (await eligibility('new'))||(await eligibility('reply')),
                }
            }else{
                contentScripts.showDataOnConsole('This is not possible!!!!!');
            }
        }
    },
    setupAccountControl: async ()=>{
        const metaInformation = new ChromeStorage('metaInformation');
        const metaInformationValues = await metaInformation.GET();
        const deviceId = metaInformationValues.deviceId;
        const domain = metaInformationValues.domain;
        const accountControlData = await fetch(`${domain}/extension/getAccountControlByDeviceId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceId: deviceId,
            }),
        });
        const accountControl = await accountControlData.json();
        
        let hourlyLimitData = accountControl.hourlyLimitData;
        hourlyLimitData = JSON.parse(hourlyLimitData);

        metaInformationValues.extensionSwitch = accountControl.mainSwitch;
        metaInformationValues.debugModeSwitch = accountControl.debugSwitch;
        metaInformationValues.checkMessageDaysLimit = accountControl.readMessageDays;
        metaInformationValues.readMessageLimitCount = accountControl.readMessageLimit;

        const americanHour = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
        const hourlyLimitExists = hourlyLimitData[`h${americanHour}`]!=null;
        if(hourlyLimitExists){
            const newMessageLimit = hourlyLimitData[`h${americanHour}`].n;
            const replyMessageLimit = hourlyLimitData[`h${americanHour}`].r;

            metaInformationValues.hourlyMessageLimit = newMessageLimit + replyMessageLimit;
            metaInformationValues.hourlyNewMessageLimit = newMessageLimit;
            metaInformationValues.hourlyReplyMessageLimit = replyMessageLimit;
            metaInformationValues.messagingStartTime = americanHour;
            metaInformationValues.messagingEndTime = americanHour;

        }else{
            metaInformationValues.hourlyMessageLimit = 0;
            metaInformationValues.hourlyNewMessageLimit = 0;
            metaInformationValues.hourlyReplyMessageLimit = 0;
            metaInformationValues.messagingStartTime = 0;
            metaInformationValues.messagingEndTime = 0;
        }
        await metaInformation.SET(metaInformationValues);
    },
    americanHour: ()=>{
        return new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
    },
    programTimeController: async ()=>{
        // status = true means program is running
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET();
        const messagingStartHour = parseInt(metaInformation.messagingStartTime);
        const hourlyMessageLimit = metaInformation.hourlyMessageLimit;
        const minimumDuration = 3600/hourlyMessageLimit/100*90;
        const time = new Date().getTime()/1000;
        const timeDoneThisHour = (new Date().getMinutes())*60 + new Date().getSeconds();
        const timeLeftThisHour = 3600 - timeDoneThisHour;
        const messageTime = await contentScripts.messageTime();
        
        if(messagingStartHour==0){
            return {
                status: false,
            }
        }else{
            if(hourlyMessageLimit==0){
                return {
                    status: true,
                    waitingTime: timeLeftThisHour+100
                }
            }else{
                return {
                    status: true,
                    waitingTime: minimumDuration-(time-messageTime)
                }
            }
        }
    },
    messageTime: async (input)=>{
        const messageTimeDB = new ChromeStorage('messageTime');
        let messageTime = await messageTimeDB.GET();
        if(messageTime == null){
            messageTime = 0;
        }
        if(input){
            messageTime = new Date().getTime()/1000;
        }
        await messageTimeDB.SET(messageTime);
        return messageTime;
    },
    messageCounter: async(input)=>{
        const messageCounterDB = new ChromeStorage('messageCounter');
        let messageCounter = await messageCounterDB.GET();
        
        const workingStepDB = new ChromeStorage('workingStep');
        const workingStep = await workingStepDB.GET();
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET();
        const currentHour = metaInformation.messagingStartTime;
        if(messageCounter==null){
            console.log('program will be here once in a lifetime');
            messageCounter = {
                [currentHour]: {new:0,reply:0,total:0},
                [currentHour-1]: {new:0,reply:0,total:0},
                [currentHour-2]: {new:0,reply:0,total:0},
            };
        }
        const hours = Object.keys(messageCounter);
        for(let i=0;i<hours.length;i++){
            const hour = hours[i];
            if(hour!=currentHour-2 && hour!=currentHour-1 && hour!=currentHour){
                console.log('hour changes');
                delete messageCounter[hour];
            }
        }
        if(messageCounter[currentHour]==null){
            messageCounter[currentHour] = {new:0,reply:0,total:0};
        }
        if(messageCounter[currentHour-1]==null){
            messageCounter[currentHour-1] = {new:0,reply:0,total:0};
        }
        if(messageCounter[currentHour-2]==null){
            messageCounter[currentHour-2] = {new:0,reply:0,total:0};
        }
        if(input){
            console.log('message counter is increasing');
            await contentScripts.messageTime(true);
            messageCounter[currentHour].total++;
            if(workingStep == 'sendFirstMessage'){
                messageCounter[currentHour].new++;
            }else if(workingStep == 'sendReplyMessage'){
                messageCounter[currentHour].reply++;
            }else{
                console.log('believe me: Program is not working properly');
            }
        }
        await messageCounterDB.SET(messageCounter);
        console.log(messageCounter);
        return messageCounter;
    },
    prepareOutgoingMessage: async()=>{
        console.log('preparing outgoing message');
        const timeController = await contentScripts.programTimeController();
        if(timeController.status){
            await contentScripts.waitWithVisual(timeController.waitingTime);
        }else{
            console.log('program is not running');
            return false;
        }
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const sendOutgoingMessageDB = new ChromeStorage('sendOutgoingMessage');
        const metaInformation = await metaInformationDB.GET();
        const serverCount = {new:metaInformation.hourlyNewMessageLimit,reply:metaInformation.hourlyReplyMessageLimit,total:metaInformation.hourlyMessageLimit};

        const currentHour = metaInformation.messagingStartTime;
        const localCounts = await contentScripts.messageCounter();
        console.log(`currentHour: ${currentHour}`);
        const localCount = localCounts[currentHour];
        console.log('localCount',localCount);
        if(serverCount.total>localCount.total){
            console.log('have slot for sending message this hour');
            const balanceLogic = localCounts[currentHour-1].new+localCounts[currentHour-2].new-2 <= localCounts[currentHour-1].reply+localCounts[currentHour-2].reply;
            console.log(localCounts);
            console.log('balanceLogic',balanceLogic);
            if(serverCount.new>localCount.new && balanceLogic){  
                console.log('have slot for sending new message this hour');
                const hasUnsentFirstMessage = await contentScripts.hasUnsentFirstMessage();
                if(hasUnsentFirstMessage.status){
                    console.log('has unsent first message');
                    await sendOutgoingMessageDB.SET(hasUnsentFirstMessage);
                    await workingStepDB.SET('sendFirstMessage');
                    await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send first message now');
                    return true;
                }else{
                    console.log('dont have unsent first message');
                    const hasNewRawItem = await contentScripts.hasNewRawItem();
                    if(hasNewRawItem.status){
                        console.log('has new raw item');
                        const query1 = `
                            query{
                                items(ids: [${hasNewRawItem.item_id}]){
                                    column_values(ids:["${fixedData.mondayFetch.columnValuesIds.borEffortBoard.url}"]){
                                        value
                                    }
                                }
                            }
                        `;
                        const urlDataJSON = await mondayFetch(query1);
                        const urlData = await urlDataJSON.json();
                        const url = urlData.data.items[0].column_values[0].value;
                        const fb_post_id = url.match(/\d+/g).map(Number)[0];
                        const initiateItemMessaging = await fetch(`${metaInformation.domain}/extension/initiateItemMessaging`,{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                item_id: `${hasNewRawItem.item_id}`,
                                fb_post_id: `${fb_post_id}`,
                                fb_id: `${(await contentScripts.accountInfo()).id}`,
                                fb_user_name: `${(await contentScripts.accountInfo()).name}`
                            }),
                        });
                        const initiateItemMessagingData = await initiateItemMessaging.json();
                        if(initiateItemMessagingData.status){
                            console.log('initiated item messaging');
                            await sendOutgoingMessageDB.SET(initiateItemMessagingData);
                            await workingStepDB.SET('sendFirstMessage');
                            await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send first message now');
                            return true;
                        }else{
                            console.log('initiation failed!! Try again');
                            return false;
                            // initiation failed
                        }
                    }else{
                        console.log('dont have raw item to send first message');
                        const hasRepliesToSend = await contentScripts.hasRepliesToSend();
                        if(hasRepliesToSend.status){
                            console.log('has replies to send');
                            await sendOutgoingMessageDB.SET(hasRepliesToSend);
                            await workingStepDB.SET('sendReplyMessage');
                            await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send reply message now');
                            return true;
                        }else{
                            console.log('dont have replies to send');
                            await contentScripts.waitWithVisual(600);
                            return false;
                        }
                    }
                }
            }else if(serverCount.reply>localCount.reply || serverCount.total>localCount.total){
                const hasRepliesToSend = await contentScripts.hasRepliesToSend();
                if(hasRepliesToSend.status){
                    console.log('has replies to send');
                    await sendOutgoingMessageDB.SET(hasRepliesToSend);
                    await workingStepDB.SET('sendReplyMessage');
                    await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send reply message now');
                    return true;
                }else{
                    console.log('dont have replies to send');
                    await contentScripts.waitWithVisual(360);
                    await workingStepDB.SET('collectUnseenMessage');
                    await contentScripts.pageRedirection(fixedData.workingUrls.home,'will collect unseen message now');
                    return false;
                }
            }
        }else{
            console.log(metaInformation);
            console.log(localCount);
            console.log(typeof(serverCount.total), typeof(localCount.total));
            console.log('dont have slot for sending message this hour');
            await contentScripts.waitWithVisual(600);
            await workingStepDB.SET('collectUnseenMessage');
            await contentScripts.pageRedirection(fixedData.workingUrls.home,'will collect unseen message now');
            return false;
        }
    },
    sendOutgoingMessage: async()=>{
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const sendOutgoingMessageDB = new ChromeStorage('sendOutgoingMessage');
        let sendOutgoingMessage = await sendOutgoingMessageDB.GET();
        const metaInfromation = await metaInformationDB.GET();
        const workingStep = await workingStepDB.GET();
        
        // const afterSendingMessage = async ()=>{
        //     sendUnsentMessage.shift();
        //     if(sendUnsentMessage.length==0){
        //         await workingStepDB.SET(null);
        //         await sendUnsentMessageDB.SET(null);
        //         contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
        //     }else{
        //         await sendUnsentMessageDB.SET(sendUnsentMessage);
        //         const fb_post_id = sendUnsentMessage[0];
        //         contentScripts.pageRedirection(fixedData.workingUrls.home,'Redirecting to seller message page');
        //     }
        // }
        if(sendOutgoingMessage==null){
            console.log('already sent message');
            contentScripts.pageRedirection(fixedData.workingUrls.home,'already sent message');
        }else if(sendOutgoingMessage.status){
            const fb_post_id = sendOutgoingMessage.fb_post_id;
            const item_id = sendOutgoingMessage.item_id;
            const id = sendOutgoingMessage.id;
            const message = sendOutgoingMessage.message;
            if(!window.location.href.includes(`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`)){
                contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`,'Redirecting to seller message page');
                return false;
            }else{
                const validTosendMessage = await contentScripts.isValidMessageInSellerMessage(fb_post_id);
                if(validTosendMessage){
                    // sending message
                    await essentials.sleep(3000);
                    const all_content = document.body.innerText.replace(/[^a-zA-Z0-9]/g,'');
                    const message_content = message.replace(/[^a-zA-Z0-9]/g,'');
                    if(all_content.includes(message_content)){
                        console.log('message already sent');
                        if(workingStep=='sendFirstMessage'){
                            contentScripts.showDataOnConsole('marking as "First Message"');
                            const query = `
                                mutation {
                                    change_simple_column_value(
                                        item_id: ${item_id}, 
                                        board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                        column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}", 
                                        value: "1st MSG") {
                                        id
                                    }
                                }
                            `;
                            const formatDateToMondayAmerican = ()=>{
                                const americanTime = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}));
                                let month = '' + (americanTime.getMonth() + 1);
                                let day = '' + americanTime.getDate();
                                let year = americanTime.getFullYear();
                            
                                if (month.length < 2) 
                                    month = '0' + month;
                                if (day.length < 2) 
                                    day = '0' + day;
                            
                                return [year, month, day].join('-');
                            }
                            const query1 = `
                                mutation {
                                    change_simple_column_value(
                                        item_id: ${item_id}, 
                                        board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                        column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.fbCode}", 
                                        value: "${(await contentScripts.accountInfo()).name}") {
                                        id
                                    }
                                }
                            `;
                            const query2 = `
                                mutation {
                                    change_simple_column_value(
                                        item_id: ${item_id}, 
                                        board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                        column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.date}", 
                                        value: "${formatDateToMondayAmerican()}") {
                                        id
                                    }
                                }
                            `;
                            const query3 = `
                                mutation{
                                    change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},
                                    item_id:${item_id},
                                    column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.person}",
                                    value: "${fixedData.mondayFetch.myAccountId}") 
                                    {
                                        id
                                    }
                                }
                            `;
                            // const itemDataJSON = await mondayFetch(query2);
                            // const itemData = await itemDataJSON.json();
                            const firstMessageDataJSON = await mondayFetch(query);
                            const fbCodeJSON = await mondayFetch(query1);
                            const dateDataJSON = await mondayFetch(query2);
                            const personDataJSON = await mondayFetch(query3);

                            const dateData = await dateDataJSON.json();
                            const fbCode = await fbCodeJSON.json();
                            const firstMessageData = await firstMessageDataJSON.json();
                            const personData = await personDataJSON.json();
                            const metaInformation = await metaInformationDB.GET();
                            const domain = metaInformation.domain;
                            
                        }
                        await contentScripts.markMessageAsSent(id);
                        await contentScripts.messageCounter(true);
                        await workingStepDB.SET('collectUnseenMessage');
                        await contentScripts.pageRedirection(fixedData.workingUrls.home,'will collect unseen message now');
                        return true;
                    }else{
                        console.log('sending message');
                        await essentials.sleep(5000);
                        const messageInput = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.messageInput);
                        messageInput.value = message;
                        const sendButton = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.sendButton);
                        sendButton.click();
                        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        const markAsLinkGoneButton = document.createElement('button');
                        markAsLinkGoneButton.innerText = 'Mark as link gone';
                        consoleBoard.append(markAsLinkGoneButton);
                        markAsLinkGoneButton.onclick = async ()=>{
                            console.log('marking as link gone');
                            await contentScripts.markItemAsLinkGone(item_id);
                            await contentScripts.markItemMessagesdone(item_id);
                            console.log('found a message that is not valid, grabbing new one');
                            await workingStepDB.SET('prepareOutgoingMessage');
                            contentScripts.pageRedirection(fixedData.workingUrls.home,'will grab another unsent message');
                            return false;
                        };
                        return true;
                    }
                }else{
                    console.log('marking as link gone');
                    await contentScripts.markItemAsLinkGone(item_id);
                    await contentScripts.markItemMessagesdone(item_id);
                    console.log('found a message that is not valid, grabbing new one');
                    await workingStepDB.SET('prepareOutgoingMessage');
                    contentScripts.pageRedirection(fixedData.workingUrls.home,'will grab another unsent message');
                    return false;
                }
            }
        }else{
            console.log('Program should not be here unless fatal error');
        }
        
        // if(sendUnsentMessage.length!=0){
        //     const fb_post_id = sendUnsentMessage[0];
        //     if(window.location.href!=`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`){
        //         if(fb_post_id==null){
        //             await afterSendingMessage();
        //         }else{
        //             contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`,'Redirecting to seller message page');
        //         }
        //     }else{
        //         const validTosendMessage = contentScripts.isValidMessageInSellerMessage();
        //         if(validTosendMessage){
        //             const messages = await contentScripts.getUnsentMessagesByPostId(fb_post_id);
        //             if(messages.length!=0){
        //                 await essentials.sleep(5000);
        //                 for(let i=0;i<messages.length;i++){
        //                     const messageData = messages[i];
        //                     if(messageData==null){
        //                         await afterSendingMessage();
        //                     }else{
        //                         const message = messageData.message;
        //                         const all_content = document.body.innerText.replace(/[^a-zA-Z0-9]/g,'');
        //                         const message_content = message.replace(/[^a-zA-Z0-9]/g,'');
        //                         if(all_content.includes(message_content)){
        //                             await contentScripts.markMessageAsSent(messageData.id);
        //                             await contentScripts.updateFirstMessageTime();
        //                             await contentScripts.messageCountEligible(true);
        //                             if(i==messages.length-1){
        //                                 // updateFirstMessageTime
        //                                 await afterSendingMessage();
        //                             }
        //                         }else{
        //                             await essentials.sleep(5000);
        //                             const messageInput = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.messageInput);
        //                             messageInput.value = message;
        //                             const sendButton = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.sendButton);
        //                             sendButton.click();
        //                             const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
        //                             const markAsLinkGoneButton = document.createElement('button');
        //                             markAsLinkGoneButton.innerText = 'Mark as link gone';
        //                             consoleBoard.append(markAsLinkGoneButton);
        //                             markAsLinkGoneButton.onclick = async ()=>{
        //                                 const item_id = await contentScripts.itemIdByPostId(fb_post_id);
        //                                 await contentScripts.markItemAsLinkGone(item_id);
        //                                 await contentScripts.markItemMessagesdone(item_id);
        //                                 await afterSendingMessage();
        //                             };
        //                             break;
        //                         }
        //                     }
        //                 }
        //                 contentScripts.showDataOnConsole('program should not be stucked here');
        //             }else{
        //                 await afterSendingMessage();
        //             }
                    
        //         }else{
        //             const item_id = await contentScripts.itemIdByPostId(fb_post_id);
        //             await contentScripts.markItemAsLinkGone(item_id);
        //             await contentScripts.markItemMessagesdone(item_id);
        //             await afterSendingMessage();
        //         }
                
        //     }

        // }else{
        //     console.log('redirecting to home to start sending new message');
        //     await workingStepDB.SET(null);
        //     await sendUnsentMessageDB.SET(null);
        //     contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
        // }
    },
    getTextFromImage: async({url,apiKey})=>{
        const base64EncodedImageFromUrl = async (url) => {
            const response = await fetch(url);
            const blob = await response.blob();
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        }
        const base64Data = await base64EncodedImageFromUrl(url);
        // console.log(a.replace(/^data:image\/?[A-z]*;base64,/,''));

        if(base64Data.match(/^data:image\/?[A-z]*;base64,/)){
            const textDataJSON = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "requests": [
                        {
                            "image": {
                                "content": base64Data.replace(/^data:image\/?[A-z]*;base64,/,'')
                            },
                            "features": [
                                {
                                    "type": "DOCUMENT_TEXT_DETECTION"
                                }
                            ]
                        }
                    ]
                })
            });
            const textData = await textDataJSON.json();
            if(textData.responses[0].fullTextAnnotation!=null){
                return textData.responses[0].fullTextAnnotation.text;
            }else{
                return '';
            }
        }else{
            return '';
        }
        
    },
    startWorking: async()=>{
        await contentScripts.showWorkingStep(`Program is starting up!`);
        const workingStepDB = new ChromeStorage('workingStep');
        await workingStepDB.SET('collectUnseenMessage');
        await contentScripts.pageRedirection(fixedData.workingUrls.messages,'will collect unseen message now');
    },
};

const popupSetup = async()=>{
    // const accountControllerView = accountController({});
    // const popupHolder = document.createElement('div');
    // popupHolder.className = 'h-500px overflow-y-auto'
    // popupHolder.append(accountControllerView);
    // document.body.append(popupHolder);
    
    console.log('popup');
    document.body.id ="POPUP";
    const metas = fixedData.metaInformation;
    const popupMetaDB = new ChromeStorage('metaInformation');
    let popupMetaValues = await popupMetaDB.GET();
    popupMetaValues = popupMetaValues==null?{}:popupMetaValues;
    const metaKeys = Object.keys(metas);
    for(let i=0;i<metaKeys.length;i++){
        const metaKey = metaKeys[i];
        const meta = metas[metaKey];
        if(meta.interactive==true){
            const label = document.createElement('label');
            label.innerText = meta.title;
            const input = document.createElement('input');
            input.setAttribute('type', meta.type);
            input.setAttribute('id', metaKey);
            // input.setAttribute('placeholder', meta.title);
            // input.setAttribute(meta.point, meta.defaultValue);
            if(popupMetaValues[metaKey]==null){
                popupMetaValues[metaKey] = meta.defaultValue;
            }
            input[meta.point] = popupMetaValues[metaKey];
            document.body.append(label,input);
        }else{
            // readd only
            const label = document.createElement('label');
            label.innerText = `${meta.title}: ${popupMetaValues[metaKey]}`;
            document.body.append(label);
        }
    }
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', async ()=>{
        for(let i=0;i<metaKeys.length;i++){
            if(metas[metaKeys[i]].interactive==true){
                const metaKey = metaKeys[i];
                const meta = metas[metaKey];
                popupMetaValues[metaKey] = document.getElementById(metaKey)[meta.point];
            }
        }
        await popupMetaDB.SET(popupMetaValues);
        window.close();
    });
    document.body.appendChild(saveButton);
     
}
const simulateTextEntry = (inputElement,text)=>{
    const event = new Event('input', { bubbles: true });
    const change = new Event('change', { bubbles: true });

    inputElement.value = text;

    inputElement.dispatchEvent(event);
    inputElement.dispatchEvent(change);
    
}
// const url = 
const isLocalPosh = (()=>{
    return (window.location.href.includes('https://kiddingaroundtoys.com/'))
})();
const capitalizeFirstLetters = (sentence)=>{
    // Split the sentence into words
    const words = sentence.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
  
    // Join the words back into a sentence
    return capitalizedWords.join(' ');
  }
const getSelectedText = ()=>{
    if (window.getSelection) {
      return window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
      return document.selection.createRange().text;
    }
    return '';
}
document.addEventListener("mouseup", async (event)=>{
    if(isLocalPosh){
        const selectedText = getSelectedText();
        if(selectedText!='' && selectedText.length!=0){
            const text = capitalizeFirstLetters(selectedText);
            console.log(text);
            const db = new ChromeStorage('db');
            const data = await db.GET();
            // if(data.sizes){
                data.sizes = [text];
                await db.SET(data)
            // }
        }
    }
});

const contentSetup = async()=>{
    // const accountInfo = await contentScripts.accountInfo();
    // console.log(accountInfo);
    // const serverUrl = 'https'
    const db = new ChromeStorage('db');
    const step = new ChromeStorage('step')
    const initialdb = await db.GET();
    console.log(initialdb);
    contentScripts.setupConsoleBoard();

    contentScripts.showNameInput()

    
    let loadItemButton,downloadInformationButton,uploadProductButton,skipProductButton;
    if(isLocalPosh){
        
        loadItemButton = contentScripts.showDebugButton('Load Item',async()=>{
            const res = await fetch(`http://127.0.0.1:5656/getItem`);
            const data = await res.json();
            await db.SET(data);
            window.location.href = data.url;
        });

        downloadInformationButton = contentScripts.showDebugButton('Download Information',async()=>{
            const data = await db.GET();
            const key = data.key;
            const res = await fetch(`http://127.0.0.1:5656/currentDone?key=${key}`);
            console.log(await res.json())
            await db.SET();
    
        });
    }else{
        
        uploadProductButton = contentScripts.showDebugButton('Upload Product',async()=>{
            const key = (await db.GET()).key;
            const res = await fetch(`http://127.0.0.1:5656/downloadCurrent?key=${key}`);
            const data = await res.json();
            await db.SET(data);
            console.log(data);
            console.log('db set');
        });

        skipProductButton = contentScripts.showDebugButton('Skip Product',async()=>{
            
        });
        contentScripts.showDebugButton('test',async()=>{
            // const a= await fetch("https://apis.localposh.com/api/vendor/add-vendors-product", {
                // "headers": {
                //     "accept": "application/json, text/plain, */*",
                //     "accept-language": "en-US,en;q=0.9",
                //     "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiM2E4ODgxOGEwNjE2NTE0NjQwZmU2MTRkOThlZWQxOWE3YzQ0OTgxODMzNmExZWI5ZjBkMDViNDViMDRlNGUwZGY2YjJkZWJiNmM4YTJkMjkiLCJpYXQiOjE2OTgzNDQwNjUuMDAzMTQyLCJuYmYiOjE2OTgzNDQwNjUuMDAzMTQ2LCJleHAiOjE3Mjk5NjY0NjQuOTk2NTcsInN1YiI6IjE0ODIiLCJzY29wZXMiOltdfQ.zn_ctSd3x4g7xenUrmJ-J6VqKGRVgOs1GXSURfz7yQMfTWnKRBx7uYpjPW0QhEZUGK6ICTZXRBlczc2lNb01CmIx3fJDHi0_91PEEqNVUFY-RX2LmzGjXtPeLOhkE0SuQChKb07F0hFPO00lsEWgw1o70t2KEWMYP1PjH8d-a2QT4rb3NGvcFqz_BcWJjGZeSZSB8XFQj6iQx9tC2RjQzy_D9OjQObdKwoc29WuQBwWUw0RZ6vPTeywTxHtv_IM3gpNEn-quikRs1s3aOyVzaoBeqcqWSerfmlP6E4Um5dyxV2M4CFupvF5bGgNI8vXcJ_vCY2kh6lJm6rE7mngoJJ44r98_UATEuZWvNS9Wv8ETZm30WhoqMIl6UBb7E2dOKn8o3DXXzAPZqCzKyM8F_8U07Q_Uwp4tvAsKIpRiXdUDayoiWHKFFxR3KTqDNUhGjc_fe2YYv25EoJqX9CEMJDkCcqzNVBnIcR1V6XYPIl4WpmcjWNLOsIOyRWDZ7jvGMWCo0I1-TNlPjpBnBhLsMMMVh2-H1nXhrYSEMTlBvKGPwNPxrLRUL-gMCjJHy253BHoO5BKuY3ozibVXEDVaREVpRcYlLiNS0LoW732vp38Sbdd9k9K4XktMXmM2Ovg8eTNzRlOnPPGdgGjaszWOk0vGzWKWcqwgLmSgvsQ6cOU",
                //     "content-type": "application/json",
                //     "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                //     "sec-ch-ua-mobile": "?0",
                //     "sec-ch-ua-platform": "\"Windows\"",
                //     "sec-fetch-dest": "empty",
                //     "sec-fetch-mode": "cors",
                //     "sec-fetch-site": "same-site"
                // },
            //     "referrer": "https://localposh.com/",
            //     "referrerPolicy": "strict-origin-when-cross-origin",
            //     "body": "{\"title\":\"ttt\",\"description\":\" ttt\",\"isService\":\"PRODUCT\",\"cat\":[{\"category\":448,\"subcategory\":464}],\"ageRestricted\":\"0\",\"productImage\":[\"https://kiddingaroundtoys.com/cdn/shop/products/f2b82b6f-9e7d-49df-9695-5446343f32d7_1.80c91f35ec828108618c60e2a33c5245_540x.png\"],\"productInventory\":[{\"size\":\"1\",\"weight\":\"1\",\"quantity\":\"1\",\"color\":\"\",\"colorName\":\"\",\"price\":\"1\",\"discountedprice\":\"\",\"salesTax\":\"\",\"overSized\":[]}]}",
            //     "method": "POST",
            //     "mode": "cors",
            //     "credentials": "include"
            // });
            // console.log(await a.json())
            
            
            // const a = await fetch("https://apis.localposh.com/api/customer/image-upload", {
            //     "credentials": "include",
            //     "headers": {
            //         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
            //         "Accept": "application/json, text/plain, */*",
            //         "Accept-Language": "en-US,en;q=0.5",
            //         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZGIxNmRhZTM1YTU4ZjA1YWJjZGZjMDY2NDg5ZGEzOWZmNWFjMzYyMDIzNDkyZTAxMjRlOTZiMDI5OGY4NDY1MGVlZGM1NjU3MTJjMDgxMTgiLCJpYXQiOjE2OTgxODM4NjEuMTA4ODE1LCJuYmYiOjE2OTgxODM4NjEuMTA4ODE4LCJleHAiOjE3Mjk4MDYyNjEuMTAxNzc1LCJzdWIiOiIxNDkxIiwic2NvcGVzIjpbXX0.CF_gBwypO3-l-Aff8hPl5y_vu2nYMR--hyN0b3FAudrjofL1iHozU8Nmwz7abSHy25jP8mQcojDBGBsgXavl7jxBwzWAUo6qbsfhrGe0BGY_aRxwnf1sj-TMgIJecUkIOfTB5y6BS1Twqg1gwsw7NgSjH2I126CGuZCzLUGkxCpXfcwuDtvxvXBDeZ6B9d_rGoE4dKm3eHvY50IyJ4TYNHfdSGeA827MkKP15jKM6jgwO2o0vwKOSfQKcNEo_ssUokRExSUg5Fs8QwSoIuF1D1EC4tT9eu9wV6ePZGiusvaVtW-omYEwjAUZ3XtcrK8VTy1vJMf5RK5bGwhMClNwORWvsxNEiDOVPWCgUS2kq3OTIHMSx550Tp9BM26uoV2nDENpxKwtdA4uupWGq8gxuCiXLYUrWRx7iRicC-t0ZleJljrb-yJElGBdW4QxDaf3ElEhquM70s86ElHYY66eT8at9MFj_SwmKn3gJDME1ho5CHFoqYJbCVYGlI0em3leDE1CWiZjAsytomUxvVsD4uiCSPjGlFxuhZJdrfHQ5Lp_22dLht2wjnH80DD4r_v76U2tH0NCB-nJxsDh729SvZ2Dt2FATvYACGveyq99E1huzjaK-KFCeO3kHl2c0XxhUeSQ9syTi-HiX7Nk3I8cdJtK4n1Dbwt3BELvlvrMZzo",
            //         "Content-Type": "multipart/form-data; boundary=---------------------------93365124425885302711182041568",
            //         "Sec-Fetch-Dest": "empty",
            //         "Sec-Fetch-Mode": "cors",
            //         "Sec-Fetch-Site": "same-site"
            //     },
            //     "referrer": "https://localposh.com/",
            //     "body": "-----------------------------93365124425885302711182041568\r\nContent-Disposition: form-data; name=\"image[]\"; filename=\"10.webp\"\r\nContent-Type: image/webp\r\n\r\nRIFF\u0000\u0000\u0000WEBPVP8X\n\u0000\u0000\u0000(\u0000\u0000\u0000\u0001\u0000\u0001\u0000ICCP¨\u0001\u0000\u0000\u0000\u0000\u0001¨lcms\u0002\u0010\u0000\u0000mntrRGB XYZ \u0007Ü\u0000\u0001\u0000\u0019\u0000\u0003\u0000)\u00009acspAPPL\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000öÖ\u0000\u0001\u0000\u0000\u0000\u0000Ó-lcms\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\tdesc\u0000\u0000\u0000ð\u0000\u0000\u0000_cprt\u0000\u0000\u0001L\u0000\u0000\u0000\fwtpt\u0000\u0000\u0001X\u0000\u0000\u0000\u0014rXYZ\u0000\u0000\u0001l\u0000\u0000\u0000\u0014gXYZ\u0000\u0000\u0001\u0000\u0000\u0000\u0014bXYZ\u0000\u0000\u0001\u0000\u0000\u0000\u0014rTRC\u0000\u0000\u0001\f\u0000\u0000\u0000@gTRC\u0000\u0000\u0001\f\u0000\u0000\u0000@bTRC\u0000\u0000\u0001\f\u0000\u0000\u0000@desc\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0005c2ci\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000curv\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u001a\u0000\u0000\u0000Ë\u0001É\u0003c\u0005\bk\u000bö\u0010?\u0015Q\u001b4!ñ)2\u0018;F\u0005Qw]íkpz\u0005±|¬i¿}ÓÃé0ÿÿtext\u0000\u0000\u0000\u0000CC0\u0000XYZ \u0000\u0000\u0000\u0000\u0000\u0000öÖ\u0000\u0001\u0000\u0000\u0000\u0000Ó-XYZ \u0000\u0000\u0000\u0000\u0000\u0000o¢\u0000\u00008õ\u0000\u0000\u0003XYZ \u0000\u0000\u0000\u0000\u0000\u0000b\u0000\u0000·\u0000\u0000\u0018ÚXYZ \u0000\u0000\u0000\u0000\u0000\u0000$ \u0000\u0000\u000f\u0000\u0000¶ÏVP8 p\u0000\u0000°=\u0001\u0001*\u0001\u0001>9\u001aC\"!¡\u0015kEL \u0003²·p¸ç\u0000\f¯ÓÏÝÿªêÃµþ%ùï?º\u001eÛ}ÂkVËTücûl\\ÑéKÑ\u0017ø¯P\u000fÕÿÖ¯z¾¼À~ß~ÚûßþYûÿAê\u0001ýÛý÷­×¨·ï_°\u0007ìçÿÿjÏÿ\u001f¼?\bßãÿ÷~ð{cÿö\u0000ÿÿí{ü\u0003ÿÿ[¿S±öcý£À\u001d?!ýëüç¸Øø'ì\u001bP~\u0007þ/ø_kËþÍxòþ_P_Ë¿¢ÿÀþåõ¡óÝõ?øÿÕw êÿç¿b}½ûWþOò^4ßóÿõ\u0013õñßúË|\u0000ÿ:þÏÿÔøÞ\u0005?mÿì\u0003ý3ü·ÿ\u000f÷_ßL_ÜÿõÿuþßÒ'Öý¿Úÿ·ù\u0007þþ/ÿ\u0017¯_ÿÿû?\u0006ÿz?þÖøvý¯ÿùÿ íi5y*pïÒk\bòTáß¤Ö\u0011ä©Ã\r\u0000¦_\u001f\u0000:JDÐNû§¤Ö\u0011ä©rc:Bõu¹\u0003\u0010²S^Ä>M#V3j\u0016,\u0006²¿ÿq!r\u0001Â¥6à2\u0017ç:I.CÕÃ$\u001c_\u001c\u0017§\u000eüþÌ\u001a³G'9òuãD\u00049kù[¦8ì¶Wvô¿ü@ãÙAóa\u0007ô¯_?¼29\u0018\f\u0005í\r:¥¶^:\"¸\u0011ð°¦R­\u0005þZ»~\u001a>\u0005e}Áò\u0011ä©Ã/\u0010ÆÿÝJ[ÉÅ\u001d?ÏüÈ­¥S\u0015IIjÕ­^ìí+|Åâ\u0007¡7Äaps\u0004ÆÉ:\u0004p¶ï\u001fµ¼Ââ6+º7ä\u0001!à\fWñF²E9:Eü\u0010\u0005Ëb°ke£±vÆ¬Æl\u001d%1åg\b¾æzO\u000eu\u0011ï\u0018\"X¡Oï +\u0000k*\u000f\u0019»jÚÜñ\u001e+\u0005v«ÛfQ§ò}{,+ÇÁðÌ`\\þ v?o\u001e;Ìm¨Æ \bøZî\u0019Óeïß²þ^UqÍë\u0016;êÈéN²Ó¹¾Oîg\u0010\"LdÃ±íÓºÄ\u0012­E}D\u00132=&¯fûý\u0014¡µb\rÍ\nµ\u0011Ú«3 Hû<Êm}dÆÈ;:\u001a¾ö\u0007¹`¦Ù+¬¢:\u0004äh-¼Hß¢/g?ô ÌõF4|\u0007ðp{lpÜ5,íBÎÀIñ\u0006ù\u0013Ê\u0019ãVMe\u0016A\u001eØ_%Ë\n%\u0019¼!p×¿5\u0004\"¿´[Lór? ç\u0002uëï\rgõ\u0011Y`@c\u0019:G/N%ÇÞvbd\u0011U\u001b×~\u0010®\u001ezßáú\"è /¨\u0004ö\u0000HÇ¨×\u001eÏè·,\u000b\u0013ÇÌ ÈëjÞVµ´BÇGã³d´z\u000füÁ¼Å\u0010E?«®¿\u001b\u000eTö*ò¦20ùÃZ\u0017ýôß»t¯\u001b\u0002\u0004*\u001e,_\në~ÜÅl÷ÚÁÉê£R6\u0004`ë\u0000rø°ya\no6( zPõ/ñuó¡\u00024k\u0013F¾B4§*ìÌõ£0r®xÛ­º¢µ´ñ6ß#\u0004¶\u001bûÂ\t\u0000©}¹¶0m`\u0010ì´c×Æj/ý]Ædè£Sð\u0014JÇ¾D.¯Ñ\u0007%á®,×±Àì\u0000:k¹)³áÈøÆ\u001a\u0019Ü!IèfBGa8\u0005sÊù~á¹/«\u0015H^Ï\u0017C9/-\u0000×Â´kÐÁ^c\u001c\u0012\u001bø¯<ë¯)¾\u0012\u0016Äø\u001a½\u0000,\bDã\\\u0007ã×¢\u00022é¶x²bf\u0015T\u001d¥\u0002sé7%]nê+\r±=\u0004)°y;{\u0007üjO|:¶ Á,¬ÿÊ«ÿù1ªh\u0010[÷âèlÛ\u0006¼h+\u0015c\u0002ø\u0015³\\*L{/:³%ÇBM_ec!$ÄlK2É}eiÝÿý³[o\u0016ávgR6NÉØsêìý®ØO-ú.qÆ¿×j]_f\r'^¡Ð¨vÁälOÁ#`RÂ!O\u0018Üïý(Z\u0001²¨ÔôïoN@q¾q=Ë)9ÂUëÀ±¸þ&\u0019ê¨XS¥`ãç\u000bý¶þß§Ù&+D¿{^ZºW9?ÏÛ{¥Ù ëJè¡zæSzÌÜBÜ%,9\u0012á\u0011ª¸gÌ\u000fæÎ³Õ ¼r-¯À>ô6¯@J\u0011Ó%¡\u0010½F~\u000e\u0003ã6dxÈ¸õ.%Ú)gTN\tçÁñàâ\u0003jû<Ç¸¯rõ÷Zz-EÂ¡z^¶r,F©ñ/u CÖ\u0014µæ·#cáswÍÒk\bñüðÊ|h.ò\u0001¡Ó6·Òh\u0012\u0006QO;±\u001cíMÂzðfödG\b:\u0018k×\u000351)W\u0012O9\u0003°¢\u001eé\u000f7ýê®\u0011*kfÄëzqf;\u0019\u0000Qû\u0004¶æ· çP\u0017OI¬#ª´\"\u001eÄ§\u0017\u0006Ø^6ÑÝ2¡g¤Ó{òÖymº±\u000ep\nIÙûäJÀc\u001b\u0013È!`oÊy\u0015©$\rá¬v¥:3Ñ;ÁÖ4xSÅ)âí\tè\u0006¥ïÍ\u0004w;\"îÑî6L,Oç¢ÂJQ\u0012\u0017$é\u0006¼\f\rÖ³ZáÅôñÓ#G\u0013-ÁÙ\u0001â\u0001óGÿð®u÷Å×hiôü>rgBày[ö9ò\"v¥QBº\u0005:ÒÉæá°¬y£^«)Ã½°É¯¾Ä^\u001bÂ§N\u000fÆYÓîF:¨Hð$C+>jûÉïá\u0010ÖJÃ·\u0001ÕÀ§\u0018\u0016\u000eØdÏÄ\n§\u0017óäô[T1¬sÓäÓz+ ,ögAPcá³\t­üÕ«8wé(d·§\u0012¾ÂP£ÀS÷©Ü³è¥\u0017\\ÁX%\u0002ß\u001fài\u001c\\å-ÔQdxRï)«Tü'ÜÃB)ý.,iÑí¨%Ð¿Wz\u0016=Ôm\u001aî\u0007ÌýWÙ&¨ZLÜ\u000bLxÇu[R£ÉS|Ì)N6ÝD\u0005/ïn÷½OÉ*\u001aÓ`p*¨èfª;à5ôê\u0002­ÂûRV\u001dþ\"{Øþ§¬\u001a\u0010ö1Å-¥è\u0012lg2l§mä\u001e\fð\u0016?\\\u0015µÎ±]Yhñ\u0003\u001aÂ\u000eñÞÓÒQò\nkÔi\\\rÈ\u0014vë\u0010©l%|sÎ\\¸ü\u001b\fBT\\êdcMÙ\u001cð\u001a/VNz±\u000b\u001eb\u0016ÿBvËÖ\\Ý\bZ.2¤\u000bi\u0007#¸Và\u0019D\tþëº³\u001e\f¹Èyg*B(gõê²Tå\u0014xeSV{\u0004Q½È®X\u00182§\u0004V\u00008¥\u000fû6g+Mí­®WzeÝjz\u0000Üo¥\u0007ÈY%P\u0015O$\u0011ò¦ò·\u0003ÒíGh³;ê'lòU6Å¸×\u0012´\u0014Ç\u000b§QÚ¬ìÝh,íî\u0017Ü!éß\u001e¯\u0012J;Õ!W¥¤R¬±ò¤ ´¬=åôEê¦\u00007\\NÓ[Ã;³P^©8\u0003Ä\u000e®¥Æ\n$Ô:\rÈTææþ\u0014LóWÅ\u0010I#z[L¼éÄ.ý\u001eº¶µ´\u0000\u0001DKêÎ1Ømµú\u0018ì\u001e*\u000fÀîûå\u0014»\u001aÓî\u0011ÚÔ8·¸3\u0004ÍÓ\u0004¾>)²}ë¿üîI¶ÚZ\u0013Hôüè\u001a¶°wÊ\u0011\u0014ëð\u0013âqvâôÈÊ¤@}jUE/&06vf´ê~î>Aïü5«·gtcg)Âò\u001f;oyô/%N\u001dú=\u0006\u0000BÌòô\u0019|\\ò\u000bqÝÝ£ÉÓFáÉS~Ç\u001eÕ×ïçWU\u0000C:_?Wå¼þ\u0019\u0011ff¸ªX\u0000\u0000þü£@\u0000\u0000\u0000\u0000\u000e7\"Ãuy\u001aÙ\n\u000eò¯\u001aë7±ü&5ê5*³%`\u001aï0eüÚñ8øc æí zn¤i\u0012ÈÒ7Xp/k¢SÉëö?þÐK´²þEk¸»\u0013Í>\u0006tÓ ÿá¨\u0015ãF2þõù\u000fv\u0006zöjP\u0019ÊSiidÃk§Ûk  ¯Ð\f¡^¦ýÔfÙIOÍOiJßUÞJØµó*\u0006Þïª\u0017dí£\\S®Ó´\u0003æÆËè* JE(n\u0005\u0006ôÝ\u0000\u0000Û¾æï÷ïÁ÷\u0005À*µj,É\u000fa®©P(BýãW×ìãSc!ùõãÑÚßKöÜ¡bè9Ñt*\u0016\u000eGºL±#VrAß?ÌýðÅçi×e\u0012{\u0013NíhýÛ Ë5c·[Þ\u0017D´kóåßExö\u0018ëzp/\u001d*r¾Ý«\\l\u001b¤P%=kj\u0014¬<]©¼[ó#P;ü¼'c\u0017T\u001eßÎ¡ã½¬n\u0006}À\u0018ÖhøÒ²\u001d\u0019û\u0014ù¦òÈsò8É=dÀßSúMP­s4uÿpÒÞ)\\&oJ¢©0yh\u0017ä^@Ã'Ãë(°;º\nÇ\u0013´ÖH*`ûmEÆ\u0012R>«×\u0002ìB%L7àÛÆ\u0006\u0004­¾ìmI?+]º\\£B8:ÓN©i.ú#Fn\u001cª`ÂÎ\u0018ÍFw¸\u0006ÍØ£´ë\u0011\u000b<ÄEjT®ÊJÔ[¯xÎCï\u0010\u0003Å\rþ³\u0001 \u0006¼Sïk¿\u0006]*ÔsXÃQ!É\u0017·F\u0017¶õ\u001e0ñç@Ä*ulÁ\u001bsËÂ-å¯í±\u001d¢Áü§;k\u0013(Èir-ûY­ê`²Þ÷Ü]¤¦\u0007Ú4T×þZ¬â.\u0017c\u001dV:ZÑ±ÒG\u001a»\u0012\u001eÍ/m\u001auÿÉeÏ#CÚ:9IöyatÕ\u0003FçÍ·£nFòg¥\u001fø­\r'æQ)âVÚÇ-rlY´«üÈ§xW¹[hºê=Þ¹&)åL?I(]\u0010*Í\u000fü§@j­µz¶Ú_©\u001f<xñ\u001chÚã\u000b}ø\u0013\u001ab¡9­õ\u000e\u0017«K(þ\u0011¡¨0FÌ4Sù ´UWf\t÷¬ê~°Kda1µ5åL0EWQã\u0001l\u0018f/É\u0004uBÕâ¾ãgÜ TÜxÙd=µ\u0016qÿR\u001fc±ÿ\fq\u001f2Wj¬¬\u0012\u001bê¹££¹É§\u0004;Ñ®\u0019¹»gÏ3Ý\tD\n6$hNrûjÎ¶ó´Ï.u¹c£¢\u0010%¥1ßêíSB!Õ\u0011ñ\u0010X«\u001bÏqMÍ¥×\\9Ã.\u001dnJXÈ\u000fèòA\u0000WÁ©äLÎå×\u0016òI¹ÀËô\u000egjaàZªKcÐ\u001dû&@§ÁtÐíãNÈøÒ¢'uôäÃ\rKÜ18<@Ù\u0000EõV?\t@É[8·/ícÚ?{é±áJ@ô8\u0007\b\u000e¿\u0013\u0007Ü8~\t0Òïuhk\u0005,\u0013\u0019á\bø4i\u0019;ÿ\u001d·rç\u0012\ti­¸@bÙ=é\tçáìÉOY\u0018)ç}Å\u000e\u0000\b>Qú²öl¢å\nmÄ:\n+\t\u001aNcÝõ¶t_|»$æ}=gÜ\u000fî­Ëç \u0012ÓÒyäîk\u0015#n#`:ä9[àV/LÆ\raMLøJ0j~ëuU×ìo¯\u0005{ÃìÂ¼m\no«S^ \u0007,VÛä·¾¬Íoö5'çºFG\u001c\u0001é¨\u0017Lz³²¼ú»\u001aÀß}ýF\u0002ÿ'\u000eáDr\u0016·2=.^\u0011#½[\rHoù¶&\u001b©©4K}ü\u0003»Äi\u001cX< ¾ å£õÂë\tm¼Ù®ëTÇ\rø \u00013î{ÞiÕÍ\u0019öuyGôõÜ\u0019mâeÜªÏ\u0018Ñ»BxË6FÙvB«à@¿gü\u001bÑ\u0016½¤-SP¼*Ü\u0018¿¿QBEqVA0n\raÏ>gÀWc4²Õ3£è½&Q\u0005\u0013\u001aw9Ë\t\u001d\u0016C!ósA\u001dÊ1eCw×ÑÄéÜÎð#/) ú\u00159Ø=yÞ¡\u0005\u0011í¶[7Ä\u0007¼\u0005qèSR\u000eûÒ.3É­ûø9aÐ?DêºÒ>¥g«ø{®C-\"\u0019é¤S\u0018£Ô¾«tE¸Ùº:h9\u001a=Ã¸\u001dRÔå~ì(\nàÞ¢l\u00061·1w\u0015¥h5\u0010ZMó²Û¹ðÂÝ\u00004N\u001a-àtBÛ\u0019wÇ¾#D¢\u0004\u0011ÆM6'7Ô²ÛTÿN\u001dòj\u0000S)­JÄ\"\u0014Ãî\u0007n-Å\u00182ø?¶al\t\u0013ð)|\u0015Rº\u0013\u001fR^{ÐÍyy¹©BÓ\u0017hdÃMÔDÙ\u0019ÕÞ ñ¥yêºÂÕ4<ð®ÐÓXÓYÕd¬ÁK[ì=È£ìÓ°A¿©Å0 ÔéÍ-B\u0010ëø\u0019\u0003Yb\u001e)×\u001eo·\b\t\u0017\u0011Íbú@½êmé­Mc0ÜÇ\u0018\u0016\u001a\u001c%Ôßgtàd£Â,¦»Ê2_þn2Nf\fh2Ê¯Hsofryi\u0000\u000f\b[\u001bÏ§'®ð\rª¯\u00132¬OG\u001fõÇ¥\u0007ã£Ì\u0003ª\u000b;î;û\u000eA5<\u000fò\u0010\u00004ÓÄô¶HfþÝ*H\r\u0016\u0010ªålò\u0002j¸ÐØ&e }Ìÿ¿õ*q\u001c\u000eONb¬&f¬\u00050ì\u0015Â\u001e©e }ñÆ\u001d{5\u0005î\u001a\u001bl\u0019*ìÞ×7ñëevùbI\u0017Ö¹\fB\n£\u0015ñ\u0019\u0014åC\u0017eÊé+²ìW\u000b_g-ÂfG\u001b\u001dH_ØëÜ\n)/å\u0019ñ¹«ú¶/yJëïj$Å4nÒLáº{\u0012\u0000Äg©w\u000e\ræ+DÙùBº¾%×\u0014ÜrNñß¿Â§ùÂ x²_ø¢Æ\u000e½ÙuTopºúeÛT1C\u000eûC´\u0015Ù4UÚààÏ\u0005\u0000@\u0004aÞÐ\u0013üºY\u0004Ã®á4\u0006°ý}ÿ½Õ\u0006\nkúU°Ü 'TJ\u0006®Vpa\u001c\u0002\u0006®Û±ÒE­èâÕ\b m\u001e[\u000e5üoG¥ã?Ðôp²Áe¥¡Õ\u0002Ä\u0010Ò\u0011éØ;o4I¤ÈÄ+ëÀ\u001efÛÓÆã$9h27¸Û[ÃêYs®Jì\u001avi°É\u0017&\u000bÆ¦Û\b!wÉ±\u00186\u001e¡¬L\f\u0019ÝìOÜ®¡´îÞÝ®§-\u001dÒÖï\u000e=Öã\u000b\u0019<Äòè¹ñQÖ\t Sb-ôüÎ\u0010\u0002¾áV\u0006°ñkÕ^¥Òb©\t\u00036\u0014l\n\u001ecK´hïÁ&\u0006Ô$êãìåµ¥çu:\u0001»ÎÉÿèÿøü\\&$¬4Ytócâ\u0001\u001a¼uOa»ü\u001as×ÙV\u0011¿0\u0002(Ó\"6Vp ýn\u001aD:\u000bÝ¯\u0000\u0017:|É0ìÙo\u0011¦Éc$yöÕõ\n\u0002;|®dtÒjP9\u0017¥¬\u0005l\u0005·\u0006ÁfvC¢\u0007§Ã÷ïd\u0010÷ZQÏÈ@Õg\u0005Q\u0002>^ÙqÂq}ÔI\u0003p5»\fý\u0014sµ­Ò\u0005\rYà#è9\u001aÎ®'í]kØ]\njB\u0015î ¤å\u0019«20\u0000»ùçk^NKÍ¡\u0010;\u0007\u001f4ÅÆ ÚÝ\u001a[ñ\u0005\u0013M\u0013\u000f\u000e4Ý\u001e=­'ÿ\u0019\u001eíÉW\u0007N\u0019-izaF\u001b?«4t»+$Û4ÓcMá¡EïCw ýÜcí¬A6ôÙòlÛý !ÑS¾¥ÏÜæëøö°ø\u000f\u0017¬\u001aý\u0004·òÓÎ#%)ÒøªFÿQÿÂ¡ö\u0012ÆÀÃ3»\tYµñl\u001a6\fÉ]jÉ\u001eÁ\u0007\u0002½I)RZëYuåI\u0005¹há1_×\\j(áõ'dÅýéSõ, Èq¶]o3\"oÿ¤2\u0012\u001bÍ\b«¿!ÁRÝÑ)êÐÇ\u0000\u001dFv\u0002aMË:¨\u0004Þ\u000bÒ0Üªc\u0014ñ@bK\b{Ký°ÃÞXJh\u00013\u00179¥1ª\u0016õ\u001d\u001c\u0017õ\u001dÃgû®c\u001c¨\u0004âã´wë3Ç5!©:c\u000eúÊÿW\b\u0007\u001d/!³39\tÌ¿e¥\u0019|¡+WêU#,æù ÒOn²Ðt]$f\u0015Pé¶k\f#\r«üë§Aâ1¤\u0001âC~É\u001dÆ,\b­ÀQ(\u0014[Ø¸¥U7\u0004Ì8ÞÉ\u001bxPþRE2.Ò,þß\"Wñ£ÎæÍy±\u000f}?_øOpþÅÄ=GÞWBiª5^øÑªti\u0013wÆýâyöäR=Ýþ\u0012rul\u00167Ða\u000fR÷ÁE\u0000;\u0018í\u000eùù]ê\"\u001f\fÔöÆí7\u000bqù/\u0005Ü®²;Ü7Ð°¿+ÕúL%®cç(ÄÁÿöp\b­~~-\tµý­1®$õòfÊu\u0015arßu\rìÛ¼eå\tP¦ö;Ì¡2Ç\u0016vS\u0004¦\u0017'¦TÃ[\rLâèã­U\u0015\u0010ÊQ±/<´¿\u0002\u000eêïÅ\u0014U\"±¢Êü¿\u0012\u001bwk:ïø\u001fÎ=í\u000b½MA16©ó\u0015\u0002øÞîTif':ò¹@P¡5#ÛåÜ\u0013vE|«\u001c.\u0006Ú1¤¿Ø\u0004\u0000ì4÷\\\u00057r\u001e\"Ì\u0007õ\u0005Ö1S\u0018»§s-\fÍ>\u0001Ékó¹IäK§\u001aJüHebYt\u0015£Âì#\u0002ÏÓó\u0002ºU£­qÙ\u001d\u001a\u0005©Mê­³PHè?é#^\u0011>(e\rµþ¹¦ø»\u0004~@êÆE×æ\u000b­Ä²8\u000f^\u0014Ì\u0002,!\u000eAáöR¢\u0005¾\u001c\u001f»=T³\"y\u0002\"\u001aàð²¨¢\u001eøqq!®¶p·©P²\u0004ê;~?`¼v\u0000±©ùY9¬Xû\u000fî\foCÂ}øM\u0013;¤+ìA\u001brxÃÏÆ,Îjù\\Þ\u0013^ÿål+q[Ñó\u0001â}SV¥(1J'g½Í¿fWE|ÃÚ\u0001w4Üß¸\u0007\u0014\u001d¦Iþè×ø²ÍÛ¥·ÅÊ\"ês2\u0006Ô¦JèÒ\t,ü\\Ä\fâì×ýÚæb\u00049æá\u0006P\u0015\u00004#~Ï¸__[\u0016o\u0007)u^R¯«e4¡ \u0003.B;\u001d$\u0013|&²Å¢Z\u0005Aýñ2MC7'¨uoÙâ÷ÞþJl Þ©\u000b¾y1ðßç-ÈwoOâ!¶N0ûdC9{¨KI\u0011(¡)cG¼B¦+õ`ÒRòËæcæ\u0017·:\u0018ú>;Ñ©­n}2«aæ8V+£Ñ.«Õ\b¢îõÁ¤Í\u001díÀrµ\u0018âØ\u0016l>ê»IR\u001aüO°\u0000jý1[ruÑ­³xß$Ç* Of²ÁÄ¦(*õ«²\bH\u0000`I\tÎûü+\u0019ÒÐçÕèÑÇI{¤:\u0005|TÛnýe\u0003ÒUèÁ÷%\u0018\u0000¦m+t\u0000îC7*¥Ïâ;¥FK¾\u001dN©&\bå¢ÀM_ë®ÝÑñh¾_dx²y²@\u0015÷½`D÷¨-0}FxÀâÓ¦tÓÈj½:\u0016²9E¸Ê_î*r\u0006F\rÖðªLtYÁüSztåyÂ\u000ecP­õ\u0001$8Ú\u0018n.¨mÝË¦\ro\u0012\u0012È_¡GeïkP½Õó «µ×Ø`*'(\u001c,a+ZºH\tYÌÆûµ¸ñ\u0002±ö ´N°¦\u0017\t\nq?\u001cç£ûD§Z!3à0B\u0003-¾Y.ÕÌd@\r!MÇ_\u0017¨Çëf­f\nÉiæW(\b7tÉ`þö\u0013Z#\u0018¾'9\u0007:\u001eðwí\u0013E\u001fY2ÌûK\u001eHaÛÈ$Ëy'®\u001f<Ô¸N,Ç}êÛí\u0018¯\u0013&¦\bëR\u001f\"¡¨¸\"4-özJ®Z¯\u0002k1DH\u0001æc@Ül^¥Òt0ä@Ë¯õMÇ\u0003Åñ±ÆÓÙè\u0006Ê\u001aËç+Æ¨:z\u0007OæØÿþ\u001aJÔn´}c\u001eE9I\u0019\u0014¾f\u0017HOÉQ°V¬(¶m%éÄ\f'sº!ËÞ\u0013Ã¥\u0006\u001fwG\u00172¾¬v]«µÞÔ­\u0012Ç>\t-§ÃÇ(1Ðh*@E\u0007måþ\u0001ÇÚªm\u0006Òô8Û$b\u0013bxA¹.Úæ¸\u0011ôSÝv6c|Óïp#Çè \u001fkÓV\u0006\u0018t\u000bÍ·Áu/Hi3ÃdRyúÔ¨ÐB#ÓeBY~ÜU\u0014µg\u0006À^A·\rÁæ¬GúOzµìAÿÇð¦p\u000bá\"3®V3MB¦ºÄöÔÇú÷b\u0016©GlðÊ|\u0001\u0007\u000egºáß}s¿§e \u001c,/|F·éO©ÁPti¹Ë\u0010»\u001bwþ/ZÖ\tÅù¨\u001bæÑ{\u0012ý-øÀ&\r¹dÒÇ¿G0tBf&+ö55\u0015ò=U3a¦Ï\u0012©¡\u001dðÉ}-\rrI\n\u001d5é®\u0003V©;Re¿ºÚRÒçÈ\u0003ló«Up.ÈB}¤O\u000bÖWÃ7Ê=óN-÷)r­õð\u0003Bª©4?fæ\u0000µ\u0018:æ?à\"k¦nÝsÕûÀmy\\AË³\u001eÐ·\u001b3\u001cÔEè/\u000fmZW\u0016·×G¦Ç¸íÏXNöû°{ÿ\u0017Õ¸\táOéþ\u0007eûOíµ+\u0011ÂÁ\u0007¨â,èbÞ'\u0014's±Q__Ñþ9þWòï¯pYqAñ!·ºm¹O]Q\u001dé;!\u0000Ñ¿·ïßÎðj\b\u001fÙ¾úo·h\u001b\u0006ðó÷û\u001b\u001f\u00053\u001f8ê--ç\u0014'Ï10\u0017rXK\u0004íý6ÚI(÷^Rmà÷ÔÖÇ_£\u0019×2\r§r¦WS»ÏôÉtÓõâÁ*-§\u0015O^iâ{a7ô»7×ËQió TÞ¾¿\u0010ÂÕ`BÄø\u0014ÇÚÒTBÝìÚ\\éçÃ\u0006R;=£QA¿uÊ£4=\u0001´Ìå)\u000b4X1Ý®JßÈÃb/=ÃâRÜà¯C\u000bqWk5R¶\u0004`AOÇ÷hgÕ¹ÈP`\u0016qðv>¸\u001f '¥l5Ø(©ËµÆ\u000b¿Ù\u0001UÏy :\u0001õÓ\u001dº\\¯ª(rYØ\u0015_]©BÌQ\u001e\u00177´º%ý\b\u001bÐéF\u0011Ü÷\to2\u0000óÖÕ£ÐÂHÒ\u0007°@6À0YxÄ\u001f=Pª=D4G­Í4×¬JÁ½»\u0000û»íÔ~hG\"$®É$#vÖØ½³z4×t-Äâíÿ×©N)¾%Øêæð\u0007Ê)³\u0012PTðwØÁn8&0o\u0001¬q+QÚ®\u0011ß4wú\u0005ÍTý$Ö°bÐÒ§ÎÑåR?ïãbæëR\u0012CÓ\u0012èUõ¼°¼ç¦7*\f®?µX8\r)\u0001\u0007\u0003Ê>¼Þ4~§1æ3Á\u0005]E¾;M\u0014©¥ÿçªo~´Pµ\u00017¢q\u000e°.Pãñ­ô³d76è[\b.;çRå£\u0007\u0011\u001fhrXÐ\u000fþâ\u0002!ëÌ\u0002\u001aÍÊh\u0001©7¾,býNÔFíé:á´Ð6\u001e6v)¢ÓÛ_\u001e\u000bú\n÷<'¼m\u0016\\UÉ\u001d5°~'I\u00101æ:#¤éèÝºT\u001a\u0019ZR\rõúw«f-?\u0019s\u0013¼¡»Üþ¸WB5ò8LòGm.HÄö$\u001d¿ÖS¦Ä¢\u000fWébLÔÂ×tîbÞ2J1Ý\u0012¬×ÿËE`l¹t½öD¿*Ý\u001f[0é\u0004z¥>\u0017ñ\u0019?í\u001f4®O\u001b¨;²\u0019àYbÇë\u0011ÀÒôR\u0018¶q\u0000BB\u001d©AÚ':\u0000þ¯Q¤ð\tx;®&¡Ì'\u0004;jo5{ü\u0000\f\u0004t\u0003ûÿ\u000e3M\\j\u0004;Ã^Ì\u001d=g\\ªq\u001dÔ\u0000gyNrv_c·\bðï~\"I\u001fZ\u0010dãà\u0000\u0016H«T\u001cC(.Ïx;@Z#\u001aÎ®i\u0016\u000f¿zNÛ¶ÛL°ðZh¢³¾¨É4}¶\u0011D)H5Q<úö,f¬Ø½ü3\u001f\u0004^p(<øaÈ½ôë\u001eéAl\u0006^±;Ìé3?ùz\fÐ¨©[zæ_W^Í\u0002ª\u00182öQª_ãËJÍÜØM5>µ kß4Þ/\u0004X\u0019ØC£øáJS\u0015ªÆ7+fM_õ¢\u0019Í\"Ù\u001dgy±G&5f-¦\u0013_7\u001cK»½åá¾\u0000`&½rÝJ\u0014áØm&®3\u000b®_X²»ijé\u001b¯Õri\u0004ÔT|¦\u001aZ,ëwi\u00149+»ov^Ï4µÇm¯Ð_¯lÑY »Vín¾,ñéVtçþ?\u001d|\u000bj0w%`veåüã6èÀTÉÓ¢¶Ã?ÒY&QÈ\u0013É­Ë\u0018¶²_l\"¡ xÔÌ½\u0002Ó©/¦¨ïæR÷ê3e¹tÄsÚÚOk®*\u0017\\Û}\tø+Pk\u0004xÞ\nòþ¶ÕU¦¦ãä5#.=\u001eL\u0004TÿÙÐÉöîº\u0018h1I\u0018´%&ÉZdo¡öô+«þ\u0017~J} Êõz@@Îl²\u000eê X\u001b½\no\u001b{Ð \u001aì\u0010±\n\rwm\u000fë³ÃÑ!(y\u0011âä>Fïõ\u001eRÖC)¥3¬+zº×yZ^Í\u0019Uô\u0014[k::#{O'?\u0000÷Ô\u0001;\u001b \"À\u0007²Èk4ñ©#îù4sJWûÛ\u001eÀ#ô¿\u0019è«4sbøÁÔê\fMþ~2\u0016Ú.Ê8\nÂPÐÌÐ\u001cÏs*éàCÎÀ©\tN¼ªèÅ\u0010Ü\n\u0004'`GqDþ<- LjUQH\u0004bí^b\u001d\u001f\u0003\bîz5³«z\fô*ksF\\2\u001aÖýRäí£Ð7\u00049R5y¤\u0014¤Ô*^ãÚ%\u001b]Õ'\u000e®ÉUË\u001aÉënÉ?ð¸»\u0007å¬¨¯\fØÇB/vT\u0001¾['\"\u000bV\u0018\n.~*R\u000f(GÌ?^ðÚ±\u0007Wë\u001dU[êdT\u0007S² lÓyJ§Ê(x[ùëo) ØóQèôYÃòMï'Ê\u0003\u0007\rQÒ|=Úd'\r\u001cC»Z9ñÍ_2~u.¤¯P4ØêSØ\u00100eDþ+f8^ú\u000f<­\u0006L\u001a\r\u00030søÁP¤(Kd\u0013V\u0013é\u0003\u0001g¬AQ¬FöõOºr\u0018¥S¾\u0003ÔaÏÒÀîd?\u001bì\u000e\u001fzNÏàø¨×Þl\u0003öÀyÀ \u0016\u0002Òé\u001ak\u0011'/*Ù°Vá·ÜùEâÅ>l¡å©Íì¿¿v ÆºÊ& AùV\u0018\u001cùúFåÚ6\u000b'¦©\bÀ\u000e«LÊö7ß?ÉÝâ]\u0018Æ®¤8\u001bP\u0001J0~fq×PMérñ\u000e\u0016\u0016à\u0002¾»ý\u001dGäÕ\u0002ìóó\u000bPÛA\u0019ÖÌb¢uÈå­ìj³ó>üvòÊÍð|\u0015¦b\u000e\u001e¯+øN\u000eNèðì)ùx\u001bb(ÆIã)ìHó\u0016ü½lTÿx³5\u0003áËU\u001bµdH.§úÂ{\u0002\u000eäÂSÐ±\u0018R4\u001aøBíj´\u0013_\u0007¿\"F³®ê<®Ó¨®´ÜÝ\u0004QQ8þàÀÎÜ¼é¾Z\u00037ÃYAd_ÀU¢j\u0011·Lr'\u0011o{­Åä§²X\u001a++\u0017âTÔÞ\u00022R\bîßÐ\u0007o\u0010\"ÚÇY36(¿Gh\u001e¤Rÿ\t¾TäòKS\u0004.`iq\u0010È-OqáÁ~¯^ É<\náÆG¯{2%!á¢¢ý!õ·lbm©\u0007÷3r'bD\u001fF\u0014ûa èªJGCÌZ\u0018\u0016D¼Rj\u0000*ÄDiô\u0006Ê8ý¤:\u0015¸¦Ú¶®H2FÙ¤±0*Ï:ÿ4\"RûÉÔðÙ÷\u0003µXR»ÀÙF;-Ù\u00114\u0015\u000b\u0006$?°)´£\u0017\bf\"Kä­\u0012Ç\u0001O\u001aqçÇµE[\u001dU\u001d\u0005V6ü.ô\"*©7ù_{»|Üe\u0017½ÈÙÔ\u000bº\u001b\fjcÛý+¼ÿ1-\u001c>ðøcDõ{­5(Ò?ÏØ,\u0016\u0004*ÞK;kð-\u001eBã<ßúî}%ÔzÌ\u0011ùéµS9\u000eçG\u000e©g¤j:Å £ø\bÂæÑÓt\"Ö\u0017£Ø\u000b;\u001fî0¹\u0019\u0019Éæº«lä°ÛU$¨È\u0005N?~£\u0004;@îZõ¶\u000bC5xù`\rs9ÆËjÜìÆÆ¼;7[lõ{ÏQ$y{\u00042äA\u0003Vì©ø<¿<{\n½Û,Éý_}ê.Ë9\u0005£¯÷¨ÙÝ\bà$AÒa\u0003Õ¬Hßí\u00045Z2F[yR\u0002}\u0006¸&7=_#Ia ì¤\nhC~¶ÏG«@Á(\u0004gÛl\u000b!_æ\u001bf4ÅÞ\u000eb\tg\u0016\u0012o\u0010ªÌõ,~õ¥Õ¨È¢!\u0010\n\"àpK\\ªu\u0002Òñ{\u0000Ì\u001fi%$­jF4r®\u0011ûHê\u000f\u001c·ÖÒzI¿q¤Ù2F¯É\u0014Ð0Mõi°7½a.¸xæ²Þ7;±\u0011¯½\u001e\u0017Ä\u0000µè\u0019Ùz\u000fÞ^³¯ª\u0017_,Þbõ¼Ã\u0005k?ËÜµS\u0005\ba\f\u0017%.ÿ»\u0019S·Z,ÉYß-,W#1)ë^ÏÃå.P©°³Èm$ä\"¿ð;\\þÔwq'p(f=´Ã²ÿ³iir\u0011\u0001\u001d6©àæw\u0007Ã\u0015\fØ+ÝÉíÅ¥ê\u0011#¬jë¡°ýÞ´°@/L\u0013*øôrJ\u0002Þ(cì\u000fÛ\u0003¯Ö^\u001e\u001e\bø\u001aÜUærzÔ2ÚÉ9#9µÑW\rk\u0010Ìþ×}[®^Á·J\ftÁªîµÙ¡ô\u0007/F§\u001fÐ(«¿à\u0007nKaÔ\u001b¨m],ãíYtÌ¯\u001eþà¬åÏMýùºxsm/;Ô\u001eIç\u0015áB ¦æhæ \u001a/ºMÝ\u0004p¼°ó%¶\u001a\u0007¢9iÎVú·¡'«Ú/Bï÷Á§år\u0002 AÁ\u0004\u0011\u001aWüÚÞû`ß\u001d\u0006·ì\u0007½áÜ¢\u000f=±ç\u0014-\u0003Fæ\u001e'Í\u0007À&¥È\bÇÛÈZ\u0018­\u0004:J\"_ÈÉSö ]¼\u0014A÷XH/ú5~?I6\u0003Ê!*W\u0014\fARÔ,ª_\u0010nàëVF\u001d\"Ä\u0000ìg\u001cö\u0007:AJõKæã/øzÚrCê³C\bj\r\u0003º®%Þ?ÅP{&¼étè#G0Hü¬l+ãzÝø+%Ì¸s¼÷\u000fmõSX²ÏÑ\u000fC+ÃqóôFX±\u001fe¨ÆóvLMôcªÐÇHMò¤¿f^\u0005x0\u0019c*æhj }Þ¹\u001f}És\u0007trRÙõì(\\0ÖO3v<4\u0011HhÇ<ú&ASÈPÅfò7TI@®Ñ£¼\nï\u000eJã\u001beü\u0011]BX0©ì0úÃ5Á¿\u0014 ªçØZ\u0014ç¿:ÿMtvçÿú&8Q3\n<.$Ô}Ú§\u0019EE,¿Ú\u001530s\u000bêÊ?Þ\u0003©í#VÄ\u000býP\u0001Ø/n\u0015Â4ÃÉ¸´sC÷m}ïYæ(¡\u0000úÝS;mÖÛ\u0010Þ£\\\u00120\u001bBÆ0\u0005\n7ÁÀ¬:\u0011\\A\u0015Ãî8tv cfW©@Ïma-\u000e¡.õã\bq\u0019ù±ÝÅÈËåPÂÜAYÊ#ÏÖzÑ¡feuÞªåá\r°ôM+\u001c÷bó3#Ú\u001b0ªÍ:¹%|xE²!TüÀGW\"\u0001r­êâ\u0012\u0015õ±0}Ê\u000bkMN½îÂDýNU(pª\b?eÚ¼>\u001eîÁ\u0007à\u0019Êz\u0017Ø´3»We\u0018?E5n\u001a\u0013÷Ö0#6\"9ËðâkÜ>\u0003â\u000e'Û*lt\t' öíõg¢,±yµÔ¦\t®õaì½©;×Ð´\u0015>\u000b\u001fPÞ}ÇñP)\u000fR*Í½\u0000]¦\u0012äkÍwÅÐÌã!O§\u00067ì^\u0006°ôJ¡ÇÉíÞ5þ¬Þaç«¡w¦²h\u001b!ª93¼\u001c§\u0010[2Pî.þcAÜú3ø?;R´|YØ«<µóºSr÷UpÊI+Eywj]\u000f\fØ³u$É-\u0002ñ¿X\u001a#eya\rá#wð9ã¾b·¨~\u000bb\t``\u000ex\u0013¥ º\u001cì÷&$b&Q?a÷ÇfîÂèx²yòQPWBÅV´sî\u000fBâüªt)@C\u0017\u0006<ûu¡\u001dË(«Ç!¸ò-¦\u001b¥\u001f2áºáÄ}WÅÿ\u0010\u0000uM`wsÒ\u0002xg\u0013\rðu6'0ºª%¢Ãô:HªYQ·eo\u0012ìÿ­ß$r\u001f0Ì2[^D?2ïÙÝ\u001dÏõÑ\\y\u0007îz¯\u000eü©Ô\u000eå:\"ðã¤fdG©¾Ü½Vx,F9y\n\u000eQ\u001e¹\u001fú0&\u0012 <mÐô\u0016v«¯?]Ã~_û¸*Ú<$áÂ\u0018\u0015\u000fh\"n¼\u0005ý¦æ\u0018O|rá\u0002\b¶\u00076¨XÃrªª:DbèOòù\u0018@Eo5ÔülÍ¦Z\u0004»N\u0011\u001d0aºÔ\u0012(­dVm\u0011\u000bÙ>î×ÖW\u0002NiZv¾3aóºP½\u0019Øßmý*\u0007\u000f©\fî´>¿P¡Ýù5µ\u0013Ç\u0000ç\u0005\r\u001cÃ\r°jîêÑÖ!\t,²]SÊÓ\rþ÷y°¡\u0017\u000bqèØÑßB\u0012C®Ô.\u0015þÇ\u001f\u00192È »S¸\u000fÐPI&.\u001eB¯yÓ\u0003¸OÑ&÷\u0003h¤¹K\fêÏ§¼þê!ð}BÉúþ ¦RØ\u0011\u001dJ¹pÀÎ \u0011$îðToÃàjê\u001e\u001e,ep\u000fI6Ò%\u0002\u001cUB\b;ª\u0016\u0016\b,¿`,£Wß<ôqµÕÂK­\u001a^ÌK'r5©Í«Qó°·½!2q0¨?ª¥fýÎ@]*\"îu3ç\nM«£GÏ°\u000e\u0016¼³oÔÿ¤\b#ýËÉ8çC.¹ümí· \rat\u0000-}>¸3j×Ñðxf6<1C\u000e\u0015dûy\u0007A\u001c\u0002Ò\u001aq-t?\b\u000fU \u001bÝÚlXÓÕÅîå\u001dºÓCì­.`A¨?°?hß'ÈnY7Rö¹_Í$aÕ\\~éO\u0002`ùwÆ.\u0018ljN$à;k_\u000bÀÇÿ>`('Y7ÿ\u0006BËo£`¦tèµ¼æ\u0012ÆtíBV\u0000ÙZ´3°îZNA£\u0010Î7Ì\"þTË\u0005u±Ø'­\u0011<t\u0000ü\u0016÷s®ÂÁ\u0014,h\u0000Ü:Æ`Ù\u0004áËEZdSÆX#¤KÇ[é«T¹å2\u001e¤-û\u00172\b4K\nµK±þ×\u0011`ÏÀ-À#\u0016-Â\u0014Â. y¦¦\u0015©n÷ê£\u0007WB\u001f\u0005öi±qÙ]æ9g\u001e\u0011\u0003÷°ë\n7\u0004«Å:;D\f2ÀÐÊvC&ßU\u000eb¯ÝÀ)£\u000eÓ\u000f}-,\u0006g\u0002{ur\"pÖ\u0012\u0010|Vl\u0001\u0010tòØôî~\u001bæ{'Y\u001e\u0019¤ÇÅª¿\u0012ú}Ó\u001aË¨\u0017od>4\r×MÜ1\u000e>\u0014\u0000Fª0ì]Þ\u0003ïÓÜA\u0019ªéhWtá»2©V\f{JTdjÇí\u0011Ìlê¬í×\\#ºÜcÚüé«úÁW@k£³`óæì¦ê\u0018zu+i_z\u001bÅ·~DÀ\u001c+\u000bÀÄ«*õÛ°)å'Ö×$[\fiÍ\r¥\u0014¤¤#¿Z\u0002\t/\t8\u001aÝNH\u0002\u0003àùóô¬¨K£p¦\u0005í>EL\"eGª\u0005+®\u000f&É\t*Q_þýC¨á¡ö\u0017çù\fSDÂ\u001fÍû:în\u001dz§ÎÜ$ÄZ\u0006ÈRæOB2rËz¸O+å5òuXP\u0015\u0017WsaÇIJ+\tx3±\u00068±\u0019wô©Ä.\u0006\tâm)òS\u0013Ø¾=(¶­³'ò\u0005W§Ð\u001f\tl»ÕÊïðÈ.\u0013|¥h\u000eé\u001b§iôU¬»§Ëf\u0007'j\u001fã_Ç¹Ôâ\u000bñ£¼\u0012S£9~×É\b1ÔíBÜÒ\u0006±\u0000\u001f1+>ª¾cQå¤µ_\b\u0019\u001cPD¡7©dºf³O/ï\u001b^)ÓÿOÌÐÒª\u0001T¡¶öiåÿÂ^¦|?·G%c\rU\\\u0015\u001f\u0014õpÉñ\u0019#§+f\fÆô9[$\u000b\u000bßh·®ªÜU\u000eW$M\u0010.ó'Õ9Êr2y¤6Z¾5\u0001\bäù¥êg¨§M !\u0016\r\u0002¹µ\t|©YëP)u/\\ýêÒ¬5o\u0016è`³RR!gèGaµÏd\u0006ìª\n!°\u0018\t\u001a½\u0017b¥Î¹S+¶;\bIÓ°îq¬UÚ[\u0001¸\u001cOu©\u0013~ÌãQr>w?¸lÛINÅyÆm3¿$µá\bãl§JÑÕ:\u0011,s½¥8î±\r#\"ÛÜ5«S\u00031í¢\u001c´i=÷¼ØÓÃñê2í\u0013Ü´ë®äd Øäü\u0007ç[´TMT:QWE½.\u0012d\u0004<½¦X\u0006ó/ë\u00145Æ\u000eÅ¾Ûía(láÌkÆ©\u0014ybã­ßscÊFà\"W¢ì/Yø\u0005|4\u001d\u0015S­cò:fã~Æ0Û\u0018ä%0ÌnÄc\u001aDôÃÀ'¶F[î!v¶¦\u0010JB~ÕêNò\u0011k0ßn·*\u0003*>ô]Ótý\u001bAëhÌL\u001bN±Öø4³Ð\b4ç\u0017Í×ºµ5õK­|\nçîÙÎÔEù2Ã±SP};>ÓG.©ÏýW;Pê´²  (UÚMÎo)H¸ÓÊp\u0018ê_È¼nXç(+ùz\u0010]3Azú3¯¡Q\u0012e9ùe\u0004Â>!1\u0004^T\u0004bW¸ø\u0014¯CÄ*@ÿ¦Yt)e¢I\u0019«\u000b´\u0002º\u000e\u0015é,ó}Z\u0006f\u0015#¸1o¶hÁv2\u0016ÅYqygr¥(\")Qú\u001dQòt/î\u0012Äw¬Kð¾/<y¦3¡èËè¢\u0010°\u000eæ\u000bbÇ±9[ýo\\s}voE8Ü eCë¥æ\u0015à¥'8·gWÁ]e\u0003©ò)Jg4\t)ÛË\\ä·Ï\f\u0005]-\u0012DkÂf£ D<\u0000|ÞÒ\u0014#:t2§Ú¤2ù\u0014W\u0003b'MêÓùéwÔÁØ=î4\u0018JÁq7\rS\u0013\rÍ\u001et©½\u0011±¬Å~é-ÊQeUoç\u0006 Õ³`(TAê\u001e{®ÅâñpÂÁXy9 3²¡µÙ\u001fÔ½¹\u0018Ý/\fw\u0013ÆÍ:7¢#\\ß¹ÓdéÇ\u0019§÷ ?p{\"ú×¤e8\u001f^ldè\\a\u0013X\u001aÃA¦$\u001aÒ\u001aeUjÊÖª\u0010oy·M)&ìðïØ\b§%}æ'(?-!\u0014Ý\ftwÁ¶\u0018çôÈz(¿\u0002ñÐä&ð\u0007<·\u0010Ia£ÃVìÀ¡ä¯¾)0ýNáZ\u000b9\b£u²Ú¹rÔê\u0016Ð¯\f\u001aA\u001bÍÁº\r\u001fÕÏç%\fá£æoÐ@V\u0010Þ·¿ìqý\b T7~³®\n%×Ø<3lE)î¤Þ¿6W\u0001\u001ekùîôº<æx\\CÎi[KÆÒ-eÆ\u001bCªØ\u001aYc[wíyWZ_\u0014GþE^¢É2%KQßG%ó¢\u001d\u0004fÒåsµ¦0Î`8A«W×Dë£ÔþýÇ6ÎØÙQËþ\u0003Bù\u0004É®zK\u00021\u0018\u0006F\u000ekºÿ/<\u0017¥\u0018K´T§ÔäÏÐãkY<Û#S\u001f%S?Nòe¾½MÍT/Àbõ¸ÉiÛJvqiZø{Èµc\t nÜ\u0007¶y³ø\u0017)h\u0016÷ÿ\u0013B,ú\u0018c Q(OÚ(¶+\u001eS 4ègË½V!\u001d\u0001ï!ö@©'Zsy\u0001qn­ZþW:fÀß¨©¬±.*3!j\u001dH±èêô¯g\u001bÒ¶T;MóoÌà<JõÕ»¶X<\u0015¿\u00149\u000b\u001e`Å[s[vP#\\>K\u001bAmÓÒ*Jp±\u0005dH\u0019ùYáu²¯ÎJt\u0002¿yç$½u¼AÒ3Á\u001dÀÉÐ\u001c7\u000bVBì(Gh×ÊÁß£ºLí<ðè±É·Î}¥\u0019t¬øiiñÄáÌ(\u001a&ÿÓ!:ú1\u0014æ+pz;WW\u0014\u001eB\u001cC¬ûû\r0þ\u0002¹¶\u001aØ\u0016Iº\u00051-Û1&P?\u00009\u0001·\u0015Ïkx7}ºÿ´Ç%Jçv\u0001åh\u0012\u0011{OH\u000eÕìi¦¸-kõÅpU*#<C½\fÔÖü=¬ï\rN§|÷ ,Sç·\u000bºlÓq \u000f¥Ikf\u0001÷¶-8È\u0006\u0015ð\u0017¶°£OÒnEë\u0004jY\u0004ÿ_|-\u0014¦£áÝÖ\bºá_t\u0017â&dÒzõ\u001b^ói¾\u001d\t\t7}î¦F¸f©\u001d·\u001c@¬Å{A½\u0003Ç êãÿÝz²VÄgT¿\u001b\u001f-b/\n\u0000ÉBÎÙ\baU³è±0\u0000\u001b/úÆSÊh\u001dîÿoßeNé\u00141Ç¥.æùKÜ1ýÝT\u0002\u0016\bÖ}ØâÕà\u001am\fºòí/fÂG2(ÏqÐ·ôyE(Æ\u0007_á /ä|ÛCgB1C\u000fý\u000f\t]úR\nÿøË\tÎ÷¢°\u000fr:óËÍ¨iø6V%7\rNZ,ÑXT«µÀéO¿Ñp\"Í«Á+÷ÙìõY¹u°5¥B££\bì\bê^3þ\u001cÇB7gZbºÔ=rê6±§ÝÞm\u001e*Ø&â±¡Ó\u0016äqe\bj\u000b1\rdÿ5$b~-~I1AC4æ\u0015Þ¡æ`ÅQî´ÒÝèú\u000bÁN(ñ)Þ]Jq\\·*ª3¶æº\u0013l4¥MfNcÏxÊ§\u0005ÎÈXX×\u001dÌ\u0000|\u0011\u0000cü ¿\f\u0017ðçSUI·[£\u0005s(E\u0013L\u0015\u0006Æ¯kä¡#\u001dg\n¢ßpÍ\u0007÷ØRA_ûÞu+\u000b\u0011gÉP%&j¼þÀPxPO\u0016Ð\u0014\u000fÈýc&ßRªõí\u0015>¡kåßë\u000bWP¬´ªÔqÇY°®Î³\u0017\u0016KÀç\u001c7;;  ØÝà¼S\u0017}µ\u0001>Åå\u0007G\u001aãÝ³Ëa}½½ðz8ök±\rÀªKGÉÏ[óue'0;K#:pK¥ªÕDø\u0005ÙKÞ¬i,ëëtÇ$­h\n´ Z3äg\u001e)[ÈÛ²BùMï©ÁwcüÇð÷_çßV[=\u0016y«À_{\u000edpièüLW\u0010x§a\u0004päÝª0ÙB\u001bÆ}±\u0005îRâX^Ò»td¯\u0015»®¥\u0017r51_õûÓ\u0001¤ª3JÎsxgÙ\u000e@÷(¶wj\u0018p'¥¦\u0014\u0011Â T$Ü<\u0016C&[øåçð<Xö%®ë§á\u0015\u001a}F\u0019fÓ\u001cå4\u0003VÀ~¨õÌcrV9¢®Ö²Lâä\b«`aõÒr¾~\u0001¯ ÿÊðTU¸\u0010!£Qßp¿¯u$RöÏ\r(c£R¹nF¯\u0002,PÈq/9,}\nÛwË2³#=?\u0005\u0018}Ñ\u0003\u0003ê\"Ãclj1\"\u0014s®Òg{\b(°\u0011×2} â'l<¸!Û\u0003ª³Ë\u0015[è \f4Há\u0011¿Ù²7^\u00189r;]Úìã}÷:ÌêO¬;¦çO°tö\u0016I$½\u00129ª\u001dhA\rWR²á§Î{ÎwïI»hí\u0019úÍ\u0019q\u001a÷zcm7®Ø¨\u001aàæ³¨÷JI\u001cKÎä-=mÑ©\"á@cîq:ûî\u0001\u000f\u0000~IkFY\n:wùj¥ôßïéå.îZ'ÉÖ\u0000®O\\\u0003\u0014:°Sì¢c\tì*R$\\Fn\u0003,a OÅ¬à\u000e±0\u0006éÀ%Mç\u0005Ï\u0000o´DL{sôË^¼#B0\u0013\u000b.âáZ,*_¸\u0007WßÁÐ+\u001dX2Z\u0004:\u001cï#ÿ\u000e\u0018ÐÔT$Ë¶ö5Yß8*8ù$k2üp\u001e\u000fF7´¢¼¢^Æ©¦ IüVRÅ.ËI5E©VéD×ÙG8S8j:\u0006\u00122ÑÖ'ûbxZ\u0003\u001eÈTÑ\f¤Ó%È!_áù¼Ã*ÿ¹R¼\u000eÇì§Ü\u001ajÞæz\u0010\u0000\u001fBí»ËÚGß2î\u0014\u001eðs\u0018u&á\u000fóöthQèY>\u001e+æ¥VPLß!×ñ\tI&\u0003lX§Û}\u001eA_ÊuØ{õ\"¯XR429ð2)\u0006|¬Þ.\u0010ôH âs\u0016Æ\u0019Õ¡ý,Ê¸O\u000fÿ3\u0002.ëÅpèÌ\bÚù·²¯Ñ\bßìR.ÂÁd\tH`Â&¿ìî¾\u0000bK\u0018\u0003òà \u000bµ=\u0004\u001a(í\u00058m\u0010\u000f#\u0004òÖ\fÉªø\u0001E\u0018Êçv\u0003ðÏC\u0013í\u0011Ý Ê]\u000bâO\u00198ò5»\u0007ÓÞyÚ4ßÆ§%·ôèéÓ=\u0007Ór®2\fÙöù65£ãp4eÿµ9ÔÐÖíy`üâ\u0019È®âÇ5ÀLí\u000flØÁý\u0012Ôhü\u0000tbü+µýâBbÉ\u0010T\u001e)ÄÑË\u000eQ8¤+ªhÈ\u0001\u0011\t\u0003\u0017\u0005\u001a&+±+Od,ÄL\t\u0012 û§ÜÔ\u0016¤/dùä°Âg]F5\u0019>Ûi4_4æâk\n#G9r°éë\u0015 B\r\u0004ì,\u0001Ê\u0013%\u0002)lËK¾q#Ûui§Ì]:\u000b£Óabt\u0018X3RüöêÄA±@]!±~ayQ\u0012¸âä\u0007NÕ).ÆÅÓNLòä<dL\u0019w5ºÚ^\u001d>Wb³ß@I³Òv\u001e\u0014\u0004Oý\u001d\u001f\u0011¥dÇÄ5í\u0010\u0004wö&AÆDZ¾«ÞÉ_5\u0002\u0000¹é|\u001f\u0016ùV¡/II\u0004,\u001eßÿ\u0000º\u000e4ó»ÝÈð\u00125\u0019fW±B¹PK¡Kqw ~ÈÛöÍàM»jh\u0007v`êFW-X/\u001dÖCÔÈÇ%¼j ÅãU¦Î÷¡§|£\u0000ÿø\u001dÜý=u\u001c|½õØù\u001f\u0007òy\u001biéîÎ\u001dEMkaËöÂ\u0014EZj®öZU1PÝ\u001eÀ*:­¨¼Å%¹\u0000\u0005\u001aÃÅàûâáA\u000bòËãLw¦óÓÓ·ð.\u0006¢f5úÏ~\u0003\u0007ØÂò-\u0001ù¡dÈ»\u000bJ\\ÞyY\u0011\u000eÊ­6AÒZä\u0005è|1\u0000;°}Ì/\u0019\u0018åd0ª-º\u0002%°\f&;¡9\u001fÜµ\nUZ\nL&uÒ1ÌumôÀyH¿Ö'ñ\t¤òw\u001fÊ¹ãå\u001e~¡\u0017c?_¯ËÄ\u0013 OÁx.p\t#ø¼jcî\u000bkc\u0019îÉf\rKBFW0¼Ê«¹\u0012ÿ7æZ\u0011/\u0003itjÈ¨«_gÓ­oÊË8\u001câ¿.pôl¦8Þ»  ètÇí'\u0010ÊÓ©1Tá;\u0013hª¯¡DÖ5éså\u0019\u0002A-Pp)]ååñª¾HTA\u000fLL +\u000fRfA½Ó\u001a\u0004¡\t\u0010©\u0013{sU0ò\u001e¼ú·ÀU\u0002¯ËpX@zÈR«\r}\u0005Õm\u0012\f2¢\u000e\u000b7\u0016¨Ó\u001d-®yô\u000b<<þ¨|ký°thEa!Aãà\u001f\u0004êEÀ\u0000¼ûj\u00042h@©\"úõEï4åÞ¤ËCspd\u001eª\u001e ^Ï \u001cr7\u0007êy\u0003\u001eÖ\u0002: ¾éU-£cjsçáò\rì¨C\u000e«OÖ[Ü_Ì¶Æ^of\u000eË­aq~(\u00100¤ð x¤\u0003ñÇF\u0001xfº°Ð\b])úè2eÎ4ê.éjolÔ\\âsªùÛslÿëdq`Àø\tÝ\u001f\u000eÐ OzñèÁÖVÝ«\u0010~\u0006A©\rêy5²SÊr\u0002ÇTÞ°Jåó%ç{\u001a»X¦+ùç\\\u0015p!é¬àb¸/?ÛÈT8©îI«ãe\bQVÞ®\u0019ó~Sþ½\u001a\u0000\u00026\u0014$Ro>3M\u001du®vd¸·úüpK¸ %ógb)-ùp\\_øvâ²ph\u0004_\n9ºu<N?{3ö×\u0003ò#óv\u000b|\rD\u0012ýhyáv­Å(\u0013ëåc\nXg\r\u000e'ÐQ\u000bý¾Ü2J<îñÿR!m\u0017ÃÀÌ?ã\tÍ(s«0@Uù¬9ªíxï\u0003!^hè~¾ÝR\u0007\fÊP ½\u001aa×&nð5ÝLpõ[æ\u001fNLUJý\u0018ò)Ë·oÒJ\u0001R*Ì9®Ç\\Ít§ù,Aá\t«\u0010r;8eQ21m'ÙÁ6+ú&|¤¸cù\u0019åËw2¨éeÚ§\u0012UfÎ÷\u0011s×ÆÖóÐ\u00010J×\u0003¤Ý\u0005Þ ÜN@\u001aUuß\r:è\u0007{\u001bÏ,v\u001dbH\u0006ÓI7l]Uý§\u0015½ã¦ ø@Ò&r\u0006á1U\b$\u0014²\u0005Ã+;¨k{y]=çÕ\u000bü D­*º`%u«a\u0000\u001e\u00113ÿE|­.×\u0018c&=T/h£Q\u000f$ KÎÿ\u00165\u001cà¸@¦%rH¿xv·N}¯àC3´Ç{\u0007 \u0004LlE\u0010=òîw\u0005ã·Ç|\"w\"1Ú\u0019îLgðÓzf7\u001d©B\u0000]ÿdÈkiÇå7°iÕ[uyf?â?F_>\u001dk`\tºY´Ú1Ü\u0010H\u0015Æx\u0017ÏÉ0Ã:íªÚ?\fã»Õ\u000eE»`\u001bD^7ö¹\fêA\u001aßâ\r(\u0011µ!\u000fvôÅ%çè7¬=ú÷Ì\u0004;*WøÍ\u0001·ö\u0017:y3ùòð5÷¾ÂõÀ1îä½ê ©-ôh òJ#«ËR©?¦¢\u0010ÈèÍä\u0001·S´xö\u0017Ðiá!Äï£\u0013KÙúÕ\u0004²Ñ=tÇÛP7Ì÷Él°ÄµW\u001a1h¬\\ô\u001acû¨\u0001SÐËÇàà>N½Ø¯£Oä,@\u001adÉa\f%Û`õ¹Whp&ÅñcKà>q\"³½`Q#\bVéØÍLoFþ \u0003\u0001)LZGÉsPàö\nÄ\u0005ó [ê\u0013©<\u001c¼A`t'­\u001d+*Dà{\u0015\u001aZÑïô3lÉÑàîï­QSßùI¢­½çx91CpopÂ/¦Òº÷±á\u00065n÷±\u0003L\u0013\u0002Öqe½¬\bÝH3Ú-ÊâP½®ßÃ¢±\r3un\\m $=f^\u0013\u000f4tNWxÆóàT`!¸G\u0019T_o\u001f¬Ö!\u0001¾Y\b\fô¶K¬Hÿá gáo©¾\u0015&®¥§sÂú\u0000\u0012ásçÅ@\u0007À#Òò¾\n\r,ýVS±Z+*Fun!3ÆÚîÏ?=ú?Æ«fH9\u0005ú#SåÄÝrMND µíÎà%\u0012\n\u001a \n² ô¿¹\u0014\u0018nëõEP\u0000Û@\u0015\u00022j\bÒ.·Þ9¥!\u001eÎ÷ù\u0013ýÙ+ÊÆ\u00197Ó50*h\u0001ËÏ\u0002>á±R÷½WT°\u0000\u0000\r\u0016üO\f(ê\u001fÅµ+\u000eSk8\u0018¤ÁH\u0013\u0012·sC2=-?+úØþ¥ôÅL|[_wa 7à3S\u0010Yõ\u0019Ù-ûYRø§\u001dP¶I­\u0014·ñ¯9Ý>Ä\u00124\u0004è·9ÄS^®\u0005·tÊWÝ,AºðèÿCñ\u0010Fýò,ÁêKã0éÂxcv*æ'àáþ\"\r\u001cYÙsÎi[²ÿ\u0006è¶o7\u0019èÌz~AñE\u0010e¶ÙØ( f}ÁiõÖ¨\u0012\u001dÝvËD]ÀÁ\u0001\u000f{\u0018\u0003ÍåM6-V\u000fäj¢Ñ%j x\u0017BéÀà@U©fæú3ð\u0016k\u000fÍ°Å\r×ãpyÕ/:éÄ(.\t=ólNÑrß/m\u0014| c[ÒXNp>ýðc§IAÞ\u001eD\u001f?ÇóEº\u001bvOm°\u001cy\f\n\tPÏ=aÔ12thý$f¨Ës4tQ\u0005iÒeó³í¾ Ùò%ÐrµÈ¡\u001d´Å3+o3ß6$â\u001aJ\u001d%\u0017qGFE=êô9`'Â:­ûú\u001b2cùÝx`ÿÏ§®sú32ÍÞkÞ\u0010È,¹ØLå :ôÜ\u001f©ìx­`d)cÚAÊå\u0002\u0001zÒ4jT¿÷2MÜZ5Çf\u0016GÛxX\u0017yTîªc\u001eË\u0001ÃS#&Y¦vÆV\r®`ô\u0011¹}ð&J}Èø3\u0019ud5ÛÀ±·ýö \u000e\u0019£(o.ØÆLjt#i\"\u0019ÒÓ\nÃ\u0013ÑÀÝd¼\u0007\u0007Ý-ÿ+¬ð¹ws\u001fÔéQö[\u0012Ò&j5»íÑöã<Ö\u0006¥ØÖ~n\\(éâ=0åâd¥ù6¿Ù*\u001eåãq`ÿ/Ï4|ÝRàÇÔýW.@m§ÕÊn'½¶\\RèÏ¾¶Ê\u000bF³ëQmª0hªÅ\u0000R]q'µàí5¸SÂ4¥!~óØrüý²ÈÝö6G9Ï¼óå\u001b2¾£=ß\u0012LoBóp\u0003ïh\u0010T[ÐsÚÍºù3.T=^0ñ¬Ï!ðíFÊA¢\u001d\fa;_S8¡ÞÙ\u0011ï-­=\u0001YË\"/\u0012)Jì\r8¹&\u000f¯YÊV+£_ýT²n5*öwkî3KK~:\u0005u\u0011 ²ámêhú¦*qaV\n7úd1U\u0003\u001dºE\\¨æq?\u0002(¢\u001burJ©ùdE\u0017++\u001cMÚ¤Ýeð&\u001bv\n0\u001c\u0000\u0006Z0ö:µ*\u0012ûÓ_¢KVãg\u001c¹ú\u0018 ëéZ)Â©\u0007\u001aYü\u0011bðñW¹\rãf½é\u0006¢´Ýæõ}$ø\u0003¸ÍÏniÎ?HqpænÑøÑéÎÙXQ'AõËÁògq¦I&´rÿd£¶¡ÃIø\u001cM¯ï\u000bì¦oW¼ôT¶ÖÓÔÐëú¢¸xK66ÅsÊMé¡Å\u0005^¸ä\b5\u0007£ãúÕCTó<²(^·\u0014 ©¾*\u0007ñûËíÛêéÊ%Weh(çÀ0\u000fà\u0012Îóæd`¡m\rÁ\u00005pL¡e7j¨Ò©Ùâ>ª\u001dB\u0019jøgWA%ý¯ò+ÃÂnÊ\u0013¤nÒ\u001ee\u001c¦ÞôÞ\\âóQ¦\u0003´`'Â³%\u0007óÒ\u0007û\u0005\u001d\rà¼§\u001d¾µ·\u0000Ò u¶øY»RIkú\u001fèG%Nüøé\"@Lw\u0016KîLøñX62\u0002àN¡ø¸{3\\¢yâLáô4o\t\u000f|6Ë&¸Í ß¬>îú\fÊZü:âB>\u0004Ñ¾s^Ç?\u000e2ðZ!ôïañ¸äÊ\u0002¡¦y¹Ãì&B<\u0019¢fIÍ\u0016ß2\nLà´\u0018\u0004µ\u0007ð\u001f¬åÝÿí\u001f^æ¾Xv\b<ÓL×i·Ö^é·O¯]Ú¢¼#\u000eº\u0006/\u001c\u001eûÄ§\t]¼mË\u0001Úà\u001dc[\nvØ\"Ü\u0003\u0006{=ËàÌÉÄ[RpN#ç¦ìlç5%¯bm\u0000\r,f´Íòù\u0014ÚäÚÕõ\u0013ªÑ¿O9·ë,RCÏ×\u001e¨záîÙ\u0014\u001d }ºL3¸ÝZ¥\n\u0018Ss\tq[¿úùß@Ø]&³N#?¹ñìÂA\\AP\u001fjÆA]ý7a\u0002Þîýùù\nÕä§¨¬w|tß\u0015Ü\"lç\u001f5\r\\Û[Ú§YB\u0007 a4Ö1ÖÿÎeOÓªüÙ¬¸õ<øÀÌõ^\u0003;\u0005\u0003æyLçñÀñ\u0003r(R\bt4.>L\u0014Þ|ýz#ÖI<x{Íô\u0018<\b\u000eRk`\u00149W$ê;^\u0010\u0019L\u0011âJmO\u001e¢\u0005z äÕÉêÜ1{ê×\u0014\u001e_³àEèçY±~ñú(9¿ÿ«\u0006\u0007E`:¾PÅ#£\u0013´\u001døÎH'J9þ\u0018%R©2Ý\u0005×c±Ú\u0005ëüå1o4¡\u0005.SC»Õ­:\f»ÁÃØ\u0011µX«°ü\\v\t±X}õ½6\u000b¾ZÌÑ÷<HÏµÊÄ% ÅÛ¬}`¡=T= ±XC}7Ü=;ÚÉkú©Å7\f¢o+yI\u0005Õ¯eë&¶1gï!\u001f½tÈ|¶\u001cG\u0017\u0017ÖÕzÄâ\u0013`è\tyû\u0007,\u001b}iéø)+½UÈ.¨$\u0002\t\u001eW^²{éÄj]zf¸\u00171ïÃìt#\u001d\u001eÒE\u000f£wi&\u0004\u0015v_'%ÊbäðÏ|yåâ#ëê$\u0015¬8\fr5UIþß\u001eiÈïT£ºÙm±'¿E$RQ\u000e9ç9àÖDºUNu9ÿPìûz'ô;à&\"LHT\rðâ¬Ëùfü\u00174Qe4è#[ÎuS*¤B6ãÒ]?j@¯Ò7:±é(ßO\u0002rKãsò]ÎlXSGÑ\u001da·»àßí*¶ÀfCf\u0018ß3\fRQð|Ì ¹\u001c¦²­7C^WÞ«\u0013Ë\u001f\u0004£pò;\u0015¹\u0019þ9á¬ÈÜN\u001a\u000ba´>M¸Õo¼&;é¬\u001a\u001cT\f\\sµï?¨ý{MÕAÂm¢¥)[\u001fmd²ÌùPVY\u000b ^Äy³Ó\tc\u0005ßÏ\u00022\u001b1¾«t \u0014A\u0011)Ïsf²Ò^ý|Ü{Åþn¢]èVw¸i%þge\u0004¶N§¥W\u0016ß\u0005z`ÄM\u0011b¾¾wê\u001b2\u001f*gúCFã$2Q^ü§ð1É6NÇ^°ÜzxÐgéÍ\u0019ÜxÙm¦\u0012iL*AUðB½Ôµ°ðÛTÃ\f,#\u001ca\u0001ã~P%%|`\u0016®e$OwrÌõü&¼\u001eâa)È\fbüUÞ*\u0014 Mwpº\u0002\u001f9Ñå^­º]¬B®©O'\u0003%\f_\u001bköæ?º¨s%Î°çÊ.Z¡\t³·Ò?zºÒÞ{\u0017\"t^ÇË\u001c·ÆD\u000f»2|Û\u001bmiXD¾´ÉdN\u0006¸6á`ñ}^7¯yä\u001avH\u0010\f.õlñ\u0016§Õ7'uÝôä±\u0002T¹&\u0010WM³Ø$Á1ç½ü¹;\r\u000f9Â­xx.!«4\u0017Ç\u000fô4±¶Ë\bÙ^i÷¿,{èuKc\ngÜïpÞ°ãS\u0014\u0001+\u0000\u0000/\t\u001fWtQr\u0001ÊUn,\"4smº4nÌA\u000fxÅágPuÙQ]Ù²)ÕëtD`zÁRò\u001d\u0019\rþHÊ\r¬°Sü°CÑ¢úÙÆUîÐ?%JÞÚÊçYû¦Ëé,#\u001bóoüª5âÏ1ÞÎ9CT[Á!\f\në×®+øêëy;\u0005,\u0010BæÕ®U°Mh,\n\u0011¥*\u001aPv¬û'\u0015mÓoê|ú\u0005oÎ\u001bDR\u001eJ[ÔµÑ\u0015½ÀzvÐqzÝ×¹ \u001d\b\\fÈ\u0012\u001c\u001d¶öQ¡;¨i\u0000!êAÙ°÷]¢ªkÙâ\u0014ÛQ\u0002v\u0007\\·â¯_$\u000eÒèto`aÁ8\n>Áp\u0018Q%óõè{®BÊ%!ªÜ»5¥ÞéÍÛøOò0ù÷s\"ø\"4\u0004«*¬\f\u001bþ]ª×P\u0018Ï?0!rl\nKÛ*\u000ft[ÑÂÚ\u0001\u0000~^¬ësÿÁ¾ \u0019(Ú3j{Ì@d&¾¼À\u0014¾ØKe\u0003\u0015ª§h\u0004²´T`\"\u001dÄè\u000bö+¿3^\r->ÄT@¯:áôå\u001b\\\u0000¹`îÄÒ[Ï'Ù¾åúº@©¤\u0005ç\u0014\rýêKìÜÜu+ÚtËð\u0003Côt-~&±[¨ôÁÕ>Ï\u0010`Ôôøu×XuÜN}­=MqÐ\u0011ý\"\f¥\u001eæ\u001cÍMî\t¶g¹Þ\u0016nÃËaWZcñ²\r³ëöæ*¡B\u0011¨DÕ\u0000ü3\u0017Ì\u000bX$óé\u001f_PV°Ã{|×S+q6:þõvr«1½~ã\u000f|oÏ÷é\u001e×w\u0003/°Ã\u000b¢)jÓÉ{m\u0010rÊês}\u0007\u0007úò^\u001a\u0011Ù§UºÌ´¦=\"\u0017t5Ñë  ®\rò\u001dÿ\t1QÛÔ1Z\u0000\b\ti¥Uj¥¶þÞ²Ù(É+£®6à55\u001d >\n(\u0013NÊ)z6ÐpôÍö<Í[ñr_º\u001aRïãÏ4©®vg¼dÆZYÞX\u000e\u0005\u0006½×M0*ýy´rnTªßwæ lØ­TGa\n2>Æ_·1ÌjÚNÑ\"Ý\u001b3\tMÕOurN\bDzé\u000fÃðWv\t;|ìÆµÐyãNU7cóc]8v\u001b,M\u0014\"§X:¸böüRÄp\u0015ê^H$ÝF]\u0017M x\u0017è~5È~\u0017{\u001av¾á¸ï7Jø)GÉÉÕ@ \u0018[Â\u0006\u001b9\b8àÓ½\u001cY\u0018çm[ûÁyþØ»o¼\"a¡R£|CÁþm\u000b¸­m£¾ß)d1yÓùìØ/Ñ\u001aäò#\bR'\\^äò¤1ÙÒÉe%ó_9ÂÝ\u0016ûÃè\u0007_ï8þÚ¿U§{cêj\u0001´\rC÷¯½BÝ¯\u0011\u0011b.,àG§ºì5\u0019\nbÇàtöÓ+kLF_0WiOçÅ®¹M[¹Ó°\u0010y¬)ÂÙµÿÄ>\r\u0003R\u0012t=¡?0\u0006í~øÃ¿\u0006\u001e\b³Îæ4¼²4eç§¿7Û:Ôg\u0003üy==p Ü0^@ø&ìÇõâ\u0002æ¤Èí÷mÛ\u000e«v^p(Z£H,ÁÕ\u0013\u000e«ZºÆ1$\u001fSê\u0002¾M\rBÙÉ+ËsP\u0001\u0019F£W\u0015Ñ3í,\fÜÍåÅ¿È\nÑàÓ\n¸\n\u001a2FÀ¾Spîñ¾H|áâ_ÀÙÑ­Fð\u00173W°X \u0018\u000b1Tf[Æç×Ü[)ð\u001fÉ=»L¦\u0017ü\u0002Ò=ìtârB,%\t\u0018ÀÚå;¯\u000eúú¸Ñ>7Ä\u001bCØiÒ\u001e\u000e½ç¨0\u0011Ó\u0001M\u000bù+þ'918ì\u0004mö»==#V*ò/ÑÌ¬H\u0002Ôç¦iNàþ?´ÈzáÓh;Þ;X-ô-KNì·ì®\u0013\u0012U;h[\u000bn¿5\r ©(Xì­\u0005\u001dcwá\u0018\b\\\u0019ß?~\u0015\\ÐGTËý\u0001ýÅ\u0011õ;DÇ\u000fN0F\u00143\u000fóg¨QÈj\u0010/\u000fh\u0013\u0018\u0016¿}\u0014ò9Û\u0017cW£¢Ù\u0001æ\u0006¡9}ù|ï!Ê\u0000»Õö^vkG­é½\u0004^uSûHh\u00135Üú9\u0014Û³b2\u001c&\u0011ÍU7ÄxºIPSbÍOiIñO¾{¥w·®%\u0007ú\tÔo¸GªóábËíÑ)(ù¥oóeÙÜ¡R¥yëö[¡â°£,ô\u00030¡­¼\u0019Â³`\u0018¾W\u0000a\\qìt,\u000f±Èl\u0016M?~Ãé/°Çëdv\bÄc²FÉ^$?óÆûdÅª!\u0016\u0013XIh6Ý\ta½\u0012/Xp\bÀÇg;}¾\u001bè¨÷mó\u0000\u0002æ\u0007O\"p¿0ªzÃÏâ\u0014S}?\u0000?DÑ\"Ð\fG\b?8v<¯Ìå\u0017)®Ólmx_¹ÖÛvHÂ×î+MH¢NvAú\u0004É½ü W\tÉ´¦p;QÌfäq0¾Æì¢Ê?\r¡Î£Îñ@\u0007L$\u000e}JòQ¨9\u001aXowÿgï\u0010Í÷Ö<\fc·\u0007°óûX¬/>qÐê¹L6¬¯\u0010ë<Íù«âê>¾\u0007\rÙ¤1t×¢\u001fØEÀ\u001973\ffS\u0004xEbá\u001ch\"/\u001b¿ÌÄ\u0005\u0016Ó\u0000Emi½ýÒ9\u0003*]\u0000uú*o<U\u0017±§£\u0010<«÷Õ1\u000eÐ@\u000eG\u0002±ekKàN\\§=+\"&ÍÜ\nw¦9×Ù\u0000;|C®qfàEø\\\t4VÛ~ÛÜ\u000f©?\"\u0003®\u001dÄ\u0016¹L³\u001bìL\u0016â#6aW\u0001=BÁ¡`ÇQnþæÚU*'øy\u0012z]ûm®c\u001a¨àÒíïq\u00120A-_Jäü\u0003gm/\u001dÂ³mX$Óô1çÁÚ!¸PåýìÇ\u0002c+6Ã¼N¶ûSS\u001b\u0010Ü3èÓ¼\u001aî\\Ì8\u0004ö°¯A\u0001$\u001eÛ=IÌ)Âw¾Ú\u001bª*\nÿeô(¸MkÂ¤à\u0015ì\u0001\u00153¶ø\u001fcu9Jû¢¼Öyê\\\u001c\u0010ÏÛ7öõïïÕ'ëi\\_VdB¦\u0016îAóÊeÂ\tù%Î ø<a¯G$ò}ñF½\u0000ÅÑw·¥\u001anïª&\tÇñ,\u0010©\u001cnp÷\u000eòjöoa»NqÞ\u0001;â\u0014V^li\u0007¯\u0016²í'\rn£\"-ø\u0012M^Æãþ²NXlzHtH?\u0003\u000bÚýc¡£ª!Í\u0006év&\u001d\\!\u000fÛ¨î¬\u001cÖ\u0005oD\u001e#\fR\u001d\u0004R×Q\u0019T5°à,Ç½Æ¡Uw\u0002©qãog8,TÌÞ\t¸NY?\u0005ß\u0004Dû³\u0005\u0007Û»Áór8{jÂ6Ñö¯¢£åU\u0012³\u001f2¢ª·µ÷_}Ý`s\u0010Ç¬9n\u0018üFûçìhsÀf#!E¬¾xîÃ}SU{éä\u0017¬M7 #BáôÆÈoÜúâ­¿X\u0006½yõ3¯s!Ñ\u0017ìd¸\u001aÌIZ÷U¼0ÍZ\b\tT|\u000bÌÏjZ¼\u0006i­AanS\u0005\u0013\u00103ó¤\u0007L¯VØØéMÜ½h³\u0003vB\u001båUfÙ\u001f\bßÃ\u0001eê\b,¨þ~ æÛøì_òÄQ½¶\u001b©2ûy&Û<ã¡L\u000bá¥`m?éò¸MùAbí\u001fØ!~.coÔ¼\roÓ\u0005S+A&À\tæP³\"¢\u00137ÜGø\u0006*\b'Ú\u0014j@l½],4÷Ý{\f-y~÷\u000bù¾®\u001e<0Ú72n\u001fºââÂ×¢º$>À¼mkBÎ¯\t>¸Þ\u001b¸Èó\u0016p¨õ¾1\r\u0015\r>Ú×ðZÃ\u001f\u0001«ÝÝr°Ý«¬´<¬H°jè6yy\u0013O\u0007\u001c$ÆÕüB>g\u0007$ÿp¥\"³Ïëÿv±Þð×sÙY\u0001V²#¿`ñîH`,¹­\u0010È\u0018UæÍúÓà\u0019)ÕÂªïlÙC¸Ó#\\ä­J­@ñuêê?+\bãCì¿w¹ø\u0004«¾}¾\u0017%·A3ÚÎÙB4âÅ\u0017=å%\n<a hWDâ}\u0005 ·PádU$wíCWùÊÌi_Ê7/\u001a¥\u001bþÖ¹ÁÀpT®\u0014¸`¸Ãv(ó£\"\u0002´·UÅ\u0007[A+Úú¸¿e\u001d\t\bx¸\u001daT+j ¦¼JÓ\n\u0005ó\u0002xÒc½#Ï³$§\u000b\u000eä¬J4\u0004O¬T\u000e§Áö\u0000i\u0011±x\u001f\rµf\u001cåçÓÝÿ ~U¬[\"3èÜõ\u0011ÁC¹-\u0011þ­§\u0012\u000fýÊ£t?Ë\u0003,c;³À©/c0\u001b\bÕ`îv;\\Ã2?Î(Ö\u0011ßXÄx,ò\u001e¼è\u001eLÛ\u001a\u0015fþégùôÐj\u0003@âÏ\u001dGj²i\u0012´Í ·\u0005§çA!ï¥:ìU¤JÁãÓ­L)©Á67\\®ë\u0015þ¯\u0001\u0010õ§/u\u0001¶dþ]@çç|Å¾<ìû8f\u0003,°\u000b=Õ¸R&ìÐÀ«ëeò]ã¦\u0013Tv\u0014÷\u000e2\u001eª)OI\u0017Æ³ðÆÇ_y4NvÒ¨\bÃ\u0015v);\u000f MûÖdÁý¶\u0011Aü¹áÏ©áC÷\u0019Þ_\u001cfÒ»`ÀòÔL\u0013õý\u001aË,áÚÌ\u0016¯\u0006^NP\u001d®ØN­G+H%?\u0010I¸`íCLäRÏ¸òv\u0002ïÑ§Õsã\u0003mâåúF4ç\r\u0002¾·7¹¤ÂbuàªQwz-ü.\u0011ûÚTÛ¯@\u00148ãEÜ3ª\u0000ÿÃ¡ñzW,~\n)::d},\u0011ì·Ec{.½\u001döÒè\u0017à.\u0014A,Áo\u001bBúud;Ô|Ôp\u0015Cv34«OâËÍQdÁ6Àÿ01MtpÕã¶%\f\f\u0004îÄ\te°\u000f.è[H©ÓeÈªÎÍ2\u001aWn»\u000b\u000b\u001cÏ³p_¹Ç\u0012©8\u0003W'i\u0017²£ÅA\u001d< \u0007+*F?(e²ü4º¥\\áz#ý\"áï©÷Î&ª¸\u001d?½à\u001c\u0015êÄgÀªu­\r?P\r}\u001f\u001aBiâødÃ\u0019\u0004ú\rØKi$Q\u0014\u0000«aÅÝ­é\u001d\u0001¸#o$L\u0001(9\u0012ñ­\u0002\u0002âç\u0004oxOc8MÔ5Ð-û_dóÇ>DÙ, ]\u0004ÁÇb«<\fuH?\u001e¨FYê\u0005ôÓÉ+(4\tç6ø\u001cD\u0000edÏ©{\u0015ùö\rl·v\\¸µ¼SÏ\b\u0014ÎAâÉ­\u000eï­Ê\u0003É½¤\u0013@ùÄË\u0002,ëÿ\u000e\u001bW0÷Õ­2RÍF2ÒDF\u0015qË¸\u000eþ\u0016.\u0013\u000e´\"õ±Ë\u001fÞWeÃBkqºö\u0005'õ3ËÜq·\u0004'\u0006·ù¨ÿÉ\"Ó&|^N\u001f»Rö\n¥\róyºË/Õ¨ª\u000f9ñ\\÷¼ooø(\u0010Úe¤ÈB²o2cÖ\u0014¾w >ó\t¼¬¤V.¯µ\u0007\u001cÅºuéýïù\u001e^búÁ<2« \u0013\u001fÔÎ¤ 9)\u0007bm\\ZaHü¬;Þ\r¹åã{³Þs\u0006Ë\u001f\u000e \u000b«ÞÐw¾ö¬bL?À¿Í\u0006þùö\u001al[Ç\u0018\u0004¹ÁÇ9hÆï×GõªU\\+Õì¹\bÎ\u000e¦&S¢¾Òô}×\\ªj«\u0005g\u001e\u0002¿\fØü{÷ò7+W×ÓâhÓCÖø4\u0000»©b?y \u000eÔ¹|u\u0015\u0000Å\u001d\u0015:Ånì]§]ÝÛ§Ð¦x}\u0016Ü+U\u0011¥y©Lá¡\u001c\u0013E4¬SþÂÏ^¤>³MÕ\u0006¾;DnM¿³3þnB]»c\u0012ÖJ7È¢\u0015c¹ÿ\u0001!Ýç»Tã?¢×\u0011£öÍ\u00137Ñ^^ÂIÂ\u0016¿3(dô.YYM'\u0002·ïÎ¡\u0014F¿RA­¯,\r¿+J F\u0018Ù¢¿®N\u001a\u0004\u000eÏ&z ,\u0002rX1JX×m\"VÇNÄa\u0001\u000bGyJ\u001c[e¿Ý][4o\u0001«\tÇÒb¤ÃÆ\u001eÏAÄcãbY+)ÌÀ\u000bc\u001b%µðÕÚí?{\u0007%\\\u001b\u0003Ek6d\u000b%\u00155ýe¡9íIÃ¹C\u0019½ÿ³F>7ÙtÇ`)4ÎYÙ{âËE R²ú?\u0007:-|Ö[kÀ\u001a8ÇÌQ­D¨êÉJê&å\u0000\f¢\\7k=±Äé6aK\nN^\u0004Á\bôøÃ\tJÞ;ý²>òÍÎn¥0½#g'8ç«:ÀåDz_¾-\u0015'¥ÁÓà¶²Û\u000b\u0016ÍÂa¥Ç:þjæ¦rÃå[0¶PíBÝëÂ\f°û'\u0015û\\b°z\u0006\u0012(4¢·6.±\u001d\u0010xÕ\u0012Ùèe½[\u0003¯¼ \u000e.}×HÒ\n­\u0001èBØá^~>EÃ:`ó¼ËO(R¤V½\u0001Á/]aâ\u0011ÝKïWq\u000bË\u000b`ï^ÃÕùK#5ä^Æ\u001f\u00018að\u000ee<Ý³þgÃð:_êøîëÇËÆëÆ;¬\u000b`pCÊ9\u00141C\rT.ËËÁk&¸\bâIN\u0001e~4Ãwk\u000bj\u000eÞÂò¡p\u0004¾ §{\u001a£.\u0005'¨\u0010 ã s¯½±Å\bq6ÅÚzçt\u0012Ó£¬\u0001x)àæ\u0004OðkçéX[èzûf\foFôô\u000f¢yT\u0006z½Ê\u0001VFæ\u0007±¼crÀè½Ô?+â¦gZ\u000e²VF¾ÝÒØ'¹Ä\u0006õ©ë&\u0007F(|Ý×\u0002Ùü÷ÐÛ,.ûp\u001cîÑYÀBø\u001cÓàÎ§È\u001d \u001dÑÞ#=|uîL-Ù\u001dJj0Ä¼XeÇÈøé~¹\u0003°-â¥ÖJ¿pÕª£\u001cdwÜÂ\u001d¾6QÁ:\u001d£\n¯ãFåõ4d½\u001a®7\u0007M\u001d5®°3¹°Û\u0013\u001f¤£k\f\u0014ð9ûÛº\u0004ì`¡à/QË«h¶7å\r\u000ek£gá¬§¾ô½Nwà`uc¿TÖ¥rïKkmßt\u0014\u0011@I¹ºµ>²\u0000{#È\r\"[ì#qT\u0007ïj2²ÜüÓÁ°¿\u0019µ4ä6öý_ú<þ³Þ\u0017¨0æ ø_\u0001G]þQ\fáDV+\u0006É§Y­\u0010E\u0014i\rÊgcqÙî\u0010ßMx,\"\u001e\u000b!\u0010yë®5IÉ¢¼Ý\f¿a~ãùÙz*@®ì0ªÆ>1ÀöÆÊðyuè$òïh2°ËçZ\u0019Ùû\nJåßÇÀ\u001eIô|6[|\u000eO,ë\u001bÌñÅ4\u0002Ø\u000445m\u000bÁÍUÎÇ$ÇÙ\n+cÞ]í&â\u001eiÖìK%}9ý0e_èÖ\u0012úðg·GäáZ*\u001di¹#Å\u001dl\u00141è»zg+\u00163Ò»&·áø^\u0018×\b4Ã\u0005g\u0016¥sÀ½jf^»$o§\u0014òkJèÜ\u001e=á«@ßõ\u0000Å\u0004AeKÝ)Ó\u0011Ö\bCo,\u0002èw7qS:Ç2\u001fKÁ\u0017F³â\u001fOGéµÙ\u0015\u0012± \u0002NSmÐ`®Ý¹<\u0016¿÷\u0012xd\u001f#m<+3ç\rx÷\u0001®(¾!pÃEÌJS@©Ý¹÷â\u00068`Å\u0016«\u001fÔ\u000e´m²\u0004ávtD\u00153kß.¢üC+#_N\u0005³FôåÓ2ÞÐ\u000fT @i)¬FÐËØ\u0014kAý/¸~\u0005L¿2±õ=\u0014Àum\u001f?^ØÅÑF¤\u001cþ]àþ>\u0012ùõÁìZ&:½¯Á'\u001fË&ê<x?Ú¿±Ï}÷ÚÖ1Á´°«H©­íÅ¼Ôt©ãWm\u001e×z?Þ¾9@Äd4´\u0013p\u0005ÊB`R>ôÙâè\u0001ïÔ¤±¼ÉäÎò&\u001cÆÕ#î\u0003=¬ ëÛ+Z\u0014-\u0012=Y<p¬\u0010s}ï-\fIC0ÛÇlx'e.[£oTüÔt¼Ï\u0004ÄEà,¦ç¡\u0000·6ïWHç½V´ÇÔ5*:³ñé²qå\fÚø¿¿¦¯,ëpÄ\u001f¦L§C\u0016ËÌøDIÙÆäá+ñ¼ã]m»\":¦b\u001d\u001aÑ²\u0014Ä×âèJÔÒ\u0010^oúrÃ\u000bá(\\äÜ\u0011\u000fÍY\u0005\\\u0000¯Y5hh4°[#`BÌ¦sDîAðPêOST\u0004u3\r%à¹\u0018÷¶\u0019\u0010ÜZÕ¾N°¬\u0003\u0017;F!±-ô2\u0011:w\u0010ê!i#`¦Fé \\DÂÿ²æ?8\u0006Z\u0016Ón³¿È¶\u0003\u0012òºÄÅ\u0010¶w0 {omôKe°\u0018ø\u0007¼Ù°¾ç\f7NcGãYq@\u0014\u000b4w\u0018×$~UOÆÂâóZË*«qAg\u0013ºÔUÅ£¶Rq°cÈ+ÐåTO\n|öÀZ\u0003á­üeõ2õuÎ}©\u0010ÆVÆMÒ^íRÛ]w5R&¨J\"uð`H}.í=àvÕZHíGéÏ½Mx?WA\r\bÏs_ä03~¤7Ô\u001f¹:ág}ºN~\u0002À¸\u0017\u0004©:í æzÁiÊT\u0015´\bGl£%£Ýüì+è2Á½*ÿºöä~4EPn\u001cU¼öÃ\"4eÈ\u0010¯-\u0017\u0012½:1ÞªT¬õ<²1oQì©«ß\u001aíqbº\\3#ñJ\"¦HØÌëÐOqð\u0000v¡xý\u0011ï¬ó\tSÛVH5\u0002\u00112²Õ\u0013£®ø7OÙ±Ó^\u000e\u0019Ýaæ¸sÑÚrñ>å­wù)ZµQoåòï;\u000b WÙ3à@\u0006\u0019®0úÐ³/0\u000e9ô_8\\hq/#\u0003Uj# þ«)§ÃÖÂËú\u001d·Y$çìjÚÓÊoØ~P°©äÓ¯vØ`#ú®ÃÿN¼\u001akaýÖø\b~t¿\u000f8ß\u0004\u0019´\t4º/`XÒ£éÇÍÂ´}»\u0003¢Oéø\u001a\u0003EáôvÝ'ýØ³\u000f§Os\u0002e9Ú\t¶\u0004\u0007y\u0013Ìn\u0003m`_À«Ú-'/K¸\u0016áô1\u0010®\u0017\u0015¼&èèìZr´¸)wúÊBI\u0016³§~x\u0011ýBîJÚk}¤ßÒg\u000fØw»àp«·éÏ¡v|ù1Ð3 \u0004Î(«ãÙ:HM^ò#$mFßþ7+\\ì@æÝ\u0007\u001eAÕ\u0015S\u000f ýÒI·[:ÁkWõË-KQ\u0001\u0003$Ô£8Yu\u001fÓ\u0010.ðª_:hn+¶àùmµWTnº^\u001e_Iï$û\u0019\u0014èÌl¹\u0016x`\\9»Ö\u001a5\u000bM\u0005\u001bêyyÿÅéhÝLÑ\u001cñ?C/¼\u0000d}é\u001e$Í÷ól¼¸\u0015ðò¼WÌ½\t¦ùîË,\b%tä:\u0019¬H\u0016©\u001cXÔjW\u0003½Â\u0012!\b´\u0011\u0011y¸\"ÿ\u001e!v\u000bÈNÂð¥'Æéc2xdÝd÷Çó«Æ®=ø\u00169\u0019!½wW/×\u001f\u001bÎwoæZ?\u0012ný§ÿð\u001eü´eiÖ}l'{\u0018»?¾õÃ¬sçË>êU\u0000\fQ\u001a\u000eÞÝVuÛì\u001f_¨W¡\u0016\".UÒ,f¦6)Ùá]Ãæmz£î¶Ò,Û\\\\nécYì$É½\u0000\u0001.Pj&~{\u000bD,Î^Ñ\u0000= êbÞh ½ éEªôéh&mÔR!°½Ë\u000b¶Rm.×>Î\u0017~·\u001a@q\u0012*lõ§UÃ*>¯\u001fwmwãgÀéìJt¿´-¬%ÎXmríkC\u0014<\u0010$ì9\u0014\u0003¬´¶Hjò'ùÁ¥-¡9å\b[R}/ Ë+l±×¶-ºÙ÷\u000b£êÓv©à<Êzî¶º|Êô¾ïð\u0007Þ£I\u0015IÙ\u000bÛÍ\u0002l¹fw\t[üù\u0005\\V£ÐmÄÌ\u001dÝ!OÔbFê*ªö\u0012¨°ê³j[R\u0016bh³\\(\rýh\u0007ïx£.wTêô{¦ #ô^Úª\u0010àJ,\u0004Y\u0006ºMK\t\fÆÝCSô|ï\u0002\u000evÇp\u00115À¼ï5À¾±fz[\u000e\u0006ÓÇQö{N\u001a\u0006'?\u0001l¿`»î\t+¼)SÕß©\u0000~VÉûu¦~¬îyß¦\u001e®}$Ö5Óy(ÑEZ\u001aÞkÜ;D\u0019âTã\u0019ûE\u0000\rãvö£V²W^Åºp3þ|°Å\u001eØÇëtÝ¨\u001e\"­0À=\u0006ÐÉ¯k£ãjW\u0000Ôf{§¤\b1ÒFúÔl,X\u000eQ{'\u0005*ó±î¼]\u001e\tåã¡Y\u0001KgBô¨3®MWS§\u0003òïÈ\u0011\t'ì2\ruÂaj\u0004j\f7\rª#°>¯[´I»\u000eïIº?«~\u0011ÃÕoÐÉÕ\u000bðà\\ôL\u0013qF(è2X\u0014eõ¤Ì\u00003^m\u0002ôw¼ ¼þcÑáò×\nKÓs\u0007Y\u0018ü³ÌØÊ©*NÖ©×³Nd\u0004ç»2sXþ5»\\\u0010 zÇ.6z'¡Ô\u001b¹+Ùi\u001c\u001cÎ8H&-O\u0013C©%\u0015²§à±Uh\u001dóçÔ#Ê5ú¨ò1ÁZ\u000fD:/>îÌâH­¤²aqI\u0013v\u0003uµMKYígã(\u0017\u0018Y_¹\u0013µHØ£ë×y>[/.Öø¯×LÏ7;4-ÑNïötQEx½J¸ì\u0019!§ÒFZ5h¢ï}YPBK Wú\u0000èg4\u0019^´àJ1xÜ\u0013P[\u000fÊ\u0010¿µà´Oút4ÖZ_¡\u001cj{ÚÕm9\n&\nîixÁ\u000bG·»ip,j{*ÀmìþC]>/ë#wX\f¥dåÑD\u000enÍ£Ç¬ÆvÏYâ£+×8à^½Èrº]\u001a\u0016I¾\u0016\u0017\u001b9ü4#·Q¤ôÞÂTrCÀÏÉO8t£_³£ä\u0004Ê½\u0019b×bZp\bz¡Î¯B¨î\u001a<`ÔÂÕÀ4\u001bjçÜ\\ñc^FD¿Ý3\u0001E`'¥¶Ã\u000eÜ¶Àô>b5ÁW\u0013ÖC\u0005HfÏ;,\u0006Aæ#6\n¥Á9=g\\\u0002<SÌ )¶Ó-ê\u001c[â`}vD\u000e\u0012\fÚxû\f\"Ì­H`$\u0019ÕPÛæ\u0014ªá3K=ÅLu!JÆt°üBª\nÆtb!_¯Ö¬\u001fo9rrq#;hðæ¥¾PÐ4Jã\u001a\u0011ñ¦ÃÉ ¼}§\u0010Z½*\u0012ÊÉ?D¡É¸\t±ð½î«k9!0é/FdÒë&_Ü ¢\u0016\u000fôQñÑ\u001b\u0012V¶~Íì\u0002HPá!z\\ða\u001e\"\u0004a®\u0015\u0017³ëM[\"{×@®WªíÅø~¥}\u000f\u0018Ë .\u001a\u001bÎÁ\u0007³F[dAÂu\u0006?\tý mõª\u001a&ÇËXðÓØË*/Ï}Ô2Åò,¼Iûk\u0018ûåþøinqú\u0012\u000b¸Yã¥Kçà5\t%C­nÉ÷Ì`?:ÄÒâ;mØëOhîÊkÅÅ¶UÒÀ}«)4%\r7uðXOb78|\râ\u0018ºéet°\u00191ñY&õ%\u0002Ys\u000fR6ãk´¸|u³\u0014¹íyâ]=u`GdøºYzÖ&ÛÚ²]Ø@X46\u0019\fÃx^8°\u00032ìaÌP\u0005ø(ÑÓY\u0003\u0002SºÇ®ÈÅOû>KNÏl@_sà@À¬ë0õIH&E¦J\ný­)3^ýÄÂP÷¿µ/â1z,;Â6s@\f²>\u0012%³4ÃíBÞþXÍç(É|í\u0015Þ)nù)<\u0003'Qín¦ú0µ5VicIªX{Qúìµ|¥ÈÑ®Ì!Û§Õ2½® l¤-:#(ð¥\u0016Zõ\u001f>v®?§&ÌEþBAÞq§~)Jys\u0007 U¶K};C]V_L£õ_nTJiÿ\u0015\u0002xzÉ@Ï\n2,äM¾P·ñ-s!;øQ\u0004z\u0016\u001f_w\u0001â sÞz?ènSÑÇ\u001f¢GÎSæå@6qØâ\"EVÏ\n>T r¶ÿF1\"Hrà³ýq­öV²o#|\u0015Û´Î\rº\u0004\u0002{ERed~Ùv4O\u001fØ\u0007.wwå@FìL\u001c\u0013¿\u0007ÔÑðê@ #äá\u0014d¦yãå\u001fA\u0001D \u0017z^!Ö·&ý×c@dÖhâ©:P£Z´ âù\u0014¯?­æß\u0003¶­Í½\u0012¶GiùòÓ[ÁNLQGks\u0014)äSM\u001c^é?8X%Q\u001e d\u001d#Î*è5ß8mãË97Òü{ÎÕð\u0016w\u0001.;W]¾õº¿Ò¤!èfk\u0017h³»\\\bý1¨]ÎV×'AñyÃ!)I[Ä0GSQ+£®Û?`aEm~MÊ[íK¬h6Í¿ìÑã6y\u0010\u0016\bèl\u0019Ç¾óËÅvéOÙÇ\u0004¸0ª:ªv=\u000fS\u001f\u0003\u0004rË{ÌrËcÃob\u001cH\u001dÇ\u0010\f\u0015N ÓÌ0ï°\u00181ï¦ç/àÅ`ÊàëåsB\tÂGStÀ*¼éÄ\u0004ÐäaZòÊô\u001d§\u001càOkcðDS¸ \b9\u0011ý\fX\r\u0007\t\fà:û¢¥OÍa1Üx¥1#`Ú»JÂª\u0019ùd½Èò\nV\tß\u0013G:\u0011j!Æ\u0017Ë±q­JäÂP OÛ.\u0007}Q\u0010\u0013X\u0019ëõÒÇà-Á»>+?\u0013\u00188IÜE\\{a5¿1®å÷üb\u0006\"=_w¬@$ëyg\u0006ÖÛÇæ\u0006,FuÄê_ÖÒé:µÒW)og5Ê,d\f\u0010\u000bòu\u0017\u0000\u000bIQ9U$à\u0016GöqVpY_ÿ\u0005Õ|\fÔì0?TBV\u000ev\u000fh\u0011Nã\"ði~C¶lÚkòfN\u0003n\u0014é\"~ÿÈÞ¿×Æ^©F\u000f7ªPÖ¶&9\u0016\u0011ÅV\u001e\u001fÚ\bL\u0007v\u000e\t_Õã(ìª\u001aæ¿*Ýþ'dSd©µiåE:M·@ö'\u001enFÃ¶\n\u0015\u0001^ÎÏ´æbL[¥\u0005D\u001få@PÃ\fBÓ\u000bt[\n©T4Z §N\u001aÅ\rFHÖí ;S\u0002]\u0000%Üb¾=2ù\u0006ÎFõ\b§\"baoy1Z$y)ÝI0Í±úB\n\u0018,ÿ0¤FÖ1éò_ù0 \u001d\nô?àE~¥÷5QRÿ\u0004ÕÏ©ïæ\u0018¯\u0002ÕÛÐµ]èQù¸\u0018\u000fB¶ÏX/U´È4û\u000bå\u0007p.woH\u0014ée^Õ\u000fhï\u001c®\u0019À¼_HBöÛªQ»Ù\u0006\u0006j\u0014ygë«d½ÿÚªæ\u0011\u0015_Y6Dÿh²\u001eúÒ×;²d+\u0005ß\u0006áiÂè£ûF{pD:\u0014JRÖf\u0015ðc\u0005m»ëG§Â \u001bèµ¾m¾ã|P§¾ü_»áMÃ\u0005F¢ûeû^§äAÝíSj%J \u0006h85ÆV\rC\u0005^Æþ\u0005ÚÑ|';%c'ó[ZvàÃëpèþã\u00199¯\\¥\u0006ÃqyÛ\n¿\u0010W+ºú@1\u0000V\u0006Y¢ïv\u000f\b ²Î¬4¢>ö¥\\±³XôHÍªç@ï)ÐIy[«LnpÖ!\u0004YTqÒt\u0010\u0003\u001d\u000bv\t$Þc\u001dÊÕ K©\u000f\u0018\u0012_èS\u0015t¨_¤\u001c\u0001èè^èùÍ£\u001eÜã\u0016Á1\u0007\u001a\"»¹fWïkrOç¢#\u0016\u001bZuSV*\u0006Ê\u0012ÞêMâßÚFM©WY²§Ê²ÄVFã\u0010½^¥\u0014\u001cKÿ©7öô\u001eP®¸\bxS¶Ôï(4âèWõÆí¼\u0018ê²úàÌ_býW\u0006áË¶ ¡fN×òÐåcçF| oôh2uN&\"7îpcDÈ`\u0016¬¸°Lp\u001a\u001c³¢k'Ú²ÍõZGµ\\CP¸\u001fñ\u0013zÐwV\u000e³êô:²ª(k\u0011\bÂÚ\u000b§ç¹{\u0000!\u0010Á`¡kæúJ95ÿÙÜ[ë\u0015¹\u000f%\u0014\u0014dßë¥·®ï^q vM-flMm±æBï¢û1\u0002(À·±ZØ1\u001eËMt*¬i2\u0018ÉÈ^ \nÁ³p?¹<Ê³J8±è<\u001d¥ë¢j2|²ÇÜ½Ú\u0005È³JÃÙb½ÿ½=\u0016´L±d°\u000eE{=y\"G\u0010éêª\u000bF\u0000]¡\u0016~\u0005ËªTX~é³\u001d#P°\u000f3ð\u001cõ­&ÛI\u0007%¦1Ð¼ç\u0001MÄ²W\u0019ýËE\u0005j²\t¬«áB / Fg\\D\u0005yù]\"&ËC¡\"ïä7uQ\u0016/.GU\u0018µþ\u0014o^ ë.Çïä\u0005¾Â\u000b-Ö_\u00035Ô]¦àt\u000eQ;å#I_0ÄìÚÄs÷yMæ|\u0013zåW$ÈßAìàâO\u0018)Û,¾ß²}Ó/¯^ò}TiÏÖÊ\u001b'h}µ\r¿ö\u0012v@ýd]Zhb¢\u0006,_\\E¾\u001aåÚÑL^ýÇ0o½4{mrJÙÿt¨ÛÞS+©.<®û&PÊÖë¡¢i·ùÚkË\rDO¡-ìx\n\u0001/ kÒh\tË\u000bXèÚÄÜ£Ä³òÄé\u000bÆéo­#¨Î×VbË²^4£Ú«ï6ºu\u001fëÿý\u0015@äûKtJÂ\u0004Å¤ÀÄÒÅ\u0019\u001bè$F>\u000bp\u0012Ì\u000faÐûJe\u000bûÚ7G«ÚS18¹ÐÍ £ª\u0016É\u001cc-*Ý¹Gy©®m®%7b&}dÁAto\u0013÷DéëÂøV½\u0018l©Bv'»t*%!ûKn¡®\u00182/áS¸í  \\CÃõÌæç}-\u001b_\u0018ëÌÅ\u0000ü¢æýCbm8yfî°2 ?dµÆÒ_\n¥´U£l¯KÓsjsoN½Ï\u001c.ÌýÉ¢Ï\rDÊ\u0010»6`÷ð[ô3lA_j9AGß]\u0007\u0010\u0016ß\u0018~Ñ\u000f>ÿ9Óè{#ì(\u0001\u0007RFTT¼%X\u0005Ò?R+\bðW\u0018¸kïJúÉ´\\³JÉÍÂP\u0012rXèå\u0002îyÁ3ì+ÞRýz\b_f8§ó[QD\u00000 dFOÆeÔ}àn0ÖSâ¢ù+\u001eÌ\u0015¬H:×Ç1·M\u0002áÙ21B/cÔU9ÌtàHÈÂ3\u0002I9h\u0013µ\u0016m'mgî\\;p1/¸M>l·»F\u0005ÅzÄ$øû88vÜbX´A-Mê§X)k½¼\u000f>RQ\u0000»ÇYG{øé:\t*©ài£c\u001eÍµ>\u0007\u0007*7Üt\u001bÚ \u001d u\u0001ä]\u0003f^Vq¡\u0000~5¥KP\u0005ð3æyîë.-l&K\u000bB!³\u0003ßu\rT]¹\n5ëÕN\u0003<Ó°ÿbØ\u0010\u000e²ºÞ|w¨àÈëWÖß_:Î\u001cþüÝí\u0015\u000bg\u0015FUIp²à\u0015½cñòà«¤ó¥8öf\b_5ÈÀ\u001aX`+&~£\u0010ÿA8ÐjRì\fs&®m*¯=\u0001ÇîÏ¡¥×¦ÍOÈ¶°«ZÄÄÝc>O*\bl*ymëuÄ$JÔ]ËÝBî°wÕ\u0014Är8öÛÓC\u0004\\Â¶®æÙ²él\u0001Î×=¸P§ié«ú84s\u001býù\bJ§^\u0012c\u0017Ì7Z­âèÖoP ë*5EÞIò g\u0007ö\fëËÿi%É2ô¤1s\u001b}äÏøZ\u001e§ü\u0011óEË÷\fÞ Jø¨kr¸GKdù¨\u0002¨E$dòÍâf\u001eâV¿÷±3Ìâ@2ô\u001a;\"dî»ô[xPèû$Ï\u0001^¯Ú(\u0013Îî¥Ã\u0018q£á1ðuÜ½Íký\u000f\u0001\u0010ª3K\u001f.ÁèÍ\u0014Á\u000e\u001füèEåïLu\u0014È²ëm\u0000EÕg»h¿Ø.»$9ãï,¸\u0011Öu4þEOzG\n¹_Y´®J-¾fÖ>¸ùbTË¡ÜR3ü÷ç\u0014Ò\u001f§\t\u000bXØ%8D;T\u0015\u0012ÈAñßzÔÉ,¸ Ê%*Þ9ËtXoïËgH<­00s'wÉJî{ôù\u0018¿+*uPÀ\u001em¦z]\u0002{ÒíX'âä`%¬ÄSÜ]æH\u0015\u0019Dñ]qÄ[Ò)ÕS eÒÜÎ\u001d9T5¸¢zÓk¨ï¨@(¹\u001aZÇÆCo«dm_¿£w¦:\u000fùù\u0004\f÷\u0004¿ø¨\u000eÆ²¬#ñ\tÃ¸?¤®e\u001eÅ\rJà×]\u0007½ìÊ÷Û<]&Èì\u000em/EfP3zAïD»\u0016¡|S/ZlAjÂÇbFÞ&*ÚÁ$¬GIéÊ«vLßñ£#Á¤áªæGüm@T\u0011Q.þú\n]8oö¹)\u001e)0´>o\u0015×ñòÿA-1ÛT[¹üq¬]U*<¾jÏPx¨_ª´Ê_ÅTm:v¡<\u001a\u0001ú²Ò<ÙìÀ\u0018:92¬í-xú¯0W.ÂÛ\"ÀÜ2YB\"æ>\u000e\f2´\u0014°!s¹¾-¿'«A,rÏ\u000e\u0011¤TZ«n]ÂÐíá³kñ¯!ÏD°ëbbz?\u0002§¯Ëhz£ðû&¨\u0014\fîOR°¾\u0010\u0011+ÕþÕ×w³ýjªw}d±<IçÎäÆ\u0010O]#è_\u0019\tÀ1Eï\rØFw~ð%Û\u0017ý\u0019Z¢ÑkÍ\"g\btö\u000bHRÖ ÌK^á\u0015ÐDV\u0001\u0007\\´ä¿\u001a-¿&#½ûÌ\u0006\t4uÌÞXâÃÞíõ»¿ó\u001d\u0011\u000b>M\u0014´1¬\u0004\u0001¬\u0013Ä.$>l@I^uª¸.!°\u000e«¡bÞ3³Ú°û\u0004ô\r#\u0016eB\u0017\u0004~pÅ\u000f*/7ã\u0007è^R æ¶»\u000e#áV¼\u001c\u0016g7[gaf\nH F\u0019Æ°YQ¡|Däp\u000b?{6æ\u001b\u0014\u0002F\u001cH\u0019N,\u0010b0\u0000v\u0013Ì4Ø®¿ÚÆØ¸Ô\b\u0018!\u00006\u0016\rGïê%z\n\u0010?ø)b0\\8K1\\z7¸ùQ¤9\u0006LXîîÔç+.Asÿ³\rÁDÙ=¼Ù.¡Mü\f,¾%r=w;$L\fL\"<\u001e\b¶:8e}\u0016÷öq <\u001aTv^ \u0017q\u0006óÑI×m9.\u0000·îÎ\u0002Ä»I©ÜÖ8Ká\u001c4Ð\rÑ\u0019?íT @ö^yÍá\u0018Ná8¬~²>uÓÒ8ôpTçñßöJ\fgr²©Oæ³§\u0010ÚMím©8ÿLe>\få\u0014%\u0007²í\u001e\u001e*\u000f1ù£~+Ø²ÞsKI¦Â·îYKÚ` $/\u001a]1Jð:\r]ÊæpDÅ5èìpà\u0019ú\u0002âA%+¥~@8ì®Ä.õÔ±aê®RN}Å\\åÀ¢¶Æ)È!)ü\u0016\u0018¥\u0019t\t½OØÎîWÊê{s?ÏC]z_áÁ­,Ð\u001a']X*L<KÁ(ºD«z\u0002³°3~2£à>q©ÑõêJìhÝ@35©>hñ\u0019:ànC$^\u001d>E=wMW%Kö\u0014ÀdJ(5»\\ªaÖs\u0015äÝÆ¬Íñ\u001eò(¦½½\f3³;\b90þ°ºA³_x@£^õ\"Äj¡îC\u001f\u000eÉ$0E\u001e\u001cz§]\u000e¨¬q\fÌ\u0016K\u001c&?\u000b³k¦2x`íÏsö;3t$Ó$ÇR\u0014¶ß9ÌdÌ\u0017\bzÏ\\GØL¦J¬\\z\u0016%uS n&mz¾Ä-kÒÒYÜË´8éãÄ¤7Ð\u00019xHP\u0017·¯Ô(j£¤Ã5°¦}ÁÒ®ß¦4CÀ\"¿ÖD\u0019/«\f\u001b\u000e°ÖÖ´N\u000fë\u000b*µr®Ú\u0003ÖTü?³¨hõidý\u0000Àè¡¶Ìé=Ãgãê?[õ\u0014\rÆq\u0003zþ©\u001d²\u000fäË\\Üû\u001d}Äè³åæ(ñÑÒ+PòÉÓ>ØGÍ¶\u0018¿>\u0011\u0012­µ`ÜuÇ&ù¡\u001e\u0011^\nîõ\u0003\nÜ~V_SKâ¾Gc\"Ñð8\u0013v\t \u0014\r?xmù-§Ò\u0018Nå\u0015b½£*ã¨¡Çf¼¢YR|\u0018ë]x#`Ý»¬Ï/Ü~Z*âFÎv~5Ã\\k\"ëÚ\u0016­IQx[°¹Aò\u0000Þ¥û·JYv\u0011¨\u0000%éV§\u001f\u0014h¹çqo\u001eÓ\u0016Ú\u001dÇÿ\u001b2ÿñÙ\u001að>1\u00027\r°ä\r\u0007ú\u001eÔ+_0\u001f/-Ê\ný´\"õõWyZ\u0013rShzx\u0004ðVXB[Å(¼¹àó®«B×·ØÀ\u000f ·\u001f13ë/Ä³|\u0012üS¤F\u0007`x¾¸\u0002¦Úm>J£\u000eÞl\u0016ÐB?TÊJ×:êWûé#«wõÎÈÏ\u0013rÅ°N8Êg\u0017gÇh'Ú'ÇT®ÉbÀÑä!óâ8Kç'EÛ¹ºª(eÙ`§\u001cY;È\u0001>ÝÀsvÉg|\u0016sFÊÇº\u0004,Ç=²(ÜpY9d Ó\u0002K«\u001aûk5\u0017´yÅ©Åî6\u0015¸ÒÁ&Åìßó\rX¦<â ÃU,-+;¯Àr\rCâLM\r\u001an­ÖLÅXu±É>ñ¤f{¾DeÑ\u0013Ø¨çxd_­Ù!$ZüVÖV>¡>Jïï¬×s¬6¶i¬&V\u000e:qÞê¶=Õîôí\u001eäc#ê©<\u0001SÜÝÇ?&dp\u0004ùÑÏ£'ú\u001aÇë%¤ÜYB\u0006\u0014òø A¶HÉ\u000eÕ õF§³ tG,a6\u0016g÷DKÇî\t`\u001bA¡F\u0010ÈÔ+\u001dåèÞµ7\u001dD\b2h\\\u0001¨Ç&lÎ¢\u0005\u00056ª1á@+ïhÀTºYT§Ü²\u0013ºy\u0005²\u0012BrpbM\u000bBÁD¬|a½Ùpªmåt£\u0015}þ\u0017àÍs\u0007´\f|ì\u001f½÷ÂkÙÝ\u0011÷ô.óZ\u001fvð&dfE\u0003ðqL´)å4Ümn*bÎJ«z\u0002$;®\u0017}H\u001c\u0001¸\u001e`Æ>ZÐÇÜÌ\"rß\u000eT!ý®\t<hÕ\u0017T\bÆãÚ\u0004fÊ/<¯½\u0014G¬\u000bp@8àZNeß0Óã+Ä\u001c\u000eeSh\u0010¶a\rÃ3Ä¼Î\u000bTU_:³67:HÙ8Ë\u001dïûI1Ð¼k1\u001fã·\"ð,#¦U\u0015\u0000N¥gÔÚíq<m¨8S³»\tM§/$~Kæ\u0014\\ódç·3]¯ù*\u0016N\u0002e©¤ÂûÇgd\u0019ßtçJeî¡á\u0003\u0007Ö¡¿[\u001fâÚ\u0000,S\u0007\u001f;\u000ftY?M´#\u000115©ª&\u0018\u0019P6\u00120E÷uñpØ+]h;\u0015ìðâ\u0000\u000bÞîU\u0007«\u001e íÐ\u0015:âE@î*ð:Æ¡Ã\u0017Ñ\u0011ÉÁÔ³/1íô8Ç>o\u000f¸\u0013ÂRK{0ß<\u001fª\n\u0004p2ÈÅV«ð(\u0007hÔ\u0013ñï3ÚÚú1Øl\f\u0004\u0007Xø°G$ý@X_r_ù\u0007Ó\"°§c~rax­ßB¨ìnç*uR\u0017Wø§}Þ\u0007Ásµ©I5ët(ZÚóÒ\u0001\u0006á«p\tÚ¬ÓFÜ>\u0013RÃnø\u001d6:$¿½&ðîÃ\u0010lZå1ð§8\u0000\fQzxiÅ\"Ç\u0006Ûª8ìXvC@# YË\b\u0012PxÙ\u001dê \n&/ä?¸û&Â\u0016=þ¶ùb\u0012â\u0014O?dÑ\u0000\u0000[Ö\"/H \b\u0001 -;R9\u0006\u001eÛ6ã\tf\"í²UQ\"\u0013d¸º\u0013Åò_¸ß@O-Ñ'¥²Å6¹äúNiÌùþydÏGñ={\"2xñq\u001f)Ô\u0000\u0000EXIFº\u0000\u0000\u0000Exif\u0000\u0000II*\u0000\b\u0000\u0000\u0000\u0006\u0000\u0012\u0001\u0003\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u001a\u0001\u0005\u0000\u0001\u0000\u0000\u0000V\u0000\u0000\u0000\u001b\u0001\u0005\u0000\u0001\u0000\u0000\u0000^\u0000\u0000\u0000(\u0001\u0003\u0000\u0001\u0000\u0000\u0000\u0002\u0000\u0000\u0000\u0013\u0002\u0003\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0000i\u0004\u0000\u0001\u0000\u0000\u0000f\u0000\u0000\u0000\u0000\u0000\u0000\u0000H\u0000\u0000\u0000\u0001\u0000\u0000\u0000H\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0006\u0000\u0000\u0007\u0000\u0004\u0000\u0000\u00000210\u0001\u0007\u0000\u0004\u0000\u0000\u0000\u0001\u0002\u0003\u0000\u0000 \u0007\u0000\u0004\u0000\u0000\u00000100\u0001 \u0003\u0000\u0001\u0000\u0000\u0000ÿÿ\u0000\u0000\u0002 \u0004\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0003 \u0004\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0000\u0000\u0000\r\n-----------------------------93365124425885302711182041568--\r\n",
            //     "method": "POST",
            //     "mode": "cors"
            // });
            // console.log(await a.json())
            // const generateBoundary = ()=>{
            //     // Define a set of characters to use in the boundary string
            //     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              
            //     // Define the desired length of the boundary string
            //     const length = 16;
              
            //     // Initialize an empty boundary string
            //     let boundary = "";
              
            //     // Generate the boundary string by randomly selecting characters
            //     for (let i = 0; i < length; i++) {
            //       const randomIndex = Math.floor(Math.random() * chars.length);
            //       boundary += chars.charAt(randomIndex);
            //     }
              
            //     // Add a timestamp to make it even more unique
            //     boundary += Date.now();
              
            //     return boundary;
            // }
            // const boundary = generateBoundary();
            // let body = `${boundary}\r\nContent-Disposition: form-data; name=\"image[]\"; filename=\"10.png\"\r\nContent-Type: image/png\r\n\r\n${imageBlob}\r\n${boundary}\r\n`
    
    
    
            async function downloadImageAndUpload(downloadUrl) {
                try {
                    const uploadUrl = 'https://apis.localposh.com/api/customer/image-upload';
                    const imageResponse = await fetch(downloadUrl);
                    if (!imageResponse.ok) {
                        throw new Error(`Failed to download image. Status: ${imageResponse.status}`);
                    }
                    const imageBlob = await imageResponse.blob();
                    const formData = new FormData();
                    formData.append('image[]', imageBlob, 'image.png');
                    for (const pair of formData.entries()) {
                        const [name, value] = pair;
                        console.log(name)
                        console.log(value)
                    }
                    const uploadResponse = await fetch(uploadUrl, {
                        body: formData,
                        method: "POST",
                        mode: "cors",
                        credentials: "include",
                        referrer: "https://localposh.com/",
                        headers: {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
                            "Accept": "application/json, text/plain, */*",
                            "Accept-Language": "en-US,en;q=0.5",
                            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiM2E4ODgxOGEwNjE2NTE0NjQwZmU2MTRkOThlZWQxOWE3YzQ0OTgxODMzNmExZWI5ZjBkMDViNDViMDRlNGUwZGY2YjJkZWJiNmM4YTJkMjkiLCJpYXQiOjE2OTgzNDQwNjUuMDAzMTQyLCJuYmYiOjE2OTgzNDQwNjUuMDAzMTQ2LCJleHAiOjE3Mjk5NjY0NjQuOTk2NTcsInN1YiI6IjE0ODIiLCJzY29wZXMiOltdfQ.zn_ctSd3x4g7xenUrmJ-J6VqKGRVgOs1GXSURfz7yQMfTWnKRBx7uYpjPW0QhEZUGK6ICTZXRBlczc2lNb01CmIx3fJDHi0_91PEEqNVUFY-RX2LmzGjXtPeLOhkE0SuQChKb07F0hFPO00lsEWgw1o70t2KEWMYP1PjH8d-a2QT4rb3NGvcFqz_BcWJjGZeSZSB8XFQj6iQx9tC2RjQzy_D9OjQObdKwoc29WuQBwWUw0RZ6vPTeywTxHtv_IM3gpNEn-quikRs1s3aOyVzaoBeqcqWSerfmlP6E4Um5dyxV2M4CFupvF5bGgNI8vXcJ_vCY2kh6lJm6rE7mngoJJ44r98_UATEuZWvNS9Wv8ETZm30WhoqMIl6UBb7E2dOKn8o3DXXzAPZqCzKyM8F_8U07Q_Uwp4tvAsKIpRiXdUDayoiWHKFFxR3KTqDNUhGjc_fe2YYv25EoJqX9CEMJDkCcqzNVBnIcR1V6XYPIl4WpmcjWNLOsIOyRWDZ7jvGMWCo0I1-TNlPjpBnBhLsMMMVh2-H1nXhrYSEMTlBvKGPwNPxrLRUL-gMCjJHy253BHoO5BKuY3ozibVXEDVaREVpRcYlLiNS0LoW732vp38Sbdd9k9K4XktMXmM2Ovg8eTNzRlOnPPGdgGjaszWOk0vGzWKWcqwgLmSgvsQ6cOU",
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-site"
                        },
                    });
                    const uploadResult = await uploadResponse.json();
                    console.log('Image uploaded successfully:', uploadResult);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            const downloadUrl = "https://kiddingaroundtoys.com/cdn/shop/products/f2b82b6f-9e7d-49df-9695-5446343f32d7_1.80c91f35ec828108618c60e2a33c5245_540x.png"
            
            downloadImageAndUpload(downloadUrl)
            
    
            
        });
        // contentScripts.showDebugButton('titleDescription',async()=>{
        //     const data = await db.GET();
        //     console.log(data);
        //     const title = document.getElementById('title');
        //     simulateTextEntry(title,data.title);

        //     const description = document.querySelector('#description:not([placeholder])')
        //     // simulateTextEntry(description,data.description);
        //     simulateTextEntry(description,"");


        //     const descriptionGenrator = document.querySelector('[class^="AddNewProduct_generateDecriptionBtn_"]');
        //     descriptionGenrator.click()
    
        // });
        // contentScripts.showDebugButton('variations',async()=>{
        //     const data = await db.GET();
        //     const sizes = data.sizes;
        //     for(let i=0;i<sizes.length;i++){
    
        //         const addVariationButton = document.querySelector('[class^="AddNewProduct_productVariation_"]');
        //         addVariationButton.click();
        //         if(i==0){
        //             addVariationButton.click();
        //         }
        //         if(i+1<sizes.length){
        //             await essentials.sleep(2000);
        //         }
                
                
        //         const size = document.getElementById(`productInventory[${i}].size`);
        //         const weight = document.getElementById(`productInventory[${i}].weight`);
        //         const quantity = document.getElementById(`productInventory[${i}].quantity`);
        //         const price = document.getElementById(`productInventory[${i}].price`);
        //         const discountedPrice = document.getElementById(`productInventory[${i}].discountedprice`);
    
        //         simulateTextEntry(size,sizes[i]);
        //         simulateTextEntry(weight,"1");
        //         simulateTextEntry(quantity,"1000");
        //         simulateTextEntry(price,data.price);
        //         simulateTextEntry(discountedPrice,data.discounted_price);
                
    
                
    
        //     }
    
        //     const lastRemoveButtons = document.querySelectorAll('[class^="ProductVariant_removeButton"]');
        //     const lastOne = lastRemoveButtons[lastRemoveButtons.length-1];
        //     lastOne.click();
        //     await essentials.sleep(2000);
        //     const secondLastOne = lastRemoveButtons[lastRemoveButtons.length-2];
        //     secondLastOne.click();
        //     await essentials.sleep(2000); 
        //     const saveButton = document.querySelector('[class^="AddNewProduct_createProductBtn_"]');
        //     saveButton.click();
    
        // });

    }

    

    
    
    // contentScripts.showDebugButton('Auto ENtry First',async()=>{
    //     const productMenu = document.getElementById('tabs-42--tab-1');
    //     productMenu.click();
    //     await essentials.sleep(3000);

    //     const addNewProductButton = document.querySelector('.ProductHeader_stackContainer__0EQem > button');
    //     addNewProductButton.click();
    // });
    
}
(async ()=>{
    if(typeof window=== 'undefined'){
        console.log('background');
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              switch(request.action){
                case 'userLogout':
                  chrome.cookies.remove({"url": 'https://facebook.com', "name": 'c_user'}, function(cookie) {});
                  sendResponse('success');
                break;
              }
            }
        );
    }else{
        if(window.location.href.includes('chrome-extension')){
           
            await popupSetup();
        }else{

            await contentSetup();
        }
    }
})();

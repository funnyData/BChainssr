webpackJsonp([9],{524:function(t,e,n){n(673);var r=n(53)(n(675),n(676),"data-v-c39c4094",null);t.exports=r.exports},526:function(t,e,n){t.exports=n.p+"but_del.png?e2cd43ce0b72dfb1627a1ed6ee0f2c19"},527:function(t,e,n){t.exports=n.p+"icon_good.png?5091516b575410f07271b5d437104145"},528:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(531),o=function(t){return t&&t.__esModule?t:{default:t}}(r),a={};a.formatDate1=function(t){var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<60?"刚刚":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"},a.formatDate2=function(t,e){if(""!==t&&null!=t){var n=new Date(t),r=n.getFullYear(),o=n.getMonth()+1,a=n.getDate(),i=n.getHours(),c=n.getMinutes(),s=n.getSeconds();return"china"===e?r+"年"+o+"月"+a+"日  "+i+":"+c+":"+s:(o<10&&(o="0"+o),a<10&&(a="0"+a),i<10&&(i="0"+i),c<10&&(c="0"+c),s<10&&(s="0"+s),r+e+o+e+a+"  "+i+":"+c+":"+s)}},a.localItem=function(t,e){return 1===arguments.length?window.localStorage.getItem(t):window.localStorage.setItem(t,e)},a.removeLocalItem=function(t){return t?window.localStorage.removeItem(t):window.localStorage.removeItem()},a.setCookie=function(t,e){var n=new Date;n.setTime(n.getTime()+2592e6),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()},a.md5=o.default.hex_md5,a.isPoneAvailable=function(t){return!!/^[1][3,4,5,7,8][0-9]{9}$/.test(t)},a.isEmail=function(t){return new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$").test(t)},a.getCookie=function(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1);if(-1!==o.indexOf(e))return o.substring(e.length,o.length)}return null},a.delCookie=function(t){var e=new Date;e.setTime(e.getTime()-1);var n=a.getCookie(t);console.log(n),null!=n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())},a.getTarget=function(t){return t.target||t.srcElement},a.stopProp=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},a.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},a.isLogin=function(){return!!a.getCookie("ngtoken")},a.isContains=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1},e.default=a},529:function(t,e,n){t.exports=n(532)},530:function(t,e,n){"use strict";e.__esModule=!0;var r=n(89),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(a,i){try{var c=e[a](i),s=c.value}catch(t){return void n(t)}if(!c.done)return o.default.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}},531:function(t,e,n){"use strict";function r(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;for(var n=1732584193,r=-271733879,o=-1732584194,u=271733878,d=0;d<t.length;d+=16){var f=n,p=r,h=o,m=u;n=a(n,r,o,u,t[d+0],7,-680876936),u=a(u,n,r,o,t[d+1],12,-389564586),o=a(o,u,n,r,t[d+2],17,606105819),r=a(r,o,u,n,t[d+3],22,-1044525330),n=a(n,r,o,u,t[d+4],7,-176418897),u=a(u,n,r,o,t[d+5],12,1200080426),o=a(o,u,n,r,t[d+6],17,-1473231341),r=a(r,o,u,n,t[d+7],22,-45705983),n=a(n,r,o,u,t[d+8],7,1770035416),u=a(u,n,r,o,t[d+9],12,-1958414417),o=a(o,u,n,r,t[d+10],17,-42063),r=a(r,o,u,n,t[d+11],22,-1990404162),n=a(n,r,o,u,t[d+12],7,1804603682),u=a(u,n,r,o,t[d+13],12,-40341101),o=a(o,u,n,r,t[d+14],17,-1502002290),r=a(r,o,u,n,t[d+15],22,1236535329),n=i(n,r,o,u,t[d+1],5,-165796510),u=i(u,n,r,o,t[d+6],9,-1069501632),o=i(o,u,n,r,t[d+11],14,643717713),r=i(r,o,u,n,t[d+0],20,-373897302),n=i(n,r,o,u,t[d+5],5,-701558691),u=i(u,n,r,o,t[d+10],9,38016083),o=i(o,u,n,r,t[d+15],14,-660478335),r=i(r,o,u,n,t[d+4],20,-405537848),n=i(n,r,o,u,t[d+9],5,568446438),u=i(u,n,r,o,t[d+14],9,-1019803690),o=i(o,u,n,r,t[d+3],14,-187363961),r=i(r,o,u,n,t[d+8],20,1163531501),n=i(n,r,o,u,t[d+13],5,-1444681467),u=i(u,n,r,o,t[d+2],9,-51403784),o=i(o,u,n,r,t[d+7],14,1735328473),r=i(r,o,u,n,t[d+12],20,-1926607734),n=c(n,r,o,u,t[d+5],4,-378558),u=c(u,n,r,o,t[d+8],11,-2022574463),o=c(o,u,n,r,t[d+11],16,1839030562),r=c(r,o,u,n,t[d+14],23,-35309556),n=c(n,r,o,u,t[d+1],4,-1530992060),u=c(u,n,r,o,t[d+4],11,1272893353),o=c(o,u,n,r,t[d+7],16,-155497632),r=c(r,o,u,n,t[d+10],23,-1094730640),n=c(n,r,o,u,t[d+13],4,681279174),u=c(u,n,r,o,t[d+0],11,-358537222),o=c(o,u,n,r,t[d+3],16,-722521979),r=c(r,o,u,n,t[d+6],23,76029189),n=c(n,r,o,u,t[d+9],4,-640364487),u=c(u,n,r,o,t[d+12],11,-421815835),o=c(o,u,n,r,t[d+15],16,530742520),r=c(r,o,u,n,t[d+2],23,-995338651),n=s(n,r,o,u,t[d+0],6,-198630844),u=s(u,n,r,o,t[d+7],10,1126891415),o=s(o,u,n,r,t[d+14],15,-1416354905),r=s(r,o,u,n,t[d+5],21,-57434055),n=s(n,r,o,u,t[d+12],6,1700485571),u=s(u,n,r,o,t[d+3],10,-1894986606),o=s(o,u,n,r,t[d+10],15,-1051523),r=s(r,o,u,n,t[d+1],21,-2054922799),n=s(n,r,o,u,t[d+8],6,1873313359),u=s(u,n,r,o,t[d+15],10,-30611744),o=s(o,u,n,r,t[d+6],15,-1560198380),r=s(r,o,u,n,t[d+13],21,1309151649),n=s(n,r,o,u,t[d+4],6,-145523070),u=s(u,n,r,o,t[d+11],10,-1120210379),o=s(o,u,n,r,t[d+2],15,718787259),r=s(r,o,u,n,t[d+9],21,-343485551),n=l(n,f),r=l(r,p),o=l(o,h),u=l(u,m)}return Array(n,r,o,u)}function o(t,e,n,r,o,a){return l(u(l(l(e,t),l(r,a)),o),n)}function a(t,e,n,r,a,i,c){return o(e&n|~e&r,t,e,a,i,c)}function i(t,e,n,r,a,i,c){return o(e&r|n&~r,t,e,a,i,c)}function c(t,e,n,r,a,i,c){return o(e^n^r,t,e,a,i,c)}function s(t,e,n,r,a,i,c){return o(n^(e|~r),t,e,a,i,c)}function l(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function u(t,e){return t<<e|t>>>32-e}function d(t){for(var e=Array(),n=(1<<m)-1,r=0;r<t.length*m;r+=m)e[r>>5]|=(t.charCodeAt(r/m)&n)<<r%32;return e}function f(t){for(var e=h?"0123456789ABCDEF":"0123456789abcdef",n="",r=0;r<4*t.length;r++)n+=e.charAt(t[r>>2]>>r%4*8+4&15)+e.charAt(t[r>>2]>>r%4*8&15);return n}Object.defineProperty(e,"__esModule",{value:!0});var p={},h=0,m=8;p.hex_md5=function(t){return f(r(d(t),t.length*m))},e.default=p},532:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(533),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},533:function(t,e){!function(e){"use strict";function n(t,e,n,r){var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),c=new p(r||[]);return i._invoke=l(t,n,c),i}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function i(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(n,o,a,i){var c=r(t[n],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&x.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){s.value=t,a(s)},i)}i(c.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(t,e,n){var o=C;return function(a,i){if(o===P)throw new Error("Generator is already running");if(o===L){if("throw"===a)throw i;return m()}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=u(c,n);if(s){if(s===I)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===C)throw o=L,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=P;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?L:$,l.arg===I)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=L,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,u(t,e),"throw"===e.method))return I;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return I}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,I;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,I):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,I)}function d(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(d,this),this.reset(!0)}function h(t){if(t){var e=t[y];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(x.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=g,e.done=!0,e};return r.next=r}}return{next:m}}function m(){return{value:g,done:!0}}var g,v=Object.prototype,x=v.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},y=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",_=b.toStringTag||"@@toStringTag",k="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(k&&(t.exports=E));E=e.regeneratorRuntime=k?t.exports:{},E.wrap=n;var C="suspendedStart",$="suspendedYield",P="executing",L="completed",I={},z={};z[y]=function(){return this};var S=Object.getPrototypeOf,T=S&&S(S(h([])));T&&T!==v&&x.call(T,y)&&(z=T);var j=i.prototype=o.prototype=Object.create(z);a.prototype=j.constructor=i,i.constructor=a,i[_]=a.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(j),t},E.awrap=function(t){return{__await:t}},c(s.prototype),s.prototype[w]=function(){return this},E.AsyncIterator=s,E.async=function(t,e,r,o){var a=new s(n(t,e,r,o));return E.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},c(j),j[_]="Generator",j[y]=function(){return this},j.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},E.values=h,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&x.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=g),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=x.call(o,"catchLoc"),c=x.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&x.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,I):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),I},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),f(n),I}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;f(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=g),I}}}(function(){return this}()||Function("return this")())},534:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(528),o=function(t){return t&&t.__esModule?t:{default:t}}(r),a={};a.sendCodeed=function(t,e){var n=60;e.innerHTML=t.$t("lang.form.send")+"("+n+"s)";var r=t.$route.path,o=setInterval(function(){if(t.$route.path!==r)return void clearInterval(o);n<=0?(e.innerHTML=t.$t("lang.form.getCode"),clearInterval(o)):(n=--n,e.innerHTML=t.$t("lang.form.sended")+"("+n+"s)")},1e3)},a.showDel=function(t,e){t.rules[e].class="del",t.rules[e].message=""},a.delContent=function(t,e){t.registForm[e]=""},a.checkPhone=function(t,e){return""===t.form.phone?(e||(t.rules.phone.class="del",t.rules.phone.message=t.$t("lang.form.phonePrompt")),!1):o.default.isPoneAvailable(t.form.phone)?(t.rules.phone.class="pass",t.rules.phone.message="",!0):(e||(t.rules.phone.class="del",t.rules.phone.message=t.$t("lang.form.phoneError")),!1)},a.checkPhoneCode=function(t,e){return t.isSendPhoneCode?""===t.form.code?(e||(t.rules.code.class="del",t.rules.code.message=t.$t("lang.form.codePrompt")),!1):(t.rules.code.class="pass",t.rules.code.message="",!0):(e||(t.rules.code.class="del",t.rules.code.message=t.$t("lang.form.codePrompt")),!1)},a.checkPass=function(t,e){var n=new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);return""===t.form.password?(e||(t.rules.password.class="del",t.rules.password.message=t.$t("lang.form.passPrompt")),!1):t.form.password.length<6?(e||(t.rules.password.class="del",t.rules.password.message=t.$t("lang.form.passLast6")),!1):n.test(t.form.password)?(t.rules.password.class="pass",t.rules.password.message="",!0):(e||(t.rules.password.class="del",t.rules.password.message=t.$t("lang.form.numberAndLetter")),!1)},a.checkRePass=function(t,e){return""===t.form.repassword?(e||(t.rules.repassword.class="del",t.rules.repassword.message=t.$t("lang.form.repassPrompt")),!1):t.form.password!==t.form.repassword?(e||(t.rules.repassword.class="del",t.rules.repassword.message=t.$t("lang.form.passInconsistent")),!1):(t.rules.repassword.class="pass",t.rules.repassword.message="",!0)},a.checkEmail=function(t,e){return""===t.form.email?(e||(t.rules.email.class="del",t.rules.email.message=t.$t("lang.form.emailPrompt")),!1):o.default.isEmail(t.form.email)?(t.rules.email.class="pass",t.rules.email.message="",!0):(e||(t.rules.email.class="del",t.rules.email.message=t.$t("lang.form.emailFormatError")),!1)},a.checkEmailCode=function(t,e){return t.isSendEmailCode?""===t.form.emailCode?(e||(t.rules.emailCode.class="del",t.rules.emailCode.message=t.$t("lang.form.codePrompt")),!1):(t.rules.emailCode.class="pass",t.rules.emailCode.message="",!0):(e||(t.rules.emailCode.class="del",t.rules.emailCode.message=t.$t("lang.form.codePrompt")),!1)},a.initGreetest=function(t,e,n){window.initGeetest({gt:e.gt,challenge:e.challenge,offline:!e.success,new_captcha:e.new_captcha,product:"bind"},function(t){n(t)})},a.codeKeyup=function(t,e,n){var r=o.default.getTarget(e),a=r.value;a.length>1&&(r.value=a=a.slice(0,1)),/^\d+(\.\d+)?$/.test(a)?(t.codeValue[n]=a,r.nextElementSibling&&""===r.nextElementSibling.value?r.nextElementSibling.focus():r.blur()):e.target.value=""},e.default=a},535:function(t,e,n){"use strict";"v0.4.6 Geetest Inc.";var r=n(193),o=function(t){return t&&t.__esModule?t:{default:t}}(r);!function(t){function e(t){this._obj=t}function n(t){var n=this;new e(t)._each(function(t,e){n[t]=e})}if(void 0===t)throw new Error("Geetest requires browser environment");var r=t.document,a=t.Math,i=r.getElementsByTagName("head")[0];e.prototype={_each:function(t){var e=this._obj;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n]);return this}},n.prototype={api_server:"api.geetest.com",protocol:"http://",typePath:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return s(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var n=this;new e(t)._each(function(t,e){n[t]=e})}};var c=function(t){return"number"==typeof t},s=function(t){return"string"==typeof t},l=function(t){return"boolean"==typeof t},u=function(t){return"object"===(void 0===t?"undefined":(0,o.default)(t))&&null!==t},d=function(t){return"function"==typeof t},f={},p={},h=function(){return parseInt(1e4*a.random())+(new Date).valueOf()},m=function(t,e){var n=r.createElement("script");n.charset="UTF-8",n.async=!0,n.onerror=function(){e(!0)};var o=!1;n.onload=n.onreadystatechange=function(){o||n.readyState&&"loaded"!==n.readyState&&"complete"!==n.readyState||(o=!0,setTimeout(function(){e(!1)},0))},n.src=t,i.appendChild(n)},g=function(t){return t.replace(/^https?:\/\/|\/$/g,"")},v=function(t){return t=t.replace(/\/+/g,"/"),0!==t.indexOf("/")&&(t="/"+t),t},x=function(t){if(!t)return"";var n="?";return new e(t)._each(function(t,e){(s(e)||c(e)||l(e))&&(n=n+encodeURIComponent(t)+"="+encodeURIComponent(e)+"&")}),"?"===n&&(n=""),n.replace(/&$/,"")},b=function(t,e,n,r){e=g(e);var o=v(n)+x(r);return e&&(o=t+e+o),o},y=function(t,e,n,r,o){!function a(i){var c=b(t,e[i],n,r);m(c,function(t){t?i>=e.length-1?o(!0):a(i+1):o(!1)})}(0)},w=function(e,n,r,o){if(u(r.getLib))return r._extend(r.getLib),void o(r);if(r.offline)return void o(r._get_fallback_config());var a="geetest_"+h();t[a]=function(e){o("success"==e.status?e.data:e.status?r._get_fallback_config():e),t[a]=void 0;try{delete t[a]}catch(t){}},y(r.protocol,e,n,{gt:r.gt,callback:a},function(t){t&&o(r._get_fallback_config())})},_=function(t,e){var n={networkError:"网络错误",gtTypeError:"gt字段不是字符串类型"};if("function"!=typeof e.onError)throw new Error(n[t]);e.onError(n[t])};(function(){return t.Geetest||r.getElementById("gt_lib")})()&&(p.slide="loaded"),t.initGeetest=function(e,r){var o=new n(e);e.https?o.protocol="https://":e.protocol||(o.protocol=t.location.protocol+"//"),"050cffef4ae57b5d5e529fea9540b0d1"!==e.gt&&"3bd38408ae4af923ed36e13819b14d42"!==e.gt||(o.apiserver="yumchina.geetest.com/",o.api_server="yumchina.geetest.com"),u(e.getType)&&o._extend(e.getType),w([o.api_server||o.apiserver],o.typePath,o,function(e){var n=e.type,a=function(){o._extend(e),r(new t.Geetest(o))};f[n]=f[n]||[];var i=p[n]||"init";"init"===i?(p[n]="loading",f[n].push(a),y(o.protocol,e.static_servers||e.domains,e[n]||e.path,null,function(t){if(t)p[n]="fail",_("networkError",o);else{p[n]="loaded";for(var e=f[n],r=0,a=e.length;r<a;r+=1){var i=e[r];d(i)&&i()}f[n]=[]}})):"loaded"===i?a():"fail"===i?_("networkError",o):"loading"===i&&f[n].push(a)})}}(window)},673:function(t,e,n){var r=n(674);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(509)("1885acf2",r,!0)},674:function(t,e,n){e=t.exports=n(508)(),e.push([t.i,"\nbody[data-v-c39c4094],\nh1[data-v-c39c4094],\nh2[data-v-c39c4094],\nh3[data-v-c39c4094],\nh4[data-v-c39c4094],\nh5[data-v-c39c4094],\nh6[data-v-c39c4094],\nhr[data-v-c39c4094],\np[data-v-c39c4094],\nblockquote[data-v-c39c4094],\ndl[data-v-c39c4094],\ndt[data-v-c39c4094],\ndd[data-v-c39c4094],\nul[data-v-c39c4094],\nol[data-v-c39c4094],\nli[data-v-c39c4094],\npre[data-v-c39c4094],\nform[data-v-c39c4094],\nfieldset[data-v-c39c4094],\nlegend[data-v-c39c4094],\nbutton[data-v-c39c4094],\ninput[data-v-c39c4094],\ntextarea[data-v-c39c4094],\nth[data-v-c39c4094],\ntd[data-v-c39c4094] {\n  margin: 0;\n  padding: 0;\n}\nhtml[data-v-c39c4094] {\n  color: #000;\n  overflow-y: scroll;\n  overflow: -moz-scrollbars-vertical;\n}\nbody[data-v-c39c4094],\nbutton[data-v-c39c4094],\ninput[data-v-c39c4094],\nselect[data-v-c39c4094],\ntextarea[data-v-c39c4094] {\n  font-size: 14px;\n}\nh1[data-v-c39c4094],\nh2[data-v-c39c4094],\nh3[data-v-c39c4094],\nh4[data-v-c39c4094],\nh5[data-v-c39c4094],\nh6[data-v-c39c4094] {\n  font-size: 100%;\n}\nem[data-v-c39c4094],\ni[data-v-c39c4094] {\n  font-style: normal;\n}\nsmall[data-v-c39c4094] {\n  font-size: 14px;\n}\nul[data-v-c39c4094],\nol[data-v-c39c4094] {\n  list-style: none;\n}\na[data-v-c39c4094] {\n  text-decoration: none;\n}\na[data-v-c39c4094]:hover {\n  text-decoration: underline;\n}\nfieldset[data-v-c39c4094],\nimg[data-v-c39c4094] {\n  border: 0;\n}\nbutton[data-v-c39c4094],\ninput[data-v-c39c4094],\nselect[data-v-c39c4094],\ntextarea[data-v-c39c4094] {\n  font-size: 100%;\n}\nimg[data-v-c39c4094] {\n  -ms-interpolation-mode: bicubic;\n}\ntextarea[data-v-c39c4094] {\n  resize: vertical;\n}\n.left[data-v-c39c4094] {\n  float: left;\n}\n.right[data-v-c39c4094] {\n  float: right;\n}\n.overflow[data-v-c39c4094] {\n  overflow: hidden;\n}\n.hide[data-v-c39c4094] {\n  display: none;\n}\n.block[data-v-c39c4094] {\n  display: block;\n}\n.inline[data-v-c39c4094] {\n  display: inline;\n}\n.textCenter[data-v-c39c4094] {\n  text-align: center;\n}\nlabel[data-v-c39c4094],\nbutton[data-v-c39c4094] {\n  cursor: pointer;\n}\n.clearfix[data-v-c39c4094]:after {\n  content: ' ';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.clearfix[data-v-c39c4094] {\n  zoom: 1;\n}\n.clear[data-v-c39c4094] {\n  clear: both;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.wordwrap[data-v-c39c4094] {\n  word-break: break-all;\n  word-wrap: break-word;\n}\npre.wordwrap[data-v-c39c4094] {\n  white-space: pre-wrap;\n}\nbody[data-v-c39c4094],\nform[data-v-c39c4094] {\n  position: relative;\n}\ntd[data-v-c39c4094] {\n  text-align: left;\n}\nimg[data-v-c39c4094] {\n  border: 0;\n}\n.button-loading[data-v-c39c4094] {\n  position: relative;\n}\n.button-loading[data-v-c39c4094]:after {\n  content: '';\n  width: 30px;\n  height: 32px;\n  position: absolute;\n  background: url("+n(510)+');\n  animation: spin 1s linear infinite;\n  left: 50%;\n  top: 50%;\n  margin-left: -15px;\n  margin-top: -16px;\n}\n*[data-v-c39c4094] {\n  box-sizing: border-box;\n}\na[data-v-c39c4094]:hover {\n  text-decoration: none;\n}\n.raise[data-v-c39c4094] {\n  color: #00ffc0;\n}\n.fail[data-v-c39c4094] {\n  color: #ff3320;\n}\n.none[data-v-c39c4094] {\n  display: none;\n}\n.mainMg[data-v-c39c4094] {\n  margin: 20px;\n}\ninput[data-v-c39c4094]::-webkit-input-placeholder,\ntextarea[data-v-c39c4094]::-webkit-input-placeholder {\n  font-size: 16px;\n  color: #a9c2fd;\n}\ninput[data-v-c39c4094]:-moz-placeholder,\ntextarea[data-v-c39c4094]:-moz-placeholder {\n  font-size: 16px;\n  color: #a9c2fd;\n}\ninput[data-v-c39c4094]::-moz-placeholder,\ntextarea[data-v-c39c4094]::-moz-placeholder {\n  font-size: 16px;\n  color: #a9c2fd;\n}\ninput[data-v-c39c4094]:-ms-input-placeholder,\ntextarea[data-v-c39c4094]:-ms-input-placeholder {\n  font-size: 16px;\n  color: #a9c2fd;\n}\ninput[data-v-c39c4094]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px #273c6c inset;\n  -webkit-text-fill-color: #fff;\n}\ninput[data-v-c39c4094],\nbutton[data-v-c39c4094],\nselect[data-v-c39c4094],\ntextarea[data-v-c39c4094] {\n  outline: none;\n}\ninput[type=text][data-v-c39c4094]:focus,\ninput[type=password][data-v-c39c4094]:focus {\n  border: 2px solid #4177fc;\n}\n.common-nav[data-v-c39c4094] {\n  padding: 60px 54px;\n  font-size: 16px;\n}\n.common-nav > a[data-v-c39c4094] {\n  cursor: pointer;\n  color: #fff;\n}\n.common-nav i[data-v-c39c4094] {\n  color: #0088ff;\n}\n@keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    transform: rotate(360deg);\n}\n}\n.codeInput[data-v-c39c4094] {\n  text-align: center;\n}\n.codeInput input[data-v-c39c4094] {\n  width: 53px;\n  height: 42px;\n  background-color: #273c6e;\n  border-radius: 4px;\n  border: solid 2px #304a87;\n  margin-right: 11px;\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n}\n.nomalInput[data-v-c39c4094] {\n  text-align: center;\n  width: 398px;\n  height: 56px;\n  margin: 0 auto 18px;\n  position: relative;\n}\n.nomalInput .del[data-v-c39c4094]:after {\n  content: " ";\n  display: inline-block;\n  vertical-align: -2px;\n  margin-left: 5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  background: url('+n(526)+');\n  background-size: 100% 100%;\n}\n.nomalInput .pass[data-v-c39c4094]:after {\n  content: " ";\n  display: inline-block;\n  vertical-align: -2px;\n  margin-left: 5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  background: url('+n(527)+');\n  background-size: 100% 100%;\n}\n.nomalInput > input[data-v-c39c4094] {\n  width: 100%;\n  height: 100%;\n  background-color: #273c6e;\n  border-radius: 8px;\n  border: solid 2px #304a87;\n  color: #fff;\n  font-size: 17px;\n  padding-left: 25px;\n}\n.nomalInput > i[data-v-c39c4094] {\n  position: absolute;\n  right: 12px;\n  top: 20px;\n  color: #38f1ff;\n  font-size: 12px;\n}\n.code[data-v-c39c4094] {\n  width: 398px;\n  height: 56px;\n  margin: 0 auto 18px;\n  position: relative;\n}\n.code i[data-v-c39c4094] {\n  position: absolute;\n  color: #38f1ff;\n  font-size: 12px;\n  right: 175px;\n  top: 20px;\n}\n.code .del[data-v-c39c4094]:after {\n  content: " ";\n  display: inline-block;\n  vertical-align: -3px;\n  margin-left: 5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  background: url('+n(526)+');\n  background-size: 100% 100%;\n}\n.code .pass[data-v-c39c4094]:after {\n  content: " ";\n  display: inline-block;\n  vertical-align: -3px;\n  margin-left: 5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  background: url('+n(527)+");\n  background-size: 100% 100%;\n}\n.code > input[data-v-c39c4094] {\n  width: 244px;\n  height: 56px;\n  background-color: #273c6e;\n  border-radius: 8px;\n  padding-left: 20px;\n  border: solid 2px #304a87;\n  color: #fff;\n  font-size: 16px;\n}\n.code > p[data-v-c39c4094] {\n  width: 244px;\n  height: 56px;\n  line-height: 52px;\n  font-size: 16px;\n  background-color: #273c6e;\n  border-radius: 8px;\n  padding-left: 20px;\n  border: solid 2px #304a87;\n  color: #fff;\n  display: inline-block;\n}\n.code span[data-v-c39c4094] {\n  width: 143px;\n  height: 56px;\n  margin-left: 6px;\n  color: #fff;\n  display: inline-block;\n  border-radius: 8px;\n  line-height: 56px;\n  background: #446bcd;\n  text-align: center;\n  cursor: pointer;\n  vertical-align: top;\n}\n.form_button[data-v-c39c4094] {\n  width: 320px;\n  height: 50px;\n  border-radius: 75px;\n  display: inline-block;\n  line-height: 50px;\n  color: #fff;\n  cursor: pointer;\n  text-align: center;\n}\n.no_button[data-v-c39c4094] {\n  background-color: #304a88;\n}\n.no_button img[data-v-c39c4094] {\n  animation: spin 1s linear infinite;\n  margin-top: 9px;\n}\n.ok_button[data-v-c39c4094] {\n  background-image: linear-gradient(180deg, #245bfc 0%, #00a7ff 100%);\n}\n.to_button[data-v-c39c4094] {\n  margin-top: 38px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.sbutton[data-v-c39c4094] {\n  margin-top: 50px;\n  text-align: center;\n}\n.changeEmail[data-v-c39c4094] {\n  background-color: #273c6c;\n}\n.changeEmail form[data-v-c39c4094] {\n  margin: 0 300px;\n}\n",""])},675:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(529),o=n.n(r),a=n(530),i=n.n(a),c=n(534),s=n.n(c),l=n(192),u=(n.n(l),n(528)),d=n.n(u);"undefined"!=typeof window&&n(535),e.default={name:"ChangeEmail",components:{},data:function(){return{button_status:0,isSendPhoneCode:!1,captchaObj:null,isSendEmailCode:!1,codeValue:[],tokenId:null,form:{code:"",email:""},rules:{code:{message:"",class:""},email:{message:"",class:""}}}},mounted:function(){this.initDate()},methods:{initDate:function(){var t=this;return i()(o.a.mark(function e(){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getGreetest();case 2:n=e.sent,r=t,n=n.data,s.a.initGreetest(r,n,function(t){r.captchaObj=t,r.captchaObj=t,t.onSuccess(function(){var e=t.getValidate();e.gee_token=n.gee_token;var o=r.$refs.send;o.className="button-loading",o.innerHTML="",l.resetSendSMS(e).then(function(t){o.className="",200===t.status?(r.tokenId=t.data.tokenId,r.isSendPhoneCode=!0,s.a.sendCodeed(r,o)):(o.innerHTML=r.$t("lang.form.getCode"),r.$prompt.error(r.$t("lang.errorPrompt."+t.message)))})})});case 6:case"end":return e.stop()}},e,t)}))()},showDel:function(t){s.a.showDel(this,t)},delContent:function(t){this.form[t]=""},checkCode:function(t){return s.a.checkPhoneCode(this,t)},clearVal:function(t){t.target.value=""},getCode:function(){this.$refs.send.innerHTML===this.$t("lang.form.getCode")&&this.captchaObj.verify()},checkEmail:function(t){return s.a.checkEmail(this,t)},codeKeyup:function(t,e){s.a.codeKeyup(this,t,e)},emailPassDown:function(){this.checkCode(!0)&&this.checkEmail(!0)&&this.isSendEmailCode&&this.isSendPhoneCode&&6===this.codeValue.length?this.button_status=2:this.button_status=0},getEmailCode:function(){var t=this;if(this.checkEmail(!0)&&!t.isSendEmailCode&&this.$refs.sendEmail.innerHTML===this.$t("lang.form.getCode")){var e=t.$refs.sendEmail;e.className="button-loading",e.innerHTML="",t.isSendEmailCode=!0,l.getEmailCodeByType({email:this.form.email,options:"set"}).then(function(n){e.className="",200===n.status?(s.a.sendCodeed(t,e),d.a.setCookie("email_token",n.data.email_token)):(e.innerHTML=t.$t("lang.form.getCode"),t.isSendEmailCode=!1,t.$prompt.error(t.$t("lang.errorPrompt."+n.message)))})}},changeEmail:function(){var t={mobile_code:this.form.code,email:this.form.email,email_code:this.codeValue.join(""),tokenId:this.tokenId},e=this;l.changeEmail(t).then(function(t){200===t.status?(e.$store.dispatch("setUserInfo",t.data.userinfo),e.$mask.showAlert(e.$t("lang.form.changeSuccess"),"success",function(){e.$router.push("/userCenter")},e.$t("lang.form.submit"))):(e.ispass=!0,e.$prompt.error(e.$t("lang.errorPrompt."+t.message)))})}}}},676:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"changeEmail mainMg"},[r("form",{style:{minHeight:this.$store.getters.getMinHeight},on:{keyup:t.emailPassDown}},[r("div",{staticClass:"common-nav"},[r("router-link",{attrs:{to:"userCenter"}},[t._v("账户安全")]),t._v(" >\n        "),r("i",[t._v("修改邮箱")])],1),t._v(" "),r("div",[r("div",{staticClass:"nomalInput"},[r("input",{attrs:{disabled:"true",type:"text"},domProps:{value:this.$store.state.user.userInfo?this.$store.state.user.userInfo.mobile:""}})]),t._v(" "),r("div",{staticClass:"code"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],attrs:{type:"text",placeholder:t.$t("lang.form.pleaseEnterCode")},domProps:{value:t.form.code},on:{focus:function(e){t.showDel("code")},blur:function(e){t.checkCode()},input:function(e){e.target.composing||t.$set(t.form,"code",e.target.value)}}}),t._v(" "),r("i",{class:t.rules.code.class,on:{click:function(e){t.delContent("code")}}},[t._v(t._s(t.rules.code.message))]),t._v(" "),r("span",{ref:"send",on:{click:function(e){t.getCode()}}},[t._v(t._s(t.$t("lang.form.getCode")))])]),t._v(" "),r("div",{staticClass:"code"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text",placeholder:t.$t("lang.form.emailPrompt")},domProps:{value:t.form.email},on:{focus:function(e){t.showDel("email")},blur:function(e){t.checkEmail()},input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("i",{class:t.rules.email.class,on:{click:function(e){t.delEmail("email")}}},[t._v(t._s(t.rules.email.message))]),t._v(" "),r("span",{ref:"sendEmail",on:{click:function(e){t.getEmailCode()}}},[t._v(t._s(t.$t("lang.form.getCode")))])]),t._v(" "),r("div",{staticClass:"codeInput"},[r("input",{attrs:{placeholder:t.$t("lang.form.eCodePrompt1"),type:"text"},on:{keyup:function(e){t.codeKeyup(e,0)},focus:t.clearVal}}),t._v(" "),r("input",{attrs:{placeholder:t.$t("lang.form.eCodePrompt2"),type:"text"},on:{keyup:function(e){t.codeKeyup(e,1)},focus:t.clearVal}}),t._v(" "),r("input",{attrs:{placeholder:t.$t("lang.form.eCodePrompt3"),type:"text"},on:{keyup:function(e){t.codeKeyup(e,2)},focus:t.clearVal}}),t._v(" "),r("input",{attrs:{placeholder:t.$t("lang.form.eCodePrompt4"),type:"text"},on:{keyup:function(e){t.codeKeyup(e,3)},focus:t.clearVal}}),t._v(" "),r("input",{attrs:{placeholder:t.$t("lang.form.eCodePrompt5"),type:"text"},on:{keyup:function(e){t.codeKeyup(e,4)},focus:t.clearVal}}),t._v(" "),r("input",{attrs:{placeholder:t.$t("lang.form.eCodePrompt6"),type:"text"},on:{keyup:function(e){t.codeKeyup(e,5)},focus:t.clearVal}})]),t._v(" "),r("div",{staticClass:"to_button click_loading"},[r("a",{class:2===t.button_status?"ok_button form_button":"no_button form_button",on:{click:t.changeEmail}},[0===t.button_status||2===t.button_status?r("span",[t._v(t._s(t.$t("lang.form.submit")))]):t._e(),t._v(" "),1===t.button_status?r("img",{attrs:{src:n(510)}}):t._e()])])])])])])},staticRenderFns:[]}}});
module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e),n.d(e,"GetContextWebInformation",(function(){return o})),n.d(e,"GetFormDigestValue",(function(){return r})),n.d(e,"PeoplePicker",(function(){return u}));var o=function(t){return new Promise((function(e,n){fetch("".concat(t,"/_api/contextinfo"),{method:"POST"}).then((function(t){return t.json()})).then((function(t){e(t.d.GetContextWebInformation)})).catch((function(t){e(t)}))}))},r=function(t){return new Promise((function(e,n){fetch("".concat(t,"/_api/contextinfo"),{method:"POST"}).then((function(t){return t.json()})).then((function(t){e(t.d.GetContextWebInformation.FormDigestValue)})).catch((function(t){n(t)}))}))},c=n(0),i=n.n(c),u=function(t){var e=t.schema,n=t.elementName,o=t.getUserInfo,r=[{type:"text/javascript",src:"http://localhost:8081/_layouts/15/clienttemplates.js"},{type:"text/javascript",src:"http://localhost:8081/_layouts/15/clientforms.js"},{type:"text/javascript",src:"http://localhost:8081/_layouts/15/clientpeoplepicker.js"},{type:"text/javascript",src:"http://localhost:8081/_layouts/15/autofill.js"}];return Object(c.useEffect)((function(){r.forEach((function(t){var e=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type=t.type,n.src=t.src,e.appendChild(n)}));var t=new MutationObserver((function(t){for(var e=[],n=0;n<t[0].addedNodes.length;n++)e.push({displayName:t[0].addedNodes[n].childNodes[1].title,account:t[0].addedNodes[n].attributes.sid.value});o(e)}));return setTimeout((function(){ExecuteOrDelayUntilScriptLoaded((function(){SPClientPeoplePicker_InitStandaloneControlWrapper(n,null,e);var o=document.querySelector("#".concat(n,"_TopSpan_ResolvedList"));t.observe(o,{childList:!0})}),"sp.core.js")}),0),function(){t.disconnect()}}),[]),i.a.createElement("div",{id:n})}}]);
module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},s=(r(o,i),o.locals?o.locals:{});e.exports=s},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function c(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u=n[a]||0,l="".concat(a," ").concat(u);n[a]=u+1;var d=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function h(e,t){var n,r,o;if(t.singleton){var i=b++;n=m||(m=u(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);s[o].references--}for(var i=a(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".sp-peoplepicker-topLevel,\r\n.sp-peoplepicker-topLevelDisabled {\r\n\tcursor: text;\r\n\theight: 100%;\r\n\twidth: 371px;\r\n\tposition: relative;\r\n\tpadding: 3px 25px 3px 0px;\r\n}\r\ninput[type='password'],\r\ninput[type='text'],\r\ninput[type='file'],\r\nselect,\r\ntextarea,\r\n.sp-peoplepicker-topLevel,\r\n.sp-peoplepicker-topLevelDisabled,\r\n.sp-peoplepicker-autoFillContainer,\r\n.ms-inputBox {\r\n\tborder: 1px solid #ababab;\r\n\tbackground-color: #fff;\r\n\tbackground-color: rgba(255, 255, 255, 0.85);\r\n\tcolor: #444;\r\n}\r\ninput,\r\nselect,\r\nlabel,\r\ntextarea,\r\nbutton,\r\noption {\r\n\tfont-family: inherit;\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\tvertical-align: middle;\r\n}\r\n.sp-peoplepicker-autoFillContainer {\r\n\tz-index: 1;\r\n\tpadding: 0px;\r\n\tdisplay: none;\r\n\tcursor: default;\r\n\tmax-width: 300px;\r\n\tmin-width: 300px;\r\n\tposition: absolute;\r\n\tborder-color: #c6c6c6;\r\n}\r\n.sp-peoplepicker-initialHelpText {\r\n\ttop: 3px;\r\n\tleft: 4px;\r\n\tposition: absolute;\r\n}\r\n.ms-helperText,\r\ninput.ms-helperText {\r\n\tcolor: #777;\r\n}\r\n.sp-peoplepicker-waitImg {\r\n\twidth: 16px;\r\n\theight: 16px;\r\n\tdisplay: none;\r\n\tfont-size: 0px;\r\n\tposition: absolute;\r\n}\r\nimg {\r\n\tborder: none;\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\ninput[type='password'],\r\ninput[type='text'],\r\ninput[type='file'],\r\ntextarea,\r\n.ms-inputBox {\r\n\tpadding: 2px 5px;\r\n}\r\ninput,\r\nselect,\r\nlabel,\r\ntextarea,\r\nbutton,\r\noption {\r\n\tfont-family: inherit;\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\tvertical-align: middle;\r\n}\r\ninput.sp-peoplepicker-editorInput[type='text'] {\r\n\tborder: 0px;\r\n\tpadding: 0px 1px;\r\n\tmargin-left: 5px;\r\n\tvertical-align: inherit;\r\n\tbackground-color: transparent;\r\n}\r\ninput.sp-peoplepicker-editorInput[type='text']:focus {\r\n\toutline: 0px;\r\n}\r\n.sp-peoplepicker-autoFillContainer .sp-autoFill-scroll {\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tmax-height: 200px;\r\n\tmin-width: 100%;\r\n\tpadding-top: 3px;\r\n\toverflow-y: auto;\r\n\toverflow-x: hidden;\r\n\tmargin-right: 10px;\r\n\tlist-style-type: none;\r\n\tbox-shadow: 0px 0px 0px 0px transparent;\r\n\tbackground-color: #fff;\r\n}\r\n.sp-peoplepicker-autoFillContainer .ms-core-menu-item {\r\n\twhite-space: nowrap;\r\n\tpadding: 1px 5px 3px 5px;\r\n}\r\n.ms-core-menu-item {\r\n\tmargin: 0px;\r\n\tcursor: pointer;\r\n\tborder: 1px solid transparent;\r\n}\r\n.ms-core-menu-link:link,\r\n.ms-core-menu-link:visited {\r\n\tcolor: #444;\r\n}\r\n.sp-peoplepicker-autoFillContainer .ms-core-menu-link {\r\n\tpadding: 0px;\r\n}\r\na.ms-core-menu-link {\r\n\tpadding: 6px 8px;\r\n\tcolor: #444;\r\n\ttext-decoration: none;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n}\r\na:visited {\r\n\tcolor: #663399;\r\n\ttext-decoration: none;\r\n}\r\na,\r\n.ms-link:visited {\r\n\tcolor: #0072c6;\r\n\ttext-decoration: none;\r\n}\r\n.sp-autoFill-scroll .ms-core-menu-label {\r\n\tborder: none;\r\n}\r\n.sp-peoplepicker-autoFillContainer .ms-core-menu-label {\r\n\tdisplay: block;\r\n}\r\n.ms-core-menu-label,\r\n.ms-core-menu-labelCompact {\r\n\tborder: 1px solid transparent;\r\n\tword-wrap: break-word;\r\n}\r\n.ms-metadata,\r\n.ms-descriptiontext {\r\n\tcolor: #777;\r\n}\r\n.ms-textSmall,\r\n.ms-textXSmall,\r\n.ms-metadata,\r\n.ms-descriptiontext,\r\n.ms-secondaryCommandLink {\r\n\tfont-size: 0.9em;\r\n}\r\n.ms-metadata,\r\n.ms-descriptiontext,\r\n.ms-secondaryCommandLink {\r\n\tfont-family: 'Segoe UI', 'Segoe', Tahoma, Helvetica, Arial, sans-serif;\r\n}\r\n.ms-core-menu-separatorHr {\r\n\tmargin: 2px 0px;\r\n\tcolor: #c6c6c6;\r\n}\r\nhr {\r\n\tborder-width: 0px;\r\n\tborder-top: 1px solid #c6c6c6;\r\n}\r\nhr {\r\n\tdisplay: block;\r\n\tunicode-bidi: isolate;\r\n\tmargin-block-start: 0.5em;\r\n\tmargin-block-end: 0.5em;\r\n\tmargin-inline-start: auto;\r\n\tmargin-inline-end: auto;\r\n\toverflow: hidden;\r\n\tborder-style: inset;\r\n\tborder-width: 1px;\r\n}\r\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t),n.d(t,"GetContextWebInformation",(function(){return i})),n.d(t,"GetFormDigestValue",(function(){return s})),n.d(t,"GetCurrentUser",(function(){return c})),n.d(t,"SendEmail",(function(){return U})),n.d(t,"GetGroup",(function(){return a})),n.d(t,"CreateGroup",(function(){return p})),n.d(t,"GetGroupMembers",(function(){return u})),n.d(t,"AddUsersToGroup",(function(){return l})),n.d(t,"RemoveUsersFromGroup",(function(){return d})),n.d(t,"GetAssociatedGroups",(function(){return f})),n.d(t,"ChangeGroupOwner",(function(){return m})),n.d(t,"GetList",(function(){return y})),n.d(t,"GetListItems",(function(){return G})),n.d(t,"AddItemsToList",(function(){return I})),n.d(t,"RemoveItemsFromList",(function(){return _})),n.d(t,"GetListDefaultView",(function(){return j})),n.d(t,"GetListViews",(function(){return L})),n.d(t,"GetListFields",(function(){return N})),n.d(t,"CreateList",(function(){return x})),n.d(t,"DeleteList",(function(){return P})),n.d(t,"PeoplePicker",(function(){return v})),n.d(t,"GetListPermissions",(function(){return A})),n.d(t,"BreakListPermissionsInheritance",(function(){return S})),n.d(t,"RemovePermissionsFromList",(function(){return T})),n.d(t,"AddPermissionsToList",(function(){return D})),n.d(t,"GetSitePermissions",(function(){return C})),n.d(t,"BreakSitePermissionsInheritance",(function(){return q})),n.d(t,"ResetSitePermissionsInheritance",(function(){return k})),n.d(t,"RemovePermissionsFromSite",(function(){return R})),n.d(t,"AddPermissionsToSite",(function(){return B})),n.d(t,"GetSite",(function(){return F})),n.d(t,"GetUser",(function(){return g})),n.d(t,"GetUserGroups",(function(){return w}));var o=function(e){var t=e.url,n=void 0===t?"":t,o=e.endPoint,i=e.method,s=void 0===i?"get":i,c=e.body,a=void 0===c?"":c,u=e.headers;console.log("_spPageContextInfo.webAbsoluteUrl",_spPageContextInfo.webAbsoluteUrl),""===n&&(n=_spPageContextInfo.webAbsoluteUrl);var l={method:s};return console.log("typeof body",r(a),a),"string"!=typeof a?l.body=JSON.stringify(a):""!==a&&(l.body=a),l.headers=u||{Accept:"application/json;odata=verbose","content-type":"application/json;odata=verbose"},new Promise((function(e,t){fetch("".concat(n).concat(o),l).then((function(r){r.ok?(console.groupCollapsed("--RestCall Details",o),console.warn("url: '".concat(n,"'")),console.warn("endPoint: '".concat(o,"'")),console.warn("method: '".concat(s,"'")),console.warn("body:",l.body),console.warn("headers:",l.headers),console.warn("results: ".concat(r)),console.groupEnd(),e(r.json())):(console.groupCollapsed("--RestCall Details - not OK"),console.warn("url: '".concat(n,"'")),console.warn("endPoint: '".concat(o,"'")),console.warn("method: '".concat(s,"'")),console.warn("body:",l.body),console.warn("headers:",l.headers),console.warn("results: ".concat(r.status," ").concat(r.statusText)),console.groupEnd(),t("".concat(r.status," ").concat(r.statusText)))}))}))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(t,n){o({url:e,endPoint:"/_api/contextinfo",method:"post"}).then((function(e){t(e.d.GetContextWebInformation)})).catch((function(e){n(e)}))}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(t,n){i(e).then((function(e){t(e.FormDigestValue)})).catch((function(e){n(e)}))}))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(t,n){o({url:e,endPoint:"/_api/web/CurrentUser"}).then((function(e){t(e.d)})).catch((function(e){n(e)}))}))},a=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.groupId,s=e.groupName;if(i)t="/_api/web/SiteGroups(".concat(i,")");else{if(!s)return Promise.reject("GetGroup requires GroupId or GroupName");t="/_api/web/SiteGroups/getByName('".concat(s,"')")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},u=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.groupId,s=e.groupName;if(i)t="/_api/web/SiteGroups(".concat(i,")/Users");else{if(!s)return Promise.reject("GetGroupMembers requires GroupId or GroupName");t="/_api/web/SiteGroups/getByName('".concat(s,"')/Users")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d.results)})).catch((function(e){n(e)}))}))},l=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.groupId,s=e.groupName,c=e.loginName;if(!c)return Promise.reject("AddUsersToGroup requires loginName");if(Array.isArray(c)||(c=[c]),i)t="/_api/web/SiteGroups(".concat(i,")/Users");else{if(!s)return Promise.reject("AddUsersToGroup requires GroupId or GroupName");t="/_api/web/SiteGroups/getByName('".concat(s,"')/Users(").concat(LoginName,")")}return new Promise((function(e,n){for(var i=[],s=0;s<c.length;s++)i.push(o({url:r,endPoint:t,method:"post",body:{__metadata:{type:"SP.User"},LoginName:c[s]},headers:{accept:"application/json; odata=verbose","content-type":"application/json; odata=verbose"}}));Promise.all(i).then((function(t){e(t.map((function(e){return e.d})))})).catch((function(e){n(e)}))}))},d=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.groupId,c=e.groupName,a=e.loginName,u=e.userId;if(i)t="/_api/web/SiteGroups(".concat(i,")/Users");else{if(!c)return Promise.reject("RemoveUsersFromGroup requires GroupId or GroupName");t="/_api/web/SiteGroups/getByName('".concat(c,"')/Users")}if(a)Array.isArray(a)||(u=[a]);else{if(!u)return Promise.reject("RemoveUserFromGroup requires userId or logonName");Array.isArray(u)||(u=[u])}return new Promise((function(e,n){s(r).then((function(i){var s=[];if(a)for(var c=0;c<a.length;c++)s.push(o({url:r,endPoint:"".concat(t,"/removeByLoginName('").concat(a[c],"')"),method:"post",headers:{"x-requestdigest":i,accept:"application/json; odata=verbose","content-type":"application/json; odata=verbose"}}));else for(var l=0;l<u.length;l++)s.push(o({url:r,endPoint:"".concat(t,"/removeByID(").concat(u[l],")"),method:"post",headers:{"x-requestdigest":i,accept:"application/json; odata=verbose","content-type":"application/json; odata=verbose"}}));Promise.all(s).then((function(t){e(t.map((function(e){return e.d})))})).catch((function(e){n(e)}))}))}))},p=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.groupName,c=e.groupDescription,a={__metadata:{type:"SP.Group"},Description:void 0===c?"":c,Title:i};return i?(t="/_api/web/SiteGroups",new Promise((function(e,n){s(r).then((function(i){o({url:r,endPoint:t,method:"post",body:a,headers:{accept:"application/json; odata=verbose","content-type":"application/json; odata=verbose","x-requestdigest":i}}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))}))):Promise.reject("CreateGroup requires GroupName")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(t,n){Promise.all([o({url:e,endPoint:"/_api/Web/AssociatedOwnerGroup"}),o({url:e,endPoint:"/_api/Web/AssociatedMemberGroup"}),o({url:e,endPoint:"/_api/Web/AssociatedVisitorGroup"})]).then((function(e){t({AssociatedOwnerGroup:e[0].d,AssociatedMemberGroup:e[1].d,AssociatedVisitorGroup:e[2].d})})).catch((function(e){n(e)}))}))},m=function(e){var t,n,r=e.baseurl,o=void 0===r?"":r,i=e.groupId,s=e.groupName,c=e.ownerGroupId,a=e.ownerGroupName,u=new SP.ClientContext(o);if(i)t=u.get_web().get_siteGroups().getById(i);else{if(!s)return Promise.reject("ChangeGroupOwner requires groupId or groupName");t=u.get_web().get_siteGroups().getByName(s)}if(c)n=u.get_web().get_siteGroups().getById(c);else{if(!a)return Promise.reject("ChangeGroupOwner requires ownerGroupId or ownerGroupName");n=u.get_web().get_siteGroups().getByName(a)}return new Promise((function(e,r){console.log("ownerGroup",n),console.log("group",t),t.set_owner(n),t.update(),u.executeQueryAsync((function(){console.log("group succeeded",t,n),e()}),(function(){console.log("group failed",t),r()}))}))},b=n(0),h=n.n(b),v=(n(1),function(e){var t=e.schema,n=e.elementName,r=e.getUserInfo,o=[{type:"text/javascript",src:"_layouts/15/clienttemplates.js"},{type:"text/javascript",src:"_layouts/15/clientforms.js"},{type:"text/javascript",src:"_layouts/15/clientpeoplepicker.js"},{type:"text/javascript",src:"_layouts/15/autofill.js"}];return Object(b.useEffect)((function(){o.forEach((function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type=e.type,n.src=e.src,t.appendChild(n)}));var e=new MutationObserver((function(e){for(var t=[],n=0;n<e[0].addedNodes.length;n++)t.push({displayName:e[0].addedNodes[n].childNodes[1].title,account:e[0].addedNodes[n].attributes.sid.value});r(t)}));return ExecuteOrDelayUntilScriptLoaded((function(){setTimeout((function(){SPClientPeoplePicker_InitStandaloneControlWrapper(n,null,t);var r=document.querySelector("#".concat(n,"_TopSpan_ResolvedList"));e.observe(r,{childList:!0})}),1e3)}),"clienttemplates.js"),function(){e.disconnect()}}),[]),h.a.createElement("div",{id:n})}),g=function(e){var t,n=e.baseurl,r=void 0===n?"":n,o=e.userId;return o?(t="/_api/web/GetUserById(".concat(o,")"),new Promise((function(e,n){fetch("".concat(r).concat(t)).then((function(e){if(e.ok)return e.json();var t="error: ".concat(e.status," ").concat(e.statusText);console.groupCollapsed("GetUser results",t),console.log(e),console.groupEnd(),n(new error(t))})).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))):new Promise((function(e,t){t("GetUser requires userId")}))},w=function(e){var t,n=e.baseurl,r=void 0===n?"":n,o=e.userId;return console.log("GetUserGroups",o),o?(t="/_api/web/GetUserById(".concat(o,")/Groups"),new Promise((function(e,n){fetch("".concat(r).concat(t)).then((function(e){if(console.log(e),e.ok)return e.json();var t="error: ".concat(e.status," ").concat(e.statusText);console.groupCollapsed("GetUserGroups results",t),console.log(e),console.groupEnd(),n(new error(t))})).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))):new Promise((function(e,t){t("GetUserGroups requires userId")}))},y=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID;if(s)t="/_api/web/Lists('".concat(s,"')").concat("?$expand=FirstUniqueAncestorSecurableObject");else{if(!i)return Promise.reject("GetList requires listGUID or listName");t="/_api/web/Lists/getByTitle('".concat(i,"')").concat("?$expand=FirstUniqueAncestorSecurableObject")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},P=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID;if(s)t="/_api/web/Lists('".concat(s,"')/recycle");else{if(!i)return new Promise((function(e,t){t("DeleteList requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/recycle")}return new Promise((function(e,n){o({url:r,endPoint:t,method:"post"}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},x=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,c=e.allowContentTypes,a=void 0!==c&&c,u=e.baseTemplate,l=void 0===u?100:u,d=e.contentTypesEnabled,p=void 0!==d&&d,f=e.description,m={__metadata:{type:"SP.List"},Title:i,AllowContentTypes:a,BaseTemplate:l,ContentTypesEnabled:p,Description:void 0===f?"":f};return i?(t="/_api/web/Lists",new Promise((function(e,n){s(r).then((function(i){o({url:r,endPoint:t,method:"post",body:m,headers:{"x-requestdigest":i,accept:"application/json; odata=verbose","content-type":"application/json; odata=verbose"}}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))}))):new Promise((function(e,t){t("CreateList requires listName")}))},G=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID,c=e.filter,a=e.expand,u="?";if(s)t="/_api/web/Lists('".concat(s,"')/items");else{if(!i)return new Promise((function(e,t){t("GetList requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/items")}return c&&(u+="$filter=".concat(c)),a&&(u+="$expand=".concat(a)),"?"!==u&&(t+=u),new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d.results)})).catch((function(e){n(e)}))}))},I=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,c=e.listGUID,a=e.items;if(!a)return new Promise((function(e,t){t("AddItemsToList requires items")}));if(Array.isArray(a)||(a=[a]),c)t="/_api/web/Lists('".concat(c,"')/items");else{if(!i)return new Promise((function(e,t){t("AddItemsToList requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/items")}return new Promise((function(e,n){var u=[];Promise.all([y({url:r,listName:i,listGUID:c}),s()]).then((function(i){for(var s=0;s<a.length;s++)a[s].__metadata={type:i[0].ListItemEntityTypeFullName},u.push(o({url:r,endPoint:t,method:"post",body:a[s],headers:{"x-requestdigest":i[1],accept:"application/json; odata=verbose","content-type":"application/json; odata=verbose"}}));Promise.all(u).then((function(t){e(t.map((function(e){return e.d})))})).catch((function(e){n(e)}))}))}))},_=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID,c=e.itemIds;if(!c)return new Promise((function(e,t){t("RemoveItemsFromList requires items")}));if(Array.isArray(c)||(c=[c]),s)t="/_api/web/Lists('".concat(s,"')/items");else{if(!i)return new Promise((function(e,t){t("RemoveItemsFromList requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/items")}return new Promise((function(e,n){for(var i=[],s=0;s<c.length;s++)i.push(o({url:r,endPoint:"".concat(t,"(").concat(c[s],")/recycle"),method:"post",headers:{"x-http-method":"delete","if-match":"*"}}));Promise.all(i).then((function(t){e(t.map((function(e){return e.d})))})).catch((function(e){n(e)}))}))},L=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID;if(s)t="/_api/web/Lists('".concat(s,"')/Views?$expand=ViewFields");else{if(!i)return new Promise((function(e,t){t("GetListViews requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/Views?$expand=ViewFields")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},j=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID;if(s)t="/_api/web/Lists('".concat(s,"')/DefaultView?$expand=ViewFields");else{if(!i)return new Promise((function(e,t){t("GetListViews requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/DefaultView?$expand=ViewFields")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},N=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID;if(s)t="/_api/web/Lists('".concat(s,"')/Fields");else{if(!i)return new Promise((function(e,t){t("GetListFields requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/Fields")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d.results)})).catch((function(e){n(e)}))}))},U=function(e){var t=e.baseurl,n=void 0===t?"":t,r=e.to,i=e.cc,c=void 0===i?[]:i,a=e.bcc,u=void 0===a?[]:a,l=e.subject,d={properties:{__metadata:{type:"SP.Utilities.EmailProperties"},To:{results:r},Body:e.body,Subject:l,CC:{results:c},BCC:{results:u}}};return new Promise((function(e,t){s(n).then((function(r){o({url:n,endPoint:"/_api/SP.Utilities.Utility.SendEmail",method:"post",body:d,headers:{Accept:"application/json;odata=verbose","content-type":"application/json;odata=verbose","X-RequestDigest":r}}).then((function(t){e(t.d)})).catch((function(e){t(e)}))}))}))},A=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID;if(s)t="/_api/web/Lists('".concat(s,"')/RoleAssignments").concat("?$expand=RoleDefinitionBindings,Member");else{if(!i)return Promise.reject("GetListPermissions requires listGUID or listName");t="/_api/web/Lists/getByTitle('".concat(i,"')/RoleAssignments").concat("?$expand=RoleDefinitionBindings,Member")}return new Promise((function(e,n){o({url:r,endPoint:t}).then((function(t){e(t.d.results)}))})).catch((function(e){reject(e)}))},S=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,c=e.listGUID,a=e.copy,u=void 0===a||a,l=e.clear,d=void 0!==l&&l;if(c)t="/_api/web/Lists('".concat(c,"')/breakroleinheritance(copyRoleAssignments=").concat(u,",clearSubscopes=").concat(d,")");else{if(!i)return new Promise((function(e,t){t("BreakInheritanceOnList requires listGUID or listName")}));t="/_api/web/Lists/getByTitle('".concat(i,"')/breakroleinheritance(copyRoleAssignments=").concat(u,",clearSubscopes=").concat(d,")")}return new Promise((function(e,n){s(r).then((function(i){o({url:r,endPoint:t,method:"post",headers:{"x-requestdigest":i}}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))}))},T=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID,c=e.principalId,a=e.roleDefId;if(!c)return Promise.reject("RemovePermissionsFromList requires principalId");if(!a)return Promise.reject("RemovePermissionsFromList requires roleDefId");if(s)t="/_api/web/Lists('".concat(s,"')/RoleAssignments/removeRoleAssignment(principalid=").concat(c,",roledefid=").concat(a,")");else{if(!i)return Promise.reject("RemovePermissionsFromList requires listGUID or listName");t="/_api/web/Lists/getByTitle('".concat(i,"')/RoleAssignments/removeRoleAssignment(principalid=").concat(c,",roledefid=").concat(a,")")}return new Promise((function(e,n){o({url:r,endPoint:t,method:"post"}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},D=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.listName,s=e.listGUID,c=e.principalId,a=e.roleDefId;if(!c)return Promise.reject("AddPermissionsToList requires principalId");if(!a)return Promise.reject("AddPermissionsToList requires roleDefId");if(s)t="/_api/web/Lists('".concat(s,"')/RoleAssignments/addRoleAssignment(principalid=").concat(c,",roledefid=").concat(a,")");else{if(!i)return Promise.reject("AddPermissionsToList requires listGUID or listName");t="/_api/web/Lists/getByTitle('".concat(i,"')/RoleAssignments/addRoleAssignment(principalid=").concat(c,",roledefid=").concat(a,")")}return new Promise((function(e,n){o({url:r,endPoint:t,method:"post"}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="?$expand=RoleDefinitionBindings,Member",n="/_api/web/RoleAssignments".concat(t);return new Promise((function(t,r){o({url:e,endPoint:n}).then((function(e){t(e.d.results)}))})).catch((function(e){reject(e)}))},q=function(e){var t=e.baseurl,n=void 0===t?"":t,r=e.copy,i=void 0===r||r,c=e.clear,a=void 0!==c&&c,u="/_api/web/breakroleinheritance(copyRoleAssignments=".concat(i,",clearSubscopes=").concat(a,")");return new Promise((function(e,t){s(n).then((function(r){o({url:n,endPoint:u,method:"post",headers:{"x-requestdigest":r}}).then((function(t){e(t.d)})).catch((function(e){t(e)}))}))}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="/_api/web/resetroleinheritance",n="post";return new Promise((function(r,i){s(e).then((function(s){o({url:e,endPoint:t,method:n,headers:{"x-requestdigest":s}}).then((function(e){r(e.d)})).catch((function(e){i(e)}))}))}))},R=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.principalId,s=e.roleDefId;return i?s?(t="/_api/web/RoleAssignments/removeRoleAssignment(principalid=".concat(i,",roledefid=").concat(s,")"),new Promise((function(e,n){o({url:r,endPoint:t,method:"post"}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))):Promise.reject("RemovePermissionsFromList requires roleDefId"):Promise.reject("RemovePermissionsFromList requires principalId")},B=function(e){var t,n=e.baseurl,r=void 0===n?"":n,i=e.principalId,s=e.roleDefId;return i?s?(t="/_api/web/RoleAssignments/addRoleAssignment(principalid=".concat(i,",roledefid=").concat(s,")"),new Promise((function(e,n){o({url:r,endPoint:t,method:"post"}).then((function(t){e(t.d)})).catch((function(e){n(e)}))}))):Promise.reject("AddPermissionsToList requires roleDefId"):Promise.reject("AddPermissionsToList requires principalId")},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="?$expand=FirstUniqueAncestorSecurableObject",n="/_api/web".concat(t);return new Promise((function(t,r){o({url:e,endPoint:n}).then((function(e){t(e.d)})).catch((function(e){r(e)}))}))}}]);
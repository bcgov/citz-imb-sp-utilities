(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/common/GetContextWebInformation.js":
/*!***********************************************************!*\
  !*** ./src/components/common/GetContextWebInformation.js ***!
  \***********************************************************/
/*! exports provided: GetContextWebInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetContextWebInformation\", function() { return GetContextWebInformation; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetContextWebInformation = function GetContextWebInformation() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  if (baseurl === '') {\n    if (typeof _spPageContextInfo === 'undefined') {\n      return Promise.reject('GetContextWebInformation:: _spPageContextInfo is not defined');\n    } else {\n      baseurl = _spPageContextInfo.siteAbsoluteUrl;\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    fetch(\"\".concat(baseurl, \"/_api/contextinfo\"), {\n      method: 'post',\n      headers: {\n        Accept: 'application/json;odata=verbose',\n        'content-type': 'application/json;odata=verbose'\n      }\n    }).then(function (response) {\n      if (response.ok) {\n        response.json().then(function (data) {\n          resolve(data.d.GetContextWebInformation);\n        })[\"catch\"](function (err) {\n          console.log(err);\n        });\n      } else {\n        reject(\"GetContextWebInformation::\".concat(response.status, \" \").concat(response.statusText));\n      }\n    })[\"catch\"](function (response) {\n      reject(\"GetContextWebInformation::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/common/GetContextWebInformation.js?");

/***/ }),

/***/ "./src/components/common/GetFormDigestValue.js":
/*!*****************************************************!*\
  !*** ./src/components/common/GetFormDigestValue.js ***!
  \*****************************************************/
/*! exports provided: GetFormDigestValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetFormDigestValue\", function() { return GetFormDigestValue; });\n/* harmony import */ var _GetContextWebInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetContextWebInformation */ \"./src/components/common/GetContextWebInformation.js\");\n\nvar GetFormDigestValue = function GetFormDigestValue() {\n  return new Promise(function (resolve, reject) {\n    Object(_GetContextWebInformation__WEBPACK_IMPORTED_MODULE_0__[\"GetContextWebInformation\"])('').then(function (response) {\n      resolve(response.FormDigestValue);\n    })[\"catch\"](function (response) {\n      reject(\"GetFormDigestValue::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/common/GetFormDigestValue.js?");

/***/ }),

/***/ "./src/components/common/RestCall.js":
/*!*******************************************!*\
  !*** ./src/components/common/RestCall.js ***!
  \*******************************************/
/*! exports provided: RestCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestCall\", function() { return RestCall; });\n/* harmony import */ var _GetFormDigestValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetFormDigestValue */ \"./src/components/common/GetFormDigestValue.js\");\n\n\nvar doFetch = function doFetch(url, endPoint, options) {\n  return new Promise(function (resolve, reject) {\n    fetch(\"\".concat(url).concat(endPoint), options).then(function (response) {\n      if (response.ok) {\n        resolve(response.json());\n      } else {\n        reject(\"\".concat(response.status, \" \").concat(response.statusText));\n      }\n    });\n  });\n};\n\nvar RestCall = function RestCall(_ref) {\n  var _ref$url = _ref.url,\n      url = _ref$url === void 0 ? '' : _ref$url,\n      endPoint = _ref.endPoint,\n      _ref$method = _ref.method,\n      method = _ref$method === void 0 ? 'get' : _ref$method,\n      _ref$body = _ref.body,\n      body = _ref$body === void 0 ? '' : _ref$body,\n      headers = _ref.headers;\n\n  if (url === '') {\n    if (typeof _spPageContextInfo === 'undefined') {\n      return Promise.reject('RestCall:: _spPageContextInfo is not defined');\n    } else {\n      url = _spPageContextInfo.webAbsoluteUrl;\n    }\n  }\n\n  var options = {\n    method: method\n  };\n\n  if (typeof body !== 'string') {\n    options.body = JSON.stringify(body);\n  } else {\n    if (body !== '') options.body = body;\n  }\n\n  if (headers) {\n    options.headers = headers;\n  } else {\n    options.headers = {\n      Accept: 'application/json;odata=verbose',\n      'content-type': 'application/json;odata=verbose'\n    };\n  }\n\n  return new Promise(function (resolve, reject) {\n    if (options.method.toLowerCase() === 'post') {\n      Object(_GetFormDigestValue__WEBPACK_IMPORTED_MODULE_0__[\"GetFormDigestValue\"])(url).then(function (response) {\n        options.headers['X-RequestDigest'] = response;\n        doFetch(url, endPoint, options).then(function (response) {\n          resolve(response);\n        })[\"catch\"](function (response) {\n          reject(response);\n        });\n      });\n    } else {\n      doFetch(url, endPoint, options).then(function (response) {\n        resolve(response);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/components/common/RestCall.js?");

/***/ }),

/***/ "./src/components/common/SendEmail.js":
/*!********************************************!*\
  !*** ./src/components/common/SendEmail.js ***!
  \********************************************/
/*! exports provided: SendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SendEmail\", function() { return SendEmail; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar SendEmail = function SendEmail(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      to = _ref.to,\n      _ref$cc = _ref.cc,\n      cc = _ref$cc === void 0 ? [] : _ref$cc,\n      _ref$bcc = _ref.bcc,\n      bcc = _ref$bcc === void 0 ? [] : _ref$bcc,\n      subject = _ref.subject,\n      body = _ref.body;\n\n  if (!to) {\n    return new Promise(function (resolve, reject) {\n      reject('SendEmail requires to');\n    });\n  }\n\n  if (!subject) {\n    return new Promise(function (resolve, reject) {\n      reject('SendEmail requires subject');\n    });\n  }\n\n  if (!body) {\n    return new Promise(function (resolve, reject) {\n      reject('SendEmail requires body');\n    });\n  }\n\n  var restbody = {\n    properties: {\n      __metadata: {\n        type: 'SP.Utilities.EmailProperties'\n      },\n      To: {\n        results: to\n      },\n      Body: body,\n      Subject: subject,\n      CC: {\n        results: cc\n      },\n      BCC: {\n        results: bcc\n      }\n    }\n  };\n  var endPoint = '/_api/SP.Utilities.Utility.SendEmail';\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: 'post',\n      body: restbody,\n      headers: headers\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"SendEmail::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/common/SendEmail.js?");

/***/ }),

/***/ "./src/components/groups/AddUsersToGroup.js":
/*!**************************************************!*\
  !*** ./src/components/groups/AddUsersToGroup.js ***!
  \**************************************************/
/*! exports provided: AddUsersToGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddUsersToGroup\", function() { return AddUsersToGroup; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar AddUsersToGroup = function AddUsersToGroup(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupId = _ref.groupId,\n      groupName = _ref.groupName,\n      loginName = _ref.loginName;\n  var endPoint;\n\n  if (!loginName) {\n    return Promise.reject('AddUsersToGroup requires loginName');\n  } else {\n    if (!Array.isArray(loginName)) {\n      loginName = [loginName];\n    }\n  }\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('AddUsersToGroup requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')/Users(\").concat(LoginName, \")\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")/Users\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n\n    for (var i = 0; i < loginName.length; i++) {\n      fetches.push(Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: 'post',\n        body: {\n          __metadata: {\n            type: 'SP.User'\n          },\n          LoginName: loginName[i]\n        },\n        headers: {\n          accept: 'application/json; odata=verbose',\n          'content-type': 'application/json; odata=verbose'\n        }\n      }));\n    }\n\n    Promise.all(fetches).then(function (data) {\n      resolve(data.map(function (user) {\n        return user.d;\n      }));\n    })[\"catch\"](function (response) {\n      reject(\"AddUsersToGroup::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/AddUsersToGroup.js?");

/***/ }),

/***/ "./src/components/groups/ChangeGroupOwner.js":
/*!***************************************************!*\
  !*** ./src/components/groups/ChangeGroupOwner.js ***!
  \***************************************************/
/*! exports provided: ChangeGroupOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChangeGroupOwner\", function() { return ChangeGroupOwner; });\nvar ChangeGroupOwner = function ChangeGroupOwner(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupId = _ref.groupId,\n      groupName = _ref.groupName,\n      ownerGroupId = _ref.ownerGroupId,\n      ownerGroupName = _ref.ownerGroupName;\n\n  if (typeof SP === 'undefined') {\n    return Promise.reject('ChangeGroupOwner:: SP is undefined');\n  }\n\n  var clientContext;\n\n  if (baseurl === '') {\n    clientContext = new SP.ClientContext();\n  } else {\n    clientContext = new SP.ClientContext(baseurl);\n  }\n\n  var group;\n  var ownerGroup;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('ChangeGroupOwner requires groupId or groupName');\n    } else {\n      group = clientContext.get_web().get_siteGroups().getByName(groupName);\n    }\n  } else {\n    group = clientContext.get_web().get_siteGroups().getById(groupId);\n  }\n\n  if (!ownerGroupId) {\n    if (!ownerGroupName) {\n      return Promise.reject('ChangeGroupOwner requires ownerGroupId or ownerGroupName');\n    } else {\n      ownerGroup = clientContext.get_web().get_siteGroups().getByName(ownerGroupName);\n    }\n  } else {\n    ownerGroup = clientContext.get_web().get_siteGroups().getById(ownerGroupId);\n  }\n\n  return new Promise(function (resolve, reject) {\n    //clientContext.load(group)\n    group.set_owner(ownerGroup);\n    group.update();\n    clientContext.executeQueryAsync(function () {\n      resolve();\n    }, function () {\n      reject(\"ChangeGroupOwner::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/ChangeGroupOwner.js?");

/***/ }),

/***/ "./src/components/groups/CreateGroup.js":
/*!**********************************************!*\
  !*** ./src/components/groups/CreateGroup.js ***!
  \**********************************************/
/*! exports provided: CreateGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateGroup\", function() { return CreateGroup; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar CreateGroup = function CreateGroup(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupName = _ref.groupName,\n      _ref$groupDescription = _ref.groupDescription,\n      groupDescription = _ref$groupDescription === void 0 ? '' : _ref$groupDescription;\n  var endPoint;\n  var method = 'post';\n  var body = {\n    __metadata: {\n      type: 'SP.Group'\n    },\n    Description: groupDescription,\n    Title: groupName\n  };\n\n  if (!groupName) {\n    return Promise.reject('CreateGroup requires GroupName');\n  } else {\n    endPoint = \"/_api/web/SiteGroups\";\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method,\n      body: body //headers: headers,\n\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"CreateGroup::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/CreateGroup.js?");

/***/ }),

/***/ "./src/components/groups/DeleteGroup.js":
/*!**********************************************!*\
  !*** ./src/components/groups/DeleteGroup.js ***!
  \**********************************************/
/*! exports provided: DeleteGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteGroup\", function() { return DeleteGroup; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar DeleteGroup = function DeleteGroup(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupName = _ref.groupName,\n      groupId = _ref.groupId;\n  var endPoint;\n  var method = 'post';\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('DeleteGroup requires groupId or groupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/removebyloginname('\".concat(groupName, \"')\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups/removebyid('\".concat(groupId, \"')\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      console.log(response);\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"DeleteGroup::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/DeleteGroup.js?");

/***/ }),

/***/ "./src/components/groups/GetAssociatedGroups.js":
/*!******************************************************!*\
  !*** ./src/components/groups/GetAssociatedGroups.js ***!
  \******************************************************/
/*! exports provided: GetAssociatedGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetAssociatedGroups\", function() { return GetAssociatedGroups; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetAssociatedGroups = function GetAssociatedGroups() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return new Promise(function (resolve, reject) {\n    Promise.all([Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: \"/_api/Web/AssociatedOwnerGroup\"\n    }), Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: \"/_api/Web/AssociatedMemberGroup\"\n    }), Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: \"/_api/Web/AssociatedVisitorGroup\"\n    })]).then(function (response) {\n      resolve({\n        AssociatedOwnerGroup: response[0].d,\n        AssociatedMemberGroup: response[1].d,\n        AssociatedVisitorGroup: response[2].d\n      });\n    })[\"catch\"](function (response) {\n      reject(\"GetAssociatedGroups::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/GetAssociatedGroups.js?");

/***/ }),

/***/ "./src/components/groups/GetGroup.js":
/*!*******************************************!*\
  !*** ./src/components/groups/GetGroup.js ***!
  \*******************************************/
/*! exports provided: GetGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetGroup\", function() { return GetGroup; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetGroup = function GetGroup(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupId = _ref.groupId,\n      groupName = _ref.groupName;\n  var endPoint;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('GetGroup requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetGroup::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/GetGroup.js?");

/***/ }),

/***/ "./src/components/groups/GetGroupMembers.js":
/*!**************************************************!*\
  !*** ./src/components/groups/GetGroupMembers.js ***!
  \**************************************************/
/*! exports provided: GetGroupMembers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetGroupMembers\", function() { return GetGroupMembers; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetGroupMembers = function GetGroupMembers(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupId = _ref.groupId,\n      groupName = _ref.groupName;\n  var endPoint;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('GetGroupMembers requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')/Users\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")/Users\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(\"GetGroupMembers::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/GetGroupMembers.js?");

/***/ }),

/***/ "./src/components/groups/RemoveUsersFromGroup.js":
/*!*******************************************************!*\
  !*** ./src/components/groups/RemoveUsersFromGroup.js ***!
  \*******************************************************/
/*! exports provided: RemoveUsersFromGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemoveUsersFromGroup\", function() { return RemoveUsersFromGroup; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar RemoveUsersFromGroup = function RemoveUsersFromGroup(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupId = _ref.groupId,\n      groupName = _ref.groupName,\n      loginName = _ref.loginName,\n      userId = _ref.userId;\n  var endPoint;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('RemoveUsersFromGroup requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')/Users\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")/Users\");\n  }\n\n  if (!loginName) {\n    if (!userId) {\n      return Promise.reject('RemoveUserFromGroup requires userId or logonName');\n    } else {\n      if (!Array.isArray(userId)) {\n        userId = [userId];\n      }\n    }\n  } else {\n    if (!Array.isArray(loginName)) {\n      userId = [loginName];\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n\n    if (loginName) {\n      for (var i = 0; i < loginName.length; i++) {\n        fetches.push(Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n          url: baseurl,\n          endPoint: \"\".concat(endPoint, \"/removeByLoginName('\").concat(loginName[i], \"')\"),\n          method: 'post'\n        }));\n      }\n    } else {\n      for (var _i = 0; _i < userId.length; _i++) {\n        fetches.push(Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n          url: baseurl,\n          endPoint: \"\".concat(endPoint, \"/removeByID(\").concat(userId[_i], \")\"),\n          method: 'post'\n        }));\n      }\n    }\n\n    Promise.all(fetches).then(function (data) {\n      resolve(data.map(function (user) {\n        return user.d;\n      }));\n    })[\"catch\"](function (response) {\n      reject(\"RemoveUsersFromGroup::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/groups/RemoveUsersFromGroup.js?");

/***/ }),

/***/ "./src/components/lists/AddItemsToList.js":
/*!************************************************!*\
  !*** ./src/components/lists/AddItemsToList.js ***!
  \************************************************/
/*! exports provided: AddItemsToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddItemsToList\", function() { return AddItemsToList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n/* harmony import */ var _GetList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetList */ \"./src/components/lists/GetList.js\");\n\n\nvar AddItemsToList = function AddItemsToList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      items = _ref.items;\n  var endPoint;\n\n  if (!items) {\n    return new Promise(function (resolve, reject) {\n      reject('AddItemsToList requires items');\n    });\n  } else {\n    if (!Array.isArray(items)) {\n      items = [items];\n    }\n  }\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('AddItemsToList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n    Object(_GetList__WEBPACK_IMPORTED_MODULE_1__[\"GetList\"])({\n      url: baseurl,\n      listName: listName,\n      listGUID: listGUID\n    }).then(function (response) {\n      for (var i = 0; i < items.length; i++) {\n        items[i].__metadata = {\n          type: response.ListItemEntityTypeFullName\n        };\n        fetches.push(Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n          url: baseurl,\n          endPoint: endPoint,\n          method: 'post',\n          body: items[i]\n        }));\n      }\n\n      Promise.all(fetches).then(function (response) {\n        resolve(response.map(function (item) {\n          return item.d;\n        }));\n      })[\"catch\"](function (response) {\n        reject(\"AddItemsToList::\".concat(response));\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/AddItemsToList.js?");

/***/ }),

/***/ "./src/components/lists/CreateList.js":
/*!********************************************!*\
  !*** ./src/components/lists/CreateList.js ***!
  \********************************************/
/*! exports provided: CreateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateList\", function() { return CreateList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar CreateList = function CreateList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      _ref$allowContentType = _ref.allowContentTypes,\n      allowContentTypes = _ref$allowContentType === void 0 ? false : _ref$allowContentType,\n      _ref$baseTemplate = _ref.baseTemplate,\n      baseTemplate = _ref$baseTemplate === void 0 ? 100 : _ref$baseTemplate,\n      _ref$contentTypesEnab = _ref.contentTypesEnabled,\n      contentTypesEnabled = _ref$contentTypesEnab === void 0 ? false : _ref$contentTypesEnab,\n      _ref$description = _ref.description,\n      description = _ref$description === void 0 ? '' : _ref$description;\n  var endPoint;\n  var method = 'post';\n  var body = {\n    __metadata: {\n      type: 'SP.List'\n    },\n    Title: listName,\n    AllowContentTypes: allowContentTypes,\n    BaseTemplate: baseTemplate,\n    ContentTypesEnabled: contentTypesEnabled,\n    Description: description\n  };\n\n  if (!listName) {\n    return new Promise(function (resolve, reject) {\n      reject('CreateList requires listName');\n    });\n  } else {\n    endPoint = \"/_api/web/Lists\";\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method,\n      body: body\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"CreateList::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/CreateList.js?");

/***/ }),

/***/ "./src/components/lists/DeleteList.js":
/*!********************************************!*\
  !*** ./src/components/lists/DeleteList.js ***!
  \********************************************/
/*! exports provided: DeleteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteList\", function() { return DeleteList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar DeleteList = function DeleteList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('DeleteList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/recycle\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/recycle\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: 'post'\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"DeleteList::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/DeleteList.js?");

/***/ }),

/***/ "./src/components/lists/GetList.js":
/*!*****************************************!*\
  !*** ./src/components/lists/GetList.js ***!
  \*****************************************/
/*! exports provided: GetList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetList\", function() { return GetList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetList = function GetList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      _ref$expand = _ref.expand,\n      expand = _ref$expand === void 0 ? '' : _ref$expand;\n  var endPoint;\n  var endPointParameters = \"?$expand=FirstUniqueAncestorSecurableObject,RootFolder\";\n  if (expand) endPointParameters += \",\".concat(expand);\n\n  if (!listGUID) {\n    if (!listName) {\n      return Promise.reject('GetList requires listGUID or listName');\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')\").concat(endPointParameters);\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')\").concat(endPointParameters);\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetList::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/GetList.js?");

/***/ }),

/***/ "./src/components/lists/GetListDefaultView.js":
/*!****************************************************!*\
  !*** ./src/components/lists/GetListDefaultView.js ***!
  \****************************************************/
/*! exports provided: GetListDefaultView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListDefaultView\", function() { return GetListDefaultView; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetListDefaultView = function GetListDefaultView(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListViews requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/DefaultView?$expand=ViewFields\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/DefaultView?$expand=ViewFields\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetListDefaultView::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/GetListDefaultView.js?");

/***/ }),

/***/ "./src/components/lists/GetListFields.js":
/*!***********************************************!*\
  !*** ./src/components/lists/GetListFields.js ***!
  \***********************************************/
/*! exports provided: GetListFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListFields\", function() { return GetListFields; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetListFields = function GetListFields(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListFields requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/Fields\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/Fields\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(\"GetListFields::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/GetListFields.js?");

/***/ }),

/***/ "./src/components/lists/GetListItems.js":
/*!**********************************************!*\
  !*** ./src/components/lists/GetListItems.js ***!
  \**********************************************/
/*! exports provided: GetListItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListItems\", function() { return GetListItems; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetListItems = function GetListItems(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      filter = _ref.filter,\n      expand = _ref.expand,\n      select = _ref.select;\n  var endPoint;\n  var parameters = [];\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  if (select) {\n    parameters.push(\"$select=\".concat(select));\n  }\n\n  if (expand) {\n    parameters.push(\"$expand=\".concat(expand));\n  }\n\n  if (filter) {\n    parameters.push(\"$filter=\".concat(filter));\n  }\n\n  if (parameters.length) {\n    endPoint += \"?\".concat(parameters.join('&'));\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(\"GetListItems::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/GetListItems.js?");

/***/ }),

/***/ "./src/components/lists/GetListViews.js":
/*!**********************************************!*\
  !*** ./src/components/lists/GetListViews.js ***!
  \**********************************************/
/*! exports provided: GetListViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListViews\", function() { return GetListViews; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetListViews = function GetListViews(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      viewGUID = _ref.viewGUID;\n  var endPoint;\n  var parameters = '?$expand=ViewFields';\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListViews requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/Views\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/Views\");\n  }\n\n  if (viewGUID) {\n    endPoint = \"\".concat(endPoint, \"('\").concat(viewGUID, \"')\");\n  }\n\n  endPoint = \"\".concat(endPoint).concat(parameters);\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetListViews::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/GetListViews.js?");

/***/ }),

/***/ "./src/components/lists/RemoveItemsFromList.js":
/*!*****************************************************!*\
  !*** ./src/components/lists/RemoveItemsFromList.js ***!
  \*****************************************************/
/*! exports provided: RemoveItemsFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemoveItemsFromList\", function() { return RemoveItemsFromList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar RemoveItemsFromList = function RemoveItemsFromList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      itemIds = _ref.itemIds;\n  var endPoint;\n\n  if (!itemIds) {\n    return new Promise(function (resolve, reject) {\n      reject('RemoveItemsFromList requires items');\n    });\n  } else {\n    if (!Array.isArray(itemIds)) {\n      itemIds = [itemIds];\n    }\n  }\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('RemoveItemsFromList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n\n    for (var i = 0; i < itemIds.length; i++) {\n      fetches.push(Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: \"\".concat(endPoint, \"(\").concat(itemIds[i], \")/recycle\"),\n        method: 'post',\n        headers: {\n          'x-http-method': 'delete',\n          'if-match': '*'\n        }\n      }));\n    }\n\n    Promise.all(fetches).then(function (response) {\n      resolve(response.map(function (item) {\n        return item.d;\n      }));\n    })[\"catch\"](function (response) {\n      reject(\"RemoveItemsFromList::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/lists/RemoveItemsFromList.js?");

/***/ }),

/***/ "./src/components/permissions/AddPermissionsToList.js":
/*!************************************************************!*\
  !*** ./src/components/permissions/AddPermissionsToList.js ***!
  \************************************************************/
/*! exports provided: AddPermissionsToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToList\", function() { return AddPermissionsToList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar AddPermissionsToList = function AddPermissionsToList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      principalId = _ref.principalId,\n      roleDefId = _ref.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('AddPermissionsToList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('AddPermissionsToList requires roleDefId');\n    } else {\n      if (!listGUID) {\n        if (!listName) {\n          return Promise.reject('AddPermissionsToList requires listGUID or listName');\n        } else {\n          endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/RoleAssignments/addRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n        }\n      } else {\n        endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/RoleAssignments/addRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n      }\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"AddPermissionsToList::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/AddPermissionsToList.js?");

/***/ }),

/***/ "./src/components/permissions/AddPermissionsToSite.js":
/*!************************************************************!*\
  !*** ./src/components/permissions/AddPermissionsToSite.js ***!
  \************************************************************/
/*! exports provided: AddPermissionsToSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToSite\", function() { return AddPermissionsToSite; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar AddPermissionsToSite = function AddPermissionsToSite(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      principalId = _ref.principalId,\n      roleDefId = _ref.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('AddPermissionsToList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('AddPermissionsToList requires roleDefId');\n    } else {\n      endPoint = \"/_api/web/RoleAssignments/addRoleAssignment(principalid=\".concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"AddPermissionsToSite::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/AddPermissionsToSite.js?");

/***/ }),

/***/ "./src/components/permissions/BreakListPermissionsInheritance.js":
/*!***********************************************************************!*\
  !*** ./src/components/permissions/BreakListPermissionsInheritance.js ***!
  \***********************************************************************/
/*! exports provided: BreakListPermissionsInheritance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakListPermissionsInheritance\", function() { return BreakListPermissionsInheritance; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar BreakListPermissionsInheritance = function BreakListPermissionsInheritance(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      _ref$copy = _ref.copy,\n      copy = _ref$copy === void 0 ? true : _ref$copy,\n      _ref$clear = _ref.clear,\n      clear = _ref$clear === void 0 ? false : _ref$clear;\n  var endPoint;\n  var method = 'post';\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('BreakInheritanceOnList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/breakroleinheritance(copyRoleAssignments=\").concat(copy, \",clearSubscopes=\").concat(clear, \")\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/breakroleinheritance(copyRoleAssignments=\").concat(copy, \",clearSubscopes=\").concat(clear, \")\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"BreakListPermissionsInheritance::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/BreakListPermissionsInheritance.js?");

/***/ }),

/***/ "./src/components/permissions/BreakSitePermissionsInheritance.js":
/*!***********************************************************************!*\
  !*** ./src/components/permissions/BreakSitePermissionsInheritance.js ***!
  \***********************************************************************/
/*! exports provided: BreakSitePermissionsInheritance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakSitePermissionsInheritance\", function() { return BreakSitePermissionsInheritance; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar BreakSitePermissionsInheritance = function BreakSitePermissionsInheritance(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      _ref$copy = _ref.copy,\n      copy = _ref$copy === void 0 ? true : _ref$copy,\n      _ref$clear = _ref.clear,\n      clear = _ref$clear === void 0 ? false : _ref$clear;\n  var endPoint = \"/_api/web/breakroleinheritance(copyRoleAssignments=\".concat(copy, \",clearSubscopes=\").concat(clear, \")\");\n  var method = 'post';\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"BreakSitePermissionsInheritance::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/BreakSitePermissionsInheritance.js?");

/***/ }),

/***/ "./src/components/permissions/GetListPermissions.js":
/*!**********************************************************!*\
  !*** ./src/components/permissions/GetListPermissions.js ***!
  \**********************************************************/
/*! exports provided: GetListPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListPermissions\", function() { return GetListPermissions; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetListPermissions = function GetListPermissions(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID;\n  var endPoint;\n  var endPointParameters = \"?$expand=RoleDefinitionBindings,Member\";\n\n  if (!listGUID) {\n    if (!listName) {\n      return Promise.reject('GetListPermissions requires listGUID or listName');\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/RoleAssignments\").concat(endPointParameters);\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/RoleAssignments\").concat(endPointParameters);\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    });\n  })[\"catch\"](function (response) {\n    reject(\"GetListPermissions::\".concat(response));\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/GetListPermissions.js?");

/***/ }),

/***/ "./src/components/permissions/GetSitePermissions.js":
/*!**********************************************************!*\
  !*** ./src/components/permissions/GetSitePermissions.js ***!
  \**********************************************************/
/*! exports provided: GetSitePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetSitePermissions\", function() { return GetSitePermissions; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetSitePermissions = function GetSitePermissions() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var endPointParameters = \"?$expand=RoleDefinitionBindings,Member\";\n  var endPoint = \"/_api/web/RoleAssignments\".concat(endPointParameters);\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(\"GetSitePermissions::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/GetSitePermissions.js?");

/***/ }),

/***/ "./src/components/permissions/RemovePermissionsFromList.js":
/*!*****************************************************************!*\
  !*** ./src/components/permissions/RemovePermissionsFromList.js ***!
  \*****************************************************************/
/*! exports provided: RemovePermissionsFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromList\", function() { return RemovePermissionsFromList; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar RemovePermissionsFromList = function RemovePermissionsFromList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      principalId = _ref.principalId,\n      roleDefId = _ref.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('RemovePermissionsFromList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('RemovePermissionsFromList requires roleDefId');\n    } else {\n      if (!listGUID) {\n        if (!listName) {\n          return Promise.reject('RemovePermissionsFromList requires listGUID or listName');\n        } else {\n          endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/RoleAssignments/removeRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n        }\n      } else {\n        endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/RoleAssignments/removeRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n      }\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"RemovePermissionsFromList::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/RemovePermissionsFromList.js?");

/***/ }),

/***/ "./src/components/permissions/RemovePermissionsFromSite.js":
/*!*****************************************************************!*\
  !*** ./src/components/permissions/RemovePermissionsFromSite.js ***!
  \*****************************************************************/
/*! exports provided: RemovePermissionsFromSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromSite\", function() { return RemovePermissionsFromSite; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar RemovePermissionsFromSite = function RemovePermissionsFromSite(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      principalId = _ref.principalId,\n      roleDefId = _ref.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('RemovePermissionsFromSite requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('RemovePermissionsFromSite requires roleDefId');\n    } else {\n      endPoint = \"/_api/web/RoleAssignments/removeRoleAssignment(principalid=\".concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"RemovePermissionsFromSite::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/RemovePermissionsFromSite.js?");

/***/ }),

/***/ "./src/components/permissions/ResetSitePermissionsInheritance.js":
/*!***********************************************************************!*\
  !*** ./src/components/permissions/ResetSitePermissionsInheritance.js ***!
  \***********************************************************************/
/*! exports provided: ResetSitePermissionsInheritance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetSitePermissionsInheritance\", function() { return ResetSitePermissionsInheritance; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar ResetSitePermissionsInheritance = function ResetSitePermissionsInheritance(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl;\n  var endPoint = \"/_api/web/resetroleinheritance\";\n  var method = 'post';\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"ResetSitePermissionsInheritance::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/permissions/ResetSitePermissionsInheritance.js?");

/***/ }),

/***/ "./src/components/sites/GetRoleDefinitions.js":
/*!****************************************************!*\
  !*** ./src/components/sites/GetRoleDefinitions.js ***!
  \****************************************************/
/*! exports provided: GetRoleDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetRoleDefinitions\", function() { return GetRoleDefinitions; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetRoleDefinitions = function GetRoleDefinitions(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl;\n  var endPoint = \"/_api/web/RoleDefinitions\";\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      var obj = {};\n\n      for (var i = 0; i < response.d.results.length; i++) {\n        obj[response.d.results[i].Name] = response.d.results[i];\n      }\n\n      resolve(obj);\n    })[\"catch\"](function (response) {\n      reject(\"GetRoleDefinitions::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/sites/GetRoleDefinitions.js?");

/***/ }),

/***/ "./src/components/sites/GetSite.js":
/*!*****************************************!*\
  !*** ./src/components/sites/GetSite.js ***!
  \*****************************************/
/*! exports provided: GetSite, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetSite\", function() { return GetSite; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetSite = function GetSite(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl;\n  var endPointParameters = \"?$expand=FirstUniqueAncestorSecurableObject,ParentWeb\";\n  var endPoint = \"/_api/web\".concat(endPointParameters);\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetSite::\".concat(response));\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetSite);\n\n//# sourceURL=webpack:///./src/components/sites/GetSite.js?");

/***/ }),

/***/ "./src/components/users/GetCurrentUser.js":
/*!************************************************!*\
  !*** ./src/components/users/GetCurrentUser.js ***!
  \************************************************/
/*! exports provided: GetCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetCurrentUser\", function() { return GetCurrentUser; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetCurrentUser = function GetCurrentUser() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var endPoint = '/_api/web/CurrentUser';\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetCurrentUser::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/users/GetCurrentUser.js?");

/***/ }),

/***/ "./src/components/users/GetUser.js":
/*!*****************************************!*\
  !*** ./src/components/users/GetUser.js ***!
  \*****************************************/
/*! exports provided: GetUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetUser\", function() { return GetUser; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetUser = function GetUser(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      userId = _ref.userId;\n  var endPoint;\n\n  if (!userId) {\n    return new Promise(function (resolve, reject) {\n      reject('GetUser requires userId');\n    });\n  } else {\n    endPoint = \"/_api/web/GetUserById(\".concat(userId, \")\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetUser::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/users/GetUser.js?");

/***/ }),

/***/ "./src/components/users/GetUserGroups.js":
/*!***********************************************!*\
  !*** ./src/components/users/GetUserGroups.js ***!
  \***********************************************/
/*! exports provided: GetUserGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetUserGroups\", function() { return GetUserGroups; });\n/* harmony import */ var _common_RestCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/RestCall */ \"./src/components/common/RestCall.js\");\n\nvar GetUserGroups = function GetUserGroups(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      userId = _ref.userId;\n  var endPoint;\n\n  if (!userId) {\n    return new Promise(function (resolve, reject) {\n      reject('GetUserGroups requires userId');\n    });\n  } else {\n    endPoint = \"/_api/web/GetUserById(\".concat(userId, \")/Groups\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_common_RestCall__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(\"GetUserGroups::\".concat(response));\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/users/GetUserGroups.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GetContextWebInformation, GetFormDigestValue, SendEmail, AddUsersToGroup, ChangeGroupOwner, CreateGroup, DeleteGroup, GetAssociatedGroups, GetGroup, GetGroupMembers, RemoveUsersFromGroup, AddItemsToList, CreateList, DeleteList, GetList, GetListDefaultView, GetListFields, GetListItems, GetListViews, RemoveItemsFromList, AddPermissionsToList, AddPermissionsToSite, BreakListPermissionsInheritance, BreakSitePermissionsInheritance, GetListPermissions, GetSitePermissions, RemovePermissionsFromList, RemovePermissionsFromSite, ResetSitePermissionsInheritance, GetSite, GetRoleDefinitions, GetCurrentUser, GetUser, GetUserGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common_GetContextWebInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/GetContextWebInformation */ \"./src/components/common/GetContextWebInformation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetContextWebInformation\", function() { return _components_common_GetContextWebInformation__WEBPACK_IMPORTED_MODULE_0__[\"GetContextWebInformation\"]; });\n\n/* harmony import */ var _components_common_GetFormDigestValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/GetFormDigestValue */ \"./src/components/common/GetFormDigestValue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetFormDigestValue\", function() { return _components_common_GetFormDigestValue__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"]; });\n\n/* harmony import */ var _components_common_SendEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/SendEmail */ \"./src/components/common/SendEmail.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SendEmail\", function() { return _components_common_SendEmail__WEBPACK_IMPORTED_MODULE_2__[\"SendEmail\"]; });\n\n/* harmony import */ var _components_groups_AddUsersToGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/groups/AddUsersToGroup */ \"./src/components/groups/AddUsersToGroup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddUsersToGroup\", function() { return _components_groups_AddUsersToGroup__WEBPACK_IMPORTED_MODULE_3__[\"AddUsersToGroup\"]; });\n\n/* harmony import */ var _components_groups_ChangeGroupOwner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/groups/ChangeGroupOwner */ \"./src/components/groups/ChangeGroupOwner.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChangeGroupOwner\", function() { return _components_groups_ChangeGroupOwner__WEBPACK_IMPORTED_MODULE_4__[\"ChangeGroupOwner\"]; });\n\n/* harmony import */ var _components_groups_CreateGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/groups/CreateGroup */ \"./src/components/groups/CreateGroup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateGroup\", function() { return _components_groups_CreateGroup__WEBPACK_IMPORTED_MODULE_5__[\"CreateGroup\"]; });\n\n/* harmony import */ var _components_groups_DeleteGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/groups/DeleteGroup */ \"./src/components/groups/DeleteGroup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DeleteGroup\", function() { return _components_groups_DeleteGroup__WEBPACK_IMPORTED_MODULE_6__[\"DeleteGroup\"]; });\n\n/* harmony import */ var _components_groups_GetAssociatedGroups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/groups/GetAssociatedGroups */ \"./src/components/groups/GetAssociatedGroups.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetAssociatedGroups\", function() { return _components_groups_GetAssociatedGroups__WEBPACK_IMPORTED_MODULE_7__[\"GetAssociatedGroups\"]; });\n\n/* harmony import */ var _components_groups_GetGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/groups/GetGroup */ \"./src/components/groups/GetGroup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetGroup\", function() { return _components_groups_GetGroup__WEBPACK_IMPORTED_MODULE_8__[\"GetGroup\"]; });\n\n/* harmony import */ var _components_groups_GetGroupMembers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/groups/GetGroupMembers */ \"./src/components/groups/GetGroupMembers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetGroupMembers\", function() { return _components_groups_GetGroupMembers__WEBPACK_IMPORTED_MODULE_9__[\"GetGroupMembers\"]; });\n\n/* harmony import */ var _components_groups_RemoveUsersFromGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/groups/RemoveUsersFromGroup */ \"./src/components/groups/RemoveUsersFromGroup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemoveUsersFromGroup\", function() { return _components_groups_RemoveUsersFromGroup__WEBPACK_IMPORTED_MODULE_10__[\"RemoveUsersFromGroup\"]; });\n\n/* harmony import */ var _components_lists_AddItemsToList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lists/AddItemsToList */ \"./src/components/lists/AddItemsToList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddItemsToList\", function() { return _components_lists_AddItemsToList__WEBPACK_IMPORTED_MODULE_11__[\"AddItemsToList\"]; });\n\n/* harmony import */ var _components_lists_CreateList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/lists/CreateList */ \"./src/components/lists/CreateList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateList\", function() { return _components_lists_CreateList__WEBPACK_IMPORTED_MODULE_12__[\"CreateList\"]; });\n\n/* harmony import */ var _components_lists_DeleteList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/lists/DeleteList */ \"./src/components/lists/DeleteList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DeleteList\", function() { return _components_lists_DeleteList__WEBPACK_IMPORTED_MODULE_13__[\"DeleteList\"]; });\n\n/* harmony import */ var _components_lists_GetList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/lists/GetList */ \"./src/components/lists/GetList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetList\", function() { return _components_lists_GetList__WEBPACK_IMPORTED_MODULE_14__[\"GetList\"]; });\n\n/* harmony import */ var _components_lists_GetListDefaultView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/lists/GetListDefaultView */ \"./src/components/lists/GetListDefaultView.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListDefaultView\", function() { return _components_lists_GetListDefaultView__WEBPACK_IMPORTED_MODULE_15__[\"GetListDefaultView\"]; });\n\n/* harmony import */ var _components_lists_GetListFields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/lists/GetListFields */ \"./src/components/lists/GetListFields.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListFields\", function() { return _components_lists_GetListFields__WEBPACK_IMPORTED_MODULE_16__[\"GetListFields\"]; });\n\n/* harmony import */ var _components_lists_GetListItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/lists/GetListItems */ \"./src/components/lists/GetListItems.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListItems\", function() { return _components_lists_GetListItems__WEBPACK_IMPORTED_MODULE_17__[\"GetListItems\"]; });\n\n/* harmony import */ var _components_lists_GetListViews__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/lists/GetListViews */ \"./src/components/lists/GetListViews.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListViews\", function() { return _components_lists_GetListViews__WEBPACK_IMPORTED_MODULE_18__[\"GetListViews\"]; });\n\n/* harmony import */ var _components_lists_RemoveItemsFromList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/lists/RemoveItemsFromList */ \"./src/components/lists/RemoveItemsFromList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemoveItemsFromList\", function() { return _components_lists_RemoveItemsFromList__WEBPACK_IMPORTED_MODULE_19__[\"RemoveItemsFromList\"]; });\n\n/* harmony import */ var _components_permissions_AddPermissionsToList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/permissions/AddPermissionsToList */ \"./src/components/permissions/AddPermissionsToList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToList\", function() { return _components_permissions_AddPermissionsToList__WEBPACK_IMPORTED_MODULE_20__[\"AddPermissionsToList\"]; });\n\n/* harmony import */ var _components_permissions_AddPermissionsToSite__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/permissions/AddPermissionsToSite */ \"./src/components/permissions/AddPermissionsToSite.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToSite\", function() { return _components_permissions_AddPermissionsToSite__WEBPACK_IMPORTED_MODULE_21__[\"AddPermissionsToSite\"]; });\n\n/* harmony import */ var _components_permissions_BreakListPermissionsInheritance__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/permissions/BreakListPermissionsInheritance */ \"./src/components/permissions/BreakListPermissionsInheritance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BreakListPermissionsInheritance\", function() { return _components_permissions_BreakListPermissionsInheritance__WEBPACK_IMPORTED_MODULE_22__[\"BreakListPermissionsInheritance\"]; });\n\n/* harmony import */ var _components_permissions_BreakSitePermissionsInheritance__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/permissions/BreakSitePermissionsInheritance */ \"./src/components/permissions/BreakSitePermissionsInheritance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BreakSitePermissionsInheritance\", function() { return _components_permissions_BreakSitePermissionsInheritance__WEBPACK_IMPORTED_MODULE_23__[\"BreakSitePermissionsInheritance\"]; });\n\n/* harmony import */ var _components_permissions_GetListPermissions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/permissions/GetListPermissions */ \"./src/components/permissions/GetListPermissions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListPermissions\", function() { return _components_permissions_GetListPermissions__WEBPACK_IMPORTED_MODULE_24__[\"GetListPermissions\"]; });\n\n/* harmony import */ var _components_permissions_GetSitePermissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/permissions/GetSitePermissions */ \"./src/components/permissions/GetSitePermissions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetSitePermissions\", function() { return _components_permissions_GetSitePermissions__WEBPACK_IMPORTED_MODULE_25__[\"GetSitePermissions\"]; });\n\n/* harmony import */ var _components_permissions_RemovePermissionsFromList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/permissions/RemovePermissionsFromList */ \"./src/components/permissions/RemovePermissionsFromList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromList\", function() { return _components_permissions_RemovePermissionsFromList__WEBPACK_IMPORTED_MODULE_26__[\"RemovePermissionsFromList\"]; });\n\n/* harmony import */ var _components_permissions_RemovePermissionsFromSite__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/permissions/RemovePermissionsFromSite */ \"./src/components/permissions/RemovePermissionsFromSite.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromSite\", function() { return _components_permissions_RemovePermissionsFromSite__WEBPACK_IMPORTED_MODULE_27__[\"RemovePermissionsFromSite\"]; });\n\n/* harmony import */ var _components_permissions_ResetSitePermissionsInheritance__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/permissions/ResetSitePermissionsInheritance */ \"./src/components/permissions/ResetSitePermissionsInheritance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResetSitePermissionsInheritance\", function() { return _components_permissions_ResetSitePermissionsInheritance__WEBPACK_IMPORTED_MODULE_28__[\"ResetSitePermissionsInheritance\"]; });\n\n/* harmony import */ var _components_sites_GetSite__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/sites/GetSite */ \"./src/components/sites/GetSite.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetSite\", function() { return _components_sites_GetSite__WEBPACK_IMPORTED_MODULE_29__[\"GetSite\"]; });\n\n/* harmony import */ var _components_sites_GetRoleDefinitions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/sites/GetRoleDefinitions */ \"./src/components/sites/GetRoleDefinitions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetRoleDefinitions\", function() { return _components_sites_GetRoleDefinitions__WEBPACK_IMPORTED_MODULE_30__[\"GetRoleDefinitions\"]; });\n\n/* harmony import */ var _components_users_GetCurrentUser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/users/GetCurrentUser */ \"./src/components/users/GetCurrentUser.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetCurrentUser\", function() { return _components_users_GetCurrentUser__WEBPACK_IMPORTED_MODULE_31__[\"GetCurrentUser\"]; });\n\n/* harmony import */ var _components_users_GetUser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/users/GetUser */ \"./src/components/users/GetUser.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetUser\", function() { return _components_users_GetUser__WEBPACK_IMPORTED_MODULE_32__[\"GetUser\"]; });\n\n/* harmony import */ var _components_users_GetUserGroups__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/users/GetUserGroups */ \"./src/components/users/GetUserGroups.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetUserGroups\", function() { return _components_users_GetUserGroups__WEBPACK_IMPORTED_MODULE_33__[\"GetUserGroups\"]; });\n\n/**\r\n * Common\r\n */\n\n\n\n/**\r\n * Groups\r\n */\n\n\n\n\n\n\n\n\n\n/**\r\n * Lists\r\n */\n\n\n\n\n\n\n\n\n\n\n/**\r\n * Permissions\r\n */\n\n\n\n\n\n\n\n\n\n\n/**\r\n * Sites\r\n */\n\n\n\n/**\r\n * Users\r\n */\n\n\n\n\n/**\r\n * SharePoint\r\n */\n//export { PeoplePicker } from './components/sharepoint/PeoplePicker'\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ })));
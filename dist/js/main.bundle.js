/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "1309dc49d24e33984bd4";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"react","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/PeoplePicker.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/PeoplePicker.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sp-peoplepicker-topLevel,\\r\\n.sp-peoplepicker-topLevelDisabled {\\r\\n\\tcursor: text;\\r\\n\\theight: 100%;\\r\\n\\twidth: 371px;\\r\\n\\tposition: relative;\\r\\n\\tpadding: 3px 25px 3px 0px;\\r\\n}\\r\\ninput[type='password'],\\r\\ninput[type='text'],\\r\\ninput[type='file'],\\r\\nselect,\\r\\ntextarea,\\r\\n.sp-peoplepicker-topLevel,\\r\\n.sp-peoplepicker-topLevelDisabled,\\r\\n.sp-peoplepicker-autoFillContainer,\\r\\n.ms-inputBox {\\r\\n\\tborder: 1px solid #ababab;\\r\\n\\tbackground-color: #fff;\\r\\n\\tbackground-color: rgba(255, 255, 255, 0.85);\\r\\n\\tcolor: #444;\\r\\n}\\r\\ninput,\\r\\nselect,\\r\\nlabel,\\r\\ntextarea,\\r\\nbutton,\\r\\noption {\\r\\n\\tfont-family: inherit;\\r\\n\\tfont-size: inherit;\\r\\n\\tcolor: inherit;\\r\\n\\tvertical-align: middle;\\r\\n}\\r\\n.sp-peoplepicker-autoFillContainer {\\r\\n\\tz-index: 1;\\r\\n\\tpadding: 0px;\\r\\n\\tdisplay: none;\\r\\n\\tcursor: default;\\r\\n\\tmax-width: 300px;\\r\\n\\tmin-width: 300px;\\r\\n\\tposition: absolute;\\r\\n\\tborder-color: #c6c6c6;\\r\\n}\\r\\n.sp-peoplepicker-initialHelpText {\\r\\n\\ttop: 3px;\\r\\n\\tleft: 4px;\\r\\n\\tposition: absolute;\\r\\n}\\r\\n.ms-helperText,\\r\\ninput.ms-helperText {\\r\\n\\tcolor: #777;\\r\\n}\\r\\n.sp-peoplepicker-waitImg {\\r\\n\\twidth: 16px;\\r\\n\\theight: 16px;\\r\\n\\tdisplay: none;\\r\\n\\tfont-size: 0px;\\r\\n\\tposition: absolute;\\r\\n}\\r\\nimg {\\r\\n\\tborder: none;\\r\\n\\t-webkit-tap-highlight-color: transparent;\\r\\n}\\r\\ninput[type='password'],\\r\\ninput[type='text'],\\r\\ninput[type='file'],\\r\\ntextarea,\\r\\n.ms-inputBox {\\r\\n\\tpadding: 2px 5px;\\r\\n}\\r\\ninput,\\r\\nselect,\\r\\nlabel,\\r\\ntextarea,\\r\\nbutton,\\r\\noption {\\r\\n\\tfont-family: inherit;\\r\\n\\tfont-size: inherit;\\r\\n\\tcolor: inherit;\\r\\n\\tvertical-align: middle;\\r\\n}\\r\\ninput.sp-peoplepicker-editorInput[type='text'] {\\r\\n\\tborder: 0px;\\r\\n\\tpadding: 0px 1px;\\r\\n\\tmargin-left: 5px;\\r\\n\\tvertical-align: inherit;\\r\\n\\tbackground-color: transparent;\\r\\n}\\r\\ninput.sp-peoplepicker-editorInput[type='text']:focus {\\r\\n\\toutline: 0px;\\r\\n}\\r\\n.sp-peoplepicker-autoFillContainer .sp-autoFill-scroll {\\r\\n\\twidth: 100%;\\r\\n\\tborder: none;\\r\\n\\tmargin: 0px;\\r\\n\\tpadding: 0px;\\r\\n\\tmax-height: 200px;\\r\\n\\tmin-width: 100%;\\r\\n\\tpadding-top: 3px;\\r\\n\\toverflow-y: auto;\\r\\n\\toverflow-x: hidden;\\r\\n\\tmargin-right: 10px;\\r\\n\\tlist-style-type: none;\\r\\n\\tbox-shadow: 0px 0px 0px 0px transparent;\\r\\n\\tbackground-color: #fff;\\r\\n}\\r\\n.sp-peoplepicker-autoFillContainer .ms-core-menu-item {\\r\\n\\twhite-space: nowrap;\\r\\n\\tpadding: 1px 5px 3px 5px;\\r\\n}\\r\\n.ms-core-menu-item {\\r\\n\\tmargin: 0px;\\r\\n\\tcursor: pointer;\\r\\n\\tborder: 1px solid transparent;\\r\\n}\\r\\n.ms-core-menu-link:link,\\r\\n.ms-core-menu-link:visited {\\r\\n\\tcolor: #444;\\r\\n}\\r\\n.sp-peoplepicker-autoFillContainer .ms-core-menu-link {\\r\\n\\tpadding: 0px;\\r\\n}\\r\\na.ms-core-menu-link {\\r\\n\\tpadding: 6px 8px;\\r\\n\\tcolor: #444;\\r\\n\\ttext-decoration: none;\\r\\n\\tdisplay: block;\\r\\n\\tposition: relative;\\r\\n}\\r\\na:visited {\\r\\n\\tcolor: #663399;\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\na,\\r\\n.ms-link:visited {\\r\\n\\tcolor: #0072c6;\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\n.sp-autoFill-scroll .ms-core-menu-label {\\r\\n\\tborder: none;\\r\\n}\\r\\n.sp-peoplepicker-autoFillContainer .ms-core-menu-label {\\r\\n\\tdisplay: block;\\r\\n}\\r\\n.ms-core-menu-label,\\r\\n.ms-core-menu-labelCompact {\\r\\n\\tborder: 1px solid transparent;\\r\\n\\tword-wrap: break-word;\\r\\n}\\r\\n.ms-metadata,\\r\\n.ms-descriptiontext {\\r\\n\\tcolor: #777;\\r\\n}\\r\\n.ms-textSmall,\\r\\n.ms-textXSmall,\\r\\n.ms-metadata,\\r\\n.ms-descriptiontext,\\r\\n.ms-secondaryCommandLink {\\r\\n\\tfont-size: 0.9em;\\r\\n}\\r\\n.ms-metadata,\\r\\n.ms-descriptiontext,\\r\\n.ms-secondaryCommandLink {\\r\\n\\tfont-family: 'Segoe UI', 'Segoe', Tahoma, Helvetica, Arial, sans-serif;\\r\\n}\\r\\n.ms-core-menu-separatorHr {\\r\\n\\tmargin: 2px 0px;\\r\\n\\tcolor: #c6c6c6;\\r\\n}\\r\\nhr {\\r\\n\\tborder-width: 0px;\\r\\n\\tborder-top: 1px solid #c6c6c6;\\r\\n}\\r\\nhr {\\r\\n\\tdisplay: block;\\r\\n\\tunicode-bidi: isolate;\\r\\n\\tmargin-block-start: 0.5em;\\r\\n\\tmargin-block-end: 0.5em;\\r\\n\\tmargin-inline-start: auto;\\r\\n\\tmargin-inline-end: auto;\\r\\n\\toverflow: hidden;\\r\\n\\tborder-style: inset;\\r\\n\\tborder-width: 1px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/PeoplePicker.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/ContextInfo.js":
/*!***************************************!*\
  !*** ./src/components/ContextInfo.js ***!
  \***************************************/
/*! exports provided: GetContextWebInformation, GetFormDigestValue, GetCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetContextWebInformation\", function() { return GetContextWebInformation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetFormDigestValue\", function() { return GetFormDigestValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetCurrentUser\", function() { return GetCurrentUser; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n\nvar GetContextWebInformation = function GetContextWebInformation() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: '/_api/contextinfo',\n      method: 'post'\n    }).then(function (response) {\n      resolve(response.d.GetContextWebInformation);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetFormDigestValue = function GetFormDigestValue() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return new Promise(function (resolve, reject) {\n    GetContextWebInformation(baseurl).then(function (response) {\n      resolve(response.FormDigestValue);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetCurrentUser = function GetCurrentUser() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: '/_api/web/CurrentUser'\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/ContextInfo.js?");

/***/ }),

/***/ "./src/components/Email.js":
/*!*********************************!*\
  !*** ./src/components/Email.js ***!
  \*********************************/
/*! exports provided: SendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SendEmail\", function() { return SendEmail; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n/* harmony import */ var _ContextInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextInfo */ \"./src/components/ContextInfo.js\");\n\n\nvar SendEmail = function SendEmail(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      to = _ref.to,\n      _ref$cc = _ref.cc,\n      cc = _ref$cc === void 0 ? [] : _ref$cc,\n      _ref$bcc = _ref.bcc,\n      bcc = _ref$bcc === void 0 ? [] : _ref$bcc,\n      subject = _ref.subject,\n      body = _ref.body;\n  var restbody = {\n    properties: {\n      __metadata: {\n        type: 'SP.Utilities.EmailProperties'\n      },\n      To: {\n        results: to\n      },\n      Body: body,\n      Subject: subject,\n      CC: {\n        results: cc\n      },\n      BCC: {\n        results: bcc\n      }\n    }\n  };\n  var endPoint = '/_api/SP.Utilities.Utility.SendEmail';\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])(baseurl).then(function (formDigestValue) {\n      var headers = {\n        Accept: 'application/json;odata=verbose',\n        'content-type': 'application/json;odata=verbose',\n        'X-RequestDigest': formDigestValue\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: 'post',\n        body: restbody,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/Email.js?");

/***/ }),

/***/ "./src/components/Groups.js":
/*!**********************************!*\
  !*** ./src/components/Groups.js ***!
  \**********************************/
/*! exports provided: GetGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup, CreateGroup, GetAssociatedGroups, ChangeGroupOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetGroup\", function() { return GetGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetGroupMembers\", function() { return GetGroupMembers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddUsersToGroup\", function() { return AddUsersToGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemoveUsersFromGroup\", function() { return RemoveUsersFromGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateGroup\", function() { return CreateGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetAssociatedGroups\", function() { return GetAssociatedGroups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChangeGroupOwner\", function() { return ChangeGroupOwner; });\n/* harmony import */ var _ContextInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextInfo */ \"./src/components/ContextInfo.js\");\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n\n\nvar GetGroup = function GetGroup(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      groupId = _ref.groupId,\n      groupName = _ref.groupName;\n  var endPoint;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('GetGroup requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetGroupMembers = function GetGroupMembers(_ref2) {\n  var _ref2$baseurl = _ref2.baseurl,\n      baseurl = _ref2$baseurl === void 0 ? '' : _ref2$baseurl,\n      groupId = _ref2.groupId,\n      groupName = _ref2.groupName;\n  var endPoint;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('GetGroupMembers requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')/Users\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")/Users\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar AddUsersToGroup = function AddUsersToGroup(_ref3) {\n  var _ref3$baseurl = _ref3.baseurl,\n      baseurl = _ref3$baseurl === void 0 ? '' : _ref3$baseurl,\n      groupId = _ref3.groupId,\n      groupName = _ref3.groupName,\n      loginName = _ref3.loginName;\n  var endPoint;\n\n  if (!loginName) {\n    return Promise.reject('AddUsersToGroup requires loginName');\n  } else {\n    if (!Array.isArray(loginName)) {\n      loginName = [loginName];\n    }\n  }\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('AddUsersToGroup requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')/Users(\").concat(LoginName, \")\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")/Users\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n\n    for (var i = 0; i < loginName.length; i++) {\n      fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: 'post',\n        body: {\n          __metadata: {\n            type: 'SP.User'\n          },\n          LoginName: loginName[i]\n        },\n        headers: {\n          accept: 'application/json; odata=verbose',\n          'content-type': 'application/json; odata=verbose'\n        }\n      }));\n    }\n\n    Promise.all(fetches).then(function (data) {\n      resolve(data.map(function (user) {\n        return user.d;\n      }));\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar RemoveUsersFromGroup = function RemoveUsersFromGroup(_ref4) {\n  var _ref4$baseurl = _ref4.baseurl,\n      baseurl = _ref4$baseurl === void 0 ? '' : _ref4$baseurl,\n      groupId = _ref4.groupId,\n      groupName = _ref4.groupName,\n      loginName = _ref4.loginName,\n      userId = _ref4.userId;\n  var endPoint;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('RemoveUsersFromGroup requires GroupId or GroupName');\n    } else {\n      endPoint = \"/_api/web/SiteGroups/getByName('\".concat(groupName, \"')/Users\");\n    }\n  } else {\n    endPoint = \"/_api/web/SiteGroups(\".concat(groupId, \")/Users\");\n  }\n\n  if (!loginName) {\n    if (!userId) {\n      return Promise.reject('RemoveUserFromGroup requires userId or logonName');\n    } else {\n      if (!Array.isArray(userId)) {\n        userId = [userId];\n      }\n    }\n  } else {\n    if (!Array.isArray(loginName)) {\n      userId = [loginName];\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetFormDigestValue\"])(baseurl).then(function (digestValue) {\n      var fetches = [];\n\n      if (loginName) {\n        for (var i = 0; i < loginName.length; i++) {\n          fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n            url: baseurl,\n            endPoint: \"\".concat(endPoint, \"/removeByLoginName('\").concat(loginName[i], \"')\"),\n            method: 'post',\n            headers: {\n              'x-requestdigest': digestValue,\n              accept: 'application/json; odata=verbose',\n              'content-type': 'application/json; odata=verbose'\n            }\n          }));\n        }\n      } else {\n        for (var _i = 0; _i < userId.length; _i++) {\n          fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n            url: baseurl,\n            endPoint: \"\".concat(endPoint, \"/removeByID(\").concat(userId[_i], \")\"),\n            method: 'post',\n            headers: {\n              'x-requestdigest': digestValue,\n              accept: 'application/json; odata=verbose',\n              'content-type': 'application/json; odata=verbose'\n            }\n          }));\n        }\n      }\n\n      Promise.all(fetches).then(function (data) {\n        resolve(data.map(function (user) {\n          return user.d;\n        }));\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar CreateGroup = function CreateGroup(_ref5) {\n  var _ref5$baseurl = _ref5.baseurl,\n      baseurl = _ref5$baseurl === void 0 ? '' : _ref5$baseurl,\n      groupName = _ref5.groupName,\n      _ref5$groupDescriptio = _ref5.groupDescription,\n      groupDescription = _ref5$groupDescriptio === void 0 ? '' : _ref5$groupDescriptio;\n  var endPoint;\n  var method = 'post';\n  var body = {\n    __metadata: {\n      type: 'SP.Group'\n    },\n    Description: groupDescription,\n    Title: groupName\n  };\n\n  if (!groupName) {\n    return Promise.reject('CreateGroup requires GroupName');\n  } else {\n    endPoint = \"/_api/web/SiteGroups\";\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetFormDigestValue\"])(baseurl).then(function (response) {\n      var headers = {\n        accept: 'application/json; odata=verbose',\n        'content-type': 'application/json; odata=verbose',\n        'x-requestdigest': response\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: method,\n        body: body,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar GetAssociatedGroups = function GetAssociatedGroups() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return new Promise(function (resolve, reject) {\n    Promise.all([Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: \"/_api/Web/AssociatedOwnerGroup\"\n    }), Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: \"/_api/Web/AssociatedMemberGroup\"\n    }), Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_1__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: \"/_api/Web/AssociatedVisitorGroup\"\n    })]).then(function (response) {\n      resolve({\n        AssociatedOwnerGroup: response[0].d,\n        AssociatedMemberGroup: response[1].d,\n        AssociatedVisitorGroup: response[2].d\n      });\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar ChangeGroupOwner = function ChangeGroupOwner(_ref6) {\n  var _ref6$baseurl = _ref6.baseurl,\n      baseurl = _ref6$baseurl === void 0 ? '' : _ref6$baseurl,\n      groupId = _ref6.groupId,\n      groupName = _ref6.groupName,\n      ownerGroupId = _ref6.ownerGroupId,\n      ownerGroupName = _ref6.ownerGroupName;\n  var clientContext = new SP.ClientContext(baseurl);\n  var group;\n  var ownerGroup;\n\n  if (!groupId) {\n    if (!groupName) {\n      return Promise.reject('ChangeGroupOwner requires groupId or groupName');\n    } else {\n      group = clientContext.get_web().get_siteGroups().getByName(groupName);\n    }\n  } else {\n    group = clientContext.get_web().get_siteGroups().getById(groupId);\n  }\n\n  if (!ownerGroupId) {\n    if (!ownerGroupName) {\n      return Promise.reject('ChangeGroupOwner requires ownerGroupId or ownerGroupName');\n    } else {\n      ownerGroup = clientContext.get_web().get_siteGroups().getByName(ownerGroupName);\n    }\n  } else {\n    ownerGroup = clientContext.get_web().get_siteGroups().getById(ownerGroupId);\n  }\n\n  return new Promise(function (resolve, reject) {\n    //clientContext.load(group)\n    group.set_owner(ownerGroup);\n    group.update();\n    clientContext.executeQueryAsync(function () {\n      resolve();\n    }, function () {\n      reject();\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/Groups.js?");

/***/ }),

/***/ "./src/components/ListPermissions.js":
/*!*******************************************!*\
  !*** ./src/components/ListPermissions.js ***!
  \*******************************************/
/*! exports provided: GetListPermissions, BreakListPermissionsInheritance, RemovePermissionsFromList, AddPermissionsToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListPermissions\", function() { return GetListPermissions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakListPermissionsInheritance\", function() { return BreakListPermissionsInheritance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromList\", function() { return RemovePermissionsFromList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToList\", function() { return AddPermissionsToList; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n/* harmony import */ var _ContextInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextInfo */ \"./src/components/ContextInfo.js\");\n\n\nvar GetListPermissions = function GetListPermissions(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID;\n  var endPoint;\n  var endPointParameters = \"?$expand=RoleDefinitionBindings,Member\";\n\n  if (!listGUID) {\n    if (!listName) {\n      return Promise.reject('GetListPermissions requires listGUID or listName');\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/RoleAssignments\").concat(endPointParameters);\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/RoleAssignments\").concat(endPointParameters);\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    });\n  })[\"catch\"](function (response) {\n    reject(response);\n  });\n};\nvar BreakListPermissionsInheritance = function BreakListPermissionsInheritance(_ref2) {\n  var _ref2$baseurl = _ref2.baseurl,\n      baseurl = _ref2$baseurl === void 0 ? '' : _ref2$baseurl,\n      listName = _ref2.listName,\n      listGUID = _ref2.listGUID,\n      _ref2$copy = _ref2.copy,\n      copy = _ref2$copy === void 0 ? true : _ref2$copy,\n      _ref2$clear = _ref2.clear,\n      clear = _ref2$clear === void 0 ? false : _ref2$clear;\n  var endPoint;\n  var method = 'post';\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('BreakInheritanceOnList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/breakroleinheritance(copyRoleAssignments=\").concat(copy, \",clearSubscopes=\").concat(clear, \")\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/breakroleinheritance(copyRoleAssignments=\").concat(copy, \",clearSubscopes=\").concat(clear, \")\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])(baseurl).then(function (formDigestValue) {\n      var headers = {\n        'x-requestdigest': formDigestValue\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: method,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar RemovePermissionsFromList = function RemovePermissionsFromList(_ref3) {\n  var _ref3$baseurl = _ref3.baseurl,\n      baseurl = _ref3$baseurl === void 0 ? '' : _ref3$baseurl,\n      listName = _ref3.listName,\n      listGUID = _ref3.listGUID,\n      principalId = _ref3.principalId,\n      roleDefId = _ref3.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('RemovePermissionsFromList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('RemovePermissionsFromList requires roleDefId');\n    } else {\n      if (!listGUID) {\n        if (!listName) {\n          return Promise.reject('RemovePermissionsFromList requires listGUID or listName');\n        } else {\n          endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/RoleAssignments/removeRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n        }\n      } else {\n        endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/RoleAssignments/removeRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n      }\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar AddPermissionsToList = function AddPermissionsToList(_ref4) {\n  var _ref4$baseurl = _ref4.baseurl,\n      baseurl = _ref4$baseurl === void 0 ? '' : _ref4$baseurl,\n      listName = _ref4.listName,\n      listGUID = _ref4.listGUID,\n      principalId = _ref4.principalId,\n      roleDefId = _ref4.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('AddPermissionsToList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('AddPermissionsToList requires roleDefId');\n    } else {\n      if (!listGUID) {\n        if (!listName) {\n          return Promise.reject('AddPermissionsToList requires listGUID or listName');\n        } else {\n          endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/RoleAssignments/addRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n        }\n      } else {\n        endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/RoleAssignments/addRoleAssignment(principalid=\").concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n      }\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/ListPermissions.js?");

/***/ }),

/***/ "./src/components/Lists.js":
/*!*********************************!*\
  !*** ./src/components/Lists.js ***!
  \*********************************/
/*! exports provided: GetList, DeleteList, CreateList, GetListItems, AddItemsToList, RemoveItemsFromList, GetListViews, GetListDefaultView, GetListFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetList\", function() { return GetList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteList\", function() { return DeleteList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateList\", function() { return CreateList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListItems\", function() { return GetListItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddItemsToList\", function() { return AddItemsToList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemoveItemsFromList\", function() { return RemoveItemsFromList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListViews\", function() { return GetListViews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListDefaultView\", function() { return GetListDefaultView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListFields\", function() { return GetListFields; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n/* harmony import */ var _ContextInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextInfo */ \"./src/components/ContextInfo.js\");\n\n\nvar GetList = function GetList() {//export const GetList = ({ baseurl = '', listName, listGUID, expand = '' }) => {\n  // let endPoint\n  // let endPointParameters = `?$expand=FirstUniqueAncestorSecurableObject,RootFolder`\n  // if (expand) endPointParameters += `,${expand}`\n  // if (!listGUID) {\n  // \tif (!listName) {\n  // \t\treturn Promise.reject('GetList requires listGUID or listName')\n  // \t} else {\n  // \t\tendPoint = `/_api/web/Lists/getByTitle('${listName}')${endPointParameters}`\n  // \t}\n  // } else {\n  // \tendPoint = `/_api/web/Lists('${listGUID}')${endPointParameters}`\n  // }\n  // return new Promise((resolve, reject) => {\n  // \tRestCall({ url: baseurl, endPoint: endPoint })\n  // \t\t.then((response) => {\n  // \t\t\tresolve(response.d)\n  // \t\t})\n  // \t\t.catch((response) => {\n  // \t\t\treject(response)\n  // \t\t})\n  // })\n};\nvar DeleteList = function DeleteList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('DeleteList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/recycle\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/recycle\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: 'post'\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar CreateList = function CreateList(_ref2) {\n  var _ref2$baseurl = _ref2.baseurl,\n      baseurl = _ref2$baseurl === void 0 ? '' : _ref2$baseurl,\n      listName = _ref2.listName,\n      _ref2$allowContentTyp = _ref2.allowContentTypes,\n      allowContentTypes = _ref2$allowContentTyp === void 0 ? false : _ref2$allowContentTyp,\n      _ref2$baseTemplate = _ref2.baseTemplate,\n      baseTemplate = _ref2$baseTemplate === void 0 ? 100 : _ref2$baseTemplate,\n      _ref2$contentTypesEna = _ref2.contentTypesEnabled,\n      contentTypesEnabled = _ref2$contentTypesEna === void 0 ? false : _ref2$contentTypesEna,\n      _ref2$description = _ref2.description,\n      description = _ref2$description === void 0 ? '' : _ref2$description;\n  var endPoint;\n  var method = 'post';\n  var body = {\n    __metadata: {\n      type: 'SP.List'\n    },\n    Title: listName,\n    AllowContentTypes: allowContentTypes,\n    BaseTemplate: baseTemplate,\n    ContentTypesEnabled: contentTypesEnabled,\n    Description: description\n  };\n\n  if (!listName) {\n    return new Promise(function (resolve, reject) {\n      reject('CreateList requires listName');\n    });\n  } else {\n    endPoint = \"/_api/web/Lists\";\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])(baseurl).then(function (formDigestValue) {\n      var headers = {\n        'x-requestdigest': formDigestValue,\n        accept: 'application/json; odata=verbose',\n        'content-type': 'application/json; odata=verbose'\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: method,\n        body: body,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar GetListItems = function GetListItems(_ref3) {\n  var _ref3$baseurl = _ref3.baseurl,\n      baseurl = _ref3$baseurl === void 0 ? '' : _ref3$baseurl,\n      listName = _ref3.listName,\n      listGUID = _ref3.listGUID,\n      filter = _ref3.filter,\n      expand = _ref3.expand,\n      select = _ref3.select;\n  var endPoint;\n  var parameters = [];\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  if (select) {\n    parameters.push(\"$select=\".concat(select));\n  }\n\n  if (expand) {\n    parameters.push(\"$expand=\".concat(expand));\n  }\n\n  if (filter) {\n    parameters.push(\"$filter=\".concat(filter));\n  }\n\n  if (parameters.length) {\n    endPoint += \"?\".concat(parameters.join('&'));\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar AddItemsToList = function AddItemsToList(_ref4) {\n  var _ref4$baseurl = _ref4.baseurl,\n      baseurl = _ref4$baseurl === void 0 ? '' : _ref4$baseurl,\n      listName = _ref4.listName,\n      listGUID = _ref4.listGUID,\n      items = _ref4.items;\n  var endPoint;\n\n  if (!items) {\n    return new Promise(function (resolve, reject) {\n      reject('AddItemsToList requires items');\n    });\n  } else {\n    if (!Array.isArray(items)) {\n      items = [items];\n    }\n  }\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('AddItemsToList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n    Promise.all([GetList({\n      url: baseurl,\n      listName: listName,\n      listGUID: listGUID\n    }), Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])()]).then(function (response) {\n      for (var i = 0; i < items.length; i++) {\n        items[i].__metadata = {\n          type: response[0].ListItemEntityTypeFullName\n        };\n        fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n          url: baseurl,\n          endPoint: endPoint,\n          method: 'post',\n          body: items[i],\n          headers: {\n            'x-requestdigest': response[1],\n            accept: 'application/json; odata=verbose',\n            'content-type': 'application/json; odata=verbose'\n          }\n        }));\n      }\n\n      Promise.all(fetches).then(function (response) {\n        resolve(response.map(function (item) {\n          return item.d;\n        }));\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar RemoveItemsFromList = function RemoveItemsFromList(_ref5) {\n  var _ref5$baseurl = _ref5.baseurl,\n      baseurl = _ref5$baseurl === void 0 ? '' : _ref5$baseurl,\n      listName = _ref5.listName,\n      listGUID = _ref5.listGUID,\n      itemIds = _ref5.itemIds;\n  var endPoint;\n\n  if (!itemIds) {\n    return new Promise(function (resolve, reject) {\n      reject('RemoveItemsFromList requires items');\n    });\n  } else {\n    if (!Array.isArray(itemIds)) {\n      itemIds = [itemIds];\n    }\n  }\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('RemoveItemsFromList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n\n    for (var i = 0; i < itemIds.length; i++) {\n      fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: \"\".concat(endPoint, \"(\").concat(itemIds[i], \")/recycle\"),\n        method: 'post',\n        headers: {\n          'x-http-method': 'delete',\n          'if-match': '*'\n        }\n      }));\n    }\n\n    Promise.all(fetches).then(function (response) {\n      resolve(response.map(function (item) {\n        return item.d;\n      }));\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetListViews = function GetListViews(_ref6) {\n  var _ref6$baseurl = _ref6.baseurl,\n      baseurl = _ref6$baseurl === void 0 ? '' : _ref6$baseurl,\n      listName = _ref6.listName,\n      listGUID = _ref6.listGUID,\n      viewGUID = _ref6.viewGUID;\n  var endPoint;\n  var parameters = '?$expand=ViewFields';\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListViews requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/Views\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/Views\");\n  }\n\n  if (viewGUID) {\n    endPoint = \"\".concat(endPoint, \"('\").concat(viewGUID, \"')\");\n  }\n\n  endPoint = \"\".concat(endPoint).concat(parameters);\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetListDefaultView = function GetListDefaultView(_ref7) {\n  var _ref7$baseurl = _ref7.baseurl,\n      baseurl = _ref7$baseurl === void 0 ? '' : _ref7$baseurl,\n      listName = _ref7.listName,\n      listGUID = _ref7.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListViews requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/DefaultView?$expand=ViewFields\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/DefaultView?$expand=ViewFields\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetListFields = function GetListFields(_ref8) {\n  var _ref8$baseurl = _ref8.baseurl,\n      baseurl = _ref8$baseurl === void 0 ? '' : _ref8$baseurl,\n      listName = _ref8.listName,\n      listGUID = _ref8.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListFields requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/Fields\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/Fields\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/Lists.js?");

/***/ }),

/***/ "./src/components/PeoplePicker.js":
/*!****************************************!*\
  !*** ./src/components/PeoplePicker.js ***!
  \****************************************/
/*! exports provided: PeoplePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeoplePicker\", function() { return PeoplePicker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_PeoplePicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/PeoplePicker.css */ \"./src/css/PeoplePicker.css\");\n/* harmony import */ var _css_PeoplePicker_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_PeoplePicker_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar PeoplePicker = function PeoplePicker(_ref) {\n  var schema = _ref.schema,\n      elementName = _ref.elementName,\n      getUserInfo = _ref.getUserInfo;\n  var ppLibraries = [{\n    type: 'text/javascript',\n    src: '_layouts/15/clienttemplates.js'\n  }, {\n    type: 'text/javascript',\n    src: '_layouts/15/clientforms.js'\n  }, {\n    type: 'text/javascript',\n    src: '_layouts/15/clientpeoplepicker.js'\n  }, {\n    type: 'text/javascript',\n    src: '_layouts/15/autofill.js'\n  }];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //append libraries needed for peoplepicker\n    ppLibraries.forEach(function (library) {\n      var head = document.getElementsByTagName('head')[0];\n      var element = document.createElement('script');\n      element.type = library.type;\n      element.src = library.src;\n      head.appendChild(element);\n    });\n    var observer = new MutationObserver(function (mutations) {\n      var userArray = [];\n\n      for (var i = 0; i < mutations[0].addedNodes.length; i++) {\n        userArray.push({\n          displayName: mutations[0].addedNodes[i].childNodes[1].title,\n          account: mutations[0].addedNodes[i].attributes.sid.value\n        });\n      }\n\n      getUserInfo(userArray);\n    }); // Render and initialize the picker.\n    // Pass the ID of the DOM element that contains the picker, an array of initial\n    // PickerEntity objects to set the picker value, and a schema that defines\n    // picker properties.\n\n    ExecuteOrDelayUntilScriptLoaded(function () {\n      setTimeout(function () {\n        // eslint-disable-next-line\n        SPClientPeoplePicker_InitStandaloneControlWrapper(elementName, null, schema);\n        var el = document.querySelector(\"#\".concat(elementName, \"_TopSpan_ResolvedList\"));\n        observer.observe(el, {\n          childList: true\n        });\n      }, 1000);\n    }, 'clienttemplates.js');\n    return function () {\n      observer.disconnect();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: elementName\n  });\n};\n\n//# sourceURL=webpack:///./src/components/PeoplePicker.js?");

/***/ }),

/***/ "./src/components/SitePermissions.js":
/*!*******************************************!*\
  !*** ./src/components/SitePermissions.js ***!
  \*******************************************/
/*! exports provided: GetSitePermissions, BreakSitePermissionsInheritance, ResetSitePermissionsInheritance, RemovePermissionsFromSite, AddPermissionsToSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetSitePermissions\", function() { return GetSitePermissions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BreakSitePermissionsInheritance\", function() { return BreakSitePermissionsInheritance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetSitePermissionsInheritance\", function() { return ResetSitePermissionsInheritance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromSite\", function() { return RemovePermissionsFromSite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToSite\", function() { return AddPermissionsToSite; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n/* harmony import */ var _ContextInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextInfo */ \"./src/components/ContextInfo.js\");\n\n\nvar GetSitePermissions = function GetSitePermissions() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var endPointParameters = \"?$expand=RoleDefinitionBindings,Member\";\n  var endPoint = \"/_api/web/RoleAssignments\".concat(endPointParameters);\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    });\n  })[\"catch\"](function (response) {\n    reject(response);\n  });\n};\nvar BreakSitePermissionsInheritance = function BreakSitePermissionsInheritance(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      _ref$copy = _ref.copy,\n      copy = _ref$copy === void 0 ? true : _ref$copy,\n      _ref$clear = _ref.clear,\n      clear = _ref$clear === void 0 ? false : _ref$clear;\n  var endPoint = \"/_api/web/breakroleinheritance(copyRoleAssignments=\".concat(copy, \",clearSubscopes=\").concat(clear, \")\");\n  var method = 'post';\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])(baseurl).then(function (formDigestValue) {\n      var headers = {\n        'x-requestdigest': formDigestValue\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: method,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar ResetSitePermissionsInheritance = function ResetSitePermissionsInheritance() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var endPoint = \"/_api/web/resetroleinheritance\";\n  var method = 'post';\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])(baseurl).then(function (formDigestValue) {\n      var headers = {\n        'x-requestdigest': formDigestValue\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: method,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar RemovePermissionsFromSite = function RemovePermissionsFromSite(_ref2) {\n  var _ref2$baseurl = _ref2.baseurl,\n      baseurl = _ref2$baseurl === void 0 ? '' : _ref2$baseurl,\n      principalId = _ref2.principalId,\n      roleDefId = _ref2.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('RemovePermissionsFromList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('RemovePermissionsFromList requires roleDefId');\n    } else {\n      endPoint = \"/_api/web/RoleAssignments/removeRoleAssignment(principalid=\".concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar AddPermissionsToSite = function AddPermissionsToSite(_ref3) {\n  var _ref3$baseurl = _ref3.baseurl,\n      baseurl = _ref3$baseurl === void 0 ? '' : _ref3$baseurl,\n      principalId = _ref3.principalId,\n      roleDefId = _ref3.roleDefId;\n  var endPoint;\n  var method = 'post';\n\n  if (!principalId) {\n    return Promise.reject('AddPermissionsToList requires principalId');\n  } else {\n    if (!roleDefId) {\n      return Promise.reject('AddPermissionsToList requires roleDefId');\n    } else {\n      endPoint = \"/_api/web/RoleAssignments/addRoleAssignment(principalid=\".concat(principalId, \",roledefid=\").concat(roleDefId, \")\");\n    }\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: method\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/SitePermissions.js?");

/***/ }),

/***/ "./src/components/Sites.js":
/*!*********************************!*\
  !*** ./src/components/Sites.js ***!
  \*********************************/
/*! exports provided: GetSite, GetCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetSite\", function() { return GetSite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetCollection\", function() { return GetCollection; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n\nvar GetSite = function GetSite() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var endPointParameters = \"?$expand=FirstUniqueAncestorSecurableObject,ParentWeb\";\n  var endPoint = \"/_api/web\".concat(endPointParameters);\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetCollection = function GetCollection() {\n  var baseurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var endPoint = \"/_api/web\";\n  if (baseurl === '') baseurl = _spPageContextInfo.siteAbsoluteUrl;\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/Sites.js?");

/***/ }),

/***/ "./src/components/Users.js":
/*!*********************************!*\
  !*** ./src/components/Users.js ***!
  \*********************************/
/*! exports provided: GetUser, GetUserGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetUser\", function() { return GetUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetUserGroups\", function() { return GetUserGroups; });\nvar GetUser = function GetUser(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      userId = _ref.userId;\n  var endPoint;\n\n  if (!userId) {\n    return new Promise(function (resolve, reject) {\n      reject('GetUser requires userId');\n    });\n  } else {\n    endPoint = \"/_api/web/GetUserById(\".concat(userId, \")\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    fetch(\"\".concat(baseurl).concat(endPoint)).then(function (results) {\n      if (results.ok) {\n        return results.json();\n      } else {\n        var msg = \"error: \".concat(results.status, \" \").concat(results.statusText);\n        reject(new error(msg));\n      }\n    }).then(function (data) {\n      resolve(data.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetUserGroups = function GetUserGroups(_ref2) {\n  var _ref2$baseurl = _ref2.baseurl,\n      baseurl = _ref2$baseurl === void 0 ? '' : _ref2$baseurl,\n      userId = _ref2.userId;\n  var endPoint;\n\n  if (!userId) {\n    return new Promise(function (resolve, reject) {\n      reject('GetUserGroups requires userId');\n    });\n  } else {\n    endPoint = \"/_api/web/GetUserById(\".concat(userId, \")/Groups\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    fetch(\"\".concat(baseurl).concat(endPoint)).then(function (results) {\n      if (results.ok) {\n        return results.json();\n      } else {\n        var msg = \"error: \".concat(results.status, \" \").concat(results.statusText);\n        reject(new error(msg));\n      }\n    }).then(function (data) {\n      resolve(data.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/Users.js?");

/***/ }),

/***/ "./src/css/PeoplePicker.css":
/*!**********************************!*\
  !*** ./src/css/PeoplePicker.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./PeoplePicker.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/PeoplePicker.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js!./PeoplePicker.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/PeoplePicker.css\",\n      function () {\n        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./PeoplePicker.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/PeoplePicker.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/PeoplePicker.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GetContextWebInformation, GetFormDigestValue, GetCurrentUser, GetGroup, CreateGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup, GetAssociatedGroups, ChangeGroupOwner, PeoplePicker, GetUser, GetUserGroups, GetList, CreateList, DeleteList, GetListItems, AddItemsToList, RemoveItemsFromList, GetListDefaultView, GetListViews, GetListFields, SendEmail, GetListPermissions, BreakListPermissionsInheritance, RemovePermissionsFromList, AddPermissionsToList, GetSitePermissions, ResetSitePermissionsInheritance, BreakSitePermissionsInheritance, RemovePermissionsFromSite, AddPermissionsToSite, GetSite, GetCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ContextInfo */ \"./src/components/ContextInfo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetContextWebInformation\", function() { return _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetContextWebInformation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetFormDigestValue\", function() { return _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetFormDigestValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetCurrentUser\", function() { return _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetCurrentUser\"]; });\n\n/* harmony import */ var _components_Groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Groups */ \"./src/components/Groups.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"GetGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"CreateGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetGroupMembers\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"GetGroupMembers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddUsersToGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"AddUsersToGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemoveUsersFromGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"RemoveUsersFromGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetAssociatedGroups\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"GetAssociatedGroups\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChangeGroupOwner\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"ChangeGroupOwner\"]; });\n\n/* harmony import */ var _components_PeoplePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PeoplePicker */ \"./src/components/PeoplePicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PeoplePicker\", function() { return _components_PeoplePicker__WEBPACK_IMPORTED_MODULE_2__[\"PeoplePicker\"]; });\n\n/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Users */ \"./src/components/Users.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetUser\", function() { return _components_Users__WEBPACK_IMPORTED_MODULE_3__[\"GetUser\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetUserGroups\", function() { return _components_Users__WEBPACK_IMPORTED_MODULE_3__[\"GetUserGroups\"]; });\n\n/* harmony import */ var _components_Lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Lists */ \"./src/components/Lists.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"CreateList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DeleteList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"DeleteList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListItems\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListItems\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddItemsToList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"AddItemsToList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemoveItemsFromList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"RemoveItemsFromList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListDefaultView\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListDefaultView\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListViews\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListViews\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListFields\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListFields\"]; });\n\n/* harmony import */ var _components_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Email */ \"./src/components/Email.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SendEmail\", function() { return _components_Email__WEBPACK_IMPORTED_MODULE_5__[\"SendEmail\"]; });\n\n/* harmony import */ var _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ListPermissions */ \"./src/components/ListPermissions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListPermissions\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"GetListPermissions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BreakListPermissionsInheritance\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"BreakListPermissionsInheritance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromList\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"RemovePermissionsFromList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToList\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"AddPermissionsToList\"]; });\n\n/* harmony import */ var _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SitePermissions */ \"./src/components/SitePermissions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetSitePermissions\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"GetSitePermissions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResetSitePermissionsInheritance\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"ResetSitePermissionsInheritance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BreakSitePermissionsInheritance\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"BreakSitePermissionsInheritance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromSite\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"RemovePermissionsFromSite\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToSite\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"AddPermissionsToSite\"]; });\n\n/* harmony import */ var _components_Sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Sites */ \"./src/components/Sites.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetSite\", function() { return _components_Sites__WEBPACK_IMPORTED_MODULE_8__[\"GetSite\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetCollection\", function() { return _components_Sites__WEBPACK_IMPORTED_MODULE_8__[\"GetCollection\"]; });\n\n\n\n\n\n\n\n\n\n //import  {SPList}  from './sharepoint/SPList'\n// export {\n// \t/* ==============\n// \tContextInfo\n// \t*/\n// \tGetContextWebInformation,\n// \tGetFormDigestValue,\n// \tGetCurrentUser,\n// \t/* ==============\n// \tEmail\n// \t*/\n// \tSendEmail,\n// \t/* ==============\n// \tGroups\n// \t*/\n// \tGetGroup,\n// \tCreateGroup,\n// \tGetGroupMembers,\n// \tAddUsersToGroup,\n// \tRemoveUsersFromGroup,\n// \tGetAssociatedGroups,\n// \tChangeGroupOwner,\n// \t/* ==============\n// \tLists\n// \t*/\n// \tGetList,\n// \tGetListItems,\n// \tAddItemsToList,\n// \tRemoveItemsFromList,\n// \tGetListDefaultView,\n// \tGetListViews,\n// \tGetListFields,\n// \tCreateList,\n// \tDeleteList,\n// \t/* ==============\n// \tPeoplePicker\n// \t*/\n// \tPeoplePicker,\n// \t/* ==============\n// \tPermissions - List\n// \t*/\n// \tGetListPermissions,\n// \tBreakListPermissionsInheritance,\n// \tRemovePermissionsFromList,\n// \tAddPermissionsToList,\n// \t/* ==============\n// \tPermissions - Site\n// \t*/\n// \tGetSitePermissions,\n// \tBreakSitePermissionsInheritance,\n// \tResetSitePermissionsInheritance,\n// \tRemovePermissionsFromSite,\n// \tAddPermissionsToSite,\n// \t/* ==============\n// \tSites\n// \t*/\n// \tGetCollection,\n// \tGetSite,\n// \t/* ==============\n// \tUsers\n// \t*/\n// \tGetUser,\n// \tGetUserGroups,\n// \t/* ==============\n// \tSharePoint\n// \t*/\n// \t//SPList,\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utilities/Common.js":
/*!*********************************!*\
  !*** ./src/utilities/Common.js ***!
  \*********************************/
/*! exports provided: RestCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestCall\", function() { return RestCall; });\nvar RestCall = function RestCall(_ref) {\n  var _ref$url = _ref.url,\n      url = _ref$url === void 0 ? '' : _ref$url,\n      endPoint = _ref.endPoint,\n      _ref$method = _ref.method,\n      method = _ref$method === void 0 ? 'get' : _ref$method,\n      _ref$body = _ref.body,\n      body = _ref$body === void 0 ? '' : _ref$body,\n      headers = _ref.headers;\n  if (url === '') url = _spPageContextInfo.webAbsoluteUrl;\n  var options = {\n    method: method\n  };\n\n  if (typeof body !== 'string') {\n    options.body = JSON.stringify(body);\n  } else {\n    if (body !== '') options.body = body;\n  }\n\n  if (headers) {\n    options.headers = headers;\n  } else {\n    options.headers = {\n      Accept: 'application/json;odata=verbose',\n      'content-type': 'application/json;odata=verbose'\n    };\n  }\n\n  return new Promise(function (resolve, reject) {\n    fetch(\"\".concat(url).concat(endPoint), options).then(function (response) {\n      if (response.ok) {\n        resolve(response.json());\n      } else {\n        reject(\"\".concat(response.status, \" \").concat(response.statusText));\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/utilities/Common.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
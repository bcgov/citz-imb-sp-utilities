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
/******/ 	var hotCurrentHash = "1d2de2eae680dcf14da7";
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
/******/ 		"test": 0
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
/******/ 	deferredModules.push([1,"common","react"]);
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./dv\": \"./node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"./node_modules/moment/locale/dv.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-in\": \"./node_modules/moment/locale/en-in.js\",\n\t\"./en-in.js\": \"./node_modules/moment/locale/en-in.js\",\n\t\"./en-nz\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-sg\": \"./node_modules/moment/locale/en-sg.js\",\n\t\"./en-sg.js\": \"./node_modules/moment/locale/en-sg.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fil\": \"./node_modules/moment/locale/fil.js\",\n\t\"./fil.js\": \"./node_modules/moment/locale/fil.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"./node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"./node_modules/moment/locale/fy.js\",\n\t\"./ga\": \"./node_modules/moment/locale/ga.js\",\n\t\"./ga.js\": \"./node_modules/moment/locale/ga.js\",\n\t\"./gd\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gom-deva\": \"./node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-deva.js\": \"./node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-latn\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"./node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"./node_modules/moment/locale/gu.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it-ch\": \"./node_modules/moment/locale/it-ch.js\",\n\t\"./it-ch.js\": \"./node_modules/moment/locale/it-ch.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"./node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"./node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"./node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"./node_modules/moment/locale/kk.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./kn\": \"./node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"./node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ku\": \"./node_modules/moment/locale/ku.js\",\n\t\"./ku.js\": \"./node_modules/moment/locale/ku.js\",\n\t\"./ky\": \"./node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"./node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./me\": \"./node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"./node_modules/moment/locale/me.js\",\n\t\"./mi\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"./node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"./node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"./node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"./node_modules/moment/locale/mt.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./oc-lnc\": \"./node_modules/moment/locale/oc-lnc.js\",\n\t\"./oc-lnc.js\": \"./node_modules/moment/locale/oc-lnc.js\",\n\t\"./pa-in\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"./node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"./node_modules/moment/locale/sd.js\",\n\t\"./se\": \"./node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"./node_modules/moment/locale/se.js\",\n\t\"./si\": \"./node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"./node_modules/moment/locale/si.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"./node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"./node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"./node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"./node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./te\": \"./node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"./node_modules/moment/locale/te.js\",\n\t\"./tet\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"./node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"./node_modules/moment/locale/tg.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"./node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"./node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"./node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"./node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-mo\": \"./node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-mo.js\": \"./node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetList\", function() { return GetList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteList\", function() { return DeleteList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateList\", function() { return CreateList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListItems\", function() { return GetListItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddItemsToList\", function() { return AddItemsToList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemoveItemsFromList\", function() { return RemoveItemsFromList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListViews\", function() { return GetListViews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListDefaultView\", function() { return GetListDefaultView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetListFields\", function() { return GetListFields; });\n/* harmony import */ var _utilities_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/Common */ \"./src/utilities/Common.js\");\n/* harmony import */ var _ContextInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextInfo */ \"./src/components/ContextInfo.js\");\n\n\nvar GetList = function GetList(_ref) {\n  var _ref$baseurl = _ref.baseurl,\n      baseurl = _ref$baseurl === void 0 ? '' : _ref$baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      _ref$expand = _ref.expand,\n      expand = _ref$expand === void 0 ? '' : _ref$expand;\n  var endPoint;\n  var endPointParameters = \"?$expand=FirstUniqueAncestorSecurableObject,RootFolder\";\n  if (expand) endPointParameters += \",\".concat(expand);\n\n  if (!listGUID) {\n    if (!listName) {\n      return Promise.reject('GetList requires listGUID or listName');\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')\").concat(endPointParameters);\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')\").concat(endPointParameters);\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar DeleteList = function DeleteList(_ref2) {\n  var _ref2$baseurl = _ref2.baseurl,\n      baseurl = _ref2$baseurl === void 0 ? '' : _ref2$baseurl,\n      listName = _ref2.listName,\n      listGUID = _ref2.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('DeleteList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/recycle\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/recycle\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint,\n      method: 'post'\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar CreateList = function CreateList(_ref3) {\n  var _ref3$baseurl = _ref3.baseurl,\n      baseurl = _ref3$baseurl === void 0 ? '' : _ref3$baseurl,\n      listName = _ref3.listName,\n      _ref3$allowContentTyp = _ref3.allowContentTypes,\n      allowContentTypes = _ref3$allowContentTyp === void 0 ? false : _ref3$allowContentTyp,\n      _ref3$baseTemplate = _ref3.baseTemplate,\n      baseTemplate = _ref3$baseTemplate === void 0 ? 100 : _ref3$baseTemplate,\n      _ref3$contentTypesEna = _ref3.contentTypesEnabled,\n      contentTypesEnabled = _ref3$contentTypesEna === void 0 ? false : _ref3$contentTypesEna,\n      _ref3$description = _ref3.description,\n      description = _ref3$description === void 0 ? '' : _ref3$description;\n  var endPoint;\n  var method = 'post';\n  var body = {\n    __metadata: {\n      type: 'SP.List'\n    },\n    Title: listName,\n    AllowContentTypes: allowContentTypes,\n    BaseTemplate: baseTemplate,\n    ContentTypesEnabled: contentTypesEnabled,\n    Description: description\n  };\n\n  if (!listName) {\n    return new Promise(function (resolve, reject) {\n      reject('CreateList requires listName');\n    });\n  } else {\n    endPoint = \"/_api/web/Lists\";\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])(baseurl).then(function (formDigestValue) {\n      var headers = {\n        'x-requestdigest': formDigestValue,\n        accept: 'application/json; odata=verbose',\n        'content-type': 'application/json; odata=verbose'\n      };\n      Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: endPoint,\n        method: method,\n        body: body,\n        headers: headers\n      }).then(function (response) {\n        resolve(response.d);\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar GetListItems = function GetListItems(_ref4) {\n  var _ref4$baseurl = _ref4.baseurl,\n      baseurl = _ref4$baseurl === void 0 ? '' : _ref4$baseurl,\n      listName = _ref4.listName,\n      listGUID = _ref4.listGUID,\n      filter = _ref4.filter,\n      expand = _ref4.expand,\n      select = _ref4.select;\n  var endPoint;\n  var parameters = [];\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  if (select) {\n    parameters.push(\"$select=\".concat(select));\n  }\n\n  if (expand) {\n    parameters.push(\"$expand=\".concat(expand));\n  }\n\n  if (filter) {\n    parameters.push(\"$filter=\".concat(filter));\n  }\n\n  if (parameters.length) {\n    endPoint += \"?\".concat(parameters.join('&'));\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar AddItemsToList = function AddItemsToList(_ref5) {\n  var _ref5$baseurl = _ref5.baseurl,\n      baseurl = _ref5$baseurl === void 0 ? '' : _ref5$baseurl,\n      listName = _ref5.listName,\n      listGUID = _ref5.listGUID,\n      items = _ref5.items;\n  var endPoint;\n\n  if (!items) {\n    return new Promise(function (resolve, reject) {\n      reject('AddItemsToList requires items');\n    });\n  } else {\n    if (!Array.isArray(items)) {\n      items = [items];\n    }\n  }\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('AddItemsToList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n    Promise.all([GetList({\n      url: baseurl,\n      listName: listName,\n      listGUID: listGUID\n    }), Object(_ContextInfo__WEBPACK_IMPORTED_MODULE_1__[\"GetFormDigestValue\"])()]).then(function (response) {\n      for (var i = 0; i < items.length; i++) {\n        items[i].__metadata = {\n          type: response[0].ListItemEntityTypeFullName\n        };\n        fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n          url: baseurl,\n          endPoint: endPoint,\n          method: 'post',\n          body: items[i],\n          headers: {\n            'x-requestdigest': response[1],\n            accept: 'application/json; odata=verbose',\n            'content-type': 'application/json; odata=verbose'\n          }\n        }));\n      }\n\n      Promise.all(fetches).then(function (response) {\n        resolve(response.map(function (item) {\n          return item.d;\n        }));\n      })[\"catch\"](function (response) {\n        reject(response);\n      });\n    });\n  });\n};\nvar RemoveItemsFromList = function RemoveItemsFromList(_ref6) {\n  var _ref6$baseurl = _ref6.baseurl,\n      baseurl = _ref6$baseurl === void 0 ? '' : _ref6$baseurl,\n      listName = _ref6.listName,\n      listGUID = _ref6.listGUID,\n      itemIds = _ref6.itemIds;\n  var endPoint;\n\n  if (!itemIds) {\n    return new Promise(function (resolve, reject) {\n      reject('RemoveItemsFromList requires items');\n    });\n  } else {\n    if (!Array.isArray(itemIds)) {\n      itemIds = [itemIds];\n    }\n  }\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('RemoveItemsFromList requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/items\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/items\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    var fetches = [];\n\n    for (var i = 0; i < itemIds.length; i++) {\n      fetches.push(Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n        url: baseurl,\n        endPoint: \"\".concat(endPoint, \"(\").concat(itemIds[i], \")/recycle\"),\n        method: 'post',\n        headers: {\n          'x-http-method': 'delete',\n          'if-match': '*'\n        }\n      }));\n    }\n\n    Promise.all(fetches).then(function (response) {\n      resolve(response.map(function (item) {\n        return item.d;\n      }));\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetListViews = function GetListViews(_ref7) {\n  var _ref7$baseurl = _ref7.baseurl,\n      baseurl = _ref7$baseurl === void 0 ? '' : _ref7$baseurl,\n      listName = _ref7.listName,\n      listGUID = _ref7.listGUID,\n      viewGUID = _ref7.viewGUID;\n  var endPoint;\n  var parameters = '?$expand=ViewFields';\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListViews requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/Views\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/Views\");\n  }\n\n  if (viewGUID) {\n    endPoint = \"\".concat(endPoint, \"('\").concat(viewGUID, \"')\");\n  }\n\n  endPoint = \"\".concat(endPoint).concat(parameters);\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetListDefaultView = function GetListDefaultView(_ref8) {\n  var _ref8$baseurl = _ref8.baseurl,\n      baseurl = _ref8$baseurl === void 0 ? '' : _ref8$baseurl,\n      listName = _ref8.listName,\n      listGUID = _ref8.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListViews requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/DefaultView?$expand=ViewFields\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/DefaultView?$expand=ViewFields\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\nvar GetListFields = function GetListFields(_ref9) {\n  var _ref9$baseurl = _ref9.baseurl,\n      baseurl = _ref9$baseurl === void 0 ? '' : _ref9$baseurl,\n      listName = _ref9.listName,\n      listGUID = _ref9.listGUID;\n  var endPoint;\n\n  if (!listGUID) {\n    if (!listName) {\n      return new Promise(function (resolve, reject) {\n        reject('GetListFields requires listGUID or listName');\n      });\n    } else {\n      endPoint = \"/_api/web/Lists/getByTitle('\".concat(listName, \"')/Fields\");\n    }\n  } else {\n    endPoint = \"/_api/web/Lists('\".concat(listGUID, \"')/Fields\");\n  }\n\n  return new Promise(function (resolve, reject) {\n    Object(_utilities_Common__WEBPACK_IMPORTED_MODULE_0__[\"RestCall\"])({\n      url: baseurl,\n      endPoint: endPoint\n    }).then(function (response) {\n      resolve(response.d.results);\n    })[\"catch\"](function (response) {\n      reject(response);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/components/Lists.js?");

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
/*! exports provided: GetContextWebInformation, GetFormDigestValue, GetCurrentUser, SendEmail, GetGroup, CreateGroup, GetGroupMembers, AddUsersToGroup, RemoveUsersFromGroup, GetAssociatedGroups, ChangeGroupOwner, GetList, GetListItems, AddItemsToList, RemoveItemsFromList, GetListDefaultView, GetListViews, GetListFields, CreateList, DeleteList, PeoplePicker, GetListPermissions, BreakListPermissionsInheritance, RemovePermissionsFromList, AddPermissionsToList, GetSitePermissions, BreakSitePermissionsInheritance, ResetSitePermissionsInheritance, RemovePermissionsFromSite, AddPermissionsToSite, GetCollection, GetSite, GetUser, GetUserGroups, SPList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ContextInfo */ \"./src/components/ContextInfo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetContextWebInformation\", function() { return _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetContextWebInformation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetFormDigestValue\", function() { return _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetFormDigestValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetCurrentUser\", function() { return _components_ContextInfo__WEBPACK_IMPORTED_MODULE_0__[\"GetCurrentUser\"]; });\n\n/* harmony import */ var _components_Groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Groups */ \"./src/components/Groups.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"GetGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"CreateGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetGroupMembers\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"GetGroupMembers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddUsersToGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"AddUsersToGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemoveUsersFromGroup\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"RemoveUsersFromGroup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetAssociatedGroups\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"GetAssociatedGroups\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChangeGroupOwner\", function() { return _components_Groups__WEBPACK_IMPORTED_MODULE_1__[\"ChangeGroupOwner\"]; });\n\n/* harmony import */ var _components_PeoplePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PeoplePicker */ \"./src/components/PeoplePicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PeoplePicker\", function() { return _components_PeoplePicker__WEBPACK_IMPORTED_MODULE_2__[\"PeoplePicker\"]; });\n\n/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Users */ \"./src/components/Users.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetUser\", function() { return _components_Users__WEBPACK_IMPORTED_MODULE_3__[\"GetUser\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetUserGroups\", function() { return _components_Users__WEBPACK_IMPORTED_MODULE_3__[\"GetUserGroups\"]; });\n\n/* harmony import */ var _components_Lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Lists */ \"./src/components/Lists.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListItems\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListItems\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddItemsToList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"AddItemsToList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemoveItemsFromList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"RemoveItemsFromList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListDefaultView\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListDefaultView\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListViews\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListViews\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListFields\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"GetListFields\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CreateList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"CreateList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DeleteList\", function() { return _components_Lists__WEBPACK_IMPORTED_MODULE_4__[\"DeleteList\"]; });\n\n/* harmony import */ var _components_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Email */ \"./src/components/Email.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SendEmail\", function() { return _components_Email__WEBPACK_IMPORTED_MODULE_5__[\"SendEmail\"]; });\n\n/* harmony import */ var _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ListPermissions */ \"./src/components/ListPermissions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetListPermissions\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"GetListPermissions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BreakListPermissionsInheritance\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"BreakListPermissionsInheritance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromList\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"RemovePermissionsFromList\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToList\", function() { return _components_ListPermissions__WEBPACK_IMPORTED_MODULE_6__[\"AddPermissionsToList\"]; });\n\n/* harmony import */ var _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SitePermissions */ \"./src/components/SitePermissions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetSitePermissions\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"GetSitePermissions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BreakSitePermissionsInheritance\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"BreakSitePermissionsInheritance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResetSitePermissionsInheritance\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"ResetSitePermissionsInheritance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RemovePermissionsFromSite\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"RemovePermissionsFromSite\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AddPermissionsToSite\", function() { return _components_SitePermissions__WEBPACK_IMPORTED_MODULE_7__[\"AddPermissionsToSite\"]; });\n\n/* harmony import */ var _components_Sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Sites */ \"./src/components/Sites.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetCollection\", function() { return _components_Sites__WEBPACK_IMPORTED_MODULE_8__[\"GetCollection\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetSite\", function() { return _components_Sites__WEBPACK_IMPORTED_MODULE_8__[\"GetSite\"]; });\n\n/* harmony import */ var _sharepoint_SPList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sharepoint/SPList */ \"./src/sharepoint/SPList.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SPList\", function() { return _sharepoint_SPList__WEBPACK_IMPORTED_MODULE_9__[\"SPList\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sharepoint/SPList.js":
/*!**********************************!*\
  !*** ./src/sharepoint/SPList.js ***!
  \**********************************/
/*! exports provided: SPList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPList\", function() { return SPList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Lists */ \"./src/components/Lists.js\");\n/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-table */ \"./node_modules/material-table/dist/index.js\");\n/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Add */ \"./node_modules/@material-ui/icons/Add.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AddBox */ \"./node_modules/@material-ui/icons/AddBox.js\");\n/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ \"./node_modules/@material-ui/icons/ArrowDownward.js\");\n/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Check */ \"./node_modules/@material-ui/icons/Check.js\");\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ \"./node_modules/@material-ui/icons/ChevronLeft.js\");\n/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ \"./node_modules/@material-ui/icons/ChevronRight.js\");\n/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Clear */ \"./node_modules/@material-ui/icons/Clear.js\");\n/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ \"./node_modules/@material-ui/icons/DeleteOutline.js\");\n/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"./node_modules/@material-ui/icons/Edit.js\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FilterList */ \"./node_modules/@material-ui/icons/FilterList.js\");\n/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ \"./node_modules/@material-ui/icons/FirstPage.js\");\n/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LastPage */ \"./node_modules/@material-ui/icons/LastPage.js\");\n/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/NotInterested */ \"./node_modules/@material-ui/icons/NotInterested.js\");\n/* harmony import */ var _material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/SaveAlt */ \"./node_modules/@material-ui/icons/SaveAlt.js\");\n/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Search */ \"./node_modules/@material-ui/icons/Search.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ViewColumn */ \"./node_modules/@material-ui/icons/ViewColumn.js\");\n/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/LibraryBooks */ \"./node_modules/@material-ui/icons/LibraryBooks.js\");\n/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/QuestionAnswer */ \"./node_modules/@material-ui/icons/QuestionAnswer.js\");\n/* harmony import */ var _material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/People */ \"./node_modules/@material-ui/icons/People.js\");\n/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_25__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SPList = function SPList(_ref) {\n  var baseurl = _ref.baseurl,\n      listName = _ref.listName,\n      listGUID = _ref.listGUID,\n      options = _ref.options,\n      _ref$addItem = _ref.addItem,\n      addItem = _ref$addItem === void 0 ? false : _ref$addItem,\n      _ref$deleteItem = _ref.deleteItem,\n      deleteItem = _ref$deleteItem === void 0 ? false : _ref$deleteItem,\n      _ref$editItem = _ref.editItem,\n      editItem = _ref$editItem === void 0 ? false : _ref$editItem,\n      _ref$changeItemPermis = _ref.changeItemPermissions,\n      changeItemPermissions = _ref$changeItemPermis === void 0 ? false : _ref$changeItemPermis,\n      customActions = _ref.customActions;\n  var icons = {\n    People: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_25___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Question: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_QuestionAnswer__WEBPACK_IMPORTED_MODULE_24___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Library: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_23___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Add: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    AddBox: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Check: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Clear: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Delete: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_13___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Edit: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Export: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_20___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Filter: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_15___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    LastPage: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_17___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    NextPage: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_11___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    NotInterested: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_18___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    Search: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_21___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_19___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    }),\n    ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (props, ref) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_22___default.a, _extends({}, props, {\n        ref: ref\n      }));\n    })\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      _useState2 = _slicedToArray(_useState, 2),\n      list = _useState2[0],\n      setList = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      actions = _useState4[0],\n      setActions = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      title = _useState6[0],\n      setTitle = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      _useState8 = _slicedToArray(_useState7, 2),\n      viewColumns = _useState8[0],\n      setViewColumns = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      _useState10 = _slicedToArray(_useState9, 2),\n      listItems = _useState10[0],\n      setListItems = _useState10[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_components_Lists__WEBPACK_IMPORTED_MODULE_1__[\"GetList\"])({\n      baseurl: baseurl,\n      listName: listName,\n      listGUID: listGUID,\n      expand: 'DefaultView,DefaultView/ViewFields,Fields'\n    }).then(function (response) {\n      setList(response);\n    });\n\n    if (addItem) {\n      setActions(function (prevActions) {\n        prevActions.push({\n          icon: icons.Add,\n          tooltip: 'Add Item',\n          isFreeAction: true,\n          onClick: function onClick(event, rowdata) {\n            console.log('addItem'); //todo: setAddDialog(true)\n          }\n        });\n        return prevActions;\n      });\n    }\n\n    if (deleteItem) {\n      setActions(function (prevActions) {\n        prevActions.push({\n          icon: icons.Delete,\n          tooltip: 'Delete Item',\n          onClick: function onClick(event, rowdata) {\n            console.log('deleteItem'); //TODO: delete item actions\n          }\n        });\n        return prevActions;\n      });\n    }\n\n    if (editItem) {\n      setActions(function (prevActions) {\n        prevActions.push({\n          icon: icons.Edit,\n          tooltip: 'Edit Item',\n          onClick: function onClick(event, rowdata) {\n            console.log('editItem'); //TODO: edit item actions\n          }\n        });\n        return prevActions;\n      });\n    }\n\n    if (changeItemPermissions) {\n      setActions(function (prevActions) {\n        prevActions.push({\n          icon: icons.People,\n          tooltip: 'Change Item Permissions',\n          onClick: function onClick(event, rowdata) {\n            console.log('changeItemPermissions'); //TODO: change item permissions actions\n          }\n        });\n        return prevActions;\n      });\n    }\n\n    if (customActions) {\n      customActions.map(function (action, index) {\n        action.icon = icons[action.icon];\n        return setActions(function (prevActions) {\n          prevActions.push(action);\n          return prevActions;\n        });\n      });\n    }\n\n    return function () {};\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (list) {\n      setTitle(list.Title);\n      var fields = {};\n\n      for (var i = 0; i < list.Fields.results.length; i++) {\n        fields[list.Fields.results[i].InternalName] = list.Fields.results[i];\n      }\n\n      setViewColumns(list.DefaultView.ViewFields.Items.results.map(function (field) {\n        var fieldObject = {\n          title: fields[field].Title,\n          field: field,\n          select: fields[field].StaticName\n        };\n\n        switch (fields[field].TypeAsString) {\n          case 'DateTime':\n            fieldObject.render = function (rowdata) {\n              if (moment__WEBPACK_IMPORTED_MODULE_4___default()(rowdata[field]).isValid()) {\n                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a // calendar={calendarStrings}\n                , {\n                  format: \"YYYY-MMM-DD hh:mm\",\n                  date: rowdata[field]\n                });\n              }\n            };\n\n            break;\n\n          case 'UserMulti':\n            fieldObject.expand = fields[field].StaticName + '/Id';\n            fieldObject.select = fields[field].StaticName + '/Title';\n\n            fieldObject.render = function (rowdata) {\n              if (rowdata.Users.results) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"List\"], {\n                dense: true,\n                disablePadding: true\n              }, rowdata.Users.results.map(function (user, index) {\n                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItem\"], {\n                  key: index,\n                  dense: true,\n                  disableGutters: true\n                }, user.Title);\n              }));\n            };\n\n            break;\n\n          case 'User':\n            fieldObject.expand = fields[field].StaticName + '/Id';\n            fieldObject.select = fields[field].StaticName + '/Title';\n\n            fieldObject.render = function (rowdata) {\n              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"List\"], {\n                dense: true,\n                disablePadding: true\n              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItem\"], {\n                dense: true,\n                disableGutters: true\n              }, rowdata.SingleUser.Title));\n            };\n\n            break;\n\n          default: //console.log('Unhandled field type', fields[field])\n\n        }\n\n        if (field === 'LinkTitleNoMenu') {\n          fieldObject.render = function (rowdata) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n              href: rowdata['Url']\n            }, rowdata[field]);\n          };\n        }\n\n        if (field === 'LinkTitle') {\n          fieldObject.render = function (rowdata) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n              href: rowdata['Url']\n            }, rowdata[field], \" - edit\"); //TODO: make edit dropdown\n          };\n        }\n\n        return fieldObject;\n      }));\n    }\n\n    return function () {};\n  }, [list]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (viewColumns) {\n      var itemsSelect = viewColumns.map(function (column) {\n        return column.select;\n      });\n      var itemsExpand = [];\n\n      for (var i = 0; i < viewColumns.length; i++) {\n        if (viewColumns[i].expand) itemsExpand.push(viewColumns[i].expand);\n      }\n\n      Object(_components_Lists__WEBPACK_IMPORTED_MODULE_1__[\"GetListItems\"])({\n        baseurl: baseurl,\n        listName: listName,\n        listGUID: listGUID,\n        select: itemsSelect.join(','),\n        expand: itemsExpand.join(',')\n      }).then(function (response) {\n        setListItems(response.map(function (item) {\n          item.LinkTitleNoMenu = item.Title;\n          item.LinkTitle = item.Title;\n          item.Url = item.__metadata.uri;\n          return item;\n        }));\n      });\n    }\n\n    return function () {};\n  }, [viewColumns]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    actions: actions,\n    icons: icons,\n    data: listItems,\n    title: title,\n    columns: viewColumns,\n    options: options\n  });\n};\n\n//# sourceURL=webpack:///./src/sharepoint/SPList.js?");

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

/***/ "./test/app.js":
/*!*********************!*\
  !*** ./test/app.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar className = 'main-app';\n\nif (typeof module.hot !== 'undefined') {\n  module.hot.accept();\n  var oldApp = document.getElementsByClassName(className)[0];\n\n  if (typeof oldApp !== 'undefined' && oldApp !== null) {\n    oldApp.remove();\n  }\n}\n\nvar MainModule = function MainModule() {\n  _classCallCheck(this, MainModule);\n\n  var app = document.createElement('div');\n  app.classList.add(className);\n  document.body.appendChild(app);\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_2__[\"SPList\"], null), app);\n};\n\nnew MainModule();\n\n//# sourceURL=webpack:///./test/app.js?");

/***/ }),

/***/ 1:
/*!***************************!*\
  !*** multi ./test/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./test/app.js */\"./test/app.js\");\n\n\n//# sourceURL=webpack:///multi_./test/app.js?");

/***/ })

/******/ });
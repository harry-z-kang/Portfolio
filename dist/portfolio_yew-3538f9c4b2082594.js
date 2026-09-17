function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_67e7344beaa85059: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Number_c54e7112a3fa7e3e: function(arg0) {
            const ret = Number(arg0);
            return ret;
        },
        __wbg___wbindgen_boolean_get_7a12af2b3f899c5a: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_0e68cf47c9cbd9b0: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_50072d4d6e45c193: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_function_fcda5e3902d732fe: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_edb6b15aa3afe12e: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_c4f7cb494a2a21f1: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_8c687d0b90d5b524: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_9fdcd3c0a860dd3b: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_3c30021c243b64cd: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_number_get_1dc732b810cb937c: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_92ab86bb19cbc12f: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_5d9e815e6fdf150f: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_997e73d32238e655: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_addEventListener_2f29f3aa43f18e91: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4);
        }, arguments); },
        __wbg_altKey_c75bf4903a5db4c2: function(arg0) {
            const ret = arg0.altKey;
            return ret;
        },
        __wbg_body_7d83a19bffb260db: function(arg0) {
            const ret = arg0.body;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_bubbles_454fa86c9a7c87f4: function(arg0) {
            const ret = arg0.bubbles;
            return ret;
        },
        __wbg_cache_key_581e6d43e117266a: function(arg0) {
            const ret = arg0.__yew_subtree_cache_key;
            return isLikeNone(ret) ? Number.MAX_SAFE_INTEGER : (ret) >>> 0;
        },
        __wbg_call_6bcf8d3e20937e46: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_cancelBubble_946b05eecc8e3059: function(arg0) {
            const ret = arg0.cancelBubble;
            return ret;
        },
        __wbg_childNodes_111861efe001fa18: function(arg0) {
            const ret = arg0.childNodes;
            return ret;
        },
        __wbg_clipboard_e39061ae5482d3b8: function(arg0) {
            const ret = arg0.clipboard;
            return ret;
        },
        __wbg_cloneNode_780b5626b746de33: function() { return handleError(function (arg0) {
            const ret = arg0.cloneNode();
            return ret;
        }, arguments); },
        __wbg_composedPath_b2dae8cc5065d452: function(arg0) {
            const ret = arg0.composedPath();
            return ret;
        },
        __wbg_createElementNS_a45335f2f24f9ec5: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return ret;
        }, arguments); },
        __wbg_createElement_b9024dc5ba95ac27: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_createTextNode_6d2db3073c3d6df6: function(arg0, arg1, arg2) {
            const ret = arg0.createTextNode(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_crypto_38df2bab126b63dc: function(arg0) {
            const ret = arg0.crypto;
            return ret;
        },
        __wbg_ctrlKey_ba07ac4b2ea90600: function(arg0) {
            const ret = arg0.ctrlKey;
            return ret;
        },
        __wbg_document_c7f486c52d63d24e: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_entries_972a87586902cf87: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_b1df75078f69c897: function(arg0, arg1) {
            var v0 = getArrayJsValueFromWasm0(arg0, arg1);
            wasm.__wbindgen_free(arg0, arg1 * 4, 4);
            console.error(...(v0));
        },
        __wbg_from_a39669ce566077da: function(arg0) {
            const ret = Array.from(arg0);
            return ret;
        },
        __wbg_getRandomValues_c44a50d8cfdaebeb: function() { return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments); },
        __wbg_get_b1f0ab13c737f856: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_with_ref_key_6412cf3094599694: function(arg0, arg1) {
            const ret = arg0[arg1];
            return ret;
        },
        __wbg_hash_04b938b4a921e95e: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.hash;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_hash_da733de7308d6afb: function(arg0, arg1) {
            const ret = arg1.hash;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_history_9d7bf9676b7c736c: function() { return handleError(function (arg0) {
            const ret = arg0.history;
            return ret;
        }, arguments); },
        __wbg_host_8c713ce042f34258: function(arg0) {
            const ret = arg0.host;
            return ret;
        },
        __wbg_href_45f4a365a3dd8529: function(arg0, arg1) {
            const ret = arg1.href;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_href_68e57a7f88f88b24: function(arg0, arg1) {
            const ret = arg1.href;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_href_de709e84ed5de5d2: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.href;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_insertBefore_5b6fe047589f01ee: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.insertBefore(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_instanceof_ArrayBuffer_d4ff01f8247925ae: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Element_c95c45635d03047e: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Element;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_ShadowRoot_909fd69aa6c757e6: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ShadowRoot;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_598adc0fef426aa8: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_a3b8566f0a9c5d1a: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isSafeInteger_8f51c743827d1ec5: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_is_61443cc073056436: function(arg0, arg1) {
            const ret = Object.is(arg0, arg1);
            return ret;
        },
        __wbg_lastChild_8af90db54e7b7dd1: function(arg0) {
            const ret = arg0.lastChild;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_length_31bdaf014f5fbde2: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_4e1adc0d42e23620: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_listener_id_fd5d191d59511336: function(arg0) {
            const ret = arg0.__yew_listener_id;
            return isLikeNone(ret) ? Number.MAX_SAFE_INTEGER : (ret) >>> 0;
        },
        __wbg_location_382075cf6a393ad4: function(arg0) {
            const ret = arg0.location;
            return ret;
        },
        __wbg_metaKey_feb71e77f26b1a4c: function(arg0) {
            const ret = arg0.metaKey;
            return ret;
        },
        __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
            const ret = arg0.msCrypto;
            return ret;
        },
        __wbg_namespaceURI_383dae17802218fe: function(arg0, arg1) {
            const ret = arg1.namespaceURI;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_navigator_d217ca64c4bbff48: function(arg0) {
            const ret = arg0.navigator;
            return ret;
        },
        __wbg_new_1da3429bc3c4541c: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_2fa8dd8f40f14923: function() { return handleError(function (arg0, arg1) {
            const ret = new URL(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_bebc3f4757acf305: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_with_base_15feba63f6973577: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = new URL(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        }, arguments); },
        __wbg_new_with_length_5ffeddb9d9fbb96f: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_nextSibling_e03804658fe4755b: function(arg0) {
            const ret = arg0.nextSibling;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_node_84ea875411254db1: function(arg0) {
            const ret = arg0.node;
            return ret;
        },
        __wbg_now_d1fb6650485d7f3e: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_parentElement_c0b090e8023d3df2: function(arg0) {
            const ret = arg0.parentElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_parentNode_bf0725ead93471cf: function(arg0) {
            const ret = arg0.parentNode;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_pathname_184f418674522240: function(arg0, arg1) {
            const ret = arg1.pathname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_pathname_1c74e1a4da38e765: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.pathname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_preventDefault_4235a4ccf8540533: function(arg0) {
            arg0.preventDefault();
        },
        __wbg_process_44c7a14e11e9f69e: function(arg0) {
            const ret = arg0.process;
            return ret;
        },
        __wbg_prototypesetcall_ae9f5e7459250748: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_pushState_1eded2f6852c83e7: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.pushState(arg1, getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
        }, arguments); },
        __wbg_querySelector_5b1d9ebad373dc9d: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_queueMicrotask_85c90f6987555d65: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_f6a1fa10b81d1fc0: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_randomFillSync_6c25eac9869eb53c: function() { return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments); },
        __wbg_removeAttribute_8ce0ab2fa42b383d: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.removeAttribute(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_removeChild_2d5088cc0caca88a: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.removeChild(arg1);
            return ret;
        }, arguments); },
        __wbg_removeEventListener_ce112b80f91bac74: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4 !== 0);
        }, arguments); },
        __wbg_replaceState_6542bba3c2e92e5e: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.replaceState(arg1, getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
        }, arguments); },
        __wbg_require_b4edbdcf3e2a1ef0: function() { return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments); },
        __wbg_resolve_35ec7e0c6af4c82c: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_search_685c8e05aa5dd9ba: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_search_6b8de53571c80faa: function(arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_setAttribute_8c84e9351986b1f6: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setTimeout_56bcdccbad22fd44: function() { return handleError(function (arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_setTimeout_a89fa3173dd1b518: function(arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        },
        __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
            arg0[arg1] = arg2;
        },
        __wbg_set_a377297433dfea63: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_cache_key_65a529cd1f95fc20: function(arg0, arg1) {
            arg0.__yew_subtree_cache_key = arg1 >>> 0;
        },
        __wbg_set_capture_db02e6717260bbc5: function(arg0, arg1) {
            arg0.capture = arg1 !== 0;
        },
        __wbg_set_checked_d4ef002a3dc5d2e4: function(arg0, arg1) {
            arg0.checked = arg1 !== 0;
        },
        __wbg_set_defaultValue_c03a8f2b2168a1d4: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.defaultValue = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_hash_a443485cb8db43b0: function(arg0, arg1, arg2) {
            arg0.hash = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_innerHTML_ffa3d7ec0128d447: function(arg0, arg1, arg2) {
            arg0.innerHTML = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_listener_id_bdd6845f6cb449dd: function(arg0, arg1) {
            arg0.__yew_listener_id = arg1 >>> 0;
        },
        __wbg_set_nodeValue_f17ed62bccdf2d9d: function(arg0, arg1, arg2) {
            arg0.nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_once_60a969fcdc22b373: function(arg0, arg1) {
            arg0.once = arg1 !== 0;
        },
        __wbg_set_passive_1ae62aebc6856e7c: function(arg0, arg1) {
            arg0.passive = arg1 !== 0;
        },
        __wbg_set_search_4282ef5d8c36f833: function(arg0, arg1, arg2) {
            arg0.search = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_subtree_id_7234f128830a05c9: function(arg0, arg1) {
            arg0.__yew_subtree_id = arg1 >>> 0;
        },
        __wbg_set_title_576991c4a4b3c882: function(arg0, arg1, arg2) {
            arg0.title = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_value_23f51d0287ae7cb7: function(arg0, arg1, arg2) {
            arg0.value = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_value_6eb2c83ae62c950f: function(arg0, arg1, arg2) {
            arg0.value = getStringFromWasm0(arg1, arg2);
        },
        __wbg_shiftKey_9dd20e0fb9da6eb5: function(arg0) {
            const ret = arg0.shiftKey;
            return ret;
        },
        __wbg_slice_7afeb833209865e0: function(arg0, arg1) {
            const ret = arg1.slice();
            const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_state_a31aaa3b93bc1c7b: function() { return handleError(function (arg0) {
            const ret = arg0.state;
            return ret;
        }, arguments); },
        __wbg_static_accessor_GLOBAL_8eb4cd83130a11a0: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_1e7044f654e934db: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_d8b50611246a6d92: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_fd0bc376bf0f8b42: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_subarray_1daff70dde20c145: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_subtree_id_32413ad1d938625a: function(arg0) {
            const ret = arg0.__yew_subtree_id;
            return isLikeNone(ret) ? Number.MAX_SAFE_INTEGER : (ret) >>> 0;
        },
        __wbg_then_7a850dae4493f353: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_then_b830475380919203: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_value_000080a4486e3ed3: function(arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_value_8215ae6d5fec3d34: function(arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_versions_276b2795b1c6a219: function(arg0) {
            const ret = arg0.versions;
            return ret;
        },
        __wbg_writeText_efbdad9c92eb55b9: function(arg0, arg1, arg2) {
            const ret = arg0.writeText(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 6, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_732988cbf0d8764d___convert__closures_____invoke___wasm_bindgen_732988cbf0d8764d___JsValue__core_73622ca1b2019a5d___result__Result_____wasm_bindgen_732988cbf0d8764d___JsError___true_);
            return ret;
        },
        __wbindgen_generic_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Ref(NamedExternref("Event"))], shim_idx: 25, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_732988cbf0d8764d___convert__closures________invoke___web_sys_7795c1a328d74fa7___features__gen_Event__Event______true_);
            return ret;
        },
        __wbindgen_generic_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Ref(NamedExternref("Event"))], shim_idx: 68, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
            const ret = makeClosure(arg0, arg1, wasm_bindgen_732988cbf0d8764d___convert__closures________invoke___web_sys_7795c1a328d74fa7___features__gen_Event__Event______true__1_);
            return ret;
        },
        __wbindgen_generic_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 8, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_732988cbf0d8764d___convert__closures_____invoke_______true_);
            return ret;
        },
        __wbindgen_generic_0000000000000005: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_generic_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_generic_0000000000000007: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./portfolio_yew_bg.js": import0,
    };
}

function wasm_bindgen_732988cbf0d8764d___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_732988cbf0d8764d___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_732988cbf0d8764d___convert__closures________invoke___web_sys_7795c1a328d74fa7___features__gen_Event__Event______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_732988cbf0d8764d___convert__closures________invoke___web_sys_7795c1a328d74fa7___features__gen_Event__Event______true_(arg0, arg1, arg2);
}

function wasm_bindgen_732988cbf0d8764d___convert__closures________invoke___web_sys_7795c1a328d74fa7___features__gen_Event__Event______true__1_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_732988cbf0d8764d___convert__closures________invoke___web_sys_7795c1a328d74fa7___features__gen_Event__Event______true__1_(arg0, arg1, arg2);
}

function wasm_bindgen_732988cbf0d8764d___convert__closures_____invoke___wasm_bindgen_732988cbf0d8764d___JsValue__core_73622ca1b2019a5d___result__Result_____wasm_bindgen_732988cbf0d8764d___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_732988cbf0d8764d___convert__closures_____invoke___wasm_bindgen_732988cbf0d8764d___JsValue__core_73622ca1b2019a5d___result__Result_____wasm_bindgen_732988cbf0d8764d___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('portfolio_yew_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };

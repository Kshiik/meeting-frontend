/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "(pages-dir-node)/./api/auth.ts":
/*!*********************!*\
  !*** ./api/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   login: () => (/* binding */ login)\n/* harmony export */ });\nconst login = async (credentials)=>{\n    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login_check`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(credentials)\n    });\n    if (!response.ok) {\n        throw new Error('Неверные данные');\n    }\n    const data = await response.json();\n    const token = data.token;\n    if (!token) {\n        throw new Error('Токен не получен');\n    }\n    return token;\n};\nconst getCurrentUser = async ()=>{\n    const token = localStorage.getItem('jwt');\n    if (!token) {\n        return null;\n    }\n    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employee/self`, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'jwt': `${token}`\n        }\n    });\n    if (!response.ok) {\n        throw new Error('Ошибка получения данных пользователя');\n    }\n    return response.json();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2FwaS9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBWU8sTUFBTUEsUUFBUSxPQUFPQztJQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBR0MsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQy9FQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxnQkFBZ0I7UUFDcEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVjtJQUN6QjtJQUNBLElBQUksQ0FBQ0MsU0FBU1UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE1BQU1DLE9BQXNCLE1BQU1aLFNBQVNhLElBQUk7SUFDL0MsTUFBTUMsUUFBUUYsS0FBS0UsS0FBSztJQUV4QixJQUFJLENBQUNBLE9BQU87UUFDVixNQUFNLElBQUlILE1BQU07SUFDbEI7SUFFQSxPQUFPRztBQUNYLEVBQUU7QUFFSyxNQUFNQyxpQkFBaUI7SUFDMUIsTUFBTUQsUUFBUUUsYUFBYUMsT0FBTyxDQUFDO0lBQ25DLElBQUksQ0FBQ0gsT0FBTztRQUNWLE9BQU87SUFDVDtJQUVBLE1BQU1kLFdBQVcsTUFBTUMsTUFBTSxHQUFHQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEVBQUU7UUFDbkZDLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixPQUFPLEdBQUdRLE9BQU87UUFDbkI7SUFDRjtJQUVBLElBQUksQ0FBQ2QsU0FBU1UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE9BQU9YLFNBQVNhLElBQUk7QUFDdEIsRUFBRSIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcYXBpXFxhdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtcGxveWVlLCBGdWxsRW1wbG95ZWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgTG9naW5DcmVkZW50aWFscyB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgTG9naW5SZXNwb25zZSB7XHJcbiAgICB0b2tlbjogc3RyaW5nO1xyXG59XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChjcmVkZW50aWFsczogTG9naW5DcmVkZW50aWFscyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9sb2dpbl9jaGVja2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyksXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQtdGA0L3Ri9C1INC00LDQvdC90YvQtScpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZGF0YTogTG9naW5SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHRva2VuID0gZGF0YS50b2tlbjtcclxuICBcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQotC+0LrQtdC9INC90LUg0L/QvtC70YPRh9C10L0nKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jICgpOiBQcm9taXNlPEZ1bGxFbXBsb3llZSB8IG51bGw+ID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpL2VtcGxveWVlL3NlbGZgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdqd3QnOiBgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J7RiNC40LHQutCwINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH07Il0sIm5hbWVzIjpbImxvZ2luIiwiY3JlZGVudGlhbHMiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJ0b2tlbiIsImdldEN1cnJlbnRVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./api/auth.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./components/PushSubscription.tsx":
/*!*****************************************!*\
  !*** ./components/PushSubscription.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PushSubscription)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_push__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/push */ \"(pages-dir-node)/./lib/push.ts\");\n\n\nconst VAPID_PUBLIC_KEY = 'BBceryB_Lo_6FOu8_jstUK5ExGze1esePCV8P8NwRbSCkOMeIm9xn23_7dTWM14M6YQx2VPEVX8yqcqtgezRppc';\nfunction PushSubscription({ userId }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"PushSubscription.useEffect\": ()=>{\n            console.log('PushSubscription: Starting setup for user', userId);\n            const setupPush = {\n                \"PushSubscription.useEffect.setupPush\": async ()=>{\n                    try {\n                        console.log('PushSubscription: Registering Service Worker');\n                        const registration = await (0,_lib_push__WEBPACK_IMPORTED_MODULE_1__.registerServiceWorker)();\n                        console.log('PushSubscription: Subscribing to push');\n                        const subscription = await (0,_lib_push__WEBPACK_IMPORTED_MODULE_1__.subscribeToPush)(registration, VAPID_PUBLIC_KEY);\n                        console.log('PushSubscription: Sending subscription to server');\n                        const result = await (0,_lib_push__WEBPACK_IMPORTED_MODULE_1__.sendSubscriptionToServer)(subscription, userId);\n                        console.log('PushSubscription: Server response:', result);\n                    } catch (error) {\n                        console.error('PushSubscription: Error:', error instanceof Error ? error.message : error);\n                    }\n                }\n            }[\"PushSubscription.useEffect.setupPush\"];\n            console.log('PushSubscription: Checking permission:', Notification.permission);\n            if (Notification.permission === 'default') {\n                Notification.requestPermission().then({\n                    \"PushSubscription.useEffect\": (permission)=>{\n                        console.log('PushSubscription: Permission granted:', permission);\n                        if (permission === 'granted') {\n                            setupPush();\n                        }\n                    }\n                }[\"PushSubscription.useEffect\"]);\n            } else if (Notification.permission === 'granted') {\n                setupPush();\n            } else {\n                console.log('PushSubscription: Notifications denied');\n            }\n        }\n    }[\"PushSubscription.useEffect\"], [\n        userId\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvUHVzaFN1YnNjcmlwdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUM2RDtBQUUvRixNQUFNSSxtQkFBbUI7QUFNVixTQUFTQyxpQkFBaUIsRUFBRUMsTUFBTSxFQUF5QjtJQUN0RU4sZ0RBQVNBO3NDQUFDO1lBQ05PLFFBQVFDLEdBQUcsQ0FBQyw2Q0FBNkNGO1lBQ3pELE1BQU1HO3dEQUFZO29CQUNkLElBQUk7d0JBQ0FGLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixNQUFNRSxlQUFlLE1BQU1ULGdFQUFxQkE7d0JBQ2hETSxRQUFRQyxHQUFHLENBQUM7d0JBQ1osTUFBTUcsZUFBZSxNQUFNVCwwREFBZUEsQ0FBQ1EsY0FBY047d0JBQ3pERyxRQUFRQyxHQUFHLENBQUM7d0JBQ1osTUFBTUksU0FBUyxNQUFNVCxtRUFBd0JBLENBQUNRLGNBQWNMO3dCQUM1REMsUUFBUUMsR0FBRyxDQUFDLHNDQUFzQ0k7b0JBQ3RELEVBQUUsT0FBT0MsT0FBTzt3QkFDWk4sUUFBUU0sS0FBSyxDQUFDLDRCQUE0QkEsaUJBQWlCQyxRQUFRRCxNQUFNRSxPQUFPLEdBQUdGO29CQUN2RjtnQkFDSjs7WUFFQU4sUUFBUUMsR0FBRyxDQUFDLDBDQUEwQ1EsYUFBYUMsVUFBVTtZQUM3RSxJQUFJRCxhQUFhQyxVQUFVLEtBQUssV0FBVztnQkFDdkNELGFBQWFFLGlCQUFpQixHQUFHQyxJQUFJO2tEQUFDLENBQUNGO3dCQUNuQ1YsUUFBUUMsR0FBRyxDQUFDLHlDQUF5Q1M7d0JBQ3JELElBQUlBLGVBQWUsV0FBVzs0QkFDMUJSO3dCQUNKO29CQUNKOztZQUNKLE9BQU8sSUFBSU8sYUFBYUMsVUFBVSxLQUFLLFdBQVc7Z0JBQzlDUjtZQUNKLE9BQU87Z0JBQ0hGLFFBQVFDLEdBQUcsQ0FBQztZQUNoQjtRQUNKO3FDQUFHO1FBQUNGO0tBQU87SUFFWCxPQUFPO0FBQ1giLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXGNvbXBvbmVudHNcXFB1c2hTdWJzY3JpcHRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLCBzdWJzY3JpYmVUb1B1c2gsIHNlbmRTdWJzY3JpcHRpb25Ub1NlcnZlciB9IGZyb20gJy4uL2xpYi9wdXNoJztcclxuXHJcbmNvbnN0IFZBUElEX1BVQkxJQ19LRVkgPSAnQkJjZXJ5Ql9Mb182Rk91OF9qc3RVSzVFeEd6ZTFlc2VQQ1Y4UDhOd1JiU0NrT01lSW05eG4yM183ZFRXTTE0TTZZUXgyVlBFVlg4eXFjcXRnZXpScHBjJzsgXHJcblxyXG5pbnRlcmZhY2UgUHVzaFN1YnNjcmlwdGlvblByb3BzIHtcclxuICAgIHVzZXJJZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXNoU3Vic2NyaXB0aW9uKHsgdXNlcklkIH06IFB1c2hTdWJzY3JpcHRpb25Qcm9wcykge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUHVzaFN1YnNjcmlwdGlvbjogU3RhcnRpbmcgc2V0dXAgZm9yIHVzZXInLCB1c2VySWQpO1xyXG4gICAgICAgIGNvbnN0IHNldHVwUHVzaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQdXNoU3Vic2NyaXB0aW9uOiBSZWdpc3RlcmluZyBTZXJ2aWNlIFdvcmtlcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gYXdhaXQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaWJpbmcgdG8gcHVzaCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgc3Vic2NyaWJlVG9QdXNoKHJlZ2lzdHJhdGlvbiwgVkFQSURfUFVCTElDX0tFWSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHVzaFN1YnNjcmlwdGlvbjogU2VuZGluZyBzdWJzY3JpcHRpb24gdG8gc2VydmVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kU3Vic2NyaXB0aW9uVG9TZXJ2ZXIoc3Vic2NyaXB0aW9uLCB1c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1B1c2hTdWJzY3JpcHRpb246IFNlcnZlciByZXNwb25zZTonLCByZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignUHVzaFN1YnNjcmlwdGlvbjogRXJyb3I6JywgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnUHVzaFN1YnNjcmlwdGlvbjogQ2hlY2tpbmcgcGVybWlzc2lvbjonLCBOb3RpZmljYXRpb24ucGVybWlzc2lvbik7XHJcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigocGVybWlzc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1B1c2hTdWJzY3JpcHRpb246IFBlcm1pc3Npb24gZ3JhbnRlZDonLCBwZXJtaXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR1cFB1c2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgIHNldHVwUHVzaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQdXNoU3Vic2NyaXB0aW9uOiBOb3RpZmljYXRpb25zIGRlbmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VySWRdKTtcclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJyZWdpc3RlclNlcnZpY2VXb3JrZXIiLCJzdWJzY3JpYmVUb1B1c2giLCJzZW5kU3Vic2NyaXB0aW9uVG9TZXJ2ZXIiLCJWQVBJRF9QVUJMSUNfS0VZIiwiUHVzaFN1YnNjcmlwdGlvbiIsInVzZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJzZXR1cFB1c2giLCJyZWdpc3RyYXRpb24iLCJzdWJzY3JpcHRpb24iLCJyZXN1bHQiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInRoZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/PushSubscription.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(pages-dir-node)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(pages-dir-node)/./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"(pages-dir-node)/./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    const isTablet = (0,_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(\"(max-width:1024px)\");\n    const isMobile = (0,_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(\"(max-width:600px)\");\n    const { user, logout, loading, hasRole } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuItems = [\n        {\n            text: 'Мероприятия',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 92\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 25,\n                columnNumber: 19\n            }, undefined),\n            path: hasRole('ROLE_MODERATOR') ? '/eventsadmin' : '/events'\n        },\n        {\n            text: 'Переговорные комнаты',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 93\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 30,\n                columnNumber: 19\n            }, undefined),\n            path: '/rooms'\n        },\n        {\n            text: 'Таймлайн',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M120-240q-33 0-56.5-23.5T40-320q0-33 23.5-56.5T120-400h10.5q4.5 0 9.5 2l182-182q-2-5-2-9.5V-600q0-33 23.5-56.5T400-680q33 0 56.5 23.5T480-600q0 2-2 20l102 102q5-2 9.5-2h21q4.5 0 9.5 2l142-142q-2-5-2-9.5V-640q0-33 23.5-56.5T840-720q33 0 56.5 23.5T920-640q0 33-23.5 56.5T840-560h-10.5q-4.5 0-9.5-2L678-420q2 5 2 9.5v10.5q0 33-23.5 56.5T600-320q-33 0-56.5-23.5T520-400v-10.5q0-4.5 2-9.5L420-522q-5 2-9.5 2H400q-2 0-20-2L198-340q2 5 2 9.5v10.5q0 33-23.5 56.5T120-240Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 93\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 35,\n                columnNumber: 19\n            }, undefined),\n            path: '/timeline'\n        },\n        {\n            text: 'Профиль',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 93\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 40,\n                columnNumber: 19\n            }, undefined),\n            path: '/profile'\n        }\n    ];\n    if (!user) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                width: \"45px\",\n                background: '#FFFFFF',\n                border: open ? '1px solid #A3A3A3' : 'none',\n                marginLeft: \"2%\",\n                marginTop: \"2.5vh\",\n                position: \"absolute\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: 1300\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        onClick: ()=>setOpen(!open),\n                        sx: {\n                            p: '10px'\n                        },\n                        children: open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                transform: \"rotate(90deg)\",\n                                transition: \"transform 0.3s ease-in-out\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 33\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                transition: \"transform 0.3s ease-in-out\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 126\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    sx: {\n                        maxHeight: open ? \"500px\" : \"0px\",\n                        opacity: open ? 1 : 0,\n                        overflow: \"hidden\",\n                        transition: \"maxHeight 0.3s ease-in-out\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            gap: 1\n                        },\n                        children: [\n                            menuItems.map((item)=>{\n                                const isActive = pathname === item.path;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemButton, {\n                                    onClick: ()=>{\n                                        router.push(item.path);\n                                        setOpen(false);\n                                    },\n                                    sx: {\n                                        justifyContent: 'flex-start',\n                                        backgroundColor: isActive ? 'primary.main' : '#EEEEEE',\n                                        color: isActive ? '#FFFFFF' : 'secondary.main',\n                                        padding: '12px'\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                        sx: {\n                                            color: 'inherit',\n                                            minWidth: '0px'\n                                        },\n                                        children: item.icon\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, item.path, false, {\n                                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 37\n                                }, undefined);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                onClick: logout,\n                                sx: {\n                                    paddingLeft: \"15px\",\n                                    paddingTop: \"12px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/exit-icon.svg\",\n                                    alt: \"Выйти\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 54,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                position: \"fixed\",\n                width: isTablet ? \"52px\" : \"270px\",\n                height: '92vh',\n                display: 'flex',\n                flexDirection: 'column',\n                justifyContent: 'space-between',\n                alignItems: \"center\",\n                background: \"#FFFFFF\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            gap: 1\n                        },\n                        children: menuItems.map((item)=>{\n                            const isActive = pathname === item.path;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemButton, {\n                                onClick: ()=>router.push(item.path),\n                                sx: {\n                                    justifyContent: 'flex-start',\n                                    gap: 2,\n                                    backgroundColor: isActive ? 'primary.main' : '#EEEEEE',\n                                    color: isActive ? '#FFFFFF' : 'secondary.main',\n                                    padding: \"15px\",\n                                    '&:hover': {\n                                        background: isActive ? \"#815FB9\" : \"secondary.main\"\n                                    }\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                        sx: {\n                                            color: 'inherit',\n                                            minWidth: \"0px\"\n                                        },\n                                        children: item.icon\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    !isTablet && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                                        primary: item.text\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 51\n                                    }, undefined)\n                                ]\n                            }, item.path, true, {\n                                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 37\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    onClick: logout,\n                    sx: {\n                        marginTop: 'auto',\n                        display: 'flex',\n                        gap: 2,\n                        cursor: 'pointer',\n                        width: 'calc(100% - 15px * 2)',\n                        padding: '0 15px',\n                        justifyContent: 'space-between'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            noWrap: true,\n                            sx: {\n                                overflow: 'hidden',\n                                textOverflow: 'ellipsis',\n                                whiteSpace: 'nowrap',\n                                display: isTablet ? \"none\" : \"block\"\n                            },\n                            children: `${user?.name} ${user?.surname} ${user?.patronymic}`\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/exit-icon.svg\",\n                            alt: \"Выйти\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 92,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ21HO0FBQ25GO0FBQ1Q7QUFFWjtBQUdhO0FBRWpELE1BQU1nQixVQUFvQjtJQUN0QixNQUFNQyxXQUFXUixzTEFBYUEsQ0FBQztJQUMvQixNQUFNUyxXQUFXVCxzTEFBYUEsQ0FBQztJQUUvQixNQUFNLEVBQUVVLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCw2REFBT0E7SUFFbEQsTUFBTVEsU0FBU1gsMERBQVNBO0lBQ3hCLE1BQU1ZLFdBQVdiLDREQUFXQTtJQUU1QixNQUFNLENBQUNjLE1BQU1DLFFBQVEsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0wQixZQUFZO1FBQ2Q7WUFDSUMsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ0M7Z0JBQUlDLE9BQU07Z0JBQUtDLFFBQU87Z0JBQUtDLFNBQVE7Z0JBQWlCQyxNQUFLOzBCQUFlLDRFQUFDQztvQkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7WUFDdkZELE1BQU1iLFFBQVEsb0JBQW9CLGlCQUFpQjtRQUN2RDtRQUNBO1lBQ0lNLE1BQU07WUFDTkMsb0JBQU0sOERBQUNDO2dCQUFJQyxPQUFNO2dCQUFLQyxRQUFPO2dCQUFLQyxTQUFRO2dCQUFpQkMsTUFBSzswQkFBZ0IsNEVBQUNDO29CQUFLQyxHQUFFOzs7Ozs7Ozs7OztZQUN4RkQsTUFBTTtRQUNWO1FBQ0E7WUFDSVAsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ0M7Z0JBQUlDLE9BQU07Z0JBQUtDLFFBQU87Z0JBQUtDLFNBQVE7Z0JBQWlCQyxNQUFLOzBCQUFnQiw0RUFBQ0M7b0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7O1lBQ3hGRCxNQUFNO1FBQ1Y7UUFDQTtZQUNJUCxNQUFNO1lBQ05DLG9CQUFNLDhEQUFDQztnQkFBSUMsT0FBTTtnQkFBS0MsUUFBTztnQkFBS0MsU0FBUTtnQkFBaUJDLE1BQUs7MEJBQWdCLDRFQUFDQztvQkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7WUFDeEZELE1BQU07UUFDVjtLQUNIO0lBRUQsSUFBSSxDQUFDaEIsTUFBTTtRQUNQLE9BQ0k7SUFFTjtJQUVGLHFCQUNJLDhEQUFDaEIsa0xBQWFBO1FBQUNXLE9BQU9BLHFEQUFLQTtrQkFDckJJLHlCQUNFLDhEQUFDaEIsd0tBQUdBO1lBQUNtQyxJQUFJO2dCQUFFTixPQUFPO2dCQUFRTyxZQUFZO2dCQUFXQyxRQUFRZCxPQUFPLHNCQUFzQjtnQkFBUWUsWUFBWTtnQkFBTUMsV0FBVztnQkFBU0MsVUFBVTtnQkFBWUMsS0FBSztnQkFBR0MsTUFBTTtnQkFBR0MsT0FBTztnQkFBR0MsUUFBUTtZQUFLOzs4QkFDOUwsOERBQUM1Qyx3S0FBR0E7OEJBQ0osNEVBQUNRLCtLQUFVQTt3QkFDUHFDLFNBQVMsSUFBTXJCLFFBQVEsQ0FBQ0Q7d0JBQ3hCWSxJQUFJOzRCQUFFVyxHQUFHO3dCQUFPO2tDQUVmdkIscUJBQU8sOERBQUNaLGdFQUFRQTs0QkFBQ3dCLElBQUk7Z0NBQUVZLFdBQVc7Z0NBQWtCQyxZQUFZOzRCQUE2Qjs7Ozs7c0RBQU8sOERBQUNyQyxnRUFBUUE7NEJBQUN3QixJQUFJO2dDQUFFYSxZQUFZOzRCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHbEssOERBQUNoRCx3S0FBR0E7b0JBQUNtQyxJQUFJO3dCQUFFYyxXQUFXMUIsT0FBTyxVQUFVO3dCQUFPMkIsU0FBUzNCLE9BQU8sSUFBSTt3QkFBRzRCLFVBQVU7d0JBQVVILFlBQVk7b0JBQTZCOzhCQUM5SCw0RUFBQzlDLHlLQUFJQTt3QkFBQ2lDLElBQUk7NEJBQUVpQixTQUFTOzRCQUFRQyxlQUFlOzRCQUFVQyxLQUFLO3dCQUFHOzs0QkFDekQ3QixVQUFVOEIsR0FBRyxDQUFDLENBQUNDO2dDQUNaLE1BQU1DLFdBQVduQyxhQUFha0MsS0FBS3ZCLElBQUk7Z0NBQ3ZDLHFCQUNJLDhEQUFDOUIsbUxBQWNBO29DQUVmMEMsU0FBUzt3Q0FDTHhCLE9BQU9xQyxJQUFJLENBQUNGLEtBQUt2QixJQUFJO3dDQUNyQlQsUUFBUTtvQ0FDWjtvQ0FDQVcsSUFBSTt3Q0FDQXdCLGdCQUFnQjt3Q0FDaEJDLGlCQUFpQkgsV0FBVyxpQkFBaUI7d0NBQzdDSSxPQUFPSixXQUFXLFlBQVk7d0NBQzlCSyxTQUFTO29DQUNiOzhDQUVBLDRFQUFDMUQsaUxBQVlBO3dDQUFDK0IsSUFBSTs0Q0FBRTBCLE9BQU87NENBQVdFLFVBQVU7d0NBQU07a0RBQUlQLEtBQUs3QixJQUFJOzs7Ozs7bUNBWjlENkIsS0FBS3ZCLElBQUk7Ozs7OzRCQWV0QjswQ0FDQSw4REFBQ2pDLHdLQUFHQTtnQ0FBQzZDLFNBQVMzQjtnQ0FBUWlCLElBQUk7b0NBQUU2QixhQUFhO29DQUFRQyxZQUFZO2dDQUFPOzBDQUNoRSw0RUFBQ0M7b0NBQUlDLEtBQUk7b0NBQXdCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTXJELDhEQUFDcEUsd0tBQUdBO1lBQUNtQyxJQUFJO2dCQUFFSyxVQUFVO2dCQUFTWCxPQUFPZCxXQUFXLFNBQVM7Z0JBQVNlLFFBQVE7Z0JBQVFzQixTQUFTO2dCQUFRQyxlQUFlO2dCQUFVTSxnQkFBZ0I7Z0JBQWlCVSxZQUFZO2dCQUFVakMsWUFBWTtZQUFVOzs4QkFDck0sOERBQUNsQyx5S0FBSUE7OEJBQ0QsNEVBQUNGLHdLQUFHQTt3QkFBQ21DLElBQUk7NEJBQUVpQixTQUFTOzRCQUFRQyxlQUFlOzRCQUFVQyxLQUFLO3dCQUFFO2tDQUN2RDdCLFVBQVU4QixHQUFHLENBQUMsQ0FBQ0M7NEJBQ1osTUFBTUMsV0FBV25DLGFBQWFrQyxLQUFLdkIsSUFBSTs0QkFFdkMscUJBQ0ksOERBQUM5QixtTEFBY0E7Z0NBRWYwQyxTQUFTLElBQU14QixPQUFPcUMsSUFBSSxDQUFDRixLQUFLdkIsSUFBSTtnQ0FDcENFLElBQUk7b0NBQUV3QixnQkFBZ0I7b0NBQWNMLEtBQUs7b0NBQ3JDTSxpQkFBaUJILFdBQVcsaUJBQWlCO29DQUM3Q0ksT0FBT0osV0FBVyxZQUFZO29DQUM5QkssU0FBUztvQ0FDVCxXQUFXO3dDQUFFMUIsWUFBWXFCLFdBQVcsWUFBWTtvQ0FBa0I7Z0NBQ3RFOztrREFFQSw4REFBQ3JELGlMQUFZQTt3Q0FBQytCLElBQUk7NENBQUUwQixPQUFPOzRDQUFXRSxVQUFVO3dDQUFNO2tEQUFJUCxLQUFLN0IsSUFBSTs7Ozs7O29DQUNsRSxDQUFDWiwwQkFBWSw4REFBQ1YsaUxBQVlBO3dDQUFDaUUsU0FBU2QsS0FBSzlCLElBQUk7Ozs7Ozs7K0JBVnpDOEIsS0FBS3ZCLElBQUk7Ozs7O3dCQWF0Qjs7Ozs7Ozs7Ozs7OEJBSVIsOERBQUNqQyx3S0FBR0E7b0JBQUM2QyxTQUFTM0I7b0JBQVFpQixJQUFJO3dCQUFFSSxXQUFXO3dCQUFRYSxTQUFTO3dCQUFRRSxLQUFLO3dCQUFHaUIsUUFBUTt3QkFBVzFDLE9BQU87d0JBQXlCaUMsU0FBUzt3QkFBVUgsZ0JBQWdCO29CQUFlOztzQ0FDekssOERBQUNyRCwrS0FBVUE7NEJBQUNrRSxNQUFNOzRCQUFDckMsSUFBSTtnQ0FBRWdCLFVBQVU7Z0NBQVVzQixjQUFjO2dDQUFZQyxZQUFZO2dDQUFVdEIsU0FBU3JDLFdBQVcsU0FBUzs0QkFBUTtzQ0FDN0gsR0FBR0UsTUFBTTBELEtBQUssQ0FBQyxFQUFFMUQsTUFBTTJELFFBQVEsQ0FBQyxFQUFFM0QsTUFBTTRELFlBQVk7Ozs7OztzQ0FFekQsOERBQUNYOzRCQUFJQyxLQUFJOzRCQUF3QkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0Q7QUFFQSxpRUFBZXRELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXGNvbXBvbmVudHNcXFNpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGhlbWVQcm92aWRlciwgTGlzdCwgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBUeXBvZ3JhcGh5LCB1c2VNZWRpYVF1ZXJ5LCBJY29uQnV0dG9uLH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL2FwaS9hdXRoJztcclxuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDoxMDI0cHgpXCIpO1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDo2MDBweClcIik7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQsIGxvYWRpbmcsIGhhc1JvbGUgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgdGV4dDogJ9Cc0LXRgNC+0L/RgNC40Y/RgtC40Y8nLFxyXG4gICAgICAgICAgICBpY29uOiA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBkPVwiTTU4MC0yNDBxLTQyIDAtNzEtMjl0LTI5LTcxcTAtNDIgMjktNzF0NzEtMjlxNDIgMCA3MSAyOXQyOSA3MXEwIDQyLTI5IDcxdC03MSAyOVpNMjAwLTgwcS0zMyAwLTU2LjUtMjMuNVQxMjAtMTYwdi01NjBxMC0zMyAyMy41LTU2LjVUMjAwLTgwMGg0MHYtODBoODB2ODBoMzIwdi04MGg4MHY4MGg0MHEzMyAwIDU2LjUgMjMuNVQ4NDAtNzIwdjU2MHEwIDMzLTIzLjUgNTYuNVQ3NjAtODBIMjAwWm0wLTgwaDU2MHYtNDAwSDIwMHY0MDBabTAtNDgwaDU2MHYtODBIMjAwdjgwWm0wIDB2LTgwIDgwWlwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIHBhdGg6IGhhc1JvbGUoJ1JPTEVfTU9ERVJBVE9SJykgPyAnL2V2ZW50c2FkbWluJyA6ICcvZXZlbnRzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgdGV4dDogJ9Cf0LXRgNC10LPQvtCy0L7RgNC90YvQtSDQutC+0LzQvdCw0YLRiycsIFxyXG4gICAgICAgICAgICBpY29uOiA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiA+PHBhdGggZD1cIk0xMjAtMTIwdi04MGg4MHYtNjQwaDQwMHY0MGgxNjB2NjAwaDgwdjgwSDY4MHYtNjAwaC04MHY2MDBIMTIwWm0xNjAtNjQwdjU2MC01NjBabTE2MCAzMjBxMTcgMCAyOC41LTExLjVUNDgwLTQ4MHEwLTE3LTExLjUtMjguNVQ0NDAtNTIwcS0xNyAwLTI4LjUgMTEuNVQ0MDAtNDgwcTAgMTcgMTEuNSAyOC41VDQ0MC00NDBaTTI4MC0yMDBoMjQwdi01NjBIMjgwdjU2MFpcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICBwYXRoOiAnL3Jvb21zJyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHRleHQ6ICfQotCw0LnQvNC70LDQudC9JyxcclxuICAgICAgICAgICAgaWNvbjogPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgPjxwYXRoIGQ9XCJNMTIwLTI0MHEtMzMgMC01Ni41LTIzLjVUNDAtMzIwcTAtMzMgMjMuNS01Ni41VDEyMC00MDBoMTAuNXE0LjUgMCA5LjUgMmwxODItMTgycS0yLTUtMi05LjVWLTYwMHEwLTMzIDIzLjUtNTYuNVQ0MDAtNjgwcTMzIDAgNTYuNSAyMy41VDQ4MC02MDBxMCAyLTIgMjBsMTAyIDEwMnE1LTIgOS41LTJoMjFxNC41IDAgOS41IDJsMTQyLTE0MnEtMi01LTItOS41Vi02NDBxMC0zMyAyMy41LTU2LjVUODQwLTcyMHEzMyAwIDU2LjUgMjMuNVQ5MjAtNjQwcTAgMzMtMjMuNSA1Ni41VDg0MC01NjBoLTEwLjVxLTQuNSAwLTkuNS0yTDY3OC00MjBxMiA1IDIgOS41djEwLjVxMCAzMy0yMy41IDU2LjVUNjAwLTMyMHEtMzMgMC01Ni41LTIzLjVUNTIwLTQwMHYtMTAuNXEwLTQuNSAyLTkuNUw0MjAtNTIycS01IDItOS41IDJINDAwcS0yIDAtMjAtMkwxOTgtMzQwcTIgNSAyIDkuNXYxMC41cTAgMzMtMjMuNSA1Ni41VDEyMC0yNDBaXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgcGF0aDogJy90aW1lbGluZScgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICB0ZXh0OiAn0J/RgNC+0YTQuNC70YwnLFxyXG4gICAgICAgICAgICBpY29uOiA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiA+PHBhdGggZD1cIk0yMzQtMjc2cTUxLTM5IDExNC02MS41VDQ4MC0zNjBxNjkgMCAxMzIgMjIuNVQ3MjYtMjc2cTM1LTQxIDU0LjUtOTNUODAwLTQ4MHEwLTEzMy05My41LTIyNi41VDQ4MC04MDBxLTEzMyAwLTIyNi41IDkzLjVUMTYwLTQ4MHEwIDU5IDE5LjUgMTExdDU0LjUgOTNabTI0Ni0xNjRxLTU5IDAtOTkuNS00MC41VDM0MC01ODBxMC01OSA0MC41LTk5LjVUNDgwLTcyMHE1OSAwIDk5LjUgNDAuNVQ2MjAtNTgwcTAgNTktNDAuNSA5OS41VDQ4MC00NDBabTAgMzYwcS04MyAwLTE1Ni0zMS41VDE5Ny0xOTdxLTU0LTU0LTg1LjUtMTI3VDgwLTQ4MHEwLTgzIDMxLjUtMTU2VDE5Ny03NjNxNTQtNTQgMTI3LTg1LjVUNDgwLTg4MHE4MyAwIDE1NiAzMS41VDc2My03NjNxNTQgNTQgODUuNSAxMjdUODgwLTQ4MHEwIDgzLTMxLjUgMTU2VDc2My0xOTdxLTU0IDU0LTEyNyA4NS41VDQ4MC04MFptMC04MHE1MyAwIDEwMC0xNS41dDg2LTQ0LjVxLTM5LTI5LTg2LTQ0LjVUNDgwLTI4MHEtNTMgMC0xMDAgMTUuNVQyOTQtMjIwcTM5IDI5IDg2IDQ0LjVUNDgwLTE2MFptMC0zNjBxMjYgMCA0My0xN3QxNy00M3EwLTI2LTE3LTQzdC00My0xN3EtMjYgMC00MyAxN3QtMTcgNDNxMCAyNiAxNyA0M3Q0MyAxN1ptMC02MFptMCAzNjBaXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgcGF0aDogJy9wcm9maWxlJyBcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICBcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICB7IGlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI0NXB4XCIsIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgYm9yZGVyOiBvcGVuID8gJzFweCBzb2xpZCAjQTNBM0EzJyA6ICdub25lJywgbWFyZ2luTGVmdDogXCIyJVwiLCBtYXJnaW5Ub3A6IFwiMi41dmhcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgekluZGV4OiAxMzAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHA6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wZW4gPyA8TWVudUljb24gc3g9e3sgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIiwgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXRcIiB9fS8+IDogPE1lbnVJY29uIHN4PXt7IHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXRcIiB9fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1heEhlaWdodDogb3BlbiA/IFwiNTAwcHhcIiA6IFwiMHB4XCIsIG9wYWNpdHk6IG9wZW4gPyAxIDogMCwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHRyYW5zaXRpb246IFwibWF4SGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAxLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZSA9PT0gaXRlbS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goaXRlbS5wYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmUgPyAncHJpbWFyeS5tYWluJyA6ICcjRUVFRUVFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0FjdGl2ZSA/ICcjRkZGRkZGJyA6ICdzZWNvbmRhcnkubWFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2luaGVyaXQnLCBtaW5XaWR0aDogJzBweCcgfX0+e2l0ZW0uaWNvbn08L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IG9uQ2xpY2s9e2xvZ291dH0gc3g9e3sgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLCBwYWRkaW5nVG9wOiBcIjEycHhcIiB9fT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2V4aXQtaWNvbi5zdmdcIiBhbHQ9XCLQktGL0LnRgtC4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IGlzVGFibGV0ID8gXCI1MnB4XCIgOiBcIjI3MHB4XCIsIGhlaWdodDogJzkydmgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aG5hbWUgPT09IGl0ZW0ucGF0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGl0ZW0ucGF0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsIGdhcDogMiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlID8gJ3ByaW1hcnkubWFpbicgOiAnI0VFRUVFRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmUgPyAnI0ZGRkZGRicgOiAnc2Vjb25kYXJ5Lm1haW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7IGJhY2tncm91bmQ6IGlzQWN0aXZlID8gXCIjODE1RkI5XCIgOiBcInNlY29uZGFyeS5tYWluXCIsIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2luaGVyaXQnLCBtaW5XaWR0aDogXCIwcHhcIiB9fT57aXRlbS5pY29ufTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzVGFibGV0ICYmIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS50ZXh0fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggb25DbGljaz17bG9nb3V0fSBzeD17eyBtYXJnaW5Ub3A6ICdhdXRvJywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDIsIGN1cnNvcjogJ3BvaW50ZXInLCB3aWR0aDogJ2NhbGMoMTAwJSAtIDE1cHggKiAyKScsIHBhZGRpbmc6ICcwIDE1cHgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBub1dyYXAgc3g9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHdoaXRlU3BhY2U6ICdub3dyYXAnLCBkaXNwbGF5OiBpc1RhYmxldCA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3VzZXI/Lm5hbWV9ICR7dXNlcj8uc3VybmFtZX0gJHt1c2VyPy5wYXRyb255bWljfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2V4aXQtaWNvbi5zdmdcIiBhbHQ9XCLQktGL0LnRgtC4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiVGhlbWVQcm92aWRlciIsIkxpc3QiLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIlR5cG9ncmFwaHkiLCJ1c2VNZWRpYVF1ZXJ5IiwiSWNvbkJ1dHRvbiIsInVzZVBhdGhuYW1lIiwidXNlUm91dGVyIiwiTWVudUljb24iLCJ0aGVtZSIsInVzZUF1dGgiLCJTaWRlYmFyIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsInVzZXIiLCJsb2dvdXQiLCJsb2FkaW5nIiwiaGFzUm9sZSIsInJvdXRlciIsInBhdGhuYW1lIiwib3BlbiIsInNldE9wZW4iLCJtZW51SXRlbXMiLCJ0ZXh0IiwiaWNvbiIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsInN4IiwiYmFja2dyb3VuZCIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsIm9uQ2xpY2siLCJwIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsIm1heEhlaWdodCIsIm9wYWNpdHkiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwibWFwIiwiaXRlbSIsImlzQWN0aXZlIiwicHVzaCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwibWluV2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJpbWciLCJzcmMiLCJhbHQiLCJhbGlnbkl0ZW1zIiwicHJpbWFyeSIsImN1cnNvciIsIm5vV3JhcCIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJuYW1lIiwic3VybmFtZSIsInBhdHJvbnltaWMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Sidebar.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth */ \"(pages-dir-node)/./api/auth.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NotificationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationContext */ \"(pages-dir-node)/./context/NotificationContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NotificationContext__WEBPACK_IMPORTED_MODULE_4__]);\n_NotificationContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { showNotification } = (0,_NotificationContext__WEBPACK_IMPORTED_MODULE_4__.useNotification)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const initializeAuth = {\n                \"AuthProvider.useEffect.initializeAuth\": async ()=>{\n                    try {\n                        const currentUser = await (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n                        setUser(currentUser);\n                    } catch (err) {\n                        showNotification(err instanceof Error ? err.message : 'Ошибка инициализации авторизации', 'error');\n                        setUser(null);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"AuthProvider.useEffect.initializeAuth\"];\n            initializeAuth();\n        }\n    }[\"AuthProvider.useEffect\"], [\n        showNotification\n    ]);\n    const login = async (token)=>{\n        localStorage.setItem('jwt', token);\n        try {\n            const currentUser = await (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n            setUser(currentUser);\n        } catch (err) {\n            showNotification(err instanceof Error ? err.message : 'Ошибка после логина', 'error');\n            setUser(null);\n        }\n    };\n    const logout = ()=>{\n        localStorage.removeItem('jwt');\n        setUser(null);\n        router.push('/auth');\n    };\n    const updateUser = (updatedUser)=>{\n        setUser((prev)=>prev ? {\n                ...prev,\n                ...updatedUser\n            } : null);\n    };\n    const hasRole = (role)=>{\n        return user?.roles?.includes(role) || false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            loading,\n            updateUser,\n            hasRole\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQ2pDO0FBRUw7QUFDZ0I7QUFXeEQsTUFBTVEsNEJBQWNQLG9EQUFhQSxDQUE4QlE7QUFFeEQsTUFBTUMsZUFBd0QsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDaEYsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFzQjtJQUN0RCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTWEsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVcsZ0JBQWdCLEVBQUUsR0FBR1YscUVBQWVBO0lBRTVDSCxnREFBU0E7a0NBQUM7WUFDUixNQUFNYzt5REFBaUI7b0JBQ3JCLElBQUk7d0JBQ0YsTUFBTUMsY0FBYyxNQUFNZCx5REFBY0E7d0JBQ3hDUSxRQUFRTTtvQkFDVixFQUFFLE9BQU9DLEtBQUs7d0JBQ1pILGlCQUNFRyxlQUFlQyxRQUFRRCxJQUFJRSxPQUFPLEdBQUcsb0NBQ3JDO3dCQUVGVCxRQUFRO29CQUNWLFNBQVU7d0JBQ1JFLFdBQVc7b0JBQ2I7Z0JBQ0Y7O1lBQ0FHO1FBQ0Y7aUNBQUc7UUFBQ0Q7S0FBaUI7SUFFckIsTUFBTU0sUUFBUSxPQUFPQztRQUNuQkMsYUFBYUMsT0FBTyxDQUFDLE9BQU9GO1FBQzVCLElBQUk7WUFDRixNQUFNTCxjQUFjLE1BQU1kLHlEQUFjQTtZQUN4Q1EsUUFBUU07UUFDVixFQUFFLE9BQU9DLEtBQUs7WUFDWkgsaUJBQ0VHLGVBQWVDLFFBQVFELElBQUlFLE9BQU8sR0FBRyx1QkFDckM7WUFFRlQsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxNQUFNYyxTQUFTO1FBQ2JGLGFBQWFHLFVBQVUsQ0FBQztRQUN4QmYsUUFBUTtRQUNSRyxPQUFPYSxJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1DLGFBQWEsQ0FBQ0M7UUFDbEJsQixRQUFRLENBQUNtQixPQUFVQSxPQUFPO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsR0FBR0QsV0FBVztZQUFDLElBQUk7SUFDMUQ7SUFFQSxNQUFNRSxVQUFVLENBQUNDO1FBQ2YsT0FBT3RCLE1BQU11QixPQUFPQyxTQUFTRixTQUFTO0lBQ3hDO0lBQ0EscUJBQ0UsOERBQUMxQixZQUFZNkIsUUFBUTtRQUFDQyxPQUFPO1lBQUUxQjtZQUFNVztZQUFPSTtZQUFRYjtZQUFTZ0I7WUFBWUc7UUFBUTtrQkFDOUV0Qjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU00QixVQUFVO0lBQ3JCLE1BQU1DLFVBQVV0QyxpREFBVUEsQ0FBQ007SUFDM0IsSUFBSSxDQUFDZ0MsU0FBUztRQUNaLE1BQU0sSUFBSW5CLE1BQU07SUFDbEI7SUFDQSxPQUFPbUI7QUFDVCxFQUFFIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxjb250ZXh0XFxBdXRoQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vYXBpL2F1dGgnOyBcclxuaW1wb3J0IHsgRnVsbEVtcGxveWVlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ29udGV4dCc7XHJcblxyXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcclxuICB1c2VyOiBGdWxsRW1wbG95ZWUgfCBudWxsO1xyXG4gIGxvZ2luOiAodG9rZW46IHN0cmluZykgPT4gdm9pZDtcclxuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICB1cGRhdGVVc2VyOiAodXBkYXRlZFVzZXI6IFBhcnRpYWw8RnVsbEVtcGxveWVlPikgPT4gdm9pZDtcclxuICBoYXNSb2xlOiAocm9sZTogc3RyaW5nKSA9PiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPEZ1bGxFbXBsb3llZSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2hvd05vdGlmaWNhdGlvbiB9ID0gdXNlTm90aWZpY2F0aW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ9Ce0YjQuNCx0LrQsCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4JyxcclxuICAgICAgICAgICdlcnJvcidcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbml0aWFsaXplQXV0aCgpO1xyXG4gIH0sIFtzaG93Tm90aWZpY2F0aW9uXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCB0b2tlbik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNob3dOb3RpZmljYXRpb24oXHJcbiAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICfQntGI0LjQsdC60LAg0L/QvtGB0LvQtSDQu9C+0LPQuNC90LAnLFxyXG4gICAgICAgICdlcnJvcidcclxuICAgICAgKTtcclxuICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnand0Jyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goJy9hdXRoJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlciA9ICh1cGRhdGVkVXNlcjogUGFydGlhbDxGdWxsRW1wbG95ZWU+KSA9PiB7XHJcbiAgICBzZXRVc2VyKChwcmV2KSA9PiAocHJldiA/IHsgLi4ucHJldiwgLi4udXBkYXRlZFVzZXIgfSA6IG51bGwpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYXNSb2xlID0gKHJvbGU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHVzZXI/LnJvbGVzPy5pbmNsdWRlcyhyb2xlKSB8fCBmYWxzZTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCwgbG9hZGluZywgdXBkYXRlVXNlciwgaGFzUm9sZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRDdXJyZW50VXNlciIsInVzZVJvdXRlciIsInVzZU5vdGlmaWNhdGlvbiIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwic2hvd05vdGlmaWNhdGlvbiIsImluaXRpYWxpemVBdXRoIiwiY3VycmVudFVzZXIiLCJlcnIiLCJFcnJvciIsIm1lc3NhZ2UiLCJsb2dpbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwidXBkYXRlVXNlciIsInVwZGF0ZWRVc2VyIiwicHJldiIsImhhc1JvbGUiLCJyb2xlIiwicm9sZXMiLCJpbmNsdWRlcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwiY29udGV4dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/AuthContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./context/NotificationContext.tsx":
/*!*****************************************!*\
  !*** ./context/NotificationContext.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationProvider: () => (/* binding */ NotificationProvider),\n/* harmony export */   useNotification: () => (/* binding */ useNotification)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Snackbar!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/notification */ \"(pages-dir-node)/./utils/notification.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__]);\n_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst NotificationProvider = ({ children })=>{\n    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        open: false,\n        message: '',\n        severity: 'info'\n    });\n    const showNotification = (message, severity = 'info')=>{\n        setNotification({\n            open: true,\n            message,\n            severity\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"NotificationProvider.useEffect\": ()=>{\n            (0,_utils_notification__WEBPACK_IMPORTED_MODULE_2__.setNotificationHandler)({\n                showNotification\n            });\n        }\n    }[\"NotificationProvider.useEffect\"], []);\n    const handleClose = ()=>{\n        setNotification((prev)=>({\n                ...prev,\n                open: false\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: {\n            showNotification\n        },\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__.Snackbar, {\n                open: notification.open,\n                autoHideDuration: 6000,\n                onClose: handleClose,\n                anchorOrigin: {\n                    vertical: 'top',\n                    horizontal: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__.Alert, {\n                    onClose: handleClose,\n                    severity: notification.severity,\n                    sx: {\n                        width: '100%'\n                    },\n                    children: notification.message\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\NotificationContext.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\NotificationContext.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\NotificationContext.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\nconst useNotification = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);\n    if (!context) throw new Error('useNotification must be used within NotificationProvider');\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvTm90aWZpY2F0aW9uQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQ2xCO0FBQ0c7QUFZL0QsTUFBTVEsb0NBQXNCUCxvREFBYUEsQ0FBc0NRO0FBRXhFLE1BQU1DLHVCQUFnRSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN4RixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBb0I7UUFDbEVXLE1BQU07UUFDTkMsU0FBUztRQUNUQyxVQUFVO0lBQ2Q7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0YsU0FBaUJDLFdBQXVCLE1BQU07UUFDcEVILGdCQUFnQjtZQUFFQyxNQUFNO1lBQU1DO1lBQVNDO1FBQVM7SUFDcEQ7SUFFQ1osZ0RBQVNBOzBDQUFDO1lBRVBHLDJFQUFzQkEsQ0FBQztnQkFBRVU7WUFBaUI7UUFDOUM7eUNBQUcsRUFBRTtJQUVMLE1BQU1DLGNBQWM7UUFDaEJMLGdCQUFnQixDQUFDTSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVMLE1BQU07WUFBTTtJQUN0RDtJQUVBLHFCQUNJLDhEQUFDTixvQkFBb0JZLFFBQVE7UUFBQ0MsT0FBTztZQUFFSjtRQUFpQjs7WUFDckROOzBCQUNELDhEQUFDTix3RkFBUUE7Z0JBQ1BTLE1BQU1GLGFBQWFFLElBQUk7Z0JBQ3ZCUSxrQkFBa0I7Z0JBQ2xCQyxTQUFTTDtnQkFDVE0sY0FBYztvQkFBRUMsVUFBVTtvQkFBT0MsWUFBWTtnQkFBUzswQkFFdEQsNEVBQUNwQixxRkFBS0E7b0JBQUNpQixTQUFTTDtvQkFBYUYsVUFBVUosYUFBYUksUUFBUTtvQkFBRVcsSUFBSTt3QkFBRUMsT0FBTztvQkFBTzs4QkFDL0VoQixhQUFhRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQixFQUFFO0FBRUssTUFBTWMsa0JBQWtCO0lBQzdCLE1BQU1DLFVBQVU1QixpREFBVUEsQ0FBQ007SUFDM0IsSUFBSSxDQUFDc0IsU0FBUyxNQUFNLElBQUlDLE1BQU07SUFDOUIsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxjb250ZXh0XFxOb3RpZmljYXRpb25Db250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU25hY2tiYXIsIEFsZXJ0LCBBbGVydENvbG9yIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHNldE5vdGlmaWNhdGlvbkhhbmRsZXIgfSBmcm9tICcuLi91dGlscy9ub3RpZmljYXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvblN0YXRlIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzZXZlcml0eTogQWxlcnRDb2xvcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlIHtcclxuICBzaG93Tm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBzZXZlcml0eT86IEFsZXJ0Q29sb3IpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvblByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlPE5vdGlmaWNhdGlvblN0YXRlPih7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgc2V2ZXJpdHk6ICdpbmZvJyxcclxufSk7XHJcblxyXG5jb25zdCBzaG93Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk6IEFsZXJ0Q29sb3IgPSAnaW5mbycpID0+IHtcclxuICAgIHNldE5vdGlmaWNhdGlvbih7IG9wZW46IHRydWUsIG1lc3NhZ2UsIHNldmVyaXR5IH0pO1xyXG59O1xyXG5cclxuIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgc2V0Tm90aWZpY2F0aW9uSGFuZGxlcih7IHNob3dOb3RpZmljYXRpb24gfSk7XHJcbn0sIFtdKTtcclxuXHJcbmNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0Tm90aWZpY2F0aW9uKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBvcGVuOiBmYWxzZSB9KSk7XHJcbn07XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPE5vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2hvd05vdGlmaWNhdGlvbiB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBvcGVuPXtub3RpZmljYXRpb24ub3Blbn1cclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PXtub3RpZmljYXRpb24uc2V2ZXJpdHl9IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLm1lc3NhZ2V9XHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgICAgPC9TbmFja2Jhcj5cclxuICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcclxuICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcigndXNlTm90aWZpY2F0aW9uIG11c3QgYmUgdXNlZCB3aXRoaW4gTm90aWZpY2F0aW9uUHJvdmlkZXInKTtcclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU25hY2tiYXIiLCJBbGVydCIsInNldE5vdGlmaWNhdGlvbkhhbmRsZXIiLCJOb3RpZmljYXRpb25Db250ZXh0IiwidW5kZWZpbmVkIiwiTm90aWZpY2F0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm5vdGlmaWNhdGlvbiIsInNldE5vdGlmaWNhdGlvbiIsIm9wZW4iLCJtZXNzYWdlIiwic2V2ZXJpdHkiLCJzaG93Tm90aWZpY2F0aW9uIiwiaGFuZGxlQ2xvc2UiLCJwcmV2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImF1dG9IaWRlRHVyYXRpb24iLCJvbkNsb3NlIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwic3giLCJ3aWR0aCIsInVzZU5vdGlmaWNhdGlvbiIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/NotificationContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./lib/push.ts":
/*!*********************!*\
  !*** ./lib/push.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerServiceWorker: () => (/* binding */ registerServiceWorker),\n/* harmony export */   removeSubscriptionFromServer: () => (/* binding */ removeSubscriptionFromServer),\n/* harmony export */   sendSubscriptionToServer: () => (/* binding */ sendSubscriptionToServer),\n/* harmony export */   subscribeToPush: () => (/* binding */ subscribeToPush),\n/* harmony export */   urlBase64ToUint8Array: () => (/* binding */ urlBase64ToUint8Array)\n/* harmony export */ });\nfunction urlBase64ToUint8Array(base64String) {\n    const padding = '='.repeat((4 - base64String.length % 4) % 4);\n    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');\n    const rawData = window.atob(base64);\n    const outputArray = new Uint8Array(rawData.length);\n    for(let i = 0; i < rawData.length; ++i){\n        outputArray[i] = rawData.charCodeAt(i);\n    }\n    return outputArray;\n}\nasync function registerServiceWorker() {\n    if ('serviceWorker' in navigator && 'PushManager' in window) {\n        const registration = await navigator.serviceWorker.register('/sw.js');\n        console.log('Service Worker registered');\n        return registration;\n    }\n    throw new Error('Push notifications not supported');\n}\nasync function subscribeToPush(registration, vapidPublicKey) {\n    const subscription = await registration.pushManager.subscribe({\n        userVisibleOnly: true,\n        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)\n    });\n    return subscription;\n}\nasync function sendSubscriptionToServer(subscription, userId) {\n    const response = await fetch('http://127.0.0.1:8000/api/push-subscribe', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"jwt\": `${localStorage.getItem(\"jwt\")}`\n        },\n        body: JSON.stringify({\n            ...subscription.toJSON(),\n            userId\n        })\n    });\n    localStorage.setItem('pushEnabled', JSON.stringify(true));\n    return response.json();\n}\nasync function removeSubscriptionFromServer(subscription) {\n    await fetch('http://127.0.0.1:8000/api/push-unsubscribe', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"jwt\": `${localStorage.getItem(\"jwt\")}`\n        },\n        body: JSON.stringify({\n            endpoint: subscription.endpoint\n        })\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9wdXNoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sU0FBU0Esc0JBQXNCQyxZQUFvQjtJQUN0RCxNQUFNQyxVQUFVLElBQUlDLE1BQU0sQ0FBQyxDQUFDLElBQUlGLGFBQWFHLE1BQU0sR0FBRyxLQUFLO0lBQzNELE1BQU1DLFNBQVMsQ0FBQ0osZUFBZUMsT0FBTSxFQUFHSSxPQUFPLENBQUMsTUFBTSxLQUFLQSxPQUFPLENBQUMsTUFBTTtJQUN6RSxNQUFNQyxVQUFVQyxPQUFPQyxJQUFJLENBQUNKO0lBQzVCLE1BQU1LLGNBQWMsSUFBSUMsV0FBV0osUUFBUUgsTUFBTTtJQUNqRCxJQUFLLElBQUlRLElBQUksR0FBR0EsSUFBSUwsUUFBUUgsTUFBTSxFQUFFLEVBQUVRLEVBQUc7UUFDckNGLFdBQVcsQ0FBQ0UsRUFBRSxHQUFHTCxRQUFRTSxVQUFVLENBQUNEO0lBQ3hDO0lBQ0EsT0FBT0Y7QUFDWDtBQUVPLGVBQWVJO0lBQ2xCLElBQUksbUJBQW1CQyxhQUFhLGlCQUFpQlAsUUFBUTtRQUN6RCxNQUFNUSxlQUFlLE1BQU1ELFVBQVVFLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDO1FBQzVEQyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPSjtJQUNYO0lBQ0EsTUFBTSxJQUFJSyxNQUFNO0FBQ3BCO0FBRU8sZUFBZUMsZ0JBQ2xCTixZQUF1QyxFQUN2Q08sY0FBc0I7SUFFdEIsTUFBTUMsZUFBZSxNQUFNUixhQUFhUyxXQUFXLENBQUNDLFNBQVMsQ0FBQztRQUMxREMsaUJBQWlCO1FBQ2pCQyxzQkFBc0I1QixzQkFBc0J1QjtJQUNoRDtJQUNBLE9BQU9DO0FBQ1g7QUFFTyxlQUFlSyx5QkFDbEJMLFlBQThCLEVBQzlCTSxNQUFjO0lBRWQsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDRDQUE0QztRQUNyRUMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCLE9BQU8sR0FBR0MsYUFBYUMsT0FBTyxDQUFDLFFBQVE7UUFDekM7UUFDRkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUUsR0FBR2YsYUFBYWdCLE1BQU0sRUFBRTtZQUFFVjtRQUFPO0lBQzVEO0lBQ0FLLGFBQWFNLE9BQU8sQ0FBQyxlQUFlSCxLQUFLQyxTQUFTLENBQUM7SUFDbkQsT0FBT1IsU0FBU1csSUFBSTtBQUN4QjtBQUVPLGVBQWVDLDZCQUE2Qm5CLFlBQThCO0lBQzdFLE1BQU1RLE1BQU0sOENBQThDO1FBQ3hEQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsT0FBTyxHQUFHQyxhQUFhQyxPQUFPLENBQUMsUUFBUTtRQUN6QztRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRUssVUFBVXBCLGFBQWFvQixRQUFRO1FBQUM7SUFDekQ7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcbGliXFxwdXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpICUgNCk7XHJcbiAgICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZykucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICAgIGNvbnN0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xyXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+IHtcclxuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmICdQdXNoTWFuYWdlcicgaW4gd2luZG93KSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIFdvcmtlciByZWdpc3RlcmVkJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbjtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcignUHVzaCBub3RpZmljYXRpb25zIG5vdCBzdXBwb3J0ZWQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZVRvUHVzaChcclxuICAgIHJlZ2lzdHJhdGlvbjogU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbixcclxuICAgIHZhcGlkUHVibGljS2V5OiBzdHJpbmdcclxuKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uPiB7XHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcclxuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXHJcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IHVybEJhc2U2NFRvVWludDhBcnJheSh2YXBpZFB1YmxpY0tleSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdWJzY3JpcHRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kU3Vic2NyaXB0aW9uVG9TZXJ2ZXIoXHJcbiAgICBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24sXHJcbiAgICB1c2VySWQ6IG51bWJlclxyXG4pOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmcgfSB8IHsgZXJyb3I6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3B1c2gtc3Vic2NyaWJlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiand0XCI6IGAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uc3Vic2NyaXB0aW9uLnRvSlNPTigpLCB1c2VySWQgfSksXHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwdXNoRW5hYmxlZCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVTdWJzY3JpcHRpb25Gcm9tU2VydmVyKHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcHVzaC11bnN1YnNjcmliZScsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcImp3dFwiOiBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKX1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVuZHBvaW50OiBzdWJzY3JpcHRpb24uZW5kcG9pbnQgfSksXHJcbiAgICB9KTtcclxuICB9Il0sIm5hbWVzIjpbInVybEJhc2U2NFRvVWludDhBcnJheSIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJsZW5ndGgiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsIndpbmRvdyIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsInJlZ2lzdGVyU2VydmljZVdvcmtlciIsIm5hdmlnYXRvciIsInJlZ2lzdHJhdGlvbiIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInN1YnNjcmliZVRvUHVzaCIsInZhcGlkUHVibGljS2V5Iiwic3Vic2NyaXB0aW9uIiwicHVzaE1hbmFnZXIiLCJzdWJzY3JpYmUiLCJ1c2VyVmlzaWJsZU9ubHkiLCJhcHBsaWNhdGlvblNlcnZlcktleSIsInNlbmRTdWJzY3JpcHRpb25Ub1NlcnZlciIsInVzZXJJZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9KU09OIiwic2V0SXRlbSIsImpzb24iLCJyZW1vdmVTdWJzY3JpcHRpb25Gcm9tU2VydmVyIiwiZW5kcG9pbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/push.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.tsx\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-pages/_error */ \"(pages-dir-node)/./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZfZXJyb3ImcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9lcnJvciZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDc0Q7QUFDdEQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHFEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLHFEQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLHFEQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLHFEQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxxREFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxxREFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLHFEQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLHFEQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19lcnJvclwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvX2Vycm9yXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9fZXJyb3JcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ \"(pages-dir-node)/./components/Sidebar.tsx\");\n/* harmony import */ var _components_PushSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PushSubscription */ \"(pages-dir-node)/./components/PushSubscription.tsx\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_AddEventFrom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/AddEventFrom.css */ \"(pages-dir-node)/./styles/AddEventFrom.css\");\n/* harmony import */ var _styles_AddEventFrom_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_AddEventFrom_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_MeetingRoomCardStyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/MeetingRoomCardStyles.css */ \"(pages-dir-node)/./styles/MeetingRoomCardStyles.css\");\n/* harmony import */ var _styles_MeetingRoomCardStyles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MeetingRoomCardStyles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ThemeProvider,useMediaQuery!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ \"(pages-dir-node)/./context/AuthContext.tsx\");\n/* harmony import */ var _context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/NotificationContext */ \"(pages-dir-node)/./context/NotificationContext.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/theme */ \"(pages-dir-node)/./styles/theme.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__]);\n([_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst AuthenticatedApp = ({ Component, pageProps })=>{\n    const isTablet = (0,_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery)(\"(max-width:1024px)\");\n    const isMobile = (0,_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery)(\"(max-width:600px)\");\n    const { user, loading } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)({\n        \"AuthenticatedApp.useEffect\": ()=>{\n            if (!loading) {\n                const isAuthPage = router.pathname === '/auth';\n                if (!user && !isAuthPage) {\n                    router.push('/auth');\n                } else if (user && isAuthPage) {\n                    router.push('/events');\n                }\n            }\n        }\n    }[\"AuthenticatedApp.useEffect\"], [\n        user,\n        loading,\n        router\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    justifyContent: 'center',\n                    alignItems: 'center',\n                    height: '100vh'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Загрузка...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined);\n    }\n    const isAuthPage = router.pathname === '/auth';\n    if (!user && !isAuthPage || user && isAuthPage) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        children: [\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PushSubscription__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userId: user.id\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 53,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    width: \"96%\",\n                    padding: isTablet ? isMobile ? \"2vh 2%\" : \"3vh 2%\" : \"4vh 2%\",\n                    overflow: 'hidden'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            overflowY: 'auto',\n                            marginLeft: isTablet ? isMobile ? \"0px\" : \"65px\" : \"305px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\nfunction MyApp(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__.NotificationProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthenticatedApp, {\n                ...props\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2tCO0FBQ2hDO0FBQ007QUFDUztBQUNnQjtBQUNFO0FBQ087QUFDbEM7QUFDSTtBQUNOO0FBRWxDLE1BQU1VLG1CQUF1QyxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BFLE1BQU1DLFdBQVdWLCtHQUFhQSxDQUFDO0lBQy9CLE1BQU1XLFdBQVdYLCtHQUFhQSxDQUFDO0lBRy9CLE1BQU0sRUFBRVksSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR1gsNkRBQU9BO0lBQ2pDLE1BQU1ZLFNBQVNULHNEQUFTQTtJQUV4QkMsaURBQVNBO3NDQUFDO1lBQ1IsSUFBSSxDQUFDTyxTQUFTO2dCQUNaLE1BQU1FLGFBQWFELE9BQU9FLFFBQVEsS0FBSztnQkFFdkMsSUFBSSxDQUFDSixRQUFRLENBQUNHLFlBQVk7b0JBRXhCRCxPQUFPRyxJQUFJLENBQUM7Z0JBQ2QsT0FBTyxJQUFJTCxRQUFRRyxZQUFZO29CQUU3QkQsT0FBT0csSUFBSSxDQUFDO2dCQUNkO1lBQ0Y7UUFDRjtxQ0FBRztRQUFDTDtRQUFNQztRQUFTQztLQUFPO0lBRTFCLElBQUlELFNBQVM7UUFDWCxxQkFDRSw4REFBQ2QsMkdBQWFBO1lBQUNLLE9BQU9BLHFEQUFLQTtzQkFDekIsNEVBQUNjO2dCQUFJQyxPQUFPO29CQUFFQyxTQUFTO29CQUFRQyxnQkFBZ0I7b0JBQVVDLFlBQVk7b0JBQVVDLFFBQVE7Z0JBQVE7MEJBQzdGLDRFQUFDQzs4QkFBSzs7Ozs7Ozs7Ozs7Ozs7OztJQUlkO0lBRUEsTUFBTVQsYUFBYUQsT0FBT0UsUUFBUSxLQUFLO0lBQ3ZDLElBQUksQ0FBRUosUUFBUSxDQUFDRyxjQUFnQkgsUUFBUUcsWUFBYTtRQUNsRCxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ2hCLDJHQUFhQTtRQUFDSyxPQUFPQSxxREFBS0E7O1lBQ3hCUSxzQkFBUSw4REFBQ2Qsb0VBQWdCQTtnQkFBQzJCLFFBQVFiLEtBQUtjLEVBQUU7Ozs7OzswQkFDMUMsOERBQUNSO2dCQUFJQyxPQUFPO29CQUFFQyxTQUFTO29CQUFRTyxPQUFPO29CQUFPQyxTQUFTbEIsV0FBV0MsV0FBVyxXQUFXLFdBQVc7b0JBQVVrQixVQUFVO2dCQUFTOztrQ0FDN0gsOERBQUNoQywyREFBT0E7Ozs7O2tDQUNSLDhEQUFDcUI7d0JBQUlDLE9BQU87NEJBQUVRLE9BQU87NEJBQVFHLFdBQVc7NEJBQVFDLFlBQVlyQixXQUFXQyxXQUFXLFFBQVEsU0FBUzt3QkFBUTtrQ0FDekcsNEVBQUNIOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBSWUsU0FBU3VCLE1BQU1DLEtBQWU7SUFDM0MscUJBQ0UsOERBQUM5Qiw4RUFBb0JBO2tCQUNuQiw0RUFBQ0YsOERBQVlBO3NCQUNYLDRFQUFDTTtnQkFBa0IsR0FBRzBCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgUHVzaFN1YnNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1B1c2hTdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRkRXZlbnRGcm9tLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL01lZXRpbmdSb29tQ2FyZFN0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvTm90aWZpY2F0aW9uQ29udGV4dCc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEF1dGhlbnRpY2F0ZWRBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOjEwMjRweClcIik7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDo2MDBweClcIik7XHJcbiAgXHJcblxyXG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICAgIGNvbnN0IGlzQXV0aFBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvYXV0aCc7IFxyXG5cclxuICAgICAgaWYgKCF1c2VyICYmICFpc0F1dGhQYWdlKSB7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHVzZXIgJiYgaXNBdXRoUGFnZSkge1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCgnL2V2ZW50cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3VzZXIsIGxvYWRpbmcsIHJvdXRlcl0pO1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICAgICAgPHNwYW4+0JfQsNCz0YDRg9C30LrQsC4uLjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQXV0aFBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvYXV0aCc7XHJcbiAgaWYgKCghdXNlciAmJiAhaXNBdXRoUGFnZSkgfHwgKHVzZXIgJiYgaXNBdXRoUGFnZSkpIHtcclxuICAgIHJldHVybiBudWxsOyBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICB7dXNlciAmJiA8UHVzaFN1YnNjcmlwdGlvbiB1c2VySWQ9e3VzZXIuaWR9IC8+fVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6IFwiOTYlXCIsIHBhZGRpbmc6IGlzVGFibGV0ID8gaXNNb2JpbGUgPyBcIjJ2aCAyJVwiIDogXCIzdmggMiVcIiA6IFwiNHZoIDIlXCIsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvd1k6ICdhdXRvJywgbWFyZ2luTGVmdDogaXNUYWJsZXQgPyBpc01vYmlsZSA/IFwiMHB4XCIgOiBcIjY1cHhcIiA6IFwiMzA1cHhcIiB9fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHM6IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOb3RpZmljYXRpb25Qcm92aWRlcj5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8QXV0aGVudGljYXRlZEFwcCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9Ob3RpZmljYXRpb25Qcm92aWRlcj5cclxuICAgIFxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiU2lkZWJhciIsIlB1c2hTdWJzY3JpcHRpb24iLCJUaGVtZVByb3ZpZGVyIiwidXNlTWVkaWFRdWVyeSIsIkF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJOb3RpZmljYXRpb25Qcm92aWRlciIsInRoZW1lIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQXV0aGVudGljYXRlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJ1c2VyIiwibG9hZGluZyIsInJvdXRlciIsImlzQXV0aFBhZ2UiLCJwYXRobmFtZSIsInB1c2giLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJzcGFuIiwidXNlcklkIiwiaWQiLCJ3aWR0aCIsInBhZGRpbmciLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm1hcmdpbkxlZnQiLCJNeUFwcCIsInByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/AddEventFrom.css":
/*!*********************************!*\
  !*** ./styles/AddEventFrom.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/MeetingRoomCardStyles.css":
/*!******************************************!*\
  !*** ./styles/MeetingRoomCardStyles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#603F99'\n        },\n        secondary: {\n            main: '#A3A3A3'\n        }\n    },\n    typography: {\n        fontFamily: 'Mont, sans-serif'\n    },\n    /*\r\n  typography: {\r\n    t1: { fontSize: '24px', fontWeight: 700, color: '#000000' },\r\n    t2: { fontSize: '18px', fontWeight: 500, color: '#333333' },\r\n    t3: { fontSize: '14px', fontWeight: 400, color: '#666666' },\r\n  },*/ components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    fontSize: \"14px\",\n                    padding: \"15px 15px\",\n                    boxShadow: 'none',\n                    borderRadius: \"0\"\n                }\n            }\n        },\n        MuiOutlinedInput: {\n            styleOverrides: {\n                root: {\n                    borderRadius: \"0\"\n                }\n            }\n        },\n        MuiTab: {\n            styleOverrides: {\n                root: {\n                    textTransform: 'none'\n                }\n            }\n        },\n        MuiTable: {\n            styleOverrides: {\n                root: {\n                    borderCollapse: 'collapse',\n                    width: '100%'\n                }\n            }\n        },\n        MuiPaper: {\n            styleOverrides: {\n                root: {\n                    boxShadow: 'none',\n                    borderRadius: \"0\"\n                }\n            }\n        },\n        MuiTableCell: {\n            styleOverrides: {\n                head: {\n                    backgroundColor: '#E3E3E3',\n                    color: '#858585',\n                    padding: '12px 16px'\n                },\n                body: {\n                    color: '#333',\n                    padding: '12px 16px',\n                    borderBottom: \"none\"\n                }\n            }\n        },\n        MuiTableRow: {\n            styleOverrides: {\n                root: {\n                    '&:nth-of-type(odd)': {\n                        backgroundColor: '#F4F4F4'\n                    }\n                }\n            }\n        },\n        MuiPopper: {\n            styleOverrides: {\n                root: {\n                    \"& .MuiPaper-root\": {\n                        border: \"2px solid #603F99\",\n                        borderRadius: \"4px\"\n                    }\n                }\n            }\n        },\n        MuiPopover: {\n            styleOverrides: {\n                paper: {\n                    border: \"2px solid #603F99\",\n                    borderRadius: \"4px\"\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUMsUUFBUUQsaUVBQVdBLENBQUM7SUFDeEJFLFNBQVM7UUFDUEMsU0FBUztZQUNQQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVztZQUNURCxNQUFNO1FBQ1I7SUFDRjtJQUNBRSxZQUFZO1FBQ1ZDLFlBQVk7SUFDZDtJQUFFOzs7OztJQUtBLEdBQ0ZDLFlBQVk7UUFDVkMsV0FBVztZQUNUQyxnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0pDLFVBQVU7b0JBQ1ZDLFNBQVM7b0JBQ1RDLFdBQVc7b0JBQ1hDLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRjtRQUNBQyxrQkFBa0I7WUFDaEJOLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkksY0FBYztnQkFDaEI7WUFDRjtRQUNGO1FBQ0FFLFFBQVE7WUFDTlAsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKTyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7UUFDQUMsVUFBVTtZQUNSVCxnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0pTLGdCQUFnQjtvQkFDaEJDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBQ0FDLFVBQVU7WUFDUlosZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKRyxXQUFXO29CQUNYQyxjQUFjO2dCQUNoQjtZQUNGO1FBQ0Y7UUFDQVEsY0FBYztZQUNaYixnQkFBZ0I7Z0JBQ2RjLE1BQU07b0JBQ0pDLGlCQUFpQjtvQkFDakJDLE9BQU87b0JBQ1BiLFNBQVM7Z0JBQ1g7Z0JBQ0FjLE1BQU07b0JBQ0pELE9BQU87b0JBQ1BiLFNBQVM7b0JBQ1RlLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRjtRQUNBQyxhQUFhO1lBQ1huQixnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0osc0JBQXNCO3dCQUNwQmMsaUJBQWlCO29CQUNuQjtnQkFDRjtZQUNGO1FBQ0Y7UUFDQUssV0FBVztZQUNUcEIsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKLG9CQUFvQjt3QkFDbEJvQixRQUFRO3dCQUNSaEIsY0FBYztvQkFDaEI7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FpQixZQUFZO1lBQ1Z0QixnQkFBZ0I7Z0JBQ2R1QixPQUFPO29CQUNMRixRQUFRO29CQUNSaEIsY0FBYztnQkFDaEI7WUFDRjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlZCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxzdHlsZXNcXHRoZW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiAnIzYwM0Y5OScsIFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAnI0EzQTNBMycsIFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6ICdNb250LCBzYW5zLXNlcmlmJyxcclxuICB9LC8qXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgdDE6IHsgZm9udFNpemU6ICcyNHB4JywgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMwMDAwMDAnIH0sXHJcbiAgICB0MjogeyBmb250U2l6ZTogJzE4cHgnLCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAnIzMzMzMzMycgfSxcclxuICAgIHQzOiB7IGZvbnRTaXplOiAnMTRweCcsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6ICcjNjY2NjY2JyB9LFxyXG4gIH0sKi9cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBNdWlCdXR0b246IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjE1cHggMTVweFwiLFxyXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpT3V0bGluZWRJbnB1dDoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sIFxyXG4gICAgTXVpVGFiOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGFibGU6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQYXBlcjoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYmxlQ2VsbDoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFM0UzRTMnLFxyXG4gICAgICAgICAgY29sb3I6ICcjODU4NTg1JyxcclxuICAgICAgICAgIHBhZGRpbmc6ICcxMnB4IDE2cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgY29sb3I6ICcjMzMzJyxcclxuICAgICAgICAgIHBhZGRpbmc6ICcxMnB4IDE2cHgnLFxyXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYmxlUm93OiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y0RjRGNCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpUG9wcGVyOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgXCImIC5NdWlQYXBlci1yb290XCI6IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjNjAzRjk5XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIiwgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpUG9wb3Zlcjoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHBhcGVyOiB7XHJcbiAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM2MDNGOTlcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiTXVpT3V0bGluZWRJbnB1dCIsIk11aVRhYiIsInRleHRUcmFuc2Zvcm0iLCJNdWlUYWJsZSIsImJvcmRlckNvbGxhcHNlIiwid2lkdGgiLCJNdWlQYXBlciIsIk11aVRhYmxlQ2VsbCIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvZHkiLCJib3JkZXJCb3R0b20iLCJNdWlUYWJsZVJvdyIsIk11aVBvcHBlciIsImJvcmRlciIsIk11aVBvcG92ZXIiLCJwYXBlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/theme.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/notification.ts":
/*!*******************************!*\
  !*** ./utils/notification.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notify: () => (/* binding */ notify),\n/* harmony export */   setNotificationHandler: () => (/* binding */ setNotificationHandler)\n/* harmony export */ });\nlet notificationHandler = null;\nconst setNotificationHandler = (handler)=>{\n    notificationHandler = handler;\n};\nconst notify = (message, severity = 'info')=>{\n    if (notificationHandler) {\n        notificationHandler.showNotification(message, severity);\n    } else {\n        console.error('Notification handler not set:', message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL25vdGlmaWNhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBLElBQUlBLHNCQUFrRDtBQUcvQyxNQUFNQyx5QkFBeUIsQ0FBQ0M7SUFDbkNGLHNCQUFzQkU7QUFDMUIsRUFBRTtBQUVLLE1BQU1DLFNBQVMsQ0FBQ0MsU0FBaUJDLFdBQXFELE1BQU07SUFDL0YsSUFBSUwscUJBQXFCO1FBQ3ZCQSxvQkFBb0JNLGdCQUFnQixDQUFDRixTQUFTQztJQUNoRCxPQUFPO1FBQ0xFLFFBQVFDLEtBQUssQ0FBQyxpQ0FBaUNKO0lBQ2pEO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcdXRpbHNcXG5vdGlmaWNhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTm90aWZpY2F0aW9uSGFuZGxlciB7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBzZXZlcml0eT86ICdlcnJvcicgfCAnaW5mbycgfCAnc3VjY2VzcycgfCAnd2FybmluZycpID0+IHZvaWQ7XHJcbn1cclxuICBcclxubGV0IG5vdGlmaWNhdGlvbkhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIgfCBudWxsID0gbnVsbDtcclxuICBcclxuXHJcbmV4cG9ydCBjb25zdCBzZXROb3RpZmljYXRpb25IYW5kbGVyID0gKGhhbmRsZXI6IE5vdGlmaWNhdGlvbkhhbmRsZXIpID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbkhhbmRsZXIgPSBoYW5kbGVyO1xyXG59O1xyXG4gIFxyXG5leHBvcnQgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk6ICdlcnJvcicgfCAnaW5mbycgfCAnc3VjY2VzcycgfCAnd2FybmluZycgPSAnaW5mbycpID0+IHtcclxuICAgIGlmIChub3RpZmljYXRpb25IYW5kbGVyKSB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbkhhbmRsZXIuc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCBzZXZlcml0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdOb3RpZmljYXRpb24gaGFuZGxlciBub3Qgc2V0OicsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJub3RpZmljYXRpb25IYW5kbGVyIiwic2V0Tm90aWZpY2F0aW9uSGFuZGxlciIsImhhbmRsZXIiLCJub3RpZnkiLCJtZXNzYWdlIiwic2V2ZXJpdHkiLCJzaG93Tm90aWZpY2F0aW9uIiwiY29uc29sZSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/notification.ts\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js":
/*!****************************************************************************************!*\
  !*** __barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Alert: () => (/* reexport safe */ _Alert_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Snackbar: () => (/* reexport safe */ _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Alert_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/Alert/index.js\");\n/* harmony import */ var _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/Snackbar/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Alert_index_js__WEBPACK_IMPORTED_MODULE_0__, _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_Alert_index_js__WEBPACK_IMPORTED_MODULE_0__, _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUFsZXJ0LFNuYWNrYmFyIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRCIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcbm9kZV9tb2R1bGVzXFxAbXVpXFxtYXRlcmlhbFxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0IH0gZnJvbSBcIi4vQWxlcnQvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbmFja2JhciB9IGZyb20gXCIuL1NuYWNrYmFyL2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   IconButton: () => (/* reexport safe */ _IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   List: () => (/* reexport safe */ _List_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   ListItemButton: () => (/* reexport safe */ _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   ListItemIcon: () => (/* reexport safe */ _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   ListItemText: () => (/* reexport safe */ _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _List_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemButton/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/ListItemButton/index.js\");\n/* harmony import */ var _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItemIcon/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemText/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Typography/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMediaQuery/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/useMediaQuery/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__, _List_index_js__WEBPACK_IMPORTED_MODULE_2__, _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__, _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__, _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__]);\n([_IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__, _List_index_js__WEBPACK_IMPORTED_MODULE_2__, _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__, _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__, _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUJveCxJY29uQnV0dG9uLExpc3QsTGlzdEl0ZW1CdXR0b24sTGlzdEl0ZW1JY29uLExpc3RJdGVtVGV4dCxUaGVtZVByb3ZpZGVyLFR5cG9ncmFwaHksdXNlTWVkaWFRdWVyeSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNjO0FBQ1o7QUFDb0I7QUFDSjtBQUNBO0FBQ29EO0FBQ3hEIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxub2RlX21vZHVsZXNcXEBtdWlcXG1hdGVyaWFsXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94L2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkJ1dHRvbiB9IGZyb20gXCIuL0ljb25CdXR0b24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0IH0gZnJvbSBcIi4vTGlzdC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtQnV0dG9uIH0gZnJvbSBcIi4vTGlzdEl0ZW1CdXR0b24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbUljb24gfSBmcm9tIFwiLi9MaXN0SXRlbUljb24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbVRleHQgfSBmcm9tIFwiLi9MaXN0SXRlbVRleHQvaW5kZXguanNcIlxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJDOlxcXFxwcm9qZWN0XFxcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcXFxub2RlX21vZHVsZXNcXFxcQG11aVxcXFxtYXRlcmlhbFxcXFxzdHlsZXNcXFxcaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiLi91c2VNZWRpYVF1ZXJ5L2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js":
/*!*****************************************************************************************************!*\
  !*** __barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMediaQuery/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/useMediaQuery/index.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPVRoZW1lUHJvdmlkZXIsdXNlTWVkaWFRdWVyeSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUgiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXG5vZGVfbW9kdWxlc1xcQG11aVxcbWF0ZXJpYWxcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJDOlxcXFxwcm9qZWN0XFxcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcXFxub2RlX21vZHVsZXNcXFxcQG11aVxcXFxtYXRlcmlhbFxcXFxzdHlsZXNcXFxcaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIi4vdXNlTWVkaWFRdWVyeS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "../../server/app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../../server/app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createBreakpoints");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useMediaQuery":
/*!********************************************!*\
  !*** external "@mui/system/useMediaQuery" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useMediaQuery");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/appendOwnerState");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/extractEventHandlers");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/getReactElementRef");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isFocusVisible");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/mergeSlotProps");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveComponentProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useLazyRef");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx?9dfb":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "clsx?ce27":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();
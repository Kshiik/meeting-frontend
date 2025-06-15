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
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

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

/***/ "./api/auth.ts":
/*!*********************!*\
  !*** ./api/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   login: () => (/* binding */ login)\n/* harmony export */ });\nconst login = async (credentials)=>{\n    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login_check`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(credentials)\n    });\n    if (!response.ok) {\n        throw new Error('Неверные данные');\n    }\n    const data = await response.json();\n    const token = data.token;\n    if (!token) {\n        throw new Error('Токен не получен');\n    }\n    return token;\n};\nconst getCurrentUser = async ()=>{\n    const token = localStorage.getItem('jwt');\n    if (!token) {\n        return null;\n    }\n    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employee/self`, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'jwt': `${token}`\n        }\n    });\n    if (!response.ok) {\n        throw new Error('Ошибка получения данных пользователя');\n    }\n    return response.json();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQVlPLE1BQU1BLFFBQVEsT0FBT0M7SUFDeEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQUdDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUMvRUMsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1FBQ3BCO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1Y7SUFDekI7SUFDQSxJQUFJLENBQUNDLFNBQVNVLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxNQUFNQyxPQUFzQixNQUFNWixTQUFTYSxJQUFJO0lBQy9DLE1BQU1DLFFBQVFGLEtBQUtFLEtBQUs7SUFFeEIsSUFBSSxDQUFDQSxPQUFPO1FBQ1YsTUFBTSxJQUFJSCxNQUFNO0lBQ2xCO0lBRUEsT0FBT0c7QUFDWCxFQUFFO0FBRUssTUFBTUMsaUJBQWlCO0lBQzFCLE1BQU1ELFFBQVFFLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJLENBQUNILE9BQU87UUFDVixPQUFPO0lBQ1Q7SUFFQSxNQUFNZCxXQUFXLE1BQU1DLE1BQU0sR0FBR0MsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ25GQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsT0FBTyxHQUFHUSxPQUFPO1FBQ25CO0lBQ0Y7SUFFQSxJQUFJLENBQUNkLFNBQVNVLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxPQUFPWCxTQUFTYSxJQUFJO0FBQ3RCLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXGFwaVxcYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbXBsb3llZSwgRnVsbEVtcGxveWVlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIExvZ2luQ3JlZGVudGlhbHMge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuICBcclxuaW50ZXJmYWNlIExvZ2luUmVzcG9uc2Uge1xyXG4gICAgdG9rZW46IHN0cmluZztcclxufVxyXG4gIFxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoY3JlZGVudGlhbHM6IExvZ2luQ3JlZGVudGlhbHMpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvbG9naW5fY2hlY2tgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtdCy0LXRgNC90YvQtSDQtNCw0L3QvdGL0LUnKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGRhdGE6IExvZ2luUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGRhdGEudG9rZW47XHJcbiAgXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcign0KLQvtC60LXQvSDQvdC1INC/0L7Qu9GD0YfQtdC9Jyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gdG9rZW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoKTogUHJvbWlzZTxGdWxsRW1wbG95ZWUgfCBudWxsPiA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9lbXBsb3llZS9zZWxmYCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnand0JzogYCR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9OyJdLCJuYW1lcyI6WyJsb2dpbiIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwidG9rZW4iLCJnZXRDdXJyZW50VXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/auth.ts\n");

/***/ }),

/***/ "./components/PushSubscription.tsx":
/*!*****************************************!*\
  !*** ./components/PushSubscription.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PushSubscription)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_push__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/push */ \"./lib/push.ts\");\n\n\nconst VAPID_PUBLIC_KEY = 'BBceryB_Lo_6FOu8_jstUK5ExGze1esePCV8P8NwRbSCkOMeIm9xn23_7dTWM14M6YQx2VPEVX8yqcqtgezRppc';\nfunction PushSubscription({ userId }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"PushSubscription.useEffect\": ()=>{\n            console.log('PushSubscription: Starting setup for user', userId);\n            const setupPush = {\n                \"PushSubscription.useEffect.setupPush\": async ()=>{\n                    try {\n                        console.log('PushSubscription: Registering Service Worker');\n                        const registration = await (0,_lib_push__WEBPACK_IMPORTED_MODULE_1__.registerServiceWorker)();\n                        console.log('PushSubscription: Subscribing to push');\n                        const subscription = await (0,_lib_push__WEBPACK_IMPORTED_MODULE_1__.subscribeToPush)(registration, VAPID_PUBLIC_KEY);\n                        console.log('PushSubscription: Sending subscription to server');\n                        const result = await (0,_lib_push__WEBPACK_IMPORTED_MODULE_1__.sendSubscriptionToServer)(subscription, userId);\n                        console.log('PushSubscription: Server response:', result);\n                    } catch (error) {\n                        console.error('PushSubscription: Error:', error instanceof Error ? error.message : error);\n                    }\n                }\n            }[\"PushSubscription.useEffect.setupPush\"];\n            console.log('PushSubscription: Checking permission:', Notification.permission);\n            if (Notification.permission === 'default') {\n                Notification.requestPermission().then({\n                    \"PushSubscription.useEffect\": (permission)=>{\n                        console.log('PushSubscription: Permission granted:', permission);\n                        if (permission === 'granted') {\n                            setupPush();\n                        }\n                    }\n                }[\"PushSubscription.useEffect\"]);\n            } else if (Notification.permission === 'granted') {\n                setupPush();\n            } else {\n                console.log('PushSubscription: Notifications denied');\n            }\n        }\n    }[\"PushSubscription.useEffect\"], [\n        userId\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1B1c2hTdWJzY3JpcHRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDNkQ7QUFFL0YsTUFBTUksbUJBQW1CO0FBTVYsU0FBU0MsaUJBQWlCLEVBQUVDLE1BQU0sRUFBeUI7SUFDdEVOLGdEQUFTQTtzQ0FBQztZQUNOTyxRQUFRQyxHQUFHLENBQUMsNkNBQTZDRjtZQUN6RCxNQUFNRzt3REFBWTtvQkFDZCxJQUFJO3dCQUNBRixRQUFRQyxHQUFHLENBQUM7d0JBQ1osTUFBTUUsZUFBZSxNQUFNVCxnRUFBcUJBO3dCQUNoRE0sUUFBUUMsR0FBRyxDQUFDO3dCQUNaLE1BQU1HLGVBQWUsTUFBTVQsMERBQWVBLENBQUNRLGNBQWNOO3dCQUN6REcsUUFBUUMsR0FBRyxDQUFDO3dCQUNaLE1BQU1JLFNBQVMsTUFBTVQsbUVBQXdCQSxDQUFDUSxjQUFjTDt3QkFDNURDLFFBQVFDLEdBQUcsQ0FBQyxzQ0FBc0NJO29CQUN0RCxFQUFFLE9BQU9DLE9BQU87d0JBQ1pOLFFBQVFNLEtBQUssQ0FBQyw0QkFBNEJBLGlCQUFpQkMsUUFBUUQsTUFBTUUsT0FBTyxHQUFHRjtvQkFDdkY7Z0JBQ0o7O1lBRUFOLFFBQVFDLEdBQUcsQ0FBQywwQ0FBMENRLGFBQWFDLFVBQVU7WUFDN0UsSUFBSUQsYUFBYUMsVUFBVSxLQUFLLFdBQVc7Z0JBQ3ZDRCxhQUFhRSxpQkFBaUIsR0FBR0MsSUFBSTtrREFBQyxDQUFDRjt3QkFDbkNWLFFBQVFDLEdBQUcsQ0FBQyx5Q0FBeUNTO3dCQUNyRCxJQUFJQSxlQUFlLFdBQVc7NEJBQzFCUjt3QkFDSjtvQkFDSjs7WUFDSixPQUFPLElBQUlPLGFBQWFDLFVBQVUsS0FBSyxXQUFXO2dCQUM5Q1I7WUFDSixPQUFPO2dCQUNIRixRQUFRQyxHQUFHLENBQUM7WUFDaEI7UUFDSjtxQ0FBRztRQUFDRjtLQUFPO0lBRVgsT0FBTztBQUNYIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxjb21wb25lbnRzXFxQdXNoU3Vic2NyaXB0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyU2VydmljZVdvcmtlciwgc3Vic2NyaWJlVG9QdXNoLCBzZW5kU3Vic2NyaXB0aW9uVG9TZXJ2ZXIgfSBmcm9tICcuLi9saWIvcHVzaCc7XHJcblxyXG5jb25zdCBWQVBJRF9QVUJMSUNfS0VZID0gJ0JCY2VyeUJfTG9fNkZPdThfanN0VUs1RXhHemUxZXNlUENWOFA4TndSYlNDa09NZUltOXhuMjNfN2RUV00xNE02WVF4MlZQRVZYOHlxY3F0Z2V6UnBwYyc7IFxyXG5cclxuaW50ZXJmYWNlIFB1c2hTdWJzY3JpcHRpb25Qcm9wcyB7XHJcbiAgICB1c2VySWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVzaFN1YnNjcmlwdGlvbih7IHVzZXJJZCB9OiBQdXNoU3Vic2NyaXB0aW9uUHJvcHMpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1B1c2hTdWJzY3JpcHRpb246IFN0YXJ0aW5nIHNldHVwIGZvciB1c2VyJywgdXNlcklkKTtcclxuICAgICAgICBjb25zdCBzZXR1cFB1c2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHVzaFN1YnNjcmlwdGlvbjogUmVnaXN0ZXJpbmcgU2VydmljZSBXb3JrZXInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGF3YWl0IHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1B1c2hTdWJzY3JpcHRpb246IFN1YnNjcmliaW5nIHRvIHB1c2gnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHN1YnNjcmliZVRvUHVzaChyZWdpc3RyYXRpb24sIFZBUElEX1BVQkxJQ19LRVkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1B1c2hTdWJzY3JpcHRpb246IFNlbmRpbmcgc3Vic2NyaXB0aW9uIHRvIHNlcnZlcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZFN1YnNjcmlwdGlvblRvU2VydmVyKHN1YnNjcmlwdGlvbiwgdXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQdXNoU3Vic2NyaXB0aW9uOiBTZXJ2ZXIgcmVzcG9uc2U6JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1B1c2hTdWJzY3JpcHRpb246IEVycm9yOicsIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1B1c2hTdWJzY3JpcHRpb246IENoZWNraW5nIHBlcm1pc3Npb246JywgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pO1xyXG4gICAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQdXNoU3Vic2NyaXB0aW9uOiBQZXJtaXNzaW9uIGdyYW50ZWQ6JywgcGVybWlzc2lvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBQdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgICBzZXR1cFB1c2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHVzaFN1YnNjcmlwdGlvbjogTm90aWZpY2F0aW9ucyBkZW5pZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlcklkXSk7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwicmVnaXN0ZXJTZXJ2aWNlV29ya2VyIiwic3Vic2NyaWJlVG9QdXNoIiwic2VuZFN1YnNjcmlwdGlvblRvU2VydmVyIiwiVkFQSURfUFVCTElDX0tFWSIsIlB1c2hTdWJzY3JpcHRpb24iLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwic2V0dXBQdXNoIiwicmVnaXN0cmF0aW9uIiwic3Vic2NyaXB0aW9uIiwicmVzdWx0IiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJ0aGVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PushSubscription.tsx\n");

/***/ }),

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!@mui/material */ \"__barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/esm/Menu.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    const isTablet = (0,_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(\"(max-width:1024px)\");\n    const isMobile = (0,_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(\"(max-width:600px)\");\n    const { user, logout, loading, hasRole } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuItems = [\n        {\n            text: 'Мероприятия',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 92\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 25,\n                columnNumber: 19\n            }, undefined),\n            path: hasRole('ROLE_MODERATOR') ? '/eventsadmin' : '/events'\n        },\n        {\n            text: 'Переговорные комнаты',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 93\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 30,\n                columnNumber: 19\n            }, undefined),\n            path: '/rooms'\n        },\n        {\n            text: 'Таймлайн',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M120-240q-33 0-56.5-23.5T40-320q0-33 23.5-56.5T120-400h10.5q4.5 0 9.5 2l182-182q-2-5-2-9.5V-600q0-33 23.5-56.5T400-680q33 0 56.5 23.5T480-600q0 2-2 20l102 102q5-2 9.5-2h21q4.5 0 9.5 2l142-142q-2-5-2-9.5V-640q0-33 23.5-56.5T840-720q33 0 56.5 23.5T920-640q0 33-23.5 56.5T840-560h-10.5q-4.5 0-9.5-2L678-420q2 5 2 9.5v10.5q0 33-23.5 56.5T600-320q-33 0-56.5-23.5T520-400v-10.5q0-4.5 2-9.5L420-522q-5 2-9.5 2H400q-2 0-20-2L198-340q2 5 2 9.5v10.5q0 33-23.5 56.5T120-240Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 93\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 35,\n                columnNumber: 19\n            }, undefined),\n            path: '/timeline'\n        },\n        {\n            text: 'Профиль',\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"22\",\n                height: \"22\",\n                viewBox: \"0 -960 960 960\",\n                fill: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \"M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 93\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                lineNumber: 40,\n                columnNumber: 19\n            }, undefined),\n            path: '/profile'\n        }\n    ];\n    if (!user) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                width: \"45px\",\n                background: '#FFFFFF',\n                border: open ? '1px solid #A3A3A3' : 'none',\n                marginLeft: \"2%\",\n                marginTop: \"2.5vh\",\n                position: \"absolute\",\n                top: 0,\n                left: 0,\n                right: 0,\n                zIndex: 1300\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        onClick: ()=>setOpen(!open),\n                        sx: {\n                            p: '10px'\n                        },\n                        children: open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                transform: \"rotate(90deg)\",\n                                transition: \"transform 0.3s ease-in-out\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 33\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                transition: \"transform 0.3s ease-in-out\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 126\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    sx: {\n                        maxHeight: open ? \"500px\" : \"0px\",\n                        opacity: open ? 1 : 0,\n                        overflow: \"hidden\",\n                        transition: \"maxHeight 0.3s ease-in-out\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            gap: 1\n                        },\n                        children: [\n                            menuItems.map((item)=>{\n                                const isActive = pathname === item.path;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemButton, {\n                                    onClick: ()=>{\n                                        router.push(item.path);\n                                        setOpen(false);\n                                    },\n                                    sx: {\n                                        justifyContent: 'flex-start',\n                                        backgroundColor: isActive ? 'primary.main' : '#EEEEEE',\n                                        color: isActive ? '#FFFFFF' : 'secondary.main',\n                                        padding: '12px'\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                        sx: {\n                                            color: 'inherit',\n                                            minWidth: '0px'\n                                        },\n                                        children: item.icon\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, item.path, false, {\n                                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 37\n                                }, undefined);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                onClick: logout,\n                                sx: {\n                                    paddingLeft: \"15px\",\n                                    paddingTop: \"12px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/exit-icon.svg\",\n                                    alt: \"Выйти\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 54,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                position: \"fixed\",\n                width: isTablet ? \"52px\" : \"270px\",\n                height: '92vh',\n                display: 'flex',\n                flexDirection: 'column',\n                justifyContent: 'space-between',\n                alignItems: \"center\",\n                background: \"#FFFFFF\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            gap: 1\n                        },\n                        children: menuItems.map((item)=>{\n                            const isActive = pathname === item.path;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemButton, {\n                                onClick: ()=>router.push(item.path),\n                                sx: {\n                                    justifyContent: 'flex-start',\n                                    gap: 2,\n                                    backgroundColor: isActive ? 'primary.main' : '#EEEEEE',\n                                    color: isActive ? '#FFFFFF' : 'secondary.main',\n                                    padding: \"15px\",\n                                    '&:hover': {\n                                        background: isActive ? \"#815FB9\" : \"secondary.main\"\n                                    }\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                        sx: {\n                                            color: 'inherit',\n                                            minWidth: \"0px\"\n                                        },\n                                        children: item.icon\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    !isTablet && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                                        primary: item.text\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 51\n                                    }, undefined)\n                                ]\n                            }, item.path, true, {\n                                fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 37\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    onClick: logout,\n                    sx: {\n                        marginTop: 'auto',\n                        display: 'flex',\n                        gap: 2,\n                        cursor: 'pointer',\n                        width: 'calc(100% - 15px * 2)',\n                        padding: '0 15px',\n                        justifyContent: 'space-between'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_List_ListItemButton_ListItemIcon_ListItemText_ThemeProvider_Typography_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            noWrap: true,\n                            sx: {\n                                overflow: 'hidden',\n                                textOverflow: 'ellipsis',\n                                whiteSpace: 'nowrap',\n                                display: isTablet ? \"none\" : \"block\"\n                            },\n                            children: `${user?.name} ${user?.surname} ${user?.patronymic}`\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/exit-icon.svg\",\n                            alt: \"Выйти\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 92,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNtRztBQUNuRjtBQUNUO0FBRVo7QUFHYTtBQUVqRCxNQUFNZ0IsVUFBb0I7SUFDdEIsTUFBTUMsV0FBV1Isc0xBQWFBLENBQUM7SUFDL0IsTUFBTVMsV0FBV1Qsc0xBQWFBLENBQUM7SUFFL0IsTUFBTSxFQUFFVSxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR1AsNkRBQU9BO0lBRWxELE1BQU1RLFNBQVNYLDBEQUFTQTtJQUN4QixNQUFNWSxXQUFXYiw0REFBV0E7SUFFNUIsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNMEIsWUFBWTtRQUNkO1lBQ0lDLE1BQU07WUFDTkMsb0JBQU0sOERBQUNDO2dCQUFJQyxPQUFNO2dCQUFLQyxRQUFPO2dCQUFLQyxTQUFRO2dCQUFpQkMsTUFBSzswQkFBZSw0RUFBQ0M7b0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7O1lBQ3ZGRCxNQUFNYixRQUFRLG9CQUFvQixpQkFBaUI7UUFDdkQ7UUFDQTtZQUNJTSxNQUFNO1lBQ05DLG9CQUFNLDhEQUFDQztnQkFBSUMsT0FBTTtnQkFBS0MsUUFBTztnQkFBS0MsU0FBUTtnQkFBaUJDLE1BQUs7MEJBQWdCLDRFQUFDQztvQkFBS0MsR0FBRTs7Ozs7Ozs7Ozs7WUFDeEZELE1BQU07UUFDVjtRQUNBO1lBQ0lQLE1BQU07WUFDTkMsb0JBQU0sOERBQUNDO2dCQUFJQyxPQUFNO2dCQUFLQyxRQUFPO2dCQUFLQyxTQUFRO2dCQUFpQkMsTUFBSzswQkFBZ0IsNEVBQUNDO29CQUFLQyxHQUFFOzs7Ozs7Ozs7OztZQUN4RkQsTUFBTTtRQUNWO1FBQ0E7WUFDSVAsTUFBTTtZQUNOQyxvQkFBTSw4REFBQ0M7Z0JBQUlDLE9BQU07Z0JBQUtDLFFBQU87Z0JBQUtDLFNBQVE7Z0JBQWlCQyxNQUFLOzBCQUFnQiw0RUFBQ0M7b0JBQUtDLEdBQUU7Ozs7Ozs7Ozs7O1lBQ3hGRCxNQUFNO1FBQ1Y7S0FDSDtJQUVELElBQUksQ0FBQ2hCLE1BQU07UUFDUCxPQUNJO0lBRU47SUFFRixxQkFDSSw4REFBQ2hCLGtMQUFhQTtRQUFDVyxPQUFPQSxxREFBS0E7a0JBQ3JCSSx5QkFDRSw4REFBQ2hCLHdLQUFHQTtZQUFDbUMsSUFBSTtnQkFBRU4sT0FBTztnQkFBUU8sWUFBWTtnQkFBV0MsUUFBUWQsT0FBTyxzQkFBc0I7Z0JBQVFlLFlBQVk7Z0JBQU1DLFdBQVc7Z0JBQVNDLFVBQVU7Z0JBQVlDLEtBQUs7Z0JBQUdDLE1BQU07Z0JBQUdDLE9BQU87Z0JBQUdDLFFBQVE7WUFBSzs7OEJBQzlMLDhEQUFDNUMsd0tBQUdBOzhCQUNKLDRFQUFDUSwrS0FBVUE7d0JBQ1BxQyxTQUFTLElBQU1yQixRQUFRLENBQUNEO3dCQUN4QlksSUFBSTs0QkFBRVcsR0FBRzt3QkFBTztrQ0FFZnZCLHFCQUFPLDhEQUFDWixnRUFBUUE7NEJBQUN3QixJQUFJO2dDQUFFWSxXQUFXO2dDQUFrQkMsWUFBWTs0QkFBNkI7Ozs7O3NEQUFPLDhEQUFDckMsZ0VBQVFBOzRCQUFDd0IsSUFBSTtnQ0FBRWEsWUFBWTs0QkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2xLLDhEQUFDaEQsd0tBQUdBO29CQUFDbUMsSUFBSTt3QkFBRWMsV0FBVzFCLE9BQU8sVUFBVTt3QkFBTzJCLFNBQVMzQixPQUFPLElBQUk7d0JBQUc0QixVQUFVO3dCQUFVSCxZQUFZO29CQUE2Qjs4QkFDOUgsNEVBQUM5Qyx5S0FBSUE7d0JBQUNpQyxJQUFJOzRCQUFFaUIsU0FBUzs0QkFBUUMsZUFBZTs0QkFBVUMsS0FBSzt3QkFBRzs7NEJBQ3pEN0IsVUFBVThCLEdBQUcsQ0FBQyxDQUFDQztnQ0FDWixNQUFNQyxXQUFXbkMsYUFBYWtDLEtBQUt2QixJQUFJO2dDQUN2QyxxQkFDSSw4REFBQzlCLG1MQUFjQTtvQ0FFZjBDLFNBQVM7d0NBQ0x4QixPQUFPcUMsSUFBSSxDQUFDRixLQUFLdkIsSUFBSTt3Q0FDckJULFFBQVE7b0NBQ1o7b0NBQ0FXLElBQUk7d0NBQ0F3QixnQkFBZ0I7d0NBQ2hCQyxpQkFBaUJILFdBQVcsaUJBQWlCO3dDQUM3Q0ksT0FBT0osV0FBVyxZQUFZO3dDQUM5QkssU0FBUztvQ0FDYjs4Q0FFQSw0RUFBQzFELGlMQUFZQTt3Q0FBQytCLElBQUk7NENBQUUwQixPQUFPOzRDQUFXRSxVQUFVO3dDQUFNO2tEQUFJUCxLQUFLN0IsSUFBSTs7Ozs7O21DQVo5RDZCLEtBQUt2QixJQUFJOzs7Ozs0QkFldEI7MENBQ0EsOERBQUNqQyx3S0FBR0E7Z0NBQUM2QyxTQUFTM0I7Z0NBQVFpQixJQUFJO29DQUFFNkIsYUFBYTtvQ0FBUUMsWUFBWTtnQ0FBTzswQ0FDaEUsNEVBQUNDO29DQUFJQyxLQUFJO29DQUF3QkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU1yRCw4REFBQ3BFLHdLQUFHQTtZQUFDbUMsSUFBSTtnQkFBRUssVUFBVTtnQkFBU1gsT0FBT2QsV0FBVyxTQUFTO2dCQUFTZSxRQUFRO2dCQUFRc0IsU0FBUztnQkFBUUMsZUFBZTtnQkFBVU0sZ0JBQWdCO2dCQUFpQlUsWUFBWTtnQkFBVWpDLFlBQVk7WUFBVTs7OEJBQ3JNLDhEQUFDbEMseUtBQUlBOzhCQUNELDRFQUFDRix3S0FBR0E7d0JBQUNtQyxJQUFJOzRCQUFFaUIsU0FBUzs0QkFBUUMsZUFBZTs0QkFBVUMsS0FBSzt3QkFBRTtrQ0FDdkQ3QixVQUFVOEIsR0FBRyxDQUFDLENBQUNDOzRCQUNaLE1BQU1DLFdBQVduQyxhQUFha0MsS0FBS3ZCLElBQUk7NEJBRXZDLHFCQUNJLDhEQUFDOUIsbUxBQWNBO2dDQUVmMEMsU0FBUyxJQUFNeEIsT0FBT3FDLElBQUksQ0FBQ0YsS0FBS3ZCLElBQUk7Z0NBQ3BDRSxJQUFJO29DQUFFd0IsZ0JBQWdCO29DQUFjTCxLQUFLO29DQUNyQ00saUJBQWlCSCxXQUFXLGlCQUFpQjtvQ0FDN0NJLE9BQU9KLFdBQVcsWUFBWTtvQ0FDOUJLLFNBQVM7b0NBQ1QsV0FBVzt3Q0FBRTFCLFlBQVlxQixXQUFXLFlBQVk7b0NBQWtCO2dDQUN0RTs7a0RBRUEsOERBQUNyRCxpTEFBWUE7d0NBQUMrQixJQUFJOzRDQUFFMEIsT0FBTzs0Q0FBV0UsVUFBVTt3Q0FBTTtrREFBSVAsS0FBSzdCLElBQUk7Ozs7OztvQ0FDbEUsQ0FBQ1osMEJBQVksOERBQUNWLGlMQUFZQTt3Q0FBQ2lFLFNBQVNkLEtBQUs5QixJQUFJOzs7Ozs7OytCQVZ6QzhCLEtBQUt2QixJQUFJOzs7Ozt3QkFhdEI7Ozs7Ozs7Ozs7OzhCQUlSLDhEQUFDakMsd0tBQUdBO29CQUFDNkMsU0FBUzNCO29CQUFRaUIsSUFBSTt3QkFBRUksV0FBVzt3QkFBUWEsU0FBUzt3QkFBUUUsS0FBSzt3QkFBR2lCLFFBQVE7d0JBQVcxQyxPQUFPO3dCQUF5QmlDLFNBQVM7d0JBQVVILGdCQUFnQjtvQkFBZTs7c0NBQ3pLLDhEQUFDckQsK0tBQVVBOzRCQUFDa0UsTUFBTTs0QkFBQ3JDLElBQUk7Z0NBQUVnQixVQUFVO2dDQUFVc0IsY0FBYztnQ0FBWUMsWUFBWTtnQ0FBVXRCLFNBQVNyQyxXQUFXLFNBQVM7NEJBQVE7c0NBQzdILEdBQUdFLE1BQU0wRCxLQUFLLENBQUMsRUFBRTFELE1BQU0yRCxRQUFRLENBQUMsRUFBRTNELE1BQU00RCxZQUFZOzs7Ozs7c0NBRXpELDhEQUFDWDs0QkFBSUMsS0FBSTs0QkFBd0JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdEO0FBRUEsaUVBQWV0RCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxjb21wb25lbnRzXFxTaWRlYmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRoZW1lUHJvdmlkZXIsIExpc3QsIExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgSWNvbkJ1dHRvbix9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcblxyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9hcGkvYXV0aCc7XHJcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6MTAyNHB4KVwiKTtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6NjAwcHgpXCIpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlciwgbG9nb3V0LCBsb2FkaW5nLCBoYXNSb2xlIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIHRleHQ6ICfQnNC10YDQvtC/0YDQuNGP0YLQuNGPJyxcclxuICAgICAgICAgICAgaWNvbjogPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PHBhdGggZD1cIk01ODAtMjQwcS00MiAwLTcxLTI5dC0yOS03MXEwLTQyIDI5LTcxdDcxLTI5cTQyIDAgNzEgMjl0MjkgNzFxMCA0Mi0yOSA3MXQtNzEgMjlaTTIwMC04MHEtMzMgMC01Ni41LTIzLjVUMTIwLTE2MHYtNTYwcTAtMzMgMjMuNS01Ni41VDIwMC04MDBoNDB2LTgwaDgwdjgwaDMyMHYtODBoODB2ODBoNDBxMzMgMCA1Ni41IDIzLjVUODQwLTcyMHY1NjBxMCAzMy0yMy41IDU2LjVUNzYwLTgwSDIwMFptMC04MGg1NjB2LTQwMEgyMDB2NDAwWm0wLTQ4MGg1NjB2LTgwSDIwMHY4MFptMCAwdi04MCA4MFpcIi8+PC9zdmc+LFxyXG4gICAgICAgICAgICBwYXRoOiBoYXNSb2xlKCdST0xFX01PREVSQVRPUicpID8gJy9ldmVudHNhZG1pbicgOiAnL2V2ZW50cycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIHRleHQ6ICfQn9C10YDQtdCz0L7QstC+0YDQvdGL0LUg0LrQvtC80L3QsNGC0YsnLCBcclxuICAgICAgICAgICAgaWNvbjogPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgPjxwYXRoIGQ9XCJNMTIwLTEyMHYtODBoODB2LTY0MGg0MDB2NDBoMTYwdjYwMGg4MHY4MEg2ODB2LTYwMGgtODB2NjAwSDEyMFptMTYwLTY0MHY1NjAtNTYwWm0xNjAgMzIwcTE3IDAgMjguNS0xMS41VDQ4MC00ODBxMC0xNy0xMS41LTI4LjVUNDQwLTUyMHEtMTcgMC0yOC41IDExLjVUNDAwLTQ4MHEwIDE3IDExLjUgMjguNVQ0NDAtNDQwWk0yODAtMjAwaDI0MHYtNTYwSDI4MHY1NjBaXCIvPjwvc3ZnPixcclxuICAgICAgICAgICAgcGF0aDogJy9yb29tcycgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICB0ZXh0OiAn0KLQsNC50LzQu9Cw0LnQvScsXHJcbiAgICAgICAgICAgIGljb246IDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiID48cGF0aCBkPVwiTTEyMC0yNDBxLTMzIDAtNTYuNS0yMy41VDQwLTMyMHEwLTMzIDIzLjUtNTYuNVQxMjAtNDAwaDEwLjVxNC41IDAgOS41IDJsMTgyLTE4MnEtMi01LTItOS41Vi02MDBxMC0zMyAyMy41LTU2LjVUNDAwLTY4MHEzMyAwIDU2LjUgMjMuNVQ0ODAtNjAwcTAgMi0yIDIwbDEwMiAxMDJxNS0yIDkuNS0yaDIxcTQuNSAwIDkuNSAybDE0Mi0xNDJxLTItNS0yLTkuNVYtNjQwcTAtMzMgMjMuNS01Ni41VDg0MC03MjBxMzMgMCA1Ni41IDIzLjVUOTIwLTY0MHEwIDMzLTIzLjUgNTYuNVQ4NDAtNTYwaC0xMC41cS00LjUgMC05LjUtMkw2NzgtNDIwcTIgNSAyIDkuNXYxMC41cTAgMzMtMjMuNSA1Ni41VDYwMC0zMjBxLTMzIDAtNTYuNS0yMy41VDUyMC00MDB2LTEwLjVxMC00LjUgMi05LjVMNDIwLTUyMnEtNSAyLTkuNSAySDQwMHEtMiAwLTIwLTJMMTk4LTM0MHEyIDUgMiA5LjV2MTAuNXEwIDMzLTIzLjUgNTYuNVQxMjAtMjQwWlwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIHBhdGg6ICcvdGltZWxpbmUnIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgdGV4dDogJ9Cf0YDQvtGE0LjQu9GMJyxcclxuICAgICAgICAgICAgaWNvbjogPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgPjxwYXRoIGQ9XCJNMjM0LTI3NnE1MS0zOSAxMTQtNjEuNVQ0ODAtMzYwcTY5IDAgMTMyIDIyLjVUNzI2LTI3NnEzNS00MSA1NC41LTkzVDgwMC00ODBxMC0xMzMtOTMuNS0yMjYuNVQ0ODAtODAwcS0xMzMgMC0yMjYuNSA5My41VDE2MC00ODBxMCA1OSAxOS41IDExMXQ1NC41IDkzWm0yNDYtMTY0cS01OSAwLTk5LjUtNDAuNVQzNDAtNTgwcTAtNTkgNDAuNS05OS41VDQ4MC03MjBxNTkgMCA5OS41IDQwLjVUNjIwLTU4MHEwIDU5LTQwLjUgOTkuNVQ0ODAtNDQwWm0wIDM2MHEtODMgMC0xNTYtMzEuNVQxOTctMTk3cS01NC01NC04NS41LTEyN1Q4MC00ODBxMC04MyAzMS41LTE1NlQxOTctNzYzcTU0LTU0IDEyNy04NS41VDQ4MC04ODBxODMgMCAxNTYgMzEuNVQ3NjMtNzYzcTU0IDU0IDg1LjUgMTI3VDg4MC00ODBxMCA4My0zMS41IDE1NlQ3NjMtMTk3cS01NCA1NC0xMjcgODUuNVQ0ODAtODBabTAtODBxNTMgMCAxMDAtMTUuNXQ4Ni00NC41cS0zOS0yOS04Ni00NC41VDQ4MC0yODBxLTUzIDAtMTAwIDE1LjVUMjk0LTIyMHEzOSAyOSA4NiA0NC41VDQ4MC0xNjBabTAtMzYwcTI2IDAgNDMtMTd0MTctNDNxMC0yNi0xNy00M3QtNDMtMTdxLTI2IDAtNDMgMTd0LTE3IDQzcTAgMjYgMTcgNDN0NDMgMTdabTAtNjBabTAgMzYwWlwiLz48L3N2Zz4sXHJcbiAgICAgICAgICAgIHBhdGg6ICcvcHJvZmlsZScgXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgeyBpc01vYmlsZSA/IChcclxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiNDVweFwiLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIGJvcmRlcjogb3BlbiA/ICcxcHggc29saWQgI0EzQTNBMycgOiAnbm9uZScsIG1hcmdpbkxlZnQ6IFwiMiVcIiwgbWFyZ2luVG9wOiBcIjIuNXZoXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIHpJbmRleDogMTMwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBwOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuID8gPE1lbnVJY29uIHN4PXt7IHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0XCIgfX0vPiA6IDxNZW51SWNvbiBzeD17eyB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0XCIgfX0vPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXhIZWlnaHQ6IG9wZW4gPyBcIjUwMHB4XCIgOiBcIjBweFwiLCBvcGFjaXR5OiBvcGVuID8gMSA6IDAsIG92ZXJmbG93OiBcImhpZGRlblwiLCB0cmFuc2l0aW9uOiBcIm1heEhlaWdodCAwLjNzIGVhc2UtaW4tb3V0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogMSwgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aG5hbWUgPT09IGl0ZW0ucGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGl0ZW0ucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlID8gJ3ByaW1hcnkubWFpbicgOiAnI0VFRUVFRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNBY3RpdmUgPyAnI0ZGRkZGRicgOiAnc2Vjb25kYXJ5Lm1haW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdpbmhlcml0JywgbWluV2lkdGg6ICcwcHgnIH19PntpdGVtLmljb259PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBvbkNsaWNrPXtsb2dvdXR9IHN4PXt7IHBhZGRpbmdMZWZ0OiBcIjE1cHhcIiwgcGFkZGluZ1RvcDogXCIxMnB4XCIgfX0+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9leGl0LWljb24uc3ZnXCIgYWx0PVwi0JLRi9C50YLQuFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBpc1RhYmxldCA/IFwiNTJweFwiIDogXCIyNzBweFwiLCBoZWlnaHQ6ICc5MnZoJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lID09PSBpdGVtLnBhdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChpdGVtLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBnYXA6IDIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZSA/ICdwcmltYXJ5Lm1haW4nIDogJyNFRUVFRUUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQWN0aXZlID8gJyNGRkZGRkYnIDogJ3NlY29uZGFyeS5tYWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzogeyBiYWNrZ3JvdW5kOiBpc0FjdGl2ZSA/IFwiIzgxNUZCOVwiIDogXCJzZWNvbmRhcnkubWFpblwiLCB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdpbmhlcml0JywgbWluV2lkdGg6IFwiMHB4XCIgfX0+e2l0ZW0uaWNvbn08L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1RhYmxldCAmJiA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0udGV4dH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG9uQ2xpY2s9e2xvZ291dH0gc3g9e3sgbWFyZ2luVG9wOiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAyLCBjdXJzb3I6ICdwb2ludGVyJywgd2lkdGg6ICdjYWxjKDEwMCUgLSAxNXB4ICogMiknLCBwYWRkaW5nOiAnMCAxNXB4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbm9XcmFwIHN4PXt7IG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJywgZGlzcGxheTogaXNUYWJsZXQgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt1c2VyPy5uYW1lfSAke3VzZXI/LnN1cm5hbWV9ICR7dXNlcj8ucGF0cm9ueW1pY31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9leGl0LWljb24uc3ZnXCIgYWx0PVwi0JLRi9C50YLQuFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlRoZW1lUHJvdmlkZXIiLCJMaXN0IiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJUeXBvZ3JhcGh5IiwidXNlTWVkaWFRdWVyeSIsIkljb25CdXR0b24iLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsIk1lbnVJY29uIiwidGhlbWUiLCJ1c2VBdXRoIiwiU2lkZWJhciIsImlzVGFibGV0IiwiaXNNb2JpbGUiLCJ1c2VyIiwibG9nb3V0IiwibG9hZGluZyIsImhhc1JvbGUiLCJyb3V0ZXIiLCJwYXRobmFtZSIsIm9wZW4iLCJzZXRPcGVuIiwibWVudUl0ZW1zIiwidGV4dCIsImljb24iLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImQiLCJzeCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJ6SW5kZXgiLCJvbkNsaWNrIiwicCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJtYXhIZWlnaHQiLCJvcGFjaXR5Iiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcCIsIml0ZW0iLCJpc0FjdGl2ZSIsInB1c2giLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsIm1pbldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwiaW1nIiwic3JjIiwiYWx0IiwiYWxpZ25JdGVtcyIsInByaW1hcnkiLCJjdXJzb3IiLCJub1dyYXAiLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibmFtZSIsInN1cm5hbWUiLCJwYXRyb255bWljIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth */ \"./api/auth.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NotificationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotificationContext */ \"./context/NotificationContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NotificationContext__WEBPACK_IMPORTED_MODULE_4__]);\n_NotificationContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { showNotification } = (0,_NotificationContext__WEBPACK_IMPORTED_MODULE_4__.useNotification)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const initializeAuth = {\n                \"AuthProvider.useEffect.initializeAuth\": async ()=>{\n                    try {\n                        const currentUser = await (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n                        setUser(currentUser);\n                    } catch (err) {\n                        showNotification(err instanceof Error ? err.message : 'Ошибка инициализации авторизации', 'error');\n                        setUser(null);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"AuthProvider.useEffect.initializeAuth\"];\n            initializeAuth();\n        }\n    }[\"AuthProvider.useEffect\"], [\n        showNotification\n    ]);\n    const login = async (token)=>{\n        localStorage.setItem('jwt', token);\n        try {\n            const currentUser = await (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n            setUser(currentUser);\n        } catch (err) {\n            showNotification(err instanceof Error ? err.message : 'Ошибка после логина', 'error');\n            setUser(null);\n        }\n    };\n    const logout = ()=>{\n        localStorage.removeItem('jwt');\n        setUser(null);\n        router.push('/auth');\n    };\n    const updateUser = (updatedUser)=>{\n        setUser((prev)=>prev ? {\n                ...prev,\n                ...updatedUser\n            } : null);\n    };\n    const hasRole = (role)=>{\n        return user?.roles?.includes(role) || false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout,\n            loading,\n            updateUser,\n            hasRole\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNqQztBQUVMO0FBQ2dCO0FBV3hELE1BQU1RLDRCQUFjUCxvREFBYUEsQ0FBOEJRO0FBRXhELE1BQU1DLGVBQXdELENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ2hGLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBc0I7SUFDdEQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1hLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVXLGdCQUFnQixFQUFFLEdBQUdWLHFFQUFlQTtJQUU1Q0gsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTWM7eURBQWlCO29CQUNyQixJQUFJO3dCQUNGLE1BQU1DLGNBQWMsTUFBTWQseURBQWNBO3dCQUN4Q1EsUUFBUU07b0JBQ1YsRUFBRSxPQUFPQyxLQUFLO3dCQUNaSCxpQkFDRUcsZUFBZUMsUUFBUUQsSUFBSUUsT0FBTyxHQUFHLG9DQUNyQzt3QkFFRlQsUUFBUTtvQkFDVixTQUFVO3dCQUNSRSxXQUFXO29CQUNiO2dCQUNGOztZQUNBRztRQUNGO2lDQUFHO1FBQUNEO0tBQWlCO0lBRXJCLE1BQU1NLFFBQVEsT0FBT0M7UUFDbkJDLGFBQWFDLE9BQU8sQ0FBQyxPQUFPRjtRQUM1QixJQUFJO1lBQ0YsTUFBTUwsY0FBYyxNQUFNZCx5REFBY0E7WUFDeENRLFFBQVFNO1FBQ1YsRUFBRSxPQUFPQyxLQUFLO1lBQ1pILGlCQUNFRyxlQUFlQyxRQUFRRCxJQUFJRSxPQUFPLEdBQUcsdUJBQ3JDO1lBRUZULFFBQVE7UUFDVjtJQUNGO0lBRUEsTUFBTWMsU0FBUztRQUNiRixhQUFhRyxVQUFVLENBQUM7UUFDeEJmLFFBQVE7UUFDUkcsT0FBT2EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxhQUFhLENBQUNDO1FBQ2xCbEIsUUFBUSxDQUFDbUIsT0FBVUEsT0FBTztnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLEdBQUdELFdBQVc7WUFBQyxJQUFJO0lBQzFEO0lBRUEsTUFBTUUsVUFBVSxDQUFDQztRQUNmLE9BQU90QixNQUFNdUIsT0FBT0MsU0FBU0YsU0FBUztJQUN4QztJQUNBLHFCQUNFLDhEQUFDMUIsWUFBWTZCLFFBQVE7UUFBQ0MsT0FBTztZQUFFMUI7WUFBTVc7WUFBT0k7WUFBUWI7WUFBU2dCO1lBQVlHO1FBQVE7a0JBQzlFdEI7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNNEIsVUFBVTtJQUNyQixNQUFNQyxVQUFVdEMsaURBQVVBLENBQUNNO0lBQzNCLElBQUksQ0FBQ2dDLFNBQVM7UUFDWixNQUFNLElBQUluQixNQUFNO0lBQ2xCO0lBQ0EsT0FBT21CO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcY29udGV4dFxcQXV0aENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL2FwaS9hdXRoJzsgXHJcbmltcG9ydCB7IEZ1bGxFbXBsb3llZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tICcuL05vdGlmaWNhdGlvbkNvbnRleHQnO1xyXG5cclxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSB7XHJcbiAgdXNlcjogRnVsbEVtcGxveWVlIHwgbnVsbDtcclxuICBsb2dpbjogKHRva2VuOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgdXBkYXRlVXNlcjogKHVwZGF0ZWRVc2VyOiBQYXJ0aWFsPEZ1bGxFbXBsb3llZT4pID0+IHZvaWQ7XHJcbiAgaGFzUm9sZTogKHJvbGU6IHN0cmluZykgPT4gYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxGdWxsRW1wbG95ZWUgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHNob3dOb3RpZmljYXRpb24gfSA9IHVzZU5vdGlmaWNhdGlvbigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbGl6ZUF1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICfQntGI0LjQsdC60LAg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LDQstGC0L7RgNC40LfQsNGG0LjQuCcsXHJcbiAgICAgICAgICAnZXJyb3InXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5pdGlhbGl6ZUF1dGgoKTtcclxuICB9LCBbc2hvd05vdGlmaWNhdGlvbl0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgdG9rZW4pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICBzZXRVc2VyKGN1cnJlbnRVc2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzaG93Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAn0J7RiNC40LHQutCwINC/0L7RgdC70LUg0LvQvtCz0LjQvdCwJyxcclxuICAgICAgICAnZXJyb3InXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2p3dCcpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKCcvYXV0aCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXIgPSAodXBkYXRlZFVzZXI6IFBhcnRpYWw8RnVsbEVtcGxveWVlPikgPT4ge1xyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHByZXYgPyB7IC4uLnByZXYsIC4uLnVwZGF0ZWRVc2VyIH0gOiBudWxsKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFzUm9sZSA9IChyb2xlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiB1c2VyPy5yb2xlcz8uaW5jbHVkZXMocm9sZSkgfHwgZmFsc2U7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBsb2dvdXQsIGxvYWRpbmcsIHVwZGF0ZVVzZXIsIGhhc1JvbGUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0Q3VycmVudFVzZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VOb3RpZmljYXRpb24iLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInNob3dOb3RpZmljYXRpb24iLCJpbml0aWFsaXplQXV0aCIsImN1cnJlbnRVc2VyIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwibG9naW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVkVXNlciIsInByZXYiLCJoYXNSb2xlIiwicm9sZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImNvbnRleHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./context/NotificationContext.tsx":
/*!*****************************************!*\
  !*** ./context/NotificationContext.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationProvider: () => (/* binding */ NotificationProvider),\n/* harmony export */   useNotification: () => (/* binding */ useNotification)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Snackbar!=!@mui/material */ \"__barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/notification */ \"./utils/notification.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__]);\n_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst NotificationProvider = ({ children })=>{\n    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        open: false,\n        message: '',\n        severity: 'info'\n    });\n    const showNotification = (message, severity = 'info')=>{\n        setNotification({\n            open: true,\n            message,\n            severity\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"NotificationProvider.useEffect\": ()=>{\n            (0,_utils_notification__WEBPACK_IMPORTED_MODULE_2__.setNotificationHandler)({\n                showNotification\n            });\n        }\n    }[\"NotificationProvider.useEffect\"], []);\n    const handleClose = ()=>{\n        setNotification((prev)=>({\n                ...prev,\n                open: false\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: {\n            showNotification\n        },\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__.Snackbar, {\n                open: notification.open,\n                autoHideDuration: 6000,\n                onClose: handleClose,\n                anchorOrigin: {\n                    vertical: 'top',\n                    horizontal: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Snackbar_mui_material__WEBPACK_IMPORTED_MODULE_3__.Alert, {\n                    onClose: handleClose,\n                    severity: notification.severity,\n                    sx: {\n                        width: '100%'\n                    },\n                    children: notification.message\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\NotificationContext.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\NotificationContext.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\context\\\\NotificationContext.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\nconst useNotification = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);\n    if (!context) throw new Error('useNotification must be used within NotificationProvider');\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L05vdGlmaWNhdGlvbkNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNsQjtBQUNHO0FBWS9ELE1BQU1RLG9DQUFzQlAsb0RBQWFBLENBQXNDUTtBQUV4RSxNQUFNQyx1QkFBZ0UsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDeEYsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQW9CO1FBQ2xFVyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtJQUNkO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNGLFNBQWlCQyxXQUF1QixNQUFNO1FBQ3BFSCxnQkFBZ0I7WUFBRUMsTUFBTTtZQUFNQztZQUFTQztRQUFTO0lBQ3BEO0lBRUNaLGdEQUFTQTswQ0FBQztZQUVQRywyRUFBc0JBLENBQUM7Z0JBQUVVO1lBQWlCO1FBQzlDO3lDQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2hCTCxnQkFBZ0IsQ0FBQ00sT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFTCxNQUFNO1lBQU07SUFDdEQ7SUFFQSxxQkFDSSw4REFBQ04sb0JBQW9CWSxRQUFRO1FBQUNDLE9BQU87WUFBRUo7UUFBaUI7O1lBQ3JETjswQkFDRCw4REFBQ04sd0ZBQVFBO2dCQUNQUyxNQUFNRixhQUFhRSxJQUFJO2dCQUN2QlEsa0JBQWtCO2dCQUNsQkMsU0FBU0w7Z0JBQ1RNLGNBQWM7b0JBQUVDLFVBQVU7b0JBQU9DLFlBQVk7Z0JBQVM7MEJBRXRELDRFQUFDcEIscUZBQUtBO29CQUFDaUIsU0FBU0w7b0JBQWFGLFVBQVVKLGFBQWFJLFFBQVE7b0JBQUVXLElBQUk7d0JBQUVDLE9BQU87b0JBQU87OEJBQy9FaEIsYUFBYUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0IsRUFBRTtBQUVLLE1BQU1jLGtCQUFrQjtJQUM3QixNQUFNQyxVQUFVNUIsaURBQVVBLENBQUNNO0lBQzNCLElBQUksQ0FBQ3NCLFNBQVMsTUFBTSxJQUFJQyxNQUFNO0lBQzlCLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcY29udGV4dFxcTm90aWZpY2F0aW9uQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyLCBBbGVydCwgQWxlcnRDb2xvciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBzZXROb3RpZmljYXRpb25IYW5kbGVyIH0gZnJvbSAnLi4vdXRpbHMvbm90aWZpY2F0aW9uJztcclxuXHJcbmludGVyZmFjZSBOb3RpZmljYXRpb25TdGF0ZSB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc2V2ZXJpdHk6IEFsZXJ0Q29sb3I7XHJcbn1cclxuXHJcbmludGVyZmFjZSBOb3RpZmljYXRpb25Db250ZXh0VHlwZSB7XHJcbiAgc2hvd05vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk/OiBBbGVydENvbG9yKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxOb3RpZmljYXRpb25Db250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Qcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZTxOb3RpZmljYXRpb25TdGF0ZT4oe1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICAgIHNldmVyaXR5OiAnaW5mbycsXHJcbn0pO1xyXG5cclxuY29uc3Qgc2hvd05vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHNldmVyaXR5OiBBbGVydENvbG9yID0gJ2luZm8nKSA9PiB7XHJcbiAgICBzZXROb3RpZmljYXRpb24oeyBvcGVuOiB0cnVlLCBtZXNzYWdlLCBzZXZlcml0eSB9KTtcclxufTtcclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIHNldE5vdGlmaWNhdGlvbkhhbmRsZXIoeyBzaG93Tm90aWZpY2F0aW9uIH0pO1xyXG59LCBbXSk7XHJcblxyXG5jb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE5vdGlmaWNhdGlvbigocHJldikgPT4gKHsgLi4ucHJldiwgb3BlbjogZmFsc2UgfSkpO1xyXG59O1xyXG5cclxucmV0dXJuIChcclxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNob3dOb3RpZmljYXRpb24gfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgb3Blbj17bm90aWZpY2F0aW9uLm9wZW59XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT17bm90aWZpY2F0aW9uLnNldmVyaXR5fSBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbi5tZXNzYWdlfVxyXG4gICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgIDwvU25hY2tiYXI+XHJcbiAgICA8L05vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VOb3RpZmljYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ3VzZU5vdGlmaWNhdGlvbiBtdXN0IGJlIHVzZWQgd2l0aGluIE5vdGlmaWNhdGlvblByb3ZpZGVyJyk7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNuYWNrYmFyIiwiQWxlcnQiLCJzZXROb3RpZmljYXRpb25IYW5kbGVyIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJub3RpZmljYXRpb24iLCJzZXROb3RpZmljYXRpb24iLCJvcGVuIiwibWVzc2FnZSIsInNldmVyaXR5Iiwic2hvd05vdGlmaWNhdGlvbiIsImhhbmRsZUNsb3NlIiwicHJldiIsIlByb3ZpZGVyIiwidmFsdWUiLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInN4Iiwid2lkdGgiLCJ1c2VOb3RpZmljYXRpb24iLCJjb250ZXh0IiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/NotificationContext.tsx\n");

/***/ }),

/***/ "./lib/push.ts":
/*!*********************!*\
  !*** ./lib/push.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerServiceWorker: () => (/* binding */ registerServiceWorker),\n/* harmony export */   removeSubscriptionFromServer: () => (/* binding */ removeSubscriptionFromServer),\n/* harmony export */   sendSubscriptionToServer: () => (/* binding */ sendSubscriptionToServer),\n/* harmony export */   subscribeToPush: () => (/* binding */ subscribeToPush),\n/* harmony export */   urlBase64ToUint8Array: () => (/* binding */ urlBase64ToUint8Array)\n/* harmony export */ });\nfunction urlBase64ToUint8Array(base64String) {\n    const padding = '='.repeat((4 - base64String.length % 4) % 4);\n    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');\n    const rawData = window.atob(base64);\n    const outputArray = new Uint8Array(rawData.length);\n    for(let i = 0; i < rawData.length; ++i){\n        outputArray[i] = rawData.charCodeAt(i);\n    }\n    return outputArray;\n}\nasync function registerServiceWorker() {\n    if ('serviceWorker' in navigator && 'PushManager' in window) {\n        const registration = await navigator.serviceWorker.register('/sw.js');\n        console.log('Service Worker registered');\n        return registration;\n    }\n    throw new Error('Push notifications not supported');\n}\nasync function subscribeToPush(registration, vapidPublicKey) {\n    const subscription = await registration.pushManager.subscribe({\n        userVisibleOnly: true,\n        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)\n    });\n    return subscription;\n}\nasync function sendSubscriptionToServer(subscription, userId) {\n    const response = await fetch('http://127.0.0.1:8000/api/push-subscribe', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"jwt\": `${localStorage.getItem(\"jwt\")}`\n        },\n        body: JSON.stringify({\n            ...subscription.toJSON(),\n            userId\n        })\n    });\n    localStorage.setItem('pushEnabled', JSON.stringify(true));\n    return response.json();\n}\nasync function removeSubscriptionFromServer(subscription) {\n    await fetch('http://127.0.0.1:8000/api/push-unsubscribe', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"jwt\": `${localStorage.getItem(\"jwt\")}`\n        },\n        body: JSON.stringify({\n            endpoint: subscription.endpoint\n        })\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHVzaC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLFNBQVNBLHNCQUFzQkMsWUFBb0I7SUFDdEQsTUFBTUMsVUFBVSxJQUFJQyxNQUFNLENBQUMsQ0FBQyxJQUFJRixhQUFhRyxNQUFNLEdBQUcsS0FBSztJQUMzRCxNQUFNQyxTQUFTLENBQUNKLGVBQWVDLE9BQU0sRUFBR0ksT0FBTyxDQUFDLE1BQU0sS0FBS0EsT0FBTyxDQUFDLE1BQU07SUFDekUsTUFBTUMsVUFBVUMsT0FBT0MsSUFBSSxDQUFDSjtJQUM1QixNQUFNSyxjQUFjLElBQUlDLFdBQVdKLFFBQVFILE1BQU07SUFDakQsSUFBSyxJQUFJUSxJQUFJLEdBQUdBLElBQUlMLFFBQVFILE1BQU0sRUFBRSxFQUFFUSxFQUFHO1FBQ3JDRixXQUFXLENBQUNFLEVBQUUsR0FBR0wsUUFBUU0sVUFBVSxDQUFDRDtJQUN4QztJQUNBLE9BQU9GO0FBQ1g7QUFFTyxlQUFlSTtJQUNsQixJQUFJLG1CQUFtQkMsYUFBYSxpQkFBaUJQLFFBQVE7UUFDekQsTUFBTVEsZUFBZSxNQUFNRCxVQUFVRSxhQUFhLENBQUNDLFFBQVEsQ0FBQztRQUM1REMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT0o7SUFDWDtJQUNBLE1BQU0sSUFBSUssTUFBTTtBQUNwQjtBQUVPLGVBQWVDLGdCQUNsQk4sWUFBdUMsRUFDdkNPLGNBQXNCO0lBRXRCLE1BQU1DLGVBQWUsTUFBTVIsYUFBYVMsV0FBVyxDQUFDQyxTQUFTLENBQUM7UUFDMURDLGlCQUFpQjtRQUNqQkMsc0JBQXNCNUIsc0JBQXNCdUI7SUFDaEQ7SUFDQSxPQUFPQztBQUNYO0FBRU8sZUFBZUsseUJBQ2xCTCxZQUE4QixFQUM5Qk0sTUFBYztJQUVkLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw0Q0FBNEM7UUFDckVDLFFBQVE7UUFDUkMsU0FBUztZQUNMLGdCQUFnQjtZQUNoQixPQUFPLEdBQUdDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRO1FBQ3pDO1FBQ0ZDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFLEdBQUdmLGFBQWFnQixNQUFNLEVBQUU7WUFBRVY7UUFBTztJQUM1RDtJQUNBSyxhQUFhTSxPQUFPLENBQUMsZUFBZUgsS0FBS0MsU0FBUyxDQUFDO0lBQ25ELE9BQU9SLFNBQVNXLElBQUk7QUFDeEI7QUFFTyxlQUFlQyw2QkFBNkJuQixZQUE4QjtJQUM3RSxNQUFNUSxNQUFNLDhDQUE4QztRQUN4REMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLE9BQU8sR0FBR0MsYUFBYUMsT0FBTyxDQUFDLFFBQVE7UUFDekM7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVLLFVBQVVwQixhQUFhb0IsUUFBUTtRQUFDO0lBQ3pEO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXGxpYlxccHVzaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZzogc3RyaW5nKTogVWludDhBcnJheSB7XHJcbiAgICBjb25zdCBwYWRkaW5nID0gJz0nLnJlcGVhdCgoNCAtIGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSAlIDQpO1xyXG4gICAgY29uc3QgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICBjb25zdCByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KTtcclxuICAgIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VXb3JrZXIoKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XHJcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJiAnUHVzaE1hbmFnZXInIGluIHdpbmRvdykge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSBXb3JrZXIgcmVnaXN0ZXJlZCcpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3RyYXRpb247XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1B1c2ggbm90aWZpY2F0aW9ucyBub3Qgc3VwcG9ydGVkJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJzY3JpYmVUb1B1c2goXHJcbiAgICByZWdpc3RyYXRpb246IFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24sXHJcbiAgICB2YXBpZFB1YmxpY0tleTogc3RyaW5nXHJcbik6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvbj4ge1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxyXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkodmFwaWRQdWJsaWNLZXkpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFN1YnNjcmlwdGlvblRvU2VydmVyKFxyXG4gICAgc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uLFxyXG4gICAgdXNlcklkOiBudW1iZXJcclxuKTogUHJvbWlzZTx7IHN0YXR1czogc3RyaW5nIH0gfCB7IGVycm9yOiBzdHJpbmcgfT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9wdXNoLXN1YnNjcmliZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcImp3dFwiOiBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKX1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLnN1YnNjcmlwdGlvbi50b0pTT04oKSwgdXNlcklkIH0pLFxyXG4gICAgfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHVzaEVuYWJsZWQnLCBKU09OLnN0cmluZ2lmeSh0cnVlKSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlU3Vic2NyaXB0aW9uRnJvbVNlcnZlcihzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3B1c2gtdW5zdWJzY3JpYmUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJqd3RcIjogYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIil9YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50IH0pLFxyXG4gICAgfSk7XHJcbiAgfSJdLCJuYW1lcyI6WyJ1cmxCYXNlNjRUb1VpbnQ4QXJyYXkiLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwibGVuZ3RoIiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJ3aW5kb3ciLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJyZWdpc3RlclNlcnZpY2VXb3JrZXIiLCJuYXZpZ2F0b3IiLCJyZWdpc3RyYXRpb24iLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJzdWJzY3JpYmVUb1B1c2giLCJ2YXBpZFB1YmxpY0tleSIsInN1YnNjcmlwdGlvbiIsInB1c2hNYW5hZ2VyIiwic3Vic2NyaWJlIiwidXNlclZpc2libGVPbmx5IiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJzZW5kU3Vic2NyaXB0aW9uVG9TZXJ2ZXIiLCJ1c2VySWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvSlNPTiIsInNldEl0ZW0iLCJqc29uIiwicmVtb3ZlU3Vic2NyaXB0aW9uRnJvbVNlcnZlciIsImVuZHBvaW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/push.ts\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules\\next\\dist\\pages\\_error.js */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGX2Vycm9yJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNwYWdlcyU1Q19lcnJvci5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDeUU7QUFDekU7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLG1FQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLG1FQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLG1FQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLG1FQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxtRUFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxtRUFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLG1FQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLG1FQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9ub2RlX21vZHVsZXNcXFxcbmV4dFxcXFxkaXN0XFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvX2Vycm9yXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9fZXJyb3JcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.tsx\");\n/* harmony import */ var _components_PushSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PushSubscription */ \"./components/PushSubscription.tsx\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_AddEventFrom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/AddEventFrom.css */ \"./styles/AddEventFrom.css\");\n/* harmony import */ var _styles_AddEventFrom_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_AddEventFrom_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_MeetingRoomCardStyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/MeetingRoomCardStyles.css */ \"./styles/MeetingRoomCardStyles.css\");\n/* harmony import */ var _styles_MeetingRoomCardStyles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MeetingRoomCardStyles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ThemeProvider,useMediaQuery!=!@mui/material */ \"__barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/NotificationContext */ \"./context/NotificationContext.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__]);\n([_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst AuthenticatedApp = ({ Component, pageProps })=>{\n    const isTablet = (0,_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery)(\"(max-width:1024px)\");\n    const isMobile = (0,_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery)(\"(max-width:600px)\");\n    const { user, loading } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)({\n        \"AuthenticatedApp.useEffect\": ()=>{\n            if (!loading) {\n                const isAuthPage = router.pathname === '/auth';\n                if (!user && !isAuthPage) {\n                    router.push('/auth');\n                } else if (user && isAuthPage) {\n                    router.push('/events');\n                }\n            }\n        }\n    }[\"AuthenticatedApp.useEffect\"], [\n        user,\n        loading,\n        router\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    justifyContent: 'center',\n                    alignItems: 'center',\n                    height: '100vh'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Загрузка...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined);\n    }\n    const isAuthPage = router.pathname === '/auth';\n    if (!user && !isAuthPage || user && isAuthPage) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        children: [\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PushSubscription__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                userId: user.id\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 53,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    width: \"96%\",\n                    padding: isTablet ? isMobile ? \"2vh 2%\" : \"3vh 2%\" : \"4vh 2%\",\n                    overflow: 'hidden'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            overflowY: 'auto',\n                            marginLeft: isTablet ? isMobile ? \"0px\" : \"65px\" : \"305px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\nfunction MyApp(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_NotificationContext__WEBPACK_IMPORTED_MODULE_7__.NotificationProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthenticatedApp, {\n                ...props\n            }, void 0, false, {\n                fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\meeting_management_front\\\\pages\\\\_app.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNrQjtBQUNoQztBQUNNO0FBQ1M7QUFDZ0I7QUFDRTtBQUNPO0FBQ2xDO0FBQ0k7QUFDTjtBQUVsQyxNQUFNVSxtQkFBdUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRSxNQUFNQyxXQUFXViwrR0FBYUEsQ0FBQztJQUMvQixNQUFNVyxXQUFXWCwrR0FBYUEsQ0FBQztJQUcvQixNQUFNLEVBQUVZLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdYLDZEQUFPQTtJQUNqQyxNQUFNWSxTQUFTVCxzREFBU0E7SUFFeEJDLGlEQUFTQTtzQ0FBQztZQUNSLElBQUksQ0FBQ08sU0FBUztnQkFDWixNQUFNRSxhQUFhRCxPQUFPRSxRQUFRLEtBQUs7Z0JBRXZDLElBQUksQ0FBQ0osUUFBUSxDQUFDRyxZQUFZO29CQUV4QkQsT0FBT0csSUFBSSxDQUFDO2dCQUNkLE9BQU8sSUFBSUwsUUFBUUcsWUFBWTtvQkFFN0JELE9BQU9HLElBQUksQ0FBQztnQkFDZDtZQUNGO1FBQ0Y7cUNBQUc7UUFBQ0w7UUFBTUM7UUFBU0M7S0FBTztJQUUxQixJQUFJRCxTQUFTO1FBQ1gscUJBQ0UsOERBQUNkLDJHQUFhQTtZQUFDSyxPQUFPQSxxREFBS0E7c0JBQ3pCLDRFQUFDYztnQkFBSUMsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsZ0JBQWdCO29CQUFVQyxZQUFZO29CQUFVQyxRQUFRO2dCQUFROzBCQUM3Riw0RUFBQ0M7OEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJZDtJQUVBLE1BQU1ULGFBQWFELE9BQU9FLFFBQVEsS0FBSztJQUN2QyxJQUFJLENBQUVKLFFBQVEsQ0FBQ0csY0FBZ0JILFFBQVFHLFlBQWE7UUFDbEQsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNoQiwyR0FBYUE7UUFBQ0ssT0FBT0EscURBQUtBOztZQUN4QlEsc0JBQVEsOERBQUNkLG9FQUFnQkE7Z0JBQUMyQixRQUFRYixLQUFLYyxFQUFFOzs7Ozs7MEJBQzFDLDhEQUFDUjtnQkFBSUMsT0FBTztvQkFBRUMsU0FBUztvQkFBUU8sT0FBTztvQkFBT0MsU0FBU2xCLFdBQVdDLFdBQVcsV0FBVyxXQUFXO29CQUFVa0IsVUFBVTtnQkFBUzs7a0NBQzdILDhEQUFDaEMsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ3FCO3dCQUFJQyxPQUFPOzRCQUFFUSxPQUFPOzRCQUFRRyxXQUFXOzRCQUFRQyxZQUFZckIsV0FBV0MsV0FBVyxRQUFRLFNBQVM7d0JBQVE7a0NBQ3pHLDRFQUFDSDs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztBQUllLFNBQVN1QixNQUFNQyxLQUFlO0lBQzNDLHFCQUNFLDhEQUFDOUIsOEVBQW9CQTtrQkFDbkIsNEVBQUNGLDhEQUFZQTtzQkFDWCw0RUFBQ007Z0JBQWtCLEdBQUcwQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBS25DIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IFB1c2hTdWJzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QdXNoU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkZEV2ZW50RnJvbS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9NZWV0aW5nUm9vbUNhcmRTdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L05vdGlmaWNhdGlvbkNvbnRleHQnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBdXRoZW50aWNhdGVkQXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDoxMDI0cHgpXCIpO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6NjAwcHgpXCIpO1xyXG4gIFxyXG5cclxuICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghbG9hZGluZykge1xyXG4gICAgICBjb25zdCBpc0F1dGhQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2F1dGgnOyBcclxuXHJcbiAgICAgIGlmICghdXNlciAmJiAhaXNBdXRoUGFnZSkge1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgnKTtcclxuICAgICAgfSBlbHNlIGlmICh1c2VyICYmIGlzQXV0aFBhZ2UpIHtcclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9ldmVudHMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyLCBsb2FkaW5nLCByb3V0ZXJdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJyB9fT5cclxuICAgICAgICAgIDxzcGFuPtCX0LDQs9GA0YPQt9C60LAuLi48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0F1dGhQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2F1dGgnO1xyXG4gIGlmICgoIXVzZXIgJiYgIWlzQXV0aFBhZ2UpIHx8ICh1c2VyICYmIGlzQXV0aFBhZ2UpKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAge3VzZXIgJiYgPFB1c2hTdWJzY3JpcHRpb24gdXNlcklkPXt1c2VyLmlkfSAvPn1cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiBcIjk2JVwiLCBwYWRkaW5nOiBpc1RhYmxldCA/IGlzTW9iaWxlID8gXCIydmggMiVcIiA6IFwiM3ZoIDIlXCIgOiBcIjR2aCAyJVwiLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgb3ZlcmZsb3dZOiAnYXV0bycsIG1hcmdpbkxlZnQ6IGlzVGFibGV0ID8gaXNNb2JpbGUgPyBcIjBweFwiIDogXCI2NXB4XCIgOiBcIjMwNXB4XCIgfX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzOiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Tm90aWZpY2F0aW9uUHJvdmlkZXI+XHJcbiAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPEF1dGhlbnRpY2F0ZWRBcHAgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgIDwvTm90aWZpY2F0aW9uUHJvdmlkZXI+XHJcbiAgICBcclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlNpZGViYXIiLCJQdXNoU3Vic2NyaXB0aW9uIiwiVGhlbWVQcm92aWRlciIsInVzZU1lZGlhUXVlcnkiLCJBdXRoUHJvdmlkZXIiLCJ1c2VBdXRoIiwiTm90aWZpY2F0aW9uUHJvdmlkZXIiLCJ0aGVtZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkF1dGhlbnRpY2F0ZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJpc0F1dGhQYWdlIiwicGF0aG5hbWUiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwic3BhbiIsInVzZXJJZCIsImlkIiwid2lkdGgiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJtYXJnaW5MZWZ0IiwiTXlBcHAiLCJwcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/AddEventFrom.css":
/*!*********************************!*\
  !*** ./styles/AddEventFrom.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/MeetingRoomCardStyles.css":
/*!******************************************!*\
  !*** ./styles/MeetingRoomCardStyles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/node/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#603F99'\n        },\n        secondary: {\n            main: '#A3A3A3'\n        }\n    },\n    typography: {\n        fontFamily: 'Mont, sans-serif'\n    },\n    /*\r\n  typography: {\r\n    t1: { fontSize: '24px', fontWeight: 700, color: '#000000' },\r\n    t2: { fontSize: '18px', fontWeight: 500, color: '#333333' },\r\n    t3: { fontSize: '14px', fontWeight: 400, color: '#666666' },\r\n  },*/ components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    fontSize: \"14px\",\n                    padding: \"15px 15px\",\n                    boxShadow: 'none',\n                    borderRadius: \"0\"\n                }\n            }\n        },\n        MuiOutlinedInput: {\n            styleOverrides: {\n                root: {\n                    borderRadius: \"0\"\n                }\n            }\n        },\n        MuiTab: {\n            styleOverrides: {\n                root: {\n                    textTransform: 'none'\n                }\n            }\n        },\n        MuiTable: {\n            styleOverrides: {\n                root: {\n                    borderCollapse: 'collapse',\n                    width: '100%'\n                }\n            }\n        },\n        MuiPaper: {\n            styleOverrides: {\n                root: {\n                    boxShadow: 'none',\n                    borderRadius: \"0\"\n                }\n            }\n        },\n        MuiTableCell: {\n            styleOverrides: {\n                head: {\n                    backgroundColor: '#E3E3E3',\n                    color: '#858585',\n                    padding: '12px 16px'\n                },\n                body: {\n                    color: '#333',\n                    padding: '12px 16px',\n                    borderBottom: \"none\"\n                }\n            }\n        },\n        MuiTableRow: {\n            styleOverrides: {\n                root: {\n                    '&:nth-of-type(odd)': {\n                        backgroundColor: '#F4F4F4'\n                    }\n                }\n            }\n        },\n        MuiPopper: {\n            styleOverrides: {\n                root: {\n                    \"& .MuiPaper-root\": {\n                        border: \"2px solid #603F99\",\n                        borderRadius: \"4px\"\n                    }\n                }\n            }\n        },\n        MuiPopover: {\n            styleOverrides: {\n                paper: {\n                    border: \"2px solid #603F99\",\n                    borderRadius: \"4px\"\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1DLFFBQVFELGlFQUFXQSxDQUFDO0lBQ3hCRSxTQUFTO1FBQ1BDLFNBQVM7WUFDUEMsTUFBTTtRQUNSO1FBQ0FDLFdBQVc7WUFDVEQsTUFBTTtRQUNSO0lBQ0Y7SUFDQUUsWUFBWTtRQUNWQyxZQUFZO0lBQ2Q7SUFBRTs7Ozs7SUFLQSxHQUNGQyxZQUFZO1FBQ1ZDLFdBQVc7WUFDVEMsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKQyxVQUFVO29CQUNWQyxTQUFTO29CQUNUQyxXQUFXO29CQUNYQyxjQUFjO2dCQUNoQjtZQUNGO1FBQ0Y7UUFDQUMsa0JBQWtCO1lBQ2hCTixnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0pJLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRjtRQUNBRSxRQUFRO1lBQ05QLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSk8sZUFBZTtnQkFDakI7WUFDRjtRQUNGO1FBQ0FDLFVBQVU7WUFDUlQsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKUyxnQkFBZ0I7b0JBQ2hCQyxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBQyxVQUFVO1lBQ1JaLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkcsV0FBVztvQkFDWEMsY0FBYztnQkFDaEI7WUFDRjtRQUNGO1FBQ0FRLGNBQWM7WUFDWmIsZ0JBQWdCO2dCQUNkYyxNQUFNO29CQUNKQyxpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQYixTQUFTO2dCQUNYO2dCQUNBYyxNQUFNO29CQUNKRCxPQUFPO29CQUNQYixTQUFTO29CQUNUZSxjQUFjO2dCQUNoQjtZQUNGO1FBQ0Y7UUFDQUMsYUFBYTtZQUNYbkIsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKLHNCQUFzQjt3QkFDcEJjLGlCQUFpQjtvQkFDbkI7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FLLFdBQVc7WUFDVHBCLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSixvQkFBb0I7d0JBQ2xCb0IsUUFBUTt3QkFDUmhCLGNBQWM7b0JBQ2hCO2dCQUNGO1lBQ0Y7UUFDRjtRQUNBaUIsWUFBWTtZQUNWdEIsZ0JBQWdCO2dCQUNkdUIsT0FBTztvQkFDTEYsUUFBUTtvQkFDUmhCLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWQsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcc3R5bGVzXFx0aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyM2MDNGOTknLCBcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyNBM0EzQTMnLCBcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiAnTW9udCwgc2Fucy1zZXJpZicsXHJcbiAgfSwvKlxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIHQxOiB7IGZvbnRTaXplOiAnMjRweCcsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICcjMDAwMDAwJyB9LFxyXG4gICAgdDI6IHsgZm9udFNpemU6ICcxOHB4JywgZm9udFdlaWdodDogNTAwLCBjb2xvcjogJyMzMzMzMzMnIH0sXHJcbiAgICB0MzogeyBmb250U2l6ZTogJzE0cHgnLCBmb250V2VpZ2h0OiA0MDAsIGNvbG9yOiAnIzY2NjY2NicgfSxcclxuICB9LCovXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxNXB4IDE1cHhcIixcclxuICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aU91dGxpbmVkSW5wdXQ6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LCBcclxuICAgIE11aVRhYjoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYmxlOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpUGFwZXI6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlUYWJsZUNlbGw6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTNFM0UzJyxcclxuICAgICAgICAgIGNvbG9yOiAnIzg1ODU4NScsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTJweCAxNnB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIGNvbG9yOiAnIzMzMycsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTJweCAxNnB4JyxcclxuICAgICAgICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlUYWJsZVJvdzoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVBvcHBlcjoge1xyXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIFwiJiAuTXVpUGFwZXItcm9vdFwiOiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgIzYwM0Y5OVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVBvcG92ZXI6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICBwYXBlcjoge1xyXG4gICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjNjAzRjk5XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImZvbnRTaXplIiwicGFkZGluZyIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIk11aU91dGxpbmVkSW5wdXQiLCJNdWlUYWIiLCJ0ZXh0VHJhbnNmb3JtIiwiTXVpVGFibGUiLCJib3JkZXJDb2xsYXBzZSIsIndpZHRoIiwiTXVpUGFwZXIiLCJNdWlUYWJsZUNlbGwiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib2R5IiwiYm9yZGVyQm90dG9tIiwiTXVpVGFibGVSb3ciLCJNdWlQb3BwZXIiLCJib3JkZXIiLCJNdWlQb3BvdmVyIiwicGFwZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ "./utils/notification.ts":
/*!*******************************!*\
  !*** ./utils/notification.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notify: () => (/* binding */ notify),\n/* harmony export */   setNotificationHandler: () => (/* binding */ setNotificationHandler)\n/* harmony export */ });\nlet notificationHandler = null;\nconst setNotificationHandler = (handler)=>{\n    notificationHandler = handler;\n};\nconst notify = (message, severity = 'info')=>{\n    if (notificationHandler) {\n        notificationHandler.showNotification(message, severity);\n    } else {\n        console.error('Notification handler not set:', message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ub3RpZmljYXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxJQUFJQSxzQkFBa0Q7QUFHL0MsTUFBTUMseUJBQXlCLENBQUNDO0lBQ25DRixzQkFBc0JFO0FBQzFCLEVBQUU7QUFFSyxNQUFNQyxTQUFTLENBQUNDLFNBQWlCQyxXQUFxRCxNQUFNO0lBQy9GLElBQUlMLHFCQUFxQjtRQUN2QkEsb0JBQW9CTSxnQkFBZ0IsQ0FBQ0YsU0FBU0M7SUFDaEQsT0FBTztRQUNMRSxRQUFRQyxLQUFLLENBQUMsaUNBQWlDSjtJQUNqRDtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXHV0aWxzXFxub3RpZmljYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkhhbmRsZXIge1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgc2V2ZXJpdHk/OiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnKSA9PiB2b2lkO1xyXG59XHJcbiAgXHJcbmxldCBub3RpZmljYXRpb25IYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyIHwgbnVsbCA9IG51bGw7XHJcbiAgXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Tm90aWZpY2F0aW9uSGFuZGxlciA9IChoYW5kbGVyOiBOb3RpZmljYXRpb25IYW5kbGVyKSA9PiB7XHJcbiAgICBub3RpZmljYXRpb25IYW5kbGVyID0gaGFuZGxlcjtcclxufTtcclxuICBcclxuZXhwb3J0IGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcsIHNldmVyaXR5OiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnID0gJ2luZm8nKSA9PiB7XHJcbiAgICBpZiAobm90aWZpY2F0aW9uSGFuZGxlcikge1xyXG4gICAgICBub3RpZmljYXRpb25IYW5kbGVyLnNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgc2V2ZXJpdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTm90aWZpY2F0aW9uIGhhbmRsZXIgbm90IHNldDonLCBtZXNzYWdlKTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uSGFuZGxlciIsInNldE5vdGlmaWNhdGlvbkhhbmRsZXIiLCJoYW5kbGVyIiwibm90aWZ5IiwibWVzc2FnZSIsInNldmVyaXR5Iiwic2hvd05vdGlmaWNhdGlvbiIsImNvbnNvbGUiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/notification.ts\n");

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

/***/ "__barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js":
/*!****************************************************************************************!*\
  !*** __barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Alert: () => (/* reexport safe */ _Alert_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Snackbar: () => (/* reexport safe */ _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Alert_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert/index.js */ \"./node_modules/@mui/material/Alert/index.js\");\n/* harmony import */ var _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar/index.js */ \"./node_modules/@mui/material/Snackbar/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Alert_index_js__WEBPACK_IMPORTED_MODULE_0__, _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_Alert_index_js__WEBPACK_IMPORTED_MODULE_0__, _Snackbar_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BbGVydCxTbmFja2JhciE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQiLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0XFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXG5vZGVfbW9kdWxlc1xcQG11aVxcbWF0ZXJpYWxcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gXCIuL0FsZXJ0L2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU25hY2tiYXIgfSBmcm9tIFwiLi9TbmFja2Jhci9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Alert,Snackbar!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   IconButton: () => (/* reexport safe */ _IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   List: () => (/* reexport safe */ _List_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   ListItemButton: () => (/* reexport safe */ _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   ListItemIcon: () => (/* reexport safe */ _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   ListItemText: () => (/* reexport safe */ _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton/index.js */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _List_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List/index.js */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemButton/index.js */ \"./node_modules/@mui/material/ListItemButton/index.js\");\n/* harmony import */ var _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItemIcon/index.js */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemText/index.js */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMediaQuery/index.js */ \"./node_modules/@mui/material/useMediaQuery/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__, _List_index_js__WEBPACK_IMPORTED_MODULE_2__, _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__, _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__, _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__]);\n([_IconButton_index_js__WEBPACK_IMPORTED_MODULE_1__, _List_index_js__WEBPACK_IMPORTED_MODULE_2__, _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_3__, _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_4__, _ListItemText_index_js__WEBPACK_IMPORTED_MODULE_5__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsSWNvbkJ1dHRvbixMaXN0LExpc3RJdGVtQnV0dG9uLExpc3RJdGVtSWNvbixMaXN0SXRlbVRleHQsVGhlbWVQcm92aWRlcixUeXBvZ3JhcGh5LHVzZU1lZGlhUXVlcnkhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDYztBQUNaO0FBQ29CO0FBQ0o7QUFDQTtBQUNvRDtBQUN4RCIsInNvdXJjZXMiOlsiQzpcXHByb2plY3RcXG1lZXRpbmdfbWFuYWdlbWVudF9mcm9udFxcbm9kZV9tb2R1bGVzXFxAbXVpXFxtYXRlcmlhbFxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25CdXR0b24gfSBmcm9tIFwiLi9JY29uQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdCB9IGZyb20gXCIuL0xpc3QvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbUJ1dHRvbiB9IGZyb20gXCIuL0xpc3RJdGVtQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW1JY29uIH0gZnJvbSBcIi4vTGlzdEl0ZW1JY29uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIi4vTGlzdEl0ZW1UZXh0L2luZGV4LmpzXCJcbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQzpcXFxccHJvamVjdFxcXFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXFxcbm9kZV9tb2R1bGVzXFxcXEBtdWlcXFxcbWF0ZXJpYWxcXFxcc3R5bGVzXFxcXGluZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHkvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIi4vdXNlTWVkaWFRdWVyeS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,IconButton,List,ListItemButton,ListItemIcon,ListItemText,ThemeProvider,Typography,useMediaQuery!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js":
/*!*****************************************************************************************************!*\
  !*** __barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var C_project_meeting_management_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _useMediaQuery_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMediaQuery/index.js */ \"./node_modules/@mui/material/useMediaQuery/index.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1UaGVtZVByb3ZpZGVyLHVzZU1lZGlhUXVlcnkhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3FIIiwic291cmNlcyI6WyJDOlxccHJvamVjdFxcbWVldGluZ19tYW5hZ2VtZW50X2Zyb250XFxub2RlX21vZHVsZXNcXEBtdWlcXG1hdGVyaWFsXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQzpcXFxccHJvamVjdFxcXFxtZWV0aW5nX21hbmFnZW1lbnRfZnJvbnRcXFxcbm9kZV9tb2R1bGVzXFxcXEBtdWlcXFxcbWF0ZXJpYWxcXFxcc3R5bGVzXFxcXGluZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCIuL3VzZU1lZGlhUXVlcnkvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=ThemeProvider,useMediaQuery!=!./node_modules/@mui/material/index.js\n");

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
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();
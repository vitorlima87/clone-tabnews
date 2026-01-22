"use strict";
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
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        poassword: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    try {\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n    } finally{\n        await client.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsV0FBV1QsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDMUM7SUFDQSxNQUFNWixPQUFPYSxPQUFPO0lBRXBCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1kLE9BQU9GLEtBQUssQ0FBQ0M7UUFDbEMsT0FBT2U7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtJQUNoQixTQUFVO1FBQ1IsTUFBTWYsT0FBT2lCLEdBQUc7SUFDbEI7QUFDRjtBQUVBLGlFQUFlO0lBQ2JuQixPQUFPQTtBQUNULENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeShxdWVyeU9iamVjdCkge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BPUlQsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUixcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREIsXG4gICAgcG9hc3N3b3JkOiBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRCxcbiAgfSk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnk6IHF1ZXJ5LFxufTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19IT1NUIiwicG9ydCIsIlBPU1RHUkVTX1BPUlQiLCJ1c2VyIiwiUE9TVEdSRVNfVVNFUiIsImRhdGFiYXNlIiwiUE9TVEdSRVNfREIiLCJwb2Fzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbm5lY3QiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const updateAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    const databaseMaxConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;\n    const databaseName = process.env.POSTGRES_DB;\n    const databaseOpenedConnectionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query({\n        text: \"SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;\",\n        values: [\n            databaseName\n        ]\n    });\n    const databaseOpenedConnectionValue = databaseOpenedConnectionResult.rows[0].count;\n    response.status(200).json({\n        updated_at: updateAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue,\n                max_connections: parseInt(databaseMaxConnectionsValue),\n                opened_connections: databaseOpenedConnectionValue\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFdBQVcsSUFBSUMsT0FBT0MsV0FBVztJQUV2QyxNQUFNQyx3QkFBd0IsTUFBTVAsK0RBQWMsQ0FBQztJQUNuRCxNQUFNUyx1QkFBdUJGLHNCQUFzQkcsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsY0FBYztJQUV6RSxNQUFNQywrQkFBK0IsTUFBTVosK0RBQWMsQ0FDdkQ7SUFFRixNQUFNYSw4QkFDSkQsNkJBQTZCRixJQUFJLENBQUMsRUFBRSxDQUFDSSxlQUFlO0lBRXRELE1BQU1DLGVBQWVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUM1QyxNQUFNQyxpQ0FBaUMsTUFBTW5CLCtEQUFjLENBQUM7UUFDMURvQixNQUFNO1FBQ05DLFFBQVE7WUFBQ047U0FBYTtJQUN4QjtJQUVBLE1BQU1PLGdDQUNKSCwrQkFBK0JULElBQUksQ0FBQyxFQUFFLENBQUNhLEtBQUs7SUFFOUNwQixTQUFTRixNQUFNLENBQUMsS0FBS3VCLElBQUksQ0FBQztRQUN4QkMsWUFBWXJCO1FBQ1pzQixjQUFjO1lBQ1oxQixVQUFVO2dCQUNSMkIsU0FBU2xCO2dCQUNUSyxpQkFBaUJjLFNBQVNmO2dCQUMxQmdCLG9CQUFvQlA7WUFDdEI7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZXJCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vcGFnZXMvYXBpL3YxL3N0YXR1cy9pbmRleC5qcz84NGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhYmFzZSBmcm9tIFwiaW5mcmEvZGF0YWJhc2UuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHVwZGF0ZUF0ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIik7XG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblZhbHVlID0gZGF0YWJhc2VWZXJzaW9uUmVzdWx0LnJvd3NbMF0uc2VydmVyX3ZlcnNpb247XG5cbiAgY29uc3QgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFxuICAgIFwiU0hPVyBtYXhfY29ubmVjdGlvbnM7XCIsXG4gICk7XG4gIGNvbnN0IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSA9XG4gICAgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLm1heF9jb25uZWN0aW9ucztcblxuICBjb25zdCBkYXRhYmFzZU5hbWUgPSBwcm9jZXNzLmVudi5QT1NUR1JFU19EQjtcbiAgY29uc3QgZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uUmVzdWx0ID0gYXdhaXQgZGF0YWJhc2UucXVlcnkoe1xuICAgIHRleHQ6IFwiU0VMRUNUIGNvdW50KCopOjppbnQgRlJPTSBwZ19zdGF0X2FjdGl2aXR5IFdIRVJFIGRhdG5hbWUgPSAkMTtcIixcbiAgICB2YWx1ZXM6IFtkYXRhYmFzZU5hbWVdLFxuICB9KTtcblxuICBjb25zdCBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25WYWx1ZSA9XG4gICAgZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uUmVzdWx0LnJvd3NbMF0uY291bnQ7XG5cbiAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgdXBkYXRlZF9hdDogdXBkYXRlQXQsXG4gICAgZGVwZW5kZW5jaWVzOiB7XG4gICAgICBkYXRhYmFzZToge1xuICAgICAgICB2ZXJzaW9uOiBkYXRhYmFzZVZlcnNpb25WYWx1ZSxcbiAgICAgICAgbWF4X2Nvbm5lY3Rpb25zOiBwYXJzZUludChkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUpLFxuICAgICAgICBvcGVuZWRfY29ubmVjdGlvbnM6IGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvblZhbHVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzO1xuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwic3RhdHVzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwidXBkYXRlQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkYXRhYmFzZVZlcnNpb25SZXN1bHQiLCJxdWVyeSIsImRhdGFiYXNlVmVyc2lvblZhbHVlIiwicm93cyIsInNlcnZlcl92ZXJzaW9uIiwiZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdCIsImRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSIsIm1heF9jb25uZWN0aW9ucyIsImRhdGFiYXNlTmFtZSIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19EQiIsImRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvblJlc3VsdCIsInRleHQiLCJ2YWx1ZXMiLCJkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25WYWx1ZSIsImNvdW50IiwianNvbiIsInVwZGF0ZWRfYXQiLCJkZXBlbmRlbmNpZXMiLCJ2ZXJzaW9uIiwicGFyc2VJbnQiLCJvcGVuZWRfY29ubmVjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();
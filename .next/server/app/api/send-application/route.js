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
exports.id = "app/api/send-application/route";
exports.ids = ["app/api/send-application/route"];
exports.modules = {

/***/ "(rsc)/./app/api/send-application/route.ts":
/*!*******************************************!*\
  !*** ./app/api/send-application/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        const firstName = formData.get(\"firstName\");\n        const lastName = formData.get(\"lastName\");\n        const email = formData.get(\"email\");\n        const phoneNumber = formData.get(\"phoneNumber\");\n        const applyFor = formData.get(\"applyFor\");\n        const yearsOfExperience = formData.get(\"yearsOfExperience\");\n        const currentCTC = formData.get(\"currentCTC\");\n        const expectedCTC = formData.get(\"expectedCTC\");\n        const currentCompany = formData.get(\"currentCompany\");\n        const noticePeriod = formData.get(\"noticePeriod\");\n        const additionalMessage = formData.get(\"additionalMessage\");\n        const resume = formData.get(\"resume\");\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        const textMessage = `\nNew Job Application:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nApplied For: ${applyFor}\nExperience: ${yearsOfExperience} years\nCurrent CTC: ${currentCTC}\nExpected CTC: ${expectedCTC}\nCurrent Company: ${currentCompany}\nNotice Period: ${noticePeriod}\n\nAdditional Message:\n${additionalMessage}\n`;\n        let attachments = [];\n        if (resume) {\n            const bytes = await resume.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            attachments.push({\n                filename: resume.name,\n                content: buffer\n            });\n        }\n        await transporter.sendMail({\n            from: process.env.EMAIL_USER,\n            to: process.env.RECEIVER_EMAIL,\n            subject: `New Job Application - ${applyFor}`,\n            text: textMessage,\n            attachments\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to send email\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtYXBwbGljYXRpb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQ25CO0FBRTdCLGVBQWVFLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7UUFFbkMsTUFBTUMsWUFBWUQsU0FBU0UsR0FBRyxDQUFDO1FBQy9CLE1BQU1DLFdBQVdILFNBQVNFLEdBQUcsQ0FBQztRQUM5QixNQUFNRSxRQUFRSixTQUFTRSxHQUFHLENBQUM7UUFDM0IsTUFBTUcsY0FBY0wsU0FBU0UsR0FBRyxDQUFDO1FBQ2pDLE1BQU1JLFdBQVdOLFNBQVNFLEdBQUcsQ0FBQztRQUM5QixNQUFNSyxvQkFBb0JQLFNBQVNFLEdBQUcsQ0FBQztRQUN2QyxNQUFNTSxhQUFhUixTQUFTRSxHQUFHLENBQUM7UUFDaEMsTUFBTU8sY0FBY1QsU0FBU0UsR0FBRyxDQUFDO1FBQ2pDLE1BQU1RLGlCQUFpQlYsU0FBU0UsR0FBRyxDQUFDO1FBQ3BDLE1BQU1TLGVBQWVYLFNBQVNFLEdBQUcsQ0FBQztRQUNsQyxNQUFNVSxvQkFBb0JaLFNBQVNFLEdBQUcsQ0FBQztRQUN2QyxNQUFNVyxTQUFTYixTQUFTRSxHQUFHLENBQUM7UUFFNUIsTUFBTVksY0FBY2pCLHVEQUEwQixDQUFDO1lBQzdDbUIsU0FBUztZQUNUQyxNQUFNO2dCQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7WUFDOUI7UUFDRjtRQUVBLE1BQU1DLGNBQWMsQ0FBQzs7O01BR25CLEVBQUV2QixVQUFVLENBQUMsRUFBRUUsU0FBUztPQUN2QixFQUFFQyxNQUFNO09BQ1IsRUFBRUMsWUFBWTthQUNSLEVBQUVDLFNBQVM7WUFDWixFQUFFQyxrQkFBa0I7YUFDbkIsRUFBRUMsV0FBVztjQUNaLEVBQUVDLFlBQVk7aUJBQ1gsRUFBRUMsZUFBZTtlQUNuQixFQUFFQyxhQUFhOzs7QUFHOUIsRUFBRUMsa0JBQWtCO0FBQ3BCLENBQUM7UUFFRyxJQUFJYSxjQUFxQixFQUFFO1FBQzNCLElBQUlaLFFBQVE7WUFDVixNQUFNYSxRQUFRLE1BQU1iLE9BQU9jLFdBQVc7WUFDdEMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSjtZQUMzQkQsWUFBWU0sSUFBSSxDQUFDO2dCQUNmQyxVQUFVbkIsT0FBT29CLElBQUk7Z0JBQ3JCQyxTQUFTTjtZQUNYO1FBQ0Y7UUFFQSxNQUFNZCxZQUFZcUIsUUFBUSxDQUFDO1lBQ3pCTCxNQUFNWCxRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJlLElBQUlqQixRQUFRQyxHQUFHLENBQUNpQixjQUFjO1lBQzlCQyxTQUFTLENBQUMsc0JBQXNCLEVBQUVoQyxVQUFVO1lBQzVDaUMsTUFBTWY7WUFDTkM7UUFDRjtRQUVBLE9BQU83QixxREFBWUEsQ0FBQzRDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtRQUN4QixPQUFPOUMscURBQVlBLENBQUM0QyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF1QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM1RTtBQUNGIiwic291cmNlcyI6WyJEOlxcU25hcHdpc2UgU29sdXRpb25zXFxQcm9qZWN0IDNcXGFwcFxcYXBpXFxzZW5kLWFwcGxpY2F0aW9uXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKVxyXG5cclxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGZvcm1EYXRhLmdldChcImZpcnN0TmFtZVwiKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGxhc3ROYW1lID0gZm9ybURhdGEuZ2V0KFwibGFzdE5hbWVcIikgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBmb3JtRGF0YS5nZXQoXCJwaG9uZU51bWJlclwiKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGFwcGx5Rm9yID0gZm9ybURhdGEuZ2V0KFwiYXBwbHlGb3JcIikgYXMgc3RyaW5nXHJcbiAgICBjb25zdCB5ZWFyc09mRXhwZXJpZW5jZSA9IGZvcm1EYXRhLmdldChcInllYXJzT2ZFeHBlcmllbmNlXCIpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgY3VycmVudENUQyA9IGZvcm1EYXRhLmdldChcImN1cnJlbnRDVENcIikgYXMgc3RyaW5nXHJcbiAgICBjb25zdCBleHBlY3RlZENUQyA9IGZvcm1EYXRhLmdldChcImV4cGVjdGVkQ1RDXCIpIGFzIHN0cmluZ1xyXG4gICAgY29uc3QgY3VycmVudENvbXBhbnkgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50Q29tcGFueVwiKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IG5vdGljZVBlcmlvZCA9IGZvcm1EYXRhLmdldChcIm5vdGljZVBlcmlvZFwiKSBhcyBzdHJpbmdcclxuICAgIGNvbnN0IGFkZGl0aW9uYWxNZXNzYWdlID0gZm9ybURhdGEuZ2V0KFwiYWRkaXRpb25hbE1lc3NhZ2VcIikgYXMgc3RyaW5nXHJcbiAgICBjb25zdCByZXN1bWUgPSBmb3JtRGF0YS5nZXQoXCJyZXN1bWVcIikgYXMgRmlsZSB8IG51bGxcclxuXHJcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgICAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gICAgICBhdXRoOiB7XHJcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUixcclxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB0ZXh0TWVzc2FnZSA9IGBcclxuTmV3IEpvYiBBcHBsaWNhdGlvbjpcclxuXHJcbk5hbWU6ICR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfVxyXG5FbWFpbDogJHtlbWFpbH1cclxuUGhvbmU6ICR7cGhvbmVOdW1iZXJ9XHJcbkFwcGxpZWQgRm9yOiAke2FwcGx5Rm9yfVxyXG5FeHBlcmllbmNlOiAke3llYXJzT2ZFeHBlcmllbmNlfSB5ZWFyc1xyXG5DdXJyZW50IENUQzogJHtjdXJyZW50Q1RDfVxyXG5FeHBlY3RlZCBDVEM6ICR7ZXhwZWN0ZWRDVEN9XHJcbkN1cnJlbnQgQ29tcGFueTogJHtjdXJyZW50Q29tcGFueX1cclxuTm90aWNlIFBlcmlvZDogJHtub3RpY2VQZXJpb2R9XHJcblxyXG5BZGRpdGlvbmFsIE1lc3NhZ2U6XHJcbiR7YWRkaXRpb25hbE1lc3NhZ2V9XHJcbmBcclxuXHJcbiAgICBsZXQgYXR0YWNobWVudHM6IGFueVtdID0gW11cclxuICAgIGlmIChyZXN1bWUpIHtcclxuICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZXN1bWUuYXJyYXlCdWZmZXIoKVxyXG4gICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcylcclxuICAgICAgYXR0YWNobWVudHMucHVzaCh7XHJcbiAgICAgICAgZmlsZW5hbWU6IHJlc3VtZS5uYW1lLFxyXG4gICAgICAgIGNvbnRlbnQ6IGJ1ZmZlcixcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XHJcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5SRUNFSVZFUl9FTUFJTCxcclxuICAgICAgc3ViamVjdDogYE5ldyBKb2IgQXBwbGljYXRpb24gLSAke2FwcGx5Rm9yfWAsXHJcbiAgICAgIHRleHQ6IHRleHRNZXNzYWdlLFxyXG4gICAgICBhdHRhY2htZW50cyxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIHNlbmQgZW1haWxcIiB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJub2RlbWFpbGVyIiwiUE9TVCIsInJlcSIsImZvcm1EYXRhIiwiZmlyc3ROYW1lIiwiZ2V0IiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwiYXBwbHlGb3IiLCJ5ZWFyc09mRXhwZXJpZW5jZSIsImN1cnJlbnRDVEMiLCJleHBlY3RlZENUQyIsImN1cnJlbnRDb21wYW55Iiwibm90aWNlUGVyaW9kIiwiYWRkaXRpb25hbE1lc3NhZ2UiLCJyZXN1bWUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ0ZXh0TWVzc2FnZSIsImF0dGFjaG1lbnRzIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJwdXNoIiwiZmlsZW5hbWUiLCJuYW1lIiwiY29udGVudCIsInNlbmRNYWlsIiwidG8iLCJSRUNFSVZFUl9FTUFJTCIsInN1YmplY3QiLCJ0ZXh0IiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-application/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-application%2Froute&page=%2Fapi%2Fsend-application%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-application%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-application%2Froute&page=%2Fapi%2Fsend-application%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-application%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Snapwise_Solutions_Project_3_app_api_send_application_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-application/route.ts */ \"(rsc)/./app/api/send-application/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-application/route\",\n        pathname: \"/api/send-application\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-application/route\"\n    },\n    resolvedPagePath: \"D:\\\\Snapwise Solutions\\\\Project 3\\\\app\\\\api\\\\send-application\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Snapwise_Solutions_Project_3_app_api_send_application_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWFwcGxpY2F0aW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWFwcGxpY2F0aW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1hcHBsaWNhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDU25hcHdpc2UlMjBTb2x1dGlvbnMlNUNQcm9qZWN0JTIwMyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1NuYXB3aXNlJTIwU29sdXRpb25zJTVDUHJvamVjdCUyMDMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3VCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxTbmFwd2lzZSBTb2x1dGlvbnNcXFxcUHJvamVjdCAzXFxcXGFwcFxcXFxhcGlcXFxcc2VuZC1hcHBsaWNhdGlvblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC1hcHBsaWNhdGlvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmQtYXBwbGljYXRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQtYXBwbGljYXRpb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxTbmFwd2lzZSBTb2x1dGlvbnNcXFxcUHJvamVjdCAzXFxcXGFwcFxcXFxhcGlcXFxcc2VuZC1hcHBsaWNhdGlvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-application%2Froute&page=%2Fapi%2Fsend-application%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-application%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-application%2Froute&page=%2Fapi%2Fsend-application%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-application%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
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
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "(rsc)/./app/api/contact/route.ts":
/*!**********************************!*\
  !*** ./app/api/contact/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(req) {\n    try {\n        // FormData parse karo (because file upload che)\n        const formData = await req.formData();\n        const name = formData.get(\"name\");\n        const email = formData.get(\"email\");\n        const phoneNumber = formData.get(\"phoneNumber\");\n        const projectDetails = formData.get(\"projectDetails\");\n        const hireDeveloper = formData.get(\"hireDeveloper\");\n        const resumeFile = formData.get(\"resume\");\n        // Resume buffer banavvo\n        let attachments = [];\n        if (resumeFile) {\n            const buffer = Buffer.from(await resumeFile.arrayBuffer());\n            attachments.push({\n                filename: resumeFile.name,\n                content: buffer,\n                contentType: resumeFile.type\n            });\n        }\n        // Nodemailer Transport\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        // Mail options\n        const mailOptions = {\n            from: process.env.EMAIL_USER,\n            to: process.env.RECEIVER_EMAIL,\n            subject: `New Contact Form Submission from ${name}`,\n            html: `\n        <h2>New Contact Request</h2>\n        <p><strong>Name:</strong> ${name}</p>\n        <p><strong>Email:</strong> ${email}</p>\n        <p><strong>Phone:</strong> ${phoneNumber}</p>\n        <p><strong>Project Details:</strong> ${projectDetails}</p>\n        <p><strong>Hire Developer:</strong> ${hireDeveloper || \"Not Selected\"}</p>\n      `,\n            attachments\n        };\n        await transporter.sendMail(mailOptions);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Email with resume sent successfully!\"\n        });\n    } catch (error) {\n        console.error(\"Email sending error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Failed to send email.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ3BCO0FBRTdCLGVBQWVFLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixnREFBZ0Q7UUFDaEQsTUFBTUMsV0FBVyxNQUFNRCxJQUFJQyxRQUFRO1FBRW5DLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztRQUMxQixNQUFNQyxRQUFRSCxTQUFTRSxHQUFHLENBQUM7UUFDM0IsTUFBTUUsY0FBY0osU0FBU0UsR0FBRyxDQUFDO1FBQ2pDLE1BQU1HLGlCQUFpQkwsU0FBU0UsR0FBRyxDQUFDO1FBQ3BDLE1BQU1JLGdCQUFnQk4sU0FBU0UsR0FBRyxDQUFDO1FBRW5DLE1BQU1LLGFBQWFQLFNBQVNFLEdBQUcsQ0FBQztRQUVoQyx3QkFBd0I7UUFDeEIsSUFBSU0sY0FBcUIsRUFBRTtRQUMzQixJQUFJRCxZQUFZO1lBQ2QsTUFBTUUsU0FBU0MsT0FBT0MsSUFBSSxDQUFDLE1BQU1KLFdBQVdLLFdBQVc7WUFDdkRKLFlBQVlLLElBQUksQ0FBQztnQkFDZkMsVUFBVVAsV0FBV04sSUFBSTtnQkFDekJjLFNBQVNOO2dCQUNUTyxhQUFhVCxXQUFXVSxJQUFJO1lBQzlCO1FBQ0Y7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTUMsY0FBY3JCLHVEQUEwQixDQUFDO1lBQzdDdUIsU0FBUztZQUNUQyxNQUFNO2dCQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7WUFDOUI7UUFDRjtRQUVBLGVBQWU7UUFDZixNQUFNQyxjQUFjO1lBQ2xCakIsTUFBTVksUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1lBQzVCSSxJQUFJTixRQUFRQyxHQUFHLENBQUNNLGNBQWM7WUFDOUJDLFNBQVMsQ0FBQyxpQ0FBaUMsRUFBRTlCLE1BQU07WUFDbkQrQixNQUFNLENBQUM7O2tDQUVxQixFQUFFL0IsS0FBSzttQ0FDTixFQUFFRSxNQUFNO21DQUNSLEVBQUVDLFlBQVk7NkNBQ0osRUFBRUMsZUFBZTs0Q0FDbEIsRUFBRUMsaUJBQWlCLGVBQWU7TUFDeEUsQ0FBQztZQUNERTtRQUNGO1FBRUEsTUFBTVUsWUFBWWUsUUFBUSxDQUFDTDtRQUUzQixPQUFPaEMscURBQVlBLENBQUNzQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFNQyxTQUFTO1FBQXVDO0lBQzVGLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPekMscURBQVlBLENBQUNzQyxJQUFJLENBQ3RCO1lBQUVDLFNBQVM7WUFBT0MsU0FBUztRQUF3QixHQUNuRDtZQUFFRyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiRDpcXFNuYXB3aXNlIFNvbHV0aW9uc1xcUHJvamVjdCAzXFxhcHBcXGFwaVxcY29udGFjdFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBGb3JtRGF0YSBwYXJzZSBrYXJvIChiZWNhdXNlIGZpbGUgdXBsb2FkIGNoZSlcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGZvcm1EYXRhLmdldChcInBob25lTnVtYmVyXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZm9ybURhdGEuZ2V0KFwicHJvamVjdERldGFpbHNcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgaGlyZURldmVsb3BlciA9IGZvcm1EYXRhLmdldChcImhpcmVEZXZlbG9wZXJcIikgYXMgc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0IHJlc3VtZUZpbGUgPSBmb3JtRGF0YS5nZXQoXCJyZXN1bWVcIikgYXMgRmlsZSB8IG51bGw7XHJcblxyXG4gICAgLy8gUmVzdW1lIGJ1ZmZlciBiYW5hdnZvXHJcbiAgICBsZXQgYXR0YWNobWVudHM6IGFueVtdID0gW107XHJcbiAgICBpZiAocmVzdW1lRmlsZSkge1xyXG4gICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCByZXN1bWVGaWxlLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBhdHRhY2htZW50cy5wdXNoKHtcclxuICAgICAgICBmaWxlbmFtZTogcmVzdW1lRmlsZS5uYW1lLFxyXG4gICAgICAgIGNvbnRlbnQ6IGJ1ZmZlcixcclxuICAgICAgICBjb250ZW50VHlwZTogcmVzdW1lRmlsZS50eXBlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb2RlbWFpbGVyIFRyYW5zcG9ydFxyXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgIHNlcnZpY2U6IFwiZ21haWxcIixcclxuICAgICAgYXV0aDoge1xyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1haWwgb3B0aW9uc1xyXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5SRUNFSVZFUl9FTUFJTCxcclxuICAgICAgc3ViamVjdDogYE5ldyBDb250YWN0IEZvcm0gU3VibWlzc2lvbiBmcm9tICR7bmFtZX1gLFxyXG4gICAgICBodG1sOiBgXHJcbiAgICAgICAgPGgyPk5ldyBDb250YWN0IFJlcXVlc3Q8L2gyPlxyXG4gICAgICAgIDxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiAke2VtYWlsfTwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPlBob25lOjwvc3Ryb25nPiAke3Bob25lTnVtYmVyfTwvcD5cclxuICAgICAgICA8cD48c3Ryb25nPlByb2plY3QgRGV0YWlsczo8L3N0cm9uZz4gJHtwcm9qZWN0RGV0YWlsc308L3A+XHJcbiAgICAgICAgPHA+PHN0cm9uZz5IaXJlIERldmVsb3Blcjo8L3N0cm9uZz4gJHtoaXJlRGV2ZWxvcGVyIHx8IFwiTm90IFNlbGVjdGVkXCJ9PC9wPlxyXG4gICAgICBgLFxyXG4gICAgICBhdHRhY2htZW50cywgLy8g8J+RiCByZXN1bWUgYWRkIHRoYXkgY2hlXHJcbiAgICB9O1xyXG5cclxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkVtYWlsIHdpdGggcmVzdW1lIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRW1haWwgc2VuZGluZyBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBzZW5kIGVtYWlsLlwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJQT1NUIiwicmVxIiwiZm9ybURhdGEiLCJuYW1lIiwiZ2V0IiwiZW1haWwiLCJwaG9uZU51bWJlciIsInByb2plY3REZXRhaWxzIiwiaGlyZURldmVsb3BlciIsInJlc3VtZUZpbGUiLCJhdHRhY2htZW50cyIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJhcnJheUJ1ZmZlciIsInB1c2giLCJmaWxlbmFtZSIsImNvbnRlbnQiLCJjb250ZW50VHlwZSIsInR5cGUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJtYWlsT3B0aW9ucyIsInRvIiwiUkVDRUlWRVJfRU1BSUwiLCJzdWJqZWN0IiwiaHRtbCIsInNlbmRNYWlsIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Snapwise_Solutions_Project_3_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.ts */ \"(rsc)/./app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"D:\\\\Snapwise Solutions\\\\Project 3\\\\app\\\\api\\\\contact\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Snapwise_Solutions_Project_3_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDU25hcHdpc2UlMjBTb2x1dGlvbnMlNUNQcm9qZWN0JTIwMyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1NuYXB3aXNlJTIwU29sdXRpb25zJTVDUHJvamVjdCUyMDMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2M7QUFDM0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXFNuYXB3aXNlIFNvbHV0aW9uc1xcXFxQcm9qZWN0IDNcXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb250YWN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udGFjdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFNuYXB3aXNlIFNvbHV0aW9uc1xcXFxQcm9qZWN0IDNcXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=D%3A%5CSnapwise%20Solutions%5CProject%203%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CSnapwise%20Solutions%5CProject%203&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
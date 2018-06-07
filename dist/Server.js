"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
// var phan: Person = new Person("Nghiem", "Nghiem", 25);
// console.log(phan);
var port = process.env.PORT || 3000;
App_1.default.listen(port, function () {
    console.log("Server started at port " + port);
});
//# sourceMappingURL=Server.js.map
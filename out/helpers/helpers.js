"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCommandHistory = exports.printCurrentValue = void 0;
const __1 = require("..");
const history_1 = __importDefault(require("../data/history"));
function printCurrentValue() {
    console.log("\n=================================");
    console.log("VALOR ATUAL: " + __1.value);
    console.log("=================================\n");
}
exports.printCurrentValue = printCurrentValue;
function printCommandHistory() {
    console.log("=================================");
    console.log("HISTÓRICO:");
    console.log(history_1.default);
    console.log("=================================\n");
}
exports.printCommandHistory = printCommandHistory;

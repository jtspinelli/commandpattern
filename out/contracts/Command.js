"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const history_1 = __importDefault(require("../data/history"));
class Command {
    constructor() {
        this.executed = false;
        this.undone = false;
        history_1.default.push(this);
    }
    execute(value) {
        throw new Error("Method not implemented.");
    }
    undo() {
        throw new Error("Method not implemented.");
    }
    log(message) {
        console.log("[COMMAND LOG]: " + message);
    }
}
exports.default = Command;

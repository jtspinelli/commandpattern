"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandNotYetExecutedError extends Error {
    constructor() {
        super();
        this.message = "Command not yet executed!";
    }
}
exports.default = CommandNotYetExecutedError;

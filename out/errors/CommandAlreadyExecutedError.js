"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandAlreadyExecutedError extends Error {
    constructor() {
        super();
        this.message = "Command already executed!";
    }
}
exports.default = CommandAlreadyExecutedError;

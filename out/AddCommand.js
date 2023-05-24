"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = __importDefault(require("./Calculator"));
const Command_1 = __importDefault(require("./Command"));
const CommandAlreadyExecutedError_1 = __importDefault(require("./errors/CommandAlreadyExecutedError"));
const CommandNotYetExecutedError_1 = __importDefault(require("./errors/CommandNotYetExecutedError"));
class AddCommand extends Command_1.default {
    constructor(valueToAdd) {
        super();
        this.valueToAdd = valueToAdd;
    }
    execute(currentValue) {
        if (this.executed)
            throw new CommandAlreadyExecutedError_1.default();
        this.executed = true;
        this.currentValue = currentValue;
        const result = Calculator_1.default.add(currentValue, this.valueToAdd);
        this.log(`Resultado da soma: ${result}`);
        return result;
    }
    undo() {
        if (!this.currentValue)
            throw new CommandNotYetExecutedError_1.default();
        this.undone = true;
        this.log(`Comando de Soma Revertido. Valor retornado para: ${this.currentValue}`);
        return this.currentValue;
    }
}
exports.default = AddCommand;

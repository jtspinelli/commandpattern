"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = __importDefault(require("./Calculator"));
const Command_1 = __importDefault(require("./Command"));
const CommandNotYetExecutedError_1 = __importDefault(require("./errors/CommandNotYetExecutedError"));
class SubtractCommand extends Command_1.default {
    constructor(valueToSubtract) {
        super();
        this.valueToSubtract = valueToSubtract;
    }
    execute(currentValue) {
        this.executed = true;
        this.currentValue = currentValue;
        const result = Calculator_1.default.subtract(currentValue, this.valueToSubtract);
        this.log(`Resultado da subtração: ${result}`);
        return result;
    }
    undo() {
        if (!this.currentValue)
            throw new CommandNotYetExecutedError_1.default();
        this.undone = true;
        this.log(`Comando de Subtração Revertido. Valor retornado para: ${this.currentValue}`);
        return this.currentValue;
    }
}
exports.default = SubtractCommand;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.value = void 0;
const AddCommand_1 = __importDefault(require("./commands/AddCommand"));
const SubtractCommand_1 = __importDefault(require("./commands/SubtractCommand"));
const helpers_1 = require("./helpers/helpers");
exports.value = 10;
console.log("=================================");
console.log("VALOR INICIAL: " + exports.value);
console.log("=================================\n");
// Cria um comando de Soma
const add = new AddCommand_1.default(5);
// Cria um comando de Soma
const add2 = new AddCommand_1.default(6);
// Cria um comando de Substração
const subtract = new SubtractCommand_1.default(2);
// Lista os histórico de comandos
(0, helpers_1.printCommandHistory)();
// O Comando de soma é executado posteriormente
exports.value = add.execute(exports.value);
// É possível reverter o que o comando implementou
exports.value = add.undo();
(0, helpers_1.printCurrentValue)();
// O Comando de subtração é executado posteriormente
exports.value = subtract.execute(exports.value);
// É possível reverter o que o comando implementou
exports.value = subtract.undo();
(0, helpers_1.printCurrentValue)();
// O Comando de soma é executado posteriormente
exports.value = add2.execute(exports.value);
(0, helpers_1.printCurrentValue)();
(0, helpers_1.printCommandHistory)();
try {
    add.execute(exports.value);
}
catch (error) {
    console.log("ERRO: " + error.message);
}

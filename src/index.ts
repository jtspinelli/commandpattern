import AddCommand from "./commands/AddCommand";
import SubtractCommand from "./commands/SubtractCommand";
import { printCommandHistory, printCurrentValue } from "./helpers/helpers";

export let value = 10;
console.log("=================================");
console.log("VALOR INICIAL: " + value);
console.log("=================================\n");


// Cria um comando de Soma
const add = new AddCommand(5);

// Cria um comando de Soma
const add2 = new AddCommand(6);

// Cria um comando de Substração
const subtract = new SubtractCommand(2);

// Lista os histórico de comandos
printCommandHistory();




// O Comando de soma é executado posteriormente
value = add.execute(value);

// É possível reverter o que o comando implementou
value = add.undo();

printCurrentValue();



// O Comando de subtração é executado posteriormente
value = subtract.execute(value);

// É possível reverter o que o comando implementou
value = subtract.undo();

printCurrentValue();



// O Comando de soma é executado posteriormente
value = add2.execute(value);

printCurrentValue();




printCommandHistory();


try {
	add.execute(value);	
}
catch (error: any) {
	console.log("ERRO: " + error.message)
}
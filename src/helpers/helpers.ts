import { value } from "..";
import history from '../data/history';

export function printCurrentValue() {
	console.log("\n=================================");
	console.log("VALOR ATUAL: " + value);
	console.log("=================================\n");
}

export function printCommandHistory() {
	console.log("=================================");
	console.log("HISTÓRICO:");
	console.log(history);
	console.log("=================================\n");
}
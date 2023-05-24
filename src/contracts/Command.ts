import ICommand from "./ICommand";
import history from "../data/history";

abstract class Command implements ICommand {
	public executed: boolean = false;
	public undone: boolean = false;

	constructor() {
		history.push(this);
	}
	
	execute(value: number): void {		
		throw new Error("Method not implemented.");
	}
	
	undo(): void {
		throw new Error("Method not implemented.");
	}

	log(message: string) {
		console.log("[COMMAND LOG]: " + message);
	}
}

export default Command;
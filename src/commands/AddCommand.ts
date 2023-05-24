import CalculatorService from "../services/CalculatorService";
import Command from "../contracts/Command";
import CommandAlreadyExecutedError from "../errors/CommandAlreadyExecutedError";
import CommandNotYetExecutedError from "../errors/CommandNotYetExecutedError";

class AddCommand extends Command {
	private currentValue: number | undefined;
	
	constructor(private valueToAdd: number) {
		super();
	}

	execute(currentValue: number): number {
		if(this.executed) throw new CommandAlreadyExecutedError();

		this.executed = true;
		this.currentValue = currentValue;
		const result = CalculatorService.add(currentValue, this.valueToAdd);

		this.log(`Resultado da soma: ${result}`);

		return result;
	}

	undo(): number {
		if(!this.currentValue) throw new CommandNotYetExecutedError()
		this.undone = true;

		this.log(`Comando de Soma Revertido. Valor retornado para: ${this.currentValue}`);

		return this.currentValue;
	}
}

export default AddCommand;
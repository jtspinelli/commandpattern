import CalculatorService from "../services/CalculatorService";
import Command from "../contracts/Command";
import CommandNotYetExecutedError from "../errors/CommandNotYetExecutedError";

class SubtractCommand extends Command {
	private currentValue: number | undefined;
	
	constructor(private valueToSubtract: number) {
		super();
	}

	execute(currentValue: number): number {
		this.executed = true;
		this.currentValue = currentValue;
		const result = CalculatorService.subtract(currentValue, this.valueToSubtract);

		this.log(`Resultado da subtração: ${result}`);

		return result;
	}

	undo(): number {
		if(!this.currentValue) throw new CommandNotYetExecutedError()
		this.undone = true;

		this.log(`Comando de Subtração Revertido. Valor retornado para: ${this.currentValue}`);

		return this.currentValue;
	}
}

export default SubtractCommand;
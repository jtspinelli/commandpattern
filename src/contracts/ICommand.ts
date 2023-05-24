interface ICommand {
	execute(value: number): void;
	undo(): void;
	log(message: string): void;
}

export default ICommand;
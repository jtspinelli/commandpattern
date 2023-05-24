class CommandAlreadyExecutedError extends Error {
	constructor() {
		super();
		this.message = "Command already executed!"
	}
}

export default CommandAlreadyExecutedError;
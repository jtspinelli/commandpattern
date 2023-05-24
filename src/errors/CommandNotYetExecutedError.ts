class CommandNotYetExecutedError extends Error {
	constructor() {
		super();
		this.message = "Command not yet executed!"
	}
}

export default CommandNotYetExecutedError;
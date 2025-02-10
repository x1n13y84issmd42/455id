import { BaseError } from "@x1n13y84issmd42/455fw";

export class InvalidPasswordError extends BaseError {
	public statusCode: number = 401;

	constructor() {
		super('Invalid password.')
	}
}

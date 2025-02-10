import { BaseError } from '@x1n13y84issmd42/455fw';

export class UserNotFoundError extends BaseError {
	public statusCode: number = 404;

	constructor(data?: any, cause?: any) {
		super('User not found.', data, cause)
	}
}

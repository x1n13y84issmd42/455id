/**
 * A policy to control how the system handles passwords.
 */
export abstract class ICredsAuthPolicy {
	abstract createPassword(userName: string, password: string): Promise<string>;
	abstract validatePassword(inputPassword: string, storedPassword: string): Promise<void>;
}

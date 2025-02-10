import { Injectable } from "@nestjs/common";
import { ICredsAuthPolicy } from "./CredsAuth.policy.interface";
import { InvalidPasswordError } from "../../Data/errors/InvalidPassword.error";

/**
 * Plain text password policy, just to start sommewhere.
 */
@Injectable()
export class CredsAuthPlainPolicy extends ICredsAuthPolicy {
	//TODO: change arguments to SignupDTO maybe?
	async createPassword(userName: string, password: string): Promise<string> {
		return password;
	}
	
	//TODO: since this happens after we have a user instance,
	// 			change arguments to User maybe?
	async validatePassword(inputPassword: string, storedPassword: string): Promise<void> {
		if (inputPassword !== storedPassword) {
			throw new InvalidPasswordError();
		}
	}
}

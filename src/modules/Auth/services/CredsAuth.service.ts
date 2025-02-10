import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../Data/repositories/User.repository";
import { ICredsAuthPolicy } from "./CredsAuth.policy.interface";
import { IUserACLProvider } from "./UserACLProvider.interface";

/**
 * A service to handle email+password authentication.
 */
@Injectable()
export class CredsAuthService {
	constructor(
		protected users: UserRepository,
		protected authPolicy: ICredsAuthPolicy,
		protected userACLProvider: IUserACLProvider,
	) {}

	async userExists(email: string): Promise<boolean> {
		try {
			await this.users.findByEmail(email);
			return true;
		} catch (err) {
			return false;
		}
	}

	async createUser(name: string, email: string, password: string) {
		if (await this.userExists(email)) {
			throw "EMail is already taken."
		}

		return await this.users.create({
			name,
			email,

			sources: {
				creds: {
					email,
					password: await this.authPolicy.createPassword(name, password),
					policy: this.authPolicy.constructor.name,
				},
			},
			roles: await this.userACLProvider.getRoles(name, email),
			access: await this.userACLProvider.getAccess(name, email),
			settings: {},
		});
	}

	async validateUser(email: string, password: string) {
		//TODO:
		// 	This has to check the auth policy used too.
		// 	Consider trying that "generic repo with query functions" idea.
		const user = await this.users.findByEmail(email);
		await this.authPolicy.validatePassword(password, user.sources.creds.password);
		return user;
	}
}

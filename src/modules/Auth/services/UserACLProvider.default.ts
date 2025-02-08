import { IUserACLProvider } from "./UserACLProvider.interface";

/**
 * A default policy to configure ACL for newly created users.
 */
export class UserACLProviderDefault extends IUserACLProvider {
	async getRoles(userName: string, userEmail: string): Promise<string[]> {
		return ['user'];
	}

	async getAccess(userName: string, userEmail: string): Promise<string[]> {
		return [];
	}
}

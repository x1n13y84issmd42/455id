/**
 * A policy to configure ACL for newly created users.
 */
export abstract class IUserACLProvider {
	abstract getRoles(userName: string, userEmail: string): Promise<string[]>;
	abstract getAccess(userName: string, userEmail: string): Promise<string[]>;
}

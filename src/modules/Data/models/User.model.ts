import { HydratedDocument } from "@x1n13y84issmd42/455fw/dist/rx/mongoose";
import { Prop, Schema, SchemaFactory } from "@x1n13y84issmd42/455fw/dist/rx/nestjs_mongoose";

export enum UserSourceType {
	Creds = "creds",
	Facebook = "facebook",
};

export class CredsSource {
	@Prop({required: true})
	email: string;

	/**
	 * Depending on the policy used,
	 * this can be either plain password (don't do that, mkay)
	 * or some hashed value.
	 */
	@Prop({required: true})
	password: string;

	/**
	 * This controls how the system treats passwords.
	 */
	@Prop({required: true})
	policy: string;
}

export class FacebookSource {
	@Prop({required: true})
	id: string;

	@Prop({required: true})
	email: string;

	@Prop({required: true})
	name: string;

	@Prop({required: true})
	pictureURL: string;
	
	@Prop({required: true})
	accessToken: string;
	
	@Prop({required: false})
	refreshToken?: string;
}

export class UserDataSources {
	@Prop({required: false})
	[UserSourceType.Creds]?: CredsSource;

	@Prop({required: false})
	[UserSourceType.Facebook]?: FacebookSource;
}

export class UserSettings {
}

@Schema({timestamps: true, autoIndex: true})
export class User {
	@Prop({required: true})
	email: string;
	
	@Prop({required: true})
	name: string;
	
	@Prop({required: false})
	username?: string;
	
	@Prop({required: false})
	picture?: string;
	
	@Prop({required: true})
	sources: UserDataSources;

	roles: string[];
	access: string[];

	settings: UserSettings;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

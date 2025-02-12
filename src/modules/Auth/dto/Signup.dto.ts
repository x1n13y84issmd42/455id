import { IsEmail, IsString, Length } from "@x1n13y84issmd42/455fw/dist/rx/class-validator";

export class CredsSignupDTO {
	@IsString()
	@Length(1, 100)
	name: string;
	
	@IsString()
	@Length(3, 1000)
	@IsEmail()
	email: string;
	
	@IsString()
	@Length(1, 1000)
	password: string;
}

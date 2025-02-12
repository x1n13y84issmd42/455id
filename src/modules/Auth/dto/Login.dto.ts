import { IsEmail, IsString, Length } from "@x1n13y84issmd42/455fw/dist/rx/class-validator";

export class CredsLoginDTO {
	@IsString()
	@Length(3, 1000)
	@IsEmail()
	email: string;
	
	@IsString()
	@Length(10, 100)
	password: string;
}

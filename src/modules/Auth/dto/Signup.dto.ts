import { IsEmail, MinLength } from "class-validator";

//TODO: decorate with validators.
export class CredsSignupDTO {
	@MinLength(1)
	name: string;
	
	@IsEmail()
	email: string;

	@MinLength(1)
	password: string;
}

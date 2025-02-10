import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

//TODO: move all JWT stuff to 455fw so it's available for other services.
@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy, '455jwt') {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET,
		});
	}
	
	validate(data: any): unknown {
		return {
			id: data.userId,
			name: data.userName,
			roles: data.roles,
		};
	}
}

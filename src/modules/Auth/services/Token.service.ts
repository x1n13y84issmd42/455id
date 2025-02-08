import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../../Data/models/User.model";

@Injectable()
export class TokenService {
	constructor(protected jwtService: JwtService) {}

	async createToken(user: User): Promise<string> {
		return this.jwtService.sign(user);
	}
}

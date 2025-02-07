import { Controller, Post, UseGuards, Req, Res, Body } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { CredsAuthGuard } from "../strategies/Creds/Guard";
import { CredsSignupDTO } from "../dto/Signup.dto";
import { UserRepository } from "../../Data/repositories/User.repository";


@Controller('auth/creds')
export class CredsAuthController {
	constructor(
		private jwtService: JwtService,
		private userRepo: UserRepository,
	) { }

	@Post('login')
	@UseGuards(CredsAuthGuard)
	login(@Req() req: any, @Res() resp: Response) {
		const access_token = this.jwtService.sign({
			userId: req.user.id,
			userName: req.user.name,
			roles: req.user.roles,
		});

		resp
			.cookie('access_token', access_token)
			.json({ access_token });
		// return {access_token};
	}

	@Post('signup')
	async signup(@Req() req: Request, @Body() data: CredsSignupDTO) {
		const user = await this.userRepo.create({
			name: "John Doe",
			email: data.email,
			sources: {
				creds: data,
			},
			roles: [],
			access: [],
			settings: {},
		});

		return user;
	}
}

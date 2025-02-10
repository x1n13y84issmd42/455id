import { Controller, Post, UseGuards, Req, Res, Body } from "@nestjs/common";
import { Response } from "express";
import { CredsAuthGuard } from "../strategies/Creds/Guard";
import { CredsSignupDTO } from "../dto/Signup.dto";
import { CredsAuthService } from "../services/CredsAuth.service";
import { TokenService } from "../services/Token.service";


@Controller('auth/creds')
export class CredsAuthController {
	constructor(
		private tokenService: TokenService,
		private authService: CredsAuthService,
	) { }

	@Post('login')
	@UseGuards(CredsAuthGuard)
	login(@Req() req: any, @Res() resp: Response) {
		const access_token = this.tokenService.createToken(req.user);

		// Setting the token to cookies also so it FE can read it after redirects (OAuth scenarios).
		resp
			.cookie('access_token', access_token)
			.json({ access_token });
	}

	@Post('signup')
	async signup(@Body() data: CredsSignupDTO) {
		//TODO: respond with 201 status.
		return await this.authService.createUser(data.name, data.email, data.password);
	}
}

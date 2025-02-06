import { Controller, Get, Post, UseGuards, Req } from "@nestjs/common";
import { JWTAuthGuard } from "../strategies/JWT/Guard";

@Controller('auth')
export class AuthController {
	@Post('logout')
	@UseGuards(JWTAuthGuard)
	logout(@Req() req: any) {
		return req.logout();
	}

	@Get('profile')
	@UseGuards(JWTAuthGuard)
	profile(@Req() req: any) {
		return req.user;
	}
}

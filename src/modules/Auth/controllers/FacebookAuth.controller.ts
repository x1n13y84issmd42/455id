import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { FacebookAuthGuard } from "../strategies/Facebook/Guard";
import { Response } from "express";

@Controller('auth')
export class FacebookAuthController {
	@Get('fb')
	@UseGuards(FacebookAuthGuard)
	init(@Res() resp: Response) {
		// resp.cookie('access_token', );
		//TODO: set access_token cookie & redirect to the front end app
		return "Facebook authentication will start here.";
	}
}

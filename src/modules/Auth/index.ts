import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { DataModule } from "../Data";
import { CredsStrategy } from "./strategies/Creds/Strategy";
import { JWTStrategy } from "./strategies/JWT/Strategy";
import { FacebookStrategy } from "./strategies/Facebook/Strategy";
import { AuthController } from "./controllers/Auth.controller";
import { CredsAuthController } from "./controllers/CredsAuth.controller";
import { FacebookAuthController } from "./controllers/FacebookAuth.controller";
import { CredsAuthPlainPolicy } from "./services/CredsAuthPlain.policy";
import { CredsAuthService } from "./services/CredsAuth.service";
import { UserACLProviderDefault } from "./services/UserACLProvider.default";
import { ICredsAuthPolicy } from "./services/CredsAuth.policy.interface";
import { IUserACLProvider } from "./services/UserACLProvider.interface";
import { TokenService } from "./services/Token.service";

@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: {
				expiresIn: '60s',
			},
		}),
		DataModule,
	],
	controllers: [
		AuthController,
		CredsAuthController,
		FacebookAuthController,
	],
	providers: [
		CredsStrategy,
		JWTStrategy,
		FacebookStrategy,

		CredsAuthService,
		TokenService,

		{
			provide: ICredsAuthPolicy,
			useClass: CredsAuthPlainPolicy,
		},

		{
			provide: IUserACLProvider,
			useClass: UserACLProviderDefault,
		},
	],
})
export class AuthModule {}

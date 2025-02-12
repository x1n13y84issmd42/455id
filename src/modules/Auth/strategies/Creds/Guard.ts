import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { validateOrReject } from "@x1n13y84issmd42/455fw/dist/rx/class-validator";
import { plainToInstance } from "@x1n13y84issmd42/455fw/dist/rx/class-transformer";
import { CredsLoginDTO } from "../../dto/Login.dto";
import { ValidationError } from "@x1n13y84issmd42/455fw";

export class CredsAuthGuard extends AuthGuard('455creds') {
	canActivate(context: ExecutionContext) {
		//	Validating the request data.
		const req = context.switchToHttp().getRequest<Request>();
		return new Promise<boolean>(async (resolve, reject) => {
			validateOrReject(plainToInstance(CredsLoginDTO, req.body))
				.then(() => resolve(true))
				.catch(errs => reject(new ValidationError(errs)));
		})
	}
}

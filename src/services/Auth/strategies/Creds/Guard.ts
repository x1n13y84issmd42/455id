import { AuthGuard } from "@nestjs/passport";

export class CredsAuthGuard extends AuthGuard('455creds') {}

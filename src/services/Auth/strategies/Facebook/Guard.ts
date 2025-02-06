import { AuthGuard } from "@nestjs/passport";

export class FacebookAuthGuard extends AuthGuard('455facebook') {}

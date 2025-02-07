import { Module } from "@nestjs/common";
import { MongoModule } from "@x1n13y84issmd42/455fw";
import { User, UserSchema } from "./models/User.model";
import { UserRepository } from "./repositories/User.repository";

@Module({
	imports: [
		MongoModule,
		MongoModule.importModels([
			MongoModule.model(User, UserSchema),
		]),
	],

	providers: [UserRepository],
	exports: [UserRepository],
})
export class DataModule {}

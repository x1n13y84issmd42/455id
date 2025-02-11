import { AuthModule } from "../modules/Auth";
import { Module } from "@nestjs/common";
import { ExceptionFiltersModule } from "@x1n13y84issmd42/455fw";

@Module({
	imports: [
		ExceptionFiltersModule,
		AuthModule,
	],
})
export class IDAppModule{}

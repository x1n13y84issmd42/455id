import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TestController } from "../controllers/Test.controller";
import { AuthModule } from "@@Auth";
import { ExceptionFiltersModule } from "@x1n13y84issmd42/455fw";

@Module({
	imports: [ExceptionFiltersModule, AuthModule],
	controllers: [TestController],
	providers: [],
})
export class IDAppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		console.log(`process.env.QQQ`, process.env.QQQ);
		consumer.apply((req: any, resp: any, next?: Function) => {
			console.log(`REQ MIDDLEWARE`);
			next && next();
		}).forRoutes(TestController);
	}
}

import { createHTTPServer } from "@x1n13y84issmd42/455fw";
import { IDAppModule } from "./IDApp.module";

async function bootstrap() {
	const app = await createHTTPServer(IDAppModule);
	await app.listen(80);
}

bootstrap();

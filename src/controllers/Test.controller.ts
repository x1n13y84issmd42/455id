import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
	@Get('msg')
	msg(): string {
		return "Hello from TestController";
	}

	@Get('data')
	data() {
		return { msg: "Hello from TestController", now: new Date };
	}

	@Get('err')
	err() {
		throw new Error('ALARMA');
	}
}

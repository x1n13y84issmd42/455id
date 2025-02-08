import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { CredsAuthService } from '../../services/CredsAuth.service';
import { User } from '../../../Data/models/User.model';

@Injectable()
export class CredsStrategy extends PassportStrategy(Strategy, '455creds') {
	constructor(protected service: CredsAuthService) {
		super({
			usernameField: 'email',
		});
	}

	async validate(email: string, password: string): Promise<User> {
		return await this.service.validateUser(email, password);
	}
}

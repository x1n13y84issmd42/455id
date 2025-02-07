import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CredsStrategy extends PassportStrategy(Strategy, '455creds') {
	validate(username: string, password: string): unknown {
		const users = {
			'admin': {id: 1, pwd: '4dm1n', roles: ['admin']},
			'alice': {id: 2, pwd: '4l1c3', roles: ['user']},
		} as any;

		if (username in users) {
			if (users[username].pwd === password) {
				return {name: username, ...users[username]};
			}
		}

		throw 'NO_USER_T_T';
	}
}

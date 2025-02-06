import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-facebook";

export class FacebookStrategy extends PassportStrategy(Strategy, '455facebook') {
	constructor() {
		super({
			clientID: process.env.FB_CLIENT_ID,
			clientSecret: process.env.FB_CLIENT_SECRET,
			callbackURL: process.env.FB_CALLBACK_URL,
			profileFields: ['id', 'emails', 'displayName', 'photos'],
		});
	}

	validate(fbAccessToken: string, fbRefreshToken: string, userData: any): unknown {
		console.dir({fbAccessToken, fbRefreshToken, userData}, {depth: null});
		/*
		{
			id: '10214241881593498',
			username: undefined,
			displayName: 'Eugene Merkoulov',
			name: {
				familyName: undefined,
				givenName: undefined,
				middleName: undefined
			},
			gender: undefined,
			profileUrl: undefined,
			emails: [
				{
					value: 'floyd311@gmail.com'
				}
			],
			photos: [
				{
					value: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10214241881593498&height=50&width=50&ext=1741191313&hash=AbYE_2LfitUO8vlsdk0k6i0y'
				}
			],
			provider: 'facebook',
		}
		*/
		throw new Error("Method not implemented.");
	}
}

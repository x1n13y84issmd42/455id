import { Injectable } from "@nestjs/common";
import { InjectModel } from "@x1n13y84issmd42/455fw";
import { User } from "../models/User.model";
import { Model } from "mongoose";
import { UserNotFoundError } from "../errors/UerNotFound.error";

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User.name) private model: Model<User>) {}

	async create(userData: User) {
		const user = await this.model.create(userData);
		await user.save();
		return user;
	}

	async findByEmail(email: string) {
		const user = await this.model.findOne({email}).lean();

		if (! user) {
			throw new UserNotFoundError({email});
		}

		return user;
	}
}

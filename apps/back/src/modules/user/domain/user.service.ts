import { UserRepository } from "../infrastructure/user.repository";
import * as jwt from "jsonwebtoken";
import { parse } from "@telegram-apps/init-data-node";
import { envConfig } from "@back/env";
import { TGetUserById, TUserProfileDto } from "../model/user.model";
export class UserService {
  userRepository: UserRepository;
  private secretKey: string;
  constructor(userRepo: UserRepository) {
    this.userRepository = userRepo;
    this.secretKey = envConfig.SECRET_KEY;
  }
  public async auth(dto: ReturnType<typeof parse>) {
    const findUser = await this.userRepository.getUserByTgId(
      String(dto.user.id)
    );
    if (findUser) {
      const token = this.generateToken(findUser.tgId, findUser.id);
      const user = await this.userRepository.getUserById(findUser.id);
      return {
        token,
        user: user.user,
        profile: user.profile,
      };
    }
    const user = await this.userRepository.createUser({
      ...dto.user,
      authDate: dto.authDate.toISOString(),
    });
    const profile = await this.userRepository.createUserProfile({
      userId: user.id,
    });
    const token = this.generateToken(user.tgId, user.id);
    return {
      token,
      user,
      profile,
    };
  }
  public async getUserById(dto: TGetUserById) {
    return await this.userRepository.getUserById(dto.userId);
  }
  public async updateProfile(dto: TUserProfileDto) {
    await this.userRepository.updateUserProfileByUserId(dto);
    const user = await this.userRepository.getUserById(dto.userId);

    return {
      user,
    };
  }
  public async getAllInterests() {
    return await this.userRepository.getAllInterests();
  }
  private generateToken(tgId: string, id: string) {
    const token = jwt.sign({ id: id, tgId }, this.secretKey, {
      expiresIn: "7d",
    });
    return token;
  }
}

import { UserRepository } from "../infrastructure/user.repository";
import * as jwt from "jsonwebtoken";
import { parse } from "@telegram-apps/init-data-node";
import { envConfig } from "@back/env";
import { TGetUserById } from "../model/user.model";
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
      return {
        token,
        user: findUser,
      };
    }
    const user = await this.userRepository.createUser({
      ...dto.user,
      authDate: dto.authDate.toISOString(),
    });
    await this.userRepository.createUserProfile({
      userId: user.id,
    });
    const token = this.generateToken(user.tgId, user.id);

    return {
      token,
      user,
    };
  }
  public async getUserById(dto: TGetUserById) {
    return await this.userRepository.getUserById(dto.userId);
  }
  private generateToken(tgId: string, id: string) {
    const token = jwt.sign({ id: id, tgId }, this.secretKey, {
      expiresIn: "7d",
    });
    return token;
  }
}

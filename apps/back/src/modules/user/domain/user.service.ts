import { UserRepository } from "../infrastructure/user.repository";
import jwt from "jsonwebtoken";
import { parse } from "@telegram-apps/init-data-node";
import { envConfig } from "@back/env";
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

    const token = this.generateToken(user.tgId, user.id);

    return {
      token,
      user,
    };
  }
  private generateToken(tgId: string, id: string) {
    const token = jwt.sign({ id: id, tgId }, this.secretKey, {
      expiresIn: "7d",
    });
    return token;
  }
}

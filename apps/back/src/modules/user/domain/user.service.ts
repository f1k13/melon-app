import { UserRepository } from "../infrastucture/user.repository";
import { TUserAuthDto } from "../model/user.model";

export class UserService {
  userRepository: UserRepository;
  constructor(userRepo: UserRepository) {
    this.userRepository = userRepo;
  }
  public async auth(dto: TUserAuthDto) {}
}

import { UserRepository } from "../infrastucture/user.repository";

export class UserService {
  userRepository: UserRepository;
  constructor(userRepo: UserRepository) {
    this.userRepository = userRepo;
  }
}

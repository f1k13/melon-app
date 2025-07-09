import { UserService } from "../domain/user.service";

export class UserController {
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  create = async () => {};
}

import { UserResponse } from "./auth.types.js";

export class AuthMapper {

  static toUserResponse(user: any): UserResponse {

    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    };

  }

}
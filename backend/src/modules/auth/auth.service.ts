import { UserModel } from "./auth.model.js";
import {
  RegisterUserRequest,
  LoginUserRequest,
  UserResponse,
  LoginResponse,
} from "./auth.types.js";
import { AppError } from "../../core/errors/AppError.js";
import {
  hashPassword,
  comparePassword,
} from "../../core/utils/password.js";
import { generateAccessToken } from "../../core/utils/jwt.js";
import { AuthMapper } from "./auth.mapper.js";

export class AuthService {

  static async registerUser(
    data: RegisterUserRequest
  ): Promise<UserResponse> {

    const existingUser = await UserModel.findOne({
      email: data.email,
    });

    if (existingUser) {
      throw new AppError(
        "Email already registered",
        409
      );
    }

    const hashedPassword = await hashPassword(
      data.password
    );

    const user = await UserModel.create({
      ...data,
      password: hashedPassword,
    });

    return AuthMapper.toUserResponse(user);
  }

  static async loginUser(
    data: LoginUserRequest
  ): Promise<LoginResponse> {

    const user = await UserModel.findOne({
      email: data.email,
    }).select("+password");

    if (!user) {
      throw new AppError(
        "Invalid email or password",
        401
      );
    }

    const passwordMatched =
      await comparePassword(
        data.password,
        user.password
      );

    if (!passwordMatched) {
      throw new AppError(
        "Invalid email or password",
        401
      );
    }

    const accessToken =
      generateAccessToken(
        user._id.toString()
      );

    return {
      accessToken,
    };
  }

  static async getProfile(
    userId: string
  ): Promise<UserResponse> {

    const user = await UserModel.findById(
      userId
    );

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    return AuthMapper.toUserResponse(user);
  }

}
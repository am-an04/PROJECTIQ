import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";

export class AuthController {

  static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      const user = await AuthService.registerUser(req.body);

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
      });

    } catch (error) {
      next(error);
    }
  }

  static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      const result = await AuthService.loginUser(req.body);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });

    } catch (error) {
      next(error);
    }
  }

  static async getProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {

      const user = await AuthService.getProfile(req.userId!);

      return res.status(200).json({
        success: true,
        message: "Profile fetched successfully",
        data: user,
      });

    } catch (error) {
      next(error);
    }
  }

}
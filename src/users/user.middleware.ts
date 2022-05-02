import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

@Injectable()
export class CreateUserMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        // var exists = await this.userService.exists(req.body)
        // if (exists == 0) {
        //     next();
        // }
        // throw new HttpException("User already exists", HttpStatus.CONFLICT);
        next();
    }
}
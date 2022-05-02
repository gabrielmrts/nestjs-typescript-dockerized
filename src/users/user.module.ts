import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserController } from "./user.controller";
import { CreateUserMiddleware } from "./user.middleware";
import { UserService } from "./user.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [PrismaService, UserService],
    exports: [UserService],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CreateUserMiddleware)
            .forRoutes({ path: 'users', method: RequestMethod.POST });
    }
}
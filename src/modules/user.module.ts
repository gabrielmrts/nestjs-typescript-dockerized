import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { PrismaService } from "src/services/prisma.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [PrismaService],
})
export class UserModule {}
import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, users } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUser } from "./interfaces/user.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}
    
    async findAll(): Promise<users[]> {
        return await this.prismaService.users.findMany();
    }

    async findOne(username: string): Promise<IUser | undefined> {
        return this.prismaService.users.findFirst({ where: { username: username }});
    }

    async create(@Body() body: CreateUserDto): Promise<void> {
        var { name, username, password, email } = body;

        const saltOrRounds = 10;
        password = await bcrypt.hash(password, saltOrRounds);

        try {
            await this.prismaService.users.create({
                data: {
                    name, 
                    username, 
                    password, 
                    email
                }
            });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code == "P2002") {
                    throw new HttpException("username or email already exists", HttpStatus.CONFLICT);
                }
            }
            throw e
        }
    }
}
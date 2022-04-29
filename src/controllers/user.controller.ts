import { Body, Controller, Get, Post } from '@nestjs/common';
import { users } from '@prisma/client';
import { IUser } from 'src/interfaces/IUser';
import { PrismaService } from 'src/services/prisma.service';

@Controller()
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post("users")
  async create(
    @Body() postData: IUser,
  ): Promise<users> {
    const { name, password, email, document } = postData

    return this.prismaService.users.create({
      data: {
        name,
        password,
        email,
        document
      },
    })
  }

  @Get("users")
  async findAll(): Promise<users[]> {
    return this.prismaService.users.findMany();
  }
}
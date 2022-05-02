import { Body, Controller, Get, Post } from '@nestjs/common';
import { users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post("users")
  async create(@Body() postData: CreateUserDto): Promise<void> {
    await this.userService.create(postData);
  }

  @Get("users")
  async findAll(): Promise<users[]> {
    return this.userService.findAll();
  }
}
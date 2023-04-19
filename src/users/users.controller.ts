import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('findAll')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async create(@Body() createUser: CreateUserInput): Promise<User> {
    return await this.userService.create(createUser);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() input: UpdateUserInput) {
    return await this.userService.updateById(id, input);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.deleteById(id);
  }
}

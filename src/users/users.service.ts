import { Injectable } from '@nestjs/common';
import { PrismaPromise, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(user: CreateUserInput): Promise<User> {
    return await this.prismaService.user.create({
      data: user,
    });
  }

  findAll(): PrismaPromise<User[]> {
    return this.prismaService.user.findMany();
  }

  updateById(id: string, data: UpdateUserInput): PrismaPromise<User> {
    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  deleteById(id: string): PrismaPromise<User> {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}

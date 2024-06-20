import { Injectable } from '@nestjs/common';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(userCreateInput: UserCreateInput) {
    const user = this.prisma.user.create({
      data: userCreateInput,
    });
    return user;
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        _count: true,
        posts: {},
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(userUpdateInput: UserUpdateInput) {
    const updateUser = this.prisma.user.update({
      where: {
        id: userUpdateInput.id,
      },
      data: {
        email: userUpdateInput.email,
        name: userUpdateInput.name,
      },
    });
    return updateUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

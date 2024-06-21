import { Injectable } from '@nestjs/common';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ユーザーを１つ作成する.
   * @param userCreateInput
   * @returns
   */
  create(userCreateInput: UserCreateInput) {
    const user = this.prisma.user.create({
      data: userCreateInput,
    });
    return user;
  }
  /**
   * ユーザー一覧を取得する.
   * @returns
   */
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
  /**
   * ユーザーを１つ更新する.
   * @param userUpdateInput
   * @returns
   */
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
    const deleteUser = this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return deleteUser;
  }
}

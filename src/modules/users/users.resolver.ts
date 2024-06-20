import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  /**
   * ユーザーを１つ作成する.
   * @param userCreateInput
   * @returns
   */
  @Mutation(() => User)
  createUser(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.usersService.create(userCreateInput);
  }
  /**
   * 全ユーザーを取得する.
   * @returns
   */
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
  /**
   * ユーザー情報を更新する.
   * @param userUpdateInput
   * @returns
   */
  @Mutation(() => User)
  updateUser(@Args('userUpdateInput') userUpdateInput: UserUpdateInput) {
    return this.usersService.update(userUpdateInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}

import { UserCreateInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UserUpdateInput extends PartialType(UserCreateInput) {
  @Field(() => Int)
  id: number;
}

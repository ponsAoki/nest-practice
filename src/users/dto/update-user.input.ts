import { IsNotEmpty } from 'class-validator';

export class UpdateUserInput {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  age: number;
}

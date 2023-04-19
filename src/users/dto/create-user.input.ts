import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserInput {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  @IsNotEmpty()
  name!: string;
  @IsString()
  @IsNotEmpty()
  email!: string;
  @IsNumber()
  @IsNotEmpty()
  age!: number;
}

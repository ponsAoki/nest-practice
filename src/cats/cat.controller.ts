import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { AllExceptionsFilter } from 'src/all-exceptions.filter';
import { CatsService } from 'src/cats/cat.service';
import { Cat } from 'src/cats/interface/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
@UseFilters(AllExceptionsFilter)
export class CatsController {
  constructor(
    // private readonly httpService: HttpService,
    private readonly catsService: CatsService,
  ) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() cat: CreateCatDto) {
    this.catsService.create(cat);
    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // return this.catsService.findAll();
    throw new ForbiddenException();
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }

  // @Get('pokeres')
  // async getAll(@Res() res: Response) {
  //     const apiRes = this.httpService.get('https://poke-app-2-backend.herokuapp.com/api/search/poke')
  //     console.log(apiRes);
  //     res.json(apiRes)
  //     return apiRes
  // }
}

import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
    @Get()
    getDogs(): boolean {
        return 1*1==2-1
    }
}

import { Body, Controller, Get, Param, Query, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Body() body: string):string {
        return body
    }
}
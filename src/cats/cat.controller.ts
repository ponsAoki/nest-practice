import { HttpService } from "@nestjs/axios";
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { Observable } from "rxjs";
import { CatsService } from "src/cats/cat.service";
import { Cat } from "src/cats/interface/cat.interface";
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller('cats')
export class CatsController {
    constructor(
        // private readonly httpService: HttpService,
        private readonly catsService: CatsService
    ) {}

    @Post()
    async create(@Body() cat: CreateCatDto) {
        this.catsService.create(cat)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }
    

    // @Get('pokeres')
    // async getAll(@Res() res: Response) {
    //     const apiRes = this.httpService.get('https://poke-app-2-backend.herokuapp.com/api/search/poke')
    //     console.log(apiRes);
    //     res.json(apiRes)
    //     return apiRes
    // }
}
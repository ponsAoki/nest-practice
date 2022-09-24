import { Injectable } from "@nestjs/common";
import {Cat} from "./interface/cat.interface"

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(newCat: Cat) {
        this.cats.push(newCat)
    }

    findAll(): Cat[] {
        return this.cats
    }
}
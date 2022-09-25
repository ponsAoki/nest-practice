import { Injectable } from "@nestjs/common";
import {Cat} from "./interface/cat.interface"

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [{name: "tama", age: 4, weight: 5}, {name: "booh", age: 6, weight: 8}]

    create(newCat: Cat) {
        this.cats.push(newCat)
    }

    findAll(): Cat[] {
        return this.cats
    }
}
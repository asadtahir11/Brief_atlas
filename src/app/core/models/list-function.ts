import { ListFunctionI } from "../interfaces/list-function-i";

export class ListFunction implements ListFunctionI{
    id!: number;
    name!: string;
    description!: string;
    constructor(obj?: Partial<ListFunction>) {
        if(obj) {
            Object.assign(this, obj)
        }
    }
}

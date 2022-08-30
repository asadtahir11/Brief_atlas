import { InfoServerI } from "../interfaces/info-server-i";

export class InfoServer implements InfoServerI {
    applivspe!: string;
    serveur!: string;
    constructor(obj?: Partial<InfoServer>) {
        if(obj) {
            Object.assign(this, obj)
        }
    }
}

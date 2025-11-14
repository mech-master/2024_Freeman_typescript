export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number) {
        //не требуется никаких операторов
    }
}

export enum SPORT {
    Running, Soccer, Watersports, Other
}

export class SportsProduct extends Product {
    private _sports: SPORT[];

    constructor (
        public id: number,
        public name: string,
        public price: number,
        ...sportArray: SPORT[]) {
        super(id, name, price);
        this._sports = sportArray;
    }

    usedForSport(s: SPORT): boolean {
        return this._sports.includes(s);
    }cd

    get sports(): SPORT[] {
        return this._sports;
    }
}
class Product {
    constructor(
        public id: number,
        public name: string,
        price: number) {}
}

export enum SPORT {
    Running, Soccer, Watersport, Other
}

export class SportsProduct extends Product {
    protected _sports: SPORT[]

    constructor(
        public id: number,
        public name: string,
        public price: number,
        ...sportArray: SPORT[]) {
        super(id, name, price);
        this._sports = sportArray;
    }

    usedForSport(s: SPORT): boolean {
        return this._sports.includes(s);
    }

    get sports(): SPORT[] {
        return  this._sports;
    }
}
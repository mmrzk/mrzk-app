export enum ItemsFor {
    Select1,
    Select2
}

export class Item {
    constructor(public value: string, public selected: boolean = false) {}
}

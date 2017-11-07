import { Injectable } from '@angular/core';
import { Item, ItemsFor } from '../models/item';

@Injectable()
export class ItemsService {
  private items: Item[];
  private customItems: Item[];

  constructor() {
    this.items = [];
    this.customItems = [];
    this.fillItems(this.items, 'Item', 5);
    this.fillItems(this.customItems, 'Custom Item', 2);
  }

  private fillItems(arr: Item[], value: string, amount: number) {
    for (let i = 1; i <= amount; i++) {
      arr.push(new Item(`${value} ${i}`));
    }
  }
  getItems(itemsFor: ItemsFor): Item[] {
    // tslint:disable-next-line:prefer-const
    let result: Item[] = [];
    switch (itemsFor) {
      case ItemsFor.Select1:
        result.push(...this.items.filter((item, index) => index < 4));
        result.push(...this.customItems.filter((item, index) => index < 1));
      return result;
      case ItemsFor.Select2:
        result.push(...this.items.filter((item, index) => index < 5));
        result.push(...this.customItems.filter((item, index) => index < 2));
      return result;
      default:
        return [];
    }
  }
  setAllFalse(ignore: string) {
    this.items.forEach(item => item.selected = item.value === ignore);
    this.customItems.forEach(item => item.selected = item.value === ignore);
  }
  setTrue(value: string) {
    // tslint:disable-next-line:no-shadowed-variable
    let item = this.items.find(it => it.value === value);
    // tslint:disable-next-line:no-unused-expression
    (item && (item.selected = true));
    item = this.customItems.find(it => it.value === value);
    // tslint:disable-next-line:no-unused-expression
    (item && (item.selected = true));
  }
}

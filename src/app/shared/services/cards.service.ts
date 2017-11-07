import { Injectable } from '@angular/core';
import { Card } from '../../card/card.component';

@Injectable()
export class CardsService {

  private _cards: Card[];
  private defaultCards: any;
  private sidebarHidden: boolean;
  private spinner: boolean;

  constructor() {
    this._cards = [];
  }
  public set sidebarState(hidden: boolean) {
    this.sidebarHidden = hidden;
  }
  public get sidebarState(): boolean {
    return this.sidebarHidden;
  }
  public set cards(cards: Array<Card>) {
    this._cards = cards;
  }
  public get cards(): Array<Card> {
    return this._cards;
  }
  public getCard(id: number): Card {
    return this._cards.find((card) => card.id === id);
  }
  public set spinnerState(state: boolean) {
    this.spinner = state;
  }
  public get spinnerState(): boolean {
    return this.spinner;
  }
}

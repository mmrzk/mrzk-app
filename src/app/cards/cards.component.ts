import { Component, Input, HostBinding } from '@angular/core';
import { Card } from '../card/card.component';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'mrzk-app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  @HostBinding('class') style = 'p-0 pb-4 m-0 col-sm-12 container-fluid';
  @Input() cards: Array<Card>;

  constructor(public cardsService: CardsService) { }
}

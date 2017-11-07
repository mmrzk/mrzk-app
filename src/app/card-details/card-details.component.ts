import { Component, HostBinding } from '@angular/core';
import { Card } from '../card/card.component';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'mrzk-app-card-details',
  templateUrl: './card-details.component.html'
})
export class CardDetailsComponent {

  @HostBinding('class') style = 'row pb-4 pl-4 pr-4 col-sm-10 col-xl-11';
  card: Card;

  constructor(route: ActivatedRoute, cardsService: CardsService) {
    // tslint:disable-next-line:radix
    this.card = cardsService.getCard(parseInt(route.snapshot.paramMap.get('id')));
  }
}

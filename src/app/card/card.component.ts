import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';
import { Router } from '@angular/router';
import { CardsService } from '../shared/services/cards.service';

export interface Card {
  value: string;
  id: number;
}

@Component({
  selector: 'mrzk-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  static defaultCards= {
    'select1': 'Item 3',
    'select2': 'Item 4',
    'input1': '',
    'input2': '',
    'radio1': 'Option 2',
    'checkbox1': true,
    'checkbox2': true,
    'checkbox3': false
  };

  @Input() card: Card;
  constructor(public cardsService: CardsService) { }

  showDetails() {
    this.cardsService.spinnerState = true;
    setTimeout(() => {
      this.cardsService.spinnerState = false;
    }, 3000);
  }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from '../card/card.component';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'mrzk-app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() sidebarActive = true;
  @Output() showFiltersEvent = new EventEmitter();
  spinner: boolean;

  constructor(public cardsService: CardsService) {  }

  onShowFilters() {
    this.showFiltersEvent.emit();
    this.cardsService.sidebarState = false;
  }
}

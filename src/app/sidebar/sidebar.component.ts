import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Card, CardComponent } from '../card/card.component';
import { CardsService } from '../shared/services/cards.service';
import { ItemsService } from '../shared/services/items.service';
import { Item, ItemsFor } from '../shared/models/item';

@Component({
  selector: 'mrzk-app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() show: boolean;
  @Output() hideFiltersEvent = new EventEmitter();

  itemsForSelect1: Item[]= [];
  itemsForSelect2: Item[]= [];

  select1 = 'Item 3';
  select2 = 'Item 4';
  input1 = '';
  input2 = '';
  option1 = 'Option 2';
  checkbox1 = true;
  checkbox2 = true;
  checkbox3 = false;

  constructor(public cardsService: CardsService, private itemsService: ItemsService) {
    this.itemsForSelect1.push(...itemsService.getItems(ItemsFor.Select1));
    this.itemsForSelect2.push(...itemsService.getItems(ItemsFor.Select2));
  }
  ngOnInit() {
    this.onChanged(this.select1);
    this.onChanged(this.select2);
    this.onSubmit();
  }
  onChanged(value) {
    this.itemsService.setAllFalse(value === this.select1 ? this.select2 : this.select1);
    this.itemsService.setTrue(value);
  }
  onSubmit() {
    const checkboxes: string[] = [];

    // tslint:disable-next-line:no-unused-expression
    (this.checkbox1 ? checkboxes.push('CheckBox 1') : '');
    // tslint:disable-next-line:no-unused-expression
    (this.checkbox2 ? checkboxes.push('CheckBox 2') : '');
    // tslint:disable-next-line:no-unused-expression
    (this.checkbox3 ? checkboxes.push('CheckBox 3') : '');

    const data: {value: any, id: number}[] = [
      {'value' : this.select1, id: 1},
      {'value' : this.select2, id: 2},
      {'value' : this.input1, id: 3},
      {'value' : this.input2, id: 4},
      {'value' : this.option1, id: 5},
      {'value' : checkboxes.join(', '), id: 6}
    ];

    this.cardsService.spinnerState = true;
    setTimeout(() => {
      this.cardsService.cards = data;
      this.cardsService.spinnerState = false;
    }, 3000);
  }
  onHideFilters() {
    this.cardsService.sidebarState = true;
    this.hideFiltersEvent.emit();
  }
  reset(aForm: NgForm) {
    aForm.resetForm(CardComponent.defaultCards);
  }
}

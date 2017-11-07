import { Component } from '@angular/core';
import { Card } from './card/card.component';

@Component({
  selector: 'mrzk-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showFilters = false;
  hideFilters = true;

  onHideFilters() {
    this.showFilters = true;
    this.hideFilters = false;
  }
  onShowFilters() {
    this.hideFilters = true;
    this.showFilters = false;
  }
}

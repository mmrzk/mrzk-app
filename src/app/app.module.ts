import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { CardsService } from './shared/services/cards.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ItemsService } from './shared/services/items.service';

const routes: Routes = [
    {path: '', component: CardsComponent},
    {path: 'details/:id', component: CardDetailsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    CardComponent,
    CardsComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              CardsService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

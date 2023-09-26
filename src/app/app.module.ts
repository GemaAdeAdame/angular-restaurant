import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './restaurant/order/order.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { DishComponent } from './restaurant/dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    OrderComponent,
    MenuComponent,
    DishComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

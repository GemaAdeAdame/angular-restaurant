import { Component } from '@angular/core';
import { Dish } from "../models/dish.models";
import { dishes } from '../models/dishes';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public dishes: Dish[] = dishes;


  constructor(private waiterService: WaiterService){
  }

  addToOrder(dish: Dish) {
    this.waiterService.addDishToOrder(dish);
  }
}

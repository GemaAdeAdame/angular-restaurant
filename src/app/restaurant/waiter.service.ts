import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Dish } from './models/dish.models';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {
  private order: Dish[] = [];

  public getOrder(): Dish[] {
    return this.order;
  }

  public addDishToOrder(dish: Dish) {
    this.order.push(dish);
  }
}
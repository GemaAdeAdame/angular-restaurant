import { Component } from '@angular/core';
import { Dish } from '../models/dish.models';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public order?: Dish[];

  constructor(private waiterService: WaiterService) {
    this.order = this.waiterService.getOrder();
  }
}



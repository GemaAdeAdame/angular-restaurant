import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dish } from '../models/dish.models';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent {

  @Input() public dish?: Dish;
  @Input() public hasAddButton: boolean = false;
  @Input() public isExtendedVersion: boolean = false;

  @Output() public addToOrderChange: EventEmitter<void> = new EventEmitter<void>();

  public addToOrder() {
    this.addToOrderChange.emit();
  }

}
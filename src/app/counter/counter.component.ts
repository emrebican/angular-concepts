import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number;
  favouriteColor: string;

  constructor() {
    this.count = 0;
    this.favouriteColor = '';
  }

  /* Counter */
  increase() {
    this.count += 1;
  }
  decrease() {
    this.count -= 1;
  }

  /* Color */
  handleColor(value: any) {
    this.favouriteColor = value;
  }
}

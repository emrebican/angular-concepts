import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = 'John';
  imageURL: string = 'https://picsum.photos/id/128/200/300';
  lastName: string = 'Doe';
  favouriteAnimal: string = '';

  handleFavourite(value: string) {
    this.favouriteAnimal = value;
  }
}

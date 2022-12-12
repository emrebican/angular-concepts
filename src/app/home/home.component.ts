import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstName: string = 'John';
  imageURL: string = 'https://picsum.photos/id/128/200/300';
  lastName: string = 'Doe';
  favouriteAnimal: string = '';
  nationality: string = '';
  country: string = '';
  age: string = '';

  handleFavourite(value: string) {
    this.favouriteAnimal = value;
  }

  handleNation(event: any) {
    this.nationality = event.target.value;
  }

  handleAge(value: string) {
    this.age = value;
  }
}

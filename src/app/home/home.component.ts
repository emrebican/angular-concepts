import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Home';
  firstName: string = 'John';
  imageURL: string = 'https://picsum.photos/id/128/200/300';
  lastName: string = 'Doe';
  favouriteAnimal: string = '';
  nationality: string = '';
  country: string = '';
  age: string = '';

  ngOnInit(): void {
    console.log(`${this.title} is rendered`);
  }

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

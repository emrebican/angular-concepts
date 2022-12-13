import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string;

  constructor() {
    this.title = 'About';
  }

  ngOnInit(): void {
    console.log(`${this.title} is rendered`);
  }
}

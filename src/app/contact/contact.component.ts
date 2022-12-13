import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Contact';
  }

  ngOnInit(): void {
    console.log(`${this.title} is rendered`);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p class="p"> 
      inline works!
    </p>
  `,
  styles: [
    `
    p {
      font-size: 5rem;
    }
    `
  ]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

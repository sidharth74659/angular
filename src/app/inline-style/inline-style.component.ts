import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [
    `.inline {
      color: red;
    }`
  ]
})
export class InlineStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

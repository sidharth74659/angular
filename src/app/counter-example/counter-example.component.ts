import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  templateUrl: './counter-example.component.html',
  styleUrls: ['./counter-example.component.css']
})
export class CounterExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counterValue: number = 0;
  
  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}

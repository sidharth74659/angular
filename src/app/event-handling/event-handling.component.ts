import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   keyupValue: string = '';
  keydownValue: string = '';
  blurValue: string = '';
  inputValue: string = '';
  
  getName(name: string) {
    alert(name);
  }

  getKeyUp(name: string) {
    this.keyupValue = name;
    console.warn(name);
  }

  getKeyDown(name: string) {
    this.keydownValue = name;
    console.warn(name);
  }

  getBlur(name: string) {
    this.blurValue = name;
    console.warn(name);
  }

  getInput(name: string) {
    this.inputValue = name;
    console.warn(name);
  }

  showValue:string = '';
  getValue(name: string) {
    // alert(name);
    this.showValue = name;
  }

}

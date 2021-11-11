import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Brooooo!!!';
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

  counterValue: number = 0;
  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}

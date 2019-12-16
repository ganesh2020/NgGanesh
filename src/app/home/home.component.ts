import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counterValue: number = 5;
  name: string = "";
  
  constructor() { }

  ngOnInit() {
  }
  
  counterClick() {
    this.counterValue += 1;
  }
  
  resetCounter() {
    this.counterValue = 5;
  }

  resolveStyles(){
    let resolvedStyles = {
      'active': this.name != '',
      'notactive': this.name == ''
    }
    return resolvedStyles
  }

  getResetStyles() {
   return  {
      'reset-visible': this.counterValue > 6,
      'reset-notvisible': this.counterValue <= 6,
  }
  }
  
}

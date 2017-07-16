import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title:string = 'Angular Calculator';
  buttons:string[] = ['7','8','9','+','4','5','6','-','3','2','1','*','0','.','=','/','Backspace'];
  operation:string = '';
  
  constructor() { }

  ngOnInit() {
  }

  changeOperation(value){
    if (this.buttons.includes(value)) {
      console.log("app component", value);
      if (value !== 'Backspace') {
        this.operation += value;
      } else {
        this.operation = this.operation.substr(0, this.operation.length - 1);
      }
    }
  }
}

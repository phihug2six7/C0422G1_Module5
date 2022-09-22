import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  type: string;
  result: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculatorTotal() {
    this.result = eval(this.num1 + this.type + this.num2);
  }
}

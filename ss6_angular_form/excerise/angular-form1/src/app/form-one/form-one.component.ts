import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {
  @Output() register =new EventEmitter();
  registerFormReactive :FormGroup;
  constructor() {
    this.registerFormReactive =new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword:new FormControl("",[Validators.required,Validators.minLength(6)]),
      country:new FormControl("",[Validators.required]),
      age:new FormControl("",[Validators.required,this.validateAge]),
      gender:new FormControl("",[Validators.required]),
      phone:new FormControl("",[Validators.required,Validators.pattern("/^\\+84\\d{9,10}$/")])
    })
  };

  validateAge(age:AbstractControl){
    let ag=age.value;
    if (ag <18){
      return {'invalidAge':true}
    }
    return null;
  }

  ngOnInit(): void {
  }

  registerWithReactive() {

  }
}

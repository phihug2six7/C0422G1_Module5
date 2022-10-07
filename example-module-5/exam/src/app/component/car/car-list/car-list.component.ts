import { Component, OnInit } from '@angular/core';
import {Car} from "../../../model/car";
import {FormControl, FormGroup} from "@angular/forms";
import {HomeCar} from "../../../model/home-car";
import {CarService} from "../../../service/car.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars:Car[]=[];
  carForm:FormGroup;
  homeCarList:HomeCar[]=[];
  deleteCar:Car= null;
  page:number=0;
  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getALlCa();
  }

  getALlCa(){
    return this.carService.getAllCar(this.page).subscribe(car=>{
      // @ts-ignore
      this.cars=car.content;
      console.log(this.cars)

    })
  }

  getAllHome(){
    this.carService.getAllHome().subscribe(home=>{
      this.homeCarList=home;
    })
    this.carForm=new FormGroup({
      loaiXe:new FormControl(),
      diaDiemDi:new FormControl(),
      diaDiemDen:new FormControl(),
      gioKhoiHanh:new FormControl(),
      gioDen:new FormControl(),
      nhaXe:new FormGroup({
        id:new FormControl()
      })
    })
  }

  getDelete(id:number){
    this.carService.findByIdCar(id).subscribe(n=>{
      this.deleteCar=n;
    })
  }

  carDelete(){
    this.carService.deleteCar(this.deleteCar.id).subscribe(()=>{
      this.getALlCa();
    },error => {
      console.log(error)
    })
  }

  getFormEdit(id:number){
    var car:Car;
    this.carService.getAllHome().subscribe(homes=>{
      this.homeCarList=homes;
    })
    this.carService.findByIdCar(id).subscribe(cars=>{
      car=cars;
      this.carForm=new FormGroup({
        id:new FormControl(car.id),
        loaiXe:new FormControl(car.loaiXe),
        diaDiemDi:new FormControl(car.diaDiemDi),
        diaDiemDen:new FormControl(car.diaDiemDen),
        gioKhoiHanh:new FormControl(car.gioKhoiHanh),
        gioDen:new FormControl(car.gioDen),
        nhaXe:new FormGroup({
          id:new FormControl(car.nhaXe.id)
        })
      })
    })
  }

  updateCar(){
    var car= this.carForm.value;
    this.carService.findByIdHome(car.nhaXe.id).subscribe(homeCar=>{
      car.nhaXe=homeCar;
      this.carService.updateCar(car).subscribe(()=>{
        this.carForm.reset();
        this.getALlCa();
      },error => {
        console.log(error);
      })
    })
  }
}

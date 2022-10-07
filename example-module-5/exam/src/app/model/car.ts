import {HomeCar} from "./home-car";

export interface Car {
  id?:number;
  loaiXe?:string;
  diaDiemDi?:string;
  diaDiemDen?:string;
  gioKhoiHanh?:string;
  gioDen?:string;
  nhaXe?:HomeCar;
}

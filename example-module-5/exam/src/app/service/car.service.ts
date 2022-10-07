import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";
import {environment} from "../../environments/environment";
import {HomeCar} from "../model/home-car";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCar(page: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>("http://localhost:8080/car?page=" + page);
  }

  getAllHome(): Observable<HomeCar[]> {
    return this.httpClient.get<HomeCar[]>("http://localhost:8080/car/homeCar");
  }

  findByIdCar(id: number): Observable<Car> {
    return this.httpClient.get<Car>("http://localhost:8080" + "/car/" + id);
  }

  deleteCar(id: number): Observable<Car> {
    return this.httpClient.delete<Car>("http://localhost:8080" + "/car/" + id)
  }

  findByIdHome(id: number): Observable<HomeCar> {
    return this.httpClient.get<HomeCar>("http://localhost:8080" +"/car/homeCar/" +id);
  }
  updateCar(car: Car):Observable<Car>{
    return this.httpClient.patch<Car>("http://localhost:8080/car",car)
  }
}

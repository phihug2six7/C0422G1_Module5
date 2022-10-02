import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";

const API_URL=`${environment.API_URl}`;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { }

  getAll() :Observable<any>{
    return this.httpClient.get(API_URL+'todos');
  }
  add(todo:Todo){
    return this.httpClient.post(API_URL+'todos',todo);
  }
  findById(id:number){
    return this.httpClient.get(API_URL+'todos/'+id);
  }
  update(id:number,todo:Todo){
    return this.httpClient.put(API_URL+'todos/'+id,todo);
  }
  delete(id:number){
    return this.httpClient.delete(API_URL+'todos/'+id)
  }
}

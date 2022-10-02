import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';

const API_URL=`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Category[]>{
    return this.httpClient.get<Category[]>(API_URL +'categories');
  }
  findById(id:number):Observable<Category>{
    return this.httpClient.get<Category>(`${API_URL}/categories/${id}`);
  }
}

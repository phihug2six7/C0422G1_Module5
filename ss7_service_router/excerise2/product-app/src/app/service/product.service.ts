import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_PRODUCT = 'http://localhost:3000/products';
  private URL_CATEGORY = 'http://localhost:3000/categories';
  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_PRODUCT);
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL_CATEGORY);
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.URL_PRODUCT, product);
  }

  getId(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.URL_PRODUCT + '/' + id);
  }

  findByIdCategory(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.URL_CATEGORY + '/' + id);
  }

  editProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.URL_PRODUCT + '/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    console.log('abcxyz' + id);
    return this.httpClient.delete<Product>(this.URL_PRODUCT + '/' + id);
  }
}

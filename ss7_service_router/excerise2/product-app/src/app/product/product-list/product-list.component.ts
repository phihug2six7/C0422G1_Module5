import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete:number;
  nameDelete:string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
   return this.productService.getAll().subscribe(pro =>{
     this.products=pro;
     console.log(this.products);
   });
  }
  getIdNameDelete(id:number,name:string){
    this.idDelete=id;
    this.nameDelete=name;
  }
  delete(){
    this.productService.deleteProduct(this.idDelete).subscribe(next=>{
      this.getAll()
    });
  }
}

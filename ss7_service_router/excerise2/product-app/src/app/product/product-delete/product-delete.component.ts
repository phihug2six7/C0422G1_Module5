import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product:Product={};
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) {
    activatedRoute.paramMap.subscribe((pramMap:ParamMap)=>{
      const id=+pramMap.get('id')
      this.productService.deleteProduct(id);
    })
  }

  ngOnInit(): void {
  }
}

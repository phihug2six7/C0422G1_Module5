import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id:number;
  categories:Category[]=[];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService:CategoryService
  ) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id)
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }
  //
  // submit() {
  //   const product = this.productForm.value;
  //   this.productService.editProduct(product);
  // }

   getProduct(id: number) {
    return this.productService.getId(id).subscribe(product=>{
      this.productForm=new FormGroup({
        name:new FormControl(product.name),
        price:new FormControl(product.price),
        description:new FormControl(product.description),
        category:new FormControl(product.category.id)
      });
    });
  }

  updateProduct(id:number){
    const product=this.productForm.value;
    this.productService.findByIdCategory(this.productForm.value.category).subscribe(next =>{
      product.category=next;
    },error => {
    },()=>{
      this.productService.editProduct(id,product).subscribe(()=>{
        alert('Cập nhật thành công');
      })
    });
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(categories=>{
      this.categories=categories;
    });
  }
}

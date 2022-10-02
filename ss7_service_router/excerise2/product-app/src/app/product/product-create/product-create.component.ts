import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Category} from '../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category:new FormControl()
  });
  categories:Category[]=[];
  constructor(private productService: ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(categories=>{
      this.categories=categories;
    });
  }


  submit() {
    const product = this.productForm.value;
    this.productService.findByIdCategory(this.productForm.value.category).subscribe(next=>{
      product.category=next;
      this.productService.saveProduct(product).subscribe(()=>{
        alert('Thêm mới thành công');
        this.productForm.reset();
        this.router.navigateByUrl("")
      });
      console.log(product);
    })
  }
}

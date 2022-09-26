import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';



@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }

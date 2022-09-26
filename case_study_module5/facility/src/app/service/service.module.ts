import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';



@NgModule({
  declarations: [ServiceListComponent, ServiceCreateComponent, ServiceEditComponent],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }

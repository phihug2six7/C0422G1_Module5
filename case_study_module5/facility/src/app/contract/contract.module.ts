import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';



@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ContractModule { }

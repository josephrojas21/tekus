import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    MatTableModule
    
    
  ]
})
export class CitiesModule { }

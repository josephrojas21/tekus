import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { MatTableModule,MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule
    
  ]
})
export class CitiesModule { }

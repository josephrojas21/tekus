import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatChipsModule
  ]
})
export class HomeModule { }

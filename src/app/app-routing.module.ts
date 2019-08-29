import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: "./home/home.module#HomeModule"},
  {path:'home', loadChildren: "./home/home.module#HomeModule"},
  {path:'cities', loadChildren: "./cities/cities.module#CitiesModule"},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Cities } from './../models/cities';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HttpPostService {
  
  urlCities = 'https://patatas-air.s3.amazonaws.com/cities'
  urlDevices = 'https://patatas-air.s3.amazonaws.com/devices'
  citiesData: any[];

  constructor(private http: HttpClient) { }


  public getCities():Observable<Cities[]> {
    return  this.http.get<Cities[]>
                    (this.urlCities);
  }

  

  getDevices(){
    this.http.get(this.urlDevices).subscribe(data =>{
      console.log(data);
      
    },(error)=>{
      console.log(error);
      
    })
  }
}

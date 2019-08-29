import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {
  urlCities = 'https://patatas-air.s3.amazonaws.com/cities'
  urlDevices = 'https://patatas-air.s3.amazonaws.com/devices'

  constructor(private http: HttpClient) { }

  getCities(){
    this.http.get(this.urlCities).subscribe(data =>{
      console.log(data);
      
    },(error)=>{
      console.log(error);
      
    })
  }

  getDevices(){
    this.http.get(this.urlDevices).subscribe(data =>{
      console.log(data);
      
    },(error)=>{
      console.log(error);
      
    })
  }
}

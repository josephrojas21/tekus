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
 

  constructor(private http: HttpClient) { }


  public getCities():Observable<Cities[]> {
    return  this.http.get<Cities[]>
                    (this.urlCities);
  }

  

  public getDevices():Observable<Cities[]> {
    return  this.http.get<Cities[]>
                    (this.urlCities);
  }
}

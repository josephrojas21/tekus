import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../Services/http-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alertDevices=0;
  normalDevices=0;
  emergencyDevices=0;

  devices: any =[];
  cities: any = [];


  constructor(private dataService: HttpPostService) { }

  ngOnInit() {
    this.getDevices();
    this.getCities();
  }

  getDevices() {  
    this.dataService.getDevices()  
      .subscribe(  
        x => {
        this.devices = x;
        x.forEach(device => {
          if(device.AirQuality ===0){
            this.normalDevices++;
          }
          if(device.AirQuality === 1){
            this.alertDevices++;
          }
          if(device.AirQuality===2){
            this.emergencyDevices++;
          }
        })
    },  
    error => {  
      console.log('There was an error while retrieving Devices!' + error);  
    });
  }  

  getCities() {  
    this.dataService.getCities()  
      .subscribe(  
          x => {  
            x.forEach(city => {
              this.cities.push(city.Name)
            })
            console.log(this.cities);
            
  },  
  error => {  
    console.log('There was an error while retrieving Usuarios!' + error);  
    });
  }  

}

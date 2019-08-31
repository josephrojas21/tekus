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

  devices: any;


  constructor(private dataService: HttpPostService) { }

  ngOnInit() {
    this.getDevices();
  }

  getDevices() {  
    this.dataService.getDevices()  
      .subscribe(  
        x => {console.log(x);
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

}

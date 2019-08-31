import { HttpPostService } from './../Services/http-post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Country', 'AlertDevicesCount','WarningDevicesCount','NormalDevicesCount'];
  dataSource: any;
  urlCities = 'https://patatas-air.s3.amazonaws.com/cities'
  urlDevices = 'https://patatas-air.s3.amazonaws.com/devices'

  constructor(private dataService: HttpPostService) { }

  ngOnInit() {
    this.renderDataTable(); 
  }

  renderDataTable() {  
    this.dataService.getCities()  
      .subscribe(  
          x => {  
    this.dataSource = new MatTableDataSource();  
    this.dataSource.data = x;  
    console.log(this.dataSource.data);
  },  
  error => {  
    console.log('There was an error while retrieving Usuarios!' + error);  
    });
  }  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}

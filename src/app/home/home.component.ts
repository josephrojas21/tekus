import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../Services/http-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: HttpPostService) { }

  ngOnInit() {
  }

  renderDataTable() {  
    this.dataService.getCities()  
      .subscribe(  
          x => {  
    },  
    error => {  
      console.log('There was an error while retrieving Devices!' + error);  
    });
  }  

}

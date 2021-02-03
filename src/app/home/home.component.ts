import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newData: any;
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    
    this.apiservice.getConfig().subscribe(data => this.newData = data);
  }

}

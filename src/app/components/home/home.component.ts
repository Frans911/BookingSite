import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Special:number;
  constructor() { 
    this.Special = 1; 
  }

  ngOnInit() {
  }
  special(book:string){
    if(book == 'Hotel'){
      this.Special = 1;
    }
    if(book == "Flight"){
     this.Special =2;
    }else if(book == "Car"){
      this.Special = 3;
    }
  }
}

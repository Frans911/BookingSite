import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  name:string;
  constructor(private routes:Router) { }

  ngOnInit() {
  }

  booking(){
    if(this.name == null){
      alert("Please fill in your full name");
    }else{
      this.routes.navigate(['home']);
    }
  }
}

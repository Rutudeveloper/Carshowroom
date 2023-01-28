import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  e1 = "";
  pass = "";


  login() {
    var user = {
      e1: this.e1,
      pass: this.pass,
      
    }
    console.log("user", user)
    this.clear1()

  }
  
  clear1() {
    this.e1 = "",
      this.pass = ""
}



}

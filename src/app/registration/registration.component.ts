import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name3="";
  e2 = "";
  pass2 = "";
  which ="";
  num ="";


  register() {
    var user1 = {
      name3: this.name3,
      e2: this.e2,
      pass2: this.pass2,
      which: this.which,
      num: this.num,
    }
    console.log("user1", user1)
    this.clear1()

  }


  clear1() {
      this.e2="",
      this.pass2 = "",
      this.name3 = "",
      this.num = "",
      this.which = ""

}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carshow_room';
  nextpage = "no";
  open = "no";

  car = "no";
  staff = "no";
  part = "no";
  bill = "no";

 
  open1() {
    this.open = "yes";
    this.nextpage = "yes";
  }
  home() {
    this.open = "no";
    this.nextpage = "yes";
  }

  staffbtn() {
    this.car = "yes";
    this.staff = "no";
    this.part = "yes";
    this.bill = "yes";
  }

  carbtn() {
    this.car = "no";
    this.staff = "yes";
    this.part = "yes";
    this.bill = "yes";
  }

  partbtn() {
    this.car = "yes";
    this.staff = "yes";
    this.part = "no";
    this.bill = "yes";
  }

  billbtn() {
    this.car = "yes";
    this.staff = "yes";
    this.part = "yes";
    this.bill = "no";
  }







 
}

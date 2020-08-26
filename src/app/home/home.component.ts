import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OMFServiceService } from './../omfservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formdata;
  formGroup;
  orderId: String;
  orderDateTo: String;
  orderDateFrom: String;
  orderStatus: String;

  statusList = ["Acknowledged", "Pending", "InProgress"];

  constructor(private omfservice: OMFServiceService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      orderId: new FormControl(""),
      orderDateTo: new FormControl(""),
      orderDateFrom: new FormControl(""),
      orderStatus: new FormControl("")
    });
  }

  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }

  onClickSubmit(data) {
    this.orderId = data.orderId;
    this.orderDateTo = data.orderDateTo;
    this.orderDateFrom = data.orderDateFrom;
    this.orderStatus = data.orderStatus;

    console.log('data.orderId=' + this.orderId);
    console.log('data.orderDateTo=' + this.orderDateTo);
    console.log('data.orderDateFrom=' + this.orderDateFrom);
    console.log('data.orderStatus=' + this.orderStatus);
  }

  reset() {
    this.formdata.reset();
  }

}

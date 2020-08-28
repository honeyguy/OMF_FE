import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OMFServiceService } from './../omfservice.service';
import { Router } from '@angular/router';
import { User } from './../shared/user';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() employeeDetails = {
    employee_name: '', employee_age: '', employee_salary: 0,
    profile_image: ''
  }

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  formdata;
  formGroup;
  orderId: String;
  orderDateTo: String;
  orderDateFrom: String;
  orderStatus: String;
  user: any;

  myData: any;
  isLoading: boolean;

  statusList = ["Acknowledged", "Pending", "InProgress"];

  constructor(private omfservice: OMFServiceService, public router: Router) {
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(this.createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      orderId: new FormControl(""),
      orderDateTo: new FormControl(""),
      orderDateFrom: new FormControl(""),
      orderStatus: new FormControl("")
    });


    this.isLoading = true;
    this.omfservice
      .getUserList()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any) => {
        this.myData = data.data;
        console.log('this.myData=' + this.myData);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }

  onClickSubmit(data) {
    console.log('data=' + data);
    if (data == null) {
      console.log(data + ' == null');
    }

    if (data === null) {
      console.log(data + ' === null');
    }

    if (typeof data === 'undefined') {
      console.log(data + ' is undefined');
    }

    if (data === '') {
      console.log(data + ' is empty');
    }
    this.orderId = data.orderId;
    this.orderDateTo = data.orderDateTo;
    this.orderDateFrom = data.orderDateFrom;
    this.orderStatus = data.orderStatus;

    console.log('data.orderId=' + this.orderId);
    console.log('data.orderDateTo=' + this.orderDateTo);
    console.log('data.orderDateFrom=' + this.orderDateFrom);
    console.log('data.orderStatus=' + this.orderStatus);

    this.getOrderById(this.orderId);

  }

  reset() {
    this.formdata.reset();
  }

  getOrderById(orderId: String) {
    this.omfservice.getOrderById(orderId).subscribe((data: any) => {
      this.user = data.data;
      console.log('data is =>', this.user);
      console.log('Inside getUser - first_name =>', this.user.first_name);
      this.router.navigate(['/home']);
    })
  }

  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}




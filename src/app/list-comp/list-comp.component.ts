import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-list-comp',
  // templateUrl: './list-comp.component.html',
  template : `
      <h2> component List </h2>
      <h2> {{errorMsg}}</h2>
      <ul *ngFor = "let emplist of employeeList">
        <li> First Name : {{emplist.firstName }}</li>
        <li> Last Name : {{ emplist.lastName }} </li>
        <li> Location : {{ emplist.location }} </li>
      </ul>
  `,
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {

  public employeeList = [];
  public errorMsg;
  constructor(private _empService : EmpServiceService) { }

  ngOnInit() {
 this._empService.getEmployeList()
 .subscribe(data => this.employeeList = data, error => this.errorMsg = error);
  }

}

import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-list-comp',
  // templateUrl: './list-comp.component.html',
  template : `
      <h2> component List </h2>
      <ul *ngFor = "let emplist of employeeList">
        <li> First Name : {{emplist.firstName }}</li>
        <li> Last Name : {{ emplist.lastName }} </li>
        <li> Location : {{ emplist.location }} </li>
      </ul>
  `,
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {

  public employeeList = {};
  constructor(private _empService : EmpServiceService) { }

  ngOnInit() {
this.employeeList = this._empService.getEmployeList();
  }

}

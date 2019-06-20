import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
  <ul *ngFor="let dep of department">
  <li (click)="onSelect(dep)"> <a routerActiveLink="active"> <span class="badge"> {{dep.deptid}} </span> {{dep.name}} </a> </li>
  
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {


  public department =[
{"deptid":1, "name":"development"},
{"deptid":2, "name":"testing"},
{"deptid":3, "name":"support"},
{"deptid":4, "name":"management"}
  ];
  constructor(private router : Router) { }

  ngOnInit() {
  }
onSelect(dep){
this.router.navigate(['/departmentlist',dep.deptid]);
}
}

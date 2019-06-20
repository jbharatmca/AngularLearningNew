import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works!
    </p>

    <ul *ngFor="let emp of employee">
    <li (click)="onSelect(emp)"> <a> <span class="badge" > {{emp.id}} </span> {{emp.name }}    </a>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

public employee=[
{"id":1, "name":"Bharat" },
{"id":2, "name":"senthil"},
{"id":3, "name":"selin"},
{"id":4, "name":"push"}
];

  constructor(private router:Router) { }

  ngOnInit() {    
  }
onSelect(emp){
  this.router.navigate(['/employeelist',emp.id]);
}
}

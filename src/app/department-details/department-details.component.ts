import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-department-details',
  template: `
      <p> Department details works!</p>
      <h2> you are selected department id is : {{departmentid}} </h2>
      <a (click)="gotoPrevious">Previous </a>
      <a (click)="gotoNext">Next</a>
      
      <button (click)="gotoDepartment">DepartmentDetails</button>
  `,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentid;
  constructor(private activeRoute : ActivatedRoute, private route : Router ) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get("id"));
    //this.departmentid = id;
this.activeRoute.paramMap.subscribe((params : ParamMap) => {
let id = parseInt(params.get('id'));
this.departmentid = id;
});
}
gotoPrevious()
{
  let previousId = this.departmentid -1 ;
  this.route.navigate(['/departmentlist', previousId]);
}
gotoNext(){
  let nextId = this.departmentid + 1;
  this.route.navigate(['/departmentlist', nextId]);
}
gotoDepartment(){
  let selectedId = this.departmentid ? this.departmentid : null;
  this.route.navigate(['/departmentlist',{id:selectedId}]);
}
}

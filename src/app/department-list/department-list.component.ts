import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router' 


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

public selectedId;
  public department =[
{"deptid":1, "name":"development"},
{"deptid":2, "name":"testing"},
{"deptid":3, "name":"support"},
{"deptid":4, "name":"management"}
  ];
  constructor(private router : Router,private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params : ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
    
    for (let dep of this.department)
    {
      if(dep.deptid === this.selectedId)
          {
            const index = this.department.findIndex(order => order.deptid === this.selectedId);
            this.department.splice(index,1);       
          }          
    }
    console.log(this.department);
  }
onSelect(dep){
this.router.navigate(['/departmentlist',dep.deptid]);
//this.router.navigate([dep.id],{ relativeTo:this.activeRoute});
}
}

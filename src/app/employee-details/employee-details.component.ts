import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  template: `
    <p>
      employee-details works!
    </p>
    <h2> select employee id : {{empid}} </h2>
    <button (click)="gotoPrevious">Previous</button>
    <button (click)="gotoNext">Next</button>
    
    <button (click)="gotoEmpDetails"> EmployeeDetail </button>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public empid ;
  constructor(private activeRoute : ActivatedRoute, private route : Router) { }

  ngOnInit() {
    //let id = parseInt(this.router.snapshot.paramMap.get("id"));
    //this.empid= id;
    this.activeRoute.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.empid=id;
    });

    }
  gotoPrevious(){
    let previousid=this.empid - 1;
    this.route.navigate(['/employeelist',previousid]);
  }
  gotoNext(){
    let nextId = this.empid + 1 ;
    this.route.navigate(['/employeelist',nextId]);
  }
  gotoEmpDetails(){
    let selectedId = this.empid ? this.empid : null;
    this.route.navigate(['/employeelist',{id:selectedId}]);
  }
}

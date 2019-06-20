import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  //{path:'', redirectTo= '/departmentlist', pathMatch ='full'},

{path : 'departmentlist', component:DepartmentListComponent},
{path : 'departmentlist/:id' , component:DepartmentDetailsComponent},
{path : 'employeelist',component:EmployeeListComponent},
// Active routing 
{path : 'employeelist/:id', component:EmployeeDetailsComponent},
//wildcardd routing

{path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
  EmployeeDetailsComponent
];

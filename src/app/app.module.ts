import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent  } from './test/test.component';
import { CompIntComponent } from './comp-int/comp-int.component';
import { ListCompComponent } from './list-comp/list-comp.component';
import { EmpServiceService } from './emp-service.service';
import { HttpClientModule }  from '@angular/common/http';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CompIntComponent,
    ListCompComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule       
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

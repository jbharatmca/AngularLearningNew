import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent  } from './test/test.component';
import { CompIntComponent } from './comp-int/comp-int.component';
import { ListCompComponent } from './list-comp/list-comp.component';
import { EmpServiceService } from './emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CompIntComponent,
    ListCompComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule        
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

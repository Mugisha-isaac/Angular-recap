import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {employeeComponent} from '../employee/employee.component';
import { EmployeeListComponent } from 'src/employee-list/employee-list.component';
import { EmployeeTitlePipe } from 'src/custom-pipes/employeeTitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

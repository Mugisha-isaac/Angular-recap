
import {Component} from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class employeeComponent{
  firstName: string = 'Mugisha';
  lastName: string = 'Isaac';
  age: number = 20;
  gender: string = 'Male';
  showDetails: boolean = false;

 toggleDetails(): void{
  this.showDetails = !this.showDetails
 }

}

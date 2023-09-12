import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';

  firstName: string = 'Tom';
  lastName: string = 'Hopkins';

   getFullName(): string {
    return this.firstName + ' ' + this.lastName;
   }
}

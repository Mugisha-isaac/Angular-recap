import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
      Your text: <input type="text" [(ngModel)] = 'userText'  />
         <br/><br/>
       <simple [simpleInput] = 'userText'></simple>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  imagePath: string = 'content/v1/5a09a654e5dd5bcfe00c5f3a/1592211840043-27ZDQFXXJZPBJHOBVWR4/Photo+10-06-2020%2C+6+36+58+PM.jpg?format=1500w';
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  isDisabled: boolean = true;
  Name: string = 'Tom';
  userText: string = 'Pragim';

   getFullName(): string {
    return this.firstName + ' ' + this.lastName;
   }

}

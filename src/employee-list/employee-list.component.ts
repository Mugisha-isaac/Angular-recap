import {Component} from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent{

employees: any = [];

selectedEmployeeRadioButtonCount: string = 'all';

constructor(){
  this.employees= [
    { code: 'emp101', name: 'Tom', gender: 'male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    { code: 'emp102', name: 'Alex', gender: 'male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    { code: 'emp103', name: 'Mike', gender: 'male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    { code: 'emp104', name: 'Mary', gender: 'female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
    {code: 'emp105', name: 'Nancy', gender: 'female', annualSalary: 6700.826,dateOfBirth: '12/15/1982' }
];
}

getTotalEmployeesCount(): number{
  return this.employees.length;
}

getTotalMaleEmployees(): number{
  const maleEmployees = this.employees.filter((employee:any)=> employee.gender === 'male');
  return maleEmployees.length;
}

getTotalFemaleEmployees(): number{
  const femaleEmployees = this.employees.filter((employee: any)=>employee.gender === 'female')
  return femaleEmployees.length;
}

onEmployeeCountRadioChange(selectedRadioButtonValue: any): void{
  this.selectedEmployeeRadioButtonCount = selectedRadioButtonValue;
  console.log('selected value....', this.selectedEmployeeRadioButtonCount);
}
}

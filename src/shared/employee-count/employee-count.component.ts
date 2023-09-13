import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'employee-count',
  templateUrl:'./employee-count.component.html',
  styleUrls:['./employee-count.component.scss']
})

export class EmployeeCountComponent{

  selectedRadioButtonValue: string = 'all';

  @Output()
  countRadioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();


  @Input()
  all!: number;

  @Input()
  male!: number;

  @Input()
  female!: number;

  onRadioSelectionChange():void{
    this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
  }
}

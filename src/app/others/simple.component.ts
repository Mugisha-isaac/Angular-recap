import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";


@Component({
  selector: 'simple',
  template: `
          You entered: {{simpleInput}}
  `
})
export class SimpleComponent implements OnChanges
{
  ngOnChanges(changes: SimpleChanges): void {
    for(let propertyName in changes){
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
    }
  }
  @Input() simpleInput!: string;
}

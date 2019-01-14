import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-button',
    template: `
    <button (click)="addPerson($event)">{{ label }}</button>
  `,
  styles: [`
      button {
          border: solid 3px;
          padding: 8px 10px;
          background: #bada55;
          font-size: 20px;
      }`
  ],
    encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {

    @Input() label = 'Add Person';
    @Output() action = new EventEmitter<Array<String>>();

    private numberOfClicks = 0;
    private persons = [];

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit: Button Component created');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges:', changes);
    }

    addPerson(event) {
        console.log('handleClick() function called');
        this.numberOfClicks++;
        this.persons.push('Person ' + this.numberOfClicks);
        this.action.emit(this.persons);
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }
}




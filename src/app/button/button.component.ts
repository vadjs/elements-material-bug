import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-button',
    template: `
    <button (click)="handleClick($event)">{{ label }}</button>
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

    @Input() label = '';
    @Output() action = new EventEmitter<number>();

    private numberOfClicks = 0;

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges:' + changes);
    }

    handleClick(event) {
        console.log('handleClick() function called');
        this.numberOfClicks++;
        this.action.emit(this.numberOfClicks);
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }
}




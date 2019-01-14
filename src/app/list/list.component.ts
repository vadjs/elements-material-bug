import { Component, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() persons = [];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit: List Component created.');
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges: List Component', changes);
  }

  ngOnDestroy() {
    console.log('ngOnDestry: List Component destroyed.');
  }

}

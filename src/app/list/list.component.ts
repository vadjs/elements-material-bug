import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ListComponent implements OnInit {
  @Input() persons = [];

  constructor() { }

  ngOnInit() {
    console.log('NgOnInit: List Component created');
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AddPersonComponent implements OnInit {
  public persons = [];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit: Add Person Component created.');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Add Person Component destroyed.');
  }

  getPersons(ev) {
    console.log(ev);
    this.persons = ev;
  }

}

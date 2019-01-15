import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'custom-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AddPersonComponent implements OnInit {
  public persons = [];
  private _title;

  constructor(personService: PersonService) {
    this.title = personService.getTitle();
  }

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

  get title() {
    return this._title;
  }

  set title(val) {
    this._title = val;
  }

}

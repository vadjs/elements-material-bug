import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private _title = 'Angular Elements Demo';

  constructor() {
    console.log('Initialising PersonService');
  }

  getTitle() {
    return this._title;
  }
}

import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy'; // workaround, fixes https://www.npmjs.com/package/elements-zone-strategy



/**
 * CUSTOM app.module.ts to generate web-components
 */
@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        ListComponent,
        AddPersonComponent
    ],
    imports: [
        BrowserModule
    ],
    entryComponents: [AddPersonComponent], // so they don't get dropped when tree-shaking
    providers: [],
    // bootstrap: [AddPersonComponent] // this is no longer needed as we're manually bootstrapping with ngDoBootstrap
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {

      // CHANGE DETECTION BUG: use ElementZoneStrategyFactory to fix it as a temporary solution
      // https://github.com/angular/angular/issues/24732
      // https://www.npmjs.com/package/elements-zone-strategy
      const strategyFactory = new ElementZoneStrategyFactory(AddPersonComponent, this.injector); // workaround

      // const customElement = createCustomElement(AddPersonComponent, {injector: this.injector}); // without workaround
      const customElement = createCustomElement(AddPersonComponent, { injector: this.injector, strategyFactory }); // workaround

      customElements.define('custom-add-person', customElement);
    }
}


/**
 * CLASSIC EXAMPLE OF app.module.ts
 */
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
//
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

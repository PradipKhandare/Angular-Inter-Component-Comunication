import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { NewsubcComponent } from './newsubc/newsubc.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponentComponent,
    NewsubcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

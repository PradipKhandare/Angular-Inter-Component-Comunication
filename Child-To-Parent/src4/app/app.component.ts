import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Assignment8';

  message:string[] = [];
  addData(value : string)
  {
    this.message.push(value);
  }

}

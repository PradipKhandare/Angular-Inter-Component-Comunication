import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  constructor(){};
  @Output() public MyEvent = new EventEmitter();

  public SendEvent(value: string)
  {
    this.MyEvent.emit(value);
  }
  ngOnInit(): void {

  }
}

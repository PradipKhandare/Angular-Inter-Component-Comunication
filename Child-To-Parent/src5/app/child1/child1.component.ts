import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{
  constructor(){};
  @Output() myEvent = new EventEmitter();
  public SendEvent() : any
  {
    this.myEvent.emit("Hello from child");
  }

  @Input() public parentData : any;

  ngOnInit(): void
  {

  }
}

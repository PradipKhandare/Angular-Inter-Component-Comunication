import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit
{

  @Output() public MyEvent = new EventEmitter();

  public SendEvent()
  {
    this.MyEvent.emit('hello Parent');
  }
  constructor(){}
  ngOnInit(): void {

  }

}

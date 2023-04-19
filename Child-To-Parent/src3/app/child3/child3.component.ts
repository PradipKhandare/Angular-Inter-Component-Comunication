import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit
{
  @Output() public MyEvent = new EventEmitter();

  public SendEvent()
  {
    this.MyEvent.emit('Hello parent, I am child component!!');
  }
  constructor(){}

  ngOnInit(): void {

  }
}

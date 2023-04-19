import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{

    //Create object of Event class.
    @Output() public MyEvent = new EventEmitter();

    //Action Listener for button

    public SendEvent()
    {
      //send event to parent
      this.MyEvent.emit('hello parent, from child');
    }

    constructor(){}

  ngOnInit(): void {

  }
}

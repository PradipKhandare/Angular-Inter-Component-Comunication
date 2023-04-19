import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {
    //add input decorator as it will receive the data from parents.
    @Input() public ParentData:any
      constructor() {}
      ngOnInit() {

      }
}

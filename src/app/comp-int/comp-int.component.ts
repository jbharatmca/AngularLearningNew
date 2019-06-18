import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comp-int',
  template: ` <h2> {{name}} </h2>
  <button (click)="fireEvent()">child page</button>
  `,
  styleUrls: ['./comp-int.component.css']
})
export class CompIntComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit("Child component message");
  }

}

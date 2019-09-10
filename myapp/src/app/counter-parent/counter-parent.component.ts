import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
@ViewChild(CounterComponent, {static: true}) counterComponent: CounterComponent;
  constructor() { }
  increase() {
    this.counterComponent.increasebyone();
  }
  decrease() {
    this.counterComponent.decreasebyone();
  }
  ngOnInit() {
  }

}

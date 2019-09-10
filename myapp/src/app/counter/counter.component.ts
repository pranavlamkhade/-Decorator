import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
massage: string = '';
count: number = 0;
  constructor() { }
increasebyone() {
  this.count = this.count + 1;
  this.massage = 'Counter :' + this.count;
}
decreasebyone() {
  this.count = this.count - 1;
  this.massage = 'Counter :' + this.count;
}
  ngOnInit() {
  }

}

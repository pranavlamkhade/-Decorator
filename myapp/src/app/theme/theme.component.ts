import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements AfterViewInit {
@ViewChild('name', {static: true}) elname: ElementRef;
@ViewChild('state', {static: true}) elstate: ElementRef;
ngAfterViewInit() {
  this.elname.nativeElement.style.backgroundColor = 'black';
  this.elname.nativeElement.style.color = 'white';
  this.elstate.nativeElement.style.backgroundColor = 'cyan';
  this.elstate.nativeElement.style.color = 'red';
}

  constructor() { }

  ngOnInit() {
  }

}

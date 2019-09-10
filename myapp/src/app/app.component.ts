import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  example = 'Touch me i am @hostListner Example';

  constructor() { }
@HostListener('click') onclick() {
  alert('clicked');
}
@HostListener('mouseover') onmouseover() {
  console.log('mouseover');
}

}


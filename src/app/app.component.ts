import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new1';
  color = 'white';

  onWhiteClick(headColor:string)
  {
    this.color=headColor;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  color :string = 'deepskyblue';
  constructor() { }

  ngOnInit(): void {
  }
  switchColor()
  {
    this.color = 'blue';
  }

}

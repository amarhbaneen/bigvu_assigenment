import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  canvasColor:string = 'white'; // the background of the canvas , i kept it white by default


  constructor( ) { }

  ngOnInit(): void {
  }

  switchColorBlue() // change the value of the canvasColor to blue
  {
    this.canvasColor = 'blue';
  }
  switchColorWhite() // change the value of the canvasColor to white
  {
    this.canvasColor = 'white';
  }



}

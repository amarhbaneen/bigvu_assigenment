import {Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  canvasColor:string = 'white'; // the background of the canvas , i kept it white by default
   @Output() onWhiteClick = new EventEmitter<string>();

  constructor( ) { }

  ngOnInit(): void {
  }

  switchColorBlue() // change the value of the canvasColor to blue
  {
    this.onWhiteClick.emit('blue');
  }
  switchColorWhite() // change the value of the canvasColor to white
  {
    this.onWhiteClick.emit('white');
  }



}

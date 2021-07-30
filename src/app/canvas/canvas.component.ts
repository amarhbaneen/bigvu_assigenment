import {Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input('canvasBackground') canvasColor_ : string = "white";






  constructor() { }

  ngOnInit(): void {
  }

}

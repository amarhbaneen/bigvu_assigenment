import {Component, OnInit, Input} from '@angular/core';
import {people} from "./people.model";
import bigvuPeople from 'src/assets/presenters.json';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input('canvasBackground') canvasColor_: string = "white";

  presenters: people[] = bigvuPeople; // an array that include name and image source of each presenter
  // the data imported from JSON file using API
  imgSource = ''; // string variable will  contain the image source that user choose  <<see the html file line 10
  userChoose = ''; /// string variable will contain the string of user choose for dropdown menu
  inputText = ''; // string variable will be empty at the start in case that user doesnt insert text
  // in case the user insert text the function (writeOnCanvas(event: Event)  will insert the input of text to this variable

  constructor() {

  }

  ngOnInit(): void {

    }

  ImageOnCanvas(name: string) //a function that listen to user choose  and draw the image of the selected on the canvas
  {
    for(let i of this.presenters) // looking for the image of the name have been chosen be the user from dropdown menu
    {
      if(i.name == name)
        this.imgSource = i.value; // if the name is match insert the value of the name to the image source
    }
    // creating new canvas to draw by getting the element using id i gave it ib html file
    let canvas = <HTMLCanvasElement> document.getElementById('myCanvas')
    // choosing the way to draw on canvas 2d for drawing in two dimensional (x,y)
    let ctx = canvas.getContext('2d')

    let media = new Image(); // creating a new image variable  to contain the image source
    media.src = this.imgSource;
    media.onload = function() { // function to load (draw) the image on the selected canvas
      // @ts-ignore
      ctx.drawImage( media, 0, 0, media.width / 2, media.height, 0, 0, canvas.width - 0.2, canvas.height);
      // (image , x axis to start drawing , y axis to start drawing , The width of the sub-rectangle of the source image to draw into the destination context , he height of the sub-rectangle of the source image to draw into the destination context
      // The x-axis coordinate in the destination canvas at which to place the top-left corner of the source , The y-axis coordinate in the destination canvas at which to place the top-left corner of the source ,
      //The width to draw the image in the destination canvas , The width to draw the image in the destination canvas
      // for more information about this function visit : " https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage"

    }
  }


  writeOnCanvas(event: Event) // a function that listen to user input and write it on the canvas
    {
      this.inputText = (<HTMLInputElement>event.target).value; // getting the value of text through the ngmodel
      // creating new canvas to draw by getting the element using id i gave it ib html file
       let canvas = <HTMLCanvasElement> document.getElementById('myCanvas')
      // choosing the way to draw on canvas 2d for drawing in two dimensional (x,y)
      let ctx = canvas.getContext('2d')

      // @ts-ignore

      // @ts-ignore
      ctx.font = '50pt Inter'; // the font and size of the text will be write on canvas
      // @ts-ignore
      ctx.fillStyle = "lightgrey"; // the color of the text
      // @ts-ignore
      ctx.fillText(this.inputText,100,200); // the text position where it will be written on the canvas
      // @ts-ignore
      let media = new Image();
      media.src = 'https://i.imgur.com/5KYZ1M2.jpg';
      media.onload = function() {
        // @ts-ignore

      }

    }






}


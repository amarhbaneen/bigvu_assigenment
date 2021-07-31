import {Component, OnInit} from '@angular/core';
import {people} from "../whitecanvas/people.model";
import bigvuPeople from "../../assets/presenters.json";

@Component({
  selector: 'app-blue-canvas',
  templateUrl: './blue-canvas.component.html',
  styleUrls: ['./blue-canvas.component.css']
})
export class BlueCanvasComponent implements OnInit {


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

  ImageOnCanvas(name: string) //a function that listen to user choose  and draw the image of the selected on the blue canvas
  {
    for (let i of this.presenters) // looking for the image of the name have been chosen be the user from dropdown menu
    {
      if (i.name == name)
        this.imgSource = i.value; // if the name is match insert the value of the name to the image source
    }
    // creating new whitecanvas to draw by getting the element using id i gave it ib html file
    let canvas = <HTMLCanvasElement>document.getElementById("canvas_photo")
    // choosing the way to draw on blue canvas 2d for drawing in two dimensional (x,y)
    let ctx = canvas.getContext('2d')

    let media = new Image(); // creating a new image variable  to contain the image source
    media.src = this.imgSource;

    media.onload = function () { // function to load (draw) the image on the selected blue canvas
      // @ts-ignore
      ctx.drawImage(media, 20, 20, canvas.width * 0.94, canvas.height * 0.9);
      //(image source , x axis where to start drawing the image ,y axis where to start drawing
      // max width to draw the image ,max height to draw the image
      //
    }
  }


  writeOnCanvas(Input: string) // a function that listen to user input and write it on the blue canvas
  {
    // getting the value of text through the ngmodel
    // creating new blue canvas to draw by getting the element using id i gave it ib html file
    let canvas = <HTMLCanvasElement>document.getElementById('canvas_text')
    // choosing the way to draw on whitecanvas 2d for drawing in two dimensional (x,y)
    let ctx = canvas.getContext('2d')


    // @ts-ignore
    ctx.font = '40pt Inter'; // the font and size of the text will be write on bluecanvas
    // @ts-ignore
    ctx.fillStyle = "white"; // the color of the text
    // @ts-ignore
    ctx.textBaseline = 'middle';
    // @ts-ignore
    ctx.textAlign = "center";
    // @ts-ignore
    ctx.fillText(Input, canvas.width / 2, canvas.height / 2); // the text position where it will be written on the bluecanvas
    // @ts-ignore


  }

  updateCanvas() { // function to update  text on Canvas
    let canvas = <HTMLCanvasElement>document.getElementById('canvas_text') // function to update  text on Canvas
    // choosing the way to draw on whitecanvas 2d for drawing in two dimensional (x,y)
    let ctx = canvas.getContext('2d')
    // @ts-ignore
    ctx.clearRect(0, 0, canvas.width, canvas.height);// clearing the whole canvas from photo and text that have been drawn on (in case there is )
    this.writeOnCanvas(this.inputText);// rewrite (draw) the text on the canvas
  }


  onKey(event: KeyboardEvent) {// function get the text of the input by any update from the user keyboard
    this.inputText = (<HTMLInputElement>event.target).value;// converting the html element we got from the event to string and store it in the inputText
    this.updateCanvas();// running the function to update  text on Canvas
  }
}

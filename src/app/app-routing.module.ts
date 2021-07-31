import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {CanvasComponent} from "./whitecanvas/canvas.component";
import {BlueCanvasComponent} from "./blue-canvas/blue-canvas.component";

const routes: Routes = [
  {path :'',component:CanvasComponent}, //the default component will be shown its the white canvas component instead of leaving it empty
  {path :'white',component:CanvasComponent}, // the link(path) point to white canvas component
  {path :'blue',component:BlueCanvasComponent} // the link(path) point to blue canvas component

];

@NgModule(
  {
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  }
)
export class AppRoutingModule {}

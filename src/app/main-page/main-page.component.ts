import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(){
    console.log("CUCU nao esperavas por mim")
    throw new Error('Error Test');

    console.log("Hello")
  }

}

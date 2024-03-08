import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shoppingListApp';
  eventChoice: string;
  constructor(){

  }

  ngOnInit(){

  }

  changePage(event: string){
    this.eventChoice = event;
    console.log("hey");
    
  }

}

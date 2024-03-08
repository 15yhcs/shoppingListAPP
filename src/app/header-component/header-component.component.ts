import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  listClicked: string;
  @Output('liClicked') clickedList = new EventEmitter<string>();
  constructor(){

  }

  ngOnInit(){

  }

  clickItem(event){
    this.listClicked = event.target.innerHTML
    this.clickedList.emit(this.listClicked)
  }
}

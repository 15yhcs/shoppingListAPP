import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.modal';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('EditName', {static: false}) nameRef: ElementRef;
  @ViewChild('EditAmount', {static: false}) amountRef: ElementRef;
  @Output('newItem') addNewItemToList = new EventEmitter<Ingredients>();
  constructor(){

  }

  ngOnInit(){

  }

  formNewItem(){
    this.addNewItemToList.emit(new Ingredients(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value))
  }
}

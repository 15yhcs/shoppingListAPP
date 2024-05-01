import { Component, DoCheck, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.modal';
import { shoppingListService } from '../../shared/service/shoppingListService';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent{
  @ViewChild('EditName', {static: false}) nameRef: ElementRef;
  @ViewChild('EditAmount', {static: false}) amountRef: ElementRef;
  constructor(private spSvc: shoppingListService){

  }

  ngOnInit(){
    console.log(this.nameRef);
    
  }

  formNewItem(){
    this.spSvc.addToIngreList(new Ingredients(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value))
  }

}

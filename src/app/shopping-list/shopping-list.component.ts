import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredients[]= [new Ingredients("sample", "2")];
  constructor(){

  }

  ngOnInit(){

  }

  addToIngreList(e){
    this.ingredients = [...this.ingredients, new Ingredients(e.name, e.amount)]
  }
}

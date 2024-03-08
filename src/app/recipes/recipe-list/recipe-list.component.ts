import { Component, Output,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  receipes: Recipe[] = [
    new Recipe('Pizza', 'Buy a pizza and Microwave it', '/assets/img/pizza.avif', 'two slice of baby oil')
  ];
  test = this.getRandomInt(20)
  @Output() itemDetails = new EventEmitter<{Description: string, Ingre: string}>()
  constructor(){

  }

  ngOnInit(){

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getNewRecipe(){
    this.receipes.push(new Recipe(`Pizza ${this.test}`, `Buy a pizza and Microwave it`, '/assets/img/pizza.avif', 'baby oil'))
  }

  sendItemDetails(e){
    this.itemDetails.emit(e)
  }
}

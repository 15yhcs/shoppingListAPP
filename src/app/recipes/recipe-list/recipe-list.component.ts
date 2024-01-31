import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  receipes: Recipe[] = [
    new Recipe('Pizza', 'Buy a pizza and Microwave it', '/assets/img/pizza.avif')
  ];
  test = this.getRandomInt(20)
  constructor(){

  }

  ngOnInit(){

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getNewRecipe(){
    this.receipes.push(new Recipe(`Pizza ${this.test}`, `Buy a pizza and Microwave it`, '/assets/img/pizza.avif'))
  }
}

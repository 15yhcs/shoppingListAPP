import { Component, Output,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../../shared/ingredient.modal';
import { recipeListService } from '../../shared/service/recipeService';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  receipes: Recipe[] = [];
  id: number;
  // @Output() itemDetails = new EventEmitter<{Description: string, Ingre: string}>()
  constructor(private rcSvc: recipeListService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.receipes = this.rcSvc.getRecipes()
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getNewRecipe(){
    console.log(this.route.snapshot);
    
    this.router.navigate(['new'], {relativeTo: this.route});
    this.id = this.rcSvc.getRecipes().length
    this.rcSvc.pushRecipes(this.id)
    this.receipes = this.rcSvc.getRecipes()
  }

  // sendItemDetails(e){
  //   console.log("send");
    
  //   this.itemDetails.emit(e)
  // }
}

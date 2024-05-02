import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { recipeListService } from '../../shared/service/recipeService';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit, OnDestroy{
  collapse: boolean = false;
  recipeCur: Recipe
  routSub: Subscription;
  constructor(private svc:recipeListService, private route:ActivatedRoute){

  }
  ngOnInit(){
    // this.svc.recipesSelected.subscribe(
    //   (recipt: Recipe) => (this.recipeCur = recipt
      
    //   ))
    this.routSub = this.route.params.subscribe((param: Params) => {
      this.recipeCur = this.svc.findRecipes(+param.id)
      
    })
  }

  ngOnDestroy(): void {
    this.routSub.unsubscribe()
  }
  dpItems: String[] = ["Add ingrediant", "Edit ingrediant", "Delete ingrediant"];
}

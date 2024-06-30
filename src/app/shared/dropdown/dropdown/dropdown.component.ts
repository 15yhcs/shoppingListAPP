import { Component, DoCheck, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { shoppingListService } from '../../service/shoppingListService';
import { RecipeDetailComponent } from '../../../recipes/recipe-detail/recipe-detail.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { recipeListService } from '../../service/recipeService';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements DoCheck, OnInit, OnDestroy{
  @Input() dropDownItem: String[];
  @Input("pInput") parent: RecipeDetailComponent;
  editSub: Subscription;
  editPermission: Boolean;
  editContent;
  constructor(private spSvc: shoppingListService, private route: ActivatedRoute, private router: Router, private rcSvc: recipeListService){
  
  }

  ngDoCheck(){
    console.log("PrentItem", this.parent);
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  clickActions(item){
    console.log(this.parent);
    
    if(item === "Add ingrediant"){
      this.spSvc.addToIngreList({name: this.parent.recipeCur.name, amount: this.parent.recipeCur.ingrediantsList.amount})
    }

    if(item === "Edit ingrediant"){
      this.route.params.subscribe((param: Params) => {
        this.editPermission = this.rcSvc.findRecipes(+param.id).id === 1 ? false : true;
        this.editContent = this.rcSvc.findRecipes(+param.id);
        console.log(this.editContent);
        
      })
      if(this.editPermission){
        this.router.navigate(['edit'], {
          relativeTo: this.route,
          queryParams: {
            name: this.editContent.name,
            description: this.editContent.description,
            ingrediants: this.editContent.ingrediants,
            ingrediantName: this.editContent.ingrediantsList.name,
            ingrediantAmount: this.editContent.ingrediantsList.amount,
            id: this.editContent.id
          }
        })
      }
      else{
        this.router.navigate(['.../'], {relativeTo: this.route})
        console.log("noPermission");
        
      }
    }
    if(item === "Delete ingrediant"){
      this.rcSvc.deleteRecipes(this.parent.recipeCur.id)
      this.router.navigate(['delete'], {relativeTo: this.route})
    }
  }
}
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
      this.spSvc.addToIngreList({name: this.parent.recipeCur.name, amount: 3})
    }

    if(item === "Edit ingrediant"){
      this.route.params.subscribe((param: Params) => {
        this.editPermission = this.rcSvc.findRecipes(+param.id).id === 1 ? false : true;
      })
      if(this.editPermission){
        this.router.navigate(['edit'], {relativeTo: this.route})
      }
      else{
        this.router.navigate(['.../'], {relativeTo: this.route})
        console.log("noPermission");
        
      }
    }
  }
}

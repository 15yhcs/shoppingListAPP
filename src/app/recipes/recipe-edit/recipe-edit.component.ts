import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { recipeListService } from '../../shared/service/recipeService';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';
import { Ingredients } from '../../shared/ingredient.modal';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit, AfterViewInit{
    editRecipeForm: FormGroup;
    updateForm = {
      name : null,
      description: null,
      ingrediants: null,
      ingrediantName : null,
      ingrediantAmount : null,
      id: null
    }
    constructor(private rvcSvc: recipeListService, private router: Router, private route: ActivatedRoute){

    }

    
    ngOnInit(): void {
      console.log(this.route.snapshot.queryParams);
      this.editRecipeForm = new FormGroup({
        'name' : new FormControl(null),
        'description' : new FormControl(null),
        'ingrediants' : new FormControl(null),
        'ingrediantsList' : new FormGroup({
          'ingrediantName' : new FormControl(null),
          'ingrediantAmount' : new FormControl(null)
        })
      })
    }

    ngAfterViewInit(): void {
      this.route.queryParams.subscribe((param: Params) => {
        this.updateForm.name = param.name
        this.updateForm.description = param.description
        this.updateForm.ingrediants = param.ingrediants
        this.updateForm.ingrediantName = param.ingrediantName
        this.updateForm.ingrediantAmount = param.ingrediantAmount
        this.updateForm.id = +param.id
      })
      this.editRecipeForm.setValue({
        'name': this.updateForm.name,
        'description': this.updateForm.description,
        'ingrediants': this.updateForm.ingrediants,
        'ingrediantsList' : {
          'ingrediantName' : this.updateForm.ingrediantName,
          'ingrediantAmount' : this.updateForm.ingrediantAmount
        }
      })
    }

    onSubmit(){
      console.log(this.updateForm.id);
      
      const cur_id: number = this.updateForm.id !== 0 && !this.updateForm.id ? this.rvcSvc.getRecipes().length : this.updateForm.id;
      console.log(cur_id);
      
      console.log(this.rvcSvc.findRecipes(cur_id));
      
      if(this.rvcSvc.findRecipes(cur_id)){
        console.log("Entered");
        
        let idx = this.rvcSvc.getRecipes().findIndex(item => 
          item.id === cur_id
        )
        console.log(idx);
        console.log((<FormGroup>this.editRecipeForm).get('name').value);
        
        this.rvcSvc.updateRecipes(idx, new Recipe(
          (<FormGroup>this.editRecipeForm).get('name').value, 
          (<FormGroup>this.editRecipeForm).get('description').value,
          this.rvcSvc.getRecipes()[idx].imagePath,
          (<FormGroup>this.editRecipeForm).get('ingrediants').value,
          cur_id,
          new Ingredients((<FormGroup>this.editRecipeForm).get('ingrediantsList.ingrediantName').value, (<FormGroup>this.editRecipeForm).get('ingrediantsList.ingrediantAmount').value)))

        console.log(this.rvcSvc.getRecipes());
        
      }
      else{
        console.log("Not Entered");
      
        this.rvcSvc.pushRecipesWithContent({
          'name': (<FormGroup>this.editRecipeForm).get('name'),
          'description': (<FormGroup>this.editRecipeForm).get('description'),
          'ingrediants': (<FormGroup>this.editRecipeForm).get('ingrediants'),
          'ingrediantName': (<FormGroup>this.editRecipeForm).get('ingrediantsList.ingrediantName'),
          'ingrediantAmount': (<FormGroup>this.editRecipeForm).get('ingrediantsList.ingrediantAmount'),
          'id' : cur_id
        })
      }
      this.router.navigate(['/receipes',cur_id]);
    }


}

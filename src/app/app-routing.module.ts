import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RecipeItemsComponent } from "./recipes/recipe-list/recipe-items/recipe-items.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { EmptyItemComponent } from "./empty-item/empty-item.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'shoppingList', component: ShoppingListComponent },
    { path: 'receipes', component: RecipesComponent, children: [
        { path: '', component: EmptyItemComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent},
    ]},
    { path: '**', redirectTo: '' },
  ];



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModules {

}
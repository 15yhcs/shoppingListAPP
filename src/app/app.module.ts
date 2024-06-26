import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropownDirective } from './shared/dropdown.directive';
import { DropdownComponent } from './shared/dropdown/dropdown/dropdown.component';
import { recipeListService } from './shared/service/recipeService';
import { shoppingListService } from './shared/service/shoppingListService';
import { AppRoutingModules } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EmptyItemComponent } from './empty-item/empty-item.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValueChangeDirective } from './shared/input-value-change.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropownDirective,
    DropdownComponent,
    HomePageComponent,
    EmptyItemComponent,
    RecipeEditComponent,
    InputValueChangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModules,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    recipeListService,
    shoppingListService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

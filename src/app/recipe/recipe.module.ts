import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListsComponent } from './recipe-lists/recipe-lists.component';

@NgModule({
  declarations: [IndexComponent, RecipeDetailsComponent, RecipeListsComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RecipeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [IndexComponent, RecipeComponent, ViewComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RecipeModule {}

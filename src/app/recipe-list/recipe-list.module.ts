import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';




@NgModule({
  declarations: [IndexComponent, ViewComponent, EditComponent, CreateComponent],
  imports: [
    CommonModule,
    RecipeListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipeListModule { }

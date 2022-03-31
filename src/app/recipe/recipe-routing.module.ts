import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'recipe', redirectTo: 'recipe/index', pathMatch: 'full' },
  { path: 'recipe/index', component: IndexComponent },
  { path: 'recipe/:recipeId/view', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'recipes/index', pathMatch: 'full' },
  { path: 'recipes/index', component: IndexComponent },
  { path: 'recipes/:recipeId/view', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}

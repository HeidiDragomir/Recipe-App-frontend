import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { IndexComponent } from './index/index.component';
import { RecipeComponent } from './recipe.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  { path: '', redirectTo: 'recipes/index', pathMatch: 'full' },

  { path: 'recipes/index', component: IndexComponent },

  { path: 'recipes/:recipeId/view', component: RecipeComponent },

  { path: 'myrecipes', component: ViewComponent, canActivate: [AuthGuard] },
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'recipelist', redirectTo: 'recipelist/index', pathMatch: 'full' },

  {
    path: 'recipelist/:recipelistId/view',
    component: ViewComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'recipelist/create',
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recipelist/:recipelistId/edit',
    component: EditComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'recipelist/index',
    component: IndexComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeListRoutingModule {}

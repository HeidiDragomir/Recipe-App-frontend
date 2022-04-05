import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipeAPI } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  id!: number;
  public package: any = {};
  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['recipeId'];

    this.recipeService.getRecipe(this.id).subscribe((data) => {
      this.recipe = data;
    });
  }

 /*  saveRecipe(recipe: any) {
    this.package = {
      title: recipe.title,
      img: recipe.image,
    };
    this.recipeService.saveRecipe(this.id).subscribe((res: any) => {
      this.router.navigateByUrl('recipes/index');
    });
  } */

 saveRecipe(recipe: any) {
    this.package = {
      title: recipe.title,
      image: recipe.image,
    };
    this.recipeService
      .saveRecipe(this.package).subscribe((res: any) => {
        this.router.navigateByUrl('recipes/index');
      });
      
  }
  /*
  handleResponse(data: any) {
    console.log(data);
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: any) {
    error = error.error.errors;
  } */
  /* submit() {
    this.recipeService.saveRecipe(this.id).subscribe((res) => {
      this.router.navigateByUrl('recipes/index');
    });
  } */
}

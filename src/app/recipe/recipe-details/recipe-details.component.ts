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
  id!: number | string;
  image!: string;
  label!: string;
  ingredientLines!: string;
  recipe: Recipe[] = [];
  recipeId!: string;

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['recipeId'];

    this.recipeService.getRecipe(this.id).subscribe((data: any) => {
      this.recipe = data.hits;
      console.log(this.recipe);
    });
  }

  /* ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.params['recipeId']).subscribe((data: RecipeAPI) => {
      this.recipe = data.hits.map(hit => {
        let recipe = hit.recipe;
        // recipe.id = recipe.uri.slice(-32);
        return recipe;
      }); 
        
    });
  } */
}

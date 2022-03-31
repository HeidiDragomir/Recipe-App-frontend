import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe, RecipeAPI } from '../recipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipes: Recipe[] = [];
  search!: string;
  

  constructor(public recipeService: RecipeService) {}

 /*  ngOnInit(): void {
    this.recipeService.getAllRecipes(this.search).subscribe((data: RecipeAPIdata) => {
      this.recipes[0] = data.hits[0].recipe;
      console.log(this.recipes);
    });
  } */

  ngOnInit(): void {
    this.recipeService.getAllRecipes(this.search).subscribe((data: RecipeAPI) => {
      this.recipes = data.hits.map(res => res.recipe);
      console.log(this.recipes);
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe, RecipeAPI} from '../recipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipes: Recipe[] = [];
 

  constructor(public recipeService: RecipeService) {}

 
  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data: RecipeAPI) => {
      this.recipes = data.results;
      console.log(this.recipes);
    });
  }
}

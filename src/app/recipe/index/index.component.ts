import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(public recipeService: RecipeService) {}

  /* ngOnInit(): void {
    this.recipeService.getAll().subscribe((data: RecipeAPIdata) => {
      this.recipes[2] = data.hits[2].recipe;
      console.log(this.recipes);
    });
  } */

  ngOnInit(): void {
    this.recipeService.getAll().subscribe((data: Recipe[]) => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }
}

import { Component, OnInit } from '@angular/core';


import { Recipe, RecipeAPI} from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipes: Recipe[] = [];
  searchinput: any;
  test: any;
 
  dietLabel: any;
  intoleranceLabel: any;
  mealTypeLabel: any;
  cuisineLabel: any;

 

  constructor(public recipeService: RecipeService) {}

 
  ngOnInit(): void {
   this.recipeService.getAllRecipes().subscribe((data: RecipeAPI) => {
      this.recipes = data.results;
      console.log(this.recipes);
    });
  }


  handleRecipeSearch = () => {
    this.recipeService
      .getSearchRecipes(this. searchinput, this.dietLabel, this.intoleranceLabel, this.mealTypeLabel, this.cuisineLabel )
      .subscribe(
        (data) => {
          if (data) {
            this.recipes = data.results;
        console.log(this.recipes);
          } else {
            console.log('no results');
          }
        
        });      
        
      } 
}

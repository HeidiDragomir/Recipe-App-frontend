import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe, RecipeAPI } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipes: Recipe[] = [];
  searchRecipe!: FormGroup;

  constructor(
    public recipeService: RecipeService,
    public fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe((data: RecipeAPI) => {
      this.recipes = data.results;
      console.log(this.recipes);
    });
    this.searchRecipe = this.fb.group({
      query: '',
      type: '',
      diet: '',
    });
  }

  handleRecipeSearch = () => {
    const searchForm = this.searchRecipe.getRawValue();
    const data = {
      query: searchForm.query,
      type: searchForm.type,
      diet: searchForm.diet,
    };
    this.recipeService
      .searchRecipe(data)
      .subscribe((res: any) => {
        this.recipes = Object(res).results;
      });
  };
}

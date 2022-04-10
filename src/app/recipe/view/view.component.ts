import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListService } from 'src/app/recipe-list/recipe-list.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  id!: number;
  recipes: Recipe[] = [];
  recipe: any;
  

  constructor(
    public recipeListService: RecipeListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  //de lasat
  ngOnInit(): void {
    this.recipeListService.getAll().subscribe((data: Recipe[]) => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }

/*  ngOnInit() {
    
    this.recipeService
      .getRecipe(this.route.snapshot.params["id"])
      .subscribe((data) => {
        this.recipe = data;
        console.log(this.recipes);
      });

     this.recipeList.currentMessage.subscribe(
      message => (this.message = message)
    );
  } */

  deleterecipe(id: number) {
    this.recipeListService.deleterecipe(id).subscribe((res) => {
      this.recipes = this.recipes.filter((item) => item.id !== id);
      console.log('Recipe deleted successfully!');
    });
  }

  handleResponse(data: any) {
    console.log(data);
  }

  handleError(error: any) {
    error = error.error.errors;
  }
}

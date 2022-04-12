import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { RecipeListService } from '../recipe-list/recipe-list.service';
import { RecipeService } from './recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: any;
  id!: number;
  form!: FormGroup;
  package: any = {};

  constructor(
    public recipeService: RecipeService,
    public recipeListService: RecipeListService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['recipeId'];
    this.recipeService.getRecipe(this.id).subscribe((data) => {
      this.recipe = data;
    });
  }

  saveRecipe(recipe: any) {
    this.id = this.route.snapshot.params['recipeId'];

    this.package = {
      recipeId: this.recipe.id,
      title: this.recipe.title,
      image: this.recipe.image,
    };

    this.recipeListService.addRecipe(this.package).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    data = 'Recipe Added!';
    alert(data);
  }

  handleError(error: any) {
    error = 'Recipe Already Exist';
    alert(error);
  }
}

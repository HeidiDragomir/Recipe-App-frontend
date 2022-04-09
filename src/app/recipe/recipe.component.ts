
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
// import { ImpServiceService } from '../imp-service.service';
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
  public package: any = {};
  constructor(
    public recipeService: RecipeService,
    public recipeListService: RecipeListService,
    // private impService: ImpServiceService,
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
      image: this.recipe.image
      
    };
    console.log(this.package);
   this.recipeListService
      .addRecipe(this.package)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  

  handleResponse(data: any) {
    console.log(data);
    
  }

  handleError(error: any) {
    error = error.error.errors;
  }
  /* submit() {
    this.recipeService.saveRecipe(this.id).subscribe((res) => {
      this.router.navigateByUrl('recipes/index');
    });
  } */
}

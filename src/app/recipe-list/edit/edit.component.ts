import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/recipe/recipe';
import { RecipeList } from '../recipe-list';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  recipelist!: RecipeList;
  form!: FormGroup;
  recipeTitle!: Recipe;

  constructor(
    public recipeListService: RecipeListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['recipelistId'];
    this.recipeListService.find(this.id).subscribe((data: RecipeList[]) => {
      this.recipelist = data[0];
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.recipeListService
      .addRecipeList(this.id, this.form.value, this.recipeTitle)
      .subscribe((res: any) => {
        console.log('List updated successfully!');
        this.router.navigateByUrl('recipelist/index');
      });
  }
}

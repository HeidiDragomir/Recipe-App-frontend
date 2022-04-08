import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(public recipeListService: RecipeListService,
    private router: Router) { }

    ngOnInit(): void {
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required])
      });
    }
    get f(){
      return this.form.controls;
    }

    submit(){
      console.log(this.form.value);
      this.recipeListService.create(this.form.value).subscribe((res:any) => {
           console.log('List created successfully!');
           this.router.navigateByUrl('recipelist/index');
      })
    }
}

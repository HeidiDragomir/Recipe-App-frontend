import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { RecipeList } from '../recipe-list';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  recipelists: RecipeList[] = [];

  constructor(public recipeListService: RecipeListService,
     public router: Router) {}

  ngOnInit(): void {
    this.recipeListService.getAllList().subscribe((data: RecipeList[]) => {
      this.recipelists = data;
      console.log(this.recipelists);
    });
  }

  deleterecipelist(id: number) {
    this.recipeListService.delete(id).subscribe((res) => {
      this.recipelists = this.recipelists.filter((item) => item.id !== id);
      console.log('List deleted successfully!');
    });
  }
}

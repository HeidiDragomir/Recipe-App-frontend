import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeList } from '../recipe-list';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {

  id!: number;
  recipelist!: RecipeList;
 
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
  }
}

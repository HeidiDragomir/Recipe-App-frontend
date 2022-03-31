export interface Recipe {
  id?: number;
  label: string;
  ingredientLines: [];
  image: string;
  recipeId: number | string;
    // date: any;
}


export interface Hit {
  recipe: Recipe;
  
}

export interface RecipeAPI {
  hits: Hit[];
  
}
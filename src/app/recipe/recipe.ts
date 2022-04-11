export interface Recipe {
  id: number;
  title: string;
  image: any;
  recipeId: string;
  readyInMinutes: number;
  servings: number;
  spoonacularSourceUrl: string;
  healthScore: number;
  dishTypes: [];
  
  
}
export interface RecipeAPI {
    results: Recipe[];
  }

  


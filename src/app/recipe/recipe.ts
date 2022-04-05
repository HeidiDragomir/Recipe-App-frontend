export interface Recipe {
  id: number;
  title: string;
  calories: number;
  image: string;
  readyInMinutes: number;
  servings: number;
  spoonacularSourceUrl: string;
  healthScore: number;
  dishTypes: [];
  
  
}
export interface RecipeAPI {
    results: Recipe[];
  }


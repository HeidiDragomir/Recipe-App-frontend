export interface Recipe {
  id: number;
  title: string;
  calories: number;
  image: string;
  
}
export interface RecipeAPI {
    results: Recipe[];
  }


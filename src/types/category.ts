export interface Categoryprops {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface MealListType {
  meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
}
export interface CategoryList {
  length: number;
  categories: Categoryprops[];
}



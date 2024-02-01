export interface MealDetailType {
  meals: [MealDatalistType | MealValueType];
}

export interface MealDatalistType {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: null;
  strIngredient17: null;
  strIngredient18: null;
  strIngredient19: null;
  strIngredient20: null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: null;
  strMeasure17: null;
  strMeasure18: null;
  strMeasure19: null;
  strMeasure20: null;
  strSource: null;
  strImageSource: null;
  strCreativeCommonsConfirmed: null;
  dateModified: null;
}

export interface MealValueType {
  [key: string]: string | null;
}

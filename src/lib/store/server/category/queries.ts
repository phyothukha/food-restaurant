import axios from "@/lib/api";
import { CategoryList, MealListType } from "@/types/category";
import { MealDetailType } from "@/types/Meal";

export const getCategory = async () => {
  try {
    const response = await axios.get<CategoryList>("/categories.php");
    return response.data;
  } catch (err: any) {
    throw new Error("something went wrong", err);
  }
};

export const getMealByCategory = async (category: string) => {
  try {
    const response = await axios.get<MealListType>(`/filter.php?c=${category}`);
    return response.data;
  } catch (err: any) {
    throw new Error("something went wrong", err);
  }
};

export const getMealDetail = async (idMeal: string) => {
  try {
    const response = await axios.get<MealDetailType>(`/lookup.php?i=${idMeal}`);

    return response.data;
  } catch (err: any) {
    throw new Error("something went wrong", err);
  }
};

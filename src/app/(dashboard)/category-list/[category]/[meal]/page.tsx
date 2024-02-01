import MealData from "@/app/(dashboard)/layout/MealData";
import { getMealDetail } from "@/lib/store/server/category/queries";
import React, { FC } from "react";

interface ParamsProps {
  params: {
    category: string;
    meal: string;
  };
}

const MealDetail: FC<ParamsProps> = async ({ params }) => {
  const mealId = params.meal;
  const DeatilData = await getMealDetail(mealId);
  const meal = DeatilData.meals;

  return (
    <div className=" mt-10">
      <div className=" relative mb-5">
        <h1 className=" text-2xl font-bold uppercase contents mb-2 before:absolute before:w-32 before:h-1 before:bg-red-400 before:bottom-0">
          Detail Meals
        </h1>
      </div>
      <MealData meal={meal} />
    </div>
  );
};

export default MealDetail;

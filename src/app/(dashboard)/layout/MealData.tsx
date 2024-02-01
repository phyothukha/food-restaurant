"use client";
import { MealDatalistType, MealValueType } from "@/types/Meal";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface Mealdataprops {
  meal: [MealDatalistType | MealValueType];
}

const MealData: FC<Mealdataprops> = ({ meal }) => {
  const [ingredient, setIngredient] = useState<string[]>();
  const [measureArray, setMeasureArr] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const tags = meal[0].strTags?.split(",");
  console.log(tags);
  const instructions = meal[0].strInstructions
    ?.split("\r\n")
    .filter((inst) => inst.length > 1);
  console.log(instructions);

  useEffect(() => {
    setLoading(true);
    const extractIngredient = () => {
      if (meal && meal.length > 0) {
        const ingredients = [];
        const measureArr = [];
        for (let p in meal[0]) {
          if (p.startsWith("strIngredient")) {
            const ingredientName = (meal[0] as MealValueType)[p] as string;
            if (ingredientName?.length > 1) {
              ingredients?.push(ingredientName);
            }
          }
          if (p.startsWith("strMeasure")) {
            const measureName = (meal[0] as MealValueType)[p] as string;
            if (measureName && measureName?.length > 1) {
              measureArr.push(measureName);
            }
          }
        }

        setIngredient(ingredients);
        setMeasureArr(measureArr);
        setLoading(false);
      }
    };

    extractIngredient();
  }, [meal]);
  const singleArray = {
    image: meal[0].strMealThumb as string,
    category: meal[0].strCategory,
    title: meal[0].strMeal as string,
    instruction: meal[0].strInstructions,
    source: meal[0].strSource,
  };

  return (
    <div className=" mt-10 shadow-lg bg-opacity-40 p-5">
      <div className=" flex justify-evenly gap-3">
        <div className=" w-1/2">
          <Image
            src={singleArray.image}
            alt={singleArray.title}
            width={500}
            height={500}
          />
        </div>
        <div className=" flex flex-col gap-3 w-1/2">
          <h1 className=" text-2xl font-bold text-blue-800">
            {singleArray.title}
          </h1>
          <p className=" text-xl mt-2 font-normal text-black">
            category-name: {singleArray.category}
          </p>
          {tags && tags.length > 0 && (
            <div className=" text-xl items-center mt-2 flex gap-3 font-normal text-black">
              tags:
              {tags?.map((items, idx) => (
                <small className=" p-1 border " key={idx}>
                  {items}
                </small>
              ))}
            </div>
          )}
          <p className=" text-xl mt-2 text-black">
            source:
            {singleArray.source ? (
              <Link href={singleArray.source} className=" hover:underline">
                {singleArray.source.substring(0, 40)}...
              </Link>
            ) : (
              <span>Not Found</span>
            )}
          </p>
          <div className=" border p-3 mt-3">
            <h1 className=" text-xl text-black font-bold mb-5">Ingredient</h1>
            <ul className=" grid grid-cols-4">
              {loading ? (
                <li>
                  <h1>loading...</h1>
                </li>
              ) : (
                ingredient?.map((items, index) => (
                  <li key={index}>
                    {index + 1}: &nbsp; {items}
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className=" border p-3 mt-3">
            <h1 className=" text-xl text-black font-bold mb-5">Measure Ment</h1>
            <ul className=" grid grid-cols-4">
              {loading ? (
                <li>
                  <h1>loading...</h1>
                </li>
              ) : (
                measureArray?.map((items, idx) => <li key={idx}>{items}</li>)
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className=" border w-full p-3 mt-5">
        <h1 className=" text-xl font-bold mb-4 text-black">Instruction</h1>
        <ul className="space-y-5">
          {instructions?.map((item, index) => (
            <li key={index} className=" space-x-3">
              <span>{index + 1}:</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealData;

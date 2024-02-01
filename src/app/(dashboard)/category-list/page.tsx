import Carousel from "@/components/carousel";
import { getCategory } from "@/lib/store/server/category/queries";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const CategoryList = async () => {
  const category = await getCategory();

  return (
    <main className=" mt-10">
      <h1 className=" text-center text-4xl font-bold">
        You can order this food Category List!
      </h1>
      <Carousel items={category} />
    </main>
  );
};

export default CategoryList;

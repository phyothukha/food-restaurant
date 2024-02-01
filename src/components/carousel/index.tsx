"use client";

import { CategoryList } from "@/types/category";
import Image from "next/image";
import React, { LegacyRef, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function convertRef<T>(
  ref: React.MutableRefObject<T | undefined | null>
): LegacyRef<T> {
  return ref as LegacyRef<T>;
}

const Carousel = ({ items }: { items: CategoryList }) => {
  const carouselContainer = useRef<HTMLUListElement>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const router = useRouter();

  const navigate = (dir: string) => {
    const container = carouselContainer.current;
    console.log(container);
    if (container) {
      const scroll =
        dir === "left"
          ? Math.max(container?.scrollLeft - container?.offsetWidth, 0)
          : Math.min(container?.scrollLeft + container?.offsetWidth, 2524);
      console.log(scroll);
      container?.scrollTo({
        left: scroll,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className=" mt-20">
      <ul
        className=" flex overflow-y-hidden mb-10"
        ref={convertRef(carouselContainer)}
      >
        {items.categories.map((category, index) => {
          return (
            <li
              key={category.idCategory}
              style={{
                transform: `translateX(-${(activeIndex - 1) * 100}%)`,
              }}
              className="transition-transform duration-1000 ease-in"
            >
              <div className=" flex min-w-[81.25rem] justify-center mx-auto">
                <div className=" flex w-full justify-around items-center">
                  <Image
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    priority
                    width={400}
                    height={400}
                  />
                  <div className=" w-[500px]">
                    <h1 className=" text-6xl capitalize text-cyan-600 font-mono font-bold text-center">
                      {category.strCategory}
                    </h1>
                    <p className=" text-gray-500 font-normal ">
                      {category.strCategoryDescription.substring(0, 100)}...
                    </p>

                    <Button
                      className=" mt-10"
                      onClick={() =>
                        router.push(`/category-list/${category.strCategory}`)
                      }
                    >
                      See Items
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className=" relative">
        <div className=" flex justify-between w-full top-[50%] absolute z-30">
          <Button onClick={() => navigate("left")}>prev</Button>
          <Button onClick={() => navigate("right")}>Next</Button>
        </div>
        <ul
          className=" gap-3 overflow-y-hidden flex relative"
          ref={convertRef(carouselContainer)}
        >
          {items.categories.map((category, index) => (
            <li
              key={index}
              className="cursor-pointer bg-opacity-50 min-w-[15.1rem] rounded-lg bg-gray-500 p-5"
              onClick={() => {
                const id = parseFloat(category.idCategory);
                setActiveIndex(id);
                console.log(id);
              }}
            >
              <Image
                src={category.strCategoryThumb}
                alt="category-item"
                width={400}
                height={400}
                className=" w-auto h-auto hover:scale-110"
              />
              <p className=" text-end pr-3 font-normal font-sans">
                {category.strCategory}
              </p>
              <p className="px-2">
                {category.strCategoryDescription.substring(0, 40)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;

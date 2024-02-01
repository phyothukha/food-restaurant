import Link from "next/link";
import Image from "next/image";
import { getCategory } from "@/lib/store/server/category/queries";

const Categorysection = async () => {
  const categories = await getCategory();

  return (
    <div className="">
      <h1 className=" text-xl font-bold my-10">Our Categories List</h1>
      <ul className=" grid md:grid-cols-4 grid-cols-2 gap-3 place-items-center mt-20">
        {categories.categories
          .map((category) => (
            <li key={category.idCategory} className=" relative">
              <div className=" inline-block bg-opacity-50 rounded-lg bg-gray-500 w-64 h-36">
                <Image
                  src={category.strCategoryThumb}
                  alt="category-item"
                  width={150}
                  height={150}
                  className=" -mt-10 hover:scale-110"
                />
                <p className=" text-end pr-3 font-normal font-sans">
                  {category.strCategory}
                </p>
                <p className="px-2">
                  {category.strCategoryDescription.substring(0, 40)}
                  <Link href={"/category"}>
                    <span className="hover:underline">see more</span>
                  </Link>
                </p>
              </div>
            </li>
          ))
          .slice(0, 4)}
      </ul>
      <Link href={"/category-list"}>
        <h1 className=" text-end mt-5">All Category List {">>"}</h1>
      </Link>
    </div>
  );
};

export default Categorysection;

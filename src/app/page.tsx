import Image from "next/image";
import SectionImage from "@/assets/seafood-pizza-removebg-preview.png";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Categorysection from "@/app/(dashboard)/layout/Categorysection";
import Herosection from "./(dashboard)/layout/Herosection";

export default async function Home() {
  return (
    <main className=" flex-1 container mx-auto py-10 h-full divide-y-2">
      <section className=" flex flex-wrap mb-32 justify-between items-center">
        <aside>
          <p className=" mb-5 text-blue-800 font-bold font-sans text-2xl">
            Easy Way to Order your food!
          </p>
          <h1 className=" lg:text-6xl text-4xl text-white font-semibold font-mono ">
            Order Tasty & <br /> Fresh Food <br />
            <span className=" text-red-600">anytime!</span>
          </h1>
          <p className=" my-5 font-normal text-lg font-serif">
            Just Confirm your order and enjoy our deleicious fastest delivery
          </p>
          <div className=" flex mt-10">
            <button className=" bg-pink-500 text-white font-bold capitalize px-4 py-2 rounded-full select-none shadow-custom">
              order Now
            </button>
            <Link
              href={"/menu"}
              className=" flex justify-center   items-center ms-4 font-bold capitalize hover:underline text-pink-800 "
            >
              see menu
              <AiOutlineDoubleRight className="mt-1" />
            </Link>
          </div>
        </aside>
        <div className=" flex md:justify-center h-96 relative md:right-20 md:left-0 left-[50%] md:translate-x-1 translate-x-[-50%] top-20">
          <Image src={SectionImage} alt="" width={400} height={400} />
          <div className=" absolute flex flex-col animate-bounce duration-4000 justify-center gap-5 items-center -right-10 my-auto -top-20 w-96 h-40 rounded-lg bg-white shadow-lg bg-opacity-40">
            <p>Happy Customers</p>
            <Herosection />
          </div>
        </div>
      </section>

      <Categorysection />
    </main>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const NoContent = () => {
  const router = useRouter();

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-6xl text-yellow-300 font-custom ">
          404 not found
        </h1>
        <p className=" text-xl font-mono font-bold text-blue-900">
          Your content is not here ! Please go back to your home
        </p>
        <Button onClick={() => router.push("/")}>Go Back</Button>
      </div>
    </div>
  );
};

export default NoContent;

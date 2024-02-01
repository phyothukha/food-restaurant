"use client";
import React, { useState } from "react";
import Link from "next/link";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className=" flex justify-between items-center relative bg-opacity-40 rounded-md">
      <Link href={"/"}>
        <h1 className=" font-custom text-3xl font-semibold text-white">
          Phyo
          <span className=" text-red-500">Food</span>
        </h1>
      </Link>
      <nav>
        <ul className=" md:flex hidden gap-5 capitalize">
          <Link href={"/"}>
            <li className=" font-bold">home</li>
          </Link>
          <Link href={"/menu"}>
            <li className=" font-bold">menu</li>
          </Link>
          <Link href={"/order"}>
            <li className=" font-bold">order</li>
          </Link>
        </ul>

        <ul
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setShow(!show)}
        >
          <span
            className={` inline-block w-10 bg-black  h-1 transition duration-150 ${
              show && "rotate-45 -translate-x-1 translate-y-1"
            }`}
          ></span>
          {!show && (
            <span className=" inline-block w-10 bg-black  h-1 transition duration-150"></span>
          )}
          <span
            className={` inline-block w-10 bg-black  h-1 duration-150 ${
              show && "-rotate-45 -translate-x-1 -translate-y-1"
            }`}
          ></span>
        </ul>

        {show && (
          <ul className=" capitalize rounded-md  flex flex-col bg-orange-500 w-full items-center absolute left-[50%] -translate-x-[50%] top-28">
            <Link href={"/"}>
              <li className=" font-bold p-2">home</li>
            </Link>
            <Link href={"/menu"}>
              <li className=" font-bold p-2">menu</li>
            </Link>
            <Link href={"/order"}>
              <li className=" font-bold p-2">order</li>
            </Link>
          </ul>
        )}
      </nav>
      <ul className=" md:flex hidden gap-5">
        <li>
          <Input
            type="text"
            placeholder="Search"
            className=" placeholder:text-black focus-visible:outline-none"
          />
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarFallback className=" bg-transparent cursor-pointer border">
                  L
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-44 bg-white right-0">
              <DropdownMenuLabel>MyAccount</DropdownMenuLabel>

              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Menu</DropdownMenuItem>
              <DropdownMenuItem>Order</DropdownMenuItem>
              <DropdownMenuSeparator className=" font-bold bg-black" />
              <DropdownMenuItem>
                <Button>Logout</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </header>
  );
};

export default Header;

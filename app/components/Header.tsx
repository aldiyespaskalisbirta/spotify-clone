"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Handle logout later
  };
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        {/* // ! THIS DIV ONLY SHOWING IN MEDIUM TO LARGE SCREEN */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition-opacity"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition-opacity"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        {/* // ! THIS DIV ONLY SHOWING IN SMALL TO MEDIUM SCREEN */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition-opacity">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition-opacity">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        {/* // ! THIS DIV ALWAYS SHOWING */}
        {/* // TODO: CREATE LOGIN AND LOGOUT BUTTON */}
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Log In
              </Button>
            </div>
          </>
        </div>
      </div>
      {/* // ! THIS CHILDREN THAT PASSING FROM PAGE.TSX */}
      {children}
    </div>
  );
};

export default Header;

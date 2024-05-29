import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-24 z-50 h-12 ">
      <div>
        <span>My-Amigo</span>
      </div>
      <div className=" flex-center gap-4">
        <span>Create</span>
        <span>Storage</span>
      </div>
      <div>
        <span className="flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

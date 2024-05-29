import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center py-8 px-4 sm:px-24 z-50 h-12 ">
      <div>
        <span>My-Amigo</span>
      </div>
      <div className=" hidden sm:flex justify-center items-center gap-2 md:gap-4 lg:gap-8  "> 
        <span className="">Create</span>
        <span className="">Storage</span>
        <span>Showcase</span>
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

'use client';

import { Button } from "@/components/ui/button";

import { BellIcon } from "@radix-ui/react-icons";

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export const Navbar = async () => {
  return (
    <header className="sticky top-0 z-40 mr-4 flex w-full bg-transparent md:mr-14">
      <div className="flex h-2 w-full flex-row bg-transparent py-2">
        <div className="basic-1/3"></div>
        <div className="flex basic-1/3 w-full justify-end">
          <div className="mr-2">
            <div className="flex justify-center align-middle h-[50px] w-[120px] rounded-full bg-blue-500/90 shadow-sm shadow-blue-400/50">
              <Button
                variant="outline"
                className="bg-blue-300 border-0 rounded-full text-blue-950 w-[35px] h-[35px] mt-1.5 p-0">
                  <BellIcon className="w-5 h-5"  />
                {/* show counter red */}
                <span className="absolute right-14 mr-3 top-2 rounded-full bg-red-500 px-1 text-[8px] text-sm font-semibold text-white focus:outline-none">
                  3
                </span>
              </Button>
              <Button className="rounded-full mt-1.5 hover:bg-blue-100 bg-blue-300 ml-4 p-1">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </Button>
            </div>
          </div>
        </div>
      </div>    
    </header>
  )
}



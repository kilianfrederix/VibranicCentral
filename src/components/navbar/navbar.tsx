import React from 'react';
import { GearIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  return (
    <header className="w-full bg-white drop-shadow-xl">
      <div className="h-13 py-2 pr-4">
        <div className="grid w-full grid-cols-3 justify-center ">
          <div></div>{' '}
          {/* this is a spacer to place the logo in the middle of the screen */}
          <div className="flex w-[100%] flex-row justify-center">
            <Image
              src="/white-large-logo.png"
              alt="Logo"
              width={170}
              height={10}
            />
          </div>
          <div className="flex flex-row justify-end">
            <Link
              href="/settings"
              className="flex cursor-pointer items-center space-x-2 rounded-md"
            >
              <GearIcon className=" size-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";

import {
  SearchIcon,
  UserGroupIcon,
  PlusCircleIcon,
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky-top-0 z-50'>
      <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 h-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm focus:ring-black focus:border-black rounded-md border-gray-300"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className='relative navBtn'>
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img className="h-10 rounded-full cursor-pointer" src='data:image/jpeg;base64,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'/>
        </div>
      </div>
    </div>
  );
};

export default Header;

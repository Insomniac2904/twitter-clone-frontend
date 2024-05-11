import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { Inter } from "next/font/google";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import Feedcard from "@/components/Feedcard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56 '>
        <div className='col-span-3 px-4  pt-2 ml-15'>
          <div className='text-2xl h-fit rounded-full p-4 cursor-pointer transition-all hover:bg-gray-800 mt-2 w-fit'>
            <BsTwitter />
          </div>
          <div className='mt-1 px-3 text-1xl'>
            <ul>
              {SideBarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer'>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <ul>
              <div className='mt-5 px-3'>
                <button className='bg-[#1d9bf0] p-2 rounded-full w-full text-[16px]'>
                  Tweet
                </button>
              </div>
            </ul>
          </div>
        </div>
        <div
          className='col-span-6 border-r-[0.5px] border-l-[0.5px] border border-slate-800
        h-screen overflow-scroll no-scrollbar  '>
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
        </div>
        <div className='col-span-3'></div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
const Feedcard: React.FC = () => {
  return (
    <div className='border-slate-700 p-4 hover:bg-slate-900 hover:border-[0.5px] transition-all cursor-pointer'>
      <div className='grid grid-cols-12 '>
        <div className='col-span-1'>
          <Image
            className='rounded-full'
            src={
              "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            }
            alt='user-avatar'
            height={40}
            width={40}
          />
        </div>
        <div className='col-span-11 pl-5'>
          <h5>Adarsh Kumar</h5>
          {/* <pre> */}
          <p className='text-[12px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            reprehenderit natus possimus esse dolorum maiores, rerum
            voluptatibus minima, aliquid blanditiis dolorem itaque id animi
            atque quod rem, nisi repellat nihil.
          </p>
          {/* </pre> */}
          <div className='flex justify-between mt-5 text-xl pr-10 items-center'>
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedcard;

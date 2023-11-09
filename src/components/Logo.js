import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-16 h-16 bg-blue-800 text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent
            dark:border-light'
            whileHover={{
                backgroundColor: ["rgb(30,64,175)", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "rgb(30,64,175)"],
                transition:{duration:1, repeat: Infinity}
            }}
            >ET</MotionLink>
        </div>
    );
};

export default Logo;
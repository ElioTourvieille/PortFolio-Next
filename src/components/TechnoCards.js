import React from 'react';
import Image from "next/image";

const TechnoCards = ({ title, imgUrl }) => {
    return (
        <>
            <ul className="flex justify-center flex-row flex-wrap px-20 m-8">
                <li className="list-none flex flex-col items-center justify-center p[30px] ">
                    <div className={"w-[350px] h-[80px] px-8 py-4 bg-gray-200 flex flex-row rounded-[5px] items-center shadow-dark-100 drop-shadow-xl " +
                        "dark:bg-gray-800"}>
                        <Image className="w-[60px] m-7" src={imgUrl} alt={`Logo de ${title}`}/>
                            <span className="font-semibold text-lg dark:text-light">{title}</span>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default TechnoCards;
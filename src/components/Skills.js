import {useState} from "react";
import TechnoCards from "@/components/TechnoCards";
import techImg1 from "../../public/images/technos/html.svg";
import techImg2 from "../../public/images/technos/css.svg";
import techImg3 from "../../public/images/technos/tailwind.svg";
import techImg4 from "../../public/images/technos/js.png";
import techImg5 from "../../public/images/technos/react.svg";
import techImg6 from "../../public/images/technos/next.svg";
import techImg7 from "../../public/images/technos/php.svg";
import techImg8 from "../../public/images/technos/mysql.png";
import techImg9 from "../../public/images/technos/node.png";
import techImg10 from "../../public/images/technos/python.svg";
import techImg11 from "../../public/images/technos/photoshop.png";
import techImg12 from "../../public/images/technos/illustrator.svg";
import techImg13 from "../../public/images/technos/xd.svg";

const Skills = () => {

    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }

    const fronts = [
        {
            title: "HTML5",
            imgUrl: techImg1,
        },
        {
            title: "CSS3",
            imgUrl: techImg2
        },
        {
            title: "Tailwind",
            imgUrl: techImg3
        },

        {
            title: "JavaScript",
            imgUrl: techImg4
        },
        {
            title: "React",
            imgUrl: techImg5
        },
        {
            title: "Next.js",
            imgUrl: techImg6
        },
    ]

    const backs = [
        {
            title: "PHP",
            imgUrl: techImg7,
        },
        {
            title: "MySQL",
            imgUrl: techImg8
        },
        {
            title: "Node.js",
            imgUrl: techImg9
        },
        {
            title: "Python",
            imgUrl: techImg10
        },
    ]

    const tools = [
        {
            title: "PhotoShop",
            imgUrl: techImg11,
        },
        {
            title: "Illustrator",
            imgUrl: techImg12
        },
        {
            title: "Adobe XD",
            imgUrl: techImg13
        },
    ]

    return (
        <>
            <h2 className='font-bold text-7xl mt-40 mb-24 w-full text-center lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'>Compétences</h2>
            <div className='mx-auto max-w-7xl'>
            <p className="font-medium">`Mon axe d'apprentissage est orienté full-stack et toutes les technologies et outils qui gravitent autour, afin
               de pouvoir être impliqué dans les différentes étapes d'un projet.</p>
            <p className='my-4 font-medium'>La formation et les projets que j'ai effectués m'ont naturellement orientés vers une stack MERN
                (MongoDB, Express, React, Node). Cependant, comme chaque projet possèdent leurs propres spécificités,
                je reste ouvert à l'apprentissage et l'utilisation des différentes technologies disponibles.</p>
            <p className='my-4 font-medium'>Je vois le métier de développeur comme un apprentissage permanent d'un ensemble de technologies qui
                ne font qu'évoluer; c'est pourquoi mon appétence s'étend à tout ce qui touche mon métier, de près ou
                de loin.</p>
            <p className='font-medium'>Mon objectif long terme est de me spécialiser dans le développement d'applications (web ou mobile).</p>
            </div>
                <div className="m-16">
                    <div className="flex justify-center items-center mx-auto mb-10">
                        <input type="radio" name="tab1" id="tab1" className="hidden" defaultChecked/>
                        <label htmlFor="tab1" className={`font-semibold border-r-0 border-2 border-dark border-solid rounded-l-3xl cursor-pointer py-4 px-28
            hover:bg-dark hover:text-light transition-all ease duration-300
            ${activeTab === 'tab1' ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-light text-dark dark:bg-dark dark:text-light'}
            dark:border-light
            lg:px-16 lg:text-sm md:px-12 sm:px-10 sm:py-3 sm:text-xs xs:px-6 xs:py-2
            `} onClick={() => handleTabChange('tab1')}
                        >FRONTEND</label>

                        <input type="radio" name="tab2" id="tab2" className="hidden"/>
                        <label htmlFor="tab2" className={`font-semibold border-2 border-dark border-solid cursor-pointer py-4 px-28
            hover:bg-dark hover:text-light transition-all ease duration-300
            ${activeTab === 'tab2' ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-light text-dark dark:bg-dark dark:text-light'}
            dark:border-light
            lg:px-16 lg:text-sm md:px-12 sm:px-10 sm:py-3 sm:text-xs xs:px-6 xs:py-2
            `} onClick={() => handleTabChange('tab2')}
                        >BACKEND</label>

                        <input type="radio" name="tab3" id="tab3" className="hidden"/>
                        <label htmlFor="tab3" className={`font-semibold border-l-0 border-2 border-dark border-solid rounded-r-3xl cursor-pointer py-4 px-28
            hover:bg-dark hover:text-light transition-all ease duration-300
            ${activeTab === 'tab3' ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-light text-dark dark:bg-dark dark:text-light'}
            dark:border-light
            lg:px-16 lg:text-sm md:px-12 sm:px-10 sm:py-3 sm:text-xs xs:px-6 xs:py-2
            `} onClick={() => handleTabChange('tab3')}
                        >OUTILS</label>
                    </div>

                    <div className={activeTab === 'tab1' ? 'flex flex-wrap justify-center' : 'hidden'}>
                        {fronts.map((front, index) => {
                            return (
                                <TechnoCards
                                    key={index}
                                    {...front}
                                />
                            )
                        })}
                    </div>
                    <div className={activeTab === 'tab2' ? 'flex flex-wrap justify-center' : 'hidden'}>
                        {backs.map((back, index) => {
                            return (
                                <TechnoCards
                                    key={index}
                                    {...back}
                                />
                            )
                        })}
                    </div>
                    <div className={activeTab === 'tab3' ? 'flex flex-wrap justify-center' : 'hidden'}>
                        {tools.map((tool, index) => {
                            return (
                                <TechnoCards
                                    key={index}
                                    {...tool}
                                />
                            )
                        })}
                    </div>
                </div>
            </>
            )
            }

            export default Skills
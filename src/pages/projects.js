import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import {motion, useMotionValue} from "framer-motion";
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-white shadow-2xl p-12
        dark:bg-dark dark:border-light
        lg:flex-col xl:p-10 lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='border-primary dark:bg-light
            xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
                  className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full rounded-2xl h-auto border-none"
                             whileHover={{scale: 1.05}}
                             whileTap={{scale: 0.95}}
                             transition={{duration: 0.2}}
                             priority
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className="text-blue-800 font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-4 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-4 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-4 flex items-center'>
                    <Link href={link} target="_blank"
                          className='btn-primary dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                          sm:text-base sm:px-4
                          '
                    >Voir le projet</Link>
                </div>
            </div>
        </article>
    );
}

const Project = ({type, title, img, link}) => {
    return (
        <article className='w-full flex flex-col items-center justify-between
        rounded-3xl border border-solid border-dark bg-white shadow-2xl p-8 relative
        dark:bg-dark dark:border-light xs:p-4
        '>
            <div className='border-primary dark:bg-light md:-right-2 md:-[101%] xs:[102%] xs:rounded-[1.5rem]'/>

            <Link href={link}
                  target="_blank"
                  className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="rounded-2xl w-full h-auto"
                             whileHover={{scale: 1.05}}
                             whileTap={{scale: 0.95}}
                             transition={{duration: 0.2}}
                             priority
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className="text-blue-800 font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-4 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-4 flex items-center'>
                    <Link
                        href={link}
                        target="_blank"
                        className='text-lg text-dark font-semibold underline dark:text-light md:text-base'
                    >Voir le projet</Link>
                </div>
            </div>
        </article>
    );
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Eric Tourvieille | Projets</title>
                <meta name="description" content="Eric Tourvieille Développeur Web Portfolio"/>
            </Head>
            <TransitionEffect />
            <main className='w-full mb-32 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text="Découvrir Mes Projets"
                        className="!text-7xl mb-20 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-36 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Event Management System"
                                img={project1}
                                summary="Une application de gestion d'événements utilisant la structure MERN (MangoDB, Express, React, Node.js) + Tailwind CSS et qui permet
                                aux utilisateurs de créer, planifier, gérer et participer à des événements pour une entreprise ou une organisation."
                                link="/"
                                type="Application Web"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Site French Elite Kitchen"
                                img={project2}
                                link="https://eliotourvieille.github.io/The-French-Kitchen/"
                                type="Template site web"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Site pour un Event Musical"
                                img={project3}
                                link="https://neptunia.sae.swiss/"
                                type="Site web événementiel"
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Site Socialeyes Swiss"
                                img={project4}
                                summary="Un site web pour une agence de marketing digital basée à Genève en Suisse. Le site est construit en HTML, CSS (via SASS) et Javascript."
                                link="https://www.socialeyes-swiss.ch/"
                                type="Conception site web"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
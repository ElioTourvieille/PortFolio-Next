import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/avatar.png";
import webDesign from "../../public/images/profile/design-creatif (1).png";
import webDevelopment from "../../public/images/profile/www.png";
import devApp from "../../public/images/profile/developpement-dapplications.png";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
    return (
        <>
            <Head>
                <title>Eric Tourvieille | A propos</title>
                <meta name="description" content="Eric Tourvieille Développeur Web Portfolio" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center mb-16
            dark:text-light
            ">
                <Layout className='pt-16'>
                    <AnimatedText text="Développeur Passionné !" className="!text-7xl mb-20 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"/>
                    <div className='grid w-full grid-cols-8 gap-12 sm:gap-6'>
                        <div className='col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-8 text-3xl font-bold uppercase text-dark/75 dark:text-light/75 '>A propos de moi</h2>
                            <p className='font-medium'>
                                Bonjour, je suis Eric Tourvieille, développeur Web et Python avec une passion pour la création d’expériences numériques belles, fonctionnelles et centrées sur l’utilisateur.
                                Je suis toujours à la recherche de nouvelles façons novatrices de concrétiser la vision de mes clients.
                            </p>

                            <p className='my-4 font-medium'>
                                Je crois que le développement web ne se limite pas à coder des choses – il s’agit de résoudre des problèmes et de créer des expériences intuitives et agréables pour les utilisateurs.
                            </p>

                            <p className='font-medium'>
                                Que je travaille sur un site web, une application ou un autre produit numérique, j’apporte mon engagement envers l’excellence et la pensée centrée sur l’utilisateur
                                à chaque projet sur lequel je travaille. J’ai hâte d’apporter mes compétences et ma passion à votre prochain projet.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                         xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='border-primary dark:bg-light' />
                            <Image src={profilePic} alt='Ma photo de profil' className='w-full h-auto bg-dark rounded-2xl dark:bg-black/70'
                                   priority
                                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between ml-8 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className='flex flex-col items-center justify-center'>
                                <span className='flex flex-col items-center justify-center'>
                                    <Image src={webDesign} alt='Web Design' className='w-1/4 mb-2 dark:bg-light dark:rounded-lg sm:w-1/3' />
                                </span>
                                <h2 className='text-xl text-dark/75 font-semibold dark:text-light lg:text-base sm:text-xs sm:text-center'>Web Design</h2>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <span className='flex flex-col items-center justify-center'>
                                    <Image src={webDevelopment} alt='Web Development' className='w-1/4 mb-2 dark:bg-light dark:rounded-lg sm:w-1/3' />
                                </span>
                                <h2 className='text-xl text-dark/75 font-semibold dark:text-light lg:text-base sm:text-xs sm:text-center'>Développement Web</h2>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <span className='flex flex-col items-center justify-center'>
                                    <Image src={devApp} alt='App Development' className='w-1/4 mb-2 dark:bg-light dark:rounded-lg sm:w-1/3' />
                                </span>
                                <h2 className='text-xl text-dark/75 font-semibold dark:text-light lg:text-base sm:text-xs sm:text-center'>Développement d'App</h2>
                            </div>

                        </div>
                    </div>
                    <Skills />
                </Layout>

            </main>
        </>
    );
};

export default About;
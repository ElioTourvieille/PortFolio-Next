import Head from 'next/head'
import Layout from "@/components/Layout";
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile-portfolio.png'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Eric Tourvieille | Développeur Web</title>
        <meta name="description" content="Eric Tourvieille Développeur Web Portfolio" />
      </Head>
        <TransitionEffect />
      <main className="flex items-start text-dark w-full min-h-screen dark:text-light">
          <Layout className='lg:pt-0 md:p-16 sm:pt-8'>
              <div className="flex items-center justify-between w-full xl:flex-row lg:flex-col">
                  <div className='w-[39%]'>
                      <Image src={profilePic} alt="Eric Tourvieille web developer" className='w-full h-auto outline-none xl:inline-block sm:hidden' loading="eager"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                  </div>
                  <div className='xl:w-1/2 flex flex-col items-center self-center lg:w-full'>
                      <AnimatedText text="Bonjour, Je suis Eric Tourvieille, Développeur Web !" className='xl:!text-left
                      lg:!text-center lg:!text-6xl md:!text-5xl xs:!text-xl
                      '/>
                      <p className='my-4 text-base font-medium'>
                          En tant que développeur full-stack, je me consacre à transformer vos idées en applications ou sites web innovants.
                          A l'aise avec les différentes technologies du développement web, ainsi que Python,
                          je suis capable de m'adapter à vos besoins et de vous proposer des solutions sur-mesure.
                      </p>
                      <div className='flex items-center self-start my-4'>
                          <Link href="/cvDev.pdf" target={"_blank"}
                          className="btn-primary dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light"
                          download={true}
                          >Mon CV <LinkArrow className={"!w-5 ml-2 mb-1"} />
                          </Link>
                          <Link href="/contact"
                          className="ml-6 text-lg font-medium capitalize text-dark underline dark:text-light"
                          >Me contacter</Link>
                      </div>
                  </div>
              </div>
          </Layout>

          <HireMe />
          <div className="absolute right-8 bottom-8 inline-block w-24">
              <Image src={lightBulb} alt="Light Logo" className="w-full h-auto"  />
          </div>
      </main>
    </>
  )

}

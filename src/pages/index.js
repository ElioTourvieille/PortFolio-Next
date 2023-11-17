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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
          <Layout className='lg:pt-0 md:pt-16 sm:pt-8'>
              <div className="flex items-center justify-between w-full lg:flex-col">
                  <div className='w-1/3 xl:w-2/5 lg:w-1/2 md:w-3/4'>
                      <Image src={profilePic} alt="Eric Tourvieille web developer" className='w-full h-auto lg:my-10 md:inline-block md:w-full md:my-5'
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                  </div>
                  <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                      <AnimatedText text="Bonjour, Je suis Eric Tourvieille, Développeur Web !" className='!text-left !text-6xl
                      xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                      '/>
                      <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                          En tant que développeur full-stack, je me consacre à transformer vos idées en applications ou sites web innovants.
                          A l'aise avec les différentes technologies du développement web, ainsi que Python,
                          je suis capable de m'adapter à vos besoins et de vous proposer des solutions sur-mesure.
                      </p>
                      <div className='flex items-center self-start my-4 lg:self-center'>
                          <Link href="/cvDev.pdf" target={"_blank"}
                          className="btn-primary dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                          md:p-2 md:px-4 md:text-base
                          "
                          download={true}
                          >Mon CV <LinkArrow className={"!w-5 ml-2 mb-1"} />
                          </Link>
                          <Link href="/contact"
                          className="ml-6 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                          >Me contacter</Link>
                      </div>
                  </div>
              </div>
          </Layout>

          <HireMe />
          <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
              <Image src={lightBulb} alt="Light Logo" className="w-full h-auto"  />
          </div>
      </main>
    </>
  )

}

import Link from "next/link";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";
import {InstagramIcon, LinkedInIcon, GithubIcon, SunIcon, MoonIcon} from "@/components/Icons";
import {motion} from "framer-motion";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import {useState} from "react";

const CustomLink = ({href, title, className="", toggle}) => {
    const router = useRouter();


    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[2px] inline-block bg-blue-800
            absolute left-0 -bottom-1.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.pathname === href ? 'w-full' : 'w-0'}
            dark:bg-light`}

            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(href)
        toggle()
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`
            h-[2px] inline-block bg-light
            absolute left-0 -bottom-1.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.pathname === href ? 'w-full' : 'w-0'}
            dark:bg-blue-800`}

            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher("")
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 mb-8 font-medium flex items-center justify-between
        dark:text-light
        '>

        <button className="flex-col justify-center items-center flex lg:hidden" onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `}></span>
        </button>

            <div className="w-full hidden justify-between items-center lg:flex">
            <nav>
                <CustomLink href='/' title="Accueil" className='mr-4' toggle={handleClick}/>
                <CustomLink href='/about' title="A propos" className='mx-4' toggle={handleClick}/>
                <CustomLink href='/projects' title="Projets" className='mx-4' toggle={handleClick}/>
                <CustomLink href='/contact' title="Contact" className='ml-4' toggle={handleClick}/>
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href='https://github.com/ElioTourvieille' target={"_blank"}
                          whileHover={{y:-3}}
                          whileTap={{scale:0.9}}
                          className='w-[2rem] mr-3'
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/eric-tourvieille-de-labrouhe-web-developer/' target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale:0.9}}
                    className='w-[2rem] mx-3'
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a href='/' target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale:0.9}}
                    className='w-[3rem] mx-3'
                >
                    <InstagramIcon />
                </motion.a>

                <button
                    onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                    className={`ml-3 w-8 flex items-center justify-center rounded-full p-1
                    ${mode === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}
                    `}>
                    {
                        mode === 'dark' ?
                            <SunIcon className={"fill-dark"} />
                            : <MoonIcon className={"fill-dark"}/>
                    }
                </button>
            </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                        animate={{scale:1, opacity:1}}
                        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
             bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href='/' title="Accueil" className='' toggle={handleClick}/>
                            <CustomMobileLink href='/about' title="A propos" className='' toggle={handleClick}/>
                            <CustomMobileLink href='/projects' title="Projets" className='' toggle={handleClick}/>
                            <CustomMobileLink href='/contact' title="Contact" className='' toggle={handleClick}/>
                        </nav>

                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a href='https://github.com/ElioTourvieille' target={"_blank"}
                                      whileHover={{y:-3}}
                                      whileTap={{scale:0.9}}
                                      className='w-[2rem] mr-3 bg-light rounded-full dark:bg-dark'
                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a href='https://www.linkedin.com/in/eric-tourvieille-de-labrouhe-web-developer/' target={"_blank"}
                                      whileHover={{y:-3}}
                                      whileTap={{scale:0.9}}
                                      className='w-[2rem] mx-3'
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href='/' target={"_blank"}
                                      whileHover={{y:-3}}
                                      whileTap={{scale:0.9}}
                                      className='w-[3rem] mx-3'
                            >
                                <InstagramIcon />
                            </motion.a>

                            <button
                                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                                className={`ml-3 w-8 flex items-center justify-center rounded-full p-1
                    ${mode === 'dark' ? 'bg-light text-dark' : 'bg-dark text-light'}
                    `}>
                                {
                                    mode === 'dark' ?
                                        <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"}/>
                                }
                            </button>
                        </nav>
                    </motion.div> : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
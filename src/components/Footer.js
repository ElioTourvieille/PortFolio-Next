import Layout from "@/components/Layout";

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-lg
        dark:text-light dark:border-light sm:text-base
        '>
            <Layout className='py-8 flex items-center justify-between xl:py-6 lg:flex-col lg:py-4'>
                <span>{new Date().getFullYear()} &copy; Tous droits réservés.</span>
                <p>Conçu et réalisé par Eric Tourvieille</p>
            </Layout>
        </footer>
    );
};

export default Footer;

const Layout = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-28 pb-20
         xl:px-32 lg:px-28 md:px-20 sm:px-12 sm:pb-0 ${className}`}>
            {children}
        </div>
    );
};

export default Layout;
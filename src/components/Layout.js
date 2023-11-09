import React from 'react';

const Layout = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark
         xl:px-28 lg:px-24 md:px-20 sm:px-16 ${className}`}>
            {children}
        </div>
    );
};

export default Layout;
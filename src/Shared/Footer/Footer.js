import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
<footer className="p-4 bg-gray-600 text-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Today's Task</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">Apps</Link>
            </li>
            <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
            </li>
            <li>
                <Link href="#" className="hover:underline">Contact</Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2022 <Link className="hover:underline">Today's Task™</Link>. All Rights Reserved.
    </span>
</footer>

    );
};

export default Footer;
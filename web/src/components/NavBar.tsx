import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { API_URL } from '../constants';

export const NavBar: React.FC = () => {
    // User Props
    interface UserNode {
        firstName: string;
        lastName: string;
        id: number;
        email: string;
        role: string;
        image: string;
    }

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState<UserNode | null>(null);

    const logout = async () => {
        const config: AxiosRequestConfig = {
            method: 'get',
            url: `${API_URL}/auth/logout`,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        };
        await axios(config);
        router.push('/auth/login');
    };

    // useEffect(() => {
    //     // GET User Config
    //     const config: AxiosRequestConfig = {
    //         method: 'get',
    //         url: `${API_URL}/auth/me`,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         withCredentials: true,
    //     };

    //     const getMe = async () => {
    //         console.log(process.env.VERCEL_GITHUB_COMMIT_REF);
    //         const result: AxiosResponse = await axios(config);
    //         console.log(result);
    //         setLoggedIn(result.data);
    //     };

    //     getMe();
    // }, []);

    return (
        // <!-- This example require Tailwind CSS v2.0+ -->
        <div className='relative bg-white'>
            <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
                <div>
                    <a href='#' className='flex'>
                        <span className='sr-only'>Workflow</span>
                        <img
                            className='w-auto h-8 sm:h-10'
                            src='https://coffeemap-resources.s3.eu-central-1.amazonaws.com/Logo.svg'
                            alt=''
                        />
                    </a>
                </div>
                <div className='-mr-2 -my-2 md:hidden'>
                    <button
                        type='button'
                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className='sr-only'>Open menu</span>
                        {/* <!-- Heroicon name: menu --> */}
                        <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </div>
                <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
                    <nav className='flex space-x-10'>
                        <a
                            href='#'
                            className='text-base font-medium text-gray-500 hover:text-gray-900'
                        >
                            Solution
                        </a>
                        <a
                            href='#'
                            className='text-base font-medium text-gray-500 hover:text-gray-900'
                        >
                            Docs
                        </a>
                        <a
                            href='#'
                            className='text-base font-medium text-gray-500 hover:text-gray-900'
                        >
                            Docs
                        </a>
                    </nav>
                    <div className='flex items-center md:ml-12'>
                        <Link href='/auth/login'>
                            <a
                                href='#'
                                className='text-base font-medium text-gray-500 hover:text-gray-900'
                            >
                                Sign in
                            </a>
                        </Link>
                        <Link href='/auth/register'>
                            <a
                                href='#'
                                className='ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700'
                            >
                                Sign up
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
            <Transition
                show={isOpen}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                        <div className='pt-5 pb-6 px-5'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <img
                                        className='h-8 w-auto'
                                        src='https://coffeemap-resources.s3.eu-central-1.amazonaws.com/Logo.svg'
                                        alt='Workflow'
                                    />
                                </div>
                                <div className='-mr-2'>
                                    <button
                                        type='button'
                                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <span className='sr-only'>
                                            Close menu
                                        </span>
                                        {/* Heroicon name: x */}
                                        <svg
                                            className='h-6 w-6'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <nav className='grid gap-y-8'>
                                    <a
                                        href='#'
                                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                                    >
                                        {/* Heroicon name: chart-bar */}
                                        <svg
                                            className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                            />
                                        </svg>
                                        <span className='ml-3 text-base font-medium text-gray-900'>
                                            Analytics
                                        </span>
                                    </a>
                                    <a
                                        href='#'
                                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                                    >
                                        {/* Heroicon name: cursor-click */}
                                        <svg
                                            className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                                            />
                                        </svg>
                                        <span className='ml-3 text-base font-medium text-gray-900'>
                                            Engagement
                                        </span>
                                    </a>
                                    <a
                                        href='#'
                                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                                    >
                                        {/* Heroicon name: shield-check */}
                                        <svg
                                            className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                                            />
                                        </svg>
                                        <span className='ml-3 text-base font-medium text-gray-900'>
                                            Security
                                        </span>
                                    </a>
                                    <a
                                        href='#'
                                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                                    >
                                        {/* Heroicon name: view-grid */}
                                        <svg
                                            className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                                            />
                                        </svg>
                                        <span className='ml-3 text-base font-medium text-gray-900'>
                                            Integrations
                                        </span>
                                    </a>
                                    <a
                                        href='#'
                                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                                    >
                                        {/* Heroicon name: refresh */}
                                        <svg
                                            className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                                            />
                                        </svg>
                                        <span className='ml-3 text-base font-medium text-gray-900'>
                                            Automations
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className='py-6 px-5 space-y-6'>
                            <div>
                                <Link href='/auth/register'>
                                    <a
                                        href='#'
                                        className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700'
                                    >
                                        Sign up
                                    </a>
                                </Link>
                                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                                    Existing customer?{' '}
                                    <Link href='/auth/login'>
                                        <a
                                            href='#'
                                            className='text-indigo-600 hover:text-indigo-500'
                                        >
                                            Sign in
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
};

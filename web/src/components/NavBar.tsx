import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

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
            url: 'http://localhost:4000/auth/logout',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        };
        await axios(config);
        router.push('/auth/login');
    };

    useEffect(() => {
        // GET User Config
        const config: AxiosRequestConfig = {
            method: 'get',
            url: 'http://localhost:4000/auth/me',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        };

        const getMe = async () => {
            const result: AxiosResponse = await axios(config);
            console.log(result);
            setLoggedIn(result.data);
        };

        getMe();
    }, []);

    let body = null;

    if (!isLoggedIn) {
        body = (
            <div className='flex font-serif'>
                <Link href='/auth/login'>
                    <a className='md:mr-5'>Login</a>
                </Link>
                <Link href='/auth/register'>
                    <a>Register</a>
                </Link>
            </div>
        );
    } else {
        body = (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button className='bg-gray-50 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>

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
                            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                        />
                    </svg>
                </button>

                <div className='ml-3 relative'>
                    <div>
                        <button
                            className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                            id='user-menu'
                            aria-haspopup='true'
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                            <span className='sr-only'>Open user menu</span>
                            <img
                                className='h-8 w-8 rounded-full'
                                src={isLoggedIn.image}
                                alt=''
                            />
                        </button>
                    </div>
                    {/* 
                                Profile dropdown panel, show/hide based on dropdown state.
                                Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
                            */}
                    <Transition
                        show={isProfileOpen}
                        enter='transition ease-out duration-100'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <div
                            className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='user-menu'
                        >
                            <Link href='/profile'>
                                <a
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    role='menuitem'
                                >
                                    Your Profile
                                </a>
                            </Link>
                            <a
                                onClick={logout}
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                role='menuitem'
                            >
                                Sign out
                            </a>
                        </div>
                    </Transition>
                </div>
            </div>
        );
    }

    return (
        <div className='fixed w-full'>
            <nav className='bg-gray-50 shadow-md'>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                            {/* Mobile Menu Button */}
                            <button
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                aria-expanded='false'
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className='sr-only'>Open main menu</span>
                                <svg
                                    className='block h-6 w-6'
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
                                <svg
                                    className='hidden h-6 w-6'
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
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='flex-shrink-0 flex items-center'>
                                <Link href='/'>
                                    <img
                                        className='block lg:hidden h-8 w-auto'
                                        src='https://coffeemap-resources.s3.eu-central-1.amazonaws.com/Logo.svg'
                                        alt='Coffeemap'
                                    />
                                </Link>
                                <Link href='/'>
                                    <a>
                                        <img
                                            className='hidden lg:block h-8 w-auto'
                                            src='https://coffeemap-resources.s3.eu-central-1.amazonaws.com/Brand.svg'
                                            alt='Coffeemap'
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className='hidden sm:block sm:ml-6 font-serif'>
                                <div className='flex space-x-4'>
                                    <Link href='/overview'>
                                        <a className='bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>
                                            Dashboard
                                        </a>
                                    </Link>
                                    <Link href='/auth/login'>
                                        <a className='hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                            Login
                                        </a>
                                    </Link>
                                    <Link href='/auth/register'>
                                        <a className='hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                            Register
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {body}
                    </div>
                </div>
                {/* 
                Mobile menu, toggle classes based on menu state.
                Menu open: "block", Menu closed: "hidden" 
             */}
                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className='px-2 pt-2 pb-3 space-y-1 font-serif'>
                        <Link href='/overview'>
                            <a className='bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'>
                                Dashboard
                            </a>
                        </Link>
                        <Link href='/auth/login'>
                            <a className='text-gray-700 hover:bg-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                Login
                            </a>
                        </Link>
                        <Link href='/auth/register'>
                            <a className='text-gray-700 hover:bg-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                Register
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

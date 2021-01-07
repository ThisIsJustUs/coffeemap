import Head from 'next/head';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Welcome to Coffeemap</title>
            </Head>
            <div className=''>
                <NavBar />
                <div className='pt-16 pb-16 sm:pb-24'>
                    <div className='max-w-7xl px-4 sm:px-6'></div>
                    <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-36 font-serif'>
                        <div className='text-center'>
                            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                                <span className='block xl:inline'>
                                    Data to enrich your{' '}
                                </span>
                                <span className='block text-green-600 xl:inline'>
                                    online business
                                </span>
                            </h1>
                            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat
                                aliqua.
                            </p>
                            <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                                <div className='rounded-md shadow'>
                                    <a
                                        href='#'
                                        className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
                                    >
                                        Discover
                                    </a>
                                </div>
                                <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                                    <a
                                        href='#'
                                        className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                                    >
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className='max-w-xl mx-auto px-4 sm:px-6 py-10 lg:max-w-7xl lg:px-8'>
                    <h2 className='sr-only'>A better way to send money.</h2>
                    <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8'>
                        <div>
                            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white'>
                                {/* <!-- Heroicon name: globe-alt --> */}
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                                    />
                                </svg>
                            </div>
                            <div className='mt-5 text-center'>
                                <dt className='text-lg leading-6 font-medium text-gray-900'>
                                    Competitive exchange rates
                                </dt>
                                <dd className='mt-2 text-base text-gray-500'>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque, iste dolor
                                    cupiditate blanditiis ratione.
                                </dd>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white'>
                                {/* <!-- Heroicon name: scale --> */}
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                                    />
                                </svg>
                            </div>
                            <div className='mt-5'>
                                <dt className='text-lg leading-6 font-medium text-gray-900'>
                                    No hidden fees
                                </dt>
                                <dd className='mt-2 text-base text-gray-500'>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque, iste dolor
                                    cupiditate blanditiis ratione.
                                </dd>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white'>
                                {/* <!-- Heroicon name: lightning-bolt --> */}
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M13 10V3L4 14h7v7l9-11h-7z'
                                    />
                                </svg>
                            </div>
                            <div className='mt-5'>
                                <dt className='text-lg leading-6 font-medium text-gray-900'>
                                    Transfers are instant
                                </dt>
                                <dd className='mt-2 text-base text-gray-500'>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque, iste dolor
                                    cupiditate blanditiis ratione.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
                <Footer />
            </div>
        </>
    );
}

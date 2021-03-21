import react from 'React';
import Link from 'next/link';

export const Hero: React.FC = () => {
    return (
        <div className='py-4 sm:pb-24'>
            <div className='max-w-7xl px-4 sm:px-6'></div>
            <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-36 font-serif'>
                <div className='text-center'>
                    <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                        <span className='block xl:inline'>
                            Find your favourite{' '}
                        </span>
                        <span className='block text-green-600 xl:inline'>
                            coffee places
                        </span>
                    </h1>
                    <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua.
                    </p>
                    <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                        <div className='rounded-md shadow'>
                            <Link href='/auth/register'>
                                <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'>
                                    Sign up
                                </a>
                            </Link>
                        </div>
                        <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                            <Link href='/overview'>
                                <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                                    Explore
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

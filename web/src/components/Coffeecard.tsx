import React from 'react';

type CoffeeCardProps = {
    image: string;
};

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ image }) => {
    return (
        <div className='flex flex-col border-b-2 border-gray-100'>
            <div className='flex justify-start mx-5 md:mx-10 py-7 md:py-10 flex-col md:flex-row'>
                <div>
                    <div
                        className='bg-center bg-cover md:w-56 md:h-full w-full h-48 rounded-md'
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                </div>
                <div className='md:mx-5 flex justify-between w-full mt-5'>
                    <div className='flex flex-col'>
                        <h4 className='text-sm text-gray-600 tracking-wide'>
                            Nice Coffee
                        </h4>
                        <h5 className='text-xl font-serif text-gray-800'>
                            Best Coffee you will have
                        </h5>
                        <div className='border-b-2 border-gray-200 w-12 my-2'></div>
                        <span className='text-gray-500 text-xs'>
                            Coffee • Espresso • Cappuchino
                        </span>
                        <div className='my-2'>
                            <span className='bg-green-100 text-green-800 text-xs rounded-2xl py-2 px-4'>
                                Organic Cups
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='w-6 text-gray-700'
                            >
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                            <span className='text-xs m-2'>4.8</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-end'>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='w-7 cursor-pointer'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                                />
                            </svg>
                        </div>
                        <div>
                            <h5 className='font-serif text-lg font-bold'>
                                1.2 <span className='font-normal'>miles</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

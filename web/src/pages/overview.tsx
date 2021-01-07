import { Box } from '@chakra-ui/react';
import React from 'react';
import { CoffeeCard } from '../components/Coffeecard';
import { NavBar } from '../components/NavBar';

const images = [
    'https://images.unsplash.com/reserve/DHHQbqc0RrWVf0uDNe5E_The%20Litte%20Cafe.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    'https://images.unsplash.com/photo-1602716012490-6351b2cf961b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1500338427510-5deb175987d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1354&q=80',
    'https://images.unsplash.com/photo-1589821386558-7dc77e787450?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1513258367773-db81373628fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80',
];

export default function Overview() {
    return (
        <div>
            <NavBar />
            <div className='flex justify-between bg-gray-50 pt-16'>
                {/* <!-- Static sidebar for desktop -->  */}
                <div
                    className='flex flex-col w-full'
                    style={{ width: '850px' }}
                >
                    {images.map((card) => {
                        return <CoffeeCard key={Math.random()} image={card} />;
                    })}
                </div>
                <main
                    className='bg-gray-200 overflow-hidden focus:outline-none fixed right-0 hidden md:block'
                    tabIndex={0}
                    style={{
                        height: 'calc(100vh - 4rem)',
                        width: 'calc(100% - 850px)',
                    }}
                >
                    <div className=''>
                        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                            {/* <!-- Replace with your content --> */}

                            {/* <!-- /End replace --> */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

import Head from 'next/head';
import Link from 'next/link';
import { NavBar } from '../components/NavBar';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Welcome to Coffeemap</title>
            </Head>
            <NavBar />
            <div className='flex justify-center flex-col'>
                <h1 className='md:text-8xl text-5xl text-center'>
                    Welcome to Coffeemap ☕️
                </h1>
                <div className='my-7 flex justify-center'>
                    <Link href='/login'>
                        <a className='text-blue-500 text-lg m-7'>Login</a>
                    </Link>
                    <Link href='/register'>
                        <a className='text-blue-500 text-lg m-7'>Register</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

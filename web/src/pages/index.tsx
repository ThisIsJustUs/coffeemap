import Head from 'next/head';
import Link from 'next/link';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Welcome to Coffeemap</title>
            </Head>
            <div className='flex justify-center h-screen items-center flex-col'>
                <h1 className='text-8xl'>Welcome to Coffeemap ☕️</h1>
                <div className='my-7'>
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

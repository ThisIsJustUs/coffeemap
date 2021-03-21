import Head from 'next/head';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/marketing/Hero';
import { Map } from '../components/marketing/Map';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Welcome to Coffeemap</title>
            </Head>
            <div className=''>
                <NavBar />
                <Hero />
                <Map />
                <Footer />
            </div>
        </>
    );
}

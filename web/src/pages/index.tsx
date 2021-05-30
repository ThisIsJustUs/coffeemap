import Head from 'next/head';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/marketing/Hero';
import { Map } from '../components/marketing/Map';
import { Features } from '../components/marketing/Features';
import { Partners } from '../components/marketing/Partners';
import { Newsletter } from '../components/marketing/Newsletter';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Welcome to Coffeemap</title>
            </Head>
            <div>
                <NavBar />
                <Hero />
                <Features />
                <Partners />
                <Newsletter />
                <Footer />
            </div>
        </>
    );
}

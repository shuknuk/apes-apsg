import Head from 'next/head';
import MoleculeAnimation from '../components/MoleculeAnimation';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-800 text-white">
            <Head>
                <title>Air Pollution Survival Guide</title>
            </Head>
            <section className="flex flex-col items-center justify-center h-screen text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">Air Pollution Survival Guide</h1>
                <p className="mt-4 text-lg md:text-xl animate-fadeIn">
                    Air pollution is the presence of harmful substances in the atmosphere, affecting human health, ecosystems, and climate.
                </p>
                <p className="mt-2 text-lg animate-fadeIn">
                    Primary pollutants are emitted directly (e.g., CO from cars), while secondary pollutants form through reactions (e.g., ozone from NOₓ and sunlight).
                </p>
                <MoleculeAnimation />
                <Link href="/pollutants/tropospheric-ozone" className="mt-6 text-blue-300 underline">
                    Explore Pollutants
                </Link>
            </section>
        </div>
    );
}
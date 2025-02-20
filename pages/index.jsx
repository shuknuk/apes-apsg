// index.jsx 
import Head from 'next/head';
import MoleculeAnimation from '../components/MoleculeAnimation';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900">
            <Head>
                <title>Air Pollution Survival Guide</title>
            </Head>
            
            <section className="flex flex-col items-center justify-center h-screen text-center px-6 space-y-6">
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-200 animate-slideUp">
                        Air Pollution Survival Guide
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-200/90 animate-fadeIn delay-100">
                        Understanding atmospheric threats through science and prevention
                    </p>
                    
                    <div className="border-t border-blue-400/30 w-24 mx-auto my-6 animate-scaleIn" />
                    
                    <MoleculeAnimation className="opacity-90 hover:opacity-100 transition-opacity duration-300" />
                    
                    <Link href="/pollutants/tropospheric-ozone" 
                        className="inline-block mt-8 px-8 py-3 rounded-full bg-blue-800/40 hover:bg-blue-700/50 backdrop-blur-sm 
                               border border-blue-400/30 text-cyan-200 hover:text-white transition-all 
                               animate-fadeIn delay-300 hover:shadow-blue-glow">
                        Explore Air Pollutants →
                    </Link>
                </div>
            </section>
        </div>
    );
}
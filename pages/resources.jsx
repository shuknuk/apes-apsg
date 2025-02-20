// resources.jsx 
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function Resources() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 p-6">
            <Head>
                <title>Resources - Air Pollution Survival Guide</title>
            </Head>
            
            <div className="max-w-4xl mx-auto">
                <Link href="/" 
                    className="group inline-flex items-center text-blue-300/80 hover:text-cyan-300 transition-colors mb-8">
                    <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-200 mb-8">
                    Scientific Resources
                </h1>

                <ul className="space-y-4">
                    {[
                        ['EPA Air Quality', 'https://epa.gov/air-quality'],
                        ['WHO Air Pollution', 'https://who.int/health-topics/air-pollution'],
                        ['NOAA Research', 'https://noaa.gov/air-pollution'],
                        ['NASA Earth Data', 'https://earthdata.nasa.gov']
                    ].map(([title, url]) => (
                        <li key={url} 
                            className="animate-slideUp hover:translate-x-2 transition-transform duration-300">
                            <a href={url} 
                               className="flex items-center p-4 rounded-xl bg-blue-900/30 hover:bg-blue-800/40 backdrop-blur-sm 
                                      border border-blue-400/20 text-gray-200 hover:text-white">
                                <span className="flex-1">{title}</span>
                                <span className="text-cyan-300/80 text-sm">Visit Resource →</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
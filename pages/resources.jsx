import Head from 'next/head';
import Link from 'next/link';

export default function Resources() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <Head>
                <title>Resources - Air Pollution Survival Guide</title>
            </Head>
            <Link href="/" className="text-blue-300 underline mb-4 inline-block">Back to Home</Link>
            <h1 className="text-3xl font-bold">For More Information</h1>
            <ul className="list-disc pl-5 mt-4 text-gray-300">
                <li><a href="https://epa.gov/air-quality" className="underline">EPA Air Quality</a></li>
                <li><a href="https://who.int/health-topics/air-pollution" className="underline">WHO Air Pollution</a></li>
                <li><a href="https://noaa.gov/air-pollution" className="underline">NOAA</a></li>
                <li><a href="https://earthdata.nasa.gov" className="underline">NASA Earth Data</a></li>
            </ul>
        </div>
    );
}
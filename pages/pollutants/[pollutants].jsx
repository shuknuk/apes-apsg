// [pollutants].jsx 
import { useRouter } from 'next/router';
import { pollutants } from '../../lib/pollutants';
import PollutantCard from '../../components/PollutantCard';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function PollutantPage() {
    const router = useRouter();
    const { pollutant } = router.query;
    const data = pollutants.find(p => p.name.toLowerCase().replace(/\s/g, '-') === pollutant);

    if (!data) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 p-6">
            <div className="max-w-4xl mx-auto">
                <Link href="/" 
                    className="group inline-flex items-center text-blue-300/80 hover:text-cyan-300 transition-colors mb-8">
                    <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <PollutantCard {...data} />
            </div>
        </div>
    );
}
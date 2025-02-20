import { useRouter } from 'next/router';
import { pollutants } from '../../lib/pollutants';
import PollutantCard from '../../components/PollutantCard';
import Link from 'next/link';

export default function PollutantPage() {
    const router = useRouter();
    const { pollutant } = router.query;
    const data = pollutants.find(p => p.name.toLowerCase().replace(/\s/g, '-') === pollutant);

    if (!data) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <Link href="/" className="text-blue-300 underline mb-4 inline-block">Back to Home</Link>
            <PollutantCard {...data} />
        </div>
    );
}

export async function getStaticPaths() {
    const paths = pollutants.map(p => ({
        params: { pollutant: p.name.toLowerCase().replace(/\s/g, '-') },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    return { props: {} };
}
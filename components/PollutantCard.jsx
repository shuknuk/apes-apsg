import MoleculeAnimation from './MoleculeAnimation';

export default function PollutantCard({ name, formula, type, criteria, sources, issues, solutions }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-white">{name} ({formula})</h2>
            <p className="text-gray-300">Type: {type}</p>
            <p className="text-gray-300">Criteria Pollutant: {criteria ? 'Yes' : 'No'}</p>
            <p className="text-gray-300">Sources: {sources}</p>
            <p className="text-gray-300">Issues: {issues}</p>
            <p className="text-gray-300">Solutions: {solutions}</p>
            <MoleculeAnimation />
        </div>
    );
}
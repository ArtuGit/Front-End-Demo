import '../../App.css'

interface StatItemProps {
    label: string;
    value: string | number;
}

export const StatItem: React.FC<StatItemProps> = ({ label, value }: StatItemProps) => {
    return (
        <div className="my-4 flex flex-wrap justify-center">
            <div className="font-robomo mx-8">{label}: <span className="font-bold">{value}</span></div>
        </div>
    );
};
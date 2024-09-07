import '../../App.css'

interface StatItemProps {
    label: string;
    value: string | number;
}

export const StatItem: React.FC<StatItemProps> = ({ label, value }: StatItemProps) => {
    return (
        <li className="font-robomo mx-8"><span>{label}</span>: <span className="font-bold">{value}</span></li>
    );
};
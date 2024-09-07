import '../../App.css'

interface StatLineProps {
    children: React.ReactNode;
}

export const StatLine: React.FC<StatLineProps> = ({ children }: StatLineProps) => {
    return (
            <ul className="font-robomo mx-8 my-4 flex flex-wrap justify-center">
                {children}
            </ul>
);
};
import '../../App.css'

interface StatLineProps {
    children: React.ReactNode;
}

export const StatLine: React.FC<StatLineProps> = ({ children }: StatLineProps) => {
    return (
        <div className="my-4 flex flex-wrap justify-center">
            {children}
        </div>
    );
};
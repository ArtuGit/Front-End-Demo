import '../../App.css'
import { Box } from "../BaseBox/Box.tsx";

interface BoxesProps {
    amount: number;
}

export const Boxes = ({ amount }: BoxesProps) => {
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        boxes.push(<Box key={i} />);
    }

    return (
        <div className="flex flex-wrap justify-center items-center min-h-screen">
            {boxes}
        </div>
    );
};
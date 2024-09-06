import '../../App.css'
import { Box } from "../Box/Box.tsx";

interface BoxesProps {
    amount: number;
}

export const Boxes = ({ amount }: BoxesProps) => {
    const boxes = [];
    for (let i = 0; i < amount; i++) {
        boxes.push(<Box key={i} />);
    }

    return (
        <div className="flex-col flex-nowrap">
            <div className="flex flex-wrap justify-center items-center">
                {boxes}
            </div>
            <div className="my-4 flex flex-wrap justify-center">
                <div className="font-robomo mx-8">Total: <span className="font-bold">{amount}</span></div>
                <div className="font-robomo mx-8">Selected: <span className="font-bold">0</span></div>
            </div>
        </div>
    );
};
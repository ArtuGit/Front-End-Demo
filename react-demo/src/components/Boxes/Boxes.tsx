import '../../App.css'
import { Box } from "../Box/Box.tsx";
import {useState} from "react";

interface BoxesProps {
    amount: number;
}

export const Boxes = ({ amount }: BoxesProps) => {
    const [boxes, setBoxes] = useState<boolean[]>(new Array(amount).fill(false));

    const  setBoxesItem = (index: number) => {
        setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes[index] = !newBoxes[index];
            return newBoxes;
        });
    }

    const boxesComponents = [];

    for (let i = 0; i < amount; i++) {
        boxesComponents.push(<Box key={i} index={i} isSelected={boxes[i]} setBoxesItem={setBoxesItem}/>);
    }

    return (
        <div className="flex-col flex-nowrap">
            <div className="flex flex-wrap justify-center items-center">
                {boxesComponents}
            </div>
            <div className="my-4 flex flex-wrap justify-center">
                <div className="font-robomo mx-8">Total: <span className="font-bold">{amount}</span></div>
                <div className="font-robomo mx-8">Selected: <span className="font-bold">{boxes.filter(isSelected => isSelected).length}</span></div>
            </div>
        </div>
    );
};
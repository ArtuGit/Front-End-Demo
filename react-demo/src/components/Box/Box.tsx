import '../../App.css'
import { useState } from "react";

interface BoxProps {
    index: number;
}

export const Box = ({ index }: BoxProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <div
            className={`w-52 h-52 mx-4 my-4 border-4 border-dashed border-gray-200 rounded-lg ${isSelected ? 'bg-blue-400' : ''}`}
            onClick={() => setIsSelected((selected) => !selected)}
        >
        </div>
    );
};
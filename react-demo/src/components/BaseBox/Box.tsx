import '../../App.css'
import {useState} from "react";

export const Box = () => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <div
          className={`w-52 h-52 mx-4 border-4 border-dashed border-gray-200 rounded-lg ${isSelected ? 'bg-blue-400' : ''}`}
          onClick={() => setIsSelected(!isSelected)}
        >
        </div>
    );
};

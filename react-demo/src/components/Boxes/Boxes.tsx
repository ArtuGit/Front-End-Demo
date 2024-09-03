import '../../App.css'
import { Box } from "../BaseBox/Box.tsx";

export const Boxes = () => {
    const boxes = [];
    for (let i = 0; i < 19; i++) {
        boxes.push(<Box key={i} />);
    }

    return (
        <div className="flex flex-wrap justify-center items-start h-full">
            {boxes}
        </div>
    );
};
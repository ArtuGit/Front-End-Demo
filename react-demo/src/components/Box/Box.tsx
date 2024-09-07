import '../../App.css'

interface BoxProps {
    index: number;
    isSelected: boolean;
    setBoxesItem: (index: number) => void;
}

export const Box = ({ index, isSelected, setBoxesItem }: BoxProps) => {
    return (
        <div
            className={`w-52 h-52 mx-4 my-4 border-4 border-dashed border-gray-200 rounded-lg ${isSelected ? 'bg-blue-400' : ''}`}
            onClick={() => setBoxesItem(index)}
        >
        </div>
    );
};
import React from "react";

interface CardProps {
    title: string;
    imageUrl: string;
    onEdit: () => void;
    onDelete: () => void;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, onEdit, onDelete, onClick }) => {
    return (
        <div
            className="relative bg-gray-800 rounded-lg shadow-lg w-full overflow-hidden border border-blue-500 cursor-pointer"
            onClick={onClick}
        >
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
                <div className="absolute top-2 right-2 bg-black/60 p-1 rounded-full">
                    <img src="/assets/icons/play.svg" alt="Play Icon" className="w-6 h-6" />
                </div>
            </div>


            <div className="flex justify-between items-center bg-black p-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    className="flex items-center space-x-1 text-red-500 hover:text-red-600"
                >
                    <img src="/assets/icons/trash.svg" alt="Delete Icon" className="w-5 h-5" />
                    <span>Borrar</span>
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit();
                    }}
                    className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
                >
                    <img src="/assets/icons/edit.svg" alt="Edit Icon" className="w-5 h-5" />
                    <span>Editar</span>
                </button>
            </div>
        </div>
    );
};

export default Card;

import React from "react";
import { Trash2, Edit3, PlayCircle } from "lucide-react";

interface CardProps {
    title: string;
    imageUrl: string;
    videoUrl: string;
    onEdit: () => void;
    onDelete: () => void;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, onEdit, onDelete, onClick }) => {
    return (
        <div
            className="relative bg-gray-800 rounded-lg shadow-lg w-full overflow-hidden cursor-pointer group"
            onClick={onClick}
        >
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-42 rounded-lg object-cover transition duration-300 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white transition-all duration-300 group-hover:text-red-500" />
                </div>
            </div>

            <div className="flex justify-between items-center bg-black p-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    className="flex items-center space-x-1 text-white hover:text-red-600"
                >
                    <Trash2 className="w-5 h-5" />
                    <span>Borrar</span>
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit();
                    }}
                    className="flex items-center space-x-1 text-white hover:text-blue-600"
                >
                    <Edit3 className="w-5 h-5" />
                    <span>Editar</span>
                </button>
            </div>
        </div>
    );
};

export default Card;

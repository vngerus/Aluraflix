import React, { useState } from "react";

interface CardData {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    videoUrl: string;
}

interface EditCardProps {
    card: CardData;
    onSave: (updatedCard: CardData) => void;
    onCancel: () => void;
}

const EditCard: React.FC<EditCardProps> = ({ card, onSave, onCancel }) => {
    const [formData, setFormData] = useState<CardData>(card);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-900 text-white p-8 rounded-lg w-[90%] max-w-[500px]">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">EDITAR CARD:</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-bold mb-2">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Categoría</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700"
                        >
                            <option value="Front End">Front End</option>
                            <option value="Back End">Back End</option>
                            <option value="Innovación y Gestión">Innovación y Gestión</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Imagen</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Video</label>
                        <input
                            type="text"
                            name="videoUrl"
                            value={formData.videoUrl}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700"
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCard;
